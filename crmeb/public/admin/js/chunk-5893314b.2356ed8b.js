(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5893314b"],{"40c4":function(e,t,a){"use strict";var s=a("830a"),c=a.n(s);c.a},"7de5":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"i-layout-page-header"},[a("div",{staticClass:"i-layout-page-header"},[a("span",{staticClass:"ivu-page-header-title"},[e._v(e._s(e.$route.meta.title))])])]),a("div",{staticClass:" acea-row row-center clear_tit"},[a("Button",{staticClass:"mr20",attrs:{type:"primary"},on:{click:e.clearCache}},[e._v("清除缓存")]),a("Button",{attrs:{type:"primary"},on:{click:e.clearlog}},[e._v("清除日志")])],1)])},c=[],r={name:"clear",data:function(){return{delfromData:{}}},methods:{clearCache:function(){var e=this,t={title:"清除缓存",num:0,url:"system/refresh_cache/cache",method:"get",ids:""};this.$modalSure(t).then((function(t){e.$Message.success(t.msg)})).catch((function(t){e.$Message.error(t.msg)}))},clearlog:function(){var e=this,t={title:"清除日志",num:0,url:"system/refresh_cache/log",method:"get",ids:""};this.$modalSure(t).then((function(t){e.$Message.success(t.msg)})).catch((function(t){e.$Message.error(t.msg)}))}}},n=r,i=(a("40c4"),a("2877")),o=Object(i["a"])(n,s,c,!1,null,"80f4fcf6",null);t["default"]=o.exports},"830a":function(e,t,a){}}]);