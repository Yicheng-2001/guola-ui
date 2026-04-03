import request from "./request";
import cache from "@/plugins/cache";

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
  cache.local.set("token", token || "");
}

export function clearLoginToken() {
  cache.local.remove("token");
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
