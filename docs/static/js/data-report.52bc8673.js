(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["data-report"],{"386d":function(e,t,n){"use strict";var a=n("cb7c"),i=n("83a1"),o=n("5f1b");n("214f")("search",1,function(e,t,n,r){return[function(n){var a=e(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,a):new RegExp(n)[t](String(a))},function(e){var t=r(n,e,this);if(t.done)return t.value;var s=a(e),l=String(this),g=s.lastIndex;i(g,0)||(s.lastIndex=0);var c=o(s,l);return i(s.lastIndex,g)||(s.lastIndex=g),null===c?-1:c.index}]})},"3c39":function(e,t,n){},"71d3":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.loading?n("div",{staticClass:"page-curd-loading"},[n("Spin",{staticClass:"page-curd-loading-spin",attrs:{size:"large"}})],1):n("div",{staticClass:"page-curd"},[e.pageTitle?n("h2",{staticClass:"page-curd-page-title"},[e._v(e._s(e.pageTitle))]):e._e(),e.searchFormConfig.formFields.length>0?n("FormGenerator",{ref:"searchConditionsFormGenerator",staticClass:"page-curd-conditions",attrs:{fields:e.searchFormConfig.formFields||[],model:e.searchFormModel,options:e.searchFormConfig.options||{}}}):e._e(),n("Divider",{attrs:{dashed:""}}),n("h3",{staticClass:"page-curd-header"},[e.headerActionsConfig.length>0?n("FormGenerator",{ref:"headerActionsFormGenerator",staticClass:"page-curd-header-actions",attrs:{fields:e.headerActionsConfig,model:{},options:e.headerActionsOptions},on:{"on-button-event":e.handleButtonEvent}}):e._e()],1),n("Table",{staticClass:"page-curd-table",attrs:{loading:e.tableLoading,columns:e.tableColumnsConfig,data:e.tableData},scopedSlots:e._u([e._l(e.tableColumnsConfig,function(t){return{key:t.slot,fn:function(a){var i=a.row,o=a.index;return[n("Form",{key:t.slot,attrs:{model:i}},[t.poptip?n("Poptip",{key:t.slot,attrs:{placement:"left-start"}},[n("span",[e._v(e._s(i[t.slot]))]),n("Icon",{attrs:{type:"ios-create-outline",size:"20"}}),n("div",{attrs:{slot:"content"},slot:"content"},e._l(t.poptip.formFields,function(e,t){return n("FieldGenerator",{key:t,attrs:{field:e}})}),1)],1):e._e(),t.formFields?n("div",e._l(t.formFields,function(t,a){return n("FieldGenerator",{key:a,attrs:{field:t},on:{"on-button-event":function(t){return e.handleButtonEvent(t,i,o)}}})}),1):e._e()],1)]}}})],null,!0)}),n("div",{staticClass:"page-curd-pagenation"},[n("Page",{attrs:{total:e.total,showTotal:e.tablePagenationConfig.showTotal,showElevator:e.tablePagenationConfig.showElevator,showSizer:e.tablePagenationConfig.showSizer},on:{"on-change":function(t){return e.handlePageNumberChange(t)},"on-page-size-change":function(t){return e.handlePageSizeChange(t)}}})],1),e._l(e.dialogsConfig,function(t){return n("Modal",{key:t.name,attrs:{title:t.title,"footer-hide":""},model:{value:e.dilogsOpen[t.name],callback:function(n){e.$set(e.dilogsOpen,t.name,n)},expression:"dilogsOpen[dialog.name]"}},[n("FormGenerator",{attrs:{fields:t.formFields,model:e.dilogsModel[t.name]},on:{"on-button-event":function(t){return e.handleButtonEvent(t)}}})],1)})],2)},i=[],o=(n("8e6e"),n("456d"),n("ac6a"),n("a481"),n("7f7f"),n("386d"),n("bd86")),r=n("66df"),s=n("2f62");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach(function(t){Object(o["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var c={watch:{searchFormModel:{deep:!0,handler:function(){this.getTableData()}},pagePath:function(){this.getPageConfig()}},data:function(){return{pageConfig:{},loading:!0,searchFormModel:{},tableLoading:!0,tableData:[],dilogsOpen:{},dilogsModel:{},pageNumber:1,total:0,headerActionsOptions:{}}},computed:g({},Object(s["b"])({pagePath:function(e){return e.page.pagePath}}),{pageTitle:function(){return this.pageConfig.title||""},searchFormConfig:function(){return this.pageConfig.search||{}},headerActionsConfig:function(){return this.pageConfig.actions||[]},tableRequestConfig:function(){return this.pageConfig.table&&this.pageConfig.table.request||{}},tableColumnsConfig:function(){return this.pageConfig.table&&this.pageConfig.table.columns||[]},tablePagenationConfig:function(){return this.pageConfig.table&&this.pageConfig.table.pagenation||[]},dialogsConfig:function(){return this.pageConfig.dialogs||[]}}),mounted:function(){this.getPageConfig()},methods:{getPageConfig:function(){var e=this;this.loading=!0,r["a"].request({url:"/api".concat(this.pagePath,"/page-config"),method:"get",params:{pagePath:this.pagePath}}).then(function(t){e.pageConfig=t.data,e.loading=!1,e.getTableData()})},getTableData:function(){var e=this;this.tableLoading=!0;var t=this.tableRequestConfig,n=t.api,a=t.method,i=this.$route.params.pageId,o=g({pageSize:this.pageSize,pageNumber:this.pageNumber,pageId:i},this.searchFormModel);r["a"].request({method:a,url:n,params:o}).then(function(t){var n=t.data,a=n.list,i=n.pageSize,o=n.pageNumber,r=n.total;e.tableData=a||[],e.pageSize=i||e.pageSize,e.pageNumber=o||e.pageNumber,e.total=r||e.total,e.tableLoading=!1})},handlePageNumberChange:function(e){this.pageNumber=e,this.getTableData()},handlePageSizeChange:function(e){this.pageSize=e,this.getTableData()},handleButtonEvent:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,a=e.name;if(/dialog-/.test(a)){var i=a.replace(/dialog-/,"");this.$set(this.dilogsOpen,i,!0),this.$set(this.dilogsModel,i,t)}else this[e.name](t,n)},ajaxSuccess:function(){var e=this;Object.keys(this.dilogsOpen).forEach(function(t){e.$set(e.dilogsOpen,t,!1),e.$set(e.dilogsModel,t,{})})},pageReset:function(){this.searchFormModel={},this.tableData=[],this.dilogsOpen={},this.dilogsModel={},this.pageNumber=0,this.total=0}},beforeRouteLeave:function(e,t,n){this.pageReset(),n()}},u=c,d=(n("db8d"),n("2877")),f=Object(d["a"])(u,a,i,!1,null,null,null),h=f.exports;t["default"]=h},"83a1":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},a481:function(e,t,n){"use strict";var a=n("cb7c"),i=n("4bf8"),o=n("9def"),r=n("4588"),s=n("0390"),l=n("5f1b"),g=Math.max,c=Math.min,u=Math.floor,d=/\$([$&`']|\d\d?|<[^>]*>)/g,f=/\$([$&`']|\d\d?)/g,h=function(e){return void 0===e?e:String(e)};n("214f")("replace",2,function(e,t,n,p){return[function(a,i){var o=e(this),r=void 0==a?void 0:a[t];return void 0!==r?r.call(a,o,i):n.call(String(o),a,i)},function(e,t){var i=p(n,e,this,t);if(i.done)return i.value;var u=a(e),d=String(this),f="function"===typeof t;f||(t=String(t));var v=u.global;if(v){var m=u.unicode;u.lastIndex=0}var C=[];while(1){var O=l(u,d);if(null===O)break;if(C.push(O),!v)break;var P=String(O[0]);""===P&&(u.lastIndex=s(d,o(u.lastIndex),m))}for(var S="",w=0,F=0;F<C.length;F++){O=C[F];for(var y=String(O[0]),x=g(c(r(O.index),d.length),0),_=[],j=1;j<O.length;j++)_.push(h(O[j]));var k=O.groups;if(f){var D=[y].concat(_,x,d);void 0!==k&&D.push(k);var M=String(t.apply(void 0,D))}else M=b(y,d,x,_,k,t);x>=w&&(S+=d.slice(w,x)+M,w=x+y.length)}return S+d.slice(w)}];function b(e,t,a,o,r,s){var l=a+e.length,g=o.length,c=f;return void 0!==r&&(r=i(r),c=d),n.call(s,c,function(n,i){var s;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,a);case"'":return t.slice(l);case"<":s=r[i.slice(1,-1)];break;default:var c=+i;if(0===c)return n;if(c>g){var d=u(c/10);return 0===d?n:d<=g?void 0===o[d-1]?i.charAt(1):o[d-1]+i.charAt(1):n}s=o[c-1]}return void 0===s?"":s})}})},db8d:function(e,t,n){"use strict";var a=n("3c39"),i=n.n(a);i.a}}]);
//# sourceMappingURL=data-report.52bc8673.js.map