(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-visit_list-index"],{"0268":function(t,e,i){"use strict";i.r(e);var n=i("0a53"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},"0a53":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i("26cb"),a=n(i("a672")),c=i("d458"),s={name:"Home",props:{},mixins:[a.default],data:function(){return{top:"545",imgHost:c.HTTP_REQUEST_URL}},computed:(0,o.mapGetters)(["homeActive"]),methods:{setTouchMove:function(t){var e=this;t.touches[0].clientY<545&&t.touches[0].clientY>66&&(e.top=t.touches[0].clientY)},open:function(){this.homeActive?this.$store.commit("CLOSE_HOME"):this.$store.commit("OPEN_HOME")}},created:function(){},beforeDestroy:function(){this.$store.commit("CLOSE_HOME")}};e.default=s},"1df3":function(t,e,i){"use strict";i("99af"),i("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.goShopDetail=o,e.goPage=a;var n=getApp();function o(t,e){return new Promise((function(i){t.activity&&"1"===t.activity.type?uni.navigateTo({url:"/pages/activity/goods_seckill_details/index?id=".concat(t.activity.id,"&time=").concat(t.activity.time,"&status=1")}):t.activity&&"2"===t.activity.type?uni.navigateTo({url:"/pages/activity/goods_bargain_details/index?id=".concat(t.activity.id,"&bargain=").concat(e)}):t.activity&&"3"===t.activity.type?uni.navigateTo({url:"/pages/activity/goods_combination_details/index?id=".concat(t.activity.id)}):i(t)}))}function a(){return new Promise((function(t){if(0!=n.globalData.isIframe)return!1;t(!0)}))}},"243f":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{style:t.colorStyle},[i("v-uni-view",{staticStyle:{"touch-action":"none"}},[i("v-uni-view",{staticClass:"home",staticStyle:{position:"fixed"},style:{top:t.top+"px"},attrs:{id:"right-nav"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.setTouchMove.apply(void 0,arguments)}}},[t.homeActive?i("v-uni-view",{staticClass:"homeCon bg-color",class:!0===t.homeActive?"on":""},[i("v-uni-navigator",{staticClass:"iconfont icon-shouye-xianxing",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/index/index"}}),i("v-uni-navigator",{staticClass:"iconfont icon-caigou-xianxing",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/order_addcart/order_addcart"}}),i("v-uni-navigator",{staticClass:"iconfont icon-yonghu1",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/user/index"}})],1):t._e(),i("v-uni-view",{staticClass:"pictrueBox",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{staticClass:"image",attrs:{src:!0===t.homeActive?t.imgHost+"/statics/images/close.gif":t.imgHost+"/statics/images/open.gif"}})],1)],1)],1)],1)],1)},a=[]},2877:function(t,e,i){"use strict";i.r(e);var n=i("243f"),o=i("0268");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("ac34");var c,s=i("f0c5"),r=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"5c721f6d",null,!1,n["a"],c);e["default"]=r.exports},"2ba9":function(t,e,i){"use strict";var n=i("cb65"),o=i.n(n);o.a},"400d":function(t,e,i){var n=i("bbac");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("2134076a",n,!0,{sourceMap:!1,shadowMode:!1})},"4e12":function(t,e,i){"use strict";i.r(e);var n=i("8d37"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},5247:function(t,e,i){var n=i("9af2");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("05ebbfc9",n,!0,{sourceMap:!1,shadowMode:!1})},5941:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={easyLoadimage:i("d0c5").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"recommend",style:t.colorStyle},[i("v-uni-view",{staticClass:"title acea-row row-center-wrapper"},[i("v-uni-text",{staticClass:"iconfont icon-zhuangshixian"}),i("v-uni-text",{staticClass:"name"},[t._v(t._s(t.$t("热门推荐")))]),i("v-uni-text",{staticClass:"iconfont icon-zhuangshixian lefticon"})],1),i("v-uni-view",{staticClass:"recommendList acea-row row-between-wrapper"},t._l(t.hostProduct,(function(e,n){return i("v-uni-view",{key:n,staticClass:"item",attrs:{"hover-class":"none"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goDetail(e)}}},[i("v-uni-view",{staticClass:"pictrue"},[i("easy-loadimage",{attrs:{mode:"widthFix","image-src":e.image}}),e.activity&&"1"===e.activity.type?i("span",{staticClass:"pictrue_log_big pictrue_log_class"},[t._v(t._s(t.$t("秒杀")))]):t._e(),e.activity&&"2"===e.activity.type?i("span",{staticClass:"pictrue_log_big pictrue_log_class"},[t._v(t._s(t.$t("砍价")))]):t._e(),e.activity&&"3"===e.activity.type?i("span",{staticClass:"pictrue_log_big pictrue_log_class"},[t._v(t._s(t.$t("拼团")))]):t._e()],1),i("v-uni-view",{staticClass:"name line1"},[t._v(t._s(e.store_name))]),i("v-uni-view",{staticClass:"money font-color"},[t._v(t._s(t.$t("￥"))),i("v-uni-text",{staticClass:"num"},[t._v(t._s(e.price))])],1)],1)})),1)],1)},a=[]},"62c7":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.getProductDetail=a,e.getProductCode=c,e.collectAdd=s,e.collectDel=r,e.postCartAdd=u,e.getCategoryList=d,e.getProductslist=l,e.getProductHot=f,e.collectAll=v,e.getGroomList=h,e.getCollectUserList=p,e.getReplyList=g,e.getReplyConfig=m,e.getSearchKeyword=b,e.storeListApi=_,e.storeDiscountsList=w,e.postCartNum=y,e.create=x,e.getAgentAgreement=k,e.registerVerify=C,e.getCodeApi=L,e.getGoodsDetails=A,e.getAttr=S,e.getHomeProducts=$,e.getPresellProductDetail=T,e.getVisitList=E,e.deleteVisitList=P;var o=n(i("b2ca"));function a(t){return o.default.get("product/detail/"+t,{},{noAuth:!0})}function c(t){return o.default.get("product/code/"+t,{})}function s(t,e){return o.default.post("collect/add",{id:t,product:void 0===e?"product":e})}function r(t,e){return o.default.post("collect/del",{id:t,category:void 0===e?"product":e})}function u(t){return o.default.post("cart/add",t)}function d(){return o.default.get("category",{},{noAuth:!0})}function l(t){return o.default.get("products",t,{noAuth:!0})}function f(t,e){return o.default.get("product/hot",{page:void 0===t?1:t,limit:void 0===e?4:e},{noAuth:!0})}function v(t,e){return o.default.post("collect/all",{id:t,category:void 0===e?"product":e})}function h(t,e){return o.default.get("groom/list/"+t,e,{noAuth:!0})}function p(t){return o.default.get("collect/user",t)}function g(t,e){return o.default.get("reply/list/"+t,e)}function m(t){return o.default.get("reply/config/"+t)}function b(){return o.default.get("search/keyword",{},{noAuth:!0})}function _(t){return o.default.get("store_list",t)}function w(t){return o.default.get("store_discounts/list/"+t,{},{noAuth:!0})}function y(t){return o.default.post("v2/set_cart_num",t)}function x(t){return o.default.post("agent/apply/".concat(t.id),t)}function k(t){return o.default.get("agent/get_agent_agreement",{},{noAuth:!0})}function C(t){return o.default.post("register/verify",t,{noAuth:!0})}function L(){return o.default.get("verify_code",{},{noAuth:!0})}function A(){return o.default.get("agent/apply/info",{},{noAuth:!0})}function S(t,e){return o.default.get("v2/get_attr/"+t+"/"+e)}function $(t){return o.default.get("home/products",t,{noAuth:!0})}function T(t){return o.default.get("advance/detail/"+t)}function E(t){return o.default.get("user/visit_list",t)}function P(t){return o.default.delete("user/visit",t)}},7065:function(t,e,i){"use strict";i.r(e);var n=i("dfe1"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},7428:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-916f9ff4]{background-color:#fff}.noCommodity .pictrue[data-v-916f9ff4]{width:%?414?%;height:%?304?%;margin:%?30?% auto 0 auto}.noCommodity .pictrue .tip[data-v-916f9ff4]{color:#bbb;font-size:%?25?%}.record .pictrue[data-v-916f9ff4] uni-checkbox .uni-checkbox-input{background-color:rgba(0,0,0,.16)}.record .pictrue[data-v-916f9ff4] uni-checkbox .wx-checkbox-input{background-color:rgba(0,0,0,.16)}.record .footer[data-v-916f9ff4]{box-sizing:border-box;padding:0 %?30?%;width:100%;height:%?96?%;box-shadow:0 -4px 20px 0 rgba(0,0,0,.06);background-color:#fff;position:fixed;bottom:0;z-index:30;height:calc(%?96?% + constant(safe-area-inset-bottom));height:calc(%?96?% + env(safe-area-inset-bottom));padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.record .footer .bnt[data-v-916f9ff4]{width:%?160?%;height:%?60?%;border-radius:%?30?%;border:%?1?% solid #ccc;color:#666}.record .footer .bnt.on[data-v-916f9ff4]{border:%?1?% solid var(--view-theme);margin-left:%?16?%;color:var(--view-theme)}.record .nav[data-v-916f9ff4]{border-bottom:%?1?% solid #eee;color:#999;font-size:%?28?%;height:%?74?%;padding:0 %?30?%}.record .nav .left[data-v-916f9ff4]{color:#333}.record .nav .left .num[data-v-916f9ff4]{color:var(--view-theme);margin:0 %?10?%}.record .list[data-v-916f9ff4]{padding-top:%?32?%;padding-bottom:%?96?%}.record .list .item .title[data-v-916f9ff4]{padding:0 %?30?%;margin-bottom:%?34?%;font-size:%?34?%;font-weight:600}.record .list .item .picList[data-v-916f9ff4]{padding:0 %?30?% 0 %?12?%}.record .list .item .picList .picTxt[data-v-916f9ff4]{margin-left:%?18?%;margin-bottom:%?48?%}.record .list .item .picList .picTxt .pictrue[data-v-916f9ff4]{width:%?218?%;height:%?218?%;border-radius:%?10?%;position:relative}.record .list .item .picList .picTxt .pictrue uni-image[data-v-916f9ff4]{width:100%;height:100%;border-radius:%?10?%}.record .list .item .picList .picTxt .pictrue .masks[data-v-916f9ff4]{position:absolute;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.2);border-radius:%?10?%}.record .list .item .picList .picTxt .pictrue .masks .bg[data-v-916f9ff4]{width:%?110?%;height:%?110?%;background:#000;opacity:.6;color:#fff;font-size:%?22?%;border-radius:50%;padding:%?22?% 0;text-align:center}.record .list .item .picList .picTxt .pictrue .checkbox[data-v-916f9ff4]{position:absolute;right:%?10?%;top:%?14?%}.record .list .item .picList .picTxt .money[data-v-916f9ff4]{font-size:%?24?%;color:var(--view-priceColor);font-weight:600;margin-top:%?15?%}.record .list .item .picList .picTxt .money .num[data-v-916f9ff4]{font-size:%?32?%;margin-left:%?6?%}body.?%PAGE?%[data-v-916f9ff4]{background-color:#fff}',""]),t.exports=e},"7bec":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[t.visitList.length?i("v-uni-view",{staticClass:"record",style:t.colorStyle},[i("v-uni-view",{staticClass:"nav acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"left"},[t._v(t._s(t.$t("共"))),i("v-uni-text",{staticClass:"num"},[t._v(t._s(t.count))]),t._v(t._s(t.$t("件商品")))],1),t.isShowChecked?i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.switchTap.apply(void 0,arguments)}}},[t._v(t._s(t.$t("取消")))]):i("v-uni-view",{staticClass:"font-num",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.switchTap.apply(void 0,arguments)}}},[t._v(t._s(t.$t("管理")))])],1),i("v-uni-view",{staticClass:"list"},[i("v-uni-checkbox-group",{on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.checkboxChange.apply(void 0,arguments)}}},t._l(t.visitList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"item"},[i("v-uni-view",{staticClass:"title"},[t.isShowChecked?i("v-uni-checkbox",{attrs:{value:e.time,checked:e.checked}}):t._e(),i("v-uni-text",[t._v(t._s(e.time))])],1),i("v-uni-checkbox-group",{on:{change:function(e){arguments[0]=e=t.$handleEvent(e),function(e){t.picCheckbox(e,n)}.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"picList acea-row row-middle"},t._l(e.picList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"picTxt",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.goDetails(e)}}},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{attrs:{src:e.image}}),t.isShowChecked?i("v-uni-checkbox",{staticClass:"checkbox",attrs:{value:e.id.toString(),checked:e.checked}}):t._e(),!t.isShowChecked&&e.stock<=0?i("v-uni-view",{staticClass:"masks acea-row row-center-wrapper"},[i("v-uni-view",{staticClass:"bg"},[i("v-uni-view",[t._v(t._s(t.$t("已售罄")))])],1)],1):t._e(),t.isShowChecked||e.is_show?t._e():i("v-uni-view",{staticClass:"masks acea-row row-center-wrapper"},[i("v-uni-view",{staticClass:"bg"},[i("v-uni-view",[t._v(t._s(t.$t("已下架")))])],1)],1)],1),i("v-uni-view",{staticClass:"money"},[t._v("¥"),i("v-uni-text",{staticClass:"num"},[t._v(t._s(e.product_price))])],1)],1)})),1)],1)],1)})),1),i("v-uni-view",{staticClass:"loadingicon acea-row row-center-wrapper"},[i("v-uni-text",{staticClass:"loading iconfont icon-jiazai",attrs:{hidden:0==t.loading}}),t._v(t._s(t.loadTitle))],1)],1),t.isShowChecked?i("v-uni-view",{staticClass:"footer acea-row row-between-wrapper"},[i("v-uni-checkbox-group",{on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.checkboxAllChange.apply(void 0,arguments)}}},[i("v-uni-checkbox",{attrs:{value:"all",checked:t.isAllSelect}}),i("v-uni-text",{staticClass:"checkAll"},[t._v(t._s(t.$t("全选")))])],1),i("v-uni-view",{staticClass:"acea-row row-middle"},[i("v-uni-view",{staticClass:"bnt acea-row row-center-wrapper",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.collect.apply(void 0,arguments)}}},[t._v(t._s(t.$t("收藏")))]),i("v-uni-view",{staticClass:"bnt on acea-row row-center-wrapper",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.del.apply(void 0,arguments)}}},[t._v(t._s(t.$t("删除")))])],1)],1):t._e()],1):t.visitList.length||2!=t.page?t._e():i("v-uni-view",{staticClass:"noCommodity"},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{attrs:{src:t.imgHost+"/statics/images/no-thing.png"}})],1),i("v-uni-view",{staticClass:"acea-row row-center-wrapper tip"},[t._v(t._s(t.$t("暂无数据")))]),i("recommend",{attrs:{hostProduct:t.hostProduct}})],1)],1)},a=[]},"8cd9":function(t,e,i){"use strict";var n=i("400d"),o=i.n(n);o.a},"8d37":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i("26cb"),a=i("1df3"),c=n(i("a672")),s={computed:(0,o.mapGetters)(["uid"]),props:{hostProduct:{type:Array,default:function(){return[]}}},mixins:[c.default],data:function(){return{}},methods:{goDetail:function(t){(0,a.goShopDetail)(t,this.uid).then((function(e){uni.navigateTo({url:"/pages/goods_details/index?id=".concat(t.id)})}))}}};e.default=s},"9af2":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".pictrueBox[data-v-5c721f6d]{width:%?130?%;height:%?120?%}\n\n/*返回主页按钮*/.home[data-v-5c721f6d]{position:fixed;color:#fff;text-align:center;z-index:999;right:%?15?%;display:flex}.home .homeCon[data-v-5c721f6d]{border-radius:%?50?%;opacity:0;height:0;color:var(--view-theme);width:0}.home .homeCon.on[data-v-5c721f6d]{opacity:1;-webkit-animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);width:%?300?%;height:%?86?%;margin-bottom:%?20?%;display:flex;justify-content:center;align-items:center;background:var(--view-theme)!important;opacity:.8;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.home .homeCon .iconfont[data-v-5c721f6d]{font-size:%?48?%;color:#fff;display:inline-block;margin:0 auto}.home .pictrue[data-v-5c721f6d]{width:%?86?%;height:%?86?%;border-radius:50%;margin:0 auto;background-color:var(--view-theme)}.home .pictrue .image[data-v-5c721f6d]{width:100%;height:100%;border-radius:50%;-webkit-transform:rotate(90deg);transform:rotate(90deg);ms-transform:rotate(90deg);moz-transform:rotate(90deg);webkit-transform:rotate(90deg);o-transform:rotate(90deg)}",""]),t.exports=e},ac34:function(t,e,i){"use strict";var n=i("5247"),o=i.n(n);o.a},b272:function(t,e,i){"use strict";i.r(e);var n=i("5941"),o=i("4e12");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("8cd9");var c,s=i("f0c5"),r=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"487f9802",null,!1,n["a"],c);e["default"]=r.exports},bb27:function(t,e,i){"use strict";i.r(e);var n=i("7bec"),o=i("7065");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("2ba9");var c,s=i("f0c5"),r=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"916f9ff4",null,!1,n["a"],c);e["default"]=r.exports},bbac:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.recommend[data-v-487f9802]{background-color:#fff}.recommend .title[data-v-487f9802]{height:%?135?%;font-size:%?28?%;color:#282828}.recommend .title .name[data-v-487f9802]{margin:0 %?28?%}.recommend .title .iconfont[data-v-487f9802]{font-size:%?170?%;color:#454545}.recommend .title .iconfont.lefticon[data-v-487f9802]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.recommend .recommendList[data-v-487f9802]{padding:0 %?30?%}.recommend .recommendList .item[data-v-487f9802]{width:%?335?%;margin-bottom:%?30?%;border-radius:%?20?% %?20?% 0 0;box-shadow:%?0?% %?3?% %?10?% %?2?% rgba(0,0,0,.03)}.recommend .recommendList .item .pictrue[data-v-487f9802]{position:relative;width:100%;height:%?335?%}.recommend .recommendList .item .pictrue[data-v-487f9802] ,\n.recommend .recommendList .item .pictrue[data-v-487f9802] uni-image,\n.recommend .recommendList .item .pictrue[data-v-487f9802] .easy-loadimage,\n.recommend .recommendList .item .pictrue[data-v-487f9802] uni-image{width:100%;height:%?335?%;border-radius:%?20?%}.recommend .recommendList .item .name[data-v-487f9802]{font-size:%?28?%;color:#282828;margin-top:%?20?%;padding:0 %?10?%}.recommend .recommendList .item .money[data-v-487f9802]{font-size:%?20?%;margin-top:%?8?%;padding:0 %?10?% %?10?% %?10?%}.recommend .recommendList .item .money .num[data-v-487f9802]{font-size:%?28?%}',""]),t.exports=e},cb65:function(t,e,i){var n=i("7428");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("0992db70",n,!0,{sourceMap:!1,shadowMode:!1})},dfe1:function(t,e,i){"use strict";var n=i("4ea4");i("99af"),i("4160"),i("c975"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i("62c7"),a=i("26cb"),c=i("f20a"),s=n(i("b272")),r=n(i("2877")),u=n(i("a672")),d=i("d458"),l={components:{recommend:s.default,home:r.default},mixins:[u.default],data:function(){return{isShowChecked:0,count:0,times:[],isAllSelect:!1,hostProduct:[],loadTitle:this.$t("加载更多"),loading:!1,loadend:!1,visitList:[],limit:21,page:1,isAuto:!1,isShowAuth:!1,hotScroll:!1,hotPage:1,hotLimit:10,isItemAll:[],imgHost:d.HTTP_REQUEST_URL}},computed:(0,a.mapGetters)(["isLogin"]),onLoad:function(){this.isLogin?(this.loadend=!1,this.page=1,this.visitList=[],this.get_user_visit_list(),this.get_host_product()):(0,c.toLogin)()},onShow:function(){uni.removeStorageSync("form_type_cart"),this.times=[],this.loadend=!1,this.page=1,this.visitList=[],this.get_user_visit_list()},methods:{goDetails:function(t){if(this.isShowChecked||!t.is_show)return!1;uni.navigateTo({url:"/pages/goods_details/index?id="+t.product_id})},switchTap:function(){this.isShowChecked=!this.isShowChecked},collect:function(){var t=this,e=[];if(this.visitList.forEach((function(t){t.picList.forEach((function(t){t.checked&&e.push(t.product_id)}))})),!e.length)return this.$util.Tips({title:"请选择收藏商品"});var i=e.join(",");(0,o.collectAll)(i).then((function(e){return t.$util.Tips({title:e.msg})}))},del:function(){var t=this,e=[];if(this.visitList.forEach((function(t){t.picList.forEach((function(t){t.checked&&e.push(t.product_id)}))})),!e.length)return this.$util.Tips({title:"请选择删除商品"});(0,o.deleteVisitList)({ids:e}).then((function(e){return t.times=[],t.loadend=!1,t.page=1,t.$set(t,"visitList",[]),t.get_user_visit_list(),t.$util.Tips({title:e.msg})}))},picCheckbox:function(t,e){var i=this,n=t.detail.value;i.visitList[e].picList.forEach((function(t){-1!==n.indexOf(t.id+"")?t.checked=!0:t.checked=!1})),i.visitList[e].picList.length==n.length?i.visitList[e].checked=!0:i.visitList[e].checked=!1;var o=[];i.visitList.forEach((function(t){t.checked?o.push(t.time):-1!==o.indexOf(t.time)&&o.remove(t.time)})),o.length==i.visitList.length?i.isAllSelect=!0:i.isAllSelect=!1},checkboxChange:function(t){var e=this,i=t.detail.value;e.isItemAll=i,e.visitList.forEach((function(t,e){-1!==i.indexOf(t.time)?t.checked=!0:t.checked=!1,t.picList.forEach((function(e){t.checked?e.checked=!0:e.checked=!1}))})),i.length===e.visitList.length?e.isAllSelect=!0:e.isAllSelect=!1},forGoods:function(t){var e=this;e.visitList.length&&e.visitList.forEach((function(e){e.checked=!!t,e.picList.forEach((function(e){e.checked=!!t}))}))},checkboxAllChange:function(t){var e=t.detail.value;e.length?(this.isAllSelect=!0,this.forGoods(1)):(this.isAllSelect=!1,this.forGoods(0))},authColse:function(t){this.isShowAuth=t},get_user_visit_list:function(){var t=this,e=this;this.loading||this.loadend||(e.loading=!0,e.loadTitle="",(0,o.getVisitList)({page:e.page,limit:e.limit}).then((function(i){t.count=i.data.count;for(var n=0;n<i.data.time.length;n++)-1==t.times.indexOf(i.data.time[n])&&(t.times.push(i.data.time[n]),t.visitList.push({time:i.data.time[n],picList:[]}));for(var o=0;o<t.times.length;o++){t.visitList[o].checked=!!t.isAllSelect;for(var a=0;a<i.data.list.length;a++)t.times[o]===i.data.list[a].time_key&&(t.isAllSelect?i.data.list[a].checked=!0:i.data.list[a].checked=!1,t.visitList[o].picList.push(i.data.list[a]))}var c=i.data.list.length<e.limit;e.loadend=c,e.loadTitle=c?e.$t("没有更多内容啦~"):e.$t("加载更多"),e.page=e.page+1,e.loading=!1})).catch((function(t){e.loading=!1,e.loadTitle=e.$t("加载更多")})))},get_host_product:function(){var t=this;t.hotScroll||(0,o.getProductHot)(t.hotPage,t.hotLimit).then((function(e){t.hotPage++,t.hotScroll=e.data.length<t.hotLimit,t.hostProduct=t.hostProduct.concat(e.data)}))}},onReachBottom:function(){this.visitList.length?this.get_user_visit_list():this.get_host_product()},onPageScroll:function(t){uni.$emit("scroll")}};e.default=l}}]);