(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-14edecb8"],{"216b":function(e,t,r){},"7bcf":function(e,t,r){"use strict";r.r(t),r("d81d"),r("99af"),r("a630"),r("3ca3"),r("d3b7"),r("6062"),r("ddb0");var i={name:"widgetImg",components:{uploadFrom:r("b0e7").a},data:function(){return{isChoice:"单选",isChoiceD:"多选",gridPic:{xl:4,lg:4,md:8,sm:12,xs:12},gridBtn:{xl:4,lg:4,md:4,sm:8,xs:8}}},mounted:function(){},methods:{getPicD:function(e){var t=window.form_create_helper.get(this.$route.query.fodder)||[];e=e.map((function(e){return e.att_dir})),t=t.concat(e),e=Array.from(new Set(t));form_create_helper.set(this.$route.query.fodder,e),form_create_helper.close(this.$route.query.fodder)},getPic:function(e){form_create_helper.set(this.$route.query.fodder,e.satt_dir),form_create_helper.close(this.$route.query.fodder)}}};r("efbc"),r=r("2877"),r=Object(r.a)(i,(function(){var e=this,t=e.$createElement;t=e._self._c||t;return t("div",{staticClass:"box"},["dialog"===this.$route.query.fodder||"many"===this.$route.query.type?t("upload-from",{attrs:{isChoice:e.isChoiceD,gridPic:e.gridPic,gridBtn:e.gridBtn},on:{getPicD:e.getPicD}}):t("upload-from",{attrs:{isChoice:e.isChoice,gridPic:e.gridPic,gridBtn:e.gridBtn},on:{getPic:e.getPic}})],1)}),[],!1,null,"7e31ed24",null);t.default=r.exports},efbc:function(e,t,r){"use strict";var i=r("216b");r.n(i).a}}]);