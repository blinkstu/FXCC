(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-activity-goods_combination_details-index~pages-activity-goods_seckill_details-index~pages-good~4b5fa9d6"],{"0106":function(t,e,i){var n=i("be5e");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("7de9e74d",n,!0,{sourceMap:!1,shadowMode:!1})},"050e":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-text",{staticClass:"acea-row row-center-wrapper cartf iconfont icon-kefu3",style:{top:t.top+"px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goCustomer.apply(void 0,arguments)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.setTouchMove.apply(void 0,arguments)}}})},r=[]},"09a2":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{reply:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:{getpreviewImage:function(t,e){uni.previewImage({urls:this.reply[t].pics,current:this.reply[t].pics[e]})}}};e.default=n},2502:function(t,e,i){var n=i("4a9a");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("c98aabfc",n,!0,{sourceMap:!1,shadowMode:!1})},"2d96":function(t,e,i){"use strict";i("a9e3"),i("acd8"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("e979"),a=(getApp(),{name:"kefuIcon",props:{ids:{type:Number,default:0},routineContact:{type:Number,default:0},storeInfo:{type:Object,default:function(){}},goodsCon:{type:Number,default:0}},data:function(){return{top:"480"}},mounted:function(){this.top=parseFloat(window.innerHeight)-200},methods:{goCustomer:function(){(0,n.getCustomer)("/pages/extension/customer_list/chat?productId=".concat(this.ids))},setTouchMove:function(t){var e=this;t.touches[0].clientY<480&&t.touches[0].clientY>66&&(e.top=t.touches[0].clientY)}},created:function(){}});e.default=a},"3ef9":function(t,e,i){function n(t){for(var e={},i=t.split(","),n=i.length;n--;)e[i[n]]=!0;return e}i("ac1f"),i("1276"),t.exports={filter:null,highlight:null,onText:null,blankChar:n(" , ,\t,\r,\n,\f"),blockTags:n("address,article,aside,body,caption,center,cite,footer,header,html,nav,section,pre"),ignoreTags:n("area,base,basefont,canvas,command,frame,input,isindex,keygen,link,map,meta,param,script,source,style,svg,textarea,title,track,use,wbr,embed,iframe"),richOnlyTags:n("a,colgroup,fieldset,legend,picture,table"),selfClosingTags:n("area,base,basefont,br,col,circle,ellipse,embed,frame,hr,img,input,isindex,keygen,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),trustAttrs:n("align,alt,app-id,author,autoplay,border,cellpadding,cellspacing,class,color,colspan,controls,data-src,dir,face,height,href,id,ignore,loop,media,muted,name,path,poster,rowspan,size,span,src,start,style,type,unit-id,width,xmlns"),boolAttrs:n("autoplay,controls,ignore,loop,muted"),trustTags:n("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"),userAgentStyles:{address:"font-style:italic",big:"display:inline;font-size:1.2em",blockquote:"background-color:#f6f6f6;border-left:3px solid #dbdbdb;color:#6c6c6c;padding:5px 0 5px 10px",caption:"display:table-caption;text-align:center",center:"text-align:center",cite:"font-style:italic",dd:"margin-left:40px",img:"max-width:100%",mark:"background-color:yellow",picture:"max-width:100%",pre:"font-family:monospace;white-space:pre;overflow:scroll",s:"text-decoration:line-through",small:"display:inline;font-size:0.8em",u:"text-decoration:underline"}}},"3fb2":function(t,e,i){"use strict";i.r(e);var n=i("da73"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"475e":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"evaluateWtapper"},t._l(t.reply,(function(e,a){return n("v-uni-view",{key:a,staticClass:"evaluateItem"},[n("v-uni-view",{staticClass:"pic-text acea-row row-middle"},[n("v-uni-view",{staticClass:"pictrue"},[n("v-uni-image",{attrs:{src:e.avatar}})],1),n("v-uni-view",{staticClass:"acea-row row-middle"},[n("v-uni-view",{staticClass:"acea-row row-middle",staticStyle:{"margin-right":"15rpx"}},[n("v-uni-view",{staticClass:"name line1"},[t._v(t._s(e.nickname))]),e.is_money_level>0?n("v-uni-view",{staticClass:"vipImg"},[n("v-uni-image",{attrs:{src:i("5831")}})],1):t._e()],1),n("v-uni-view",{staticClass:"start",class:"star"+e.star})],1)],1),n("v-uni-view",{staticClass:"time"},[t._v(t._s(e.add_time)+" "+t._s(e.suk))]),n("v-uni-view",{staticClass:"evaluate-infor"},[t._v(t._s(e.comment))]),n("v-uni-view",{staticClass:"imgList acea-row"},t._l(e.pics,(function(e,i){return n("v-uni-view",{key:i,staticClass:"pictrue"},[n("v-uni-image",{staticClass:"image",attrs:{src:e},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getpreviewImage(a,i)}}})],1)})),1),e.merchant_reply_content?n("v-uni-view",{staticClass:"reply"},[n("v-uni-text",{staticClass:"font-num"},[t._v(t._s(t.$t("店小二")))]),t._v("："+t._s(e.merchant_reply_content))],1):t._e()],1)})),1)},r=[]},"48a0":function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__("4ea4");__webpack_require__("99af"),__webpack_require__("caad"),__webpack_require__("c975"),__webpack_require__("acd8"),__webpack_require__("ac1f"),__webpack_require__("2532"),__webpack_require__("466d"),__webpack_require__("5319"),__webpack_require__("1276"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _createForOfIteratorHelper2=_interopRequireDefault(__webpack_require__("b85c")),rpx=uni.getSystemInfoSync().screenWidth/750,cfg=__webpack_require__("3ef9"),_default={name:"parser",data:function(){return{uid:this._uid,scaleAm:"",showAm:"",imgs:[],nodes:[]}},props:{html:null,autopause:{type:Boolean,default:!0},autosetTitle:{type:Boolean,default:!0},domain:String,gestureZoom:Boolean,lazyLoad:Boolean,selectable:Boolean,tagStyle:Object,showWithAnimation:Boolean,useAnchor:Boolean},watch:{html:function(t){this.setContent(t)}},mounted:function(){this.imgList=[],this.imgList.each=function(t){for(var e=0,i=this.length;e<i;e++)this.setItem(e,t(this[e],e,this))},this.imgList.setItem=function(t,e){if(void 0!=t&&e){if(0==e.indexOf("http")&&this.includes(e)){for(var i,n="",a=0;i=e[a];a++){if("/"==i&&"/"!=e[a-1]&&"/"!=e[a+1])break;n+=Math.random()>.5?i.toUpperCase():i}return n+=e.substr(a),this[t]=n}if(this[t]=e,e.includes("data:image")){var r=e.match(/data:image\/(\S+?);(\S+?),(.+)/);if(!r)return}}},this.html&&this.setContent(this.html)},beforeDestroy:function(){this._observer&&this._observer.disconnect(),this.imgList.each((function(t){})),clearInterval(this._timer)},methods:{_Dom2Str:function(t){var e,i="",n=(0,_createForOfIteratorHelper2.default)(t);try{for(n.s();!(e=n.n()).done;){var a=e.value;if("text"==a.type)i+=a.text;else{for(var r in i+="<"+a.name,a.attrs||{})i+=" "+r+'="'+a.attrs[r]+'"';a.children&&a.children.length?i+=">"+this._Dom2Str(a.children)+"</"+a.name+">":i+=">"}}}catch(o){n.e(o)}finally{n.f()}return i},_handleHtml:function(t,e){if("string"!=typeof t&&(t=this._Dom2Str(t.nodes||t)),t.includes("rpx")&&(t=t.replace(/[0-9.]+\s*rpx/g,(function(t){return parseFloat(t)*rpx+"px"}))),!e){var i="<style scoped>@keyframes show{0%{opacity:0}100%{opacity:1}}";for(var n in cfg.userAgentStyles)i+="".concat(n,"{").concat(cfg.userAgentStyles[n],"}");for(n in this.tagStyle)i+="".concat(n,"{").concat(this.tagStyle[n],"}");i+="</style>",t=i+t}return t},setContent:function(t,e){var i=this;if(t){var n=document.createElement("div");e?this.rtf?this.rtf.appendChild(n):this.rtf=n:(this.rtf&&this.rtf.parentNode.removeChild(this.rtf),this.rtf=n),n.innerHTML=this._handleHtml(t,e);for(var a,r=this.rtf.getElementsByTagName("style"),o=0;a=r[o++];)a.innerHTML=a.innerHTML.replace(/body/g,"#rtf"+this._uid),a.setAttribute("scoped","true");!this._observer&&this.lazyLoad&&IntersectionObserver&&(this._observer=new IntersectionObserver((function(t){for(var e,n=0;e=t[n++];)e.isIntersecting&&(e.target.src=e.target.getAttribute("data-src"),e.target.removeAttribute("data-src"),i._observer.unobserve(e.target))}),{rootMargin:"900px 0px 900px 0px"}));var s=this,c=this.rtf.getElementsByTagName("title");c.length&&this.autosetTitle&&uni.setNavigationBarTitle({title:c[0].innerText}),this.imgList.length=0;for(var u,l=this.rtf.getElementsByTagName("img"),d=0,f=0;u=l[d];d++){u.style.maxWidth="100%";var p=u.getAttribute("src");this.domain&&p&&("/"==p[0]?"/"==p[1]?u.src=(this.domain.includes("://")?this.domain.split("://")[0]:"")+":"+p:u.src=this.domain+p:p.includes("://")||(u.src=this.domain+"/"+p)),u.hasAttribute("ignore")||"A"==u.parentElement.nodeName||(u.i=f++,s.imgList.push(u.src||u.getAttribute("data-src")),u.onclick=function(){var t=!0;this.ignore=function(){return t=!1},s.$emit("imgtap",this),t&&uni.previewImage({current:this.i,urls:s.imgList})}),u.onerror=function(){s.$emit("error",{source:"img",target:this})},s.lazyLoad&&this._observer&&u.src&&0!=u.i&&(u.setAttribute("data-src",u.src),u.removeAttribute("src"),this._observer.observe(u))}var h,v=this.rtf.getElementsByTagName("a"),g=(0,_createForOfIteratorHelper2.default)(v);try{for(g.s();!(h=g.n()).done;){var m=h.value;m.onclick=function(){var t=!0,e=this.getAttribute("href");if(s.$emit("linkpress",{href:e,ignore:function(){return t=!1}}),t&&e)if("#"==e[0])s.useAnchor&&s.navigateTo({id:e.substr(1)});else{if(0==e.indexOf("http")||0==e.indexOf("//"))return!0;uni.navigateTo({url:e})}return!1}}}catch(A){g.e(A)}finally{g.f()}var b=this.rtf.getElementsByTagName("video");s.videoContexts=b;for(var _,w=0;_=b[w++];)_.style.maxWidth="100%",_.onerror=function(){s.$emit("error",{source:"video",target:this})},_.onplay=function(){if(s.autopause)for(var t,e=0;t=s.videoContexts[e++];)t!=this&&t.pause()};var x,y,k=this.rtf.getElementsByTagName("audios"),C=(0,_createForOfIteratorHelper2.default)(k);try{for(C.s();!(x=C.n()).done;){var I=x.value;I.onerror=function(){s.$emit("error",{source:"audio",target:this})}}}catch(A){C.e(A)}finally{C.f()}this.document=this.rtf,e||document.getElementById("rtf"+this._uid).appendChild(this.rtf),this.$nextTick((function(){i.nodes=[1],i.$emit("load")})),setTimeout((function(){return i.showAm=""}),500),clearInterval(this._timer),this._timer=setInterval((function(){var t=[i.rtf.getBoundingClientRect()];i.width=t[0].width,t[0].height==y&&(i.$emit("ready",t[0]),clearInterval(i._timer)),y=t[0].height}),350),this.showWithAnimation&&!e&&(this.showAm="animation:show .5s")}else this.rtf&&!e&&this.rtf.parentNode.removeChild(this.rtf)},getText:function(){arguments.length>0&&void 0!==arguments[0]||this.nodes;return this.rtf.innerText},navigateTo:function(t){if(!this.useAnchor)return t.fail&&t.fail({errMsg:"Anchor is disabled"});if(!t.id)return window.scrollTo(0,this.rtf.offsetTop),t.success&&t.success({errMsg:"pageScrollTo:ok"});var e=document.getElementById(t.id);if(!e)return t.fail&&t.fail({errMsg:"Label not found"});t.scrollTop=this.rtf.offsetTop+e.offsetTop,uni.pageScrollTo(t)},getVideoContext:function(t){if(!t)return this.videoContexts;for(var e=this.videoContexts.length;e--;)if(this.videoContexts[e].id==t)return this.videoContexts[e]},preLoad:function preLoad(html,num){html.constructor==Array&&(html=this._Dom2Str(html));var script="var contain=document.createElement('div');contain.innerHTML='"+html.replace(/'/g,"\\'")+"';for(var imgs=contain.querySelectorAll('img'),i=imgs.length-1;i>="+num+";i--)imgs[i].removeAttribute('src');";eval(script)},_tap:function(t){if(this.gestureZoom&&t.timeStamp-this._lastT<300){var e=t.touches[0].pageY-t.currentTarget.offsetTop;if(this._zoom)this._scaleAm.translateX(0).scale(1).step(),uni.pageScrollTo({scrollTop:(e+this._initY)/2-t.touches[0].clientY,duration:400});else{var i=t.touches[0].pageX-t.currentTarget.offsetLeft;this._initY=e,this._scaleAm=uni.createAnimation({transformOrigin:"".concat(i,"px ").concat(this._initY,"px 0"),timingFunction:"ease-in-out"}),this._scaleAm.scale(2).step(),this._tMax=i/2,this._tMin=(i-this.width)/2,this._tX=0}this._zoom=!this._zoom,this.scaleAm=this._scaleAm.export()}this._lastT=t.timeStamp},_touchstart:function(t){1==t.touches.length&&(this._initX=this._lastX=t.touches[0].pageX)},_touchmove:function(t){var e=t.touches[0].pageX-this._lastX;if(this._zoom&&1==t.touches.length&&Math.abs(e)>20){if(this._lastX=t.touches[0].pageX,this._tX<=this._tMin&&e<0||this._tX>=this._tMax&&e>0)return;this._tX+=e*Math.abs(this._lastX-this._initX)*.05,this._tX<this._tMin&&(this._tX=this._tMin),this._tX>this._tMax&&(this._tX=this._tMax),this._scaleAm.translateX(this._tX).step(),this.scaleAm=this._scaleAm.export()}}}};exports.default=_default},"4a9a":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.dialog_nav[data-v-b7f0a252]{position:absolute;right:%?14?%;width:%?240?%;background:#fff;box-shadow:0 0 %?16?% rgba(0,0,0,.08);z-index:310;border-radius:%?14?%}.dialog_nav[data-v-b7f0a252]::before{content:"";width:0;height:0;border-left:%?15?% solid transparent;border-right:%?15?% solid transparent;border-bottom:%?30?% solid #fff;position:absolute;top:%?-20?%;right:%?32?%;border-bottom-color:#f2f2f2}.dialog_nav[data-v-b7f0a252]::after{content:"";width:0;height:0;border-left:%?15?% solid transparent;border-right:%?15?% solid transparent;border-bottom:%?30?% solid #fff;position:absolute;top:%?-20?%;right:%?32?%}.dialog_nav.dialogIndex[data-v-b7f0a252]{left:%?14?%}.dialog_nav.dialogIndex[data-v-b7f0a252]::before{left:%?-160?%!important}.dialog_nav.dialogGoods[data-v-b7f0a252]::before{left:%?-170?%}.dialog_nav_item[data-v-b7f0a252]{width:100%;height:%?84?%;line-height:%?84?%;padding:0 %?20?% 0;box-sizing:border-box;border-bottom:#eee;font-size:%?28?%;color:#333;position:relative;display:flex}.dialog_nav_item .iconfont[data-v-b7f0a252]{font-size:%?32?%;margin-right:%?26?%}.dialog_after[data-v-b7f0a252] ::after{content:"";position:absolute;width:90px;height:1px;background-color:#eee;bottom:0;right:0}',""]),t.exports=e},5213:function(t,e,i){var n=i("fd48");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("4b736fce",n,!0,{sourceMap:!1,shadowMode:!1})},5887:function(t,e,i){"use strict";i.r(e);var n=i("2d96"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"59ae":function(t,e,i){"use strict";i.r(e);var n=i("d722"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"5a94a":function(t,e,i){var n=i("f6c1");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("36b354a2",n,!0,{sourceMap:!1,shadowMode:!1})},6231:function(t,e,i){"use strict";i.r(e);var n=i("9e91"),a=i("7fe4");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("f575");var o,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"b7f0a252",null,!1,n["a"],o);e["default"]=c.exports},6753:function(t,e,i){"use strict";i.r(e);var n=i("84f3"),a=i("59ae");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("e506");var o,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"94c91ee0",null,!1,n["a"],o);e["default"]=c.exports},"6ca0":function(t,e,i){"use strict";var n=i("5213"),a=i.n(n);a.a},"6e83":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[t.nodes.length?t._e():t._t("default"),i("v-uni-view",{style:t.showAm+(t.selectable?";user-select:text;-webkit-user-select:text":""),attrs:{id:"top",animation:t.scaleAm},on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t._touchstart.apply(void 0,arguments)},touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t._touchmove.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t._tap.apply(void 0,arguments)}}},[i("div",{attrs:{id:"rtf"+t.uid}})])],2)},r=[]},7655:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"@-webkit-keyframes show-data-v-f0cc9922{0%{opacity:0}100%{opacity:1}}@keyframes show-data-v-f0cc9922{0%{opacity:0}100%{opacity:1}}\n\n\n\n",""]),t.exports=e},"7fe4":function(t,e,i){"use strict";i.r(e);var n=i("f251"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"84f3":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"product-bg"},[t.isPlay?n("v-uni-swiper",{attrs:{"indicator-dots":t.indicatorDots,"indicator-active-color":"var(--view-theme)",autoplay:t.autoplay,circular:t.circular,interval:t.interval,duration:t.duration},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}},[t.videoline?n("v-uni-swiper-item",[n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!t.controls,expression:"!controls"}],staticStyle:{width:"100%",height:"100%"}},[n("v-uni-video",{staticStyle:{width:"100%",height:"100%"},attrs:{id:"myVideo",src:t.videoline,objectFit:"contain",controls:!0,"show-center-play-btn":!0,"show-mute-btn":"true","auto-pause-if-navigate":!0,"custom-cache":!1,"enable-progress-gesture":!1,poster:t.imgUrls[0]},on:{pause:function(e){arguments[0]=e=t.$handleEvent(e),t.videoPause.apply(void 0,arguments)}}})],1),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.controls,expression:"controls"}],staticClass:"poster"},[n("v-uni-image",{staticClass:"image",attrs:{src:t.imgUrls[0]}})],1),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.controls,expression:"controls"}],staticClass:"stop",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bindPause.apply(void 0,arguments)}}},[n("v-uni-image",{staticClass:"image",attrs:{src:i("b4f9")}})],1)],1)],1):t._e(),t._l(t.imgUrls,(function(e,i){return[(t.videoline?i>=1:i>=0)?n("v-uni-swiper-item",[n("v-uni-image",{staticClass:"slide-image",attrs:{src:e}})],1):t._e()]}))],2):t._e()],1)},r=[]},"92d4":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.previewImg[data-v-b2086124]{position:fixed;top:0;left:0;z-index:300;width:100%;height:100%}.previewImg .mask[data-v-b2086124]{display:flex;justify-content:center;align-items:center;background-color:#000;opacity:1;z-index:8;width:100%;height:100%}.previewImg .mask-swiper[data-v-b2086124]{width:100%;height:100%}.previewImg .mask-swiper-img[data-v-b2086124]{width:100%}.previewImg .pagebox[data-v-b2086124]{position:absolute;width:100%;bottom:%?20?%;z-index:300;color:#fff;text-align:center}.mask_sku[data-v-b2086124]{color:#fff;max-width:80%;z-index:300;text-align:center;display:flex;flex-direction:column;align-items:center;margin-top:%?30?%}.mask_sku .sku_name[data-v-b2086124]{font-size:12px;border:1px solid #fff;padding:%?10?% %?30?% %?10?%;border-radius:40px;box-sizing:border-box}.mask_sku .sku_price[data-v-b2086124]{padding-top:10px}.font12[data-v-b2086124]{font-size:%?24?%}.share_btn[data-v-b2086124]{position:absolute;top:%?70?%;right:%?50?%;font-size:%?40?%;color:#fff;z-index:300}.flex-column[data-v-b2086124]{flex-direction:column}.justify-center[data-v-b2086124]{justify-content:center}.align-center[data-v-b2086124]{align-items:center}',""]),t.exports=e},"971e":function(t,e,i){"use strict";i.r(e);var n=i("09a2"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"980a":function(t,e,i){"use strict";var n=i("cfd5"),a=i.n(n);a.a},"9e91":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.currentPage,expression:"currentPage"}],staticClass:"animated dialog_nav",class:[t.goodList?"dialogIndex":"",t.goodsShow?"dialogGoods":"",(t.currentPage,"")],style:{top:t.navH+15+"rpx"}},t._l(t.selectNavList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"dialog_nav_item",class:e.after,on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.linkPage(e.url)}}},[i("v-uni-text",{staticClass:"iconfont",class:e.icon}),i("v-uni-text",{staticClass:"pl-20"},[t._v(t._s(e.name))])],1)})),1)},r=[]},a8b7:function(t,e,i){"use strict";i.r(e);var n=i("ffc6"),a=i("3fb2");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("980a");var o,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"b2086124",null,!1,n["a"],o);e["default"]=c.exports},ac2d:function(t,e,i){"use strict";i.r(e);var n=i("6e83"),a=i("b7da");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("e762");var o,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"f0cc9922",null,!1,n["a"],o);e["default"]=c.exports},b4f9:function(t,e,i){t.exports=i.p+"static/img/stop.5a8e6dc1.png"},b7da:function(t,e,i){"use strict";i.r(e);var n=i("48a0"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},b85c:function(t,e,i){"use strict";i("a4d3"),i("e01a"),i("d28b"),i("d3b7"),i("3ca3"),i("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var n=a(i("06c5"));function a(t){return t&&t.__esModule?t:{default:t}}function r(t,e){var i;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(i=(0,n.default)(t))||e&&t&&"number"===typeof t.length){i&&(t=i);var a=0,r=function(){};return{s:r,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,c=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return s=t.done,t},e:function(t){c=!0,o=t},f:function(){try{s||null==i["return"]||i["return"]()}finally{if(c)throw o}}}}},be5e:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.product-bg[data-v-94c91ee0]{width:100%;height:%?750?%;position:relative}.product-bg uni-swiper[data-v-94c91ee0]{width:100%;height:100%;position:relative}.product-bg .slide-image[data-v-94c91ee0]{width:100%;height:100%}.product-bg .pages[data-v-94c91ee0]{position:absolute;background-color:#fff;height:%?34?%;padding:0 %?10?%;border-radius:%?3?%;right:%?30?%;bottom:%?30?%;line-height:%?34?%;font-size:%?24?%;color:#050505}#myVideo[data-v-94c91ee0]{width:100%;height:100%}.product-bg .item[data-v-94c91ee0]{position:relative;width:100%;height:100%}.product-bg .item .poster[data-v-94c91ee0]{position:absolute;top:0;left:0;height:%?750?%;width:100%;z-index:9}.product-bg .item .poster .image[data-v-94c91ee0]{width:100%;height:100%}.product-bg .item .stop[data-v-94c91ee0]{position:absolute;top:50%;left:50%;width:%?136?%;height:%?136?%;margin-top:%?-68?%;margin-left:%?-68?%;z-index:9}.product-bg .item .stop .image[data-v-94c91ee0]{width:100%;height:100%}',""]),t.exports=e},cfd5:function(t,e,i){var n=i("92d4");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("19618796",n,!0,{sourceMap:!1,shadowMode:!1})},d320:function(t,e,i){var n=i("7655");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("1f0fb2bc",n,!0,{sourceMap:!1,shadowMode:!1})},d722:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{imgUrls:{type:Array,default:function(){return[]}},videoline:{type:String,value:""}},data:function(){return{indicatorDots:!0,circular:!0,autoplay:!0,interval:3e3,duration:500,currents:"1",controls:!0,isPlay:!0,videoContext:""}},mounted:function(){this.videoline&&this.imgUrls.shift(),this.videoContext=uni.createVideoContext("myVideo",this)},methods:{videoPause:function(t){},bindPause:function(){this.videoContext.play(),this.$set(this,"controls",!1),this.autoplay=!1},change:function(t){this.$set(this,"currents",t.detail.current+1)}}};e.default=n},da73:function(t,e,i){"use strict";i("c975"),i("d81d"),i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"cusPreviewImg",props:{list:{type:Array,required:!0,default:function(){return[]}},circular:{type:Boolean,default:!0},duration:{type:Number,default:500}},data:function(){return{currentIndex:0,showBox:!1}},watch:{list:function(t){}},methods:{changeSwiper:function(t){this.currentIndex=t.target.current,this.$emit("changeSwitch",t.target.current)},open:function(t){t&&this.list.length&&(this.currentIndex=this.list.map((function(t){return t.suk})).indexOf(t),this.showBox=!0)},close:function(){this.showBox=!1},shareFriend:function(){this.$emit("shareFriend")}}};e.default=n},e506:function(t,e,i){"use strict";var n=i("0106"),a=i.n(n);a.a},e762:function(t,e,i){"use strict";var n=i("d320"),a=i.n(n);a.a},efce:function(t,e,i){"use strict";i.r(e);var n=i("050e"),a=i("5887");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("fc5b");var o,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"6dba0fbd",null,!1,n["a"],o);e["default"]=c.exports},f251:function(t,e,i){"use strict";i("c975"),i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"homeIdex",props:{navH:{type:String|Number,default:""},returnShow:{type:Boolean,default:!0},goodList:{type:Boolean,default:!1},currentPage:{type:Boolean,default:!1},goodsShow:{type:Boolean,default:!1},sysHeight:{type:String|Number,default:""}},data:function(){return{selectNavList:[{name:this.$t("首页"),icon:"icon-shouye8",url:"/pages/index/index",after:"dialog_after"},{name:this.$t("搜索"),icon:"icon-sousuo6",url:"/pages/goods/goods_search/index",after:"dialog_after"},{name:this.$t("购物车"),icon:"icon-gouwuche7",url:"/pages/order_addcart/order_addcart",after:"dialog_after"},{name:this.$t("我的收藏"),icon:"icon-shoucang3",url:"/pages/users/user_goods_collection/index",after:"dialog_after"},{name:this.$t("个人中心"),icon:"icon-gerenzhongxin1",url:"/pages/user/index"}]}},methods:{linkPage:function(t){-1==["/pages/goods_cate/goods_cate","/pages/order_addcart/order_addcart","/pages/user/index","/pages/index/index"].indexOf(t)?uni.navigateTo({url:t}):uni.switchTab({url:t})}},created:function(){},beforeDestroy:function(){}};e.default=n},f575:function(t,e,i){"use strict";var n=i("2502"),a=i.n(n);a.a},f6c1:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.cartf[data-v-6dba0fbd]{width:%?96?%;height:%?96?%;background:#fff;box-shadow:0 %?3?% %?16?% rgba(0,0,0,.08);border-radius:50%;font-size:%?47?%;color:#666;position:fixed;right:%?15?%;z-index:9}',""]),t.exports=e},f8a9:function(t,e,i){"use strict";i.r(e);var n=i("475e"),a=i("971e");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("6ca0");var o,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"231c52f6",null,!1,n["a"],o);e["default"]=c.exports},fc5b:function(t,e,i){"use strict";var n=i("5a94a"),a=i.n(n);a.a},fd48:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.vipImg[data-v-231c52f6]{width:%?68?%;height:%?27?%}.vipImg uni-image[data-v-231c52f6]{width:100%;height:100%;margin-left:%?10?%}.evaluateWtapper .evaluateItem[data-v-231c52f6]{background-color:#fff;padding-bottom:%?25?%}.evaluateWtapper .evaluateItem ~ .evaluateItem[data-v-231c52f6]{border-top:%?1?% solid #f5f5f5}.evaluateWtapper .evaluateItem .pic-text[data-v-231c52f6]{font-size:%?26?%;color:#282828;height:%?95?%;padding:0 %?30?%}.evaluateWtapper .evaluateItem .pic-text .pictrue[data-v-231c52f6]{width:%?60?%;height:%?60?%;margin-right:%?20?%;border-radius:50%}.evaluateWtapper .evaluateItem .pic-text .pictrue uni-image[data-v-231c52f6]{width:100%;height:100%;border-radius:50%}.evaluateWtapper .evaluateItem .pic-text .name[data-v-231c52f6]{max-width:%?450?%;font-size:%?30?%}.evaluateWtapper .evaluateItem .time[data-v-231c52f6]{font-size:%?24?%;color:#82848f;padding:0 %?30?%}.evaluateWtapper .evaluateItem .evaluate-infor[data-v-231c52f6]{font-size:%?28?%;color:#282828;margin-top:%?19?%;padding:0 %?30?%}.evaluateWtapper .evaluateItem .imgList[data-v-231c52f6]{padding:0 %?30?% 0 %?15?%;margin-top:%?25?%}.evaluateWtapper .evaluateItem .imgList .pictrue[data-v-231c52f6]{width:%?156?%;height:%?156?%;margin:0 0 %?15?% %?15?%}.evaluateWtapper .evaluateItem .imgList .pictrue uni-image[data-v-231c52f6]{width:100%;height:100%;background-color:#f7f7f7}.evaluateWtapper .evaluateItem .reply[data-v-231c52f6]{font-size:%?26?%;color:#454545;background-color:#f7f7f7;border-radius:%?5?%;margin:%?20?% %?30?% 0 %?30?%;padding:%?20?%;position:relative}.evaluateWtapper .evaluateItem .reply[data-v-231c52f6]::before{content:"";width:0;height:0;border-left:%?20?% solid transparent;border-right:%?20?% solid transparent;border-bottom:%?30?% solid #f7f7f7;position:absolute;top:%?-14?%;left:%?40?%}',""]),t.exports=e},ffc6:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.showBox?i("v-uni-view",{staticClass:"previewImg",on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e)}}},[i("v-uni-view",{staticClass:"mask",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}},[i("v-uni-swiper",{staticClass:"mask-swiper",attrs:{current:t.currentIndex,circular:t.circular,duration:t.duration},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeSwiper.apply(void 0,arguments)}}},t._l(t.list,(function(e,n){return i("v-uni-swiper-item",{key:n,staticClass:"flex flex-column justify-center align-center"},[i("v-uni-image",{staticClass:"mask-swiper-img",attrs:{src:e.image,mode:"widthFix"}}),i("v-uni-view",{staticClass:"mask_sku"},[i("v-uni-text",{staticClass:"sku_name"},[t._v(t._s(e.suk))]),i("v-uni-text",{staticClass:"sku_price"},[t._v(t._s(t.$t("￥"))+t._s(e.price))])],1)],1)})),1)],1),t.list.length>0?i("v-uni-view",{staticClass:"pagebox"},[t._v(t._s(Number(t.currentIndex)+1)+" / "+t._s(t.list.length))]):t._e()],1):t._e()},r=[]}}]);