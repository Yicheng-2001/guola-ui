<template>
  <div class="flex items-center justify-center h-screen w-full relative">
    

    <!-- 简单的粒子效果背景 -->
    <div class="confetti-container" id="confetti"></div>

    <div class="bg-white rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-zinc-100 p-10 max-w-[400px] w-[90vw] relative z-10 flex flex-col items-center text-center">
        
        <!-- 成功动画徽章 -->
        <div class="relative w-24 h-24 mb-6">
            <!-- 外层柔和光晕 -->
            <div class="absolute inset-0 bg-emerald-100 rounded-full scale-150 opacity-50 animate-pulse"></div>
            <!-- 核心成功圆 -->
            <div class="success-circle absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full shadow-lg shadow-emerald-500/30 flex items-center justify-center">
                <!-- SVG Check -->
                <svg class="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline class="success-check" points="20 6 9 17 4 12"></polyline>
                </svg>
            </div>
        </div>

        <div class="fade-up delay-1">
            <h2 class="text-2xl font-extrabold text-zinc-900 tracking-tight mb-2">支付成功</h2>
            <p class="text-sm text-zinc-500 font-serif mb-8">您的算力积分已安全存入账户</p>
        </div>

        <div class="w-full bg-zinc-50 border border-zinc-200 rounded-2xl p-5 mb-8 fade-up delay-1 text-left">
            <div class="flex justify-between items-center mb-3">
                <span class="text-xs text-zinc-500">充值额度</span>
                <span class="text-sm font-bold text-zinc-900 font-mono">+1500 积分</span>
            </div>
            <div class="flex justify-between items-center mb-3">
                <span class="text-xs text-zinc-500">支付金额</span>
                <span class="text-sm font-bold text-zinc-900 font-mono">¥ 90.00</span>
            </div>
            <div class="flex justify-between items-center">
                <span class="text-xs text-zinc-500">当前余额</span>
                <span class="text-sm font-extrabold text-amber-500 font-mono">2,700 积分</span>
            </div>
        </div>

        <div class="w-full flex gap-3 fade-up delay-2">
            <button @click="$router.push('/buy-points')" class="flex-1 bg-white border border-zinc-200 text-zinc-600 font-bold py-3.5 rounded-xl hover:bg-zinc-50 hover:text-zinc-900 transition-all transform active:scale-95 text-sm">
                返回详情
            </button>
            <button @click="$router.push('/workbench')" class="flex-1 bg-zinc-900 hover:bg-zinc-800 text-white font-bold py-3.5 rounded-xl transition-all transform active:scale-95 text-sm shadow-lg shadow-zinc-200/50">
                去创作
            </button>
        </div>
    </div>

    

  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()


        lucide.createIcons();
        
        // 简单的五彩纸屑生成
        function createConfetti() {
            const container = document.getElementById('confetti');
            const colors = ['#f59e0b', '#10b981', '#3b82f6', '#ef4444', '#8b5cf6'];
            
            for (let i = 0; i < 30; i++) {
                const conf = document.createElement('div');
                conf.classList.add('confetti');
                conf.style.left = Math.random() * 100 + 'vw';
                conf.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                conf.style.animationDuration = (Math.random() * 2 + 2) + 's';
                conf.style.animationDelay = Math.random() * 2 + 's';
                
                // 随机大小和形状
                if (Math.random() > 0.5) {
                    conf.style.borderRadius = '50%';
                }
                const size = Math.random() * 8 + 4 + 'px';
                conf.style.width = size;
                conf.style.height = size;
                
                container.appendChild(conf);
            }
        }
        
        // 页面加载完成后生成粒子
        onMounted(() => { createConfetti(); });
    

onMounted(() => {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
})
</script>

<style scoped>

        body { background-color: #F7F7F8; overflow: hidden; }
        
        .success-circle {
            animation: scaleIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        
        .success-check {
            stroke-dasharray: 100;
            stroke-dashoffset: 100;
            animation: dash 0.8s cubic-bezier(0.65, 0, 0.45, 1) 0.3s forwards;
        }

        .fade-up {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeUp 0.6s ease-out forwards;
        }

        .delay-1 { animation-delay: 0.5s; }
        .delay-2 { animation-delay: 0.7s; }

        @keyframes scaleIn {
            0% { transform: scale(0); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
        }

        @keyframes dash {
            to { stroke-dashoffset: 0; }
        }

        @keyframes fadeUp {
            to { opacity: 1; transform: translateY(0); }
        }
        
        /* 炫彩纸屑粒子效果 */
        .confetti-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
            overflow: hidden;
        }
        .confetti {
            position: absolute;
            width: 10px;
            height: 10px;
            background-color: #f59e0b;
            animation: fall 3s linear infinite;
        }
        @keyframes fall {
            0% { transform: translateY(-100%) rotate(0deg); opacity: 1; }
            100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
    
</style>
