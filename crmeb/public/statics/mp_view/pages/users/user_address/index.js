(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/user_address/index"],{"1a88":function(t,i,e){"use strict";e.r(i);var n=e("b5a9"),s=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=s.a},"987e":function(t,i,e){"use strict";e.r(i);var n=e("a78c"),s=e("1a88");for(var o in s)"default"!==o&&function(t){e.d(i,t,(function(){return s[t]}))}(o);e("cd33");var r,c=e("f0c5"),d=Object(c["a"])(s["default"],n["b"],n["c"],!1,null,"50a2e49c",null,!1,n["a"],r);i["default"]=d.exports},a78c:function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}));var s=function(){var t=this,i=t.$createElement,e=(t._self._c,t.$t("姓名")),n=t.$t("请输入姓名"),s=t.$t("联系电话"),o=t.$t("请输入联系电话"),r=t.$t("所在地区"),c=t.$t("详细地址"),d=t.$t("请填写具体地址"),a=t.$t("设置为默认地址"),u=t.$t("立即保存"),l=t.id?null:t.$t("导入微信地址");t.$mp.data=Object.assign({},{$root:{m0:e,m1:n,m2:s,m3:o,m4:r,m5:c,m6:d,m7:a,m8:u,m9:l}})},o=[]},b5a9:function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e("816a"),s=e("a656"),o=e("a368"),r=e("26cb"),c=d(e("9ad2"));function d(t){return t&&t.__esModule?t:{default:t}}var a=function(){e.e("components/Authorize").then(function(){return resolve(e("cacf"))}.bind(null,e)).catch(e.oe)},u=function(){Promise.all([e.e("common/vendor"),e.e("components/home/index")]).then(function(){return resolve(e("a25b"))}.bind(null,e)).catch(e.oe)},l={components:{authorize:a,home:u},mixins:[c.default],data:function(){return{regionDval:[this.$t("浙江省"),this.$t("杭州市"),this.$t("滨江区")],cartId:"",pinkId:0,couponId:0,id:0,userAddress:{is_default:!1},region:[this.$t("省"),this.$t("市"),this.$t("区")],valueRegion:[0,0,0],isAuto:!1,isShowAuth:!1,district:[],multiArray:[],multiIndex:[0,0,0],cityId:0,defaultRegion:[this.$t("广东省"),this.$t("广州市"),this.$t("番禺区")],defaultRegionCode:"110101",news:"",noCoupon:0}},computed:(0,r.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,i){t&&this.getUserAddress()},deep:!0}},onLoad:function(i){this.isLogin?(this.cartId=i.cartId||"",this.pinkId=i.pinkId||0,this.couponId=i.couponId||0,this.id=i.id||0,this.noCoupon=i.noCoupon||0,this.news=i.new||"",t.setNavigationBarTitle({title:i.id?this.$t("修改地址"):this.$t("添加地址")}),this.getUserAddress(),this.getCityList()):(0,o.toLogin)()},methods:{getCityList:function(){var t=this,i=this;(0,s.getCity)().then((function(e){t.district=e.data,i.initialize()}))},initialize:function(){var t=this,i=this,e=[],n=[],s=[],o=i.district[0].c||[];o.length&&o[0].c;i.district.forEach((function(i,n){e.push(i.n),i.n===t.region[0]&&(t.valueRegion[0]=n,t.multiIndex[0]=n)})),i.district[this.valueRegion[0]].c.forEach((function(i,e){t.region[1]==i.c&&(t.valueRegion[1]=e,t.multiIndex[1]=e),n.push(i.n)})),i.district[this.valueRegion[0]].c[this.valueRegion[1]].c.forEach((function(i,e){t.region[2]==i.c&&(t.valueRegion[2]=e,t.multiIndex[2]=e),s.push(i.n)})),this.multiArray=[e,n,s]},bindRegionChange:function(t){var i=this.multiIndex,e=this.district[i[0]]||{c:[]},n=e.c[i[1]]||{v:0},s=this.multiArray,o=t.detail.value;this.region=[s[0][o[0]],s[1][o[1]],s[2][o[2]]],this.cityId=n.v,this.valueRegion=[0,0,0],this.initialize()},bindMultiPickerColumnChange:function(t){var i=this,e=t.detail.column,n=t.detail.value,s=this.district[n]||{c:[]},o=i.multiArray,r=i.multiIndex;switch(r[e]=n,e){case 0:var c=s.c[0]||{c:[]};o[1]=s.c.map((function(t){return t.n})),o[2]=c.c.map((function(t){return t.n}));break;case 1:var d=i.district[r[0]].c[r[1]].c||[];o[2]=d.map((function(t){return t.n}));break;case 2:break}this.$set(this.multiArray,0,o[0]),this.$set(this.multiArray,1,o[1]),this.$set(this.multiArray,2,o[2]),this.multiIndex=r},onLoadFun:function(){this.getUserAddress()},authColse:function(t){this.isShowAuth=t},toggleTab:function(t){this.$refs[t].show()},onConfirm:function(t){this.region=t.checkArr[0]+"-"+t.checkArr[1]+"-"+t.checkArr[2]},getUserAddress:function(){if(!this.id)return!1;var t=this;(0,n.getAddressDetail)(this.id).then((function(i){var e=[i.data.province,i.data.city,i.data.district];t.$set(t,"userAddress",i.data),t.$set(t,"region",e),t.cityId=i.data.city_id}))},getWxAddress:function(){var i=this;t.authorize({scope:"scope.address",success:function(e){t.chooseAddress({success:function(e){var s=this,o={};o.province=e.provinceName,o.city=e.cityName,o.district=e.countyName,(0,n.editAddress)({address:o,is_default:1,real_name:e.userName,post_code:e.postalCode,phone:e.telNumber,detail:e.detailInfo,id:0,type:1}).then((function(e){return setTimeout((function(){if(i.cartId){var n=i.cartId,s=i.pinkId,o=i.couponId;i.cartId="",i.pinkId="",i.couponId="",t.navigateTo({url:"/pages/goods/order_confirm/index?cartId="+n+"&addressId="+(i.id?i.id:e.data.id)+"&pinkId="+s+"&couponId="+o+"&new="+i.news+"&noCoupon="+i.noCoupon})}else t.navigateBack({delta:1})}),1e3),i.$util.Tips({title:s.$t("添加成功"),icon:"success"})})).catch((function(t){return i.$util.Tips({title:t})}))},fail:function(t){if("chooseAddress:cancel"==t.errMsg)return i.$util.Tips({title:this.$t("取消选择")})}})},fail:function(e){t.showModal({title:this.$t("您已拒绝导入微信地址权限"),content:this.$t("是否进入权限管理，调整授权？"),success:function(e){if(e.confirm)t.openSetting({success:function(t){}});else if(e.cancel)return i.$util.Tips({title:i.$t("已取消！")})}})}})},getAddress:function(){var i=this,e=this;e.$wechat.openAddress().then((function(s){(0,n.editAddress)({id:i.id,real_name:s.userName,phone:s.telNumber,address:{province:s.provinceName,city:s.cityName,district:s.countryName},detail:s.detailInfo,is_default:1,post_code:s.postalCode,type:1}).then((function(){setTimeout((function(){if(e.cartId){var i=e.cartId,n=e.pinkId,s=e.couponId;e.cartId="",e.pinkId="",e.couponId="",t.navigateTo({url:"/pages/goods/order_confirm/index?cartId="+i+"&addressId="+(e.id?e.id:res.data.id)+"&pinkId="+n+"&couponId="+s+"&new="+e.news+"&noCoupon="+e.noCoupon})}else t.navigateTo({url:"/pages/users/user_address_list/index"})}),1e3),e.$util.Tips({title:e.$t("添加成功"),icon:"success"})})).catch((function(t){return e.$util.Tips({title:t||e.$t("添加失败")})}))})).catch((function(t){}))},formSubmit:function(i){var e=this,s=i.detail.value;if(!s.real_name.trim())return e.$util.Tips({title:e.$t("请填写收货人姓名")});if(!s.phone)return e.$util.Tips({title:e.$t("请填写联系电话")});if(!/^1(3|4|5|7|8|9|6)\d{9}$/i.test(s.phone))return e.$util.Tips({title:e.$t("请输入正确的手机号码")});if(e.region[0]==e.$t("省"))return e.$util.Tips({title:e.$t("请选择所在地区")});if(!s.detail.trim())return e.$util.Tips({title:e.$t("请填写详细地址")});s.id=e.id;var o=e.region;s.address={province:o[0],city:o[1],district:o[2],city_id:e.cityId},s.is_default=e.userAddress.is_default?1:0,t.showLoading({title:e.$t("保存中"),mask:!0}),(0,n.editAddress)(s).then((function(i){e.id?e.$util.Tips({title:e.$t("修改成功"),icon:"success"}):e.$util.Tips({title:e.$t("添加成功"),icon:"success"}),setTimeout((function(){if(!e.cartId)return t.navigateBack({delta:1});var n=e.cartId,s=e.pinkId,o=e.couponId;e.cartId="",e.pinkId="",e.couponId="",t.navigateTo({url:"/pages/goods/order_confirm/index?new="+e.news+"&cartId="+n+"&addressId="+(e.id?e.id:i.data.id)+"&pinkId="+s+"&couponId="+o+"&noCoupon="+e.noCoupon})}),1e3)})).catch((function(t){return e.$util.Tips({title:t})}))},ChangeIsDefault:function(t){this.$set(this.userAddress,"is_default",!this.userAddress.is_default)}}};i.default=l}).call(this,e("543d")["default"])},cd33:function(t,i,e){"use strict";var n=e("e33b"),s=e.n(n);s.a},e1ce:function(t,i,e){"use strict";(function(t){e("7b91");n(e("66fd"));var i=n(e("987e"));function n(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(i.default)}).call(this,e("543d")["createPage"])},e33b:function(t,i,e){}},[["e1ce","common/runtime","common/vendor"]]]);