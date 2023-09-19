require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/user_get_coupon/index"],{"25ef":function(t,n,e){"use strict";var i=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e("d322"),u=e("666f"),s=e("26cb"),c=i(e("66ca")),a=e("989b"),l={components:{authorize:function(){e.e("components/Authorize").then(function(){return resolve(e("b29f"))}.bind(null,e)).catch(e.oe)},home:function(){Promise.all([e.e("common/vendor"),e.e("components/home/index")]).then(function(){return resolve(e("03ff"))}.bind(null,e)).catch(e.oe)}},mixins:[c.default],data:function(){return{imgHost:a.HTTP_REQUEST_URL,couponsList:[],loading:!1,loadend:!1,loadTitle:this.$t("加载更多"),page:1,limit:20,isAuto:!1,isShowAuth:!1,type:0,navList:[{type:0,name:this.$t("通用券"),count:0},{type:1,name:this.$t("品类券"),count:0},{type:2,name:this.$t("商品券"),count:0}],count:0,receiveLoading:!1}},computed:(0,s.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,n){t&&this.getUseCoupons()},deep:!0}},onLoad:function(){this.isLogin||(0,u.toLogin)()},onReachBottom:function(){this.getUseCoupons()},methods:{onLoadFun:function(){this.getUseCoupons()},authColse:function(t){this.isShowAuth=t},getCoupon:function(t,n){if(!this.receiveLoading){var e=this;this.receiveLoading=!0,(0,o.setCouponReceive)(t).then((function(t){n.is_use+=1,e.$util.Tips({title:e.$t("领取成功")}),setTimeout((function(t){e.receiveLoading=!1}),500)})).catch((function(t){return e.receiveLoading=!1,e.$util.Tips({title:t})}))}},getUseCoupons:function(){var t=this;return!this.loadend&&(!this.loading&&(t.loading=!0,t.loadTitle=t.$t("加载更多"),void(0,o.getCoupons)({type:t.type,page:t.page,limit:t.limit}).then((function(n){var e=n.data.list,i=e.length<t.limit,o=t.$util.SplitArray(e,t.couponsList);n.data.count.forEach((function(n,e){t.navList[e].count=n,n&&t.count++})),t.$set(t,"couponsList",o),t.loadend=i,t.loading=!1,t.loadTitle=i?t.$t("我也是有底线的"):t.$t("加载更多"),t.page=t.page+1})).catch((function(n){t.loading=!1,t.loadTitle=t.$t("加载更多")}))))},setType:function(t){this.type!==t&&(this.type=t,this.couponsList=[],this.page=1,this.loadend=!1,this.getUseCoupons())}}};n.default=l},"432f":function(t,n,e){},9461:function(t,n,e){"use strict";var i=e("432f"),o=e.n(i);o.a},c750:function(t,n,e){"use strict";e.r(n);var i=e("f7d7"),o=e("e5a1");for(var u in o)["default"].indexOf(u)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(u);e("9461");var s=e("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"5d8b35cc",null,!1,i["a"],void 0);n["default"]=c.exports},e5a1:function(t,n,e){"use strict";e.r(n);var i=e("25ef"),o=e.n(i);for(var u in i)["default"].indexOf(u)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(u);n["default"]=o.a},f197:function(t,n,e){"use strict";(function(t,n){var i=e("4ea4");e("248d");i(e("66fd"));var o=i(e("c750"));t.__webpack_require_UNI_MP_PLUGIN__=e,n(o.default)}).call(this,e("bc2e")["default"],e("543d")["createPage"])},f7d7:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){}));var i=function(){var t=this,n=t.$createElement,e=(t._self._c,t.couponsList.length),i=e?t.__map(t.couponsList,(function(n,e){var i=t.__get_orig(n),o=t.$t("￥"),u=n.use_min_price>0?t.$t("满"):null,s=n.use_min_price>0?t.$t("元可用"):null,c=n.use_min_price>0?null:t.$t("无门槛券"),a=0===n.type?t.$t("通用劵"):null,l=0!==n.type&&1===n.type?t.$t("品类券"):null,r=0!==n.type&&1!==n.type?t.$t("商品券"):null,f=t.$t(n.title),d=n.coupon_time?t.$t("领取后"):null,p=n.coupon_time?t.$t("天内可用"):null,m=n.is_use>=n.receive_limit?t.$t("已领取"):null,h=n.is_use>=n.receive_limit||0!=n.is_permanent||0!=n.remain_count?null:t.$t("已领完"),g=n.is_use>=n.receive_limit||0==n.is_permanent&&0==n.remain_count?null:t.$t("立即领取");return{$orig:i,m0:o,m1:u,m2:s,m3:c,m4:a,m5:l,m6:r,m7:f,m8:d,m9:p,m10:m,m11:h,m12:g}})):null,o=t.couponsList.length,u=o?null:!t.couponsList.length&&2===t.page;t.$mp.data=Object.assign({},{$root:{g0:e,l0:i,g1:o,g2:u}})},o=[]}},[["f197","common/runtime","common/vendor"]]]);