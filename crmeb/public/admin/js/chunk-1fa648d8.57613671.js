(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1fa648d8"],{"0b0a":function(t,e,n){"use strict";var i=n("dcf8");n.n(i).a},1069:function(t,e,n){t.exports=function(){"use strict";var t={358:function(t,e,n){var i=n(81),o=(i=n.n(i),n(645));n=n.n(o)()(i());n.push([t.id,".vue-puzzle-vcode {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n  z-index: 999;\n  opacity: 0;\n  pointer-events: none;\n  -webkit-transition: opacity 200ms;\n  transition: opacity 200ms;\n}\n.vue-puzzle-vcode.show_ {\n  opacity: 1;\n  pointer-events: auto;\n}\n.vue-auth-box_ {\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  padding: 20px;\n  background: #fff;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border-radius: 3px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n}\n.vue-auth-box_ .auth-body_ {\n  position: relative;\n  overflow: hidden;\n  border-radius: 3px;\n}\n.vue-auth-box_ .auth-body_ .loading-box_ {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 20;\n  opacity: 1;\n  -webkit-transition: opacity 200ms;\n  transition: opacity 200ms;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n}\n.vue-auth-box_ .auth-body_ .loading-box_.hide_ {\n  opacity: 0;\n  pointer-events: none;\n}\n.vue-auth-box_ .auth-body_ .loading-box_.hide_ .loading-gif_ span {\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n.vue-auth-box_ .auth-body_ .loading-box_ .loading-gif_ {\n  -webkit-box-flex: 0;\n  -webkit-flex: none;\n          flex: none;\n  height: 5px;\n  line-height: 0;\n}\n@-webkit-keyframes load {\n0% {\n    opacity: 1;\n    -webkit-transform: scale(1.3);\n            transform: scale(1.3);\n}\n100% {\n    opacity: 0.2;\n    -webkit-transform: scale(0.3);\n            transform: scale(0.3);\n}\n}\n@keyframes load {\n0% {\n    opacity: 1;\n    -webkit-transform: scale(1.3);\n            transform: scale(1.3);\n}\n100% {\n    opacity: 0.2;\n    -webkit-transform: scale(0.3);\n            transform: scale(0.3);\n}\n}\n.vue-auth-box_ .auth-body_ .loading-box_ .loading-gif_ span {\n  display: inline-block;\n  width: 5px;\n  height: 100%;\n  margin-left: 2px;\n  border-radius: 50%;\n  background-color: #888;\n  -webkit-animation: load 1.04s ease infinite;\n          animation: load 1.04s ease infinite;\n}\n.vue-auth-box_ .auth-body_ .loading-box_ .loading-gif_ span:nth-child(1) {\n  margin-left: 0;\n}\n.vue-auth-box_ .auth-body_ .loading-box_ .loading-gif_ span:nth-child(2) {\n  -webkit-animation-delay: 0.13s;\n          animation-delay: 0.13s;\n}\n.vue-auth-box_ .auth-body_ .loading-box_ .loading-gif_ span:nth-child(3) {\n  -webkit-animation-delay: 0.26s;\n          animation-delay: 0.26s;\n}\n.vue-auth-box_ .auth-body_ .loading-box_ .loading-gif_ span:nth-child(4) {\n  -webkit-animation-delay: 0.39s;\n          animation-delay: 0.39s;\n}\n.vue-auth-box_ .auth-body_ .loading-box_ .loading-gif_ span:nth-child(5) {\n  -webkit-animation-delay: 0.52s;\n          animation-delay: 0.52s;\n}\n.vue-auth-box_ .auth-body_ .info-box_ {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 24px;\n  line-height: 24px;\n  text-align: center;\n  overflow: hidden;\n  font-size: 13px;\n  background-color: #83ce3f;\n  opacity: 0;\n  -webkit-transform: translateY(24px);\n          transform: translateY(24px);\n  -webkit-transition: all 200ms;\n  transition: all 200ms;\n  color: #fff;\n  z-index: 10;\n}\n.vue-auth-box_ .auth-body_ .info-box_.show {\n  opacity: 0.95;\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n}\n.vue-auth-box_ .auth-body_ .info-box_.fail {\n  background-color: #ce594b;\n}\n.vue-auth-box_ .auth-body_ .auth-canvas2_ {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 60px;\n  height: 100%;\n  z-index: 2;\n}\n.vue-auth-box_ .auth-body_ .auth-canvas3_ {\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  -webkit-transition: opacity 600ms;\n  transition: opacity 600ms;\n  z-index: 3;\n}\n.vue-auth-box_ .auth-body_ .auth-canvas3_.show {\n  opacity: 1;\n}\n.vue-auth-box_ .auth-body_ .flash_ {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 30px;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.1);\n  z-index: 3;\n}\n.vue-auth-box_ .auth-body_ .flash_.show {\n  -webkit-transition: -webkit-transform 600ms;\n  transition: -webkit-transform 600ms;\n  transition: transform 600ms;\n  transition: transform 600ms, -webkit-transform 600ms;\n}\n.vue-auth-box_ .auth-body_ .reset_ {\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  width: 35px;\n  height: auto;\n  z-index: 12;\n  cursor: pointer;\n  -webkit-transition: -webkit-transform 200ms;\n  transition: -webkit-transform 200ms;\n  transition: transform 200ms;\n  transition: transform 200ms, -webkit-transform 200ms;\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg);\n}\n.vue-auth-box_ .auth-body_ .reset_:hover {\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n}\n.vue-auth-box_ .auth-control_ .range-box {\n  position: relative;\n  width: 100%;\n  background-color: #eef1f8;\n  margin-top: 20px;\n  border-radius: 3px;\n  box-shadow: 0 0 8px rgba(240, 240, 240, 0.6) inset;\n}\n.vue-auth-box_ .auth-control_ .range-box .range-text {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  font-size: 14px;\n  color: #b7bcd1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center;\n  width: 100%;\n}\n.vue-auth-box_ .auth-control_ .range-box .range-slider {\n  position: absolute;\n  height: 100%;\n  width: 50px;\n  background-color: rgba(106, 160, 255, 0.8);\n  border-radius: 3px;\n}\n.vue-auth-box_ .auth-control_ .range-box .range-slider .range-btn {\n  position: absolute;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  right: 0;\n  width: 50px;\n  height: 100%;\n  background-color: #fff;\n  border-radius: 3px;\n  box-shadow: 0 0 4px #ccc;\n  cursor: pointer;\n}\n.vue-auth-box_ .auth-control_ .range-box .range-slider .range-btn > div {\n  width: 0;\n  height: 40%;\n  -webkit-transition: all 200ms;\n  transition: all 200ms;\n  border: solid 1px #6aa0ff;\n}\n.vue-auth-box_ .auth-control_ .range-box .range-slider .range-btn > div:nth-child(2) {\n  margin: 0 4px;\n}\n.vue-auth-box_ .auth-control_ .range-box .range-slider .range-btn:hover > div:first-child,\n.vue-auth-box_ .auth-control_ .range-box .range-slider .range-btn.isDown > div:first-child {\n  border: solid 4px transparent;\n  height: 0;\n  border-right-color: #6aa0ff;\n}\n.vue-auth-box_ .auth-control_ .range-box .range-slider .range-btn:hover > div:nth-child(2),\n.vue-auth-box_ .auth-control_ .range-box .range-slider .range-btn.isDown > div:nth-child(2) {\n  border-width: 3px;\n  height: 0;\n  border-radius: 3px;\n  margin: 0 6px;\n  border-right-color: #6aa0ff;\n}\n.vue-auth-box_ .auth-control_ .range-box .range-slider .range-btn:hover > div:nth-child(3),\n.vue-auth-box_ .auth-control_ .range-box .range-slider .range-btn.isDown > div:nth-child(3) {\n  border: solid 4px transparent;\n  height: 0;\n  border-left-color: #6aa0ff;\n}\n.vue-puzzle-overflow {\n  overflow: hidden !important;\n}\n",""]),e.Z=n},645:function(t){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",i=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),i&&(n+="@layer".concat(0<e[5].length?" ".concat(e[5]):""," {")),n+=t(e),i&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,i,o,s){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(i)for(var r=0;r<this.length;r++){var l=this[r][0];null!=l&&(a[l]=!0)}for(var c=0;c<t.length;c++){var h=[].concat(t[c]);i&&a[h[0]]||(void 0!==s&&(void 0!==h[5]&&(h[1]="@layer".concat(0<h[5].length?" ".concat(h[5]):""," {").concat(h[1],"}")),h[5]=s),n&&(h[2]&&(h[1]="@media ".concat(h[2]," {").concat(h[1],"}")),h[2]=n),o&&(h[4]?(h[1]="@supports (".concat(h[4],") {").concat(h[1],"}"),h[4]=o):h[4]="".concat(o)),e.push(h))}},e}},81:function(t){t.exports=function(t){return t[1]}},379:function(t){var e=[];function n(t){for(var n=-1,i=0;i<e.length;i++)if(e[i].identifier===t){n=i;break}return n}function i(t,i){for(var o={},s=[],a=0;a<t.length;a++){var r=t[a],l=i.base?r[0]+i.base:r[0],c=o[l]||0,h="".concat(l," ").concat(c);l=(o[l]=c+1,n(h)),c={css:r[1],media:r[2],sourceMap:r[3],supports:r[4],layer:r[5]};-1!==l?(e[l].references++,e[l].updater(c)):(r=function(t,e){var n=e.domAPI(e);return n.update(t),function(e){e?e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer||n.update(t=e):n.remove()}}(c,i),i.byIndex=a,e.splice(a,0,{identifier:h,updater:r,references:1})),s.push(h)}return s}t.exports=function(t,o){var s=i(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<s.length;a++){var r=n(s[a]);e[r].references--}t=i(t,o);for(var l=0;l<s.length;l++){var c=n(s[l]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}s=t}}},569:function(t){var e={};t.exports=function(t,n){if(t=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t),!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(n)}},216:function(t){t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:function(t,e,n){t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:function(t){t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){var i,o,s,a;i=e,o=t,s="",(n=n).supports&&(s+="@supports (".concat(n.supports,") {")),n.media&&(s+="@media ".concat(n.media," {")),(a=void 0!==n.layer)&&(s+="@layer".concat(0<n.layer.length?" ".concat(n.layer):""," {")),s+=n.css,a&&(s+="}"),n.media&&(s+="}"),n.supports&&(s+="}"),(a=n.sourceMap)&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),o.styleTagTransform(s,i,o.options)},remove:function(){var t;null!==(t=e).parentNode&&t.parentNode.removeChild(t)}}}},589:function(t){t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(i){var o=e[i];return void 0!==o||(o=e[i]={id:i,exports:{}},t[i](o,o.exports,n)),o.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var i={};return function(){function t(){var t=this,e=t.$createElement;return(e=t._self._c||e)("div",{class:["vue-puzzle-vcode",{show_:t.show}],on:{mousedown:t.onCloseMouseDown,mouseup:t.onCloseMouseUp,touchstart:t.onCloseMouseDown,touchend:t.onCloseMouseUp}},[e("div",{staticClass:"vue-auth-box_",on:{mousedown:function(t){t.stopPropagation()},touchstart:function(t){t.stopPropagation()}}},[e("div",{staticClass:"auth-body_",style:"height: "+t.canvasHeight+"px"},[e("canvas",{ref:"canvas1",style:"width:"+t.canvasWidth+"px;height:"+t.canvasHeight+"px",attrs:{width:t.canvasWidth,height:t.canvasHeight}}),t._v(" "),e("canvas",{ref:"canvas3",class:["auth-canvas3_",{show:t.isSuccess}],style:"width:"+t.canvasWidth+"px;height:"+t.canvasHeight+"px",attrs:{width:t.canvasWidth,height:t.canvasHeight}}),t._v(" "),e("canvas",{ref:"canvas2",staticClass:"auth-canvas2_",style:"width:"+t.puzzleBaseSize+"px;height:"+t.canvasHeight+"px;transform:translateX("+(t.styleWidth-t.sliderBaseSize-(t.puzzleBaseSize-t.sliderBaseSize)*((t.styleWidth-t.sliderBaseSize)/(t.canvasWidth-t.sliderBaseSize)))+"px)",attrs:{width:t.puzzleBaseSize,height:t.canvasHeight}}),t._v(" "),e("div",{class:["loading-box_",{hide_:!t.loading}]},[t._m(0)]),t._v(" "),e("div",{class:["info-box_",{show:t.infoBoxShow},{fail:t.infoBoxFail}]},[t._v("\n        "+t._s(t.infoText)+"\n      ")]),t._v(" "),e("div",{class:["flash_",{show:t.isSuccess}],style:"transform: translateX("+(t.isSuccess?t.canvasWidth+.578*t.canvasHeight+"px":"-"+.578*t.canvasHeight+"px")+") skew(-30deg, 0);"}),t._v(" "),e("img",{staticClass:"reset_",attrs:{src:t.resetSvg},on:{click:t.reset}})]),t._v(" "),e("div",{staticClass:"auth-control_"},[e("div",{staticClass:"range-box",style:"height:"+t.sliderBaseSize+"px"},[e("div",{staticClass:"range-text"},[t._v(t._s(t.sliderText))]),t._v(" "),e("div",{ref:"range-slider",staticClass:"range-slider",style:"width:"+t.styleWidth+"px"},[e("div",{class:["range-btn",{isDown:t.mouseDown}],style:"width:"+t.sliderBaseSize+"px",on:{mousedown:function(e){return t.onRangeMouseDown(e)},touchstart:function(e){return t.onRangeMouseDown(e)}}},[e("div"),t._v(" "),e("div"),t._v(" "),e("div")])])])])])])}n.r(i),n.d(i,{default:function(){return d}}),t._withStripped=!0;var e={props:{canvasWidth:{type:Number,default:310},canvasHeight:{type:Number,default:160},show:{type:Boolean,default:!1},puzzleScale:{type:Number,default:1},sliderSize:{type:Number,default:50},range:{type:Number,default:10},imgs:{type:Array},successText:{type:String,default:"验证通过！"},failText:{type:String,default:"验证失败，请重试"},sliderText:{type:String,default:"拖动滑块完成拼图"}},data:()=>({mouseDown:!1,startWidth:50,startX:0,newX:0,pinX:0,pinY:0,loading:!1,isCanSlide:!1,error:!1,infoBoxShow:!1,infoText:"",infoBoxFail:!1,timer1:null,closeDown:!1,isSuccess:!1,imgIndex:-1,isSubmting:!1,resetSvg:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAELklEQVRYR+2YW2wUZRTH//9vtlCoF9IoIklT3PqgPGi326hoetuaGEhIr9SgCYkkgt2WGOQVCca+GavWdr0GjD4YhG3RB3hply1LQA1tEQIxEXapGI2pEkys9LIzx2ylYWfY6e5sF0oi+7hzzvl+3/9855xvhrjNf7zN+XAHcL4Z+n8o6JWTeYt++W25S596AIZy6TB+n3yo+Nchlk8vmIIVowdXU9c3Q1gDSilBlQwjgBAYFGDvdF58/4milqvZwDpOcXWsb5Uh8hmBqkwXFMhlCN8aX5LXNbRy/T+Z+iXsHAFWRXs3QGQPyLucLDJrK5DgUXdTsxPfjAEro8E3Ce50EtxsKxPTwCPH3U2jTmJkBJgWTnAMxDeGMEoa0xQ+LJQnCD4HYFkCyAC3RdwN3U7gMkpxRTTYrMD91sCJIgCxV5R6O1Jcfy7VwonqLoj9/CqB2kF341qncGkBvRe+ureAWpRgoalCBecMFzcdK24YymZRJz5zprgq1tsJwXYL3CVZGvdGHmwZc7JQtra2gE+f712ep2QUYP714DJhaJrXLqXZQszlZwtYdSHoB9ljVk/ePVrSZFL0ZkAlxzQBVseCT8WhZhRThtFB8plk9Zi/qCi8cv0fNxvKFrDy4oF11NXXIFy2EII4iBcG3Y03VLZT8OqRd5aFPduvOEpxRayvXolxAKB2g6NgEhobBlc1HHYKY7WvHf5wtVAPgegIlbbZ9seUZ7AyFnwewi9pGoUyDmhrB931kfnC1ZwOeKlLP8GZJi6QLSFP2yep4toXSbT3ZQAfX3O6omt8Nhd9r/aHQAUMOQywYBZo5uZD2ThQ2rbPCjlnH6yI9rUryE5DU75ctJaake46Be4DuDjF8dFBNA94/AdtiySVxIlpMlTS8td801o70vMigM9huTda2lhcKHVHPO2HZv/P6LIwX7hk/+qzPSvUJGMkrg8AQYTkroRdXMlE+HH/twsG6BsOdJHYZlaO/lBZ6weOiiSXqs3Gqj0TeAxx+T75DIpgwjC0onD51pQD4JaluPrkR/cpFT9DcoVp84LOgTL/DjtBbglgou+puHwB8lEznPxJw1XSX77VtgizBvQNBw4RMqB7xt4Lc3c8lQKJaQHoO4R8ydz0/7MWoCXk8c85MrMC9J3qaafw/WtQlwXST+F3BnAeYB4obgJ1BJIuG+YtiKAjVOZ/Pd1ZdwzoG+4uBtSPpjaRbhXLcwF3hzytb2TilgVgT5BkYybBrTYC+Rvg5nRpdTRJrIs8+VPXPQXj2i4ItxC4O2NQQUQnN4U9rRcz9nH64p4ceM2lziX5Y4s3KHCdUHwE77ecMkMEp6BwhIa2Z6DslZRvfulgHafYLuCas58WLp2aLCFUga70qxOFU6dPFL2W1feYeaU43Y5z/TxnCuYabMEuC043ckdBp4pZ7f8FE5psOI1g6fwAAAAASUVORK5CYII="}),mounted(){document.body.appendChild(this.$el),document.addEventListener("mousemove",this.onRangeMouseMove,!1),document.addEventListener("mouseup",this.onRangeMouseUp,!1),document.addEventListener("touchmove",this.onRangeMouseMove,{passive:!1}),document.addEventListener("touchend",this.onRangeMouseUp,!1),this.show&&(document.body.classList.add("vue-puzzle-overflow"),this.reset())},beforeDestroy(){clearTimeout(this.timer1),document.body.removeChild(this.$el),document.removeEventListener("mousemove",this.onRangeMouseMove,!1),document.removeEventListener("mouseup",this.onRangeMouseUp,!1),document.removeEventListener("touchmove",this.onRangeMouseMove,{passive:!1}),document.removeEventListener("touchend",this.onRangeMouseUp,!1)},watch:{show(t){t?(document.body.classList.add("vue-puzzle-overflow"),this.reset()):(this.isSubmting=!1,this.isSuccess=!1,this.infoBoxShow=!1,document.body.classList.remove("vue-puzzle-overflow"))}},computed:{styleWidth(){var t=this.startWidth+this.newX-this.startX;return t<this.sliderBaseSize?this.sliderBaseSize:t>this.canvasWidth?this.canvasWidth:t},puzzleBaseSize(){return Math.round(52.5*Math.max(Math.min(this.puzzleScale,2),.2)+6)},sliderBaseSize(){return Math.max(Math.min(Math.round(this.sliderSize),Math.round(.5*this.canvasWidth)),10)}},methods:{onClose(){this.mouseDown||(clearTimeout(this.timer1),this.$emit("close"))},onCloseMouseDown(){this.closeDown=!0},onCloseMouseUp(){this.closeDown&&this.onClose(),this.closeDown=!1},onRangeMouseDown(t){this.isCanSlide&&(this.mouseDown=!0,this.startWidth=this.$refs["range-slider"].clientWidth,this.newX=t.clientX||t.changedTouches[0].clientX,this.startX=t.clientX||t.changedTouches[0].clientX)},onRangeMouseMove(t){this.mouseDown&&(t.preventDefault(),this.newX=t.clientX||t.changedTouches[0].clientX)},onRangeMouseUp(){this.mouseDown&&(this.mouseDown=!1,this.submit())},init(t){if(!this.loading||t){this.loading=!0,this.isCanSlide=!1;const e=this.$refs.canvas1,n=this.$refs.canvas2,i=this.$refs.canvas3,o=e.getContext("2d"),s=n.getContext("2d"),a=i.getContext("2d"),r=0<=navigator.userAgent.indexOf("Firefox")&&0<=navigator.userAgent.indexOf("Windows"),l=document.createElement("img");if(o.fillStyle="rgba(255,255,255,1)",a.fillStyle="rgba(255,255,255,1)",o.clearRect(0,0,this.canvasWidth,this.canvasHeight),s.clearRect(0,0,this.canvasWidth,this.canvasHeight),this.pinX=this.getRandom(this.puzzleBaseSize,this.canvasWidth-this.puzzleBaseSize-20),this.pinY=this.getRandom(20,this.canvasHeight-this.puzzleBaseSize-20),l.crossOrigin="anonymous",l.onload=()=>{var[t,e,n,i]=this.makeImgSize(l),c=(o.save(),this.paintBrick(o),o.closePath(),r?(o.clip(),o.save(),o.shadowOffsetX=0,o.shadowOffsetY=0,o.shadowColor="#000",o.shadowBlur=3,o.fill(),o.restore()):(o.shadowOffsetX=0,o.shadowOffsetY=0,o.shadowColor="#000",o.shadowBlur=3,o.fill(),o.clip()),o.drawImage(l,t,e,n,i),a.fillRect(0,0,this.canvasWidth,this.canvasHeight),a.drawImage(l,t,e,n,i),o.globalCompositeOperation="source-atop",this.paintBrick(o),o.arc(this.pinX+Math.ceil(this.puzzleBaseSize/2),this.pinY+Math.ceil(this.puzzleBaseSize/2),1.2*this.puzzleBaseSize,0,2*Math.PI,!0),o.closePath(),o.shadowColor="rgba(255, 255, 255, .8)",o.shadowOffsetX=-1,o.shadowOffsetY=-1,o.shadowBlur=Math.min(Math.ceil(8*this.puzzleScale),12),o.fillStyle="#ffffaa",o.fill(),o.getImageData(this.pinX-3,this.pinY-20,this.pinX+this.puzzleBaseSize+5,this.pinY+this.puzzleBaseSize+5));s.putImageData(c,0,this.pinY-20),o.restore(),o.clearRect(0,0,this.canvasWidth,this.canvasHeight),o.save(),this.paintBrick(o),o.globalAlpha=.8,o.fillStyle="#ffffff",o.fill(),o.restore(),o.save(),o.globalCompositeOperation="source-atop",this.paintBrick(o),o.arc(this.pinX+Math.ceil(this.puzzleBaseSize/2),this.pinY+Math.ceil(this.puzzleBaseSize/2),1.2*this.puzzleBaseSize,0,2*Math.PI,!0),o.shadowColor="#000",o.shadowOffsetX=2,o.shadowOffsetY=2,o.shadowBlur=16,o.fill(),o.restore(),o.save(),o.globalCompositeOperation="destination-over",o.drawImage(l,t,e,n,i),o.restore(),this.loading=!1,this.isCanSlide=!0},l.onerror=()=>{this.init(!0)},!t&&this.imgs&&this.imgs.length){let t=this.getRandom(0,this.imgs.length-1);t===this.imgIndex&&(t===this.imgs.length-1?t=0:t++),this.imgIndex=t,l.src=this.imgs[t]}else l.src=this.makeImgWithCanvas()}},getRandom:(t,e)=>Math.ceil(Math.random()*(e-t)+t),makeImgSize(t){t=t.width/t.height;let e=0,n=0,i=0,o=0;return t>this.canvasWidth/this.canvasHeight?(o=this.canvasHeight,i=t*o,n=0,e=(this.canvasWidth-i)/2):(i=this.canvasWidth,o=i/t,e=0,n=(this.canvasHeight-o)/2),[e,n,i,o]},paintBrick(t){var e=Math.ceil(15*this.puzzleScale);t.beginPath(),t.moveTo(this.pinX,this.pinY),t.lineTo(this.pinX+e,this.pinY),t.arcTo(this.pinX+e,this.pinY-e/2,this.pinX+e+e/2,this.pinY-e/2,e/2),t.arcTo(this.pinX+e+e,this.pinY-e/2,this.pinX+e+e,this.pinY,e/2),t.lineTo(this.pinX+e+e+e,this.pinY),t.lineTo(this.pinX+e+e+e,this.pinY+e),t.arcTo(this.pinX+e+e+e+e/2,this.pinY+e,this.pinX+e+e+e+e/2,this.pinY+e+e/2,e/2),t.arcTo(this.pinX+e+e+e+e/2,this.pinY+e+e,this.pinX+e+e+e,this.pinY+e+e,e/2),t.lineTo(this.pinX+e+e+e,this.pinY+e+e+e),t.lineTo(this.pinX,this.pinY+e+e+e),t.lineTo(this.pinX,this.pinY+e+e),t.arcTo(this.pinX+e/2,this.pinY+e+e,this.pinX+e/2,this.pinY+e+e/2,e/2),t.arcTo(this.pinX+e/2,this.pinY+e,this.pinX,this.pinY+e,e/2),t.lineTo(this.pinX,this.pinY)},makeImgWithCanvas(){const t=document.createElement("canvas"),e=t.getContext("2d");t.width=this.canvasWidth,t.height=this.canvasHeight,e.fillStyle=`rgb(${this.getRandom(100,255)},${this.getRandom(100,255)},${this.getRandom(100,255)})`,e.fillRect(0,0,this.canvasWidth,this.canvasHeight);for(let i=0;i<12;i++){var n;e.fillStyle=`rgb(${this.getRandom(100,255)},${this.getRandom(100,255)},${this.getRandom(100,255)})`,e.strokeStyle=`rgb(${this.getRandom(100,255)},${this.getRandom(100,255)},${this.getRandom(100,255)})`,1<this.getRandom(0,2)?(e.save(),e.rotate(this.getRandom(-90,90)*Math.PI/180),e.fillRect(this.getRandom(-20,t.width-20),this.getRandom(-20,t.height-20),this.getRandom(10,t.width/2+10),this.getRandom(10,t.height/2+10)),e.restore()):(e.beginPath(),n=this.getRandom(-Math.PI,Math.PI),e.arc(this.getRandom(0,t.width),this.getRandom(0,t.height),this.getRandom(10,t.height/2+10),n,n+1.5*Math.PI),e.closePath(),e.fill())}return t.toDataURL("image/png")},submit(){this.isSubmting=!0;const t=Math.abs(this.pinX-(this.styleWidth-this.sliderBaseSize)+(this.puzzleBaseSize-this.sliderBaseSize)*((this.styleWidth-this.sliderBaseSize)/(this.canvasWidth-this.sliderBaseSize))-3);t<this.range?(this.infoText=this.successText,this.infoBoxFail=!1,this.infoBoxShow=!0,this.isCanSlide=!1,this.isSuccess=!0,clearTimeout(this.timer1),this.timer1=setTimeout(()=>{this.isSubmting=!1,this.$emit("success",t)},800)):(this.infoText=this.failText,this.infoBoxFail=!0,this.infoBoxShow=!0,this.isCanSlide=!1,this.$emit("fail",t),clearTimeout(this.timer1),this.timer1=setTimeout(()=>{this.isSubmting=!1,this.reset()},800))},resetState(){this.infoBoxFail=!1,this.infoBoxShow=!1,this.isCanSlide=!1,this.isSuccess=!1,this.startWidth=this.sliderBaseSize,this.startX=0,this.newX=0},reset(){this.isSubmting||(this.resetState(),this.init())}}},o=n(379),s=(o=n.n(o),n(795)),a=(s=n.n(s),n(569)),r=(a=n.n(a),n(565)),l=(r=n.n(r),n(216)),c=(l=n.n(l),n(589)),h=(c=n.n(c),n(358)),u={},d=(s=(u.styleTagTransform=c(),u.setAttributes=r(),u.insert=a().bind(null,"head"),u.domAPI=s(),u.insertStyleElement=l(),o()(h.Z,u),h.Z&&h.Z.locals&&h.Z.locals,c=t,(a="function"==typeof(r=e)?r.options:r).render=c,a.staticRenderFns=[function(){var t=this,e=t.$createElement;e=t._self._c||e;return e("div",{staticClass:"loading-gif_"},[e("span"),t._v(" "),e("span"),t._v(" "),e("span"),t._v(" "),e("span"),t._v(" "),e("span")])}],a._compiled=!0,{exports:r,options:a}),s.options.__file="src/app.vue",s.exports)}(),i}()},"318e":function(t,e,n){"use strict";n.r(e);var i=n("c964"),o=(n("96cf"),n("b0c0"),n("ac1f"),n("5319"),n("5723")),s=n("42e3"),a=n("d708"),r=n("c276"),l=(n("7daa"),n("1069")),c=(l={components:{Vcode:n.n(l).a},data:function(){return{fullWidth:document.documentElement.clientWidth,swiperOption:{pagination:".swiper-pagination",autoplay:!0},loading:!1,isShow:!1,autoLogin:!0,imgcode:"",formInline:{username:"",password:"",code:""},ruleInline:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"}]},errorNum:0,login_logo:"",swiperList:[],defaultSwiperList:n("433f"),key:""}},created:function(){var t=this;top!=window&&(top.location.href=location.href),document.onkeydown=function(e){"login"===t.$route.name&&13===window.event.keyCode&&t.handleSubmit("formInline")},window.addEventListener("resize",this.handleResize)},watch:{fullWidth:function(t){var e;this.timer||(this.screenWidth=t,this.timer=!0,e=this,setTimeout((function(){e.timer=!1}),400))},$route:function(t){this.captchas()}},mounted:function(){var t=this;this.$nextTick((function(){t.screenWidth<768?document.getElementsByTagName("canvas")[0].removeAttribute("class","index_bg"):document.getElementsByTagName("canvas")[0].className="index_bg",t.swiperData()})),this.captchas()},methods:{swiperData:function(){var t=this;Object(o.c)().then((function(e){localStorage.setItem("ADMIN_TITLE",e.data.site_name),e=e.data||{},t.login_logo=e.login_logo||n("9d64"),t.swiperList=e.slide.length?e.slide:[{slide:t.defaultSwiperList}],t.key=e.key})).catch((function(e){t.$Message.error(e),t.login_logo=n("9d64"),t.swiperList=[{slide:t.defaultSwiperList}]}))},closeModel:function(){var t=this,e=(this.isShow=!1,this.$Message.loading({content:"登录中...",duration:0}));this.loading=!0,Object(o.a)({account:this.formInline.username,pwd:this.formInline.password,imgcode:this.formInline.code,key:this.key}).then(function(){var n=Object(i.a)(regeneratorRuntime.mark((function n(i){var o,s;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e(),o=i.data,s=t.getExpiresTime(o.expires_time),Object(r.q)("uuid",o.user_info.id,s),Object(r.q)("token",o.token,s),Object(r.q)("expires_time",o.expires_time,s),t.$store.commit("userInfo/uniqueAuth",o.unique_auth),t.$store.commit("userInfo/userInfo",o.user_info),t.$store.commit("menus/setopenMenus",[]),t.$store.commit("menus/getmenusNav",o.menus),t.$store.commit("userInfo/name",o.user_info.account),t.$store.commit("userInfo/avatar",o.user_info.head_pic),t.$store.commit("userInfo/access",o.unique_auth),t.$store.commit("userInfo/logo",o.logo),t.$store.commit("userInfo/logoSmall",o.logo_square),t.$store.commit("userInfo/version",o.version),t.$store.commit("userInfo/newOrderAudioLink",o.newOrderAudioLink);try{!1===o.queue&&t.$Notice.warning({title:"温馨提示",desc:"您的【消息队列】未开启，没有开启会导致异步任务无法执行。请尽快执行命令开启！！",duration:30}),!1===o.timer&&t.$Notice.warning({title:"温馨提示",desc:"您的【定时任务】未开启，没有开启会导致定时执行的任务无法执行。请尽快执行命令开启！！",duration:30}),t.checkSocket()}catch(n){}return n.abrupt("return",t.$router.replace({path:"/admin/home/"}));case 19:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()).catch((function(n){e(),t.formInline.code="",n=void 0===n?{}:n,t.errorNum++,t.captchas(),t.$Message.error(n.msg||"登录失败")})),setTimeout((function(e){t.loading=!1}),1e3)},checkSocket:function(){var t=this;Object(s.n)().then((function(e){e=e.data.admin;var n=!1,i=new WebSocket(e);i.onopen=function(){n=!0,i.close()},i.onerror=function(e){n||(n=!0,t.$Notice.warning({title:"温馨提示",desc:"您的【长连接】未开启，没有开启会导致客服消息无法发送,后台订单通知无法收到。请尽快执行命令开启！！",duration:30}))},i.onclose=function(e){n||(n=!0,t.$Notice.warning({title:"温馨提示",desc:"您的【长连接】未开启，没有开启会导致客服消息无法发送,后台订单通知无法收到。请尽快执行命令开启！！",duration:30}))}}))},getExpiresTime:function(t){var e=Math.round(new Date/1e3);return parseFloat(parseFloat(parseFloat((t-e)/60)/60)/24)},closefail:function(){this.$Message.error("校验错误")},handleResize:function(t){this.fullWidth=document.documentElement.clientWidth,this.fullWidth<768?document.getElementsByTagName("canvas")[0].removeAttribute("class","index_bg"):document.getElementsByTagName("canvas")[0].className="index_bg"},captchas:function(){this.imgcode=a.a.apiBaseURL+"/captcha_pro?"+Date.parse(new Date)},handleSubmit:function(t){var e=this;this.$refs[t].validate((function(t){t&&(2<=e.errorNum?e.isShow=!0:e.closeModel())}))}},beforeCreate:function(){this.fullWidth<768?document.getElementsByTagName("canvas")[0].removeAttribute("class","index_bg"):document.getElementsByTagName("canvas")[0].className="index_bg"},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize),document.getElementsByTagName("canvas")[0].removeAttribute("class","index_bg")}},n("0b0a"),n("2877"));c=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-account"},[n("div",{staticClass:"container",class:[768<t.fullWidth?"containerSamll":"containerBig"]},[768<t.fullWidth?n("swiper",{staticClass:"swiperPross",attrs:{options:t.swiperOption}},[t._l(t.swiperList,(function(t,e){return n("swiper-slide",{key:e,staticClass:"swiperPic"},[n("img",{attrs:{src:t.slide}})])})),n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):t._e(),n("div",{staticClass:"index_from page-account-container from-wh"},[n("div",{staticClass:"page-account-top"},[n("div",{staticClass:"page-account-top-logo"},[n("img",{staticStyle:{width:"100%",height:"74px"},attrs:{src:t.login_logo,alt:"logo"}})])]),n("Form",{ref:"formInline",attrs:{model:t.formInline,rules:t.ruleInline},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleSubmit("formInline")}}},[n("FormItem",{attrs:{prop:"username"}},[n("Input",{attrs:{type:"text",prefix:"ios-contact-outline",placeholder:"请输入用户名",size:"large"},model:{value:t.formInline.username,callback:function(e){t.$set(t.formInline,"username",e)},expression:"formInline.username"}})],1),n("FormItem",{attrs:{prop:"password"}},[n("Input",{attrs:{type:"password",prefix:"ios-lock-outline",placeholder:"请输入密码",size:"large"},model:{value:t.formInline.password,callback:function(e){t.$set(t.formInline,"password",e)},expression:"formInline.password"}})],1),n("FormItem",{attrs:{prop:"code"}},[n("div",{staticClass:"code"},[n("Input",{attrs:{type:"text",prefix:"ios-keypad-outline",placeholder:"请输入验证码",size:"large"},model:{value:t.formInline.code,callback:function(e){t.$set(t.formInline,"code",e)},expression:"formInline.code"}}),n("img",{staticClass:"pictrue",attrs:{src:t.imgcode},on:{click:t.captchas}})],1)]),n("FormItem",[n("Button",{staticClass:"btn",attrs:{type:"primary",long:"",loading:t.loading,size:"large"},on:{click:function(e){return t.handleSubmit("formInline")}}},[t._v("登录")])],1)],1)],1)],1),n("vcode",{attrs:{show:t.isShow,successText:"验证通过"},on:{success:function(e){return t.closeModel()},close:function(e){return t.closeModel()}}}),t._m(0)],1)}),[function(){var t=this,e=t.$createElement;e=t._self._c||e;return e("div",{staticClass:"footer"},[e("div",{staticClass:"pull-right"},[t._v("Copyright © 2022 "),e("span",{attrs:{id:"copyright"}},[t._v("CRMEB")]),t._v(" 版本号："),e("span",[t._v("我是版本号")])])])}],!1,null,"78299aba",null);e.default=c.exports},"433f":function(t,e,n){t.exports=n.p+"img/sw.3ef10e8b.jpg"},"7daa":function(t,e,n){function i(t,e,n){return t.getAttribute(e)||n}function o(t){return document.getElementsByTagName(t)}function s(){r=c.width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,l=c.height=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}function a(){var t,e,n,i,o,s;(p+=1)<5||(p=0,d.clearRect(0,0,r,l),t=[g].concat(v),v.forEach((function(a){for(a.x+=a.xa,a.y+=a.ya,a.xa*=a.x>r||a.x<0?-1:1,a.ya*=a.y>l||a.y<0?-1:1,d.fillRect(a.x-.5,a.y-.5,2,2),d.fillStyle="#FFFFFF",n=0;n<t.length;n++)a!==(e=t[n])&&null!==e.x&&null!==e.y&&(i=a.x-e.x,o=a.y-e.y,(s=i*i+o*o)<e.max&&(e===g&&s>=e.max/2&&(a.x-=.03*i,a.y-=.03*o),i=(e.max-s)/e.max,d.beginPath(),d.lineWidth=i/2,d.strokeStyle="rgba("+h.c+","+(.2+i)+")",d.moveTo(a.x,a.y),d.lineTo(e.x,e.y),d.stroke()));t.splice(t.indexOf(a),1)}))),m(a)}n("99af"),n("d3b7"),n("159b"),n("a434");var r,l,c=document.createElement("canvas"),h=(u=(n=o("script")).length,n=n[u-1],{l:u,z:i(n,"zIndex",-2),o:i(n,"opacity",.8),c:i(n,"color","255,255,255"),n:i(n,"count",240)}),u="c_n"+h.l,d=c.getContext("2d"),p=0,m=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/45)},f=Math.random,g={x:null,y:null,max:2e4};c.id=u,c.style.cssText="position:fixed;top:0;left:0;z-index:"+h.z+";opacity:"+h.o,o("body")[0].appendChild(c),s(),window.onresize=s,window.onmousemove=function(t){t=t||window.event,g.x=t.clientX,g.y=t.clientY},window.onmouseout=function(){g.x=null,g.y=null};for(var v=[],b=0;b<h.n;b++){var w=f()*r,x=f()*l,y=2*f()-1,_=2*f()-1;v.push({x:w,y:x,xa:y,ya:_,max:6e3})}setTimeout((function(){a()}),100)},dcf8:function(t,e,n){}}]);