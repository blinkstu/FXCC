(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/diy/index"],{"26c7":function(t,e,n){},"7bcf":function(t,e,n){"use strict";var o=n("26c7"),i=n.n(o);i.a},b316:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.$t("￥")),o=t.pageShow&&!t.errorNetwork&&1==t.isSortType&&t.goodList.length?t.__map(t.goodList,(function(e,n){var o=t.__get_orig(e),i=e.activity&&"1"===e.activity.type?t.$t("秒杀"):null,a=e.activity&&"2"===e.activity.type?t.$t("砍价"):null,r=e.activity&&"3"===e.activity.type?t.$t("拼团"):null,c=e.checkCoupon?t.$t("券"):null;return{$orig:o,m0:i,m1:a,m2:r,m3:c}})):null,i=t.pageShow&&!t.errorNetwork&&1==t.isSortType&&0==t.goodList.length&&t.loaded?t.$t("暂无数据"):null,a=t.pageShow&&!t.errorNetwork&&t.newData.status&&t.newData.status.status?t.__map(t.newData.menuList,(function(e,n){var o=t.__get_orig(e),i=e.link==t.activeRouter?t.$t(e.name):null,a=e.link!=t.activeRouter?t.$t(e.name):null;return{$orig:o,m6:i,m7:a}})):null,r=t.pageShow&&t.errorNetwork?t.$t("网络连接断开"):null,c=t.pageShow&&t.errorNetwork?t.$t("请检查情况："):null,s=t.pageShow&&t.errorNetwork?t.$t("在设置中是否已开启网络权限："):null,u=t.pageShow&&t.errorNetwork?t.$t("当前是否处于弱网环境"):null,d=t.pageShow&&t.errorNetwork?t.$t("版本是否过低，升级试试吧"):null,l=t.pageShow&&t.errorNetwork?t.$t("重新连接"):null;t.$mp.data=Object.assign({},{$root:{m4:n,l0:o,m5:i,l1:a,m8:r,m9:c,m10:s,m11:u,m12:d,m13:l}})},a=[]},cf79:function(t,e,n){"use strict";n.r(e);var o=n("e05c"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},e05c:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,i=f(n("cf74")),a=n("e5e8"),r=n("d8b4"),c=n("555e"),s=n("26cb"),u=n("dbf8"),d=n("c9cb"),l=n("a398"),g=n("1118"),h=n("d5d8");function f(t){return t&&t.__esModule?t:{default:t}}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}getApp();var m=function(){Promise.all([n.e("common/vendor"),n.e("components/couponWindow/index")]).then(function(){return resolve(n("c9eb"))}.bind(null,n)).catch(n.oe)},v=function(){n.e("components/Authorize").then(function(){return resolve(n("4a3a"))}.bind(null,n)).catch(n.oe)},b=function(){n.e("pages/index/diy/components/activeParty").then(function(){return resolve(n("6207"))}.bind(null,n)).catch(n.oe)},S=function(){n.e("pages/index/diy/components/headerSerch").then(function(){return resolve(n("8a17"))}.bind(null,n)).catch(n.oe)},w=function(){n.e("pages/index/diy/components/swipers").then(function(){return resolve(n("b3ef"))}.bind(null,n)).catch(n.oe)},y=function(){n.e("pages/index/diy/components/coupon").then(function(){return resolve(n("9659"))}.bind(null,n)).catch(n.oe)},L=function(){n.e("pages/index/diy/components/articleList").then(function(){return resolve(n("58b1"))}.bind(null,n)).catch(n.oe)},T=function(){Promise.all([n.e("common/vendor"),n.e("pages/index/diy/components/bargain")]).then(function(){return resolve(n("3d8f"))}.bind(null,n)).catch(n.oe)},x=function(){n.e("pages/index/diy/components/blankPage").then(function(){return resolve(n("31e4"))}.bind(null,n)).catch(n.oe)},_=function(){Promise.all([n.e("common/vendor"),n.e("pages/index/diy/components/combination")]).then(function(){return resolve(n("c5cd"))}.bind(null,n)).catch(n.oe)},C=function(){n.e("pages/index/diy/components/customerService").then(function(){return resolve(n("896b"))}.bind(null,n)).catch(n.oe)},D=function(){n.e("pages/index/diy/components/goodList").then(function(){return resolve(n("bee9"))}.bind(null,n)).catch(n.oe)},P=function(){n.e("pages/index/diy/components/guide").then(function(){return resolve(n("719b"))}.bind(null,n)).catch(n.oe)},$=function(){n.e("pages/index/diy/components/liveBroadcast").then(function(){return resolve(n("4f4b"))}.bind(null,n)).catch(n.oe)},k=function(){n.e("pages/index/diy/components/menus").then(function(){return resolve(n("c60e"))}.bind(null,n)).catch(n.oe)},N=function(){n.e("pages/index/diy/components/news").then(function(){return resolve(n("184b"))}.bind(null,n)).catch(n.oe)},A=function(){n.e("pages/index/diy/components/pictureCube").then(function(){return resolve(n("8452"))}.bind(null,n)).catch(n.oe)},O=function(){n.e("pages/index/diy/components/promotionList").then(function(){return resolve(n("37f4"))}.bind(null,n)).catch(n.oe)},R=function(){n.e("pages/index/diy/components/richText").then(function(){return resolve(n("5bd7"))}.bind(null,n)).catch(n.oe)},B=function(){Promise.all([n.e("common/vendor"),n.e("pages/index/diy/components/seckill")]).then(function(){return resolve(n("137c"))}.bind(null,n)).catch(n.oe)},I=function(){n.e("pages/index/diy/components/swiperBg").then(function(){return resolve(n("48f7"))}.bind(null,n)).catch(n.oe)},E=function(){n.e("pages/index/diy/components/tabNav").then(function(){return resolve(n("100d"))}.bind(null,n)).catch(n.oe)},G=function(){n.e("pages/index/diy/components/titles").then(function(){return resolve(n("3609"))}.bind(null,n)).catch(n.oe)},H=function(){n.e("components/update/app-update").then(function(){return resolve(n("3628"))}.bind(null,n)).catch(n.oe)},j=function(){Promise.all([n.e("common/vendor"),n.e("components/pageFooter/index")]).then(function(){return resolve(n("4544"))}.bind(null,n)).catch(n.oe)},U=function(){n.e("components/Loading/index").then(function(){return resolve(n("3d84"))}.bind(null,n)).catch(n.oe)},F=function(){Promise.all([n.e("common/vendor"),n.e("components/recommend/index")]).then(function(){return resolve(n("8084"))}.bind(null,n)).catch(n.oe)},M=(o={computed:(0,s.mapGetters)(["isLogin","uid"]),mixins:[i.default],components:{recommend:F,Loading:U,pageFooter:j,couponWindow:m,authorize:v,activeParty:b,headerSerch:S,swipers:w,coupon:y,articleList:L,bargain:T,blankPage:x,combination:_,customerService:C,goodList:D,guide:P,liveBroadcast:$,menus:k,pictureCube:A,news:N,promotionList:O,richText:R,seckill:B,swiperBg:I,tabNav:E,titles:G,appUpdate:H}},p(o,"computed",(0,s.mapGetters)(["isLogin","cartNum"])),p(o,"data",(function(){var t;return t={imgHost:h.HTTP_REQUEST_URL,showSkeleton:!0,isNodes:0,styleConfig:[],tempArr:[],goodType:3,loading:!1,loadend:!1,loadTitle:this.$t("下拉加载更多"),page:1,limit:this.$config.LIMIT,iSshowH:!1,numConfig:0,code:"",isCouponShow:!1,couponObj:{},couponObjs:{show:!1},shareInfo:{},footConfig:{},isSortType:0,sortList:"",sortAll:[],goodPage:1,goodList:[],newData:{},sid:0,curSort:0,sortMpTop:0,loaded:!1},p(t,"loading",!1),p(t,"hostProduct",[]),p(t,"hotScroll",!1),p(t,"hotPage",1),p(t,"hotLimit",10),p(t,"domOffsetTop",50),p(t,"isFixed",!0),p(t,"site_config",""),p(t,"errorNetwork",!1),p(t,"privacyStatus",!1),p(t,"footerStatus",!1),p(t,"isHeaderSerch",!1),p(t,"bgColor",""),p(t,"bgPic",""),p(t,"bgTabVal",""),p(t,"pageShow",!0),p(t,"windowHeight",0),p(t,"activeRouter",""),p(t,"countNum",0),t})),p(o,"onPullDownRefresh",(function(){this.diyData()})),p(o,"created",(function(e){var n=this,o=this;this.$nextTick((function(){t.getSystemInfo({success:function(t){o.windowHeight=t.windowHeight}})})),(0,r.getNavigation)().then((function(e){n.newData=e.data,n.newData.status&&n.newData.status.status?t.hideTabBar():t.showTabBar()}));var i=getCurrentPages(),c=i[i.length-1].route;this.activeRouter="/"+c,this.diyData(),this.getIndexData(),this.getTempIds(),(0,a.siteConfig)().then((function(t){n.site_config=t.data.record_No})).catch((function(t){})),this.isLogin&&(this.getCoupon(),(0,l.getCartCounts)().then((function(e){n.countNum=e.data.count,n.$store.commit("indexData/setCartNum",e.data.count>99?"..":e.data.count+""),e.data.count>0?wx.setTabBarBadge({index:Number(t.getStorageSync("FOOTER_ADDCART"))||2,text:e.data.count+""}):wx.hideTabBarRedDot({index:Number(t.getStorageSync("FOOTER_ADDCART"))||2})})))})),p(o,"watch",{isLogin:{deep:!0,handler:function(e,n){var o=(new Date).toLocaleDateString();if(e){try{var i=t.getStorageSync("oldDate")||""}catch(a){}i!=o&&this.getCoupon()}}}}),p(o,"onReady",(function(){})),p(o,"methods",{reconnect:function(){var e=this;t.showLoading({title:this.$t("加载中")}),this.diyData(),this.getIndexData(),getShare().then((function(t){e.shareInfo=t.data}))},goICP:function(){t.navigateTo({url:"/pages/annex/web_view/index?url=https://beian.miit.gov.cn/"})},bindHeighta:function(t){},bindHeight:function(e){t.hideLoading(),this.domOffsetTop=e.top},goGoodsDetail:function(e){(0,d.goShopDetail)(e,this.uid).then((function(n){t.navigateTo({url:"/pages/goods_details/index?id=".concat(e.id)})}))},get_host_product:function(){var t=this;t.hotScroll||(0,u.getProductHot)(t.hotPage,t.hotLimit).then((function(e){t.hotPage++,t.hotScroll=e.data.length<t.hotLimit,t.hostProduct=t.hostProduct.concat(e.data)}))},changeSort:function(t,e){this.curSort!=e&&(this.curSort=e,this.sid=t.id,this.goodList=[],this.goodPage=1,this.loaded=!1,this.getGoodsList())},bindSortId:function(t){this.isSortType=-99==t?0:1,this.getProductList(t),0==this.hostProduct.length&&this.get_host_product()},getProductList:function(t){var e=this;this.curSort=0,this.loaded=!1,this.sortAll.length>0?(this.sortAll.forEach((function(n,o){n.id==t&&(e.$set(e,"sortList",n),e.sid=n.children.length?n.children[0].id:"")})),this.goodList=[],this.goodPage=1,this.$nextTick((function(){""!=e.sortList&&e.getGoodsList()}))):(0,u.getCategoryList)().then((function(n){e.sortAll=n.data,n.data.forEach((function(n,o){n.id==t&&(e.sortList=n,e.sid=n.children.length?n.children[0].id:"")})),e.goodList=[],e.goodPage=1,e.$nextTick((function(){""!=e.sortList&&e.getGoodsList()}))}))},getGoodsList:function(){var t=this;this.loading||this.loaded||(this.loading=!0,(0,u.getProductslist)({sid:this.sid,keyword:"",priceOrder:"",salesOrder:"",news:0,page:this.goodPage,limit:10,cid:this.sortList.id}).then((function(e){t.loading=!1,t.loaded=e.data.length<10,t.goodPage++,t.goodList=t.goodList.concat(e.data)})))},getNewCoupon:function(){var e=this,n=t.getStorageSync("oldUser")||0;n||(0,a.getCouponNewUser)().then((function(n){var o=n.data;o.show?o.list.length&&(e.isCouponShow=!0,e.couponObj=o,t.setStorageSync("oldUser",1)):t.setStorageSync("oldUser",1)}))},getCoupon:function(){var e=this,n=t.getStorageSync("tagDate")||"",o=(new Date).toLocaleDateString();n===o?this.getNewCoupon():(0,a.getCouponV2)().then((function(n){var o=n.data;o.list.length?(e.isCouponShow=!0,e.couponObj=o,t.setStorageSync("tagDate",(new Date).toLocaleDateString())):e.getNewCoupon()}))},couponClose:function(){this.isCouponShow=!1,t.getStorageSync("oldUser")||this.getNewCoupon()},onLoadFun:function(){},getTempIds:function(){var t=wx.getStorageSync(c.SUBSCRIBE_MESSAGE);t||(0,a.getTempIds)().then((function(t){t.data&&wx.setStorageSync(c.SUBSCRIBE_MESSAGE,JSON.stringify(t.data))}))},objToArr:function(t){var e=Object.keys(t),n=e.map((function(e){return t[e]}));return n},diyData:function(){var e=this,n=this;(0,a.getDiy)(0).then((function(o){setTimeout((function(){e.isNodes++}),0),e.errorNetwork=!1;var i=o.data;i.is_bg_color&&(e.bgColor=i.color_picker),i.is_bg_pic&&(e.bgPic=i.bg_pic,e.bgTabVal=i.bg_tab_val),e.pageShow=i.is_show,t.setNavigationBarTitle({title:o.data.title});var a=[],r=n.objToArr(o.data.value);function c(t,e){return t.timestamp-e.timestamp}r.forEach((function(o,i,r){"headerSerch"==o.name&&(e.isHeaderSerch=!0),"pageFoot"==o.name&&(o.status&&o.status.status&&(e.newData=o,setTimeout((function(t){n.$set(n,"footerStatus",!0)}),50)),t.setStorageSync("FOOTER_BAR",!(!o.status||!o.status.status)),o.menuList.map((function(e,n){"/pages/order_addcart/order_addcart"===e.link&&t.setStorageSync("FOOTER_ADDCART",n)})),r.splice(i,1)),"promotionList"==o.name&&(n.numConfig=o.numConfig.val,n.goodType=o.tabConfig.list[0].link.activeVal,n.getGroomList()),o.name,a=r})),a.sort(c),n.styleConfig=a,setTimeout((function(){e.showSkeleton=!1}),300),t.stopPullDownRefresh({success:function(t){}})})).catch((function(t){}))},getIndexData:function(){},changeBarg:function(e){this.isLogin?t.navigateTo({url:"/pages/activity/goods_bargain_details/index?id=".concat(e.id,"&bargain=").concat(this.$store.state.app.uid)}):(0,g.toLogin)()},changeTab:function(t){this.goodType=t,this.tempArr=[],this.page=1,this.loadend=!1;var e=!0;this.getGroomList(e)},getGroomList:function(t){var e=this,n=this,o=n.goodType;return!n.loadend&&(!n.loading&&(t&&n.$set(n,"iSshowH",!0),void(0,u.getGroomList)(o,{page:n.page,limit:this.numConfig}).then((function(t){var o=t.data;n.$set(n,"iSshowH",!1);var i=Math.ceil(e.numConfig/e.limit),a=o.list,r=a.length<n.limit||n.page>=i,c=n.$util.SplitArray(a,n.tempArr);n.$set(n,"tempArr",c.slice(0,e.numConfig)),n.loadend=r,n.loadTitle=r?n.$t("没有更多内容啦~"):n.$t("加载更多"),n.page=n.page+1,n.loading=!1})).catch((function(t){n.loading=!1,n.loadTitle=n.$t("加载更多")}))))},goRouter:function(e){var n=getCurrentPages(),o=n[n.length-1].$page.fullPath;e.link!=o&&t.switchTab({url:e.link,fail:function(n){t.redirectTo({url:e.link})}})},goDetail:function(e){(0,d.goShopDetail)(e,this.$store.state.app.uid).then((function(n){t.navigateTo({url:"/pages/goods_details/index?id=".concat(e.id)})}))},onsollBotton:function(){0==this.isSortType||this.getGoodsList()}}),p(o,"onReachBottom",(function(){})),p(o,"onPageScroll",(function(t){})),p(o,"onShareAppMessage",(function(){return{title:this.shareInfo.title,path:"/pages/index/index"}})),p(o,"onShareTimeline",(function(){return{title:this.shareInfo.title,imageUrl:this.shareInfo.img}})),o);e.default=M}).call(this,n("543d")["default"])},eec9:function(t,e,n){"use strict";n.r(e);var o=n("b316"),i=n("cf79");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("7bcf");var r,c=n("f0c5"),s=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);e["default"]=s.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/diy/index-create-component',
    {
        'pages/index/diy/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("eec9"))
        })
    },
    [['pages/index/diy/index-create-component']]
]);
