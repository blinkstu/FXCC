(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/skeleton/index"],{"17b9":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var c=function(){var t=this,e=t.$createElement;t._self._c},o=[]},"24f3":function(t,e,n){"use strict";var i=n("6fa5"),c=n.n(i);c.a},"3e9c":function(t,e,n){"use strict";n.r(e);var i=n("a16d"),c=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=c.a},"4d33":function(t,e,n){"use strict";n.r(e);var i=n("17b9"),c=n("3e9c");for(var o in c)"default"!==o&&function(t){n.d(e,t,(function(){return c[t]}))}(o);n("24f3");var s,a=n("f0c5"),l=Object(a["a"])(c["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);e["default"]=l.exports},"6fa5":function(t,e,n){},a16d:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"skeleton",props:{bgcolor:{type:String,value:"#FFF"},selector:{type:String,value:"skeleton"},loading:{type:String,value:"spin"},show:{type:Boolean,value:!1},isNodes:{type:Number,value:!1}},data:function(){return{loadingAni:["spin","chiaroscuro"],systemInfo:{},skeletonRectLists:[],skeletonCircleLists:[]}},watch:{isNodes:function(t){this.readyAction()}},mounted:function(){this.attachedAction()},methods:{attachedAction:function(){var e=t.getSystemInfoSync();this.systemInfo={width:e.windowWidth,height:e.windowHeight},this.loading=this.loadingAni.includes(this.loading)?this.loading:"spin"},readyAction:function(){var e=this;t.createSelectorQuery().selectAll(".".concat(this.selector)).boundingClientRect((function(t){t[0]&&t[0].length>0&&(e.systemInfo.height=t[0][0].height+t[0][0].top)})).exec(),this.rectHandle(),this.radiusHandle()},rectHandle:function(){var e=this;t.createSelectorQuery().selectAll(".".concat(this.selector,"-rect")).boundingClientRect().exec((function(t){e.skeletonRectLists=t[0]}))},radiusHandle:function(){var e=this;t.createSelectorQuery().selectAll(".".concat(this.selector,"-radius")).boundingClientRect().exec((function(t){e.skeletonCircleLists=t[0]}))}}};e.default=n}).call(this,n("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/skeleton/index-create-component',
    {
        'components/skeleton/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("4d33"))
        })
    },
    [['components/skeleton/index-create-component']]
]);
