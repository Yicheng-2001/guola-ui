<template>
  <div class="buy-points-view">
    <header class="buy-points-header">
      <div class="header-back" @click="$router.push('/workbench')">
        <button class="back-btn">
          <i data-lucide="arrow-left" class="icon-sm"></i>
        </button>
        <span class="header-back-text">{{ t('back_to_workbench') }}</span>
        <img
          src="https://placehold.co/140x32/ffffff/111111?text=GuolaYa"
          :alt="t('buy_points_logo_alt')"
          class="brand-logo"
        />
      </div>

      <div class="header-right">
        <div class="points-pill">
          <i data-lucide="database" class="points-pill-icon"></i>
          <span class="points-pill-label">{{ t('available_points') }}:</span>
          <span class="points-pill-value">{{ availablePointsDisplay }}</span>
        </div>
        <button class="avatar-btn">
          <img
            src="https://api.dicebear.com/7.x/notionists/svg?seed=Guola&backgroundColor=f4f4f5"
            :alt="t('buy_points_avatar_alt')"
          />
        </button>
      </div>
    </header>

    <main class="buy-points-main">
      <div class="buy-points-container">
        <div class="hero-section">
          <div class="hero-icon-wrap">
            <div class="hero-icon-bg"></div>
            <i data-lucide="zap" class="hero-icon"></i>
          </div>
          <h1 class="hero-title">{{ t('buy_points_page_title') }}</h1>
          <p class="hero-copy">{{ t('buy_points_page_desc') }}</p>
        </div>

        <div class="content-row">
          <div class="plans-grid">
            <div
              v-for="(plan, index) in plans"
              :key="plan.id || `${plan.points}-${index}`"
              class="pricing-card"
              :class="{ selected: index === selectedPlanIndex }"
              @click="selectPlan(index)"
            >
              <div v-if="plan.badgeText" :class="plan.badgeClass">{{ plan.badgeText }}</div>

              <div class="card-top">
                <div>
                  <h3 class="card-title">
                    {{ plan.points }} <span class="card-unit">{{ t('points') }}</span>
                  </h3>
                  <p class="card-copy">{{ plan.description }}</p>
                </div>
                <div class="check-circle">
                  <div class="check-dot"></div>
                </div>
              </div>

              <div class="card-price-row">
                <span class="card-currency">$</span>
                <span class="card-price">{{ plan.price }}</span>
              </div>
            </div>
          </div>

          <div class="checkout-wrap">
            <div class="checkout-card">
              <h3 class="checkout-title">{{ t('buy_points_order_details') }}</h3>

              <div class="summary-row">
                <span class="summary-label">{{ t('buy_points_order_amount') }}</span>
                <span class="summary-value">{{ summaryPointsText }}</span>
              </div>

              <div class="summary-row-total">
                <span class="summary-label">{{ t('buy_points_account_pay') }}</span>
                <span class="summary-price">{{ summaryPriceText }}</span>
              </div>

              <div class="pay-section">
                <span class="pay-title">{{ t('buy_points_pay_method') }}</span>
                <div class="pay-grid">
                  <button
                    class="pay-method-btn"
                    :class="{
                      'pay-method-active': selectedPayMethod === 'wechat',
                      'pay-method-wechat': selectedPayMethod === 'wechat'
                    }"
                    @click="setPayMethod('wechat')"
                  >
                    <svg viewBox="0 0 24 24" class="pay-icon" fill="#07C160">
                      <path
                        d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-7.062-6.122zM14.383 13.6c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.842 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982z"
                      />
                    </svg>
                    <span class="pay-label">{{ t('buy_pay_wechat') }}</span>
                    <div class="check-mark"></div>
                  </button>
                  <button
                    class="pay-method-btn"
                    :class="{
                      'pay-method-active': selectedPayMethod === 'alipay',
                      'pay-method-alipay': selectedPayMethod === 'alipay'
                    }"
                    @click="setPayMethod('alipay')"
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
                    <span class="pay-label">{{ t('buy_pay_alipay') }}</span>
                    <div class="check-mark"></div>
                  </button>
                </div>
              </div>

              <button @click="$router.push('/pay-success')" class="pay-submit-btn">
                <i data-lucide="shield-check" class="icon-sm"></i> {{ t('buy_points_pay_now') }}
              </button>
            </div>
          </div>
        </div>

        <div class="footer-copy">{{ t('buy_points_footer') }}</div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import { getCreditBalance, getCreditPackages, getLoginToken } from "../api/services";

const { t } = useI18n();

const plans = ref([]);

const selectedPlanIndex = ref(0);
const selectedPayMethod = ref("wechat");
const availablePoints = ref(0);

