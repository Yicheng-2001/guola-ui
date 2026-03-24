<template>
  <div class="">
    
    <div class="login-container">
        <!-- 左侧找回密码区域 -->
        <div class="left-panel w-full md:w-1/2 shadow-[20px_0_60px_rgba(0,0,0,0.02)]">
            <!-- 语言切换器 -->
            <div class="absolute top-6 right-6 z-20">
                <div class="relative" id="langMenuContainer">
                    <button @click="toggleLangMenu()" class="flex items-center gap-1.5 bg-white border border-zinc-200 px-3 py-1.5 rounded-full text-sm font-medium text-zinc-600 hover:text-zinc-900 hover:border-zinc-300 transition-all">
                        <i data-lucide="globe" class="w-4 h-4"></i>
                        <span id="current-lang-display">中文</span>
                        <i data-lucide="chevron-down" class="w-3.5 h-3.5"></i>
                    </button>
                    <div id="langDropdown" class="hidden absolute right-0 top-full mt-2 w-32 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-zinc-100 p-1.5 z-50">
                        <button @click="selectLang('zh', '中文')" class="lang-item w-full text-left px-3 py-2 rounded-lg text-sm font-bold text-zinc-900 bg-zinc-50 transition-colors" data-i18n="lang_zh">中文</button>
                        <button @click="selectLang('en', 'English')" class="lang-item w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 transition-colors" data-i18n="lang_en">English</button>
                    </div>
                </div>
            </div>
            <div class="w-full max-w-[380px] -mt-10">
                <!-- 找回密码区域内容 -->
                <div class="animate-in fade-in duration-300">
                <!-- Logo -->
                <div class="mb-4">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeAAAACQCAYAAADQgbjgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAgAElEQVR4nOy9eXgkyV3n/Y0j76y7VFVSqXSru9Xdc49tjO2xx9gYY46FPQAD9vqBF6+BNfuysLDAglkWY6+x8QsvrLleDOZ4dw0sa5blMDvGx/rYmfFc3dO31GodLal1laS6MjMi9o+UZnq6K0sttaZb6s7P82SrpcyKjIyKjF/E7wogJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJuaugtzuCrxcvOHhr6WNeg1CBJBKguu6+t8nnlHtrn3wyDEa+D7dagxKqTJtR37pmSfbXh8TExMTExPThoePHu8F8NfJTOrzyUziMTfl/g2Aj4/2Vnqvvba7VBoG8KRlu+NWIjluOYlxplmnda7/cSmd0W555WNiYmJiYg4iD4wcKgD4Sw7DA6USgASDBFA1Tfv9h/r6c1vXupbOAczAJJIRLkGJBCOSa7oE2LyhG28ZLpbuWC1BTExMTMztg97uCuw1SihhMGclQCAhCQAEEAgYqAMS/NjZS5NfTiXd1xddm5BQA+8aTUMJJQSkCiBUIKgUgHBcyzaCQJhjlf47rp1iYmJiYm4vd5xgUVJAkgCAIIBoZN3koZ50btB2rF9qNrwGgIzjJHscw9JN0+4F0GyhOXd89NCxSirlDvX29lhE+xAArVpf++RUfXH51NTk8/eNjFZu75PFxMTExMTsY+7tH8xznf9nAB6AjaxuagAwNjhcATDjIiMBLgAE4aFJAFOH+gdfsA/39vQWAcwSokuASwCz6UTuTUf6+mN1dExMTEzMnnDHrYADqUgQABREASCMMw4AbFMfvUHWQUEJGKOgnJIXfJ/JCx7PmuctuJbzvYSzcQMGACjLNdZOX5qMvaJjYmJiYvYEfrsrsNd4UlKmsaZoBSqVyBjC0M+mDEMtNBqcMlokAhAU4NJEoAQ40eDDAyEvLm4nFhdUxnE+y4n3RAuiD4AjAvnmVDIra7V1CKmUUkEA4Jnb9qAxMTExMTH7hZFKbzeAzxLCAwImQZnUiClBqASopIRv/p9LClOCc6kTVwKYPjIwUr66rIxtMU3j/xVgAQiToEQATFA4AYMbAFjKuFnztjxoTExMTMyB545YAffluuxLS4uvE5QXAdYHpVEQgJAAvmoBjIIGFFKJ8AOEgSoOKQQ81QAABbxUu0wIIYQyixEQoQQ44SQgApK2CJUaoKhpOk56QCPLTNdBGFW6bsjnL46LW94AMTExMTExt5qkbWoA5jiMgBJTghlSR0pS4koQTYJpksCQILqkVJMgTGrEkmBcAlQSwjedsIZesgLOujY3TfPTIIYwkZJgluTEkQS2BDWlyVMSgI/Q2asFoAlg2tL1Hy4nknECj5iYmJiYjhx4JywW2m6tgEpKlAKUgIcNSNUCCAUXxubaNgDjFFAi8FXDgwg8QPpKBT6Apro2LacCQJWA7qNJNwDZRECboACIImgGGwAYg8Y5h6kBmg6g0PC810tQ/ZY2QkxMTEzMgePAq6A3k2l4XBIERMGRFmpGE/AlIIEALQAAJQy+17r0wLF731pdmL8ASgBCCSFEcc7lmcnx4OpyFQiBRBMtAgoGSSiIBAR8cKUh4ASAAgIFQQSIolAgoXS+c1Nsx8TExMTsEQdeAC/X6r5t... [truncated]" class="w-32 md:w-36 transition-transform hover:scale-105 cursor-pointer">
                </div>
                <!-- 标题 -->
                <div class="mb-6 text-left">
                    <h2 class="text-2xl font-bold text-zinc-900 tracking-tight" data-i18n="forgot_title">找回密码</h2>
                    <p class="text-sm text-zinc-400 mt-1 font-serif" data-i18n="forgot_subtitle">重置您的账户密码。</p>
                </div>

                <!-- 表单 -->
                <div class="space-y-5">
                    <!-- 第一步：邮箱与验证码 -->
                    <div v-if="step === 1" class="space-y-4 animate-in fade-in duration-300">
                        <div class="relative group">
                            <input type="email" data-placeholder="phone_number" placeholder="邮箱" class="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-5 py-4 text-sm outline-none focus:border-zinc-400 focus:bg-white transition-all shadow-inner">
                        </div>
                        <div class="flex gap-2">
                            <input type="text" data-placeholder="verification_code" placeholder="验证码" class="flex-1 bg-zinc-50 border border-zinc-200 rounded-2xl px-5 py-4 text-sm outline-none focus:border-zinc-400 focus:bg-white transition-all shadow-inner">
                            <button id="verify-btn" @click="startCountdown()" class="bg-zinc-100 text-zinc-600 px-6 rounded-2xl text-xs font-bold hover:bg-zinc-200 transition-all whitespace-nowrap active:scale-95 min-w-[80px]" data-i18n="get_code">获取验证码</button>
                        </div>
                    </div>

                    <!-- 第二步：设置新密码 -->
                    <div v-if="step === 2" class="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                        <div class="relative group">
                            <input type="password" data-placeholder="new_password" placeholder="新密码" class="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-5 py-4 text-sm outline-none focus:border-zinc-400 focus:bg-white transition-all shadow-inner">
                        </div>
                        <div class="relative group">
                            <input type="password" data-placeholder="confirm_password" placeholder="确认新密码" class="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-5 py-4 text-sm outline-none focus:border-zinc-400 focus:bg-white transition-all shadow-inner">
                        </div>
                    </div>

                    <!-- 按钮 -->
                    <button v-if="step === 1" @click="step = 2" class="w-full bg-zinc-900 hover:bg-zinc-800 text-white font-bold py-4 rounded-2xl transition-all transform active:scale-95 text-sm shadow-xl shadow-zinc-200 flex items-center justify-center gap-2">
                        <span data-i18n="next_step">下一步</span> <i data-lucide="arrow-right" class="w-4 h-4"></i>
                    </button>
                    <button v-else @click="$router.push('/')" class="w-full bg-zinc-900 hover:bg-zinc-800 text-white font-bold py-4 rounded-2xl transition-all transform active:scale-95 text-sm shadow-xl shadow-zinc-200 flex items-center justify-center gap-2">
                        <span data-i18n="reset_now">重置密码</span> <i data-lucide="check" class="w-4 h-4"></i>
                    </button>

                    <div class="mt-6 text-center text-xs font-medium text-zinc-500">
                        <span @click="$router.push('/')" class="cursor-pointer text-zinc-900 hover:underline transition-colors" data-i18n="go_login">返回登录</span>
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
            <div id="blob1" class="floating-blob w-[400px] h-[400px] top-[-100px] right-[-100px]" style="background-color: #3b82f6;"></div>
            <div id="blob2" class="floating-blob w-[300px] h-[300px] bottom-[-50px] left-[-50px]" style="animation-delay: -5s; background-color: #a855f7;"></div>
            
            <div class="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                <div class="relative w-full aspect-video rounded-[32px] overflow-hidden border border-white/10 shadow-2xl mb-12">
                    <img src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1200" class="w-full h-full object-cover opacity-60">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div class="absolute bottom-8 left-8 right-8 text-left">
                        <div class="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] text-white font-bold mb-3">AI 艺术精选</div>
                        <h3 class="text-xl font-bold text-white mb-2">「色彩的抽象流动」</h3>
                        <p class="text-xs text-zinc-400 font-serif line-clamp-2">感受色彩的律动，重塑视觉的边界。</p>
                    </div>
                </div>
                
                <div class="space-y-2">
                    <p class="text-3xl font-extrabold text-white tracking-tighter" style="line-height: 1.4;">
                        <span data-i18n="slogan_prefix">过啦一下，你就是</span><span id="mode-word" class="mode-word-slot transition-colors duration-300 ease-in-out">艺术</span><span data-i18n="slogan_suffix">大师。</span>
                    </p>
                    <p class="text-zinc-500 text-sm font-serif" data-i18n="slogan_en">Input imagination, output the world.</p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const step = ref(1)

        const i18nData = {
            zh: {
                lang_zh: "中文",
                lang_en: "English",
                forgot_title: "找回密码",
                forgot_subtitle: "重置您的账户密码。",
                phone_number: "邮箱",
                verification_code: "验证码",
                new_password: "新密码",
                confirm_password: "确认新密码",
                get_code: "获取验证码",
                code_sent: "验证码已发送至邮箱，请注意查收",
                next_step: "下一步",
                reset_now: "重置密码",
                go_login: "返回登录",
                slogan_prefix: "过啦一下，你就是",
                slogan_suffix: "大师。",
                slogan_en: "Input imagination, output the world.",
                mode_artist: "艺术",
                mode_storybook: "绘本"
            },
            en: {
                lang_zh: "中文",
                lang_en: "English",
                forgot_title: "Forgot Password",
                forgot_subtitle: "Reset your account password.",
                phone_number: "Email",
                verification_code: "Verification Code",
                new_password: "New Password",
                confirm_password: "Confirm New Password",
                get_code: "Get Code",
                code_sent: "Verification code sent to email, please check your inbox.",
                next_step: "Next Step",
                reset_now: "Reset Password",
                go_login: "Back to Login",
                slogan_prefix: "With GuolaYa, you're a ",
                slogan_suffix: " Master.",
                slogan_en: "Input imagination, output the world.",
                mode_artist: "Art",
                mode_storybook: "Story"
            },
        };

        function getCurrentLang() { return localStorage.getItem('guolaya-lang') || 'zh'; }
        function setCurrentLang(lang) { localStorage.setItem('guolaya-lang', lang); }

        // 创意模式词状态 (艺术/绘本)
        let isArtist = true;

        function applyTranslations(lang) {
            const data = i18nData[lang];
            if (!data) return;
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (data[key]) el.innerHTML = data[key];
            });
            document.querySelectorAll('[data-placeholder]').forEach(el => {
                const key = el.getAttribute('data-placeholder');
                if (data[key]) el.placeholder = data[key];
            });
        }

        function toggleLangMenu() { document.getElementById('langDropdown').classList.toggle('hidden'); }
        function selectLang(langCode, langLabel) {
            document.getElementById('current-lang-display').innerText = langLabel;
            document.getElementById('langDropdown').classList.add('hidden');
            setCurrentLang(langCode);
            applyTranslations(langCode);

            // 更新模式词 - 直接使用 langCode 参数
            const modeWord = document.getElementById('mode-word');
            if (modeWord && i18nData[langCode]) {
                modeWord.textContent = isArtist ? i18nData[langCode].mode_artist : i18nData[langCode].mode_storybook;
            }
        }

        function showToast(message) {
            const toast = document.createElement('div');
            toast.className = 'fixed top-4 left-1/2 -translate-x-1/2 bg-zinc-900 text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg z-[200]';
            toast.style.cssText = 'animation: fadeInDown 0.3s ease-out;';
            toast.textContent = message;
            document.body.appendChild(toast);
            setTimeout(() => {
                toast.style.animation = 'fadeOutUp 0.3s ease-out';
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        }

        let countdown = 0;
        let timer = null;
        function startCountdown() {
            const btn = document.getElementById('verify-btn');
            if (!btn || countdown > 0) return;
            const lang = getCurrentLang();
            const data = i18nData[lang] || i18nData['zh'];
            showToast(data.code_sent);
            countdown = 60;
            btn.disabled = true;
            btn.textContent = countdown + 's';
            timer = setInterval(() => {
                countdown--;
                if (countdown <= 0) {
                    clearInterval(timer);
                    btn.textContent = '再次发送';
                    btn.disabled = false;
                } else {
                    btn.textContent = countdown + 's';
                }
            }, 1000);
        }

onMounted(() => {
    if (typeof lucide !== 'undefined') lucide.createIcons();
    const savedLang = getCurrentLang();
    const langLabels = { zh: '中文', en: 'English' };
    document.getElementById('current-lang-display').innerText = langLabels[savedLang];
    applyTranslations(savedLang);
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
        #mode-word { font-family: 'ZCOOL KuaiLe', 'STKaiti', 'KaiTi', 'Kaiti SC', cursive !important; font-weight: 400 !important; font-size: 1.2em; color: #4DB8FF; display: inline-flex; align-items: center; justify-content: center; min-width: 2.8em; margin: 0 0.08em; white-space: nowrap; line-height: 1; transition: color 300ms ease; font-synthesis: none; -webkit-font-smoothing: antialiased; text-rendering: geometricPrecision; }
        .login-container { height: 100vh; display: flex; }
        .left-panel { flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; background: white; padding: 40px; position: relative; z-index: 10; }
        .right-panel { flex: 1.2; position: relative; overflow: hidden; display: none; }
        @media (min-width: 768px) { .right-panel { display: block; } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        .floating-blob { position: absolute; border-radius: 50%; filter: blur(60px); opacity: 0.4; animation: float 10s ease-in-out infinite; transition: background-color 2s ease-in-out; }
</style>
