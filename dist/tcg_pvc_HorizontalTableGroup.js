(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{238:function(t,a,e){var o=e(263);"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(10)(o,i);o.locals&&(t.exports=o.locals)},262:function(t,a,e){"use strict";var o=e(238);e.n(o).a},263:function(t,a,e){(t.exports=e(9)(!1)).push([t.i,"\n.tabs-panel[data-v-5a1ad69d] {\n  padding: 20px;\n}\n.inline-block[data-v-5a1ad69d] {\n  display: inline-block;\n}\n.vertically-centered[data-v-5a1ad69d] {\n  display: inline-block;\n  vertical-align: middle;\n}\n.mb-horizontal-table-controls[data-v-5a1ad69d] {\n  text-align: center;\n  vertical-align: middle;\n  margin-bottom: 10px;\n}\n\n/* dropdown filters */\n.mb-select-text[data-v-5a1ad69d] {\n  font-size: 16px;\n  padding-right: 5px;\n  padding-left: 5px;\n}\n.mb-select[data-v-5a1ad69d] {\n  width: auto;\n  height: 40px;\n  vertical-align: middle;\n  /*padding-right: 20px;*/\n}\n.mb-select-option[data-v-5a1ad69d] {\n  display: inline-block;\n  padding-right: 100px;\n  margin-right: 100px;\n}\n",""])},277:function(t,a,e){"use strict";e.r(a);var o={mixins:[e(3).a],components:{HorizontalTable:()=>e.e(0).then(e.bind(null,279))},data(){return{tableGroupData:{tableGroupId:this.options.horizontalTableGroupId,activeTable:null,activeTableId:null}}},created(){if(console.log("horizontalTableGroup created is starting, this.tableGroupData:",this.tableGroupData),this.options.filters){console.log("horizontalTableGroup created, if this.options.filters is running:",this.options.filters,this.options.filters.entries());for(let t of this.options.filters){console.log("for loop, this.options.filters:",this.options.filters[0]),console.log("for loop, filter:",t);const a=t.values[0].value||{};console.log("for loop, defaultTableName:",a),this.tableGroupData.activeTable=a;for(let t of this.options.tables)t.options.id===a&&(this.tableGroupData.activeTableId=t._id);console.log("horizontalTableGroup this.tableGroupData:",this.tableGroupData),this.$store.commit("setHorizontalTableGroupActiveTable",this.tableGroupData)}console.log("horizontalTableGroup created, if this.options.filters is ending")}if(this.options.alternate){console.log("horizontalTableGroup created, if this.options.alternate - mainTable",this.options.alternate.mainTable,this.altMainTable,"dependentTable",this.options.alternate.dependentTable,this.altDepTable);const t=this.$store.state.sources;t[this.altDepTable.dataSource].data&&!t[this.altMainTable.dataSource].data?(this.activeTable=this.altDepTable.id,this.activeTableId="aaa",this.$store.commit("setHorizontalTableGroupActiveTable",this.tableGroupData)):t[this.altMainTable.dataSource].data&&(this.activeTable=this.altMainTable.id,this.activeTableId="bbb",this.$store.commit("setHorizontalTableGroupActiveTable",this.tableGroupData))}this.options.showBoth&&console.log("tableGroup showBoth")},computed:{altMainTable(){return this.options.alternate?this.options.alternate.mainTable:null},altDepTable(){return this.options.alternate?this.options.alternate.dependentTable:null}},methods:{shouldShowTable(t){let a=!0;return this.tableGroupData.activeTable!=t&&(a=!1),a},slugifyFilterValue(t){const{direction:a,value:e,unit:o}=t;return[a,e,o].join("-")},deslugifyFilterValue(t){const a=t.split("-"),[e,o,i]=a;return{value:o,unit:i,direction:e}},handleFilterValueChange(t){console.log("handle activeTable value change",t);const a=t.target.value,e=this.deslugifyFilterValue(a).value;this.tableGroupData.activeTable=e;for(let t of this.options.tables)console.log("tableName:",e,"comp.options.id:",t.options.id,"comp:",t),t.options.id===e&&(this.tableGroupData.activeTableId=t._id);console.log("handleFilterValueChange, this.tableGroupData:",this.tableGroupData),this.$store.commit("setHorizontalTableGroupActiveTable",this.tableGroupData)}}},i=(e(262),e(1)),l=Object(i.a)(o,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[this.$props.options.filters?e("div",{staticClass:"mb-horizontal-table-controls"},t._l(this.$props.options.filters,function(a,o){return e("div",{staticClass:"inline-block",attrs:{id:"filter-"+o}},[e("div",{staticClass:"vertically-centered mb-select-text"},[t._v(t._s(a.label))]),t._v(" "),e("select",{staticClass:"mb-select",on:{change:t.handleFilterValueChange}},[e("optgroup",t._l(a.values,function(a){return e("option",{staticClass:"mb-select-option",domProps:{value:t.slugifyFilterValue(a)}},[t._v("\n            "+t._s(a.label)+"\n          ")])}),0)])])}),0):t._e(),t._v(" "),t._l(t.options.tables,function(a){return e("horizontal-table",{directives:[{name:"show",rawName:"v-show",value:t.shouldShowTable(a.options.id),expression:"shouldShowTable(table.options.id)"}],attrs:{item:t.tableGroupData,options:a.options,slots:a.slots}})})],2)},[],!1,null,"5a1ad69d",null);a.default=l.exports}}]);
//# sourceMappingURL=tcg_pvc_HorizontalTableGroup.js.map