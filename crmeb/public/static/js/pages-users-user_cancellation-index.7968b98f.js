(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-user_cancellation-index"],{"1de5":function(t,a,e){"use strict";t.exports=function(t,a){return a||(a={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),a.hash&&(t+=a.hash),/["'() \t\n]/.test(t)||a.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},"3c86":function(t,a,e){t.exports=e.p+"static/img/address.4539439e.png"},7733:function(t,a,e){"use strict";var n=e("8bae"),i=e.n(n);i.a},8007:function(t,a,e){"use strict";e.r(a);var n=e("e46c"),i=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);a["default"]=i.a},"8bae":function(t,a,e){var n=e("9911");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("ca5e45ee",n,!0,{sourceMap:!1,shadowMode:!1})},9911:function(t,a,e){var n=e("24fb"),i=e("1de5"),o=e("3c86");a=n(!1);var s=i(o);a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.agreement[data-v-4db383d0]{background-color:#fff}.agreement .content[data-v-4db383d0]{padding:%?10?% %?30?%;overflow-y:scroll;height:calc(100vh - %?242?%)}.top-msg[data-v-4db383d0]{display:flex;align-items:center;background-color:#fff;padding:%?40?% %?30?% %?40?% %?30?%}.top-msg .avatar[data-v-4db383d0]{width:%?76?%;height:%?76?%;margin-right:%?20?%}.top-msg .avatar img[data-v-4db383d0]{width:100%;height:100%;border-radius:50%}.footer[data-v-4db383d0]{text-align:center;z-index:99;width:100%;background-color:#fafafa;position:fixed;padding:%?36?% %?30?%;box-sizing:border-box;border-top:%?1?% solid #eee;bottom:%?0?%}.footer .trip[data-v-4db383d0]{color:#999;font-size:%?24?%;margin:%?24?% 0}.footer .cancellation[data-v-4db383d0]{height:45px;color:#fff;font-size:%?32?%;background:#e93323;border-radius:23px}.tipaddress[data-v-4db383d0]{position:fixed;left:13%;top:25%;width:%?560?%;height:%?614?%;background-color:#fff;border-radius:%?10?%;z-index:100;text-align:center}.tipaddress .top[data-v-4db383d0]{width:%?560?%;height:%?270?%;border-top-left-radius:%?10?%;border-top-right-radius:%?10?%;background-image:url('+s+");background-repeat:round;background-color:#e93323}.tipaddress .top .tipsphoto[data-v-4db383d0]{display:inline-block;width:%?200?%;height:%?200?%;margin-top:%?73?%}.tipaddress .bottom[data-v-4db383d0]{font-size:%?32?%;font-weight:400}.tipaddress .bottom .font1[data-v-4db383d0]{font-size:%?36?%;font-weight:600;color:#333;margin:%?32?% %?0?% %?22?%}.tipaddress .bottom .font2[data-v-4db383d0]{color:#666;margin-bottom:%?48?%}.tipaddress .bottom .btn[data-v-4db383d0]{display:flex;margin:0 %?20?%}.tipaddress .bottom .btn .btn-sty[data-v-4db383d0]{height:%?82?%;border-radius:%?42?%;line-height:%?82?%;padding:%?24?% %?78?%;margin:0 auto}.tipaddress .bottom .btn .cancellation-btn[data-v-4db383d0]{background-color:#f5f5f5;color:#333}.tipaddress .bottom .btn .cancel[data-v-4db383d0]{color:#fff;background:linear-gradient(90deg,#f67a38,#f11b09)}.mark[data-v-4db383d0]{position:fixed;top:0;left:0;bottom:0;right:0;background:rgba(0,0,0,.5);z-index:99}",""]),t.exports=a},"9fec":function(t,a,e){"use strict";e.r(a);var n=e("f58c"),i=e("8007");for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);e("7733");var s,r=e("f0c5"),d=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"4db383d0",null,!1,n["a"],s);a["default"]=d.exports},e46c:function(t,a,e){"use strict";var n=e("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(e("cf74")),o=e("cff9"),s=getApp(),r={mixins:[i.default],data:function(){return{isCancellation:!1,agreementData:""}},onLoad:function(){this.getAgreement()},methods:{getAgreement:function(){var t=this;(0,o.getUserAgreement)(5).then((function(a){t.agreementData=a.data}))},cancelUser:function(){var t=this;(0,o.cancelUser)().then((function(a){s.globalData.spid="",s.globalData.pid="",t.$store.commit("LOGOUT"),uni.reLaunch({url:"/pages/index/index"})})).catch((function(a){return t.$util.Tips({title:a})}))}}};a.default=r},f58c:function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return n}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"agreement",style:t.colorStyle},[t.agreementData.avatar?e("v-uni-view",{staticClass:"top-msg"},[e("v-uni-view",{staticClass:"avatar"},[e("img",{attrs:{src:t.agreementData.avatar,alt:""}})]),e("v-uni-view",{staticClass:"name"},[t._v(t._s(t.agreementData.name))])],1):t._e(),e("v-uni-view",{staticClass:"content",domProps:{innerHTML:t._s(t.agreementData.content)}}),e("v-uni-view",{staticClass:"footer"},[e("v-uni-view",{staticClass:"trip"},[t._v(t._s(t.$t("点击【立即注销】即代表您已经同意《用户注销协议》")))]),e("v-uni-view",{staticClass:"cancellation flex-aj-center",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.isCancellation=!0}}},[t._v(t._s(t.$t("立即注销")))])],1),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.isCancellation,expression:"isCancellation"}],staticClass:"mark"}),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.isCancellation,expression:"isCancellation"}],staticClass:"tipaddress"},[e("v-uni-view",{staticClass:"top"}),e("v-uni-view",{staticClass:"bottom"},[e("v-uni-view",{staticClass:"font1"},[t._v(t._s(t.$t("是否确认注销")))]),e("v-uni-view",{staticClass:"font2"},[t._v(t._s(t.$t("注销后无法恢复，请谨慎操作")))]),e("v-uni-view",{staticClass:"btn"},[e("v-uni-view",{staticClass:"cancellation-btn btn-sty flex-aj-center",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.cancelUser.apply(void 0,arguments)}}},[t._v(t._s(t.$t("注销")))]),e("v-uni-view",{staticClass:"cancel btn-sty flex-aj-center",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.isCancellation=!1}}},[t._v(t._s(t.$t("取消")))])],1)],1)],1)],1)},o=[]}}]);