(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-77b2549c","chunk-2d0e488e"],{"1d84":function(t,e,a){"use strict";a.r(e);var i=a("f3f3"),o=a("2f62"),s=a("9144"),n=a("c24f");s={name:"index",components:{cardList:s.default},data:function(){var t=this;return{cardModal:!1,id:0,grid:{xl:7,lg:7,md:12,sm:24,xs:24},columns:[{title:"编号",key:"id"},{title:"批次名称",key:"title"},{title:"体验天数",key:"use_day"},{title:"发卡总数量",key:"total_num"},{title:"使用数量",key:"use_num"},{title:"制卡时间",key:"add_time"},{title:"是否激活",slot:"status"},{title:"备注",key:"remark"},{title:"操作",slot:"action",fixed:"right"}],tbody:[],total:0,gradeFrom:{title:"",page:1,limit:15},loading:!1,modal:!1,rule:[{type:"input",field:"title",title:"批次名称",validate:[{required:!0,message:"请输入批次名称",trigger:"blur"}]},{type:"InputNumber",field:"total_num",title:"制卡数量",value:1,props:{min:1,precision:0,max:1e5},on:{"on-change":function(e){1e5<e&&t.$nextTick((function(e){t.rule[1].value=1e5}))}}},{type:"InputNumber",field:"use_day",title:"体验天数",value:1,props:{min:1,precision:0,max:1e5},on:{"on-change":function(e){1e5<e&&t.$nextTick((function(e){t.rule[2].value=1e5}))}}},{type:"radio",field:"status",title:"是否激活",value:"0",options:[{value:"0",label:"冻结"},{value:"1",label:"激活"}]},{type:"input",field:"remark",title:"备注",props:{type:"textarea"}}],modal2:!1,rule2:[{type:"hidden",field:"id",value:""},{type:"input",field:"title",title:"批次名称",value:"",validate:[{required:!0,message:"请输入批次名称",trigger:"blur"}]}],modal3:!1,qrcode:null,fapi:{}}},computed:Object(i.a)(Object(i.a)({},Object(o.e)("media",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:75},labelPosition:function(){return this.isMobile?"top":"right"}}),created:function(){this.getMemberBatch(this.gradeFrom)},methods:{getMemberBatch:function(){var t=this;this.loading=!0,Object(n.S)(this.gradeFrom).then((function(e){t.loading=!1,t.tbody=e.data.list,t.total=e.data.count})).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))},userSearchs:function(){this.gradeFrom.page=1,this.getMemberBatch()},onchangeIsShow:function(t){var e=this;Object(n.u)(t.id,{field:"status",value:t.status}).then((function(t){e.$Message.success(t.msg)})).catch((function(t){e.$Message.error(t.msg)}))},exportExcel:function(t){var e=this;this.$Spin.show(),Object(n.i)(t.id).then((function(t){e.$Spin.hide(),location.href=t.data[0]})).catch((function(t){e.$Spin.hide(),e.$Message.error(t.msg)}))},changeMenu:function(t,e){switch(e){case"1":this.rule2[0].value=t.id,this.rule2[1].value=t.title,this.modal2=!0;break;case"2":this.id=t.id,this.cardModal=!0;break;case"3":this.exportExcel(t)}},pageChange:function(t){this.gradeFrom.page=t,this.getMemberBatch()},addBatch:function(){this.fapi.resetFields(),this.modal=!0},onSubmit:function(t){var e=this;Object(n.t)(0,t).then((function(t){e.modal=!1,e.$Message.success(t.msg),e.getMemberBatch(),e.fapi.resetFields()})).catch((function(t){e.$Message.error(t.msg)}))},onSubmit2:function(t){var e=this;Object(n.u)(t.id,{field:"title",value:t.title}).then((function(t){e.modal2=!1,e.$Message.success(t.msg),e.getMemberBatch()})).catch((function(t){e.$Message.error(t.msg)}))},getMemberScan:function(){var t=this;this.$Spin.show(),Object(n.U)().then((function(e){t.$Spin.hide(),t.qrcode=e.data,t.modal3=!0})).catch((function(e){t.$Spin.hide(),t.$Message.error(e.msg)}))}}},a("b676"),i=a("2877"),o=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"i-layout-page-header"},[a("div",{staticClass:"i-layout-page-header"},[a("span",{staticClass:"ivu-page-header-title"},[t._v(t._s(t.$route.meta.title))])])]),a("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[a("Form",{attrs:{model:t.gradeFrom,"label-width":t.labelWidth,"label-position":t.labelPosition},nativeOn:{submit:function(t){t.preventDefault()}}},[a("Row",{attrs:{type:"flex",gutter:24}},[a("Col",t._b({},"Col",t.grid,!1),[a("FormItem",{attrs:{label:"批次名称：","label-for":"title"}},[a("Input",{attrs:{search:"","enter-button":"",placeholder:"请输入批次名称"},on:{"on-search":t.userSearchs},model:{value:t.gradeFrom.title,callback:function(e){t.$set(t.gradeFrom,"title",e)},expression:"gradeFrom.title"}})],1)],1)],1),a("Row",{attrs:{type:"flex"}},[a("Col",t._b({},"Col",t.grid,!1),[a("Button",{staticClass:"mr20",attrs:{type:"primary",icon:"md-add"},on:{click:t.addBatch}},[t._v("添加批次")]),a("Button",{on:{click:t.getMemberScan}},[t._v("下载二维码")])],1)],1)],1),a("Table",{staticClass:"mt25",attrs:{columns:t.columns,data:t.tbody,loading:t.loading,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:t._u([{key:"status",fn:function(e){var i=e.row;return e.index,[a("i-switch",{attrs:{value:i.status,"true-value":1,"false-value":0,size:"large"},on:{"on-change":function(e){return t.onchangeIsShow(i)}},model:{value:i.status,callback:function(e){t.$set(i,"status",e)},expression:"row.status"}},[a("span",{attrs:{slot:"open"},slot:"open"},[t._v("激活")]),a("span",{attrs:{slot:"close"},slot:"close"},[t._v("冻结")])])]}},{key:"action",fn:function(e){var i=e.row,o=e.index;return[[a("Dropdown",{on:{"on-click":function(e){return t.changeMenu(i,e,o)}}},[a("a",{attrs:{href:"javascript:void(0)"}},[t._v("\n              更多\n              "),a("Icon",{attrs:{type:"ios-arrow-down"}})],1),a("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[a("DropdownItem",{attrs:{name:"1"}},[t._v("编辑批次名")]),a("DropdownItem",{attrs:{name:"2"}},[t._v("查看卡列表")]),a("DropdownItem",{attrs:{name:"3"}},[t._v("导出")])],1)],1)]]}}])}),a("div",{staticClass:"acea-row row-right page"},[a("Page",{attrs:{total:t.total,current:t.gradeFrom.page,"page-size":t.gradeFrom.limit,"show-elevator":"","show-total":""},on:{"on-change":t.pageChange}})],1)],1),a("Modal",{attrs:{title:"添加批次","footer-hide":""},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[a("form-create",{attrs:{rule:t.rule},on:{"on-submit":t.onSubmit},model:{value:t.fapi,callback:function(e){t.fapi=e},expression:"fapi"}})],1),a("Modal",{attrs:{title:"卡列表","footer-hide":"",width:"1000"},model:{value:t.cardModal,callback:function(e){t.cardModal=e},expression:"cardModal"}},[t.cardModal?a("cardList",{attrs:{id:t.id}}):t._e()],1),a("Modal",{attrs:{title:"编辑批次名","footer-hide":""},model:{value:t.modal2,callback:function(e){t.modal2=e},expression:"modal2"}},[a("form-create",{attrs:{rule:t.rule2},on:{"on-submit":t.onSubmit2}})],1),a("Modal",{attrs:{title:"二维码","footer-hide":""},model:{value:t.modal3,callback:function(e){t.modal3=e},expression:"modal3"}},[t.qrcode?a("div",{staticClass:"acea-row row-around"},[t.qrcode&&t.qrcode.wechat_img?a("div",{staticClass:"acea-row row-column-around row-between-wrapper"},[a("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"QRpic"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.qrcode.wechat_img,expression:"qrcode.wechat_img"}]})]),a("span",{staticClass:"mt10"},[t._v("公众号二维码")])]):t._e(),t.qrcode&&t.qrcode.routine?a("div",{staticClass:"acea-row row-column-around row-between-wrapper"},[a("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"QRpic"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.qrcode.routine,expression:"qrcode.routine"}]})]),a("span",{staticClass:"mt10"},[t._v("小程序二维码")])]):t._e()]):a("Spin")],1)],1)}),[],!1,null,"f13a6332",null);e.default=o.exports},"37ec":function(t,e,a){},9144:function(t,e,a){"use strict";a.r(e);var i=a("f3f3"),o=a("c24f"),s=a("2f62");i={name:"card",props:{id:{default:0}},data:function(){return{columns1:[{title:"编号",key:"id",minWidth:100,align:"center"},{title:"卡号",key:"card_number",minWidth:105,align:"center"},{title:"密码",key:"card_password",align:"center",minWidth:100},{title:"领取人名称",key:"username",align:"center",minWidth:100},{title:"领取人电话",key:"phone",align:"center",minWidth:100},{title:"领取时间",key:"use_time",align:"center",minWidth:100},{title:"是否激活",slot:"status",minWidth:100}],data1:[],loading:!1,total:0,table:{page:1,limit:15,card_number:"",phone:"",is_use:""}}},computed:Object(i.a)(Object(i.a)({},Object(s.e)("media",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:75},labelPosition:function(){return this.isMobile?"top":"right"}}),created:function(){this.getMemberCard()},methods:{onchangeIsShow:function(t){var e=this;t={card_id:t.id,status:t.status};Object(o.w)(t).then((function(t){e.$Message.success(t.msg),e.getMemberCard()})).catch((function(t){e.$Message.error(t.msg)}))},getMemberCard:function(){var t=this;this.loading=!0,Object(o.T)(this.id,this.table).then((function(e){t.loading=!1,t.data1=e.data.list,t.total=e.data.count})).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))},formSubmit:function(){this.table.page=1,this.getMemberCard()},pageChange:function(t){this.table.page=t,this.getMemberCard()}}},s=a("2877"),a=Object(s.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[a("Form",{ref:"formData",attrs:{model:t.table,"label-width":t.labelWidth,"label-position":t.labelPosition,inline:""},nativeOn:{submit:function(t){t.preventDefault()}}},[a("FormItem",{staticStyle:{width:"200px"},attrs:{label:"卡号："}},[a("Input",{attrs:{placeholder:"请输入卡号"},model:{value:t.table.card_number,callback:function(e){t.$set(t.table,"card_number",e)},expression:"table.card_number"}})],1),a("FormItem",{staticStyle:{width:"200px"},attrs:{label:"手机号："}},[a("Input",{attrs:{placeholder:"请输入手机号"},model:{value:t.table.phone,callback:function(e){t.$set(t.table,"phone",e)},expression:"table.phone"}})],1),a("FormItem",{staticStyle:{width:"200px"},attrs:{label:"是否领取："}},[a("Select",{attrs:{clearable:""},model:{value:t.table.is_use,callback:function(e){t.$set(t.table,"is_use",e)},expression:"table.is_use"}},[a("Option",{attrs:{value:"1"}},[t._v("已领取")]),a("Option",{attrs:{value:"0"}},[t._v("未领取")])],1)],1),a("FormItem",[a("Button",{attrs:{type:"primary"},on:{click:t.formSubmit}},[t._v("搜索")])],1)],1),a("Table",{ref:"table",staticClass:"mt25",attrs:{columns:t.columns1,data:t.data1,loading:t.loading,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:t._u([{key:"status",fn:function(e){var i=e.row;return e.index,[a("i-switch",{attrs:{value:i.status,"true-value":1,"false-value":0,size:"large"},on:{"on-change":function(e){return t.onchangeIsShow(i)}},model:{value:i.status,callback:function(e){t.$set(i,"status",e)},expression:"row.status"}},[a("span",{attrs:{slot:"open"},slot:"open"},[t._v("激活")]),a("span",{attrs:{slot:"close"},slot:"close"},[t._v("冻结")])])]}}])}),a("div",{staticClass:"acea-row row-right page"},[a("Page",{attrs:{total:t.total,current:t.table.page,"page-size":t.table.limit,"show-elevator":"","show-total":""},on:{"on-change":t.pageChange}})],1)],1)],1)}),[],!1,null,null,null);e.default=a.exports},b676:function(t,e,a){"use strict";var i=a("37ec");a.n(i).a}}]);