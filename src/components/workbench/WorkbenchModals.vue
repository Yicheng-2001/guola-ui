<template>
<!-- 模态框组 -->

    <!-- 1. 登录弹窗 (Login Modal) -->
    <div id="login-modal" class="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm hidden flex items-center justify-center transition-opacity duration-300 opacity-0" @click="if($event.target.id === 'login-modal') closeModal('login-modal');">
        <div class="w-[90vw] md:w-[400px] bg-white rounded-[32px] overflow-hidden relative shadow-2xl scale-95 opacity-0 transition-all duration-300" id="login-modal-content">
            <button @click="closeModal('login-modal')" class="absolute top-4 right-4 z-50 p-2 text-zinc-400 hover:text-zinc-900 bg-zinc-50 hover:bg-zinc-100 rounded-full transition-colors">
                <i data-lucide="x" class="w-4 h-4"></i>
            </button>
            <div class="p-8 pb-6 text-center border-b border-zinc-100">
                <img src="data:image/png;base64,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" alt="GuolaYa" class="h-12 mx-auto mb-5" />
                <h2 class="text-xl font-bold text-zinc-900" data-i18n="login_register">登录 / 注册</h2>
            </div>
            
            <!-- 登录选项卡 -->
            <div class="flex border-b border-zinc-200">
                <button @click="switchLoginTab('phone')" id="tab-login-phone" class="flex-1 py-4 text-sm font-bold text-zinc-900 border-b-2 border-zinc-900 transition-colors" data-i18n="phone_login">手机号登录</button>
                <button @click="switchLoginTab('wechat')" id="tab-login-wechat" class="flex-1 py-4 text-sm font-bold text-zinc-400 hover:text-zinc-900 transition-colors border-b-2 border-transparent" data-i18n="wechat_login">微信扫码</button>
            </div>

            <!-- 手机号表单 -->
            <div id="login-phone-form" class="p-8">
                <div class="mb-4">
                    <input type="text" data-placeholder="phone_number" placeholder="请输入手机号" class="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3.5 text-sm outline-none focus:border-zinc-400 transition-colors">
                </div>
                <div class="mb-6 flex gap-2">
                    <input type="text" data-placeholder="verification_code" placeholder="验证码" class="flex-1 bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3.5 text-sm outline-none focus:border-zinc-400 transition-colors">
                    <button class="bg-white border border-zinc-200 text-zinc-700 px-4 rounded-xl text-sm font-bold hover:bg-zinc-50 transition-colors whitespace-nowrap" data-i18n="get_verification_code">获取验证码</button>
                </div>
                <button class="w-full bg-zinc-900 hover:bg-zinc-800 text-white font-bold py-3.5 rounded-xl transition-transform transform active:scale-95 text-sm" data-i18n="enter_guolaya">进入 GuolaYa
                </button>
            </div>

            <!-- 微信扫码区 -->
            <div id="login-wechat-form" class="p-8 hidden flex-col items-center justify-center">
                <div class="w-40 h-40 bg-zinc-100 rounded-xl border border-zinc-200 flex items-center justify-center mb-4">
                    <i data-lucide="qr-code" class="w-12 h-12 text-zinc-300"></i>
                </div>
                <p class="text-sm text-zinc-500 font-medium" data-i18n="scan_wechat_login">请使用微信扫一扫登录</p>
            </div>
        </div>
    </div>

    <!-- 2. 积分明细与规则弹窗 (Points Modal) -->
    <div id="points-modal" class="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm hidden flex items-center justify-center transition-opacity duration-300 opacity-0" @click="if($event.target.id === 'points-modal') closeModal('points-modal');">
        <div class="points-modal-surface w-[90vw] md:w-[500px] bg-white rounded-[32px] overflow-hidden relative shadow-2xl scale-95 opacity-0 transition-all duration-300 flex flex-col max-h-[80vh]" id="points-modal-content">
            <button @click="closeModal('points-modal')" class="absolute top-4 right-4 z-50 p-2 text-zinc-400 hover:text-zinc-900 bg-zinc-50 hover:bg-zinc-100 rounded-full transition-colors">
                <i data-lucide="x" class="w-4 h-4"></i>
            </button>
            
            <!-- 头部 -->
            <div class="p-8 pb-0 border-b border-zinc-100 shrink-0">
                <div class="flex items-center justify-between mb-4">
                    <h2 class="points-modal-title text-xl font-bold text-zinc-900" data-i18n="points_center_title">积分中心</h2>
                    <button @click="router.push('/buy-points')" class="points-modal-button bg-zinc-900 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-sm active:scale-95 flex items-center gap-1.5 transition-colors hover:bg-zinc-800">
                        <i data-lucide="shopping-cart" class="w-4 h-4"></i> <span data-i18n="buy_points">购买积分</span>
                    </button>
                </div>
                <div class="flex items-center gap-3">
                    <span class="text-3xl font-extrabold text-amber-500 font-mono">{{ balanceDisplay }}</span>
                    <span class="points-modal-copy text-sm text-zinc-500 font-bold" data-i18n="available_points">当前可用积分</span>
                </div>
                
                <!-- 积分中心 Tab 切换 -->
                <div class="flex gap-6 mt-6">
                    <button @click="switchPointsTab('details')" id="tab-points-details" class="points-modal-tab pb-3 text-sm font-bold text-zinc-900 border-b-2 border-zinc-900 transition-colors" data-i18n="points_details_tab">积分明细</button>
                    <button @click="switchPointsTab('rules')" id="tab-points-rules" class="points-modal-tab pb-3 text-sm font-bold text-zinc-400 hover:text-zinc-900 transition-colors border-b-2 border-transparent" data-i18n="points_rules">积分规则</button>
                </div>
            </div>

            <!-- Tab 1: 积分明细列表 -->
            <div class="flex-1 overflow-y-auto p-2 no-scrollbar" id="points-details-list">
                <table class="w-full text-left text-sm">
                    <tbody class="divide-y divide-zinc-100">
                        <tr v-if="!isLoggedIn" class="hover:bg-zinc-50 transition-colors">
                            <td class="px-6 py-4 text-center text-zinc-500" colspan="2">还未登录，无法获取积分明细</td>
                        </tr>
                        <tr v-else-if="transactionsLoading" class="hover:bg-zinc-50 transition-colors">
                            <td class="px-6 py-4 text-center text-zinc-500" colspan="2">积分明细加载中...</td>
                        </tr>
                        <tr v-else-if="!creditTransactions.length" class="hover:bg-zinc-50 transition-colors">
                            <td class="px-6 py-4 text-center text-zinc-500" colspan="2">暂无积分明细</td>
                        </tr>
                        <tr v-for="item in creditTransactions" :key="item.id" class="hover:bg-zinc-50 transition-colors">
                            <td class="px-6 py-4">
                                <div class="points-modal-copy font-bold text-zinc-900">{{ item.remark }}</div>
                                <div class="text-xs text-zinc-400 mt-1 font-mono">{{ item.createdAtText }}</div>
                            </td>
                            <td class="px-6 py-4 text-right font-bold font-mono" :class="item.amount > 0 ? 'text-emerald-500' : 'text-zinc-900'">
                                {{ item.amountText }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Tab 2: 积分规则说明 -->
            <div class="flex-1 overflow-y-auto p-8 no-scrollbar hidden bg-zinc-50/50" id="points-rules-content">
                <ul class="points-modal-copy space-y-5 text-sm text-zinc-600 leading-relaxed">
                    <li><strong class="points-modal-section text-zinc-900 block mb-1" data-i18n="points_what">1. 积分是什么？</strong><span data-i18n="points_what_desc">用户可通过消耗积分来使用过啦AI平台提供的AI生成功能，每日来过啦AI平台即可获得免费50积分，开通过啦AI会员后可以获得更多积分。</span></li>

                    <li><strong class="points-modal-section text-zinc-900 block mb-2" data-i18n="points_types">2. 积分的类别、有效期以及获得方式有哪些？</strong>
                        <div class="mt-3 text-xs text-zinc-600 bg-white p-4 rounded-lg border border-zinc-200 overflow-x-auto">
                            <table class="w-full border-collapse">
                                <thead>
                                    <tr class="bg-zinc-100 border-b-2 border-zinc-300">
                                        <th class="px-3 py-2.5 text-left font-bold text-zinc-900 whitespace-nowrap" data-i18n="points_attr">积分属性</th>
                                        <th class="px-3 py-2.5 text-left font-bold text-zinc-900 whitespace-nowrap" data-i18n="points_category">积分类别</th>
                                        <th class="px-3 py-2.5 text-left font-bold text-zinc-900 whitespace-nowrap" data-i18n="points_how">获得方式</th>
                                        <th class="px-3 py-2.5 text-left font-bold text-zinc-900" data-i18n="points_validity">有效期</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b border-zinc-200 hover:bg-zinc-50/50">
                                        <td class="px-3 py-3 text-zinc-700" data-i18n="points_subscription">订阅积分</td>
                                        <td class="px-3 py-3 text-zinc-700" data-i18n="points_subscription">订阅积分</td>
                                        <td class="px-3 py-3 text-zinc-700" data-i18n="points_buy_member">购买会员服务</td>
                                        <td class="px-3 py-3 text-zinc-700" data-i18n="points_subscription_validity">在订阅有效期内以月为周期发放，自发放之日起有效期30天</td>
                                    </tr>
                                    <tr class="border-b border-zinc-200 hover:bg-zinc-50/50">
                                        <td class="px-3 py-3 text-zinc-700" data-i18n="points_gift">赠送积分</td>
                                        <td class="px-3 py-3 text-zinc-700" data-i18n="points_daily_free">每日免费积分</td>
                                        <td class="px-3 py-3 text-zinc-700" data-i18n="points_login">登录过啦AI平台</td>
                                        <td class="px-3 py-3 text-zinc-700" data-i18n="points_daily_validity">当日24:00清零</td>
                                    </tr>
                                    <tr class="border-b border-zinc-200 hover:bg-zinc-50/50">
                                        <td class="px-3 py-3 text-zinc-700"></td>
                                        <td class="px-3 py-3 text-zinc-700" data-i18n="points_lucky">随机幸运积分</td>
                                        <td class="px-3 py-3 text-zinc-700" data-i18n="points_login">登录过啦AI平台</td>
                                        <td class="px-3 py-3 text-zinc-700" data-i18n="points_daily_validity">当日24:00清零</td>
                                    </tr>
                                    <tr class="hover:bg-zinc-50/50">
                                        <td class="px-3 py-3 text-zinc-700" data-i18n="points_recharge">充值积分</td>
                                        <td class="px-3 py-3 text-zinc-700" data-i18n="points_recharge">充值积分</td>
                                        <td class="px-3 py-3 text-zinc-700" data-i18n="points_recharge_get">充值获得</td>
                                        <td class="px-3 py-3 text-zinc-700" data-i18n="points_recharge_validity">有效期1年</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </li>

                    <li><strong class="points-modal-section text-zinc-900 block mb-1" data-i18n="points_order">3. 积分消耗顺序？</strong><span data-i18n="points_order_desc">按照积分有效期，先消耗即将过期的积分，默认的积分消耗顺序依次为每日免费积分、订阅积分、充值积分。</span></li>

                    <li><strong class="points-modal-section text-zinc-900 block mb-1" data-i18n="points_recharge_rule">4. 积分充值</strong><span data-i18n="points_recharge_desc">您可以通过充值获得积分，如您选择通过人民币充值获得积分，需要提示您积分充值服务为收费服务，积分为虚拟商品采用先收费后服务的方式。请您仔细阅读以下字段，并在理解和同意的前提下继续使用本产品：积分充值成功后，将不支持退款或反向兑换为人民币。</span></li>

                    <li><strong class="points-modal-section text-zinc-900 block mb-2" data-i18n="points_price">5. 充值价格表</strong>
                        <div class="mt-3 text-xs text-zinc-600 bg-white p-3 rounded-lg border border-zinc-200 space-y-1">
                            <div class="flex justify-between py-1 border-b border-zinc-100"><span data-i18n="points_500">500 Points</span><span class="text-zinc-900 font-bold">￥30</span></div>
                            <div class="flex justify-between py-1 border-b border-zinc-100"><span data-i18n="points_750">750 Points</span><span class="text-zinc-900 font-bold">￥45</span></div>
                            <div class="flex justify-between py-1 border-b border-zinc-100"><span data-i18n="points_1500">1500 Points</span><span class="text-zinc-900 font-bold">￥90</span></div>
                            <div class="flex justify-between py-1 border-b border-zinc-100"><span data-i18n="points_2250">2250 Points</span><span class="text-zinc-900 font-bold">￥135</span></div>
                            <div class="flex justify-between py-1 border-b border-zinc-100"><span data-i18n="points_4500">4500 Points</span><span class="text-zinc-900 font-bold">￥250</span></div>
                            <div class="flex justify-between py-1"><span data-i18n="points_9000">9000 Points</span><span class="text-zinc-900 font-bold">￥500</span></div>
                        </div>
                    </li>

                    <li><strong class="points-modal-section text-zinc-900 block mb-1" data-i18n="points_contact">6. 联系我们</strong><span data-i18n="points_contact_desc">如果您对于积分获得和使用有任何问题或建议，可在过啦AI平台【联系我们】栏中输入您需要反馈的问题，并留下您的联系方式，我们会有官方服务人员与您联系并帮助您解决问题。</span></li>
                </ul>
            </div>
        </div>
    </div>

    <!-- 3. 签到与邀请弹窗 (Check-in / Invite Modal) -->
    <div id="checkin-modal" class="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm hidden flex items-center justify-center transition-opacity duration-300 opacity-0" @click="if($event.target.id === 'checkin-modal') closeModal('checkin-modal');">
        <div class="w-[90vw] md:w-[450px] bg-[#F7F7F8] rounded-[32px] overflow-hidden relative shadow-2xl scale-95 opacity-0 transition-all duration-300 p-8 text-center" id="checkin-modal-content">
            <button @click="closeModal('checkin-modal')" class="absolute top-4 right-4 z-50 p-2 text-zinc-400 hover:text-zinc-900 bg-white hover:bg-zinc-100 rounded-full transition-colors shadow-sm">
                <i data-lucide="x" class="w-4 h-4"></i>
            </button>
            
            <div class="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg">
                <i data-lucide="gift" class="w-8 h-8"></i>
            </div>
            <h2 class="text-2xl font-extrabold text-zinc-900 mb-2">获取免费积分</h2>
            <p class="text-sm text-zinc-500 mb-8 font-serif leading-relaxed">坚持每日签到或邀请好友加入，获取源源不断的创作动力。</p>

            <div class="bg-white rounded-2xl p-5 border border-zinc-200 mb-4 flex items-center justify-between text-left shadow-sm">
                <div>
                    <h3 class="font-bold text-zinc-900">每日签到</h3>
                    <p class="text-xs text-zinc-500 mt-0.5">今日可领 +50 积分</p>
                </div>
                <button @click="handleDailySignIn()" class="bg-zinc-900 text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-zinc-800 transition-transform active:scale-95">立即签到</button>
            </div>

            <div class="bg-white rounded-2xl p-5 border border-zinc-200 flex flex-col text-left shadow-sm">
                <div class="flex items-center justify-between mb-4">
                    <div>
                        <h3 class="font-bold text-zinc-900">邀请好友注册</h3>
                        <p class="text-xs text-zinc-500 mt-0.5">每邀请一人 +200 积分</p>
                    </div>
                </div>
                <div class="flex gap-2">
                    <input type="text" value="https://guolaya.ai/inv/U8891X" readonly class="flex-1 bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-2 text-xs text-zinc-600 font-mono outline-none">
                    <button class="bg-zinc-100 border border-zinc-200 text-zinc-700 px-4 py-2 rounded-xl text-xs font-bold hover:bg-zinc-200 transition-colors whitespace-nowrap">复制链接</button>
                </div>
            </div>
        </div>
    </div>

    <!-- 4. 视频详情与生成同款 弹窗 (Video Detail Modal) -->
    <div id="video-modal" class="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm hidden flex items-center justify-center transition-opacity duration-300 opacity-0" @click="if($event.target.id === 'video-modal') closeVideoModal();">
        <div id="video-modal-content" class="w-[95vw] md:w-[90vw] max-w-6xl h-[90vh] md:h-[85vh] bg-[#F7F7F8] rounded-[32px] overflow-hidden flex flex-col md:flex-row relative shadow-2xl scale-95 opacity-0 transition-all duration-300">
            
            <button @click="closeVideoModal()" class="absolute top-4 right-4 z-50 w-10 h-10 bg-black/10 hover:bg-black/20 text-zinc-600 hover:text-zinc-900 rounded-full flex items-center justify-center transition-colors backdrop-blur-md md:bg-zinc-100 md:hover:bg-zinc-200">
                <i data-lucide="x" class="w-5 h-5"></i>
            </button>

            <!-- 左侧：沉浸式媒体展示区 -->
            <div class="flex-1 bg-black relative flex items-center justify-center group overflow-hidden h-1/2 md:h-full">
                <img id="modal-img" src="" class="w-full h-full object-contain opacity-90 transition-transform duration-700 group-hover:scale-105" />
                <button class="absolute w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:scale-105 hover:bg-white/30 transition-all z-10 shadow-xl pl-1">
                    <i data-lucide="play" class="w-8 h-8 fill-current"></i>
                </button>
            </div>

            <!-- 右侧：提示词详情与操作区 -->
            <div class="w-full md:w-[420px] bg-white p-8 flex flex-col border-l border-zinc-200 overflow-y-auto h-1/2 md:h-full">
                
                <div class="flex items-center gap-3 mb-8 shrink-0">
                    <div class="w-12 h-12 rounded-full bg-zinc-100 border border-zinc-200 overflow-hidden shadow-sm">
                        <img id="modal-author-avatar" src="" class="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h3 id="modal-title" class="text-lg font-bold text-zinc-900 tracking-tight line-clamp-1"></h3>
                        <p id="modal-author" class="text-sm text-zinc-500 font-medium"></p>
                    </div>
                </div>

                <div class="mb-8 flex-1">
                    <div class="flex items-center justify-between mb-3">
                        <h4 class="text-sm font-bold text-zinc-900 flex items-center gap-2">
                            <i data-lucide="sparkles" class="w-4 h-4 text-zinc-500"></i> Prompt
                        </h4>
                        <button class="text-xs text-zinc-500 hover:text-zinc-900 font-bold flex items-center gap-1.5 transition-colors px-2 py-1 bg-zinc-50 rounded-md hover:bg-zinc-100 border border-zinc-200">
                            <i data-lucide="copy" class="w-3.5 h-3.5"></i> 复制
                        </button>
                    </div>
                    <div class="bg-zinc-50 border border-zinc-200 rounded-2xl p-5 text-sm text-zinc-700 leading-relaxed font-serif shadow-inner">
                        <span id="modal-prompt"></span>
                    </div>
                </div>

                <!-- 复制链接模块 -->
                <div class="mb-4 pt-4 border-t border-zinc-100">
                    <h4 class="text-sm font-bold text-zinc-900 mb-3 flex items-center gap-2">
                        <i data-lucide="share-2" class="w-4 h-4 text-zinc-500"></i> 分享作品
                    </h4>
                    <div class="flex gap-2">
                        <input type="text" id="video-share-link" readonly class="flex-1 bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-600 font-mono outline-none focus:border-zinc-400 transition-colors" value="https://guolaya.ai/share/v/..." />
                        <button @click="copyVideoShareLink()" id="video-copy-link-btn" class="bg-zinc-900 hover:bg-zinc-800 text-white px-5 py-3 rounded-xl text-sm font-bold transition-colors flex items-center gap-2 whitespace-nowrap">
                            <i data-lucide="copy" class="w-4 h-4"></i> 复制链接
                        </button>
                    </div>
                </div>

                <div class="flex flex-col gap-3 mt-auto shrink-0 pt-4">
                    <button @click="generateSimilar()" class="w-full py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-bold rounded-2xl flex items-center justify-center gap-2 transition-transform transform active:scale-95 text-base">
                        <i data-lucide="wand-2" class="w-5 h-5"></i> 一键生成同款
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- 5. 资产下载页弹窗 (Asset Download Modal) -->
    <div id="asset-download-modal" class="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm hidden flex items-center justify-center transition-opacity duration-300 opacity-0" @click="if($event.target.id === 'asset-download-modal') closeAssetDownloadModal();">
        <div class="w-[95vw] md:w-[900px] bg-white rounded-[32px] overflow-hidden relative shadow-2xl scale-95 opacity-0 transition-all duration-300 flex flex-col max-h-[90vh]" id="asset-download-modal-content">
            <!-- 头部 -->
            <div class="flex items-center justify-between px-8 py-5 border-b border-zinc-100 shrink-0">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center">
                        <i data-lucide="video" class="w-5 h-5 text-zinc-600"></i>
                    </div>
                    <div>
                        <h3 id="asset-modal-title" class="text-lg font-bold text-zinc-900">项目_1</h3>
                        <p class="text-xs text-zinc-400">生成于 2026-03-17</p>
                    </div>
                </div>
                <button @click="closeAssetDownloadModal()" class="p-2 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 rounded-full transition-colors">
                    <i data-lucide="x" class="w-5 h-5"></i>
                </button>
            </div>

            <!-- 内容区 -->
            <div class="flex-1 overflow-y-auto p-8">
                <div class="flex flex-col md:flex-row gap-8">
                    <!-- 左侧：预览区 -->
                    <div class="w-full md:w-[55%]">
                        <div class="relative aspect-video bg-zinc-900 rounded-2xl overflow-hidden group">
                            <img id="asset-modal-img" src="" alt="preview" class="w-full h-full object-contain" />
                            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                <button class="w-16 h-16 rounded-full bg-white/90 hover:bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-lg">
                                    <i data-lucide="play" class="w-7 h-7 text-zinc-900 fill-current"></i>
                                </button>
                            </div>
                            <!-- AI水印 -->
                            <div class="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2">
                                <i data-lucide="sparkles" class="w-3.5 h-3.5 text-amber-400"></i>
                                <span class="text-[10px] font-bold text-white">AI 生成</span>
                            </div>
                        </div>
                        <p class="text-xs text-zinc-400 mt-3 text-center">预览效果，实际下载为高清原图</p>
                    </div>

                    <!-- 右侧：操作区 -->
                    <div class="w-full md:w-[45%] flex flex-col gap-6">
                        <!-- Prompt展示 -->
                        <div class="bg-zinc-50 rounded-2xl p-5 border border-zinc-100">
                            <div class="flex items-center justify-between mb-3">
                                <h4 class="text-sm font-bold text-zinc-900 flex items-center gap-2">
                                    <i data-lucide="sparkles" class="w-4 h-4 text-zinc-500"></i> Prompt
                                </h4>
                                <button @click="copyAssetPrompt()" class="text-xs text-zinc-500 hover:text-zinc-900 font-medium flex items-center gap-1.5 transition-colors px-2 py-1 bg-white rounded-lg border border-zinc-200 hover:border-zinc-300">
                                    <i data-lucide="copy" class="w-3.5 h-3.5"></i> 复制
                                </button>
                            </div>
                            <div id="asset-modal-prompt" class="text-sm text-zinc-600 leading-relaxed font-serif max-h-[120px] overflow-y-auto pr-2">
                                电影级质感，高分辨率，微观宇宙法则。场景极具视觉冲击力，深沉的光影对比，赛博朋克风格的霓虹灯效映射在主体的表面。
                            </div>
                        </div>

                        <!-- 下载选项 -->
                        <div>
                            <h4 class="text-sm font-bold text-zinc-900 mb-4 flex items-center gap-2">
                                <i data-lucide="download" class="w-4 h-4 text-zinc-500"></i> 下载选项
                            </h4>
                            <div class="flex flex-col gap-3">
                                <!-- 带水印下载 -->
                                <button @click="downloadAsset('with-watermark')" class="group flex items-center justify-between p-4 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 rounded-xl transition-all">
                                    <div class="flex items-center gap-3">
                                        <div class="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center">
                                            <i data-lucide="image" class="w-5 h-5 text-zinc-400"></i>
                                        </div>
                                        <div class="text-left">
                                            <div class="text-sm font-bold text-zinc-900">带 AI 水印下载</div>
                                            <div class="text-xs text-zinc-400">免费 · 1080P</div>
                                        </div>
                                    </div>
                                    <i data-lucide="download" class="w-5 h-5 text-zinc-400 group-hover:text-zinc-900 transition-colors"></i>
                                </button>

                                <!-- 无水印下载 -->
                                <button @click="downloadAsset('no-watermark')" class="group flex items-center justify-between p-4 bg-zinc-900 hover:bg-zinc-800 rounded-xl transition-all">
                                    <div class="flex items-center gap-3">
                                        <div class="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center">
                                            <i data-lucide="crown" class="w-5 h-5 text-amber-400"></i>
                                        </div>
                                        <div class="text-left">
                                            <div class="text-sm font-bold text-white">无水印高清下载</div>
                                            <div class="text-xs text-zinc-400">消耗 50 积分 · 4K</div>
                                        </div>
                                    </div>
                                    <i data-lucide="download" class="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors"></i>
                                </button>
                            </div>
                        </div>

                        <!-- 分享链接 -->
                        <div class="pt-4 border-t border-zinc-100">
                            <h4 class="text-sm font-bold text-zinc-900 mb-3 flex items-center gap-2">
                                <i data-lucide="link" class="w-4 h-4 text-zinc-500"></i> 分享链接
                            </h4>
                            <div class="flex gap-2">
                                <input type="text" id="asset-share-link" value="https://guolaya.ai/share/v/abc123" readonly class="flex-1 bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-600 font-mono outline-none focus:border-zinc-400 transition-colors" />
                                <button @click="copyAssetLink()" id="asset-copy-link-btn" class="bg-zinc-900 hover:bg-zinc-800 text-white px-5 py-3 rounded-xl text-sm font-bold transition-colors flex items-center gap-2">
                                    <i data-lucide="copy" class="w-4 h-4"></i> 复制
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 底部居中悬浮快捷创作菜单 (全局) -->
    <div id="fab-menu" class="fixed z-50 transition-all duration-500 transform translate-y-20 opacity-0 pointer-events-none" style="bottom: 2.5rem;">
        <div class="flex items-center gap-1 bg-white/60 hover:bg-white/100 backdrop-blur-md px-3 py-2 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition-all duration-300 border border-white/60 hover:border-zinc-200">
            <button @click="setHomeMode('绘本');" class="flex items-center gap-2 px-5 py-2.5 hover:bg-zinc-100/80 rounded-full transition-colors text-zinc-700 hover:text-zinc-900 active:scale-95">
                <img src="/storybook-logo.svg" alt="绘本" class="mode-logo-icon mode-logo-icon--muted" /><span class="text-sm font-bold" data-i18n="style_storybook">绘本</span>
            </button>
            <div class="w-[1px] h-5 bg-zinc-300/50"></div>
            <button @click="setHomeMode('艺术家');" class="flex items-center gap-2 px-5 py-2.5 hover:bg-zinc-100/80 rounded-full transition-colors text-zinc-700 hover:text-zinc-900 active:scale-95">
                <img src="/artist-logo.svg" alt="艺术家" class="mode-logo-icon mode-logo-icon--muted" /><span class="text-sm font-bold" data-i18n="style_artist">艺术家</span>
            </button>
        </div>
    </div>


    <!-- ==================== 逻辑处理 JS ==================== -->
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const {
  balanceDisplay,
  creditTransactions,
  isLoggedIn,
  transactionsLoading,
  closeAssetDownloadModal,
  closeModal,
  closeVideoModal,
  copyAssetLink,
  copyAssetPrompt,
  copyVideoShareLink,
  downloadAsset,
  generateSimilar,
  handleDailySignIn,
  setHomeMode,
  switchLoginTab,
  switchPointsTab
} = defineProps([
  'balanceDisplay',
  'creditTransactions',
  'isLoggedIn',
  'transactionsLoading',
  'closeAssetDownloadModal',
  'closeModal',
  'closeVideoModal',
  'copyAssetLink',
  'copyAssetPrompt',
  'copyVideoShareLink',
  'downloadAsset',
  'generateSimilar',
  'handleDailySignIn',
  'setHomeMode',
  'switchLoginTab',
  'switchPointsTab'
])
</script>
