(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/user_payment/index"],{2163:function(t,e,i){"use strict";(function(t){i("7b91");n(i("66fd"));var e=n(i("7dc6"));function n(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=i,t(e.default)}).call(this,i("543d")["createPage"])},"7b70":function(t,e,i){"use strict";i.r(e);var n=i("ed08"),r=i.n(n);for(var c in n)"default"!==c&&function(t){i.d(e,t,(function(){return n[t]}))}(c);e["default"]=r.a},"7dc6":function(t,e,i){"use strict";i.r(e);var n=i("b7ea"),r=i("7b70");for(var c in r)"default"!==c&&function(t){i.d(e,t,(function(){return r[t]}))}(c);i("8015");var u,a=i("f0c5"),o=Object(a["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],u);e["default"]=o.exports},8015:function(t,e,i){"use strict";var n=i("e626"),r=i.n(n);r.a},b7ea:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return c})),i.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,i=(t._self._c,t.$t("我的余额")),n=t.$t("￥"),r=t.__map(t.navRecharge,(function(e,i){var n=t.__get_orig(e),r=t.$t(e);return{$orig:n,m2:r}})),c=t.active?null:t.__map(t.picList,(function(e,i){var n=t.__get_orig(e),r=e.price?t.$t("元"):null,c=e.price?t.$t("赠送"):null,u=e.price?t.$t("元"):null;return{$orig:n,m3:r,m4:c,m5:u}})),u=t.active?null:t.$t("其他"),a=t.active?null:t.$t("注意事项"),o=t.active?t.$t("￥"):null,s=t.active?t.$t("提示"):null,l=t.active?t.$t("当前可转入佣金为"):null,f=t.active?t.$t("￥"):null,h=t.active?t.$t("冻结佣金为"):null,d=t.active?t.$t("￥"):null,m=t.active?t.$t("注意事项"):null,p=t.active?t.$t("立即转入"):null,g=t.active?null:t.$t("立即充值");t.$mp.data=Object.assign({},{$root:{m0:i,m1:n,l0:r,l1:c,m6:u,m7:a,m8:o,m9:s,m10:l,m11:f,m12:h,m13:d,m14:m,m15:p,m16:g}})},c=[]},e626:function(t,e,i){},ed08:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("816a"),r=i("a368"),c=i("26cb"),u=a(i("9ad2"));function a(t){return t&&t.__esModule?t:{default:t}}var o=function(){i.e("components/Authorize").then(function(){return resolve(i("cacf"))}.bind(null,i)).catch(i.oe)},s=function(){Promise.all([i.e("common/vendor"),i.e("components/home/index")]).then(function(){return resolve(i("a25b"))}.bind(null,i)).catch(i.oe)},l={components:{authorize:o,home:s},mixins:[u.default],data:function(){return{now_money:0,navRecharge:[this.$t("账户充值"),this.$t("佣金转入")],active:0,number:"",userinfo:{},placeholder:"0.00",from:"",isAuto:!1,isShowAuth:!1,picList:[],activePic:0,money:"",numberPic:"",rechar_id:0,rechargeAttention:[]}},computed:(0,c.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,e){t&&(this.getUserInfo(),this.getRecharge())},deep:!0}},onLoad:function(t){this.isLogin?(this.getUserInfo(),this.getRecharge()):(0,r.toLogin)()},methods:{picCharge:function(t,e){this.activePic=t,void 0===e?(this.rechar_id=0,this.numberPic=""):(this.money="",this.rechar_id=e.id,this.numberPic=e.price)},getRecharge:function(){var t=this;(0,n.getRechargeApi)().then((function(e){t.picList=e.data.recharge_quota,t.picList[0]&&(t.rechar_id=t.picList[0].id,t.numberPic=t.picList[0].price),t.rechargeAttention=e.data.recharge_attention||[]})).catch((function(e){t.$util.Tips({title:e})}))},onLoadFun:function(){this.getUserInfo(),this.getRecharge()},authColse:function(t){this.isShowAuth=t},navRecharges:function(t){this.active=t},getUserInfo:function(){var t=this;(0,n.getUserInfo)().then((function(e){t.$set(t,"userinfo",e.data)}))},submitSub:function(e){var i=this,r=e.detail.value.number;if(i.active){if(parseFloat(r)<0||NaN==parseFloat(r)||void 0==r||""==r)return i.$util.Tips({title:i.$t("请输入金额")});t.showModal({title:i.$t("转入余额"),content:i.$t("转入余额后无法再次转出，确认是否转入余额"),success:function(t){if(t.confirm)(0,n.rechargeRoutine)({price:parseFloat(r),type:1}).then((function(t){return i.$util.Tips({title:i.$t("转入成功"),icon:"success"},{tab:5,url:"/pages/users/user_money/index"})})).catch((function(t){return i.$util.Tips({title:t})}));else if(t.cancel)return i.$util.Tips({title:i.$t("已取消")})}})}else{t.showLoading({title:i.$t("正在支付")});var c=parseFloat(this.money);if(0==this.rechar_id){if(Number.isNaN(c))return i.$util.Tips({title:i.$t("充值金额必须为数字")});if(c<=0)return i.$util.Tips({title:i.$t("充值金额不能为0")})}else c=this.numberPic;(0,n.rechargeRoutine)({price:c,type:0,rechar_id:this.rechar_id}).then((function(e){t.hideLoading();var n=e.data,c="";c=t.requestOrderPayment?"requestOrderPayment":"requestPayment",t[c]({timeStamp:n.timestamp,nonceStr:n.nonceStr,package:n.package,signType:n.signType,paySign:n.paySign,success:function(t){return i.$set(i,"userinfo.now_money",i.$util.$h.Add(r,i.userinfo.now_money)),i.$util.Tips({title:i.$t("支付成功"),icon:"success"},{tab:5,url:"/pages/users/user_money/index"})},fail:function(){return i.$util.Tips({title:i.$t("支付失败")})},complete:function(t){if("requestPayment:cancel"==t.errMsg)return i.$util.Tips({title:i.$t("取消支付")})}})})).catch((function(e){return t.hideLoading(),i.$util.Tips({title:e})}))}}}};e.default=l}).call(this,i("543d")["default"])}},[["2163","common/runtime","common/vendor"]]]);