(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-points_mall-integral_order"],{"03ff":function(t,e,i){"use strict";i.r(e);var a=i("344e"),n=i("1565");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("15bc");var o,r=i("f0c5"),d=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"5c721f6d",null,!1,a["a"],o);e["default"]=d.exports},1365:function(t,e,i){"use strict";var a=i("191d"),n=i.n(a);n.a},1565:function(t,e,i){"use strict";i.r(e);var a=i("539e"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},"15bc":function(t,e,i){"use strict";var a=i("c257"),n=i.n(a);n.a},"191d":function(t,e,i){var a=i("a78a");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("db548752",a,!0,{sourceMap:!1,shadowMode:!1})},"296d":function(t,e,i){"use strict";var a=i("b76b"),n=i.n(a);n.a},"344e":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{style:t.colorStyle},[i("v-uni-view",{staticStyle:{"touch-action":"none"}},[i("v-uni-view",{staticClass:"home",staticStyle:{position:"fixed"},style:{top:t.top+"px"},attrs:{id:"right-nav"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.setTouchMove.apply(void 0,arguments)}}},[t.homeActive?i("v-uni-view",{staticClass:"homeCon bg-color",class:!0===t.homeActive?"on":""},[i("v-uni-navigator",{staticClass:"iconfont icon-shouye-xianxing",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/index/index"}}),i("v-uni-navigator",{staticClass:"iconfont icon-caigou-xianxing",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/order_addcart/order_addcart"}}),i("v-uni-navigator",{staticClass:"iconfont icon-yonghu1",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/user/index"}})],1):t._e(),i("v-uni-view",{staticClass:"pictrueBox",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{staticClass:"image",attrs:{src:!0===t.homeActive?t.imgHost+"/statics/images/close.gif":t.imgHost+"/statics/images/open.gif"}})],1)],1)],1)],1)],1)},s=[]},"539e":function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("26cb"),s=a(i("66ca")),o=i("989b"),r={name:"Home",props:{},mixins:[s.default],data:function(){return{top:"545",imgHost:o.HTTP_REQUEST_URL}},computed:(0,n.mapGetters)(["homeActive"]),methods:{setTouchMove:function(t){var e=this;t.touches[0].clientY<545&&t.touches[0].clientY>66&&(e.top=t.touches[0].clientY)},open:function(){this.homeActive?this.$store.commit("CLOSE_HOME"):this.$store.commit("OPEN_HOME")}},created:function(){},beforeDestroy:function(){this.$store.commit("CLOSE_HOME")}};e.default=r},"6a71":function(t,e,i){"use strict";var a=i("4ea4");i("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.getCombinationList=s,e.getCombinationDetail=o,e.getCombinationPink=r,e.postCombinationRemove=d,e.getBargainList=u,e.getCombinationBannerList=c,e.getPink=l,e.getBargainUserList=f,e.getBargainDetail=p,e.postBargainStartUser=v,e.postBargainStart=g,e.postBargainHelp=h,e.postBargainHelpPrice=m,e.postBargainHelpList=b,e.postBargainHelpCount=_,e.postBargainShare=w,e.getSeckillIndexTime=y,e.getSeckillList=C,e.getSeckillDetail=x,e.getBargainPoster=I,e.getCombinationPoster=$,e.getBargainUserCancel=k,e.seckillCode=T,e.scombinationCode=S,e.getCombinationPosterData=A,e.getBargainPosterData=z,e.integralOrderConfirm=L,e.integralOrderCreate=P,e.integralOrderDetails=E,e.getIntegralProductDetail=O,e.getStoreIntegralList=B,e.getIntegralOrderList=D,e.getLogisticsDetails=M,e.orderTake=j,e.orderDel=N,e.getPresellList=H;var n=a(i("3160"));function s(t){return n.default.get("combination/list",t,{noAuth:!0})}function o(t){return n.default.get("combination/detail/"+t)}function r(t){return n.default.get("combination/pink/"+t)}function d(t){return n.default.post("combination/remove",t)}function u(t){return n.default.get("bargain/list",t,{noAuth:!0})}function c(t){return n.default.get("combination/banner_list",t,{noAuth:!0})}function l(t){return n.default.get("pink",t,{noAuth:!0})}function f(t){return n.default.get("bargain/user/list",t)}function p(t,e){return n.default.get("bargain/detail/".concat(t,"?bargainUid=").concat(e))}function v(t){return n.default.post("bargain/start/user",t)}function g(t){return n.default.post("bargain/start",{bargainId:t})}function h(t){return n.default.post("bargain/help",t)}function m(t){return n.default.post("bargain/help/price",t)}function b(t){return n.default.post("bargain/help/list",t)}function _(t){return n.default.post("bargain/help/count",t)}function w(t){return n.default.post("bargain/share",{bargainId:t})}function y(){return n.default.get("seckill/index",{},{noAuth:!0})}function C(t,e){return n.default.get("seckill/list/"+t,e,{noAuth:!0})}function x(t,e){return n.default.get("seckill/detail/"+t,e)}function I(t){return n.default.post("bargain/poster",t)}function $(t){return n.default.post("combination/poster",t)}function k(t){return n.default.post("bargain/user/cancel",t)}function T(t,e){return n.default.get("seckill/code/"+t,e)}function S(t){return n.default.get("combination/code/"+t)}function A(t){return n.default.get("combination/poster_info/"+t)}function z(t){return n.default.get("bargain/poster_info/"+t)}function L(t){return n.default.post("store_integral/order/confirm",t)}function P(t){return n.default.post("store_integral/order/create",t)}function E(t){return n.default.get("store_integral/order/detail/".concat(t))}function O(t){return n.default.get("store_integral/detail/"+t,{},{noAuth:!0})}function B(t){return n.default.get("store_integral/list",t)}function D(t){return n.default.get("store_integral/order/list",t)}function M(t){return n.default.get("store_integral/order/express/".concat(t))}function j(t){return n.default.post("store_integral/order/take",t)}function N(t){return n.default.post("store_integral/order/del",t)}function H(t){return n.default.get("advance/list",t)}},"6f2f":function(t,e,i){"use strict";i.r(e);var a=i("70ba"),n=i("eebd");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("296d");var o,r=i("f0c5"),d=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"20445d74",null,!1,a["a"],o);e["default"]=d.exports},"70ba":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{style:t.colorStyle},[i("v-uni-view",{staticClass:"order-submission"},[i("v-uni-view",{staticClass:"allAddress",style:t.store_self_mention?"":"padding-top:10rpx"},[0==t.shippingType?i("v-uni-view",{staticClass:"address acea-row row-between-wrapper",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onAddress.apply(void 0,arguments)}}},[t.addressInfo.real_name?i("v-uni-view",{staticClass:"addressCon"},[i("v-uni-view",{staticClass:"name"},[t._v(t._s(t.addressInfo.real_name)),i("v-uni-text",{staticClass:"phone"},[t._v(t._s(t.addressInfo.phone))])],1),i("v-uni-view",{staticClass:"line1"},[t.addressInfo.is_default?i("v-uni-text",{staticClass:"default font-num"},[t._v(t._s(t.$t("[默认]")))]):t._e(),t._v(t._s(t.addressInfo.province)+t._s(t.addressInfo.city)+t._s(t.addressInfo.district)+t._s(t.addressInfo.detail))],1)],1):i("v-uni-view",{staticClass:"addressCon"},[i("v-uni-view",{staticClass:"setaddress"},[t._v(t._s(t.$t("设置收货地址")))])],1),i("v-uni-view",{staticClass:"iconfont icon-jiantou"})],1):t._e(),i("v-uni-view",{staticClass:"line"},[i("v-uni-image",{attrs:{src:"/static/images/line.jpg"}})],1)],1),i("v-uni-view",{staticClass:"orderGoods"},[i("v-uni-view",{staticClass:"total"},[t._v(t._s(t.$t("共"))+t._s(t.resData.num)+t._s(t.$t("件商品")))]),i("v-uni-view",{staticClass:"goodWrapper"},[i("v-uni-view",{staticClass:"item acea-row row-between-wrapper",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.jumpCon(t.cartInfo.product_id)}}},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{attrs:{src:t.cartInfo.image}})],1),i("v-uni-view",{staticClass:"text"},[i("v-uni-view",{staticClass:"acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"name line1"},[t._v(t._s(t.cartInfo.store_name))]),i("v-uni-view",{staticClass:"num"},[t._v("x "+t._s(t.resData.num))])],1),t.cartInfo.suk?i("v-uni-view",{staticClass:"attr line1"},[t._v(t._s(t.cartInfo.suk))]):t._e(),i("v-uni-view",{staticClass:"money font-color"},[t._v(t._s(t.cartInfo.price)+" "+t._s(t.$t("积分")))])],1)],1)],1)],1),i("v-uni-view",{staticClass:"wrapper"},[i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",[t._v(t._s(t.$t("可用积分")))]),i("v-uni-view",{staticClass:"discount"},[t._v(t._s(t.resData.integral))])],1),i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",[t._v(t._s(t.$t("快递费用")))]),i("v-uni-view",{staticClass:"discount"},[t._v(t._s(t.$t("免运费")))])],1),t.textareaStatus?i("v-uni-view",{staticClass:"item"},[i("v-uni-view",[t._v(t._s(t.$t("备注信息")))]),i("v-uni-view",{staticClass:"placeholder-textarea"},[!1===t.coupon.coupon?i("v-uni-textarea",{ref:"getFocus",attrs:{focus:t.textFocus,value:"",name:"mark"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.bindHideKeyboard.apply(void 0,arguments)}}}):t._e(),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!t.mark,expression:"!mark"}],staticClass:"placeholder",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickTextArea.apply(void 0,arguments)}}},[t._v(t._s(t.$t("请添加备注（150字以内）")))])],1)],1):t._e()],1),i("v-uni-view",{staticStyle:{height:"120rpx"}}),i("v-uni-view",{staticClass:"footer acea-row row-between-wrapper"},[i("v-uni-view",[t._v(t._s(t.$t("合计"))+"："),i("v-uni-text",{staticClass:"font-color"},[t._v(t._s(t.resData.total_price||0)+t._s(t.$t("积分")))])],1),i("v-uni-view",{staticClass:"settlement",staticStyle:{"z-index":"100"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goPay.apply(void 0,arguments)}}},[t._v(t._s(t.$t("立即兑换")))])],1)],1),i("v-uni-view",{staticClass:"alipaysubmit",domProps:{innerHTML:t._s(t.formContent)}}),i("couponListWindow",{attrs:{coupon:t.coupon,openType:t.openType,cartId:t.cartId},on:{ChangCouponsClone:function(e){arguments[0]=e=t.$handleEvent(e),t.ChangCouponsClone.apply(void 0,arguments)},ChangCoupons:function(e){arguments[0]=e=t.$handleEvent(e),t.ChangCoupons.apply(void 0,arguments)}}}),i("addressWindow",{ref:"addressWindow",attrs:{news:t.news,address:t.address,pagesUrl:t.pagesUrl},on:{changeTextareaStatus:function(e){arguments[0]=e=t.$handleEvent(e),t.changeTextareaStatus.apply(void 0,arguments)},OnChangeAddress:function(e){arguments[0]=e=t.$handleEvent(e),t.OnChangeAddress.apply(void 0,arguments)},changeClose:function(e){arguments[0]=e=t.$handleEvent(e),t.changeClose.apply(void 0,arguments)}}}),i("home",{directives:[{name:"show",rawName:"v-show",value:!t.invShow,expression:"!invShow"}]})],1)},s=[]},"7c5c":function(t,e,i){"use strict";i.r(e);var a=i("c78f"),n=i("a212");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("1365");var o,r=i("f0c5"),d=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"21c7a26a",null,!1,a["a"],o);e["default"]=d.exports},"979f":function(t,e,i){"use strict";var a=i("4ea4");i("99af"),i("7db0"),i("4160"),i("d81d"),i("d3b7"),i("acd8"),i("e25e"),i("25f0"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("6a71"),s=i("8ba8"),o=(i("1579"),i("2038"),a(i("34ab"))),r=a(i("1b17")),d=a(i("7c5c")),u=a(i("03ff")),c=i("666f"),l=i("26cb"),f=a(i("66ca")),p={components:{couponListWindow:o.default,addressWindow:r.default,orderGoods:d.default,home:u.default},mixins:[f.default],data:function(){return{textFocus:!1,textareaStatus:!0,cartArr:[{name:this.$t("微信支付"),icon:"icon-weixin2",value:"weixin",title:this.$t("使用微信快捷支付"),payStatus:1},{name:this.$t("支付宝支付"),icon:"icon-zhifubao",value:"alipay",title:this.$t("使用线上支付宝支付"),payStatus:1},{name:this.$t("余额支付"),icon:"icon-yuezhifu",value:"yue",title:this.$t("可用余额:"),payStatus:1},{name:this.$t("线下支付"),icon:"icon-yuezhifu1",value:"offline",title:this.$t("选择线下付款方式"),payStatus:2}],formContent:"",payType:"weixin",openType:1,active:0,coupon:{coupon:!1,list:[],statusTile:this.$t("立即使用")},address:{address:!1},addressInfo:{},pinkId:0,addressId:0,couponId:0,cartId:"",BargainId:0,combinationId:0,seckillId:0,userInfo:{},coupon_price:0,useIntegral:!1,integral_price:0,integral:0,ChangePrice:0,formIds:[],status:0,is_address:!1,toPay:!1,shippingType:0,system_store:{},storePostage:0,contacts:"",contactsTel:"",mydata:{},storeList:[],store_self_mention:0,cartInfo:{},priceGroup:{},animated:!1,totalPrice:0,integralRatio:"0",pagesUrl:"",orderKey:"",offlinePostage:"",isAuto:!1,isShowAuth:!1,from:"",news:1,invTitle:this.$t("不开发票"),special_invoice:!1,invoice_func:!1,header_type:"",invShow:!1,invList:[],invChecked:"",urlQuery:"",pay_close:!1,resData:{},mark:""}},computed:(0,l.mapGetters)(["isLogin"]),onLoad:function(t){if(this.from=this.$wechat.isWeixin()?"weixin":"weixinh5",!t.unique)return this.$util.Tips({title:this.$t("请选择要购买的商品")},{tab:3,url:1});this.unique=t.unique,this.num=t.num,this.couponId=t.couponId||0,this.pinkId=t.pinkId?parseInt(t.pinkId):0,this.addressId=t.addressId||0,this.cartId=t.cartId,this.is_address=!!t.is_address,this.news=t.new&&"0"!==t.new?1:0,this.invChecked=t.invoice_id||"",this.header_type=t.header_type||"1",this.couponTitle=t.couponTitle||this.$t("请选择"),this.textareaStatus=!0,this.isLogin&&0==this.toPay?(this.getaddressInfo(),this.getConfirm(),this.$nextTick((function(){this.$refs.addressWindow.getAddressList()}))):(0,c.toLogin)()},onShow:function(){var t=this;uni.$on("handClick",(function(e){e&&(t.system_store=e.address),uni.$off("handClick")}))},methods:{getInvoiceList:function(){var t=this;uni.showLoading({title:this.$t("正在加载…")}),(0,s.invoiceList)().then((function(e){uni.hideLoading(),t.invList=e.data.map((function(t){return t.id=t.id.toString(),t}));var i=t.invList.find((function(e){return e.id==t.invChecked}));if(i){var a="";a+=1===i.header_type?t.$t("个人"):t.$t("企业"),a+=1===i.type?t.$t("普通"):t.$t("专用"),a+=t.$t("发票"),t.invTitle=a}})).catch((function(t){uni.showToast({title:t,icon:"none"})}))},onChangeFun:function(t){var e=t,i=e.action||null,a=void 0!=e.value?e.value:null;i&&this[i]&&this[i](a)},payClose:function(){this.pay_close=!1},goPay:function(){var t=this;if(!t.addressId)return t.$util.Tips({title:t.$t("请选择收货地址")});if(parseFloat(t.resData.integral)<parseFloat(t.cartInfo.price))return t.$util.Tips({title:t.$t("可用积分不足！")});var e={addressId:t.addressId,mark:t.mark,unique:this.cartInfo.unique,num:this.resData.num};(0,n.integralOrderCreate)(e).then((function(t){uni.redirectTo({url:"/pages/points_mall/integral_order_status?order_id=".concat(t.data.result.orderId)})})).catch((function(e){return uni.hideLoading(),t.$util.Tips({title:e})}))},changeClose:function(){this.$set(this.address,"address",!1)},computedPrice:function(){var t=this,e=this.shippingType;postOrderComputed(this.orderKey,{addressId:this.addressId,useIntegral:this.useIntegral?1:0,couponId:this.couponId,shipping_type:parseInt(e)+1,payType:this.payType}).then((function(i){var a=i.data.result;a&&(t.totalPrice=a.pay_price,t.integral_price=a.deduction_price,t.coupon_price=a.coupon_price,t.integral=t.useIntegral?a.SurplusIntegral:t.userInfo.integral,t.$set(t.priceGroup,"storePostage",1==e?0:a.pay_postage),t.$set(t.priceGroup,"storePostageDiscount",a.storePostageDiscount))}))},ChangCouponsClone:function(){this.$set(this.coupon,"coupon",!1)},changeTextareaStatus:function(){for(var t=0,e=this.coupon.list.length;t<e;t++)this.coupon.list[t].use_title="",this.coupon.list[t].is_use=0;this.textareaStatus=!0,this.status=0,this.$set(this.coupon,"list",this.coupon.list)},OnChangeAddress:function(t){this.textareaStatus=!0,this.addressId=t,this.address.address=!1,this.getaddressInfo()},bindHideKeyboard:function(t){this.mark=t.detail.value},getConfirm:function(){var t=this,e=this;(0,n.integralOrderConfirm)({unique:this.unique,num:this.num}).then((function(t){e.$set(e,"resData",t.data),e.$set(e,"cartInfo",t.data.productInfo)})).catch((function(e){return t.$util.Tips({title:e})}))},getBargainId:function(){var t=this,e=t.cartInfo,i=0,a=0;e.forEach((function(t,e,n){i=n[e].bargain_id,a=n[e].combination_id})),t.$set(t,"BargainId",parseInt(i)),t.$set(t,"combinationId",parseInt(a)),3==t.cartArr.length&&(i||a||t.seckillId)&&(t.cartArr[2].payStatus=0,t.$set(t,"cartArr",t.cartArr))},getaddressInfo:function(){var t=this;t.addressId?(0,s.getAddressDetail)(t.addressId).then((function(e){e.data.is_default=parseInt(e.data.is_default),t.addressInfo=e.data||{},t.addressId=e.data.id||0,t.address.addressId=e.data.id||0})):(0,s.getAddressDefault)().then((function(e){e.data.is_default=parseInt(e.data.is_default),t.addressInfo=e.data||{},t.addressId=e.data.id||0,t.address.addressId=e.data.id||0}))},couponTap:function(){var t=this;this.coupon.coupon=!0,this.coupon.list.forEach((function(e,i){e.id==t.couponId?e.is_use=1:e.is_use=0})),this.$set(this.coupon,"list",this.coupon.list)},car:function(){var t=this;t.animated=!1},onAddress:function(){var t=this;t.textareaStatus=!1,t.address.address=!0,t.pagesUrl="/pages/points_mall/user_address?unique=".concat(this.unique,"&num=").concat(this.num)},clickTextArea:function(){this.textFocus=!0}}};e.default=p},a212:function(t,e,i){"use strict";i.r(e);var a=i("e222"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},a78a:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.fontcolor[data-v-21c7a26a]{color:#e93323}.orderGoods[data-v-21c7a26a]{background-color:#fff}.orderGoods .total[data-v-21c7a26a]{display:flex;justify-content:space-between;align-items:center;width:100%;padding:0 %?30?%;border-bottom:%?2?% solid #f0f0f0;font-size:%?30?%;color:#282828;line-height:%?86?%;box-sizing:border-box}.botton-btn[data-v-21c7a26a]{display:flex;align-items:right;justify-content:flex-end;padding:%?0?% %?20?% %?20?% %?20?%}.rig-btn[data-v-21c7a26a]{display:flex;align-items:center}.rig-btn .refund[data-v-21c7a26a]{font-size:%?26?%;color:#e93323}.rig-btn .done[data-v-21c7a26a]{font-size:%?26?%;color:#f19d2f}.logistics[data-v-21c7a26a]{line-height:%?30?%;color:#666;font-size:%?20?%;border:1px solid #ccc;border-radius:%?30?%;padding:%?8?% %?22?%;margin-left:%?10?%}.sure[data-v-21c7a26a]{color:#e93323;border:1px solid #e93323}.more-operation[data-v-21c7a26a]{display:flex;justify-content:center;align-items:center;padding:%?10?% 0;color:#bbb}.b-top[data-v-21c7a26a]{margin-left:%?30?%;margin-right:%?30?%;border-top:1px solid #f0f0f0}.fade-enter-active[data-v-21c7a26a],\n.fade-leave-active[data-v-21c7a26a]{transition:all .1s}.fade-enter[data-v-21c7a26a],\n.fade-leave-to[data-v-21c7a26a]{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.op[data-v-21c7a26a]{opacity:.5}.gray[data-v-21c7a26a]{-webkit-filter:grayscale(100%);filter:grayscale(100%);-webkit-filter:grey;filter:gray}.pic[data-v-21c7a26a]{display:flex;justify-content:space-between}.valid[data-v-21c7a26a]{margin-left:%?20?%;font-size:%?24?%}.pay-price[data-v-21c7a26a]{color:#e93323}.refund[data-v-21c7a26a]{text-align:right;font-size:%?26?%;color:var(--view-theme)}',""]),t.exports=e},a798:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".pictrueBox[data-v-5c721f6d]{width:%?130?%;height:%?120?%}\n\n/*返回主页按钮*/.home[data-v-5c721f6d]{position:fixed;color:#fff;text-align:center;z-index:999;right:%?15?%;display:flex}.home .homeCon[data-v-5c721f6d]{border-radius:%?50?%;opacity:0;height:0;color:var(--view-theme);width:0}.home .homeCon.on[data-v-5c721f6d]{opacity:1;-webkit-animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);width:%?300?%;height:%?86?%;margin-bottom:%?20?%;display:flex;justify-content:center;align-items:center;background:var(--view-theme)!important;opacity:.8;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.home .homeCon .iconfont[data-v-5c721f6d]{font-size:%?48?%;color:#fff;display:inline-block;margin:0 auto}.home .pictrue[data-v-5c721f6d]{width:%?86?%;height:%?86?%;border-radius:50%;margin:0 auto;background-color:var(--view-theme)}.home .pictrue .image[data-v-5c721f6d]{width:100%;height:100%;border-radius:50%;-webkit-transform:rotate(90deg);transform:rotate(90deg);ms-transform:rotate(90deg);moz-transform:rotate(90deg);webkit-transform:rotate(90deg);o-transform:rotate(90deg)}",""]),t.exports=e},b76b:function(t,e,i){var a=i("e610");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("7c5cb020",a,!0,{sourceMap:!1,shadowMode:!1})},c257:function(t,e,i){var a=i("a798");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("f61d2c94",a,!0,{sourceMap:!1,shadowMode:!1})},c78f:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"orderGoods"},[t.is_behalf?i("v-uni-view",{staticClass:"total"},[i("v-uni-text",[t._v(t._s(t.$t("代付金额"))+"："),i("v-uni-text",{staticClass:"pay-price"},[t._v("￥"+t._s(t.pay_price||0))])],1)],1):t.split||t.is_behalf?t.split?i("v-uni-view",{staticClass:"total"},[i("v-uni-text",[t._v(t._s(t.$t("订单包裹"))+" "+t._s(t.index+1))]),-1===t.status_type?i("v-uni-view",{staticClass:"rig-btn"},[i("v-uni-view",{staticClass:"refund"},[t._v(t._s(t.$t("申请退款中")))])],1):-2===t.status_type?i("v-uni-view",{staticClass:"rig-btn"},[i("v-uni-view",{staticClass:"refund"},[t._v(t._s(t.$t("已退款")))])],1):4===t.status_type?i("v-uni-view",{staticClass:"rig-btn"},[i("v-uni-view",{staticClass:"done"},[t._v(t._s(t.$t("已完成")))])],1):t._e()],1):t._e():i("v-uni-view",{staticClass:"total"},[t._v(t._s(t.$t("共"))+t._s(t.totalNmu)+t._s(t.$t("件商品")))]),i("v-uni-view",{staticClass:"goodWrapper"},t._l(t.cartInfo,(function(e,a){return i("v-uni-view",{key:a,class:{op:!e.is_valid},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.jumpCon(e.product_id)}}},[i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"pictrue",class:{gray:!e.is_valid}},[e.productInfo.attrInfo?i("v-uni-image",{attrs:{src:e.productInfo.attrInfo.image}}):i("v-uni-image",{attrs:{src:e.productInfo.image}})],1),i("v-uni-view",{staticClass:"text"},[i("v-uni-view",{staticClass:"acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"name line1"},[t._v(t._s(e.productInfo.store_name))]),i("v-uni-view",{staticClass:"num"},[t._v("x "+t._s(e.cart_num))])],1),e.productInfo.attrInfo?i("v-uni-view",{staticClass:"attr line1"},[t._v(t._s(e.productInfo.attrInfo.suk))]):t._e(),e.productInfo.attrInfo?i("v-uni-view",{staticClass:"money font-color pic"},[i("v-uni-text",{class:{gray:!e.is_valid}},[t._v(t._s(t.$t("￥"))+t._s(e.productInfo.attrInfo.price))]),e.refund_num&&-2!=t.statusType?i("v-uni-view",{staticClass:"refund"},[t._v(t._s(e.refund_num)+t._s(t.$t("件退款中")))]):t._e(),e.is_valid||0!==t.shipping_type?t._e():i("v-uni-text",{staticClass:"valid"},[t._v(t._s(t.$t("不支持配送")))]),e.productInfo.store_mention||1!==t.shipping_type?t._e():i("v-uni-text",{staticClass:"valid"},[t._v(t._s(t.$t("不支持自提")))])],1):i("v-uni-view",{staticClass:"money font-color pic"},[i("v-uni-text",{class:{gray:!e.is_valid}},[t._v(t._s(t.$t("￥"))+t._s(e.productInfo.price))]),e.is_valid||0!==t.shipping_type?t._e():i("v-uni-text",{staticClass:"valid"},[t._v(t._s(t.$t("仅支持到店")))]),e.productInfo.store_mention||1!==t.shipping_type?t._e():i("v-uni-text",{staticClass:"valid"},[t._v(t._s(t.$t("仅支持配送")))])],1)],1)],1),i("v-uni-view",{staticClass:"botton-btn"},[0==e.is_reply&&3==t.evaluate&&-1!=t.pid&&t.isShow?i("v-uni-view",{staticClass:"logistics",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.evaluateTap(e.unique,t.orderId)}}},[t._v(t._s(t.$t("评价")))]):t._e(),1===t.paid&&0===t.refund_status&&e.refund_num!=e.cart_num&&!t.is_confirm&&t.isShow&&0==t.virtualType?i("v-uni-view",{staticClass:"logistics",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.openSubcribe(e)}}},[t._v(t._s(t.$t("申请退款")))]):t._e(),2===t.status_type&&a===t.cartInfo.length-1||!t.split?i("v-uni-view",{staticClass:"rig-btn"},["express"===t.delivery_type?i("v-uni-view",{staticClass:"logistics",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.logistics(t.orderId)}}},[t._v(t._s(t.$t("查看物流")))]):t._e(),2===t.status_type?i("v-uni-view",{staticClass:"logistics sure",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.confirmOrder(t.orderId)}}},[t._v(t._s(t.$t("确认收货")))]):t._e()],1):t._e()],1)],1)})),1)],1)},s=[]},e222:function(t,e,i){"use strict";i("99af"),i("4160"),i("a9e3"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{statusType:{type:Number,default:0},virtualType:{type:Number,default:0},evaluate:{type:Number,default:0},oid:{type:Number,default:0},paid:{type:Number,default:0},cartInfo:{type:Array,default:function(){return[]}},orderId:{type:String,default:""},shipping_type:{type:Number,default:-1},delivery_type:{type:String,default:""},pay_price:{type:String,default:""},jump:{type:Boolean,default:!1},is_confirm:{type:Boolean,default:!1},is_behalf:{type:Boolean,default:!1},split:{type:Boolean,default:!1},jumpDetail:{type:Boolean,default:!1},index:{type:Number,default:0},pid:{type:Number,default:0},refund_status:{type:Number,default:0},status_type:{type:Number,default:0},isShow:{type:Boolean,default:!0}},data:function(){return{totalNmu:0,operationModel:!1,status:""}},watch:{cartInfo:function(t,e){var i=0;t.forEach((function(t,e){i+=t.cart_num})),this.totalNmu=i}},mounted:function(){var t=this,e=0;this.$nextTick((function(){t.cartInfo.forEach((function(t,i){e+=t.cart_num})),t.$set(t,"totalNmu",e)}))},methods:{evaluateTap:function(t,e){uni.navigateTo({url:"/pages/goods/goods_comment_con/index?unique="+t+"&uni="+e})},jumpCon:function(t){this.jump?uni.navigateTo({url:"/pages/goods_details/index?id=".concat(t)}):this.jumpDetail&&uni.navigateTo({url:"/pages/goods/order_details/index?order_id=".concat(this.orderId)})},logistics:function(t){uni.navigateTo({url:"/pages/goods/goods_logistics/index?orderId="+t})},confirmOrder:function(t){this.$emit("confirmOrder",t)},changeOperation:function(){this.operationModel=!this.operationModel},openSubcribe:function(t){var e=[];e.push({cart_id:t.id,cart_num:t.surplus_refund_num});var i=JSON.stringify(e);this.$emit("openSubcribe","/pages/goods/goods_return/index?orderId=".concat(this.orderId,"&id=").concat(this.oid,"&cartIds=").concat(i))}}};e.default=a},e610:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */[data-v-20445d74] uni-checkbox[disabled] .uni-checkbox-input{background-color:#eee}.alipaysubmit[data-v-20445d74]{display:none}.order-submission .line[data-v-20445d74]{width:100%;height:%?3?%}.order-submission .line uni-image[data-v-20445d74]{width:100%;height:100%;display:block}.order-submission .address[data-v-20445d74]{padding:%?28?% %?30?%;background-color:#fff;box-sizing:border-box}.order-submission .address .addressCon[data-v-20445d74]{width:%?610?%;font-size:%?26?%;color:#666}.order-submission .address .addressCon .name[data-v-20445d74]{font-size:%?30?%;color:#282828;font-weight:700;margin-bottom:%?10?%}.order-submission .address .addressCon .name .phone[data-v-20445d74]{margin-left:%?50?%}.order-submission .address .addressCon .default[data-v-20445d74]{margin-right:%?12?%}.order-submission .address .addressCon .setaddress[data-v-20445d74]{color:#333;font-size:%?28?%}.order-submission .address .iconfont[data-v-20445d74]{font-size:%?35?%;color:#707070}.order-submission .allAddress[data-v-20445d74]{width:100%;background:linear-gradient(180deg,var(--view-theme) 0,#f5f5f5);padding-top:%?100?%}.order-submission .allAddress .nav[data-v-20445d74]{width:%?710?%;margin:0 auto}.order-submission .allAddress .nav .item[data-v-20445d74]{width:%?355?%}.order-submission .allAddress .nav .item.on[data-v-20445d74]{position:relative;width:%?250?%}.order-submission .allAddress .nav .item.on[data-v-20445d74]::before{position:absolute;bottom:0;content:"快递配送";font-size:%?28?%;display:block;height:0;width:%?336?%;border-width:0 %?20?% %?80?% 0;border-style:none solid solid;border-color:transparent transparent #fff;z-index:2;border-radius:%?7?% %?30?% 0 0;text-align:center;line-height:%?80?%}.order-submission .allAddress .nav .item:nth-of-type(2).on[data-v-20445d74]::before{content:"到店自提";border-width:0 0 %?80?% %?20?%;border-radius:%?30?% %?7?% 0 0}.order-submission .allAddress .nav .item.on2[data-v-20445d74]{position:relative}.order-submission .allAddress .nav .item.on2[data-v-20445d74]::before{position:absolute;bottom:0;content:"到店自提";font-size:%?28?%;display:block;height:0;width:%?400?%;border-width:0 0 %?60?% %?60?%;border-style:none solid solid;border-color:transparent transparent #f7c1bd;border-radius:%?40?% %?6?% 0 0;text-align:center;line-height:%?60?%}.order-submission .allAddress .nav .item:nth-of-type(1).on2[data-v-20445d74]::before{content:"快递配送";border-width:0 %?60?% %?60?% 0;border-radius:%?6?% %?40?% 0 0}.order-submission .allAddress .address[data-v-20445d74]{width:%?710?%;height:%?150?%;margin:0 auto}.order-submission .allAddress .line[data-v-20445d74]{width:%?710?%;margin:0 auto}.order-submission .wrapper .item .discount .placeholder[data-v-20445d74]{color:#ccc}.placeholder-textarea[data-v-20445d74]{position:relative}.placeholder-textarea .placeholder[data-v-20445d74]{position:absolute;color:#ccc;top:%?26?%;left:%?30?%}.order-submission .wrapper[data-v-20445d74]{background-color:#fff;margin-top:%?13?%}.order-submission .wrapper .item[data-v-20445d74]{padding:%?27?% %?30?%;font-size:%?30?%;color:#282828;border-bottom:1px solid #f0f0f0}.order-submission .wrapper .item .discount[data-v-20445d74]{font-size:%?30?%;color:#999}.order-submission .wrapper .item .discount uni-input[data-v-20445d74]{text-align:end}.order-submission .wrapper .item .discount .iconfont[data-v-20445d74]{color:#515151;font-size:%?30?%;margin-left:%?15?%}.order-submission .wrapper .item .discount .num[data-v-20445d74]{font-size:%?32?%;margin-right:%?20?%}.order-submission .wrapper .item .shipping[data-v-20445d74]{font-size:%?30?%;color:#999;position:relative;padding-right:%?58?%}.order-submission .wrapper .item .shipping .iconfont[data-v-20445d74]{font-size:%?35?%;color:#707070;position:absolute;right:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);margin-left:%?30?%}.order-submission .wrapper .item uni-textarea[data-v-20445d74]{background-color:#f9f9f9;width:%?690?%;height:%?140?%;border-radius:%?3?%;margin-top:%?30?%;padding:%?25?% %?28?%;box-sizing:border-box}.order-submission .wrapper .item .placeholder[data-v-20445d74]{color:#ccc}.order-submission .wrapper .item .list[data-v-20445d74]{margin-top:%?35?%}.order-submission .moneyList[data-v-20445d74]{margin-top:%?12?%;background-color:#fff;padding:%?30?%}.order-submission .moneyList .item[data-v-20445d74]{font-size:%?28?%;color:#282828}.order-submission .moneyList .item ~ .item[data-v-20445d74]{margin-top:%?20?%}.order-submission .moneyList .item .money[data-v-20445d74]{color:#868686}.order-submission .footer[data-v-20445d74]{width:100%;height:%?100?%;background-color:#fff;padding:0 %?30?%;font-size:%?28?%;color:#333;box-sizing:border-box;position:fixed;bottom:0;left:0}.order-submission .footer .settlement[data-v-20445d74]{font-size:%?30?%;color:#fff;width:%?240?%;height:%?70?%;background-color:var(--view-theme);border-radius:%?50?%;text-align:center;line-height:%?70?%}.footer .transparent[data-v-20445d74]{opacity:0}.orderGoods[data-v-20445d74]{background-color:#fff;margin-top:%?12?%}.orderGoods .total[data-v-20445d74]{width:100%;height:%?86?%;padding:0 %?30?%;border-bottom:%?2?% solid #f0f0f0;font-size:%?30?%;color:#282828;line-height:%?86?%;box-sizing:border-box}.pictrue uni-image[data-v-20445d74]{width:%?130?%;height:%?130?%}',""]),t.exports=e},eebd:function(t,e,i){"use strict";i.r(e);var a=i("979f"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a}}]);