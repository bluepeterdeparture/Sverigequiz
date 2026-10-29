(() => {
  const questions = window.SVERIGEQUIZ_QUESTIONS.filter(q => q.active);
  const storage = window.SverigeQuizStorage;

  const TRAINING_COUNT = 10;
  const EXAM_COUNT = 40;
  const EXAM_PASS_SCORE = 28;

  const screens = {
    home: document.getElementById("screen-home"),
    quiz: document.getElementById("screen-quiz"),
    result: document.getElementById("screen-result"),
    examResult: document.getElementById("screen-exam-result"),
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

  const studyActions = document.getElementById("study-actions");
  const studyBox = document.getElementById("study-box");
  const studyReference = document.getElementById("study-reference");

  const feedback = document.getElementById("feedback");
  const feedbackTitle = document.getElementById("feedback-title");
  const feedbackText = document.getElementById("feedback-text");
  const sourceLink = document.getElementById("source-link");

  const nextQuestionButton =
    document.getElementById("next-question");

  const examNextQuestionButton =
    document.getElementById("exam-next-question");

  const resultScore = document.getElementById("result-score");
  const historyList = document.getElementById("history-list");

  const examResultEmoji =
    document.getElementById("exam-result-emoji");

  const examResultTitle =
    document.getElementById("exam-result-title");

  const examResultScore =
    document.getElementById("exam-result-score");

  const examResultMessage =
    document.getElementById("exam-result-message");

  const practiceExamErrorsButton =
    document.getElementById("practice-exam-errors");

  let session = null;
  let lastExamWrongQuestionIds = [];

  function showScreen(name) {
    Object.values(screens).forEach(
      screen => screen.classList.remove("active")
    );

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
      profile = storage.saveProfile(
        displayName.value || "Användare"
      );

      renderProfile();
    }

    return profile;
  }

  function selectTrainingQuestions() {
    const reviewIds = new Set(
      storage.getReviewQuestionIds()
    );

    const reviewQuestions = questions.filter(
      q => reviewIds.has(q.id)
    );

    const selectedReviewQuestions = shuffle(
      reviewQuestions
    ).slice(0, 3);

    const selectedReviewIds = new Set(
      selectedReviewQuestions.map(q => q.id)
    );

    const ordinaryQuestions = questions.filter(
      q => !selectedReviewIds.has(q.id)
    );

    const ordinaryCount = Math.min(
      TRAINING_COUNT - selectedReviewQuestions.length,
      ordinaryQuestions.length
    );

    const selectedOrdinaryQuestions = shuffle(
      ordinaryQuestions
    ).slice(0, ordinaryCount);

    return {
      questions: shuffle([
        ...selectedReviewQuestions,
        ...selectedOrdinaryQuestions
      ]),
      reviewQuestionIds: [...selectedReviewIds]
    };
  }

  function startQuiz() {
    const profile = ensureProfile();
    const selection = selectTrainingQuestions();

    session = {
      mode: "training",
      sessionId: storage.makeId("s"),
      userId: profile.userId,
      startedAt: new Date().toISOString(),
      questions: selection.questions,
      reviewQuestionIds: selection.reviewQuestionIds,
      currentIndex: 0,
      correctCount: 0,
      wrongQuestionIds: [],
      answered: false,
      currentChoices: []
    };

    studyActions.classList.remove("hidden");
    examNextQuestionButton.classList.add("hidden");

    showScreen("quiz");
    renderQuestion();
  }

  function buildBalancedExamPool(availableQuestions) {
    const byChapter = new Map();

    availableQuestions.forEach(q => {
      if (!byChapter.has(q.chapter)) {
        byChapter.set(q.chapter, []);
      }

      byChapter.get(q.chapter).push(q);
    });

    const selected = [];
    const selectedIds = new Set();

    const chapters = [...byChapter.keys()].sort(
      (a, b) => a - b
    );

    const basePerChapter = Math.floor(
      EXAM_COUNT / chapters.length
    );

    chapters.forEach(chapter => {
      const chapterQuestions = shuffle(
        byChapter.get(chapter)
      );

      chapterQuestions
        .slice(0, basePerChapter)
        .forEach(q => {
          selected.push(q);
          selectedIds.add(q.id);
        });
    });

    const remainingCount =
      EXAM_COUNT - selected.length;

    if (remainingCount > 0) {
      const remaining = shuffle(
        availableQuestions.filter(
          q => !selectedIds.has(q.id)
        )
      );

      remaining
        .slice(0, remainingCount)
        .forEach(q => {
          selected.push(q);
          selectedIds.add(q.id);
        });
    }

    return shuffle(selected);
  }

  function selectExamQuestions() {
    let usedIds = new Set(
      storage.getExamUsedQuestionIds()
    );

    let available = questions.filter(
      q => !usedIds.has(q.id)
    );

    if (available.length < EXAM_COUNT) {
      storage.resetExamUsedQuestionIds();
      usedIds = new Set();
      available = [...questions];
    }

    const selected = buildBalancedExamPool(available);

    const updatedUsedIds = [
      ...usedIds,
      ...selected.map(q => q.id)
    ];

    storage.saveExamUsedQuestionIds(
      updatedUsedIds
    );

    return selected;
  }

  function startExam() {
    const profile = ensureProfile();
    const selected = selectExamQuestions();

    session = {
      mode: "exam",
      sessionId: storage.makeId("e"),
      userId: profile.userId,
      startedAt: new Date().toISOString(),
      questions: selected,
      reviewQuestionIds: [],
      currentIndex: 0,
      correctCount: 0,
      wrongQuestionIds: [],
      answered: false,
      currentChoices: []
    };

    studyActions.classList.add("hidden");
    studyBox.classList.add("hidden");
    feedback.classList.add("hidden");

    showScreen("quiz");
    renderQuestion();
  }

  function renderQuestion() {
    const q = session.questions[session.currentIndex];

    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }

    const isExam = session.mode === "exam";

    const isReviewQuestion =
      !isExam &&
      session.reviewQuestionIds.includes(q.id);

    progress.textContent = isExam
      ? `Skarpt prov · Fråga ${session.currentIndex + 1} av ${session.questions.length}`
      : `Fråga ${session.currentIndex + 1} av ${session.questions.length}` +
        (isReviewQuestion ? " · 🔁 Repetition" : "");

    questionText.textContent = q.question;

    optionsEl.innerHTML = "";
    feedback.classList.add("hidden");
    studyBox.classList.add("hidden");
    examNextQuestionButton.classList.add("hidden");

    session.answered = false;

    session.currentChoices = shuffle(
      q.options.map((text, originalIndex) => ({
        text,
        isCorrect: originalIndex === q.correctIndex
      }))
    );

    session.currentChoices.forEach((choice, index) => {
      const button = document.createElement("button");

      button.className = "option-btn";

      button.textContent =
        `${String.fromCharCode(65 + index)}. ${choice.text}`;

      button.dataset.correct =
        choice.isCorrect ? "true" : "false";

      button.addEventListener(
        "click",
        () => answerQuestion(choice, button)
      );

      optionsEl.appendChild(button);
    });
  }

  function answerQuestion(choice, selectedButton) {
    if (session.answered) return;

    session.answered = true;

    const q =
      session.questions[session.currentIndex];

    const buttons = [
      ...optionsEl.querySelectorAll(".option-btn")
    ];

    buttons.forEach(btn => {
      btn.disabled = true;
    });

    if (choice.isCorrect) {
      session.correctCount += 1;
    } else {
      session.wrongQuestionIds.push(q.id);
    }

    if (session.mode === "exam") {
      selectedButton.classList.add("selected");
      examNextQuestionButton.classList.remove("hidden");
      return;
    }

    buttons.forEach(btn => {
      if (btn.dataset.correct === "true") {
        btn.classList.add("correct");
      }
    });

    if (choice.isCorrect) {
      storage.removeReviewQuestion(q.id);

      feedbackTitle.textContent =
        "✅ Rätt! Bra jobbat!";
    } else {
      storage.addReviewQuestion(q.id);

      selectedButton.classList.add("wrong");

      feedbackTitle.textContent =
        "❌ Inte riktigt.";
    }

    feedbackText.textContent =
      q.explanationSv;

    sourceLink.textContent = q.sourcePage
      ? `Läs mer: Kapitel ${q.chapter} – ${q.section}, sida ${q.sourcePage}`
      : `Läs mer: ${q.section}`;

    sourceLink.classList.remove("hidden");
    feedback.classList.remove("hidden");
  }

  function nextTrainingQuestion() {
    if (!session || session.mode !== "training") {
      return;
    }

    if (
      session.currentIndex <
      session.questions.length - 1
    ) {
      session.currentIndex += 1;
      renderQuestion();
    } else {
      finishQuiz();
    }
  }

  function nextExamQuestion() {
    if (!session || session.mode !== "exam") {
      return;
    }

    if (
      session.currentIndex <
      session.questions.length - 1
    ) {
      session.currentIndex += 1;
      renderQuestion();
    } else {
      finishExam();
    }
  }

  function finishQuiz() {
    const count = session.questions.length;

    const percentage = Math.round(
      (session.correctCount / count) * 100
    );

    const result = {
      resultId: storage.makeId("r"),
      sessionId: session.sessionId,
      userId: session.userId,
      date: new Date().toISOString(),
      questionCount: count,
      correctCount: session.correctCount,
      percentage,
      wrongQuestionIds: session.wrongQuestionIds,
      questionBankVersion:
        "2026-1-corr-2026-08-10-v2.0"
    };

    storage.saveResult(result);

    resultScore.textContent =
      `${result.correctCount} av ${count} rätt – ${percentage} %`;

    session = null;

    refreshHome();
    showScreen("result");
  }

  function finishExam() {
    const count = session.questions.length;

    const percentage = Math.round(
      (session.correctCount / count) * 100
    );

    const passed =
      session.correctCount >= EXAM_PASS_SCORE;

    lastExamWrongQuestionIds = [
      ...session.wrongQuestionIds
    ];

    const result = {
      resultId: storage.makeId("er"),
      sessionId: session.sessionId,
      userId: session.userId,
      date: new Date().toISOString(),
      questionCount: count,
      correctCount: session.correctCount,
      percentage,
      passed,
      passScore: EXAM_PASS_SCORE,
      wrongQuestionIds: [
        ...session.wrongQuestionIds
      ],
      questionIds: session.questions.map(
        q => q.id
      ),
      questionBankVersion:
        "2026-1-corr-2026-08-10-v2.0"
    };

    storage.saveExamResult(result);

    examResultScore.textContent =
      `${result.correctCount} av ${count} rätt – ${percentage} %`;

    if (passed) {
      examResultEmoji.textContent = "🎉";
      examResultTitle.textContent = "Godkänt";
      examResultMessage.textContent =
        `Du nådde träningsgränsen ${EXAM_PASS_SCORE} av ${EXAM_COUNT}.`;
    } else {
      examResultEmoji.textContent = "📚";
      examResultTitle.textContent =
        "Inte godkänt den här gången";

      examResultMessage.textContent =
        `Träningsgränsen är ${EXAM_PASS_SCORE} av ${EXAM_COUNT}. Träna gärna på frågorna du hade fel på och försök igen.`;
    }

    if (lastExamWrongQuestionIds.length) {
      practiceExamErrorsButton.classList.remove(
        "hidden"
      );
    } else {
      practiceExamErrorsButton.classList.add(
        "hidden"
      );
    }

    session = null;

    refreshHome();
    showScreen("examResult");
  }

  function addExamErrorsToReview() {
    lastExamWrongQuestionIds.forEach(
      id => storage.addReviewQuestion(id)
    );

    startQuiz();
  }

  function refreshHome() {
    renderProfile();

    const results = storage.getResults();

    if (!results.length) {
      latestResult.textContent =
        "Inga resultat ännu.";
      return;
    }

    const r = results[0];

    latestResult.textContent =
      `${r.correctCount}/${r.questionCount} – ${r.percentage} %`;
  }

  function renderHistory() {
    const results = storage.getResults();

    historyList.innerHTML = "";

    if (!results.length) {
      historyList.textContent =
        "Inga resultat ännu.";
      return;
    }

    results.slice(0, 10).forEach(r => {
      const row =
        document.createElement("div");

      row.className = "history-item";

      const date = new Date(
        r.date
      ).toLocaleDateString("sv-SE");

      row.innerHTML =
        `<span>${date}</span>` +
        `<strong>${r.correctCount}/${r.questionCount} – ${r.percentage} %</strong>`;

      historyList.appendChild(row);
    });
  }

  document
    .getElementById("study-first")
    .addEventListener("click", () => {
      if (!session || session.mode !== "training") {
        return;
      }

      const q =
        session.questions[session.currentIndex];

      if (q.studyText) {
        studyReference.innerHTML =
          "<strong>" +
          (q.studyTitle || q.section) +
          "</strong><br><br>" +
          q.studyText +
          (
            q.studyRemember
              ? "<br><br><strong>Kom ihåg:</strong><br>" +
                q.studyRemember
              : ""
          ) +
          "<br><br><small>Källa: Sverige i fokus – " +
          q.section +
          (
            q.sourcePage
              ? ", sida " + q.sourcePage
              : ""
          ) +
          "</small>";
      } else {
        studyReference.textContent =
          q.sourcePage
            ? `Läs i Sverige i fokus: Kapitel ${q.chapter} – ${q.section}, sida ${q.sourcePage}.`
            : `Läs i Sverige i fokus: ${q.section}.`;
      }

      studyBox.classList.toggle("hidden");
    });

  document
    .getElementById("close-study")
    .addEventListener("click", () => {
      studyBox.classList.add("hidden");
    });

  function getSwedishVoice() {
    if (!("speechSynthesis" in window)) {
      return null;
    }

    const voices =
      window.speechSynthesis.getVoices();

    const swedishVoices = voices.filter(v =>
      (v.lang || "")
        .toLowerCase()
        .startsWith("sv")
    );

    if (!swedishVoices.length) {
      return null;
    }

    return (
      swedishVoices.find(v =>
        (v.lang || "").toLowerCase() === "sv-se"
      ) || swedishVoices[0]
    );
  }

  if ("speechSynthesis" in window) {
    window.speechSynthesis.getVoices();

    window.speechSynthesis.addEventListener(
      "voiceschanged",
      () => {
        window.speechSynthesis.getVoices();
      }
    );
  }

  document
    .getElementById("listen-question")
    .addEventListener("click", () => {
      if (
        !session ||
        session.mode !== "training" ||
        !("speechSynthesis" in window)
      ) {
        return;
      }

      window.speechSynthesis.cancel();

      const q =
        session.questions[session.currentIndex];

      const swedishVoice =
        getSwedishVoice();

      const utterance =
        new SpeechSynthesisUtterance(
          q.question
        );

      utterance.lang = "sv-SE";
      utterance.rate = 0.9;

      if (swedishVoice) {
        utterance.voice = swedishVoice;
      }

      window.speechSynthesis.speak(
        utterance
      );
    });

  document
    .getElementById("save-profile")
    .addEventListener("click", () => {
      storage.saveProfile(
        displayName.value
      );

      refreshHome();
    });

  document
    .getElementById("edit-profile")
    .addEventListener("click", () => {
      const profile =
        storage.getProfile();

      if (profile) {
        displayName.value =
          profile.displayName || "";
      }

      profileSaved.classList.add("hidden");
      profileSetup.classList.remove("hidden");
      displayName.focus();
    });

  document
    .getElementById("start-quiz")
    .addEventListener("click", startQuiz);

  document
    .getElementById("start-exam")
    .addEventListener("click", startExam);

  document
    .getElementById("restart-quiz")
    .addEventListener("click", startQuiz);

  nextQuestionButton.addEventListener(
    "click",
    nextTrainingQuestion
  );

  examNextQuestionButton.addEventListener(
    "click",
    nextExamQuestion
  );

  document
    .getElementById("new-exam")
    .addEventListener("click", startExam);

  practiceExamErrorsButton.addEventListener(
    "click",
    addExamErrorsToReview
  );

  document
    .getElementById("exam-home")
    .addEventListener("click", () => {
      refreshHome();
      showScreen("home");
    });

  document
    .getElementById("show-history")
    .addEventListener("click", () => {
      renderHistory();
      showScreen("history");
    });

  document
    .getElementById("result-history")
    .addEventListener("click", () => {
      renderHistory();
      showScreen("history");
    });

  document
    .getElementById("back-home")
    .addEventListener("click", () => {
      refreshHome();
      showScreen("home");
    });

  document
    .getElementById("quit-quiz")
    .addEventListener("click", () => {
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }

      session = null;
      refreshHome();
      showScreen("home");
    });

  sourceLink.addEventListener(
    "click",
    () => {
      window.open(
        "https://www.uhr.se/globalassets/_uhr.se/medborgarskapsprovet/utbildningsmaterial/sverige-i-fokus_.pdf",
        "_blank"
      );
    }
  );

  refreshHome();
})();
