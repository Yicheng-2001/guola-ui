<template>
  <div class="buy-points-view">
    <!-- 极简浅色顶部导航 -->
    <header class="buy-points-header">
      <div class="header-back" @click="$router.push('/workbench')">
        <button class="back-btn">
          <i data-lucide="arrow-left" class="icon-sm"></i>
        </button>
        <span class="header-back-text">返回工作台</span>
        <img
          src="data:image/png;base64,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"
          alt="Horse Logo"
          class="brand-logo"
          onerror="
            this.src = 'https://placehold.co/40x40/transparent/333?text=Logo'
          "
        />
      </div>

      <div class="header-right">
        <div class="points-pill">
          <i data-lucide="database" class="points-pill-icon"></i>
          <span class="points-pill-label">当前可用:</span>
          <span class="points-pill-value">1,200</span>
        </div>
        <button class="avatar-btn">
          <img
            src="https://api.dicebear.com/7.x/notionists/svg?seed=Guola&backgroundColor=f4f4f5"
            alt="User Avatar"
          />
        </button>
      </div>
    </header>

    <main class="buy-points-main">
      <div class="buy-points-container">
        <!-- Header Text -->
        <div class="hero-section">
          <div class="hero-icon-wrap">
            <div class="hero-icon-bg"></div>
            <i data-lucide="zap" class="hero-icon"></i>
          </div>
          <h1 class="hero-title">购买算力积分</h1>
          <p class="hero-copy">
            积分为虚拟商品，采用先收费后服务的方式。充值成功后，不支持退款或反向兑换为人民币。有效期为
            1 年。
          </p>
        </div>

        <div class="content-row">
          <!-- 左侧套餐选择区 -->
          <div class="plans-grid">
            <!-- 500积分 -->
            <div
              class="pricing-card"
              @click="selectPlan($event.currentTarget, '500', '30')"
            >
              <div class="card-top">
                <div>
                  <h3 class="card-title">
                    500 <span class="card-unit">积分</span>
                  </h3>
                  <p class="card-copy">约可生成 25 个 1080P 视频</p>
                </div>
                <div class="check-circle">
                  <div class="check-dot"></div>
                </div>
              </div>
              <div class="card-price-row">
                <span class="card-currency">¥</span>
                <span class="card-price">30</span>
              </div>
            </div>

            <!-- 750积分 -->
            <div
              class="pricing-card"
              @click="selectPlan($event.currentTarget, '750', '45')"
            >
              <div class="card-top">
                <div>
                  <h3 class="card-title">
                    750 <span class="card-unit">积分</span>
                  </h3>
                  <p class="card-copy">约可生成 37 个 1080P 视频</p>
                </div>
                <div class="check-circle">
                  <div class="check-dot"></div>
                </div>
              </div>
              <div class="card-price-row">
                <span class="card-currency">¥</span>
                <span class="card-price">45</span>
              </div>
            </div>

            <!-- 1500积分 -->
            <div
              class="pricing-card"
              @click="selectPlan($event.currentTarget, '1500', '90')"
            >
              <div class="recommend-badge">性价比优选</div>
              <div class="card-top">
                <div>
                  <h3 class="card-title">
                    1500 <span class="card-unit">积分</span>
                  </h3>
                  <p class="card-copy">约可生成 75 个 1080P 视频</p>
                </div>
                <div class="check-circle">
                  <div class="check-dot"></div>
                </div>
              </div>
              <div class="card-price-row">
                <span class="card-currency">¥</span>
                <span class="card-price">90</span>
              </div>
            </div>

            <!-- 2250积分 -->
            <div
              class="pricing-card"
              @click="selectPlan($event.currentTarget, '2250', '135')"
            >
              <div class="card-top">
                <div>
                  <h3 class="card-title">
                    2250 <span class="card-unit">积分</span>
                  </h3>
                  <p class="card-copy">重度创作者推荐</p>
                </div>
                <div class="check-circle">
                  <div class="check-dot"></div>
                </div>
              </div>
              <div class="card-price-row">
                <span class="card-currency">¥</span>
                <span class="card-price">135</span>
              </div>
            </div>

            <!-- 4500积分 -->
            <div
              class="pricing-card"
              @click="selectPlan($event.currentTarget, '4500', '250')"
            >
              <div class="recommend-badge-workshop">工作室首选</div>
              <div class="card-top">
                <div>
                  <h3 class="card-title">
                    4500 <span class="card-unit">积分</span>
                  </h3>
                  <p class="card-copy">海量生成，畅享无忧</p>
                </div>
                <div class="check-circle">
                  <div class="check-dot"></div>
                </div>
              </div>
              <div class="card-price-row">
                <span class="card-currency">¥</span>
                <span class="card-price">250</span>
              </div>
            </div>

            <!-- 9000积分 -->
            <div
              class="pricing-card"
              @click="selectPlan($event.currentTarget, '9000', '500')"
            >
              <div class="card-top">
                <div>
                  <h3 class="card-title">
                    9000 <span class="card-unit">积分</span>
                  </h3>
                  <p class="card-copy">企业级算力包</p>
                </div>
                <div class="check-circle">
                  <div class="check-dot"></div>
                </div>
              </div>
              <div class="card-price-row">
                <span class="card-currency">¥</span>
                <span class="card-price">500</span>
              </div>
            </div>
          </div>

          <!-- 右侧结算区 -->
          <div class="checkout-wrap">
            <div class="checkout-card">
              <h3 class="checkout-title">订单详情</h3>

              <div class="summary-row">
                <span class="summary-label">充值额度</span>
                <span class="summary-value" id="summary-points">1500 积分</span>
              </div>

              <div class="summary-row-total">
                <span class="summary-label">账户实付</span>
                <span class="summary-price" id="summary-price">¥ 90</span>
              </div>

              <div class="pay-section">
                <span class="pay-title">支付方式</span>
                <div class="pay-grid">
                  <button
                    class="pay-method-btn"
                    data-method="wechat"
                    @click="setPayMethod($event.currentTarget)"
                  >
                    <svg viewBox="0 0 24 24" class="pay-icon" fill="#07C160">
                      <path
                        d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-7.062-6.122zM14.383 13.6c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.842 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982z"
                      />
                    </svg>
                    <span class="pay-label">微信</span>
                    <div class="check-mark"></div>
                  </button>
                  <button
                    class="pay-method-btn"
                    data-method="alipay"
                    @click="setPayMethod($event.currentTarget)"
                  >
                    <svg
                      class="pay-icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="9106"
                    >
                      <path
                        d="M789 610.3c-38.7-12.9-90.7-32.7-148.5-53.6 34.8-60.3 62.5-129 80.7-203.6H530.5v-68.6h233.6v-38.3H530.5V132h-95.4c-16.7 0-16.7 16.5-16.7 16.5v97.8H182.2v38.3h236.3v68.6H223.4v38.3h378.4c-13.8 47.6-32.4 92.3-54.5 132.9-122.8-40.4-253.8-73.2-336.1-53-52.6 13-86.5 36.1-106.5 60.3-91.4 111-25.9 279.6 167.2 279.6C386 811.2 496 747.6 581.2 643 708.3 704 960 808.7 960 808.7V659.4s-31.6-2.5-171-49.1zM253.9 746.6c-150.5 0-195-118.3-120.6-183.1 24.8-21.9 70.2-32.6 94.4-35 89.4-8.8 172.2 25.2 269.9 72.8-68.8 89.5-156.3 145.3-243.7 145.3z"
                        fill="#1677FF"
                        p-id="9107"
                      ></path>
                    </svg>
                    <span class="pay-label">支付宝</span>
                    <div class="check-mark"></div>
                  </button>
                </div>
              </div>

              <button
                @click="$router.push('/pay-success')"
                class="pay-submit-btn"
              >
                <i data-lucide="shield-check" class="icon-sm"></i> 立即支付
              </button>
            </div>
          </div>
        </div>

        <div class="footer-copy">
          © 2026 北京织知玄华智能科技有限公司. 保留所有权利.
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

