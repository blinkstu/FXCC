(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-079229da"],{"28bd":function(t,e,a){"use strict";a.r(e),a("d28b"),a("3ca3"),a("ddb0"),a("b636"),a("944a"),a("0c47"),a("23dc"),a("3410"),a("d9e2"),a("b0c0"),a("131a"),a("fb6a");var r=a("0122"),i=a("d0ff"),o=a("c964"),s=a("f3f3"),n=a("fc11"),l=(a("a4d3"),a("e01a"),a("d3b7"),a("159b"),a("a434"),a("4e82"),a("a9e3"),a("d81d"),a("99af"),a("2f62")),c=a("c4ad"),m=a("a069"),d=a("b0e7"),u=a("b7be"),p=a("c4c8"),f=a("5334");function h(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */h=function(){return t};var t={},e=Object.prototype,a=e.hasOwnProperty,i=Object.defineProperty||function(t,e,a){t[e]=a.value},o="function"==typeof Symbol?Symbol:{},s=o.iterator||"@@iterator",n=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function c(t,e,a){return Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(e){c=function(t,e,a){return t[e]=a}}function m(t,e,a,r){var o,s,n,l;e=e&&e.prototype instanceof p?e:p,e=Object.create(e.prototype),r=new C(r||[]);return i(e,"_invoke",{value:(o=t,s=a,n=r,l="suspendedStart",function(t,e){if("executing"===l)throw new Error("Generator is already running");if("completed"===l){if("throw"===t)throw e;return k()}for(n.method=t,n.arg=e;;){var a=n.delegate;if(a&&(a=function t(e,a){var r=a.method,i=e.iterator[r];return void 0===i?(a.delegate=null,"throw"===r&&e.iterator.return&&(a.method="return",a.arg=void 0,t(e,a),"throw"===a.method)||"return"!==r&&(a.method="throw",a.arg=new TypeError("The iterator does not provide a '"+r+"' method")),u):(r=d(i,e.iterator,a.arg),"throw"===r.type?(a.method="throw",a.arg=r.arg,a.delegate=null,u):(i=r.arg,i?i.done?(a[e.resultName]=i.value,a.next=e.nextLoc,"return"!==a.method&&(a.method="next",a.arg=void 0),a.delegate=null,u):i:(a.method="throw",a.arg=new TypeError("iterator result is not an object"),a.delegate=null,u)))}(a,n),a)){if(a===u)continue;return a}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===l)throw l="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);if(l="executing",a=d(o,s,n),"normal"===a.type){if(l=n.done?"completed":"suspendedYield",a.arg===u)continue;return{value:a.arg,done:n.done}}"throw"===a.type&&(l="completed",n.method="throw",n.arg=a.arg)}})}),e}function d(t,e,a){try{return{type:"normal",arg:t.call(e,a)}}catch(t){return{type:"throw",arg:t}}}t.wrap=m;var u={};function p(){}function f(){}function g(){}o={};var v=(c(o,s,(function(){return this})),Object.getPrototypeOf),b=(v=v&&v(v(x([]))),v&&v!==e&&a.call(v,s)&&(o=v),g.prototype=p.prototype=Object.create(o));function _(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function y(t,e){var o;i(this,"_invoke",{value:function(i,s){function n(){return new e((function(o,n){!function i(o,s,n,l){var c;o=d(t[o],t,s);if("throw"!==o.type)return(s=(c=o.arg).value)&&"object"==Object(r.a)(s)&&a.call(s,"__await")?e.resolve(s.__await).then((function(t){i("next",t,n,l)}),(function(t){i("throw",t,n,l)})):e.resolve(s).then((function(t){c.value=t,n(c)}),(function(t){return i("throw",t,n,l)}));l(o.arg)}(i,s,o,n)}))}return o=o?o.then(n,n):n()}})}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function V(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function x(t){if(t){var e,r=t[s];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length))return e=-1,(r=function r(){for(;++e<t.length;)if(a.call(t,e))return r.value=t[e],r.done=!1,r;return r.value=void 0,r.done=!0,r}).next=r}return{next:k}}function k(){return{value:void 0,done:!0}}return i(b,"constructor",{value:f.prototype=g,configurable:!0}),i(g,"constructor",{value:f,configurable:!0}),f.displayName=c(g,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){return t="function"==typeof t&&t.constructor,!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,l,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},_(y.prototype),c(y.prototype,n,(function(){return this})),t.AsyncIterator=y,t.async=function(e,a,r,i,o){void 0===o&&(o=Promise);var s=new y(m(e,a,r,i),o);return t.isGeneratorFunction(a)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},_(b),c(b,l,"Generator"),c(b,s,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e,a=Object(t),r=[];for(e in a)r.push(e);return r.reverse(),function t(){for(;r.length;){var e=r.pop();if(e in a)return t.value=e,t.done=!1,t}return t.done=!0,t}},t.values=x,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(V),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(a,r){return s.type="throw",s.arg=t,e.next=a,r&&(e.method="next",e.arg=void 0),!!r}for(var i=this.tryEntries.length-1;0<=i;--i){var o=this.tryEntries[i],s=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var n=a.call(o,"catchLoc"),l=a.call(o,"finallyLoc");if(n&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(n){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&a.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}var s=(o=o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc?null:o)?o.completion:{};return s.type=t,s.arg=e,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var a=this.tryEntries[e];if(a.finallyLoc===t)return this.complete(a.completion,a.afterLoc),V(a),u}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var a,r,i=this.tryEntries[e];if(i.tryLoc===t)return"throw"===(a=i.completion).type&&(r=a.arg,V(i)),r}throw new Error("illegal catch attempt")},delegateYield:function(t,e,a){return this.delegate={iterator:x(t),resultName:e,nextLoc:a},"next"===this.method&&(this.arg=void 0),u}},t}c={name:"storeCombinationCreate",components:{goodsList:c.default,uploadPictures:d.a,WangEditor:m.a,freightTemplate:f.a},data:function(){return{submitOpen:!1,spinShow:!1,isChoice:"",current:0,modalPic:!1,grid:{xl:12,lg:20,md:24,sm:24,xs:24},grid2:{xl:8,lg:8,md:12,sm:24,xs:24},gridPic:{xl:6,lg:8,md:12,sm:12,xs:12},gridBtn:{xl:4,lg:8,md:8,sm:8,xs:8},myConfig:{autoHeightEnabled:!1,initialFrameHeight:500,initialFrameWidth:"100%",UEDITOR_HOME_URL:"/UEditor/",serverUrl:""},modals:!1,modal_loading:!1,images:[],templateList:[],columns:[],specsData:[],picTit:"",tableIndex:0,formValidate:Object(n.a)({images:[],info:"",title:"",image:"",unit_name:"",price:0,effective_time:24,stock:1,sales:0,sort:0,postage:0,is_postage:0,is_commission:0,is_host:0,is_show:0,section_time:[],description:"",id:0,product_id:0,people:2,once_num:1,num:1,temp_id:"",attrs:[],items:[],virtual:100,virtualPeople:0,head_commission:0,logistics:["1"],freight:2},"postage",1),ruleValidate:{image:[{required:!0,message:"请选择主图",trigger:"change"}],images:[{required:!0,type:"array",message:"请选择主图",trigger:"change"},{type:"array",min:1,message:"Choose two hobbies at best",trigger:"change"}],title:[{required:!0,message:"请输入拼团名称",trigger:"blur"}],info:[{required:!0,message:"请输入拼团简介",trigger:"blur"}],section_time:[{required:!0,type:"array",message:"请选择活动时间",trigger:"change"}],unit_name:[{required:!0,message:"请输入单位",trigger:"blur"}],price:[{required:!0,type:"number",message:"请输入拼团价",trigger:"blur"}],cost:[{required:!0,type:"number",message:"请输入成本价",trigger:"blur"}],stock:[{required:!0,type:"number",message:"请输入库存",trigger:"blur"}],give_integral:[{required:!0,type:"number",message:"请输入赠送积分",trigger:"blur"}],effective_time:[{required:!0,type:"number",message:"请输入拼团时效(单位 小时)",trigger:"blur"}],people:[{required:!0,type:"number",message:"请输入拼团人数",trigger:"blur"}],num:[{required:!0,type:"number",message:"请输入购买数量限制",trigger:"blur"}],once_num:[{required:!0,type:"number",message:"请输入单次购买数量限制",trigger:"blur"}],virtualPeople:[{required:!0,type:"number",message:"请输入虚拟成团补齐人数",trigger:"blur"}],temp_id:[{required:!0,message:"请选择运费模板",trigger:"change",type:"number"}]},copy:0,description:""}},computed:Object(s.a)(Object(s.a)({},Object(l.d)("media",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:155},labelPosition:function(){return this.isMobile?"top":"right"}}),mounted:function(){this.$route.params.id&&(this.copy=this.$route.params.copy,this.current=1,this.getInfo()),this.productGetTemplate()},methods:{changePrice:function(t,e){this.$set(this.specsData[e],"price",t)},getEditorContent:function(t){this.description=t},freight:function(){this.$refs.template.id=0,this.$refs.template.isTemplate=!0},productAttrs:function(t){var e=this;Object(u.eb)(t.id,3).then((function(t){t=t.data.info,e.specsData=t.attrs,e.specsData.forEach((function(t,a){e.$set(e.specsData[a],"id",a)})),e.formValidate.items=t.items,e.columns=t.header,e.columns.unshift({type:"selection",width:60,align:"center"}),e.inputChange(t)})).catch((function(t){e.$Message.error(t.msg)}))},inputChange:function(t){var e=this,a=[];t.header.forEach((function(t,e){1===t.type&&a.push({index:e,key:t.key,title:t.title})})),a.forEach((function(t,a){var r=t.title,i=t.key;e.columns.splice(t.index,1,{title:r,key:i,align:"center",minWidth:100,render:function(t,a){return t("div",[t("InputNumber",{props:{min:1,precision:0,value:a.row.quota},on:{"on-change":function(t){a.row.quota=t,e.specsData[a.index]=a.row,e.formValidate.attrs&&e.formValidate.attrs.length&&e.formValidate.attrs.forEach((function(t,r){t.id===a.row.id&&e.formValidate.attrs.splice(r,1,a.row)}))}}})])}})}))},changeCheckbox:function(t){this.formValidate.attrs=t},productGetTemplate:function(){var t=this;Object(p.v)().then((function(e){t.templateList=e.data}))},validate:function(t,e,a){!1===e&&this.$Message.error(a)},getProductId:function(t){var e=this;this.modal_loading=!1,this.modals=!1,setTimeout((function(){var a;e.formValidate=(a={images:t.slider_image,info:t.store_info,title:t.store_name,image:t.image,unit_name:t.unit_name,price:0,effective_time:24,stock:t.stock,sales:t.sales,sort:t.sort,postage:t.postage,is_postage:t.is_postage,is_commission:0,is_host:t.is_hot,is_show:0,section_time:[],description:t.description,id:0,people:2,num:1,once_num:1,product_id:t.id,temp_id:t.temp_id,virtual:100,virtualPeople:0,logistics:t.logistics,freight:t.freight},Object(n.a)(a,"postage",t.postage),Object(n.a)(a,"custom_form",t.custom_form),Object(n.a)(a,"virtual_type",t.virtual_type),Object(n.a)(a,"head_commission",0),a),e.productAttrs(t)}),500)},cancel:function(){this.modals=!1},onchangeTime:function(t){this.formValidate.section_time=t},getInfo:function(){var t=this;this.spinShow=!0,Object(u.i)(this.$route.params.id).then(function(){var e=Object(o.a)(h().mark((function e(a){var r,i,o,s,n;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n in r=t,i=a.data.info,o={type:"selection",width:60,align:"center"},t.formValidate=i,t.formValidate.virtualPeople=parseInt(t.formValidate.people-t.formValidate.people*(t.formValidate.virtual/100)),t.$set(t.formValidate,"items",i.attrs.items),t.columns=i.attrs.header,t.columns.unshift(o),t.specsData=i.attrs.value,r.specsData.forEach((function(t,e){r.$set(r.specsData[e],"id",e)})),o=i.attrs,s=[],i.attrs.value)i.attrs.value[n]._checked&&s.push(i.attrs.value[n]);r.formValidate.attrs=s,r.inputChange(o),t.spinShow=!1;case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.spinShow=!1,t.$Message.error(e.msg)}))},next:function(t){var e=this,a=this;2===this.current?(this.formValidate.description=this.description,this.$refs[t].validate((function(t){if(!t)return!1;1==e.copy&&(e.formValidate.copy=1),e.formValidate.id=Number(e.$route.params.id)||0,e.submitOpen=!0,e.formValidate.virtual=parseInt((e.formValidate.people-e.formValidate.virtualPeople)/e.formValidate.people*100),Object(u.h)(e.formValidate).then(function(){var t=Object(o.a)(h().mark((function t(a){return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.submitOpen=!1,e.$Message.success(a.msg),setTimeout((function(){e.$router.push({path:e.$routeProStr+"/marketing/store_combination/index"})}),500);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.submitOpen=!1,e.$Message.error(t.msg)}))}))):1===this.current?this.$refs[t].validate((function(t){if(!t)return e.$Message.warning("请完善您的信息");if(a.formValidate.people<2)return a.$Message.error("拼团人数必须大于2");if(a.formValidate.num<0)return a.$Message.error("购买数量限制必须大于0");if(a.formValidate.once_num<0)return a.$Message.error("单次购买数量限制必须大于0");if(!a.formValidate.attrs)return a.$Message.error("请选择属性规格");for(var r in a.formValidate.attrs){if(a.formValidate.attrs[r].quota<=0)return a.$Message.error("拼团限量必须大于0");if(e.formValidate.attrs[r].quota>e.formValidate.attrs[r].stock)return e.$Message.error("拼团限量不能超过规格库存")}e.current+=1})):this.formValidate.image?this.current+=1:this.$Message.warning("请选择商品")},step:function(){this.current--},getContent:function(t){this.formValidate.description=t},modalPicTap:function(t,e,a){this.modalPic=!0,this.isChoice="dan"===t?"单选":"多选",this.picTit=e,this.tableIndex=a},getPic:function(t){"danFrom"===this.picTit?this.formValidate.image=t.att_dir:(this.formValidate.attrs&&this.formValidate.attrs.length&&this.$set(this.specsData[this.tableIndex],"_checked",!0),this.specsData[this.tableIndex].pic=t.att_dir),this.modalPic=!1},getPicD:function(t){var e=this;this.images=t,this.images.map((function(t){e.formValidate.images.push(t.att_dir),e.formValidate.images=e.formValidate.images.splice(0,10)})),this.modalPic=!1},handleRemove:function(t){this.images.splice(t,1),this.formValidate.images.splice(t,1)},changeGoods:function(){this.modals=!0,this.$refs.goodslist.formValidate.is_presale=0,this.$refs.goodslist.formValidate.is_virtual=0,this.$refs.goodslist.getList(),this.$refs.goodslist.goodsCategory()},handleDragStart:function(t,e){this.dragging=e},handleDragEnd:function(t,e){this.dragging=null},handleDragOver:function(t){t.dataTransfer.dropEffect="move"},handleDragEnter:function(t,e){var a;t.dataTransfer.effectAllowed="move",e!==this.dragging&&(a=(t=Object(i.a)(this.formValidate.images)).indexOf(this.dragging),e=t.indexOf(e),t.splice.apply(t,[e,0].concat(Object(i.a)(t.splice(a,1)))),this.formValidate.images=t)}}},a("fc66"),d=a("2877"),m=Object(d.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"i-layout-page-header header-title"},[a("div",{staticClass:"fl_header"},[a("router-link",{attrs:{to:{path:t.$routeProStr+"/marketing/store_combination/index"}}},[a("Button",{attrs:{icon:"ios-arrow-back",size:"small",type:"text"}},[t._v("返回")])],1),a("Divider",{attrs:{type:"vertical"}}),a("span",{staticClass:"ivu-page-header-title mr20",staticStyle:{padding:"0"},domProps:{textContent:t._s(t.$route.params.id?"编辑拼团商品":"添加拼团商品")}})],1)]),a("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[a("Row",{staticClass:"mt30 acea-row row-middle row-center",attrs:{type:"flex"}},[a("Col",{attrs:{span:"20"}},[a("Steps",{attrs:{current:t.current}},[a("Step",{attrs:{title:"选择拼团商品"}}),a("Step",{attrs:{title:"填写基础信息"}}),a("Step",{attrs:{title:"修改商品详情"}})],1)],1),a("Col",{attrs:{span:"23"}},[a("Form",{ref:"formValidate",staticClass:"form mt30",attrs:{model:t.formValidate,rules:t.ruleValidate,"label-width":t.labelWidth,"label-position":t.labelPosition},on:{"on-validate":t.validate},nativeOn:{submit:function(t){t.preventDefault()}}},[0===t.current?a("FormItem",{attrs:{label:"选择商品：",prop:"image_input"}},[a("div",{staticClass:"picBox",on:{click:t.changeGoods}},[t.formValidate.image?a("div",{staticClass:"pictrue"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.formValidate.image,expression:"formValidate.image"}]})]):a("div",{staticClass:"upLoad acea-row row-center-wrapper"},[a("Icon",{attrs:{type:"ios-camera-outline",size:"26"}})],1)])]):t._e(),a("Row",{directives:[{name:"show",rawName:"v-show",value:1===t.current,expression:"current === 1"}],attrs:{type:"flex"}},[a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"商品主图：",prop:"image"}},[a("div",{staticClass:"picBox",on:{click:function(e){return t.modalPicTap("dan","danFrom")}}},[t.formValidate.image?a("div",{staticClass:"pictrue"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.formValidate.image,expression:"formValidate.image"}]})]):a("div",{staticClass:"upLoad acea-row row-center-wrapper"},[a("Icon",{attrs:{type:"ios-camera-outline",size:"26"}})],1)])])],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"商品轮播图：",prop:"images"}},[a("div",{staticClass:"acea-row"},[t._l(t.formValidate.images,(function(e,r){return a("div",{key:r,staticClass:"pictrue",attrs:{draggable:"true"},on:{dragstart:function(a){return t.handleDragStart(a,e)},dragover:function(a){return a.preventDefault(),t.handleDragOver(a,e)},dragenter:function(a){return t.handleDragEnter(a,e)},dragend:function(a){return t.handleDragEnd(a,e)}}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e,expression:"item"}]}),a("Button",{staticClass:"btndel",attrs:{shape:"circle",icon:"md-close"},nativeOn:{click:function(e){return t.handleRemove(r)}}})],1)})),t.formValidate.images.length<10?a("div",{staticClass:"upLoad acea-row row-center-wrapper",on:{click:function(e){return t.modalPicTap("duo")}}},[a("Icon",{attrs:{type:"ios-camera-outline",size:"26"}})],1):t._e()],2)])],1),a("Col",{attrs:{span:"24"}},[a("Col",t._b({},"Col",t.grid,!1),[a("FormItem",{attrs:{label:"拼团名称：",prop:"title","label-for":"title"}},[a("Input",{attrs:{placeholder:"请输入拼团名称","element-id":"title"},model:{value:t.formValidate.title,callback:function(e){t.$set(t.formValidate,"title",e)},expression:"formValidate.title"}})],1)],1)],1),a("Col",{attrs:{span:"24"}},[a("Col",t._b({},"Col",t.grid,!1),[a("FormItem",{attrs:{label:"拼团简介：",prop:"info","label-for":"info"}},[a("Input",{attrs:{placeholder:"请输入拼团简介",type:"textarea",rows:4,"element-id":"info"},model:{value:t.formValidate.info,callback:function(e){t.$set(t.formValidate,"info",e)},expression:"formValidate.info"}})],1)],1)],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"拼团时间：",prop:"section_time"}},[a("div",{staticClass:"acea-row row-middle"},[a("DatePicker",{staticClass:"perW30",attrs:{editable:!1,type:"datetimerange",format:"yyyy-MM-dd HH:mm",placeholder:"请选择活动时间",value:t.formValidate.section_time},on:{"on-change":t.onchangeTime},model:{value:t.formValidate.section_time,callback:function(e){t.$set(t.formValidate,"section_time",e)},expression:"formValidate.section_time"}}),a("div",{staticClass:"ml10 grey"},[t._v("设置活动开启结束时间，用户可以在设置时间内发起参与拼团")])],1)])],1),0==t.formValidate.virtual_type?a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"物流方式：",prop:"logistics"}},[a("CheckboxGroup",{model:{value:t.formValidate.logistics,callback:function(e){t.$set(t.formValidate,"logistics",e)},expression:"formValidate.logistics"}},[a("Checkbox",{attrs:{label:"1"}},[t._v("快递")]),a("Checkbox",{attrs:{label:"2"}},[t._v("到店核销")])],1)],1)],1):t._e(),0==t.formValidate.virtual_type?a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"运费设置：",prop:1!=t.formValidate.freight?"freight":""}},[a("RadioGroup",{model:{value:t.formValidate.freight,callback:function(e){t.$set(t.formValidate,"freight",e)},expression:"formValidate.freight"}},[a("Radio",{attrs:{label:2}},[t._v("固定邮费")]),a("Radio",{attrs:{label:3}},[t._v("运费模板")])],1)],1)],1):t._e(),3!=t.formValidate.freight&&1!=t.formValidate.freight&&0==t.formValidate.virtual_type?a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:""}},[a("div",{staticClass:"acea-row"},[a("InputNumber",{staticClass:"perW20 maxW",attrs:{min:"0.01",max:"10000",placeholder:"请输入金额"},model:{value:t.formValidate.postage,callback:function(e){t.$set(t.formValidate,"postage",e)},expression:"formValidate.postage"}})],1)])],1):t._e(),3==t.formValidate.freight&&0==t.formValidate.virtual_type?a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"",prop:"temp_id"}},[a("div",{staticClass:"acea-row"},[a("Select",{staticClass:"perW20 maxW",attrs:{clearable:"",placeholder:"请选择运费模板"},model:{value:t.formValidate.temp_id,callback:function(e){t.$set(t.formValidate,"temp_id",e)},expression:"formValidate.temp_id"}},t._l(t.templateList,(function(e,r){return a("Option",{key:r,attrs:{value:e.id}},[t._v(t._s(e.name))])})),1),a("span",{staticClass:"addfont",on:{click:t.freight}},[t._v("新增运费模板")])],1)])],1):t._e(),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"拼团时效(单位 小时)：",prop:"effective_time"}},[a("div",{staticClass:"acea-row row-middle"},[a("InputNumber",{staticClass:"perW20",attrs:{placeholder:"请输入拼团时效(单位 小时)","element-id":"effective_time"},model:{value:t.formValidate.effective_time,callback:function(e){t.$set(t.formValidate,"effective_time",e)},expression:"formValidate.effective_time"}}),a("div",{staticClass:"ml10 grey"},[t._v("\n                    用户发起拼团后开始计时，需在设置时间内邀请到规定好友人数参团，超过时效时间，则系统判定拼团失败，自动发起退款\n                  ")])],1)])],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"拼团人数：",prop:"people"}},[a("div",{staticClass:"acea-row row-middle"},[a("InputNumber",{staticClass:"perW20",attrs:{min:2,max:1e4,placeholder:"请输入拼团人数",precision:0,"element-id":"people"},model:{value:t.formValidate.people,callback:function(e){t.$set(t.formValidate,"people",e)},expression:"formValidate.people"}}),a("div",{staticClass:"ml10 grey"},[t._v("单次拼团需要参与的用户数")])],1)])],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"虚拟成团补齐人数：",prop:"virtualPeople"}},[a("div",{staticClass:"acea-row row-middle"},[a("InputNumber",{staticClass:"perW20",attrs:{placeholder:"设置虚拟成团的补齐人数",precision:0,max:1e4,min:0,"element-id":"virtualPeople"},model:{value:t.formValidate.virtualPeople,callback:function(e){t.$set(t.formValidate,"virtualPeople",e)},expression:"formValidate.virtualPeople"}}),a("div",{staticClass:"ml10 grey"},[t._v("\n                    设置虚拟成团的补齐人数，如：5人团设置补齐2人，当团队成员大于等于3人时，拼团结束时自动补齐剩余最多2个位置，不开启虚拟成团请设置为0\n                  ")])],1)])],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"总购买数量限制：",prop:"num"}},[a("div",{staticClass:"acea-row row-middle"},[a("InputNumber",{staticClass:"perW20",attrs:{min:1,placeholder:"请输入总数量限制",precision:0,max:1e4,"element-id":"num"},model:{value:t.formValidate.num,callback:function(e){t.$set(t.formValidate,"num",e)},expression:"formValidate.num"}}),a("div",{staticClass:"ml10 grey"},[t._v("\n                    该商品活动期间内，用户可购买的最大数量。例如设置为4，表示本次活动有效期内，每个用户最多可购买4件\n                  ")])],1)])],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"单次购买数量限制：",prop:"once_num"}},[a("div",{staticClass:"acea-row row-middle"},[a("InputNumber",{staticClass:"perW20",attrs:{min:1,placeholder:"请输入单次购买数量限制",precision:0,max:1e4,"element-id":"once_num"},model:{value:t.formValidate.once_num,callback:function(e){t.$set(t.formValidate,"once_num",e)},expression:"formValidate.once_num"}}),a("div",{staticClass:"ml10 grey"},[t._v("\n                    用户参与拼团时，一次购买最大数量限制。例如设置为2，表示每次参与拼团时，用户一次购买数量最大可选择2个\n                  ")])],1)])],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"单位：",prop:"unit_name","label-for":"unit_name"}},[a("Input",{staticClass:"perW20",attrs:{placeholder:"请输入单位","element-id":"unit_name"},model:{value:t.formValidate.unit_name,callback:function(e){t.$set(t.formValidate,"unit_name",e)},expression:"formValidate.unit_name"}})],1)],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"团长返佣比例：",prop:"head_commission"}},[a("div",{staticClass:"acea-row row-middle"},[a("InputNumber",{staticClass:"perW20",attrs:{min:0,max:100,placeholder:"团长返佣比例",precision:0,"element-id":"head_commission"},model:{value:t.formValidate.head_commission,callback:function(e){t.$set(t.formValidate,"head_commission",e)},expression:"formValidate.head_commission"}}),a("div",{staticClass:"ml10 grey"},[t._v("\n                    拼团成功后，如果团长是分销员，则在订单确认收货时会给团长返一定的佣金，佣金比例是实际支付金额的0-100%\n                  ")])],1)])],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"拼团是否参与分销：",props:"is_commission","label-for":"is_commission"}},[a("div",{staticClass:"acea-row row-middle"},[a("RadioGroup",{attrs:{"element-id":"is_commission"},model:{value:t.formValidate.is_commission,callback:function(e){t.$set(t.formValidate,"is_commission",e)},expression:"formValidate.is_commission"}},[a("Radio",{staticClass:"radio",attrs:{label:1}},[t._v("开启")]),a("Radio",{attrs:{label:0}},[t._v("关闭")])],1),a("div",{staticClass:"ml10 grey"},[t._v("拼团商品是否参与商城分销返佣")])],1)])],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"排序："}},[a("InputNumber",{staticClass:"perW10",attrs:{placeholder:"请输入排序","element-id":"sort",precision:0,max:1e4,min:0},model:{value:t.formValidate.sort,callback:function(e){t.$set(t.formValidate,"sort",e)},expression:"formValidate.sort"}})],1)],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"热门推荐：",props:"is_hot","label-for":"is_hot"}},[a("RadioGroup",{attrs:{"element-id":"is_hot"},model:{value:t.formValidate.is_host,callback:function(e){t.$set(t.formValidate,"is_host",e)},expression:"formValidate.is_host"}},[a("Radio",{staticClass:"radio",attrs:{label:1}},[t._v("开启")]),a("Radio",{attrs:{label:0}},[t._v("关闭")])],1)],1)],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"活动状态：",props:"is_show","label-for":"is_show"}},[a("RadioGroup",{attrs:{"element-id":"status"},model:{value:t.formValidate.is_show,callback:function(e){t.$set(t.formValidate,"is_show",e)},expression:"formValidate.is_show"}},[a("Radio",{staticClass:"radio",attrs:{label:1}},[t._v("开启")]),a("Radio",{attrs:{label:0}},[t._v("关闭")])],1)],1)],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"规格选择："}},[a("Table",{attrs:{data:t.specsData,columns:t.columns,border:""},on:{"on-selection-change":t.changeCheckbox},scopedSlots:t._u([{key:"price",fn:function(e){var r=e.row,i=e.index;return[a("InputNumber",{staticClass:"priceBox",attrs:{min:0,precision:2,"active-change":!1},on:{"on-change":function(e){t.changePrice(e,i)}},model:{value:r.price,callback:function(e){t.$set(r,"price",e)},expression:"row.price"}})]}},{key:"pic",fn:function(e){var r=e.row,i=e.index;return[a("div",{staticClass:"acea-row row-middle row-center-wrapper",on:{click:function(e){return t.modalPicTap("dan","danTable",i)}}},[r.pic?a("div",{staticClass:"pictrue pictrueTab"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:r.pic,expression:"row.pic"}]})]):a("div",{staticClass:"upLoad pictrueTab acea-row row-center-wrapper"},[a("Icon",{attrs:{type:"ios-camera-outline",size:"21"}})],1)])]}}])})],1)],1)],1),a("Row",{directives:[{name:"show",rawName:"v-show",value:2===t.current,expression:"current === 2"}]},[a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"内容："}},[a("WangEditor",{staticStyle:{width:"90%"},attrs:{content:t.formValidate.description},on:{editorContent:t.getEditorContent}})],1)],1)],1),a("FormItem",[a("Button",{directives:[{name:"show",rawName:"v-show",value:0!==t.current,expression:"current !== 0"}],staticClass:"submission mr15",attrs:{disabled:t.$route.params.id&&1===t.current},on:{click:t.step}},[t._v("上一步")]),a("Button",{staticClass:"submission",attrs:{type:"primary",disabled:t.submitOpen&&2===t.current},domProps:{textContent:t._s(2===t.current?"提交":"下一步")},on:{click:function(e){return t.next("formValidate")}}})],1)],1),t.spinShow?a("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)],1)],1),a("Modal",{staticClass:"paymentFooter",attrs:{title:"商品列表",footerHide:"",scrollable:"",width:"900"},on:{"on-cancel":t.cancel},model:{value:t.modals,callback:function(e){t.modals=e},expression:"modals"}},[a("goods-list",{ref:"goodslist",on:{getProductId:t.getProductId}})],1),a("Modal",{attrs:{width:"950px",scrollable:"","footer-hide":"",closable:"",title:"上传商品图","mask-closable":!1,"z-index":888},model:{value:t.modalPic,callback:function(e){t.modalPic=e},expression:"modalPic"}},[t.modalPic?a("uploadPictures",{attrs:{isChoice:t.isChoice,gridBtn:t.gridBtn,gridPic:t.gridPic},on:{getPic:t.getPic,getPicD:t.getPicD}}):t._e()],1),a("freight-template",{ref:"template",on:{addSuccess:t.productGetTemplate}})],1)}),[],!1,null,"8109b8f8",null),e.default=m.exports},"67c8":function(t,e,a){},fc66:function(t,e,a){"use strict";var r=a("67c8");a.n(r).a}}]);