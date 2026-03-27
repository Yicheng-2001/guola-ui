<template>
  <div class="pay-success-page">
    <!-- 简单的粒子效果背景 -->
    <div class="confetti-container" id="confetti"></div>

    <div class="success-card">
      <!-- 成功动画徽章 -->
      <div class="success-icon-wrap">
        <!-- 外层柔和光晕 -->
        <div class="success-glow"></div>
        <!-- 核心成功圆 -->
        <div class="success-circle">
          <!-- SVG Check -->
          <svg class="success-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <polyline class="success-check" points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
      </div>

      <div class="intro-block">
        <h2 class="intro-title">{{ t('pay_success_title') }}</h2>
        <p class="intro-copy">{{ t('pay_success_desc') }}</p>
      </div>

      <div class="summary-card">
        <div class="summary-row">
          <span class="summary-label">{{ t('pay_success_recharge_amount') }}</span>
          <span class="summary-value">{{ t('buy_points_amount_format', { points: '+1500' }) }}</span>
        </div>
        <div class="summary-row">
          <span class="summary-label">{{ t('pay_success_paid_amount') }}</span>
          <span class="summary-value">{{ t('buy_price_format', { price: '90.00' }) }}</span>
        </div>
        <div class="summary-row-last">
          <span class="summary-label">{{ t('pay_success_current_balance') }}</span>
          <span class="summary-value-highlight">{{ t('buy_points_amount_format', { points: '2,700' }) }}</span>
        </div>
      </div>

      <div class="action-row">
        <button @click="$router.push('/buy-points')" class="action-btn-secondary">
          {{ t('pay_success_back_detail') }}
        </button>
        <button @click="$router.push('/workbench')" class="action-btn-primary">
          {{ t('pay_success_go_create') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const { t } = useI18n()

function createConfetti() {
  const container = document.getElementById('confetti')
  if (!container) return

  container.innerHTML = ''

  const colors = ['#f59e0b', '#10b981', '#3b82f6', '#ef4444', '#8b5cf6']

  for (let i = 0; i < 30; i++) {
    const conf = document.createElement('div')
    conf.classList.add('confetti')
    conf.style.left = Math.random() * 100 + 'vw'
    conf.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
    conf.style.animationDuration = Math.random() * 2 + 2 + 's'
    conf.style.animationDelay = Math.random() * 2 + 's'

    if (Math.random() > 0.5) {
      conf.style.borderRadius = '50%'
    }

    const size = Math.random() * 8 + 4 + 'px'
    conf.style.width = size
    conf.style.height = size

    container.appendChild(conf)
  }
}

onMounted(() => {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons()
  }
  createConfetti()
})
</script>

<style scoped lang="scss">
.pay-success-page {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #f7f7f8;
}

.confetti-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

.confetti {
  position: absolute;
  width: 10px;
  height: 10px;
  background: #f59e0b;
  animation: fall 3s linear infinite;
}

.success-card {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  max-width: 400px;
  padding: 40px;
  border: 1px solid #f4f4f5;
  border-radius: 32px;
  background: #ffffff;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.06);
  text-align: center;
}

.success-icon-wrap {
  position: relative;
  width: 96px;
  height: 96px;
  margin-bottom: 24px;
}

.success-glow {
  position: absolute;
  inset: 0;
  border-radius: 9999px;
  background: #d1fae5;
  opacity: 0.5;
  transform: scale(1.5);
  animation: pulse 2s ease-in-out infinite;
}

.success-circle {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  background: linear-gradient(to bottom right, #34d399, #059669);
  box-shadow: 0 10px 20px rgba(16, 185, 129, 0.3);
  animation: scaleIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

.success-icon {
  width: 48px;
  height: 48px;
  color: #ffffff;
}

.success-check {
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  animation: dash 0.8s cubic-bezier(0.65, 0, 0.45, 1) 0.3s forwards;
}

.intro-block {
  margin-bottom: 32px;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp 0.6s ease-out forwards;
  animation-delay: 0.5s;
}

.intro-title {
  margin-bottom: 8px;
  color: #18181b;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -0.025em;
}

.intro-copy {
  color: #71717a;
  font-size: 14px;
  font-family: serif;
}

.summary-card {
  width: 100%;
  margin-bottom: 32px;
  padding: 20px;
  border: 1px solid #e4e4e7;
  border-radius: 16px;
  background: #fafafa;
  text-align: left;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp 0.6s ease-out forwards;
  animation-delay: 0.5s;
}

.summary-row,
.summary-row-last {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.summary-row {
  margin-bottom: 12px;
}

.summary-label {
  color: #71717a;
  font-size: 12px;
}

.summary-value {
  color: #18181b;
  font-size: 14px;
  font-weight: 700;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
}

.summary-value-highlight {
  color: #f59e0b;
  font-size: 14px;
  font-weight: 800;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
}

.action-row {
  display: flex;
  gap: 12px;
  width: 100%;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp 0.6s ease-out forwards;
  animation-delay: 0.7s;
}

.action-btn-secondary,
.action-btn-primary {
  flex: 1;
  padding: 14px 0;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 700;
  transition: all 0.2s ease;

  &:active {
    transform: scale(0.95);
  }
}

.action-btn-secondary {
  border: 1px solid #e4e4e7;
  background: #ffffff;
  color: #52525b;

  &:hover {
    background: #fafafa;
    color: #18181b;
  }
}

.action-btn-primary {
  border: 1px solid transparent;
  background: #18181b;
  color: #ffffff;
  box-shadow: 0 10px 15px rgba(228, 228, 231, 0.5);

  &:hover {
    background: #27272a;
  }
}

@keyframes scaleIn {
  0% {
    opacity: 0;
    transform: scale(0);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.5;
  }

  50% {
    opacity: 0.3;
  }
}

@keyframes fall {
  0% {
    opacity: 1;
    transform: translateY(-100%) rotate(0deg);
  }

  100% {
    opacity: 0;
    transform: translateY(100vh) rotate(720deg);
  }
}
</style>
