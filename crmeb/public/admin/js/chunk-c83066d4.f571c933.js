(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c83066d4"],{3353:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"i-layout-page-header"},[r("div",{staticClass:"i-layout-page-header"},[r("span",{staticClass:"ivu-page-header-title"},[e._v(e._s(e.$route.meta.title))])])]),r("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[r("Form",{ref:"pagination",attrs:{model:e.pagination,"label-width":e.labelWidth,"label-position":e.labelPosition},nativeOn:{submit:function(e){e.preventDefault()}}},[r("Col",{staticClass:"ivu-text-left",attrs:{span:"24"}},[r("FormItem",{attrs:{label:"订单状态："}},[r("RadioGroup",{attrs:{type:"button"},on:{"on-change":function(t){return e.selectChange2(e.pagination.refund_type)}},model:{value:e.pagination.refund_type,callback:function(t){e.$set(e.pagination,"refund_type",t)},expression:"pagination.refund_type"}},e._l(e.num,(function(t,a){return r("Radio",{key:a,attrs:{label:a}},[e._v(e._s(t.name))])})),1)],1)],1),r("Row",{attrs:{type:"flex",gutter:24}},[r("Col",e._b({staticClass:"ivu-text-left"},"Col",e.grid,!1),[r("FormItem",{attrs:{label:"退款时间："}},[r("DatePicker",{staticClass:"mr20",staticStyle:{width:"200px"},attrs:{editable:!1,value:e.timeVal,format:"yyyy/MM/dd",type:"daterange",placement:"bottom-start",placeholder:"请选择时间",options:e.options},on:{"on-change":e.onchangeTime}})],1)],1),r("Col",e._b({},"Col",e.grid,!1),[r("FormItem",{attrs:{label:"订单号：","label-for":"title"}},[r("Input",{attrs:{search:"","enter-button":"",placeholder:"请输入订单号"},on:{"on-search":e.orderSearch},model:{value:e.pagination.order_id,callback:function(t){e.$set(e.pagination,"order_id",t)},expression:"pagination.order_id"}})],1)],1)],1)],1),r("Table",{ref:"table",staticClass:"mt25",attrs:{columns:e.thead,data:e.tbody,loading:e.loading,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:e._u([{key:"order_id",fn:function(t){var a=t.row;t.index;return[r("span",{staticStyle:{display:"block"},domProps:{textContent:e._s(a.order_id)}}),r("span",{directives:[{name:"show",rawName:"v-show",value:1===a.is_del,expression:"row.is_del === 1"}],staticStyle:{color:"#ed4014",display:"block"}},[e._v("用户已删除")])]}},{key:"user",fn:function(t){var a=t.row;t.index;return[r("div",[e._v("用户名："+e._s(a.nickname))]),r("div",[e._v("用户ID："+e._s(a.uid))])]}},{key:"refund_type",fn:function(t){var a=t.row;t.index;return[1==a.refund_type?r("div",[e._v("仅退款")]):2==a.refund_type?r("div",[e._v("退货退款")]):3==a.refund_type?r("div",[r("div",[e._v("拒绝退款")]),r("div",[e._v("原因："+e._s(a.refuse_reason))])]):4==a.refund_type?r("div",[e._v("商品待退货")]):5==a.refund_type?r("div",[r("div",[e._v("退货待收货")]),r("div",[e._v("单号："+e._s(a.refund_express))])]):6==a.refund_type?r("div",[e._v("已退款")]):e._e()]}},{key:"info",fn:function(t){var a=t.row;t.index;return e._l(a._info,(function(t,a){return r("div",{key:a,staticClass:"tabBox"},[r("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"tabBox_img"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.cart_info.productInfo.attrInfo?t.cart_info.productInfo.attrInfo.image:t.cart_info.productInfo.image,expression:"\n                val.cart_info.productInfo.attrInfo\n                  ? val.cart_info.productInfo.attrInfo.image\n                  : val.cart_info.productInfo.image\n              "}]})]),r("span",{staticClass:"tabBox_tit"},[e._v(e._s(t.cart_info.productInfo.store_name+" | ")+e._s(t.cart_info.productInfo.attrInfo?t.cart_info.productInfo.attrInfo.suk:""))]),r("span",{staticClass:"tabBox_pice"},[e._v(e._s("￥"+t.cart_info.truePrice+" x "+t.cart_info.cart_num))])])}))}},{key:"order_info",fn:function(t){var a=t.row;t.index;return[r("div",[e._v("订单金额："+e._s(a.pay_price))]),r("div",[e._v("付款方式："+e._s(a.pay_type_name))]),r("div",[e._v("\n          订单状态："),r("span",{domProps:{innerHTML:e._s(a.status_name.status_name)}})])]}},{key:"statusName",fn:function(t){var a=t.row;t.index;return[r("div",{staticClass:"pt5",domProps:{innerHTML:e._s(a.refund_reason)}}),r("div",{staticClass:"pictrue-box"},e._l(a.refund_img||[],(function(t,n){return a.refund_img?r("div",{directives:[{name:"viewer",rawName:"v-viewer"}],key:n},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"item"}],staticClass:"pictrue mr10",attrs:{src:t}})]):e._e()})),0)]}},{key:"action",fn:function(t){var a=t.row;t.index;return[[r("Dropdown",{on:{"on-click":function(t){return e.changeMenu(a,t)}}},[r("a",{attrs:{href:"javascript:void(0)"}},[e._v("更多\n              "),r("Icon",{attrs:{type:"ios-arrow-down"}})],1),r("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[r("DropdownItem",{directives:[{name:"show",rawName:"v-show",value:1===a._status&&0===a.paid&&"offline"===a.pay_type,expression:"\n                  row._status === 1 &&\n                  row.paid === 0 &&\n                  row.pay_type === 'offline'\n                "}],ref:"ones",attrs:{name:"1"}},[e._v("立即支付")]),r("DropdownItem",{attrs:{name:"2"}},[e._v("订单详情")]),r("DropdownItem",{directives:[{name:"show",rawName:"v-show",value:1!==a._status||3===a._status&&a.use_integral>0&&a.use_integral>=a.back_integral,expression:"\n                  row._status !== 1 ||\n                  (row._status === 3 &&\n                    row.use_integral > 0 &&\n                    row.use_integral >= row.back_integral)\n                "}],attrs:{name:"4"}},[e._v("售后备注")]),r("DropdownItem",{directives:[{name:"show",rawName:"v-show",value:[1,2,5].includes(a.refund_type)&&(parseFloat(a.pay_price)>parseFloat(a.refunded_price)||0==a.pay_price),expression:"\n                  [1, 2, 5].includes(row.refund_type) &&\n                  (parseFloat(row.pay_price) >\n                    parseFloat(row.refunded_price) ||\n                    row.pay_price == 0)\n                "}],attrs:{name:"5"}},[e._v(e._s(2==a.refund_type?"同意退货":"立即退款"))]),r("DropdownItem",{directives:[{name:"show",rawName:"v-show",value:[1,2].includes(a.refund_type)&&0===a.is_pink_cancel,expression:"\n                  [1, 2].includes(row.refund_type) && row.is_pink_cancel === 0\n                "}],attrs:{name:"7"}},[e._v("不退款")])],1)],1)]]}}])}),r("div",{staticClass:"acea-row row-right page"},[r("Page",{attrs:{total:e.total,current:e.pagination.page,"show-elevator":"","show-total":"","page-size":e.pagination.limit},on:{"on-change":e.pageChange}})],1)],1),r("edit-from",{ref:"edits",attrs:{FromData:e.FromData},on:{submitFail:e.submitFail}}),r("details-from",{ref:"detailss",attrs:{orderDatalist:e.orderDatalist,orderId:e.orderId}}),r("order-remark",{ref:"remarks",attrs:{remarkType:"refund",orderId:e.orderId},on:{submitFail:e.submitFail}}),r("order-record",{ref:"record"})],1)},n=[],i=(r("8e6e"),r("ac6a"),r("456d"),r("96cf"),r("3b8d")),o=r("bd86"),s=r("2f62"),d=r("f8b7"),c=r("31b4"),u=r("fc48"),l=r("61f8d"),f=r("417c");function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g={components:{editFrom:c["a"],detailsFrom:u["a"],orderRemark:l["a"],orderRecord:f["a"]},data:function(){return{grid:{xl:7,lg:7,md:12,sm:24,xs:24},thead:[{title:"订单号",align:"center",slot:"order_id",minWidth:150},{title:"用户信息",key:"nickname",minWidth:100},{title:"商品信息",slot:"info",minWidth:330},{title:"实际支付",key:"pay_price",minWidth:70},{title:"发起退款时间",key:"add_time",minWidth:100},{title:"退款状态",slot:"refund_type",minWidth:100},{title:"退款信息",slot:"statusName",minWidth:120},{title:"售后备注",key:"remark",minWidth:100},{title:"操作",slot:"action",fixed:"right",minWidth:150,align:"center"}],tbody:[],num:[],orderDatalist:null,loading:!1,FromData:null,total:0,orderId:0,animal:1,pagination:{page:1,limit:15,order_id:"",time:"",refund_type:0},options:{shortcuts:[{text:"今天",value:function(){var e=new Date,t=new Date;return t.setTime(new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate())),[t,e]}},{text:"昨天",value:function(){var e=new Date,t=new Date;return t.setTime(t.setTime(new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()-1))),e.setTime(e.setTime(new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()-1))),[t,e]}},{text:"最近7天",value:function(){var e=new Date,t=new Date;return t.setTime(t.setTime(new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()-6))),[t,e]}},{text:"最近30天",value:function(){var e=new Date,t=new Date;return t.setTime(t.setTime(new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()-29))),[t,e]}},{text:"本月",value:function(){var e=new Date,t=new Date;return t.setTime(t.setTime(new Date((new Date).getFullYear(),(new Date).getMonth(),1))),[t,e]}},{text:"本年",value:function(){var e=new Date,t=new Date;return t.setTime(t.setTime(new Date((new Date).getFullYear(),0,1))),[t,e]}}]},timeVal:[],modal:!1,qrcode:null,name:"",spin:!1}},computed:p(p({},Object(s["e"])("order",["orderChartType"])),{},{labelWidth:function(){return this.isMobile?void 0:75},labelPosition:function(){return this.isMobile?"top":"right"}}),created:function(){this.getOrderList()},methods:{onchangeCode:function(e){this.animal=e,this.qrcodeShow()},onchangeTime:function(e){this.pagination.page=1,this.timeVal=e,this.pagination.time=this.timeVal[0]?this.timeVal.join("-"):"",this.getOrderList()},changeMenu:function(e,t){var r=this;switch(this.orderId=e.id,t){case"1":this.delfromData={title:"修改立即支付",url:"/order/pay_offline/".concat(e.id),method:"post",ids:""},this.$modalSure(this.delfromData).then((function(e){r.$Message.success(e.msg),r.getOrderList()})).catch((function(e){r.$Message.error(e.msg)}));break;case"2":this.getData(e.order_id);break;case"3":this.$refs.record.modals=!0,this.$refs.record.getList(e.id);break;case"4":this.$refs.remarks.modals=!0,this.$refs.remarks.formValidate.remark=e.remark;break;case"5":this.getRefundData(e.id,e.refund_type);break;case"6":this.getRefundIntegral(e.id);break;case"7":this.getNoRefundData(e.id);break;case"8":this.delfromData={title:"修改确认收货",url:"/order/take/".concat(e.id),method:"put",ids:""},this.$modalSure(this.delfromData).then((function(e){r.$Message.success(e.msg),r.getOrderList()})).catch((function(e){r.$Message.error(e.msg)}));break;case"10":this.delfromData={title:"立即打印订单",info:"您确认打印此订单吗?",url:"/order/print/".concat(e.id),method:"get",ids:""},this.$modalSure(this.delfromData).then((function(e){r.$Message.success(e.msg),r.$emit("changeGetTabs"),r.getOrderList()})).catch((function(e){r.$Message.error(e.msg)}));break;case"11":this.delfromData={title:"立即打印电子面单",info:"您确认打印此电子面单吗?",url:"/order/order_dump/".concat(e.id),method:"get",ids:""},this.$modalSure(this.delfromData).then((function(e){r.$Message.success(e.msg),r.getOrderList()})).catch((function(e){r.$Message.error(e.msg)}));break;default:this.delfromData={title:"删除订单",url:"/order/del/".concat(e.id),method:"DELETE",ids:""},this.delOrder(e,this.delfromData)}},getRefundData:function(e,t){var r=this;2==t?(this.delfromData={title:"是否立即退货退款?",url:"/refund/agree/".concat(e),method:"get"},this.$modalSure(this.delfromData).then((function(e){r.$Message.success(e.msg),r.getOrderList()})).catch((function(e){r.$Message.error(e.msg)}))):this.$modalForm(Object(d["j"])(e)).then((function(){r.getOrderList(),r.$emit("changeGetTabs")}))},getRefundIntegral:function(e){var t=this;Object(d["N"])(e).then(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.FromData=r.data,t.$refs.edits.modals=!0;case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Message.error(e.msg)}))},getData:function(e){var t=this;Object(d["f"])(e).then(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.$refs.detailss.modals=!0,t.orderDatalist=r.data,t.orderDatalist.orderInfo.refund_img)try{t.orderDatalist.orderInfo.refund_img=JSON.parse(t.orderDatalist.orderInfo.refund_img)}catch(a){t.orderDatalist.orderInfo.refund_img=[]}case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Message.error(e.msg)}))},delOrder:function(e,t){var r=this;if(1===e.is_del)this.$modalSure(t).then((function(e){r.$Message.success(e.msg),r.getOrderList()})).catch((function(e){r.$Message.error(e.msg)}));else{var a="错误！",n="<p>您选择的的订单存在用户未删除的订单，无法删除用户未删除的订单！</p>";this.$Modal.error({title:a,content:n})}},submitFail:function(){this.getOrderList()},selectChange2:function(e){this.pagination.page=1,this.pagination.refund_type=e,this.getOrderList(e)},getNoRefundData:function(e){var t=this;this.$modalForm(Object(d["k"])(e)).then((function(){t.getOrderList(),t.$emit("changeGetTabs")}))},getOrderList:function(){var e=this;this.loading=!0,Object(d["C"])(this.pagination).then((function(t){e.loading=!1;var r=t.data,a=r.count,n=r.list,i=r.num;e.total=a,e.tbody=n,e.num=i})).catch((function(t){e.loading=!1,e.$Message.error(t.msg)}))},pageChange:function(e){this.pagination.page=e,this.getOrderList()},nameSearch:function(){this.pagination.page=1,this.getOrderList()},orderSearch:function(){this.pagination.page=1,this.getOrderList()},delivery:function(e){var t=this;Object(d["g"])(e.id).then(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.FromData=r.data,t.$refs.edits.modals=!0;case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Message.error(e.msg)}))}}},h=g,_=(r("c22e"),r("2877")),v=Object(_["a"])(h,a,n,!1,null,"f5d12d3e",null);t["default"]=v.exports},a141:function(e,t,r){},c22e:function(e,t,r){"use strict";var a=r("a141"),n=r.n(a);n.a}}]);