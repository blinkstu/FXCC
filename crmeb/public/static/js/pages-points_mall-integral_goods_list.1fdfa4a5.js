(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-points_mall-integral_goods_list"],{"0209":function(t,e,i){"use strict";var n=i("7f89"),r=i.n(n);r.a},3589:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.getCombinationList=a,e.getCombinationDetail=s,e.getCombinationPink=o,e.postCombinationRemove=c,e.getBargainList=u,e.getCombinationBannerList=d,e.getPink=l,e.getBargainUserList=p,e.getBargainDetail=h,e.postBargainStartUser=f,e.postBargainStart=g,e.postBargainHelp=v,e.postBargainHelpPrice=b,e.postBargainHelpList=m,e.postBargainHelpCount=w,e.postBargainShare=_,e.getSeckillIndexTime=L,e.getSeckillList=k,e.getSeckillDetail=C,e.getBargainPoster=x,e.getCombinationPoster=y,e.getBargainUserCancel=P,e.seckillCode=O,e.scombinationCode=B,e.getCombinationPosterData=S,e.getBargainPosterData=$,e.integralOrderConfirm=z,e.integralOrderCreate=D,e.integralOrderDetails=A,e.getIntegralProductDetail=T,e.getStoreIntegralList=E,e.getIntegralOrderList=I,e.getLogisticsDetails=j,e.orderTake=H,e.orderDel=M,e.getPresellList=R;var r=n(i("ac7c"));function a(t){return r.default.get("combination/list",t,{noAuth:!0})}function s(t){return r.default.get("combination/detail/"+t)}function o(t){return r.default.get("combination/pink/"+t)}function c(t){return r.default.post("combination/remove",t)}function u(t){return r.default.get("bargain/list",t,{noAuth:!0})}function d(t){return r.default.get("combination/banner_list",t,{noAuth:!0})}function l(t){return r.default.get("pink",t,{noAuth:!0})}function p(t){return r.default.get("bargain/user/list",t)}function h(t){return r.default.get("bargain/detail/"+t)}function f(t){return r.default.post("bargain/start/user",t)}function g(t){return r.default.post("bargain/start",{bargainId:t})}function v(t){return r.default.post("bargain/help",t)}function b(t){return r.default.post("bargain/help/price",t)}function m(t){return r.default.post("bargain/help/list",t)}function w(t){return r.default.post("bargain/help/count",t)}function _(t){return r.default.post("bargain/share",{bargainId:t})}function L(){return r.default.get("seckill/index",{},{noAuth:!0})}function k(t,e){return r.default.get("seckill/list/"+t,e,{noAuth:!0})}function C(t,e){return r.default.get("seckill/detail/"+t,e)}function x(t){return r.default.post("bargain/poster",t)}function y(t){return r.default.post("combination/poster",t)}function P(t){return r.default.post("bargain/user/cancel",t)}function O(t,e){return r.default.get("seckill/code/"+t,e)}function B(t){return r.default.get("combination/code/"+t)}function S(t){return r.default.get("combination/poster_info/"+t)}function $(t){return r.default.get("bargain/poster_info/"+t)}function z(t){return r.default.post("store_integral/order/confirm",t)}function D(t){return r.default.post("store_integral/order/create",t)}function A(t){return r.default.get("store_integral/order/detail/".concat(t))}function T(t){return r.default.get("store_integral/detail/"+t,{},{noAuth:!0})}function E(t){return r.default.get("store_integral/list",t)}function I(t){return r.default.get("store_integral/order/list",t)}function j(t){return r.default.get("store_integral/order/express/".concat(t))}function H(t){return r.default.post("store_integral/order/take",t)}function M(t){return r.default.post("store_integral/order/del",t)}function R(t){return r.default.get("advance/list",t)}},4488:function(t,e,i){"use strict";i.r(e);var n=i("8dd4"),r=i("c9cf");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("0209");var s,o=i("f0c5"),c=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"3bc3b599",null,!1,n["a"],s);e["default"]=c.exports},"564d":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* crmeb颜色变量 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.productList .search[data-v-3bc3b599]{width:100%;height:%?86?%;padding-left:%?23?%;box-sizing:border-box;position:fixed;left:0;top:0;z-index:9}.productList .search .input[data-v-3bc3b599]{width:%?640?%;height:%?60?%;background-color:#fff;border-radius:%?50?%;padding:0 %?20?%;box-sizing:border-box}.productList .search .input uni-input[data-v-3bc3b599]{width:%?548?%;height:100%;font-size:%?26?%}.productList .search .input .placeholder[data-v-3bc3b599]{color:#999}.productList .search .input .iconfont[data-v-3bc3b599]{font-size:%?35?%;color:#555}.productList .search .icon-pailie[data-v-3bc3b599],\r\n.productList .search .icon-tupianpailie[data-v-3bc3b599]{color:#fff;width:%?62?%;font-size:%?40?%;height:%?86?%;line-height:%?86?%}.productList .nav[data-v-3bc3b599]{height:%?86?%;color:#454545;position:fixed;left:0;width:100%;font-size:%?28?%;background-color:#fff;margin-top:%?86?%;top:0;z-index:9}.productList .nav .item[data-v-3bc3b599]{width:33%;text-align:center}.productList .nav .item uni-image[data-v-3bc3b599]{width:%?15?%;height:%?19?%;margin-left:%?10?%}.productList .list[data-v-3bc3b599]{padding:0 %?20?%;margin-top:%?172?%}.productList .list.on[data-v-3bc3b599]{background-color:#fff;border-top:1px solid #f6f6f6}.productList .list .item[data-v-3bc3b599]{width:%?345?%;margin-top:%?20?%;background-color:#fff;border-radius:%?20?%}.productList .list .item.on[data-v-3bc3b599]{width:100%;display:flex;border-bottom:%?1?% solid #f6f6f6;padding:%?30?% 0;margin:0}.productList .list .item .pictrue[data-v-3bc3b599]{position:relative;width:100%;height:%?345?%}.productList .list .item .pictrue.on[data-v-3bc3b599]{width:%?180?%;height:%?180?%}.productList .list .item .pictrue uni-image[data-v-3bc3b599]{width:100%;height:100%;border-radius:%?20?% %?20?% 0 0}.productList .list .item .pictrue uni-image.on[data-v-3bc3b599]{border-radius:%?6?%}.productList .list .item .text[data-v-3bc3b599]{padding:%?20?% %?17?% %?26?% %?17?%;font-size:%?30?%;color:#222}.productList .list .item .text.on[data-v-3bc3b599]{width:%?508?%;padding:0 0 0 %?22?%}.productList .list .item .text .money[data-v-3bc3b599]{font-size:%?22?%;margin-top:%?8?%}.productList .list .item .text .money.on[data-v-3bc3b599]{margin-top:%?50?%}.productList .list .item .text .money .num[data-v-3bc3b599]{font-size:%?34?%}.productList .list .item .text .vip[data-v-3bc3b599]{font-size:%?22?%;margin-top:%?7?%}.productList .list .item .text .vip .sales[data-v-3bc3b599]{color:#aaa;width:100%;display:flex;justify-content:space-between}.productList .list .item .text .vip .sales .exchange[data-v-3bc3b599]{border:1px solid var(--view-theme);border-radius:%?20?%;padding:0 %?12?%;color:var(--view-theme)}.productList .list .item .text .vip.on[data-v-3bc3b599]{margin-top:%?12?%}.productList .list .item .text .vip .vip-money[data-v-3bc3b599]{font-size:%?24?%;color:#282828;font-weight:700}.productList .list .item .text .vip .vip-money uni-image[data-v-3bc3b599]{width:%?46?%;height:%?21?%;margin-left:%?4?%}.noCommodity[data-v-3bc3b599]{background-color:#fff;padding-bottom:%?30?%}',""]),t.exports=e},"7f89":function(t,e,i){var n=i("564d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("063edee0",n,!0,{sourceMap:!1,shadowMode:!1})},"8dd4":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{style:t.colorStyle},[n("v-uni-view",{staticClass:"productList"},[n("v-uni-view",{staticClass:"search bg-color acea-row row-between-wrapper"},[n("v-uni-view",{staticClass:"input acea-row row-between-wrapper"},[n("v-uni-text",{staticClass:"iconfont icon-sousuo"}),n("v-uni-input",{attrs:{placeholder:"搜索商品名称","placeholder-class":"placeholder","confirm-type":"search",name:"search",value:t.where.store_name},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.searchSubmit.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"iconfont",class:1==t.is_switch?"icon-pailie":"icon-tupianpailie",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.Changswitch.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"nav acea-row row-middle"},[n("v-uni-view",{staticClass:"item line1",class:t.title?"font-num":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.set_where(1)}}},[t._v("默认")]),n("v-uni-view",{staticClass:"item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.set_where(2)}}},[t._v("积分"),1==t.price?n("v-uni-image",{attrs:{src:i("16c3")}}):2==t.price?n("v-uni-image",{attrs:{src:i("a7dc")}}):n("v-uni-image",{attrs:{src:i("ed09")}})],1),n("v-uni-view",{staticClass:"item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.set_where(3)}}},[t._v("销量"),1==t.stock?n("v-uni-image",{attrs:{src:i("16c3")}}):2==t.stock?n("v-uni-image",{attrs:{src:i("a7dc")}}):n("v-uni-image",{attrs:{src:i("ed09")}})],1)],1),n("v-uni-view",{staticClass:"list acea-row row-between-wrapper",class:1==t.is_switch?"":"on"},[t._l(t.productList,(function(e,r){return n("v-uni-view",{key:r,staticClass:"item",class:1==t.is_switch?"":"on",attrs:{"hover-class":"none"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.godDetail(e)}}},[n("v-uni-view",{staticClass:"pictrue",class:1==t.is_switch?"":"on"},[n("v-uni-image",{class:1==t.is_switch?"":"on",attrs:{src:e.image}})],1),n("v-uni-view",{staticClass:"text",class:1==t.is_switch?"":"on"},[n("v-uni-view",{staticClass:"name line1"},[t._v(t._s(e.title))]),n("v-uni-view",{staticClass:"money font-color",class:1==t.is_switch?"":"on"},[n("v-uni-text",{staticClass:"num"},[t._v(t._s(e.price)+"积分")])],1),n("v-uni-view",{staticClass:"vip acea-row row-between-wrapper",class:1==t.is_switch?"":"on"},[e.vip_price&&e.vip_price>0?n("v-uni-view",{staticClass:"vip-money"},[t._v(t._s(e.vip_price)+"积分"),n("v-uni-image",{attrs:{src:i("a73e")}})],1):t._e(),n("v-uni-view",{staticClass:"sales"},[n("v-uni-view",{},[t._v(t._s(e.sales)+"人兑换")]),n("v-uni-view",{staticClass:"exchange"},[t._v("兑换")])],1)],1)],1)],1)})),t.productList.length>0?n("v-uni-view",{staticClass:"loadingicon acea-row row-center-wrapper"},[n("v-uni-text",{staticClass:"loading iconfont icon-jiazai",attrs:{hidden:0==t.loading}}),t._v(t._s(t.loadTitle))],1):t._e()],2)],1),0==t.productList.length&&t.where.page>1?n("v-uni-view",{staticClass:"noCommodity"},[n("v-uni-view",{staticClass:"pictrue"},[n("v-uni-image",{attrs:{src:i("6482")}})],1),n("recommend",{attrs:{hostProduct:t.hostProduct}})],1):t._e(),n("home")],1)},a=[]},c9cf:function(t,e,i){"use strict";i.r(e);var n=i("f060"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},f060:function(t,e,i){"use strict";var n=i("4ea4");i("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(i("cc0f")),a=i("22bc"),s=i("3589"),o=n(i("bb18")),c=i("2f62"),u=i("370a"),d=n(i("db17")),l={computed:(0,c.mapGetters)(["uid"]),components:{recommend:o.default,home:r.default},mixins:[d.default],data:function(){return{productList:[],is_switch:!0,where:{store_name:"",priceOrder:"",salesOrder:"",page:1,limit:20},price:0,stock:0,nows:!1,loadend:!1,loading:!1,loadTitle:"加载更多",title:"",hostProduct:[],hotPage:1,hotLimit:10,hotScroll:!1}},onLoad:function(t){this.where.cid=t.cid||0,this.$set(this.where,"sid",t.sid||0),this.title=t.title||"",this.$set(this.where,"store_name",t.searchValue||""),this.get_product_list(),this.get_host_product()},methods:{godDetail:function(t){(0,u.goShopDetail)(t,this.uid).then((function(e){uni.navigateTo({url:"/pages/points_mall/integral_goods_details?id=".concat(t.id)})}))},Changswitch:function(){var t=this;t.is_switch=!t.is_switch},searchSubmit:function(t){var e=this;e.$set(e.where,"store_name",t.detail.value),e.loadend=!1,e.$set(e.where,"page",1),this.get_product_list(!0)},get_host_product:function(){var t=this;t.hotScroll||(0,a.getProductHot)(t.hotPage,t.hotLimit).then((function(e){t.hotPage++,t.hotScroll=e.data.length<t.hotLimit,t.hostProduct=t.hostProduct.concat(e.data)}))},set_where:function(t){switch(t){case 1:this.where={store_name:"",priceOrder:"",salesOrder:"",page:1,limit:20},this.price=0,this.stock=0;break;case 2:0==this.price?this.price=1:1==this.price?this.price=2:2==this.price&&(this.price=0),this.stock=0;break;case 3:0==this.stock?this.stock=1:1==this.stock?this.stock=2:2==this.stock&&(this.stock=0),this.price=0;break;case 4:this.nows=!this.nows;break}this.loadend=!1,this.$set(this.where,"page",1),this.get_product_list(!0)},setWhere:function(){0==this.price?this.where.priceOrder="":1==this.price?this.where.priceOrder="asc":2==this.price&&(this.where.priceOrder="desc"),0==this.stock?this.where.salesOrder="":1==this.stock?this.where.salesOrder="asc":2==this.stock&&(this.where.salesOrder="desc"),this.where.news=this.nows?1:0},get_product_list:function(t){var e=this;e.setWhere(),e.loadend||e.loading||(!0===t&&e.$set(e,"productList",[]),e.loading=!0,e.loadTitle="",(0,s.getStoreIntegralList)(e.where).then((function(t){var i=t.data,n=e.$util.SplitArray(i,e.productList),r=i.length<e.where.limit;e.loadend=r,e.loading=!1,e.loadTitle=r?"已全部加载":"加载更多",e.$set(e,"productList",n),e.$set(e.where,"page",e.where.page+1)})).catch((function(t){e.loading=!1,e.loadTitle="加载更多"})))}},onPullDownRefresh:function(){},onReachBottom:function(){this.productList.length>0?this.get_product_list():this.get_host_product()}};e.default=l}}]);