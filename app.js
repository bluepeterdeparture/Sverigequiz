(() => {
  const questions = window.SVERIGEQUIZ_QUESTIONS.filter(q => q.active);
  const storage = window.SverigeQuizStorage;

  const screens = {
    home: document.getElementById("screen-home"),
    quiz: document.getElementById("screen-quiz"),
    result: document.getElementById("screen-result"),
    history: document.getElementById("screen-history")
  };

  const displayName = document.getElementById("display-name");
  const profileSetup = document.getElementById("profile-setup");
  const profileSaved = document.getElementById("profile-saved");
  const greeting = document.getElementById("greeting");
  const latestResult = document.getElementById("latest-result");
  const progress = document.getElementById("progress");
  const questionText = document.getElementById("question-text");
  const optionsEl = document.getElementById("options");
  const feedback = document.getElementById("feedback");
  const feedbackTitle = document.getElementById("feedback-title");
  const feedbackText = document.getElementById("feedback-text");
  const sourceLink = document.getElementById("source-link");
  const resultScore = document.getElementById("result-score");
  const historyList = document.getElementById("history-list");

  let session = null;

  function showScreen(name) {
    Object.values(screens).forEach(s => s.classList.remove("active"));
    screens[name].classList.add("active");
  }

  function shuffle(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function renderProfile() {
    const profile = storage.getProfile();

    if (profile) {
      displayName.value = profile.displayName || "";
      greeting.textContent = `Hej ${profile.displayName} 👋`;
      profileSetup.classList.add("hidden");
      profileSaved.classList.remove("hidden");
    } else {
      displayName.value = "";
      profileSaved.classList.add("hidden");
      profileSetup.classList.remove("hidden");
    }
  }

  function ensureProfile() {
    let profile = storage.getProfile();
    if (!profile) {
      profile = storage.saveProfile(displayName.value || "Användare");
      renderProfile();
    }
    return profile;
  }

  function startQuiz() {
    const profile = ensureProfile();
    const selected = shuffle(questions).slice(0, Math.min(10, questions.length));

    session = {
      sessionId: storage.makeId("s"),
      userId: profile.userId,
      startedAt: new Date().toISOString(),
      questions: selected,
      currentIndex: 0,
      correctCount: 0,
      wrongQuestionIds: [],
      answered: false,
      currentChoices: []
    };

    showScreen("quiz");
    renderQuestion();
  }

  function renderQuestion() {
    const q = session.questions[session.currentIndex];

    progress.textContent = `Fråga ${session.currentIndex + 1} av ${session.questions.length}`;
    questionText.textContent = q.question;
    optionsEl.innerHTML = "";
    feedback.classList.add("hidden");
    session.answered = false;

    // Blanda svarsalternativen för varje fråga.
    session.currentChoices = shuffle(
      q.options.map((text, originalIndex) => ({
        text,
        isCorrect: originalIndex === q.correctIndex
      }))
    );

    session.currentChoices.forEach((choice, index) => {
      const button = document.createElement("button");
      button.className = "option-btn";
      button.textContent = `${String.fromCharCode(65 + index)}. ${choice.text}`;
      button.dataset.correct = choice.isCorrect ? "true" : "false";
      button.addEventListener("click", () => answerQuestion(choice, button));
      optionsEl.appendChild(button);
    });
  }

  function answerQuestion(choice, selectedButton) {
    if (session.answered) return;
    session.answered = true;

    const q = session.questions[session.currentIndex];
    const buttons = [...optionsEl.querySelectorAll(".option-btn")];

    buttons.forEach(btn => {
      btn.disabled = true;
      if (btn.dataset.correct === "true") btn.classList.add("correct");
    });

    if (choice.isCorrect) {
      session.correctCount += 1;
      feedbackTitle.textContent = "✅🥳 Rätt!";
    } else {
      session.wrongQuestionIds.push(q.id);
      selectedButton.classList.add("wrong");
      feedbackTitle.textContent = "❌🙂 Inte riktigt";
    }

    feedbackText.textContent = q.explanationSv;
    sourceLink.textContent = `Läs mer: Kapitel ${q.chapter} – ${q.section}`;
    sourceLink.classList.remove("hidden");
    feedback.classList.remove("hidden");
  }

  function nextQuestion() {
    if (session.currentIndex < session.questions.length - 1) {
      session.currentIndex += 1;
      renderQuestion();
    } else {
      finishQuiz();
    }
  }

  function finishQuiz() {
    const count = session.questions.length;
    const percentage = Math.round((session.correctCount / count) * 100);

    const result = {
      resultId: storage.makeId("r"),
      sessionId: session.sessionId,
      userId: session.userId,
      date: new Date().toISOString(),
      questionCount: count,
      correctCount: session.correctCount,
      percentage,
      wrongQuestionIds: session.wrongQuestionIds,
      questionBankVersion: "2026-1"
    };

    storage.saveResult(result);
    resultScore.textContent = `${result.correctCount} av ${count} rätt – ${percentage} %`;
    session = null;
    refreshHome();
    showScreen("result");
  }

  function refreshHome() {
    renderProfile();

    const results = storage.getResults();
    if (!results.length) {
      latestResult.textContent = "Inga resultat ännu.";
      return;
    }

    const r = results[0];
    latestResult.textContent = `${r.correctCount}/${r.questionCount} – ${r.percentage} %`;
  }

  function renderHistory() {
    const results = storage.getResults();
    historyList.innerHTML = "";

    if (!results.length) {
      historyList.textContent = "Inga resultat ännu.";
      return;
    }

    results.slice(0, 10).forEach(r => {
      const row = document.createElement("div");
      row.className = "history-item";
      const date = new Date(r.date).toLocaleDateString("sv-SE");
      row.innerHTML = `<span>${date}</span><strong>${r.correctCount}/${r.questionCount} – ${r.percentage} %</strong>`;
      historyList.appendChild(row);
    });
  }

  document.getElementById("save-profile").addEventListener("click", () => {
    storage.saveProfile(displayName.value);
    refreshHome();
  });

  document.getElementById("edit-profile").addEventListener("click", () => {
    const profile = storage.getProfile();
    if (profile) displayName.value = profile.displayName || "";
    profileSaved.classList.add("hidden");
    profileSetup.classList.remove("hidden");
    displayName.focus();
  });

  document.getElementById("start-quiz").addEventListener("click", startQuiz);
  document.getElementById("restart-quiz").addEventListener("click", startQuiz);
  document.getElementById("next-question").addEventListener("click", nextQuestion);

  document.getElementById("show-history").addEventListener("click", () => {
    renderHistory();
    showScreen("history");
  });

  document.getElementById("result-history").addEventListener("click", () => {
    renderHistory();
    showScreen("history");
  });

  document.getElementById("back-home").addEventListener("click", () => {
    refreshHome();
    showScreen("home");
  });

  document.getElementById("quit-quiz").addEventListener("click", () => {
    session = null;
    showScreen("home");
  });

  sourceLink.addEventListener("click", () => {
    alert("I nästa version kan denna länk öppna rätt avsnitt i UHR:s material.");
  });

  refreshHome();
})();
