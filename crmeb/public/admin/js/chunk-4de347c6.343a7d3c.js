(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4de347c6"],{b4f0:function(t,e,a){"use strict";a.r(e);var s=a("8593"),r={name:"systemCleardata",data:function(){return{value6:"",modals:!1,grid:{xl:6,lg:8,md:12,sm:24,xs:24},tabList:[{title:"更换域名",tlt:"替换所有本地上传的图片域名",typeName:"primary",type:"11"},{title:"清除用户生成的临时附件",tlt:"清除用户生成的临时附件，不会影响商品图",typeName:"error",type:"temp"},{title:"清除回收站商品",tlt:"清除回收站商品，谨慎操作",typeName:"error",type:"recycle"},{title:"清除商城数据",tlt:"清除商城数据，谨慎操作",typeName:"error",type:"store"},{title:"清除商品分类",tlt:"会清除所有商品分类，谨慎操作",typeName:"error",type:"category"},{title:"清除订单数据",tlt:"清除用户所有订单数据，谨慎操作",typeName:"error",type:"order"},{title:"清除客服数据",tlt:"清除添加的客服数据，谨慎操作",typeName:"error",type:"kefu"},{title:"清除微信数据",tlt:"清除微信菜单保存数据，微信关键字无效回复",typeName:"error",type:"wechat"},{title:"清除内容分类",tlt:"清除添加的文章和文章分类,谨慎操作",typeName:"error",type:"article"},{title:"清除所有附件",tlt:"清除所有附件用户生成和后台上传,谨慎操作",typeName:"error",type:"attachment"},{title:"清除系统记录",tlt:"清除系统记录,谨慎操作",typeName:"error",type:"system"}]}},methods:{onChange:function(t){"11"===t.type?this.modals=!0:this.clearFroms(t)},clearFroms:function(t){var e=this;t={title:t.title,url:"system/clear/".concat(t.type),method:"get",ids:""};this.$modalSure(t).then((function(t){e.$Message.success(t.msg)})).catch((function(t){e.$Message.error(t.msg)}))},changeYU:function(){var t=this;Object(s.O)({url:this.value6}).then((function(e){t.modals=!1,t.$Message.success(e.msg)})).catch((function(e){t.$Message.error(e.msg)}))}}};a("fd30"),a=a("2877"),a=Object(a.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"i-layout-page-header"},[a("div",{staticClass:"i-layout-page-header"},[a("span",{staticClass:"ivu-page-header-title"},[t._v(t._s(t.$route.meta.title))]),a("div",{staticClass:"clear_tit"},[a("Icon",{attrs:{type:"md-information-circle",color:"#ED4014"}}),a("span",[t._v("清除数据请谨慎，清除就无法恢复哦！")])],1)])]),a("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[a("Row",{attrs:{type:"flex",gutter:24}},t._l(t.tabList,(function(e,s){return a("Col",t._b({key:s,staticClass:"mb20"},"Col",t.grid,!1),[a("div",{staticClass:"clear_box"},[a("span",{staticClass:"clear_box_sp1",domProps:{textContent:t._s(e.title)}}),a("span",{staticClass:"clear_box_sp2",domProps:{textContent:t._s(e.tlt)}}),a("Button",{attrs:{type:e.typeName},domProps:{textContent:t._s("primary"===e.typeName?"立即更换":"立即清理")},on:{click:function(a){return t.onChange(e)}}})],1)])})),1)],1),a("Modal",{staticClass:"tableBox",attrs:{scrollable:"",closable:"",title:"更换域名","mask-closable":!1},model:{value:t.modals,callback:function(e){t.modals=e},expression:"modals"}},[a("div",{staticClass:"acea-row row-column"},[a("span",[t._v("请输入需要替换的域名，格式为：http://域名。")]),a("span",[t._v("替换规则：会使用当前[设置]里面的[网站域名]去替换成当前您输入的域名。")]),a("span",{staticClass:"mb15"},[t._v("替换成功后再去更换[网站域名]。")]),a("Input",{attrs:{type:"textarea",rows:4,placeholder:"请输入网站域名..."},model:{value:t.value6,callback:function(e){t.value6=e},expression:"value6"}})],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"primary",size:"large",long:""},on:{click:t.changeYU}},[t._v("确定")])],1)])],1)}),[],!1,null,"2bbf5e6e",null);e.default=a.exports},ce2d:function(t,e,a){},fd30:function(t,e,a){"use strict";var s=a("ce2d");a.n(s).a}}]);