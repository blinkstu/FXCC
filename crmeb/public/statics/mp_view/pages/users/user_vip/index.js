require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/user_vip/index"],{"4b88":function(e,t,n){"use strict";var o=n("8560"),l=n.n(o);l.a},8560:function(e,t,n){},"9d40":function(e,t,n){"use strict";n.r(t);var o=n("cd43"),l=n("ce5f");for(var a in l)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return l[e]}))}(a);n("4b88");var i=n("f0c5"),r=Object(i["a"])(l["default"],o["b"],o["c"],!1,null,"738f23f2",null,!1,o["a"],void 0);t["default"]=r.exports},c965:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("8ba8"),l=n("1579"),a=n("666f"),i=n("26cb"),r={components:{recommend:function(){Promise.all([n.e("common/vendor"),n.e("components/recommend/index")]).then(function(){return resolve(n("f1f8"))}.bind(null,n)).catch(n.oe)},authorize:function(){n.e("components/Authorize").then(function(){return resolve(n("b29f"))}.bind(null,n)).catch(n.oe)}},data:function(){return{reach_count:0,VipList:[],swiperIndex:0,growthValue:!0,task:[],illustrate:"",level_id:0,hostProduct:[],grade:0,isAuto:!1,isShowAuth:!1,hotScroll:!1,hotPage:1,hotLimit:10,level_title:"",level_discount:"",levelInfo:{},task_list:[{real_name:this.$t("积分数"),number:0},{real_name:this.$t("消费金额"),number:0},{real_name:this.$t("优惠券"),number:0}],userInfo:{},taskInfo:{},is_open_member:0}},computed:(0,i.mapGetters)(["isLogin"]),watch:{VipList:function(){var e=this;e.VipList.length>0&&e.VipList.forEach((function(t,n){!1===t.is_clear&&(e.activeIndex=n,e.grade=t.grade)}))},isLogin:{handler:function(e,t){e&&(this.setLeveLComplete(),this.get_host_product())},deep:!0}},onLoad:function(){this.isLogin?(this.setLeveLComplete(),this.get_host_product(),this.getlevelInfo(),this.getUserInfo()):(0,a.toLogin)();var e=this;setTimeout((function(){e.loading=!0}),500)},methods:{getUserInfo:function(){var e=this;(0,o.getUserInfo)().then((function(t){e.is_open_member=t.data.is_open_member,e.task_list=[{real_name:e.$t("积分数"),number:t.data.integral},{real_name:e.$t("消费金额"),number:t.data.orderStatusSum},{real_name:e.$t("优惠券"),number:t.data.couponCount}]}))},getlevelInfo:function(){var e=this;(0,o.getlevelInfo)().then((function(t){var n=t.data,o=n.level_info,l=n.level_list,a=n.task,i=n.user;e.levelInfo=o,e.VipList=l,e.userInfo=i,e.taskInfo=a,e.levelInfo.exp=parseFloat(e.levelInfo.exp),e.levelInfo.rate=Math.floor(e.levelInfo.exp/e.levelInfo.exp_num*100),e.levelInfo.rate>100&&(e.levelInfo.rate=100);var r=l.findIndex((function(e){var t=e.grade;return t===o.grade}));-1!==r&&(e.swiperIndex=r)}))},onLoadFun:function(){this.setLeveLComplete(),this.get_host_product()},authColse:function(e){this.isShowAuth=e},get_host_product:function(){var e=this;(0,l.getProductHot)().then((function(t){var n=e;n.hotScroll||(0,l.getProductHot)(n.hotPage,n.hotLimit).then((function(e){n.hotPage++,n.hotScroll=e.data.length<n.hotLimit,n.hostProduct=n.hostProduct.concat(e.data)}))}))},swiperChange:function(e){var t=e.detail.current;this.swiperIndex=t,this.level_id=this.VipList[t].id||0,this.level_title=this.VipList[t].name||"",this.level_discount=this.VipList[t].discount||""},growthValueClose:function(){this.growthValue=!0},opHelp:function(e){this.growthValue=!1,this.illustrate=this.task[e].illustrate},setLeveLComplete:function(){(0,o.userLevelDetection)().then((function(e){}))},getVipList:function(){var e=this;(0,o.userLevelGrade)().then((function(t){e.$set(e,"VipList",t.data.list),e.task=t.data.task.task,e.reach_count=t.data.task.reach_count,e.level_id=t.data.list[0]?t.data.list[0].id:0,e.level_title=t.data.list[0]?t.data.list[0].name:"",e.level_discount=t.data.list[0]?t.data.list[0].discount:""}))},getTask:function(){var e=this;(0,o.userLevelTask)(e.level_id).then((function(t){e.task=t.data.task,e.reach_count=t.data.reach_count}))}},onReachBottom:function(){this.get_host_product()},onPageScroll:function(t){e.$emit("scroll")}};t.default=r}).call(this,n("543d")["default"])},cd43:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){}));var o=function(){var e=this,t=e.$createElement,n=(e._self._c,e.$t(e.userInfo.nickname||"")),o=e.$t("商城购物可享"),l=e.$t("折"),a=e.__map(e.VipList,(function(t,n){var o=e.__get_orig(t),l=t.grade===e.levelInfo.grade?e.$t("当前等级"):null,a=!e.levelInfo.grade||t.grade>e.levelInfo.grade?e.$t("未达成"):null,i=t.grade===e.levelInfo.grade?e.$t("今日成长值"):null,r=t.grade===e.levelInfo.grade?e.$t("点"):null,u=t.grade===e.levelInfo.grade?Math.floor(e.levelInfo.exp/t.next_exp_num>1?100:e.levelInfo.exp/t.next_exp_num*100):null,s=t.grade===e.levelInfo.grade?e.$t("我的成长值记录"):null,d=!e.levelInfo.grade||t.grade>e.levelInfo.grade?e.$t("暂未解锁该等级"):null,c=!e.levelInfo.grade||t.grade>e.levelInfo.grade?Math.floor(e.levelInfo.exp/t.exp_num*100):null,f=!e.levelInfo.grade||t.grade>e.levelInfo.grade?e.$t("当前"):null,m=!e.levelInfo.grade||t.grade>e.levelInfo.grade?e.$t("点，需达到"):null,h=!e.levelInfo.grade||t.grade>e.levelInfo.grade?e.$t("点解锁"):null,v=!e.levelInfo.grade||t.grade>e.levelInfo.grade?e.$t("我的成长值记录"):null,g=e.$t(t.name),_=t.grade<e.levelInfo.grade?e.$t("已解锁更高等级"):null;return{$orig:o,m3:l,m4:a,m5:i,m6:r,g0:u,m7:s,m8:d,g1:c,m9:f,m10:m,m11:h,m12:v,m13:g,m14:_}})),i=e.$t("我的成长特权"),r=e.is_open_member?e.$t("立即升级"):null,u=e.$t("购物折扣"),s=e.$t("专属徽章"),d=e.$t("经验累积"),c=e.$t("尊享客服"),f=e.$t("快速升级技巧"),m=e.$t("签到"),h=e.$t("可获得"),v=e.$t("点经验"),g=e.$t("每日签到可获得经验值，已签到"),_=e.$t("天"),p=e.$t("去签到"),I=e.$t("购买商品"),$=e.$t("点经验/元"),L=e.$t("购买商品可获得对应的经验值"),b=e.$t("去购买"),x=e.$t("邀请好友"),k=e.$t("点经验/人"),P=e.$t("邀请好友注册商城可获得经验值"),V=e.$t("去邀请"),w=e.hostProduct.length;e.$mp.data=Object.assign({},{$root:{m0:n,m1:o,m2:l,l0:a,m15:i,m16:r,m17:u,m18:s,m19:d,m20:c,m21:f,m22:m,m23:h,m24:v,m25:g,m26:_,m27:p,m28:I,m29:$,m30:L,m31:b,m32:x,m33:k,m34:P,m35:V,g2:w}})},l=[]},ce5f:function(e,t,n){"use strict";n.r(t);var o=n("c965"),l=n.n(o);for(var a in o)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=l.a},d61a:function(e,t,n){"use strict";(function(e,t){var o=n("4ea4");n("248d");o(n("66fd"));var l=o(n("9d40"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(l.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])}},[["d61a","common/runtime","common/vendor"]]]);