(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/user_invoice_order/index"],{1266:function(e,t,o){},"18da":function(e,t,o){"use strict";var n=o("1266"),r=o.n(n);r.a},"1b2a":function(e,t,o){},"49c7":function(e,t,o){"use strict";o.r(t);var n=o("ba7a"),r=o.n(n);for(var i in n)"default"!==i&&function(e){o.d(t,e,(function(){return n[e]}))}(i);t["default"]=r.a},"6e1b":function(e,t,o){"use strict";var n=o("1b2a"),r=o.n(n);r.a},"8d5a":function(e,t,o){"use strict";o.r(t);var n=o("adee"),r=o("49c7");for(var i in r)"default"!==i&&function(e){o.d(t,e,(function(){return r[e]}))}(i);o("18da"),o("6e1b");var s,d=o("f0c5"),a=Object(d["a"])(r["default"],n["b"],n["c"],!1,null,"4c665989",null,!1,n["a"],s);t["default"]=a.exports},adee:function(e,t,o){"use strict";var n;o.d(t,"b",(function(){return r})),o.d(t,"c",(function(){return i})),o.d(t,"a",(function(){return n}));var r=function(){var e=this,t=e.$createElement,o=(e._self._c,e.orderInfo&&e.orderInfo.invoice&&e.orderInfo.invoice.is_invoice?e.$t("已开票"):null),n=e.orderInfo&&e.orderInfo.invoice&&!e.orderInfo.invoice.is_invoice?e.$t("未开票"):null,r=e.orderInfo&&e.orderInfo.invoice?e.$t("发票类型"):null,i=e.orderInfo&&e.orderInfo.invoice&&1===e.orderInfo.invoice.type?e.$t("增值税电子普通发票"):null,s=e.orderInfo&&e.orderInfo.invoice&&1!==e.orderInfo.invoice.type?e.$t("增值税电子专用发票"):null,d=e.orderInfo&&e.orderInfo.invoice?e.$t("发票抬头"):null,a=e.orderInfo&&e.orderInfo.invoice&&e.orderInfo.invoice.duty_number?e.$t("税号"):null,u=e.orderInfo&&e.orderInfo.invoice?e.$t("手机号"):null,l=e.orderInfo&&e.orderInfo.invoice?e.$t("邮箱"):null,c=e.orderInfo&&e.orderInfo.invoice&&2===e.orderInfo.invoice.type?e.$t("开户银行"):null,f=e.orderInfo&&e.orderInfo.invoice&&2===e.orderInfo.invoice.type?e.$t("银行账号"):null,p=e.orderInfo&&e.orderInfo.invoice&&2===e.orderInfo.invoice.type?e.$t("企业地址"):null,_=e.orderInfo&&e.orderInfo.invoice&&2===e.orderInfo.invoice.type?e.$t("企业电话"):null,I=e.orderInfo&&e.orderInfo.invoice&&e.orderInfo.invoice.invoice_number?e.$t("发票编号"):null,m=e.orderInfo&&e.orderInfo.invoice&&e.orderInfo.invoice.remark?e.$t("发票备注"):null,h=e.$t("订单编号"),v=e.$t("复制"),y=e.$t("下单时间"),$=e.$t("支付状态"),g=e.orderInfo.paid?e.$t("已支付"):null,b=e.orderInfo.paid?null:e.$t("未支付"),x=e.$t("支付方式"),w=e.orderInfo.mark?e.$t("买家留言"):null,O=e.orderInfo.fictitious_content?e.$t("备注"):null,L=e.isGoodsReturn?e.$t("收货人"):null,k=e.isGoodsReturn?e.$t("联系电话"):null,T=e.isGoodsReturn?e.$t("收货地址"):null,P=0!=e.orderInfo.status&&"express"==e.orderInfo.delivery_type?e.$t("配送方式"):null,M=0!=e.orderInfo.status&&"express"==e.orderInfo.delivery_type?e.$t("发货"):null,C=0!=e.orderInfo.status&&"express"==e.orderInfo.delivery_type?e.$t("快递公司"):null,G=0!=e.orderInfo.status&&"express"==e.orderInfo.delivery_type?e.$t("快递号"):null,S=0!=e.orderInfo.status&&"express"!=e.orderInfo.delivery_type&&"send"==e.orderInfo.delivery_type?e.$t("配送方式"):null,R=0!=e.orderInfo.status&&"express"!=e.orderInfo.delivery_type&&"send"==e.orderInfo.delivery_type?e.$t("送货"):null,U=0!=e.orderInfo.status&&"express"!=e.orderInfo.delivery_type&&"send"==e.orderInfo.delivery_type?e.$t("配送人姓名"):null,z=0!=e.orderInfo.status&&"express"!=e.orderInfo.delivery_type&&"send"==e.orderInfo.delivery_type?e.$t("联系电话"):null,A=0!=e.orderInfo.status&&"express"!=e.orderInfo.delivery_type&&"send"==e.orderInfo.delivery_type?e.$t("dial"):null,D=0!=e.orderInfo.status&&"express"!=e.orderInfo.delivery_type&&"send"!=e.orderInfo.delivery_type&&"fictitious"==e.orderInfo.delivery_type?e.$t("虚拟发货"):null,F=0!=e.orderInfo.status&&"express"!=e.orderInfo.delivery_type&&"send"!=e.orderInfo.delivery_type&&"fictitious"==e.orderInfo.delivery_type?e.$t("已发货，请注意查收"):null,N=e.$t("支付金额"),j=e.$t("￥"),J=e.orderInfo.coupon_id?e.$t("优惠券抵扣"):null,q=e.orderInfo.coupon_id?e.$t("￥"):null,E=e.orderInfo.use_integral>0?e.$t("积分抵扣"):null,H=e.orderInfo.use_integral>0?e.$t("￥"):null,B=e.orderInfo.pay_postage>0?e.$t("运费"):null,K=e.orderInfo.pay_postage>0?e.$t("￥"):null;e.$mp.data=Object.assign({},{$root:{m0:o,m1:n,m2:r,m3:i,m4:s,m5:d,m6:a,m7:u,m8:l,m9:c,m10:f,m11:p,m12:_,m13:I,m14:m,m15:h,m16:v,m17:y,m18:$,m19:g,m20:b,m21:x,m22:w,m23:O,m24:L,m25:k,m26:T,m27:P,m28:M,m29:C,m30:G,m31:S,m32:R,m33:U,m34:z,m35:A,m36:D,m37:F,m38:N,m39:j,m40:J,m41:q,m42:E,m43:H,m44:B,m45:K}})},i=[]},ae80:function(e,t,o){"use strict";(function(e){o("d5c5");n(o("66fd"));var t=n(o("8d5a"));function n(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=o,e(t.default)}).call(this,o("543d")["createPage"])},ba7a:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o("a398"),r=o("910a"),i=o("cff9"),s=(u(o("3085")),o("1118")),d=o("26cb"),a=u(o("cf74"));function u(e){return e&&e.__esModule?e:{default:e}}var l=function(){Promise.all([o.e("common/vendor"),o.e("components/home/index")]).then(function(){return resolve(o("4f25"))}.bind(null,o)).catch(o.oe)},c=function(){Promise.all([o.e("common/vendor"),o.e("components/payment/index")]).then(function(){return resolve(o("de16"))}.bind(null,o)).catch(o.oe)},f=function(){o.e("components/orderGoods/index").then(function(){return resolve(o("6497"))}.bind(null,o)).catch(o.oe)},p=function(){o.e("components/Authorize").then(function(){return resolve(o("4a3a"))}.bind(null,o)).catch(o.oe)},_={components:{payment:c,home:l,orderGoods:f,authorize:p},mixins:[a.default],data:function(){return{order_id:"",evaluate:0,cartInfo:[],orderInfo:{system_store:{},_status:{}},system_store:{},isGoodsReturn:!1,status:{},isClose:!1,payMode:[{name:this.$t("微信支付"),icon:"icon-weixinzhifu",value:"weixin",title:this.$t("使用微信快捷支付"),payStatus:!0},{name:this.$t("余额支付"),icon:"icon-yuezhifu",value:"yue",title:this.$t("可用余额"),number:0,payStatus:!0}],pay_close:!1,pay_order_id:"",totalPrice:"0",isAuto:!1,isShowAuth:!1}},computed:(0,d.mapGetters)(["isLogin"]),onLoad:function(e){e.order_id&&this.$set(this,"order_id",e.order_id)},onShow:function(){this.isLogin?(this.getOrderInfo(),this.getUserInfo()):(0,s.toLogin)()},onHide:function(){this.isClose=!0},onReady:function(){},methods:{goGoodCall:function(){var t=this;e.navigateTo({url:"/pages/extension/customer_list/chat?orderId=".concat(t.order_id)})},openSubcribe:function(t){var o=t;e.showLoading({title:this.$t("正在加载中")}),(0,r.openOrderRefundSubscribe)().then((function(t){e.hideLoading(),e.navigateTo({url:o})})).catch((function(){e.hideLoading()}))},onChangeFun:function(e){var t=e,o=t.action||null,n=void 0!=t.value?t.value:null;o&&this[o]&&this[o](n)},makePhone:function(){e.makePhoneCall({phoneNumber:this.system_store.phone})},showMaoLocation:function(){if(!this.system_store.latitude||!this.system_store.longitude)return this.$util.Tips({title:this.$t("缺少经纬度信息无法查看地图！")});e.openLocation({latitude:parseFloat(this.system_store.latitude),longitude:parseFloat(this.system_store.longitude),scale:8,name:this.system_store.name,address:this.system_store.address+this.system_store.detailed_address,success:function(){}})},payClose:function(){this.pay_close=!1},pay_open:function(){this.pay_close=!0,this.pay_order_id=this.orderInfo.order_id,this.totalPrice=this.orderInfo.pay_price},pay_complete:function(){this.pay_close=!1,this.pay_order_id="",this.getOrderInfo()},pay_fail:function(){this.pay_close=!1,this.pay_order_id=""},onLoadFun:function(){this.getOrderInfo(),this.getUserInfo()},getUserInfo:function(){var e=this;(0,i.getUserInfo)().then((function(t){e.payMode[1].number=t.data.now_money,e.$set(e,"payMode",e.payMode)}))},getOrderInfo:function(){var t=this,o=this;e.showLoading({title:o.$t("正在加载中")}),(0,n.orderInvoiceDetail)(this.order_id).then((function(n){var r=n.data._status._type;e.hideLoading(),o.$set(o,"orderInfo",n.data),o.$set(o,"cartInfo",n.data.cartInfo),o.$set(o,"evaluate",3==r?3:0),o.$set(o,"system_store",n.data.system_store),0!=t.orderInfo.refund_status&&(t.isGoodsReturn=!0),o.getOrderStatus()})).catch((function(t){e.hideLoading(),o.$util.Tips({title:t})}))},copy:function(){e.setClipboardData({data:this.orderInfo.order_id})},goTel:function(){e.makePhoneCall({phoneNumber:this.orderInfo.delivery_id})},getOrderStatus:function(){var e=this.orderInfo||{},t=e._status||{_type:0},o={},n=parseInt(t._type),r=e.delivery_type,i=e.seckill_id?parseInt(e.seckill_id):0,s=e.bargain_id?parseInt(e.bargain_id):0,d=e.combination_id?parseInt(e.combination_id):0;o={type:9==n?-9:n,class_status:0},1==n&&d>0&&(o.class_status=1),2==n&&"express"==r&&(o.class_status=2),2==n&&(o.class_status=3),4!=n&&0!=n||(o.class_status=4),i||s||d||3!=n&&4!=n||(o.class_status=5),this.$set(this,"status",o)},goJoinPink:function(){e.navigateTo({url:"/pages/activity/goods_combination_status/index?id="+this.orderInfo.pink_id})},goOrderConfirm:function(){var t=this;(0,n.orderAgain)(t.orderInfo.order_id).then((function(t){return e.navigateTo({url:"/pages/goods/order_confirm/index?new=1&cartId="+t.data.cateId})}))},confirmOrder:function(){var t=this;e.showModal({title:this.$t("确认收货"),content:this.$t("为保障权益，请收到货确认无误后，再确认收货"),success:function(e){e.confirm&&(0,n.orderTake)(t.order_id).then((function(e){return t.$util.Tips({title:t.$t("操作成功"),icon:"success"},(function(){t.getOrderInfo()}))})).catch((function(e){return t.$util.Tips({title:e})}))}})},delOrder:function(){var e=this;(0,n.orderDel)(this.order_id).then((function(t){return e.$util.Tips({title:e.$t("删除成功"),icon:"success"},{tab:3,url:1})})).catch((function(t){return e.$util.Tips({title:t})}))},cancelOrder:function(){var t=this;e.showModal({title:that.$t("提示"),content:that.$t("确认取消该订单"),success:function(e){e.confirm?(0,n.orderCancel)(t.orderInfo.order_id).then((function(e){t.$util.Tips({title:e.msg},{tab:3})})).catch((function(){t.getDetail()})):e.cancel}})}}};t.default=_}).call(this,o("543d")["default"])}},[["ae80","common/runtime","common/vendor"]]]);