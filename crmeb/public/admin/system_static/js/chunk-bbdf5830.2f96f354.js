(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-bbdf5830"],{"24f1":function(t,e,r){"use strict";r.r(e);var n=r("0122"),o=r("c964"),a=r("f3f3"),i=(r("a434"),r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("b636"),r("944a"),r("0c47"),r("23dc"),r("3410"),r("d9e2"),r("159b"),r("b0c0"),r("131a"),r("fb6a"),r("2f62")),s=r("b7be"),c=r("61f7");function l(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */l=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(e){u=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var a,i,s,c;e=e&&e.prototype instanceof p?e:p,e=Object.create(e.prototype),n=new k(n||[]);return o(e,"_invoke",{value:(a=t,i=r,s=n,c="suspendedStart",function(t,e){if("executing"===c)throw new Error("Generator is already running");if("completed"===c){if("throw"===t)throw e;return O()}for(s.method=t,s.arg=e;;){var r=s.delegate;if(r&&(r=function t(e,r){var n=r.method,o=e.iterator[n];return void 0===o?(r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=void 0,t(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d):(n=f(o,e.iterator,r.arg),"throw"===n.type?(r.method="throw",r.arg=n.arg,r.delegate=null,d):(o=n.arg,o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,d):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)))}(r,s),r)){if(r===d)continue;return r}if("next"===s.method)s.sent=s._sent=s.arg;else if("throw"===s.method){if("suspendedStart"===c)throw c="completed",s.arg;s.dispatchException(s.arg)}else"return"===s.method&&s.abrupt("return",s.arg);if(c="executing",r=f(a,i,s),"normal"===r.type){if(c=s.done?"completed":"suspendedYield",r.arg===d)continue;return{value:r.arg,done:s.done}}"throw"===r.type&&(c="completed",s.method="throw",s.arg=r.arg)}})}),e}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=h;var d={};function p(){}function m(){}function g(){}a={};var v=(u(a,i,(function(){return this})),Object.getPrototypeOf),b=(v=v&&v(v(L([]))),v&&v!==e&&r.call(v,i)&&(a=v),g.prototype=p.prototype=Object.create(a));function y(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var a;o(this,"_invoke",{value:function(o,i){function s(){return new e((function(a,s){!function o(a,i,s,c){var l;a=f(t[a],t,i);if("throw"!==a.type)return(i=(l=a.arg).value)&&"object"==Object(n.a)(i)&&r.call(i,"__await")?e.resolve(i.__await).then((function(t){o("next",t,s,c)}),(function(t){o("throw",t,s,c)})):e.resolve(i).then((function(t){l.value=t,s(l)}),(function(t){return o("throw",t,s,c)}));c(a.arg)}(o,i,a,s)}))}return a=a?a.then(s,s):s()}})}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function L(t){if(t){var e,n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length))return e=-1,(n=function n(){for(;++e<t.length;)if(r.call(t,e))return n.value=t[e],n.done=!1,n;return n.value=void 0,n.done=!0,n}).next=n}return{next:O}}function O(){return{value:void 0,done:!0}}return o(b,"constructor",{value:m.prototype=g,configurable:!0}),o(g,"constructor",{value:m,configurable:!0}),m.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){return t="function"==typeof t&&t.constructor,!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},y(w.prototype),u(w.prototype,s,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new w(h(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},y(b),u(b,c,"Generator"),u(b,i,(function(){return this})),u(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e,r=Object(t),n=[];for(e in r)n.push(e);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},t.values=L,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;0<=o;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;0<=n;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}var i=(a=a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc?null:a)?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r,n,o=this.tryEntries[e];if(o.tryLoc===t)return"throw"===(r=o.completion).type&&(n=r.arg,x(o)),n}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}a={name:"storeBargain",filters:{formatDate:function(t){if(0!==t)return t=new Date(1e3*t),Object(c.a)(t,"yyyy-MM-dd hh:mm")}},data:function(){return{loading:!1,columns1:[{title:"ID",key:"id",width:80},{title:"预售图片",slot:"image",minWidth:90},{title:"预售名称",key:"title",minWidth:130},{title:"预售价格",key:"price",minWidth:100},{title:"已售商品数",key:"sales",minWidth:100},{title:"限量",key:"quota_show",minWidth:100},{title:"限量剩余",key:"quota",minWidth:100},{title:"活动时间",slot:"stop_time",minWidth:150},{title:"预售状态",slot:"status",minWidth:130},{title:"操作",slot:"action",fixed:"right",minWidth:130}],tableList:[],grid:{xl:7,lg:10,md:12,sm:24,xs:24},tableFrom:{status:"",time_type:0,title:"",page:1,limit:15},tableFrom2:{status:"",store_name:"",export:1},total:0}},computed:Object(a.a)(Object(a.a)({},Object(i.d)("media",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:100},labelPosition:function(){return this.isMobile?"top":"left"}}),created:function(){this.getList()},methods:{add:function(){this.$router.push({path:this.$routeProStr+"/marketing/presell/create/0"})},exports:function(){var t=this,e=this.tableFrom;e={status:e.status,store_name:e.store_name};Object(s.pb)(e).then((function(t){location.href=t.data[0]})).catch((function(e){t.$Message.error(e.msg)}))},edit:function(t){this.$router.push({path:this.$routeProStr+"/marketing/presell/create/"+t.id+"/0"})},copy:function(t){this.$router.push({path:this.$routeProStr+"/marketing/presell/create/"+t.id+"/1"})},del:function(t,e,r){var n=this;e={title:e,num:r,url:"marketing/advance/".concat(t.id),method:"DELETE",ids:""};this.$modalSure(e).then((function(t){n.$Message.success(t.msg),n.tableList.splice(r,1)})).catch((function(t){n.$Message.error(t.msg)}))},getList:function(){var t=this;this.loading=!0,this.tableFrom.status=this.tableFrom.status||"",Object(s.db)(this.tableFrom).then(function(){var e=Object(o.a)(l().mark((function e(r){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=r.data,t.tableList=n.list,t.total=r.data.count,t.loading=!1;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))},pageChange:function(t){this.tableFrom.page=t,this.getList()},userSearchs:function(){this.tableFrom.page=1,this.getList()},onchangeIsShow:function(t){var e=this;t={id:t.id,status:t.status};Object(s.a)(t).then(function(){var t=Object(o.a)(l().mark((function t(r){return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.getList(),e.$Message.success(r.msg);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$Message.error(t.msg)}))}}},r("c1a4"),i=r("2877"),r=Object(i.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[r("Form",{ref:"tableFrom",attrs:{model:t.tableFrom,"label-width":t.labelWidth,"label-position":t.labelPosition},nativeOn:{submit:function(t){t.preventDefault()}}},[r("Row",{attrs:{type:"flex",gutter:24}},[r("Col",t._b({},"Col",t.grid,!1),[r("FormItem",{attrs:{label:"预售活动状态："}},[r("Select",{attrs:{placeholder:"请选择活动状态",clearable:""},on:{"on-change":t.userSearchs},model:{value:t.tableFrom.time_type,callback:function(e){t.$set(t.tableFrom,"time_type",e)},expression:"tableFrom.time_type"}},[r("Option",{attrs:{value:"0"}},[t._v("全部")]),r("Option",{attrs:{value:"1"}},[t._v("未开始")]),r("Option",{attrs:{value:"2"}},[t._v("正在进行")]),r("Option",{attrs:{value:"3"}},[t._v("已结束")])],1)],1)],1),r("Col",t._b({},"Col",t.grid,!1),[r("FormItem",{attrs:{label:"预售商品状态："}},[r("Select",{attrs:{placeholder:"请选择商品状态",clearable:""},on:{"on-change":t.userSearchs},model:{value:t.tableFrom.status,callback:function(e){t.$set(t.tableFrom,"status",e)},expression:"tableFrom.status"}},[r("Option",{attrs:{value:""}},[t._v("全部")]),r("Option",{attrs:{value:"1"}},[t._v("上架")]),r("Option",{attrs:{value:"0"}},[t._v("下架")])],1)],1)],1),r("Col",t._b({},"Col",t.grid,!1),[r("FormItem",{attrs:{label:"商品搜索：","label-for":"title"}},[r("Input",{attrs:{search:"","enter-button":"",placeholder:"请输入商品名称/ID"},on:{"on-search":t.userSearchs},model:{value:t.tableFrom.title,callback:function(e){t.$set(t.tableFrom,"title",e)},expression:"tableFrom.title"}})],1)],1)],1),r("Row",{staticClass:"mb20",attrs:{type:"flex"}},[r("Col",t._b({},"Col",t.grid,!1),[r("Button",{directives:[{name:"auth",rawName:"v-auth",value:["marketing-store_bargain-create"],expression:"['marketing-store_bargain-create']"}],staticClass:"mr10",attrs:{type:"primary",icon:"md-add"},on:{click:t.add}},[t._v("添加预售商品")])],1)],1)],1),r("Table",{attrs:{columns:t.columns1,data:t.tableList,loading:t.loading,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:t._u([{key:"is_fail",fn:function(t){var e=t.row;return t.index,[1===e.is_fail?r("Icon",{attrs:{type:"md-checkmark",color:"#0092DC",size:"14"}}):r("Icon",{attrs:{type:"md-close",color:"#ed5565",size:"14"}})]}},{key:"image",fn:function(t){var e=t.row;return t.index,[r("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"tabBox_img"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.image,expression:"row.image"}]})])]}},{key:"bargain_min_price",fn:function(e){var n=e.row;return e.index,[r("span",[t._v(t._s(n.bargain_min_price)+"~"+t._s(n.bargain_max_price))])]}},{key:"stop_time",fn:function(e){var n=e.row;return e.index,[r("div",[t._v("起: "+t._s(t._f("formatDate")(n.start_time)))]),r("div",[t._v("止: "+t._s(t._f("formatDate")(n.stop_time)))])]}},{key:"status",fn:function(e){var n=e.row;return e.index,[r("i-switch",{attrs:{value:n.status,"true-value":1,"false-value":0,size:"large"},on:{"on-change":function(e){return t.onchangeIsShow(n)}},model:{value:n.status,callback:function(e){t.$set(n,"status",e)},expression:"row.status"}},[r("span",{attrs:{slot:"open"},slot:"open"},[t._v("上架")]),r("span",{attrs:{slot:"close"},slot:"close"},[t._v("下架")])])]}},{key:"action",fn:function(e){var n=e.row,o=e.index;return[r("a",{on:{click:function(e){return t.edit(n)}}},[t._v("编辑")]),0===n.stop_status?r("Divider",{attrs:{type:"vertical"}}):t._e(),r("Divider",{attrs:{type:"vertical"}}),r("a",{on:{click:function(e){return t.del(n,"删除预售商品",o)}}},[t._v("删除")])]}}])}),r("div",{staticClass:"acea-row row-right page"},[r("Page",{attrs:{total:t.total,current:t.tableFrom.page,"show-elevator":"","show-total":"","page-size":t.tableFrom.limit},on:{"on-change":t.pageChange}})],1)],1)],1)}),[],!1,null,"f5596a48",null),e.default=r.exports},"61f7":function(t,e,r){"use strict";r.d(e,"a",(function(){return a})),r.d(e,"c",(function(){return c})),r.d(e,"b",(function(){return l}));var n=r("fc11"),o=r("f3f3");function a(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var r,n,o={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(r in o)new RegExp("(".concat(r,")")).test(e)&&(n=o[r]+"",e=e.replace(RegExp.$1,1===RegExp.$1.length?n:("00"+n).substr(n.length)));return e}r("ac1f"),r("00b4"),r("5319"),r("4d63"),r("c607"),r("2c3e"),r("25f0"),r("498a"),r("d3b7"),r("b64b"),r("99af");var i={min:"%s最小长度为:min",max:"%s最大长度为:max",length:"%s长度必须为:length",range:"%s长度为:range",pattern:"$s格式错误"};function s(t,e){t.message=function(t){return e.replace("%s",t||"")}}function c(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return Object(o.a)({required:!0,message:t,type:"string"},e)}function l(t){return u.pattern(/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,t)}s(c,"请输入%s"),s(l,"%s格式不正确");var u=Object.keys(i).reduce((function(t,e){return t[e]=function(t){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},i="range"===e?{min:t[0],max:t[1]}:Object(n.a)({},e,t);return Object(o.a)(Object(o.a)({message:r.replace(":".concat(e),"range"===e?"".concat(t[0],"-").concat(t[1]):t),type:"string"},i),a)},s(t[e],i[e]),t}),{})},c1a4:function(t,e,r){"use strict";var n=r("c522");r.n(n).a},c522:function(t,e,r){}}]);