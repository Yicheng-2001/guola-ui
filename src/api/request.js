import axios from "axios";
import cache from "@/plugins/cache";
import errorCode from "@/api/errorCode";

const TOKEN_KEY = "token";
const TOKEN_TIME_KEY = "token_at";
const TOKEN_TTL_MS = 24 * 60 * 60 * 1000;

function getValidToken() {
  const token = String(cache.local.get(TOKEN_KEY) || "").trim();
  if (!token) return "";

  const tokenAt = Number(cache.local.get(TOKEN_TIME_KEY));
  if (!Number.isFinite(tokenAt) || tokenAt <= 0) {
    // Strict mode: token without timestamp is treated as expired.
    cache.local.remove(TOKEN_KEY);
    cache.local.remove(TOKEN_TIME_KEY);
    return "";
  }

  if (Date.now() - tokenAt >= TOKEN_TTL_MS) {
    cache.local.remove(TOKEN_KEY);
    cache.local.remove(TOKEN_TIME_KEY);
    return "";
  }

  return token;
}

function showMessage(message, type = "error", duration) {
  const elMessage = globalThis?.ElMessage;
  if (elMessage) {
    elMessage({ message, type, duration });
    return;
  }
  if (type === "error") {
    console.error(message);
  } else {
    console.warn(message);
  }
}

function showNotificationError(title) {
  const elNotification = globalThis?.ElNotification;
  if (elNotification?.error) {
    elNotification.error({ title });
    return;
  }
  console.error(title);
}

// 创建axios实例
const service = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // 使用环境变量配置基础URL
  timeout: 1000 * 60, // 请求超时时间
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 是否需要设置token
    const isToken = (config.headers || {}).isToken === false;
    // 是否需要防止数据重复提交
    const isRepeatSubmit = (config.headers || {}).repeatSubmit === false;

    if (!isToken) {
      const token = getValidToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    if (
      !isRepeatSubmit &&
      (config.method?.toUpperCase() === "POST" || config.method?.toUpperCase() === "PUT")
    ) {
      const requestObj = {
        url: config.url,
        data: typeof config.data === "object" ? JSON.stringify(config.data) : config.data,
        time: new Date().getTime(),
      };
      const sessionObj = cache.session.getJSON("sessionObj");
      if (sessionObj === undefined || sessionObj === null || sessionObj === "") {
        cache.session.setJSON("sessionObj", requestObj);
      } else {
        const s_url = sessionObj.url; // 请求地址
        const s_data = sessionObj.data; // 请求数据
        const s_time = sessionObj.time; // 请求时间
        const interval = 1000; // 间隔时间(ms)，小于此时间视为重复提交
        if (s_data === requestObj.data && requestObj.time - s_time < interval && s_url === requestObj.url) {
          const message = "数据正在处理，请勿重复提交";
          console.warn(`[${s_url}]: ` + message);
          return Promise.reject(new Error(message));
        }
        cache.session.setJSON("sessionObj", requestObj);
      }
    }
    return config;
  },
  (error) => {
    console.error("API请求错误:", error);
    return Promise.reject(error);
  },
);

// 响应拦截器
service.interceptors.response.use(
  (res) => {
    // 二进制数据则直接返回
    if (res.request.responseType === "blob" || res.request.responseType === "arraybuffer") {
      return res.data;
    }
    // 未设置状态码则默认成功状态
    const code = res.data.code || 200;
    // 获取错误信息
    const msg = errorCode[code] || res.data.msg || errorCode.default;

    // 处理禁止错误提示的情况
    if (res.config.headers?.noError) {
      if (code === 200) {
        return Promise.resolve(res.data);
      }
      return Promise.reject(res.data);
    }

    // 正常错误提示处理
    if (code === 401) {
      showMessage("无效的会话，或者会话已过期，请重新登录。", "error");
      return Promise.reject(new Error("无效的会话，或者会话已过期，请重新登录。"));
    }
    if (code === 500) {
      showMessage(msg, "error");
      return Promise.reject(new Error(msg));
    }
    if (code === 601) {
      showMessage(msg, "warning");
      return Promise.reject(new Error(msg));
    }
    if (code !== 200) {
      showNotificationError(msg);
      return Promise.reject(new Error(msg));
    }
    return Promise.resolve(res.data);
  },
  (error) => {
    // 处理禁止错误提示的情况
    if (error.config?.headers?.noError) {
      return Promise.reject(error);
    }

    // 正常错误提示处理
    let message = error.message;
    if (message === "Network Error") {
      message = "服务端连接失败";
    } else if (message?.includes("timeout")) {
      message = "请求超时";
    } else if (message?.includes("Request failed with status code")) {
      message = "接口异常";
    }

    if (message && message !== "canceled") {
      showMessage(message, "error", 5 * 1000);
    }

    return Promise.reject(error);
  },
);

const request = (options) => {
  const { url, method, params, data, headers, responseType, ...config } = options;
  return service({
    url,
    method,
    params,
    data,
    ...config,
    responseType,
    headers: headers || {
      "Content-Type": "application/json",
    },
  });
};

export { request };
export default service;
