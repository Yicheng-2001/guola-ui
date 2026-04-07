<template>
  <div class="login-page">
    <div class="login-container">
      <div class="left-panel">
        <div class="lang-menu-anchor">
          <div class="lang-menu-container" ref="langMenuContainerRef">
            <button @click="toggleLangMenu" class="login-lang-trigger">
              <Globe class="lang-trigger-icon" />
              <span>{{ currentLangLabel }}</span>
              <ChevronDown class="lang-trigger-chevron" />
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
        </div>

        <div class="left-content-wrap">
          <div class="view-login">
            <div class="logo-wrap">
              <img
                src="https://placehold.co/260x56/ffffff/111111?text=GuolaYa"
                class="login-logo"
                :alt="t('login_logo_alt')"
              />
            </div>

            <div class="title-wrap">
              <h2 class="login-page-title">{{ t('welcome_back') }}</h2>
              <p class="login-page-copy">{{ t('login_subtitle') }}</p>
            </div>

            <div class="section-title-wrap">
              <div class="login-section-title">{{ t('password_login_title') }}</div>
            </div>

            <div class="form-login">
              <div class="form-fields-wrap">
                <div class="input-wrap">
                  <input
                    type="text"
                    v-model="username"
                    :placeholder="accountPlaceholderText"
                    class="login-input"
                    name="login_account_no_fill_v2"
                    autocomplete="new-password"
                    autocapitalize="none"
                    autocorrect="off"
                    spellcheck="false"
                    @keyup.enter="handleLogin"
                  />
                </div>
                <div class="input-wrap">
                  <input
                    type="password"
                    v-model="password"
                    :placeholder="t('password')"
                    class="login-input"
                    name="login_password_no_fill_v2"
                    autocomplete="new-password"
                    autocapitalize="none"
                    autocorrect="off"
                    spellcheck="false"
                    @keyup.enter="handleLogin"
                  />
                </div>
              </div>

              <button @click="handleLogin" class="login-primary-button" :disabled="loggingIn">
                <span>{{ t('login_now') }}</span>
                <ArrowRight class="login-primary-icon" />
              </button>

              <div class="login-microcopy-row">
                <div @click="$router.push('/register')" class="microcopy-link">{{ t('go_register') }}</div>
                <div v-show="false" @click="$router.push('/forgot-password')" class="microcopy-link">{{ t('go_forgot') }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="login-footer">{{ t('login_footer') }}</div>
      </div>

      <div class="right-panel">
        <div id="blob1" class="floating-blob"></div>
        <div id="blob2" class="floating-blob"></div>

        <div class="right-content">
          <div class="hero-card">
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200"
              class="hero-image"
              :alt="t('login_hero_image_alt')"
            />
            <div class="hero-overlay"></div>
            <div class="hero-text-wrap">
              <div class="hero-badge">{{ t('login_hero_badge') }}</div>
              <h3 class="login-feature-title">{{ t('login_hero_feature_title') }}</h3>
              <p class="login-page-copy">{{ t('login_hero_feature_desc') }}</p>
            </div>
          </div>

          <div class="hero-slogan-wrap">
            <p class="login-hero-title">
              <span>{{ t('slogan_prefix') }}</span>
              <span id="mode-word" class="mode-word-slot">{{ isArtist ? t('mode_artist') : t('mode_storybook') }}</span>
              <span>{{ t('slogan_suffix') }}</span>
            </p>
            <p class="login-page-copy">{{ t('slogan_en') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";
import { Globe, ChevronDown, ArrowRight } from "lucide-vue-next";
import { useLanguage } from "../i18n";
import {
  getCurrentUserProfile,
  loginByPassword,
  setLoginToken,
  setLoginUserProfile,
} from "../api/services";

const { currentLang, setLanguage, getLanguageLabel, t } = useLanguage();
const router = useRouter();

const isArtist = true;
const isLangMenuOpen = ref(false);
const langMenuContainerRef = ref(null);
const currentLangLabel = computed(() => getLanguageLabel(currentLang.value));
const username = ref("");
const password = ref("");
const loggingIn = ref(false);

const accountPlaceholderText = computed(() =>
  currentLang.value === "en" ? "Username / phone / email" : "用户名 / 手机号 / 邮箱"
);
const usernameRequiredText = computed(() =>
  currentLang.value === "en" ? "Please enter username/phone/email" : "请输入用户名/手机号/邮箱"
);
const passwordRequiredText = computed(() =>
  currentLang.value === "en" ? "Please enter password" : "请输入密码"
);
const loginSuccessText = computed(() =>
  currentLang.value === "en" ? "Login successful" : "登录成功"
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

function extractMessage(payload) {
  return (
    payload?.message ||
    payload?.msg ||
    payload?.data?.message ||
    payload?.data?.msg ||
    payload?.response?.data?.message ||
    payload?.response?.data?.msg ||
    payload?.response?.data?.data?.message ||
    payload?.response?.data?.data?.msg ||
    payload?.error?.message ||
    ""
  );
}

function extractToken(payload) {
  const accessToken = payload?.access_token ?? payload?.data?.access_token;
  if (typeof accessToken === "string") return accessToken.trim();
  if (accessToken && typeof accessToken === "object") {
    return String(accessToken.token || accessToken.access_token || "").trim();
  }
  return String(payload?.token || payload?.data?.token || "").trim();
}

function extractUserProfile(payload) {
  const raw = payload?.data || payload || {};
  if (!raw || typeof raw !== "object") return null;

  const displayName =
    raw.username ||
    raw.user_name ||
    raw.nickname ||
    raw.name ||
    raw.account ||
    raw.email ||
    raw.mobile ||
    raw.phone ||
    "";

  return {
    ...raw,
    display_name: displayName ? String(displayName).trim() : "",
  };
}

async function handleLogin() {
  if (loggingIn.value) return;

  const account = username.value.trim();
  const pwd = password.value;

  if (!account) {
    showToast(usernameRequiredText.value);
    return;
  }
  if (!pwd) {
    showToast(passwordRequiredText.value);
    return;
  }

  loggingIn.value = true;
  try {
    const result = await loginByPassword({
      login_type: "password",
      username: account,
      password: pwd,
    });
    const token = extractToken(result);
    const message = extractMessage(result);

    if (!token) {
      showToast(String(message || t("network_error")));
      return;
    }

    setLoginToken(token);
    try {
      const profileResult = await getCurrentUserProfile();
      const profile = extractUserProfile(profileResult);
      if (profile) {
        setLoginUserProfile(profile);
      }
    } catch (profileError) {
      // 用户信息拉取失败不阻断登录主流程
    }
    showToast(String(message || loginSuccessText.value));
    router.push("/");
  } catch (error) {
    const message = extractMessage(error) || t("network_error");
    showToast(String(message));
  } finally {
    loggingIn.value = false;
  }
}

let outsideClickHandler = null;

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
});
</script>
<style scoped lang="scss">
#mode-word {
  font-family: inherit;
  font-weight: inherit;
  font-size: 1.2em;
  color: #4db8ff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: auto;
  margin: 0 0.14em 0 0.1em;
  white-space: nowrap;
  line-height: 1;
  font-style: inherit;
  transform: skewX(-10deg);
  font-synthesis: none;
  -webkit-font-smoothing: antialiased;
  text-rendering: geometricPrecision;
}

.login-page {
  background: #f7f7f8;
  overflow: hidden;
}

.login-container {
  display: flex;
  height: 100vh;
}

.left-panel,
.right-panel,
.login-page-title,
.login-section-title,
.login-hero-title,
.login-feature-title,
.login-input,
.login-primary-button,
.login-page-copy,
.login-microcopy-row,
.login-lang-trigger,
.lang-item {
  font-family: "Noto Serif SC", "Songti SC", "STSong", serif;
}

.login-page-title,
.login-section-title,
.login-hero-title,
.login-feature-title {
  font-style: italic;
  font-weight: 600;
  letter-spacing: 0.01em;
}

.login-page-copy,
.login-microcopy-row,
.login-lang-trigger,
.login-input,
.lang-item {
  font-weight: 400;
  letter-spacing: 0.01em;
}

.left-panel {
  position: relative;
  z-index: 10;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #fff;
  padding: 40px;
  box-shadow: 20px 0 60px rgba(0, 0, 0, 0.02);
}

.lang-menu-anchor {
  position: absolute;
  top: 24px;
  right: 24px;
  z-index: 20;
}

.lang-menu-container {
  position: relative;
}

.login-lang-trigger {
  display: flex;
  align-items: center;
  gap: 6px;
  border: 1px solid #e4e4e7;
  border-radius: 9999px;
  background: #fff;
  padding: 6px 12px;
  color: #52525b;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s;

  &:hover {
    color: #18181b;
    border-color: #d4d4d8;
  }
}

.lang-trigger-icon {
  width: 16px;
  height: 16px;
}

.lang-trigger-chevron {
  width: 14px;
  height: 14px;
}

.lang-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 50;
  margin-top: 8px;
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
  font-size: 14px;
  color: #71717a;
  transition: all 0.2s;

  &:hover {
    background: #fafafa;
    color: #18181b;
  }
}

