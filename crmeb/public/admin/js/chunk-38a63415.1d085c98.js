(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38a63415"],{"02fe":function(t,e,a){},"0436":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Form",{ref:"orderData",staticClass:"tabform",attrs:{"label-width":80,"label-position":"right"}},[t._l(t.fromList,(function(e,r){return a("Row",{key:r,attrs:{gutter:24,type:"flex"}},[a("Col",{attrs:{xl:8,lg:8,md:8,sm:24,xs:24}},[a("FormItem",{attrs:{label:e.title+"："}},[a("RadioGroup",{attrs:{type:"button"},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},t._l(e.fromTxt,(function(r,i){return a("Radio",{key:i,attrs:{label:r.text}},[t._v(t._s(r.text)+t._s(e.num))])})),1)],1)],1),e.custom?a("Col",[a("FormItem",{staticClass:"tab_data"},[a("DatePicker",{staticStyle:{width:"200px"},attrs:{editable:!1,format:"yyyy/MM/dd",type:"daterange",placement:"bottom-end",placeholder:"请选择时间"}})],1)],1):t._e()],1)})),t.isExist.existOne?a("Row",{attrs:{gutter:24,type:"flex"}},[a("Col",{staticClass:"mr",attrs:{span:"10"}},[a("FormItem",{attrs:{label:t.searchFrom.title+"：",prop:"real_name","label-for":"real_name"}},[a("Input",{attrs:{search:"","enter-button":"",placeholder:t.searchFrom.place,"element-id":"name"}})],1)],1),a("Col",[a("Button",{staticClass:"mr"},[t._v("导出")]),a("span",{staticClass:"Refresh"},[t._v("刷新")]),a("Icon",{attrs:{type:"ios-refresh"}})],1)],1):t._e(),t.isExist.existTwo?a("Row",{staticClass:"withdrawal",attrs:{gutter:24,type:"flex"}},[a("Col",{staticClass:"item",attrs:{span:"2.5"}},[a("TreeSelect",{staticClass:"perW160",attrs:{data:t.treeData.withdrawal},on:{"on-change":t.changeTree},model:{value:t.withdrawalTxt,callback:function(e){t.withdrawalTxt=e},expression:"withdrawalTxt"}})],1),a("Col",{staticClass:"item",attrs:{span:"2.5"}},[a("TreeSelect",{staticClass:"perW160",attrs:{data:t.treeData.payment},on:{"on-change":t.changeTree},model:{value:t.paymentTxt,callback:function(e){t.paymentTxt=e},expression:"paymentTxt"}})],1),a("Col",{staticClass:"item",attrs:{span:"6"}},[a("Input",{attrs:{search:"","enter-button":"",placeholder:"微信名称、姓名、支付宝账号、银行卡号","element-id":"name"}})],1)],1):t._e()],2)],1)},i=[],n={name:"publicSearchFrom",props:{fromList:{type:Array},searchFrom:{type:Object},treeData:{type:Object},isExist:{type:Object}},data:function(){return{date:"全部",withdrawalTxt:"提现状态",paymentTxt:"提现方式"}},computed:{},mounted:function(){},methods:{changeTree:function(){}}},s=n,o=(a("53ca"),a("2877")),c=Object(o["a"])(s,r,i,!1,null,"0c50e0aa",null);e["a"]=c.exports},1698:function(t,e,a){"use strict";a.d(e,"g",(function(){return i})),a.d(e,"f",(function(){return n})),a.d(e,"e",(function(){return s})),a.d(e,"h",(function(){return o})),a.d(e,"d",(function(){return c})),a.d(e,"c",(function(){return l})),a.d(e,"b",(function(){return u})),a.d(e,"a",(function(){return d}));var r=a("6b6c");function i(t){return Object(r["a"])({url:"agent/level",method:"get",params:t})}function n(t,e){return Object(r["a"])({url:e,method:"get",params:t})}function s(t,e){return Object(r["a"])({url:e,method:"get",params:t})}function o(t){return Object(r["a"])({url:t,method:"PUT"})}function c(t){return Object(r["a"])({url:t,method:"PUT"})}function l(t){return Object(r["a"])({url:"agent/level_task",method:"get",params:t})}function u(t,e){return Object(r["a"])({url:e,method:"get",params:t})}function d(t,e){return Object(r["a"])({url:e,method:"get",params:t})}},2327:function(t,e,a){"use strict";var r=a("d962"),i=a.n(r);i.a},"2c3e":function(t,e,a){var r=a("da84"),i=a("83ab"),n=a("9f7f").MISSED_STICKY,s=a("c6b6"),o=a("edd0"),c=a("69f3").get,l=RegExp.prototype,u=r.TypeError;i&&n&&o(l,"sticky",{configurable:!0,get:function(){if(this!==l){if("RegExp"===s(this))return!!c(this).sticky;throw u("Incompatible receiver, RegExp required")}}})},3061:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"i-layout-page-header"},[a("div",{staticClass:"i-layout-page-header"},[a("span",{staticClass:"ivu-page-header-title"},[t._v(t._s(t.$route.meta.title))])])]),a("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[a("Form",{ref:"formValidate",attrs:{model:t.formValidate,"label-width":t.labelWidth,"label-position":t.labelPosition},nativeOn:{submit:function(t){t.preventDefault()}}},[a("Row",{attrs:{type:"flex",gutter:24}},[a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"时间选择："}},[a("RadioGroup",{staticClass:"mr",attrs:{type:"button"},on:{"on-change":function(e){return t.selectChange(t.formValidate.data)}},model:{value:t.formValidate.data,callback:function(e){t.$set(t.formValidate,"data",e)},expression:"formValidate.data"}},t._l(t.fromList.fromTxt,(function(e,r){return a("Radio",{key:r,attrs:{label:e.val}},[t._v(t._s(e.text))])})),1),a("DatePicker",{staticStyle:{width:"200px"},attrs:{editable:!1,value:t.timeVal,format:"yyyy/MM/dd",type:"daterange",placement:"bottom-end",placeholder:"请选择时间"},on:{"on-change":t.onchangeTime}})],1)],1),a("Col",t._b({},"Col",t.grid,!1),[a("FormItem",{attrs:{label:"搜索：","label-for":"status"}},[a("Input",{attrs:{search:"","enter-button":"",placeholder:"请输入姓名、电话、UID"},on:{"on-search":t.userSearchs},model:{value:t.formValidate.nickname,callback:function(e){t.$set(t.formValidate,"nickname",e)},expression:"formValidate.nickname"}})],1)],1),a("Col",t._b({},"Col",t.grid,!1),[a("Button",{directives:[{name:"auth",rawName:"v-auth",value:["export-userAgent"],expression:"['export-userAgent']"}],staticClass:"export",attrs:{icon:"ios-share-outline"},on:{click:t.exports}},[t._v("导出")])],1)],1)],1)],1),t.cardLists.length>=0?a("cards-data",{attrs:{cardLists:t.cardLists}}):t._e(),a("Card",{attrs:{bordered:!1,"dis-hover":""}},[a("Table",{ref:"selection",staticClass:"ivu-mt",attrs:{columns:t.columns,data:t.tableList,loading:t.loading,"no-data-text":"暂无数据","highlight-row":"","no-filtered-data-text":"暂无筛选结果"},scopedSlots:t._u([{key:"nickname",fn:function(e){var r=e.row;return[a("div",{staticClass:"name"},[a("div",{staticClass:"item"},[t._v("昵称:"+t._s(r.nickname))]),a("div",{staticClass:"item"},[t._v("姓名:"+t._s(r.real_name))]),a("div",{staticClass:"item"},[t._v("电话:"+t._s(r.phone))])])]}},{key:"agentLevel",fn:function(e){var r=e.row;return[a("div",[t._v(t._s(r.agentLevel?r.agentLevel.name:"--"))])]}},{key:"right",fn:function(e){var r=e.row,i=e.index;return[a("a",{on:{click:function(e){return t.promoters(r,"man")}}},[t._v("推广人")]),a("Divider",{attrs:{type:"vertical"}}),[a("Dropdown",{on:{"on-click":function(e){return t.changeMenu(r,e,i)}}},[a("a",{attrs:{href:"javascript:void(0)"}},[t._v("\n              更多\n              "),a("Icon",{attrs:{type:"ios-arrow-down"}})],1),a("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[a("DropdownItem",{attrs:{name:"1"}},[t._v("推广订单")]),a("DropdownItem",{attrs:{name:"2"}},[t._v("推广方式")]),a("DropdownItem",{attrs:{name:"5"}},[t._v("赠送分销等级")])],1)],1)]]}}])}),a("div",{staticClass:"acea-row row-right page"},[a("Page",{attrs:{total:t.total,current:t.formValidate.page,"show-elevator":"","show-total":"","page-size":t.formValidate.limit},on:{"on-change":t.pageChange}})],1)],1),a("promoters-list",{ref:"promotersLists"}),a("Modal",{attrs:{scrollable:"","footer-hide":"",closable:"",title:"推广二维码","mask-closable":!1,width:"600"},model:{value:t.modals,callback:function(e){t.modals=e},expression:"modals"}},[a("div",{staticClass:"acea-row row-around"},[a("div",{staticClass:"acea-row row-column-around row-between-wrapper"},[t.code_src?a("div",{staticClass:"QRpic"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.code_src,expression:"code_src"}]})]):t._e(),a("span",{staticClass:"QRpic_sp1 mt10",on:{click:t.getWeChat}},[t._v("公众号推广二维码")])]),a("div",{staticClass:"acea-row row-column-around row-between-wrapper"},[t.code_xcx?a("div",{staticClass:"QRpic"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.code_xcx,expression:"code_xcx"}]})]):t._e(),a("span",{staticClass:"QRpic_sp2 mt10",on:{click:t.getXcx}},[t._v("小程序推广二维码")])]),a("div",{staticClass:"acea-row row-column-around row-between-wrapper"},[t.code_h5?a("div",{staticClass:"QRpic"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.code_h5,expression:"code_h5"}]})]):t._e(),a("span",{staticClass:"QRpic_sp2 mt10",on:{click:t.getH5}},[t._v("H5推广二维码")])])]),t.spinShow?a("Spin",{attrs:{size:"large",fix:""}}):t._e()],1),a("Modal",{staticClass:"order_box",attrs:{scrollable:"",title:"修改推广人",closable:!1},model:{value:t.promoterShow,callback:function(e){t.promoterShow=e},expression:"promoterShow"}},[a("Form",{ref:"formInline",attrs:{model:t.formInline,"label-width":100},nativeOn:{submit:function(t){t.preventDefault()}}},[a("FormItem",{attrs:{label:"用户头像：",prop:"image"}},[a("div",{staticClass:"picBox",on:{click:t.customer}},[t.formInline.image?a("div",{staticClass:"pictrue"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.formInline.image,expression:"formInline.image"}]})]):a("div",{staticClass:"upLoad acea-row row-center-wrapper"},[a("Icon",{attrs:{type:"ios-camera-outline",size:"26"}})],1)])])],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"primary"},on:{click:function(e){return t.putSend("formInline")}}},[t._v("提交")]),a("Button",{on:{click:function(e){return t.cancel("formInline")}}},[t._v("取消")])],1)],1),a("Modal",{attrs:{scrollable:"",title:"请选择商城用户",closable:!1,width:"50%"},model:{value:t.customerShow,callback:function(e){t.customerShow=e},expression:"customerShow"}},[t.customerShow?a("customerInfo",{on:{imageObject:t.imageObject}}):t._e()],1)],1)},i=[],n=a("c964"),s=a("f3f3"),o=(a("a15b"),a("96cf"),a("a584")),c=a("0436"),l=a("2f62"),u=a("bbbc"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Modal",{attrs:{scrollable:"","footer-hide":"",closable:"",title:"man"===t.listTitle?"统计推广人列表":"推广订单","mask-closable":!1,width:"900"},on:{"on-cancel":t.onCancel},model:{value:t.modals,callback:function(e){t.modals=e},expression:"modals"}},[a("div",{staticClass:"table_box"},[a("Form",{ref:"formValidate",staticClass:"tabform",attrs:{model:t.formValidate,"label-width":t.labelWidth,"label-position":t.labelPosition},nativeOn:{submit:function(t){t.preventDefault()}}},[a("Row",{attrs:{gutter:24,type:"flex",justify:"end"}},[a("Col",{staticClass:"ivu-text-left",attrs:{span:"24"}},[a("FormItem",{attrs:{label:"时间选择："}},[a("RadioGroup",{staticClass:"mr",attrs:{type:"button"},on:{"on-change":function(e){return t.selectChange(t.formValidate.data)}},model:{value:t.formValidate.data,callback:function(e){t.$set(t.formValidate,"data",e)},expression:"formValidate.data"}},t._l(t.fromList.fromTxt,(function(e,r){return a("Radio",{key:r,attrs:{label:e.val}},[t._v(t._s(e.text))])})),1),a("DatePicker",{staticStyle:{width:"200px"},attrs:{editable:!1,value:t.timeVal,format:"yyyy/MM/dd",type:"daterange",placement:"bottom-end",placeholder:"请选择时间"},on:{"on-change":t.onchangeTime}})],1)],1),a("Col",{staticClass:"ivu-text-left",attrs:{span:"24"}},[a("Col",{attrs:{xl:15,lg:15,md:20,sm:24,xs:24}},[a("FormItem",{attrs:{label:"用户类型："}},[a("RadioGroup",{staticClass:"mr",attrs:{type:"button"},on:{"on-change":t.userSearchs},model:{value:t.formValidate.type,callback:function(e){t.$set(t.formValidate,"type",e)},expression:"formValidate.type"}},t._l("man"===t.listTitle?t.fromList.fromTxt2:t.fromList.fromTxt3,(function(e,r){return a("Radio",{key:r,attrs:{label:e.val}},[t._v("\n                    "+t._s(e.text)+"\n                  ")])})),1)],1)],1),"man"===t.listTitle?a("Col",{attrs:{xl:15,lg:15,md:20,sm:24,xs:24}},[a("FormItem",{attrs:{label:"搜索："}},[a("Input",{staticStyle:{width:"90%"},attrs:{search:"","enter-button":"",placeholder:"请输入请姓名、电话、UID"},on:{"on-search":t.userSearchs},model:{value:t.formValidate.nickname,callback:function(e){t.$set(t.formValidate,"nickname",e)},expression:"formValidate.nickname"}})],1)],1):t._e(),"order"===t.listTitle?a("Col",{attrs:{xl:15,lg:15,md:20,sm:24,xs:24}},[a("FormItem",{attrs:{label:"订单号："}},[a("Input",{staticStyle:{width:"90%"},attrs:{search:"","enter-button":"",placeholder:"请输入请订单号"},on:{"on-search":t.userSearchs},model:{value:t.formValidate.order_id,callback:function(e){t.$set(t.formValidate,"order_id",e)},expression:"formValidate.order_id"}})],1)],1):t._e()],1)],1)],1)],1),a("Table",{ref:"selection",attrs:{columns:t.columns4,data:t.tabList,loading:t.loading,"no-data-text":"暂无数据","highlight-row":"","max-height":"400","no-filtered-data-text":"暂无筛选结果"},scopedSlots:t._u([{key:"add_time",fn:function(e){var r=e.row;e.index;return[a("div",[t._v(t._s(t._f("formatDate")(r.spread_time)))])]}}])}),a("div",{staticClass:"acea-row row-right page"},[a("Page",{attrs:{total:t.total,"show-elevator":"","show-total":"","page-size":t.formValidate.limit},on:{"on-change":t.pageChange}})],1)],1)],1)},m=[],f=a("61f7"),h={name:"promotersList",filters:{formatDate:function(t){if(0!==t){var e=new Date(1e3*t);return Object(f["a"])(e,"yyyy-MM-dd hh:mm")}}},data:function(){return{modals:!1,fromList:{title:"选择时间",custom:!0,fromTxt:[{text:"全部",val:""},{text:"今天",val:"today"},{text:"昨天",val:"yesterday"},{text:"最近7天",val:"lately7"},{text:"最近30天",val:"lately30"},{text:"本月",val:"month"},{text:"本年",val:"year"}],fromTxt2:[{text:"全部",val:""},{text:"一级推广人",val:1},{text:"二级推广人",val:2}],fromTxt3:[{text:"全部",val:""},{text:"一级推广人订单",val:1},{text:"二级推广人订单",val:2}]},formValidate:{limit:15,page:1,nickname:"",data:"",type:"",order_id:"",uid:0},loading:!1,tabList:[],total:0,timeVal:[],columns4:[],listTitle:""}},computed:Object(s["a"])(Object(s["a"])({},Object(l["e"])("media",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:100},labelPosition:function(){return this.isMobile?"top":"right"}}),methods:{onCancel:function(){this.formValidate={limit:7,page:1,nickname:"",data:"",type:"",order_id:"",uid:0}},onchangeTime:function(t){this.timeVal=t,this.formValidate.data=this.timeVal.join("-"),this.getList(this.rowsList,this.listTitle)},selectChange:function(t){this.formValidate.data=t,this.timeVal=[],this.getList(this.rowsList,this.listTitle)},getList:function(t,e){var r=this;this.listTitle=e,this.rowsList=t,this.loading=!0;var i="";i="man"===this.listTitle?"agent/stair":"agent/stair/order",this.formValidate.uid=t.uid,Object(u["m"])(i,this.formValidate).then(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i=e.data,r.tabList=i.list,r.total=i.count,"man"===r.listTitle?r.columns4=[{title:"UID",minWidth:80,key:"uid"},{title:"头像",key:"avatar",minWidth:80,render:function(t,e){return t("viewer",[t("div",{style:{width:"36px",height:"36px",borderRadius:"4px",cursor:"pointer"}},[t("img",{attrs:{src:e.row.avatar?e.row.avatar:a("7153")},style:{width:"100%",height:"100%"}})])])}},{title:"用户信息",key:"nickname",minWidth:120},{title:"是否推广员",key:"promoter_name",minWidth:100},{title:"推广人数",key:"spread_count",sortable:!0,minWidth:90},{title:"订单数",key:"order_count",sortable:!0,minWidth:90},{title:"绑定时间",slot:"add_time",sortable:!0,minWidth:130}]:r.columns4=[{title:"订单ID",key:"order_id"},{title:"用户信息",key:"user_info"},{title:"时间",key:"_add_time"},{title:"返佣金额",key:"brokerage_price",render:function(t,e){return t("viewer",[t("span",e.row.brokerage_price||0)])}}],r.loading=!1;case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){r.loading=!1,r.tabList=[],r.$Message.error(t.msg)}))},pageChange:function(t){this.formValidate.page=t,this.getList(this.rowsList,this.listTitle)},userSearchs:function(){this.formValidate.page=1,this.getList(this.rowsList,this.listTitle)}}},p=h,g=a("2877"),v=Object(g["a"])(p,d,m,!1,null,"2516260f",null),b=v.exports,x=a("8c03"),w=a("1698"),_={name:"agentManage",components:{cardsData:o["a"],searchFrom:c["a"],promotersList:b,customerInfo:x["default"]},data:function(){return{customerShow:!1,promoterShow:!1,modals:!1,spinShow:!1,grid:{xl:7,lg:10,md:12,sm:24,xs:24},fromList:{title:"选择时间",custom:!0,fromTxt:[{text:"全部",val:""},{text:"今天",val:"today"},{text:"昨天",val:"yesterday"},{text:"最近7天",val:"lately7"},{text:"最近30天",val:"lately30"},{text:"本月",val:"month"},{text:"本年",val:"year"}]},rows:{},formValidate:{nickname:"",data:"",page:1,limit:15},date:"all",total:0,cardLists:[],loading:!1,tableList:[],timeVal:[],columns:[{title:"ID",key:"uid",width:80},{title:"头像",key:"headimgurl",minWidth:60,render:function(t,e){return t("viewer",[t("div",{style:{width:"36px",height:"36px",borderRadius:"4px",cursor:"pointer"}},[t("img",{attrs:{src:e.row.headimgurl?e.row.headimgurl:a("7153")},style:{width:"100%",height:"100%"}})])])}},{title:"用户信息",slot:"nickname",minWidth:120},{title:"推广用户数量",key:"spread_count",minWidth:125},{title:"分销等级",slot:"agentLevel",minWidth:120},{title:"订单数量",key:"order_count",minWidth:90},{title:"订单金额",key:"order_price",minWidth:120},{title:"佣金金额",key:"brokerage_money",minWidth:120},{title:"已提现金额",key:"extract_count_price",minWidth:120},{title:"提现次数",key:"extract_count_num",minWidth:100},{title:"未提现金额",key:"new_money",minWidth:105},{title:"上级推广人",key:"spread_name",minWidth:105},{title:"操作",slot:"right",fixed:"right",minWidth:130}],code_src:"",code_xcx:"",code_h5:"",formInline:{uid:0,spread_uid:0,image:""}}},computed:Object(s["a"])(Object(s["a"])({},Object(l["e"])("media",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:80},labelPosition:function(){return this.isMobile?"top":"right"}}),created:function(){this.getList(),this.getStatistics()},methods:{putSend:function(t){var e=this;this.$refs[t].validate((function(a){if(a){if(!e.formInline.spread_uid)return e.$Message.error("请上传用户");Object(u["c"])(e.formInline).then((function(a){e.promoterShow=!1,e.$Message.success(a.msg),e.getList(),e.$refs[t].resetFields()})).catch((function(t){e.$Message.error(t.msg)}))}}))},exports:function(){var t=this,e=this.formValidate,a={data:e.data,nickname:e.nickname};Object(u["o"])(a).then((function(t){location.href=t.data[0]})).catch((function(e){t.$Message.error(e.msg)}))},changeMenu:function(t,e,a){var r=this;switch(e){case"1":this.promoters(t,"order");break;case"2":this.spreadQR(t);break;case"3":this.editS(t);break;case"4":this.del(t,"解除【 "+t.nickname+" 】的上级推广人",a);case"5":this.$modalForm(Object(w["e"])({uid:t.uid},"/agent/get_level_form")).then((function(){return r.getList()}));break;default:this.del_open(t,"解除【 "+t.nickname+" 】的推广资格",a);break}},editS:function(t){this.promoterShow=!0,this.formInline.uid=t.uid},customer:function(){this.customerShow=!0},imageObject:function(t){this.customerShow=!1,this.formInline.spread_uid=t.uid,this.formInline.image=t.image},del:function(t,e,a){var r=this,i={title:e,num:a,url:"agent/stair/delete_spread/".concat(t.uid),method:"PUT",ids:""};this.$modalSure(i).then((function(t){r.$Message.success(t.msg),r.getList()})).catch((function(t){r.$Message.error(t.msg)}))},del_open:function(t,e,a){var r=this,i={title:e,num:a,url:"agent/stair/delete_system_spread/".concat(t.uid),method:"PUT",ids:""};this.$modalSure(i).then((function(t){r.$Message.success(t.msg),r.getList()})).catch((function(t){r.$Message.error(t.msg)}))},edit:function(t){this.promoterShow=!0,this.formInline.uid=t.uid},cancel:function(t){this.promoterShow=!1,this.$refs[t].resetFields()},promoters:function(t,e){this.$refs.promotersLists.modals=!0,this.$refs.promotersLists.getList(t,e)},getStatistics:function(){var t=this,e={nickname:this.formValidate.nickname,data:this.formValidate.data};Object(u["n"])(e).then(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(a){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=a.data,t.cardLists=r.res;case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Message.error(e.msg)}))},onchangeTime:function(t){this.timeVal=t,this.formValidate.data=this.timeVal.join("-"),this.formValidate.page=1,t[0]||(this.formValidate.data=""),this.getList(),this.getStatistics()},selectChange:function(t){this.formValidate.page=1,this.formValidate.data=t,this.timeVal=[],this.getList(),this.getStatistics()},getList:function(){var t=this;this.loading=!0,Object(u["b"])(this.formValidate).then(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(a){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=a.data,t.tableList=r.list,t.total=a.data.count,t.loading=!1;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))},pageChange:function(t){this.formValidate.page=t,this.getList()},userSearchs:function(){this.formValidate.page=1,this.getList(),this.getStatistics()},spreadQR:function(t){this.modals=!0,this.rows=t},getWeChat:function(){var t=this;this.spinShow=!0;var e={uid:this.rows.uid,action:"wechant_code"};Object(u["h"])(e).then(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(a){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=a.data,t.code_src=r.code_src,t.spinShow=!1;case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.spinShow=!1,t.$Message.error(e.msg)}))},getXcx:function(){var t=this;this.spinShow=!0;var e={uid:this.rows.uid};Object(u["j"])(e).then(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(a){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=a.data,t.code_xcx=r.code_src,t.spinShow=!1;case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.spinShow=!1,t.$Message.error(e.msg)}))},getH5:function(){var t=this;this.spinShow=!0;var e={uid:this.rows.uid};Object(u["i"])(e).then(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(a){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=a.data,t.code_h5=r.code_src,t.spinShow=!1;case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.spinShow=!1,t.$Message.error(e.msg)}))}}},y=_,k=(a("2327"),Object(g["a"])(y,r,i,!1,null,"6a0791e3",null));e["default"]=k.exports},4163:function(t,e,a){},"4d63":function(t,e,a){var r=a("83ab"),i=a("da84"),n=a("e330"),s=a("94ca"),o=a("7156"),c=a("9112"),l=a("241c").f,u=a("3a9b"),d=a("44e7"),m=a("577e"),f=a("90d8"),h=a("9f7f"),p=a("aeb0"),g=a("cb2d"),v=a("d039"),b=a("1a2d"),x=a("69f3").enforce,w=a("2626"),_=a("b622"),y=a("fce3"),k=a("107c"),C=_("match"),j=i.RegExp,O=j.prototype,S=i.SyntaxError,V=n(O.exec),L=n("".charAt),R=n("".replace),T=n("".indexOf),I=n("".slice),M=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,$=/a/g,D=/a/g,E=new j($)!==$,W=h.MISSED_STICKY,F=h.UNSUPPORTED_Y,P=r&&(!E||W||y||k||v((function(){return D[C]=!1,j($)!=$||j(D)==D||"/a/i"!=j($,"i")}))),z=function(t){for(var e,a=t.length,r=0,i="",n=!1;r<=a;r++)e=L(t,r),"\\"!==e?n||"."!==e?("["===e?n=!0:"]"===e&&(n=!1),i+=e):i+="[\\s\\S]":i+=e+L(t,++r);return i},A=function(t){for(var e,a=t.length,r=0,i="",n=[],s={},o=!1,c=!1,l=0,u="";r<=a;r++){if(e=L(t,r),"\\"===e)e+=L(t,++r);else if("]"===e)o=!1;else if(!o)switch(!0){case"["===e:o=!0;break;case"("===e:V(M,I(t,r+1))&&(r+=2,c=!0),i+=e,l++;continue;case">"===e&&c:if(""===u||b(s,u))throw new S("Invalid capture group name");s[u]=!0,n[n.length]=[u,l],c=!1,u="";continue}c?u+=e:i+=e}return[i,n]};if(s("RegExp",P)){for(var U=function(t,e){var a,r,i,n,s,l,h=u(O,this),p=d(t),g=void 0===e,v=[],b=t;if(!h&&p&&g&&t.constructor===U)return t;if((p||u(O,t))&&(t=t.source,g&&(e=f(b))),t=void 0===t?"":m(t),e=void 0===e?"":m(e),b=t,y&&"dotAll"in $&&(r=!!e&&T(e,"s")>-1,r&&(e=R(e,/s/g,""))),a=e,W&&"sticky"in $&&(i=!!e&&T(e,"y")>-1,i&&F&&(e=R(e,/y/g,""))),k&&(n=A(t),t=n[0],v=n[1]),s=o(j(t,e),h?this:O,U),(r||i||v.length)&&(l=x(s),r&&(l.dotAll=!0,l.raw=U(z(t),a)),i&&(l.sticky=!0),v.length&&(l.groups=v)),t!==b)try{c(s,"source",""===b?"(?:)":b)}catch(w){}return s},Q=l(j),N=0;Q.length>N;)p(U,j,Q[N++]);O.constructor=U,U.prototype=O,g(i,"RegExp",U,{constructor:!0})}w("RegExp")},"53ca":function(t,e,a){"use strict";var r=a("4163"),i=a.n(r);i.a},"61f7":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"c",(function(){return l})),a.d(e,"b",(function(){return u}));var r=a("fc11"),i=a("f3f3");a("ac1f"),a("00b4"),a("5319"),a("4d63"),a("c607"),a("2c3e"),a("25f0"),a("498a"),a("d3b7"),a("b64b"),a("99af");function n(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var a={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var r in a)if(new RegExp("(".concat(r,")")).test(e)){var i=a[r]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?i:s(i))}return e}function s(t){return("00"+t).substr(t.length)}var o={min:"%s最小长度为:min",max:"%s最大长度为:max",length:"%s长度必须为:length",range:"%s长度为:range",pattern:"$s格式错误"};var c=function(t,e){t.message=function(t){return e.replace("%s",t||"")}};function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(i["a"])({required:!0,message:t,type:"string"},e)}function u(t){return d.pattern(/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,t)}c(l,"请输入%s"),c(u,"%s格式不正确");var d=Object.keys(o).reduce((function(t,e){return t[e]=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s="range"===e?{min:t[0],max:t[1]}:Object(r["a"])({},e,t);return Object(i["a"])(Object(i["a"])({message:a.replace(":".concat(e),"range"===e?"".concat(t[0],"-").concat(t[1]):t),type:"string"},s),n)},c(t[e],o[e]),t}),{})},7443:function(t,e,a){"use strict";var r=a("02fe"),i=a.n(r);i.a},a584:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Row",{staticClass:"ivu-mt",attrs:{type:"flex",align:"middle",gutter:10}},t._l(t.cardLists,(function(e,r){return a("Col",{key:r,staticClass:"ivu-mb",attrs:{xl:e.col,lg:6,md:12,sm:24,xs:24}},[a("Card",{staticClass:"card_cent",attrs:{shadow:"",padding:0}},[a("div",{staticClass:"card_box"},[a("div",{staticClass:"card_box_cir",class:{one:r%5==0,two:r%5==1,three:r%5==2,four:r%5==3,five:r%5==4}},[a("div",{staticClass:"card_box_cir1",class:{one1:r%5==0,two1:r%5==1,three1:r%5==2,four1:r%5==3,five1:r%5==4}},[a("Icon",{attrs:{type:e.className}})],1)]),a("div",{staticClass:"card_box_txt"},[a("span",{staticClass:"sp1",domProps:{textContent:t._s(e.count||0)}}),a("span",{staticClass:"sp2",domProps:{textContent:t._s(e.name)}})])])])],1)})),1)],1)},i=[],n={name:"cards",data:function(){return{}},props:{cardLists:Array},methods:{},created:function(){}},s=n,o=(a("7443"),a("2877")),c=Object(o["a"])(s,r,i,!1,null,"e3e38522",null);e["a"]=c.exports},bbbc:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"n",(function(){return s})),a.d(e,"m",(function(){return o})),a.d(e,"h",(function(){return c})),a.d(e,"j",(function(){return l})),a.d(e,"i",(function(){return u})),a.d(e,"o",(function(){return d})),a.d(e,"l",(function(){return m})),a.d(e,"f",(function(){return f})),a.d(e,"a",(function(){return h})),a.d(e,"e",(function(){return p})),a.d(e,"k",(function(){return g})),a.d(e,"d",(function(){return v})),a.d(e,"g",(function(){return b}));a("99af");var r=a("6b6c");function i(t){return Object(r["a"])({url:"agent/index",method:"get",params:t})}function n(t){return Object(r["a"])({url:"agent/spread",method:"PUT",data:t})}function s(t){return Object(r["a"])({url:"agent/statistics",method:"get",params:t})}function o(t,e){return Object(r["a"])({url:t,method:"get",params:e})}function c(t){return Object(r["a"])({url:"agent/look_code",method:"get",params:t})}function l(t){return Object(r["a"])({url:"agent/look_xcx_code",method:"get",params:t})}function u(t){return Object(r["a"])({url:"agent/look_h5_code",method:"get",params:t})}function d(t){return Object(r["a"])({url:"export/userAgent",method:"get",params:t})}function m(t){return Object(r["a"])({url:"agent/division/list",method:"get",params:t})}function f(t){return Object(r["a"])({url:"agent/division/agent_apply/list",method:"get",params:t})}function h(t){return Object(r["a"])({url:"agent/division/agent/create/".concat(t),method:"get"})}function p(t,e){return Object(r["a"])({url:"agent/division/examine_apply/".concat(t,"/").concat(e),method:"get"})}function g(t){return Object(r["a"])({url:"agent/division/create/".concat(t),method:"get"})}function v(t){return Object(r["a"])({url:"agent/division/down_list",method:"get",params:t})}function b(t){return Object(r["a"])({url:"agent/division/set_status/".concat(t.status,"/").concat(t.id),method:"put"})}},c607:function(t,e,a){var r=a("da84"),i=a("83ab"),n=a("fce3"),s=a("c6b6"),o=a("edd0"),c=a("69f3").get,l=RegExp.prototype,u=r.TypeError;i&&n&&o(l,"dotAll",{configurable:!0,get:function(){if(this!==l){if("RegExp"===s(this))return!!c(this).dotAll;throw u("Incompatible receiver, RegExp required")}}})},d962:function(t,e,a){},edd0:function(t,e,a){var r=a("13d2"),i=a("9bf2");t.exports=function(t,e,a){return a.get&&r(a.get,e,{getter:!0}),a.set&&r(a.set,e,{setter:!0}),i.f(t,e,a)}}}]);