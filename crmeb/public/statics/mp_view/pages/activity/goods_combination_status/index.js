(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/activity/goods_combination_status/index"],{"09b7":function(t,i,e){"use strict";e.r(i);var o=e("ee8f"),n=e.n(o);for(var s in o)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return o[t]}))}(s);i["default"]=n.a},1355:function(t,i,e){"use strict";(function(t,i){var o=e("4ea4");e("248d");o(e("66fd"));var n=o(e("80f3"));t.__webpack_require_UNI_MP_PLUGIN__=e,i(n.default)}).call(this,e("bc2e")["default"],e("543d")["createPage"])},7939:function(t,i,e){"use strict";var o=e("e810"),n=e.n(o);n.a},"80f3":function(t,i,e){"use strict";e.r(i);var o=e("8498"),n=e("09b7");for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(s);e("7939");var r=e("f0c5"),a=Object(r["a"])(n["default"],o["b"],o["c"],!1,null,"2db8fcc2",null,!1,o["a"],void 0);i["default"]=a.exports},8498:function(t,i,e){"use strict";e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){}));var o=function(){var t=this,i=t.$createElement,e=(t._self._c,t.storeCombination?t.$t("￥"):null),o=t.storeCombination?t.$t("人拼"):null,n=0===t.pinkBool?t.$t("剩余"):null,s=0===t.pinkBool?t.$t("结束"):null,r=1===t.pinkBool?t.$t("恭喜您拼团成功"):null,a=1!==t.pinkBool&&-1===t.pinkBool?t.$t("还差"):null,u=1!==t.pinkBool&&-1===t.pinkBool?t.$t("人，拼团失败"):null,c=1!==t.pinkBool&&-1!==t.pinkBool&&0===t.pinkBool?t.$t("拼团中，还差"):null,h=1!==t.pinkBool&&-1!==t.pinkBool&&0===t.pinkBool?t.$t("人拼团成功"):null,d=t.$t("团长"),l=t.pinkAll.length,p=(1===t.pinkBool||-1===t.pinkBool)&&t.count>9&&t.iShidden?t.$t("收起"):null,m=(1===t.pinkBool||-1===t.pinkBool)&&t.count>9&&!t.iShidden?t.$t("查看更多"):null,$=1===t.userBool&&0==t.isOk&&0===t.pinkBool?t.$t("邀请好友参团"):null,f=(1!==t.userBool||0!=t.isOk||0!==t.pinkBool)&&0===t.userBool&&0===t.pinkBool&&t.count>0?t.$t("我要参团"):null,_=1===t.pinkBool||-1===t.pinkBool?t.$t("再次开团"):null,g=0===t.pinkBool&&1===t.userBool&&t.pinkT.uid==t.userInfo.uid?t.$t("取消开团"):null,k=1===t.pinkBool&&0===t.orderPid?t.$t("查看订单信息"):null,b=t.$t("大家都在拼"),S=t.$t("更多拼团"),v=t.$t("人团"),C=t.$t("￥"),B=t.$t("发送给朋友"),q=t.$t("生成海报");t._isMounted||(t.e0=function(i){t.H5ShareBox=!1}),t.$mp.data=Object.assign({},{$root:{m0:e,m1:o,m2:n,m3:s,m4:r,m5:a,m6:u,m7:c,m8:h,m9:d,g0:l,m10:p,m11:m,m12:$,m13:f,m14:_,m15:g,m16:k,m17:b,m18:S,m19:v,m20:C,m21:B,m22:q}})},n=[]},e810:function(t,i,e){},ee8f:function(t,i,e){"use strict";(function(t){var o=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=o(e("7037")),s=o(e("d96f")),r=e("666f"),a=e("26cb"),u=e("6a71"),c=e("1579"),h=o(e("66ca")),d=e("989b"),l=getApp(),p={name:"GroupRule",components:{CountDown:function(){e.e("components/countDown/index").then(function(){return resolve(e("46a1"))}.bind(null,e)).catch(e.oe)},ProductWindow:function(){e.e("components/productWindow/index").then(function(){return resolve(e("e642"))}.bind(null,e)).catch(e.oe)},home:function(){Promise.all([e.e("common/vendor"),e.e("components/home/index")]).then(function(){return resolve(e("03ff"))}.bind(null,e)).catch(e.oe)},authorize:function(){e.e("components/Authorize").then(function(){return resolve(e("b29f"))}.bind(null,e)).catch(e.oe)}},props:{},mixins:[h.default],data:function(){return{imgHost:d.HTTP_REQUEST_URL,currentPinkOrder:"",isOk:0,pinkBool:0,userBool:0,pinkAll:[],pinkT:[],storeCombination:void 0,storeCombinationHost:[],pinkId:0,count:0,iShidden:!1,isOpen:!1,attr:{cartAttr:!1,productSelect:{image:"",store_name:"",price:"",quota:0,unique:"",cart_num:1,quota_show:0,product_stock:0,num:0},productAttr:[]},cart_num:"",userInfo:{},posters:!1,weixinStatus:!1,H5ShareBox:!1,isAuto:!1,isShowAuth:!1,attrTxt:this.$t("请选择"),attrValue:"",orderPid:0}},computed:(0,a.mapGetters)({isLogin:"isLogin",userData:"userInfo"}),watch:{isLogin:{handler:function(t,i){t?this.getCombinationPink():(0,r.toLogin)()},deep:!0},userData:{handler:function(t,i){t&&(this.userInfo=t,l.globalData.openPages="/pages/activity/goods_combination_status/index?id="+this.pinkId)},deep:!0}},onLoad:function(t){if(t.scene){var i=s.default.getUrlParams(decodeURIComponent(t.scene));"object"===(0,n.default)(i)&&(i.id&&(t.id=i.id),i.pid&&(l.globalData.spid=i.pid))}t.id&&(this.pinkId=t.id),0==this.isLogin&&(this.$Cache.set("login_back_url","/pages/activity/goods_combination_status/index?id=".concat(t.id)),(0,r.toLogin)())},onShareAppMessage:function(){return{title:this.$t("您的好友")+this.userInfo.nickname+this.$t("邀请您参团")+this.storeCombination.title,path:l.globalData.openPages,imageUrl:this.storeCombination.image}},mounted:function(){this.getCombinationPink()},methods:{authColse:function(t){this.isShowAuth=t},onLoadFun:function(t){this.userInfo=t,l.globalData.openPages="/pages/activity/goods_combination_status/index?id="+this.pinkId,this.getCombinationPink()},listenerActionSheet:function(){0==this.isLogin?(0,r.toLogin)():this.posters=!0},listenerActionClose:function(){this.posters=!1},goFriend:function(){this.posters=!1},iptCartNum:function(t){this.$set(this.attr.productSelect,"cart_num",t),this.$set(this,"cart_num",t)},attrVal:function(t){this.attr.productAttr[t.indexw].index=this.attr.productAttr[t.indexw].attr_values[t.indexn]},onMyEvent:function(){this.$set(this.attr,"cartAttr",!1),this.$set(this,"isOpen",!1)},ChangeAttr:function(t){this.$set(this,"cart_num",1);var i=this.productValue[t];i?(this.$set(this.attr.productSelect,"image",i.image),this.$set(this.attr.productSelect,"price",i.price),this.$set(this.attr.productSelect,"quota",i.quota),this.$set(this.attr.productSelect,"unique",i.unique),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this.attr.productSelect,"product_stock",i.product_stock),this.$set(this.attr.productSelect,"quota_show",i.quota_show),this.$set(this,"attrValue",t),this.$set(this,"attrTxt",this.$t("已选择"))):(this.$set(this.attr.productSelect,"image",this.storeCombination.image),this.$set(this.attr.productSelect,"price",this.storeCombination.price),this.$set(this.attr.productSelect,"quota",0),this.$set(this.attr.productSelect,"unique",""),this.$set(this.attr.productSelect,"cart_num",0),this.$set(this.attr.productSelect,"quota_show",0),this.$set(this.attr.productSelect,"product_stock",0),this.$set(this,"attrValue",""),this.$set(this,"attrTxt",this.$t("请选择")))},ChangeCartNum:function(t){var i=this.productValue[this.attrValue];if(this.cart_num&&(i.cart_num=this.cart_num,this.attr.productSelect.cart_num=this.cart_num),void 0!==i||this.attr.productAttr.length||(i=this.attr.productSelect),void 0!==i){i.stock,i.quota_show;var e=i.quota||0,o=i.product_stock||0,n=this.attr.productSelect,s=this.storeCombination.num||0;if(void 0==i.cart_num&&(i.cart_num=1),t){n.cart_num++;var r=[];r.push(s),r.push(e),r.push(o);var a=Math.min.apply(null,r);n.cart_num>=a&&(this.$set(this.attr.productSelect,"cart_num",a||1),this.$set(this,"cart_num",a||1)),this.$set(this,"cart_num",n.cart_num),this.$set(this.attr.productSelect,"cart_num",n.cart_num)}else n.cart_num--,n.cart_num<1&&(this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"cart_num",1)),this.$set(this,"cart_num",n.cart_num),this.$set(this.attr.productSelect,"cart_num",n.cart_num)}},DefaultSelect:function(){var t=this.attr.productAttr,i=[];for(var e in this.productValue)if(this.productValue[e].quota>0){i=this.attr.productAttr.length?e.split(","):[];break}for(var o=0;o<t.length;o++)this.$set(t[o],"index",i[o]);var n=this.productValue[i.join(",")];n&&t.length?(this.$set(this.attr.productSelect,"store_name",this.storeCombination.title),this.$set(this.attr.productSelect,"image",n.image),this.$set(this.attr.productSelect,"price",n.price),this.$set(this.attr.productSelect,"quota",n.quota),this.$set(this.attr.productSelect,"unique",n.unique),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this.attr.productSelect,"product_stock",n.product_stock),this.$set(this.attr.productSelect,"quota_show",n.quota_show),this.$set(this,"attrValue",i.join(",")),this.attrValue=i.join(","),this.$set(this,"attrTxt",this.$t("已选择"))):!n&&t.length?(this.$set(this.attr.productSelect,"store_name",this.storeCombination.title),this.$set(this.attr.productSelect,"image",this.storeCombination.image),this.$set(this.attr.productSelect,"price",this.storeCombination.price),this.$set(this.attr.productSelect,"quota",0),this.$set(this.attr.productSelect,"unique",""),this.$set(this.attr.productSelect,"cart_num",0),this.$set(this.attr.productSelect,"product_stock",0),this.$set(this.attr.productSelect,"quota_show",0),this.$set(this,"attrValue",""),this.$set(this,"attrTxt",this.$t("请选择"))):n||t.length||(this.$set(this.attr.productSelect,"store_name",this.storeCombination.title),this.$set(this.attr.productSelect,"image",this.storeCombination.image),this.$set(this.attr.productSelect,"price",this.storeCombination.price),this.$set(this.attr.productSelect,"quota",0),this.$set(this.attr.productSelect,"unique",this.storeCombination.unique||""),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this.attr.productSelect,"quota_show",0),this.$set(this.attr.productSelect,"product_stock",0),this.$set(this,"attrValue",""),this.$set(this,"attrTxt",this.$t("请选择")))},setProductSelect:function(){var t=this.attr;t.productSelect.image=this.storeCombination.image,t.productSelect.store_name=this.storeCombination.title,t.productSelect.price=this.storeCombination.price,t.productSelect.quota=0,t.productSelect.quota_show=0,t.productSelect.product_stock=0,t.cartAttr=!1,this.$set(this,"attr",t)},pay:function(){this.attr.cartAttr=!0,this.isOpen=!0},goPay:function(){var i=this,e={};e.productId=i.storeCombination.product_id,e.cartNum=i.attr.productSelect.cart_num,e.uniqueId=i.attr.productSelect.unique,e.combinationId=i.storeCombination.id,e.new=1,(0,c.postCartAdd)(e).then((function(e){t.navigateTo({url:"/pages/goods/order_confirm/index?new=1&cartId="+e.data.cartId+"&pinkId="+i.pinkId})})).catch((function(t){i.$util.Tips({title:t})}))},goPoster:function(){this.posters=!1,t.navigateTo({url:"/pages/activity/poster-poster/index?type=2&id="+this.pinkId})},goOrder:function(){t.navigateTo({url:"/pages/goods/order_details/index?order_id="+this.currentPinkOrder})},goList:function(){t.navigateTo({url:"/pages/activity/goods_combination/index"})},goDetail:function(i){this.pinkId=i,t.navigateTo({url:"/pages/activity/goods_combination_details/index?id="+i})},getCombinationPink:function(){var i=this,e=this;(0,u.getCombinationPink)(e.pinkId).then((function(o){if(e.$set(e,"storeCombinationHost",o.data.store_combination_host),o.data.pinkT.stop_time=parseInt(o.data.pinkT.stop_time),e.$set(e,"storeCombination",o.data.store_combination),e.$set(e.attr.productSelect,"num",o.data.store_combination.num),e.$set(e,"pinkT",o.data.pinkT),e.$set(e,"pinkAll",o.data.pinkAll),e.$set(e,"count",o.data.count),e.$set(e,"userBool",o.data.userBool),e.$set(e,"pinkBool",o.data.pinkBool),e.$set(e,"isOk",o.data.is_ok),e.$set(e,"currentPinkOrder",o.data.current_pink_order),e.$set(e,"userInfo",o.data.userInfo),e.$set(e,"orderPid",o.data.order_pid),e.attr.productAttr=o.data.store_combination.productAttr,e.productValue=o.data.store_combination.productValue,e.setProductSelect(),0!=e.attr.productAttr&&e.DefaultSelect(),1==o.data.is_ok&&0==o.data.userBool)return i.$util.Tips({title:e.$t("你不是该团的成员")},(function(){t.navigateTo({url:"/pages/activity/goods_combination/index"})}))})).catch((function(e){return i.$util.Tips({title:e},(function(){t.navigateBack()}))}))},getCombinationRemove:function(){var t=this,i=this;(0,u.postCombinationRemove)({id:i.pinkId,cid:i.storeCombination.id}).then((function(e){i.$util.Tips({title:e.msg}),t.getCombinationPink()})).catch((function(t){i.$util.Tips({title:t})}))},lookAll:function(){this.iShidden=!this.iShidden}}};i.default=p}).call(this,e("543d")["default"])}},[["1355","common/runtime","common/vendor"]]]);