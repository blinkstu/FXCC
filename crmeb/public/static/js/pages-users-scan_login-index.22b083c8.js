(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-scan_login-index"],{4358:function(n,t,a){"use strict";a.r(t);var e=a("b2d0"),i=a("57ba");for(var o in i)"default"!==o&&function(n){a.d(t,n,(function(){return i[n]}))}(o);a("5ff5");var c,s=a("f0c5"),d=Object(s["a"])(i["default"],e["b"],e["c"],!1,null,"522a6d7a",null,!1,e["a"],c);t["default"]=d.exports},"57ba":function(n,t,a){"use strict";a.r(t);var e=a("5cec"),i=a.n(e);for(var o in e)"default"!==o&&function(n){a.d(t,n,(function(){return e[n]}))}(o);t["default"]=i.a},"5cec":function(n,t,a){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=a("5367"),i=a("bc1d"),o={name:"scan_login",data:function(){return{code:"",userInfo:{}}},onLoad:function(n){this.code=n.key,this.codeStauts(),this.getUserInfo()},methods:{codeStauts:function(){var n=this;(0,i.codeStauts)({code:this.code}).then((function(n){})).catch((function(t){n.openModel(t)}))},scanLogin:function(){var n=this;this.code?(0,i.kefuScanLogin)({code:this.code}).then((function(n){uni.showToast({title:n.msg,icon:"success"}),setTimeout((function(n){WeixinJSBridge.call("closeWindow")}),2e3)})).catch((function(t){n.openModel(t)})):this.openModel(this.$t("没有登录的code，请重新扫码"))},openModel:function(n){uni.showModal({title:this.$t("提示"),content:n,success:function(n){n.confirm?WeixinJSBridge.call("closeWindow"):n.cancel&&this.$t("用户点击取消")}})},closePage:function(){WeixinJSBridge.call("closeWindow")},getUserInfo:function(){var n=this;(0,e.getUserInfo)().then((function(t){n.userInfo=t.data}))}}};t.default=o}).call(this,a("5a52")["default"])},"5ff5":function(n,t,a){"use strict";var e=a("9a86"),i=a.n(e);i.a},"9a86":function(n,t,a){var e=a("b1ed");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);var i=a("4f06").default;i("44346ea0",e,!0,{sourceMap:!1,shadowMode:!1})},b1ed:function(n,t,a){var e=a("24fb");t=e(!1),t.push([n.i,"uni-page-body[data-v-522a6d7a]{height:100%;background:#fff}.scan_login .head[data-v-522a6d7a]{display:flex;flex-direction:column;align-items:center;padding-top:%?96?%}.scan_login .head uni-image[data-v-522a6d7a]{width:%?178?%;height:%?178?%;border-radius:50%}.scan_login .head .big[data-v-522a6d7a]{margin:%?20?% 0 %?10?%;font-size:%?32?%;color:#282828}.scan_login .head .small[data-v-522a6d7a]{color:#9f9f9f;font-size:%?28?%}.scan_login .head .btn[data-v-522a6d7a]{display:flex;align-items:center;justify-content:center;width:%?594?%;height:%?86?%;margin:%?28?% auto 0;font-size:%?30?%;color:#fff;border-radius:%?43?%;background:linear-gradient(90deg,#3875ea,#1890fc)}.scan_login .head .btn.out[data-v-522a6d7a]{border:1px solid #3875ea;background:none;color:#3875ea}.scan_login .head .btn.sub_btn[data-v-522a6d7a]{margin-top:%?96?%}body.?%PAGE?%[data-v-522a6d7a]{background:#fff}",""]),n.exports=t},b2d0:function(n,t,a){"use strict";var e;a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return e}));var i=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("v-uni-view",{staticClass:"scan_login"},[a("v-uni-view",{staticClass:"head"},[a("v-uni-image",{attrs:{src:n.userInfo.avatar,mode:""}}),a("v-uni-view",{staticClass:"big"},[n._v(n._s(n.userInfo.nickname))]),a("v-uni-view",{staticClass:"small"},[n._v(n._s(n.$t("点击授权登录您的客服工作台")))]),a("v-uni-view",{staticClass:"sub_btn btn",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.scanLogin.apply(void 0,arguments)}}},[n._v(n._s(n.$t("授权登录")))]),a("v-uni-view",{staticClass:"out btn",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.closePage.apply(void 0,arguments)}}},[n._v(n._s(n.$t("取消")))])],1)],1)},o=[]}}]);