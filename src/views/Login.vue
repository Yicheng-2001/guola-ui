<template>
  <div class="login-page">
    <div class="login-container">
      <div class="left-panel">
        <div class="lang-menu-anchor">
          <div class="lang-menu-container" id="langMenuContainer">
            <button @click="toggleLangMenu()" class="login-lang-trigger">
              <Globe class="lang-trigger-icon" />
              <span id="current-lang-display">中文</span>
              <ChevronDown class="lang-trigger-chevron" />
            </button>
            <div id="langDropdown" class="lang-dropdown" data-open="false">
              <button
                @click="selectLang('zh', '中文')"
                class="lang-item"
                data-i18n="lang_zh"
                data-lang="zh"
                data-active="true"
              >
                中文
              </button>
              <button
                @click="selectLang('en', 'English')"
                class="lang-item"
                data-i18n="lang_en"
                data-lang="en"
                data-active="false"
              >
                English
              </button>
            </div>
          </div>
        </div>

        <div class="left-content-wrap">
          <div id="view-login" class="view-login">
            <div class="logo-wrap">
              <img
                src="data:image/png;base64,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…1278 tokens truncated…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"
                class="login-logo"
                alt="GuolaYa Logo"
              />
            </div>

            <div class="title-wrap">
              <h2 class="login-page-title" data-i18n="welcome_back">
                欢迎回来
              </h2>
              <p class="login-page-copy" data-i18n="login_subtitle">
                与全球创作者一起探索 AI 视频的无限可能。
              </p>
            </div>

            <div class="section-title-wrap">
              <div class="login-section-title" data-i18n="password_login_title">
                密码登录
              </div>
            </div>

            <div id="form-login" class="form-login">
              <div class="form-fields-wrap">
                <div class="input-wrap">
                  <input
                    type="email"
                    data-placeholder="phone_number"
                    placeholder="邮箱"
                    class="login-input"
                  />
                </div>
                <div class="input-wrap">
                  <input
                    type="password"
                    data-placeholder="password"
                    placeholder="密码"
                    class="login-input"
                  />
                </div>
              </div>

              <button
                @click="$router.push('/workbench')"
                class="login-primary-button"
              >
                <span data-i18n="login_now">立即登录</span>
                <ArrowRight class="login-primary-icon" />
              </button>

              <div class="login-microcopy-row">
                <div
                  @click="$router.push('/register')"
                  class="microcopy-link"
                  data-i18n="go_register"
                >
                  注册账号
                </div>
                <div
                  @click="$router.push('/forgot-password')"
                  class="microcopy-link"
                  data-i18n="go_forgot"
                >
                  找回密码
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="login-footer">© 2026 GuolaYa AI. All Rights Reserved.</div>
      </div>

      <div class="right-panel">
        <div id="blob1" class="floating-blob"></div>
        <div id="blob2" class="floating-blob"></div>

        <div class="right-content">
          <div class="hero-card">
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200"
              class="hero-image"
              alt="Hero"
            />
            <div class="hero-overlay"></div>
            <div class="hero-text-wrap">
              <div class="hero-badge">AI 艺术精选</div>
              <h3 class="login-feature-title">“微观宇宙的绚丽爆发”</h3>
              <p class="login-page-copy">
                由 GuolaYa
                艺术家模型生成。探索物理引擎级的光影渲染效果，捕捉每一个灵感瞬间。
              </p>
            </div>
          </div>

          <div class="hero-slogan-wrap">
            <p class="login-hero-title">
              <span data-i18n="slogan_prefix">过啦一下，你就是</span>
              <span id="mode-word" class="mode-word-slot">艺术</span>
              <span data-i18n="slogan_suffix">大师。</span>
            </p>
            <p class="login-page-copy" data-i18n="slogan_en">
              Input imagination, output the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import { Globe, ChevronDown, ArrowRight } from "lucide-vue-next";
import { useLanguage } from "../i18n/useLanguage";
import { applyI18nToDom, syncLangItemActiveState } from "../i18n/dom";

const { currentLang, setLanguage, getLanguageLabel, t } = useLanguage();

function toggleLangMenu() {
  const dropdown = document.getElementById("langDropdown");
  if (!dropdown) return;
  const isOpen = dropdown.dataset.open === "true";
  dropdown.dataset.open = isOpen ? "false" : "true";
}

let isArtist = true;

function refreshLanguageUI() {
  const lang = currentLang.value;
  const currentLangDisplay = document.getElementById("current-lang-display");
  if (currentLangDisplay) currentLangDisplay.innerText = getLanguageLabel(lang);

  applyI18nToDom(document);
  syncLangItemActiveState(lang, document);

  const modeWord = document.getElementById("mode-word");
  if (modeWord) {
    modeWord.textContent = isArtist ? t("mode_artist") : t("mode_storybook");
  }
}

function selectLang(langCode) {
  setLanguage(langCode);

  const dropdown = document.getElementById("langDropdown");
  if (dropdown) dropdown.dataset.open = "false";

  refreshLanguageUI();
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "login-toast";
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("login-toast-hide");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

let countdown = 0;
let timer = null;

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
      btn.textContent = t("resend_code");
      btn.disabled = false;
    } else {
      btn.textContent = countdown + "s";
    }
  }, 1000);
}

let outsideClickHandler = null;

onMounted(() => {
  refreshLanguageUI();

  outsideClickHandler = (e) => {
    const langContainer = document.getElementById("langMenuContainer");
    const dropdown = document.getElementById("langDropdown");
    if (langContainer && !langContainer.contains(e.target) && dropdown) {
      dropdown.dataset.open = "false";
    }
  };

  document.addEventListener("click", outsideClickHandler);
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
  if (outsideClickHandler)
    document.removeEventListener("click", outsideClickHandler);
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

.login-toast {
  position: fixed;
  top: 16px;
  left: 50%;
  z-index: 200;
  transform: translateX(-50%);
  border-radius: 9999px;
  background: #18181b;
  padding: 12px 24px;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  animation: fadeInDown 0.3s ease-out;
}

.login-toast-hide {
  animation: fadeOutUp 0.3s ease-out forwards;
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

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translate(-50%, -20px);
  }

  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}

@keyframes fadeOutUp {
  from {
    opacity: 1;
    transform: translate(-50%, 0);
  }

  to {
    opacity: 0;
    transform: translate(-50%, -20px);
  }
}
</style>
