(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-44c7b1e0"],{"04d1":function(t,e,a){a=a("342f").match(/firefox\/(\d+)/i),t.exports=!!a&&+a[1]},"38aa":function(t,e,a){"use strict";var i=a("7946");a.n(i).a},"4e82":function(t,e,a){"use strict";var i=a("23e7"),r=a("e330"),o=a("59ed"),s=a("7b0b"),n=a("07fa"),c=a("577e"),m=a("d039"),u=a("addb"),l=a("a640"),d=a("04d1"),f=a("d998"),p=a("2d00"),_=a("512c"),h=[],v=r(h.sort),D=r(h.push),b=(a=m((function(){h.sort(void 0)})),r=m((function(){h.sort(null)})),l=l("sort"),!m((function(){if(p)return p<70;if(!(d&&3<d)){if(f)return!0;if(_)return _<603;for(var t,e,a,i="",r=65;r<76;r++){switch(t=String.fromCharCode(r),r){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(a=0;a<47;a++)h.push({k:t+a,v:e})}for(h.sort((function(t,e){return e.v-t.v})),a=0;a<h.length;a++)t=h[a].k.charAt(0),i.charAt(i.length-1)!==t&&(i+=t);return"DGBEFHACIJK"!==i}})));i({target:"Array",proto:!0,forced:a||!r||!l||!b},{sort:function(t){void 0!==t&&o(t);var e=s(this);if(b)return void 0===t?v(e):v(e,t);for(var a,i,r=[],m=n(e),l=0;l<m;l++)l in e&&D(r,e[l]);for(u(r,(i=t,function(t,e){return void 0===e?-1:void 0===t?1:void 0!==i?+i(t,e)||0:c(t)>c(e)?1:-1})),a=r.length,l=0;l<a;)e[l]=r[l++];for(;l<m;)delete e[l++];return e}})},"512c":function(t,e,a){a=a("342f").match(/AppleWebKit\/(\d+)\./),t.exports=!!a&&+a[1]},"6da28":function(t,e,a){"use strict";a.r(e);var i=a("c964"),r=a("f3f3"),o=(a("96cf"),a("d3b7"),a("159b"),a("99af"),a("4e82"),a("4ec9"),a("3ca3"),a("ddb0"),a("4de4"),a("a434"),a("2f62")),s=a("c4ad"),n=a("b7be");s={name:"storeCouponCreate",components:{goodsList:s.default},data:function(){return{disabled:!1,formData:{coupon_title:"",coupon_price:0,type:0,use_min_price:0,coupon_time:1,start_use_time:0,end_use_time:0,start_time:0,end_time:0,receive_type:1,is_permanent:1,total_count:1,sort:0,status:1,product_id:"",category_id:0,receive_limit:1},categoryList:[],productList:[],isMinPrice:0,isCouponTime:1,isReceiveTime:0,modals:!1,datetime1:[],datetime2:[]}},computed:Object(r.a)({},Object(o.e)("media",["isMobile"])),created:function(){this.getCategoryList(),this.$route.params.id&&this.getCouponDetail()},methods:{getCategoryList:function(){var t=this;Object(n.m)(1).then(function(){var e=Object(i.a)(regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.data.forEach((function(t){t.cate_name="".concat(t.html).concat(t.cate_name)})),t.categoryList=a.data;case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},getCouponDetail:function(){var t=this;Object(n.o)(this.$route.params.id).then((function(e){e=e.data,t.formData.coupon_title=e.coupon_title,t.formData.type=e.type,t.formData.category_id=e.category_id,t.formData.coupon_price=parseFloat(e.coupon_price),t.formData.use_min_price=parseFloat(e.use_min_price),t.formData.use_min_price&&(t.isMinPrice=1),t.formData.coupon_time=e.coupon_time,t.formData.receive_type=e.receive_type,t.formData.is_permanent=e.is_permanent,t.formData.status=e.status,t.formData.product_id=e.product_id,t.formData.start_time=e.start_time,t.formData.end_time=e.end_time,t.formData.total_count=e.total_count,t.formData.sort=e.sort,t.formData.receive_limit=e.receive_limit,"productInfo"in e&&(t.productList=e.productInfo),e.coupon_time||(t.isCouponTime=0,t.datetime1=[1e3*e.start_use_time,1e3*e.end_use_time],t.formData.start_use_time=t.makeDate(1e3*e.start_use_time),t.formData.end_use_time=t.makeDate(1e3*e.end_use_time)),e.start_time&&(t.isReceiveTime=1,t.datetime2=[1e3*e.start_time,1e3*e.end_time],t.formData.start_time=t.makeDate(1e3*e.start_time),t.formData.end_time=t.makeDate(1e3*e.end_time))})).catch((function(e){t.$Message.error(e.msg)}))},makeDate:function(t){return t=new Date(t),t.getFullYear()+"-"+(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-"+(t.getDate()<10?"0"+t.getDate():t.getDate())+" "+(t.getHours()<10?"0"+t.getHours():t.getHours())+":"+(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())+":"+(t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds())},save:function(){var t=this;if(!this.formData.coupon_title)return this.$Message.error("请输入优惠券名称");if(2===this.formData.type&&!this.formData.product_id)return this.$Message.error("请选择商品");if(1===this.formData.type&&!this.formData.category_id)return this.$Message.error("请选择品类");if(this.formData.coupon_price<=0)return this.$Message.error("优惠券面值不能小于0");if(this.isMinPrice){if(this.formData.use_min_price<1)return this.$Message.error("优惠券最低消费不能小于0")}else this.formData.use_min_price=0;if(this.isCouponTime){if(this.formData.start_use_time=0,this.formData.end_use_time=0,this.formData.coupon_time<1)return this.$Message.error("使用有效期限不能小于1天")}else if(this.formData.coupon_time=0,!this.formData.start_use_time)return this.$Message.error("请选择使用有效期限");if(this.isReceiveTime){if(!this.formData.start_time)return this.$Message.error("请选择领取时间")}else this.formData.start_time=0,this.formData.end_time=0;if(2!=this.formData.receive_type&&3!=this.formData.receive_type||(this.formData.is_permanent=1),this.formData.is_permanent)this.formData.total_count=0;else if(this.formData.total_count<1)return this.$Message.error("发布数量不能小于1");if(this.formData.receive_limit<1)return this.$Message.error("每个用户可以领取数量不能小于1");0==this.formData.type?(this.formData.product_id="",this.formData.category_id="",this.productList=[]):1==this.formData.type?(this.formData.product_id="",this.productList=[]):2==this.formData.type&&(this.formData.category_id=""),this.disabled=!1,Object(n.r)(this.formData).then((function(e){t.disabled=!0,t.$Message.success(e.msg),setTimeout((function(){t.$router.push({path:"/admin/marketing/store_coupon_issue/index"})}),1e3)})).catch((function(e){t.$Message.error(e.msg)}))},dateChange:function(t){this.formData.start_use_time=t[0],this.formData.end_use_time=t[1]},timeChange:function(t){this.formData.start_time=t[0],this.formData.end_time=t[1]},unique:function(t){var e=new Map;return t.filter((function(t){return!e.has(t.product_id)&&e.set(t.product_id,1)}))},getProductId:function(t){var e=this;this.modals=!1,this.productList=this.unique(this.productList.concat(t)),this.formData.product_id="",this.productList.forEach((function(t){e.formData.product_id?e.formData.product_id+=",".concat(t.product_id):e.formData.product_id+="".concat(t.product_id)}))},cancel:function(){this.modals=!1},remove:function(t){for(var e=this,a=0;a<this.productList.length;a++)this.productList[a].product_id==t&&this.productList.splice(a,1);this.formData.product_id="",this.productList.forEach((function(t){e.formData.product_id?e.formData.product_id+=",".concat(t.product_id):e.formData.product_id+="".concat(t.product_id)}))}}},a("38aa"),r=a("2877"),o=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"i-layout-page-header header_top"},[a("div",{staticClass:"i-layout-page-header fl_header"},[a("router-link",{attrs:{to:{path:"/admin/marketing/store_coupon_issue/index"}}},[a("Button",{attrs:{icon:"ios-arrow-back",size:"small",type:"text"}},[t._v("返回")])],1),a("Divider",{attrs:{type:"vertical"}}),a("span",{staticClass:"ivu-page-header-title mr20",staticStyle:{padding:"0"},domProps:{textContent:t._s(t.$route.params.id?"编辑优惠券":"添加优惠券")}})],1)]),a("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[a("Form",{attrs:{model:t.formData,"label-width":150}},[a("FormItem",{attrs:{label:"优惠券名称"}},[a("Input",{attrs:{placeholder:"请输入优惠券名称"},model:{value:t.formData.coupon_title,callback:function(e){t.$set(t.formData,"coupon_title",e)},expression:"formData.coupon_title"}})],1),a("FormItem",{attrs:{label:"发送方式"}},[a("RadioGroup",{model:{value:t.formData.receive_type,callback:function(e){t.$set(t.formData,"receive_type",e)},expression:"formData.receive_type"}},[a("Radio",{attrs:{label:1}},[t._v("普通券")]),a("Radio",{attrs:{label:2}},[t._v("新人券")]),a("Radio",{attrs:{label:4}},[t._v("会员券")])],1)],1),a("FormItem",{attrs:{label:"优惠劵类型"}},[a("RadioGroup",{model:{value:t.formData.type,callback:function(e){t.$set(t.formData,"type",e)},expression:"formData.type"}},[a("Radio",{attrs:{label:0}},[t._v("通用券")]),a("Radio",{attrs:{label:1}},[t._v("品类券")]),a("Radio",{attrs:{label:2}},[t._v("商品券")])],1)],1),a("FormItem",{directives:[{name:"show",rawName:"v-show",value:2===t.formData.type,expression:"formData.type === 2"}]},[t._l(t.productList,(function(e){return a("div",{key:e.product_id,staticClass:"upload-list"},[a("img",{attrs:{src:e.image}}),a("Icon",{attrs:{type:"ios-close-circle",size:"16"},on:{click:function(a){return t.remove(e.product_id)}}})],1)})),a("Icon",{attrs:{type:"ios-camera-outline",size:"26"},on:{click:function(e){t.modals=!0}}}),a("div",{staticClass:"info"},[t._v("选择商品")])],2),a("FormItem",{directives:[{name:"show",rawName:"v-show",value:1===t.formData.type,expression:"formData.type === 1"}]},[a("Select",{staticStyle:{width:"320px"},attrs:{multiple:""},model:{value:t.formData.category_id,callback:function(e){t.$set(t.formData,"category_id",e)},expression:"formData.category_id"}},t._l(t.categoryList,(function(e){return a("Option",{key:e.id,attrs:{value:e.id}},[t._v(t._s(e.cate_name))])})),1),a("div",{staticClass:"info"},[t._v("选择商品的品类")])],1),a("FormItem",{attrs:{label:"优惠券面值"}},[a("InputNumber",{attrs:{min:1,max:1e8},model:{value:t.formData.coupon_price,callback:function(e){t.$set(t.formData,"coupon_price",e)},expression:"formData.coupon_price"}})],1),a("FormItem",{attrs:{label:"使用门槛"}},[a("RadioGroup",{model:{value:t.isMinPrice,callback:function(e){t.isMinPrice=e},expression:"isMinPrice"}},[a("Radio",{attrs:{label:0}},[t._v("无门槛")]),a("Radio",{attrs:{label:1}},[t._v("有门槛")])],1)],1),t.isMinPrice?a("FormItem",[a("InputNumber",{attrs:{min:1,max:1e8},model:{value:t.formData.use_min_price,callback:function(e){t.$set(t.formData,"use_min_price",e)},expression:"formData.use_min_price"}}),a("div",{staticClass:"info"},[t._v("填写优惠券的最低消费金额")])],1):t._e(),a("FormItem",{attrs:{label:"使用时间"}},[a("RadioGroup",{model:{value:t.isCouponTime,callback:function(e){t.isCouponTime=e},expression:"isCouponTime"}},[a("Radio",{attrs:{label:1}},[t._v("天数")]),a("Radio",{attrs:{label:0}},[t._v("时间段")])],1)],1),a("FormItem",{directives:[{name:"show",rawName:"v-show",value:t.isCouponTime,expression:"isCouponTime"}],attrs:{label:""}},[a("InputNumber",{attrs:{min:1,precision:0},model:{value:t.formData.coupon_time,callback:function(e){t.$set(t.formData,"coupon_time",e)},expression:"formData.coupon_time"}}),a("div",{staticClass:"info"},[t._v("领取后多少天内有效")])],1),a("FormItem",{directives:[{name:"show",rawName:"v-show",value:!t.isCouponTime,expression:"!isCouponTime"}],attrs:{label:""}},[a("DatePicker",{attrs:{value:t.datetime1,editable:!1,type:"datetimerange",placeholder:"领取后在这个时间段内可以使用"},on:{"on-change":t.dateChange}})],1),a("FormItem",{attrs:{label:"领取时间"}},[a("RadioGroup",{model:{value:t.isReceiveTime,callback:function(e){t.isReceiveTime=e},expression:"isReceiveTime"}},[a("Radio",{attrs:{label:1}},[t._v("限时")]),a("Radio",{attrs:{label:0}},[t._v("不限时")])],1)],1),a("FormItem",{directives:[{name:"show",rawName:"v-show",value:t.isReceiveTime,expression:"isReceiveTime"}],attrs:{label:""}},[a("DatePicker",{attrs:{value:t.datetime2,type:"datetimerange",placeholder:"在这个时间段内可领取"},on:{"on-change":t.timeChange}})],1),2!=t.formData.receive_type&&3!=t.formData.receive_type?a("FormItem",{attrs:{label:"优惠券发布数量"}},[a("RadioGroup",{model:{value:t.formData.is_permanent,callback:function(e){t.$set(t.formData,"is_permanent",e)},expression:"formData.is_permanent"}},[a("Radio",{attrs:{label:0}},[t._v("限量")]),a("Radio",{attrs:{label:1}},[t._v("不限量")])],1)],1):t._e(),2!=t.formData.receive_type&&3!=t.formData.receive_type?a("FormItem",{directives:[{name:"show",rawName:"v-show",value:!t.formData.is_permanent,expression:"!formData.is_permanent"}],attrs:{label:""}},[a("InputNumber",{attrs:{min:1,max:1e8,precision:0},model:{value:t.formData.total_count,callback:function(e){t.$set(t.formData,"total_count",e)},expression:"formData.total_count"}}),a("div",{staticClass:"info"},[t._v("填写优惠券的发布数量")])],1):t._e(),2!=t.formData.receive_type&&3!=t.formData.receive_type?a("FormItem",{attrs:{label:"用户领取数量"}},[a("InputNumber",{attrs:{min:1,max:1e8,precision:0},model:{value:t.formData.receive_limit,callback:function(e){t.$set(t.formData,"receive_limit",e)},expression:"formData.receive_limit"}}),a("div",{staticClass:"info"},[t._v("填写每个用户可以领取多少张")])],1):t._e(),a("FormItem",{attrs:{label:"状态"}},[a("RadioGroup",{model:{value:t.formData.status,callback:function(e){t.$set(t.formData,"status",e)},expression:"formData.status"}},[a("Radio",{attrs:{label:1}},[t._v("开启")]),a("Radio",{attrs:{label:0}},[t._v("关闭")])],1)],1),a("FormItem",[a("Button",{attrs:{type:"primary",disabled:t.disabled},on:{click:t.save}},[t._v("立即创建")])],1)],1)],1),a("Modal",{staticClass:"paymentFooter",attrs:{title:"商品列表",footerHide:"",scrollable:"",width:"900"},on:{"on-cancel":t.cancel},model:{value:t.modals,callback:function(e){t.modals=e},expression:"modals"}},[t.modals?a("goods-list",{ref:"goodslist",attrs:{ischeckbox:!0},on:{getProductId:t.getProductId}}):t._e()],1)],1)}),[],!1,null,"52108558",null);e.default=o.exports},7946:function(t,e,a){},addb:function(t,e,a){function i(t,e){var a=t.length,s=o(a/2);if(a<8){for(var n,c,m=t,u=e,l=m.length,d=1;d<l;){for(n=m[c=d];c&&0<u(m[c-1],n);)m[c]=m[--c];c!==d++&&(m[c]=n)}return m}for(var f=t,p=i(r(t,0,s),e),_=i(r(t,s),e),h=e,v=p.length,D=_.length,b=0,g=0;b<v||g<D;)f[b+g]=b<v&&g<D?h(p[b],_[g])<=0?p[b++]:_[g++]:b<v?p[b++]:_[g++];return f}var r=a("4dae"),o=Math.floor;t.exports=i},d998:function(t,e,a){a=a("342f"),t.exports=/MSIE|Trident/.test(a)}}]);