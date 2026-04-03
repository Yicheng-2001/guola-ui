const sessionCache = {
  set(key, value) {
    if (!key) return;
    sessionStorage.setItem(key, value);
  },
  get(key) {
    if (!key) return null;
    return sessionStorage.getItem(key);
  },
  remove(key) {
    if (!key) return;
    sessionStorage.removeItem(key);
  },
  setJSON(key, value) {
    if (!key) return;
    sessionStorage.setItem(key, JSON.stringify(value));
  },
  getJSON(key) {
    if (!key) return null;
    const value = sessionStorage.getItem(key);
    if (!value) return null;
    try {
      return JSON.parse(value);
    } catch {
      return null;
    }
  },
};

const localCache = {
  set(key, value) {
    if (!key) return;
    localStorage.setItem(key, value);
  },
  get(key) {
    if (!key) return null;
    return localStorage.getItem(key);
  },
  remove(key) {
    if (!key) return;
    localStorage.removeItem(key);
  },
  setJSON(key, value) {
    if (!key) return;
    localStorage.setItem(key, JSON.stringify(value));
  },
  getJSON(key) {
    if (!key) return null;
    const value = localStorage.getItem(key);
    if (!value) return null;
    try {
      return JSON.parse(value);
    } catch {
      return null;
    }
  },
};

const cache = {
  session: sessionCache,
  local: localCache,
};

export default cache;
