require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/admin/delivery/index"],{"072c":function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){}));var n=function(){var e=this,t=e.$createElement,i=(e._self._c,e.$t("订单号")),n=e.$t("发货方式"),r=3==e.virtualType?e.types.slice(2,3):null,s=3!=e.virtualType?e.types.slice(0,3):null,u=e.logistics.length,a=u>0&&1==e.delivery.config_export_open?e.$t("发货类型"):null,l=u>0&&1==e.curExpress?e.$t("快递公司"):null,o=u>0&&1==e.curExpress?e.$t("快递单号"):null,c=u>0&&1==e.curExpress?e.$t("填写快递单号"):null,d=u>0&&1==e.curExpress&&1==e.curExpress?e.$t("顺丰请输入单号 :收件人或寄件人手机号后四位"):null,p=u>0&&1==e.curExpress&&1==e.curExpress?e.$t("例如：SF000000000000:3941"):null,f=u>0&&2==e.curExpress?e.$t("快递公司"):null,v=u>0&&2==e.curExpress?e.expTemp.length:null,x=u>0&&2==e.curExpress&&v>0?e.$t("电子面单"):null,_=u>0&&2==e.curExpress&&v>0?e.$t("预览"):null,m=u>0&&2==e.curExpress?e.$t("寄件人姓名"):null,y=u>0&&2==e.curExpress?e.$t("填写寄件人姓名"):null,h=u>0&&2==e.curExpress?e.$t("寄件人电话"):null,g=u>0&&2==e.curExpress?e.$t("填写寄件人电话"):null,$=u>0&&2==e.curExpress?e.$t("寄件人地址"):null,T=u>0&&2==e.curExpress?e.$t("填写寄件人地址"):null,b=e.$t("送货人"),E=e.postPeople.length,I=e.$t("备注"),k=e.$t("确认提交");e._isMounted||(e.e0=function(t,i){var n=arguments[arguments.length-1].currentTarget.dataset,r=n.eventParams||n["event-params"];i=r.item;return e.changeType(i,i.key)}),e.$mp.data=Object.assign({},{$root:{m0:i,m1:n,g0:r,g1:s,g2:u,m2:a,m3:l,m4:o,m5:c,m6:d,m7:p,m8:f,g3:v,m9:x,m10:_,m11:m,m12:y,m13:h,m14:g,m15:$,m16:T,m17:b,g4:E,m18:I,m19:k}})},r=[]},"28b4":function(e,t,i){"use strict";i.r(t);var n=i("072c"),r=i("5028");for(var s in r)["default"].indexOf(s)<0&&function(e){i.d(t,e,(function(){return r[e]}))}(s);i("2c2a");var u=i("f0c5"),a=Object(u["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],void 0);t["default"]=a.exports},"2c2a":function(e,t,i){"use strict";var n=i("379f"),r=i.n(n);r.a},"379f":function(e,t,i){},5028:function(e,t,i){"use strict";i.r(t);var n=i("7498"),r=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(s);t["default"]=r.a},7498:function(e,t,i){"use strict";(function(e){var n=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(i("2eee")),s=n(i("c973")),u=i("a27d"),a=(i("e056"),{name:"GoodsDeliver",components:{},props:{},data:function(){return{types:[{type:"express",title:this.$t("发货"),key:1},{type:"send",title:this.$t("送货"),key:2},{type:"fictitious",title:this.$t("无需物流"),key:3}],expressType:[{title:this.$t("手动填写"),key:1},{title:this.$t("电子面单打印"),key:2}],curExpress:1,active:1,order_id:"",delivery:[],logistics:[],delivery_type:"1",delivery_name:"",delivery_id:"",seIndex:0,expIndex:0,expTemp:[],to_name:"",to_tel:"",to_addr:"",postPeople:[],postIndex:0,virtualType:0,fictitious_content:""}},watch:{"$route.params.oid":function(e){void 0!=e&&(this.order_id=e,this.getIndex())}},onLoad:function(e){this.order_id=e.id,this.virtualType=e.virtualType,3==this.virtualType&&(this.active=3),this.getIndex(),this.getLogistics(),this.orderDeliveryInfo(),this.geTorderOrderDelivery()},methods:{scanCode:function(){var t=this;e.scanCode({scanType:["barCode"],success:function(e){t.delivery_id=e.result.replace("CODE_128,","")}})},previewImage:function(){e.previewImage({urls:[this.expTemp[this.expIndex].pic],success:function(){},fail:function(e){}})},geTorderOrderDelivery:function(){var e=this;(0,u.orderOrderDelivery)().then((function(t){e.postPeople=t.data}))},bindPostChange:function(e){this.postIndex=e.detail.value},changeExpTpe:function(e,t){this.curExpress=e.key,this.getLogistics(t||"")},changeType:function(e,t){this.active=t,this.delivery_type=e.key},getIndex:function(){var e=this;(0,u.getAdminOrderDelivery)(e.order_id).then((function(t){e.delivery=t.data}),(function(t){e.$util.Tips({title:t})}))},getLogistics:function(e){var t=this;(0,u.getLogistics)({status:e}).then((function(e){t.logistics=e.data,t.getExpTemp(e.data[0].code)}),(function(e){t.$util.Tips({title:e})}))},saveInfo:function(){var e=this;return(0,s.default)(r.default.mark((function t(){var i,n,s,u,a,l,o,c;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i=e,n=i.delivery_type,s=i.logistics[i.seIndex].name,u=i.delivery_id,i.delivery_name,a={},a.delivery_type=s,a.delivery_code=i.logistics[i.seIndex].code,a.delivery_name=i.logistics[i.seIndex].id,a.type=i.active,1!=n||1!=e.curExpress){t.next=11;break}if(u){t.next=8;break}return t.abrupt("return",e.$util.Tips({title:i.$t("填写快递单号")}));case 8:a.express_record_type=i.curExpress,a.delivery_id=u,i.setInfo(a);case 11:if(1!=n||2!=e.curExpress){t.next=28;break}if(i.to_name){t.next=14;break}return t.abrupt("return",e.$util.Tips({title:i.$t("填写寄件人姓名")}));case 14:if(i.to_tel){t.next=16;break}return t.abrupt("return",e.$util.Tips({title:i.$t("填写寄件人电话")}));case 16:if(/^1[3456789]\d{9}$/.test(i.to_tel)){t.next=18;break}return t.abrupt("return",e.$util.Tips({title:i.$t("填写寄件人电话")}));case 18:if(i.to_addr){t.next=20;break}return t.abrupt("return",e.$util.Tips({title:i.$t("填写寄件人地址")}));case 20:if(0!=i.expTemp.length){t.next=22;break}return t.abrupt("return",e.$util.Tips({title:i.$t("请选择电子面单")}));case 22:a.express_record_type=i.curExpress,a.to_name=i.to_name,a.to_tel=i.to_tel,a.to_addr=i.to_addr,a.express_temp_id=i.expTemp[i.expIndex].temp_id,i.setInfo(a);case 28:2==n&&(l=e.postPeople[e.postIndex],o={},o.type=i.delivery_type,o.sh_delivery_name=l.wx_name,o.sh_delivery_id=l.phone,o.sh_delivery_uid=l.uid,i.setInfo(o)),3==n&&(c={},c.type=i.delivery_type,c.fictitious_content=i.fictitious_content,i.setInfo(c));case 30:case"end":return t.stop()}}),t)})))()},setInfo:function(t){var i=this;(0,u.setAdminOrderDelivery)(i.delivery.id,t).then((function(t){i.$util.Tips({title:t.msg,icon:"success",mask:!0}),setTimeout((function(t){e.navigateBack()}),2e3)}),(function(e){i.$util.Tips({title:e})}))},bindPickerChange:function(e){this.seIndex=e.detail.value,this.getExpTemp(this.logistics[e.detail.value].code)},bindTempChange:function(e){this.expIndex=e.detail.value},getExpTemp:function(e){var t=this;(0,u.orderExportTemp)({com:e}).then((function(e){t.expTemp=e.data.data}))},orderDeliveryInfo:function(){var e=this;(0,u.orderDeliveryInfo)().then((function(t){e.to_name=t.data.to_name,e.to_tel=t.data.to_tel,e.to_addr=t.data.to_add}))}}});t.default=a}).call(this,i("543d")["default"])},a825:function(e,t,i){"use strict";(function(e,t){var n=i("4ea4");i("248d");n(i("66fd"));var r=n(i("28b4"));e.__webpack_require_UNI_MP_PLUGIN__=i,t(r.default)}).call(this,i("bc2e")["default"],i("543d")["createPage"])}},[["a825","common/runtime","common/vendor"]]]);