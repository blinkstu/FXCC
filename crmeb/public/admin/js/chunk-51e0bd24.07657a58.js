(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-51e0bd24"],{"011a":function(t,s,i){t.exports=i.p+"img/no_chat.b9c3e583.png"},"060a":function(t,s,i){t.exports=i.p+"img/no_tk.401d40f4.png"},2380:function(t,s,i){"use strict";var a=i("f930");i.n(a).a},"23d0":function(t,s,i){"use strict";var a=i("2ff2");i.n(a).a},"2e67c":function(t,s,i){},"2ff2":function(t,s,i){},4112:function(t,s,i){t.exports=i.p+"img/no_user.a09b282b.png"},"468b":function(t,s,i){t.exports=i.p+"img/no_all.174e30c0.png"},"5f70":function(t,s,i){t.exports=i.p+"img/no_fh.977a0fb8.png"},"7a1a":function(t,s,i){"use strict";i.d(s,"a",(function(){return e}));var a=i("6b6c");function e(){return Object(a.a)({url:"service/info",method:"get",kefu:!0})}},"7d97":function(t,s,i){"use strict";var a=i("2e67c");i.n(a).a},"7eb7":function(t,s,i){"use strict";i.r(s);var a=i("49ea"),e=i("42e3"),n=i("7a1a"),c={name:"product_info",components:{empty:i("8b1f").a},data:function(){return{ops:{bar:{background:"#393232",opacity:".5",size:"2px"}},searchTxt:"",tabCur:0,tabList:[{key:0,title:"购买",api:"productCart"},{key:1,title:"足迹",api:"productHot"},{key:2,title:"热销",api:"productVisit"}],toUid:"",list:[]}},watch:{tabCur:function(t,s){return this.list=[],0==t?this.getBuyList():1==t?this.getVisit():2==t?this.getProductHot():void 0}},created:function(){Object(n.a)().then((function(t){window.document.title="".concat(t.data.site_name," - 商品列表")})),this.toUid=this.$route.query.toUid,this.getBuyList()},methods:{getBuyList:function(){var t=this;Object(e.B)(this.toUid,{store_name:this.searchTxt}).then((function(s){t.list=s.data}))},getProductHot:function(){var t=this;Object(e.C)(this.toUid,{store_name:this.searchTxt}).then((function(s){t.list=s.data}))},getVisit:function(){var t=this;Object(e.E)(this.toUid,{store_name:this.searchTxt}).then((function(s){t.list=s.data}))},bingGoods:function(t){var s={type:"chat",data:{msn:t.id,type:5,to_uid:this.toUid}};a.a.then((function(t){t.send(s)})),this.$router.go(-1)},bindTab:function(t){this.tabCur=t.key},bindSearch:function(){return 0==this.tabCur?this.getBuyList():1==this.tabCur?this.getVisit():2==this.tabCur?this.getProductHot():void 0}}};i("7d97"),i("23d0"),i=i("2877"),i=Object(i.a)(c,(function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"product_info"},[i("div",{staticClass:"head"},[i("div",{staticClass:"tab-box"},t._l(t.tabList,(function(s,a){return i("div",{key:a,staticClass:"tab-item",class:{on:a==t.tabCur},on:{click:function(i){return t.bindTab(s)}}},[t._v("\n        "+t._s(s.title)+"\n      ")])})),0),i("div",{staticClass:"search-box"},[i("Input",{staticStyle:{"border-radius":"0.39rem",background:"#f5f6f9"},attrs:{type:"text",placeholder:"搜索商品名称/ID",search:!0},on:{"on-search":t.bindSearch},model:{value:t.searchTxt,callback:function(s){t.searchTxt=s},expression:"searchTxt"}})],1)]),0<t.list.length?i("div",{staticClass:"scroll-box"},[i("vue-scroll",{attrs:{ops:t.ops}},[t._l(t.list,(function(s,a){return i("div",{key:a,staticClass:"goods-item"},[i("img",{attrs:{src:s.image,mode:""}}),i("div",{staticClass:"info"},[i("div",{staticClass:"title line2 mb15"},[t._v(t._s(s.store_name))]),i("div",{staticClass:"num"},[i("span",{staticClass:"mr15"},[t._v("库存 "+t._s(s.stock))]),i("span",[t._v("销量 "+t._s(s.sales))])])]),i("div",{staticClass:"right"},[i("div",{staticClass:"price"},[t._v("￥"+t._s(s.price))]),i("div",{staticClass:"btn",on:{click:function(i){return t.bingGoods(s)}}},[t._v("推送")])])])})),i("div",{staticClass:"slot-load",attrs:{slot:"load-deactive"},slot:"load-deactive"}),i("div",{staticClass:"slot-load",attrs:{slot:"load-active"},slot:"load-active"},[t._v("下滑加载更多")])],2)],1):i("empty",{attrs:{msg:"暂无商品信息"}})],1)}),[],!1,null,"429215b4",null);s.default=i.exports},"8b1f":function(t,s,i){"use strict";i("a9e3");var a={name:"empty",props:{status:{type:String|Number,default:1},msg:{type:String,default:""}}},e=(i("2380"),i("2877"));e=Object(e.a)(a,(function(){var t=this,s=t.$createElement;s=t._self._c||s;return s("div",{staticClass:"empty-wrapper"},[1==t.status?[s("img",{attrs:{src:i("011a"),alt:""}})]:t._e(),2==t.status?[s("img",{attrs:{src:i("4112"),alt:""}})]:t._e(),3==t.status?[s("img",{attrs:{src:i("468b"),alt:""}})]:t._e(),4==t.status?[s("img",{attrs:{src:i("ea87"),alt:""}})]:t._e(),5==t.status?[s("img",{attrs:{src:i("5f70"),alt:""}})]:t._e(),6==t.status?[s("img",{attrs:{src:i("060a"),alt:""}})]:t._e(),s("p",[t._v(t._s(t.msg))])],2)}),[],!1,null,"00691601",null);s.a=e.exports},ea87:function(t,s,i){t.exports=i.p+"img/no_zf.e61fe9b5.png"},f930:function(t,s,i){}}]);