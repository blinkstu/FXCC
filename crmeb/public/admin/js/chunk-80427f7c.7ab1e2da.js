(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-80427f7c"],{"20b5":function(t,e,a){"use strict";var i=a("9f82");a.n(i).a},"2ff4":function(t,e,a){},3078:function(t,e,a){"use strict";a.r(e),a("a9e3"),a("b0c0");var i=a("f478"),n=a("f3f3"),s=(a("e9c4"),a("d81d"),a("d3b7"),a("25f0"),a("9911"),a("2542")),r=(n={name:"rightConfig",components:Object(n.a)({},s.a),props:{name:{type:Object,default:{}},pageId:{type:Number,default:0},configNum:{type:Number|String,default:"default"}},computed:{defultArr:function(){return this.$store.state.moren.component}},watch:{name:{handler:function(t,e){this.rCom=[],this.configData=this.$store.state.moren.defaultConfig[t.name],this.configData.hasOwnProperty(this.configNum)||(a=JSON.parse(JSON.stringify(this.configData.defaultVal)),this.configData[t.num]=a,this.$store.commit("moren/upDataName",this.configData));var a,i=this;setTimeout((function(){i.rCom=i.$store.state.moren.component[t.name].list}),30),this.configData[t.num].selectConfig&&(this.configData[t.num].selectConfig.type?this.getByCategory():this.getCategory())},deep:!0},defultArr:{handler:function(t,e){this.rCom=[],this.objToArray(t),this.rCom=t[this.name.name].list},deep:!0}},data:function(){return{rCom:[],configData:{},isShow:!0,categoryList:[],status:0}},mounted:function(){this.storeStatus()},methods:{storeStatus:function(){var t=this;Object(i.w)().then((function(e){t.status=parseInt(e.data.store_status)}))},getCategory:function(){var t=this;Object(i.g)().then((function(e){var a=[];e.data.map((function(t){a.push({title:t.title,pid:t.pid,activeValue:t.id.toString()})})),t.configData[t.name.num].selectConfig.list=a,t.bus.$emit("upData",a)}))},getByCategory:function(){var t=this;Object(i.f)().then((function(e){var a=[];e.data.map((function(t){a.push({title:t.cate_name,pid:t.pid,activeValue:t.id.toString()})})),t.configData[t.name.num].selectConfig.list=a,t.bus.$emit("upData",a)}))},saveConfig:function(){var t=this,e=this.$store.state.moren.defaultConfig;if("tabBar"==this.name.name){if(!this.status)for(var a=e.tabBar.default.tabBarList.list,n=0;n<a.length;n++)if("/pages/storeList/index"==a[n].link||"pages/storeList/index"==a[n].link)return this.$Message.error("请先开启您的周边功能(/pages/storeList/index)");if(e.tabBar.default.tabBarList.list.length<2)return this.$Message.error("您最少应添加2个导航")}Object(i.e)(this.pageId,{value:e}).then((function(e){t.$Message.success("保存成功")}))},objToArray:function(t){var e,a=[];for(e in t)a.push(t[e]);return a}}},s=(a("7a7b"),a("2877")),n=Object(s.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.rCom.length?a("div",{staticClass:"right-box"},[a("div",{staticClass:"title-bar"},[t._v("模块配置")]),t.rCom.length?a("div",{staticClass:"mobile-config"},[t._l(t.rCom,(function(e,i){return a("div",{key:i},[a(e.components.name,{tag:"component",attrs:{moduleName:t.name.name,name:e.configNme,configData:t.configData,configNum:t.configNum}})],1)})),t.rCom.length?a("div",{staticStyle:{"text-align":"center"}},[a("Button",{staticStyle:{width:"100%",margin:"0 auto",height:"40px"},attrs:{type:"primary"},on:{click:t.saveConfig}},[t._v("保存")])],1):t._e()],2):t._e()]):t._e()}),[],!1,null,"08ac0967",null).exports,a("b311")),o=a.n(r),c=(r={name:"links",data:function(){return{list:[{name:"商城首页",url:"/pages/goods/order_list/index",parameter:[{}],example:"/pages/activity/bargain/index"},{name:"商城首页",url:"/pages/goods/order_list/index",parameter:[{}],example:"/pages/activity/bargain/index"}],clipboard:void 0}},created:function(){var t=this;Object(i.o)().then((function(e){t.list=e.data.url}))},mounted:function(){this.$nextTick((function(){var t=this;this.clipboard=new o.a(".copy-data"),this.clipboard.on("success",(function(){t.$Message.success("复制成功")}))}))},destroyed:function(){this.clipboard.destroy()},methods:{}},r=(a("20b5"),Object(s.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"right-box"},t._l(t.list,(function(e,i){return a("div",{key:i,staticClass:"link-item"},[a("div",{staticClass:"title"},[t._v(t._s(e.name))]),a("div",{staticClass:"txt"},[a("span",[t._v("地址：")]),t._v(t._s(e.url))]),e.parameter?a("div",{staticClass:"txt"},[t._m(0,!0),a("span",[t._v(t._s(e.parameter))])]):t._e(),a("div",{staticClass:"tips"},[t._v("\n      例如："+t._s(e.example)+"\n      "),a("span",{staticClass:"copy copy-data",attrs:{"data-clipboard-text":e.example}},[t._v("复制")])])])})),0)}),[function(){var t=this.$createElement;t=this._self._c||t;return t("p",[t("span",[this._v("参数：")])])}],!1,null,"04ac0c10",null).exports),a("c276"));n={name:"index",components:{rightConfig:n,links:r},data:function(){return{configName:{},configNum:"default",iframeUrl:"",setConfig:"",updataConfig:"",pageId:0}},created:function(){var t=this,e=(this.show=!0,this.$route.query.id),a=this.$store.state.moren.defaultConfig,n=(this.pageId=parseInt(e),Object(c.d)("moveLink"));1===Number(this.$route.query.type)?this.iframeUrl="".concat(n,"/pages/index/index?type=iframeWindow"):this.iframeUrl="".concat(location.origin,"/pages/index/index?type=iframeWindow"),Object(i.c)(parseInt(e)).then((function(n){n=n.data.info.value,n?t.upData(n):Object(i.e)(parseInt(e),{value:a}).then((function(t){}))}))},mounted:function(){window.addEventListener("message",this.handleMessage,!1)},methods:{handleMessage:function(t){var e;t.data.name&&(e={name:t.data.name,num:t.data.dataName},this.configName=e,this.configNum=t.data.dataName,this.add(t.data.name))},add:function(t){this.$store.commit("moren/setConfig",t)},upData:function(t){this.$store.commit("moren/updataConfig",t)}}},a("8b92"),r=Object(s.a)(n,(function(){var t=this,e=t.$createElement;e=t._self._c||e;return e("div",[e("div",{staticClass:"i-layout-page-header header_top"},[e("div",{staticClass:"i-layout-page-header fl_header"},[e("router-link",{attrs:{to:{path:"/admin/setting/pages/devise"}}},[e("Button",{attrs:{icon:"ios-arrow-back",size:"small",type:"text"}},[t._v("返回")])],1),e("Divider",{attrs:{type:"vertical"}}),e("span",{staticClass:"ivu-page-header-title mr20",staticStyle:{padding:"0"}},[t._v("页面设计")])],1)]),e("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[e("div",{staticClass:"flex-wrapper"},[e("iframe",{ref:"iframe",staticClass:"iframe-box",attrs:{src:t.iframeUrl,frameborder:"0"}}),e("div",[e("div",{staticClass:"content"},[e("rightConfig",{attrs:{name:t.configName,pageId:t.pageId,configNum:t.configNum}})],1)])])])],1)}),[],!1,null,"6c6658a4",null);e.default=r.exports},"71d5":function(t,e,a){},"7a7b":function(t,e,a){"use strict";var i=a("71d5");a.n(i).a},"857a":function(t,e,a){var i=a("e330"),n=a("1d80"),s=a("577e"),r=/"/g,o=i("".replace);t.exports=function(t,e,a,i){t=s(n(t));var c="<"+e;return""!==a&&(c+=" "+a+'="'+o(s(i),r,"&quot;")+'"'),c+">"+t+"</"+e+">"}},"8b92":function(t,e,a){"use strict";var i=a("2ff4");a.n(i).a},9911:function(t,e,a){"use strict";var i=a("23e7"),n=a("857a");i({target:"String",proto:!0,forced:a("af03")("link")},{link:function(t){return n(this,"a","href",t)}})},"9f82":function(t,e,a){},af03:function(t,e,a){var i=a("d039");t.exports=function(t){return i((function(){var e=""[t]('"');return e!==e.toLowerCase()||3<e.split('"').length}))}}}]);