const selectedPlan = computed(() => {
  const current = plans.value[selectedPlanIndex.value];
  if (current) return current;
  return {
    id: "",
    points: 0,
    price: "0.00",
    description: "",
    badgeText: "",
    badgeClass: ""
  };
});
const availablePointsDisplay = computed(() => formatBalanceDisplay(availablePoints.value));

const summaryPointsText = computed(() =>
  t("buy_points_amount_format", { points: selectedPlan.value.points })
);

const summaryPriceText = computed(() => `$${formatPriceDisplay(selectedPlan.value.price)}`);

function selectPlan(index) {
  selectedPlanIndex.value = index;
}

function setPayMethod(method) {
  selectedPayMethod.value = method;
}

function getBadgeText(value) {
  const badge = String(value || "").trim();
  if (!badge) return "";
  if (badge === "ValuePick") return "性价比优选";
  if (badge === "StudioPick") return "工作室首选";
  return badge;
}

function getBadgeClass(value) {
  const badge = String(value || "").trim();
  if (!badge) return "";
  if (badge === "ValuePick") return "recommend-badge";
  if (badge === "StudioPick") return "recommend-badge-workshop";
  return "recommend-badge";
}

function formatPriceDisplay(value) {
  const num = Number(value);
  if (Number.isFinite(num) && num >= 0) return num.toFixed(2);
  const text = String(value || "").trim();
  if (!text) return "0.00";
  return text;
}

function extractCreditPackageItems(payload = {}) {
  const candidates = [payload?.data, payload?.data?.data, payload];
  for (const items of candidates) {
    if (Array.isArray(items)) return items;
  }
  return [];
}

function normalizeCreditPackage(item = {}, index = 0) {
  const credits = Number(item.credits);
  const points = Number.isFinite(credits) && credits >= 0 ? credits : 0;
  const price = formatPriceDisplay(item.price);
  const description = String(item.description || "").trim();
  const badgeRaw = String(item.badge || "").trim();
  const sortOrder = Number(item.sort_order);

  return {
    id: String(item.id || `credit-package-${index}`),
    points,
    price,
    description: description || "-",
    badgeText: getBadgeText(badgeRaw),
    badgeClass: getBadgeClass(badgeRaw),
    sortOrder: Number.isFinite(sortOrder) ? sortOrder : index + 1
  };
}

function parseBalanceNumber(value) {
  if (value === null || value === undefined || value === "") return null;
  const normalized = typeof value === "string" ? value.replace(/,/g, "").trim() : value;
  const num = Number(normalized);
  if (!Number.isFinite(num) || num < 0) return null;
  return num;
}

function extractBalance(payload = {}) {
  const candidates = [
    payload?.data?.balance,
    payload?.data?.data?.balance,
    payload?.balance,
    payload?.credit_balance,
    payload?.data?.credit_balance
  ];
  for (const item of candidates) {
    const parsed = parseBalanceNumber(item);
    if (parsed !== null) return parsed;
  }
  return 0;
}

function formatBalanceDisplay(value) {
  const num = Number(value);
  if (!Number.isFinite(num) || num < 0) return "0";
  return new Intl.NumberFormat("zh-CN", {
    maximumFractionDigits: 2
  }).format(num);
}

async function loadAvailablePoints() {
  const token = getLoginToken();
  if (!token) {
    availablePoints.value = 0;
    return;
  }
  try {
    const result = await getCreditBalance();
    availablePoints.value = extractBalance(result);
  } catch (error) {
    availablePoints.value = 0;
  }
}

async function loadCreditPackages() {
  const token = getLoginToken();
  if (!token) {
    plans.value = [];
    selectedPlanIndex.value = 0;
    return;
  }
  try {
    const result = await getCreditPackages();
    const items = extractCreditPackageItems(result);
    const normalized = items
      .map((item = {}, index = 0) => normalizeCreditPackage(item, index))
      .sort((a, b) => a.sortOrder - b.sortOrder);
    plans.value = normalized;
    if (!normalized.length) {
      selectedPlanIndex.value = 0;
      return;
    }
    if (selectedPlanIndex.value >= normalized.length) {
      selectedPlanIndex.value = 0;
      return;
    }
    const recommendedIndex = normalized.findIndex((item = {}) => item.badgeText === "性价比优选");
    selectedPlanIndex.value = recommendedIndex >= 0 ? recommendedIndex : 0;
  } catch (error) {
    plans.value = [];
    selectedPlanIndex.value = 0;
  }
}

onMounted(() => {
  loadCreditPackages();
  loadAvailablePoints();
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
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

