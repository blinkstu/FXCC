(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-d33ff35a"],{d7d0:function(t,i,e){"use strict";e.r(i);var s=e("f3f3"),o=(e("d81d"),e("99af"),e("a434"),e("2f62")),a=e("c4ad"),n=e("47c5");a={name:"add_goods",components:{goodsList:a.default},computed:Object(s.a)(Object(s.a)({},Object(o.e)("media",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:100},labelPosition:function(){return this.isMobile?"top":"right"}}),data:function(){var t=this;return{isShowBox:!1,loading:!1,modals:!1,goodsList:[],tempGoods:{},formValidate:{},columns1:[{key:"id",title:"商品ID"},{slot:"img",title:"商品信息"},{key:"price",title:"直播售价",render:function(i,e){return i("Input",{props:{type:"number",value:e.row.price},on:{input:function(i){t.tabList[e.index].price=i}}})}},{key:"cost_price",title:"直播原价",render:function(i,e){return i("Input",{props:{type:"number",value:e.row.cost_price},on:{input:function(i){t.tabList[e.index].cost_price=i}}})}},{key:"stock",title:"库存"},{slot:"action",fixed:"right",title:"操作"}],tabList:[]}},methods:{liveGoods:function(){var t=this,i=[];this.goodsList.map((function(t){i.push(t.product_id)})),Object(n.g)({product_id:i}).then((function(i){t.tabList=i.data,t.isShowBox=!0})).catch((function(i){t.$Message.error(i.msg)}))},getProductId:function(t){var i=this;this.goodsList=this.goodsList.concat(t),this.$nextTick((function(t){setTimeout((function(){i.modals=!1}),300)}))},bindDelete:function(t){this.goodsList.splice(t,1)},del:function(t,i){this.tabList.splice(i,1)},bindSub:function(){var t=this;Object(n.f)({goods_info:this.tabList}).then((function(i){t.$Message.success("添加成功"),setTimeout((function(){t.$router.push({path:"/admin/marketing/live/live_goods"})}),500)})).catch((function(i){t.$Message.error(i.msg)}))}}},e("ec78"),s=e("2877"),o=Object(s.a)(a,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{staticClass:"i-layout-page-header header_top"},[e("div",{staticClass:"i-layout-page-header fl_header"},[e("router-link",{attrs:{to:{path:"/admin/marketing/live/live_goods"}}},[e("Button",{attrs:{icon:"ios-arrow-back",size:"small",type:"text"}},[t._v("返回")])],1),e("Divider",{attrs:{type:"vertical"}}),e("span",{staticClass:"ivu-page-header-title",staticStyle:{padding:"0"}},[t._v(t._s(t.$route.meta.title))])],1)]),e("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[e("Form",{ref:"formValidate",staticClass:"tabform",attrs:{model:t.formValidate,"label-width":t.labelWidth,"label-position":t.labelPosition},nativeOn:{submit:function(t){t.preventDefault()}}},[e("Row",{attrs:{gutter:24,type:"flex"}},[e("Col",{attrs:{span:"24"}},[e("FormItem",{attrs:{label:"选择商品："}},[e("div",{staticClass:"box"},[t._l(t.goodsList,(function(i,s){return e("div",{key:s,staticClass:"box-item"},[e("img",{attrs:{src:i.image,alt:""}}),e("Icon",{attrs:{type:"ios-close-circle",size:"20"},on:{click:function(i){return t.bindDelete(s)}}})],1)})),e("div",{staticClass:"upload-box",on:{click:function(i){t.modals=!0}}},[e("Icon",{attrs:{type:"ios-camera-outline",size:"36"}})],1)],2)])],1)],1)],1),0<t.goodsList.length?e("div",{staticClass:"active-btn"},[e("Button",{attrs:{type:"success"},on:{click:t.liveGoods}},[t._v("生成直播商品")])],1):t._e(),t.isShowBox?e("div",{staticClass:"table-box"},[e("Table",{ref:"table",staticClass:"mt25",attrs:{columns:t.columns1,data:t.tabList,loading:t.loading,"no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:t._u([{key:"img",fn:function(i){var s=i.row;return i.index,[e("div",{staticClass:"product_box"},[e("img",{attrs:{src:s.image,alt:""}}),e("span",[t._v(t._s(s.store_name))])])]}},{key:"action",fn:function(i){var s=i.row,o=i.index;return[e("a",{on:{click:function(i){return t.del(s,o)}}},[t._v("删除")])]}}],null,!1,2399900888)}),e("div",{staticClass:"sub_btn"},[e("Button",{staticStyle:{width:"8%"},attrs:{type:"primary"},on:{click:t.bindSub}},[t._v("提交")])],1)],1):t._e()],1),e("Modal",{staticClass:"paymentFooter",attrs:{title:"商品列表",scrollable:"",width:"900","footer-hide":!0},model:{value:t.modals,callback:function(i){t.modals=i},expression:"modals"}},[t.modals?e("goods-list",{ref:"goodslist",attrs:{ischeckbox:!0},on:{getProductId:t.getProductId}}):t._e()],1)],1)}),[],!1,null,"1b6afaa0",null);i.default=o.exports},e580:function(t,i,e){},ec78:function(t,i,e){"use strict";var s=e("e580");e.n(s).a}}]);