(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-user_get_coupon-index"],{"03ff":function(t,i,e){"use strict";e.r(i);var n=e("344e"),o=e("1565");for(var a in o)"default"!==a&&function(t){e.d(i,t,(function(){return o[t]}))}(a);e("15bc");var s,c=e("f0c5"),r=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"5c721f6d",null,!1,n["a"],s);i["default"]=r.exports},1565:function(t,i,e){"use strict";e.r(i);var n=e("539e"),o=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=o.a},"15bc":function(t,i,e){"use strict";var n=e("c257"),o=e.n(n);o.a},"344e":function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return n}));var o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{style:t.colorStyle},[e("v-uni-view",{staticStyle:{"touch-action":"none"}},[e("v-uni-view",{staticClass:"home",staticStyle:{position:"fixed"},style:{top:t.top+"px"},attrs:{id:"right-nav"},on:{touchmove:function(i){i.stopPropagation(),i.preventDefault(),arguments[0]=i=t.$handleEvent(i),t.setTouchMove.apply(void 0,arguments)}}},[t.homeActive?e("v-uni-view",{staticClass:"homeCon bg-color",class:!0===t.homeActive?"on":""},[e("v-uni-navigator",{staticClass:"iconfont icon-shouye-xianxing",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/index/index"}}),e("v-uni-navigator",{staticClass:"iconfont icon-caigou-xianxing",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/order_addcart/order_addcart"}}),e("v-uni-navigator",{staticClass:"iconfont icon-yonghu1",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/user/index"}})],1):t._e(),e("v-uni-view",{staticClass:"pictrueBox",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.open.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"pictrue"},[e("v-uni-image",{staticClass:"image",attrs:{src:!0===t.homeActive?t.imgHost+"/statics/images/close.gif":t.imgHost+"/statics/images/open.gif"}})],1)],1)],1)],1)],1)},a=[]},4333:function(t,i,e){"use strict";var n=e("6c0d"),o=e.n(n);o.a},"539e":function(t,i,e){"use strict";var n=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=e("26cb"),a=n(e("66ca")),s=e("989b"),c={name:"Home",props:{},mixins:[a.default],data:function(){return{top:"545",imgHost:s.HTTP_REQUEST_URL}},computed:(0,o.mapGetters)(["homeActive"]),methods:{setTouchMove:function(t){var i=this;t.touches[0].clientY<545&&t.touches[0].clientY>66&&(i.top=t.touches[0].clientY)},open:function(){this.homeActive?this.$store.commit("CLOSE_HOME"):this.$store.commit("OPEN_HOME")}},created:function(){},beforeDestroy:function(){this.$store.commit("CLOSE_HOME")}};i.default=c},"6c0d":function(t,i,e){var n=e("eda6");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("700a1152",n,!0,{sourceMap:!1,shadowMode:!1})},"7b07":function(t,i,e){"use strict";var n=e("4ea4");e("4160"),e("159b"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=e("d322"),a=e("666f"),s=e("26cb"),c=n(e("03ff")),r=n(e("66ca")),u=e("989b"),l={components:{home:c.default},mixins:[r.default],data:function(){return{imgHost:u.HTTP_REQUEST_URL,couponsList:[],loading:!1,loadend:!1,loadTitle:this.$t("加载更多"),page:1,limit:20,isAuto:!1,isShowAuth:!1,type:0,navList:[{type:0,name:this.$t("通用券"),count:0},{type:1,name:this.$t("品类券"),count:0},{type:2,name:this.$t("商品券"),count:0}],count:0}},computed:(0,s.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,i){t&&this.getUseCoupons()},deep:!0}},onLoad:function(){this.isLogin?this.getUseCoupons():(0,a.toLogin)()},onReachBottom:function(){this.getUseCoupons()},methods:{onLoadFun:function(){this.getUseCoupons()},authColse:function(t){this.isShowAuth=t},getCoupon:function(t,i){var e=this,n=e.couponsList;(0,o.setCouponReceive)(t).then((function(t){n[i].is_use=n[i].is_use+1,e.$set(e,"couponsList",n),e.$util.Tips({title:e.$t("领取成功")})})).catch((function(t){return e.$util.Tips({title:t})}))},getUseCoupons:function(){var t=this;return!this.loadend&&(!this.loading&&(t.loading=!0,t.loadTitle=t.$t("加载更多"),void(0,o.getCoupons)({type:t.type,page:t.page,limit:t.limit}).then((function(i){var e=i.data.list,n=e.length<t.limit,o=t.$util.SplitArray(e,t.couponsList);i.data.count.forEach((function(i,e){t.navList[e].count=i,i&&t.count++})),t.$set(t,"couponsList",o),t.loadend=n,t.loading=!1,t.loadTitle=n?t.$t("我也是有底线的"):t.$t("加载更多"),t.page=t.page+1})).catch((function(i){t.loading=!1,t.loadTitle=t.$t("加载更多")}))))},setType:function(t){this.type!==t&&(this.type=t,this.couponsList=[],this.page=1,this.loadend=!1,this.getUseCoupons())}}};i.default=l},a798:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,".pictrueBox[data-v-5c721f6d]{width:%?130?%;height:%?120?%}\n\n/*返回主页按钮*/.home[data-v-5c721f6d]{position:fixed;color:#fff;text-align:center;z-index:999;right:%?15?%;display:flex}.home .homeCon[data-v-5c721f6d]{border-radius:%?50?%;opacity:0;height:0;color:var(--view-theme);width:0}.home .homeCon.on[data-v-5c721f6d]{opacity:1;-webkit-animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);width:%?300?%;height:%?86?%;margin-bottom:%?20?%;display:flex;justify-content:center;align-items:center;background:var(--view-theme)!important;opacity:.8;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.home .homeCon .iconfont[data-v-5c721f6d]{font-size:%?48?%;color:#fff;display:inline-block;margin:0 auto}.home .pictrue[data-v-5c721f6d]{width:%?86?%;height:%?86?%;border-radius:50%;margin:0 auto;background-color:var(--view-theme)}.home .pictrue .image[data-v-5c721f6d]{width:100%;height:100%;border-radius:50%;-webkit-transform:rotate(90deg);transform:rotate(90deg);ms-transform:rotate(90deg);moz-transform:rotate(90deg);webkit-transform:rotate(90deg);o-transform:rotate(90deg)}",""]),t.exports=i},ad32:function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return n}));var o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{style:t.colorStyle},[t.count>1?e("v-uni-view",{staticClass:"acea-row row-around nav"},[t._l(t.navList,(function(i){return[i.count?e("v-uni-view",{key:i.type,class:["acea-row","row-middle",t.type===i.type?"on":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setType(i.type)}}},[t._v(t._s(i.name))]):t._e()]}))],2):t._e(),t.count>1?e("v-uni-view",{staticStyle:{height:"106rpx"}}):t._e(),t.couponsList.length?e("v-uni-view",{staticClass:"coupon-list"},t._l(t.couponsList,(function(i,n){return e("v-uni-view",{key:n,staticClass:"item acea-row row-center-wrapper",class:{svip:4===i.receive_type}},[e("v-uni-view",{staticClass:"moneyCon acea-row row-center-wrapper"},[e("v-uni-view",{staticClass:"money",class:i.is_use>=i.receive_limit?"moneyGray":""},[e("v-uni-view",[t._v(t._s(t.$t("￥"))),e("v-uni-text",{staticClass:"num"},[t._v(t._s(i.coupon_price))])],1),i.use_min_price>0?e("v-uni-view",{staticClass:"pic-num"},[t._v(t._s(t.$t("满"))+" "+t._s(i.use_min_price)+" "+t._s(t.$t("元可用")))]):e("v-uni-view",{staticClass:"pic-num"},[t._v(t._s(t.$t("无门槛券")))])],1)],1),e("v-uni-view",{staticClass:"text"},[e("v-uni-view",{staticClass:"condition"},[e("v-uni-view",{staticClass:"name line2"},[0===i.type?e("v-uni-view",{staticClass:"line-title",class:i.is_use>=i.receive_limit?"bg-color-huic":""},[t._v(t._s(t.$t("通用劵")))]):1===i.type?e("v-uni-view",{staticClass:"line-title",class:i.is_use>=i.receive_limit?"bg-color-huic":""},[t._v(t._s(t.$t("品类券")))]):e("v-uni-view",{staticClass:"line-title",class:i.is_use>=i.receive_limit?"bg-color-huic":""},[t._v(t._s(t.$t("商品券")))]),4===i.receive_type?e("v-uni-image",{staticClass:"pic",attrs:{src:"/static/images/fvip.png"}}):t._e(),t._v(t._s(t.$t(i.title)))],1)],1),e("v-uni-view",{staticClass:"data acea-row row-between-wrapper"},[i.coupon_time?e("v-uni-view",[t._v(t._s(t.$t("领取后"))+" "+t._s(i.coupon_time)+" "+t._s(t.$t("天内可用")))]):e("v-uni-view",[t._v(t._s(i.start_use_time?i.start_use_time+"-":"")+t._s(i.end_use_time))]),i.is_use>=i.receive_limit?e("v-uni-view",{staticClass:"bnt gray"},[t._v(t._s(t.$t("已领取")))]):0==i.is_permanent&&0==i.remain_count?e("v-uni-view",{staticClass:"bnt gray"},[t._v(t._s(t.$t("已领完")))]):e("v-uni-view",{staticClass:"bnt bg-color",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getCoupon(i.id,n)}}},[t._v(t._s(t.$t("立即领取")))])],1)],1)],1)})),1):t._e(),t.couponsList.length?e("v-uni-view",{staticClass:"loadingicon acea-row row-center-wrapper"},[e("v-uni-text",{staticClass:"loading iconfont icon-jiazai",attrs:{hidden:0==t.loading}}),t._v(t._s(t.loadTitle))],1):t.couponsList.length||2!==t.page?t._e():e("v-uni-view",{staticClass:"noCommodity"},[e("v-uni-view",{staticClass:"pictrue"},[e("v-uni-image",{attrs:{src:t.imgHost+"/statics/images/noCoupon.png"}})],1)],1),e("home")],1)},a=[]},c257:function(t,i,e){var n=e("a798");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("f61d2c94",n,!0,{sourceMap:!1,shadowMode:!1})},c750:function(t,i,e){"use strict";e.r(i);var n=e("ad32"),o=e("e5a1");for(var a in o)"default"!==a&&function(t){e.d(i,t,(function(){return o[t]}))}(a);e("4333");var s,c=e("f0c5"),r=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"13778a81",null,!1,n["a"],s);i["default"]=r.exports},e5a1:function(t,i,e){"use strict";e.r(i);var n=e("7b07"),o=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=o.a},eda6:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,".nav[data-v-13778a81]{position:fixed;top:0;left:0;width:100%;height:%?106?%;background-color:#fff;font-size:%?30?%;color:#999;z-index:9}.nav .acea-row[data-v-13778a81]{border-top:%?5?% solid transparent;border-bottom:%?5?% solid transparent;cursor:pointer}.nav .acea-row.on[data-v-13778a81]{border-bottom-color:var(--view-theme);color:#282828}.coupon-list .pic-num[data-v-13778a81]{color:#fff;font-size:%?24?%}.coupon-list .item .text .condition[data-v-13778a81]{display:flex;align-items:center}.coupon-list .item .text .condition .name[data-v-13778a81]{font-size:%?26?%;font-weight:500;line-height:%?40?%\n\t/* display: flex;\n\talign-items: center; */}.coupon-list .item .text .condition .pic[data-v-13778a81]{width:%?30?%;height:%?30?%;display:block;margin-right:%?10?%;display:inline-block;vertical-align:middle}.condition .line-title[data-v-13778a81]{width:%?90?%;height:%?40?%!important;line-height:%?40?%;text-align:center;box-sizing:border-box;background:#fff7f7;border:%?1?% solid var(--view-theme);opacity:1;border-radius:%?20?%;font-size:%?18?%!important;color:var(--view-theme);margin-right:%?12?%;text-align:center;display:inline-block;vertical-align:middle}.condition .line-title.bg-color-huic[data-v-13778a81]{border-color:#bbb!important;color:#bbb!important;background-color:#f5f5f5!important}",""]),t.exports=i}}]);