if (typeof lucide !== "undefined") {
  lucide.createIcons();
}

function selectPlan(element, points, price) {
  document.querySelectorAll(".pricing-card").forEach((card) => {
    card.classList.remove("selected");
  });

  element.classList.add("selected");
  document.getElementById("summary-points").innerText = points + " ???";
  document.getElementById("summary-price").innerText = "? " + price;
}

function setPayMethod(element) {
  document.querySelectorAll(".pay-method-btn").forEach((btn) => {
    btn.classList.remove(
      "pay-method-active",
      "pay-method-wechat",
      "pay-method-alipay",
    );
  });

  element.classList.add("pay-method-active");
  if (element.dataset.method === "wechat") {
    element.classList.add("pay-method-wechat");
  } else {
    element.classList.add("pay-method-alipay");
  }
}

onMounted(() => {
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  const cards = document.querySelectorAll(".pricing-card");
  if (cards.length >= 3) {
    selectPlan(cards[2], "1500", "90");
  }

  const defaultPay = document.querySelector(
    '.pay-method-btn[data-method="wechat"]',
  );
  if (defaultPay) {
    setPayMethod(defaultPay);
  }
});
</script>

<style scoped lang="scss">
.buy-points-view {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: #f7f7f8;
  color: #18181b;
  font-family: "Noto Serif SC", "Songti SC", "STSong", serif;
  *::selection {
    background: #e4e4e7;
  }
}
.buy-points-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 72px;
  padding: 0 32px;
  border-bottom: 1px solid #e4e4e7;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  z-index: 30;
  flex-shrink: 0;
}
.header-back {
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  &:hover {
    .back-btn {
      background: #f4f4f5;
    }
    .icon-sm {
      color: #18181b;
    }
  }
}
.back-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid #e4e4e7;
  border-radius: 999px;
  background: #fafafa;
  color: #71717a;
  transition: all 0.2s ease;
}
.icon-sm {
  width: 16px;
  height: 16px;
}
.header-back-text {
  display: none;
  color: #18181b;
  font-weight: 700;
  letter-spacing: 0.01em;
}
.brand-logo {
  width: auto;
  height: 32px;
  object-fit: contain;
}
.header-right {
  display: flex;
  align-items: center;
  gap: 12px;
}
.points-pill {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: 1px solid #fef3c7;
  border-radius: 999px;
  background: #fffbeb;
}
.points-pill-icon {
  width: 16px;
  height: 16px;
  color: #f59e0b;
}
.points-pill-label {
  color: #71717a;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.01em;
}
.points-pill-value {
  color: #d97706;
  font-size: 14px;
  font-weight: 800;
  font-family:
    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace;
}
.avatar-btn {
  width: 40px;
  height: 40px;
  overflow: hidden;
  border: 1px solid #e4e4e7;
  border-radius: 999px;
  background: #f4f4f5;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    display: block;
  }
}
.buy-points-main {
  position: relative;
  flex: 1;
  width: 100%;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
}
.buy-points-container {
  position: relative;
  z-index: 10;
  max-width: 1000px;
  margin: 0 auto;
  padding: 48px 32px;
}
.hero-section {
  margin-bottom: 48px;
  text-align: center;
  animation: fadeSlideUp 0.7s ease both;
}
.hero-icon-wrap {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  margin-bottom: 24px;
  border: 1px solid #f4f4f5;
  border-radius: 2rem;
  background: #fff;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.04);
  overflow: hidden;
  &:hover .hero-icon {
    transform: scale(1.1);
  }
}
.hero-icon-bg {
  position: absolute;
  inset: 0;
  opacity: 0.8;
  background: linear-gradient(to bottom right, #fffbeb, transparent);
}
.hero-icon {
  position: relative;
  z-index: 10;
  width: 40px;
  height: 40px;
  color: #f59e0b;
  stroke-width: 1.5;
  transition: transform 0.5s ease;
}
.hero-title {
  margin-bottom: 12px;
  color: #18181b;
  font-size: 40px;
  font-style: italic;
  font-weight: 600;
  letter-spacing: -0.02em;
}
.hero-copy {
  max-width: 36rem;
  margin: 0 auto;
  color: #71717a;
  font-size: 14px;
  line-height: 1.625;
  letter-spacing: 0.01em;
}
.content-row {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
}
.plans-grid {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 16px;
  width: 100%;
  flex: 1;
  animation: fadeSlideUp 0.7s ease both;
  animation-delay: 0.1s;
}
.pricing-card {
  position: relative;
  overflow: hidden;
  padding: 24px;
  border: 1px solid #e4e4e7;
  border-radius: 24px;
  background: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 2px;
    background: linear-gradient(135deg, transparent, transparent);
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    transition: all 0.3s ease;
  }
  &:hover:not(.selected) {
    border-color: #d4d4d8;
  }
  &.selected {
    background: #fffaf0;
    box-shadow: 0 10px 30px rgba(245, 158, 11, 0.1);
    transform: translateY(-2px);
    &::before {
      background: linear-gradient(135deg, #f59e0b, #fbbf24);
    }
    .check-circle {
      border-color: #f59e0b;
    }
    .check-dot {
      transform: scale(1);
    }
  }
}
.recommend-badge,
.recommend-badge-workshop {
  position: absolute;
  top: 0;
  right: 0;
  padding: 4px 8px;
  border-bottom-left-radius: 12px;
  border-top-right-radius: 22px;
  color: #fff;
  font-size: 10px;
  font-weight: 700;
}
.recommend-badge {
  background: linear-gradient(135deg, #ef4444, #f59e0b);
}
.recommend-badge-workshop {
  background: linear-gradient(to right, #6366f1, #a855f7);
}
.card-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 24px;
}
.card-title {
  display: flex;
  align-items: baseline;
  gap: 4px;
  margin: 0;
  color: #18181b;
  font-size: 20px;
  font-weight: 900;
  font-family:
    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace;
}
.card-unit {
  color: #a1a1aa;
  font-size: 14px;
  font-weight: 700;
}
.card-copy {
  margin: 4px 0 0;
  color: #a1a1aa;
  font-size: 12px;
  letter-spacing: 0.01em;
}
.check-circle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: 2px solid #e4e4e7;
  border-radius: 999px;
}
.check-dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: #f59e0b;
  transform: scale(0);
  transition: transform 0.3s ease;
}
.card-price-row {
  display: flex;
  align-items: baseline;
  gap: 4px;
}
.card-currency {
  color: #71717a;
  font-size: 14px;
  font-weight: 700;
}
.card-price {
  color: #18181b;
  font-size: 30px;
  font-weight: 900;
}
.checkout-wrap {
  width: 100%;
  flex-shrink: 0;
  animation: fadeSlideRight 0.7s ease both;
  animation-delay: 0.2s;
}
.checkout-card {
  position: sticky;
  top: 32px;
  padding: 32px;
  border: 1px solid #e4e4e7;
  border-radius: 32px;
  background: #fff;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.03);
}
.checkout-title {
  margin: 0 0 24px;
  color: #18181b;
  font-size: 14px;
  font-style: italic;
  font-weight: 600;
  letter-spacing: -0.02em;
}
.summary-row,
.summary-row-total {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 16px;
  border-bottom: 1px solid #f4f4f5;
}
.summary-row {
  margin-bottom: 16px;
}
.summary-row-total {
  margin-bottom: 24px;
}
.summary-label {
  color: #71717a;
  font-size: 14px;
  font-weight: 500;
}
.summary-value {
  color: #18181b;
  font-size: 14px;
  font-weight: 700;
  font-family:
    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace;
}
.summary-price {
  color: #f59e0b;
  font-size: 18px;
  font-weight: 900;
  font-family:
    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace;
}
.pay-section {
  margin-bottom: 24px;
}
.pay-title {
  display: block;
  margin-bottom: 12px;
  color: #a1a1aa;
  font-size: 12px;
  font-style: italic;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.pay-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}
