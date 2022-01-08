!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports["utils/v1-migrate"]=o():e["utils/v1-migrate"]=o()}(self,(function(){return function(){"use strict";var e,o,t={290:function(e){e.exports=coreApis.filePicker},729:function(e){e.exports=coreApis.utils.log}},n={};function a(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,a),i.exports}o=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},a.t=function(t,n){if(1&n&&(t=this(t)),8&n)return t;if("object"==typeof t&&t){if(4&n&&t.__esModule)return t;if(16&n&&"function"==typeof t.then)return t}var i=Object.create(null);a.r(i);var r={};e=e||[null,o({}),o([]),o(o)];for(var s=2&n&&t;"object"==typeof s&&!~e.indexOf(s);s=o(s))Object.getOwnPropertyNames(s).forEach((function(e){r[e]=function(){return t[e]}}));return r.default=function(){return t},a.d(i,r),i},a.d=function(e,o){for(var t in o)a.o(o,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},a.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return function(){a.d(i,{component:function(){return u}});var e=coreApis.pluginApis.data,o=coreApis.componentApis.component,t=coreApis.componentApis.userComponent,n=coreApis.ajax,r=coreApis.cdnTypes,s=coreApis.meta,l=coreApis.settings,c=coreApis.toast,d=a(729),m=coreApis.pluginApis.hook,p=coreApis.pluginApis.plugin;const u={name:"v1Migrate",displayName:"v1 设置迁移",description:{"zh-CN":"在设置的 `关于` 面板中添加 `导入 v1 设置` 按钮, 点击导入可以导入 v1 的设置, 并根据打开的选项自动下载安装 v2 中对应的功能."},tags:[componentsTags.utils],entry:()=>{(0,e.addData)("settingsPanel.about.actions",(e=>{e.push({icon:"mdi-inbox-arrow-down-outline",name:"importV1Settings",displayName:"导入 v1 设置",run:async()=>{const{logError:e}=await Promise.resolve().then(a.t.bind(a,729,23)),{pickFile:i}=await Promise.resolve().then(a.t.bind(a,290,23)),u=await i({accept:"*.json"});if(0===u.length)return;const[f]=u;try{const e=JSON.parse(await f.text());await(async e=>{const a=c.Toast.info("下载功能列表中","导入 v1 设置");try{console.log("下载功能列表中");const i=`${r.cdnRoots[(0,l.getGeneralSettings)().cdnRoot](s.meta.compilationInfo.branch)}doc/features/features.json`,c=await(0,n.monkey)({url:i});console.log(c);const d=JSON.parse(c);console.log("下载功能列表完成");const u=(a,i,c)=>async()=>{if(!e[a])return void console.log(`跳过了未开启的选项 ${a}`);const u={component:o.componentsMap,plugin:p.pluginsMap},f={component:t.installComponent,plugin:p.installPlugin};if(i in u[c])console.log(`${i} 已经存在, 跳过安装`);else{const e=d.find((e=>e.type===c&&e.name===i)),o=e?.fullAbsolutePath;if(!o||!e)return void console.log(`没有找到名为 ${i} 的功能`);const t=`${r.cdnRoots[(0,l.getGeneralSettings)().cdnRoot](s.meta.compilationInfo.branch,e.owner)}${o}`,a=await(0,n.monkey)({url:t}),{before:p,after:u}=(0,m.getHook)(`user${lodash.startCase(c)}s.add`,a,t);await p();const{metadata:g,message:v}=await f[c](a);await u(g),console.log(v)}},f=(o,t,n)=>()=>{const a=e[o],i=n?.(a)??a;if(void 0!==i){const[e,...o]=t.split("."),{options:n}=(0,l.getComponentSettings)(e);lodash.set(n,o,i)}console.log(`迁移了选项 ${o} -> ${t}`)},g=()=>()=>{const{customStyles:o}=e;o.filter((e=>e.enabled)).forEach((e=>{l.settings.userStyles[e.name]=lodash.omit(e,"enabled")}))},v=e=>u("guiSettings",e,"plugin"),b=()=>none,y={category:"home",activities:"feeds",bangumi:"subscriptions",watchlaterList:"watchlater",favoritesList:"favorites",historyList:"history",rankingLink:"ranking",drawingLink:"drawing",bangumiLink:"bangumi",musicLink:"music",matchLink:"match",shopLink:"shop"},h=[u("useDarkStyle","darkMode","component"),u("darkColorScheme","darkModeFollowSystem","component"),u("hideBanner","hideBanner","component"),u("expandDanmakuList","expandDanmakuList","component"),f("expandDanmakuListIgnoreMediaList","expandDanmakuList.ignoreMediaList"),u("expandDescription","fullVideoDescription","component"),u("watchlaterRedirect","watchlaterRedirect","component"),f("watchLaterRedirectNavbar","watchlaterRedirect.navbar"),f("watchLaterRedirectPage","watchlaterRedirect.page"),u("touchVideoPlayer","touchPlayerGestures","component"),u("touchVideoPlayer","touchPlayerControl","component"),u("customControlBackground","playerControlBackground","component"),f("customControlBackgroundOpacity","playerControlBackground.opacity",(e=>{const o=parseFloat(e);return Math.round(100*o)})),u("darkSchedule","darkModeSchedule","component"),f("darkScheduleStart","darkModeSchedule.range.start"),f("darkScheduleEnd","darkModeSchedule.range.end"),u("fullTweetsTitle","fullFeedsTitle","component"),u("fullPageTitle","fullEpisodeTitle","component"),u("removeVideoTopMask","hideVideoTopMask","component"),u("removeLiveWatermark","removeLiveWatermark","component"),u("harunaScale","dpiLiveShowgirl","component"),u("harunaScale","dpiLiveShowgirl","component"),u("removeAds","removePromotions","component"),f("showBlockedAdsTip","removePromotions.showPlaceholder"),f("preserveEventBanner","removePromotions.preserveEventBanner"),u("touchVideoPlayerDoubleTapControl","doubleClickControl","component"),f("customStyleColor","settingsPanel.themeColor"),u("useDefaultPlayerMode","defaultPlayerMode","component"),f("applyPlayerModeOnPlay","defaultPlayerMode.applyOnPlay"),f("defaultPlayerMode","defaultPlayerMode.mode"),u("skipChargeList","skipChargeList","component"),u("comboLike","touchComboLike","component"),u("autoLightOff","playerAutoLight","component"),u("airborne","danmakuAirborne","component"),u("useBiliplusRedirect","biliplusRedirect","component"),u("biliplusRedirect","biliplusRedirect","component"),u("framePlayback","seekByFrames","component"),u("useCommentStyle","simplifyComments","component"),u("imageResolution","imageResolution","component"),f("imageResolutionScale","imageResolution.scale"),u("playerFocus","playerFocus","component"),f("playerFocusOffset","playerFocus.offset"),u("simplifyLiveroom","simplifyLiveroom","component"),f("simplifyLiveroomSettings","simplifyLiveroom",(e=>{const{options:o}=(0,l.getComponentSettings)("simplifyLiveroom");Object.assign(o,Object.fromEntries(Object.entries(e).map((([e,o])=>[`switch-${e}`,o]))))})),u("customNavbar","customNavbar","component"),v("customNavbar.items.darkMode"),f("favoritesListCurrentSelect","customNavbar.lastFavoriteFolder"),f("touchNavBar","customNavbar.touch"),f("customNavbarFill","customNavbar.fill"),f("customNavbarTransparent","customNavbar.transparent"),f("customNavbarShadow","customNavbar.shadow"),f("customNavbarBlur","customNavbar.blur"),f("customNavbarOrder","customNavbar.order",(e=>(Object.keys(e).forEach((o=>{o in y&&(e[y[o]]=e[o],delete e[o])})),delete e.mangaLink,e))),f("customNavbarHidden","customNavbar.hidden",(e=>([...e].forEach((o=>{o in y&&(e.push(y[o]),lodash.pull(e,o))})),lodash.pull(e,"mangaLink"),e))),f("customNavbarBoundsPadding","customNavbar.padding",(e=>parseFloat(e))),f("customNavbarGlobalFixed","customNavbar.globalFixed"),f("customNavbarSeasonLogo","customNavbar.seasonLogo"),f("customNavbarShowDeadVideos","customNavbar.showDeadVideos"),u("playerShadow","playerShadow","component"),u("narrowDanmaku","preserveDanmakuInput","component"),u("outerWatchlater","outerWatchlater","component"),u("videoScreenshot","videoScreenshot","component"),u("hideBangumiReviews","hideBangumiReviews","component"),f("filenameFormat","settingsPanel.filenameFormat"),f("batchFilenameFormat","settingsPanel.batchFilenameFormat"),u("sidebarOffset","sidebarOffset","component"),f("sidebarOffset","sidebarOffset.offset"),u("noLiveAutoplay","liveHomeMute","component"),u("foldComment","rememberVideoSpeed","component"),f("defaultVideoSpeed","rememberVideoSpeed.speed"),f("rememberVideoSpeedList","rememberVideoSpeed.individualRememberList"),f("rememberVideoSpeed","rememberVideoSpeed.individualRemember"),f("extendVideoSpeed","rememberVideoSpeed.extend"),f("extendVideoSpeedList","rememberVideoSpeed.extendList"),u("foldComment","foldComments","component"),u("autoDraw","liveAutoDraw","component"),u("keymap","keymap","component"),f("keymapPreset","keymap.preset"),f("keymapJumpSeconds","keymap.longJumpSeconds"),f("customKeyBindings","keymap.customKeyBindings"),u("doubleClickFullscreen","doubleClickFullscreen","component"),f("doubleClickFullscreenPreventSingleClick","doubleClickFullscreen.preventSingleClick"),f("scriptLoadingMode","settingsPanel.scriptLoadingMode",(e=>e.replace(/\(自动\)$/,""))),f("guiSettingsDockSide","settingsPanel.dockSide"),u("fullActivityContent","fullFeedsContent","component"),u("feedsFilter","feedsFilter","component"),f("feedsFilterPatterns","feedsFilter.patterns"),f("feedsSpecialFilterTypes","feedsFilter.types"),f("feedsFilterSideCards","feedsFilter.sideCards"),u("selectableColumnText","columnUnlock","component"),u("miniPlayerTouchMove","touchMiniPlayer","component"),u("hideBangumiSponsors","hideBangumiSponsors","component"),u("hideRecommendLive","hideRecommendedLive","component"),u("hideRelatedVideos","hideRelatedVideos","component"),u("urlParamsClean","urlParamsClean","component"),u("collapseLiveSideBar","collapseLiveSideBar","component"),f("foregroundColorMode","settingsPanel.textColor"),f("updateCdn","settingsPanel.cdnRoot"),f("downloadPackageEmitMode","settingsPanel.downloadPackageEmitMode",(e=>"分别下载"===e?"单独下载":e)),u("bvidConvert","bvidConvert","component"),u("fixedSidebars","fixedFeedsSidebars","component"),u("autoHideSideBar","autoHideSidebar","component"),u("livePip","livePip","component"),u("extendFeedsLive","extendFeedsLive","component"),u("playerOnTop","playerOnTop","component"),u("quickFavorite","quickFavorite","component"),f("quickFavoriteID","quickFavorite.favoriteFolderID"),u("disableFeedsDetails","disableFeedsDetails","component"),u("elegantScrollbar","elegantScrollbar","component"),u("danmakuSendBar","liveDanmakuSendbar","component"),u("showCoverBeforePlay","showCoverBeforePlay","component"),u("seoJump","seoRedirect","component"),u("copyFeedsLink","copyFeedsLink","component"),u("copyCommentLink","copyCommentsLink","component"),u("unfoldFeeds","unfoldFeeds","component"),u("feedsImageExporter","imageExporter","component"),u("columnImageExporter","imageExporter","component"),u("preferAvUrl","avUrl","component"),u("homeHidden","simplifyHome","component"),f("homeHiddenItems","simplifyHome",(e=>{const{options:o}=(0,l.getComponentSettings)("simplifyHome");e.forEach((e=>o[`switch-${e}`]=!0))})),u("alwaysShowDuration","alwaysShowDuration","component"),u("removeVideoPopup","removePlayerPopup","component"),u("removeGuidePopup","removePlayerPopup","component"),u("removeVotePopup","removePlayerPopup","component"),f("removeVideoPopup","removePlayerPopup.relatedVideos"),f("removeGuidePopup","removePlayerPopup.comboLikes"),f("removeVotePopup","removePlayerPopup.votes"),u("checkInCenter","checkInCenter","component"),u("fullscreenGiftBox","liveGiftBox","component"),u("autoPlayControl","legacyAutoPlay","component"),u("scrollOutPlayer","playerIntersectionActions","component"),f("scrollOutPlayerTriggerPlace","playerIntersectionActions.triggerLocation"),f("scrollOutPlayerAutoPause","playerIntersectionActions.pause"),f("scrollOutPlayerAutoLightOn","playerIntersectionActions.light"),u("disableDanmakuHighlights","disableSpecialDanmaku","component"),u("disableUpDanmakuStyle","disableSpecialDanmaku","component"),f("disableDanmakuHighlights","disableSpecialDanmaku.highlight"),f("disableUpDanmakuStyle","disableSpecialDanmaku.up"),u("viewCover","viewCover","component"),u("downloadVideo","downloadVideo","component"),v("downloadVideo.outputs.aria2"),v("downloadVideo.outputs.idm"),f("downloadVideoQuality","downloadVideo.basicConfig.quality"),f("downloadVideoFormat","downloadVideo.basicConfig.api",(o=>({flv:"video.flv",dash:e.downloadVideoDashCodec.startsWith("HEVC")?"video.dash.hevc":"video.dash.avc"}[o]))),f("downloadVideoDefaultDanmaku","downloadVideo.danmakuType"),f("downloadVideoDefaultSubtitle","downloadVideo.subtitleType"),f("aria2RpcOptionProfiles","downloadVideo.rpcProfiles"),u("downloadDanmaku","downloadDanmaku","component"),u("downloadSubtitle","downloadSubtitle","component"),u("downloadAudio","downloadAudio","component"),u("downloadLiveRecords","downloadLiveRecords","component"),u("medalHelper","badgeHelper","component"),f("defaultMedalID","badgeHelper.defaultMedalID"),f("autoMatchMedal","badgeHelper.autoMatchMedal"),g(),b()];let k=0;a.message=`导入中... (${k}/${h.length})`;let S=0,P=0;for(const e of h)try{await e(),S++}catch(e){console.log(e),P++}finally{k++,a.message=`导入中... (${k}/${h.length})`}a.message=`导入完成. 成功 ${S} 个, 失败 ${P} 个, 可在控制台查看详细日志.`}catch(e){a.dismiss(),(0,d.logError)(e)}})(e)}catch(o){e(o)}}})}))},commitHash:"346b9c0dfcd83db0d7c50bbb6c23ec2c94c423ff"}}(),i=i.component}()}));