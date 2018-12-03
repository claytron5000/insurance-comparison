(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a(30)},17:function(e,t,a){},24:function(e,t,a){},26:function(e,t,a){},28:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(9),s=a.n(i),c=(a(17),a(2)),l=a(3),u=a(6),o=a(4),m=a(5),v=a(7),p=a(1),h=a(8),d=a.n(h),b=a(11),g=a.n(b),f=(a(24),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(o.a)(t).call(this))).state={minimum:0},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"calculateMinimum",value:function(e){var t=parseInt(e.premium.value);t=Number.isInteger(t)?t:0;var a=parseInt(e.hsa.value);a=Number.isInteger(a)?a:0;var r=parseInt(e.surcharge.value);return t+(r=Number.isInteger(r)?r:0)-a}},{key:"calculateMaxDeductible",value:function(e){var t=parseInt(e.premium.value);t=Number.isInteger(t)?t:0;var a=parseInt(e.deductible.value);a=Number.isInteger(a)?a:0;var r=parseInt(e.hra.value);r=Number.isInteger(r)?r:0;var n=parseInt(e.hsa.value);n=Number.isInteger(n)?n:0;var i=parseInt(e.surcharge.value);return t+a+(i=Number.isInteger(i)?i:0)-r-n}},{key:"calculateOutPocketMaximum",value:function(e){var t=parseInt(e.premium.value);t=Number.isInteger(t)?t:0;var a=parseInt(e.pocketMax.value);a=Number.isInteger(a)?a:0;var r=parseInt(e.hra.value);r=Number.isInteger(r)?r:0;var n=parseInt(e.hsa.value);n=Number.isInteger(n)?n:0;var i=parseInt(e.surcharge.value);return t+a+(i=Number.isInteger(i)?i:0)-r-n}},{key:"render",value:function(){var e=this,t=this.props.fields,a=this.calculateMinimum(t),r=this.calculateMaxDeductible(t),i=this.calculateOutPocketMaximum(t);return n.a.createElement("div",{className:"Coverage"},n.a.createElement("h2",null,n.a.createElement(g.a,{initialValue:this.props.coverageTitle,save:function(t){return e.props.saveTitle({value:t,id:e.props.formId})}})),n.a.createElement("input",{onChange:function(t){return e.props.select(t,e.props.formId)},id:"".concat(this.props.formId,"-compare"),type:"checkbox"}),n.a.createElement("label",{for:"".concat(this.props.formId,"-compare")},"Select for Comparison"),n.a.createElement("form",{onSubmit:function(t){return e.props.select(t,e.props.formId)}},n.a.createElement("p",null,"All values should be entered as whole number for the entire year. NO COMMAS, DOLLAR SIGNS OR OTHER NON-NUMERICS"),Object.keys(t).map(function(a){var r=e.props.formId+"_"+a;return n.a.createElement("div",null,n.a.createElement("label",{for:r},t[a].name),n.a.createElement("input",{id:r,onChange:function(t){return e.props.updateField(t,a,e.props.formId)},value:t[a].value}))}),n.a.createElement("div",null,n.a.createElement("h3",null,"Minimum Usage Cost: $",a),n.a.createElement("p",null,"Premium + Surchare - HSA. This represents a year in which the insurance is unused. No additional costs over whatever might be fully covered."),n.a.createElement("div",{className:"dim"},n.a.createElement("h3",null,"Maxed Deductible Cost: $",r),n.a.createElement("p",null,"Premium + Surcharge + Deductible - HSA - HRA. This represents a year in which the expenses reach exactly to the deductible. This is not a good way to compare plans because reaching the deductible on different plans representes much differnt health care spending.")),n.a.createElement("h3",null,"Out of Pocket Max: $",i),n.a.createElement("p",null,"Premium + Surcharge + Out of Pocket Maximum - HSA - HRA. This represents a year in which expenses reach the Out of Pocket Maxium."))))}}]),t}(r.Component)),O=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("li",null,n.a.createElement("h4",null,this.props.title),n.a.createElement("p",null,"Min: ",this.props.minimum),n.a.createElement("p",null,"Max: ",this.props.maximum))}}]),t}(r.Component),I=(a(26),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(o.a)(t).call(this))).blankCoverage={coverageTitle:"Coverage Title",fields:{premium:{name:"Yearly Premium",value:"",positive:!0},deductible:{name:"Deductible",value:"",positive:!0},pocketMax:{name:"Out of pocket maximum",value:"",positive:!0},hsa:{name:"Health Savings Account",value:"",positive:!1},hra:{name:"Health Reimbursment Account",value:"",positive:!1},surcharge:{name:"Surcharge",value:"",positive:!0}},compare:!1},e.state={planTitle:"Coverage Plans",coverages:{coverage_0:e.blankCoverage},comparisons:[]},e.updateField=e.updateField.bind(Object(p.a)(Object(p.a)(e))),e.addCoverage=e.addCoverage.bind(Object(p.a)(Object(p.a)(e))),e.select=e.select.bind(Object(p.a)(Object(p.a)(e))),e.addToCompare=e.addToCompare.bind(Object(p.a)(Object(p.a)(e))),e.saveTitle=e.saveTitle.bind(Object(p.a)(Object(p.a)(e))),e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"saveTitle",value:function(e){var t=d()(this.state.coverages,Object(v.a)({},e.id,{coverageTitle:{$set:e.value}}));this.setState({coverages:t})}},{key:"calculateMinimum",value:function(e){var t=parseInt(e.premium.value);t=Number.isInteger(t)?t:0;var a=parseInt(e.hsa.value);a=Number.isInteger(a)?a:0;var r=parseInt(e.surcharge.value);return t+(r=Number.isInteger(r)?r:0)-a}},{key:"calculateOutPocketMaximum",value:function(e){var t=parseInt(e.premium.value);t=Number.isInteger(t)?t:0;var a=parseInt(e.pocketMax.value);a=Number.isInteger(a)?a:0;var r=parseInt(e.hra.value);r=Number.isInteger(r)?r:0;var n=parseInt(e.hsa.value);n=Number.isInteger(n)?n:0;var i=parseInt(e.surcharge.value);return t+a+(i=Number.isInteger(i)?i:0)-r-n}},{key:"addToCompare",value:function(){var e=this,t=this.state.coverages,a=Object.keys(t).reduce(function(a,r){if(console.log(a),t[r].compare){var n=e.calculateMinimum(t[r].fields),i=e.calculateOutPocketMaximum(t[r].fields);"title"in a?(a.title="".concat(a.title," & ").concat(t[r].coverageTitle),a.minimum=a.minimum+n,a.maximum=a.maximum+i):(a.title=t[r].coverageTitle,a.minimum=n,a.maximum=i)}return a},{}),r=d()(this.state.comparisons,{$push:[a]});this.setState({comparisons:r})}},{key:"select",value:function(e,t){var a=d()(this.state.coverages,Object(v.a)({},t,{compare:{$apply:function(e){return!e}}}));this.setState({coverages:a})}},{key:"addCoverage",value:function(){var e=Object.keys(this.state.coverages).length,t=d()(this.state.coverages,{$merge:Object(v.a)({},"coverage_".concat(e),this.blankCoverage)});this.setState({coverages:t})}},{key:"updateField",value:function(e,t,a){e.preventDefault();var r=e.target.value;if(r.match(/[0-9]*/)){var n=d()(this.state.coverages,Object(v.a)({},a,{fields:Object(v.a)({},t,{value:{$set:r}})}));this.setState({coverages:n})}else console.log(r)}},{key:"render",value:function(){var e=this,t=this.state.coverages;return n.a.createElement("div",null,n.a.createElement("div",{className:"Plan"},n.a.createElement("h1",null,this.state.planTitle),n.a.createElement("button",{onClick:this.addToCompare},"Add Selected to Comparison ",n.a.createElement("span",{className:"icon"},">")),n.a.createElement("ul",null,Object.keys(this.state.coverages).map(function(a){return n.a.createElement(f,{updateField:e.updateField,coverageTitle:t[a].coverageTitle,fields:t[a].fields,formId:a,select:e.select,saveTitle:e.saveTitle})})),n.a.createElement("button",{onClick:this.addCoverage},n.a.createElement("span",{className:"icon"},"+")," Add Coverage")),n.a.createElement("div",{className:"Comparisons"},n.a.createElement("ul",null,Object.keys(this.state.comparisons).map(function(t){return console.log(t),n.a.createElement(O,{title:e.state.comparisons[t].title,minimum:e.state.comparisons[t].minimum,maximum:e.state.comparisons[t].maximum})}))))}}]),t}(r.Component)),j=(a(28),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(I,null))}}]),t}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,2,1]]]);
//# sourceMappingURL=main.6cb16ec6.chunk.js.map