.pay-method-btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  overflow: hidden;
  padding: 12px 0;
  border: 1px solid #e4e4e7;
  border-radius: 12px;
  background: #fff;
  transition: all 0.2s ease;
  &:hover {
    border-color: #d4d4d8;
  }
  .check-mark {
    opacity: 0;
  }
  &.pay-method-active {
    border-width: 2px;
    .check-mark {
      opacity: 1;
    }
  }
  &.pay-method-wechat {
    border-color: #07c160;
    background: rgba(7, 193, 96, 0.05);
    .check-mark {
      background: #07c160;
    }
  }
  &.pay-method-alipay {
    border-color: #1677ff;
    background: rgba(22, 119, 255, 0.05);
    .check-mark {
      background: #1677ff;
    }
  }
}
.pay-icon {
  width: 20px;
  height: 20px;
}
.pay-label {
  color: #3f3f46;
  font-size: 12px;
  font-weight: 700;
}
.check-mark {
  position: absolute;
  right: -10px;
  bottom: -10px;
  width: 24px;
  height: 24px;
  transform: rotate(45deg);
  transition: opacity 0.2s ease;
}
.pay-submit-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 16px 0;
  border: 0;
  border-radius: 16px;
  background: #18181b;
  box-shadow: 0 20px 20px rgba(228, 228, 231, 0.5);
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.01em;
  transition: all 0.2s ease;
  &:hover {
    background: #27272a;
  }
  &:active {
    transform: scale(0.95);
  }
}
.footer-copy {
  margin-top: 64px;
  color: #a1a1aa;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
}
@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeSlideRight {
  from {
    opacity: 0;
    transform: translateX(32px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@media (min-width: 768px) {
  .header-back-text {
    display: inline;
  }
  .plans-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (min-width: 1024px) {
  .content-row {
    flex-direction: row;
  }
  .checkout-wrap {
    width: 320px;
  }
}
</style>
