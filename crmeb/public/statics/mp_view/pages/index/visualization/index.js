(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/visualization/index"],{"2da5":function(n,t,e){"use strict";var o;e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return o}));var i=function(){var n=this,t=n.$createElement,e=(n._self._c,n.$t("点击")),o=n.$t("添加到我的小程序， 微信首页下拉即可访问商城。"),i=!n.isIframe&&n.tabNav.default&&n.tabNav.default.isShow.val&&0==n.goodLists.length&&!n.loading?n.$t("暂无商品，去看点别的吧"):null;n.$mp.data=Object.assign({},{$root:{m0:e,m1:o,m2:i}})},a=[]},"7ac4":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=e("18f5"),i=e("b2de"),a=e("a656"),c=e("26cb"),s=e("768b"),u=e("a43a"),l=(e("a368"),e("168b")),r=d(e("9ad2"));function d(n){return n&&n.__esModule?n:{default:n}}var f=function(){Promise.all([e.e("common/vendor"),e.e("components/couponWindow/index")]).then(function(){return resolve(e("714c"))}.bind(null,e)).catch(e.oe)},h=function(){e.e("components/indexGoods/index").then(function(){return resolve(e("9d5c"))}.bind(null,e)).catch(e.oe)},p=function(){e.e("pages/index/visualization/components/headerSerch").then(function(){return resolve(e("cdc9"))}.bind(null,e)).catch(e.oe)},g=function(){e.e("pages/index/visualization/components/swiperBg").then(function(){return resolve(e("4890"))}.bind(null,e)).catch(e.oe)},v=function(){e.e("pages/index/visualization/components/menus").then(function(){return resolve(e("b28c"))}.bind(null,e)).catch(e.oe)},m=function(){e.e("pages/index/visualization/components/news").then(function(){return resolve(e("0c4e"))}.bind(null,e)).catch(e.oe)},b=function(){e.e("pages/index/visualization/components/activity").then(function(){return resolve(e("44eb"))}.bind(null,e)).catch(e.oe)},S=function(){e.e("pages/index/visualization/components/scrollBox").then(function(){return resolve(e("b795"))}.bind(null,e)).catch(e.oe)},w=function(){e.e("pages/index/visualization/components/recommend").then(function(){return resolve(e("0ab4"))}.bind(null,e)).catch(e.oe)},x=function(){e.e("pages/index/visualization/components/popular").then(function(){return resolve(e("5b4a"))}.bind(null,e)).catch(e.oe)},T=function(){e.e("pages/index/visualization/components/mBanner").then(function(){return resolve(e("7a67"))}.bind(null,e)).catch(e.oe)},B=function(){e.e("pages/index/visualization/components/newGoods").then(function(){return resolve(e("f45b"))}.bind(null,e)).catch(e.oe)},L=function(){e.e("pages/index/visualization/components/promotion").then(function(){return resolve(e("5f61"))}.bind(null,e)).catch(e.oe)},y=function(){e.e("pages/index/visualization/components/alive").then(function(){return resolve(e("8b3c"))}.bind(null,e)).catch(e.oe)},z=function(){e.e("pages/index/visualization/components/adsRecommend").then(function(){return resolve(e("1809"))}.bind(null,e)).catch(e.oe)},C=function(){e.e("pages/index/visualization/components/coupon").then(function(){return resolve(e("6e58"))}.bind(null,e)).catch(e.oe)},P=function(){e.e("pages/index/visualization/components/seckill").then(function(){return resolve(e("c9e8"))}.bind(null,e)).catch(e.oe)},I=function(){e.e("pages/index/visualization/components/combination").then(function(){return resolve(e("be6f"))}.bind(null,e)).catch(e.oe)},_=function(){e.e("pages/index/visualization/components/bargain").then(function(){return resolve(e("ed60"))}.bind(null,e)).catch(e.oe)},D=function(){e.e("pages/index/visualization/components/goodList").then(function(){return resolve(e("fa75"))}.bind(null,e)).catch(e.oe)},N=function(){e.e("pages/index/visualization/components/picTxt").then(function(){return resolve(e("567c"))}.bind(null,e)).catch(e.oe)},$=function(){e.e("pages/index/visualization/components/titles").then(function(){return resolve(e("293a"))}.bind(null,e)).catch(e.oe)},k=function(){e.e("pages/index/visualization/components/customerService").then(function(){return resolve(e("f54d"))}.bind(null,e)).catch(e.oe)},O=function(){Promise.all([e.e("common/vendor"),e.e("pages/index/visualization/components/tabBar")]).then(function(){return resolve(e("fd5d"))}.bind(null,e)).catch(e.oe)},R=function(){e.e("pages/index/visualization/components/tabNav").then(function(){return resolve(e("b9d8"))}.bind(null,e)).catch(e.oe)},U=function(){e.e("components/update/app-update").then(function(){return resolve(e("68a8"))}.bind(null,e)).catch(e.oe)},H=function(){e.e("components/Loading/index").then(function(){return resolve(e("437f"))}.bind(null,e)).catch(e.oe)},E=function(){e.e("pages/index/visualization/components/skeleton").then(function(){return resolve(e("9e12"))}.bind(null,e)).catch(e.oe)},G=getApp(),j=n.getSystemInfoSync().statusBarHeight,M={computed:(0,c.mapGetters)(["isLogin","uid"]),components:{couponWindow:f,headerSerch:p,swiperBg:g,menus:v,news:m,activity:b,scrollBox:S,recommend:w,popular:x,mBanner:T,newGoods:B,promotion:L,alive:y,adsRecommend:z,coupon:C,seckill:P,combination:I,bargain:_,goodList:D,picTxt:N,titles:$,customerService:k,tabBar:O,tabNav:R,Loading:H,skeletons:E,indexGoods:h,appUpdate:U},mixins:[r.default],data:function(){return{imgHost:l.HTTP_REQUEST_URL,showSkeleton:!0,isNodes:0,isSortType:0,sortList:{},sortAll:[],goodPage:1,goodLists:[],curSort:0,sortMpTop:0,loaded:!1,hostProduct:[],hotScroll:!1,hotPage:1,hotLimit:10,followHid:!0,followUrl:"",followCode:!1,navH:j,subscribe:!1,iShidden:!1,goodType:3,loading:!1,loadend:!1,loadTitle:this.$t("下拉加载更多"),page:1,limit:this.$config.LIMIT,numConfig:0,couponObj:{},isCouponShow:!1,shareInfo:{},site_config:"",isIframe:G.globalData.isIframe,headerSerch:{},swiperBg:{},menus:{},news:{},activity:{},alive:{},scrollBox:{},titles:{},goodList:{},tabBar:{},customerService:{},picTxt:{},bargain:{},combination:{},adsRecommend:{},seckill:{},coupon:{},tabNav:{},isBorader:"",domOffsetTop:50,isTop:0,privacyStatus:!1,isFixed:!1}},created:function(){var t=this;n.hideTabBar();this.diyData(),this.getIndexData(),this.$Cache.get(i.TIPS_KEY)&&(this.iShidden=!0),this.getTempIds(),(0,a.siteConfig)().then((function(n){t.site_config=n.data.record_No})).catch((function(n){return t.$util.Tips({title:n.msg})}));var e=n.createSelectorQuery().in(this);e.select(".mp-header").boundingClientRect((function(n){t.isTop=n.top})).exec(),G.globalData.isIframe||this.isLogin&&this.getCoupon()},methods:{bindEdit:function(n,t){G.globalData.isIframe&&window.parent.postMessage({name:n,dataName:t,params:{}},"*")},getFollow:function(){var n=this;(0,o.follow)().then((function(t){n.followUrl=t.data.path})).catch((function(t){return n.$util.Tips({title:t.msg})}))},followTap:function(){this.followCode=!0,this.followHid=!1},closeFollow:function(){this.followHid=!1},closeFollowCode:function(){this.followCode=!1,this.followHid=!0},closeTip:function(){this.$Cache.set(i.TIPS_KEY,!0),this.iShidden=!0},bindHeighta:function(n){this.domOffsetTop=n.top-110},getCoupon:function(){var t=this,e=n.getStorageSync("tagDate")||"",o=(new Date).toLocaleDateString();e===o?this.getNewCoupon():(0,a.getCouponV2)().then((function(e){var o=e.data;o.list.length?(t.isCouponShow=!0,t.couponObj=o,n.setStorageSync("tagDate",(new Date).toLocaleDateString())):t.getNewCoupon()}))},getNewCoupon:function(){var t=this,e=n.getStorageSync("oldUser")||0;e||(0,a.getCouponNewUser)().then((function(e){var o=e.data;o.show?o.list.length&&(t.isCouponShow=!0,t.couponObj=o,n.setStorageSync("oldUser",1)):n.setStorageSync("oldUser",1)}))},couponClose:function(){this.isCouponShow=!1,n.getStorageSync("oldUser")||this.getNewCoupon()},getTempIds:function(){(0,a.getTempIds)().then((function(n){n.data&&wx.setStorageSync(i.SUBSCRIBE_MESSAGE,JSON.stringify(n.data))}))},goICP:function(){n.navigateTo({url:"/pages/annex/web_view/index?url=https://beian.miit.gov.cn/"})},onLoadFun:function(){},diyData:function(){var n=this,t=this;(0,a.getDiy)().then((function(e){var o=e.data;t.headerSerch=o.headerSerch,t.swiperBg=o.swiperBg,t.menus=o.menus,t.news=o.news,t.activity=o.activity,t.alive=o.alive,t.scrollBox=o.scrollBox,t.titles=o.titles,t.goodList=o.goodList,t.tabNav=o.tabNav,t.tabBar=o.tabBar,t.customerService=o.customerService,t.picTxt=o.picTxt,t.bargain=o.bargain,t.combination=o.combination,t.adsRecommend=o.adsRecommend,t.seckill=o.seckill,t.coupon=o.coupon,n.$Cache.set("TAB_BAR",o.tabBar.default.tabBarList),setTimeout((function(){n.showSkeleton=!1}),300)})).catch((function(n){}))},getIndexData:function(){var t=this;(0,a.getIndexData)().then((function(e){t.subscribe=e.data.subscribe,n.setNavigationBarTitle({title:e.data.site_name})}))},get_host_product:function(){var n=this;n.hotScroll||(0,s.getProductHot)(n.hotPage,n.hotLimit).then((function(t){n.hotPage++,n.hotScroll=t.data.length<n.hotLimit,n.hostProduct=n.hostProduct.concat(t.data)}))},bindSortId:function(n){this.isSortType=-99==n?0:1,this.getProductList(n)},getProductList:function(n){this.curSort=0,this.loaded=!1,this.goodPage=1,this.getGoodsList(n)},getGoodsList:function(n){var t=this;this.loading||this.loaded||(this.loading=!0,(0,s.getProductslist)({keyword:"",priceOrder:"",salesOrder:"",news:0,page:this.goodPage,limit:10,cid:n}).then((function(n){t.goodLists=n.data,t.loading=!1,t.loaded=n.data.length<10,t.goodPage++})))},goGoodsDetail:function(t){var e=this;(0,u.goPage)().then((function(o){(0,u.goShopDetail)(t,e.uid).then((function(e){n.navigateTo({url:"/pages/goods_details/index?id=".concat(t.id)})}))}))}},onReachBottom:function(){},onPageScroll:function(n){}};t.default=M}).call(this,e("543d")["default"])},8062:function(n,t,e){"use strict";e.r(t);var o=e("2da5"),i=e("b88c");for(var a in i)"default"!==a&&function(n){e.d(t,n,(function(){return i[n]}))}(a);e("adb6");var c,s=e("f0c5"),u=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,"2e08ac14",null,!1,o["a"],c);t["default"]=u.exports},adb6:function(n,t,e){"use strict";var o=e("aefa"),i=e.n(o);i.a},aefa:function(n,t,e){},b88c:function(n,t,e){"use strict";e.r(t);var o=e("7ac4"),i=e.n(o);for(var a in o)"default"!==a&&function(n){e.d(t,n,(function(){return o[n]}))}(a);t["default"]=i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/visualization/index-create-component',
    {
        'pages/index/visualization/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("8062"))
        })
    },
    [['pages/index/visualization/index-create-component']]
]);
