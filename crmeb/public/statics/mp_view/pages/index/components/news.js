(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/components/news"],{"11c1":function(t,n,e){"use strict";e.r(n);var a=e("6fcd"),i=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);n["default"]=i.a},"6fcd":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=o(e("c83f")),i=e("4729");function o(t){return t&&t.__esModule?t:{default:t}}var u=getApp(),c={name:"news",props:{dataConfig:{type:Object,default:function(){}}},mixins:[a.default],watch:{dataConfig:{immediate:!0,handler:function(t,n){t&&(this.img=t.imgUrl.url,this.itemNew=t.newList.list,this.isShow=t.isShow.val)}}},data:function(){return{indicatorDots:!1,autoplay:!0,duration:500,img:"",itemNew:[],name:this.$options.name,isIframe:!1,isShow:!0}},created:function(){this.isIframe=u.globalData.isIframe},mounted:function(){},methods:{gopage:function(n){(0,i.goPage)().then((function(e){-1!=n.indexOf("http")||(["/pages/goods_cate/goods_cate","/pages/order_addcart/order_addcart","/pages/user/index"].indexOf(n),t.navigateTo({url:n}))}))}}};n.default=c}).call(this,e("543d")["default"])},"7a7c":function(t,n,e){},bbfc:function(t,n,e){"use strict";var a=e("7a7c"),i=e.n(a);i.a},ce68:function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return a}));var i=function(){var t=this,n=t.$createElement;t._self._c},o=[]},eb17:function(t,n,e){"use strict";e.r(n);var a=e("ce68"),i=e("11c1");for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);e("bbfc");var u,c=e("f0c5"),r=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);n["default"]=r.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/components/news-create-component',
    {
        'pages/index/components/news-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("eb17"))
        })
    },
    [['pages/index/components/news-create-component']]
]);