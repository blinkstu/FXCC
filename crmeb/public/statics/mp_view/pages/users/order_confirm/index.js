(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/order_confirm/index"],{1794:function(t,e,i){"use strict";(function(t){i("8d15");n(i("66fd"));var e=n(i("7c10"));function n(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=i,t(e.default)}).call(this,i("543d")["createPage"])},"41ad":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("331f"),a=i("b284"),s=i("6ca5"),o=i("83b5"),r=(i("d7ff"),i("1e55")),c=i("26cb"),u=d(i("882e"));function d(t){return t&&t.__esModule?t:{default:t}}var l=function(){Promise.all([i.e("common/vendor"),i.e("components/couponListWindow/index")]).then(function(){return resolve(i("a287"))}.bind(null,i)).catch(i.oe)},p=function(){i.e("components/addressWindow/index").then(function(){return resolve(i("9acd"))}.bind(null,i)).catch(i.oe)},h=function(){i.e("components/orderGoods/index").then(function(){return resolve(i("9ace"))}.bind(null,i)).catch(i.oe)},f=function(){Promise.all([i.e("common/vendor"),i.e("components/home/index")]).then(function(){return resolve(i("487b"))}.bind(null,i)).catch(i.oe)},g=function(){i.e("components/invoicePicker/index").then(function(){return resolve(i("18e8"))}.bind(null,i)).catch(i.oe)},v=function(){i.e("components/Authorize").then(function(){return resolve(i("5e32"))}.bind(null,i)).catch(i.oe)},I=function(){Promise.all([i.e("common/vendor"),i.e("components/payment/index")]).then(function(){return resolve(i("9cbc"))}.bind(null,i)).catch(i.oe)},_={components:{payment:I,invoicePicker:g,couponListWindow:l,addressWindow:p,orderGoods:h,home:f,authorize:v},mixins:[u.default],data:function(){this.getDate({format:!0});return{confirm:"",date:"请选择",time:"请选择",canvasWidth:"",canvasHeight:"",canvasStatus:!1,newImg:[],textareaStatus:!0,cartArr:[{name:"微信支付",icon:"icon-weixin2",value:"weixin",title:"使用微信快捷支付",payStatus:1},{name:"支付宝支付",icon:"icon-zhifubao",value:"alipay",title:"使用线上支付宝支付",payStatus:1},{name:"余额支付",icon:"icon-yuezhifu",value:"yue",title:"可用余额:",payStatus:1},{name:"线下支付",icon:"icon-yuezhifu1",value:"offline",title:"选择线下付款方式",payStatus:2},{name:"好友代付",icon:"icon-haoyoudaizhifu",value:"friend",title:"找微信好友支付",payStatus:1}],virtual_type:0,formContent:"",payType:"weixin",openType:1,active:0,coupon:{coupon:!1,list:[],statusTile:"立即使用"},address:{address:!1},addressInfo:{},pinkId:0,addressId:0,couponId:0,cartId:"",BargainId:0,combinationId:0,seckillId:0,discountId:0,userInfo:{},mark:"",couponTitle:"请选择",coupon_price:0,useIntegral:!1,integral_price:0,integral:0,usable_integral:0,ChangePrice:0,formIds:[],status:0,is_address:!1,toPay:!1,shippingType:0,system_store:{},storePostage:0,advanceId:0,contacts:"",contactsTel:"",mydata:{},storeList:[],store_self_mention:0,cartInfo:[],priceGroup:{},animated:!1,totalPrice:0,integralRatio:"0",pagesUrl:"",orderKey:"",offlinePostage:"",isAuto:!1,isShowAuth:!1,from:"",news:1,invTitle:"不开发票",special_invoice:!1,invoice_func:!1,header_type:"",invShow:!1,invList:[],invChecked:"",urlQuery:"",pay_close:!1,noCoupon:0,valid_count:0,discount_id:0}},computed:(0,c.mapGetters)(["isLogin"]),onLoad:function(t){if(this.from="routine",!t.cartId)return this.$util.Tips({title:"请选择要购买的商品"},{tab:3,url:1});switch(this.couponId=t.couponId||0,this.noCoupon=t.noCoupon||0,this.pinkId=t.pinkId?parseInt(t.pinkId):0,this.addressId=t.addressId||0,this.cartId=t.cartId,this.is_address=!!t.is_address,this.news=t.new&&"0"!==t.new?1:0,this.invChecked=t.invoice_id||"",this.header_type=t.header_type||"1",this.couponTitle=t.couponTitle||"请选择",t.invoice_type){case"1":this.invTitle="增值税电子普通发票";break;case"2":this.invTitle="增值税电子专用发票";break}this.textareaStatus=!0,this.isLogin&&0==this.toPay?(this.getaddressInfo(),this.getConfirm(),this.$nextTick((function(){this.$refs.addressWindow.getAddressList()}))):(0,r.toLogin)()},onShow:function(){var e=this;t.$on("handClick",(function(i){i&&(e.system_store=i.address),t.$off("handClick")}))},methods:{invCancel:function(){this.invChecked="",this.invTitle="不开发票",this.invShow=!1},invChange:function(t){this.invChecked=t,this.invShow=!1;var e=this.invList.find((function(e){return e.id===t})),i="";i+=1===e.header_type?"个人":"企业",i+=1===e.type?"普通":"专用",i+="发票",this.invTitle=i},invClose:function(){this.invShow=!1,this.getInvoiceList()},getInvoiceList:function(){var e=this;t.showLoading({title:"正在加载…"}),(0,a.invoiceList)().then((function(i){t.hideLoading(),e.invList=i.data.map((function(t){return t.id=t.id.toString(),t}));var n=e.invList.find((function(t){return t.id==e.invChecked}));if(n){var a="";a+=1===n.header_type?"个人":"企业",a+=1===n.type?"普通":"专用",a+="发票",e.invTitle=a}})).catch((function(e){t.showToast({title:e,icon:"none"})}))},goInvoice:function(){this.getInvoiceList(),this.invShow=!0,this.urlQuery="new=".concat(this.news,"&cartId=").concat(this.cartId,"&pinkId=").concat(this.pinkId,"&couponId=").concat(this.couponId,"&addressId=").concat(this.addressId,"&specialInvoice=").concat(this.special_invoice,"&couponTitle=").concat(this.couponTitle)},onLoadFun:function(){this.getaddressInfo(),this.getConfirm()},onChangeFun:function(t){var e=t,i=e.action||null,n=void 0!=e.value?e.value:null;i&&this[i]&&this[i](n)},payClose:function(){this.pay_close=!1},goPay:function(){this.pay_close=!0},payCheck:function(t){this.payType=t,this.SubOrder()},getList:function(){var e=this,i=t.getStorageSync("user_longitude"),n=t.getStorageSync("user_latitude"),a={latitude:n,longitude:i,page:1,limit:10};(0,o.storeListApi)(a).then((function(t){var i=t.data.list.list||[];e.$set(e,"storeList",i),e.$set(e,"system_store",i[0])})).catch((function(t){}))},changeClose:function(){this.$set(this.address,"address",!1)},showStoreList:function(){this.storeList.length>0&&t.navigateTo({url:"/pages/users/goods_details_store/index"})},changePayType:function(t){this.payType=t,this.computedPrice()},computedPrice:function(){var t=this,e=this.shippingType;(0,n.postOrderComputed)(this.orderKey,{addressId:this.addressId,useIntegral:this.useIntegral?1:0,couponId:this.couponId,shipping_type:parseInt(e)+1,payType:this.payType}).then((function(i){var n=i.data.result;n&&(t.totalPrice=n.pay_price,t.integral_price=n.deduction_price,t.coupon_price=n.coupon_price,t.integral=t.useIntegral?n.SurplusIntegral:t.usable_integral,t.$set(t.priceGroup,"storePostage",1==e?0:n.pay_postage),t.$set(t.priceGroup,"storePostageDiscount",n.storePostageDiscount))}))},addressType:function(e){var i=this,n=e;this.shippingType!=parseInt(n)&&(this.shippingType=parseInt(n),1==n&&t.getLocation({type:"wgs84",success:function(e){t.setStorageSync("user_latitude",e.latitude),t.setStorageSync("user_longitude",e.longitude)},complete:function(){i.getList()}}),this.$nextTick((function(t){i.getConfirm(),i.computedPrice()})))},bindPickerChange:function(t){var e=t.detail.value;this.shippingType=e,this.computedPrice()},ChangCouponsClone:function(){this.$set(this.coupon,"coupon",!1)},changeTextareaStatus:function(){for(var t=0,e=this.coupon.list.length;t<e;t++)this.coupon.list[t].use_title="",this.coupon.list[t].is_use=0;this.textareaStatus=!0,this.status=0,this.$set(this.coupon,"list",this.coupon.list)},ChangCoupons:function(t){for(var e=t,i=this.coupon.list,n="请选择",a=0,s=0,o=i.length;s<o;s++)s!=e&&(i[s].use_title="",i[s].is_use=0);i[e].is_use?(i[e].use_title="",i[e].is_use=0):(i[e].use_title="不使用",i[e].is_use=1,n=i[e].coupon_title,a=i[e].id),this.couponTitle=n,this.couponId=a,this.$set(this.coupon,"coupon",!1),this.$set(this.coupon,"list",i),this.computedPrice()},ChangeIntegral:function(){this.useIntegral=!this.useIntegral,this.computedPrice()},OnChangeAddress:function(t){this.textareaStatus=!0,this.addressId=t,this.address.address=!1,this.getConfirm(),this.getaddressInfo(),this.computedPrice()},bindHideKeyboard:function(t){this.mark=t.detail.value},getConfirm:function(){var e=this,i=this;t.showLoading({title:"订单加载中",mask:!0}),(0,n.orderConfirm)(i.cartId,i.news,i.addressId,i.shippingType+1).then((function(n){i.$set(i,"userInfo",n.data.userInfo),i.$set(i,"confirm",n.data.custom_form||[]),e.confirm.map((function(t){"img"===t.label&&(t.value=[])})),i.$set(i,"integral",n.data.usable_integral),i.$set(i,"usable_integral",n.data.usable_integral),i.$set(i,"contacts",n.data.userInfo.real_name),i.$set(i,"contactsTel","0"===n.data.userInfo.record_phone?"":n.data.userInfo.record_phone),i.$set(i,"cartInfo",n.data.cartInfo),i.$set(i,"integralRatio",n.data.integralRatio),i.$set(i,"offlinePostage",n.data.offlinePostage),i.$set(i,"orderKey",n.data.orderKey),i.$set(i,"valid_count",n.data.valid_count),i.$set(i,"discount_id",n.data.discount_id),i.$set(i,"priceGroup",n.data.priceGroup),i.$set(i,"totalPrice",i.$util.$h.Add(parseFloat(n.data.priceGroup.totalPrice),parseFloat(n.data.priceGroup.storePostage))),i.$set(i,"seckillId",parseInt(n.data.seckill_id)),i.$set(i,"invoice_func",n.data.invoice_func),i.$set(i,"special_invoice",n.data.special_invoice),i.$set(i,"store_self_mention",n.data.store_self_mention),i.$set(i,"virtual_type",n.data.virtual_type||0),i.cartArr[0].payStatus=n.data.pay_weixin_open||0,i.cartArr[1].payStatus=n.data.ali_pay_status||0,i.cartArr[1].payStatus=0,i.cartArr[2].number=n.data.userInfo.now_money,i.cartArr[2].payStatus=1==n.data.yue_pay_status?n.data.yue_pay_status:0,2==n.data.offline_pay_status||n.data.deduction?i.cartArr[3].payStatus=0:i.cartArr[3].payStatus=1,i.cartArr[4].payStatus=n.data.friend_pay_status||0,i.$set(i,"ChangePrice",i.totalPrice),i.getBargainId(),i.getCouponList(),e.addressId&&e.computedPrice(),t.hideLoading()})).catch((function(i){return t.hideLoading(),e.$util.Tips({title:i})}))},getBargainId:function(){var t=this,e=t.cartInfo,i=0,n=0,a=0,s=0;e.forEach((function(t,e,o){i=o[e].bargain_id,n=o[e].combination_id,a=o[e].discount_id,s=o[e].advance_id})),t.$set(t,"BargainId",parseInt(i)),t.$set(t,"combinationId",parseInt(n)),t.$set(t,"discountId",parseInt(a)),t.$set(t,"advanceId",parseInt(s)),3==t.cartArr.length&&(i||n||t.seckillId||a)&&(t.cartArr[2].payStatus=0,t.$set(t,"cartArr",t.cartArr))},getCouponList:function(){var t=this,e={cartId:this.cartId,new:this.news};(0,n.getCouponsOrderPrice)(this.totalPrice,e).then((function(e){t.$set(t.coupon,"list",e.data),t.openType=1}))},getaddressInfo:function(){var t=this;t.addressId?(0,a.getAddressDetail)(t.addressId).then((function(e){e.data.is_default=parseInt(e.data.is_default),t.addressInfo=e.data||{},t.addressId=e.data.id||0,t.address.addressId=e.data.id||0})):(0,a.getAddressDefault)().then((function(e){e.data.is_default=parseInt(e.data.is_default),t.addressInfo=e.data||{},t.addressId=e.data.id||0,t.address.addressId=e.data.id||0}))},payItem:function(t){var e=this,i=t;e.active=i,e.animated=!0,e.payType=e.cartArr[i].value,e.computedPrice(),setTimeout((function(){e.car()}),500)},couponTap:function(){var t=this;this.coupon.coupon=!0,this.coupon.list.forEach((function(e,i){e.id==t.couponId?e.is_use=1:e.is_use=0})),this.$set(this.coupon,"list",this.coupon.list)},car:function(){var t=this;t.animated=!1},onAddress:function(){var t=this;t.textareaStatus=!1,t.address.address=!0,t.pagesUrl="/pages/users/user_address_list/index?news="+this.news+"&cartId="+this.cartId+"&pinkId="+this.pinkId+"&couponId="+this.couponId},payment:function(e){var i=this,a=this;(0,n.orderCreate)(a.orderKey,e).then((function(n){var s=n.data.status,o=n.data.result.orderId,r=n.data.result.jsConfig,c="/pages/order_pay_status/index?order_id="+o+"&msg="+n.msg+"&type=3&totalPrice="+i.totalPrice,u="/pages/users/payment_on_behalf/index?order_id="+o+"&spread="+i.$store.state.app.uid;switch(s){case"ORDER_EXIST":case"EXTEND_ORDER":case"PAY_ERROR":return t.hideLoading(),a.$util.Tips({title:n.msg},{tab:5,url:c});case"SUCCESS":return t.hideLoading(),(a.BargainId||a.combinationId||a.pinkId||a.seckillId||a.discountId)&&"friend"!=e.payType?a.$util.Tips({title:n.msg,icon:"success"},{tab:4,url:c}):a.$util.Tips({title:n.msg,icon:"success"},{tab:4,url:"friend"==e.payType?u:c});case"WECHAT_PAY":a.toPay=!0,t.requestPayment({timeStamp:r.timestamp,nonceStr:r.nonceStr,package:r.package,signType:r.signType,paySign:r.paySign,success:function(e){return t.hideLoading(),a.BargainId||a.combinationId||a.pinkId||a.seckillId||a.discountId?a.$util.Tips({title:"支付成功",icon:"success"},{tab:4,url:c}):a.$util.Tips({title:"支付成功",icon:"success"},{tab:5,url:c})},fail:function(e){return t.hideLoading(),a.$util.Tips({title:"取消支付"},{tab:5,url:c+"&status=2"})},complete:function(e){if(t.hideLoading(),"requestPayment:cancel"==n.errMsg)return a.$util.Tips({title:"取消支付"},{tab:5,url:c+"&status=2"})}});break;case"PAY_DEFICIENCY":return t.hideLoading(),a.$util.Tips({title:n.msg},{tab:5,url:c+"&status=1"});case"WECHAT_H5_PAY":t.hideLoading(),a.$util.Tips({title:"订单创建成功!"},{tab:4,url:c+"&status=0"}),setTimeout((function(){location.href=n.data.result.jsConfig.mweb_url}),2e3);break;case"ALIPAY_PAY":t.navigateTo({url:"/pages/users/alipay_invoke/index?id=".concat(o,"&link=").concat(r.qrCode)});break}})).catch((function(e){return t.hideLoading(),a.$util.Tips({title:e})}))},clickTextArea:function(){this.$refs.textarea.focus()},SubOrder:function(e){var i=this,n={};if(!i.payType)return i.$util.Tips({title:"请选择支付方式"});if(!i.addressId&&!i.shippingType&&!i.virtual_type)return i.$util.Tips({title:"请选择收货地址"});if(1==i.shippingType){if(""==i.contacts||""==i.contactsTel)return i.$util.Tips({title:"请填写联系人或联系人电话"});if(!/^1(3|4|5|7|8|9|6)\d{9}$/.test(i.contactsTel))return i.$util.Tips({title:"请填写正确的手机号"});if(!i.contacts)return i.$util.Tips({title:"请填写您的真实姓名"});if(0==i.storeList.length)return i.$util.Tips({title:"暂无门店,请选择其他方式"})}for(var a=0;a<i.confirm.length;a++){var o=i.confirm[a];if(o.status){if(("text"===o.label||"data"===o.label||"time"===o.label||"id"===o.label)&&!o.value.trim())return t.showToast({title:"请先输入".concat(o.title),icon:"none"});if("number"===o.label&&o.value<=0)return t.showToast({title:"请先输入".concat(o.title),icon:"none"});if("email"===o.label&&!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(o.value))return t.showToast({title:"请输入正确的".concat(o.title),icon:"none"});if("phone"===o.label&&!/^1(3|4|5|7|8|9|6)\d{9}$/i.test(o.value))return t.showToast({title:"请输入正确的".concat(o.title),icon:"none"});if("img"===o.label&&!o.value.length)return t.showToast({title:"请先上传".concat(o.title),icon:"none"})}}if(n={custom_form:i.confirm,real_name:i.contacts,phone:i.contactsTel,addressId:i.addressId,formId:"",couponId:i.couponId,payType:i.payType,useIntegral:i.useIntegral,bargainId:i.BargainId,combinationId:i.combinationId,discountId:i.discountId,pinkId:i.pinkId,advanceId:i.advanceId,seckill_id:i.seckillId,mark:i.mark,store_id:i.system_store?i.system_store.id:0,from:i.from,shipping_type:i.$util.$h.Add(i.shippingType,1),new:i.news,invoice_id:i.invChecked},"yue"==n.payType&&parseFloat(i.userInfo.now_money)<parseFloat(i.totalPrice))return i.$util.Tips({title:"余额不足！"});t.showLoading({title:"订单支付中"}),(0,s.openPaySubscribe)().then((function(){i.payment(n)}))},bindDateChange:function(t,e){this.confirm[e].value=t.target.value},bindTimeChange:function(t,e){this.confirm[e].value=t.target.value},getDate:function(t){var e=new Date,i=e.getFullYear(),n=e.getMonth()+1,a=e.getDate();return"start"===t?i-=60:"end"===t&&(i+=2),n=n>9?n:"0"+n,a=a>9?a:"0"+a,"".concat(i,"-").concat(n,"-").concat(a)},uploadpic:function(t,e){var i=this,n=this;this.canvasStatus=!0,n.$util.uploadImageChange("upload/image",(function(t){e.value.push(t.data.url)}),(function(t){i.canvasStatus=!1}),(function(t){i.canvasWidth=t.w,i.canvasHeight=t.h}))},DelPic:function(t,e){var i=this;this.confirm[t].value;i.confirm[t].value.splice(e,1)}}};e.default=_}).call(this,i("543d")["default"])},"7c10":function(t,e,i){"use strict";i.r(e);var n=i("b26b"),a=i("e8f9");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("9d92");var o,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"4862f3c5",null,!1,n["a"],o);e["default"]=c.exports},"9d92":function(t,e,i){"use strict";var n=i("aef0"),a=i.n(n);a.a},aef0:function(t,e,i){},b26b:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=(t._self._c,(parseFloat(t.priceGroup.totalPrice)+parseFloat(t.priceGroup.vipPrice)).toFixed(2)),n=t.priceGroup.storePostage>0?(parseFloat(t.priceGroup.storePostage)+parseFloat(t.priceGroup.storePostageDiscount)).toFixed(2):null,a=!(t.priceGroup.vipPrice>0&&t.userInfo.vip)||t.pinkId||t.BargainId||t.combinationId||t.seckillId||t.discountId?null:parseFloat(t.priceGroup.vipPrice).toFixed(2),s=t.priceGroup.storePostageDiscount>0?parseFloat(t.priceGroup.storePostageDiscount).toFixed(2):null,o=t.coupon_price>0?parseFloat(t.coupon_price).toFixed(2):null,r=t.integral_price>0?parseFloat(t.integral_price).toFixed(2):null,c=t.totalPrice.toString();t.$mp.data=Object.assign({},{$root:{g0:i,g1:n,g2:a,g3:s,g4:o,g5:r,g6:c}})},s=[]},e8f9:function(t,e,i){"use strict";i.r(e);var n=i("41ad"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a}},[["1794","common/runtime","common/vendor"]]]);