(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7df421ac"],{"0abb":function(t,e,i){},"465f":function(t,e,i){"use strict";var a=i("0abb");i.n(a).a},"61f7":function(t,e,i){"use strict";i.d(e,"a",(function(){return c})),i.d(e,"c",(function(){return o})),i.d(e,"b",(function(){return u}));var a=i("fc11"),s=i("f3f3");function c(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var i,a,s={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(i in s)new RegExp("(".concat(i,")")).test(e)&&(a=s[i]+"",e=e.replace(RegExp.$1,1===RegExp.$1.length?a:("00"+a).substr(a.length)));return e}i("ac1f"),i("00b4"),i("5319"),i("4d63"),i("c607"),i("2c3e"),i("25f0"),i("498a"),i("d3b7"),i("b64b"),i("99af");var r={min:"%s最小长度为:min",max:"%s最大长度为:max",length:"%s长度必须为:length",range:"%s长度为:range",pattern:"$s格式错误"};function n(t,e){t.message=function(t){return e.replace("%s",t||"")}}function o(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return Object(s.a)({required:!0,message:t,type:"string"},e)}function u(t){return l.pattern(/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,t)}n(o,"请输入%s"),n(u,"%s格式不正确");var l=Object.keys(r).reduce((function(t,e){return t[e]=function(t){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},r="range"===e?{min:t[0],max:t[1]}:Object(a.a)({},e,t);return Object(s.a)(Object(s.a)({message:i.replace(":".concat(e),"range"===e?"".concat(t[0],"-").concat(t[1]):t),type:"string"},r),c)},n(t[e],r[e]),t}),{})},c2b5:function(t,e,i){"use strict";i.r(e);var a=i("f3f3"),s=(i("ac1f"),i("5319"),i("b0e7")),c=i("8593"),r=i("2f62"),n=i("61f7");i("d044"),a={name:"system_auth",computed:Object(a.a)(Object(a.a)(Object(a.a)({},Object(r.d)("admin/layout",["isMobile"])),Object(r.d)("admin/userLevel",["categoryId"])),{},{labelWidth:function(){return this.isMobile?void 0:85},labelPosition:function(){return this.isMobile?"top":"right"}}),data:function(){return{baseUrl:"https://shop.crmeb.net/html/index.html",iframeUrl:"",captchs:"http://authorize.crmeb.net/api/captchs/",authCode:"",status:1,dayNum:0,copyright:"",isTemplate:!1,price:"",proPrice:"",productStatus:!1,copyrightText:"",success:!1,payType:"",disabled:!1,isShow:!1,active:0,timer:null,version:"",label:"",productType:"",modalPic:!1,isChoice:"单选",authorizedPicture:"",gridPic:{xl:6,lg:8,md:12,sm:12,xs:12},gridBtn:{xl:4,lg:8,md:8,sm:8,xs:8}}},filters:{formatDate:function(t){if(0!==t)return t=new Date(1e3*t),Object(n.a)(t,"yyyy-MM-dd hh:mm")}},components:{uploadPictures:s.a},mounted:function(){var t=this;this.getAuth(),this.getVersion(),window.addEventListener("message",(function(e){"onCancel"===e.data.event&&t.cancel()}))},methods:{getVersion:function(){var t=this;Object(c.C)().then((function(e){t.version=e.data.version,t.label=e.data.label}))},getCrmebCopyRight:function(){var t=this;Object(c.z)().then((function(e){return t.getAuth(),t.$Message.success(e.msg)}))},saveCopyRight:function(){var t=this;Object(c.V)({copyright:this.copyrightText,copyright_img:this.authorizedPicture}).then((function(e){return t.$Message.success(e.msg)}))},modalPicTap:function(){this.modalPic=!0},getPic:function(t){this.authorizedPicture=t.att_dir,this.modalPic=!1},getCopyRight:function(){var t=this;Object(c.z)().then((function(e){t.copyrightText=e.data.copyrightContext||"",t.authorizedPicture=e.data.copyrightImage||""}))},cancel:function(){"copyright"===this.productType?this.getCrmebCopyRight():this.getAuth(),this.iframeUrl="",this.isTemplate=!1},loginTabSwitch:function(t){this.active=t},getAuth:function(){var t=this;Object(c.a)().then((function(e){e=e.data||{},t.authCode=e.authCode||"",t.status=void 0===e.status?-1:e.status,t.dayNum=e.day||0,t.copyright=e.copyright,t.copyright&&t.getCopyRight()})).catch((function(e){t.$Message.error(e.msg)}))},toCrmeb:function(){window.open("http://www.crmeb.com")},getProduct:function(){var t=this;Object(c.p)({type:"copyright"}).then((function(e){t.price=e.data.attr.price,t.productStatus=!0})).catch((function(e){t.$Message.error(e.msg)})),Object(c.p)({type:"pro"}).then((function(e){t.proPrice=e.data.attr.price})).catch((function(e){t.$Message.error(e.msg)}))},payment:function(t){this.productType=t;var e=location.host,i=e.split(".");"test"===i[0]&&4===i.length?e=e.replace("test.",""):"www"===i[0]&&3===i.length&&(e=e.replace("www.","")),this.iframeUrl=this.baseUrl+"?url="+e+"&product="+t+"&version="+this.version+"&label="+this.label,this.isTemplate=!0},onClose:function(){this.isShow=!1}},destroyed:function(){}},i("465f"),r=i("2877"),s=Object(r.a)(a,(function(){var t=this,e=t.$createElement;e=t._self._c||e;return e("div",[e("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[e("div",{staticClass:"auth acea-row row-between-wrapper"},[e("div",{staticClass:"acea-row row-middle"},[e("Icon",{staticClass:"iconIos blue",attrs:{type:"ios-bulb-outline"}}),1===t.status?e("div",{staticClass:"text"},[e("div",[t._v("商业授权")]),e("div",{staticClass:"code"},[t._v("授权码："+t._s(t.authCode))])]):e("div",{staticClass:"text"},[e("div",[t._v("商业授权")]),e("div",{staticClass:"code"},[t._v("未授权")])])],1),e("div",[1===t.status?e("Button",{attrs:{type:"primary"},on:{click:function(e){return t.toCrmeb()}}},[t._v("进入官网")]):t._e(),1!==t.status?e("Button",{attrs:{type:"primary"},on:{click:function(e){return t.payment("bz")}}},[t._v("购买授权")]):t._e()],1)])]),t.copyright||1!=t.status?t._e():e("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[e("div",{staticClass:"auth acea-row row-between-wrapper"},[e("div",{staticClass:"acea-row row-middle"},[e("span",{staticClass:"iconfont iconbanquan iconIos blue"}),e("div",{staticClass:"text"},[e("div",[t._v("去版权服务")]),e("div",{staticClass:"code"},[t._v("购买之后可以设置")]),t.productStatus?e("div",{staticClass:"pro_price"},[t._v("￥"+t._s(t.price))]):t._e()])]),e("Button",{attrs:{type:"primary"},on:{click:function(e){return t.payment("copyright")}}},[t._v("立即购买")])],1)]),t.copyright?e("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[e("div",{staticClass:"auth acea-row row-between-wrapper"},[e("div",{staticClass:"acea-row row-middle"},[e("span",{staticClass:"iconfont iconbanquan iconIos blue"}),e("div",{staticClass:"acea-row row-middle"},[e("span",{staticClass:"update"},[t._v("修改授权信息:")]),e("Input",{staticStyle:{width:"460px"},model:{value:t.copyrightText,callback:function(e){t.copyrightText=e},expression:"copyrightText"}})],1)]),e("Button",{attrs:{type:"primary"},on:{click:t.saveCopyRight}},[t._v("保存")])],1),e("div",{staticClass:"authorized"},[e("div",[e("span",{staticClass:"update"},[t._v("上传授权图片:")])]),t.authorizedPicture?e("div",{staticClass:"uploadPictrue",on:{click:function(e){return t.modalPicTap("单选")}}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.authorizedPicture,expression:"authorizedPicture"}]})]):e("div",{staticClass:"upload",on:{click:function(e){return t.modalPicTap("单选")}}},[e("div",{staticClass:"iconfont"},[t._v("+")])])]),e("span",{staticClass:"prompt"},[t._v("建议尺寸：宽290px*高100px")])]):t._e(),e("Modal",{attrs:{scrollable:"","footer-hide":"",closable:"",title:"商业授权","z-index":1,width:"447"},on:{"on-cancel":t.cancel},model:{value:t.isTemplate,callback:function(e){t.isTemplate=e},expression:"isTemplate"}},[e("iframe",{attrs:{width:"100%",height:"580",src:t.iframeUrl,frameborder:"0"}})]),e("Modal",{attrs:{width:"960px",scrollable:"","footer-hide":"",closable:"",title:"上传授权图片","mask-closable":!1,"z-index":1},model:{value:t.modalPic,callback:function(e){t.modalPic=e},expression:"modalPic"}},[t.modalPic?e("uploadPictures",{attrs:{isChoice:t.isChoice,gridBtn:t.gridBtn,gridPic:t.gridPic},on:{getPic:t.getPic}}):t._e()],1)],1)}),[],!1,null,"44d99bc0",null);e.default=s.exports}}]);