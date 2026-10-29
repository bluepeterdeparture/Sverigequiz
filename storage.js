window.SverigeQuizStorage = (() => {
  const PROFILE_KEY = "sverigequiz_profile_v1";
  const RESULTS_KEY = "sverigequiz_results_v1";
  const REVIEW_KEY = "sverigequiz_review_v1";
  const EXAM_RESULTS_KEY = "sverigequiz_exam_results_v1";
  const EXAM_USED_KEY = "sverigequiz_exam_used_v1";

  function makeId(prefix) {
    if (window.crypto && crypto.randomUUID) {
      return `${prefix}_${crypto.randomUUID()}`;
    }
    return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2)}`;
  }

  function getProfile() {
    const raw = localStorage.getItem(PROFILE_KEY);
    return raw ? JSON.parse(raw) : null;
  }

  function saveProfile(displayName) {
    const existing = getProfile();
    const profile = existing || {
      userId: makeId("u"),
      createdAt: new Date().toISOString()
    };

    profile.displayName = displayName.trim() || "Användare";
    localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
    return profile;
  }

  function getResults() {
    const raw = localStorage.getItem(RESULTS_KEY);
    return raw ? JSON.parse(raw) : [];
  }

  function saveResult(result) {
    const results = getResults();
    results.unshift(result);
    localStorage.setItem(
      RESULTS_KEY,
      JSON.stringify(results.slice(0, 50))
    );
  }

  function getReviewQuestionIds() {
    const raw = localStorage.getItem(REVIEW_KEY);
    return raw ? JSON.parse(raw) : [];
  }

  function saveReviewQuestionIds(ids) {
    const uniqueIds = [...new Set(ids)];
    localStorage.setItem(
      REVIEW_KEY,
      JSON.stringify(uniqueIds)
    );
  }

  function addReviewQuestion(questionId) {
    const ids = getReviewQuestionIds();

    if (!ids.includes(questionId)) {
      ids.push(questionId);
      saveReviewQuestionIds(ids);
    }
  }

  function removeReviewQuestion(questionId) {
    const ids = getReviewQuestionIds().filter(
      id => id !== questionId
    );

    saveReviewQuestionIds(ids);
  }

  function getExamResults() {
    const raw = localStorage.getItem(EXAM_RESULTS_KEY);
    return raw ? JSON.parse(raw) : [];
  }

  function saveExamResult(result) {
    const results = getExamResults();
    results.unshift(result);

    localStorage.setItem(
      EXAM_RESULTS_KEY,
      JSON.stringify(results.slice(0, 50))
    );
  }

  function getExamUsedQuestionIds() {
    const raw = localStorage.getItem(EXAM_USED_KEY);
    return raw ? JSON.parse(raw) : [];
  }

  function saveExamUsedQuestionIds(ids) {
    const uniqueIds = [...new Set(ids)];

    localStorage.setItem(
      EXAM_USED_KEY,
      JSON.stringify(uniqueIds)
    );
  }

  function resetExamUsedQuestionIds() {
    localStorage.setItem(
      EXAM_USED_KEY,
      JSON.stringify([])
    );
  }

  return {
    makeId,
    getProfile,
    saveProfile,
    getResults,
    saveResult,
    getReviewQuestionIds,
    addReviewQuestion,
    removeReviewQuestion,
    getExamResults,
    saveExamResult,
    getExamUsedQuestionIds,
    saveExamUsedQuestionIds,
    resetExamUsedQuestionIds
  };
})();
