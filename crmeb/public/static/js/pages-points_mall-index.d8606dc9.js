(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-points_mall-index"],{1754:function(t,i,e){"use strict";e("99af"),e("d3b7"),Object.defineProperty(i,"__esModule",{value:!0}),i.goShopDetail=n,i.goPage=s;var a=getApp();function n(t,i){return new Promise((function(e){t.activity&&"1"===t.activity.type?uni.navigateTo({url:"/pages/activity/goods_seckill_details/index?id=".concat(t.activity.id,"&time=").concat(t.activity.time,"&status=1")}):t.activity&&"2"===t.activity.type?uni.navigateTo({url:"/pages/activity/goods_bargain_details/index?id=".concat(t.activity.id,"&bargain=").concat(i)}):t.activity&&"3"===t.activity.type?uni.navigateTo({url:"/pages/activity/goods_combination_details/index?id=".concat(t.activity.id)}):e(t)}))}function s(){return new Promise((function(t){if(0!=a.globalData.isIframe)return!1;t(!0)}))}},"1ac4":function(t,i){t.exports="data:image/png;base64,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"},"207b":function(t,i,e){"use strict";e.r(i);var a=e("696d"),n=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);i["default"]=n.a},2111:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.swiper[data-v-e2ae9a18],\nuni-swiper[data-v-e2ae9a18],\nuni-swiper-item[data-v-e2ae9a18],\n.slide-image[data-v-e2ae9a18]{width:100%;height:%?280?%}[data-v-e2ae9a18] .uni-swiper-wrapper{border-radius:%?10?%}.swiper[data-v-e2ae9a18]{padding:%?20?%}.points-swiper[data-v-e2ae9a18]{position:relative;width:100%;background-color:#fff}.points-swiper .bag[data-v-e2ae9a18]{position:absolute;width:100%;height:%?285?%}.points-swiper .points-swiper-sty[data-v-e2ae9a18]{padding:%?20?% %?26?%}.model[data-v-e2ae9a18]{display:flex;justify-content:space-between;padding:%?56?% %?42?%;background-color:#fff}.model-list[data-v-e2ae9a18]{display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:%?26?%;color:#333;margin-top:%?27?%;font-weight:500}.model-list .img[data-v-e2ae9a18]{width:%?84?%;height:%?84?%;margin-bottom:%?19?%}.body[data-v-e2ae9a18]{background-color:#fff;padding:0 %?30?%;margin-top:%?20?%}.body .body-title[data-v-e2ae9a18]{display:flex;justify-content:space-between;padding:%?30?% 0 %?10?% 0}.body .body-title .title[data-v-e2ae9a18]{font-size:%?32?%;font-family:PingFang SC;font-weight:700}.body .body-title .jump-trip[data-v-e2ae9a18],\n.body .body-title .icon-xiangyou[data-v-e2ae9a18]{font-size:%?24?%;color:#999}.body .product-list[data-v-e2ae9a18]{display:flex;flex-wrap:wrap;justify-content:space-between;margin-top:%?30?%}.body .product-list .product-item[data-v-e2ae9a18]{position:relative;width:%?334?%;background:#fff;border-radius:%?10?%;margin-bottom:%?20?%;box-shadow:0 0 7px rgba(0,0,0,.06)}.body .product-list .product-item uni-image[data-v-e2ae9a18]{width:100%;height:%?344?%;border-radius:%?10?% %?10?% 0 0}.body .product-list .product-item .info[data-v-e2ae9a18]{padding:%?14?% %?16?%}.body .product-list .product-item .info .title[data-v-e2ae9a18]{font-size:%?28?%}.body .product-list .product-item .info .price-box[data-v-e2ae9a18]{font-size:%?26?%;font-weight:700;margin-top:8px;color:var(--view-theme)}.body .product-list .product-item .info .sales[data-v-e2ae9a18]{font-size:%?22?%;color:#999}.footer[data-v-e2ae9a18]{margin-top:%?20?%}.footer .footer-list[data-v-e2ae9a18]{display:flex;justify-content:space-between;padding:%?26?% 0}.footer .footer-list .list-left[data-v-e2ae9a18]{display:flex;align-items:center}.footer .footer-list .list-left .icon-sty[data-v-e2ae9a18]{width:%?80?%;height:%?80?%;margin-right:%?18?%}.footer .footer-list .list-left .list-left-right .title[data-v-e2ae9a18]{font-size:%?28?%;font-weight:700;color:#333}.footer .footer-list .list-left .list-left-right .trip[data-v-e2ae9a18]{font-size:%?22?%;color:#999}.footer .footer-list .right-box[data-v-e2ae9a18]{display:flex;align-items:center}.footer .footer-list .go-jump[data-v-e2ae9a18]{display:flex;align-items:center;background-color:#e93323;border-radius:%?26?%;color:#fff;font-size:%?28?%;height:%?48?%;line-height:%?48?%;padding:%?6?% %?24?%}.no-goods[data-v-e2ae9a18]{display:flex;flex-direction:column;height:%?472?%}.no-goods uni-image[data-v-e2ae9a18]{width:100%;display:block;margin:0 auto}.no-goods .fontimg[data-v-e2ae9a18]{text-align:center;color:#bebebe}',""]),t.exports=i},"26da":function(t,i,e){t.exports=e.p+"static/img/luck-draw.ab861eb9.png"},"3d96":function(t,i){t.exports="data:image/png;base64,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"},4339:function(t,i,e){"use strict";e.r(i);var a=e("4e71"),n=e("207b");for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);e("5172");var o,d=e("f0c5"),r=Object(d["a"])(n["default"],a["b"],a["c"],!1,null,"e2ae9a18",null,!1,a["a"],o);i["default"]=r.exports},"4e71":function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return a}));var n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{style:t.colorStyle},[a("v-uni-view",{staticClass:"points-swiper"},[a("v-uni-image",{staticClass:"bag",attrs:{src:e("cc79"),mode:""}}),a("v-uni-view",{staticClass:"swiper"},[a("v-uni-swiper",{attrs:{"indicator-dots":"true",autoplay:t.autoplay,circular:t.circular,interval:t.interval,duration:t.duration,"indicator-color":"rgba(255,255,255,0.6)","indicator-active-color":"#fff"}},[t._l(t.imgUrls,(function(i,e){return[a("v-uni-swiper-item",[a("v-uni-image",{staticClass:"slide-image",attrs:{src:i.img},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goPages(i)}}})],1)]}))],2)],1)],1),a("v-uni-view",{staticClass:"model"},t._l(t.modelList,(function(i,e){return a("v-uni-view",{key:e,staticClass:"model-list",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.jump(i.url)}}},[a("v-uni-image",{staticClass:"img",attrs:{src:i.imgUrl,mode:""}}),a("v-uni-text",[t._v(t._s(i.title))])],1)})),1),a("v-uni-view",{staticClass:"body"},[a("v-uni-view",{staticClass:"body-title"},[a("v-uni-text",{staticClass:"title"},[t._v("大家都在换")]),a("v-uni-text",{staticClass:"jump-trip",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.jumpMore.apply(void 0,arguments)}}},[t._v("查看更多"),a("v-uni-text",{staticClass:"iconfont icon-xiangyou"})],1)],1),t.goodList.length?a("v-uni-view",{staticClass:"product-list"},t._l(t.goodList,(function(i,e){return a("v-uni-view",{staticClass:"product-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goGoodsDetail(i)}}},[a("v-uni-image",{attrs:{src:i.image}}),a("v-uni-view",{staticClass:"info"},[a("v-uni-view",{staticClass:"title line1"},[t._v(t._s(i.title))]),a("v-uni-view",{staticClass:"price-box"},[t._v(t._s(i.price)+"积分")]),a("v-uni-view",{staticClass:"sales"},[t._v(t._s(i.sales)+"人兑换")])],1)],1)})),1):a("v-uni-view",{staticClass:"no-goods"},[a("v-uni-image",{attrs:{src:e("d03b"),mode:""}}),a("v-uni-view",{staticClass:"fontimg"},[t._v("暂无商品，去看点别的吧")])],1),a("v-uni-view",{staticClass:"footer"},[a("v-uni-view",{staticClass:"body-title"},[a("v-uni-text",{staticClass:"title"},[t._v("轻松赚积分")]),a("v-uni-text")],1),a("v-uni-view",{staticClass:"footer-list"},[a("v-uni-view",{staticClass:"list-left"},[a("v-uni-image",{staticClass:"icon-sty",attrs:{src:e("3d96"),mode:""}}),a("v-uni-view",{staticClass:"list-left-right"},[a("v-uni-view",{staticClass:"title"},[t._v("购买商品")]),a("v-uni-view",{staticClass:"trip"},[t._v("购买商品可获得积分奖励")])],1)],1),a("v-uni-navigator",{staticClass:"right-box",attrs:{url:"/pages/index/index","open-type":"switchTab"}},[a("v-uni-text",{staticClass:"go-jump"},[t._v("去完成")])],1)],1),a("v-uni-view",{staticClass:"footer-list"},[a("v-uni-view",{staticClass:"list-left"},[a("v-uni-image",{staticClass:"icon-sty",attrs:{src:e("1ac4"),mode:""}}),a("v-uni-view",{staticClass:"list-left-right"},[a("v-uni-view",{staticClass:"title"},[t._v("每日签到活动")]),a("v-uni-view",{staticClass:"trip"},[t._v("每日签到可获得积分奖励")])],1)],1),a("v-uni-navigator",{staticClass:"right-box",attrs:{url:"/pages/users/user_sgin/index"}},[a("v-uni-text",{staticClass:"go-jump"},[t._v("去完成")])],1)],1),a("v-uni-view",{staticClass:"footer-list"},[a("v-uni-view",{staticClass:"list-left"},[a("v-uni-image",{staticClass:"icon-sty",attrs:{src:e("26da"),mode:""}}),a("v-uni-view",{staticClass:"list-left-right"},[a("v-uni-view",{staticClass:"title"},[t._v("九宫格抽奖活动")]),a("v-uni-view",{staticClass:"trip"},[t._v("幸运抽奖可获得积分奖励")])],1)],1),a("v-uni-navigator",{staticClass:"right-box",attrs:{url:"/pages/activity/lottery/grids/index?type=1"}},[a("v-uni-text",{staticClass:"go-jump"},[t._v("去完成")])],1)],1)],1)],1)],1)},s=[]},5172:function(t,i,e){"use strict";var a=e("aa47"),n=e.n(a);n.a},"696d":function(t,i,e){"use strict";var a=e("4ea4");e("c975"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e("26cb"),s=e("b14e"),o=e("1754"),d=a(e("2d3a")),r={components:{},mixins:[d.default],data:function(){return{autoplay:!0,circular:!0,interval:3e3,duration:500,imgUrls:[],goodList:[],modelList:[{title:"我的积分",imgUrl:"../../static/images/my-point.png",url:"/pages/users/user_integral/index"},{title:"每日签到",imgUrl:"../../static/images/sign-in.png",url:"/pages/users/user_sgin/index"},{title:"积分抽奖",imgUrl:"../../static/images/points-lottery.png",url:"/pages/activity/lottery/grids/index?type=1"},{title:"兑换记录",imgUrl:"../../static/images/exchange.png",url:"/pages/points_mall/exchange_record"}]}},computed:(0,n.mapGetters)(["isLogin"]),onLoad:function(){this.getStoreIntegral()},watch:{isLogin:{handler:function(t,i){1==t&&this.getStoreIntegral()},deep:!0}},methods:{getStoreIntegral:function(){var t=this;(0,s.getStoreIntegral)().then((function(i){t.imgUrls=i.data.banner,t.goodList=i.data.list}))},goGoodsDetail:function(t){(0,o.goShopDetail)(t).then((function(i){uni.navigateTo({url:"/pages/points_mall/integral_goods_details?id=".concat(t.id)})}))},jumpMore:function(){uni.navigateTo({url:"/pages/points_mall/integral_goods_list"})},goPages:function(t){var i=t.link;-1!=i.indexOf("http")?location.href=i:-1==["/pages/goods_cate/goods_cate","/pages/order_addcart/order_addcart","/pages/user/index","/pages/index/index"].indexOf(i)?uni.navigateTo({url:i}):uni.switchTab({url:i})},jump:function(t){uni.navigateTo({url:t})}}};i.default=r},aa47:function(t,i,e){var a=e("2111");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("02cd0180",a,!0,{sourceMap:!1,shadowMode:!1})},b14e:function(t,i,e){"use strict";var a=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.getStoreIntegral=s;var n=a(e("0302"));function s(t){return n.default.get("store_integral/index",t)}},cc79:function(t,i){t.exports="data:image/png;base64,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"},d03b:function(t,i,e){t.exports=e.p+"static/img/no-thing.426652cb.png"}}]);