.lang-item[data-active="true"] {
  background: #fafafa;
  color: #18181b;
  font-weight: 700;
}

.left-content-wrap {
  width: 100%;
  max-width: 380px;
  margin-top: -40px;
}

.view-login {
  animation: fadeIn 0.3s ease;
}

.logo-wrap {
  margin-bottom: 16px;
}

.login-logo {
  height: 56px;
  width: auto;
}

.title-wrap {
  margin-bottom: 24px;
  text-align: left;
}

.login-page-title {
  color: #18181b;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.025em;
}

.login-page-copy {
  margin-top: 4px;
  color: #a1a1aa;
  font-size: 14px;
}

.section-title-wrap {
  margin-bottom: 32px;
  border-bottom: 1px solid #f4f4f5;
}

.login-section-title {
  display: inline-block;
  border-bottom: 2px solid #18181b;
  padding-bottom: 16px;
  color: #18181b;
  font-size: 14px;
  font-weight: 700;
}

.form-login {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-fields-wrap {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.input-wrap {
  position: relative;
}

.login-input {
  width: 100%;
  border: 1px solid #e4e4e7;
  border-radius: 16px;
  background: #fafafa;
  padding: 16px 20px;
  color: #18181b;
  font-size: 14px;
  outline: none;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.04);
  transition: all 0.2s;

  &:focus {
    border-color: #a1a1aa;
    background: #fff;
  }

  &::placeholder {
    color: #9f9f9f;
  }
}

.login-primary-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  border: 0;
  border-radius: 16px;
  background: #18181b;
  padding: 16px;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.02em;
  box-shadow: 0 20px 40px rgba(228, 228, 231, 1);
  transition: all 0.2s;

  &:hover {
    background: #27272a;
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
}

.login-primary-icon {
  width: 16px;
  height: 16px;
}

.login-microcopy-row {
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4px;
  color: #71717a;
  font-size: 12px;
  font-weight: 500;
}

.microcopy-link {
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #18181b;
  }
}

