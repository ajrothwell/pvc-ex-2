!function(e){function _(_){for(var n,a,i=_[0],c=_[1],s=_[2],f=0,l=[];f<i.length;f++)a=i[f],r[a]&&l.push(r[a][0]),r[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(u&&u(_);l.length;)l.shift()();return o.push.apply(o,s||[]),t()}function t(){for(var e,_=0;_<o.length;_++){for(var t=o[_],n=!0,i=1;i<t.length;i++){var c=t[i];0!==r[c]&&(n=!1)}n&&(o.splice(_--,1),e=a(a.s=t[0]))}return e}var n={},r={1:0},o=[];function a(_){if(n[_])return n[_].exports;var t=n[_]={i:_,l:!1,exports:{}};return e[_].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.e=function(e){var _=[],t=r[e];if(0!==t)if(t)_.push(t[2]);else{var n=new Promise(function(_,n){t=r[e]=[_,n]});_.push(t[2]=n);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.src=function(e){return a.p+""+({0:"vendors~htg_pvc_HorizontalTable",2:"ht_pvc_HorizontalTableRow",3:"pvc_TopicComponentGroup",4:"tcg_pvc_AnyHeader",5:"tcg_pvc_BadgeCustom",6:"tcg_pvc_ButtonComp",7:"tcg_pvc_CollectionSummary",8:"tcg_pvc_Division",9:"tcg_pvc_HorizontalTableGroup",10:"tcg_pvc_Image",11:"tcg_pvc_List",12:"tcg_pvc_OverlayToggleGroup",13:"tcg_pvc_Paragraph",14:"tcg_pvc_Popover",15:"tcg_pvc_PopoverLink",16:"tcg_pvc_SpanComp",17:"tcg_pvc_TabGroup",18:"tcg_pvc_Topic",19:"tcg_pvc_TopicSet",20:"tcg_pvc_ePayForm"}[e]||e)+".js"}(e),o=function(_){i.onerror=i.onload=null,clearTimeout(c);var t=r[e];if(0!==t){if(t){var n=_&&("load"===_.type?"missing":_.type),o=_&&_.target&&_.target.src,a=new Error("Loading chunk "+e+" failed.\n("+n+": "+o+")");a.type=n,a.request=o,t[1](a)}r[e]=void 0}};var c=setTimeout(function(){o({type:"timeout",target:i})},12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(_)},a.m=e,a.c=n,a.d=function(e,_,t){a.o(e,_)||Object.defineProperty(e,_,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,_){if(1&_&&(e=a(e)),8&_)return e;if(4&_&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&_&&"string"!=typeof e)for(var n in e)a.d(t,n,function(_){return e[_]}.bind(null,n));return t},a.n=function(e){var _=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(_,"a",_),_},a.o=function(e,_){return Object.prototype.hasOwnProperty.call(e,_)},a.p="/pe2/",a.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=_,i=i.slice();for(var s=0;s<i.length;s++)_(i[s]);var u=c;o.push([92,21]),t()}({123:function(e,_,t){"use strict";var n=t(24);t.n(n).a},124:function(e,_,t){(e.exports=t(9)(!1)).push([e.i,"\n#app {\n  font-family: 'Avenir', Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n  color: #2c3e50;\n  margin-top: 60px;\n}\n",""])},24:function(e,_,t){var n=t(124);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(10)(n,r);n.locals&&(e.exports=n.locals)},26:function(e,_,t){"use strict";function n(e,_,t){return _ in e?Object.defineProperty(e,_,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[_]=t,e}function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return e&&"object"===r(e)&&!Array.isArray(e)&&null!==e}function a(e,_){var t=Object.assign({},e);return o(e)&&o(_)&&Object.keys(_).forEach(function(r){o(_[r])&&r in e?t[r]=a(e[r],_[r]):Object.assign(t,n({},r,_[r]))}),t}t.d(_,"a",function(){return a})},40:function(e,_,t){"use strict";var n=t(39),r=t.n(n),o=t(41);r.a.settings.currency.precision=0;var a={router:{enabled:!1},transforms:{currency:{globals:["accounting"],transform:function(e,_){return r.a.formatMoney(e)}},date:{transform:function(e){return Object(o.format)(e,"MM/DD/YYYY")}},phoneNumber:{transform:function(e){var _=(""+e).replace(/\D/g,"").match(/^(\d{3})(\d{3})(\d{4})$/);return _?"("+_[1]+") "+_[2]+"-"+_[3]:null}},rcoPrimaryContact:{transform:function(e){var _=/\(?(\d{3})\)?( |-)?(\d{3})(-| )?(\d{4})/g.exec(e);if(!_)return e;var t=["(",_[1],") ",_[3],"-",_[5]].join(""),n=_[0];return e.replace(n,t)}},booleanToYesNo:{transform:function(e){return e?"Yes":"No"}},integer:{transform:function(e){return!isNaN(e)&&parseInt(e)}},prettyNumber:{transform:function(e){return!isNaN(e)&&e.toLocaleString()}},feet:{transform:function(e){return e&&e+" ft"}},squareFeet:{transform:function(e){return e&&e+" sq ft"}},nowrap:{transform:function(e){return'<span style="white-space: nowrap;">'+e+"</span>"}},bold:{transform:function(e){return"<strong>"+e+"</strong>"}}}};_.a=a},85:function(e,_,t){"use strict";var n=t(8),r=t(38),o=t(26),a=t(86);n.a.use(r.a),_.a=function(e){var _={state:{candidates:[],addressEntered:null},mutations:{setCandidates:function(e,_){e.candidates=_},setAddressEntered:function(e,_){e.addressEntered=_}}},t=Object(o.a)(_,a.a);return new r.a.Store({state:t.state,getters:t.getters,mutations:t.mutations})}},87:function(e,_,t){"use strict";_.a=function(e,_){e.mixin({created:function(){this.$config=_}})}},91:function(e,_,t){"use strict";var n={name:"app",components:{Badge:function(){return Promise.resolve().then(function(){return t(227)})},Callout:function(){return Promise.resolve().then(function(){return t(229)})},VerticalTable:function(){return Promise.resolve().then(function(){return t(228)})}}},r=(t(123),t(1)),o=Object(r.a)(n,function(){var e=this.$createElement,_=this._self._c||e;return _("div",{attrs:{id:"app"}},[_("badge",{attrs:{slots:{title:"Address or Intersection Found",value:"test"}}}),this._v(" "),_("callout",{attrs:{slots:{text:"Address or Intersection Found"}}}),this._v(" "),_("vertical-table",{staticClass:"margin-20 margin-bottom-60 medium-8",attrs:{slots:{fields:[{label:"field1",value:"field1 value"},{label:"field2",value:"field2 value"}]},options:{id:"verticalTableId",externalLink:{action:function(){return"external link - "},name:"Atlas",href:"https://atlas.phila.gov"}}}})],1)},[],!1,null,null,null);_.a=o.exports},92:function(e,_,t){t(93),e.exports=t(94)},93:function(e,_,t){e.exports=t.p+"index.html"},94:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(8),axios__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(84),axios__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__),_store__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(85),_util_config_mixin__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(87),_components_App_vue__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(91),_util_merge_deep__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(26),_config_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(40),_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(4),_fortawesome_pro_solid_svg_icons_faInfoCircle__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(88),_fortawesome_pro_solid_svg_icons_faInfoCircle__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_fortawesome_pro_solid_svg_icons_faInfoCircle__WEBPACK_IMPORTED_MODULE_8__),_fortawesome_pro_solid_svg_icons_faExternalLink__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(89),_fortawesome_pro_solid_svg_icons_faExternalLink__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_fortawesome_pro_solid_svg_icons_faExternalLink__WEBPACK_IMPORTED_MODULE_9__),_fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(90);_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_7__.c.add(_fortawesome_pro_solid_svg_icons_faInfoCircle__WEBPACK_IMPORTED_MODULE_8__.faInfoCircle,_fortawesome_pro_solid_svg_icons_faExternalLink__WEBPACK_IMPORTED_MODULE_9__.faExternalLink);var date=new Date;console.log("date:",date);var clientConfig=_config_js__WEBPACK_IMPORTED_MODULE_6__.a,baseConfigUrl=_config_js__WEBPACK_IMPORTED_MODULE_6__.a.baseConfig;function initVue(e){var _=Object(_store__WEBPACK_IMPORTED_MODULE_2__.a)(e);vue__WEBPACK_IMPORTED_MODULE_0__.a.use(_util_config_mixin__WEBPACK_IMPORTED_MODULE_3__.a,e),vue__WEBPACK_IMPORTED_MODULE_0__.a.component("font-awesome-icon",_fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_10__.a);new vue__WEBPACK_IMPORTED_MODULE_0__.a({el:"#vue-app",render:function(e){return e(_components_App_vue__WEBPACK_IMPORTED_MODULE_4__.a)},store:_})}baseConfigUrl?axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(baseConfigUrl).then(function(response){var data=response.data,baseConfigFn=eval(data),gatekeeperKey=clientConfig.gatekeeperKey,baseConfig=baseConfigFn({gatekeeperKey:gatekeeperKey}),config=Object(_util_merge_deep__WEBPACK_IMPORTED_MODULE_5__.a)(baseConfig,clientConfig);initVue(config)}).catch(function(e){console.error("Error loading base config:",e)}):initVue(clientConfig)}});
//# sourceMappingURL=app.js.map