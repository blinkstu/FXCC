(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/guide/index"],{"03ed":function(e,t,n){},"9d93":function(e,t,n){"use strict";(function(e,t){var a=n("4ea4");n("248d");a(n("66fd"));var i=a(n("fc85"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(i.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},a3c1:function(e,t,n){"use strict";(function(e){var a=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;a(n("ebdf"));var i=n("d322"),u={components:{guide:function(){n.e("components/guide/index").then(function(){return resolve(n("dfb9"))}.bind(null,n)).catch(n.oe)}},data:function(){return{guidePages:!1,advData:[]}},onShow:function(){this.loadExecution()},methods:{loadExecution:function(){var t=this,n=e.getStorageSync("guideDate")||"",a=(new Date).toLocaleDateString();n!==a?(0,i.getOpenAdv)().then((function(n){0==n.data.status||0==n.data.value.length?e.switchTab({url:"/pages/index/index"}):n.data.status&&(n.data.value.length||n.data.video_link)&&(t.advData=n.data,e.setStorageSync("guideDate",(new Date).toLocaleDateString()),t.guidePages=!0)})).catch((function(t){e.switchTab({url:"/pages/index/index"})})):e.switchTab({url:"/pages/index/index"})}},onHide:function(){this.guidePages=!1}};t.default=u}).call(this,n("543d")["default"])},db61:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){}));var a=function(){var e=this.$createElement;this._self._c},i=[]},e09f:function(e,t,n){"use strict";n.r(t);var a=n("a3c1"),i=n.n(a);for(var u in a)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(u);t["default"]=i.a},fc00:function(e,t,n){"use strict";var a=n("03ed"),i=n.n(a);i.a},fc85:function(e,t,n){"use strict";n.r(t);var a=n("db61"),i=n("e09f");for(var u in i)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(u);n("fc00");var c=n("f0c5"),d=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);t["default"]=d.exports}},[["9d93","common/runtime","common/vendor"]]]);