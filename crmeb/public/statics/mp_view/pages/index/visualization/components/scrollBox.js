(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/visualization/components/scrollBox"],{"226e":function(t,n,i){},"26f1":function(t,n,i){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i("a43a"),e=i("a656"),o=getApp(),s={name:"scrollBox",props:{dataConfig:{type:Object,default:function(){}}},watch:{dataConfig:{immediate:!0,handler:function(t,n){t&&(this.numConfig=t.numConfig.val,this.isShow=t.isShow.val,this.tabConfig=t.tabConfig?t.tabConfig.tabVal:0,this.selectConfig=t.selectConfig.activeValue||"",this.titleInfo=t.titleInfo.list,this.tabConfig?this.fastList=t.goodsList.list:this.category())}}},created:function(){},mounted:function(){},data:function(){return{fastInfo:this.$t("上百种商品分类任您选择"),fastList:[],name:this.$options.name,isShow:!0,isIframe:o.globalData.isIframe,numConfig:0,selectConfig:0,tabConfig:0,titleInfo:[]}},methods:{gopage:function(n){(0,a.goPage)().then((function(i){t.navigateTo({url:n})}))},category:function(){var t=this;(0,e.category)({pid:this.selectConfig,limit:this.numConfig}).then((function(n){t.fastList=n.data}))}}};n.default=s}).call(this,i("543d")["default"])},5215:function(t,n,i){"use strict";i.d(n,"b",(function(){return e})),i.d(n,"c",(function(){return o})),i.d(n,"a",(function(){return a}));var a={easyLoadimage:function(){return Promise.all([i.e("common/vendor"),i.e("components/easy-loadimage/easy-loadimage")]).then(i.bind(null,"e3c3"))}},e=function(){var t=this,n=t.$createElement,i=(t._self._c,t.isShow&&t.fastList.length?t.$t(t.titleInfo[0].val):null),a=t.isShow&&t.fastList.length?t.$t(t.titleInfo[1].val):null,e=t.isShow&&t.fastList.length?t.$t("更多"):null,o=t.isShow&&t.fastList.length?t.__map(t.fastList,(function(n,i){var a=t.__get_orig(n),e=t.$t(n.cate_name);return{$orig:a,m3:e}})):null,s=!t.isShow&&t.isIframe&&t.fastList.length?t.$t("更多"):null,f=t.isIframe&&!t.fastList.length?t.$t("更多"):null,l=t.isIframe&&!t.fastList.length?t.$t("快速选择，暂无数据"):null;t.$mp.data=Object.assign({},{$root:{m0:i,m1:a,m2:e,l0:o,m4:s,m5:f,m6:l}})},o=[]},"6bad":function(t,n,i){"use strict";var a=i("226e"),e=i.n(a);e.a},8988:function(t,n,i){"use strict";i.r(n);var a=i("26f1"),e=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(n,t,(function(){return a[t]}))}(o);n["default"]=e.a},b795:function(t,n,i){"use strict";i.r(n);var a=i("5215"),e=i("8988");for(var o in e)"default"!==o&&function(t){i.d(n,t,(function(){return e[t]}))}(o);i("6bad");var s,f=i("f0c5"),l=Object(f["a"])(e["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],s);n["default"]=l.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/visualization/components/scrollBox-create-component',
    {
        'pages/index/visualization/components/scrollBox-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("b795"))
        })
    },
    [['pages/index/visualization/components/scrollBox-create-component']]
]);
