window.SverigeQuizStorage = (() => {
  const PROFILE_KEY = "sverigequiz_profile_v1";
  const RESULTS_KEY = "sverigequiz_results_v1";

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
    localStorage.setItem(RESULTS_KEY, JSON.stringify(results.slice(0, 50)));
  }

  return { makeId, getProfile, saveProfile, getResults, saveResult };
})();
