(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-user_distribution_level-index"],{"01c8":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{style:t.colorStyle},[a("v-uni-view",{staticClass:"member-center"},[a("v-uni-image",{staticClass:"bag",attrs:{src:i("9e22"),mode:""}}),a("v-uni-view",{staticClass:"header"},[a("v-uni-swiper",{staticClass:"swiper",attrs:{current:t.swiperIndex,"previous-margin":"55rpx","next-margin":"55rpx"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.swiperChange.apply(void 0,arguments)}}},[t._l(t.distributionLevel,(function(e,n){return[a("v-uni-swiper-item",[a("v-uni-view",{staticClass:"swiper-item",class:{on:t.swiperIndex==n},style:{"background-image":"url("+e.image+")"}},[a("v-uni-view",{staticClass:"acea-row row-middle user-wrap"},[a("v-uni-image",{staticClass:"image",attrs:{src:t.userInfo.avatar}}),a("v-uni-view",{staticClass:"user-msg"},[a("v-uni-view",{staticClass:"text"},[a("v-uni-view",{staticClass:"name"},[t._v(t._s(t.userInfo.nickname))]),a("v-uni-view",{staticClass:"level",class:{"level-sty":e.grade>(t.levelInfo.grade||0)}},[t._v(t._s(t.$t(e.name)))])],1)],1),e.grade>(t.levelInfo.grade||0)?a("v-uni-view",{staticClass:"state"},[a("v-uni-image",{staticClass:"lock",attrs:{src:i("d39d"),mode:""}})],1):t._e()],1),[a("v-uni-view",{staticClass:"level-grow-wrap"},[a("v-uni-view",{staticClass:"level-info",class:{"lock-sty":e.grade>(t.levelInfo.grade||0)}},[a("v-uni-view",{staticClass:"level-info-title"},[t._v(t._s(t.$t("一级分佣上浮")))]),a("v-uni-view",{staticClass:"num"},[t._v(t._s(e.one_brokerage)),a("v-uni-text",{staticClass:"percent"},[t._v("%")])],1)],1),a("v-uni-view",{staticClass:"level-info",class:{"lock-sty":e.grade>(t.levelInfo.grade||0)}},[a("v-uni-view",{staticClass:"level-info-title"},[t._v(t._s(t.$t("二级分佣上浮")))]),a("v-uni-view",{staticClass:"num"},[t._v(t._s(e.two_brokerage)),a("v-uni-text",{staticClass:"percent"},[t._v("%")])],1)],1)],1)]],2)],1)]}))],2)],1),a("v-uni-view",{staticClass:"skill-section"},[a("v-uni-view",{staticClass:"section-hd acea-row row-between-wrapper"},[a("v-uni-view",{staticClass:"title"},[a("v-uni-view",{staticClass:"line-left"}),a("v-uni-text",[t._v(t._s(t.$t("快速升级技巧")))])],1),a("v-uni-view",{staticClass:"task"},[a("v-uni-text",{staticClass:"task-num"},[t._v(t._s(t.taskNum))]),a("v-uni-text",[t._v("/"+t._s(t.task.length))])],1)],1),a("v-uni-view",{staticClass:"section-bd acea-row"},t._l(t.task,(function(e,i){return a("v-uni-view",{key:e.id,staticClass:"item acea-row row-middle"},[a("v-uni-view",{staticClass:"text"},[a("v-uni-view",{staticClass:"title"},[a("v-uni-view",{staticClass:"name line2"},[t._v(t._s(t.$t(e.name))),a("v-uni-text",{staticClass:"iconfont icon-wenti",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.opHelp(i)}}})],1),a("v-uni-text",{staticClass:"mark"},[t._v(t._s(e.finish?t.$t("已完成"):t.$t("未完成")))])],1),a("v-uni-view",{staticClass:"process"},[a("v-uni-view",{staticClass:"fill",style:{width:Math.floor(e.new_number/e.number>1?100:e.new_number/e.number*100)+"%"}})],1),a("v-uni-view",{staticClass:"info-box"},[a("v-uni-view",{staticClass:"info"},[t._v(t._s(e.finish?"":t.$t(e.task_type_title)))]),a("v-uni-view",{staticClass:"link",attrs:{"hover-class":"none"}},[a("v-uni-text",{staticClass:"new-number"},[t._v(t._s(e.new_number))]),t._v("/"+t._s(e.number))],1)],1)],1)],1)})),1)],1),t.hostProduct.length?a("recommend",{attrs:{hostProduct:t.hostProduct}}):t._e(),a("v-uni-view",{staticClass:"growthValue",class:0==t.growthValue?"on":""},[a("v-uni-text",{staticClass:"iconfont icon-guanbi3",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.growthValue=!0}}}),a("v-uni-view",{staticClass:"conter"},[t._v(t._s(t.illustrate))])],1),a("v-uni-view",{staticClass:"mask",attrs:{hidden:t.growthValue},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.growthValueClose.apply(void 0,arguments)}}})],1)],1)},s=[]},1579:function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.getProductDetail=s,e.getProductCode=o,e.collectAdd=r,e.collectDel=c,e.postCartAdd=l,e.getCategoryList=d,e.getProductslist=u,e.getProductHot=v,e.collectAll=f,e.getGroomList=g,e.getCollectUserList=p,e.getReplyList=m,e.getReplyConfig=h,e.getSearchKeyword=w,e.storeListApi=b,e.storeDiscountsList=y,e.postCartNum=C,e.create=A,e.getAgentAgreement=_,e.registerVerify=k,e.getCodeApi=x,e.getGoodsDetails=j,e.getAttr=I,e.getHomeProducts=M,e.getPresellProductDetail=R,e.getVisitList=Q,e.deleteVisitList=E;var n=a(i("3160"));function s(t){return n.default.get("product/detail/"+t,{},{noAuth:!0})}function o(t){return n.default.get("product/code/"+t,{})}function r(t,e){return n.default.post("collect/add",{id:t,product:void 0===e?"product":e})}function c(t,e){return n.default.post("collect/del",{id:t,category:void 0===e?"product":e})}function l(t){return n.default.post("cart/add",t)}function d(){return n.default.get("category",{},{noAuth:!0})}function u(t){return n.default.get("products",t,{noAuth:!0})}function v(t,e){return n.default.get("product/hot",{page:void 0===t?1:t,limit:void 0===e?4:e},{noAuth:!0})}function f(t,e){return n.default.post("collect/all",{id:t,category:void 0===e?"product":e})}function g(t,e){return n.default.get("groom/list/"+t,e,{noAuth:!0})}function p(t){return n.default.get("collect/user",t)}function m(t,e){return n.default.get("reply/list/"+t,e)}function h(t){return n.default.get("reply/config/"+t)}function w(){return n.default.get("search/keyword",{},{noAuth:!0})}function b(t){return n.default.get("store_list",t)}function y(t){return n.default.get("store_discounts/list/"+t,{},{noAuth:!0})}function C(t){return n.default.post("v2/set_cart_num",t)}function A(t){return n.default.post("agent/apply/".concat(t.id),t)}function _(t){return n.default.get("agent/get_agent_agreement",{},{noAuth:!0})}function k(t){return n.default.post("register/verify",t,{noAuth:!0})}function x(){return n.default.get("verify_code",{},{noAuth:!0})}function j(){return n.default.get("agent/apply/info",{},{noAuth:!0})}function I(t,e){return n.default.get("v2/get_attr/"+t+"/"+e)}function M(t){return n.default.get("home/products",t,{noAuth:!0})}function R(t){return n.default.get("advance/detail/"+t)}function Q(t){return n.default.get("user/visit_list",t)}function E(t){return n.default.delete("user/visit",t)}},"1a330":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var a={easyLoadimage:i("9362").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"recommend",style:t.colorStyle},[i("v-uni-view",{staticClass:"title acea-row row-center-wrapper"},[i("v-uni-text",{staticClass:"iconfont icon-zhuangshixian"}),i("v-uni-text",{staticClass:"name"},[t._v(t._s(t.$t("热门推荐")))]),i("v-uni-text",{staticClass:"iconfont icon-zhuangshixian lefticon"})],1),i("v-uni-view",{staticClass:"recommendList acea-row row-between-wrapper"},t._l(t.hostProduct,(function(e,a){return i("v-uni-view",{key:a,staticClass:"item",attrs:{"hover-class":"none"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goDetail(e)}}},[i("v-uni-view",{staticClass:"pictrue"},[i("easy-loadimage",{attrs:{mode:"widthFix","image-src":e.image}}),e.activity&&"1"===e.activity.type?i("span",{staticClass:"pictrue_log_big pictrue_log_class"},[t._v(t._s(t.$t("秒杀")))]):t._e(),e.activity&&"2"===e.activity.type?i("span",{staticClass:"pictrue_log_big pictrue_log_class"},[t._v(t._s(t.$t("砍价")))]):t._e(),e.activity&&"3"===e.activity.type?i("span",{staticClass:"pictrue_log_big pictrue_log_class"},[t._v(t._s(t.$t("拼团")))]):t._e()],1),i("v-uni-view",{staticClass:"name line1"},[t._v(t._s(e.store_name))]),i("v-uni-view",{staticClass:"money font-color"},[t._v(t._s(t.$t("￥"))),i("v-uni-text",{staticClass:"num"},[t._v(t._s(e.price))])],1),e.vip_price&&e.vip_price>0&&e.base?i("v-uni-view",{staticClass:"vip-money"},[t._v(t._s(t.$t("￥"))+t._s(e.vip_price)),i("v-uni-image",{staticClass:"jvip",attrs:{src:"/static/images/jvip.png"}})],1):t._e(),e.vip_price&&e.vip_price>0&&e.is_vip?i("v-uni-view",{staticClass:"vip-money"},[t._v(t._s(t.$t("￥"))+t._s(e.vip_price)),i("v-uni-image",{attrs:{src:"/static/images/vip.png"}})],1):t._e()],1)})),1)],1)},s=[]},"230d":function(t,e,i){"use strict";var a=i("94bc"),n=i.n(a);n.a},"26a9":function(t,e,i){"use strict";i.r(e);var a=i("01c8"),n=i("4d2f");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("b423");var o,r=i("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"8eaa6c5e",null,!1,a["a"],o);e["default"]=c.exports},"2c78":function(t,e,i){"use strict";i("99af"),i("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.goShopDetail=n,e.goPage=s;var a=getApp();function n(t,e){return new Promise((function(i){t.activity&&"1"===t.activity.type?uni.navigateTo({url:"/pages/activity/goods_seckill_details/index?id=".concat(t.activity.id,"&time=").concat(t.activity.time,"&status=1")}):t.activity&&"2"===t.activity.type?uni.navigateTo({url:"/pages/activity/goods_bargain_details/index?id=".concat(t.activity.id,"&bargain=").concat(e)}):t.activity&&"3"===t.activity.type?uni.navigateTo({url:"/pages/activity/goods_combination_details/index?id=".concat(t.activity.id)}):i(t)}))}function s(){return new Promise((function(t){if(0!=a.globalData.isIframe)return!1;t(!0)}))}},"4d2f":function(t,e,i){"use strict";i.r(e);var a=i("db70"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},"5d5b":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.swiper .swiper-item[data-v-8eaa6c5e]{height:100%;border-radius:%?6?%;background:50%/100% 100% no-repeat;-webkit-transform:scale(.9);transform:scale(.9);transition:all .2s ease-in 0s;line-height:1.1}.swiper .swiper-item.on[data-v-8eaa6c5e]{-webkit-transform:none;transform:none}.swiper .user-wrap[data-v-8eaa6c5e]{padding-top:%?20?%;padding-left:%?22?%;line-height:1.1}.swiper .user-wrap .image[data-v-8eaa6c5e]{width:%?90?%;height:%?90?%;border-radius:50%}.swiper .user-wrap .user-msg[data-v-8eaa6c5e]{margin-left:%?14?%}.swiper .user-wrap .user-msg .text[data-v-8eaa6c5e]{flex:1;display:flex;align-items:center;min-width:0;font-size:%?22?%;color:#666}.swiper .user-wrap .user-msg .text .num[data-v-8eaa6c5e]{margin-right:%?10?%;margin-left:%?10?%;font-size:%?30?%;font-style:italic}.swiper .user-wrap .name[data-v-8eaa6c5e]{flex:1;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-weight:700;font-size:%?28?%;color:#fff;margin-right:%?8?%}.swiper .user-wrap .state[data-v-8eaa6c5e]{position:absolute;top:%?0?%;right:0;width:%?70?%;height:%?70?%}.swiper .user-wrap .state .lock[data-v-8eaa6c5e]{width:100%;height:100%}.swiper .grow-wrap[data-v-8eaa6c5e]{padding-left:%?34?%;margin-top:%?70?%;font-size:%?20?%;color:#474747;display:flex}.swiper .grow-wrap .num[data-v-8eaa6c5e]{margin-right:%?8?%;margin-left:%?8?%;font-size:%?26?%}.swiper .level[data-v-8eaa6c5e]{font-size:%?24?%;color:#fff;border-radius:%?4?%;border:1px solid #fff;padding:%?3?% %?8?%}.skill-section[data-v-8eaa6c5e]{margin:%?24?% %?30?% %?20?% %?30?%;background-color:#fff;border-radius:%?8?%}.skill-section .section-hd[data-v-8eaa6c5e]{padding:%?38?% %?36?% 0 %?36?%;font-weight:700;font-size:%?32?%;color:#282828}.skill-section .section-hd .title[data-v-8eaa6c5e]{display:flex;align-items:center;font-size:%?32?%}.skill-section .section-hd .title .line-left[data-v-8eaa6c5e]{margin-right:%?16?%;width:%?8?%;height:%?40?%;border-radius:%?4?%;background-color:#e8b869}.skill-section .section-hd .task[data-v-8eaa6c5e]{color:#999;font-size:%?26?%;font-weight:400}.skill-section .section-hd .task-num[data-v-8eaa6c5e]{color:#c6985c}.skill-section .section-bd[data-v-8eaa6c5e]{padding:%?30?%}.skill-section .section-bd .item[data-v-8eaa6c5e]{width:100%;padding:10px %?25?%;border-radius:%?4?%;background-color:#f8f8f8;box-shadow:0 %?5?% %?10?% 0 #f8f8f8}.skill-section .section-bd .item .name[data-v-8eaa6c5e]{font-size:%?28?%}.skill-section .section-bd .item ~ .item[data-v-8eaa6c5e]{margin-top:%?24?%}.skill-section .section-bd .text[data-v-8eaa6c5e]{flex:1}.skill-section .section-bd .title[data-v-8eaa6c5e]{font-weight:700;font-size:%?30?%;color:#282828;display:flex;justify-content:space-between}.skill-section .section-bd .title .icon-wenti[data-v-8eaa6c5e]{color:#ccc;margin-left:%?10?%}.skill-section .section-bd .title .mark[data-v-8eaa6c5e]{text-align:right;margin-left:%?20?%;font-weight:400;font-size:%?24?%;color:#999;white-space:nowrap}.skill-section .section-bd .process[data-v-8eaa6c5e]{height:%?12?%;border-radius:%?6?%;margin-top:%?22?%;background-color:#eee}.skill-section .section-bd .process .fill[data-v-8eaa6c5e]{height:100%;border-radius:%?6?%;background-color:#e7b667}.skill-section .section-bd .info-box[data-v-8eaa6c5e]{display:flex;justify-content:space-between;align-items:center;margin-top:%?18?%}.skill-section .section-bd .info[data-v-8eaa6c5e]{font-size:%?22?%;color:#999}.skill-section .section-bd .link[data-v-8eaa6c5e]{font-size:%?26?%;color:#999}.skill-section .section-bd .link .new-number[data-v-8eaa6c5e]{color:#c6985c}.bag[data-v-8eaa6c5e]{position:absolute;width:100%;height:%?285?%}.member-center .header[data-v-8eaa6c5e]{padding-top:%?37?%}.member-center .header uni-swiper[data-v-8eaa6c5e]{position:relative}.member-center .growthValue[data-v-8eaa6c5e]{background-color:#fff;border-radius:%?16?%;position:fixed;top:%?266?%;left:50%;width:%?560?%;min-height:%?440?%;margin-left:%?-280?%;z-index:99;-webkit-transform:translate3d(0,-200%,0);transform:translate3d(0,-200%,0);transition:all .3s cubic-bezier(.25,.5,.5,.9)}.member-center .growthValue.on[data-v-8eaa6c5e]{-webkit-transform:translateZ(0);transform:translateZ(0)}.member-center .growthValue .pictrue[data-v-8eaa6c5e]{width:100%;height:%?257?%;position:relative}.member-center .growthValue .pictrue uni-image[data-v-8eaa6c5e]{width:100%;height:100%;border-radius:%?16?% %?16?% 0 0}.member-center .growthValue .conter[data-v-8eaa6c5e]{padding:0 %?35?%;font-size:%?30?%;color:#333;margin-top:%?58?%;line-height:1.5;height:%?350?%;overflow:auto}.member-center .growthValue .iconfont[data-v-8eaa6c5e]{position:absolute;font-size:%?65?%;color:#fff;bottom:%?-90?%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.level-grow-wrap[data-v-8eaa6c5e]{position:absolute;display:flex;left:%?30?%;bottom:%?39?%;font-size:%?20?%;color:#474747}.level-grow-wrap .level-info[data-v-8eaa6c5e]{display:flex;justify-content:center;flex-direction:column;margin-right:%?40?%}.level-grow-wrap .level-info .level-info-title[data-v-8eaa6c5e]{font-size:%?22?%;color:#fff;opacity:.6}.level-grow-wrap .level-info .num[data-v-8eaa6c5e]{color:#fff;font-size:%?40?%;margin-top:%?20?%}.level-grow-wrap .level-info .num .percent[data-v-8eaa6c5e]{font-size:%?24?%}.level-grow-wrap .lock-sty[data-v-8eaa6c5e]{opacity:.7}.swiper .level-sty[data-v-8eaa6c5e]{opacity:.7}',""]),t.exports=e},"7ce9":function(t,e,i){var a=i("5d5b");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("44af64ee",a,!0,{sourceMap:!1,shadowMode:!1})},8207:function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("26cb"),s=i("2c78"),o=a(i("66ca")),r={computed:(0,n.mapGetters)(["uid"]),props:{hostProduct:{type:Array,default:function(){return[]}}},mixins:[o.default],data:function(){return{}},methods:{goDetail:function(t){(0,s.goShopDetail)(t,this.uid).then((function(e){uni.navigateTo({url:"/pages/goods_details/index?id=".concat(t.id)})}))}}};e.default=r},"94bc":function(t,e,i){var a=i("9ff1");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("5d6072d6",a,!0,{sourceMap:!1,shadowMode:!1})},"9e22":function(t,e){t.exports="data:image/png;base64,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"},"9ff1":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.recommend[data-v-2b49a4b7]{background-color:#fff}.recommend .title[data-v-2b49a4b7]{height:%?135?%;font-size:%?28?%;color:#282828}.recommend .title .name[data-v-2b49a4b7]{margin:0 %?28?%}.recommend .title .iconfont[data-v-2b49a4b7]{font-size:%?170?%;color:#454545}.recommend .title .iconfont.lefticon[data-v-2b49a4b7]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.recommend .recommendList[data-v-2b49a4b7]{padding:0 %?30?%}.recommend .recommendList .item[data-v-2b49a4b7]{width:%?335?%;margin-bottom:%?30?%;border-radius:%?20?% %?20?% 0 0;box-shadow:%?0?% %?3?% %?10?% %?2?% rgba(0,0,0,.03);padding-bottom:%?10?%}.recommend .recommendList .item .pictrue[data-v-2b49a4b7]{position:relative;width:100%;height:%?335?%}.recommend .recommendList .item .pictrue[data-v-2b49a4b7] ,\n.recommend .recommendList .item .pictrue[data-v-2b49a4b7] uni-image,\n.recommend .recommendList .item .pictrue[data-v-2b49a4b7] .easy-loadimage,\n.recommend .recommendList .item .pictrue[data-v-2b49a4b7] uni-image{width:100%;height:%?335?%;border-radius:%?20?%}.recommend .recommendList .item .name[data-v-2b49a4b7]{font-size:%?28?%;color:#282828;margin-top:%?20?%;padding:0 %?10?%}.recommend .recommendList .item .money[data-v-2b49a4b7]{font-size:%?20?%;margin-top:%?8?%;padding:0 %?10?% %?0?% %?10?%}.recommend .vip-money[data-v-2b49a4b7]{font-size:%?24?%;color:#282828;font-weight:700;display:flex;align-items:center;padding:%?0?% 0 0 %?10?%}.recommend .vip-money uni-image[data-v-2b49a4b7]{width:%?46?%;height:%?21?%;margin-left:%?4?%}.recommend .recommendList .item .money .num[data-v-2b49a4b7]{font-size:%?28?%}',""]),t.exports=e},b423:function(t,e,i){"use strict";var a=i("7ce9"),n=i.n(a);n.a},d39d:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABKCAMAAAASaYMYAAAAM1BMVEUAAABKSkpMTExKSkpAQEBKSkpKSkpKSkpLS0tKSkpJSUlKSkpLS0tKSkpISEhKSkpLS0vvNfJ5AAAAEHRSTlMAgEDAEPBgMKDgULDQkCBw3Z/XkAAAATxJREFUWMPt1VtugzAQRuEzvhsMyf5X24eoSiNkVFz/lSLlLOBjYIwMuGdmxcf7aK0s9MppHXZrn2W34Xk3+oWiUEmj6sJJyyBaOcsUo+LH0MJZbgxtnNbGVBRflbH3j5aB/VYHUHqrCPBoG0Bjb73h5r3fdkgd9Oqh8pAfT4sJ1jmoI8fnQQ9T0PZzugrrDHR7GS5jM1DDvfzobj5qM9DEsfxX1MGxa2hRoPbPqLM0iKY+anc/iGYFigT1CvQm2D5BgbIqUPcLNBzQi6uqdsxfRvPEe//ZpkBDE6BkBUpSoCQFSlKgpChAyVGAElYBCksVoGBRgBJSnY8CrtT5KJBtPYUZzjm32HfFH9Ap5S3ORyFYnI9CbgKUsApQQhOg7AoUU6AhClCKAnUKFAnqEWQISghywHuggU+f5vYFLaGJcxAFoxoAAAAASUVORK5CYII="},db70:function(t,e,i){"use strict";var a=i("4ea4");i("99af"),i("c740"),i("4160"),i("acd8"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("8ba8"),s=i("1579"),o=i("666f"),r=i("26cb"),c=a(i("f1f8")),l=a(i("66ca")),d={components:{recommend:c.default},mixins:[l.default],data:function(){return{reach_count:0,distributionLevel:[],swiperIndex:0,growthValue:!0,task:[],illustrate:"",level_id:0,hostProduct:[],grade:0,hotScroll:!1,hotPage:1,hotLimit:10,level_title:"",level_discount:"",levelInfo:{},userInfo:{},taskInfo:{},taskNum:0}},computed:(0,r.mapGetters)(["isLogin"]),watch:{distributionLevel:function(){var t=this;t.distributionLevel.length>0&&t.distributionLevel.forEach((function(e,i){!1===e.is_clear&&(t.activeIndex=i,t.grade=e.grade)}))},isLogin:{handler:function(t,e){t&&this.get_host_product()},deep:!0}},onLoad:function(){this.isLogin?this.agentLevelList():(0,o.toLogin)(),this.get_host_product()},methods:{agentLevelList:function(){var t=this;(0,n.agentLevelList)().then((function(e){var i=e.data,a=i.level_info,n=i.level_list,s=i.task,o=i.user;t.levelInfo=a,t.distributionLevel=n,t.userInfo=o,t.taskInfo=s,t.levelInfo.exp=parseFloat(t.levelInfo.exp),t.levelInfo.rate=Math.floor(t.levelInfo.exp/t.levelInfo.exp_num*100),t.levelInfo.rate>100&&(t.levelInfo.rate=100);var r=n.findIndex((function(t,e){return t.id===o.agent_level}));-1!==r&&(t.swiperIndex=-1===r?0:r),t.level_id=t.distributionLevel[-1===r?0:r].id||0,t.getTask()}))},get_host_product:function(){var t=this;t.hotScroll||(0,s.getProductHot)(t.hotPage,t.hotLimit).then((function(e){t.hotPage++,t.hotScroll=e.data.length<t.hotLimit,t.hostProduct=t.hostProduct.concat(e.data)}))},swiperChange:function(t){var e=t.detail.current;this.swiperIndex=e,this.level_id=this.distributionLevel[e].id||0,this.level_title=this.distributionLevel[e].name||"",this.level_discount=this.distributionLevel[e].discount||"",this.getTask()},growthValueClose:function(){this.growthValue=!0},opHelp:function(t){this.growthValue=!1,this.illustrate=this.task[t].desc},getTask:function(){var t=this;t.taskNum=0,(0,n.agentLevelTaskList)(t.level_id).then((function(e){t.task=e.data;for(var i=0;i<t.task.length;i++)t.task[i].finish&&(t.taskNum+=1)}))}},onReachBottom:function(){this.hotScroll||this.get_host_product()}};e.default=d},f1f8:function(t,e,i){"use strict";i.r(e);var a=i("1a330"),n=i("fad1");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("230d");var o,r=i("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"2b49a4b7",null,!1,a["a"],o);e["default"]=c.exports},fad1:function(t,e,i){"use strict";i.r(e);var a=i("8207"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a}}]);