(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/annex/components/verify/verify"],{"3c07":function(e,t,n){},"52ee":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){Promise.all([n.e("common/vendor"),n.e("pages/annex/components/verify/verifySlider/verifySlider")]).then(function(){return resolve(n("29f8"))}.bind(null,n)).catch(n.oe)},o=function(){Promise.all([n.e("common/vendor"),n.e("pages/annex/components/verify/verifySlider/verifySliderPc")]).then(function(){return resolve(n("e7f9"))}.bind(null,n)).catch(n.oe)},r=function(){Promise.all([n.e("common/vendor"),n.e("pages/annex/components/verify/verifyPoint/verifyPoint")]).then(function(){return resolve(n("4a0e"))}.bind(null,n)).catch(n.oe)},c={name:"Vue2Verify",props:{captchaType:{type:String,required:!0},figure:{type:Number},arith:{type:Number},mode:{type:String,default:"pop"},vSpace:{type:Number,default:5},explain:{type:String,default:"向右滑动完成验证"},imgSize:{type:Object,default:function(){return{width:"310px",height:"155px"}}},blockSize:{type:Object,default:function(){return{width:"50px",height:"50px"}}},barSize:{type:Object}},data:function(){return{clickShow:!1,verifyType:void 0,componentType:void 0,defaultImg:""}},mounted:function(){this.uuid()},methods:{uuid:function(){for(var t=[],n="0123456789abcdef",i=0;i<36;i++)t[i]=n.substr(Math.floor(16*Math.random()),1);t[14]="4",t[19]=n.substr(3&t[19]|8,1),t[8]=t[13]=t[18]=t[23]="-";var o="slider-"+t.join(""),r="point-"+t.join("");e.getStorageSync("slider")||e.setStorageSync("slider",o),e.getStorageSync("point")||e.setStorageSync("point",r)},success:function(e){this.$emit("success",e)},refresh:function(){this.instance.refresh&&this.instance.refresh()},show:function(){"pop"==this.mode&&(this.clickShow=!0)},hide:function(){"pop"==this.mode&&(this.clickShow=!1)}},computed:{instance:function(){return this.$refs.instance||{}},showBox:function(){return"pop"!=this.mode||this.clickShow}},watch:{captchaType:{immediate:!0,handler:function(e){switch(e.toString()){case"blockPuzzle":this.verifyType="2",this.componentType="VerifySlide";break;case"clickWord":this.verifyType="",this.componentType="VerifyPoints";break}}}},components:{VerifySlide:i,VerifyPoint:r,verifySliderPc:o}};t.default=c}).call(this,n("543d")["default"])},"56a1":function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var o=function(){var e=this,t=e.$createElement,n=(e._self._c,parseInt(e.imgSize.width));e._isMounted||(e.e0=function(t){e.clickShow=!1}),e.$mp.data=Object.assign({},{$root:{m0:n}})},r=[]},7620:function(e,t,n){"use strict";var i=n("3c07"),o=n.n(i);o.a},c97f:function(e,t,n){},d4b8:function(e,t,n){"use strict";n.r(t);var i=n("56a1"),o=n("daeb");for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n("e9e1"),n("7620");var c,u=n("f0c5"),a=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],c);t["default"]=a.exports},daeb:function(e,t,n){"use strict";n.r(t);var i=n("52ee"),o=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=o.a},e9e1:function(e,t,n){"use strict";var i=n("c97f"),o=n.n(i);o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/annex/components/verify/verify-create-component',
    {
        'pages/annex/components/verify/verify-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("d4b8"))
        })
    },
    [['pages/annex/components/verify/verify-create-component']]
]);
