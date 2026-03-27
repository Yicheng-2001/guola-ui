<template>
  <div class="flex flex-col md:flex-row h-screen w-full bg-[#fbfbfa] text-zinc-900 font-sans overflow-hidden selection:bg-[#ece7dc]">
    <WorkbenchSidebar v-bind="sidebarProps" />
    <WorkbenchMainSection v-bind="mainSectionProps" />
    <WorkbenchModals v-bind="modalProps" />
  </div>
</template>
<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import WorkbenchSidebar from '../components/workbench/WorkbenchSidebar.vue'
import WorkbenchMainSection from '../components/workbench/WorkbenchMainSection.vue'
import WorkbenchModals from '../components/workbench/WorkbenchModals.vue'

const router = useRouter()

const aestheticGalleryItems = [
  { img: '/discover-top/discover-01.png', title: '粉云猫猫', author: 'GuolaYa Picks', views: '2.1w', ratioClass: 'aspect-[1/1]' },
  { img: '/discover-top/discover-02.png', title: '异星花园', author: 'GuolaYa Picks', views: '1.8w', ratioClass: 'aspect-[9/16]' },
  { img: '/discover-top/discover-03.png', title: '雨夜侧影', author: 'GuolaYa Picks', views: '2.4w', ratioClass: 'aspect-[9/16]' },
  { img: '/discover-top/discover-04.png', title: '柯尔鸭肖像', author: 'GuolaYa Picks', views: '1.3w', ratioClass: 'aspect-[9/16]' },
  { img: '/discover-top/discover-05.png', title: '古典漫游', author: 'GuolaYa Picks', views: '1.9w', ratioClass: 'aspect-[9/16]' },
  { img: '/discover-top/discover-06.png', title: '枝头小雀', author: 'GuolaYa Picks', views: '1.1w', ratioClass: 'aspect-[9/16]' },
  { img: '/discover-top/discover-07.png', title: '黄昏街角', author: 'GuolaYa Picks', views: '2.7w', ratioClass: 'aspect-[9/16]' },
  { img: '/discover-top/discover-08.png', title: '城堡旧梦', author: 'GuolaYa Picks', views: '2.2w', ratioClass: 'aspect-[9/16]' },
  { img: '/discover-top/discover-09.png', title: '格纸秘密', author: 'GuolaYa Picks', views: '1.6w', ratioClass: 'aspect-[9/16]' },
  { img: '/discover-top/discover-10.png', title: '雨中点火', author: 'GuolaYa Picks', views: '2.0w', ratioClass: 'aspect-[9/16]' },
  { img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop', title: '星际漫游', author: 'SpaceX_Fan', views: '8.9w', ratioClass: 'aspect-[16/9]' },
  { img: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop', title: '废土文明重建', author: '视觉日记', views: '4.2w', ratioClass: 'aspect-[9/16]' },
  { img: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop', title: '落日余晖', author: 'Cinematic', views: '6.7w', ratioClass: 'aspect-[4/5]' },
  { img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop', title: '微光', author: 'Tech_Bro', views: '1.1w', ratioClass: 'aspect-[1/1]' },
  { img: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop', title: '折叠空间', author: 'Abstract_AI', views: '5.5w', ratioClass: 'aspect-[3/4]' },
  { img: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=800&auto=format&fit=crop', title: '遥远星系', author: 'StarGazer', views: '3.2w', ratioClass: 'aspect-[9/16]' },
  { img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800&auto=format&fit=crop', title: '赛博朋克城市', author: 'CyberPunk', views: '15.6w', ratioClass: 'aspect-[9/16]' },
  { img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop', title: '山川壮丽', author: 'NatureLover', views: '22.1w', ratioClass: 'aspect-[16/9]' },
  { img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800&auto=format&fit=crop', title: '森林秘境', author: 'GreenSoul', views: '7.8w', ratioClass: 'aspect-[9/16]' },
  { img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop', title: '城市之光', author: 'UrbanEye', views: '18.5w', ratioClass: 'aspect-[16/9]' },
  { img: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=800&auto=format&fit=crop', title: '海浪轻语', author: 'OceanDream', views: '11.2w', ratioClass: 'aspect-[1/1]' },
  { img: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=800&auto=format&fit=crop', title: '高山湖泊', author: 'PeakView', views: '14.7w', ratioClass: 'aspect-[16/9]' },
  { img: 'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?q=80&w=800&auto=format&fit=crop', title: '沙滩漫步', author: 'BeachLife', views: '6.3w', ratioClass: 'aspect-[9/16]' },
  { img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop', title: '云雾山脉', author: 'CloudRider', views: '8.9w', ratioClass: 'aspect-[2/3]' },
  { img: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop', title: '迷雾森林', author: 'MysticWoods', views: '5.1w', ratioClass: 'aspect-[16/9]' },
  { img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop', title: '阳光穿透', author: 'SunRay', views: '13.4w', ratioClass: 'aspect-[3/4]' },
  { img: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=800&auto=format&fit=crop', title: '金色麦田', author: 'HarvestMoon', views: '4.8w', ratioClass: 'aspect-[1/1]' },
  { img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop', title: '湖光山色', author: 'LakeView', views: '19.2w', ratioClass: 'aspect-[16/9]' },
  { img: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=800&auto=format&fit=crop', title: '瀑布飞流', author: 'WaterFall', views: '7.5w', ratioClass: 'aspect-[9/16]' },
  { img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop', title: '星空璀璨', author: 'StarLight', views: '25.6w', ratioClass: 'aspect-[1/1]' },
  { img: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=800&auto=format&fit=crop', title: '峡谷深处', author: 'DeepCanyon', views: '9.8w', ratioClass: 'aspect-[4/5]' },
  { img: 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?q=80&w=800&auto=format&fit=crop', title: '秋叶飘零', author: 'AutumnLeaf', views: '6.7w', ratioClass: 'aspect-[9/16]' },
  { img: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop', title: '瑞士风光', author: 'SwissAlps', views: '16.3w', ratioClass: 'aspect-[9/16]' },
  { img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop', title: '热带天堂', author: 'Tropical', views: '12.8w', ratioClass: 'aspect-[16/9]' },
  { img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop', title: '极光之夜', author: 'Aurora', views: '28.4w', ratioClass: 'aspect-[9/16]' },
  { img: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=800&auto=format&fit=crop', title: '树影婆娑', author: 'TreeShadow', views: '3.9w', ratioClass: 'aspect-[3/4]' },
  { img: 'https://images.unsplash.com/photo-1504567961542-e24d9439a724?q=80&w=800&auto=format&fit=crop', title: '晨曦初照', author: 'MorningGlow', views: '8.2w', ratioClass: 'aspect-[1/1]' },
  { img: 'https://images.unsplash.com/photo-1507400492013-162706c8c05e?q=80&w=800&auto=format&fit=crop', title: '月夜静谧', author: 'MoonLight', views: '11.7w', ratioClass: 'aspect-[2/3]' },
  { img: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=800&auto=format&fit=crop', title: '深海探秘', author: 'DeepSea', views: '5.4w', ratioClass: 'aspect-[16/9]' },
  { img: 'https://images.unsplash.com/photo-1518173946687-a4c036bc1378?q=80&w=800&auto=format&fit=crop', title: '都市夜景', author: 'CityNight', views: '21.9w', ratioClass: 'aspect-[9/16]' },
  { img: 'https://images.unsplash.com/photo-1461301214746-1e790926d323?q=80&w=800&auto=format&fit=crop', title: '书页翻动', author: 'BookLover', views: '4.1w', ratioClass: 'aspect-[4/5]' },
  { img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop', title: '未来都市', author: 'FutureCity', views: '17.3w', ratioClass: 'aspect-[16/9]' },
  { img: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=800&auto=format&fit=crop', title: '童话世界', author: 'FairyTale', views: '9.6w', ratioClass: 'aspect-[9/16]' },
  { img: 'https://images.unsplash.com/photo-1560167016-022b78a0258e?q=80&w=800&auto=format&fit=crop', title: '梦幻花园', author: 'DreamGarden', views: '6.8w', ratioClass: 'aspect-[1/1]' },
  { img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop', title: '小桥流水', author: 'WaterBridge', views: '14.2w', ratioClass: 'aspect-[16/9]' },
  { img: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=800&auto=format&fit=crop', title: '水墨江南', author: 'InkWash', views: '10.5w', ratioClass: 'aspect-[9/16]' },
  { img: 'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=800&auto=format&fit=crop', title: '纸艺人生', author: 'PaperArt', views: '3.7w', ratioClass: 'aspect-[3/4]' },
  { img: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop', title: '油画质感', author: 'OilPaint', views: '8.1w', ratioClass: 'aspect-[4/5]' },
  { img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800&auto=format&fit=crop', title: '抽象艺术', author: 'AbstractArt', views: '5.9w', ratioClass: 'aspect-[1/1]' },
  { img: 'https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=800&auto=format&fit=crop', title: '水彩梦境', author: 'WaterColor', views: '12.3w', ratioClass: 'aspect-[9/16]' },
  { img: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=800&auto=format&fit=crop', title: '极简主义', author: 'Minimalist', views: '7.4w', ratioClass: 'aspect-[16/9]' },
  { img: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=800&auto=format&fit=crop', title: '光影交错', author: 'LightShadow', views: '15.8w', ratioClass: 'aspect-[2/3]' },
  { img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop', title: '微观宇宙法则', author: 'Neo_Art', views: '12.4w', ratioClass: 'aspect-[3/4]' },
  { img: 'https://images.unsplash.com/photo-1515405295579-ba7b45403062?q=80&w=800&auto=format&fit=crop', title: '建筑之美', author: 'Architecture', views: '11.2w', ratioClass: 'aspect-[3/4]' },
  { img: 'https://images.unsplash.com/photo-1550684848-86a5d8727436?q=80&w=800&auto=format&fit=crop', title: '时光隧道', author: 'TimeTunnel', views: '6.5w', ratioClass: 'aspect-[9/16]' },
  { img: 'https://images.unsplash.com/photo-1495195129352-aeb325a55b65?q=80&w=800&auto=format&fit=crop', title: '餐桌美学', author: 'FoodArt', views: '9.1w', ratioClass: 'aspect-[1/1]' },
  { img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop', title: '几何之美', author: 'Geometry', views: '4.6w', ratioClass: 'aspect-[16/9]' },
  { img: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=800&auto=format&fit=crop', title: '自然纹理', author: 'NatureTex', views: '8.8w', ratioClass: 'aspect-[4/5]' }
]


        // --------- 多语言系统 (i18n) ---------
        const i18nData = {
            zh: {
                nav_home: "首页",
                nav_create: "创作",
                nav_assets: "资产",
                nav_messages: "消息",
                nav_faq: "常见问题",
                join_beta_group: "加入内测微信群",
                join_wechat_group_desc: "扫码加入官方微信群，获取最新模型动态与专属福利。",
                scan_wechat: "微信扫一扫",
                lang_zh: "中文",
                lang_en: "English",
                assets_desc: "您的所有创意结晶，均安全存放于此。",
                all_files: "全部文件",
                videos: "视频",
                images: "图片",
                my_favorites: "我的收藏",
                messages_desc: "第一时间获取官方活动与系统公告。",
                system_notice: "系统公告",
                phone_login: "手机号登录",
                wechat_login: "微信扫码",
                scan_wechat_login: "请使用微信扫一扫登录",
                points_center_title: "积分中心",
                available_points: "当前可用积分",
                points_details_tab: "积分明细",
                points_rules: "积分规则",
                points_what: "1. 积分是什么？",
                points_what_desc: "用户可通过消耗积分来使用过啦AI平台提供的AI生成功能，每日来过啦AI平台即可获得免费50积分，开通过啦AI会员后可以获得更多积分。",
                points_types: "2. 积分的类别、有效期以及获得方式有哪些？",
                points_attr: "积分属性",
                points_category: "积分类别",
                points_how: "获得方式",
                points_validity: "有效期",
                points_subscription: "订阅积分",
                points_gift: "赠送积分",
                points_daily_free: "每日免费积分",
                points_lucky: "随机幸运积分",
                points_recharge: "充值积分",
                points_buy_member: "购买会员服务",
                points_login: "登录过啦AI平台",
                points_recharge_get: "充值获得",
                points_subscription_validity: "在订阅有效期内以月为周期发放，自发放之日起有效期30天",
                points_daily_validity: "当日24:00清零",
                points_recharge_validity: "有效期1年",
                points_order: "3. 积分消耗顺序？",
                points_order_desc: "按照积分有效期，先消耗即将过期的积分，默认的积分消耗顺序依次为每日免费积分、订阅积分、充值积分。",
                points_recharge_rule: "4. 积分充值",
                points_recharge_desc: "您可以通过充值获得积分，如您选择通过人民币充值获得积分，需要提示您积分充值服务为收费服务，积分为虚拟商品采用先收费后服务的方式。请您仔细阅读以下字段，并在理解和同意的前提下继续使用本产品：积分充值成功后，将不支持退款或反向兑换为人民币。",
                points_price: "5. 充值价格表",
                points_contact: "6. 联系我们",
                points_contact_desc: "如果您对于积分获得和使用有任何问题或建议，可在过啦AI平台【联系我们】栏中输入您需要反馈的问题，并留下您的联系方式，我们会有官方服务人员与您联系并帮助您解决问题。",
                points_item_1080: "生成 1080P 视频 (10s)",
                points_item_checkin: "每日签到奖励",
                points_item_invite: "邀请好友 (User_8891)",
                points_item_4k: "生成 4K 视频 (5s)",
                points_500: "500积分",
                points_750: "750积分",
                points_1500: "1500积分",
                points_2250: "2250积分",
                points_4500: "4500积分",
                points_9000: "9000积分",
                buy_points: "购买积分",
                home_prompt_placeholder: "描述你想生成的视频内容... (支持在此直接粘贴图片)",
                create_prompt_placeholder: "请详细描述视频画面。例如：电影级质感，航拍视角，一辆复古跑车行驶在蜿蜒的海岸线公路上...",
                clear_content: "清空内容",
                create_scene_description: "画面描述",
                prompt_polish: "提示词润色",
                visual_reference: "视觉参考",
                optional: "选填",
                upload_first_last_frame: "点击或拖拽上传首尾帧",
                support_jpg_png: "支持 JPG, PNG",
                consume_points: "消耗 {points} 积分",
                search_assets: "搜索资产...",
                phone_number: "请输入手机号",
                verification_code: "验证码",
                get_verification_code: "获取验证码",
                enter_guolaya: "进入 GuolaYa",
                hero_title_prefix: "过啦一下，你就是",
                hero_title_suffix: "大师",
                mode_artist: "艺术",
                mode_storybook: "绘本",
                hero_subtitle: "输入想象，输出世界。AI 将为您生成极具质感的视听盛宴。",
                txt2vid: "文生视频",
                img2vid: "图生视频",
                style_artist: "艺术家",
                style_storybook: "绘本",
                custom_settings: "自定义",
                duration: "生成时长",
                resolution: "清晰度",
                aspect_ratio: "画幅比例",
                discover: "发现",
                gallery_search: "搜索视频...",
                all: "全部精选",
                official_picks: "官方推荐",
                storybook_picks: "精选绘本",
                artist_picks: "精选艺术家",
                gallery: "审美库",
                cinematic: "电影级短片",
                concept: "概念海报",
                anime: "动漫二次元",
                product: "产品摄影",
                faq: "常见问题 (FAQ)",
                faq_q1: "积分如何获取和消耗？",
                faq_a1: "每日登录可免费领取签到积分，邀请好友注册也能获得丰厚奖励。根据生成的时长和画质（720P/1080P），单次任务将消耗 10-50 不等的积分。",
                faq_q2: "支持哪些视频画幅比例？",
                faq_a2: "我们提供 16:9 (横屏视频), 9:16 (短视频), 1:1 (正方形) 等多种画幅支持。",
                faq_q3: "上传的首尾帧图有格式限制吗？",
                faq_a3: "支持 JPG, PNG 格式的高清图片，单张图片建议不超过 10MB，分辨率最低建议为 1080x1080 像素以保证生成效果。",
                faq_q4: "生成的视频可以商用吗？",
                faq_a4: "平台生成的所有视频版权归创作者所有，完全支持在小红书、抖音等平台的发布和正规商业化用途。",
                start_generate: "开始生成",
                recent_tasks: "最近生成任务",
                assets_management: "资产管理",
                official_messages: "消息与通知",
                user_name: "创作者_001",
                user_role: "普通用户",
                points: "积分",
                points_details: "积分消耗明细",
                points_center: "积分中心",
                daily_checkin: "签到 / 邀请送积分",
                logout: "退出登录",
                login_register: "登录 / 注册",
                privacy: "隐私政策",
                terms: "服务条款",
                contact: "联系我们"
            },
            en: {
                nav_home: "Home",
                nav_create: "Create",
                nav_assets: "Assets",
                nav_messages: "Messages",
                nav_faq: "FAQ",
                join_beta_group: "Join Beta Group",
                join_wechat_group_desc: "Scan to join the official WeChat group and get the latest model updates and exclusive benefits.",
                scan_wechat: "Scan with WeChat",
                lang_zh: "中文",
                lang_en: "English",
                assets_desc: "All your creative works are safely stored here.",
                all_files: "All Files",
                videos: "Videos",
                images: "Images",
                my_favorites: "My Favorites",
                messages_desc: "Get official activities and system notices in real time.",
                system_notice: "System Notice",
                phone_login: "Phone Login",
                wechat_login: "WeChat Scan",
                scan_wechat_login: "Please use WeChat to scan and login",
                points_center_title: "Points Center",
                available_points: "Available Points",
                points_details_tab: "Points Details",
                points_rules: "Points Rules",
                points_what: "1. What are points?",
                points_what_desc: "Users can consume points to use AI generation features. Get 50 free points daily by logging in, and more points with membership.",
                points_types: "2. Point Types, Validity & How to Earn",
                points_attr: "Attribute",
                points_category: "Category",
                points_how: "How to Earn",
                points_validity: "Validity",
                points_subscription: "Subscription Points",
                points_gift: "Gift Points",
                points_daily_free: "Daily Free Points",
                points_lucky: "Random Lucky Points",
                points_recharge: "Recharge Points",
                points_buy_member: "Purchase Membership",
                points_login: "Login to GuolaYa AI",
                points_recharge_get: "Recharge",
                points_subscription_validity: "Issued monthly during subscription period, valid for 30 days from issuance",
                points_daily_validity: "Expires at 24:00 same day",
                points_recharge_validity: "Valid for 1 year",
                points_order: "3. Points Consumption Order",
                points_order_desc: "Points with earlier expiration are consumed first. Default order: Daily Free Points → Subscription Points → Recharge Points.",
                points_recharge_rule: "4. Points Recharge",
                points_recharge_desc: "You can recharge to get points. Points are virtual goods with prepaid service. Please read carefully: Once recharged, points cannot be refunded or exchanged for RMB.",
                points_price: "5. Recharge Price List",
                points_contact: "6. Contact Us",
                points_contact_desc: "If you have any questions about points, please use the 'Contact Us' section to leave feedback and contact information. Our staff will contact you.",
                points_item_1080: "Generate 1080P Video (10s)",
                points_item_checkin: "Daily Check-in Reward",
                points_item_invite: "Invite Friend (User_8891)",
                points_item_4k: "Generate 4K Video (5s)",
                points_500: "500 Points",
                points_750: "750 Points",
                points_1500: "1500 Points",
                points_2250: "2250 Points",
                points_4500: "4500 Points",
                points_9000: "9000 Points",
                buy_points: "Buy Points",
                home_prompt_placeholder: "Describe the video content you want to generate... (Paste images directly here)",
                create_prompt_placeholder: "Describe the video scene in detail. For example: cinematic quality, aerial view, a vintage sports car driving along a winding coastal road...",
                clear_content: "Clear content",
                create_scene_description: "Scene Description",
                prompt_polish: "Prompt Polish",
                visual_reference: "Visual Reference",
                optional: "Optional",
                upload_first_last_frame: "Click or drag to upload first/last frame",
                support_jpg_png: "Supports JPG, PNG",
                consume_points: "Consumes {points} points",
                search_assets: "Search assets...",
                phone_number: "Enter your phone number",
                verification_code: "Verification code",
                get_verification_code: "Get code",
                enter_guolaya: "Enter GuolaYa",
                hero_title_prefix: "With GuolaYa, you're a ",
                hero_title_suffix: " Master",
                mode_artist: "Art",
                mode_storybook: "Story",
                hero_subtitle: "Input imagination, output the world. AI generates cinematic masterpieces for you.",
                txt2vid: "Text to Video",
                img2vid: "Image to Video",
                style_artist: "Artist",
                style_storybook: "Storybook",
                custom_settings: "Custom",
                duration: "Duration",
                resolution: "Resolution",
                aspect_ratio: "Aspect Ratio",
                discover: "Discover",
                gallery_search: "Search videos...",
                all: "All Curated",
                official_picks: "Official Picks",
                storybook_picks: "Storybook Picks",
                artist_picks: "Artist Picks",
                gallery: "Gallery",
                cinematic: "Cinematic Shorts",
                concept: "Concept Posters",
                anime: "Anime 2D",
                product: "Product Shots",
                faq: "FAQ",
                faq_q1: "How do I earn and spend points?",
                faq_a1: "Earn free points by daily check-in and inviting friends. Each generation task consumes 10-50 points depending on duration and quality (720P/1080P).",
                faq_q2: "What aspect ratios are supported?",
                faq_a2: "We support 16:9 (landscape), 9:16 (portrait/short video), 1:1 (square) and more.",
                faq_q3: "Are there any format restrictions for uploaded images?",
                faq_a3: "Supports JPG, PNG formats. Each image should not exceed 10MB, with a minimum resolution of 1080x1080 pixels for best results.",
                faq_q4: "Can generated videos be used commercially?",
                faq_a4: "All videos generated on the platform belong to the creator and fully support commercial use on platforms like Xiaohongshu and Douyin.",
                start_generate: "Generate",
                recent_tasks: "Recent Tasks",
                assets_management: "Assets Management",
                official_messages: "Messages & Notifications",
                user_name: "Creator_001",
                user_role: "Standard User",
                points: "Pts",
                points_details: "Points Details",
                points_center: "Points Center",
                daily_checkin: "Check-in & Invite",
                logout: "Logout",
                login_register: "Login / Register",
                privacy: "Privacy Policy",
                terms: "Terms of Service",
                contact: "Contact Us"
            }
        };

        // 切换语言的自定义下拉逻辑
        function toggleLangMenu() {
            document.getElementById('langDropdown').classList.toggle('hidden');
        }

        // 获取当前语言
        function getCurrentLang() {
            return localStorage.getItem('guolaya-lang') || 'zh';
        }

        // 设置当前语言
        function setCurrentLang(lang) {
            localStorage.setItem('guolaya-lang', lang);
        }

        // 应用翻译到所有元素
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

            // 翻译所有带有 data-i18n-title 属性的元素（title 提示）
            document.querySelectorAll('[data-i18n-title]').forEach(el => {
                const key = el.getAttribute('data-i18n-title');
                if (data[key]) {
                    el.title = data[key];
                }
            });

            // 更新语言下拉框的选中状态
            document.querySelectorAll('.lang-item').forEach(item => {
                const itemLang = item.getAttribute('data-i18n');
                if (itemLang === `lang_${lang}`) {
                    // 选中状态：粗体 + 深色文字 + 背景色
                    item.classList.remove('text-zinc-500', 'font-medium');
                    item.classList.add('text-zinc-900', 'font-bold', 'bg-zinc-50');
                } else {
                    // 未选中状态：普通字体 + 浅灰色文字 无背景色
                    item.classList.add('text-zinc-500', 'font-medium');
                    item.classList.remove('text-zinc-900', 'font-bold', 'bg-zinc-50');
                }
            });
            
            // 更新积分消耗显示
            const costEl = document.getElementById('duration-cost');
            if (costEl) {
                updateDurationCost(parseInt(costEl.innerText) || 10);
            }
        }

        // 更新积分消耗显示（支持国际化）
        function updateDurationCost(cost) {
            const lang = getCurrentLang();
            const data = i18nData[lang] || i18nData['zh'];
            const template = data.consume_points || '消耗 {points} 积分';
            const costEl = document.getElementById('duration-cost');
            if (costEl) {
                costEl.innerText = cost;
                // 更新父元素的完整文本
                const parent = costEl.parentElement;
                if (parent && parent.hasAttribute('data-i18n-consume-points')) {
                    parent.innerHTML = template.replace('{points}', `<span id="duration-cost">${cost}</span>`);
                }
            }
        }

        // 选择语言并应用翻译
        function selectLang(langCode, langLabel) {
            document.getElementById('current-lang-display').innerText = langLabel;
            document.getElementById('langDropdown').classList.add('hidden');
            document.body.setAttribute('data-lang', langCode);
            setCurrentLang(langCode);
            applyTranslations(langCode);
            
            // 更新模式显示
            updateModeDisplay();
            updateTitleAndMenu();
            
            // 重新创建图标
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }

        function changeLang(lang) {
            const langLabels = { zh: '中文', en: 'English' };
            document.getElementById('current-lang-display').innerText = langLabels[lang] || '中文';
            setCurrentLang(lang);
            applyTranslations(lang);
            updateModeDisplay();
        }

        // --------- 创意模式切换 (艺术家/绘本) ---------
        let currentCreateMode = 'artist';

        function toggleCreateMode() {
            currentCreateMode = currentCreateMode === 'artist' ? 'storybook' : 'artist';
            updateTitleAndMenu();
        }

        function updateTitleAndMenu() {
            const modeWord = document.getElementById('mode-word');
            const lang = getCurrentLang();
            const data = i18nData[lang] || i18nData['zh'];

            // 根据当前语言切换模式词
            const modeText = currentCreateMode === 'artist' ? data.mode_artist : data.mode_storybook;
            modeWord.textContent = modeText;

            // 亮色蓝色和黄色
            const brightBlue = '#4DB8FF';
            const brightYellow = '#FFD700';
            const color = currentCreateMode === 'artist' ? brightBlue : brightYellow;

            modeWord.style.color = color;
            document.documentElement.style.setProperty('--mode-word-underline', color);

            // 同时更新菜单（但不弹出菜单）
            const mode = currentCreateMode === 'artist' ? data.style_artist : data.style_storybook;
            const modeSpan = document.getElementById('home-current-mode');
            if(modeSpan) {
                modeSpan.innerText = mode;
                modeSpan.setAttribute('data-i18n', currentCreateMode === 'artist' ? 'style_artist' : 'style_storybook');
            }

            const isArtist = currentCreateMode === 'artist';
            document.getElementById('home-mode-icon-artist').classList.toggle('hidden', !isArtist);
            document.getElementById('home-mode-icon-book').classList.toggle('hidden', isArtist);
            const currentModelIcon = document.getElementById('current-model-icon');
            if (currentModelIcon) {
                currentModelIcon.src = isArtist ? '/artist-logo.svg' : '/storybook-logo.svg';
                currentModelIcon.alt = isArtist ? '艺术家' : '绘本';
            }

            const item1 = document.getElementById('home-mode-item-1');
            const item2 = document.getElementById('home-mode-item-2');

            if(isArtist) {
                item1.className = "px-3 py-2.5 rounded-lg text-sm font-bold cursor-pointer flex justify-between items-center bg-zinc-100 text-zinc-900 transition-colors";
                item1.querySelector('.home-mode-check').classList.remove('hidden');
                item2.className = "px-3 py-2.5 rounded-lg text-sm font-bold cursor-pointer flex justify-between items-center text-zinc-600 hover:bg-zinc-50 transition-colors";
                item2.querySelector('.home-mode-check').classList.add('hidden');
            } else {
                item2.className = "px-3 py-2.5 rounded-lg text-sm font-bold cursor-pointer flex justify-between items-center bg-zinc-100 text-zinc-900 transition-colors";
                item2.querySelector('.home-mode-check').classList.remove('hidden');
                item1.className = "px-3 py-2.5 rounded-lg text-sm font-bold cursor-pointer flex justify-between items-center text-zinc-600 hover:bg-zinc-50 transition-colors";
                item1.querySelector('.home-mode-check').classList.add('hidden');
            }
            
            // 重新应用翻译以更新模式相关文本
            applyTranslations(lang);
        }

        function switchCreateMode(mode) {
            currentCreateMode = mode;
            updateModeDisplay();
        }

        function updateModeDisplay() {
            const modeWord = document.getElementById('mode-word');
            const lang = getCurrentLang();
            const data = i18nData[lang] || i18nData['zh'];

            // 根据当前语言切换模式词
            const modeText = currentCreateMode === 'artist' ? data.mode_artist : data.mode_storybook;
            if(modeWord) modeWord.textContent = modeText;

            // 亮色蓝色和黄色
            const brightBlue = '#4DB8FF';
            const brightYellow = '#FFD700';
            const color = currentCreateMode === 'artist' ? brightBlue : brightYellow;

            if(modeWord) modeWord.style.color = color;
            document.documentElement.style.setProperty('--mode-word-underline', color);
        }

        // --------- 视图与路由管理 ---------
        function switchGlobalTab(tabId) {
            document.querySelectorAll('.view-container').forEach(el => {
                el.classList.add('hidden');
                el.classList.remove('flex');
            });
            const activeView = document.getElementById('view-' + tabId);
            activeView.classList.remove('hidden');
            if (tabId === 'create') {
                activeView.classList.add('flex');
                
                // 同步首页选择的生成类型（文生/图生）
                const genTypeEl = document.getElementById('home-current-gen-type');
                const currentGenType = genTypeEl ? genTypeEl.innerText : '文生视频';
                if (typeof setCreateGenType === 'function') {
                    setCreateGenType(currentGenType, true);
                }
            }
            if (tabId === 'assets') {
                renderAssetGrid();
            }

            document.querySelectorAll('.nav-item').forEach(el => {
                el.classList.remove('bg-zinc-100', 'text-zinc-900', 'shadow-sm');
                el.classList.add('text-zinc-400');
                el.querySelector('.active-indicator')?.classList.add('hidden');
            });
            const activeNav = document.getElementById('nav-' + tabId);
            if(activeNav) {
                activeNav.classList.add('bg-zinc-100', 'text-zinc-900', 'shadow-sm');
                activeNav.classList.remove('text-zinc-400');
                activeNav.querySelector('.active-indicator')?.classList.remove('hidden');
            }

            // 切换到创作页面时，同步首页选择的模式
            if(tabId === 'create') {
                const lang = getCurrentLang();
                const data = i18nData[lang] || i18nData['zh'];
                const modeText = currentCreateMode === 'artist' ? data.style_artist : data.style_storybook;
                document.getElementById('current-model-text').innerText = modeText;
                const currentModelIcon = document.getElementById('current-model-icon');
                if (currentModelIcon) {
                    currentModelIcon.src = currentCreateMode === 'artist' ? '/artist-logo.svg' : '/storybook-logo.svg';
                    currentModelIcon.alt = currentCreateMode === 'artist' ? '艺术家' : '绘本';
                }
                const badge = document.getElementById('preview-model-badge');
                if (badge) badge.innerText = modeText;

                // 更新模型下拉菜单的选中状态
                const item1 = document.getElementById('model-item-1');
                const item2 = document.getElementById('model-item-2');
                const isArtist = currentCreateMode === 'artist';
                if(isArtist) {
                    item1.className = 'px-3 py-2 rounded-lg text-sm font-medium cursor-pointer flex justify-between items-center bg-zinc-100 text-zinc-900 transition-colors';
                    item1.querySelector('.check-icon').classList.remove('hidden');
                    item2.className = 'px-3 py-2 rounded-lg text-sm font-medium cursor-pointer flex justify-between items-center text-zinc-600 hover:bg-zinc-50 transition-colors';
                    item2.querySelector('.check-icon').classList.add('hidden');
                } else {
                    item2.className = 'px-3 py-2 rounded-lg text-sm font-medium cursor-pointer flex justify-between items-center bg-zinc-100 text-zinc-900 transition-colors';
                    item2.querySelector('.check-icon').classList.remove('hidden');
                    item1.className = 'px-3 py-2 rounded-lg text-sm font-medium cursor-pointer flex justify-between items-center text-zinc-600 hover:bg-zinc-50 transition-colors';
                    item1.querySelector('.check-icon').classList.add('hidden');
                }
            }

            handleScroll({target: document.getElementById('view-' + tabId)});
        }
const sidebarProps = {
  confirmLogout,
  openModal,
  switchGlobalTab,
  toggleUserMenu,
  toggleWechatGroup
}
const mainSectionProps = {
  galleryItems: aestheticGalleryItems,
  handleCreateDragLeave,
  handleCreateDragOver,
  handleCreateDrop,
  handleCreateGenerate,
  handleCreateInput,
  handleHomeDragLeave,
  handleHomeDragOver,
  handleHomeDrop,
  handleHomeGenerate,
  handleHomeInput,
  handleHomePaste,
  handleScroll,
  openModal,
  openVideoModal,
  removeCreateImage,
  removeHomeImage,
  selectLang,
  setCustomRatio,
  setCustomRes,
  setHomeFilter,
  setHomeMode,
  setMessageFilter,
  setModel,
  setRatio,
  setResolution,
  switchGlobalTab,
  toggleCreateMode,
  toggleCustomDropdown,
  toggleHomeModeDropdown,
  toggleLangMenu,
  toggleModelDropdown,
  updateCreateCharCount,
  updateCustomDuration,
  updateCustomDurationFromTime,
  updateDurationFromSlider,
  updateDurationFromTime
}
const modalProps = {
  closeAssetDownloadModal,
  closeModal,
  closeVideoModal,
  copyAssetLink,
  copyAssetPrompt,
  copyVideoShareLink,
  downloadAsset,
  generateSimilar,
  setHomeMode,
  switchLoginTab,
  switchPointsTab
}
onMounted(() => {
        if(typeof window !== 'undefined') window.handleHomeDrop = handleHomeDrop;
        if(typeof window !== 'undefined') window.copyShareLink = copyShareLink;
        if(typeof window !== 'undefined') window.setGenType = setGenType;
        if(typeof window !== 'undefined') window.setDuration = setDuration;
        if(typeof window !== 'undefined') window.shareToDouyin = shareToDouyin;
        if(typeof window !== 'undefined') window.addHomeImage = addHomeImage;
        if(typeof window !== 'undefined') window.handleHomeGenerate = handleHomeGenerate;
        if(typeof window !== 'undefined') window.handleHomePaste = handleHomePaste;
        if(typeof window !== 'undefined') window.switchCreateMode = switchCreateMode;
        if(typeof window !== 'undefined') window.resetHomeImageBox = resetHomeImageBox;
        if(typeof window !== 'undefined') window.setRatio = setRatio;
        if(typeof window !== 'undefined') window.openAssetDownloadModal = openAssetDownloadModal;
        if(typeof window !== 'undefined') window.copyCardLink = copyCardLink;
        if(typeof window !== 'undefined') window.closeAssetDownloadModal = closeAssetDownloadModal;
        if(typeof window !== 'undefined') window.setMessageFilter = setMessageFilter;
        if(typeof window !== 'undefined') window.toggleUserMenu = toggleUserMenu;
        if(typeof window !== 'undefined') window.switchLoginTab = switchLoginTab;
        if(typeof window !== 'undefined') window.shareToWeChat = shareToWeChat;
        if(typeof window !== 'undefined') window.updateTitleAndMenu = updateTitleAndMenu;
        if(typeof window !== 'undefined') window.showToast = showToast;
        if(typeof window !== 'undefined') window.removeHomeImage = removeHomeImage;
        if(typeof window !== 'undefined') window.switchPointsTab = switchPointsTab;
        if(typeof window !== 'undefined') window.toggleGenTypeDropdown = toggleGenTypeDropdown;
        if(typeof window !== 'undefined') window.setHomeFilter = setHomeFilter;
        if(typeof window !== 'undefined') window.toggleWechatGroup = toggleWechatGroup;
        if(typeof window !== 'undefined') window.toggleCreateMode = toggleCreateMode;
        if(typeof window !== 'undefined') window.handleHomeDragLeave = handleHomeDragLeave;
        if(typeof window !== 'undefined') window.removeCreateImage = removeCreateImage;
        if(typeof window !== 'undefined') window.setCustomRes = setCustomRes;
        if(typeof window !== 'undefined') window.openModal = openModal;
        if(typeof window !== 'undefined') window.copyVideoShareLink = copyVideoShareLink;
        if(typeof window !== 'undefined') window.closeVideoModal = closeVideoModal;
        if(typeof window !== 'undefined') window.setResolution = setResolution;
        if(typeof window !== 'undefined') window.removeHomeImageByIndex = removeHomeImageByIndex;
        if(typeof window !== 'undefined') window.setHomeMode = setHomeMode;
        if(typeof window !== 'undefined') window.handleCreateInput = handleCreateInput;
        if(typeof window !== 'undefined') window.toggleCustomDropdown = toggleCustomDropdown;
        if(typeof window !== 'undefined') window.updateHomeImageTags = updateHomeImageTags;
        if(typeof window !== 'undefined') window.updateModeDisplay = updateModeDisplay;
        if(typeof window !== 'undefined') window.confirmLogout = confirmLogout;
        if(typeof window !== 'undefined') window.handleHomeInput = handleHomeInput;
        if(typeof window !== 'undefined') window.openVideoModal = openVideoModal;
        if(typeof window !== 'undefined') window.toggleCreateGenTypeDropdown = toggleCreateGenTypeDropdown;
        if(typeof window !== 'undefined') window.switchGlobalTab = switchGlobalTab;
        if(typeof window !== 'undefined') window.setAssetFilter = setAssetFilter;
        if(typeof window !== 'undefined') window.downloadAsset = downloadAsset;
        if(typeof window !== 'undefined') window.handleScroll = handleScroll;
        if(typeof window !== 'undefined') window.updateDurationFromTime = updateDurationFromTime;
        if(typeof window !== 'undefined') window.updateCustomDurationFromTime = updateCustomDurationFromTime;
        if(typeof window !== 'undefined') window.renderAssetGrid = renderAssetGrid;
        if(typeof window !== 'undefined') window.closeModal = closeModal;
        if(typeof window !== 'undefined') window.updateCreateCharCount = updateCreateCharCount;
        if(typeof window !== 'undefined') window.adjustFabMenuPosition = adjustFabMenuPosition;
        if(typeof window !== 'undefined') window.handleHomeDragOver = handleHomeDragOver;
        if(typeof window !== 'undefined') window.generateSimilar = generateSimilar;
        if(typeof window !== 'undefined') window.copyAssetLink = copyAssetLink;
        if(typeof window !== 'undefined') window.handleCreateGenerate = handleCreateGenerate;
        if(typeof window !== 'undefined') window.copyAssetPrompt = copyAssetPrompt;
        if(typeof window !== 'undefined') window.updateDurationFromSlider = updateDurationFromSlider;
        if(typeof window !== 'undefined') window.changeLang = changeLang;
        if(typeof window !== 'undefined') window.toggleHomeModeDropdown = toggleHomeModeDropdown;
        if(typeof window !== 'undefined') window.toggleLangMenu = toggleLangMenu;
        if(typeof window !== 'undefined') window.setModel = setModel;
        if(typeof window !== 'undefined') window.toggleModelDropdown = toggleModelDropdown;
        if(typeof window !== 'undefined') window.handleCreateDragOver = handleCreateDragOver;
        if(typeof window !== 'undefined') window.selectLang = selectLang;
        if(typeof window !== 'undefined') window.setCreateGenType = setCreateGenType;
        if(typeof window !== 'undefined') window.handleCreateDragLeave = handleCreateDragLeave;
        if(typeof window !== 'undefined') window.handleCreateDrop = handleCreateDrop;
        if(typeof window !== 'undefined') window.updateCustomDuration = updateCustomDuration;
        if(typeof window !== 'undefined') window.setCustomRatio = setCustomRatio;
        if(typeof window !== 'undefined') window.shareToXiaohongshu = shareToXiaohongshu;
            if(typeof lucide !== 'undefined') lucide.createIcons();

            const titleObserver = new IntersectionObserver(([entry]) => {
                const el = document.getElementById('home-main-title');
                if (entry.isIntersecting) {
                    el.classList.add('opacity-100', 'translate-y-0');
                    el.classList.remove('opacity-0', 'translate-y-12');
                } else {
                    el.classList.remove('opacity-100', 'translate-y-0');
                    el.classList.add('opacity-0', 'translate-y-12');
                }
            }, { threshold: 0.1 });
            const titleEl = document.getElementById('home-main-title');
            if(titleEl) titleObserver.observe(titleEl);

            adjustFabMenuPosition();
            renderAssetGrid();

            // 初始化语言
            const savedLang = getCurrentLang();
            const langLabels = { zh: '中文', en: 'English' };
            document.getElementById('current-lang-display').innerText = langLabels[savedLang];
            applyTranslations(savedLang);

            // 初始化创意模式
            updateModeDisplay();

            // 初始化创作界面的模式显示
            const initLang = getCurrentLang();
            const initData = i18nData[initLang] || i18nData['zh'];
            const initialModeText = currentCreateMode === 'artist' ? initData.style_artist : initData.style_storybook;
            document.getElementById('current-model-text').innerText = initialModeText;
            const initialModelIcon = document.getElementById('current-model-icon');
            if (initialModelIcon) {
                initialModelIcon.src = currentCreateMode === 'artist' ? '/artist-logo.svg' : '/storybook-logo.svg';
                initialModelIcon.alt = currentCreateMode === 'artist' ? '艺术家' : '绘本';
            }
            const initBadge = document.getElementById('preview-model-badge');
            if (initBadge) initBadge.innerText = initialModeText;

            // 初始化模型下拉菜单的选中状态
            const item1 = document.getElementById('model-item-1');
            const item2 = document.getElementById('model-item-2');
            if(currentCreateMode === 'artist') {
                item1.className = 'px-3 py-2 rounded-lg text-sm font-medium cursor-pointer flex justify-between items-center bg-zinc-100 text-zinc-900 transition-colors';
                item1.querySelector('.check-icon').classList.remove('hidden');
                item2.className = 'px-3 py-2 rounded-lg text-sm font-medium cursor-pointer flex justify-between items-center text-zinc-600 hover:bg-zinc-50 transition-colors';
                item2.querySelector('.check-icon').classList.add('hidden');
            } else {
                item2.className = 'px-3 py-2 rounded-lg text-sm font-medium cursor-pointer flex justify-between items-center bg-zinc-100 text-zinc-900 transition-colors';
                item2.querySelector('.check-icon').classList.remove('hidden');
                item1.className = 'px-3 py-2 rounded-lg text-sm font-medium cursor-pointer flex justify-between items-center text-zinc-600 hover:bg-zinc-50 transition-colors';
                item1.querySelector('.check-icon').classList.add('hidden');
            }

            // 初始化创作界面的生成类型显示
            const initialGenType = document.getElementById('home-current-gen-type') ? document.getElementById('home-current-gen-type').innerText : '文生视频';
            if (typeof setCreateGenType === 'function') {
                setCreateGenType(initialGenType, true);
            }

            // 初始化生成时长滑块和输入框
            updateDurationFromSlider(5);
            updateCustomDuration(5);

            // 点击外部关闭语言菜单
            document.addEventListener('click', (e) => {
                const langContainer = document.getElementById('langMenuContainer');
                if (langContainer && !langContainer.contains(e.target)) {
                    document.getElementById('langDropdown')?.classList.add('hidden');
                }
            });

        });

        // --------- 弹窗管理 ---------
        function openModal(id) {
            const modal = document.getElementById(id);
            const content = document.getElementById(id + '-content');
            modal.classList.remove('hidden');
            setTimeout(() => {
                modal.classList.remove('opacity-0');
                content.classList.remove('scale-95', 'opacity-0');
                content.classList.add('scale-100', 'opacity-100');
            }, 10);
        }

        function closeModal(id) {
            const modal = document.getElementById(id);
            const content = document.getElementById(id + '-content');
            modal.classList.add('opacity-0');
            content.classList.remove('scale-100', 'opacity-100');
            content.classList.add('scale-95', 'opacity-0');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }

        function switchLoginTab(tab) {
            if (tab === 'phone') {
                document.getElementById('tab-login-phone').className = "flex-1 py-4 text-sm font-bold text-zinc-900 border-b-2 border-zinc-900 transition-colors";
                document.getElementById('tab-login-wechat').className = "flex-1 py-4 text-sm font-bold text-zinc-400 hover:text-zinc-900 transition-colors border-b-2 border-transparent";
                document.getElementById('login-phone-form').classList.remove('hidden');
                document.getElementById('login-wechat-form').classList.add('hidden');
                document.getElementById('login-wechat-form').classList.remove('flex');
            } else {
                document.getElementById('tab-login-wechat').className = "flex-1 py-4 text-sm font-bold text-zinc-900 border-b-2 border-zinc-900 transition-colors";
                document.getElementById('tab-login-phone').className = "flex-1 py-4 text-sm font-bold text-zinc-400 hover:text-zinc-900 transition-colors border-b-2 border-transparent";
                document.getElementById('login-wechat-form').classList.remove('hidden');
                document.getElementById('login-wechat-form').classList.add('flex');
                document.getElementById('login-phone-form').classList.add('hidden');
            }
        }

        // 积分弹窗内部Tab切换
        function switchPointsTab(tab) {
            if (tab === 'details') {
                document.getElementById('tab-points-details').className = "pb-3 text-sm font-bold text-zinc-900 border-b-2 border-zinc-900 transition-colors";
                document.getElementById('tab-points-rules').className = "pb-3 text-sm font-bold text-zinc-400 hover:text-zinc-900 transition-colors border-b-2 border-transparent";
                document.getElementById('points-details-list').classList.remove('hidden');
                document.getElementById('points-rules-content').classList.add('hidden');
            } else {
                document.getElementById('tab-points-rules').className = "pb-3 text-sm font-bold text-zinc-900 border-b-2 border-zinc-900 transition-colors";
                document.getElementById('tab-points-details').className = "pb-3 text-sm font-bold text-zinc-400 hover:text-zinc-900 transition-colors border-b-2 border-transparent";
                document.getElementById('points-rules-content').classList.remove('hidden');
                document.getElementById('points-details-list').classList.add('hidden');
            }
        }

        function handleScroll(e) {
            const fab = document.getElementById('fab-menu');
            if (!fab) return;

            const isMobile = window.innerWidth < 768;
            const defaultBottom = isMobile ? '5.5rem' : '2.5rem';
            const nearBottomPos = isMobile ? '120px' : '80px';

            // 调整fab-menu的水平位置以对齐gallery的中心
            const gallery = document.getElementById('home-gallery');
            if (gallery) {
                const rect = gallery.getBoundingClientRect();
                const absoluteLeft = window.scrollX + rect.left + rect.width / 2;
                fab.style.left = absoluteLeft + 'px';
                fab.style.transform = 'translateX(-50%)';
            }

            const viewHome = document.getElementById('view-home');
            if (!viewHome || e.target.id !== 'view-home') {
                fab.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
                fab.classList.remove('translate-y-0', 'opacity-100');
                fab.style.bottom = defaultBottom;  // 恢复
                return;
            }

            const scrollTop = e.target.scrollTop;
            const clientHeight = e.target.clientHeight;
            const scrollHeight = e.target.scrollHeight;

            // 检查是否接近底部 (距离底部 < 100px)
            const isNearBottom = (scrollHeight - scrollTop - clientHeight) < 100;

            if (scrollTop > 300) {
                fab.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
                fab.classList.add('translate-y-0', 'opacity-100');

                // 如果在底部附近，将菜单移到底部栏上方
                if (isNearBottom) {
                    fab.style.bottom = nearBottomPos;  // 贴着底部栏上方，留一点缝
                } else {
                    fab.style.bottom = defaultBottom;  // 恢复
                }
            } else {
                fab.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
                fab.classList.remove('translate-y-0', 'opacity-100');
                fab.style.bottom = defaultBottom;  // 恢复
            }
        }

        function toggleUserMenu() {
            document.getElementById('userDropdown').classList.toggle('hidden');
        }

        function toggleWechatGroup() {
            document.getElementById('wechatGroupDropdown').classList.toggle('hidden');
        }

        function confirmLogout() {
            if (confirm('确定要退出登录吗？')) {
                router.push('/');
            }
        }

        function toggleGenTypeDropdown() {
            document.getElementById('home-gen-type-dropdown').classList.toggle('hidden');
            document.getElementById('home-gen-type-chevron').classList.toggle('rotate-180');
        }

        function setGenType(type) {
            const modeSpan = document.getElementById('home-current-gen-type');
            if (modeSpan) {
                modeSpan.innerText = type;
                if(type === '文生视频') modeSpan.setAttribute('data-i18n', 'txt2vid');
                if(type === '图生视频') modeSpan.setAttribute('data-i18n', 'img2vid');
            }

            const iconEl = document.getElementById('home-gen-type-icon');
            if (iconEl) {
                if (type === '文生视频') iconEl.setAttribute('data-lucide', 'film');
                else if (type === '图生视频') iconEl.setAttribute('data-lucide', 'image');
                if(typeof lucide !== 'undefined') lucide.createIcons();
            }

            const uploadBox = document.getElementById('home-upload-box');
            if (uploadBox) {
                if (type === '文生视频') {
                    uploadBox.classList.add('hidden');
                } else if (type === '图生视频') {
                    uploadBox.classList.remove('hidden');
                }
            }

            document.querySelectorAll('.gen-type-item').forEach(item => {
                const text = item.innerText.trim();
                const check = item.querySelector('.gen-type-check');
                if (check && (text === type || item.querySelector('span').innerText === type)) {
                    item.className = "gen-type-item px-3 py-2.5 rounded-lg text-sm font-bold cursor-pointer flex justify-between items-center bg-zinc-100 text-zinc-900 transition-colors";
                    check.classList.remove('hidden');
                } else if (check) {
                    item.className = "gen-type-item px-3 py-2.5 rounded-lg text-sm font-bold cursor-pointer flex justify-between items-center text-zinc-600 hover:bg-zinc-50 transition-colors";
                    check.classList.add('hidden');
                }
            });
            const dropdown = document.getElementById('home-gen-type-dropdown');
            if (dropdown) toggleGenTypeDropdown();
            
            if (typeof setCreateGenType === 'function') {
                setCreateGenType(type, true);
            }
            

        }

        function toggleHomeModeDropdown() {
            document.getElementById('home-mode-dropdown').classList.toggle('hidden');
            document.getElementById('home-mode-chevron').classList.toggle('rotate-180');
        }

        function setHomeMode(mode) {
            // 更新全局模式
            currentCreateMode = (mode === '艺术家') ? 'artist' : 'storybook';

            // 获取当前语言的文本
            const lang = getCurrentLang();
            const data = i18nData[lang] || i18nData['zh'];
            const modeText = currentCreateMode === 'artist' ? data.style_artist : data.style_storybook;

            const modeSpan = document.getElementById('home-current-mode');
            modeSpan.innerText = modeText;
            modeSpan.setAttribute('data-i18n', currentCreateMode === 'artist' ? 'style_artist' : 'style_storybook');

            // 更新标题词汇
            updateModeDisplay();

            const isArtist = currentCreateMode === 'artist';
            document.getElementById('home-mode-icon-artist').classList.toggle('hidden', !isArtist);
            document.getElementById('home-mode-icon-book').classList.toggle('hidden', isArtist);

            const item1 = document.getElementById('home-mode-item-1');
            const item2 = document.getElementById('home-mode-item-2');

            if(isArtist) {
                item1.className = "px-3 py-2.5 rounded-lg text-sm font-bold cursor-pointer flex justify-between items-center bg-zinc-100 text-zinc-900 transition-colors";
                item1.querySelector('.home-mode-check').classList.remove('hidden');
                item2.className = "px-3 py-2.5 rounded-lg text-sm font-bold cursor-pointer flex justify-between items-center text-zinc-600 hover:bg-zinc-50 transition-colors";
                item2.querySelector('.home-mode-check').classList.add('hidden');
            } else {
                item2.className = "px-3 py-2.5 rounded-lg text-sm font-bold cursor-pointer flex justify-between items-center bg-zinc-100 text-zinc-900 transition-colors";
                item2.querySelector('.home-mode-check').classList.remove('hidden');
                item1.className = "px-3 py-2.5 rounded-lg text-sm font-bold cursor-pointer flex justify-between items-center text-zinc-600 hover:bg-zinc-50 transition-colors";
                item1.querySelector('.home-mode-check').classList.add('hidden');
            }
            toggleHomeModeDropdown();
        }

        function toggleCustomDropdown() {
            document.getElementById('home-custom-dropdown').classList.toggle('hidden');
        }

        // 全局变量存储上传的图片
        let homeUploadedImages = [];

        function handleHomePaste(e) {
            const items = (e.clipboardData || window.clipboardData).items;
            let imageAdded = false;
            for (let index in items) {
                const item = items[index];
                if (item.kind === 'file' && item.type.includes('image')) {
                    const blob = item.getAsFile();
                    const reader = new FileReader();
                    reader.onload = function(event) {
                        addHomeImage(event.target.result);
                        setGenType('图生视频'); 
                    };
                    reader.readAsDataURL(blob);
                    imageAdded = true;
                }
            }
            // 如果不是图片粘贴，不阻止默认行为（允许文本粘贴）
            if (!imageAdded) {
                return true;
            }
        }

        function addHomeImage(imageSrc) {
            // 添加到图片数组
            homeUploadedImages.push(imageSrc);
            
            // 更新占位框显示最后上传的图片
            const imgEl = document.getElementById('home-pasted-image');
            const placeholderEl = document.getElementById('home-upload-placeholder');
            const removeBtn = document.getElementById('home-remove-img-btn');
            const imageBox = document.getElementById('home-image-box');
            
            imgEl.src = imageSrc;
            imgEl.classList.remove('hidden');
            placeholderEl.classList.add('hidden');
            removeBtn.classList.remove('hidden');
            removeBtn.classList.add('flex');
            // 移除虚线边框，改为实线边框（有图片时）
            imageBox.classList.remove('border-dashed');
            imageBox.classList.add('border-solid');
            
            // 更新图片标签
            updateHomeImageTags();
            
            showToast('图片已添加');
        }

        function updateHomeImageTags() {
            const tagsContainer = document.getElementById('home-image-tags');
            tagsContainer.innerHTML = '';
            
            homeUploadedImages.forEach((img, index) => {
                const tag = document.createElement('div');
                tag.className = 'inline-flex items-center gap-2 pl-1 pr-1.5 py-1 bg-zinc-100 hover:bg-zinc-200 rounded-lg text-xs text-zinc-600 cursor-pointer transition-colors group';
                tag.innerHTML = `
                    <img src="${img}" class="w-5 h-5 rounded object-cover border border-zinc-200" />
                    <span>图片${index + 1}</span>
                    <button onclick="event.stopPropagation(); removeHomeImageByIndex(${index})" class="p-0.5 hover:bg-zinc-300 rounded transition-colors">
                        <i data-lucide="x" class="w-3 h-3"></i>
                    </button>
                `;
                // 点击标签可以切换显示该图片
                tag.onclick = function(e) {
                    if (e.target.tagName !== 'BUTTON' && !e.target.closest('button')) {
                        document.getElementById('home-pasted-image').src = img;
                    }
                };
                tagsContainer.appendChild(tag);
            });
            
            if(typeof lucide !== 'undefined') lucide.createIcons();
        }

        function removeHomeImageByIndex(index) {
            homeUploadedImages.splice(index, 1);
            
            if (homeUploadedImages.length === 0) {
                // 没有图片了，恢复默认状态
                resetHomeImageBox();
                setGenType('文生视频');
            } else {
                // 显示最后一张图片
                const lastImg = homeUploadedImages[homeUploadedImages.length - 1];
                document.getElementById('home-pasted-image').src = lastImg;
            }
            
            updateHomeImageTags();
        }

        function resetHomeImageBox() {
            const imgEl = document.getElementById('home-pasted-image');
            const placeholderEl = document.getElementById('home-upload-placeholder');
            const removeBtn = document.getElementById('home-remove-img-btn');
            const imageBox = document.getElementById('home-image-box');
            
            imgEl.src = '';
            imgEl.classList.add('hidden');
            placeholderEl.classList.remove('hidden');
            removeBtn.classList.add('hidden');
            removeBtn.classList.remove('flex');
            // 恢复虚线边框
            imageBox.classList.add('border-dashed');
            imageBox.classList.remove('border-solid');
        }

        // ========== 主界面拖拽图片功能 ==========
        function handleHomeDragOver(e) {
            e.preventDefault();
            e.stopPropagation();
            document.getElementById('home-drag-overlay').classList.remove('hidden');
        }

        function handleHomeDragLeave(e) {
            e.preventDefault();
            e.stopPropagation();
            if (e.target.id === 'home-input-container') {
                document.getElementById('home-drag-overlay').classList.add('hidden');
            }
        }

        function handleHomeDrop(e) {
            e.preventDefault();
            e.stopPropagation();
            document.getElementById('home-drag-overlay').classList.add('hidden');
            
            const files = e.dataTransfer.files;
            if (files.length > 0 && files[0].type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    addHomeImage(event.target.result);
                    setGenType('图生视频');
                };
                reader.readAsDataURL(files[0]);
            }
        }

        // ========== 主界面字数统计与限制 ==========
        function handleHomeInput(e) {
            const input = e.target;
            const count = input.value.length;
            const countEl = document.getElementById('home-char-count');
            countEl.textContent = `${count}/1000`;
            
            if (count > 1000) {
                countEl.classList.add('text-red-500');
                countEl.classList.remove('text-zinc-400');
            } else {
                countEl.classList.remove('text-red-500');
                countEl.classList.add('text-zinc-400');
            }
        }

        function handleHomeGenerate() {
            const input = document.getElementById('home-prompt-input');
            const count = input.value.length;
            
            if (count > 1000) {
                showToast('提示词最多支持1000字，当前' + count + '字');
                return;
            }
            
            switchGlobalTab('create');
        }

        // ========== 创作界面拖拽图片功能 ==========
        function handleCreateDragOver(e) {
            e.preventDefault();
            e.stopPropagation();
            document.getElementById('create-drag-overlay').classList.remove('hidden');
        }

        function handleCreateDragLeave(e) {
            e.preventDefault();
            e.stopPropagation();
            if (e.target.id === 'create-drop-zone') {
                document.getElementById('create-drag-overlay').classList.add('hidden');
            }
        }

        function handleCreateDrop(e) {
            e.preventDefault();
            e.stopPropagation();
            document.getElementById('create-drag-overlay').classList.add('hidden');
            
            const files = e.dataTransfer.files;
            if (files.length > 0 && files[0].type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    document.getElementById('create-dropped-image').src = event.target.result;
                    document.getElementById('create-image-preview-container').classList.remove('hidden');
                    document.getElementById('create-drop-placeholder').classList.add('hidden');
                    showToast('图片已添加');
                };
                reader.readAsDataURL(files[0]);
            }
        }

        function removeCreateImage() {
            document.getElementById('create-dropped-image').src = '';
            document.getElementById('create-image-preview-container').classList.add('hidden');
            document.getElementById('create-drop-placeholder').classList.remove('hidden');
        }

        // ========== 创作界面字数统计与限制 ==========
        function handleCreateInput(e) {
            const input = e.target;
            const count = input.value.length;
            const countEl = document.getElementById('create-char-count');
            countEl.textContent = `${count}/1000`;
            
            if (count > 1000) {
                countEl.classList.add('text-red-500');
                countEl.classList.remove('text-zinc-400');
            } else {
                countEl.classList.remove('text-red-500');
                countEl.classList.add('text-zinc-400');
            }
        }

        function updateCreateCharCount() {
            const input = document.getElementById('create-prompt-textarea');
            const count = input.value.length;
            const countEl = document.getElementById('create-char-count');
            countEl.textContent = `${count}/1000`;
            countEl.classList.remove('text-red-500');
            countEl.classList.add('text-zinc-400');
        }

        function handleCreateGenerate() {
            const input = document.getElementById('create-prompt-textarea');
            const count = input.value.length;
            
            if (count > 1000) {
                showToast('提示词最多支持1000字，当前' + count + '字');
                return;
            }
            
            // 这里可以添加实际的生成逻辑
            showToast('开始生成视频...');
        }

        function removeHomeImage() {
            // 清除所有图片
            homeUploadedImages = [];
            
            // 恢复占位框默认状态
            resetHomeImageBox();
            
            // 清除图片标签
            updateHomeImageTags();
            
            setGenType('文生视频');
            
            // 重新渲染图标确保显示正确
            if (typeof lucide !== 'undefined') {
                if(typeof lucide !== 'undefined') lucide.createIcons();
            }
        }

        const sliderAnimationState = new WeakMap();
        function animateSliderToValue(slider, targetValue, duration = 180) {
            if (!slider) return;
            const min = Number(slider.min || 0);
            const max = Number(slider.max || targetValue);
            const target = Math.min(max, Math.max(min, Number(targetValue)));
            const start = Number(slider.value || target);
            if (!Number.isFinite(target) || !Number.isFinite(start)) return;
            if (Math.abs(target - start) < 0.0001) {
                slider.value = target;
                return;
            }

            const prev = sliderAnimationState.get(slider);
            if (prev?.rafId) cancelAnimationFrame(prev.rafId);

            const startTime = performance.now();
            const delta = target - start;
            const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

            const tick = (now) => {
                const progress = Math.min(1, (now - startTime) / duration);
                slider.value = start + delta * easeOutCubic(progress);
                if (progress < 1) {
                    const rafId = requestAnimationFrame(tick);
                    sliderAnimationState.set(slider, { rafId });
                } else {
                    slider.value = target;
                    sliderAnimationState.delete(slider);
                }
            };

            const rafId = requestAnimationFrame(tick);
            sliderAnimationState.set(slider, { rafId });
        }

        function normalizeDurationInput(mins, secs) {
            let normalizedMins = Number.isFinite(mins) ? mins : 0;
            let normalizedSecs = Number.isFinite(secs) ? secs : 0;

            if (normalizedMins < 0) normalizedMins = 0;
            if (normalizedSecs < 0) normalizedSecs = 0;

            if (normalizedSecs >= 60) {
                normalizedMins += Math.floor(normalizedSecs / 60);
                normalizedSecs = normalizedSecs % 60;
            }

            if (normalizedMins > 3) {
                normalizedMins = 3;
                normalizedSecs = 0;
            }

            if (normalizedMins === 3 && normalizedSecs > 0) {
                normalizedSecs = 0;
            }

            return {
                mins: normalizedMins,
                secs: normalizedSecs
            };
        }

        function updateCustomDuration(val) {
            // 将秒数转换为分和秒，同步更新输入框
            const totalSeconds = parseInt(val) || 5;
            const mins = Math.floor(totalSeconds / 60);
            const secs = totalSeconds % 60;
            
            const minInput = document.getElementById('custom-duration-min');
            const secInput = document.getElementById('custom-duration-sec');
            if (minInput) minInput.value = mins;
            if (secInput) secInput.value = secs;
            
            const warning = document.getElementById('home-multi-agent-warning');
            if (warning) {
                if (totalSeconds > 10) {
                    warning.classList.remove('hidden');
                } else {
                    warning.classList.add('hidden');
                }
            }
        }

        function updateCustomDurationFromTime() {
            // 从分和秒输入框获取值
            let mins = parseInt(document.getElementById('custom-duration-min').value) || 0;
            let secs = parseInt(document.getElementById('custom-duration-sec').value) || 0;
            const normalized = normalizeDurationInput(mins, secs);
            mins = normalized.mins;
            secs = normalized.secs;
            document.getElementById('custom-duration-min').value = mins;
            document.getElementById('custom-duration-sec').value = secs;
            
            // 计算总秒数
            let totalSeconds = mins * 60 + secs;
            if (totalSeconds < 5) totalSeconds = 5;
            if (totalSeconds > 180) totalSeconds = 180;
            
            // 如果总秒数超出范围，调整秒数
            if (totalSeconds !== mins * 60 + secs) {
                const adjustedMins = Math.floor(totalSeconds / 60);
                const adjustedSecs = totalSeconds % 60;
                document.getElementById('custom-duration-min').value = adjustedMins;
                document.getElementById('custom-duration-sec').value = adjustedSecs;
            }
            
            // 同步更新滑块
            const slider = document.getElementById('custom-duration-slider');
            animateSliderToValue(slider, totalSeconds);
            
            // 更新警告
            const warning = document.getElementById('home-multi-agent-warning');
            if (warning) {
                if (totalSeconds > 10) {
                    warning.classList.remove('hidden');
                } else {
                    warning.classList.add('hidden');
                }
            }
        }

        function setCustomRes(el) {
            document.querySelectorAll('.custom-res-btn').forEach(btn => {
                btn.className = "flex-1 py-1.5 text-xs font-bold rounded-lg border border-zinc-200 bg-white text-zinc-500 hover:text-zinc-900 custom-res-btn transition-colors";
            });
            el.className = "flex-1 py-1.5 text-xs font-bold rounded-lg border border-zinc-900 bg-zinc-900 text-white custom-res-btn transition-colors";
        }

        function setCustomRatio(el) {
            document.querySelectorAll('.custom-ratio-btn').forEach(btn => {
                btn.className = "py-1.5 text-xs font-bold rounded-lg border border-zinc-200 bg-white text-zinc-500 hover:text-zinc-900 custom-ratio-btn transition-colors";
            });
            el.className = "py-1.5 text-xs font-bold rounded-lg border border-zinc-900 bg-zinc-900 text-white custom-ratio-btn transition-colors";
        }

        function openVideoModal(element) {
            const img = element.getAttribute('data-img');
            const title = element.getAttribute('data-title');
            const author = element.getAttribute('data-author');

            document.getElementById('modal-img').src = img;
            document.getElementById('modal-title').innerText = title;
            document.getElementById('modal-author').innerText = '@' + author;
            document.getElementById('modal-author-avatar').src = `https://api.dicebear.com/7.x/notionists/svg?seed=${author}&backgroundColor=f4f4f5`;
            document.getElementById('modal-prompt').innerText = `电影级质感，高分辨率，${title}。场景极具视觉冲击力，深沉的光影对比，赛博朋克风格的霓虹灯效映射在主体的表面。`;
            
            // 设置分享链接
            const shareLink = `https://guolaya.ai/share/work/${encodeURIComponent(title)}-${encodeURIComponent(author)}`;
            document.getElementById('video-share-link').value = shareLink;

            openModal('video-modal');
        }

        function closeVideoModal() {
            closeModal('video-modal');
        }

        function generateSimilar() {
            closeVideoModal();
            setTimeout(() => { switchGlobalTab('create'); }, 300);
        }

        // 视频详情页复制分享链接
        function copyVideoShareLink() {
            const link = document.getElementById('video-share-link').value;
            navigator.clipboard.writeText(link).then(() => {
                const btn = document.getElementById('video-copy-link-btn');
                const originalHTML = btn.innerHTML;
                btn.innerHTML = `<i data-lucide="check" class="w-4 h-4"></i> 已复制`;
                btn.classList.replace('bg-zinc-900', 'bg-emerald-600');
                if(typeof lucide !== 'undefined') lucide.createIcons();
                showToast('链接已复制到剪贴板');
                setTimeout(() => {
                    btn.innerHTML = originalHTML;
                    btn.classList.replace('bg-emerald-600', 'bg-zinc-900');
                    if(typeof lucide !== 'undefined') lucide.createIcons();
                }, 2000);
            }).catch(err => {
                console.log('复制失败', err);
                showToast('复制失败，请重试');
            });
        }

        function copyShareLink() {
            const btn = document.getElementById('share-link-btn');
            const originalHTML = btn.innerHTML;
            btn.innerHTML = `<i data-lucide="check" class="w-4 h-4"></i> 已复制`;
            btn.classList.replace('bg-zinc-50', 'bg-emerald-50');
            btn.classList.replace('text-zinc-700', 'text-emerald-600');
            if(typeof lucide !== 'undefined') lucide.createIcons();

            setTimeout(() => {
                btn.innerHTML = originalHTML;
                btn.classList.replace('bg-emerald-50', 'bg-zinc-50');
                btn.classList.replace('text-emerald-600', 'text-zinc-700');
                if(typeof lucide !== 'undefined') lucide.createIcons();
            }, 2000);
        }

        function shareToWeChat() {
            const shareLink = window.location.href;
            // 复制链接到剪贴板
            navigator.clipboard.writeText(shareLink).then(() => {
                alert('链接已复制，请在微信中粘贴分享');
            }).catch(err => {
                console.log('复制失败', err);
            });
        }

        function shareToDouyin() {
            const shareLink = window.location.href;
            // 复制链接到剪贴板
            navigator.clipboard.writeText(shareLink).then(() => {
                alert('链接已复制，请在抖音中粘贴分享');
            }).catch(err => {
                console.log('复制失败', err);
            });
        }

        function shareToXiaohongshu() {
            const shareLink = window.location.href;
            // 复制链接到剪贴板
            navigator.clipboard.writeText(shareLink).then(() => {
                alert('链接已复制，请在小红书中粘贴分享');
            }).catch(err => {
                console.log('复制失败', err);
            });
        }

        document.addEventListener("mousedown", function(event) {
            const wechatContainer = document.getElementById('wechatGroupContainer');
            const wechatDropdown = document.getElementById('wechatGroupDropdown');
            if (wechatContainer && wechatDropdown && !wechatContainer.contains(event.target)) {
                wechatDropdown.classList.add('hidden');
            }
            
            const userContainer = document.getElementById('userMenuContainer');
            const dropdown = document.getElementById('userDropdown');
            if (userContainer && dropdown && !userContainer.contains(event.target)) {
                dropdown.classList.add('hidden');
            }
            
            const modelContainer = document.getElementById('modelDropdownContainer');
            const modelDropdown = document.getElementById('modelDropdown');
            if(modelContainer && modelDropdown && !modelContainer.contains(event.target)) {
                modelDropdown.classList.add('hidden');
                const icon = document.getElementById('model-dropdown-icon');
                if(icon) icon.classList.remove('rotate-180');
            }

            const createGenTypeContainer = document.getElementById('createGenTypeContainer');
            const createGenTypeDropdown = document.getElementById('createGenTypeDropdown');
            if(createGenTypeContainer && createGenTypeDropdown && !createGenTypeContainer.contains(event.target)) {
                createGenTypeDropdown.classList.add('hidden');
                const icon = document.getElementById('create-gen-type-dropdown-icon');
                if(icon) icon.classList.remove('rotate-180');
            }

            const homeModeContainer = document.getElementById('home-mode-dropdown-container');
            const homeModeDropdownMenu = document.getElementById('home-mode-dropdown');
            if(homeModeContainer && homeModeDropdownMenu && !homeModeContainer.contains(event.target)) {
                homeModeDropdownMenu.classList.add('hidden');
                const chevron = document.getElementById('home-mode-chevron');
                if(chevron) chevron.classList.remove('rotate-180');
            }

            const genTypeContainer = document.getElementById('home-gen-type-dropdown-container');
            const genTypeDropdownMenu = document.getElementById('home-gen-type-dropdown');
            if(genTypeContainer && genTypeDropdownMenu && !genTypeContainer.contains(event.target)) {
                genTypeDropdownMenu.classList.add('hidden');
                const chevron = document.getElementById('home-gen-type-chevron');
                if(chevron) chevron.classList.remove('rotate-180');
            }

            const customContainer = document.getElementById('home-custom-dropdown-container');
            const customDropdown = document.getElementById('home-custom-dropdown');
            if(customContainer && customDropdown && !customContainer.contains(event.target)) {
                customDropdown.classList.add('hidden');
            }
            const langContainer = document.getElementById('langMenuContainer');
            if(langContainer && !langContainer.contains(event.target)) {
                document.getElementById('langDropdown')?.classList.add('hidden');
            }
        });

        // 创作台设置逻辑
        function toggleModelDropdown() {
            document.getElementById('modelDropdown').classList.toggle('hidden');
            document.getElementById('model-dropdown-icon').classList.toggle('rotate-180');
        }

        function toggleCreateGenTypeDropdown() {
            document.getElementById('createGenTypeDropdown').classList.toggle('hidden');
            document.getElementById('create-gen-type-dropdown-icon').classList.toggle('rotate-180');
        }

        function setCreateGenType(type, skipToggle) {
            const display = document.getElementById('current-create-gen-type');
            if (display) display.innerText = type;
            const item1 = document.getElementById('create-gen-type-item-1');
            const item2 = document.getElementById('create-gen-type-item-2');
            if (item1 && item2) {
                if (type === '文生视频') {
                    item1.className = 'px-3 py-2 rounded-lg text-sm font-medium cursor-pointer flex justify-between items-center bg-zinc-100 text-zinc-900 transition-colors';
                    item1.querySelector('.create-gen-type-check-icon').classList.remove('hidden');
                    item2.className = 'px-3 py-2 rounded-lg text-sm font-medium cursor-pointer flex justify-between items-center text-zinc-600 hover:bg-zinc-50 transition-colors';
                    item2.querySelector('.create-gen-type-check-icon').classList.add('hidden');
                } else {
                    item2.className = 'px-3 py-2 rounded-lg text-sm font-medium cursor-pointer flex justify-between items-center bg-zinc-100 text-zinc-900 transition-colors';
                    item2.querySelector('.create-gen-type-check-icon').classList.remove('hidden');
                    item1.className = 'px-3 py-2 rounded-lg text-sm font-medium cursor-pointer flex justify-between items-center text-zinc-600 hover:bg-zinc-50 transition-colors';
                    item1.querySelector('.create-gen-type-check-icon').classList.add('hidden');
                }
            }
            if (!skipToggle) toggleCreateGenTypeDropdown();
        }

        function setModel(modelName) {
            // 根据传入的中文判断模式
            currentCreateMode = (modelName === '艺术家') ? 'artist' : 'storybook';
            
            // 获取当前语言的文本
            const lang = getCurrentLang();
            const data = i18nData[lang] || i18nData['zh'];
            const modeText = currentCreateMode === 'artist' ? data.style_artist : data.style_storybook;
            
            document.getElementById('current-model-text').innerText = modeText;
            const currentModelIcon = document.getElementById('current-model-icon');
            if (currentModelIcon) {
                currentModelIcon.src = currentCreateMode === 'artist' ? '/artist-logo.svg' : '/storybook-logo.svg';
                currentModelIcon.alt = currentCreateMode === 'artist' ? '艺术家' : '绘本';
            }
            const badge = document.getElementById('preview-model-badge');
            if (badge) badge.innerText = modeText;
            
            // 更新选中状态
            const item1 = document.getElementById('model-item-1');
            const item2 = document.getElementById('model-item-2');
            if (currentCreateMode === 'artist') {
                item1.className = 'px-3 py-2 rounded-lg text-sm font-medium cursor-pointer flex justify-between items-center bg-zinc-100 text-zinc-900 transition-colors';
                item1.querySelector('.check-icon').classList.remove('hidden');
                item2.className = 'px-3 py-2 rounded-lg text-sm font-medium cursor-pointer flex justify-between items-center text-zinc-600 hover:bg-zinc-50 transition-colors';
                item2.querySelector('.check-icon').classList.add('hidden');
            } else {
                item2.className = 'px-3 py-2 rounded-lg text-sm font-medium cursor-pointer flex justify-between items-center bg-zinc-100 text-zinc-900 transition-colors';
                item2.querySelector('.check-icon').classList.remove('hidden');
                item1.className = 'px-3 py-2 rounded-lg text-sm font-medium cursor-pointer flex justify-between items-center text-zinc-600 hover:bg-zinc-50 transition-colors';
                item1.querySelector('.check-icon').classList.add('hidden');
            }
            toggleModelDropdown();
        }

        function setRatio(ratio) {
            const btns = [document.getElementById('ratio-btn-1'), document.getElementById('ratio-btn-2'), document.getElementById('ratio-btn-3')];
            btns.forEach(btn => btn.className = "flex-1 py-2 text-xs font-bold rounded-lg transition-all text-zinc-500 hover:text-zinc-900 hover:bg-white/50 border border-transparent");

            const activeClass = "flex-1 py-2 text-xs font-bold rounded-lg transition-all bg-white text-zinc-900 shadow-sm border border-zinc-200/50";

            if(ratio === '16:9') {
                btns[0].className = activeClass;
            } else if (ratio === '9:16') {
                btns[1].className = activeClass;
            } else {
                btns[2].className = activeClass;
            }
        }

        function updateDurationFromSlider(value) {
            // value范围是5-180，对应5秒-180秒（1秒粒度）
            let seconds = Number(value);
            if (!Number.isFinite(seconds)) seconds = 5;
            if (seconds < 5) seconds = 5;
            if (seconds > 180) seconds = 180;
            const mins = Math.floor(seconds / 60);
            const secs = seconds % 60;
            
            // 同步更新分和秒输入框
            const minInput = document.getElementById('duration-min');
            const secInput = document.getElementById('duration-sec');
            if (minInput) minInput.value = mins;
            if (secInput) secInput.value = secs;
            
            // 计算积分消耗（基础10秒消耗10积分，按比例计算）
            const cost = Math.round((seconds / 5) * 10);
            updateDurationCost(cost);

            // 超过10秒显示多agent提示
            const warning = document.getElementById('multi-agent-warning');
            if (seconds > 10) {
                warning.classList.remove('hidden');
            } else {
                warning.classList.add('hidden');
            }
        }

        function updateDurationFromTime() {
            // 从分和秒输入框获取值
            let mins = parseInt(document.getElementById('duration-min').value) || 0;
            let secs = parseInt(document.getElementById('duration-sec').value) || 0;
            const normalized = normalizeDurationInput(mins, secs);
            mins = normalized.mins;
            secs = normalized.secs;
            document.getElementById('duration-min').value = mins;
            document.getElementById('duration-sec').value = secs;
            
            // 计算总秒数
            let totalSeconds = mins * 60 + secs;
            if (totalSeconds < 5) totalSeconds = 5;
            if (totalSeconds > 180) totalSeconds = 180;

            // 同步更新滑块
            const slider = document.getElementById('duration-slider');
            animateSliderToValue(slider, totalSeconds);
            
            // 计算积分消耗
            const cost = Math.round((totalSeconds / 5) * 10);
            updateDurationCost(cost);
            
            // 更新警告
            const warning = document.getElementById('multi-agent-warning');
            if (totalSeconds > 10) {
                warning.classList.remove('hidden');
            } else {
                warning.classList.add('hidden');
            }
        }

        function setDuration(dur) {
            const btn1 = document.getElementById('dur-btn-1');
            const btn2 = document.getElementById('dur-btn-2');
            const cost = document.getElementById('duration-cost');
            const ptext = document.getElementById('preview-duration-text');
            const activeClass = "flex-1 py-2 text-xs font-bold rounded-lg transition-all bg-white text-zinc-900 shadow-sm border border-zinc-200/50";
            const inactiveClass = "flex-1 py-2 text-xs font-bold rounded-lg transition-all text-zinc-500 hover:text-zinc-900 hover:bg-white/50 border border-transparent";

            if (dur === '5s') {
                btn1.className = activeClass;
                btn2.className = inactiveClass;
                cost.innerText = '10';
                if(ptext) ptext.innerText = '00:05';
            } else {
                btn2.className = activeClass;
                btn1.className = inactiveClass;
                cost.innerText = '20';
                if(ptext) ptext.innerText = '00:10';
            }
        }

        function setResolution(res) {
            const btn1 = document.getElementById('res-btn-1');
            const btn2 = document.getElementById('res-btn-2');
            const activeClass = "flex-1 py-2 text-xs font-bold rounded-lg transition-all bg-white text-zinc-900 shadow-sm border border-zinc-200/50";
            const inactiveClass = "flex-1 py-2 text-xs font-bold rounded-lg transition-all text-zinc-500 hover:text-zinc-900 hover:bg-white/50 border border-transparent";

            if (res === '720p') {
                btn1.className = activeClass;
                btn2.className = inactiveClass;
            } else {
                btn2.className = activeClass;
                btn1.className = inactiveClass;
            }
        }

        function setHomeFilter(el) {
            document.querySelectorAll('#home-filters .filter-item').forEach(item => item.className = "filter-item text-zinc-400 hover:text-zinc-900 cursor-pointer transition-colors");
            el.className = "filter-item text-zinc-900 border-b border-zinc-900 pb-0.5 cursor-pointer transition-colors";
        }

        // 消息筛选功能
        function setMessageFilter(el, type) {
            // 更新按钮样式
            document.querySelectorAll('#message-filters .message-filter').forEach(item => {
                item.className = "message-filter px-4 py-2 rounded-full text-xs font-bold transition-all bg-white text-zinc-500 border border-zinc-200 hover:text-zinc-900 hover:border-zinc-300 whitespace-nowrap";
            });
            const activeButton = el || document.querySelector(`#message-filters .message-filter[data-filter="${type}"]`);
            if (activeButton) {
                activeButton.className = "message-filter px-4 py-2 rounded-full text-xs font-bold transition-all bg-zinc-900 text-white shadow-sm whitespace-nowrap";
            }
            
            const messageItems = document.querySelectorAll('#view-messages [data-message-type]');
            messageItems.forEach(msg => {
                const matches = type === 'all' || msg.getAttribute('data-message-type') === type;
                msg.style.display = matches ? 'block' : 'none';
            });
            
            if(typeof lucide !== 'undefined') lucide.createIcons();
        }
        function setAssetFilter(el) {
            document.querySelectorAll('#asset-filters .asset-filter').forEach(item => item.className = "asset-filter px-4 py-1.5 rounded-full text-xs font-bold transition-all bg-white text-zinc-500 border border-zinc-200 hover:text-zinc-900 hover:border-zinc-300");
            el.className = "asset-filter px-4 py-1.5 rounded-full text-xs font-bold transition-all bg-zinc-900 text-white shadow-sm";
        }

        function adjustFabMenuPosition() {
            const fab = document.getElementById('fab-menu');
            const gallery = document.getElementById('home-gallery');
            if (fab && gallery) {
                const rect = gallery.getBoundingClientRect();
                const absoluteLeft = window.scrollX + rect.left + rect.width / 2;
                fab.style.left = absoluteLeft + 'px';
                fab.style.transform = 'translateX(-50%)';
            }
        }

        window.addEventListener('resize', adjustFabMenuPosition);

        function renderAssetGrid() {
            const assetData = [
                { id: '1618005182384-a83a8bd57fbe', title: '微观宇宙法则', prompt: '电影级质感，高分辨率，微观宇宙法则。场景极具视觉冲击力，深沉的光影对比，赛博朋克风格的霓虹灯效映射在主体的表面。', duration: '00:05' },
                { id: '1451187580459-43490279c0fa', title: '星际漫游', prompt: '浩瀚宇宙中的星际飞船，银河系背景，星光璀璨，电影级渲染，科幻风格。', duration: '00:10' },
                { id: '1534447677768-be436bb09401', title: '废土文明', prompt: '末日废土风格的城市废墟，夕阳下的破败建筑，荒凉与希望的对比。', duration: '00:08' },
                { id: '1536440136628-849c177e76a1', title: '落日余晖', prompt: '电影级质感，航拍视角，一辆复古跑车行驶在蜿蜒的海岸线公路上，夕阳余晖洒在海面上波光粼粼。', duration: '00:15' }
            ];
            document.getElementById('assets-grid').innerHTML = assetData.map((item, i) => `
                <div class="group bg-white rounded-[20px] border border-zinc-200 p-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all cursor-pointer" onclick="openAssetDownloadModal(${i})">
                    <div class="w-full aspect-video bg-zinc-100 rounded-[14px] overflow-hidden relative">
                        <img src="https://images.unsplash.com/photo-${item.id}?auto=format&fit=crop&q=80&w=600" alt="asset" class="w-full h-full object-cover" />
                        <div class="absolute bottom-2 left-2 bg-black/50 backdrop-blur-md px-1.5 py-0.5 rounded text-[10px] text-white font-medium">${item.duration}</div>
                        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                            <div class="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-lg transform scale-90 group-hover:scale-100">
                                <i data-lucide="download" class="w-5 h-5 text-zinc-900"></i>
                            </div>
                        </div>
                    </div>
                    <div class="p-3 flex items-center justify-between">
                        <span class="text-sm font-bold text-zinc-900 truncate">${item.title}</span>
                        <i data-lucide="more-horizontal" class="w-4 h-4 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity"></i>
                    </div>
                </div>
            `).join('');
            if(typeof lucide !== 'undefined') lucide.createIcons();
        }

        // 资产管理下载页相关函数
        let currentAssetIndex = 0;
        const assetDataStore = [
            { id: '1618005182384-a83a8bd57fbe', title: '微观宇宙法则', prompt: '电影级质感，高分辨率，微观宇宙法则。场景极具视觉冲击力，深沉的光影对比，赛博朋克风格的霓虹灯效映射在主体的表面。', duration: '00:05', date: '2026-03-17' },
            { id: '1451187580459-43490279c0fa', title: '星际漫游', prompt: '浩瀚宇宙中的星际飞船，银河系背景，星光璀璨，电影级渲染，科幻风格。', duration: '00:10', date: '2026-03-16' },
            { id: '1534447677768-be436bb09401', title: '废土文明', prompt: '末日废土风格的城市废墟，夕阳下的破败建筑，荒凉与希望的对比。', duration: '00:08', date: '2026-03-15' },
            { id: '1536440136628-849c177e76a1', title: '落日余晖', prompt: '电影级质感，航拍视角，一辆复古跑车行驶在蜿蜒的海岸线公路上，夕阳余晖洒在海面上波光粼粼。', duration: '00:15', date: '2026-03-14' }
        ];

        function openAssetDownloadModal(index) {
            currentAssetIndex = index;
            const asset = assetDataStore[index];
            
            document.getElementById('asset-modal-title').innerText = asset.title;
            document.getElementById('asset-modal-img').src = `https://images.unsplash.com/photo-${asset.id}?auto=format&fit=crop&q=80&w=800`;
            document.getElementById('asset-modal-prompt').innerText = asset.prompt;
            document.getElementById('asset-share-link').value = `https://guolaya.ai/share/v/${asset.id.slice(0, 8)}`;
            
            const modal = document.getElementById('asset-download-modal');
            const content = document.getElementById('asset-download-modal-content');
            modal.classList.remove('hidden');
            setTimeout(() => {
                modal.classList.remove('opacity-0');
                content.classList.remove('scale-95', 'opacity-0');
                content.classList.add('scale-100', 'opacity-100');
            }, 10);
            if(typeof lucide !== 'undefined') lucide.createIcons();
        }

        function closeAssetDownloadModal() {
            const modal = document.getElementById('asset-download-modal');
            const content = document.getElementById('asset-download-modal-content');
            modal.classList.add('opacity-0');
            content.classList.remove('scale-100', 'opacity-100');
            content.classList.add('scale-95', 'opacity-0');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }

        function downloadAsset(type) {
            const asset = assetDataStore[currentAssetIndex];
            if (type === 'with-watermark') {
                // 模拟带水印下载
                showToast('已开始下载（带AI水印版本）');
            } else {
                // 模拟无水印下载
                showToast('已开始下载（无水印高清版本）- 消耗 50 积分');
            }
        }

        function copyAssetPrompt() {
            const prompt = document.getElementById('asset-modal-prompt').innerText;
            navigator.clipboard.writeText(prompt).then(() => {
                showToast('Prompt 已复制到剪贴板');
            });
        }

        function copyAssetLink() {
            const link = document.getElementById('asset-share-link').value;
            navigator.clipboard.writeText(link).then(() => {
                const btn = document.getElementById('asset-copy-link-btn');
                const originalHTML = btn.innerHTML;
                btn.innerHTML = `<i data-lucide="check" class="w-4 h-4"></i> 已复制`;
                btn.classList.replace('bg-zinc-900', 'bg-emerald-600');
                if(typeof lucide !== 'undefined') lucide.createIcons();
                showToast('链接已复制');
                setTimeout(() => {
                    btn.innerHTML = originalHTML;
                    btn.classList.replace('bg-emerald-600', 'bg-zinc-900');
                    if(typeof lucide !== 'undefined') lucide.createIcons();
                }, 2000);
            });
        }

        // 发现页卡片复制链接功能
        function copyCardLink(title, author) {
            const shareLink = `https://guolaya.ai/share/work/${encodeURIComponent(title)}-${encodeURIComponent(author)}`;
            navigator.clipboard.writeText(shareLink).then(() => {
                showToast('链接已复制到剪贴板');
            }).catch(err => {
                console.log('复制失败', err);
                showToast('复制失败，请重试');
            });
        }

        function showToast(message) {
            // 简单的提示函数
            const toast = document.createElement('div');
            toast.className = 'fixed bottom-20 left-1/2 -translate-x-1/2 bg-zinc-900 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg z-[200] animate-in-slide-up';
            toast.innerText = message;
            document.body.appendChild(toast);
            setTimeout(() => {
                toast.style.opacity = '0';
                toast.style.transition = 'opacity 0.3s';
                setTimeout(() => toast.remove(), 300);
            }, 2000);
        }
onMounted(() => {
  if (typeof lucide !== 'undefined') {
    if(typeof lucide !== 'undefined') lucide.createIcons();
  }
})
</script>
<style>
.home-view {
            background: #fbfbfa;
        }

        .home-topbar {
            color: #7a7a76;
            font-family: 'Noto Serif SC', 'Songti SC', 'STSong', serif;
            font-weight: 400;
        }

        .home-main-title {
            font-family: 'Noto Serif SC', 'Songti SC', 'STSong', serif;
            font-style: italic;
            font-weight: 500;
            letter-spacing: -0.055em;
            text-wrap: balance;
        }

        .home-discover-title {
            font-family: 'Noto Serif SC', 'Songti SC', 'STSong', serif;
            font-style: italic;
            font-weight: 500;
            letter-spacing: -0.04em;
        }

        .home-input-container {
            background: #ffffff;
            border: 1px solid #ece7df;
            border-radius: 28px;
            box-shadow: 0 4px 14px rgba(18, 18, 18, 0.03);
            transition:
                border-color 180ms ease,
                box-shadow 180ms ease;
        }

        .home-input-container:focus-within {
            border-color: #ddd6c7;
            box-shadow: 0 8px 22px rgba(18, 18, 18, 0.05);
            transform: none;
        }

        .home-image-box {
            background: #fbfbfa;
            border: 1px solid #efebe4;
            color: #aaaaa5;
        }

        .home-image-box:hover {
            border-color: #ddd6c7;
            background: #ffffff;
            color: #7f7f79;
        }

        .home-prompt-input {
            color: #1b1b1a;
            font-family: 'Noto Serif SC', 'Songti SC', 'STSong', serif;
            font-style: normal;
            font-size: 16px;
            font-weight: 400;
            line-height: 1.85;
            letter-spacing: 0;
        }

        .home-prompt-input::placeholder {
            color: #b5b5b0;
        }

        .home-input-toolbar {
            border-top: 1px solid #f1ede6;
        }

        .home-toolbar-button {
            background: transparent;
            color: #70706b;
            border: none;
            box-shadow: none;
            font-family: 'Noto Serif SC', 'Songti SC', 'STSong', serif;
            font-weight: 400;
        }

        .home-toolbar-button:hover {
            background: transparent;
            color: #171717;
            border-color: transparent;
        }

        #view-create,
        .create-serif-ui,
        .create-section-label,
        .create-panel-title,
        .create-prompt-textarea,
        .create-generate-button,
        .create-control-button {
            font-family: 'Noto Serif SC', 'Songti SC', 'STSong', serif;
        }

        .create-panel-title,
        .create-section-label {
            font-weight: 600;
            letter-spacing: 0.01em;
        }

        .create-control-button,
        .create-serif-ui {
            font-weight: 400;
            letter-spacing: 0.01em;
        }

        .create-prompt-textarea {
            font-style: normal;
            font-size: 15px;
            font-weight: 400;
            line-height: 1.85;
            letter-spacing: 0.01em;
            color: #1b1b1a;
        }

        .create-prompt-textarea::placeholder {
            color: #adada8;
        }

        .create-generate-button {
            font-weight: 500;
            letter-spacing: 0.02em;
        }

        .mode-logo-icon {
            width: 25px;
            height: 25px;
            display: inline-block;
            flex-shrink: 0;
            object-fit: contain;
        }

        .mode-logo-icon--gold {
            filter: brightness(0) saturate(100%) invert(69%) sepia(23%) saturate(730%) hue-rotate(1deg) brightness(89%) contrast(87%);
        }

        .mode-logo-icon--muted {
            opacity: 0.72;
        }

        .footer-policy-link {
            font-family: 'Noto Serif SC', 'Songti SC', 'STSong', serif;
            font-weight: 400;
            letter-spacing: 0.01em;
        }

        .footer-copyright {
            font-family: 'Noto Serif SC', 'Songti SC', 'STSong', serif;
            font-weight: 400;
            letter-spacing: 0.01em;
        }

        .points-modal-surface,
        .points-modal-copy,
        .points-modal-button,
        .points-modal-tab,
        .points-modal-section,
        #points-details-list td,
        #points-details-list div,
        #points-rules-content th,
        #points-rules-content td,
        #points-rules-content span {
            font-family: 'Noto Serif SC', 'Songti SC', 'STSong', serif;
        }

        .points-modal-title,
        .points-modal-section {
            font-family: 'Noto Serif SC', 'Songti SC', 'STSong', serif;
            font-style: italic;
            font-weight: 600;
            letter-spacing: 0.01em;
        }

        .points-modal-copy,
        .points-modal-button,
        .points-modal-tab {
            font-weight: 400;
            letter-spacing: 0.01em;
        }

        #view-assets h1,
        #view-messages h1,
        #view-faq h1 {
            font-family: 'Noto Serif SC', 'Songti SC', 'STSong', serif;
            font-style: italic;
            font-weight: 600;
            letter-spacing: -0.04em;
        }

        #view-assets p,
        #view-assets input,
        #view-assets button,
        #assets-grid span,
        #view-messages p,
        #view-messages button,
        #view-messages h3,
        #view-messages h4,
        #view-messages span,
        #view-faq p,
        #view-faq h4 {
            font-family: 'Noto Serif SC', 'Songti SC', 'STSong', serif;
            font-weight: 400;
            letter-spacing: 0.01em;
        }

        #view-assets h3,
        #view-messages h3,
        #view-messages h4,
        #view-faq h4 {
            font-weight: 600;
        }

        #view-assets input::placeholder {
            font-family: 'Noto Serif SC', 'Songti SC', 'STSong', serif;
        }

        /* 隐藏滚动条 */
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
        }

        /* 亮色蓝色和黄色变量 */
        :root {
            --mode-word-color: #4DB8FF;
            --mode-word-underline: #4DB8FF;
        }

        /* Tailwind 动画拓展 */
        @keyframes fadeInSlideUp {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
        }
        /* 模式词手写体与彩色下划线 */
        #mode-word {
            font-family: inherit !important;
            font-weight: inherit !important;
            font-size: 1.2em;
            font-style: inherit !important;
            position: relative;
            display: inline-block;
            transform: skewX(-10deg);
            transform-origin: center;
            text-decoration: none !important;
            transition: color 300ms ease, background 300ms ease;
            font-synthesis: none;
            -webkit-font-smoothing: antialiased;
            text-rendering: geometricPrecision;
            color: #c7a15a;
        }

        #home-char-count,
        #current-lang-display,
        #home-current-mode,
        #gallery-search {
            font-weight: 400;
        }

        #mode-word::after {
            display: none;
        }

        .mode-word-slot {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-width: auto;
            margin-left: 0.08em;
            margin-right: 0;
            white-space: nowrap;
            vertical-align: baseline;
            line-height: 1;
        }

        /* 柔和分割线样式变体 */
        .separator-divider {
            position: relative;
            transition: all 300ms ease;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        /* 选项 1: 经典梯度 (当前) */
        .separator-divider.style-gradient {
            background: linear-gradient(to bottom, transparent, rgba(228, 228, 231, 0.4), transparent);
            width: 1px;
        }

        /* 选项 2: 玻璃态 (推荐) */
        .separator-divider.style-glass {
            background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0));
            backdrop-filter: blur(0.5px);
            width: 1px;
            box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.05);
        }

        /* 选项 3: 超极简 */
        .separator-divider.style-minimal {
            background: rgba(228, 228, 231, 0.3);
            width: 1px;
        }

        /* 选项 4: 柔和阴影 */
        .separator-divider.style-shadow {
            background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.02), transparent);
            width: 1px;
            box-shadow: 1px 0 2px rgba(0, 0, 0, 0.01), -1px 0 2px rgba(0, 0, 0, 0.01);
        }

        /* 选项 5: 双线细致 */
        .separator-divider.style-double {
            background: linear-gradient(to right, transparent, rgba(228, 228, 231, 0.3) 0.5px, transparent 0.5px, transparent 100%);
            width: 2px;
        }

        /* 选项 6: 柔和细线 */
        .separator-divider.style-script {
            background: linear-gradient(to bottom, transparent 0%, rgba(228, 228, 231, 0.3) 50%, transparent 100%);
            width: 1px;
            position: relative;
        }

        .separator-divider.style-script::before {
            display: none;
        }

        /* 悬停效果 (可选) */
        .separator-divider:hover {
            background: linear-gradient(to bottom, transparent, rgba(228, 228, 231, 0.6), transparent);
        }
</style>
