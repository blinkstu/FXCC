(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-83d2a766"],{3958:function(t,e,s){"use strict";var a=s("496e");s.n(a).a},"496e":function(t,e,s){},afa3:function(t,e,s){t.exports=s.p+"system_static/img/line.05bf1c84.jpg"},f23d:function(t,e,s){"use strict";s.r(e);var a=[function(){var t=this.$createElement;t=this._self._c||t;return t("div",{staticClass:"line"},[t("img",{attrs:{src:s("afa3")}})])}],r=s("8c8a"),o=s("b311"),i=s.n(o),n=s("42e3");s("61f7"),s("69ae"),o={name:"AdminOrder",components:{PriceChange:r.a},props:{},data:function(){return{order:!1,change:!1,orderId:"",orderInfo:{},status:0,title:"",payType:"",types:""}},watch:{"$route.params.id":function(t){null!=t&&(this.orderId=t,this.getIndex())}},mounted:function(){this.getIndex(),this.$nextTick((function(){var t=this,e=document.getElementsByClassName("copy-data");new i.a(e).on("success",(function(){t.$dialog.success("复制成功")}))}))},methods:{more:function(){this.order=!this.order},modify:function(t){this.change=!0,this.status=t},changeclose:function(t){this.change=t,this.getIndex()},closeChange:function(t){this.change=t},getIndex:function(){var t=this,e=this;Object(n.u)(this.$route.params.id).then((function(s){e.orderInfo=s.data.orderInfo,e.types=s.data.orderInfo._status._type,e.title=s.data.orderInfo._status._title,t.$nextTick((function(){var t=this,e=document.getElementsByClassName("copy-data");new i.a(e).on("success",(function(){t.$dialog.success("复制成功")}))}))}),(function(t){e.$dialog.error(t.msg)}))},offlinePay:function(){var t=this;setOfflinePay({orderId:this.orderInfo.orderId}).then((function(e){t.$dialog.success(e.msg),t.getIndex()}),(function(e){t.$dialog.error(e.msg)}))}}},s("3958"),r=s("2877"),r=Object(r.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.orderInfo?s("div",{staticClass:"order-details pos-order-details"},[s("div",{staticClass:"header acea-row row-middle"},[s("div",{staticClass:"state"},[t._v(t._s(t.title))]),s("div",{staticClass:"data"},[s("div",{staticClass:"order-num"},[t._v("订单："+t._s(t.orderInfo.order_id))]),s("div",[s("span",{staticClass:"time"},[t._v(t._s(t.orderInfo._add_time))])])])]),"looks"!=t.$route.params.goname?s("div",{staticClass:"remarks acea-row"},[s("span",{staticClass:"iconfontYI icon-zhinengkefu- mr10"}),s("span",{staticClass:"line1",staticStyle:{"text-align":"left"},domProps:{textContent:t._s(t.orderInfo.remark||"订单未备注，点击添加备注信息")},on:{click:function(e){return t.modify(1)}}})]):t._e(),s("div",{staticClass:"orderingUser acea-row row-middle"},[s("span",{staticClass:"iconfontYI icon-yonghu2"}),t._v(t._s(t.orderInfo.real_name)+"\n  ")]),s("div",{staticClass:"address"},[s("div",{staticClass:"name"},[t._v("\n      "+t._s(t.orderInfo.real_name)),s("span",{staticClass:"phone"},[t._v(t._s(t.orderInfo.user_phone))])]),s("div",[t._v(t._s(t.orderInfo.user_address))])]),t._m(0),s("div",{staticClass:"pos-order-goods"},t._l(t.orderInfo.cartInfo,(function(e,a){return s("div",{key:a,staticClass:"goods acea-row row-between-wrapper"},[s("div",{staticClass:"picTxt acea-row row-between-wrapper"},[s("div",{staticClass:"pictrue"},[s("img",{attrs:{src:e.productInfo.image}})]),s("div",{staticClass:"text"},[s("div",{staticClass:"info line2"},[t._v("\n            "+t._s(e.productInfo.store_name)+"\n          ")]),s("div",{staticClass:"attr"},[t._v(t._s(e.productInfo.attrInfo.suk))])])]),s("div",{staticClass:"money"},[s("div",{staticClass:"x-money"},[t._v("￥"+t._s(e.productInfo.attrInfo.price))]),s("div",{staticClass:"num"},[t._v("x"+t._s(e.cart_num))]),s("div",{staticClass:"y-money"},[t._v("￥"+t._s(e.productInfo.ot_price))])])])})),0),s("div",{staticClass:"public-total"},[t._v("\n    共"+t._s(t.orderInfo.cart_num)+"件商品，应支付 "),s("span",{staticClass:"money"},[t._v("￥"+t._s(t.orderInfo.pay_price))]),t._v(" ( 邮费 ¥"+t._s(t.orderInfo.pay_postage)+"\n    )\n  ")]),s("div",{staticClass:"wrapper"},[s("div",{staticClass:"item acea-row row-between"},[s("div",[t._v("订单编号：")]),s("div",{staticClass:"conter acea-row row-middle row-right"},[t._v("\n        "+t._s(t.orderInfo.order_id)+"\n        "),s("span",{staticClass:"copy copy-data",attrs:{"data-clipboard-text":t.orderInfo.order_id}},[t._v("复制")])])]),s("div",{staticClass:"item acea-row row-between"},[s("div",[t._v("支付时间：")]),s("div",{staticClass:"conter"},[t._v(t._s(t.orderInfo._pay_time))])]),s("div",{staticClass:"item acea-row row-between"},[s("div",[t._v("支付状态：")]),s("div",{staticClass:"conter"},[t._v("\n        "+t._s(t.title)+"\n      ")])]),s("div",{staticClass:"item acea-row row-between"},[s("div",[t._v("支付方式：")]),s("div",{staticClass:"conter"},[t._v("\n        "+t._s(t.orderInfo._status?t.orderInfo._status._payType:"")+"\n      ")])]),s("div",{staticClass:"item acea-row row-between"},[s("div",[t._v("买家留言：")]),s("div",{staticClass:"conter"},[t._v(t._s(t.orderInfo.mark))])])]),s("div",{staticClass:"wrapper"},[s("div",{staticClass:"item acea-row row-between"},[s("div",[t._v("支付金额：")]),s("div",{staticClass:"conter"},[t._v("￥"+t._s(t.orderInfo.total_price))])]),s("div",{staticClass:"item acea-row row-between"},[s("div",[t._v("优惠券抵扣：")]),s("div",{staticClass:"conter"},[t._v("-￥"+t._s(t.orderInfo.coupon_price))])]),s("div",{staticClass:"item acea-row row-between"},[s("div",[t._v("运费：")]),s("div",{staticClass:"conter"},[t._v("￥"+t._s(t.orderInfo.total_postage))])]),s("div",{staticClass:"actualPay acea-row row-right"},[t._v("\n      实付款："),s("span",{staticClass:"money font-color-red"},[t._v("￥"+t._s(t.orderInfo.pay_price))])])]),"express"===t.orderInfo.deliveryType?s("div",{staticClass:"wrapper"},[s("div",{staticClass:"item acea-row row-between"},[s("div",[t._v("配送方式：")]),"express"===t.orderInfo.delivery_type?s("div",{staticClass:"conter"},[t._v("快递")]):t._e(),"send"===t.orderInfo.delivery_type?s("div",{staticClass:"conter"},[t._v("送货")]):t._e()]),s("div",{staticClass:"item acea-row row-between"},["express"===t.orderInfo.delivery_type?s("div",[t._v("快递公司：")]):t._e(),"send"===t.orderInfo.delivery_type?s("div",[t._v("送货人：")]):t._e(),s("div",{staticClass:"conter"},[t._v(t._s(t.orderInfo.deliveryName))])]),s("div",{staticClass:"item acea-row row-between"},["express"===t.orderInfo.delivery_type?s("div",[t._v("快递单号：")]):t._e(),"send"===t.orderInfo.delivery_type?s("div",[t._v("送货人电话：")]):t._e(),s("div",{staticClass:"conter"},[t._v("\n        "+t._s(t.orderInfo.delivery_id)),s("span",{staticClass:"copy copy-data",attrs:{"data-clipboard-text":t.orderInfo.delivery_id}},[t._v("复制")])])])]):t._e(),s("div",{staticStyle:{height:"1.2rem"}}),"looks"!=t.$route.params.goname?s("div",{staticClass:"footer acea-row row-right row-middle"},[s("div",{staticClass:"more"}),0===t.types?s("div",{staticClass:"bnt cancel",on:{click:function(e){return t.modify(0)}}},[t._v("一键改价")]):t._e(),-1===t.types?s("div",{staticClass:"bnt cancel",on:{click:function(e){return t.modify(0)}}},[t._v("立即退款")]):t._e(),s("div",{staticClass:"bnt cancel",on:{click:function(e){return t.modify(1)}}},[t._v("订单备注")]),"offline"===t.orderInfo.pay_type&&0===t.orderInfo.paid?s("div",{staticClass:"bnt cancel",on:{click:t.offlinePay}},[t._v("\n      确认付款\n    ")]):t._e(),1===t.types&&2!==t.orderInfo.shipping_type?s("router-link",{staticClass:"bnt delivery",attrs:{to:"/kefu/orderDelivery/"+t.orderInfo.id+"/"+t.orderInfo.order_id}},[t._v("去发货\n    ")]):t._e()],1):t._e(),s("PriceChange",{attrs:{change:t.change,orderInfo:t.orderInfo,status:t.status},on:{closechange:function(e){return t.changeclose(e)},closeChange:function(e){return t.closeChange(e)}}})],1):t._e()}),a,!1,null,"8261ba98",null);e.default=r.exports}}]);