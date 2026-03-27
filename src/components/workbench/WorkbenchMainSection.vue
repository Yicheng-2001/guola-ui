<template>
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
                        <button @click="router.push('/')" class="bg-[#171717] text-white px-5 py-2 rounded-full font-bold hover:bg-black transition-colors shadow-sm active:scale-95 flex items-center gap-2">
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
                                            </div>
                                            <div id="home-multi-agent-warning" class="hidden text-xs text-orange-600 bg-orange-50 p-2.5 rounded-lg border border-orange-200 flex items-start gap-2 mb-3">
                                                <i data-lucide="alert-circle" class="w-4 h-4 flex-shrink-0 mt-0.5"></i>
                                                <span>超过10秒后生成的画面为多Agent并行结果</span>
                                            </div>
                                            <div class="rounded-xl border border-zinc-200 overflow-hidden bg-zinc-50/60">
                                                <div class="px-3 py-2.5 bg-white border-b border-zinc-200">
                                                    <div class="flex flex-wrap items-center gap-2">
                                                        <div class="flex items-center gap-1">
                                                            <input
                                                                type="number"
                                                                id="custom-duration-min"
                                                                min="5"
                                                                max="3"
                                                                value="0"
                                                                class="w-14 px-1.5 py-1.5 text-xs font-mono font-bold text-zinc-900 bg-zinc-50 border border-zinc-200 rounded-lg text-center focus:outline-none focus:border-zinc-400"
                                                                @input="updateCustomDurationFromTime()"
                                                            >
                                                            <span class="text-xs text-zinc-500">分</span>
                                                        </div>
                                                        <div class="flex items-center gap-1">
                                                            <input
                                                                type="number"
                                                                id="custom-duration-sec"
                                                                min="0"
                                                                max="999"
                                                                value="5"
                                                                class="w-14 px-1.5 py-1.5 text-xs font-mono font-bold text-zinc-900 bg-zinc-50 border border-zinc-200 rounded-lg text-center focus:outline-none focus:border-zinc-400"
                                                                @input="updateCustomDurationFromTime()"
                                                            >
                                                            <span class="text-xs text-zinc-500">秒</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="px-3 py-3">
                                                    <input
                                                        type="range"
                                                        min="5"
                                                        max="180"
                                                        step="1"
                                                        value="5"
                                                        id="custom-duration-slider"
                                                        class="w-full accent-zinc-900"
                                                        @input="updateCustomDuration($event.currentTarget.value)"
                                                    >
                                                    <div class="flex justify-between text-[10px] text-zinc-400 mt-1">
                                                        <span>5s</span>
                                                        <span>3m</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <!-- 清晰度设置 -->
                                        <div class="mb-5">
                                            <span class="text-sm font-bold text-zinc-900 mb-2 block" data-i18n="resolution">清晰度</span>
                                            <div class="flex gap-2">
                                                <button class="flex-1 py-1.5 text-xs font-bold rounded-lg border border-zinc-200 bg-white text-zinc-500 hover:text-zinc-900 custom-res-btn transition-colors" @click="setCustomRes($event.currentTarget)">720p</button>
                                                <button class="flex-1 py-1.5 text-xs font-bold rounded-lg border border-zinc-900 bg-zinc-900 text-white custom-res-btn transition-colors" @click="setCustomRes($event.currentTarget)">1080p</button>
                                            </div>
                                        </div>
                                        
                                        <!-- 画幅比例设置 -->
                                        <div>
                                            <span class="text-sm font-bold text-zinc-900 mb-2 block" data-i18n="aspect_ratio">画幅比例</span>
                                            <div class="grid grid-cols-3 gap-2">
                                                <button class="py-1.5 text-xs font-bold rounded-lg border border-zinc-900 bg-zinc-900 text-white custom-ratio-btn transition-colors" @click="setCustomRatio($event.currentTarget)">16:9</button>
                                                <button class="py-1.5 text-xs font-bold rounded-lg border border-zinc-200 bg-white text-zinc-500 hover:text-zinc-900 custom-ratio-btn transition-colors" @click="setCustomRatio($event.currentTarget)">9:16</button>
                                                <button class="py-1.5 text-xs font-bold rounded-lg border border-zinc-200 bg-white text-zinc-500 hover:text-zinc-900 custom-ratio-btn transition-colors" @click="setCustomRatio($event.currentTarget)">1:1</button>
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
                            <span class="filter-item text-zinc-900 border-b border-zinc-900 pb-0.5 cursor-pointer transition-colors" @click="setHomeFilter($event.currentTarget)" data-i18n="official_picks">官方推荐</span>
                            <span class="filter-item text-zinc-400 hover:text-zinc-900 cursor-pointer transition-colors" @click="setHomeFilter($event.currentTarget)" data-i18n="storybook_picks">精选绘本</span>
                            <span class="filter-item text-zinc-400 hover:text-zinc-900 cursor-pointer transition-colors" @click="setHomeFilter($event.currentTarget)" data-i18n="artist_picks">精选艺术家</span>
                        </div>
                    </div>

                    <div class="mx-4 md:mx-6 lg:mx-8 rounded-t-[28px] overflow-hidden bg-[#fcfcfb]" id="discover-gallery-container">
                        <div id="home-gallery" class="discover-grid grid grid-flow-row grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7 auto-rows-[56px] md:auto-rows-[68px] lg:auto-rows-[76px] gap-0">
                            <div
                                v-for="(item, index) in props.galleryItems || []"
                                :key="getGalleryItemKey(item, index)"
                                class="relative group overflow-hidden cursor-pointer bg-zinc-100 hover:opacity-95 transition-opacity rounded-none shadow-none"
                                :class="getGalleryGridClass(item)"
                                @click="openVideoModal($event.currentTarget)"
                                :data-img="item.img"
                                :data-title="item.title"
                                :data-author="item.author"
                            >
                                <img
                                    :src="item.img"
                                    :alt="item.title || `gallery-item-${index + 1}`"
                                    class="w-full h-full object-cover"
                                    loading="lazy"
                                />
                                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                <div class="absolute bottom-0 left-0 right-0 p-2 md:p-3 2xl:p-4 flex flex-col gap-0.5 md:gap-1">
                                    <span class="text-[10px] md:text-xs 2xl:text-sm font-bold text-white truncate drop-shadow-md">
                                        {{ item.title }}
                                    </span>
                                    <div class="flex items-center justify-between text-[8px] md:text-[10px] 2xl:text-xs font-medium text-zinc-300">
                                        <span>@{{ item.author || 'GuolaYa' }}</span>
                                        <span class="flex items-center gap-1">
                                            <svg viewBox="0 0 24 24" class="w-2 h-2 2xl:w-2.5 2xl:h-2.5 fill-current text-white/80" aria-hidden="true">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                            {{ item.views || '0' }}
                                        </span>
                                    </div>
                                </div>
                            </div>
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
                            <div class="mb-3 rounded-xl border border-zinc-200 overflow-hidden bg-zinc-50/60">
                                <div class="px-3 py-2.5 bg-white border-b border-zinc-200">
                                    <div class="flex flex-wrap items-center gap-2 sm:gap-3">
                                        <div class="flex items-center gap-1">
                                            <input
                                                type="number"
                                                id="duration-min"
                                                min="5"
                                                max="3"
                                                value="0"
                                                class="create-serif-ui w-14 px-1.5 py-1.5 text-sm font-bold text-zinc-900 bg-zinc-50 border border-zinc-200 rounded-lg text-center focus:outline-none focus:border-zinc-400"
                                                @input="updateDurationFromTime()"
                                            >
                                            <span class="text-sm text-zinc-500">分</span>
                                        </div>
                                        <div class="flex items-center gap-1">
                                            <input
                                                type="number"
                                                id="duration-sec"
                                                min="0"
                                                max="999"
                                                value="5"
                                                class="create-serif-ui w-14 px-1.5 py-1.5 text-sm font-bold text-zinc-900 bg-zinc-50 border border-zinc-200 rounded-lg text-center focus:outline-none focus:border-zinc-400"
                                                @input="updateDurationFromTime()"
                                            >
                                            <span class="text-sm text-zinc-500">秒</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="px-3 py-3">
                                    <input
                                        type="range"
                                        id="duration-slider"
                                        min="5"
                                        max="180"
                                        step="1"
                                        value="5"
                                        class="w-full accent-zinc-900"
                                        @input="updateDurationFromSlider($event.currentTarget.value)"
                                    >
                                    <div class="flex justify-between text-[10px] text-zinc-400 mt-1">
                                        <span>5秒</span>
                                        <span>3分</span>
                                    </div>
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
                                        <button @click="router.push('/buy-points')" class="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-bold rounded-lg transition-colors">
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
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const props = defineProps([
  'handleCreateDragLeave',
  'handleCreateDragOver',
  'handleCreateDrop',
  'handleCreateGenerate',
  'handleCreateInput',
  'handleHomeDragLeave',
  'handleHomeDragOver',
  'handleHomeDrop',
  'handleHomeGenerate',
  'handleHomeInput',
  'handleHomePaste',
  'handleScroll',
  'openModal',
  'openVideoModal',
  'removeCreateImage',
  'removeHomeImage',
  'selectLang',
  'setCustomRatio',
  'setCustomRes',
  'setHomeFilter',
  'setHomeMode',
  'setMessageFilter',
  'setModel',
  'setRatio',
  'setResolution',
  'switchGlobalTab',
  'toggleCreateMode',
  'toggleCustomDropdown',
  'toggleHomeModeDropdown',
  'toggleLangMenu',
  'toggleModelDropdown',
  'updateCreateCharCount',
  'updateCustomDuration',
  'updateCustomDurationFromTime',
  'updateDurationFromSlider',
  'updateDurationFromTime',
  'galleryItems'
])
const {
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
} = props

const getGalleryGridClass = (item = {}) => {
  const ratio = String(item.ratioClass || item.aspectRatio || item.ratio || '')
    .replace(/\s/g, '')
    .toLowerCase()

  if (ratio.includes('16/9')) return 'col-span-1 row-span-2'
  if (ratio.includes('1/1')) return 'col-span-1 row-span-3'
  return 'col-span-1 row-span-5'
}

const getGalleryItemKey = (item = {}, index) =>
  item.id || item.uuid || `${item.img || 'gallery'}-${item.title || 'item'}-${index}`
</script>
