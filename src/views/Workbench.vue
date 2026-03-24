<template>
  <div class="flex flex-col md:flex-row h-screen w-full bg-[#fbfbfa] text-zinc-900 font-sans overflow-hidden selection:bg-[#ece7dc]">
    

    <!-- 极简浅色侧边栏 - Global Sidebar -->
    <aside class="w-full md:w-[72px] h-[72px] md:h-full flex flex-row md:flex-col items-center justify-between md:justify-start py-0 md:py-6 px-4 md:px-0 bg-white border-t md:border-t-0 md:border-r border-zinc-200 z-30 shadow-[0_-4px_24px_rgba(0,0,0,0.02)] md:shadow-[4px_0_24px_rgba(0,0,0,0.02)] shrink-0 order-last md:order-none">
        <!-- Logo 区域 (像素马) -->
        <div @click="switchGlobalTab('home')" class="w-10 h-10 md:w-12 md:h-12 relative flex items-center justify-center mb-0 md:mb-2 mr-2 md:mr-0 cursor-pointer transition-transform hover:scale-105 overflow-hidden">
            <!-- 只显示左侧的马 -->
            <img src="data:image/png;base64,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" alt="Horse Logo" class="h-10 w-16 object-cover" style="object-position: left center;" onerror="this.src='https://placehold.co/40x40/transparent/333?text=Logo'" />
        </div>
        
        <!-- 核心导航 -->
        <nav class="flex-1 flex flex-row md:flex-col gap-1 md:gap-4 w-auto md:w-full items-center justify-center md:justify-start md:mt-2">
            <!-- 首页 -->
            <div id="nav-home" @click="switchGlobalTab('home')" class="nav-item bg-zinc-100 text-zinc-900 shadow-sm relative group flex flex-col items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl cursor-pointer transition-all" data-title="nav_home" title="首页" data-i18n-title="nav_home">
                <i data-lucide="home" class="w-[22px] h-[22px] stroke-[1.5]"></i>
                <div class="active-indicator absolute left-1/2 bottom-0 -translate-x-1/2 w-6 h-1 rounded-t-full md:left-0 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 md:w-1 md:h-6 bg-zinc-900 md:rounded-r-full md:rounded-tl-none"></div>
            </div>
            <!-- 创作 -->
            <div id="nav-create" @click="switchGlobalTab('create')" class="nav-item text-zinc-400 hover:text-zinc-900 hover:bg-zinc-50 relative group flex flex-col items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl cursor-pointer transition-all" data-title="nav_create" title="创作" data-i18n-title="nav_create">
                <i data-lucide="film" class="w-[22px] h-[22px] stroke-[1.5]"></i>
                <div class="active-indicator hidden absolute left-1/2 bottom-0 -translate-x-1/2 w-6 h-1 rounded-t-full md:left-0 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 md:w-1 md:h-6 bg-zinc-900 md:rounded-r-full md:rounded-tl-none"></div>
            </div>
            <!-- 资产 -->
            <div id="nav-assets" @click="switchGlobalTab('assets')" class="nav-item text-zinc-400 hover:text-zinc-900 hover:bg-zinc-50 relative group flex flex-col items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl cursor-pointer transition-all" data-title="nav_assets" title="资产" data-i18n-title="nav_assets">
                <i data-lucide="folder-open" class="w-[22px] h-[22px] stroke-[1.5]"></i>
                <div class="active-indicator hidden absolute left-1/2 bottom-0 -translate-x-1/2 w-6 h-1 rounded-t-full md:left-0 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 md:w-1 md:h-6 bg-zinc-900 md:rounded-r-full md:rounded-tl-none"></div>
            </div>

            <div class="w-[1px] h-6 md:w-8 md:h-[1px] bg-zinc-200 my-0 mx-1 md:my-2 md:mx-0"></div>

            <!-- 消息（官方通知） -->
            <div id="nav-messages" @click="switchGlobalTab('messages')" class="nav-item text-zinc-400 hover:text-zinc-900 hover:bg-zinc-50 relative group flex flex-col items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl cursor-pointer transition-all" data-title="nav_messages" title="消息" data-i18n-title="nav_messages">
                <i data-lucide="bell" class="w-[22px] h-[22px] stroke-[1.5]"></i>
                <div class="active-indicator hidden absolute left-1/2 bottom-0 -translate-x-1/2 w-6 h-1 rounded-t-full md:left-0 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 md:w-1 md:h-6 bg-zinc-900 md:rounded-r-full md:rounded-tl-none"></div>
            </div>

            <!-- 常见问题 (FAQ) -->
            <div id="nav-faq" @click="switchGlobalTab('faq')" class="nav-item text-zinc-400 hover:text-zinc-900 hover:bg-zinc-50 relative group flex flex-col items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl cursor-pointer transition-all" data-title="nav_faq" title="常见问题" data-i18n-title="nav_faq">
                <i data-lucide="info" class="w-[22px] h-[22px] stroke-[1.5]"></i>
                <div class="active-indicator hidden absolute left-1/2 bottom-0 -translate-x-1/2 w-6 h-1 rounded-t-full md:left-0 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 md:w-1 md:h-6 bg-zinc-900 md:rounded-r-full md:rounded-tl-none"></div>
            </div>
        </nav>

        <!-- 底部系统功能与个人中心 -->
        <div class="flex flex-row md:flex-col gap-3 md:gap-5 items-center mt-0 md:mt-auto ml-2 md:ml-0 relative" id="userMenuContainer">
            
            <!-- 加入内测微信群 (悬浮小窗口) -->
            <div class="relative cursor-pointer" tabindex="0" id="wechatGroupContainer">
                <button @click="toggleWechatGroup()" class="p-2 text-zinc-400 hover:text-emerald-500 transition-colors relative bg-zinc-50 hover:bg-emerald-50 rounded-full cursor-pointer pointer-events-auto" data-title="join_beta_group" title="加入内测微信群">
                    <i data-lucide="users" class="w-5 h-5 pointer-events-none"></i>
                </button>
                <div id="wechatGroupDropdown" class="hidden absolute bottom-14 right-0 md:left-14 md:bottom-0 md:right-auto md:translate-x-0 w-56 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-zinc-100 p-4 z-50 transition-all duration-300 origin-bottom-right md:origin-left animate-in-slide-up">
                    <h4 class="font-bold text-zinc-900 text-sm mb-1.5 flex items-center gap-1.5"><i data-lucide="message-circle" class="w-4 h-4 text-emerald-500"></i> 内测交流群</h4>
                    <p class="text-xs text-zinc-500 mb-4 leading-relaxed" data-i18n="join_wechat_group_desc">扫码加入官方微信群，获取最新模型动态与专属福利。</p>
                    <div class="w-full aspect-square bg-zinc-50 rounded-xl border border-zinc-200 flex flex-col items-center justify-center p-2 text-zinc-300">
                        <i data-lucide="qr-code" class="w-16 h-16 mb-2"></i>
                        <span class="text-[10px] text-zinc-400" data-i18n="scan_wechat">微信扫一扫</span>
                    </div>
                </div>
            </div>
            
            <div class="relative">
                <button @click="toggleUserMenu()" class="w-10 h-10 rounded-full bg-zinc-100 border border-zinc-200 overflow-hidden cursor-pointer hover:shadow-md transition-all outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2">
                    <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Guola&backgroundColor=f4f4f5" alt="User Avatar" />
                </button>

                <!-- 个人中心菜单 (默认隐藏) -->
                <div id="userDropdown" class="hidden absolute bottom-14 right-0 md:left-14 md:bottom-0 md:right-auto w-48 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-zinc-100 p-2 py-3 z-50 animate-in-slide-up">
                    <div class="px-3 pb-3 mb-2 border-b border-zinc-100 flex justify-between items-center">
                        <div>
                            <p class="text-sm font-bold text-zinc-900" data-i18n="user_name">创作者_001</p>
                            <p class="text-xs text-zinc-500 mt-0.5" data-i18n="user_role">普通用户</p>
                        </div>
                        <div class="text-xs font-bold text-amber-500 bg-amber-50 px-2 py-1 rounded-md">
                            1200 <span data-i18n="points">积分</span>
                        </div>
                    </div>
                    <div class="flex flex-col gap-1">
                        <button @click="openModal('points-modal'); toggleUserMenu()" class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50">
                            <i data-lucide="database" class="w-4 h-4"></i><span data-i18n="points_details">积分消耗明细</span>
                        </button>
                        <button @click="openModal('checkin-modal'); toggleUserMenu()" class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50">
                            <i data-lucide="calendar-check" class="w-4 h-4 text-emerald-500"></i><span data-i18n="daily_checkin">签到 / 邀请送积分</span>
                        </button>
                    </div>
                    <div class="mt-2 pt-2 border-t border-zinc-100">
                        <button @click="confirmLogout()" class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors text-red-600 hover:bg-red-50">
                            <i data-lucide="log-out" class="w-4 h-4"></i><span data-i18n="logout">退出登录</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </aside>

    <!-- 主体内容区 - 路由切换区 -->
    <main class="flex-1 flex flex-col h-full overflow-hidden relative">
        
        <!-- ==================== 1. 首页视图 (Home View) ==================== -->
        <div id="view-home" class="view-container home-view flex-1 overflow-y-auto overflow-x-hidden w-full h-full relative no-scrollbar" @scroll="handleScroll($event)">
            <div class="max-w-[1400px] 2xl:max-w-[1800px] 3xl:max-w-none mx-auto px-4 md:px-6 lg:px-10 py-6 md:py-10 relative z-10">
                <!-- 顶部栏 -->
                <header class="home-topbar flex justify-between items-center mb-6 md:mb-16">
                    <div class="flex items-center gap-3">
                        <div class="flex items-center cursor-pointer" @click="switchGlobalTab('home')">
                            <!-- 完整展示您上传的 Frame.png -->
                            <img src="data:image/png;base64,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" alt="GuolaYa Logo" class="h-10 md:h-12 object-contain" />
                        </div>
                        <span class="ml-2 px-2 py-0.5 bg-[#f5f3ef] text-[#8f7d5c] text-[10px] rounded-full font-medium tracking-[0.16em]">BETA</span>
                    </div>
                    <div class="flex items-center gap-2 md:gap-6 text-sm font-medium text-[#7a7a76]">
                        
                        <!-- 积分中心入口 -->
                        <button @click="openModal('points-modal')" class="flex items-center gap-1.5 text-[#7a7a76] hover:text-[#171717] transition-colors font-bold mr-2">
                            <i data-lucide="database" class="w-4 h-4 text-[#b89a58]"></i>
                            <span data-i18n="points_center">积分中心</span>
                        </button>

                        <!-- 定制化多语言选择器 -->
                        <div class="relative" id="langMenuContainer">
                            <button @click="toggleLangMenu()" class="flex items-center gap-1.5 bg-transparent text-[#7a7a76] font-bold outline-none cursor-pointer hover:text-[#171717] transition-colors">
                                <i data-lucide="globe" class="w-4 h-4"></i>
                                <span id="current-lang-display">中文</span>
                                <i data-lucide="chevron-down" class="w-3.5 h-3.5"></i>
                            </button>
                            <div id="langDropdown" class="hidden absolute right-0 top-full mt-2 w-32 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-zinc-100 p-1.5 z-50 animate-in-slide-up">
                                <button @click="selectLang('zh', '中文')" class="lang-item w-full text-left px-3 py-2 rounded-lg text-sm font-bold text-zinc-900 bg-zinc-50 hover:bg-zinc-100 transition-colors" data-i18n="lang_zh">中文</button>
                                <button @click="selectLang('en', 'English')" class="lang-item w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 transition-colors" data-i18n="lang_en">English</button>

                            </div>
                        </div>

                        <!-- 登录按钮 -->
                        <button @click="$router.push('/')" class="bg-[#171717] text-white px-5 py-2 rounded-full font-bold hover:bg-black transition-colors shadow-sm active:scale-95 flex items-center gap-2">
                            <i data-lucide="user" class="w-4 h-4"></i> <span data-i18n="login_register">登录 / 注册</span>
                        </button>
                    </div>
                </header>

                <!-- 核心搜索/Agent区 -->
                <div class="flex flex-col items-center text-center mb-6 mt-0 relative">
                    <h1 id="home-main-title" class="home-main-title text-[40px] md:text-[56px] font-semibold mb-5 md:mb-7 text-[#181818] leading-[1.14] transition-all duration-1000 ease-out transform relative z-10">
                        <span data-i18n="hero_title_prefix">过啦一下，你就是</span><span id="mode-word" @click="toggleCreateMode()" class="mode-word-slot cursor-pointer hover:opacity-70 transition-opacity">艺术</span><span data-i18n="hero_title_suffix">大师</span>
                    </h1>

                    <!-- 全新灵动输入框 (支持粘贴/拖拽图片与下拉选择) -->
                    <div id="home-input-container" class="home-input-container w-full max-w-[920px] p-4 md:p-5 flex flex-col mb-6 relative z-10"
                         @dragover="handleHomeDragOver($event)" @dragleave="handleHomeDragLeave($event)" @drop="handleHomeDrop($event)">
                        
                        <!-- 拖拽悬停提示遮罩 -->
                        <div id="home-drag-overlay" class="hidden absolute inset-0 bg-black/3 rounded-[28px] border-2 border-dashed border-[#c2a262] z-20 flex items-center justify-center">
                            <div class="text-center">
                                <i data-lucide="image-plus" class="w-12 h-12 text-[#b89a58] mx-auto mb-2"></i>
                                <p class="text-sm font-medium text-[#6f6f6b]">松开以上传图片</p>
                            </div>
                        </div>
                        
                        <!-- 文本与图片预览区域 -->
                        <div class="flex items-start gap-4 md:gap-5 mb-4 text-left">
                            <!-- 左侧图片占位框 - 默认显示+号，上传后显示图片 -->
                            <div id="home-image-box" class="home-image-box relative w-24 h-24 md:w-28 md:h-28 rounded-[22px] flex flex-col items-center justify-center cursor-pointer transition-colors flex-shrink-0 overflow-hidden group">
                                <!-- 默认状态：+号 -->
                                <div id="home-upload-placeholder" class="flex flex-col items-center justify-center">
                                    <i data-lucide="plus" class="w-6 h-6 mb-1"></i>
                                    <span class="text-[10px]">添加图片</span>
                                </div>
                                <!-- 图片预览（初始隐藏） -->
                                <img id="home-pasted-image" src="" class="hidden w-full h-full object-cover absolute inset-0" />
                                <!-- 删除按钮（有图片时悬停显示） -->
                                <button id="home-remove-img-btn" @click="removeHomeImage()" class="hidden absolute top-1.5 right-1.5 w-6 h-6 bg-black/50 hover:bg-black/70 text-white rounded-full items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm z-10">
                                    <i data-lucide="x" class="w-3.5 h-3.5"></i>
                                </button>
                            </div>
                            
                            <!-- 多行文本输入框 + 图片标签 -->
                            <div class="flex-1 flex flex-col">
                                <textarea id="home-prompt-input" @paste="handleHomePaste($event)" @input="handleHomeInput($event)" maxlength="1000" data-placeholder="home_prompt_placeholder" placeholder="描述你想生成的视频内容... (支持在此直接粘贴或拖拽图片)" class="home-prompt-input flex-1 bg-transparent border-none outline-none resize-none h-20 md:h-24 pt-1"></textarea>
                                <!-- 图片标签区域 -->
                                <div id="home-image-tags" class="flex flex-wrap gap-2 mt-2"></div>
                            </div>
                        </div>

                        <!-- 底部工具栏 -->
                        <div class="home-input-toolbar flex justify-between items-center pt-3 md:pt-4 relative">
                            
                            <!-- 左侧选项与工具 -->
                            <div class="flex items-center gap-2">
                                <!-- 风格模式选择下拉 (艺术家/绘本) -->
                                <div class="relative" id="home-mode-dropdown-container">
                                    <button @click="toggleHomeModeDropdown()" class="home-toolbar-button flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-colors">
                                        <div id="home-mode-icon-artist" class="block"><img src="/artist-logo.svg" alt="艺术家" class="mode-logo-icon mode-logo-icon--gold" /></div>
                                        <div id="home-mode-icon-book" class="hidden"><img src="/storybook-logo.svg" alt="绘本" class="mode-logo-icon mode-logo-icon--gold" /></div>
                                        <span id="home-current-mode" data-i18n="style_artist">艺术家</span>
                                        <i data-lucide="chevron-down" id="home-mode-chevron" class="w-4 h-4 text-[#a6a6a2] transition-transform"></i>
                                    </button>
                                    
                                    <!-- 下拉菜单 -->
                                    <div id="home-mode-dropdown" class="hidden absolute left-0 bottom-full mb-2 w-32 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-zinc-200 p-1.5 z-50 animate-in-slide-up">
                                        <div @click="setHomeMode('艺术家')" id="home-mode-item-1" class="px-3 py-2.5 rounded-lg text-sm font-bold cursor-pointer flex justify-between items-center bg-zinc-100 text-zinc-900 transition-colors">
                                            <div class="flex items-center gap-2"><img src="/artist-logo.svg" alt="艺术家" class="mode-logo-icon" /> <span data-i18n="style_artist">艺术家</span></div>
                                            <i data-lucide="check" class="w-4 h-4 text-zinc-900 home-mode-check"></i>
                                        </div>
                                        <div @click="setHomeMode('绘本')" id="home-mode-item-2" class="px-3 py-2.5 rounded-lg text-sm font-bold cursor-pointer flex justify-between items-center text-zinc-600 hover:bg-zinc-50 transition-colors">
                                            <div class="flex items-center gap-2"><img src="/storybook-logo.svg" alt="绘本" class="mode-logo-icon" /> <span data-i18n="style_storybook">绘本</span></div>
                                            <i data-lucide="check" class="hidden w-4 h-4 text-zinc-900 home-mode-check"></i>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- 自定义下拉面板控制 -->
                                <div class="relative" id="home-custom-dropdown-container">
                                    <button @click="toggleCustomDropdown()" class="home-toolbar-button flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-colors">
                                        <i data-lucide="settings-2" class="w-4 h-4 text-[#b89a58]"></i> <span data-i18n="custom_settings">自定义</span>
                                    </button>

                                    <!-- 自定义设置下拉面板 -->
                                    <div id="home-custom-dropdown" class="hidden absolute left-0 bottom-full mb-2 w-[85vw] max-w-[320px] md:w-80 bg-white rounded-2xl shadow-[0_12px_40px_rgb(0,0,0,0.12)] border border-zinc-200 p-5 z-50 animate-in-slide-up cursor-default">
                                        
                                        <!-- 时长设置 -->
                                        <div class="mb-5">
                                            <div class="flex justify-between items-center mb-2">
                                                <span class="text-sm font-bold text-zinc-900" data-i18n="duration">生成时长</span>
                                                <div class="flex items-center gap-1">
                                                    <!-- 分钟输入 -->
                                                    <input type="number" id="custom-duration-min" min="0" max="3" value="0" 
                                                           class="w-12 px-1 py-1 text-xs font-mono font-bold text-zinc-900 bg-zinc-50 border border-zinc-200 rounded-lg text-center focus:outline-none focus:border-zinc-400"
                                                           @input="updateCustomDurationFromTime()">
                                                    <span class="text-xs text-zinc-500">分</span>
                                                    <!-- 秒输入 -->
                                                    <input type="number" id="custom-duration-sec" min="0" max="59" value="5" 
                                                           class="w-12 px-1 py-1 text-xs font-mono font-bold text-zinc-900 bg-zinc-50 border border-zinc-200 rounded-lg text-center focus:outline-none focus:border-zinc-400"
                                                           @input="updateCustomDurationFromTime()">
                                                    <span class="text-xs text-zinc-500">秒</span>
                                                </div>
                                            </div>
                                            <div id="home-multi-agent-warning" class="hidden text-xs text-orange-600 bg-orange-50 p-2.5 rounded-lg border border-orange-200 flex items-start gap-2 mb-3">
                                                <i data-lucide="alert-circle" class="w-4 h-4 flex-shrink-0 mt-0.5"></i>
                                                <span>超过10秒后生成的画面为多Agent并行结果</span>
                                            </div>
                                            <input type="range" min="5" max="180" step="1" value="5" id="custom-duration-slider" class="w-full accent-zinc-900" @input="updateCustomDuration($$event.currentTarget.value)">
                                            <div class="flex justify-between text-[10px] text-zinc-400 mt-1">
                                                <span>5s</span>
                                                <span>3m</span>
                                            </div>
                                        </div>
                                        
                                        <!-- 清晰度设置 -->
                                        <div class="mb-5">
                                            <span class="text-sm font-bold text-zinc-900 mb-2 block" data-i18n="resolution">清晰度</span>
                                            <div class="flex gap-2">
                                                <button class="flex-1 py-1.5 text-xs font-bold rounded-lg border border-zinc-200 bg-white text-zinc-500 hover:text-zinc-900 custom-res-btn transition-colors" @click="setCustomRes($$event.currentTarget)">720p</button>
                                                <button class="flex-1 py-1.5 text-xs font-bold rounded-lg border border-zinc-900 bg-zinc-900 text-white custom-res-btn transition-colors" @click="setCustomRes($$event.currentTarget)">1080p</button>
                                            </div>
                                        </div>
                                        
                                        <!-- 画幅比例设置 -->
                                        <div>
                                            <span class="text-sm font-bold text-zinc-900 mb-2 block" data-i18n="aspect_ratio">画幅比例</span>
                                            <div class="grid grid-cols-3 gap-2">
                                                <button class="py-1.5 text-xs font-bold rounded-lg border border-zinc-900 bg-zinc-900 text-white custom-ratio-btn transition-colors" @click="setCustomRatio($$event.currentTarget)">16:9</button>
                                                <button class="py-1.5 text-xs font-bold rounded-lg border border-zinc-200 bg-white text-zinc-500 hover:text-zinc-900 custom-ratio-btn transition-colors" @click="setCustomRatio($$event.currentTarget)">9:16</button>
                                                <button class="py-1.5 text-xs font-bold rounded-lg border border-zinc-200 bg-white text-zinc-500 hover:text-zinc-900 custom-ratio-btn transition-colors" @click="setCustomRatio($$event.currentTarget)">1:1</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- 右侧生成按钮和字数统计 -->
                            <div class="flex items-center gap-3">
                                <span id="home-char-count" class="text-xs text-[#9c9c98] font-mono">0/1000</span>
                                <button @click="handleHomeGenerate()" class="w-10 h-10 bg-[#171717] hover:bg-black text-white rounded-full flex items-center justify-center transition-transform transform active:scale-95 shadow-none">
                                    <i data-lucide="arrow-up" class="w-5 h-5"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 审美库区域 (动态交叉瀑布流) -->
                <div class="mb-12">
                    <div class="flex items-center justify-between mb-4 gap-6 px-2 md:px-3">
                        <div class="flex items-center gap-6">
                            <h3 class="home-discover-title text-2xl font-bold text-zinc-900 tracking-tight whitespace-nowrap" data-i18n="discover">发现</h3>
                            <div class="relative w-48">
                                <input type="text" id="gallery-search" data-placeholder="gallery_search" placeholder="搜索视频..." class="w-full px-4 py-2.5 pl-10 bg-white border border-zinc-200 rounded-xl text-sm font-medium text-zinc-900 placeholder:text-zinc-400 hover:border-zinc-300 focus:outline-none focus:border-zinc-300 focus:shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition-all" />
                                <i data-lucide="search" class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none"></i>
                            </div>
                        </div>
                        <div class="flex gap-4 text-sm font-medium" id="home-filters">
                            <span class="filter-item text-zinc-900 border-b border-zinc-900 pb-0.5 cursor-pointer transition-colors" @click="setHomeFilter($$event.currentTarget)" data-i18n="official_picks">官方推荐</span>
                            <span class="filter-item text-zinc-400 hover:text-zinc-900 cursor-pointer transition-colors" @click="setHomeFilter($$event.currentTarget)" data-i18n="storybook_picks">精选绘本</span>
                            <span class="filter-item text-zinc-400 hover:text-zinc-900 cursor-pointer transition-colors" @click="setHomeFilter($$event.currentTarget)" data-i18n="artist_picks">精选艺术家</span>
                        </div>
                    </div>

                    <div class="mx-4 md:mx-6 lg:mx-8 rounded-t-[28px] overflow-hidden bg-[#fcfcfb]" id="discover-gallery-container">
                        <div id="home-gallery" class="discover-grid grid grid-flow-dense grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7 auto-rows-[56px] md:auto-rows-[68px] lg:auto-rows-[76px] gap-0">
                            <!-- 动态注入的内容见 JS 部分的 renderHomeGallery -->
                        </div>
                    </div>
                </div>

                <!-- Footer -->
                <div class="mt-16 pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-400 font-medium">
                    <div class="footer-copyright flex items-center gap-2">
                        <i data-lucide="bot" class="w-4 h-4"></i>
                        © 2026 北京织知玄华智能科技有限公司. 保留所有权利.
                    </div>
                    <div class="flex items-center gap-6 mt-4 md:mt-0">
                        <div class="flex items-center gap-4 mr-2 border-r border-zinc-300 pr-6">
                            <a href="javascript:void(0)" class="hover:opacity-80 transition-opacity" title="微信">
                                <svg viewBox="0 0 24 24" class="w-4 h-4" fill="#07C160"><path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-7.062-6.122zM14.383 13.6c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.842 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982z"/></svg>
                            </a>
                            <a href="javascript:void(0)" class="hover:opacity-80 transition-opacity" title="抖音">
                                <svg viewBox="0 0 24 24" class="w-4 h-4" fill="#000"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                            </a>
                            <a href="javascript:void(0)" class="hover:opacity-80 transition-opacity" title="小红书">
                                <svg viewBox="0 0 1024 1024" class="w-4 h-4"><path d="M726.51776 457.45152c-6.70208-0.0768-13.39392 0-20.00384-0.0768-2.37056 0-3.0464 1.05984-3.0464 3.23072 0.0768 5.10976 0.0768 10.13248 0.0768 15.232v0.01024c0.07168 4.87936 0 9.7536 0.07168 14.56128 0 3.90656 0.68096 4.66944 4.45952 4.66944 7.1424 0.0768 14.27456 0 21.41696 0.0768 2.67776 0 3.72736-1.28 3.65056-3.75808-0.08704-9.1648-0.08704-18.31936-0.15872-27.48416a6.7584 6.7584 0 0 0-6.46656-6.46144z" fill="#FF2E4D"></path><path d="M849.92 51.2h-675.84c-67.8656 0-122.88 55.0144-122.88 122.88v675.84c0 67.8656 55.0144 122.88 122.88 122.88h675.84c67.8656 0 122.88-55.0144 122.88-122.88V174.08c0-67.8656-55.0144-122.88-122.88-122.88zM250.78784 505.73312c-0.73728 10.59328-1.41312 21.25312-2.60608 31.8464-2.08896 18.39104-6.24128 36.26496-14.6432 52.864-2.16064 4.12672-5.13536 7.79776-8.18176 12.45696-1.85344-3.90656-3.41504-6.97856-4.82816-10.13248a3203.59424 3203.59424 0 0 1-14.79168-33.56672c-0.52736-1.2032-0.896-2.92352-0.36864-3.97824 3.19488-6.83008 3.41504-14.12096 3.85536-21.40672 0.60416-9.15968 1.35168-18.24256 2.01728-27.39712 0.51712-7.00416 0.80896-13.9776 1.39776-20.96128 0.67584-8.10496 1.49504-16.21504 2.16064-24.24832 0.14848-1.96608 1.04448-2.56 2.82624-2.56 11.0848 0 22.07744 0 33.16224-0.07168 2.37056 0 3.0464 0.98304 2.89792 3.23072-0.96768 14.63296-1.86368 29.28128-2.89792 43.92448z m71.29088 87.32672c-0.73728 9.46176-5.13536 17.49504-12.5696 23.5008-5.43232 4.352-11.74528 6.15936-18.6624 6.08256-5.87264 0-11.66848-0.0768-17.54112 0-2.00192 0-3.27168-0.60416-4.09088-2.55488-3.41504-7.6544-6.90688-15.32416-10.32192-22.97344-0.52736-1.13152-0.67584-2.33472-1.13152-3.456-1.63328-4.12672-1.5616-4.28544 2.97472-4.36224h13.90592c5.94944 0 8.47872-2.46784 8.5504-8.56576 0.07168-4.57216 0.07168-9.14944 0.07168-13.73696V494.2336c0.14848 0.15872 0.22016 0.15872 0.29696 0.15872V408.63744c0-4.28544 0.14848-4.43392 4.38784-4.43392h29.21472c5.13536 0 5.20704 0.14848 5.20704 5.40672 0 27.1872 0 54.36416 0.0768 81.47968 0.0768 23.87456 0.29696 47.75936 0.29696 71.6288 0 10.14272 0.14848 20.26496-0.6656 30.34112z m75.58656-28.90752c-4.98688 11.56096-10.19904 22.97344-15.31904 34.4576-0.45568 1.13664-1.19296 2.25792-2.3808 4.42368v0.01024c-2.97472-4.5056-6.0928-8.18176-8.11008-12.39552-2.82624-6.13888-4.5312-12.83584-7.35744-18.9952-3.0464-6.6816-4.15744-13.88032-5.57568-20.94592-1.1776-6.02112-1.40288-12.25216-1.8432-18.3296-1.2032-15.39584-2.23744-30.78656-3.44064-46.09536a2449.95584 2449.95584 0 0 0-2.0736-25.1648c-0.14848-1.50016 0.2304-2.176 1.94048-2.176 11.52512 0 22.97344-0.14848 34.49856-0.22016 2.1504 0 3.0464 0.96768 3.11808 2.9952 0.29696 4.65408 0.51712 9.31328 0.88576 13.97248 0.29696 3.83488 0.73728 7.6544 1.04448 11.41248 0.51712 5.40672 1.04448 10.81344 1.41312 16.14336 0.51712 6.90688 0.51712 13.81888 1.4848 20.63872 1.34144 10.4448 0.29696 21.10464 3.93216 31.32928 0.89088 2.40128-0.96768 6.08768-2.21696 8.93952z m84.28032 22.016c-2.89792 6.6816-6.02112 13.21472-8.99072 19.82464-1.64352 3.74784-3.19488 7.49568-4.76672 11.25376-1.85344 4.51072-3.11808 5.40672-7.87456 5.40672h-22.2976c-7.52128 0-15.0272 0.23552-22.53312-0.0768-3.56352-0.14336-7.0656-1.27488-10.62912-2.02752-1.792-0.36864-2.16064-1.42336-1.41312-3.14368a3709.71648 3709.71648 0 0 0 13.45024-29.21472c1.04448-2.24768 1.85344-4.65408 3.0464-6.90688 0.29696-0.6144 1.41312-1.28 2.00192-1.13152 12.42112 3.15392 25.13408 2.77504 37.76512 2.63168a874.6496 874.6496 0 0 1 20.07552 0c3.19488 0.00512 3.50208 0.45568 2.16576 3.38432z m3.84-21.86752a4.48512 4.48512 0 0 1-2.74944 1.4336c-13.89568 0.0768-27.8784 0.14848-41.77408-0.0768-4.23936-0.08704-8.5504-1.05472-11.74528-4.28544-3.3536-3.3792-4.98688-7.36256-3.28192-11.93984a897.52576 897.52576 0 0 1 9.58464-24.10496c3.88096-9.15456 7.81312-18.31936 12.05248-28.2368-2.30912-0.14848-3.712-0.29696-5.04832-0.29696-4.09088-0.07168-8.18176 0.29696-12.27264-0.2304-4.45952-0.51712-8.99072-1.04448-12.48256-4.79232-3.42528-3.6864-3.94752-8.04352-2.60608-12.32384 2.1504-6.83008 4.97664-13.44 7.80288-20.04992 2.67776-6.15424 5.72416-12.16 8.47872-18.24256 2.97472-6.53824 5.86752-13.07136 8.77056-19.6096a1361.99168 1361.99168 0 0 0 7.6544-17.33632c0.73728-1.80736 1.8688-2.47808 3.87072-2.47808 10.93632 0.07168 21.92896 0 32.86528 0 3.6352 0 3.712 0.36864 2.29888 3.6864-6.31296 14.63296-12.71808 29.20448-18.95936 43.84768a11.52 11.52 0 0 0-1.19296 4.87936c0.22016 3.90656 1.04448 4.5056 5.06368 4.5056 8.17152 0.0768 16.35328 0 24.448 0 1.64864 0 3.3536 0.22016 4.98688 0.29696 2.30912 0.0768 2.60608 1.05984 1.63328 3.072a2455.21408 2455.21408 0 0 0-13.3888 29.21472c-3.03616 6.91712-5.93408 13.89568-8.9088 20.8128a1530.1632 1530.1632 0 0 1-6.1696 13.80864c-1.94048 4.20352-0.60416 6.31296 4.15232 6.38976 6.02112 0 12.04224 0.0768 18.05824 0 2.08896 0 3.13344 0.60416 2.08896 2.85184-3.6352 8.25344-7.21408 16.58368-10.84928 24.85248-0.67072 1.50016-1.408 3.072-2.3808 4.352z m134.81472 58.73664h-125.3376c-1.72032-0.22016-3.48672-0.22016-5.94432-0.22016v-0.01536c0.88064-2.61632 1.41312-4.41856 2.1504-6.0672 4.69504-10.29632 9.4464-20.5056 14.0544-30.79168 1.04448-2.33472 2.52928-2.92352 4.75648-2.92352h28.6976c4.54656 0 4.75648-0.2304 4.75648-4.74112V461.66016c0-3.97824-0.0768-4.05504-4.08064-4.05504-6.10304 0-12.26752-0.0768-18.36544 0-2.30912 0-3.27168-0.51712-3.27168-3.1488 0.14848-10.97216 0.0768-21.92896 0.0768-32.88576 0-3.90656 0.0768-3.90656 3.86048-3.90656h73.00096c4.23936 0 8.5504 0.0768 12.78976 0 2.01728 0 2.82624 0.82432 2.74944 2.85184-0.0768 11.41248-0.0768 22.82496-0.0768 34.31424 0 2.02752-0.73728 2.77504-2.82624 2.77504-6.6048-0.0768-13.14304 0.07168-19.77856 0.07168-2.29376 0-3.33824 1.05984-3.33824 3.46624 0.0768 18.39104 0.14336 36.7104 0.14336 55.11168 0 20.87424 0 41.74848 0.0768 62.6944 0 3.75808 0.36864 4.21376 4.17792 4.21376h31.4368c3.41504 0 3.87072 0.36864 3.93728 3.81952 0.08704 10.97216 0 21.92896 0.08704 32.89088-0.01024 2.8672-1.57184 3.16416-3.73248 3.16416z m198.69696-34.92864c-0.14848 16.37376-11.008 29.21472-26.38848 32.89088-4.31616 1.05472-8.78592 1.35168-13.24544 1.5104-6.83008 0.22016-13.7472 0.07168-20.58752 0.07168-4.23936 0-5.42208-0.83456-6.9888-4.66432-3.33824-7.95136-6.83008-15.90784-10.26048-23.87456l-0.66048-1.57184c-1.19296-3.072-0.81408-3.61472 2.45248-3.61472 9.43616-0.07168 18.95424 0.15872 28.3904-0.29184 5.65248-0.29696 8.03328-2.85696 8.18688-8.64256 0.22016-11.04384-0.29696-22.07744-0.14848-33.11104 0.0768-5.48864-6.84032-11.42272-11.74528-11.71968a32.8448 32.8448 0 0 0-2.74944-0.14336c-18.73408 0-37.54496 0-56.2688 0.07168-5.27872 0-5.65248 0.53248-5.65248 5.8624l0.20992 77.55776c0 4.14208-0.0768 4.21376-4.23936 4.21376h-31.22176c-4.01408 0-4.3008-0.3072-4.3008-4.28544v-39.94112c0.06144 0.14336 0.13312 0.14336 0.20992 0.14336v-40.99584c0-2.78016-1.85344-2.93888-3.78368-2.93888-10.19392 0.08704-20.44416 0.31232-30.62272 0.31232-6.92224 0-6.17984 0.8192-6.25664-6.38976-0.0768-9.90208 0-19.90144 0-29.80352 0-3.59936 0.36864-4.05504 3.94752-4.13184 10.7008-0.07168 21.33504 0 32.04096-0.07168 4.09088 0 4.31104-0.15872 4.38272-4.21376 0.0768-9.90208-0.0768-19.8144 0-29.73184 0-2.4832-1.04448-3.23072-3.41504-3.23072-6.84544 0.0768-13.76256-0.07168-20.60288 0-2.1504 0-2.89792-0.74752-2.89792-2.92352 0.09216-11.26912 0.09216-22.46144-0.06144-33.72544 0-2.70336 1.03424-3.29216 3.41504-3.29216 6.31296 0.0768 12.6464 0 18.95936 0 4.23424 0 4.45952-0.3072 4.5312-4.74112 0-2.61632 0.14848-5.24288 0-7.87456-0.07168-2.4832 1.04448-3.15904 3.34336-3.15904 9.07776 0.0768 18.22208 0.0768 27.28448 0.0768h4.97664c3.94752 0 4.0192 0 4.1728 4.05504 0.06656 2.4064-0.1536 4.87936-0.08704 7.28576 0.0768 3.3792 0.9728 4.2752 4.31616 4.36224 5.65248 0.0768 11.30496 0.0768 17.024 0.0768 14.6432 0.07168 27.3664 5.09952 37.0176 16.29184 5.35552 6.22592 8.69888 13.81888 9.216 22.14912 0.52736 8.47872 0.15872 17.03936 0.3072 25.52832 0 3.15904 0.22016 6.38976 0.36864 9.53344 0.14336 3.15904 0.896 3.97824 4.09088 3.90656a48.56832 48.56832 0 0 1 19.03104 3.15904c13.00992 5.03808 21.03296 14.18752 23.63904 28.01152a44.4416 44.4416 0 0 1 0.73728 8.33024c0.08192 17.88928 0.06656 35.78368-0.06656 53.6832zM810.14272 453.632c-5.94432 3.90656-12.1856 3.75808-19.4048 3.6864-2.23744 0-5.20192 0.07168-8.09984-0.0768-0.7424-0.07168-2.00704-0.98304-2.08896-1.5872-0.6656-8.84736-1.77152-17.792 1.35168-26.35264 2.75456-7.5776 9.58464-12.01664 17.61792-12.16a19.99872 19.99872 0 0 1 19.32288 14.336c2.30912 8.2688-1.55648 17.42336-8.69888 22.15424z" fill="#FF2E4D"></path></svg>
                            </a>
                        </div>
                        <span class="footer-policy-link hover:text-zinc-900 cursor-pointer" data-i18n="privacy">隐私政策</span>
                        <span class="footer-policy-link hover:text-zinc-900 cursor-pointer" data-i18n="terms">服务条款</span>
                        <span class="footer-policy-link hover:text-zinc-900 cursor-pointer" data-i18n="contact">联系我们</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- ==================== 2. 创作视图 (Create View) ==================== -->
        <div id="view-create" class="view-container hidden flex-col md:flex-row w-full h-full bg-[#F7F7F8] overflow-y-auto md:overflow-hidden">
            <!-- 左侧主工作区 -->
            <div id="create-left-panel" class="w-full md:w-[40%] min-w-0 md:flex-[0_0_40%] flex-shrink-0 h-auto md:h-full flex flex-col bg-white z-20 relative overflow-visible md:overflow-hidden">
                <!-- 面板头部 -->
                <div class="px-8 py-5 border-b border-zinc-100 flex items-center justify-between relative shrink-0" id="modelDropdownContainer">
                    <div class="flex items-center gap-2">
                        <!-- 模型选择菜单 -->
                        <div class="relative">
                            <button @click="toggleModelDropdown()" class="create-serif-ui create-control-button flex items-center gap-2 text-zinc-900 hover:bg-zinc-50 transition-colors bg-white px-4 py-2 rounded-xl border border-zinc-200 font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-1">
                                <img id="current-model-icon" src="/artist-logo.svg" alt="艺术家" class="mode-logo-icon mode-logo-icon--muted" />
                                <span class="text-sm" id="current-model-text">艺术家</span>
                                <i data-lucide="chevron-down" id="model-dropdown-icon" class="w-4 h-4 text-zinc-400 transition-transform"></i>
                            </button>

                            <!-- 模型选择下拉菜单 -->
                                <div id="modelDropdown" class="hidden absolute top-full mt-2 left-0 w-56 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-zinc-200 p-1.5 z-50 animate-in-slide-up">
                                <div @click="setModel('艺术家')" id="model-item-1" class="create-serif-ui px-3 py-2 rounded-lg text-sm font-medium cursor-pointer flex justify-between items-center bg-zinc-100 text-zinc-900 transition-colors">
                                    <div class="flex items-center gap-2"><img src="/artist-logo.svg" alt="艺术家" class="mode-logo-icon" /><span>艺术家</span></div>
                                    <i data-lucide="check-circle-2" class="w-4 h-4 text-zinc-900 check-icon"></i>
                                </div>
                                <div @click="setModel('绘本')" id="model-item-2" class="create-serif-ui px-3 py-2 rounded-lg text-sm font-medium cursor-pointer flex justify-between items-center text-zinc-600 hover:bg-zinc-50 transition-colors">
                                    <div class="flex items-center gap-2"><img src="/storybook-logo.svg" alt="绘本" class="mode-logo-icon" /><span>绘本</span></div>
                                    <i data-lucide="check-circle-2" class="hidden w-4 h-4 text-zinc-900 check-icon"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 积分中心入口 -->
                    <button @click="openModal('points-modal')" class="create-serif-ui flex items-center gap-1.5 text-zinc-600 hover:text-zinc-900 transition-colors font-bold text-sm">
                        <i data-lucide="database" class="w-4 h-4 text-amber-500"></i>
                        <span data-i18n="points_center">积分中心</span>
                    </button>
                </div>

                <div class="flex-1 overflow-visible md:overflow-y-auto px-6 md:px-8 py-5 no-scrollbar flex flex-col items-center">
                    <div class="w-full max-w-3xl flex flex-col gap-6">

                        <!-- 1. 画面描述 -->
                        <div>
                            <div class="create-section-label text-sm font-bold text-zinc-900 mb-3 flex justify-between items-center">
                                <div class="flex items-center gap-2">
                                    <span data-i18n="create_scene_description">画面描述</span>
                                    <span id="create-char-count" class="text-xs text-zinc-400 font-mono">0/1000</span>
                                </div>
                                <button class="create-serif-ui text-zinc-500 hover:text-zinc-900 text-xs flex items-center gap-1 font-medium bg-zinc-100 px-2 py-1 rounded-md transition-colors">
                                    <i data-lucide="sparkles" class="w-3 h-3"></i> <span data-i18n="prompt_polish">提示词润色</span>
                                </button>
                            </div>
                            <div class="relative">
                                <textarea id="create-prompt-textarea" @input="handleCreateInput($event)" maxlength="1000" class="create-prompt-textarea w-full h-48 bg-zinc-50 border border-zinc-200 rounded-2xl p-4 pb-10 text-sm text-zinc-900 placeholder:text-zinc-400 resize-none focus:outline-none focus:border-zinc-400 focus:bg-white transition-all focus:shadow-sm leading-relaxed" data-placeholder="create_prompt_placeholder" placeholder="请详细描述视频画面。例如：电影级质感，航拍视角，一辆复古跑车行驶在蜿蜒的海岸线公路上..."></textarea>
                                <button @click="document.getElementById('create-prompt-textarea').value=''; updateCreateCharCount();" class="absolute bottom-3 right-3 p-1.5 text-zinc-400 hover:text-red-500 hover:bg-zinc-200/50 rounded-lg transition-colors cursor-pointer" data-title="clear_content" title="清空内容">
                                    <i data-lucide="trash-2" class="w-4 h-4"></i>
                                </button>
                            </div>
                        </div>

                        <!-- 2. 参数控制 -->
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <!-- 画幅比例切换 -->
                            <div>
                                <span class="create-section-label text-sm font-bold text-zinc-900 mb-3 block" data-i18n="aspect_ratio">画幅比例</span>
                                <div class="flex bg-zinc-100 p-1 rounded-xl">
                                    <button id="ratio-btn-1" @click="setRatio('16:9')" class="create-serif-ui flex-1 py-2 text-xs font-bold rounded-lg transition-all bg-white text-zinc-900 shadow-sm border border-zinc-200/50">16:9</button>
                                    <button id="ratio-btn-2" @click="setRatio('9:16')" class="create-serif-ui flex-1 py-2 text-xs font-bold rounded-lg transition-all text-zinc-500 hover:text-zinc-900 hover:bg-white/50 border border-transparent">9:16</button>
                                    <button id="ratio-btn-3" @click="setRatio('1:1')" class="create-serif-ui flex-1 py-2 text-xs font-bold rounded-lg transition-all text-zinc-500 hover:text-zinc-900 hover:bg-white/50 border border-transparent">1:1</button>
                                </div>
                            </div>

                            <!-- 分辨率切换 -->
                            <div>
                                <span class="create-section-label text-sm font-bold text-zinc-900 mb-3 block" data-i18n="resolution">分辨率</span>
                                <div class="flex bg-zinc-100 p-1 rounded-xl">
                                    <button id="res-btn-1" @click="setResolution('720p')" class="create-serif-ui flex-1 py-2 text-xs font-bold rounded-lg transition-all text-zinc-500 hover:text-zinc-900 hover:bg-white/50 border border-transparent">720p</button>
                                    <button id="res-btn-2" @click="setResolution('1080p')" class="create-serif-ui flex-1 py-2 text-xs font-bold rounded-lg transition-all bg-white text-zinc-900 shadow-sm border border-zinc-200/50">1080p</button>
                                </div>
                            </div>
                        </div>

                        <!-- 3. 生成时长 -->
                        <div class="bg-white border border-zinc-200 rounded-2xl p-5 shadow-sm">
                            <div class="flex items-center justify-between mb-4">
                                <span class="create-section-label text-sm font-bold text-zinc-900" data-i18n="duration">生成时长</span>
                                <span class="text-xs font-mono text-amber-500 font-bold" data-i18n-consume-points><span id="duration-cost">10</span></span>
                            </div>
                            <div class="mb-3">
                                <div class="flex justify-between items-center mb-2">
                                    <span class="text-xs font-bold text-zinc-900"></span>
                                    <div class="flex items-center gap-1">
                                        <!-- 分钟输入 -->
                                        <input type="number" id="duration-min" min="0" max="3" value="0" 
                                               class="create-serif-ui w-12 px-1 py-1 text-sm font-bold text-zinc-900 bg-zinc-50 border border-zinc-200 rounded-lg text-center focus:outline-none focus:border-zinc-400"
                                               @input="updateDurationFromTime()">
                                        <span class="text-sm text-zinc-500">分</span>
                                        <!-- 秒输入 -->
                                        <input type="number" id="duration-sec" min="0" max="59" value="5" 
                                               class="create-serif-ui w-12 px-1 py-1 text-sm font-bold text-zinc-900 bg-zinc-50 border border-zinc-200 rounded-lg text-center focus:outline-none focus:border-zinc-400"
                                               @input="updateDurationFromTime()">
                                        <span class="text-sm text-zinc-500">秒</span>
                                    </div>
                                    <span class="text-xs font-bold text-zinc-900"></span>
                                </div>
                                <input type="range" id="duration-slider" min="1" max="36" value="1" class="w-full accent-zinc-900" @input="updateDurationFromSlider($$event.currentTarget.value)">
                                <div class="flex justify-between text-[10px] text-zinc-400 mt-1">
                                    <span>5秒</span>
                                    <span>3分</span>
                                </div>
                            </div>
                            <div id="multi-agent-warning" class="hidden text-xs text-orange-600 bg-orange-50 p-2.5 rounded-lg border border-orange-200 flex items-start gap-2">
                                <i data-lucide="alert-circle" class="w-4 h-4 flex-shrink-0 mt-0.5"></i>
                                <span>超过10秒后生成的画面为多Agent并行结果</span>
                            </div>
                        </div>

                        <!-- 4. 视觉参考 -->
                        <div>
                            <div class="create-section-label text-sm font-bold text-zinc-900 mb-3 flex items-center justify-between">
                                <span data-i18n="visual_reference">视觉参考</span>
                                <span class="create-serif-ui text-xs font-normal text-zinc-400 bg-zinc-100 px-2 py-0.5 rounded-md" data-i18n="optional">选填</span>
                            </div>
                            <div id="create-drop-zone" class="border border-dashed border-zinc-300 rounded-2xl bg-zinc-50 hover:bg-zinc-100 hover:border-zinc-400 transition-all cursor-pointer flex items-center justify-center py-5 gap-4 group relative overflow-hidden"
                                 @dragover="handleCreateDragOver($event)" @dragleave="handleCreateDragLeave($event)" @drop="handleCreateDrop($event)">
                                <!-- 拖拽悬停提示 -->
                                <div id="create-drag-overlay" class="hidden absolute inset-0 bg-zinc-900/5 backdrop-blur-sm z-10 flex items-center justify-center">
                                    <div class="text-center">
                                        <i data-lucide="image-plus" class="w-10 h-10 text-zinc-500 mx-auto mb-1"></i>
                                        <p class="create-serif-ui text-sm font-medium text-zinc-600">松开以上传图片</p>
                                    </div>
                                </div>
                                <!-- 图片预览区 -->
                                <div id="create-image-preview-container" class="hidden absolute inset-0 bg-zinc-100 z-5">
                                    <img id="create-dropped-image" src="" class="w-full h-full object-contain p-2" />
                                    <button @click="removeCreateImage()" class="absolute top-2 right-2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-opacity backdrop-blur-sm">
                                        <i data-lucide="x" class="w-4 h-4"></i>
                                    </button>
                                </div>
                                <!-- 默认提示 -->
                                <div id="create-drop-placeholder" class="flex items-center justify-center gap-4">
                                    <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-zinc-400 group-hover:text-zinc-900 group-hover:scale-105 transition-all">
                                        <i data-lucide="image" class="w-5 h-5"></i>
                                    </div>
                                    <div class="flex flex-col text-left">
                                        <p class="create-serif-ui text-sm text-zinc-900 font-medium" data-i18n="upload_first_last_frame">点击或拖拽上传首尾帧</p>
                                        <p class="create-serif-ui text-xs text-zinc-400 mt-0.5" data-i18n="support_jpg_png">支持 JPG, PNG</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <!-- 底部生成按钮 -->
                <div class="p-6 border-t border-zinc-100 bg-white flex justify-center shrink-0 shadow-[0_-10px_30px_rgba(0,0,0,0.02)] z-30">
                    <div class="w-full max-w-3xl">
                        <button @click="handleCreateGenerate()" class="create-generate-button w-full py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-bold rounded-2xl flex items-center justify-center gap-2 transition-transform transform active:scale-95 shadow-[0_8px_20px_rgba(0,0,0,0.15)] text-base">
                            <i data-lucide="wand-2" class="w-5 h-5"></i>
                            <span data-i18n="start_generate">开始生成</span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- 柔和分割线 (手写体装饰 Great Vibes) -->
            <div class="separator-divider style-script hidden md:block h-full" style="flex-shrink: 0;"></div>

            <!-- 右侧竖向最近生成任务 -->
            <div class="flex-1 min-w-0 bg-white h-auto md:h-full flex flex-col shadow-[-10px_0_30px_rgba(0,0,0,0.02)] z-10 overflow-visible md:overflow-hidden border-t md:border-t-0 border-l-0 md:border-l border-zinc-200">
                <div class="p-6 border-b border-zinc-100 shrink-0">
                    <div class="create-panel-title text-sm font-bold text-zinc-900 flex items-center gap-2" data-i18n="recent_tasks">最近生成任务</div>
                </div>
                <div class="flex-1 overflow-visible md:overflow-y-auto p-6 flex flex-col gap-6 no-scrollbar">

                    <!-- Task 0: Multi-Agent Generating (New) -->
                    <div class="flex flex-col gap-2 border-b border-zinc-100 pb-5">
                        <div class="flex flex-col">
                            <h4 class="text-sm font-bold text-zinc-900 truncate">深空探索：多维宇宙</h4>
                            <div class="flex items-center gap-2 mt-0.5">
                                <span class="text-[10px] text-zinc-400 font-mono">2026-03-15 15:42</span>
                            </div>
                            <p class="text-xs text-zinc-500 mt-1.5 line-clamp-2 leading-relaxed">镜头穿梭于多个维度之间，超现实主义风格，巨大的星云与微观量子结构交织，需要极高算力渲染多重光影细节...</p>
                        </div>
                        
                        <!-- 多 Agent 可视化面板 (等同于其他卡片的 aspect-video 大小) -->
                        <div class="w-full aspect-video rounded-xl relative overflow-hidden border-2 cursor-pointer group transition-all border-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.1)] bg-zinc-50 flex flex-col p-3">
                            <div class="flex items-center gap-2 mb-auto">
                                <span class="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-md text-[10px] font-bold flex items-center gap-1.5 shadow-sm border border-indigo-200"><i data-lucide="bot" class="w-3 h-3"></i>多 Agent 协同生成中</span>
                            </div>
                            
                            <div class="flex flex-col gap-2">
                                <!-- 总进度条 -->
                                <div class="flex items-center justify-between text-[10px] font-bold text-indigo-700">
                                    <span>节点计算总进度</span>
                                    <span class="font-mono">68%</span>
                                </div>
                                <div class="w-full h-1.5 bg-zinc-200 rounded-full overflow-hidden">
                                    <div class="h-full bg-indigo-500 rounded-full w-[68%] transition-all duration-1000 relative">
                                        <div class="absolute inset-0 bg-white/30 w-full animate-[pulse_2s_ease-in-out_infinite]"></div>
                                    </div>
                                </div>
                                
                                <!-- Agent 工作矩阵 -->
                                <div class="grid grid-cols-2 gap-1.5 mt-1">
                                    <!-- Agent 1 -->
                                    <div class="bg-white/80 border border-zinc-200 p-1.5 rounded flex items-center gap-2 backdrop-blur-sm">
                                        <div class="w-4 h-4 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                                            <i data-lucide="check" class="w-2.5 h-2.5 text-emerald-500"></i>
                                        </div>
                                        <div class="flex flex-col flex-1 min-w-0">
                                            <span class="text-[8px] font-bold text-zinc-700 truncate leading-tight">构图分配</span>
                                            <span class="text-[7px] text-emerald-500 leading-tight">已完成</span>
                                        </div>
                                    </div>
                                    <!-- Agent 2 -->
                                    <div class="bg-white/80 border border-blue-200 p-1.5 rounded flex items-center gap-2 backdrop-blur-sm shadow-[0_0_8px_rgba(59,130,246,0.15)]">
                                        <div class="w-4 h-4 rounded-full bg-blue-50 flex items-center justify-center shrink-0 animate-spin-slow">
                                            <i data-lucide="sun" class="w-2.5 h-2.5 text-blue-500"></i>
                                        </div>
                                        <div class="flex flex-col flex-1 min-w-0">
                                            <span class="text-[8px] font-bold text-zinc-700 truncate leading-tight">光影解算</span>
                                            <span class="text-[7px] text-blue-500 leading-tight">85%</span>
                                        </div>
                                    </div>
                                    <!-- Agent 3 -->
                                    <div class="bg-white/80 border border-amber-200 p-1.5 rounded flex items-center gap-2 backdrop-blur-sm shadow-[0_0_8px_rgba(245,158,11,0.15)]">
                                        <div class="w-4 h-4 rounded-full bg-amber-50 flex items-center justify-center shrink-0 animate-pulse">
                                            <i data-lucide="move-3d" class="w-2.5 h-2.5 text-amber-500"></i>
                                        </div>
                                        <div class="flex flex-col flex-1 min-w-0">
                                            <span class="text-[8px] font-bold text-zinc-700 truncate leading-tight">物理引擎</span>
                                            <span class="text-[7px] text-amber-500 leading-tight">42%</span>
                                        </div>
                                    </div>
                                    <!-- Agent 4 -->
                                    <div class="bg-white/50 border border-zinc-200 p-1.5 rounded flex items-center gap-2 backdrop-blur-sm">
                                        <div class="w-4 h-4 rounded-full bg-zinc-100 flex items-center justify-center shrink-0">
                                            <i data-lucide="clock" class="w-2.5 h-2.5 text-zinc-400"></i>
                                        </div>
                                        <div class="flex flex-col flex-1 min-w-0">
                                            <span class="text-[8px] font-bold text-zinc-500 truncate leading-tight">视频合成</span>
                                            <span class="text-[7px] text-zinc-400 leading-tight">等待中</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Task 1: Generating -->
                    <div class="flex flex-col gap-2 border-b border-zinc-100 pb-5">
                        <div class="flex flex-col">
                            <h4 class="text-sm font-bold text-zinc-900 truncate">霓虹街头的机械战警</h4>
                            <div class="flex items-center gap-2 mt-0.5">
                                <span class="text-[10px] text-zinc-400 font-mono">2026-03-12 14:35</span>
                            </div>
                            <p class="text-xs text-zinc-500 mt-1.5 line-clamp-2 leading-relaxed">镜头从下往上推进，一个穿着高科技机甲的战士站在雨中的霓虹街头，背景是飞驰的悬浮车，具有极高的电影质感...</p>
                        </div>
                        <div class="w-full aspect-video rounded-xl relative overflow-hidden border-2 cursor-pointer group transition-all border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                            <div class="w-full h-full bg-zinc-50 flex flex-col items-center justify-center gap-2">
                                <div class="w-5 h-5 border-2 border-emerald-200 border-t-emerald-500 rounded-full animate-spin"></div>
                                <span class="text-[10px] font-medium text-emerald-600">生成中 45%</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Task 2: Completed -->
                    <div class="flex flex-col gap-2 border-b border-zinc-100 pb-5">
                        <div class="flex flex-col">
                            <h4 class="text-sm font-bold text-zinc-900 truncate">落日余晖下的公路</h4>
                            <div class="flex items-center gap-2 mt-0.5">
                                <span class="text-[10px] text-zinc-400 font-mono">2026-03-12 13:20</span>
                            </div>
                            <p class="text-xs text-zinc-500 mt-1.5 line-clamp-2 leading-relaxed">电影级质感，航拍视角，一辆复古跑车行驶在蜿蜒的海岸线公路上，夕阳余晖洒在海面上波光粼粼...</p>
                        </div>
                        <div class="w-full aspect-video rounded-xl relative overflow-hidden border border-zinc-200 cursor-pointer group transition-all hover:border-zinc-300">
                            <img src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300" alt="thumb" class="w-full h-full object-cover" />
                            <div class="absolute bottom-1.5 left-1.5 bg-black/50 backdrop-blur-md text-[10px] font-medium px-1.5 py-0.5 rounded text-white">5s</div>
                            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                <i data-lucide="play" class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md fill-current"></i>
                            </div>
                        </div>
                    </div>

                    <!-- Task 3: Completed -->
                    <div class="flex flex-col gap-2">
                        <div class="flex flex-col">
                            <h4 class="text-sm font-bold text-zinc-900 truncate">微观宇宙法则</h4>
                            <div class="flex items-center gap-2 mt-0.5">
                                <span class="text-[10px] text-zinc-400 font-mono">2026-03-11 09:15</span>
                            </div>
                            <p class="text-xs text-zinc-500 mt-1.5 line-clamp-2 leading-relaxed">微观视角，细胞级别的宇宙爆炸，绚丽的色彩交织在一起，物理引擎级的光影渲染效果，极具视觉冲击力...</p>
                        </div>
                        <div class="w-full aspect-video rounded-xl relative overflow-hidden border border-zinc-200 cursor-pointer group transition-all hover:border-zinc-300">
                            <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300" alt="thumb" class="w-full h-full object-cover" />
                            <div class="absolute bottom-1.5 left-1.5 bg-black/50 backdrop-blur-md text-[10px] font-medium px-1.5 py-0.5 rounded text-white">10s</div>
                            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                <i data-lucide="play" class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md fill-current"></i>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <!-- ==================== 3. 资产视图 (Assets View) ==================== -->
        <div id="view-assets" class="view-container hidden flex-1 overflow-y-auto w-full h-full relative no-scrollbar bg-[#F7F7F8]">
            <div class="max-w-[1200px] mx-auto px-4 md:px-8 py-6 md:py-12 relative z-10">
                <div class="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 md:gap-0 mb-8 md:mb-12">
                    <div>
                        <h1 class="text-[40px] font-extrabold tracking-tight text-zinc-900" data-i18n="assets_management">资产管理</h1>
                        <p class="text-zinc-400 text-sm mt-2 font-serif tracking-widest" data-i18n="assets_desc">您的所有创意结晶，均安全存放于此。</p>
                    </div>
                    <div class="flex items-center gap-3">
                        <div class="bg-white border border-zinc-200 rounded-full px-4 py-2 flex items-center gap-2 shadow-sm focus-within:border-zinc-400 transition-colors">
                            <i data-lucide="search" class="w-4 h-4 text-zinc-400"></i>
                            <input type="text" data-placeholder="search_assets" placeholder="搜索资产..." class="bg-transparent border-none outline-none text-sm text-zinc-900 placeholder:text-zinc-400 w-48 font-serif" />
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20 mt-8" id="assets-grid">
                    <!-- 动态注入的图片内容见 JS -->
                </div>
                
                <!-- Footer -->
                <div class="mt-16 pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-400 font-medium">
                    <div class="footer-copyright flex items-center gap-2">
                        <i data-lucide="bot" class="w-4 h-4"></i>© 2026 北京织知玄华智能科技有限公司. 保留所有权利.
                    </div>
                    <div class="flex items-center gap-6 mt-4 md:mt-0">
                        <div class="flex items-center gap-4 mr-2 border-r border-zinc-300 pr-6">
                            <a href="javascript:void(0)" class="hover:opacity-80 transition-opacity" title="微信">
                                <svg viewBox="0 0 24 24" class="w-4 h-4" fill="#07C160"><path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-7.062-6.122zM14.383 13.6c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.842 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982z"/></svg>
                            </a>
                            <a href="javascript:void(0)" class="hover:opacity-80 transition-opacity" title="抖音">
                                <svg viewBox="0 0 24 24" class="w-4 h-4" fill="#000"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                            </a>
                            <a href="javascript:void(0)" class="hover:opacity-80 transition-opacity" title="小红书">
                                <svg viewBox="0 0 1024 1024" class="w-4 h-4"><path d="M726.51776 457.45152c-6.70208-0.0768-13.39392 0-20.00384-0.0768-2.37056 0-3.0464 1.05984-3.0464 3.23072 0.0768 5.10976 0.0768 10.13248 0.0768 15.232v0.01024c0.07168 4.87936 0 9.7536 0.07168 14.56128 0 3.90656 0.68096 4.66944 4.45952 4.66944 7.1424 0.0768 14.27456 0 21.41696 0.0768 2.67776 0 3.72736-1.28 3.65056-3.75808-0.08704-9.1648-0.08704-18.31936-0.15872-27.48416a6.7584 6.7584 0 0 0-6.46656-6.46144z" fill="#FF2E4D"></path><path d="M849.92 51.2h-675.84c-67.8656 0-122.88 55.0144-122.88 122.88v675.84c0 67.8656 55.0144 122.88 122.88 122.88h675.84c67.8656 0 122.88-55.0144 122.88-122.88V174.08c0-67.8656-55.0144-122.88-122.88-122.88zM250.78784 505.73312c-0.73728 10.59328-1.41312 21.25312-2.60608 31.8464-2.08896 18.39104-6.24128 36.26496-14.6432 52.864-2.16064 4.12672-5.13536 7.79776-8.18176 12.45696-1.85344-3.90656-3.41504-6.97856-4.82816-10.13248a3203.59424 3203.59424 0 0 1-14.79168-33.56672c-0.52736-1.2032-0.896-2.92352-0.36864-3.97824 3.19488-6.83008 3.41504-14.12096 3.85536-21.40672 0.60416-9.15968 1.35168-18.24256 2.01728-27.39712 0.51712-7.00416 0.80896-13.9776 1.39776-20.96128 0.67584-8.10496 1.49504-16.21504 2.16064-24.24832 0.14848-1.96608 1.04448-2.56 2.82624-2.56 11.0848 0 22.07744 0 33.16224-0.07168 2.37056 0 3.0464 0.98304 2.89792 3.23072-0.96768 14.63296-1.86368 29.28128-2.89792 43.92448z m71.29088 87.32672c-0.73728 9.46176-5.13536 17.49504-12.5696 23.5008-5.43232 4.352-11.74528 6.15936-18.6624 6.08256-5.87264 0-11.66848-0.0768-17.54112 0-2.00192 0-3.27168-0.60416-4.09088-2.55488-3.41504-7.6544-6.90688-15.32416-10.32192-22.97344-0.52736-1.13152-0.67584-2.33472-1.13152-3.456-1.63328-4.12672-1.5616-4.28544 2.97472-4.36224h13.90592c5.94944 0 8.47872-2.46784 8.5504-8.56576 0.07168-4.57216 0.07168-9.14944 0.07168-13.73696V494.2336c0.14848 0.15872 0.22016 0.15872 0.29696 0.15872V408.63744c0-4.28544 0.14848-4.43392 4.38784-4.43392h29.21472c5.13536 0 5.20704 0.14848 5.20704 5.40672 0 27.1872 0 54.36416 0.0768 81.47968 0.0768 23.87456 0.29696 47.75936 0.29696 71.6288 0 10.14272 0.14848 20.26496-0.6656 30.34112z m75.58656-28.90752c-4.98688 11.56096-10.19904 22.97344-15.31904 34.4576-0.45568 1.13664-1.19296 2.25792-2.3808 4.42368v0.01024c-2.97472-4.5056-6.0928-8.18176-8.11008-12.39552-2.82624-6.13888-4.5312-12.83584-7.35744-18.9952-3.0464-6.6816-4.15744-13.88032-5.57568-20.94592-1.1776-6.02112-1.40288-12.25216-1.8432-18.3296-1.2032-15.39584-2.23744-30.78656-3.44064-46.09536a2449.95584 2449.95584 0 0 0-2.0736-25.1648c-0.14848-1.50016 0.2304-2.176 1.94048-2.176 11.52512 0 22.97344-0.14848 34.49856-0.22016 2.1504 0 3.0464 0.96768 3.11808 2.9952 0.29696 4.65408 0.51712 9.31328 0.88576 13.97248 0.29696 3.83488 0.73728 7.6544 1.04448 11.41248 0.51712 5.40672 1.04448 10.81344 1.41312 16.14336 0.51712 6.90688 0.51712 13.81888 1.4848 20.63872 1.34144 10.4448 0.29696 21.10464 3.93216 31.32928 0.89088 2.40128-0.96768 6.08768-2.21696 8.93952z m84.28032 22.016c-2.89792 6.6816-6.02112 13.21472-8.99072 19.82464-1.64352 3.74784-3.19488 7.49568-4.76672 11.25376-1.85344 4.51072-3.11808 5.40672-7.87456 5.40672h-22.2976c-7.52128 0-15.0272 0.23552-22.53312-0.0768-3.56352-0.14336-7.0656-1.27488-10.62912-2.02752-1.792-0.36864-2.16064-1.42336-1.41312-3.14368a3709.71648 3709.71648 0 0 0 13.45024-29.21472c1.04448-2.24768 1.85344-4.65408 3.0464-6.90688 0.29696-0.6144 1.41312-1.28 2.00192-1.13152 12.42112 3.15392 25.13408 2.77504 37.76512 2.63168a874.6496 874.6496 0 0 1 20.07552 0c3.19488 0.00512 3.50208 0.45568 2.16576 3.38432z m3.84-21.86752a4.48512 4.48512 0 0 1-2.74944 1.4336c-13.89568 0.0768-27.8784 0.14848-41.77408-0.0768-4.23936-0.08704-8.5504-1.05472-11.74528-4.28544-3.3536-3.3792-4.98688-7.36256-3.28192-11.93984a897.52576 897.52576 0 0 1 9.58464-24.10496c3.88096-9.15456 7.81312-18.31936 12.05248-28.2368-2.30912-0.14848-3.712-0.29696-5.04832-0.29696-4.09088-0.07168-8.18176 0.29696-12.27264-0.2304-4.45952-0.51712-8.99072-1.04448-12.48256-4.79232-3.42528-3.6864-3.94752-8.04352-2.60608-12.32384 2.1504-6.83008 4.97664-13.44 7.80288-20.04992 2.67776-6.15424 5.72416-12.16 8.47872-18.24256 2.97472-6.53824 5.86752-13.07136 8.77056-19.6096a1361.99168 1361.99168 0 0 0 7.6544-17.33632c0.73728-1.80736 1.8688-2.47808 3.87072-2.47808 10.93632 0.07168 21.92896 0 32.86528 0 3.6352 0 3.712 0.36864 2.29888 3.6864-6.31296 14.63296-12.71808 29.20448-18.95936 43.84768a11.52 11.52 0 0 0-1.19296 4.87936c0.22016 3.90656 1.04448 4.5056 5.06368 4.5056 8.17152 0.0768 16.35328 0 24.448 0 1.64864 0 3.3536 0.22016 4.98688 0.29696 2.30912 0.0768 2.60608 1.05984 1.63328 3.072a2455.21408 2455.21408 0 0 0-13.3888 29.21472c-3.03616 6.91712-5.93408 13.89568-8.9088 20.8128a1530.1632 1530.1632 0 0 1-6.1696 13.80864c-1.94048 4.20352-0.60416 6.31296 4.15232 6.38976 6.02112 0 12.04224 0.0768 18.05824 0 2.08896 0 3.13344 0.60416 2.08896 2.85184-3.6352 8.25344-7.21408 16.58368-10.84928 24.85248-0.67072 1.50016-1.408 3.072-2.3808 4.352z m134.81472 58.73664h-125.3376c-1.72032-0.22016-3.48672-0.22016-5.94432-0.22016v-0.01536c0.88064-2.61632 1.41312-4.41856 2.1504-6.0672 4.69504-10.29632 9.4464-20.5056 14.0544-30.79168 1.04448-2.33472 2.52928-2.92352 4.75648-2.92352h28.6976c4.54656 0 4.75648-0.2304 4.75648-4.74112V461.66016c0-3.97824-0.0768-4.05504-4.08064-4.05504-6.10304 0-12.26752-0.0768-18.36544 0-2.30912 0-3.27168-0.51712-3.27168-3.1488 0.14848-10.97216 0.0768-21.92896 0.0768-32.88576 0-3.90656 0.0768-3.90656 3.86048-3.90656h73.00096c4.23936 0 8.5504 0.0768 12.78976 0 2.01728 0 2.82624 0.82432 2.74944 2.85184-0.0768 11.41248-0.0768 22.82496-0.0768 34.31424 0 2.02752-0.73728 2.77504-2.82624 2.77504-6.6048-0.0768-13.14304 0.07168-19.77856 0.07168-2.29376 0-3.33824 1.05984-3.33824 3.46624 0.0768 18.39104 0.14336 36.7104 0.14336 55.11168 0 20.87424 0 41.74848 0.0768 62.6944 0 3.75808 0.36864 4.21376 4.17792 4.21376h31.4368c3.41504 0 3.87072 0.36864 3.93728 3.81952 0.08704 10.97216 0 21.92896 0.08704 32.89088-0.01024 2.8672-1.57184 3.16416-3.73248 3.16416z m198.69696-34.92864c-0.14848 16.37376-11.008 29.21472-26.38848 32.89088-4.31616 1.05472-8.78592 1.35168-13.24544 1.5104-6.83008 0.22016-13.7472 0.07168-20.58752 0.07168-4.23936 0-5.42208-0.83456-6.9888-4.66432-3.33824-7.95136-6.83008-15.90784-10.26048-23.87456l-0.66048-1.57184c-1.19296-3.072-0.81408-3.61472 2.45248-3.61472 9.43616-0.07168 18.95424 0.15872 28.3904-0.29184 5.65248-0.29696 8.03328-2.85696 8.18688-8.64256 0.22016-11.04384-0.29696-22.07744-0.14848-33.11104 0.0768-5.48864-6.84032-11.42272-11.74528-11.71968a32.8448 32.8448 0 0 0-2.74944-0.14336c-18.73408 0-37.54496 0-56.2688 0.07168-5.27872 0-5.65248 0.53248-5.65248 5.8624l0.20992 77.55776c0 4.14208-0.0768 4.21376-4.23936 4.21376h-31.22176c-4.01408 0-4.3008-0.3072-4.3008-4.28544v-39.94112c0.06144 0.14336 0.13312 0.14336 0.20992 0.14336v-40.99584c0-2.78016-1.85344-2.93888-3.78368-2.93888-10.19392 0.08704-20.44416 0.31232-30.62272 0.31232-6.92224 0-6.17984 0.8192-6.25664-6.38976-0.0768-9.90208 0-19.90144 0-29.80352 0-3.59936 0.36864-4.05504 3.94752-4.13184 10.7008-0.07168 21.33504 0 32.04096-0.07168 4.09088 0 4.31104-0.15872 4.38272-4.21376 0.0768-9.90208-0.0768-19.8144 0-29.73184 0-2.4832-1.04448-3.23072-3.41504-3.23072-6.84544 0.0768-13.76256-0.07168-20.60288 0-2.1504 0-2.89792-0.74752-2.89792-2.92352 0.09216-11.26912 0.09216-22.46144-0.06144-33.72544 0-2.70336 1.03424-3.29216 3.41504-3.29216 6.31296 0.0768 12.6464 0 18.95936 0 4.23424 0 4.45952-0.3072 4.5312-4.74112 0-2.61632 0.14848-5.24288 0-7.87456-0.07168-2.4832 1.04448-3.15904 3.34336-3.15904 9.07776 0.0768 18.22208 0.0768 27.28448 0.0768h4.97664c3.94752 0 4.0192 0 4.1728 4.05504 0.06656 2.4064-0.1536 4.87936-0.08704 7.28576 0.0768 3.3792 0.9728 4.2752 4.31616 4.36224 5.65248 0.0768 11.30496 0.0768 17.024 0.0768 14.6432 0.07168 27.3664 5.09952 37.0176 16.29184 5.35552 6.22592 8.69888 13.81888 9.216 22.14912 0.52736 8.47872 0.15872 17.03936 0.3072 25.52832 0 3.15904 0.22016 6.38976 0.36864 9.53344 0.14336 3.15904 0.896 3.97824 4.09088 3.90656a48.56832 48.56832 0 0 1 19.03104 3.15904c13.00992 5.03808 21.03296 14.18752 23.63904 28.01152a44.4416 44.4416 0 0 1 0.73728 8.33024c0.08192 17.88928 0.06656 35.78368-0.06656 53.6832zM810.14272 453.632c-5.94432 3.90656-12.1856 3.75808-19.4048 3.6864-2.23744 0-5.20192 0.07168-8.09984-0.0768-0.7424-0.07168-2.00704-0.98304-2.08896-1.5872-0.6656-8.84736-1.77152-17.792 1.35168-26.35264 2.75456-7.5776 9.58464-12.01664 17.61792-12.16a19.99872 19.99872 0 0 1 19.32288 14.336c2.30912 8.2688-1.55648 17.42336-8.69888 22.15424z" fill="#FF2E4D"></path></svg>
                            </a>
                        </div>
                        <span class="footer-policy-link hover:text-zinc-900 cursor-pointer" data-i18n="privacy">隐私政策</span>
                        <span class="footer-policy-link hover:text-zinc-900 cursor-pointer" data-i18n="terms">服务条款</span>
                        <span class="footer-policy-link hover:text-zinc-900 cursor-pointer" data-i18n="contact">联系我们</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- ==================== 4. 消息/官方通知 (Messages View) ==================== -->
        <div id="view-messages" class="view-container hidden flex-1 overflow-y-auto w-full h-full relative no-scrollbar bg-[#F7F7F8]">
            <div class="max-w-[800px] mx-auto px-4 md:px-8 py-6 md:py-12 relative z-10">
                <div class="mb-8 md:mb-16">
                    <h1 class="text-[40px] font-extrabold tracking-tight text-zinc-900 mb-2" data-i18n="official_messages">消息与通知</h1>
                    <p class="text-zinc-400 text-sm font-serif tracking-widest" data-i18n="messages_desc">第一时间获取官方活动与系统公告。</p>
                </div>

                <!-- 消息筛选标签 -->
                <div class="flex items-center gap-2 mb-8 overflow-x-auto no-scrollbar" id="message-filters">
                    <button class="message-filter px-4 py-2 rounded-full text-xs font-bold transition-all bg-zinc-900 text-white shadow-sm whitespace-nowrap" @click="setMessageFilter($event.currentTarget, 'all')">
                        <i data-lucide="inbox" class="w-3.5 h-3.5 inline-block mr-1"></i>全部消息
                    </button>
                    <button class="message-filter px-4 py-2 rounded-full text-xs font-bold transition-all bg-white text-zinc-500 border border-zinc-200 hover:text-zinc-900 hover:border-zinc-300 whitespace-nowrap" @click="setMessageFilter($event.currentTarget, 'system')">
                        <i data-lucide="bell" class="w-3.5 h-3.5 inline-block mr-1"></i>系统公告
                    </button>
                    <button class="message-filter px-4 py-2 rounded-full text-xs font-bold transition-all bg-white text-zinc-500 border border-zinc-200 hover:text-zinc-900 hover:border-zinc-300 whitespace-nowrap" @click="setMessageFilter($event.currentTarget, 'activity')">
                        <i data-lucide="gift" class="w-3.5 h-3.5 inline-block mr-1"></i>活动福利
                    </button>
                    <button class="message-filter px-4 py-2 rounded-full text-xs font-bold transition-all bg-white text-zinc-500 border border-zinc-200 hover:text-zinc-900 hover:border-zinc-300 whitespace-nowrap" @click="setMessageFilter($event.currentTarget, 'payment')">
                        <i data-lucide="credit-card" class="w-3.5 h-3.5 inline-block mr-1"></i>支付消息
                    </button>
                </div>

                <div class="relative border-l border-zinc-200 ml-4 pb-20">
                    <div class="mb-12 relative pl-10" data-message-type="system">
                        <div class="absolute -left-[21px] top-1 w-10 h-10 rounded-full bg-[#F7F7F8] flex items-center justify-center">
                            <div class="w-3 h-3 rounded-full bg-zinc-900 border-2 border-white shadow-sm"></div>
                        </div>
                        <div class="flex flex-col items-start gap-2 mb-3">
                            <div class="flex items-center gap-3">
                                <span class="px-2.5 py-1 bg-white border border-zinc-200 rounded-full text-[10px] font-bold text-emerald-600" data-i18n="system_notice">系统公告</span>
                            </div>
                            <div class="flex items-center gap-1.5 text-xs font-medium text-zinc-400 font-mono">
                                <i data-lucide="calendar" class="w-3.5 h-3.5"></i> 2026.03.11
                            </div>
                        </div>
                        <div class="bg-white border border-zinc-200 rounded-[20px] p-6 shadow-sm">
                            <h3 class="text-lg font-bold text-zinc-900 mb-3">全新积分系统上线通知</h3>
                            <p class="text-sm text-zinc-500 leading-relaxed font-serif tracking-wide">平台现已将「算力」全面升级为「积分」体系。现在每日签到、邀请好友均可获得海量积分奖励，让您的创作更加自由无负担。</p>
                        </div>
                    </div>

                    <div class="mb-12 relative pl-10" data-message-type="activity">
                        <div class="absolute -left-[21px] top-1 w-10 h-10 rounded-full bg-[#F7F7F8] flex items-center justify-center">
                            <div class="w-3 h-3 rounded-full bg-zinc-900 border-2 border-white shadow-sm"></div>
                        </div>
                        <div class="flex flex-col items-start gap-2 mb-3">
                            <div class="flex items-center gap-3">
                                <span class="px-2.5 py-1 bg-white border border-zinc-200 rounded-full text-[10px] font-bold text-orange-600">活动福利</span>
                            </div>
                            <div class="flex items-center gap-1.5 text-xs font-medium text-zinc-400 font-mono">
                                <i data-lucide="calendar" class="w-3.5 h-3.5"></i> 2026.03.01
                            </div>
                        </div>
                        <div class="bg-white border border-zinc-200 rounded-[20px] p-6 shadow-sm">
                            <h3 class="text-lg font-bold text-zinc-900 mb-3">春季创作挑战赛正式开启</h3>
                            <p class="text-sm text-zinc-500 leading-relaxed font-serif tracking-wide">参与「春日视界」主题创作，带上专属标签发布视频至小红书或抖音，即有机会赢取 100,000 积分及周边大礼包！</p>
                        </div>
                    </div>

                    <!-- 支付消息：充值成功 -->
                    <div class="mb-12 relative pl-10" data-message-type="payment">
                        <div class="absolute -left-[21px] top-1 w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
                            <div class="w-3 h-3 rounded-full bg-emerald-500 border-2 border-white shadow-sm"></div>
                        </div>
                        <div class="flex flex-col items-start gap-2 mb-3">
                            <div class="flex items-center gap-3">
                                <span class="px-2.5 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-[10px] font-bold text-emerald-600">支付成功</span>
                            </div>
                            <div class="flex items-center gap-1.5 text-xs font-medium text-zinc-400 font-mono">
                                <i data-lucide="calendar" class="w-3.5 h-3.5"></i> 2026.03.15 14:32
                            </div>
                        </div>
                        <div class="bg-white border border-zinc-200 rounded-[20px] p-6 shadow-sm">
                            <div class="flex items-start gap-4">
                                <div class="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                                    <i data-lucide="check-circle" class="w-6 h-6 text-emerald-600"></i>
                                </div>
                                <div class="flex-1">
                                    <h3 class="text-lg font-bold text-zinc-900 mb-2">积分充值成功</h3>
                                    <p class="text-sm text-zinc-500 leading-relaxed font-serif tracking-wide mb-3">您已成功充值 1,500 积分，支付金额 ¥90.00。积分已到账，可立即用于视频生成。</p>
                                    <div class="flex items-center gap-4 text-xs">
                                        <span class="text-zinc-400">订单号：<span class="font-mono">PAY202603151432001</span></span>
                                        <span class="text-emerald-600 font-bold">+1,500 积分</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 支付消息：余额不足提醒 -->
                    <div class="mb-12 relative pl-10" data-message-type="payment">
                        <div class="absolute -left-[21px] top-1 w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center">
                            <div class="w-3 h-3 rounded-full bg-amber-500 border-2 border-white shadow-sm"></div>
                        </div>
                        <div class="flex flex-col items-start gap-2 mb-3">
                            <div class="flex items-center gap-3">
                                <span class="px-2.5 py-1 bg-amber-50 border border-amber-200 rounded-full text-[10px] font-bold text-amber-600">余额提醒</span>
                            </div>
                            <div class="flex items-center gap-1.5 text-xs font-medium text-zinc-400 font-mono">
                                <i data-lucide="calendar" class="w-3.5 h-3.5"></i> 2026.03.14 09:15
                            </div>
                        </div>
                        <div class="bg-white border border-zinc-200 rounded-[20px] p-6 shadow-sm">
                            <div class="flex items-start gap-4">
                                <div class="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                                    <i data-lucide="alert-circle" class="w-6 h-6 text-amber-600"></i>
                                </div>
                                <div class="flex-1">
                                    <h3 class="text-lg font-bold text-zinc-900 mb-2">积分余额不足提醒</h3>
                                    <p class="text-sm text-zinc-500 leading-relaxed font-serif tracking-wide mb-3">您的积分余额仅剩 <span class="text-amber-600 font-bold">45 积分</span>，不足以支持一次视频生成（最低需 50 积分）。建议您及时充值以保证创作不受影响。</p>
                                    <div class="flex items-center gap-3">
                                        <button @click="$router.push('/buy-points')" class="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-bold rounded-lg transition-colors">
                                            立即充值
                                        </button>
                                        <button class="px-4 py-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-600 text-xs font-bold rounded-lg transition-colors">
                                            查看明细
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 支付消息：订阅续费成功 -->
                    <div class="mb-12 relative pl-10" data-message-type="payment">
                        <div class="absolute -left-[21px] top-1 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                            <div class="w-3 h-3 rounded-full bg-blue-500 border-2 border-white shadow-sm"></div>
                        </div>
                        <div class="flex flex-col items-start gap-2 mb-3">
                            <div class="flex items-center gap-3">
                                <span class="px-2.5 py-1 bg-blue-50 border border-blue-200 rounded-full text-[10px] font-bold text-blue-600">订阅通知</span>
                            </div>
                            <div class="flex items-center gap-1.5 text-xs font-medium text-zinc-400 font-mono">
                                <i data-lucide="calendar" class="w-3.5 h-3.5"></i> 2026.03.10 00:00
                            </div>
                        </div>
                        <div class="bg-white border border-zinc-200 rounded-[20px] p-6 shadow-sm">
                            <div class="flex items-start gap-4">
                                <div class="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                                    <i data-lucide="crown" class="w-6 h-6 text-blue-600"></i>
                                </div>
                                <div class="flex-1">
                                    <h3 class="text-lg font-bold text-zinc-900 mb-2">会员订阅续费成功</h3>
                                    <p class="text-sm text-zinc-500 leading-relaxed font-serif tracking-wide mb-3">您的「标准会员」订阅已自动续费成功，支付金额 ¥30.00/月。会员权益已延期至 2026.04.10。</p>
                                    <div class="flex items-center gap-4 text-xs">
                                        <span class="text-zinc-400">订单号：<span class="font-mono">SUB202603100000001</span></span>
                                        <span class="px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full text-[10px] font-bold">已续费</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Footer -->
                <div class="mt-16 pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-400 font-medium">
                    <div class="footer-copyright flex items-center gap-2">
                        <i data-lucide="bot" class="w-4 h-4"></i>© 2026 北京织知玄华智能科技有限公司. 保留所有权利.
                    </div>
                    <div class="flex gap-6 mt-4 md:mt-0">
                        <span class="footer-policy-link hover:text-zinc-900 cursor-pointer" data-i18n="privacy">隐私政策</span>
                        <span class="footer-policy-link hover:text-zinc-900 cursor-pointer" data-i18n="terms">服务条款</span>
                        <span class="footer-policy-link hover:text-zinc-900 cursor-pointer" data-i18n="contact">联系我们</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- ==================== 5. 常见问题 (FAQ View) ==================== -->
        <div id="view-faq" class="view-container hidden flex-1 overflow-y-auto w-full h-full relative no-scrollbar bg-[#F7F7F8]">
            <div class="max-w-[1200px] mx-auto px-4 md:px-8 py-6 md:py-12 relative z-10">
                <div class="mb-8 md:mb-12">
                    <h1 class="text-[40px] font-extrabold tracking-tight text-zinc-900" data-i18n="faq">常见问题 (FAQ)</h1>
                    <p class="text-zinc-400 text-sm mt-2 font-serif tracking-widest">在这里为您解答关于平台使用的疑问。</p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                    <div class="bg-white p-8 rounded-[24px] border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
                        <h4 class="text-lg font-bold text-zinc-900 mb-3" data-i18n="faq_q1">积分如何获取和消耗？</h4>
                        <p class="text-sm text-zinc-500 font-serif leading-relaxed" data-i18n="faq_a1">每日登录可免费领取签到积分，邀请好友注册也能获得丰厚奖励。根据生成的时长和画质（720P/1080P），单次任务将消耗 10-50 不等的积分。</p>
                    </div>
                    <div class="bg-white p-8 rounded-[24px] border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
                        <h4 class="text-lg font-bold text-zinc-900 mb-3" data-i18n="faq_q2">支持哪些视频画幅比例？</h4>
                        <p class="text-sm text-zinc-500 font-serif leading-relaxed" data-i18n="faq_a2">我们提供 16:9 (横屏视频), 9:16 (短视频), 1:1 (正方形) 等多种画幅支持。</p>
                    </div>
                    <div class="bg-white p-8 rounded-[24px] border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
                        <h4 class="text-lg font-bold text-zinc-900 mb-3" data-i18n="faq_q3">上传的首尾帧图有格式限制吗？</h4>
                        <p class="text-sm text-zinc-500 font-serif leading-relaxed" data-i18n="faq_a3">支持 JPG, PNG 格式的高清图片，单张图片建议不超过 10MB，分辨率最低建议为 1080x1080 像素以保证生成效果。</p>
                    </div>
                    <div class="bg-white p-8 rounded-[24px] border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
                        <h4 class="text-lg font-bold text-zinc-900 mb-3" data-i18n="faq_q4">生成的视频可以商用吗？</h4>
                        <p class="text-sm text-zinc-500 font-serif leading-relaxed" data-i18n="faq_a4">平台生成的所有视频版权归创作者所有，完全支持在小红书、抖音等平台的发布和正规商业化用途。</p>
                    </div>
                </div>

                <!-- Footer -->
                <div class="mt-16 pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-400 font-medium">
                    <div class="footer-copyright flex items-center gap-2">
                        <i data-lucide="bot" class="w-4 h-4"></i>© 2026 北京织知玄华智能科技有限公司. 保留所有权利.
                    </div>
                    <div class="flex gap-6 mt-4 md:mt-0">
                        <span class="footer-policy-link hover:text-zinc-900 cursor-pointer" data-i18n="privacy">隐私政策</span>
                        <span class="footer-policy-link hover:text-zinc-900 cursor-pointer" data-i18n="terms">服务条款</span>
                        <span class="footer-policy-link hover:text-zinc-900 cursor-pointer" data-i18n="contact">联系我们</span>
                    </div>
                </div>
            </div>
        </div>

    </main>

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
                    <button @click="$router.push('/buy-points')" class="points-modal-button bg-zinc-900 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-sm active:scale-95 flex items-center gap-1.5 transition-colors hover:bg-zinc-800">
                        <i data-lucide="shopping-cart" class="w-4 h-4"></i> <span data-i18n="buy_points">购买积分</span>
                    </button>
                </div>
                <div class="flex items-center gap-3">
                    <span class="text-3xl font-extrabold text-amber-500 font-mono">1,200</span>
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
                        <tr class="hover:bg-zinc-50 transition-colors">
                            <td class="px-6 py-4">
                                <div class="points-modal-copy font-bold text-zinc-900" data-i18n="points_item_1080">Generate 1080P Video (10s)</div>
                                <div class="text-xs text-zinc-400 mt-1 font-mono">2026-03-11 14:30</div>
                            </td>
                            <td class="px-6 py-4 text-right font-bold text-zinc-900 font-mono">- 20</td>
                        </tr>
                        <tr class="hover:bg-zinc-50 transition-colors">
                            <td class="px-6 py-4">
                                <div class="points-modal-copy font-bold text-zinc-900" data-i18n="points_item_checkin">Daily Check-in Reward</div>
                                <div class="text-xs text-zinc-400 mt-1 font-mono">2026-03-11 08:00</div>
                            </td>
                            <td class="px-6 py-4 text-right font-bold text-emerald-500 font-mono">+ 50</td>
                        </tr>
                        <tr class="hover:bg-zinc-50 transition-colors">
                            <td class="px-6 py-4">
                                <div class="points-modal-copy font-bold text-zinc-900" data-i18n="points_item_invite">Invite Friend (User_8891)</div>
                                <div class="text-xs text-zinc-400 mt-1 font-mono">2026-03-10 16:45</div>
                            </td>
                            <td class="px-6 py-4 text-right font-bold text-emerald-500 font-mono">+ 200</td>
                        </tr>
                        <tr class="hover:bg-zinc-50 transition-colors">
                            <td class="px-6 py-4">
                                <div class="points-modal-copy font-bold text-zinc-900" data-i18n="points_item_4k">Generate 4K Video (5s)</div>
                                <div class="text-xs text-zinc-400 mt-1 font-mono">2026-03-10 11:20</div>
                            </td>
                            <td class="px-6 py-4 text-right font-bold text-zinc-900 font-mono">- 25</td>
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
                <button class="bg-zinc-900 text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-zinc-800 transition-transform active:scale-95">立即签到</button>
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
    

  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()


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
        if(typeof window !== 'undefined') window.renderHomeGallery = renderHomeGallery;
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

            renderHomeGallery();
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
            updateDurationFromSlider(1);
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
            
            // 限制范围
            if (mins < 0) mins = 0;
            if (mins > 3) mins = 3;
            if (secs < 0) secs = 0;
            if (secs > 59) secs = 59;
            
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
            if (slider) slider.value = totalSeconds;
            
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
            // value范围是1-36，对应5秒-180秒（每隔5秒）
            const seconds = value * 5;
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
            
            // 限制范围
            if (mins < 0) mins = 0;
            if (mins > 3) mins = 3;
            if (secs < 0) secs = 0;
            if (secs > 59) secs = 59;
            
            // 计算总秒数，然后转换为步数（每步5秒）
            let totalSeconds = mins * 60 + secs;
            if (totalSeconds < 5) totalSeconds = 5;
            if (totalSeconds > 180) totalSeconds = 180;
            
            // 将秒数对齐到5秒的倍数
            const steps = Math.round(totalSeconds / 5);
            const alignedSeconds = steps * 5;
            
            // 同步更新滑块
            const slider = document.getElementById('duration-slider');
            if (slider) slider.value = steps;
            
            // 计算积分消耗
            const cost = Math.round((alignedSeconds / 5) * 10);
            updateDurationCost(cost);
            
            // 更新警告
            const warning = document.getElementById('multi-agent-warning');
            if (alignedSeconds > 10) {
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

        const getGridClass = (ratioClass) => {
            if (ratioClass === 'aspect-[16/9]') return 'col-span-1 row-span-2';
            if (ratioClass === 'aspect-[1/1]') return 'col-span-1 row-span-3';
            return 'col-span-1 row-span-5';
        };

        const renderCardHTML = (item) => `
            <div class="relative group overflow-hidden cursor-pointer bg-zinc-100 hover:opacity-95 transition-opacity rounded-none shadow-none ${getGridClass(item.ratioClass)}"
                 onclick="openVideoModal(this)"
                 data-img="${item.img}"
                 data-title="${item.title}"
                 data-author="${item.author}">
                <img src="${item.img}" alt="${item.title}" class="w-full h-full object-cover" loading="lazy" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div class="absolute bottom-0 left-0 right-0 p-2 md:p-3 2xl:p-4 flex flex-col gap-0.5 md:gap-1">
                    <span class="text-[10px] md:text-xs 2xl:text-sm font-bold text-white truncate drop-shadow-md">${item.title}</span>
                    <div class="flex items-center justify-between text-[8px] md:text-[10px] 2xl:text-xs font-medium text-zinc-300">
                        <span>@${item.author}</span>
                        <span class="flex items-center gap-1"><i data-lucide="play" class="w-2 h-2 2xl:w-2.5 2xl:h-2.5 fill-current text-white/80"></i> ${item.views}</span>
                    </div>
                </div>
            </div>
        `;

        function renderHomeGallery() {
            const featuredCardData = [
                { img: "/discover-top/discover-01.png", title: "粉云猫猫", author: "GuolaYa Picks", views: "2.1w", ratioClass: "aspect-[1/1]" },
                { img: "/discover-top/discover-02.png", title: "异星花园", author: "GuolaYa Picks", views: "1.8w", ratioClass: "aspect-[9/16]" },
                { img: "/discover-top/discover-03.png", title: "雨夜侧影", author: "GuolaYa Picks", views: "2.4w", ratioClass: "aspect-[9/16]" },
                { img: "/discover-top/discover-04.png", title: "柯尔鸭肖像", author: "GuolaYa Picks", views: "1.3w", ratioClass: "aspect-[9/16]" },
                { img: "/discover-top/discover-05.png", title: "古典漫游", author: "GuolaYa Picks", views: "1.9w", ratioClass: "aspect-[9/16]" },
                { img: "/discover-top/discover-06.png", title: "枝头小雀", author: "GuolaYa Picks", views: "1.1w", ratioClass: "aspect-[9/16]" },
                { img: "/discover-top/discover-07.png", title: "黄昏街角", author: "GuolaYa Picks", views: "2.7w", ratioClass: "aspect-[9/16]" },
                { img: "/discover-top/discover-08.png", title: "城堡旧梦", author: "GuolaYa Picks", views: "2.2w", ratioClass: "aspect-[9/16]" },
                { img: "/discover-top/discover-09.png", title: "格纸秘密", author: "GuolaYa Picks", views: "1.6w", ratioClass: "aspect-[9/16]" },
                { img: "/discover-top/discover-10.png", title: "雨中点火", author: "GuolaYa Picks", views: "2.0w", ratioClass: "aspect-[9/16]" }
            ];

            const galleryData = [
                // 第一行
                { img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop", title: "星际漫游", author: "SpaceX_Fan", views: "8.9w", ratioClass: "aspect-[16/9]" },
                { img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop", title: "废土文明重建", author: "视觉日记", views: "4.2w", ratioClass: "aspect-[9/16]" },
                { img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop", title: "落日余晖", author: "Cinematic", views: "6.7w", ratioClass: "aspect-[4/5]" },
                
                // 第二行 - 添加更多 9:16 竖版
                { img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop", title: "微光", author: "Tech_Bro", views: "1.1w", ratioClass: "aspect-[1/1]" },
                { img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop", title: "折叠空间", author: "Abstract_AI", views: "5.5w", ratioClass: "aspect-[3/4]" },
                { img: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=800&auto=format&fit=crop", title: "遥远星系", author: "StarGazer", views: "3.2w", ratioClass: "aspect-[9/16]" },
                { img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800&auto=format&fit=crop", title: "赛博朋克城市", author: "CyberPunk", views: "15.6w", ratioClass: "aspect-[9/16]" },
                
                // 第三行 - 16:9 横版
                { img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop", title: "山川壮丽", author: "NatureLover", views: "22.1w", ratioClass: "aspect-[16/9]" },
                { img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800&auto=format&fit=crop", title: "森林秘境", author: "GreenSoul", views: "7.8w", ratioClass: "aspect-[9/16]" },
                { img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop", title: "城市之光", author: "UrbanEye", views: "18.5w", ratioClass: "aspect-[16/9]" },
                { img: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=800&auto=format&fit=crop", title: "海浪轻语", author: "OceanDream", views: "11.2w", ratioClass: "aspect-[1/1]" },
                { img: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=800&auto=format&fit=crop", title: "高山湖泊", author: "PeakView", views: "14.7w", ratioClass: "aspect-[16/9]" },
                
                // 第四行 - 混合比例
                { img: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?q=80&w=800&auto=format&fit=crop", title: "沙滩漫步", author: "BeachLife", views: "6.3w", ratioClass: "aspect-[9/16]" },
                { img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop", title: "云雾山脉", author: "CloudRider", views: "8.9w", ratioClass: "aspect-[2/3]" },
                { img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop", title: "迷雾森林", author: "MysticWoods", views: "5.1w", ratioClass: "aspect-[16/9]" },
                { img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop", title: "阳光穿透", author: "SunRay", views: "13.4w", ratioClass: "aspect-[3/4]" },
                { img: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=800&auto=format&fit=crop", title: "金色麦田", author: "HarvestMoon", views: "4.8w", ratioClass: "aspect-[1/1]" },
                
                // 第五行
                { img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop", title: "湖光山色", author: "LakeView", views: "19.2w", ratioClass: "aspect-[16/9]" },
                { img: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=800&auto=format&fit=crop", title: "瀑布飞流", author: "WaterFall", views: "7.5w", ratioClass: "aspect-[9/16]" },
                { img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop", title: "星空璀璨", author: "StarLight", views: "25.6w", ratioClass: "aspect-[1/1]" },
                { img: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=800&auto=format&fit=crop", title: "峡谷深处", author: "DeepCanyon", views: "9.8w", ratioClass: "aspect-[4/5]" },
                { img: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?q=80&w=800&auto=format&fit=crop", title: "秋叶飘零", author: "AutumnLeaf", views: "6.7w", ratioClass: "aspect-[9/16]" },
                
                // 第六行 - 更多竖版
                { img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop", title: "瑞士风光", author: "SwissAlps", views: "16.3w", ratioClass: "aspect-[9/16]" },
                { img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop", title: "热带天堂", author: "Tropical", views: "12.8w", ratioClass: "aspect-[16/9]" },
                { img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop", title: "极光之夜", author: "Aurora", views: "28.4w", ratioClass: "aspect-[9/16]" },
                { img: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=800&auto=format&fit=crop", title: "树影婆娑", author: "TreeShadow", views: "3.9w", ratioClass: "aspect-[3/4]" },
                { img: "https://images.unsplash.com/photo-1504567961542-e24d9439a724?q=80&w=800&auto=format&fit=crop", title: "晨曦初照", author: "MorningGlow", views: "8.2w", ratioClass: "aspect-[1/1]" },
                
                // 第七行
                { img: "https://images.unsplash.com/photo-1507400492013-162706c8c05e?q=80&w=800&auto=format&fit=crop", title: "月夜静谧", author: "MoonLight", views: "11.7w", ratioClass: "aspect-[2/3]" },
                { img: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=800&auto=format&fit=crop", title: "深海探秘", author: "DeepSea", views: "5.4w", ratioClass: "aspect-[16/9]" },
                { img: "https://images.unsplash.com/photo-1518173946687-a4c036bc1378?q=80&w=800&auto=format&fit=crop", title: "都市夜景", author: "CityNight", views: "21.9w", ratioClass: "aspect-[9/16]" },
                { img: "https://images.unsplash.com/photo-1461301214746-1e790926d323?q=80&w=800&auto=format&fit=crop", title: "书页翻动", author: "BookLover", views: "4.1w", ratioClass: "aspect-[4/5]" },
                { img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop", title: "未来都市", author: "FutureCity", views: "17.3w", ratioClass: "aspect-[16/9]" },
                
                // 第八行 - 绘本风格
                { img: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=800&auto=format&fit=crop", title: "童话世界", author: "FairyTale", views: "9.6w", ratioClass: "aspect-[9/16]" },
                { img: "https://images.unsplash.com/photo-1560167016-022b78a0258e?q=80&w=800&auto=format&fit=crop", title: "梦幻花园", author: "DreamGarden", views: "6.8w", ratioClass: "aspect-[1/1]" },
                { img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop", title: "小桥流水", author: "WaterBridge", views: "14.2w", ratioClass: "aspect-[16/9]" },
                { img: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=800&auto=format&fit=crop", title: "水墨江南", author: "InkWash", views: "10.5w", ratioClass: "aspect-[9/16]" },
                { img: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=800&auto=format&fit=crop", title: "纸艺人生", author: "PaperArt", views: "3.7w", ratioClass: "aspect-[3/4]" },
                
                // 第九行
                { img: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop", title: "油画质感", author: "OilPaint", views: "8.1w", ratioClass: "aspect-[4/5]" },
                { img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800&auto=format&fit=crop", title: "抽象艺术", author: "AbstractArt", views: "5.9w", ratioClass: "aspect-[1/1]" },
                { img: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=800&auto=format&fit=crop", title: "水彩梦境", author: "WaterColor", views: "12.3w", ratioClass: "aspect-[9/16]" },
                { img: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=800&auto=format&fit=crop", title: "极简主义", author: "Minimalist", views: "7.4w", ratioClass: "aspect-[16/9]" },
                { img: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=800&auto=format&fit=crop", title: "光影交错", author: "LightShadow", views: "15.8w", ratioClass: "aspect-[2/3]" },
                { img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop", title: "微观宇宙法则", author: "Neo_Art", views: "12.4w", ratioClass: "aspect-[3/4]" },
                
                // 第十行 - 最后一行
                { img: "https://images.unsplash.com/photo-1515405295579-ba7b45403062?q=80&w=800&auto=format&fit=crop", title: "建筑之美", author: "Architecture", views: "11.2w", ratioClass: "aspect-[3/4]" },
                { img: "https://images.unsplash.com/photo-1550684848-86a5d8727436?q=80&w=800&auto=format&fit=crop", title: "时光隧道", author: "TimeTunnel", views: "6.5w", ratioClass: "aspect-[9/16]" },
                { img: "https://images.unsplash.com/photo-1495195129352-aeb325a55b65?q=80&w=800&auto=format&fit=crop", title: "餐桌美学", author: "FoodArt", views: "9.1w", ratioClass: "aspect-[1/1]" },
                { img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop", title: "几何之美", author: "Geometry", views: "4.6w", ratioClass: "aspect-[16/9]" },
                { img: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=800&auto=format&fit=crop", title: "自然纹理", author: "NatureTex", views: "8.8w", ratioClass: "aspect-[4/5]" }
            ];
            document.getElementById('home-gallery').innerHTML = [...featuredCardData, ...galleryData].map(item => renderCardHTML(item)).join('');
            if(typeof lucide !== 'undefined') lucide.createIcons();
            adjustFabMenuPosition();
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

<style scoped>

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
