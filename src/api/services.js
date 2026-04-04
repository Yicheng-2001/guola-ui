import request from "./request";
import cache from "@/plugins/cache";

const TOKEN_KEY = "token";
const TOKEN_TIME_KEY = "token_at";
const TOKEN_TTL_MS = 24 * 60 * 60 * 1000;

function parseTokenAt(raw) {
  const value = Number(raw);
  return Number.isFinite(value) && value > 0 ? value : 0;
}

function isTokenExpired(tokenAt) {
  if (!tokenAt) return false;
  return Date.now() - tokenAt >= TOKEN_TTL_MS;
}

export function sendSms(email) {
  return request({
    url: "/v1/auth/send/email",
    headers: {
      isToken: false,
    },
    method: "post",
    data: { email },
  });
}

export function registerByEmail(data) {
  return request({
    url: "/v1/auth/register/email",
    headers: {
      isToken: false,
    },
    method: "post",
    data,
  });
}

export function loginByPassword(data) {
  return request({
    url: "/v1/auth/login",
    headers: {
      isToken: false,
      noError: true,
    },
    method: "post",
    data,
  });
}

export function getCurrentUserProfile() {
  return request({
    url: "/v1/users/me",
    method: "get",
    headers: {
      noError: true,
    },
  });
}

export function getCreditBalance() {
  return request({
    url: "/v1/credit/balance",
    method: "get",
    headers: {
      noError: true,
    },
  });
}

export function getCreditTransactions() {
  return request({
    url: "/v1/credit/transactions",
    method: "get",
    headers: {
      noError: true,
    },
  });
}

export function creditDailySignIn() {
  return request({
    url: "/v1/credit/sign-in",
    method: "post",
    headers: {
      noError: true,
    },
  });
}

export function getPublics(page, page_size) {
  return request({
    url: "/v1/publics",
    headers: {
      isToken: false,
    },
    method: "get",
    params: { page, page_size },
  });
}

export function setLoginToken(token) {
  const value = String(token || "").trim();
  if (!value) {
    clearLoginToken();
    return;
  }
  cache.local.set(TOKEN_KEY, value);
  cache.local.set(TOKEN_TIME_KEY, String(Date.now()));
}

export function getLoginToken() {
  const token = String(cache.local.get(TOKEN_KEY) || "").trim();
  if (!token) return "";

  const tokenAt = parseTokenAt(cache.local.get(TOKEN_TIME_KEY));
  // Strict mode: token without timestamp is treated as expired.
  if (!tokenAt) {
    clearLoginToken();
    return "";
  }

  if (isTokenExpired(tokenAt)) {
    clearLoginToken();
    return "";
  }

  return token;
}

export function clearLoginToken() {
  cache.local.remove(TOKEN_KEY);
  cache.local.remove(TOKEN_TIME_KEY);
}

export function setLoginUserProfile(profile) {
  cache.local.setJSON("user_profile", profile || {});
}

export function getLoginUserProfile() {
  return cache.local.getJSON("user_profile") || null;
}

export function clearLoginUserProfile() {
  cache.local.remove("user_profile");
}
