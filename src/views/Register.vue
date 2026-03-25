<template>
  <div class="auth-page">
    <div class="auth-shell">
      <div class="auth-left" id="langMenuContainer">
        <div class="lang-wrap">
          <button @click="toggleLangMenu" class="lang-trigger">
            <Globe class="icon-16" />
            <span id="current-lang-display">中文</span>
            <ChevronDown class="icon-14" />
          </button>
          <div id="langDropdown" class="lang-dropdown" data-open="false">
            <button
              @click="selectLang('zh')"
              class="lang-item"
              data-lang="zh"
              data-i18n="lang_zh"
            >
              中文
            </button>
            <button
              @click="selectLang('en')"
              class="lang-item"
              data-lang="en"
              data-i18n="lang_en"
            >
              English
            </button>
          </div>
        </div>

        <div class="auth-main">
          <h2 class="auth-title" data-i18n="register_title">注册账号</h2>
          <p class="auth-copy" data-i18n="register_subtitle">
            开启您的 AI 创作之旅。
          </p>

          <div v-if="step === 1" class="form-col">
            <input
              type="email"
              data-placeholder="phone_number"
              placeholder="邮箱"
              class="auth-input"
            />
            <div class="code-row">
              <input
                type="text"
                data-placeholder="verification_code"
                placeholder="验证码"
                class="auth-input"
              />
              <button
                id="verify-btn"
                @click="startCountdown"
                class="code-btn"
                data-i18n="get_code"
              >
                获取验证码
              </button>
            </div>
            <button @click="step = 2" class="primary-btn">
              <span data-i18n="next_step">下一步</span>
              <ArrowRight class="icon-16" />
            </button>
          </div>

          <div v-else class="form-col">
            <input
              type="password"
              data-placeholder="password"
              placeholder="密码"
              class="auth-input"
            />
            <input
              type="password"
              data-placeholder="confirm_password"
              placeholder="确认密码"
              class="auth-input"
            />
            <button @click="$router.push('/workbench')" class="primary-btn">
              <span data-i18n="register_now">立即注册</span>
              <Check class="icon-16" />
            </button>
          </div>

          <div class="auth-footline">
            <span data-i18n="have_account">已有账号？</span>
            <span
              @click="$router.push('/')"
              class="jump-link"
              data-i18n="go_login"
              >立即登录</span
            >
          </div>
        </div>
      </div>

      <div class="auth-right">
        <div class="auth-right-card">
          <p class="slogan">
            <span data-i18n="slogan_prefix">过啦一下，你就是</span>
            <span id="mode-word">艺术</span>
            <span data-i18n="slogan_suffix">大师。</span>
          </p>
          <p class="auth-copy" data-i18n="slogan_en">
            Input imagination, output the world.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { Globe, ChevronDown, ArrowRight, Check } from "lucide-vue-next";
import { useLanguage } from "../i18n/useLanguage";
import { applyI18nToDom, syncLangItemActiveState } from "../i18n/dom";

const { currentLang, setLanguage, getLanguageLabel, t } = useLanguage();

const step = ref(1);
let isArtist = true;
let outsideClickHandler = null;
let timer = null;
let countdown = 0;

function refreshLanguageUI() {
  const lang = currentLang.value;
  const currentLangDisplay = document.getElementById("current-lang-display");
  if (currentLangDisplay) currentLangDisplay.innerText = getLanguageLabel(lang);

  applyI18nToDom(document);
  syncLangItemActiveState(lang, document);

  const modeWord = document.getElementById("mode-word");
  if (modeWord)
    modeWord.textContent = isArtist ? t("mode_artist") : t("mode_storybook");
}

function toggleLangMenu() {
  const dropdown = document.getElementById("langDropdown");
  if (!dropdown) return;
  const isOpen = dropdown.dataset.open === "true";
  dropdown.dataset.open = isOpen ? "false" : "true";
}

function selectLang(langCode) {
  setLanguage(langCode);

  const dropdown = document.getElementById("langDropdown");
  if (dropdown) dropdown.dataset.open = "false";

  refreshLanguageUI();
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "auth-toast";
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2000);
}

function startCountdown() {
  const btn = document.getElementById("verify-btn");
  if (!btn || countdown > 0) return;

  showToast(t("code_sent"));

  countdown = 60;
  btn.disabled = true;
  btn.textContent = countdown + "s";

  timer = setInterval(() => {
    countdown--;

    if (countdown <= 0) {
      clearInterval(timer);
      btn.disabled = false;
      btn.textContent = t("resend_code");
    } else {
      btn.textContent = countdown + "s";
    }
  }, 1000);
}

onMounted(() => {
  refreshLanguageUI();

  outsideClickHandler = (e) => {
    const menu = document.getElementById("langMenuContainer");
    const dropdown = document.getElementById("langDropdown");
    if (menu && !menu.contains(e.target) && dropdown) {
      dropdown.dataset.open = "false";
    }
  };

  document.addEventListener("click", outsideClickHandler);
});

onUnmounted(() => {
  if (outsideClickHandler)
    document.removeEventListener("click", outsideClickHandler);
  if (timer) clearInterval(timer);
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
.auth-toast {
  position: fixed;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  background: #18181b;
  color: #fff;
  padding: 10px 16px;
  border-radius: 999px;
  z-index: 999;
}
@media (min-width: 768px) {
  .auth-right {
    display: flex;
  }
}
</style>
