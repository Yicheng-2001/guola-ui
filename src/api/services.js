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
