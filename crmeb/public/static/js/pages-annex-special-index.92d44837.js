(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-annex-special-index"],{"009f":function(t,e,a){var n=a("6099");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("eacdc760",n,!0,{sourceMap:!1,shadowMode:!1})},"0dab":function(t,e,a){"use strict";a.r(e);var n=a("4737"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"2c78":function(t,e,a){"use strict";a("99af"),a("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.goShopDetail=i,e.goPage=o;var n=getApp();function i(t,e){return new Promise((function(a){t.activity&&"1"===t.activity.type?uni.navigateTo({url:"/pages/activity/goods_seckill_details/index?id=".concat(t.activity.id,"&time=").concat(t.activity.time,"&status=1")}):t.activity&&"2"===t.activity.type?uni.navigateTo({url:"/pages/activity/goods_bargain_details/index?id=".concat(t.activity.id,"&bargain=").concat(e)}):t.activity&&"3"===t.activity.type?uni.navigateTo({url:"/pages/activity/goods_combination_details/index?id=".concat(t.activity.id)}):a(t)}))}function o(){return new Promise((function(t){if(0!=n.globalData.isIframe)return!1;t(!0)}))}},"373c":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.pageShow?a("v-uni-view",{staticClass:"page",class:2==t.bgTabVal?"fullsize noRepeat":1==t.bgTabVal?"repeat ysize":"noRepeat ysize",style:"background-color:"+t.bgColor+";background-image: url("+t.bgPic+");min-height:"+t.windowHeight+"px;"},[a("v-uni-view",{style:{marginTop:t.sortMpTop+"px"}},[t._l(t.styleConfig,(function(e,n){return a("v-uni-view",{key:n},[a(e.name,{tag:"component",attrs:{index:n,dataConfig:e,tempArr:t.tempArr,iSshowH:t.iSshowH},on:{changeBarg:function(e){arguments[0]=e=t.$handleEvent(e),t.changeBarg.apply(void 0,arguments)},changeTab:function(e){arguments[0]=e=t.$handleEvent(e),t.changeTab.apply(void 0,arguments)},detail:function(e){arguments[0]=e=t.$handleEvent(e),t.goDetail.apply(void 0,arguments)}}})],1)})),t.tempArr.length&&"promotionList"==t.styleConfig[t.styleConfig.length-1].name?a("v-uni-view",{staticClass:"loadingicon acea-row row-center-wrapper"},[a("v-uni-text",{staticClass:"loading iconfont icon-jiazai",attrs:{hidden:0==t.loading}}),t._v(t._s(t.loadTitle))],1):t._e(),t.newData.menuList&&t.newData.status.status?a("v-uni-view",{staticClass:"foot"},[a("v-uni-view",{staticClass:"page-footer",style:{"background-color":t.newData.bgColor.color[0].item},attrs:{id:"target"}},t._l(t.newData.menuList,(function(e,n){return a("v-uni-view",{key:n,staticClass:"foot-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goRouter(e)}}},[e.link==t.activeRouter?[a("v-uni-image",{attrs:{src:e.imgList[0]}}),a("v-uni-view",{staticClass:"txt",style:{color:t.newData.activeTxtColor.color[0].item}},[t._v(t._s(e.name))])]:[a("v-uni-image",{attrs:{src:e.imgList[1]}}),a("v-uni-view",{staticClass:"txt",style:{color:t.newData.txtColor.color[0].item}},[t._v(t._s(e.name))])],"/pages/order_addcart/order_addcart"===e.link&&t.$store.state.indexData.cartNum&&t.$store.state.indexData.cartNum>0?a("div",{staticClass:"count-num"},[t._v(t._s(t.$store.state.indexData.cartNum))]):t._e()],2)})),1)],1):t._e()],2)],1):t._e()},o=[]},4737:function(t,e,a){"use strict";var n=a("4ea4");a("a9e3"),a("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,o=n(a("ade3")),r=n(a("5530")),s=a("26cb"),c=a("a9a5"),u=a("451d"),d=(i={name:"pageFooter",props:{status:{type:Number|String,default:1},countNum:{type:Number|String,default:0}},data:function(){return{newData:void 0,footHeight:0,isShow:!1}},computed:(0,r.default)({},(0,s.mapState)({configData:function(t){return t.app.pageFooter}}))},(0,o.default)(i,"computed",(0,s.mapGetters)(["isLogin","cartNum","activityTab"])),(0,o.default)(i,"watch",{activityTab:{handler:function(t,e){},deep:!0},configData:{handler:function(t,e){var a=this,n=uni.createSelectorQuery().in(this);this.newData=t,this.$nextTick((function(){n.select("#target").boundingClientRect((function(t){uni.$emit("footHeight",t.height),t&&(a.footHeight=t.height+50)})).exec()}))},deep:!0}}),(0,o.default)(i,"created",(function(){var t=this,e=getCurrentPages(),a=e[e.length-1].route;this.$store.commit("ACTIVITYTAB","/"+a),uni.$on("uploadFooter",(function(){var e=getCurrentPages(),a=e[e.length-1].route;t.$store.commit("ACTIVITYTAB","/"+a)}))})),(0,o.default)(i,"onShow",(function(){})),(0,o.default)(i,"mounted",(function(){var t=this;(0,c.getNavigation)().then((function(e){uni.setStorageSync("pageFoot",e.data),t.$store.commit("FOOT_UPLOAD",e.data),t.newData=e.data}));uni.hideTabBar(),this.newData=this.$store.state.app.pageFooter,this.isLogin&&this.getCartNum()})),(0,o.default)(i,"onHide",(function(){uni.$off(["uploadFooter"])})),(0,o.default)(i,"methods",{goRouter:function(t){var e=getCurrentPages(),a=e[e.length-1].route;this.$store.commit("ACTIVITYTAB",t.link),t.link!="/"+a&&uni.switchTab({url:t.link,fail:function(e){uni.redirectTo({url:t.link})}})},getCartNum:function(){var t=this,e=this;(0,u.getCartCounts)().then((function(a){e.cartCount=a.data.count,t.$store.commit("indexData/setCartNum",a.data.count>99?"...":a.data.count)}))}}),i);e.default=d},"480b":function(t,e,a){"use strict";var n=a("ecd2"),i=a.n(n);i.a},6099:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.page-footer[data-v-8ff6933a]{position:fixed;left:0;bottom:0;z-index:999;display:flex;align-items:center;justify-content:space-around;flex-wrap:nowrap;width:100%;height:%?98?%;height:calc(98rpx+ constant(safe-area-inset-bottom));height:calc(%?98?% + env(safe-area-inset-bottom));box-sizing:border-box;border-top:solid %?1?% #f3f3f3;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);background-color:#fff;box-shadow:0 0 %?17?% %?1?% hsla(0,0%,80.8%,.32);padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.page-footer .foot-item[data-v-8ff6933a]{display:flex;width:-webkit-max-content;width:max-content;align-items:center;justify-content:center;flex-direction:column;position:relative;width:100%;height:100%}.page-footer .foot-item .count-num[data-v-8ff6933a]{position:absolute;display:flex;justify-content:center;align-items:center;width:%?40?%;height:%?40?%;top:%?0?%;right:calc(50% - %?55?%);color:#fff;font-size:%?20?%;background-color:#fd502f;border-radius:50%;padding:%?4?%}.page-footer .foot-item .active[data-v-8ff6933a]{-webkit-animation:mymove-data-v-8ff6933a 1s 1;animation:mymove-data-v-8ff6933a 1s 1}@-webkit-keyframes mymove-data-v-8ff6933a{0%{-webkit-transform:scale(1);transform:scale(1)\n    /*开始为原始大小*/}10%{-webkit-transform:scale(.8);transform:scale(.8)}30%{-webkit-transform:scale(1.1);transform:scale(1.1)\n    /*放大1.1倍*/}50%{-webkit-transform:scale(.9);transform:scale(.9)\n    /*放大1.1倍*/}70%{-webkit-transform:scale(1.05);transform:scale(1.05)}90%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes mymove-data-v-8ff6933a{0%{-webkit-transform:scale(1);transform:scale(1)\n    /*开始为原始大小*/}10%{-webkit-transform:scale(.8);transform:scale(.8)}30%{-webkit-transform:scale(1.1);transform:scale(1.1)\n    /*放大1.1倍*/}50%{-webkit-transform:scale(.9);transform:scale(.9)\n    /*放大1.1倍*/}70%{-webkit-transform:scale(1.05);transform:scale(1.05)}90%{-webkit-transform:scale(1);transform:scale(1)}}.page-footer .foot-item uni-image[data-v-8ff6933a]{height:%?50?%;width:%?50?%;text-align:center;margin:0 auto}.page-footer .foot-item .txt[data-v-8ff6933a]{font-size:%?24?%}',""]),t.exports=e},"642a":function(t,e,a){"use strict";var n=a("009f"),i=a.n(n);i.a},"6f23":function(t,e,a){"use strict";a.r(e);var n=a("d761"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},d761:function(t,e,a){"use strict";var n=a("4ea4");a("99af"),a("4160"),a("d81d"),a("fb6a"),a("4e82"),a("a434"),a("b64b"),a("4d63"),a("ac1f"),a("25f0"),a("466d"),a("841c"),a("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,o=n(a("ade3")),r=n(a("5530")),s=n(a("4928")),c=a("d322"),u=a("a9a5"),d=n(a("63b5")),l=a("26cb"),f=a("1579"),g=a("2c78"),p=a("666f"),m=n(a("d9b2")),h=(getApp(),i={computed:(0,l.mapGetters)(["isLogin","uid"]),components:(0,r.default)({pageFooter:m.default,couponWindow:s.default},d.default)},(0,o.default)(i,"computed",(0,l.mapGetters)(["isLogin"])),(0,o.default)(i,"data",(function(){return{styleConfig:[],tempArr:[],goodType:3,loading:!1,loadend:!1,loadTitle:this.$t("加载更多"),page:1,limit:this.$config.LIMIT,iSshowH:!1,numConfig:0,code:"",isCouponShow:!1,couponObj:{},couponObjs:{},shareInfo:{},footConfig:{},pageId:"",sortMpTop:0,newData:{},activeRouter:"",bgColor:"",bgPic:"",bgTabVal:"",pageShow:!0,windowHeight:0}})),(0,o.default)(i,"onLoad",(function(t){var e=this,a=this;this.$nextTick((function(){uni.getSystemInfo({success:function(t){a.windowHeight=t.windowHeight}})}));t.state,t.scope;this.pageId=t.id,uni.setNavigationBarTitle({title:this.$t("专题栏")}),uni.getLocation({type:"wgs84",success:function(t){try{uni.setStorageSync("user_latitude",t.latitude),uni.setStorageSync("user_longitude",t.longitude)}catch(e){}}}),this.diyData(),this.getIndexData(),this.setOpenShare(),(0,u.getShare)().then((function(t){e.shareInfo=t.data}));var n=getCurrentPages(),i=n[n.length-1].route;this.activeRouter="/"+i+"?id="+this.pageId})),(0,o.default)(i,"watch",{isLogin:{deep:!0,handler:function(t,e){var a=(new Date).toLocaleDateString();if(t){try{var n=uni.getStorageSync("oldDate")||""}catch(i){}n!=a&&this.getCoupon()}}}}),(0,o.default)(i,"mounted",(function(){var t=(new Date).toLocaleDateString();if(this.isLogin){try{var e=uni.getStorageSync("oldDate")||""}catch(n){}e!=t&&this.getCoupon();var a=uni.getStorageSync("oldUser")||0;a||this.getCouponOnce()}})),(0,o.default)(i,"mounted",(function(){})),(0,o.default)(i,"methods",{goRouter:function(t){var e=getCurrentPages(),a=e[e.length-1].$page.fullPath;t.link!=a&&uni.switchTab({url:t.link,fail:function(e){uni.redirectTo({url:t.link})}})},getCouponOnce:function(){var t=this;(0,c.getCouponNewUser)().then((function(e){t.couponObjs=e.data}))},couponCloses:function(){this.couponObjs.show=!1;try{uni.setStorageSync("oldUser",1)}catch(t){}},getCoupon:function(){var t=this;(0,c.getCouponV2)().then((function(e){t.couponObj=e.data,e.data.list.length>0&&(t.isCouponShow=!0)}))},couponClose:function(){this.isCouponShow=!1;try{uni.setStorageSync("oldDate",(new Date).toLocaleDateString())}catch(t){}},onLoadFun:function(){},getQueryString:function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),a=new RegExp("(^|/)"+t+"/([^/]*)(/|$)","i"),n=window.location.search.substr(1).match(e),i=window.location.pathname.substr(1).match(a);return null!=n?unescape(n[2]):null!=i?unescape(i[2]):null},objToArr:function(t){if(t){var e=Object.keys(t);e.sort((function(t,e){return t-e}));var a=e.map((function(e){return t[e]}));return a}},diyData:function(){var t=this,e=this;(0,c.getDiy)(this.pageId).then((function(a){var n=a.data;if(0==a.data.length)return t.$util.Tips({title:t.$t("暂无数据")},{tab:3});n.is_bg_color&&(t.bgColor=n.color_picker),n.is_bg_pic&&(t.bgPic=n.bg_pic,t.bgTabVal=n.bg_tab_val),t.pageShow=n.is_show,uni.setNavigationBarTitle({title:a.data.title});var i=[],o=e.objToArr(a.data.value);o.forEach((function(a,n,o){"pageFoot"==a.name&&(uni.setStorageSync("pageFoot",a),e.$store.commit("FOOT_UPLOAD",a),o.splice(n,1),t.newData=a),"promotionList"==a.name&&(e.numConfig=a.numConfig.val,e.getGroomList()),i=o})),e.styleConfig=i}))},getIndexData:function(){},changeBarg:function(t){this.isLogin?uni.navigateTo({url:"/pages/activity/goods_bargain_details/index?id=".concat(t.id,"&bargain=").concat(this.uid)}):(0,p.toLogin)()},changeTab:function(t){this.goodType=t,this.tempArr=[],this.page=1,this.loadend=!1;var e=!0;this.getGroomList(e)},getGroomList:function(t){var e=this,a=this,n=a.goodType;return!a.loadend&&(!a.loading&&(t&&a.$set(a,"iSshowH",!0),void(0,f.getGroomList)(n,{page:a.page,limit:a.limit}).then((function(t){var n=t.data;a.$set(a,"iSshowH",!1);var i=Math.ceil(e.numConfig/e.limit),o=n.list,r=o.length<a.limit||a.page>=i,s=a.$util.SplitArray(o,a.tempArr);a.$set(a,"tempArr",s.slice(0,e.numConfig)),a.loadend=r,a.loadTitle=r?a.$t("没有更多内容啦~"):a.$t("加载更多"),a.page=a.page+1,a.loading=!1})).catch((function(t){a.loading=!1,a.loadTitle=a.$t("加载更多")}))))},goDetail:function(t){(0,g.goShopDetail)(t,this.uid).then((function(e){uni.navigateTo({url:"/pages/goods_details/index?id=".concat(t.id)})}))},setOpenShare:function(){var t=this;t.$wechat.isWeixin()&&(0,u.getShare)().then((function(e){var a=e.data.data,n={desc:a.synopsis,title:a.title,link:location.href,imgUrl:a.img};t.$wechat.wechatEvevt(["updateAppMessageShareData","updateTimelineShareData"],n)}))}}),(0,o.default)(i,"onReachBottom",(function(){this.getGroomList()})),(0,o.default)(i,"onPageScroll",(function(t){uni.$emit("scroll")})),i);e.default=h},d9b2:function(t,e,a){"use strict";a.r(e);var n=a("e176"),i=a("0dab");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("642a");var r,s=a("f0c5"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"8ff6933a",null,!1,n["a"],r);e["default"]=c.exports},e176:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.newData?a("v-uni-view",[a("v-uni-view",{staticClass:"page-footer",attrs:{id:"target"}},t._l(t.newData.menuList,(function(e,n){return a("v-uni-view",{key:n,staticClass:"foot-item",style:{"background-color":t.newData.bgColor.color[0].item},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goRouter(e)}}},[e.link==t.activityTab?[a("v-uni-image",{staticClass:"active",attrs:{src:e.imgList[0]}}),a("v-uni-view",{staticClass:"txt",style:{color:t.newData.activeTxtColor.color[0].item}},[t._v(t._s(t.$t(e.name)))])]:[a("v-uni-image",{attrs:{src:e.imgList[1]}}),a("v-uni-view",{staticClass:"txt",style:{color:t.newData.txtColor.color[0].item}},[t._v(t._s(t.$t(e.name)))])],"/pages/order_addcart/order_addcart"===e.link&&t.cartNum>0?a("div",{staticClass:"count-num"},[t._v(t._s(t.cartNum>99?"99+":t.cartNum))]):t._e()],2)})),1)],1):t._e()},o=[]},e21a:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.page[data-v-581a9d14]{padding-bottom:50px}.ysize[data-v-581a9d14]{background-size:100%}.fullsize[data-v-581a9d14]{background-size:100% 100%}.repeat[data-v-581a9d14]{background-repeat:repeat}.noRepeat[data-v-581a9d14]{background-repeat:no-repeat}.page-footer[data-v-581a9d14]{position:fixed;bottom:0;z-index:30;display:flex;align-items:center;justify-content:space-around;width:100%;height:calc(98rpx+ constant(safe-area-inset-bottom));height:calc(%?98?% + env(safe-area-inset-bottom));box-sizing:border-box;border-top:solid %?1?% #f3f3f3;background-color:#fff;box-shadow:0 0 %?17?% %?1?% hsla(0,0%,80.8%,.32);padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.page-footer .foot-item[data-v-581a9d14]{display:flex;width:-webkit-max-content;width:max-content;align-items:center;justify-content:center;flex-direction:column;position:relative}.page-footer .foot-item .count-num[data-v-581a9d14]{position:absolute;display:flex;justify-content:center;align-items:center;width:%?40?%;height:%?40?%;top:%?0?%;right:%?-15?%;color:#fff;font-size:%?20?%;background-color:#fd502f;border-radius:50%;padding:%?4?%}.page-footer .foot-item uni-image[data-v-581a9d14]{height:%?50?%;width:%?50?%;text-align:center;margin:0 auto}.page-footer .foot-item .txt[data-v-581a9d14]{font-size:%?24?%}',""]),t.exports=e},e98a:function(t,e,a){"use strict";a.r(e);var n=a("373c"),i=a("6f23");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("480b");var r,s=a("f0c5"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"581a9d14",null,!1,n["a"],r);e["default"]=c.exports},ecd2:function(t,e,a){var n=a("e21a");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("4dac9b68",n,!0,{sourceMap:!1,shadowMode:!1})}}]);