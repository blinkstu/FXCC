(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/activity/goods_combination_status/index"],{"0f74":function(t,i,e){"use strict";e.r(i);var o=e("1db7"),n=e.n(o);for(var s in o)"default"!==s&&function(t){e.d(i,t,(function(){return o[t]}))}(s);i["default"]=n.a},"1db7":function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=d(e("9823")),n=e("a368"),s=e("26cb"),r=e("64d0"),a=e("768b"),u=d(e("9ad2")),c=e("168b");function d(t){return t&&t.__esModule?t:{default:t}}var l=function(){e.e("components/countDown/index").then(function(){return resolve(e("bda5"))}.bind(null,e)).catch(e.oe)},h=function(){e.e("components/productWindow/index").then(function(){return resolve(e("f9f0"))}.bind(null,e)).catch(e.oe)},p=function(){e.e("components/Authorize").then(function(){return resolve(e("cacf"))}.bind(null,e)).catch(e.oe)},m=function(){Promise.all([e.e("common/vendor"),e.e("components/home/index")]).then(function(){return resolve(e("a25b"))}.bind(null,e)).catch(e.oe)},$="GroupRule",f=getApp(),_={name:$,components:{CountDown:l,ProductWindow:h,home:m,authorize:p},props:{},mixins:[u.default],data:function(){return{imgHost:c.HTTP_REQUEST_URL,currentPinkOrder:"",isOk:0,pinkBool:0,userBool:0,pinkAll:[],pinkT:[],storeCombination:[],storeCombinationHost:[],pinkId:0,count:0,iShidden:!1,isOpen:!1,attr:{cartAttr:!1,productSelect:{image:"",store_name:"",price:"",quota:0,unique:"",cart_num:1,quota_show:0,product_stock:0,num:0},productAttr:[]},cart_num:"",userInfo:{},posters:!1,weixinStatus:!1,H5ShareBox:!1,isAuto:!1,isShowAuth:!1,attrTxt:this.$t("请选择"),attrValue:"",orderPid:0}},computed:(0,s.mapGetters)({isLogin:"isLogin",userData:"userInfo"}),watch:{isLogin:{handler:function(t,i){t?this.getCombinationPink():(0,n.toLogin)()},deep:!0},userData:{handler:function(t,i){t&&(this.userInfo=t,f.globalData.openPages="/pages/activity/goods_combination_status/index?id="+this.pinkId)},deep:!0}},onLoad:function(t){var i=this;if(t.scene){var e=o.default.getUrlParams(decodeURIComponent(t.scene));"object"===typeof e&&(e.id&&(t.id=e.id),e.pid&&(f.globalData.spid=e.pid))}t.id&&(i.pinkId=t.id),0==i.isLogin&&(this.$Cache.set("login_back_url","/pages/activity/goods_combination_status/index?id=".concat(t.id)),(0,n.toLogin)())},onShareAppMessage:function(){var t=this;return{title:t.$t("您的好友")+t.userInfo.nickname+this.$t("邀请您参团")+t.storeCombination.title,path:f.globalData.openPages,imageUrl:t.storeCombination.image}},mounted:function(){this.getCombinationPink()},methods:{authColse:function(t){this.isShowAuth=t},onLoadFun:function(t){this.userInfo=t,f.globalData.openPages="/pages/activity/goods_combination_status/index?id="+this.pinkId,this.getCombinationPink()},listenerActionSheet:function(){0==this.isLogin?(0,n.toLogin)():this.posters=!0},listenerActionClose:function(){this.posters=!1},goFriend:function(){this.posters=!1},iptCartNum:function(t){this.$set(this.attr.productSelect,"cart_num",t),this.$set(this,"cart_num",t)},attrVal:function(t){this.attr.productAttr[t.indexw].index=this.attr.productAttr[t.indexw].attr_values[t.indexn]},onMyEvent:function(){this.$set(this.attr,"cartAttr",!1),this.$set(this,"isOpen",!1)},ChangeAttr:function(t){this.$set(this,"cart_num",1);var i=this.productValue[t];i?(this.$set(this.attr.productSelect,"image",i.image),this.$set(this.attr.productSelect,"price",i.price),this.$set(this.attr.productSelect,"quota",i.quota),this.$set(this.attr.productSelect,"unique",i.unique),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this.attr.productSelect,"product_stock",i.product_stock),this.$set(this.attr.productSelect,"quota_show",i.quota_show),this.$set(this,"attrValue",t),this.$set(this,"attrTxt",this.$t("已选择"))):(this.$set(this.attr.productSelect,"image",this.storeCombination.image),this.$set(this.attr.productSelect,"price",this.storeCombination.price),this.$set(this.attr.productSelect,"quota",0),this.$set(this.attr.productSelect,"unique",""),this.$set(this.attr.productSelect,"cart_num",0),this.$set(this.attr.productSelect,"quota_show",0),this.$set(this.attr.productSelect,"product_stock",0),this.$set(this,"attrValue",""),this.$set(this,"attrTxt",this.$t("请选择")))},ChangeCartNum:function(t){var i=this.productValue[this.attrValue];if(this.cart_num&&(i.cart_num=this.cart_num,this.attr.productSelect.cart_num=this.cart_num),void 0!==i||this.attr.productAttr.length||(i=this.attr.productSelect),void 0!==i){i.stock,i.quota_show;var e=i.quota||0,o=i.product_stock||0,n=this.attr.productSelect,s=this.storeCombination.num||0;if(void 0==i.cart_num&&(i.cart_num=1),t){n.cart_num++;var r=[];r.push(s),r.push(e),r.push(o);var a=Math.min.apply(null,r);n.cart_num>=a&&(this.$set(this.attr.productSelect,"cart_num",a||1),this.$set(this,"cart_num",a||1)),this.$set(this,"cart_num",n.cart_num),this.$set(this.attr.productSelect,"cart_num",n.cart_num)}else n.cart_num--,n.cart_num<1&&(this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"cart_num",1)),this.$set(this,"cart_num",n.cart_num),this.$set(this.attr.productSelect,"cart_num",n.cart_num)}},DefaultSelect:function(){var t=this.attr.productAttr,i=[];for(var e in this.productValue)if(this.productValue[e].quota>0){i=this.attr.productAttr.length?e.split(","):[];break}for(var o=0;o<t.length;o++)this.$set(t[o],"index",i[o]);var n=this.productValue[i.join(",")];n&&t.length?(this.$set(this.attr.productSelect,"store_name",this.storeCombination.title),this.$set(this.attr.productSelect,"image",n.image),this.$set(this.attr.productSelect,"price",n.price),this.$set(this.attr.productSelect,"quota",n.quota),this.$set(this.attr.productSelect,"unique",n.unique),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this.attr.productSelect,"product_stock",n.product_stock),this.$set(this.attr.productSelect,"quota_show",n.quota_show),this.$set(this,"attrValue",i.join(",")),this.attrValue=i.join(","),this.$set(this,"attrTxt",this.$t("已选择"))):!n&&t.length?(this.$set(this.attr.productSelect,"store_name",this.storeCombination.title),this.$set(this.attr.productSelect,"image",this.storeCombination.image),this.$set(this.attr.productSelect,"price",this.storeCombination.price),this.$set(this.attr.productSelect,"quota",0),this.$set(this.attr.productSelect,"unique",""),this.$set(this.attr.productSelect,"cart_num",0),this.$set(this.attr.productSelect,"product_stock",0),this.$set(this.attr.productSelect,"quota_show",0),this.$set(this,"attrValue",""),this.$set(this,"attrTxt",this.$t("请选择"))):n||t.length||(this.$set(this.attr.productSelect,"store_name",this.storeCombination.title),this.$set(this.attr.productSelect,"image",this.storeCombination.image),this.$set(this.attr.productSelect,"price",this.storeCombination.price),this.$set(this.attr.productSelect,"quota",0),this.$set(this.attr.productSelect,"unique",this.storeCombination.unique||""),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this.attr.productSelect,"quota_show",0),this.$set(this.attr.productSelect,"product_stock",0),this.$set(this,"attrValue",""),this.$set(this,"attrTxt",this.$t("请选择")))},setProductSelect:function(){var t=this,i=t.attr;i.productSelect.image=t.storeCombination.image,i.productSelect.store_name=t.storeCombination.title,i.productSelect.price=t.storeCombination.price,i.productSelect.quota=0,i.productSelect.quota_show=0,i.productSelect.product_stock=0,i.cartAttr=!1,t.$set(t,"attr",i)},pay:function(){var t=this;t.attr.cartAttr=!0,t.isOpen=!0},goPay:function(){var i=this,e={};e.productId=i.storeCombination.product_id,e.cartNum=i.attr.productSelect.cart_num,e.uniqueId=i.attr.productSelect.unique,e.combinationId=i.storeCombination.id,e.new=1,(0,a.postCartAdd)(e).then((function(e){t.navigateTo({url:"/pages/goods/order_confirm/index?new=1&cartId="+e.data.cartId+"&pinkId="+i.pinkId})})).catch((function(t){i.$util.Tips({title:t})}))},goPoster:function(){var i=this;i.posters=!1,t.navigateTo({url:"/pages/activity/poster-poster/index?type=2&id="+i.pinkId})},goOrder:function(){var i=this;t.navigateTo({url:"/pages/goods/order_details/index?order_id="+i.currentPinkOrder})},goList:function(){t.navigateTo({url:"/pages/activity/goods_combination/index"})},goDetail:function(i){this.pinkId=i,t.navigateTo({url:"/pages/activity/goods_combination_details/index?id="+i})},getCombinationPink:function(){var i=this,e=this;(0,r.getCombinationPink)(e.pinkId).then((function(o){if(e.$set(e,"storeCombinationHost",o.data.store_combination_host),o.data.pinkT.stop_time=parseInt(o.data.pinkT.stop_time),e.$set(e,"storeCombination",o.data.store_combination),e.$set(e.attr.productSelect,"num",o.data.store_combination.num),e.$set(e,"pinkT",o.data.pinkT),e.$set(e,"pinkAll",o.data.pinkAll),e.$set(e,"count",o.data.count),e.$set(e,"userBool",o.data.userBool),e.$set(e,"pinkBool",o.data.pinkBool),e.$set(e,"isOk",o.data.is_ok),e.$set(e,"currentPinkOrder",o.data.current_pink_order),e.$set(e,"userInfo",o.data.userInfo),e.$set(e,"orderPid",o.data.order_pid),e.attr.productAttr=o.data.store_combination.productAttr,e.productValue=o.data.store_combination.productValue,e.setProductSelect(),0!=e.attr.productAttr&&e.DefaultSelect(),1==o.data.is_ok&&0==o.data.userBool)return i.$util.Tips({title:e.$t("你不是该团的成员")},(function(){t.navigateTo({url:"/pages/activity/goods_combination/index"})}))})).catch((function(e){return i.$util.Tips({title:e},(function(){t.navigateBack()}))}))},getCombinationRemove:function(){var t=this;(0,r.postCombinationRemove)({id:t.pinkId,cid:t.storeCombination.id}).then((function(i){t.$util.Tips({title:i.msg},{tab:3})})).catch((function(i){t.$util.Tips({title:i})}))},lookAll:function(){this.iShidden=!this.iShidden}}};i.default=_}).call(this,e("543d")["default"])},"2d18":function(t,i,e){"use strict";var o=e("f489"),n=e.n(o);n.a},"5c71":function(t,i,e){"use strict";var o;e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return o}));var n=function(){var t=this,i=t.$createElement,e=(t._self._c,t.$t("￥")),o=t.$t("人拼"),n=0===t.pinkBool?t.$t("剩余"):null,s=0===t.pinkBool?t.$t("结束"):null,r=1===t.pinkBool?t.$t("恭喜您拼团成功"):null,a=1!==t.pinkBool&&-1===t.pinkBool?t.$t("还差"):null,u=1!==t.pinkBool&&-1===t.pinkBool?t.$t("人，拼团失败"):null,c=1!==t.pinkBool&&-1!==t.pinkBool&&0===t.pinkBool?t.$t("拼团中，还差"):null,d=1!==t.pinkBool&&-1!==t.pinkBool&&0===t.pinkBool?t.$t("人拼团成功"):null,l=(1===t.pinkBool||-1===t.pinkBool)&&t.count>9&&t.iShidden?t.$t("收起"):null,h=(1===t.pinkBool||-1===t.pinkBool)&&t.count>9&&!t.iShidden?t.$t("查看更多"):null,p=1===t.userBool&&0==t.isOk&&0===t.pinkBool?t.$t("邀请好友参团"):null,m=(1!==t.userBool||0!=t.isOk||0!==t.pinkBool)&&0===t.userBool&&0===t.pinkBool&&t.count>0?t.$t("我要参团"):null,$=1===t.pinkBool||-1===t.pinkBool?t.$t("再次开团"):null,f=0===t.pinkBool&&1===t.userBool&&t.pinkT.uid==t.userInfo.uid?t.$t("取消开团"):null,_=1===t.pinkBool&&0===t.orderPid?t.$t("查看订单信息"):null,g=t.$t("大家都在拼"),k=t.$t("更多拼团"),b=t.$t("人团"),S=t.$t("￥"),v=t.$t("发送给朋友"),C=t.$t("生成海报");t._isMounted||(t.e0=function(i){t.H5ShareBox=!1}),t.$mp.data=Object.assign({},{$root:{m0:e,m1:o,m2:n,m3:s,m4:r,m5:a,m6:u,m7:c,m8:d,m9:l,m10:h,m11:p,m12:m,m13:$,m14:f,m15:_,m16:g,m17:k,m18:b,m19:S,m20:v,m21:C}})},s=[]},ba77:function(t,i,e){"use strict";(function(t){e("7b91");o(e("66fd"));var i=o(e("ffe5"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(i.default)}).call(this,e("543d")["createPage"])},f489:function(t,i,e){},ffe5:function(t,i,e){"use strict";e.r(i);var o=e("5c71"),n=e("0f74");for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);e("2d18");var r,a=e("f0c5"),u=Object(a["a"])(n["default"],o["b"],o["c"],!1,null,"4d8c3ac2",null,!1,o["a"],r);i["default"]=u.exports}},[["ba77","common/runtime","common/vendor"]]]);