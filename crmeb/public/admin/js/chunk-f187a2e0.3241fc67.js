(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-f187a2e0"],{"31d3":function(t,i,e){},"78d5":function(t,i,e){"use strict";var a=e("31d3");e.n(a).a},8084:function(t,i,e){"use strict";e.r(i);var a={components:{uploadFile:e("b0e7").a},name:"system_file",data:function(){return{pageLimit:30,uploadShow:!1}},mounted:function(){var t=this,i=this.$refs.picBox.clientWidth;i<1018?this.pageLimit=12:i<1185?this.pageLimit=21:i<1327?this.pageLimit=24:i<1475?this.pageLimit=27:1483<i&&(this.pageLimit=40),this.$nextTick((function(){t.uploadShow=!0}))},methods:{}};e("78d5"),e=e("2877"),e=Object(e.a)(a,(function(){var t=this,i=t.$createElement;i=t._self._c||i;return i("div",[i("div",{staticClass:"i-layout-page-header"},[i("div",{staticClass:"i-layout-page-header"},[i("span",{staticClass:"ivu-page-header-title"},[t._v(t._s(t.$route.meta.title))])])]),i("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[i("div",{ref:"picBox",staticClass:"box"},[t.uploadShow?i("upload-file",{attrs:{isShow:0,pageLimit:t.pageLimit}}):t._e()],1)])],1)}),[],!1,null,"63dbb340",null);i.default=e.exports}}]);