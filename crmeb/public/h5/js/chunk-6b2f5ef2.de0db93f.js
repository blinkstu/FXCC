(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b2f5ef2"],{2721:function(t,e,n){
/*! vue-ydui v1.2.6 by YDCSS (c) 2018 Licensed MIT */
!function(e,n){t.exports=n()}(0,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="/dist/",e(0)}({0:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.CitySelect=void 0;var r=n(82),o=i(r);e.CitySelect=o.default},1:function(t,e){t.exports=function(t,e,n,i){var r,o=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(r=t,o=t.default);var s="function"==typeof o?o.options:o;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),n&&(s._scopeId=n),i){var c=s.computed||(s.computed={});Object.keys(i).forEach(function(t){var e=i[t];c[t]=function(){return e}})}return{esModule:r,exports:o,options:s}}},2:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},3:function(t,e,n){function i(t){for(var e=0;e<t.length;e++){var n=t[e],i=u[n.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](n.parts[r]);for(;r<n.parts.length;r++)i.parts.push(o(n.parts[r]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{var a=[];for(r=0;r<n.parts.length;r++)a.push(o(n.parts[r]));u[n.id]={id:n.id,refs:1,parts:a}}}}function r(){var t=document.createElement("style");return t.type="text/css",d.appendChild(t),t}function o(t){var e,n,i=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(i){if(p)return m;i.parentNode.removeChild(i)}if(v){var o=h++;i=f||(f=r()),e=a.bind(null,i,o,!1),n=a.bind(null,i,o,!0)}else i=r(),e=s.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}function a(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=y(e,r);else{var o=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function s(t,e){var n=e.css,i=e.media,r=e.sourceMap;if(i&&t.setAttribute("media",i),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document,l=n(4),u={},d=c&&(document.head||document.getElementsByTagName("head")[0]),f=null,h=0,p=!1,m=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){p=n;var r=l(t,e);return i(r),function(e){for(var n=[],o=0;o<r.length;o++){var a=r[o],s=u[a.id];s.refs--,n.push(s)}e?(r=l(t,e),i(r)):r=[];for(o=0;o<n.length;o++){s=n[o];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete u[s.id]}}}};var y=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},4:function(t,e){t.exports=function(t,e){for(var n=[],i={},r=0;r<e.length;r++){var o=e[r],a=o[0],s=o[1],c=o[2],l=o[3],u={id:t+":"+r,css:s,media:c,sourceMap:l};i[a]?i[a].parts.push(u):n.push(i[a]={id:a,parts:[u]})}return n}},5:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){var t=function(t){t.preventDefault(),t.stopPropagation()},e=!1;return{lock:function(n){e||(e=!0,(n||document).addEventListener("touchmove",t))},unlock:function(n){e=!1,(n||document).removeEventListener("touchmove",t)}}}(),i=function(){return{lock:function(t){r&&l(t||document.body,"g-fix-ios-prevent-scroll")},unlock:function(t){r&&u(t||document.body,"g-fix-ios-prevent-scroll")}}}(),r=!!(window.navigator&&window.navigator.userAgent||"").match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),o=function(t){var e=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,n=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,i=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return e.test(t)||n.test(t)||i.test(t)},a=function(t){for(var e=t;e&&"HTML"!==e.tagName&&"BODY"!==e.tagName&&1===e.nodeType;){var n=document.defaultView.getComputedStyle(e).overflowY;if("scroll"===n||"auto"===n)return e;e=e.parentNode}return window},s=function(t,e){var n=t===window?document.body.offsetHeight:t.offsetHeight,i=t===window?0:t.getBoundingClientRect().top,r=e.getBoundingClientRect().top-i,o=r+e.offsetHeight;return r>=0&&r<n||o>0&&o<=n},c=function(t,e){return e=e||"",!(0===e.replace(/\s/g,"").length||!t)&&new RegExp(" "+e+" ").test(" "+t.className+" ")},l=function(t,e){c(t,e)||(t.className=""===t.className?e:t.className+" "+e)},u=function(t,e){if(c(t,e)){for(var n=" "+t.className.replace(/[\t\r\n]/g,"")+" ";n.indexOf(" "+e+" ")>=0;)n=n.replace(" "+e+" "," ");t.className=n.replace(/^\s+|\s+$/g,"")}},d=function(t){function e(n,i,r){if(n!==i){var a=n+r>i?i:n+r;n>i&&(a=n-r<i?i:n-r),t===window?window.scrollTo(a,a):t.scrollTop=a,window.requestAnimationFrame(function(){return e(a,i,r)})}else"function"==typeof o&&o()}var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,o=arguments[4];window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)});var a=Math.abs(n-i),s=Math.ceil(a/r*50);e(n,i,s)};e.pageScroll=n,e.preventScroll=i,e.isIOS=r,e.isColor=o,e.getScrollview=a,e.checkInview=s,e.addClass=l,e.removeClass=u,e.scrollTop=d},8:function(t,e,n){e=t.exports=n(2)(),e.push([t.id,".yd-mask{position:fixed;bottom:0;right:0;left:0;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;pointer-events:none;-webkit-transition:opacity .2s ease-in;transition:opacity .2s ease-in;opacity:0}",""])},9:function(t,e,n){n(11);var i=n(1)(n(12),n(10),null,null);t.exports=i.exports},10:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"yd-mask",style:t.styles},[t._t("default")],2)},staticRenderFns:[]}},11:function(t,e,n){var i=n(8);"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals),n(3)("c753dac2",i,!0)},12:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(5);e.default={name:"yd-mask",data:function(){return{show:this.value}},props:{value:{type:Boolean,default:!1},bgcolor:{type:String,default:"#000"},zindex:{default:1500},opacity:{default:.5},animated:{type:Boolean,default:!0}},watch:{value:function(t){var e=this;this.show=t,i.isIOS&&(t?(0,i.addClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug"):setTimeout(function(){(0,i.removeClass)(e.scrollView,"g-fix-ios-overflow-scrolling-bug")},200))}},computed:{styles:function(){var t={"z-index":this.zindex,"background-color":this.bgcolor};return this.show&&(t.opacity=this.opacity,t["pointer-events"]="auto"),t}},mounted:function(){this.scrollView=(0,i.getScrollview)(this.$el)},beforeDestroy:function(){i.isIOS&&(0,i.removeClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug")}}},55:function(t,e,n){e=t.exports=n(2)(),e.push([t.id,'.yd-cityselect{position:fixed;bottom:0;left:0;width:100%;height:75%;background-color:#fff;z-index:1502;-webkit-transform:translateY(100%);transform:translateY(100%);-webkit-transition:-webkit-transform .2s;transition:-webkit-transform .2s;transition:transform .2s;transition:transform .2s,-webkit-transform .2s}.yd-cityselect-active{-webkit-transform:translate(0);transform:translate(0)}.yd-cityselect-move-animate{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.yd-cityselect-next{-webkit-transform:translate(-50%);transform:translate(-50%)}.yd-cityselect-prev{-webkit-transform:translate(0);transform:translate(0)}.yd-cityselect-header{position:absolute;top:0;left:0;width:100%;z-index:1}.yd-cityselect-header:after{height:1px;position:absolute;z-index:0;bottom:0;left:0;content:"";width:100%;background-image:-webkit-linear-gradient(bottom,#ececec 50%,transparent 0);background-image:linear-gradient(0deg,#ececec 50%,transparent 0)}.yd-cityselect-title{width:100%;font-size:.3rem;text-align:center;height:45px;line-height:45px;position:relative}.yd-cityselect-title:after{height:1px;position:absolute;z-index:0;bottom:0;left:0;content:"";width:100%;background-image:-webkit-linear-gradient(bottom,#ececec 50%,transparent 0);background-image:linear-gradient(0deg,#ececec 50%,transparent 0)}.yd-cityselect-nav{width:100%;padding-left:10px;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.yd-cityselect-nav>a{font-size:13px;color:#222;display:block;height:40px;line-height:46px;padding:0 8px;position:relative;margin-right:15px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:40%}.yd-cityselect-nav-active{color:#f23030!important}.yd-cityselect-nav-active:after{content:"";width:100%;height:2px;background-color:#f23030;position:absolute;bottom:1px;left:0;z-index:2}.yd-cityselect-content{height:100%;padding-top:85px;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.yd-cityselect-item{display:block;height:inherit;width:50%;-webkit-box-flex:0;-webkit-flex:0 0 50%;-ms-flex:0 0 50%;flex:0 0 50%;overflow-y:auto;-webkit-overflow-scrolling:touch;background-color:#fff}.yd-cityselect-item::-webkit-scrollbar{width:0}.yd-cityselect-item:nth-child(2n){background-color:#f5f5f5}.yd-cityselect-item-active{color:#f23030!important}.yd-cityselect-item-active:after{display:block;content:"\\E600";font-family:YDUI-INLAY}.yd-cityselect-item-box{width:100%;height:inherit;display:block;padding:0 20px}.yd-cityselect-item-box>a{color:#333;font-size:13px;height:40px;line-height:40px;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:100%;position:relative;z-index:1}.yd-cityselect-item-box>a:before{height:1px;position:absolute;z-index:0;bottom:0;left:0;content:"";width:100%;background-image:-webkit-linear-gradient(bottom,#ececec 50%,transparent 0);background-image:linear-gradient(0deg,#ececec 50%,transparent 0)}.yd-cityselect-item-box>a:active{background:none}.yd-cityselect-item-box>a span{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;display:block;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;word-break:break-all;text-overflow:ellipsis;line-height:16px;max-height:32.2px;font-size:13px}.yd-cityselect-loading{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:.26rem;color:#999}.yd-cityselect-loading svg{width:36px;height:36px}',""])},82:function(t,e,n){n(233);var i=n(1)(n(263),n(181),null,null);t.exports=i.exports},181:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("yd-mask",{ref:"mask",attrs:{opacity:t.maskerOpacity},nativeOn:{click:function(e){t.close(e)}},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}}),t._v(" "),n("div",{staticClass:"yd-cityselect",class:t.show?"yd-cityselect-active":""},[n("div",{staticClass:"yd-cityselect-header"},[n("p",{staticClass:"yd-cityselect-title",on:{touchstart:function(t){t.stopPropagation(),t.preventDefault()}}},[t._v(t._s(t.title))]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.ready,expression:"ready"}],staticClass:"yd-cityselect-nav"},t._l(t.columnNum,function(e,i){return n("a",{directives:[{name:"show",rawName:"v-show",value:!!t.nav["txt"+e],expression:"!!nav['txt' + index]"}],key:i,class:e==t.navIndex?"yd-cityselect-nav-active":"",attrs:{href:"javascript:;"},on:{click:function(n){n.stopPropagation(),t.navEvent(e)}}},[t._v(t._s(t.nav["txt"+e]))])}))]),t._v(" "),t.ready?t._e():n("div",{staticClass:"yd-cityselect-loading"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"}},[n("path",{attrs:{stroke:"none",d:"M3 50A47 47 0 0 0 97 50A47 49 0 0 1 3 50",fill:"#bababa",transform:"rotate(317.143 50 51)"}},[n("animateTransform",{attrs:{attributeName:"transform",type:"rotate",calcMode:"linear",values:"0 50 51;360 50 51",keyTimes:"0;1",dur:"0.6s",begin:"0s",repeatCount:"indefinite"}})],1)])]),t._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:t.ready,expression:"ready"}],staticClass:"yd-cityselect-content",class:t.activeClasses},t._l(t.columnNum,function(e,i){return n("li",{key:i,ref:"itemBox"+e,refInFor:!0,staticClass:"yd-cityselect-item"},[t.columnsObj["columnItems"+e]&&t.columnsObj["columnItems"+e].length>0?[n("div",{staticClass:"yd-cityselect-item-box"},t._l(t.columnsObj["columnItems"+e],function(i,r){return n("a",{key:r,class:t.currentClass(i.v,i.n,e),attrs:{href:"javascript:;"},on:{click:function(n){n.stopPropagation(),t.itemEvent(e,i.n,i.v,i.c)}}},[n("span",[t._v(t._s(i.n))])])}))]:[n("div",{staticClass:"yd-cityselect-item-box",on:{touchstart:function(t){t.stopPropagation(),t.preventDefault()}}})]],2)}))])],1)},staticRenderFns:[]}},233:function(t,e,n){var i=n(55);"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals),n(3)("2f0daec1",i,!0)},263:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(5),o=n(9),a=i(o);e.default={name:"yd-cityselect",components:{"yd-mask":a.default},data:function(){return{show:this.value,navIndex:1,nav:{txt1:this.chooseTitle,txt2:"",txt3:""},columnsObj:{},active:{},activeClasses:"",itemHeight:40,columnNum:1}},props:{ready:{type:Boolean,default:!0},provance:String,city:String,area:String,callback:Function,title:{type:String,default:"所在地区"},chooseTitle:{type:String,default:"请选择"},value:{type:Boolean,default:!1},items:{type:Array,required:!0},columns:{validator:function(t){return/^\d*$/.test(t)}},maskerOpacity:{validator:function(t){return/^([0]|[1-9]\d*)?(\.\d*)?$/.test(t)},default:.5}},watch:{value:function(t){r.isIOS&&(t?r.pageScroll.lock(this.$refs.mask.$el):r.pageScroll.unlock(this.$refs.mask.$el)),this.show=t},ready:function(t){t&&this.init()}},methods:{init:function(){var t=this;this.ready&&this.items&&this.items[0]&&this.isArray(this.items)&&(this.columns&&~~this.columns>1?this.columnNum=~~this.columns:this.getColumsNum(this.items[0]),this.columnsObj.columnItems1=this.items,this.provance&&this.$nextTick(function(){t.setDefalutValue(t.items,"provance",1)}),this.$on("ydui.cityselect.reset",function(){for(var e=1;e<=t.columnNum;e++)t.active["itemValue"+e]="",t.active["itemName"+e]="",e-1===0?(t.navIndex=e,t.nav["txt"+e]=t.chooseTitle,t.$refs["itemBox"+e][0].scrollTop=0,t.backoffView(!1)):(t.nav["txt"+e]="",t.columnsObj["columnItems"+e]=[]),e===t.columnNum&&t.returnValue()}))},navEvent:function(t){this.columnNum>2&&(t>=this.columnNum?this.forwardView(!0):this.backoffView(!0)),this.navIndex=t},itemEvent:function(t,e,n,i){if(this.active["itemValue"+t]=n,this.active["itemName"+t]=e,this.nav["txt"+t]=e,this.columnsObj["columnItems"+(t+1)]=i,t>1&&i&&i.length>0&&this.columnNum>2&&this.forwardView(!0),this.clearNavTxt(t),t===this.columnNum||i.length<=0){if(t!==this.columnNum)for(var r=this.columnNum;r>=0;r--)r>t&&(this.active["itemValue"+r]="",this.active["itemName"+r]="",this.nav["txt"+r]="");this.navIndex=t,this.returnValue()}else this.navIndex=t+1,this.nav["txt"+(t+1)]=this.chooseTitle},currentClass:function(t,e,n){return t&&t==this.active["itemValue"+n]||e&&e===this.active["itemName"+n]?"yd-cityselect-item-active":""},clearNavTxt:function(t){for(var e=0;e<=this.columnNum;e++)e>t&&(this.nav["txt"+(e+1)]="",this.active["itemValue"+e]="",this.active["itemName"+e]="")},getColumsNum:function(t){this.isArray(t.c)&&(this.columnNum++,this.getColumsNum(t.c[0]))},isArray:function(t){return t&&t.constructor===Array&&t.length>0},setDefalutValue:function(t,e,n){var i=this;t.every(function(t,r){if(t.v==i[e]||t.n===i[e]){var o=i.columnsObj["columnItems"+(n+1)]=t.c,a=i.$refs["itemBox"+n][0];return a.scrollTop=r*i.itemHeight-a.offsetHeight/3,i.active["itemValue"+n]=t.v,i.active["itemName"+n]=t.n,i.nav["txt"+n]=t.n,i.navIndex=n,++n,n>=i.columnNum&&i.columnNum>2&&i.forwardView(!1),i.isArray(o)&&i.setDefalutValue(o,["","provance","city","area"][n],n),!1}return!0})},returnValue:function(){this.callback&&this.callback(this.active),this.close()},close:function(){this.$emit("input",!1),this.show=!1},backoffView:function(t){this.activeClasses=(t?"yd-cityselect-move-animate":"")+" yd-cityselect-prev"},forwardView:function(t){this.activeClasses=(t?"yd-cityselect-move-animate":"")+" yd-cityselect-next"}},mounted:function(){this.init()},beforeDestroy:function(){this.close()}}}})})},"3b8d":function(t,e,n){"use strict";n.d(e,"a",function(){return a});var i=n("795b"),r=n.n(i);function o(t,e,n,i,o,a,s){try{var c=t[a](s),l=c.value}catch(u){return void n(u)}c.done?e(l):r.a.resolve(l).then(i,o)}function a(t){return function(){var e=this,n=arguments;return new r.a(function(i,r){var a=t.apply(e,n);function s(t){o(a,i,r,s,c,"next",t)}function c(t){o(a,i,r,s,c,"throw",t)}s(void 0)})}}},"5dbf":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"addAddress absolute"},[n("div",{staticClass:"list"},[n("div",{staticClass:"item acea-row row-between-wrapper"},[n("div",{staticClass:"name"},[t._v("姓名")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.userAddress.real_name,expression:"userAddress.real_name"}],attrs:{type:"text",placeholder:"请输入姓名",required:""},domProps:{value:t.userAddress.real_name},on:{input:function(e){e.target.composing||t.$set(t.userAddress,"real_name",e.target.value)}}})]),n("div",{staticClass:"item acea-row row-between-wrapper"},[n("div",{staticClass:"name"},[t._v("联系电话")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.userAddress.phone,expression:"userAddress.phone"}],attrs:{type:"text",placeholder:"请输入联系电话",required:""},domProps:{value:t.userAddress.phone},on:{input:function(e){e.target.composing||t.$set(t.userAddress,"phone",e.target.value)}}})]),n("div",{staticClass:"item acea-row row-between-wrapper"},[n("div",{staticClass:"name"},[t._v("所在地区")]),n("div",{staticClass:"picker acea-row row-between-wrapper select-value form-control"},[n("div",{staticClass:"address"},[n("div",{attrs:{slot:"right"},on:{click:function(e){e.stopPropagation(),t.show2=!0}},slot:"right"},[t._v("\n            "+t._s(t.model2||"请选择收货地址")+"\n          ")]),n("CitySelect",{ref:"cityselect",attrs:{callback:t.result2,items:t.district,ready:t.ready,provance:"",city:"",area:""},model:{value:t.show2,callback:function(e){t.show2=e},expression:"show2"}})],1),n("div",{staticClass:"iconfont icon-dizhi font-color-red"})])]),n("div",{staticClass:"item acea-row row-between-wrapper"},[n("div",{staticClass:"name"},[t._v("详细地址")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.userAddress.detail,expression:"userAddress.detail"}],attrs:{type:"text",placeholder:"请填写具体地址",required:""},domProps:{value:t.userAddress.detail},on:{input:function(e){e.target.composing||t.$set(t.userAddress,"detail",e.target.value)}}})])]),n("div",{staticClass:"default acea-row row-middle"},[n("div",{staticClass:"select-btn"},[n("div",{staticClass:"checkbox-wrapper"},[n("label",{staticClass:"well-check"},[n("input",{attrs:{type:"checkbox",name:"",value:""},domProps:{checked:!!t.userAddress.is_default},on:{click:t.ChangeIsDefault}}),n("i",{staticClass:"icon"}),n("span",{staticClass:"def"},[t._v("设置为默认地址")])])])])]),n("div"),n("div",{staticClass:"keepBnt bg-color-red",on:{click:t.submit}},[t._v("立即保存")]),t.isWechat&&!t.id?n("div",{staticClass:"wechatAddress",on:{click:t.getAddress}},[t._v("\n    导入微信地址\n  ")]):t._e()])},r=[],o=(n("96cf"),n("3b8d")),a=n("2721"),s=n("c24f"),c=n("e876"),l=n("61f7"),u=n("cba2"),d=n("74f9"),f=n("ed08"),h={components:{CitySelect:a["CitySelect"]},data:function(){return{show2:!1,model2:"",district:[],id:0,userAddress:{is_default:0},address:{},isWechat:Object(f["d"])(),ready:!1}},mounted:function(){var t=this.$route.params.id;this.id=t,document.title=t?"修改地址":"添加地址",this.getUserAddress(),this.getCityList()},methods:{getCityList:function(){var t=this;Object(c["g"])().then(function(e){t.district=e.data,t.ready=!0}).catch(function(e){t.$dialog.error(e.msg)})},getUserAddress:function(){if(!this.id)return!1;var t=this;Object(s["d"])(t.id).then(function(e){t.userAddress=e.data,t.model2=e.data.province+" "+e.data.city+" "+e.data.district,t.address.province=e.data.province,t.address.city=e.data.city,t.address.city_id=e.data.city_id}).catch(function(e){t.$dialog.error(e.msg)})},getAddress:function(){var t=this;Object(d["openAddress"])().then(function(e){t.$dialog.loading.open(),Object(s["L"])({id:t.id,real_name:e.userName,phone:e.telNumber,address:{province:e.provinceName,city:e.cityName,district:e.countryName},detail:e.detailInfo,is_default:1,post_code:e.postalCode,type:1}).then(function(){t.$dialog.loading.close(),t.$dialog.toast({mes:"添加成功"}),t.$router.go(-1)}).catch(function(e){t.$dialog.loading.close(),t.$dialog.error(e.msg||"添加失败")})})},submit:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e,n,i,r,o,a,c;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this.userAddress.real_name,n=this.userAddress.phone,i=this.model2,r=this.userAddress.detail,o=this.userAddress.is_default,t.prev=1,t.next=4,this.$validator({name:[Object(l["e"])(l["e"].message("姓名")),l["c"].range([2,16],l["c"].range.message("姓名"))],phone:[Object(l["e"])(l["e"].message("联系电话")),Object(l["b"])(l["b"].message())],model2:[Object(l["e"])("请选择地址")],detail:[Object(l["e"])(l["e"].message("具体地址"))]}).validate({name:e,phone:n,model2:i,detail:r});case 4:t.next=9;break;case 6:return t.prev=6,t.t0=t["catch"](1),t.abrupt("return",Object(u["b"])(t.t0));case 9:try{a=this,c={id:a.id,real_name:e,phone:n,address:this.address,detail:r,is_default:o,post_code:""},Object(s["L"])(c).then(function(){a.id?a.$dialog.toast({mes:"修改成功"}):a.$dialog.toast({mes:"添加成功"}),a.$router.go(-1)}).catch(function(t){a.$dialog.error(t.msg)})}catch(d){this.$dialog.error(d.msg)}case 10:case"end":return t.stop()}},t,this,[[1,6]])}));function e(){return t.apply(this,arguments)}return e}(),ChangeIsDefault:function(){this.userAddress.is_default=!this.userAddress.is_default},result2:function(t){this.model2=t.itemName1+" "+t.itemName2+" "+t.itemName3,this.address.province=t.itemName1,this.address.city=t.itemName2,this.address.city_id=t.itemValue2,this.address.district=t.itemName3}}},p=h,m=n("2877"),v=Object(m["a"])(p,i,r,!1,null,null,null);e["default"]=v.exports},"61f7":function(t,e,n){"use strict";n.d(e,"e",function(){return a}),n.d(e,"a",function(){return d}),n.d(e,"d",function(){return f}),n.d(e,"b",function(){return y});var i=n("bd86"),r=(n("ac6a"),n("456d"),n("cebc")),o=(n("a481"),function(t,e){t.message=function(t){return e.replace("%s",t||"")}});function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(r["a"])({required:!0,message:t,type:"string"},e)}function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(r["a"])({type:"url",message:t},e)}function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(r["a"])({type:"email",message:t},e)}function l(t){return w.pattern(/^[\w]+$/,t)}function u(t){return w.pattern(/^[\w\d_-]+$/,t)}function d(t){return w.pattern(/^[\w\d]+$/,t)}function f(t){return w.pattern(/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,t)}function h(t){return w.pattern(/^[\u4e00-\u9fa5]+$/,t)}function p(t){return w.pattern(/^[\u4e00-\u9fa5\w]+$/,t)}function m(t){return w.pattern(/^[\u4e00-\u9fa5\w\d]+$/,t)}function v(t){return w.pattern(/^[\u4e00-\u9fa5\w\d-_]+$/,t)}function y(t){return w.pattern(/^1(3|4|5|7|8|9|6)\d{9}$/i,t)}o(a,"请输入%s"),o(s,"请输入正确的链接"),o(c,"请输入正确的邮箱地址"),o(l,"%s必须是字母"),o(u,"%s只能包含由字母、数字，以及 - 和 _"),o(d,"%s只能包含字母、数字"),o(f,"%s格式不正确"),o(h,"%s只能是汉字"),o(p,"%s只能包含汉字、字母"),o(m,"%s只能包含汉字、字母和数字"),o(v,"%s只能包含由汉字、字母、数字，以及 - 和 _"),o(y,"请输入正确的手机号码");var g={min:"%s最小长度为:min",max:"%s最大长度为:max",length:"%s长度必须为:length",range:"%s长度为:range",pattern:"$s格式错误"},w=Object.keys(g).reduce(function(t,e){return t[e]=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a="range"===e?{min:t[0],max:t[1]}:Object(i["a"])({},e,t);return Object(r["a"])({message:n.replace(":".concat(e),"range"===e?"".concat(t[0],"-").concat(t[1]):t),type:"string"},a,o)},o(t[e],g[e]),t},{});e["c"]=w},"795b":function(t,e,n){t.exports=n("696e")},"96cf":function(t,e,n){var i=function(t){"use strict";var e,n=Object.prototype,i=n.hasOwnProperty,r="function"===typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",s=r.toStringTag||"@@toStringTag";function c(t,e,n,i){var r=e&&e.prototype instanceof m?e:m,o=Object.create(r.prototype),a=new A(i||[]);return o._invoke=C(t,n,a),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(i){return{type:"throw",arg:i}}}t.wrap=c;var u="suspendedStart",d="suspendedYield",f="executing",h="completed",p={};function m(){}function v(){}function y(){}var g={};g[o]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w($([])));b&&b!==n&&i.call(b,o)&&(g=b);var x=y.prototype=m.prototype=Object.create(g);function k(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function _(t){function e(n,r,o,a){var s=l(t[n],t,r);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"===typeof u&&i.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,o,a)},function(t){e("throw",t,o,a)}):Promise.resolve(u).then(function(t){c.value=t,o(c)},function(t){return e("throw",t,o,a)})}a(s.arg)}var n;function r(t,i){function r(){return new Promise(function(n,r){e(t,i,n,r)})}return n=n?n.then(r,r):r()}this._invoke=r}function C(t,e,n){var i=u;return function(r,o){if(i===f)throw new Error("Generator is already running");if(i===h){if("throw"===r)throw o;return L()}n.method=r,n.arg=o;while(1){var a=n.delegate;if(a){var s=N(a,n);if(s){if(s===p)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===u)throw i=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=f;var c=l(t,e,n);if("normal"===c.type){if(i=n.done?h:d,c.arg===p)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(i=h,n.method="throw",n.arg=c.arg)}}}function N(t,n){var i=t.iterator[n.method];if(i===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,N(t,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var r=l(i,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,p;var o=r.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,p):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function $(t){if(t){var n=t[o];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function n(){while(++r<t.length)if(i.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:L}}function L(){return{value:e,done:!0}}return v.prototype=x.constructor=y,y.constructor=v,y[s]=v.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},k(_.prototype),_.prototype[a]=function(){return this},t.AsyncIterator=_,t.async=function(e,n,i,r){var o=new _(c(e,n,i,r));return t.isGeneratorFunction(n)?o:o.next().then(function(t){return t.done?t.value:o.next()})},k(x),x[s]="Generator",x[o]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var i=e.pop();if(i in t)return n.value=i,n.done=!1,n}return n.done=!0,n}},t.values=$,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(i,r){return s.type="throw",s.arg=t,n.next=i,r&&(n.method="next",n.arg=e),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),l=i.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var r=i.arg;j(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,i){return this.delegate={iterator:$(t),resultName:n,nextLoc:i},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=i}catch(r){Function("r","regeneratorRuntime = r")(i)}}}]);
//# sourceMappingURL=chunk-6b2f5ef2.de0db93f.js.map