(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-goods_logistics-index"],{1985:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* crmeb颜色变量 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.recommend[data-v-525fc149]{background-color:#fff}.recommend .title[data-v-525fc149]{height:%?135?%;font-size:%?28?%;color:#282828}.recommend .title .name[data-v-525fc149]{margin:0 %?28?%}.recommend .title .iconfont[data-v-525fc149]{font-size:%?170?%;color:#454545}.recommend .title .iconfont.lefticon[data-v-525fc149]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.recommend .recommendList[data-v-525fc149]{padding:0 %?30?%}.recommend .recommendList .item[data-v-525fc149]{width:%?335?%;margin-bottom:%?30?%;border-radius:%?20?% %?20?% 0 0;box-shadow:%?0?% %?3?% %?10?% %?2?% rgba(0,0,0,.03)}.recommend .recommendList .item .pictrue[data-v-525fc149]{position:relative;width:100%;height:%?335?%}.recommend .recommendList .item .pictrue uni-image[data-v-525fc149]{width:100%;height:100%;border-radius:%?20?%}.recommend .recommendList .item .name[data-v-525fc149]{font-size:%?28?%;color:#282828;margin-top:%?20?%;padding:0 %?10?%}.recommend .recommendList .item .money[data-v-525fc149]{font-size:%?20?%;margin-top:%?8?%;padding:0 %?10?% %?10?% %?10?%}.recommend .recommendList .item .money .num[data-v-525fc149]{font-size:%?28?%}',""]),t.exports=e},"21a7":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{style:t.colorStyle},[i("v-uni-view",{staticClass:"logistics"},[t._l(t.product,(function(e,n){return i("v-uni-view",{key:n,staticClass:"header acea-row row-between row-top"},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{attrs:{src:e.productInfo.image}})],1),i("v-uni-view",{staticClass:"text acea-row row-between"},[i("v-uni-view",{staticClass:"name line2"},[t._v(t._s(e.productInfo.store_name))]),i("v-uni-view",{staticClass:"money"},[i("v-uni-view",[t._v("￥"+t._s(e.truePrice))]),i("v-uni-view",[t._v("x"+t._s(e.cart_num))])],1)],1)],1)})),i("v-uni-view",{staticClass:"logisticsCon"},[i("v-uni-view",{staticClass:"company acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"picTxt acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"iconfont icon-wuliu"}),i("v-uni-view",{staticClass:"text"},[i("v-uni-view",[i("v-uni-text",{staticClass:"name line1"},[t._v("物流公司：")]),t._v(t._s(t.orderInfo.delivery_name))],1),i("v-uni-view",{staticClass:"express line1"},[i("v-uni-text",{staticClass:"name"},[t._v("快递单号：")]),t._v(t._s(t.orderInfo.delivery_id))],1)],1)],1),i("v-uni-view",{staticClass:"copy copy-data",attrs:{"data-clipboard-text":t.orderInfo.delivery_id}},[t._v("复制单号")])],1),t._l(t.expressList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"item"},[i("v-uni-view",{staticClass:"circular",class:0===n?"on":""}),i("v-uni-view",{staticClass:"text",class:0===n?"on-font on":""},[i("v-uni-view",[t._v(t._s(e.status))]),i("v-uni-view",{staticClass:"data",class:0===n?"on-font on":""},[t._v(t._s(e.time))])],1)],1)}))],2),i("recommend",{attrs:{hostProduct:t.hostProduct}})],2)],1)},r=[]},"229c":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* crmeb颜色变量 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.logistics .header[data-v-07d4bd09]{padding:%?23?% %?30?%;background-color:#fff;height:%?166?%;box-sizing:border-box}.logistics .header .pictrue[data-v-07d4bd09]{width:%?120?%;height:%?120?%}.logistics .header .pictrue uni-image[data-v-07d4bd09]{width:100%;height:100%;border-radius:%?6?%}.logistics .header .text[data-v-07d4bd09]{width:%?540?%;font-size:%?28?%;color:#999;margin-top:%?6?%}.logistics .header .text .name[data-v-07d4bd09]{width:%?365?%;color:#282828}.logistics .header .text .money[data-v-07d4bd09]{text-align:right}.logistics .logisticsCon[data-v-07d4bd09]{background-color:#fff;margin:%?12?% 0}.logistics .logisticsCon .company[data-v-07d4bd09]{height:%?120?%;margin:0 0 %?45?% %?30?%;padding-right:%?30?%;border-bottom:%?1?% solid #f5f5f5}.logistics .logisticsCon .company .picTxt[data-v-07d4bd09]{width:%?520?%}.logistics .logisticsCon .company .picTxt .iconfont[data-v-07d4bd09]{width:%?50?%;height:%?50?%;background-color:#666;text-align:center;line-height:%?50?%;color:#fff;font-size:%?35?%}.logistics .logisticsCon .company .picTxt .text[data-v-07d4bd09]{width:%?450?%;font-size:%?26?%;color:#282828}.logistics .logisticsCon .company .picTxt .text .name[data-v-07d4bd09]{color:#999}.logistics .logisticsCon .company .picTxt .text .express[data-v-07d4bd09]{margin-top:%?5?%}.logistics .logisticsCon .company .copy[data-v-07d4bd09]{font-size:%?20?%;width:%?106?%;text-align:center;border-radius:%?3?%;border:1px solid #999;padding:%?3?% 0}.logistics .logisticsCon .item[data-v-07d4bd09]{padding:0 %?40?%;position:relative}.logistics .logisticsCon .item .circular[data-v-07d4bd09]{width:%?20?%;height:%?20?%;border-radius:50%;position:absolute;top:%?-1?%;left:%?31.5?%;background-color:#ddd}.logistics .logisticsCon .item .circular.on[data-v-07d4bd09]{background-color:var(--view-theme)}.logistics .logisticsCon .item .text.on-font[data-v-07d4bd09]{color:var(--view-theme)}.logistics .logisticsCon .item .text .data.on-font[data-v-07d4bd09]{color:var(--view-theme)}.logistics .logisticsCon .item .text[data-v-07d4bd09]{font-size:%?26?%;color:#666;width:%?615?%;border-left:%?1?% solid #e6e6e6;padding:0 0 %?60?% %?38?%}.logistics .logisticsCon .item .text.on[data-v-07d4bd09]{border-left-color:var(--view-minorColor)}.logistics .logisticsCon .item .text .data[data-v-07d4bd09]{font-size:%?24?%;color:#999;margin-top:%?10?%}.logistics .logisticsCon .item .text .data .time[data-v-07d4bd09]{margin-left:%?15?%}',""]),t.exports=e},"22bc":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.getProductDetail=r,e.getProductCode=a,e.collectAdd=s,e.collectDel=c,e.postCartAdd=d,e.getCategoryList=u,e.getProductslist=l,e.getProductHot=f,e.collectAll=v,e.getGroomList=g,e.getCollectUserList=p,e.getReplyList=m,e.getReplyConfig=h,e.getSearchKeyword=b,e.storeListApi=w,e.storeDiscountsList=_,e.postCartNum=y,e.getAttr=x,e.getHomeProducts=C,e.getPresellProductDetail=L;var o=n(i("ac7c"));function r(t){return o.default.get("product/detail/"+t,{},{noAuth:!0})}function a(t){return o.default.get("product/code/"+t,{})}function s(t,e){return o.default.post("collect/add",{id:t,product:void 0===e?"product":e})}function c(t,e){return o.default.post("collect/del",{id:t,category:void 0===e?"product":e})}function d(t){return o.default.post("cart/add",t)}function u(){return o.default.get("category",{},{noAuth:!0})}function l(t){return o.default.get("products",t,{noAuth:!0})}function f(t,e){return o.default.get("product/hot",{page:void 0===t?1:t,limit:void 0===e?4:e},{noAuth:!0})}function v(t,e){return o.default.post("collect/all",{id:t,category:void 0===e?"product":e})}function g(t,e){return o.default.get("groom/list/"+t,e,{noAuth:!0})}function p(t){return o.default.get("collect/user",t)}function m(t,e){return o.default.get("reply/list/"+t,e)}function h(t){return o.default.get("reply/config/"+t)}function b(){return o.default.get("search/keyword",{},{noAuth:!0})}function w(t){return o.default.get("store_list",t)}function _(t){return o.default.get("store_discounts/list/"+t,{},{noAuth:!0})}function y(t){return o.default.post("v2/set_cart_num",t)}function x(t,e){return o.default.get("v2/get_attr/"+t+"/"+e)}function C(t){return o.default.get("home/products",t,{noAuth:!0})}function L(t){return o.default.get("advance/detail/"+t)}},"2f8b":function(t,e,i){var n=i("1985");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("2ac0f7bd",n,!0,{sourceMap:!1,shadowMode:!1})},"370a":function(t,e,i){"use strict";i("99af"),i("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.goShopDetail=o,e.goPage=r;var n=getApp();function o(t,e){return new Promise((function(i){t.activity&&"1"===t.activity.type?uni.navigateTo({url:"/pages/activity/goods_seckill_details/index?id=".concat(t.activity.id,"&time=").concat(t.activity.time,"&status=1")}):t.activity&&"2"===t.activity.type?uni.navigateTo({url:"/pages/activity/goods_bargain_details/index?id=".concat(t.activity.id,"&bargain=").concat(e)}):t.activity&&"3"===t.activity.type?uni.navigateTo({url:"/pages/activity/goods_combination_details/index?id=".concat(t.activity.id)}):i(t)}))}function r(){return new Promise((function(t){if(0!=n.globalData.isIframe)return!1;t(!0)}))}},"3b70":function(t,e,i){"use strict";i.r(e);var n=i("c252"),o=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=o.a},"573e":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"recommend",style:t.colorStyle},[i("v-uni-view",{staticClass:"title acea-row row-center-wrapper"},[i("v-uni-text",{staticClass:"iconfont icon-zhuangshixian"}),i("v-uni-text",{staticClass:"name"},[t._v("热门推荐")]),i("v-uni-text",{staticClass:"iconfont icon-zhuangshixian lefticon"})],1),i("v-uni-view",{staticClass:"recommendList acea-row row-between-wrapper"},t._l(t.hostProduct,(function(e,n){return i("v-uni-view",{key:n,staticClass:"item",attrs:{"hover-class":"none"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goDetail(e)}}},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{attrs:{src:e.image}}),e.activity&&"1"===e.activity.type?i("span",{staticClass:"pictrue_log_big pictrue_log_class"},[t._v("秒杀")]):t._e(),e.activity&&"2"===e.activity.type?i("span",{staticClass:"pictrue_log_big pictrue_log_class"},[t._v("砍价")]):t._e(),e.activity&&"3"===e.activity.type?i("span",{staticClass:"pictrue_log_big pictrue_log_class"},[t._v("拼团")]):t._e()],1),i("v-uni-view",{staticClass:"name line1"},[t._v(t._s(e.store_name))]),i("v-uni-view",{staticClass:"money font-color"},[t._v("￥"),i("v-uni-text",{staticClass:"num"},[t._v(t._s(e.price))])],1)],1)})),1)],1)},r=[]},"5d37":function(t,e,i){"use strict";var n=i("60cb"),o=i.n(n);o.a},"60cb":function(t,e,i){var n=i("229c");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("4fb7d4d4",n,!0,{sourceMap:!1,shadowMode:!1})},"6e7d":function(t,e,i){"use strict";i.r(e);var n=i("21a7"),o=i("8ac1");for(var r in o)"default"!==r&&function(t){i.d(e,t,(function(){return o[t]}))}(r);i("5d37");var a,s=i("f0c5"),c=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"07d4bd09",null,!1,n["a"],a);e["default"]=c.exports},"7cd2":function(t,e,i){"use strict";var n=i("2f8b"),o=i.n(n);o.a},"8ac1":function(t,e,i){"use strict";i.r(e);var n=i("be74"),o=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=o.a},bb18:function(t,e,i){"use strict";i.r(e);var n=i("573e"),o=i("3b70");for(var r in o)"default"!==r&&function(t){i.d(e,t,(function(){return o[t]}))}(r);i("7cd2");var a,s=i("f0c5"),c=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"525fc149",null,!1,n["a"],a);e["default"]=c.exports},be74:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i("5786"),r=i("22bc"),a=n(i("912e")),s=i("2995"),c=i("2f62"),d=n(i("bb18")),u=n(i("db17")),l={components:{recommend:d.default},mixins:[u.default],data:function(){return{orderId:"",product:[],orderInfo:{},expressList:[],hostProduct:[]}},computed:(0,c.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,e){t&&(this.getExpress(),this.get_host_product())},deep:!0}},onLoad:function(t){if(!t.orderId)return this.$util.Tips({title:"缺少订单号"});this.orderId=t.orderId,this.type=t.type,this.isLogin?(this.getExpress(),this.get_host_product()):(0,s.toLogin)()},onReady:function(){this.$nextTick((function(){var t=this,e=new a.default(".copy-data");e.on("success",(function(){t.$util.Tips({title:"复制成功"})}))}))},methods:{onLoadFun:function(){this.getExpress(),this.get_host_product()},copyOrderId:function(){uni.setClipboardData({data:this.orderInfo.delivery_id})},getExpress:function(){var t=this,e=this;(0,o.express)(e.orderId,e.type).then((function(t){var i=t.data.express.result||{};e.$set(e,"product",t.data.order.cartInfo||[]),e.$set(e,"orderInfo",t.data.order),e.$set(e,"expressList",i.list||[])})).catch((function(e){t.$util.Tips({title:e})}))},get_host_product:function(){var t=this;(0,r.getProductHot)().then((function(e){t.$set(t,"hostProduct",e.data)}))}}};e.default=l},c252:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i("2f62"),r=i("370a"),a=n(i("db17")),s={computed:(0,o.mapGetters)(["uid"]),props:{hostProduct:{type:Array,default:function(){return[]}}},mixins:[a.default],data:function(){return{}},methods:{goDetail:function(t){(0,r.goShopDetail)(t,this.uid).then((function(e){uni.navigateTo({url:"/pages/goods_details/index?id=".concat(t.id)})}))}}};e.default=s}}]);