(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/user_money/index"],{"2b8e":function(t,n,e){},"3fe7":function(t,n,e){"use strict";var i=e("2b8e"),o=e.n(i);o.a},"578d":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e("768b"),o=e("24b3"),c=e("816a"),u=e("a368"),r=e("26cb"),a=s(e("9ad2"));function s(t){return t&&t.__esModule?t:{default:t}}var l=function(){Promise.all([e.e("common/vendor"),e.e("components/recommend/index")]).then(function(){return resolve(e("ef32"))}.bind(null,e)).catch(e.oe)},h=function(){e.e("components/Authorize").then(function(){return resolve(e("cacf"))}.bind(null,e)).catch(e.oe)},f=function(){Promise.all([e.e("common/vendor"),e.e("components/home/index")]).then(function(){return resolve(e("a25b"))}.bind(null,e)).catch(e.oe)},d={components:{recommend:l,authorize:h,home:f},mixins:[a.default],data:function(){return{userInfo:{},hostProduct:[],isClose:!1,recharge_switch:0,activity:{},isAuto:!1,isShowAuth:!1,hotScroll:!1,hotPage:1,hotLimit:10}},computed:(0,r.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,n){t&&(this.getUserInfo(),this.get_host_product(),this.get_activity())},deep:!0}},onLoad:function(){this.isLogin?(this.getUserInfo(),this.get_host_product(),this.get_activity()):(0,u.toLogin)()},methods:{onLoadFun:function(){this.getUserInfo(),this.get_host_product(),this.get_activity()},authColse:function(t){this.isShowAuth=t},openSubscribe:function(n){t.showLoading({title:this.$t("正在加载")}),(0,o.openRechargeSubscribe)().then((function(e){t.hideLoading(),t.navigateTo({url:n})})).catch((function(){t.hideLoading()}))},getUserInfo:function(){var t=this;(0,c.getUserInfo)().then((function(n){t.$set(t,"userInfo",n.data),t.recharge_switch=n.data.recharge_switch}))},get_activity:function(){var t=this;(0,c.userActivity)().then((function(n){t.$set(t,"activity",n.data)}))},get_host_product:function(){var t=this;t.hotScroll||(0,i.getProductHot)(t.hotPage,t.hotLimit).then((function(n){t.hotPage++,t.hotScroll=n.data.length<t.hotLimit,t.hostProduct=t.hostProduct.concat(n.data)}))}},onReachBottom:function(){this.get_host_product()},onPageScroll:function(n){t.$emit("scroll")}};n.default=d}).call(this,e("543d")["default"])},"63c9":function(t,n,e){"use strict";e.r(n);var i=e("578d"),o=e.n(i);for(var c in i)"default"!==c&&function(t){e.d(n,t,(function(){return i[t]}))}(c);n["default"]=o.a},6753:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return i}));var o=function(){var t=this,n=t.$createElement,e=(t._self._c,t.$t("总资产(元)")),i=t.recharge_switch?t.$t("充值"):null,o=t.recharge_switch?t.$t("累计充值(元)"):null,c=t.$t("累计消费(元)"),u=t.$t("账单记录"),r=t.$t("消费记录"),a=t.recharge_switch?t.$t("充值记录"):null,s=t.$t("积分中心"),l=t.$t("签到领积分"),h=t.$t("赚积分抵现金"),f=t.$t("领取优惠券"),d=t.$t("满减享优惠"),m=t.$t("最新拼团活动"),_=t.$t("最新的优惠商品上架拼团"),g=t.activity.is_pink?t.$t("立即参与"):null,v=t.activity.is_pink?null:t.$t("已结束"),$=t.$t("当前限时秒杀"),b=t.$t("最新商品秒杀进行中"),p=t.activity.is_seckill?t.$t("立即参与"):null,y=t.activity.is_seckill?null:t.$t("已结束"),w=t.$t("砍价活动"),P=t.$t("呼朋唤友来砍价"),L=t.activity.is_bargin?t.$t("立即参与"):null,I=t.activity.is_bargin?null:t.$t("已结束");t.$mp.data=Object.assign({},{$root:{m0:e,m1:i,m2:o,m3:c,m4:u,m5:r,m6:a,m7:s,m8:l,m9:h,m10:f,m11:d,m12:m,m13:_,m14:g,m15:v,m16:$,m17:b,m18:p,m19:y,m20:w,m21:P,m22:L,m23:I}})},c=[]},b515:function(t,n,e){"use strict";(function(t){e("7b91");i(e("66fd"));var n=i(e("c618"));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e("543d")["createPage"])},c618:function(t,n,e){"use strict";e.r(n);var i=e("6753"),o=e("63c9");for(var c in o)"default"!==c&&function(t){e.d(n,t,(function(){return o[t]}))}(c);e("3fe7");var u,r=e("f0c5"),a=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"279b1107",null,!1,i["a"],u);n["default"]=a.exports}},[["b515","common/runtime","common/vendor"]]]);