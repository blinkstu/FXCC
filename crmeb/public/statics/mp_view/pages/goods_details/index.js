(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods_details/index"],{"0c85":function(t,e,i){},"0cbd":function(t,e,i){"use strict";var s;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return s}));var o=function(){var t=this,e=t.$createElement,i=(t._self._c,t.$t("￥")),s=t.storeInfo.spec_type?t.$t("起"):null,o=t.storeInfo.vip_price&&t.storeInfo.vip_price>0&&1==t.storeInfo.is_vip&&1==t.svip_price_open?t.$t("￥"):null,n=t.storeInfo.limit_type>0&&1==t.storeInfo.limit_type?t.$t("单次限购"):null,r=t.storeInfo.limit_type>0&&1!=t.storeInfo.limit_type?t.$t("永久限购"):null,a=t.storeInfo.limit_type>0?t.$t(t.storeInfo.unit_name):null,c=t.$t("划线价"),u=t.$t("￥"),l=t.$t("库存"),h=t.$t(t.storeInfo.unit_name)||"",p=t.$t("销量"),d=t.$t(t.storeInfo.unit_name)||"",f=!t.is_money_level&&t.storeInfo.vip_price&&t.storeInfo.is_vip?t.$t("开通“超级会员”立省"):null,g=!t.is_money_level&&t.storeInfo.vip_price&&t.storeInfo.is_vip?t.$t("元"):null,m=!t.is_money_level&&t.storeInfo.vip_price&&t.storeInfo.is_vip?t.$t("立即开通"):null,$=t.storeInfo.presale?t.$t("预售活动时间"):null,v=t.storeInfo.presale?t.$t("预售结束后"):null,_=t.storeInfo.presale?t.$t("天内发货"):null,y=t.couponList.length?t.$t("优惠券"):null,S=t.couponList.length?t.__map(t.couponList,(function(e,i){var s=t.__get_orig(e),o=i<2?t.$t("满"):null,n=i<2?t.$t("减"):null;return{$orig:s,m19:o,m20:n}})):null,I=t.activity.length?t.$t("活动"):null,C=t.activity.length?t.__map(t.activity,(function(e,i){var s=t.__get_orig(e),o="1"===e.type?t.$t("参与秒杀"):null,n="2"===e.type?t.$t("参与砍价"):null,r="3"===e.type?t.$t("参与拼团"):null;return{$orig:s,m22:o,m23:n,m24:r}})):null,b=t.attr.productAttr.length&&t.skuArr.length>1?t.skuArr.slice(0,4):null,A=t.attr.productAttr.length&&t.skuArr.length>1?t.$t("共"):null,k=t.attr.productAttr.length&&t.skuArr.length>1?t.$t("种规格可选"):null,w=t.replyCount?t.$t("用户评价"):null,x=t.replyCount?t.$t("好评率"):null,T=t.good_list.length?t.$t("优品推荐"):null,P=t.good_list.length?t.__map(t.good_list,(function(e,i){var s=t.__get_orig(e),o=t.$t("￥"),n=t.__map(e.list,(function(e,i){var s=t.__get_orig(e),o=e.activity&&"1"===e.activity.type?t.$t("秒杀"):null,n=e.activity&&"2"===e.activity.type?t.$t("砍价"):null,r=e.activity&&"3"===e.activity.type?t.$t("拼团"):null;return{$orig:s,m30:o,m31:n,m32:r}}));return{$orig:s,m33:o,l3:n}})):null,L=t.$t("产品介绍"),V=t.$t("首页"),q=t.$t("收藏"),H=parseFloat(t.CartCount),M=t.$t("购物车"),O=t.a?t.$t("暂无产品"):null,N=!t.a&&!t.storeInfo.presale&&t.attr.productSelect.stock<=0&&t.storeInfo.cart_button?t.$t("加入购物车"):null,R=!t.a&&!t.storeInfo.presale&&t.attr.productSelect.stock<=0?t.$t("已售罄"):null,j=t.a||t.storeInfo.presale||t.attr.productSelect.stock<=0||!t.storeInfo.cart_button?null:t.$t("加入购物车"),D=t.a||t.storeInfo.presale||t.attr.productSelect.stock<=0?null:t.$t("立即购买"),U=t.a||!t.storeInfo.presale||1!==t.presale_pay_status&&3!==t.presale_pay_status||1!==t.presale_pay_status?null:t.$t("未开始"),B=t.a||!t.storeInfo.presale||1!==t.presale_pay_status&&3!==t.presale_pay_status||1===t.presale_pay_status?null:t.$t("已结束"),E=!t.a&&t.storeInfo.presale&&1!==t.presale_pay_status&&3!==t.presale_pay_status&&(t.attr.productSelect.quota<=0||t.attr.productSelect.quota<t.attr.productSelect.cart_num)?t.$t("已售罄"):null,F=t.a||!t.storeInfo.presale||1===t.presale_pay_status||3===t.presale_pay_status||t.attr.productSelect.quota<=0||t.attr.productSelect.quota<t.attr.productSelect.cart_num||2!==t.presale_pay_status?null:t.$t("立即购买"),W=t.$t("发送给朋友"),z=t.$t("生成海报"),G=t.posterImageStatus?t.$t("保存到手机"):null,Q=parseInt(t.id);t._isMounted||(t.e0=function(e){t.H5ShareBox=!1}),t.$mp.data=Object.assign({},{$root:{m0:i,m1:s,m2:o,m3:n,m4:r,m5:a,m6:c,m7:u,m8:l,m9:h,m10:p,m11:d,m12:f,m13:g,m14:m,m15:$,m16:v,m17:_,m18:y,l0:S,m21:I,l1:C,l2:b,m25:A,m26:k,m27:w,m28:x,m29:T,l4:P,m34:L,m35:V,m36:q,m37:H,m38:M,m39:O,m40:N,m41:R,m42:j,m43:D,m44:U,m45:B,m46:E,m47:F,m48:W,m49:z,m50:G,m51:Q}})},n=[]},"2bfc":function(t,e,i){"use strict";i.r(e);var s=i("b082"),o=i.n(s);for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);e["default"]=o.a},"2c67":function(t,e,i){"use strict";var s=i("0c85"),o=i.n(s);o.a},"4ad3":function(t,e,i){"use strict";(function(t){i("7b91");s(i("66fd"));var e=s(i("9ec2"));function s(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=i,t(e.default)}).call(this,i("543d")["createPage"])},"9ec2":function(t,e,i){"use strict";i.r(e);var s=i("0cbd"),o=i("2bfc");for(var n in o)"default"!==n&&function(t){i.d(e,t,(function(){return o[t]}))}(n);i("2c67");var r,a=i("f0c5"),c=Object(a["a"])(o["default"],s["b"],s["c"],!1,null,"2ca85e62",null,!1,s["a"],r);e["default"]=c.exports},b082:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i("768b"),o=i("816a"),n=i("a656"),r=i("5ba0"),a=i("a368"),c=i("26cb"),u=(i("8aa5"),p(i("aeca")),i("168b")),l=p(i("9ad2")),h=i("2eb8");function p(t){return t&&t.__esModule?t:{default:t}}function d(t){return $(t)||m(t)||g(t)||f()}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function g(t,e){if(t){if("string"===typeof t)return v(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?v(t,e):void 0}}function m(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function $(t){if(Array.isArray(t))return v(t)}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,s=new Array(e);i<e;i++)s[i]=t[i];return s}var _=t.getSystemInfoSync().statusBarHeight+"px",y=function(){i.e("components/cusPreviewImg/index").then(function(){return resolve(i("d13e"))}.bind(null,i)).catch(i.oe)},S=function(){i.e("components/productConSwiper/index").then(function(){return resolve(i("d7b4"))}.bind(null,i)).catch(i.oe)},I=function(){Promise.all([i.e("common/vendor"),i.e("components/couponListWindow/index")]).then(function(){return resolve(i("5a40"))}.bind(null,i)).catch(i.oe)},C=function(){i.e("components/productWindow/index").then(function(){return resolve(i("f9f0"))}.bind(null,i)).catch(i.oe)},b=function(){i.e("components/userEvaluation/index").then(function(){return resolve(i("9343"))}.bind(null,i)).catch(i.oe)},A=function(){i.e("components/shareRedPackets/index").then(function(){return resolve(i("e29a"))}.bind(null,i)).catch(i.oe)},k=function(){Promise.all([i.e("common/vendor"),i.e("components/kefuIcon/index")]).then(function(){return resolve(i("107b"))}.bind(null,i)).catch(i.oe)},w=function(){i.e("components/menuIcon").then(function(){return resolve(i("bf02"))}.bind(null,i)).catch(i.oe)},x=function(){i.e("components/Authorize").then(function(){return resolve(i("cacf"))}.bind(null,i)).catch(i.oe)},T=getApp(),P=function(){Promise.all([i.e("common/vendor"),i.e("components/jyf-parser/jyf-parser")]).then(function(){return resolve(i("7772"))}.bind(null,i)).catch(i.oe)},L=function(){i.e("components/homeList/index").then(function(){return resolve(i("14d2"))}.bind(null,i)).catch(i.oe)},V={components:{productConSwiper:S,couponListWindow:I,productWindow:C,userEvaluation:b,shareRedPackets:A,kefuIcon:k,menuIcon:w,cusPreviewImg:y,authorize:x,parser:P,homeList:L},directives:{trigger:{inserted:function(t,e){t.click()}}},mixins:[l.default,h.sharePoster],data:function(){return{imgHost:u.HTTP_REQUEST_URL,sysHeight:_,a:!1,showSkeleton:!0,isNodes:0,Active:!1,presale_pay_status:1,coupon:{coupon:!1,type:-1,list:[],count:[]},showAnimate:!0,showMenuIcon:!1,attrTxt:this.$t("请选择"),attrValue:"",animated:!1,id:0,replyCount:0,reply:[],storeInfo:{},productValue:[],couponList:[],cart_num:1,isAuto:!1,isShowAuth:!1,isOpen:!1,actionSheetHidden:!0,posterImageStatus:!1,storeImage:"",PromotionCode:"",canvasStatus:!1,posterImage:"",posterbackgd:"/static/images/posterbackgd.png",sharePacket:{isState:!0},uid:0,circular:!1,autoplay:!1,interval:3e3,duration:500,clientHeight:"",systemStore:{},good_list:[],replyChance:0,CartCount:0,isDown:!0,storeSelfMention:!0,posters:!1,weixinStatus:!1,attr:{cartAttr:!1,productAttr:[],productSelect:{}},description:"",navActive:0,H5ShareBox:!1,activity:[],navH:"",navList:[],opacity:0,scrollY:0,topArr:[],toView:"",height:0,heightArr:[],lock:!1,scrollTop:0,tagStyle:{img:"width:100%;display:block;",table:"width:100%",video:"width:100%;height:100%;"},returnShow:!0,diff:"",is_money_level:1,is_vip:0,navbarRight:0,homeTop:20,routineContact:0,skuArr:[],selectSku:{},currentPage:!1,svip_price_open:1}},computed:(0,c.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,e){1==t&&(this.getCouponList(),this.getCartCount(),this.downloadFilePromotionCode())},deep:!0},storeInfo:{handler:function(){this.$nextTick((function(){}))},immediate:!0}},onLoad:function(e){var i=this,s=getCurrentPages();if(i.returnShow=1!==s.length,i.navH=T.globalData.navHeight,i.id=e.id,t.getSystemInfo({success:function(e){i.height=e.windowHeight,i.navbarRight=e.windowWidth-t.getMenuButtonBoundingClientRect().left}}),e.scene){var o=i.$util.getUrlParams(decodeURIComponent(e.scene));o.id&&(e.id=o.id),o.pid&&(T.globalData.spid=o.pid)}if(!e.id)return this.showSkeleton=!1,i.$util.Tips({title:i.$t("缺少参数无法查看商品")},{tab:3,url:1});i.id=e.id,i.getGoodsDetails()},onReady:function(){this.isNodes++,this.$nextTick((function(){var e=this,i=t.getMenuButtonBoundingClientRect(),s=t.createSelectorQuery().in(this);s.select("#home").boundingClientRect((function(t){e.homeTop=2*i.top+i.height-t.height||0})).exec()}))},onShareAppMessage:function(){var t=this;return t.$set(t,"actionSheetHidden",!t.actionSheetHidden),(0,o.userShare)(),{title:t.storeInfo.store_name||"",imageUrl:t.storeInfo.image||"",path:"/pages/goods_details/index?id="+t.id+"&spid="+t.uid}},onNavigationBarButtonTap:function(t){this.currentPage=!this.currentPage},methods:{moreNav:function(){this.currentPage=!this.currentPage},jumpUrl:function(e){t.switchTab({url:e})},videoPause:function(){this.$nextTick((function(){that.infoScroll()}))},qrR:function(t){},closeChange:function(){this.$set(this.sharePacket,"isState",!0)},boxStatus:function(t){this.showAnimate=t},goActivity:function(e){var i=e;"1"===i.type?t.navigateTo({url:"/pages/activity/goods_seckill_details/index?id=".concat(i.id,"&time=").concat(i.time,"&status=1")}):"2"===i.type?t.navigateTo({url:"/pages/activity/goods_bargain_details/index?id=".concat(i.id,"&bargain=").concat(this.uid)}):t.navigateTo({url:"/pages/activity/goods_combination_details/index?id=".concat(i.id)})},iptCartNum:function(t){this.$set(this.attr.productSelect,"cart_num",t)},returns:function(){return t.navigateBack({delta:1})},tap:function(t){var e="past"+t,i=(t=t,this);this.$set(this,"toView",e),this.$set(this,"navActive",t),this.$set(this,"lock",!0),this.$set(this,"scrollTop",t>0?i.topArr[t]-T.globalData.navHeight/2:i.topArr[t])},scroll:function(t){this.$refs.proSwiper.videoPause();var e=this,i=t.detail.scrollTop,s=i/200;if(s=s>1?1:s,e.$set(e,"opacity",s),e.$set(e,"scrollY",i),e.$set(e,"showAnimate",!1),e.$set(e,"showMenuIcon",!1),e.$set(e,"currentPage",!1),e.lock)e.$set(e,"lock",!1);else for(var o=0;o<e.topArr.length;o++)if(i<e.topArr[o]-T.globalData.navHeight/2+e.heightArr[o]){e.$set(e,"navActive",o);break}},goDetail:function(e){0!=e.activity.length?e.activity&&2==e.activity.type?t.redirectTo({url:"/pages/activity/goods_bargain_details/index?id=".concat(e.activity.id,"&bargain=").concat(this.uid)}):e.activity&&3==e.activity.type?t.redirectTo({url:"/pages/activity/goods_combination_details/index?id=".concat(e.activity.id)}):e.activity&&1==e.activity.type&&t.redirectTo({url:"/pages/activity/goods_seckill_details/index?id=".concat(e.activity.id,"&time=").concat(e.activity.time,"&status=1")}):t.redirectTo({url:"/pages/goods_details/index?id="+e.id})},onLoadFun:function(t){},ChangCouponsClone:function(){this.$set(this.coupon,"coupon",!1)},getUserInfo:function(){var t=this;(0,o.getUserInfo)().then((function(e){t.$set(t,"uid",e.data.uid),t.$set(t,"is_money_level",e.data.is_money_level)}))},ChangeCartNum:function(t){var e=this.productValue[this.attrValue];if(void 0!==e||this.attr.productAttr.length||(e=this.attr.productSelect),void 0!==e){var i=e.stock||0,s=this.attr.productSelect;t?(s.cart_num++,s.cart_num>i&&(this.$set(this.attr.productSelect,"cart_num",i||1),this.$set(this,"cart_num",i||1))):(s.cart_num--,s.cart_num<1&&(this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"cart_num",1)))}},attrVal:function(t){this.$set(this.attr.productAttr[t.indexw],"index",this.attr.productAttr[t.indexw].attr_values[t.indexn])},ChangeAttr:function(t){var e=this,i=this.productValue[t];i?this.a=!1:this.$util.Tips({title:this.$t("重新选择"),success:function(){e.a=!0,e.attr.productSelect.stock=0,e.attr.productSelect.quota=0,e.attr.productSelect.cart_num=0}}),this.$set(this,"selectSku",i),i&&i.stock>0?(this.$set(this.attr.productSelect,"image",i.image),this.$set(this.attr.productSelect,"price",i.price),this.$set(this.attr.productSelect,"stock",i.stock),this.$set(this.attr.productSelect,"unique",i.unique),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this.attr.productSelect,"vip_price",i.vip_price),this.$set(this,"attrValue",t),this.$set(this,"attrTxt",this.$t("已选择"))):(this.$set(this.attr.productSelect,"image",i.image),this.$set(this.attr.productSelect,"price",i.price),this.$set(this.attr.productSelect,"stock",0),this.$set(this.attr.productSelect,"unique",""),this.$set(this.attr.productSelect,"cart_num",0),this.$set(this.attr.productSelect,"vip_price",this.storeInfo.vip_price),this.$set(this,"attrValue",""),this.$set(this,"attrTxt",this.$t("请选择")))},ChangCoupons:function(t){var e=t,i=this.$util.ArrayRemove(this.couponList,"id",e.id);this.$set(this,"couponList",i),this.getCouponList()},setClientHeight:function(){var e=this;if(e.good_list.length){var i=t.createSelectorQuery().in(this).select("#list0");i.fields({size:!0},(function(t){e.$set(e,"clientHeight",t.height+20)})).exec()}},getGoodsDetails:function(){var e=this,i=this;(0,s.getProductDetail)(i.id).then((function(s){for(var o=s.data.storeInfo,n=s.data.good_list||[],r=Math.ceil(n.length/6),a=new Array,c=0;c<r;c++){var u=n.slice(6*c,6*c+6);u.length&&a.push({list:u})}for(var l in i.$set(i,"storeInfo",o),i.$set(i,"description",o.description),e.description&&(e.description=e.description.replace(/<img/gi,'<img style="max-width:100%;height:auto;float:left;display:block" '),e.description=e.description.replace(/<video/gi,'<video style="width:100%;height:300px;display:block" ')),i.$set(i,"presale_pay_status",s.data.storeInfo.presale_pay_status),i.$set(i,"reply",s.data.reply?[s.data.reply]:[]),i.$set(i,"replyCount",s.data.replyCount),i.$set(i,"replyChance",s.data.replyChance),i.$set(i.attr,"productAttr",s.data.productAttr),i.$set(i,"productValue",s.data.productValue),i.$set(i,"is_vip",s.data.storeInfo.is_vip),i.$set(i.sharePacket,"priceName",s.data.priceName),i.$set(i.sharePacket,"isState",0!=s.data.priceName),i.$set(i,"systemStore",s.data.system_store),i.$set(i,"storeSelfMention",s.data.store_self_mention),i.$set(i,"good_list",a),i.$set(i,"activity",s.data.activity?s.data.activity:[]),i.$set(i,"couponList",s.data.coupons),i.$set(i,"routineContact",Number(s.data.routine_contact_type)),t.setNavigationBarTitle({title:o.store_name.substring(0,7)+"..."}),s.data.productValue){var h=s.data.productValue[l];i.skuArr.push(h)}e.$set(e,"selectSku",i.skuArr[0]),i.$set(i,"diff",i.$util.$h.Sub(o.price,o.vip_price));var p=[i.$t("商品"),i.$t("详情")];s.data.replyCount&&p.splice(1,0,i.$t("评价")),i.$set(i,"navList",p),i.$set(i,"storeImage",i.storeInfo.image),i.$set(i,"svip_price_open",s.data.svip_price_open),i.isLogin&&i.getUserInfo(),e.$nextTick((function(){n.length&&i.setClientHeight()})),setTimeout((function(){i.infoScroll()}),500),i.downloadFilestoreImage(),i.DefaultSelect(),i.getCartCount()})).catch((function(t){return i.$util.Tips({title:t.toString()},{tab:3,url:1})}))},infoScroll:function(){for(var e=this,i=[],s=[],o=0;o<e.navList.length;o++){var n=t.createSelectorQuery().in(this),r="#past"+o;(!this.replyCount&&!e.good_list.length&&1==o||this.replyCount&&!e.good_list.length&&2==o||!this.replyCount&&e.good_list.length&&2==o)&&(r="#past3"),!this.replyCount&&e.good_list.length&&1==o&&(r="#past2"),n.select(r).boundingClientRect(),n.exec((function(t){var o=t[0].top,n=t[0].height;i.push(o),s.push(n),e.$set(e,"topArr",i),e.$set(e,"heightArr",s)}))}},makePhone:function(){t.makePhoneCall({phoneNumber:this.systemStore.phone})},showMaoLocation:function(){if(!this.systemStore.latitude||!this.systemStore.longitude)return this.$util.Tips({title:this.$t("缺少经纬度信息无法查看地图")});t.openLocation({latitude:parseFloat(this.systemStore.latitude),longitude:parseFloat(this.systemStore.longitude),scale:8,name:this.systemStore.name,address:this.systemStore.address+this.systemStore.detailed_address,success:function(){}})},DefaultSelect:function(){var t=this.attr.productAttr,e=[];for(var i in this.productValue)if(this.productValue[i].stock>0){e=this.attr.productAttr.length?i.split(","):[];break}for(var s=0;s<t.length;s++)this.$set(t[s],"index",e[s]);var o=this.productValue[e.join(",")];o&&t.length?(this.$set(this.attr.productSelect,"store_name",this.storeInfo.store_name),this.$set(this.attr.productSelect,"image",o.image),this.$set(this.attr.productSelect,"price",o.price),this.$set(this.attr.productSelect,"stock",o.stock),this.$set(this.attr.productSelect,"unique",o.unique),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"attrValue",e.join(",")),this.$set(this.attr.productSelect,"vip_price",o.vip_price),this.$set(this,"attrTxt",this.$t("已选择"))):!o&&t.length?(this.$set(this.attr.productSelect,"store_name",this.storeInfo.store_name),this.$set(this.attr.productSelect,"image",this.storeInfo.image),this.$set(this.attr.productSelect,"price",this.storeInfo.price),this.$set(this.attr.productSelect,"stock",0),this.$set(this.attr.productSelect,"unique",""),this.$set(this.attr.productSelect,"cart_num",0),this.$set(this.attr.productSelect,"vip_price",this.storeInfo.vip_price),this.$set(this,"attrValue",""),this.$set(this,"attrTxt",this.$t("请选择"))):o||t.length||(this.$set(this.attr.productSelect,"store_name",this.storeInfo.store_name),this.$set(this.attr.productSelect,"image",this.storeInfo.image),this.$set(this.attr.productSelect,"price",this.storeInfo.price),this.$set(this.attr.productSelect,"stock",this.storeInfo.stock),this.$set(this.attr.productSelect,"unique",this.storeInfo.unique||""),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this.attr.productSelect,"vip_price",this.storeInfo.vip_price),this.$set(this,"attrValue",""),this.$set(this,"attrTxt",this.$t("请选择")))},getCouponList:function(t){var e=this,i={page:1,limit:20,product_id:e.id};void 0===t&&null===t||(i.type=t),(0,n.getCoupons)(i).then((function(i){if(e.$set(e.coupon,"count",i.data.count),void 0===t||null===t){var s=d(e.coupon.count),o="",n=s.findIndex((function(t){return t})),r=e.coupon.count,a=[],c=0;r.forEach((function(t,e){0===t?c=e:a.push(t)})),o=3==a.length?2:2==a.length?2===c?1:2:r.findIndex((function(t){return t===s[n]})),e.$set(e.coupon,"type",o),e.getCouponList(o)}else e.$set(e.coupon,"list",i.data.list)}))},ChangCouponsUseState:function(t){var e=this;e.coupon.list[t].is_use=!0,e.$set(e.coupon,"list",e.coupon.list),e.$set(e.coupon,"coupon",!1)},setCollect:function(){if(!1===this.isLogin)(0,a.toLogin)();else{var t=this;this.storeInfo.userCollect?(0,s.collectDel)([this.storeInfo.id]).then((function(e){return t.$set(t.storeInfo,"userCollect",!t.storeInfo.userCollect),t.$util.Tips({title:e.msg})})):(0,s.collectAdd)(this.storeInfo.id).then((function(e){return t.$set(t.storeInfo,"userCollect",!t.storeInfo.userCollect),t.$util.Tips({title:e.msg})}))}},selecAttr:function(){this.$refs.proSwiper.videoIsPause(),this.$set(this.attr,"cartAttr",!0),this.$set(this,"isOpen",!0)},couponTap:function(){var t=this;!1===t.isLogin?(0,a.toLogin)():(this.$refs.proSwiper.videoIsPause(),t.getCouponList(),t.$set(t.coupon,"coupon",!0))},onMyEvent:function(){this.$set(this.attr,"cartAttr",!1),this.$set(this,"isOpen",!1)},joinCart:function(t){!1===this.isLogin?(0,a.toLogin)():(this.$refs.proSwiper.videoIsPause(),this.goCat())},goCart:function(){t.switchTab({url:"/pages/order_addcart/order_addcart"})},goCat:function(e){var i=this,o=i.productValue[this.attrValue];if(i.currentPage=!1,i.attrValue?i.attr.cartAttr=!i.isOpen:i.isOpen?i.attr.cartAttr=!0:i.attr.cartAttr=!i.attr.cartAttr,!0===i.attr.cartAttr&&!1===i.isOpen)return i.isOpen=!0;if(i.attr.productAttr.length&&void 0===o&&!0===i.isOpen)return i.$util.Tips({title:i.$t("产品库存不足，请选择其它属性")});if(i.attr.productSelect.cart_num<=0)return i.attr.productSelect.cart_num=1,i.isOpen=!1,i.$util.Tips({title:i.$t("请选择数量")});var n={productId:i.id,cartNum:i.attr.productSelect.cart_num,new:void 0===e?0:1,uniqueId:void 0!==i.attr.productSelect?i.attr.productSelect.unique:"",virtual_type:i.storeInfo.virtual_type};(0,s.postCartAdd)(n).then((function(s){i.isOpen=!1,i.attr.cartAttr=!1,e?t.navigateTo({url:"/pages/goods/order_confirm/index?new=1&cartId="+s.data.cartId}):i.$util.Tips({title:i.$t("添加成功"),success:function(){i.getCartCount(!0)}})})).catch((function(t){return i.isOpen=!1,i.$util.Tips({title:t})}))},getCartCount:function(t){var e=this,i=this,s=i.isLogin;s&&(0,r.getCartCounts)().then((function(s){i.CartCount=s.data.count,e.$store.commit("indexData/setCartNum",i.CartCount>99?"...":i.CartCount+""),t&&(i.animated=!0,setTimeout((function(){i.animated=!1}),500))}))},goBuy:function(t){!1===this.isLogin?(0,a.toLogin)():(this.$refs.proSwiper.videoIsPause(),this.goCat(!0))},open:function(t){this.showMenuIcon=t},authColse:function(t){this.isShowAuth=t},listenerActionSheet:function(){if(this.currentPage=!1,!1===this.isLogin)(0,a.toLogin)();else{if(this.posterImage)return void(this.posters=!0);this.posters=!0}},listenerActionClose:function(){this.posters=!1,this.posterImageStatus=!1},posterImageClose:function(){this.posterImageStatus=!1},goFriend:function(){this.posters=!1},savePosterPath:function(){var e=this;t.getSetting({success:function(i){i.authSetting["scope.writePhotosAlbum"]?t.saveImageToPhotosAlbum({filePath:e.posterImage,success:function(t){e.posterImageClose(),e.$util.Tips({title:e.$t("保存成功"),icon:"success"})},fail:function(t){e.$util.Tips({title:e.$t("保存失败")})}}):t.authorize({scope:"scope.writePhotosAlbum",success:function(){t.saveImageToPhotosAlbum({filePath:e.posterImage,success:function(t){e.posterImageClose(),e.$util.Tips({title:e.$t("保存成功"),icon:"success"})},fail:function(t){e.$util.Tips({title:e.$t("保存失败")})}})}})}})},tabCouponType:function(t){this.$set(this.coupon,"type",t),this.getCouponList(t)},showImg:function(t){this.$refs.cusPreviewImg.open(this.selectSku.suk)},changeSwitch:function(t){var e=this.skuArr[t];this.$set(this,"selectSku",e);var i=e.suk.split(",");this.$set(this.attr.productAttr[0],"index",i[0]),2==i.length?(this.$set(this.attr.productAttr[0],"index",i[0]),this.$set(this.attr.productAttr[1],"index",i[1])):3==i.length?(this.$set(this.attr.productAttr[0],"index",i[0]),this.$set(this.attr.productAttr[1],"index",i[1]),this.$set(this.attr.productAttr[2],"index",i[2])):4==i.length&&(this.$set(this.attr.productAttr[0],"index",i[0]),this.$set(this.attr.productAttr[1],"index",i[1]),this.$set(this.attr.productAttr[2],"index",i[2]),this.$set(this.attr.productAttr[3],"index",i[3])),e&&(this.$set(this.attr.productSelect,"image",e.image),this.$set(this.attr.productSelect,"price",e.price),this.$set(this.attr.productSelect,"stock",e.stock),this.$set(this.attr.productSelect,"unique",e.unique),this.$set(this.attr.productSelect,"vipPrice",e.vipPrice),this.$set(this,"attrTxt",this.$t("已选择")),this.$set(this,"attrValue",e.suk))}}};e.default=V}).call(this,i("543d")["default"])}},[["4ad3","common/runtime","common/vendor"]]]);