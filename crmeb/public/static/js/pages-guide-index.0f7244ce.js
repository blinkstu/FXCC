(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-guide-index"],{"26b7":function(t,e,a){var n=a("9b99");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("7d6f40b5",n,!0,{sourceMap:!1,shadowMode:!1})},"32d8":function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("b675")),u=(n(a("c6e1")),a("a656")),o={components:{guide:i.default},data:function(){return{guidePages:!1,advData:[]}},onShow:function(){this.loadExecution()},methods:{loadExecution:function(){var t=this,e=uni.getStorageSync("guideDate")||"",a=(new Date).toLocaleDateString();e!==a?(0,u.getOpenAdv)().then((function(e){0==e.data.status||0==e.data.value.length?uni.switchTab({url:"/pages/index/index"}):e.data.status&&(e.data.value.length||e.data.video_link)&&(t.advData=e.data,uni.setStorageSync("guideDate",(new Date).toLocaleDateString()),t.guidePages=!0)})).catch((function(t){uni.switchTab({url:"/pages/index/index"})})):uni.switchTab({url:"/pages/index/index"})}},onHide:function(){this.guidePages=!1}};e.default=o},"374a":function(t,e,a){"use strict";a("c975"),a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{autoplay:!1,duration:500,jumpover:this.$t("跳过"),experience:this.$t("立即体验"),timecount:void 0,times:0}},props:{advData:{type:Object,default:function(){}},closeType:{type:Number,default:1}},mounted:function(){this.timer()},onHide:function(){clearInterval(this.timecount)},methods:{timer:function(){var t=this;this.times=this.advData.time;var e=this.advData.time||5;this.timecount=setInterval((function(){e--,t.times=e,e<=0&&(clearInterval(t.timecount),t.launchFlag())}),1e3)},launchFlag:function(){clearInterval(this.timecount),uni.switchTab({url:"/pages/index/index"})},jump:function(t){t&&(clearInterval(this.timecount),-1!=t.indexOf("http")?uni.navigateTo({url:"/pages/annex/web_view/index?url=".concat(t)}):uni.reLaunch({url:t,fail:function(){uni.switchTab({url:t})}}))}}};e.default=n},"42b0":function(t,e,a){"use strict";a.r(e);var n=a("6b42"),i=a("455b");for(var u in i)"default"!==u&&function(t){a.d(e,t,(function(){return i[t]}))}(u);a("d778");var o,c=a("f0c5"),r=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"5e8c8614",null,!1,n["a"],o);e["default"]=r.exports},"455b":function(t,e,a){"use strict";a.r(e);var n=a("32d8"),i=a.n(n);for(var u in n)"default"!==u&&function(t){a.d(e,t,(function(){return n[t]}))}(u);e["default"]=i.a},"6b42":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return u})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"main"},[t.guidePages?a("guide",{attrs:{advData:t.advData,time:t.advData.time}}):t._e()],1)},u=[]},"84ec":function(t,e,a){"use strict";a.r(e);var n=a("374a"),i=a.n(n);for(var u in n)"default"!==u&&function(t){a.d(e,t,(function(){return n[t]}))}(u);e["default"]=i.a},8802:function(t,e,a){"use strict";var n=a("26b7"),i=a.n(n);i.a},"8cd8":function(t,e,a){var n=a("daeb");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("3d441f1a",n,!0,{sourceMap:!1,shadowMode:!1})},"9b99":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-c3b7b4e0],\n.content[data-v-c3b7b4e0]{width:100%;height:100%;background-size:100% auto;padding:0}.swiper[data-v-c3b7b4e0]{width:100%;height:100vh;background:#fff}.swiper-item[data-v-c3b7b4e0]{width:100%;height:100%;text-align:center;position:relative;display:flex;\n  /* justify-content: center; */align-items:flex-end;flex-direction:column-reverse}.swiper-item-img[data-v-c3b7b4e0]{width:100%;height:100vh;margin:0 auto}.swiper-item-img uni-image[data-v-c3b7b4e0]{width:100%;height:100%}.jump-over[data-v-c3b7b4e0]{position:absolute;height:%?45?%;line-height:%?45?%;padding:0 %?15?%;border-radius:%?30?%;font-size:%?24?%;color:#b09e9a;border:1px solid #b09e9a;z-index:999}.jump-over[data-v-c3b7b4e0]{right:%?30?%;top:%?80?%}.video-box[data-v-c3b7b4e0]{width:100vw;height:100vh}.video-box .vid[data-v-c3b7b4e0]{width:100%;height:100%}body.?%PAGE?%[data-v-c3b7b4e0]{background-size:100% auto}',""]),t.exports=e},b675:function(t,e,a){"use strict";a.r(e);var n=a("f8d1"),i=a("84ec");for(var u in i)"default"!==u&&function(t){a.d(e,t,(function(){return i[t]}))}(u);a("8802");var o,c=a("f0c5"),r=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"c3b7b4e0",null,!1,n["a"],o);e["default"]=r.exports},d778:function(t,e,a){"use strict";var n=a("8cd8"),i=a.n(n);i.a},daeb:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,"uni-page-body[data-v-5e8c8614],\n.main[data-v-5e8c8614]{width:100%;height:100%}",""]),t.exports=e},f8d1:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return u})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"content"},["pic"==t.advData.type&&t.advData.value.length?a("v-uni-swiper",{staticClass:"swiper",attrs:{autoplay:t.autoplay,"indicator-dots":"true","indicator-color":"rgba(255,255,255,0.6)",duration:t.duration}},t._l(t.advData.value,(function(e,n){return a("v-uni-swiper-item",{key:n,on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.jump(e.link)}}},[a("v-uni-view",{staticClass:"swiper-item"},[a("v-uni-view",{staticClass:"swiper-item-img"},[a("v-uni-image",{attrs:{src:e.img,mode:"scaleToFill"}})],1)],1)],1)})),1):"video"==t.advData.type&&t.advData.video_link?a("v-uni-view",{staticClass:"video-box"},[a("v-uni-video",{staticClass:"vid",attrs:{src:t.advData.video_link,autoplay:!0,loop:!0,muted:!0,controls:!1}})],1):t._e(),a("v-uni-view",{staticClass:"jump-over",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.launchFlag()}}},[t._v(t._s(t.$t("跳过"))),1==t.closeType?a("v-uni-text",[t._v(t._s(t.times))]):t._e()],1)],1)},u=[]}}]);