(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5a3f8676"],{2290:function(t,e,a){},"31b4":function(t,e,a){"use strict";var r=a("f3f3"),i=a("9860"),s=(i=a.n(i),a("6b6c")),n=a("2f62");i={name:"edit",components:{formCreate:i.a.$form()},computed:Object(r.a)({},Object(n.e)("userLevel",["taskId","levelId"])),props:{FromData:{type:Object,default:null},update:{type:Boolean,default:!0}},data:function(){return{modals:!1,type:0,config:{global:{upload:{props:{onSuccess:function(t,e){200===t.status?e.url=t.data.src:this.Message.error(t.msg)}}}}}}},methods:{couponsType:function(){this.$parent.addType(this.type)},onSubmit:function(t){var e=this;Object(s.a)({url:this.FromData.action,method:this.FromData.method,data:t}).then((function(t){e.update&&e.$parent.getList(),e.$Message.success(t.msg),e.modals=!1,setTimeout((function(){e.$emit("submitFail")}),1e3)})).catch((function(t){e.$Message.error(t.msg)}))},cancel:function(){this.type=0}}},a("3c71"),r=a("2877"),n=Object(r.a)(i,(function(){var t=this,e=t.$createElement;e=t._self._c||e;return t.FromData?e("div",[e("Modal",{attrs:{scrollable:"","footer-hide":"",closable:"",title:t.FromData.title,"z-index":1,width:"700"},on:{"on-cancel":t.cancel},model:{value:t.modals,callback:function(e){t.modals=e},expression:"modals"}},[["/marketing/coupon/save.html"===t.FromData.action?e("div",{staticClass:"radio acea-row row-middle"},[e("div",{staticClass:"name ivu-form-item-content"},[t._v("优惠券类型")]),e("Radio-group",{on:{"on-change":t.couponsType},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[e("Radio",{attrs:{label:0}},[t._v("通用券")]),e("Radio",{attrs:{label:1}},[t._v("品类券")]),e("Radio",{attrs:{label:2}},[t._v("商品券")])],1)],1):t._e()],e("form-create",{ref:"fc",staticClass:"formBox",attrs:{option:t.config,rule:Array.from(t.FromData.rules),handleIcon:"false"},on:{"on-submit":t.onSubmit}})],2)],1):t._e()}),[],!1,null,"671a3e20",null);e.a=n.exports},"3c71":function(t,e,a){"use strict";var r=a("be2f");a.n(r).a},"759a":function(t,e,a){"use strict";var r=a("2290");a.n(r).a},be2f:function(t,e,a){},cffd:function(t,e,a){"use strict";a.r(e);var r=a("c964"),i=a("f3f3"),s=(a("b0c0"),a("d3b7"),a("159b"),a("99af"),a("a434"),a("96cf"),a("2f62")),n=a("31b4"),o=a("8593");n={name:"list",components:{editFrom:n.a},data:function(){return{grid:{xl:7,lg:7,md:12,sm:24,xs:24},formValidate:{status:"",page:1,limit:20,gid:0},total:0,tabList:[],columns1:[],FromData:null,loading:!1,titleType:"group",groupAll:[],theme3:"light",labelSort:[],sortName:null,current:0}},computed:Object(i.a)(Object(i.a)({},Object(s.e)("media",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:75},labelPosition:function(){return this.isMobile?"top":"right"}}),watch:{$route:function(t,e){this.$route.params.id?(this.getList(),this.getListHeader()):this.getGroupAll()}},mounted:function(){this.$route.params.id?(this.getList(),this.getListHeader()):this.getGroupAll()},methods:{bindMenuItem:function(t,e){this.current=e,this.formValidate.gid=t.id,this.getListHeader(),this.getList()},getGroupAll:function(){var t=this;Object(o.D)().then(function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.groupAll=a.data,t.sortName=a.data[0].id,t.formValidate.gid=a.data[0].id,t.getListHeader(),t.getList();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Message.error(e.msg)}))},back:function(){this.$router.push({path:"/admin/system/config/system_group/index"})},getUrl:function(t){var e="setting/group_data"+t;return this.$route.params.id&&void 0!==(t={setting_groupDataSign:"setting/sign_data"+t,setting_groupDataOrder:"setting/order_data"+t,setting_groupDataUser:"setting/usermenu_data"+t,setting_groupDataPoster:"setting/poster_data"+t,marketing_storeSeckillData:"setting/seckill_data"+t})[this.$route.name]?t[this.$route.name]:e},getList:function(){var t=this;this.loading=!0,this.formValidate.gid=this.$route.params.id||this.formValidate.gid,this.formValidate.status=this.formValidate.status||"",Object(o.H)(this.formValidate,this.getUrl("")).then(function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(a){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=a.data,t.tabList=r.list,t.total=r.count,t.loading=!1;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))},getListHeader:function(){var t=this,e=(this.loading=!0,{gid:this.$route.params.id||this.formValidate.gid});Object(o.G)(e,this.getUrl("/header")).then(function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(a){var r,i,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=a.data,i=r.header,s=[],i.forEach((function(t,e){"img"===t.type&&s.push(e)})),s.forEach((function(t){i[t].render=function(e,a){var r=a.row[i[t].key],s=[];return void 0!==r&&r.length&&r.forEach((function(r,n){s.push(e("div",{style:{width:"36px",height:"36px","border-radius":"4px",cursor:"pointer",display:"inline-block"}},[e("img",{attrs:{src:a.row[i[t].key][n]},style:{width:"100%",height:"100%"}})]))})),e("viewer",s)}})),t.columns1=i,t.loading=!1;case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))},pageChange:function(t){this.formValidate.page=t,this.getList()},userSearchs:function(){this.formValidate.page=1,this.getList()},groupAdd:function(){var t=this;this.$modalForm(Object(o.E)({gid:this.$route.params.id||this.formValidate.gid},this.getUrl("/create"))).then((function(){return t.getList()}))},onchangeIsShow:function(t){var e=this;Object(o.I)(this.getUrl("/set_status/".concat(t.id,"/").concat(t.status))).then(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$Message.success(a.msg),e.getList();case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$Message.error(t.msg)}))},edit:function(t){var e=this,a={gid:t.gid};this.$modalForm(Object(o.F)(a,this.getUrl("/".concat(t.id,"/edit")))).then((function(){return e.getList()}))},del:function(t,e,a){var r=this;e={title:e,num:a,url:this.getUrl("/".concat(t.id)),method:"DELETE",ids:""};this.$modalSure(e).then((function(t){r.$Message.success(t.msg),r.tabList.splice(a,1)})).catch((function(t){r.$Message.error(t.msg)}))}}},a("759a"),i=a("2877"),s=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"i-layout-page-header header_top"},[a("div",{staticClass:"i-layout-page-header fl_header"},[a("router-link",{attrs:{to:{path:"/admin/system/config/system_group/index"}}},[a("Button",{attrs:{icon:"ios-arrow-back",size:"small",type:"text"}},[t._v("返回")])],1),a("Divider",{attrs:{type:"vertical"}}),a("span",{staticClass:"ivu-page-header-title mr20",staticStyle:{padding:"0"},domProps:{textContent:t._s(t.$route.meta.title)}})],1)]),a("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[a("Row",{staticClass:"ivu-mt box-wrapper"},[!t.$route.params.id&&t.groupAll.length?a("Col",{staticClass:"left-wrapper",attrs:{xs:24,sm:24,md:6,lg:4}},[a("Menu",{attrs:{theme:t.theme3,"active-name":t.sortName,width:"auto"}},[a("MenuGroup",t._l(t.groupAll,(function(e,r){return a("MenuItem",{key:r,staticClass:"menu-item",attrs:{name:e.id},nativeOn:{click:function(a){return t.bindMenuItem(e,r)}}},[t._v("\n              "+t._s(e.name)+"\n            ")])})),1)],1)],1):t._e(),a("Col",{ref:"rightBox",attrs:{xs:24,sm:24,md:t.$route.params.id?24:17,lg:t.$route.params.id?24:20}},[a("Card",{attrs:{bordered:!1,"dis-hover":""}},[a("Form",{ref:"formValidate",attrs:{model:t.formValidate,"label-width":t.labelWidth,"label-position":t.labelPosition},nativeOn:{submit:function(t){t.preventDefault()}}},[a("Row",{attrs:{type:"flex",gutter:24}},[a("Col",t._b({},"Col",t.grid,!1),[a("FormItem",{attrs:{label:"是否显示："}},[a("Select",{attrs:{placeholder:"请选择",clearable:""},on:{"on-change":t.userSearchs},model:{value:t.formValidate.status,callback:function(e){t.$set(t.formValidate,"status",e)},expression:"formValidate.status"}},[a("Option",{attrs:{value:"1"}},[t._v("显示")]),a("Option",{attrs:{value:"0"}},[t._v("不显示")])],1)],1)],1)],1),a("Row",{attrs:{type:"flex"}},[a("Col",t._b({},"Col",t.grid,!1),[a("Button",{staticClass:"mr20",attrs:{type:"primary",icon:"md-add"},on:{click:function(e){return t.groupAdd("添加数据")}}},[t._v("添加数据")])],1)],1)],1),a("Table",{ref:"table",staticClass:"mt25",attrs:{columns:t.columns1,data:t.tabList,loading:t.loading,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:t._u([{key:"status",fn:function(e){var r=e.row;return e.index,[a("i-switch",{attrs:{value:r.status,"true-value":1,"false-value":0,size:"large"},on:{"on-change":function(e){return t.onchangeIsShow(r)}},model:{value:r.status,callback:function(e){t.$set(r,"status",e)},expression:"row.status"}},[a("span",{attrs:{slot:"open"},slot:"open"},[t._v("显示")]),a("span",{attrs:{slot:"close"},slot:"close"},[t._v("隐藏")])])]}},{key:"action",fn:function(e){var r=e.row,i=e.index;return[a("a",{on:{click:function(e){return t.edit(r,"编辑")}}},[t._v("编辑")]),a("Divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(e){return t.del(r,"删除这条信息",i)}}},[t._v("删除")])]}}])}),a("div",{staticClass:"acea-row row-right page"},[a("Page",{attrs:{total:t.total,current:t.formValidate.page,"show-elevator":"","show-total":"","page-size":t.formValidate.limit},on:{"on-change":t.pageChange}})],1)],1)],1)],1)],1)],1)}),[],!1,null,"d7ab8e4e",null);e.default=s.exports}}]);