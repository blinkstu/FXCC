(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/components/verify/verify"],{"0462":function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var r=function(){var e=this,t=e.$createElement,n=(e._self._c,parseInt(e.imgSize.width));e._isMounted||(e.e0=function(t){e.clickShow=!1}),e.$mp.data=Object.assign({},{$root:{m0:n}})},o=[]},"11a1":function(e,t,n){},"234b":function(e,t,n){"use strict";n.r(t);var i=n("0462"),r=n("699c");for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);n("7980"),n("5c0a");var c,u=n("f0c5"),s=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],c);t["default"]=s.exports},"3cf8":function(e,t,n){},"5c0a":function(e,t,n){"use strict";var i=n("3cf8"),r=n.n(i);r.a},"699c":function(e,t,n){"use strict";n.r(t);var i=n("69e3"),r=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=r.a},"69e3":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){Promise.all([n.e("common/vendor"),n.e("pages/users/components/verify/verifySlider/verifySlider")]).then(function(){return resolve(n("c56f"))}.bind(null,n)).catch(n.oe)},r=function(){Promise.all([n.e("common/vendor"),n.e("pages/users/components/verify/verifySlider/verifySliderPc")]).then(function(){return resolve(n("bee8"))}.bind(null,n)).catch(n.oe)},o=function(){Promise.all([n.e("common/vendor"),n.e("pages/users/components/verify/verifyPoint/verifyPoint")]).then(function(){return resolve(n("bc2c"))}.bind(null,n)).catch(n.oe)},c={name:"Vue2Verify",props:{captchaType:{type:String,required:!0},figure:{type:Number},arith:{type:Number},mode:{type:String,default:"pop"},vSpace:{type:Number,default:5},explain:{type:String,default:"向右滑动完成验证"},imgSize:{type:Object,default:function(){return{width:"310px",height:"155px"}}},blockSize:{type:Object,default:function(){return{width:"50px",height:"50px"}}},barSize:{type:Object}},data:function(){return{clickShow:!1,verifyType:void 0,componentType:void 0,defaultImg:""}},mounted:function(){this.uuid()},methods:{uuid:function(){for(var t=[],n="0123456789abcdef",i=0;i<36;i++)t[i]=n.substr(Math.floor(16*Math.random()),1);t[14]="4",t[19]=n.substr(3&t[19]|8,1),t[8]=t[13]=t[18]=t[23]="-";var r="slider-"+t.join(""),o="point-"+t.join("");e.getStorageSync("slider")||e.setStorageSync("slider",r),e.getStorageSync("point")||e.setStorageSync("point",o)},success:function(e){this.$emit("success",e)},refresh:function(){this.instance.refresh&&this.instance.refresh()},show:function(){"pop"==this.mode&&(this.clickShow=!0)},hide:function(){"pop"==this.mode&&(this.clickShow=!1)}},computed:{instance:function(){return this.$refs.instance||{}},showBox:function(){return"pop"!=this.mode||this.clickShow}},watch:{captchaType:{immediate:!0,handler:function(e){switch(e.toString()){case"blockPuzzle":this.verifyType="2",this.componentType="VerifySlide";break;case"clickWord":this.verifyType="",this.componentType="VerifyPoints";break}}}},components:{VerifySlide:i,VerifyPoint:o,verifySliderPc:r}};t.default=c}).call(this,n("543d")["default"])},7980:function(e,t,n){"use strict";var i=n("11a1"),r=n.n(i);r.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/users/components/verify/verify-create-component',
    {
        'pages/users/components/verify/verify-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("234b"))
        })
    },
    [['pages/users/components/verify/verify-create-component']]
]);
