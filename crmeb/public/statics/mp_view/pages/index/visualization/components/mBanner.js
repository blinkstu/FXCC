(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/visualization/components/mBanner"],{"0cd8":function(t,n,i){"use strict";i.r(n);var e=i("166d"),a=i.n(e);for(var s in e)["default"].indexOf(s)<0&&function(t){i.d(n,t,(function(){return e[t]}))}(s);n["default"]=a.a},"13b1":function(t,n,i){"use strict";var e=i("b41e"),a=i.n(e);a.a},"166d":function(t,n,i){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=i("2c78"),a=getApp(),s={name:"swiperBg",props:{dataConfig:{type:Object,default:function(){}},sty:{type:String,default:"on"}},data:function(){return{indicatorDots:!1,circular:!0,autoplay:!0,interval:3e3,duration:500,bastBanner:[],name:this.$options.name,isIframe:!1,isShow:!0,imageH:375}},watch:{dataConfig:{immediate:!0,handler:function(n,i){var e=this;n&&(this.bastBanner=n.imgList.list,this.isShow=n.isShow.val,this.imgUrls=n.imgList?n.imgList.list:[],this.isShow=!n.isShow||n.isShow.val,t.getImageInfo({src:this.imgUrls.length?this.imgUrls[0].img:"",success:function(t){t&&t.height>0?e.$set(e,"imageH",t.height/t.width*690):e.$set(e,"imageH",375)},fail:function(t){e.$set(e,"imageH",375)}}))}}},created:function(){this.isIframe=a.globalData.isIframe},mounted:function(){},methods:{setDomain:function(t){return t=t?t.toString():"",t.indexOf("https://")>-1?t:t.replace("http://","https://")},goDetail:function(t){var n=this;(0,e.goPage)().then((function(t){n.$util.JumpPath(urls)}))}}};n.default=s}).call(this,i("543d")["default"])},"920a":function(t,n,i){"use strict";i.r(n);var e=i("9d49"),a=i("0cd8");for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(n,t,(function(){return a[t]}))}(s);i("13b1");var o=i("f0c5"),r=Object(o["a"])(a["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],void 0);n["default"]=r.exports},"9d49":function(t,n,i){"use strict";i.d(n,"b",(function(){return e})),i.d(n,"c",(function(){return a})),i.d(n,"a",(function(){}));var e=function(){var t=this,n=t.$createElement,i=(t._self._c,t.isShow&&t.bastBanner.length&&!t.isIframe),e=t.bastBanner.length&&t.isIframe,a=t.isIframe&&!t.bastBanner.length,s=a?t.$t("暂无图片，请上传图片"):null;t.$mp.data=Object.assign({},{$root:{g0:i,g1:e,g2:a,m0:s}})},a=[]},b41e:function(t,n,i){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/visualization/components/mBanner-create-component',
    {
        'pages/index/visualization/components/mBanner-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("920a"))
        })
    },
    [['pages/index/visualization/components/mBanner-create-component']]
]);
