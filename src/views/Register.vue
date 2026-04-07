<template>
  <div class="auth-page">
    <div class="auth-shell">
      <div class="auth-left">
        <div class="lang-wrap" ref="langMenuContainerRef">
          <button @click="toggleLangMenu" class="lang-trigger">
            <Globe class="icon-16" />
            <span>{{ currentLangLabel }}</span>
            <ChevronDown class="icon-14" />
          </button>
          <div class="lang-dropdown" :data-open="isLangMenuOpen ? 'true' : 'false'">
            <button
              @click="selectLang('zh')"
              class="lang-item"
              data-lang="zh"
              :data-active="currentLang === 'zh' ? 'true' : 'false'"
            >
              {{ t('lang_zh') }}
            </button>
            <button
              @click="selectLang('en')"
              class="lang-item"
              data-lang="en"
              :data-active="currentLang === 'en' ? 'true' : 'false'"
            >
              {{ t('lang_en') }}
            </button>
          </div>
        </div>

        <div class="auth-main">
          <h2 class="auth-title">{{ t('register_title') }}</h2>
          <p class="auth-copy">{{ t('register_subtitle') }}</p>

          <div class="form-col">
            <input
              type="email"
              v-model="phone"
              :placeholder="t('phone_number')"
              class="auth-input"
              name="register_account_no_fill"
              autocomplete="off"
              autocapitalize="none"
              autocorrect="off"
              spellcheck="false"
            />
            <div class="code-row">
              <input
                type="text"
                v-model="verificationCode"
                :placeholder="t('verification_code')"
                class="auth-input"
                name="register_code"
                autocomplete="off"
                autocapitalize="none"
                autocorrect="off"
                spellcheck="false"
              />
              <button @click="startCountdown" class="code-btn" :disabled="countdown > 0">
                {{ verifyButtonText }}
              </button>
            </div>
            <input
              type="password"
              v-model="password"
              :placeholder="passwordPlaceholderText"
              class="auth-input"
              name="register_password_no_fill"
              autocomplete="new-password"
              autocapitalize="none"
              autocorrect="off"
              spellcheck="false"
            />
            <input
              type="password"
              v-model="confirmPassword"
              :placeholder="confirmPasswordPlaceholderText"
              class="auth-input"
              name="register_confirm_password_no_fill"
              autocomplete="new-password"
              autocapitalize="none"
              autocorrect="off"
              spellcheck="false"
            />
            <button @click="handleRegister" class="primary-btn" :disabled="registering">
              <span>{{ t('register_now') }}</span>
              <Check class="icon-16" />
            </button>
          </div>

          <div class="auth-footline">
            <span>{{ t('have_account') }}</span>
            <span @click="$router.push('/login')" class="jump-link">{{ t('go_login') }}</span>
          </div>
        </div>
      </div>

      <div class="auth-right">
        <div class="auth-right-card">
          <p class="slogan">
            <span>{{ t('slogan_prefix') }}</span>
            <span id="mode-word">{{ isArtist ? t('mode_artist') : t('mode_storybook') }}</span>
            <span>{{ t('slogan_suffix') }}</span>
          </p>
          <p class="auth-copy">{{ t('slogan_en') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";
import { Globe, ChevronDown, Check } from "lucide-vue-next";
import { useLanguage } from "../i18n";
import { registerByEmail, sendSms } from "../api/services";

const { currentLang, setLanguage, getLanguageLabel, t } = useLanguage();
const router = useRouter();

const isArtist = true;
const isLangMenuOpen = ref(false);
const langMenuContainerRef = ref(null);
const currentLangLabel = computed(() => getLanguageLabel(currentLang.value));

const phone = ref("");
const verificationCode = ref("");
const password = ref("");
const confirmPassword = ref("");
const registering = ref(false);
const countdown = ref(0);
const hasSentCode = ref(false);
let timer = null;
let outsideClickHandler = null;

const verifyButtonText = computed(() => {
  if (countdown.value > 0) return `${countdown.value}s`;
  return hasSentCode.value ? t("resend_code") : t("get_code");
});
const emailRequiredText = computed(() =>
  currentLang.value === "en" ? "Please enter your email address" : "\u8bf7\u8f93\u5165\u90ae\u7bb1\u5730\u5740"
);
const invalidEmailText = computed(() =>
  currentLang.value === "en" ? "Please enter a valid email address" : "\u90ae\u7bb1\u683c\u5f0f\u4e0d\u6b63\u786e"
);
const codeRequiredText = computed(() =>
  currentLang.value === "en" ? "Please enter verification code" : "\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801"
);
const passwordRequiredText = computed(() =>
  currentLang.value === "en" ? "Please enter password" : "\u8bf7\u8f93\u5165\u5bc6\u7801"
);
const passwordMismatchText = computed(() =>
  currentLang.value === "en" ? "Passwords do not match" : "\u4e24\u6b21\u5bc6\u7801\u8f93\u5165\u4e0d\u4e00\u81f4"
);
const registerSuccessText = computed(() =>
  currentLang.value === "en" ? "Registration successful" : "\u6ce8\u518c\u6210\u529f"
);
const passwordRuleText = computed(() =>
  currentLang.value === "en"
    ? "Password must be at least 8 characters and include letters and numbers"
    : "\u5bc6\u7801\u81f3\u5c118\u4f4d\uff0c\u9700\u5305\u542b\u5b57\u6bcd\u548c\u6570\u5b57"
);
const passwordPlaceholderText = computed(() =>
  currentLang.value === "en"
    ? "Password (8+ chars, letters and numbers)"
    : "\u5bc6\u7801\uff08\u81f3\u5c118\u4f4d\uff0c\u5305\u542b\u5b57\u6bcd\u548c\u6570\u5b57\uff09"
);
const confirmPasswordPlaceholderText = computed(() =>
  currentLang.value === "en"
    ? "Confirm Password (same rules)"
    : "\u786e\u8ba4\u5bc6\u7801\uff08\u540c\u4e0a\u89c4\u5219\uff09"
);

function toggleLangMenu() {
  isLangMenuOpen.value = !isLangMenuOpen.value;
}

function selectLang(langCode) {
  setLanguage(langCode);
  isLangMenuOpen.value = false;
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.textContent = message;
  Object.assign(toast.style, {
    position: "fixed",
    top: "16px",
    left: "50%",
    transform: "translateX(-50%)",
    background: "#18181b",
    color: "#fff",
    padding: "10px 16px",
    borderRadius: "999px",
    zIndex: "9999",
    pointerEvents: "none",
    whiteSpace: "nowrap",
  });
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2000);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPassword(value) {
  return /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(value);
}

async function startCountdown() {
  if (countdown.value > 0) return;
  const email = phone.value.trim();
  if (!email) {
    showToast(emailRequiredText.value);
    return;
  }
  if (!isValidEmail(email)) {
    showToast(invalidEmailText.value);
    return;
  }

  try {
    const result = await sendSms(email);
    if (result) {
      hasSentCode.value = true;
      showToast(t("code_sent"));

      countdown.value = 60;
      if (timer) clearInterval(timer);

      timer = setInterval(() => {
        countdown.value -= 1;

        if (countdown.value <= 0) {
          countdown.value = 0;
          clearInterval(timer);
          timer = null;
        }
      }, 1000);
    } else {
      showToast(t("code_send_failed"));
    }
  } catch (error) {
    showToast(t("network_error"));
  }
}

async function handleRegister() {
  if (registering.value) return;

  const email = phone.value.trim();
  const code = verificationCode.value.trim();
  const pwd = password.value;
  const confirmPwd = confirmPassword.value;

  if (!email) {
    showToast(emailRequiredText.value);
    return;
  }
  if (!isValidEmail(email)) {
    showToast(invalidEmailText.value);
    return;
  }
  if (!code) {
    showToast(codeRequiredText.value);
    return;
  }
  if (!pwd || !confirmPwd) {
    showToast(passwordRequiredText.value);
    return;
  }
  if (!isValidPassword(pwd) || !isValidPassword(confirmPwd)) {
    showToast(passwordRuleText.value);
    return;
  }
  if (pwd !== confirmPwd) {
    showToast(passwordMismatchText.value);
    return;
  }

  registering.value = true;
  try {
    const result = await registerByEmail({
      email,
      code,
      password: pwd,
      confirm_password: confirmPwd,
    });
    const message = result?.message || result?.msg || registerSuccessText.value;
    showToast(String(message));
    setTimeout(() => {
      router.push("/login");
    }, 800);
  } catch (error) {
    const message =
      error?.response?.data?.message ||
      error?.response?.data?.msg ||
      error?.message ||
      t("network_error");
    showToast(String(message));
  } finally {
    registering.value = false;
  }
}

onMounted(() => {
  outsideClickHandler = (e) => {
    if (langMenuContainerRef.value && !langMenuContainerRef.value.contains(e.target)) {
      isLangMenuOpen.value = false;
    }
  };

  document.addEventListener("click", outsideClickHandler);
});

onUnmounted(() => {
  if (outsideClickHandler) {
    document.removeEventListener("click", outsideClickHandler);
  }

  if (timer) {
    clearInterval(timer);
    timer = null;
  }
});
</script>

<style scoped lang="scss">
.auth-page {
  background: #f7f7f8;
  min-height: 100vh;
}
.auth-shell {
  display: flex;
  min-height: 100vh;
}
.auth-left {
  position: relative;
  flex: 1;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}
.auth-right {
  flex: 1;
  display: none;
  background: #121212;
  color: #fff;
  align-items: center;
  justify-content: center;
  padding: 48px;
}
.auth-right-card {
  max-width: 420px;
}
.auth-main {
  width: 100%;
  max-width: 380px;
}
.auth-title {
  font-size: 24px;
  font-weight: 700;
  color: #18181b;
  margin: 0;
}
.auth-copy {
  margin-top: 8px;
  color: #a1a1aa;
  font-size: 14px;
}
.form-col {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 24px;
}
.auth-input {
  border: 1px solid #e4e4e7;
  border-radius: 14px;
  background: #fafafa;
  padding: 14px 16px;
  font-size: 14px;
  outline: none;
}
.auth-input:focus {
  border-color: #a1a1aa;
  background: #fff;
}
.code-row {
  display: flex;
  gap: 10px;
}
.code-row .auth-input {
  flex: 1;
}
.code-btn {
  border: 0;
  border-radius: 14px;
  padding: 0 16px;
  background: #f4f4f5;
  color: #3f3f46;
  font-weight: 700;
}
.primary-btn {
  border: 0;
  border-radius: 14px;
  background: #18181b;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 48px;
}
.auth-footline {
  margin-top: 18px;
  font-size: 12px;
  color: #71717a;
  display: flex;
  gap: 8px;
}
.jump-link {
  color: #18181b;
  cursor: pointer;
}
.slogan {
  font-size: 30px;
  font-weight: 800;
  line-height: 1.4;
  margin: 0;
}
#mode-word {
  color: #4db8ff;
  display: inline-flex;
  margin: 0 0.1em;
  transform: skewX(-10deg);
}
.lang-wrap {
  position: absolute;
  top: 24px;
  right: 24px;
}
.lang-trigger {
  display: flex;
  align-items: center;
  gap: 6px;
  border: 1px solid #e4e4e7;
  border-radius: 999px;
  background: #fff;
  padding: 6px 12px;
  color: #52525b;
}
.lang-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  width: 128px;
  padding: 6px;
  border: 1px solid #f4f4f5;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  display: none;
}
.lang-dropdown[data-open="true"] {
  display: block;
}
.lang-item {
  width: 100%;
  border: 0;
  border-radius: 8px;
  background: transparent;
  padding: 8px 12px;
  text-align: left;
  color: #71717a;
}
.lang-item[data-active="true"] {
  background: #fafafa;
  color: #18181b;
  font-weight: 700;
}
.icon-16 {
  width: 16px;
  height: 16px;
}
.icon-14 {
  width: 14px;
  height: 14px;
}
@media (min-width: 768px) {
  .auth-right {
    display: flex;
  }
}
</style>
