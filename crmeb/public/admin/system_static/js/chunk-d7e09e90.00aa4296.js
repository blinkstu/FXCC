(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-d7e09e90"],{"0996":function(t,e,i){"use strict";i.r(e),i("d81d"),i("a15b"),i("b0c0");var a=i("a584"),n=i("c71e"),r=i("0c9f"),s=i("61f7"),c=i("9901");a={name:"index",components:{cardsData:a.a,echartsNew:n.a,echartsFrom:c.a},data:function(){return{timeVal:[],pickerOptions:this.$timeOptions,style:{height:"400px"},infoList:{},infoList2:{},echartLeft:!0,echartRight:!1,loading:!1,loading2:!1,fromList:{title:"选择时间",custom:!0,fromTxt:[{text:"全部",val:""},{text:"今天",val:"today"},{text:"本周",val:"week"},{text:"本月",val:"month"},{text:"本季度",val:"quarter"},{text:"本年",val:"year"}]},formValidate:{time:""},cardLists:[{col:6,count:0,name:"昨日新增关注",className:"md-rose"},{col:6,count:0,name:"昨日参与",className:"ios-speedometer-outline"},{col:6,count:0,name:"总关注",className:"ios-speedometer-outline"},{col:6,count:0,name:"参与总人数",className:"md-rose"}],optionData:{},spinShow:!1}},created:function(){this.id=this.$route.query.id;var t=new Date,e=new Date;e.setTime(e.setTime(new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()-29))),this.timeVal=[e,t],this.formValidate.time=Object(s.a)(e,"yyyy/MM/dd")+"-"+Object(s.a)(t,"yyyy/MM/dd"),this.wechatQrcodeStatistic()},methods:{wechatQrcodeStatistic:function(){var t=this;Object(r.w)(this.id,this.formValidate).then((function(e){var i=["y_follow","y_scan","all_follow","all_scan"];t.cardLists.map((function(t,a){t.count=e.data[i[a]]})),t.getTrend(e.data.trend.series,e.data.trend.xAxis)}))},timeG:function(t){return t=new Date(t),t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()},selectChange:function(t){},onchangeTime:function(t){this.timeVal=t,this.formValidate.time=this.timeVal?this.timeVal.join("-"):"",this.name=this.formValidate.time,this.wechatQrcodeStatistic()},getTrend:function(t,e){this.spinShow=!0;var i=t.map((function(t){return t.name})),a=["#5B8FF9","#5AD8A6","#FFAB2B","#5D7092"],n=[];t.map((function(t,e){n.push({name:t.name,type:"line",data:t.data,itemStyle:{normal:{color:a[e]}},smooth:0})})),this.optionData={tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{x:"center",data:i},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},toolbox:{feature:{saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!0,axisLabel:{interval:0,rotate:40,textStyle:{color:"#000000"}},data:e},yAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{textStyle:{color:"#7F8B9C"}},splitLine:{show:!0,lineStyle:{color:"#F5F7F9"}}},series:n},this.spinShow=!1}}},i("0e9c"),n=i("2877"),c=Object(n.a)(a,(function(){var t=this,e=t.$createElement;e=t._self._c||e;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.spinShow,expression:"spinShow"}]},[e("pages-header",{ref:"pageHeader",attrs:{title:t.$route.meta.title,backUrl:t.$routeProStr+"/marketing/channel_code/channelCodeIndex"}}),0<=t.cardLists.length?e("cards-data",{staticClass:"mt16",attrs:{cardLists:t.cardLists}}):t._e(),e("el-card",{staticClass:"ivu-mt",attrs:{bordered:!1,shadow:"never"}},[e("div",{staticClass:"table-head"},[e("h3",[t._v("关注趋势")]),e("el-date-picker",{staticClass:"mr20",attrs:{editable:!1,clearable:"","picker-options":t.pickerOptions,format:"yyyy/MM/dd",type:"daterange","value-format":"yyyy/MM/dd","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{change:t.onchangeTime},model:{value:t.timeVal,callback:function(e){t.timeVal=e},expression:"timeVal"}})],1),t.optionData?e("echarts-new",{attrs:{"option-data":t.optionData,styles:t.style,height:"100%",width:"100%"}}):t._e()],1)],1)}),[],!1,null,"8ce02e2a",null);e.default=c.exports},"0c9f":function(t,e,i){"use strict";i.d(e,"j",(function(){return n})),i.d(e,"o",(function(){return r})),i.d(e,"m",(function(){return s})),i.d(e,"l",(function(){return c})),i.d(e,"p",(function(){return o})),i.d(e,"r",(function(){return l})),i.d(e,"s",(function(){return u})),i.d(e,"v",(function(){return d})),i.d(e,"t",(function(){return h})),i.d(e,"u",(function(){return f})),i.d(e,"q",(function(){return m})),i.d(e,"n",(function(){return g})),i.d(e,"k",(function(){return p})),i.d(e,"e",(function(){return b})),i.d(e,"h",(function(){return y})),i.d(e,"f",(function(){return x})),i.d(e,"i",(function(){return v})),i.d(e,"g",(function(){return w})),i.d(e,"a",(function(){return _})),i.d(e,"c",(function(){return C})),i.d(e,"b",(function(){return O})),i.d(e,"d",(function(){return j})),i.d(e,"w",(function(){return L}));var a=i("6b6c");function n(t){return Object(a.a)({url:"/statistic/product/get_basic",method:"get",params:t})}function r(t){return Object(a.a)({url:"/statistic/product/get_trend",method:"get",params:t})}function s(t){return Object(a.a)({url:"/statistic/product/get_product_ranking",method:"get",params:t})}function c(t){return Object(a.a)({url:"/statistic/product/get_excel",method:"get",params:t})}function o(t){return Object(a.a)({url:"/statistic/user/get_basic",method:"get",params:t})}function l(t){return Object(a.a)({url:"/statistic/user/get_trend",method:"get",params:t})}function u(t){return Object(a.a)({url:"/statistic/user/get_wechat",method:"get",params:t})}function d(t){return Object(a.a)({url:"/statistic/user/get_wechat_trend",method:"get",params:t})}function h(t){return Object(a.a)({url:"/statistic/user/get_region",method:"get",params:t})}function f(t){return Object(a.a)({url:"/statistic/user/get_sex",method:"get",params:t})}function m(t){return Object(a.a)({url:"/statistic/user/get_excel",method:"get",params:t})}function g(t){return Object(a.a)({url:"/statistic/trade/top_trade",method:"get",params:t})}function p(t){return Object(a.a)({url:"/statistic/trade/bottom_trade",method:"get",params:t})}function b(t){return Object(a.a)({url:"/statistic/order/get_basic",method:"get",params:t})}function y(t){return Object(a.a)({url:"/statistic/order/get_trend",method:"get",params:t})}function x(t){return Object(a.a)({url:"/statistic/order/get_channel",method:"get",params:t})}function v(t){return Object(a.a)({url:"/statistic/order/get_type",method:"get",params:t})}function w(t){return Object(a.a)({url:"/statistic/flow/get_record",method:"get",params:t})}function _(t){return Object(a.a)({url:"/statistic/balance/get_basic",method:"get",params:t})}function C(t){return Object(a.a)({url:"/statistic/balance/get_trend",method:"get",params:t})}function O(t){return Object(a.a)({url:"/statistic/balance/get_channel",method:"get",params:t})}function j(t){return Object(a.a)({url:"/statistic/balance/get_type",method:"get",params:t})}function L(t,e){return Object(a.a)({url:"app/wechat_qrcode/statistic/".concat(t),method:"get",params:e})}},"0e9c":function(t,e,i){"use strict";var a=i("fa70");i.n(a).a},"2c3e":function(t,e,i){var a=i("da84"),n=i("83ab"),r=i("9f7f").MISSED_STICKY,s=i("c6b6"),c=i("edd0"),o=i("69f3").get,l=RegExp.prototype,u=a.TypeError;n&&r&&c(l,"sticky",{configurable:!0,get:function(){if(this!==l){if("RegExp"===s(this))return!!o(this).sticky;throw u("Incompatible receiver, RegExp required")}}})},"4d63":function(t,e,i){var a=i("83ab"),n=i("da84"),r=i("e330"),s=i("94ca"),c=i("7156"),o=i("9112"),l=i("241c").f,u=i("3a9b"),d=i("44e7"),h=i("577e"),f=i("90d8"),m=i("9f7f"),g=i("aeb0"),p=i("cb2d"),b=i("d039"),y=i("1a2d"),x=i("69f3").enforce,v=i("2626"),w=i("b622"),_=i("fce3"),C=i("107c"),O=w("match"),j=n.RegExp,L=j.prototype,S=n.SyntaxError,D=r(L.exec),E=r("".charAt),z=r("".replace),k=r("".indexOf),F=r("".slice),A=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,M=/a/g,V=/a/g,T=(i=new j(M)!==M,m.MISSED_STICKY),R=m.UNSUPPORTED_Y;w=a&&(!i||T||_||C||b((function(){return V[O]=!1,j(M)!=M||j(V)==V||"/a/i"!=j(M,"i")})));if(s("RegExp",w)){function $(t,e){var i,a,n=u(L,this),r=d(t),s=void 0===e,l=[],m=t;if(!n&&r&&s&&t.constructor===$)return t;if((r||u(L,t))&&(t=t.source,s&&(e=f(m))),t=void 0===t?"":h(t),e=void 0===e?"":h(e),m=t,r=e=_&&"dotAll"in M&&(i=!!e&&-1<k(e,"s"))?z(e,/s/g,""):e,T&&"sticky"in M&&(a=!!e&&-1<k(e,"y"))&&R&&(e=z(e,/y/g,"")),C&&(t=(s=function(t){for(var e,i=t.length,a=0,n="",r=[],s={},c=!1,o=!1,l=0,u="";a<=i;a++){if("\\"===(e=E(t,a)))e+=E(t,++a);else if("]"===e)c=!1;else if(!c)switch(!0){case"["===e:c=!0;break;case"("===e:D(A,F(t,a+1))&&(a+=2,o=!0),n+=e,l++;continue;case">"===e&&o:if(""===u||y(s,u))throw new S("Invalid capture group name");s[u]=!0,o=!(r[r.length]=[u,l]),u="";continue}o?u+=e:n+=e}return[n,r]}(t))[0],l=s[1]),s=c(j(t,e),n?this:L,$),(i||a||l.length)&&(e=x(s),i&&(e.dotAll=!0,e.raw=$(function(t){for(var e,i=t.length,a=0,n="",r=!1;a<=i;a++)"\\"===(e=E(t,a))?n+=e+E(t,++a):r||"."!==e?("["===e?r=!0:"]"===e&&(r=!1),n+=e):n+="[\\s\\S]";return n}(t),r)),a&&(e.sticky=!0),l.length&&(e.groups=l)),t!==m)try{o(s,"source",""===m?"(?:)":m)}catch(t){}return s}for(var I=l(j),B=0;I.length>B;)g($,j,I[B++]);(L.constructor=$).prototype=L,p(n,"RegExp",$,{constructor:!0})}v("RegExp")},"61f7":function(t,e,i){"use strict";i.d(e,"a",(function(){return r})),i.d(e,"c",(function(){return o})),i.d(e,"b",(function(){return l}));var a=i("fc11"),n=i("f3f3");function r(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var i,a,n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(i in n)new RegExp("(".concat(i,")")).test(e)&&(a=n[i]+"",e=e.replace(RegExp.$1,1===RegExp.$1.length?a:("00"+a).substr(a.length)));return e}i("ac1f"),i("00b4"),i("5319"),i("4d63"),i("c607"),i("2c3e"),i("25f0"),i("498a"),i("d3b7"),i("b64b"),i("99af");var s={min:"%s最小长度为:min",max:"%s最大长度为:max",length:"%s长度必须为:length",range:"%s长度为:range",pattern:"$s格式错误"};function c(t,e){t.message=function(t){return e.replace("%s",t||"")}}function o(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return Object(n.a)({required:!0,message:t,type:"string"},e)}function l(t){return u.pattern(/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,t)}c(o,"请输入%s"),c(l,"%s格式不正确");var u=Object.keys(s).reduce((function(t,e){return t[e]=function(t){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},s="range"===e?{min:t[0],max:t[1]}:Object(a.a)({},e,t);return Object(n.a)(Object(n.a)({message:i.replace(":".concat(e),"range"===e?"".concat(t[0],"-").concat(t[1]):t),type:"string"},s),r)},c(t[e],s[e]),t}),{})},7655:function(t,e,i){},"975d":function(t,e,i){"use strict";var a=i("7655");i.n(a).a},9901:function(t,e,i){"use strict";var a=i("313e"),n=i.n(a);a={name:"index",props:{infoList:{type:Object,default:null},series:Array,echartsTitle:{type:String,default:""},yAxisData:{type:Array,default:function(){return[]}},bingXdata:Array},data:function(){return{infoLists:this.infoList,seriesArray:this.series}},watch:{infoList:{handler:function(t,e){this.infoLists=t,this.handleSetVisitChart()},deep:!0},series:{handler:function(t,e){this.seriesArray=t,this.handleSetVisitChart()},deep:!0}},computed:{echarts:function(){return"echarts"+Math.ceil(100*Math.random())}},mounted:function(){var t=this,e=this;e.$nextTick((function(){e.handleSetVisitChart(),window.addEventListener("resize",t.wsFunc)}))},methods:{wsFunc:function(){this.myChart.resize()},handleSetVisitChart:function(){this.myChart=n.a.init(document.getElementById(this.echarts));var t=null;t="circle"===this.echartsTitle?{tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"vertical",left:"right",data:this.infoLists.bing_xdata||[]},series:[{name:"访问来源",type:"pie",radius:"70%",center:["50%","60%"],data:this.infoLists.bing_data||[],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}:{tooltip:{trigger:"axis"},toolbox:{},legend:{data:this.infoLists.legend||[]},color:["#1495EB","#00CC66","#F9D249","#ff9900","#9860DF"],grid:{left:16,right:25,bottom:10,top:40,containLabel:!0},xAxis:[{type:"category",axisLine:{lineStyle:{color:"#D7DDE4"}},axisTick:{alignWithLabel:!0,lineStyle:{color:"#D7DDE4"}},splitLine:{show:!1,lineStyle:{color:"#F5F7F9"}},axisLabel:{interval:0,rotate:40,textStyle:{color:"#7F8B9C"}},data:this.infoLists.xAxis}],yAxis:this.yAxisData.length?this.yAxisData:{axisLine:{show:!1},axisTick:{show:!1},axisLabel:{textStyle:{color:"#7F8B9C"}},splitLine:{show:!0,lineStyle:{color:"#F5F7F9"}},type:"value"},series:this.seriesArray};this.myChart.setOption(t,!0)},handleResize:function(){this.myChart.resize()}},beforeDestroy:function(){window.removeEventListener("resize",this.wsFunc),this.myChart&&(this.myChart.dispose(),this.myChart=null)}},i=i("2877"),i=Object(i.a)(a,(function(){var t=this.$createElement;t=this._self._c||t;return t("div",[t("div",{staticStyle:{height:"300px"},attrs:{id:this.echarts}})])}),[],!1,null,"00217dc6",null);e.a=i.exports},a584:function(t,e,i){"use strict";var a={name:"cards",data:function(){return{colsize:{xl:4,lg:8,md:12}}},props:{cardLists:Array},methods:{},created:function(){switch(this.cardLists.length){case 1:this.colsize.xl=24,this.colsize.lg=24,this.colsize.md=24;break;case 2:this.colsize.xl=12,this.colsize.lg=12,this.colsize.md=12;break;case 3:this.colsize.xl=8,this.colsize.lg=8,this.colsize.md=8;break;case 4:this.colsize.xl=6,this.colsize.lg=6,this.colsize.md=12;break;case 5:this.colsize.xl=8,this.colsize.lg=8,this.colsize.md=12;break;default:this.colsize.xl=4,this.colsize.lg=8,this.colsize.md=12}4==this.cardLists.length?this.colsize.lg=6:4==this.cardLists.length&&(this.colsize.lg=8)}};i("975d"),i=i("2877"),i=Object(i.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-row",{staticClass:"ivu-mt",attrs:{align:"middle",gutter:24}},t._l(t.cardLists,(function(e,a){return i("el-col",{key:a,staticClass:"ivu-mb",attrs:{xl:e.col||t.colsize.xl,lg:t.colsize.lg,md:t.colsize.md,sm:24,xs:24}},[i("el-card",{staticClass:"card_cent",attrs:{shadow:"never"}},[i("div",{staticClass:"card_box"},[i("div",{staticClass:"card_box_cir",class:{one:a%5==0,two:a%5==1,three:a%5==2,four:a%5==3,five:a%5==4}},[i("div",{staticClass:"card_box_cir1",class:{one1:a%5==0,two1:a%5==1,three1:a%5==2,four1:a%5==3,five1:a%5==4}},[i("span",{staticClass:"iconfont",class:e.className})])]),i("div",{staticClass:"card_box_txt"},[i("span",{staticClass:"sp1",domProps:{textContent:t._s(e.count||0)}}),i("span",{staticClass:"sp2",domProps:{textContent:t._s(e.name)}})])])])],1)})),1)],1)}),[],!1,null,"0eb9e1a0",null);e.a=i.exports},c607:function(t,e,i){var a=i("da84"),n=i("83ab"),r=i("fce3"),s=i("c6b6"),c=i("edd0"),o=i("69f3").get,l=RegExp.prototype,u=a.TypeError;n&&r&&c(l,"dotAll",{configurable:!0,get:function(){if(this!==l){if("RegExp"===s(this))return!!o(this).dotAll;throw u("Incompatible receiver, RegExp required")}}})},c71e:function(t,e,i){"use strict";var a=i("313e"),n=i.n(a);a={name:"Index",props:{styles:{type:Object,default:null},optionData:{type:Object,default:null}},data:function(){return{myChart:null}},computed:{echarts:function(){return"echarts"+Math.ceil(100*Math.random())}},watch:{optionData:{handler:function(t,e){this.handleSetVisitChart()},deep:!0}},mounted:function(){var t=this,e=this;e.$nextTick((function(){e.handleSetVisitChart(),window.addEventListener("resize",t.wsFunc)}))},beforeDestroy:function(){window.removeEventListener("resize",this.wsFunc),this.myChart&&(this.myChart.dispose(),this.myChart=null)},methods:{wsFunc:function(){this.myChart.resize()},handleSetVisitChart:function(){this.myChart=n.a.init(document.getElementById(this.echarts));var t=this.optionData;this.myChart.setOption(t,!0)}}},i=i("2877"),i=Object(i.a)(a,(function(){var t=this.$createElement;t=this._self._c||t;return t("div",[t("div",{style:this.styles,attrs:{id:this.echarts}})])}),[],!1,null,"4a0d7a27",null);e.a=i.exports},fa70:function(t,e,i){}}]);