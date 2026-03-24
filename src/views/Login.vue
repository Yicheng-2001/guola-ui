<template>
  <div class="">
    
    <div class="login-container">
        <!-- 左侧登录区域 -->
        <div class="left-panel w-full md:w-1/2 shadow-[20px_0_60px_rgba(0,0,0,0.02)]">
            <!-- 语言切换器 -->
            <div class="absolute top-6 right-6 z-20">
                <div class="relative" id="langMenuContainer">
                    <button @click="toggleLangMenu()" class="login-lang-trigger flex items-center gap-1.5 bg-white border border-zinc-200 px-3 py-1.5 rounded-full text-sm font-medium text-zinc-600 hover:text-zinc-900 hover:border-zinc-300 transition-all">
                        <i data-lucide="globe" class="w-4 h-4"></i>
                        <span id="current-lang-display">中文</span>
                        <i data-lucide="chevron-down" class="w-3.5 h-3.5"></i>
                    </button>
                    <div id="langDropdown" class="hidden absolute right-0 top-full mt-2 w-32 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-zinc-100 p-1.5 z-50">
                        <button @click="selectLang('zh', '中文')" class="lang-item login-microcopy w-full text-left px-3 py-2 rounded-lg text-sm font-bold text-zinc-900 bg-zinc-50 transition-colors" data-i18n="lang_zh">中文</button>
                        <button @click="selectLang('en', 'English')" class="lang-item login-microcopy w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 transition-colors" data-i18n="lang_en">English</button>

                    </div>
                </div>
            </div>
            <div class="w-full max-w-[380px] -mt-10">
                <!-- 登录区域内容 -->
                <div id="view-login" class="animate-in fade-in duration-300">
                <!-- Logo -->
                <div class="mb-4">
                    <img src="data:image/png;base64,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" class="h-14" alt="GuolaYa Logo" />
                </div>
                <!-- 标题 -->
                <div class="mb-6 text-left">
                    <h2 class="login-page-title text-2xl font-bold text-zinc-900 tracking-tight" data-i18n="welcome_back">欢迎回来</h2>
                    <p class="login-page-copy text-sm text-zinc-400 mt-1" data-i18n="login_subtitle">与全球创作者一起探索 AI 视频的无限可能。</p>
                </div>

                <!-- 登录区域标题 -->
                <div class="border-b border-zinc-100 mb-8">
                    <div class="login-section-title pb-4 text-sm font-bold text-zinc-900 border-b-2 border-zinc-900 inline-block" data-i18n="password_login_title">密码登录</div>
                </div>

                <!-- 登录表单 -->
                <div id="form-login" class="space-y-5">
                    <div class="space-y-4">
                        <div class="relative group">
                            <input type="email" data-placeholder="phone_number" placeholder="邮箱" class="login-input w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-5 py-4 text-sm outline-none focus:border-zinc-400 focus:bg-white transition-all shadow-inner">
                        </div>
                        <div class="relative group">
                            <input type="password" data-placeholder="password" placeholder="密码" class="login-input w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-5 py-4 text-sm outline-none focus:border-zinc-400 focus:bg-white transition-all shadow-inner">
                        </div>
                    </div>
                    <button @click="$router.push('/workbench')" class="login-primary-button w-full bg-zinc-900 hover:bg-zinc-800 text-white font-bold py-4 rounded-2xl transition-all transform active:scale-95 text-sm shadow-xl shadow-zinc-200 flex items-center justify-center gap-2">
                        <span data-i18n="login_now">立即登录</span> <i data-lucide="arrow-right" class="w-4 h-4"></i>
                    </button>

                    <div class="login-microcopy mt-6 flex items-center justify-between text-xs font-medium text-zinc-500 px-1">
                        <div @click="$router.push('/register')" class="cursor-pointer hover:text-zinc-900 transition-colors" data-i18n="go_register">注册账号</div>
                        <div @click="$router.push('/forgot-password')" class="cursor-pointer hover:text-zinc-900 transition-colors" data-i18n="go_forgot">找回密码</div>
                    </div>
                </div>
                </div>
            </div>
            
            <!-- 底部版权 -->
            <div class="absolute bottom-8 text-[10px] text-zinc-300">
                © 2026 GuolaYa AI. All Rights Reserved.
            </div>
        </div>

        <!-- 右侧艺术展示区域 -->
        <div class="right-panel bg-[#121212]">
            <!-- 动态流体背景 -->
            <div id="blob1" class="floating-blob w-[400px] h-[400px] top-[-100px] right-[-100px]" style="background-color: #3b82f6;"></div>
            <div id="blob2" class="floating-blob w-[300px] h-[300px] bottom-[-50px] left-[-50px]" style="animation-delay: -5s; background-color: #a855f7;"></div>
            
            <div class="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                <div class="relative w-full aspect-video rounded-[32px] overflow-hidden border border-white/10 shadow-2xl mb-12">
                    <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200" class="w-full h-full object-cover opacity-60">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div class="absolute bottom-8 left-8 right-8 text-left">
                        <div class="login-microcopy inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] text-white font-bold mb-3">AI 艺术精选</div>
                        <h3 class="login-feature-title text-xl font-bold text-white mb-2">“微观宇宙的绚丽爆发”</h3>
                        <p class="login-page-copy text-xs text-zinc-400 line-clamp-2">由 GuolaYa 艺术家模型生成。探索物理引擎级的光影渲染效果，捕捉每一个灵感瞬间。</p>
                    </div>
                </div>
                
                <div class="space-y-2">
                    <p class="login-hero-title text-3xl font-extrabold text-white tracking-tighter" style="line-height: 1.4;">
                        <span data-i18n="slogan_prefix">过啦一下，你就是</span><span id="mode-word" class="mode-word-slot transition-colors duration-300 ease-in-out">艺术</span><span data-i18n="slogan_suffix">大师。</span>
                    </p>
                    <p class="login-page-copy text-zinc-500 text-sm" data-i18n="slogan_en">Input imagination, output the world.</p>
                </div>
            </div>
        </div>
    </div>

    

  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

        // --------- 多语言系统 (i18n) ---------
        const i18nData = {
            zh: {
                lang_zh: "中文",
                lang_en: "English",
                welcome_back: "欢迎回来",
                login_subtitle: "与全球创作者一起探索 AI 视频的无限可能。",
                password_login_title: "密码登录",
                phone_number: "邮箱",
                password: "密码",
                login_now: "立即登录",
                go_register: "注册账号",
                go_forgot: "找回密码",
                ai_art_featured: "AI 艺术精选",
                featured_title: "「微观宇宙的绚丽爆发」",
                featured_desc: "由 GuolaYa 艺术家模型生成。探索物理引擎级的光影渲染效果，捕捉每一个灵感瞬间。",
                slogan_prefix: "过啦一下，你就是",
                slogan_suffix: "大师。",
                slogan_en: "Input imagination, output the world.",
                mode_artist: "艺术",
                mode_storybook: "绘本"
            },
            en: {
                lang_zh: "中文",
                lang_en: "English",
                welcome_back: "Welcome Back",
                login_subtitle: "Explore the infinite possibilities of AI video with creators worldwide.",
                password_login_title: "Password Login",
                phone_number: "Email",
                password: "Password",
                login_now: "Login Now",
                go_register: "Register Account",
                go_forgot: "Forgot Password",
                ai_art_featured: "AI Art Featured",
                featured_title: "「The Gorgeous Burst of Microcosm」",
                featured_desc: "Generated by GuolaYa Artist Model. Explore physics-engine-level light and shadow rendering, capturing every moment of inspiration.",
                slogan_prefix: "With GuolaYa, you're a ",
                slogan_suffix: " Master.",
                slogan_en: "Input imagination, output the world.",
                mode_artist: "Art",
                mode_storybook: "Story"
            },

        };

        // 获取当前语言
        function getCurrentLang() {
            return localStorage.getItem('guolaya-lang') || 'zh';
        }

        // 设置当前语言
        function setCurrentLang(lang) {
            localStorage.setItem('guolaya-lang', lang);
        }

        // 应用翻译
        function applyTranslations(lang) {
            const data = i18nData[lang];
            if (!data) return;

            // 翻译所有带有 data-i18n 属性的元素
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (data[key]) {
                    el.innerHTML = data[key];
                }
            });

            // 翻译所有带有 data-placeholder 属性的输入框
            document.querySelectorAll('[data-placeholder]').forEach(el => {
                const key = el.getAttribute('data-placeholder');
                if (data[key]) {
                    el.placeholder = data[key];
                }
            });

            // 更新语言下拉框的选中状态
            document.querySelectorAll('.lang-item').forEach(item => {
                const itemLang = item.getAttribute('data-i18n');
                if (itemLang === `lang_${lang}`) {
                    item.classList.remove('text-zinc-500', 'font-medium');
                    item.classList.add('text-zinc-900', 'font-bold', 'bg-zinc-50');
                } else {
                    item.classList.add('text-zinc-500', 'font-medium');
                    item.classList.remove('text-zinc-900', 'font-bold', 'bg-zinc-50');
                }
            });
        }

        // 切换语言菜单
        function toggleLangMenu() {
            document.getElementById('langDropdown').classList.toggle('hidden');
        }

        // 创意模式词状态 (艺术/绘本)
        let isArtist = true;

        // 选择语言
        function selectLang(langCode, langLabel) {
            console.log('selectLang called:', langCode, langLabel);
            const display = document.getElementById('current-lang-display');
            console.log('current-lang-display element:', display);
            if (display) {
                display.innerText = langLabel;
            }
            document.getElementById('langDropdown').classList.add('hidden');
            setCurrentLang(langCode);
            applyTranslations(langCode);

            // 更新模式词 - 直接使用 langCode 参数
            const modeWord = document.getElementById('mode-word');
            console.log('mode-word element:', modeWord);
            if (modeWord && i18nData[langCode]) {
                modeWord.textContent = isArtist ? i18nData[langCode].mode_artist : i18nData[langCode].mode_storybook;
                console.log('Updated mode-word to:', modeWord.textContent);
            }

            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }

        // Toast 提示函数
        function showToast(message) {
            // 创建 toast 元素
            const toast = document.createElement('div');
            toast.className = 'fixed top-4 left-1/2 -translate-x-1/2 bg-zinc-900 text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg z-[200] animate-fade-in-down';
            toast.style.cssText = 'animation: fadeInDown 0.3s ease-out;';
            toast.textContent = message;
            
            // 添加动画样式
            if (!document.getElementById('toast-styles')) {
                const style = document.createElement('style');
                style.id = 'toast-styles';
                style.textContent = `
                    @keyframes fadeInDown {
                        from { opacity: 0; transform: translate(-50%, -20px); }
                        to { opacity: 1; transform: translate(-50%, 0); }
                    }
                    @keyframes fadeOutUp {
                        from { opacity: 1; transform: translate(-50%, 0); }
                        to { opacity: 0; transform: translate(-50%, -20px); }
                    }
                `;
                document.head.appendChild(style);
            }
            
            document.body.appendChild(toast);
            
            // 3秒后自动移除
            setTimeout(() => {
                toast.style.animation = 'fadeOutUp 0.3s ease-out';
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        }

        // 验证码倒计时逻辑
        let countdown = 0;
        let timer = null;

        function startCountdown() {
            const btn = document.getElementById('verify-btn');
            if (!btn || countdown > 0) return;

            // 显示验证码已发送提示
            const lang = getCurrentLang();
            const data = i18nData[lang] || i18nData['zh'];
            showToast(data.code_sent);

            countdown = 60;
            btn.disabled = true;
            btn.classList.add('opacity-60', 'cursor-not-allowed');
            btn.classList.remove('hover:bg-zinc-200');

            btn.textContent = countdown + 's';

            timer = setInterval(() => {
                countdown--;
                if (countdown <= 0) {
                    clearInterval(timer);
                    btn.textContent = '再次发送';
                    btn.disabled = false;
                    btn.classList.remove('opacity-60', 'cursor-not-allowed');
                    btn.classList.add('hover:bg-zinc-200');
                } else {
                    btn.textContent = countdown + 's';
                }
            }, 1000);
        }
    

onMounted(() => {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
  
  // 初始化语言
  const savedLang = getCurrentLang();
  const langLabels = { zh: '中文', en: 'English' };
  document.getElementById('current-lang-display').innerText = langLabels[savedLang];
  applyTranslations(savedLang);
  
  // 点击外部关闭语言菜单
  document.addEventListener('click', (e) => {
    const langContainer = document.getElementById('langMenuContainer');
    if (langContainer && !langContainer.contains(e.target)) {
      document.getElementById('langDropdown')?.classList.add('hidden');
    }
  });
})

onUnmounted(() => {
    if (timer) clearInterval(timer);
})
</script>

<style scoped>

        #mode-word {
            font-family: inherit;
            font-weight: inherit;
            font-size: 1.2em;
            color: #4DB8FF;
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
        .left-panel,
        .right-panel,
        .login-page-title,
        .login-section-title,
        .login-hero-title,
        .login-feature-title,
        .login-input,
        .login-primary-button,
        .login-page-copy,
        .login-microcopy,
        .login-lang-trigger {
            font-family: 'Noto Serif SC', 'Songti SC', 'STSong', serif;
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
        .login-microcopy,
        .login-lang-trigger,
        .login-input {
            font-weight: 400;
            letter-spacing: 0.01em;
        }
        .login-input::placeholder {
            color: #9f9f9f;
        }
        .login-primary-button {
            font-weight: 500;
            letter-spacing: 0.02em;
        }
        body { background-color: #F7F7F8; overflow: hidden; }
        .login-container { height: 100vh; display: flex; }
        .left-panel { flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; background: white; padding: 40px; position: relative; z-index: 10; }
        .right-panel { flex: 1.2; position: relative; overflow: hidden; display: none; }
        @media (min-width: 768px) { .right-panel { display: block; } }
        
        .social-btn {
            width: 44px; height: 44px; border-radius: 12px; display: flex; align-items: center; justify-content: center;
            transition: all 0.2s; border: 1px solid #f4f4f5; background: #fff;
        }
        .social-btn:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.05); border-color: #e4e4e7; }

        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
        }
        .floating-blob {
            position: absolute; border-radius: 50%; filter: blur(60px); opacity: 0.4; animation: float 10s ease-in-out infinite;
            transition: background-color 2s ease-in-out;
        }
    
</style>
