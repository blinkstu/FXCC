(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-310629e4"],{1545:function(t,e,r){},"2f67":function(t,e,r){"use strict";var n=r("1545");r.n(n).a},"370a":function(t,e,r){"use strict";r.r(e);var n=r("0122"),i=r("c964"),o=r("f3f3"),a=(r("d3b7"),r("159b"),r("a434"),r("4de4"),r("d81d"),r("a4d3"),r("e01a"),r("d28b"),r("3ca3"),r("ddb0"),r("b636"),r("944a"),r("0c47"),r("23dc"),r("3410"),r("d9e2"),r("b0c0"),r("131a"),r("fb6a"),r("a464")),s=r("f8b7"),c=r("2f62"),u=r("31b4"),l=r("fc48"),d=r("61f8"),f=r("417c"),h=r("d616"),p=r("a716");function m(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */m=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(e){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o,a,s,c;e=e&&e.prototype instanceof h?e:h,e=Object.create(e.prototype),n=new k(n||[]);return i(e,"_invoke",{value:(o=t,a=r,s=n,c="suspendedStart",function(t,e){if("executing"===c)throw new Error("Generator is already running");if("completed"===c){if("throw"===t)throw e;return D()}for(s.method=t,s.arg=e;;){var r=s.delegate;if(r&&(r=function t(e,r){var n=r.method,i=e.iterator[n];return void 0===i?(r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=void 0,t(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f):(n=d(i,e.iterator,r.arg),"throw"===n.type?(r.method="throw",r.arg=n.arg,r.delegate=null,f):(i=n.arg,i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,f):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,f)))}(r,s),r)){if(r===f)continue;return r}if("next"===s.method)s.sent=s._sent=s.arg;else if("throw"===s.method){if("suspendedStart"===c)throw c="completed",s.arg;s.dispatchException(s.arg)}else"return"===s.method&&s.abrupt("return",s.arg);if(c="executing",r=d(o,a,s),"normal"===r.type){if(c=s.done?"completed":"suspendedYield",r.arg===f)continue;return{value:r.arg,done:s.done}}"throw"===r.type&&(c="completed",s.method="throw",s.arg=r.arg)}})}),e}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f={};function h(){}function p(){}function g(){}o={};var v=(u(o,a,(function(){return this})),Object.getPrototypeOf),y=(v=v&&v(v($([]))),v&&v!==e&&r.call(v,a)&&(o=v),g.prototype=h.prototype=Object.create(o));function _(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var o;i(this,"_invoke",{value:function(i,a){function s(){return new e((function(o,s){!function i(o,a,s,c){var u;o=d(t[o],t,a);if("throw"!==o.type)return(a=(u=o.arg).value)&&"object"==Object(n.a)(a)&&r.call(a,"__await")?e.resolve(a.__await).then((function(t){i("next",t,s,c)}),(function(t){i("throw",t,s,c)})):e.resolve(a).then((function(t){u.value=t,s(u)}),(function(t){return i("throw",t,s,c)}));c(o.arg)}(i,a,o,s)}))}return o=o?o.then(s,s):s()}})}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function $(t){if(t){var e,n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length))return e=-1,(n=function n(){for(;++e<t.length;)if(r.call(t,e))return n.value=t[e],n.done=!1,n;return n.value=void 0,n.done=!0,n}).next=n}return{next:D}}function D(){return{value:void 0,done:!0}}return i(y,"constructor",{value:p.prototype=g,configurable:!0}),i(g,"constructor",{value:p,configurable:!0}),p.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){return t="function"==typeof t&&t.constructor,!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},_(w.prototype),u(w.prototype,s,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new w(l(e,r,n,i),o);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(y),u(y,c,"Generator"),u(y,a,(function(){return this})),u(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e,r=Object(t),n=[];for(e in r)n.push(e);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},t.values=$,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var i=this.tryEntries.length-1;0<=i;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;0<=n;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}var a=(o=o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc?null:o)?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r,n,i=this.tryEntries[e];if(i.tryLoc===t)return"throw"===(r=i.completion).type&&(n=r.arg,x(i)),n}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:$(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}u={name:"table_list",components:{expandRow:a.a,editFrom:u.a,detailsFrom:l.a,orderRemark:d.a,orderRecord:f.a,orderSend:h.a,userDetails:p.a},props:["where","isAll"],data:function(){var t=this;return{delfromData:{},modal:!1,orderList:[],orderCards:[],loading:!1,orderId:0,columns:[{type:"expand",width:30,render:function(t,e){return t(a.a,{props:{row:e.row}})}},{width:50,align:"center",renderHeader:function(e,r){return e("div",{class:{"select-panel":!0},on:{mouseenter:function(e){t.display="block"},mouseleave:function(e){t.display="none"}}},[e("Checkbox",{props:{value:t.checkBox},on:{"on-change":function(e){t.checkBox=e,t.$refs.table.selectAll(t.checkBox),t.$emit("on-all",e?0:-1)}}}),e("div",{style:{position:"absolute",top:0,zIndex:2,display:t.display,width:"80px",height:"100%",padding:"0px 0",borderRadius:"4px",backgroundColor:"#fff",boxShadow:"0 0px 5px rgba(0, 0, 0, 0.2)",transform:"translateX(25%)"}},[e("div",{class:{"select-item":!0,on:0==t.isAll},style:{padding:"1px 6px",cursor:"pointer",height:"50%"},on:{click:function(e){0===t.isAll?(t.$emit("on-all",-1),t.checkBox=!1,t.$refs.table.selectAll(t.checkBox)):(t.$emit("on-all",0),t.formSelection.length||(t.checkBox=!0,t.$refs.table.selectAll(t.checkBox))),t.display="none"}}},"选择当页"),e("div",{class:{"select-item":!0,on:1==t.isAll},style:{padding:"1px 6px",cursor:"pointer",height:"50%"},on:{click:function(e){1===t.isAll?(t.isAll=-1,t.$emit("on-all",-1),t.checkBox=!1):(t.isAll=1,t.$emit("on-all",1),t.checkBox=!0),t.$refs.table.selectAll(t.checkBox),t.display="none"}}},"选择全部")])])},render:function(e,r){return e("Checkbox",{props:{value:r.row.checkBox},on:{"on-change":function(e){e?t.formSelection.push(r.row):(t.checkBox=!1,t.formSelection.forEach((function(e,n){e.id===r.row.id&&t.formSelection.splice(n,1)}))),t.$emit("on-all",t.formSelection.length?0:-1),r.row.checkBox=e,t.orderList[r.index].checkBox=e}},ref:"checkbox",refInFor:!0})}},{title:"订单号",align:"center",slot:"order_id",minWidth:150},{title:"订单类型",key:"pink_name",minWidth:120},{title:"用户信息",slot:"nickname",minWidth:100},{title:"商品信息",slot:"info",minWidth:330},{title:"实际支付",key:"pay_price",minWidth:70},{title:"支付时间",key:"_pay_time",minWidth:100},{title:"支付状态",key:"pay_type_name",minWidth:80},{title:"订单状态",key:"statusName",slot:"statusName",minWidth:120},{title:"操作",slot:"action",fixed:"right",minWidth:150,align:"center"}],page:{total:0,pageNum:1,pageSize:10},data:[],FromData:null,orderDatalist:null,modalTitleSs:"",isDelIdList:[],checkBox:!1,formSelection:[],selectionCopy:[],display:"none",autoDisabled:!1,status:0}},computed:Object(o.a)({},Object(c.d)("admin/order",["orderPayType","orderStatus","orderTime","orderNum","fieldKey","orderType"])),mounted:function(){},created:function(){this.getList()},watch:{orderType:function(){this.page.pageNum=1,this.getList()},formSelection:function(t){this.$emit("order-select",t),t.length?this.$emit("auto-disabled",0):this.$emit("auto-disabled",1);var e=t.some((function(t){return 1===t.is_del}));this.getIsDel(e),this.getisDelIdListl(t)},orderList:{deep:!0,handler:function(t){var e=this;t.forEach((function(t){e.formSelection.forEach((function(e){e.id===t.id&&(t.checkBox=!0)}))})),t=this.orderList.filter((function(t){return t.checkBox}));this.orderList.length?this.checkBox=this.orderList.length===t.length:this.checkBox=!1}}},methods:Object(o.a)(Object(o.a)({},Object(c.c)("admin/order",["getIsDel","getisDelIdListl"])),{},{selectAll:function(t){var e=this;t.length&&(this.formSelection=t,this.selectionCopy=t),this.selectionCopy.forEach((function(t,r){t.checkBox=e.checkBox,e.$set(e.orderList,r,t)}))},showUserInfo:function(t){this.$refs.userDetails.modals=!0,this.$refs.userDetails.getDetails(t.uid)},changeMenu:function(t,e){var r=this;switch(this.orderId=t.id,e){case"1":this.delfromData={title:"修改立即支付",url:"/order/pay_offline/".concat(t.id),method:"post",ids:""},this.$modalSure(this.delfromData).then((function(t){r.$Message.success(t.msg),r.$emit("changeGetTabs"),r.getList()})).catch((function(t){r.$Message.error(t.msg)}));break;case"2":this.getData(t.id);break;case"3":this.$refs.record.modals=!0,this.$refs.record.getList(t.id);break;case"4":this.$refs.remarks.modals=!0;break;case"5":this.getRefundData(t.id);break;case"6":this.getRefundIntegral(t.id);break;case"7":this.getNoRefundData(t.id);break;case"8":this.delfromData={title:"修改确认收货",url:"/order/take/".concat(t.id),method:"put",ids:""},this.$modalSure(this.delfromData).then((function(t){r.$Message.success(t.msg),r.getList()})).catch((function(t){r.$Message.error(t.msg)}));break;case"10":this.delfromData={title:"立即打印订单",info:"您确认打印此订单吗?",url:"/order/print/".concat(t.id),method:"get",ids:""},this.$modalSure(this.delfromData).then((function(t){r.$Message.success(t.msg),r.$emit("changeGetTabs"),r.getList()})).catch((function(t){r.$Message.error(t.msg)}));break;case"11":this.delfromData={title:"立即打印电子面单",info:"您确认打印此电子面单吗?",url:"/order/order_dump/".concat(t.id),method:"get",ids:""},this.$modalSure(this.delfromData).then((function(t){r.$Message.success(t.msg),r.getList()})).catch((function(t){r.$Message.error(t.msg)}));break;default:this.delfromData={title:"删除订单",url:"/order/del/".concat(t.id),method:"DELETE",ids:""},this.delOrder(t,this.delfromData)}},submitModel:function(){this.getList()},pageChange:function(t){this.page.pageNum=t,this.getList()},limitChange:function(t){this.page.pageSize=t,this.getList()},getOrderList:function(t){Object(s.Q)(t).then((function(t){}))},getList:function(t){var e=this;this.page.pageNum=1===t?1:this.page.pageNum,this.loading=!0,Object(s.Q)(this.$route.query.id).then(function(){var t=Object(i.a)(m().mark((function t(r){var n;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=r.data,e.orderList=n.map((function(t){return 1===e.isAll?t.checkBox=!0:t.checkBox=!1,t})),e.orderCards=n.stat,e.page.total=n.count,e.$emit("on-changeCards",n.stat),e.loading=!1;case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.loading=!1,e.$Message.error(t.msg)}))},onSelectTab:function(t){var e=(this.formSelection=t).some((function(t){return 1===t.is_del}));this.getIsDel(e),this.getisDelIdListl(t)},edit:function(t){this.getOrderData(t.id)},splitOrderDetail:function(t){this.$router.push({path:"split_order",query:{id:t.id}})},delOrder:function(t,e){var r=this;1===t.is_del?this.$modalSure(e).then((function(t){r.$Message.success(t.msg),r.getList()})).catch((function(t){r.$Message.error(t.msg)})):this.$Modal.error({title:"错误！",content:"<p>您选择的的订单存在用户未删除的订单，无法删除用户未删除的订单！</p>"})},getOrderData:function(t){var e=this;Object(s.l)(t).then(function(){var t=Object(i.a)(m().mark((function t(r){return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!1===r.data.status)return t.abrupt("return",e.$authLapse(r.data));t.next=2;break;case 2:e.$authLapse(r.data),e.FromData=r.data,e.$refs.edits.modals=!0;case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$Message.error(t.msg)}))},getData:function(t){var e=this;Object(s.e)(t).then(function(){var t=Object(i.a)(m().mark((function t(r){return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.$refs.detailss.modals=!0,e.orderDatalist=r.data,e.orderDatalist.orderInfo.refund_reason_wap_img)try{e.orderDatalist.orderInfo.refund_reason_wap_img=JSON.parse(e.orderDatalist.orderInfo.refund_reason_wap_img)}catch(t){e.orderDatalist.orderInfo.refund_reason_wap_img=[]}case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$Message.error(t.msg)}))},submitFail:function(){this.status=0,this.getList()},getRefundData:function(t){var e=this;this.$modalForm(Object(s.o)(t)).then((function(){e.getList(),e.$emit("changeGetTabs")}))},getRefundIntegral:function(t){var e=this;Object(s.N)(t).then(function(){var t=Object(i.a)(m().mark((function t(r){return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.FromData=r.data,e.$refs.edits.modals=!0;case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$Message.error(t.msg)}))},getNoRefundData:function(t){var e=this;this.$modalForm(Object(s.p)(t)).then((function(){e.getList(),e.$emit("changeGetTabs")}))},sendOrder:function(t){var e=this;this.$refs.send.modals=!0,this.orderId=t.id,this.status=t._status,this.$refs.send.getList(),this.$refs.send.getDeliveryList(),this.$nextTick((function(r){e.$refs.send.getCartInfo(t._status,t.id)}))},delivery:function(t){var e=this;Object(s.g)(t.id).then(function(){var t=Object(i.a)(m().mark((function t(r){return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.FromData=r.data,e.$refs.edits.modals=!0;case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$Message.error(t.msg)}))},change:function(t){},exportData:function(){this.$refs.table.exportCsv({filename:"商品列表"})},bindWrite:function(t){var e=this;this.$Modal.confirm({title:"提示",content:"确定要核销该订单吗？",cancelText:"取消",closable:!0,maskClosable:!0,onOk:function(){Object(s.T)(t.order_id).then((function(t){e.$Message.success(t.msg),e.getList()}))},onCancel:function(){}})},onSelectCancel:function(t,e){}})},r("2f67"),l=r("2877"),d=Object(l.a)(u,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"i-layout-page-header"},[r("div",{staticClass:"i-layout-page-header"},[r("span",{staticClass:"ivu-page-header-title"},[t._v("子订单列表")]),r("span",{staticClass:"return",on:{click:function(e){return t.$router.go(-1)}}},[t._v("返回")])])]),r("Table",{ref:"table",staticClass:"orderData mt25",attrs:{columns:t.columns,data:t.orderList,loading:t.loading,"highlight-row":"","no-data-text":"暂无数据","no-filtered-data-text":"暂无筛选结果"},on:{"on-selection-change":t.onSelectTab,"on-select-all":t.selectAll,"on-select-all-cancel":t.selectAll,"on-select-cancel":t.onSelectCancel},scopedSlots:t._u([{key:"order_id",fn:function(e){var n=e.row;return e.index,[r("span",{staticStyle:{display:"block"},domProps:{textContent:t._s(n.order_id)}}),r("span",{directives:[{name:"show",rawName:"v-show",value:1===n.is_del,expression:"row.is_del === 1"}],staticStyle:{color:"#ed4014",display:"block"}},[t._v("用户已删除")])]}},{key:"nickname",fn:function(e){var n=e.row;return e.index,[r("a",{on:{click:function(e){return t.showUserInfo(n)}}},[t._v(t._s(n.nickname))])]}},{key:"info",fn:function(e){var n=e.row;return e.index,t._l(n._info,(function(e,n){return r("div",{key:n,staticClass:"tabBox"},[r("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"tabBox_img"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:(e.cart_info.productInfo.attrInfo||e.cart_info.productInfo).image,expression:"\n              val.cart_info.productInfo.attrInfo\n                ? val.cart_info.productInfo.attrInfo.image\n                : val.cart_info.productInfo.image\n            "}]})]),r("span",{staticClass:"tabBox_tit"},[t._v("\n          "+t._s(e.cart_info.productInfo.store_name+" | ")+t._s(e.cart_info.productInfo.attrInfo?e.cart_info.productInfo.attrInfo.suk:"")+"\n        ")]),r("span",{staticClass:"tabBox_pice"},[t._v(t._s("￥"+e.cart_info.truePrice+" x "+e.cart_info.cart_num))])])}))}},{key:"statusName",fn:function(e){var n=e.row;return e.index,[r("div",{staticClass:"pt5",domProps:{innerHTML:t._s(n.status_name.status_name)}}),r("div",{staticClass:"pictrue-box"},t._l(n.status_name.pics||[],(function(e,i){return n.status_name.pics?r("div",{directives:[{name:"viewer",rawName:"v-viewer"}],key:i},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e,expression:"item"}],staticClass:"pictrue mr10",attrs:{src:e}})]):t._e()})),0)]}},{key:"action",fn:function(e){var n=e.row;return e.index,[1===n._status?r("a",{on:{click:function(e){return t.edit(n)}}},[t._v("编辑")]):t._e(),2!==n._status&&8!==n._status||1!==n.shipping_type||null!==n.pinkStatus&&2!==n.pinkStatus?t._e():r("a",{on:{click:function(e){return t.sendOrder(n)}}},[t._v("发送货")]),4===n._status?r("a",{on:{click:function(e){return t.delivery(n)}}},[t._v("配送信息")]):t._e(),2==n.shipping_type&&0==n.status&&1==n.paid&&0===n.refund_status?r("a",{on:{click:function(e){return t.bindWrite(n)}}},[t._v("立即核销")]):t._e(),2===n._status||8===n._status?r("Divider",{attrs:{type:"vertical"}}):t._e(),8===n._status?r("a",{on:{click:function(e){return t.splitOrderDetail(n)}}},[t._v("查看子订单")]):t._e(),1===n._status||(2===n._status||8===n._status)&&(null===n.pinkStatus||2===n.pinkStatus)||4===n._status||2==n.shipping_type&&0==n.status&&1==n.paid&&0===n.refund_status?r("Divider",{attrs:{type:"vertical"}}):t._e(),[r("Dropdown",{on:{"on-click":function(e){return t.changeMenu(n,e)}}},[r("a",{attrs:{href:"javascript:void(0)"}},[t._v("\n            更多\n            "),r("Icon",{attrs:{type:"ios-arrow-down"}})],1),r("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[r("DropdownItem",{directives:[{name:"show",rawName:"v-show",value:1===n._status&&0===n.paid&&"offline"===n.pay_type,expression:"row._status === 1 && row.paid === 0 && row.pay_type === 'offline'"}],ref:"ones",attrs:{name:"1"}},[t._v("立即支付")]),r("DropdownItem",{attrs:{name:"2"}},[t._v("订单详情")]),r("DropdownItem",{attrs:{name:"3"}},[t._v("订单记录")]),r("DropdownItem",{directives:[{name:"show",rawName:"v-show",value:3<=n._status&&n.express_dump,expression:"row._status >= 3 && row.express_dump"}],attrs:{name:"11"}},[t._v("电子面单打印")]),r("DropdownItem",{directives:[{name:"show",rawName:"v-show",value:2<=n._status,expression:"row._status >= 2"}],attrs:{name:"10"}},[t._v("小票打印")]),r("DropdownItem",{directives:[{name:"show",rawName:"v-show",value:1!==n._status||3===n._status&&0<n.use_integral&&n.use_integral>=n.back_integral,expression:"\n                row._status !== 1 ||\n                (row._status === 3 && row.use_integral > 0 && row.use_integral >= row.back_integral)\n              "}],attrs:{name:"4"}},[t._v("订单备注")]),r("DropdownItem",{directives:[{name:"show",rawName:"v-show",value:4===n._status,expression:"row._status === 4"}],attrs:{name:"8"}},[t._v("已收货")]),1==n.is_del?r("DropdownItem",{attrs:{name:"9"}},[t._v("删除订单")]):t._e()],1)],1)]]}}])}),r("div",{staticClass:"acea-row row-right page"}),r("edit-from",{ref:"edits",attrs:{FromData:t.FromData},on:{submitFail:t.submitFail}}),r("user-details",{ref:"userDetails"}),r("details-from",{ref:"detailss",attrs:{orderDatalist:t.orderDatalist,orderId:t.orderId}}),r("order-remark",{ref:"remarks",attrs:{orderId:t.orderId},on:{submitFail:t.submitFail}}),r("order-record",{ref:"record"}),r("order-send",{ref:"send",attrs:{orderId:t.orderId,status:t.status},on:{submitFail:t.submitFail}})],1)}),[],!1,null,"7ac672ec",null),e.default=d.exports}}]);