(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/visualization/components/mBanner"],{"3eb3":function(t,e,n){"use strict";n.r(e);var i=n("cb20"),a=n("90d8");for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n("eb7e");var o,r=n("f0c5"),u=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);e["default"]=u.exports},6348:function(t,e,n){},"73a4":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("6f6b"),a=getApp(),s={name:"swiperBg",props:{dataConfig:{type:Object,default:function(){}},sty:{type:String,default:"on"}},data:function(){return{indicatorDots:!1,circular:!0,autoplay:!0,interval:3e3,duration:500,bastBanner:[],name:this.$options.name,isIframe:!1,isShow:!0,imageH:375}},watch:{dataConfig:{immediate:!0,handler:function(e,n){var i=this;e&&(this.bastBanner=e.imgList.list,this.isShow=e.isShow.val,this.imgUrls=e.imgList?e.imgList.list:[],this.isShow=!e.isShow||e.isShow.val,t.getImageInfo({src:this.imgUrls.length?this.imgUrls[0].img:"",success:function(t){t&&t.height>0?i.$set(i,"imageH",t.height/t.width*690):i.$set(i,"imageH",375)},fail:function(t){i.$set(i,"imageH",375)}}))}}},created:function(){this.isIframe=a.globalData.isIframe},mounted:function(){},methods:{setDomain:function(t){return t=t?t.toString():"",t.indexOf("https://")>-1?t:t.replace("http://","https://")},goDetail:function(e){(0,i.goPage)().then((function(n){var i=e.info[1].value;-1!=i.indexOf("http")||(["/pages/goods_cate/goods_cate","/pages/order_addcart/order_addcart","/pages/user/index"].indexOf(i),t.navigateTo({url:i}))}))}}};e.default=s}).call(this,n("543d")["default"])},"90d8":function(t,e,n){"use strict";n.r(e);var i=n("73a4"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},cb20:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement;t._self._c},s=[]},eb7e:function(t,e,n){"use strict";var i=n("6348"),a=n.n(i);a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/visualization/components/mBanner-create-component',
    {
        'pages/index/visualization/components/mBanner-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("3eb3"))
        })
    },
    [['pages/index/visualization/components/mBanner-create-component']]
]);
