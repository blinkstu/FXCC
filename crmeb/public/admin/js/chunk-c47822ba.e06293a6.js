(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-c47822ba"],{1184:function(t,e,r){"use strict";r.d(e,"c",(function(){return n})),r.d(e,"d",(function(){return i})),r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return s})),r.d(e,"g",(function(){return c})),r.d(e,"f",(function(){return l})),r.d(e,"e",(function(){return u})),r("99af");var a=r("6b6c");function n(t){return Object(a.a)({url:"marketing/lottery/list",method:"get",params:t})}function i(t){return Object(a.a)({url:"marketing/lottery/factor_info/".concat(t),method:"get"})}function o(t){return Object(a.a)({url:"marketing/lottery/add",method:"post",data:t})}function s(t,e){return Object(a.a)({url:"marketing/lottery/edit/".concat(t),method:"put",data:e})}function c(t){return Object(a.a)({url:"marketing/lottery/set_status/".concat(t.id,"/").concat(t.status),method:"post"})}function l(t){return Object(a.a)({url:"marketing/lottery/record/list",method:"get",params:t})}function u(t){return Object(a.a)({url:"marketing/lottery/record/deliver",method:"post",data:t})}},"207a":function(t,e,r){"use strict";r.r(e);var a=r("c964"),n=r("f3f3"),i=(r("96cf"),r("a434"),r("2f62")),o=r("1184"),s=r("61f7");n={name:"storeBargain",filters:{formatDate:function(t){if(0!==t)return t=new Date(1e3*t),Object(s.a)(t,"yyyy-MM-dd hh:mm")}},data:function(){return{loading:!1,columns1:[{title:"ID",key:"id",width:80},{title:"活动名称",key:"name",minWidth:90},{title:"活动类型",key:"lottery_type",minWidth:130},{title:"参与次数",key:"lottery_all",minWidth:100},{title:"抽奖人数",key:"lottery_people",minWidth:100},{title:"中奖人数",key:"lottery_win",minWidth:100},{title:"活动状态",key:"status_name",minWidth:100},{title:"上架状态",slot:"status",minWidth:100},{title:"活动时间",slot:"time",minWidth:100},{title:"操作",slot:"action",fixed:"right",minWidth:130}],tableList:[],tableFrom:{start_status:"",status:"",store_name:"",export:0,page:1,factor:"",limit:15},total:0}},computed:Object(n.a)(Object(n.a)({},Object(i.e)("admin/layout",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:80},labelPosition:function(){return this.isMobile?"top":"left"}}),created:function(){this.getList()},methods:{add:function(){this.$router.push({path:"/admin/marketing/lottery/create"})},edit:function(t){this.$router.push({name:"marketing_create",query:{id:t.id}})},copy:function(t){this.$router.push({name:"marketing_create",query:{id:t.id,copy:1}})},del:function(t,e,r){var a=this;e={title:e,num:r,url:"marketing/lottery/del/".concat(t.id),method:"DELETE",ids:""};this.$modalSure(e).then((function(t){a.$Message.success(t.msg),a.tableList.splice(r,1)})).catch((function(t){a.$Message.error(t.msg)}))},getRecording:function(t){this.$router.push({path:"/admin/marketing/lottery/recording_list",query:{id:t.id}})},getList:function(){var t=this;this.loading=!0,this.tableFrom.start_status=this.tableFrom.start_status||"",this.tableFrom.status=this.tableFrom.status||"",Object(o.c)(this.tableFrom).then(function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(r){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=r.data,t.tableList=a.list,t.total=r.data.count,t.loading=!1;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))},pageChange:function(t){this.tableFrom.page=t,this.getList()},userSearchs:function(){this.tableFrom.page=1,this.getList()},onchangeIsShow:function(t){var e=this;t={id:t.id,status:t.status};Object(o.g)(t).then(function(){var t=Object(a.a)(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$Message.success(r.msg),e.getList();case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$Message.error(t.msg),e.getList()}))}}},r("f849"),i=r("2877"),r=Object(i.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"i-layout-page-header"},[r("div",{staticClass:"i-layout-page-header"},[r("span",{staticClass:"ivu-page-header-title"},[t._v(t._s(t.$route.meta.title))])])]),r("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[r("Form",{ref:"tableFrom",attrs:{model:t.tableFrom,"label-width":t.labelWidth,"label-position":t.labelPosition},nativeOn:{submit:function(t){t.preventDefault()}}},[r("Row",{attrs:{type:"flex",gutter:24}},[r("Col",[r("FormItem",{attrs:{label:"活动类型：",clearable:""}},[r("Select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择活动类型",clearable:""},on:{"on-change":t.userSearchs},model:{value:t.tableFrom.factor,callback:function(e){t.$set(t.tableFrom,"factor",e)},expression:"tableFrom.factor"}},[r("Option",{attrs:{value:"1"}},[t._v("积分抽取")]),r("Option",{attrs:{value:"3"}},[t._v("订单支付")]),r("Option",{attrs:{value:"4"}},[t._v("订单评价")])],1)],1)],1),r("Col",[r("FormItem",{attrs:{label:"活动状态：",clearable:""}},[r("Select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择",clearable:""},on:{"on-change":t.userSearchs},model:{value:t.tableFrom.start_status,callback:function(e){t.$set(t.tableFrom,"start_status",e)},expression:"tableFrom.start_status"}},[r("Option",{attrs:{value:"0"}},[t._v("未开始")]),r("Option",{attrs:{value:"1"}},[t._v("进行中")]),r("Option",{attrs:{value:"-1"}},[t._v("已结束")])],1)],1)],1),r("Col",[r("FormItem",{attrs:{label:"上架状态："}},[r("Select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择",clearable:""},on:{"on-change":t.userSearchs},model:{value:t.tableFrom.status,callback:function(e){t.$set(t.tableFrom,"status",e)},expression:"tableFrom.status"}},[r("Option",{attrs:{value:"1"}},[t._v("上架")]),r("Option",{attrs:{value:"0"}},[t._v("下架")])],1)],1)],1),r("Col",[r("FormItem",{attrs:{label:"抽奖搜索：","label-for":"store_name"}},[r("Input",{staticStyle:{width:"200px"},attrs:{search:"","enter-button":"",placeholder:"请输入抽奖名称，ID"},on:{"on-search":t.userSearchs},model:{value:t.tableFrom.store_name,callback:function(e){t.$set(t.tableFrom,"store_name",e)},expression:"tableFrom.store_name"}})],1)],1)],1),r("Row",{staticClass:"mb20",attrs:{type:"flex"}},[r("Button",{directives:[{name:"auth",rawName:"v-auth",value:["marketing-store_bargain-create"],expression:"['marketing-store_bargain-create']"}],staticClass:"mr10",attrs:{type:"primary",icon:"md-add"},on:{click:t.add}},[t._v("添加抽奖")])],1)],1),r("Table",{attrs:{columns:t.columns1,data:t.tableList,loading:t.loading,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:t._u([{key:"is_fail",fn:function(t){var e=t.row;return t.index,[1===e.is_fail?r("Icon",{attrs:{type:"md-checkmark",color:"#0092DC",size:"14"}}):r("Icon",{attrs:{type:"md-close",color:"#ed5565",size:"14"}})]}},{key:"image",fn:function(t){var e=t.row;return t.index,[r("viewer",[r("div",{staticClass:"tabBox_img"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.image,expression:"row.image"}]})])])]}},{key:"bargain_min_price",fn:function(e){var a=e.row;return e.index,[r("span",[t._v(t._s(a.bargain_min_price)+"~"+t._s(a.bargain_max_price))])]}},{key:"status",fn:function(e){var a=e.row;return e.index,[r("i-switch",{attrs:{value:a.status,"true-value":1,"false-value":0,disabled:2==a.lottery_status,size:"large"},on:{"on-change":function(e){return t.onchangeIsShow(a)}},model:{value:a.status,callback:function(e){t.$set(a,"status",e)},expression:"row.status"}},[r("span",{attrs:{slot:"open"},slot:"open"},[t._v("上架")]),r("span",{attrs:{slot:"close"},slot:"close"},[t._v("下架")])])]}},{key:"time",fn:function(e){var a=e.row;return e.index,[r("div",[t._v("起："+t._s(a.start_time||"--"))]),r("div",[t._v("止："+t._s(a.end_time||"--"))])]}},{key:"action",fn:function(e){var a=e.row,n=e.index;return[r("a",{on:{click:function(e){return t.edit(a)}}},[t._v("编辑")]),r("Divider",{attrs:{type:"vertical"}}),r("a",{on:{click:function(e){return t.del(a,"删除抽奖",n)}}},[t._v("删除")]),r("Divider",{attrs:{type:"vertical"}}),r("a",{on:{click:function(e){return t.copy(a)}}},[t._v("复制")]),r("Divider",{attrs:{type:"vertical"}}),r("a",{on:{click:function(e){return t.getRecording(a)}}},[t._v("抽奖记录")])]}}])}),r("div",{staticClass:"acea-row row-right page"},[r("Page",{attrs:{total:t.total,current:t.tableFrom.page,"show-elevator":"","show-total":"","page-size":t.tableFrom.limit},on:{"on-change":t.pageChange}})],1)],1)],1)}),[],!1,null,"2dda54c0",null);e.default=r.exports},"2c3e":function(t,e,r){var a=r("da84"),n=r("83ab"),i=r("9f7f").MISSED_STICKY,o=r("c6b6"),s=r("edd0"),c=r("69f3").get,l=RegExp.prototype,u=a.TypeError;n&&i&&s(l,"sticky",{configurable:!0,get:function(){if(this!==l){if("RegExp"===o(this))return!!c(this).sticky;throw u("Incompatible receiver, RegExp required")}}})},"4d63":function(t,e,r){var a=r("83ab"),n=r("da84"),i=r("e330"),o=r("94ca"),s=r("7156"),c=r("9112"),l=r("241c").f,u=r("3a9b"),d=r("44e7"),f=r("577e"),m=r("90d8"),g=r("9f7f"),h=r("aeb0"),p=r("cb2d"),b=r("d039"),v=r("1a2d"),y=r("69f3").enforce,_=r("2626"),k=r("b622"),x=r("fce3"),w=r("107c"),F=k("match"),O=n.RegExp,S=O.prototype,E=n.SyntaxError,$=i(S.exec),R=i("".charAt),j=i("".replace),C=i("".indexOf),I=i("".slice),M=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,D=/a/g,L=/a/g,W=(r=new O(D)!==D,g.MISSED_STICKY),T=g.UNSUPPORTED_Y;k=a&&(!r||W||x||w||b((function(){return L[F]=!1,O(D)!=D||O(L)==L||"/a/i"!=O(D,"i")})));if(o("RegExp",k)){function q(t,e){var r,a,n=u(S,this),i=d(t),o=void 0===e,l=[],g=t;if(!n&&i&&o&&t.constructor===q)return t;if((i||u(S,t))&&(t=t.source,o&&(e=m(g))),t=void 0===t?"":f(t),e=void 0===e?"":f(e),g=t,i=e=x&&"dotAll"in D&&(r=!!e&&-1<C(e,"s"))?j(e,/s/g,""):e,W&&"sticky"in D&&(a=!!e&&-1<C(e,"y"))&&T&&(e=j(e,/y/g,"")),w&&(t=(o=function(t){for(var e,r=t.length,a=0,n="",i=[],o={},s=!1,c=!1,l=0,u="";a<=r;a++){if("\\"===(e=R(t,a)))e+=R(t,++a);else if("]"===e)s=!1;else if(!s)switch(!0){case"["===e:s=!0;break;case"("===e:$(M,I(t,a+1))&&(a+=2,c=!0),n+=e,l++;continue;case">"===e&&c:if(""===u||v(o,u))throw new E("Invalid capture group name");o[u]=!0,c=!(i[i.length]=[u,l]),u="";continue}c?u+=e:n+=e}return[n,i]}(t))[0],l=o[1]),o=s(O(t,e),n?this:S,q),(r||a||l.length)&&(e=y(o),r&&(e.dotAll=!0,e.raw=q(function(t){for(var e,r=t.length,a=0,n="",i=!1;a<=r;a++)"\\"===(e=R(t,a))?n+=e+R(t,++a):i||"."!==e?("["===e?i=!0:"]"===e&&(i=!1),n+=e):n+="[\\s\\S]";return n}(t),i)),a&&(e.sticky=!0),l.length&&(e.groups=l)),t!==g)try{c(o,"source",""===g?"(?:)":g)}catch(t){}return o}for(var z=l(O),A=0;z.length>A;)h(q,O,z[A++]);(S.constructor=q).prototype=S,p(n,"RegExp",q,{constructor:!0})}_("RegExp")},"61f7":function(t,e,r){"use strict";r.d(e,"a",(function(){return i})),r.d(e,"c",(function(){return c})),r.d(e,"b",(function(){return l}));var a=r("fc11"),n=r("f3f3");function i(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var r,a,n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(r in n)new RegExp("(".concat(r,")")).test(e)&&(a=n[r]+"",e=e.replace(RegExp.$1,1===RegExp.$1.length?a:("00"+a).substr(a.length)));return e}r("ac1f"),r("00b4"),r("5319"),r("4d63"),r("c607"),r("2c3e"),r("25f0"),r("498a"),r("d3b7"),r("b64b"),r("99af");var o={min:"%s最小长度为:min",max:"%s最大长度为:max",length:"%s长度必须为:length",range:"%s长度为:range",pattern:"$s格式错误"};function s(t,e){t.message=function(t){return e.replace("%s",t||"")}}function c(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return Object(n.a)({required:!0,message:t,type:"string"},e)}function l(t){return u.pattern(/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,t)}s(c,"请输入%s"),s(l,"%s格式不正确");var u=Object.keys(o).reduce((function(t,e){return t[e]=function(t){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},o="range"===e?{min:t[0],max:t[1]}:Object(a.a)({},e,t);return Object(n.a)(Object(n.a)({message:r.replace(":".concat(e),"range"===e?"".concat(t[0],"-").concat(t[1]):t),type:"string"},o),i)},s(t[e],o[e]),t}),{})},c607:function(t,e,r){var a=r("da84"),n=r("83ab"),i=r("fce3"),o=r("c6b6"),s=r("edd0"),c=r("69f3").get,l=RegExp.prototype,u=a.TypeError;n&&i&&s(l,"dotAll",{configurable:!0,get:function(){if(this!==l){if("RegExp"===o(this))return!!c(this).dotAll;throw u("Incompatible receiver, RegExp required")}}})},d9cb:function(t,e,r){},edd0:function(t,e,r){var a=r("13d2"),n=r("9bf2");t.exports=function(t,e,r){return r.get&&a(r.get,e,{getter:!0}),r.set&&a(r.set,e,{setter:!0}),n.f(t,e,r)}},f849:function(t,e,r){"use strict";var a=r("d9cb");r.n(a).a}}]);