.login-footer {
  position: absolute;
  bottom: 32px;
  color: #d4d4d8;
  font-size: 10px;
}

.right-panel {
  position: relative;
  flex: 1.2;
  overflow: hidden;
  display: none;
  background: #121212;
}

@media (min-width: 768px) {
  .left-panel {
    width: 50%;
  }

  .right-panel {
    display: block;
  }
}

.floating-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.4;
  animation: float 10s ease-in-out infinite;
  transition: background-color 2s ease-in-out;
}

#blob1 {
  top: -100px;
  right: -100px;
  width: 400px;
  height: 400px;
  background: #3b82f6;
}

#blob2 {
  bottom: -50px;
  left: -50px;
  width: 300px;
  height: 300px;
  background: #a855f7;
  animation-delay: -5s;
}

.right-content {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px;
  text-align: center;
}

.hero-card {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  margin-bottom: 48px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 32px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.35);
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.6;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8),
    transparent,
    transparent
  );
}

.hero-text-wrap {
  position: absolute;
  right: 32px;
  bottom: 32px;
  left: 32px;
  text-align: left;
}

.hero-badge {
  display: inline-block;
  margin-bottom: 12px;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  padding: 4px 12px;
  color: #fff;
  font-size: 10px;
  font-weight: 700;
}

.login-feature-title {
  margin-bottom: 8px;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
}

.hero-slogan-wrap {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.login-hero-title {
  color: #fff;
  font-size: 30px;
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.4;
}

.hero-slogan-wrap .login-page-copy {
  margin-top: 0;
  color: #71717a;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-20px);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>

