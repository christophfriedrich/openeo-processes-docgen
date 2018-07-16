(function(e){function t(t){for(var n,c,i=t[0],o=t[1],l=t[2],u=0,m=[];u<i.length;u++)c=i[u],r[c]&&m.push(r[c][0]),r[c]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);p&&p(t);while(m.length)m.shift()();return a.push.apply(a,l||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],n=!0,i=1;i<s.length;i++){var o=s[i];0!==r[o]&&(n=!1)}n&&(a.splice(t--,1),e=c(c.s=s[0]))}return e}var n={},r={0:0},a=[];function c(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=e,c.c=n,c.d=function(e,t,s){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(s,n,function(t){return e[t]}.bind(null,n));return s},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/openeo-processes-docgen/demo/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var p=o;a.push([0,1]),s()})({0:function(e,t,s){e.exports=s("Vtdi")},"0vKf":function(e,t,s){},"1EHo":function(e,t,s){},"20nU":function(e,t,s){"use strict";(function(e){s("yt8O"),s("VRzm");e.exports={clientPath:"/",devPort:8e3,document:"processes.json"}}).call(this,s("3UD+")(e))},4:function(e,t){},5:function(e,t){},6:function(e,t){},"9Sj3":function(e,t,s){"use strict";var n=s("1EHo"),r=s.n(n);r.a},QWRk:function(e,t,s){"use strict";var n=s("VJYz"),r=s.n(n);r.a},VJYz:function(e,t,s){},Vtdi:function(e,t,s){"use strict";s.r(t);s("yt8O"),s("VRzm");var n=s("Kw5r"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"container"}},[s("h1",[e._v("Processes")]),s("div",{attrs:{id:"toc"}},[s("ul",e._l(e.processes,function(t,n){return s("li",{key:n},[s("a",{attrs:{href:"#"+t.name}},[e._v(e._s(t.name))]),s("span",[e._v(e._s(t.summary))])])}))]),s("div",{attrs:{id:"content"}},e._l(e.processes,function(e,t){return s("ProcessPanel",{key:t,attrs:{process:e}})}))])},a=[],c=new n["a"],i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"processPanel"},[s("a",{staticClass:"anchor",attrs:{name:e.process.name}}),s("h2",[!0===e.process.deprecated?s("strong",{staticClass:"deprecated"},[e._v("deprecated")]):e._e(),s("code",[e._v(e._s(e.process.name))]),e.process.summary?s("span",{staticClass:"summary"},[e._v(e._s(e.process.summary))]):e._e()]),s("div",{staticClass:"content"},[e.process.description?s("DescriptionElement",{attrs:{description:e.process.description}}):e._e(),e.process.links?s("div",{staticClass:"links"},[s("strong",[e._v("Additional links:")]),s("ul",e._l(e.process.links,function(t,n){return s("li",{key:n},[s("a",{attrs:{href:t.href,target:"_blank"}},[t.title?s("span",[e._v(e._s(t.title))]):s("span",[e._v(e._s(t.href))])]),t.rel?s("span",[e._v(" ("+e._s(t.rel)+")")]):e._e()])}))]):e._e(),s("div",{staticClass:"parameters"},[s("h3",[e._v("Parameters")]),e.process.min_parameters>0?s("em",{staticClass:"min_parameters"},[e._v("Required: "+e._s(e.process.min_parameters))]):e._e(),e._l(e.process.parameters,function(t,n){return s("div",{key:n,staticClass:"content"},[s("h6",[s("code",[e._v(e._s(n))]),!0===t.required?s("strong",{staticClass:"required",attrs:{title:"required"}},[e._v("*")]):e._e(),!0===t.deprecated?s("strong",{staticClass:"deprecated"},[e._v("deprecated")]):e._e()]),s("div",{staticClass:"content"},[t.description?s("DescriptionElement",{attrs:{description:t.description}}):e._e(),t.mime_type?s("p",{staticClass:"mimeType"},[s("strong",[e._v("MIME type: ")]),e._v(e._s(t.mime_type))]):e._e(),s("SchemaPanel",{attrs:{schema:t.schema}})],1)])}),0===Object.keys(e.process.parameters).length?s("p",{staticClass:"content"},[e._v("None")]):e._e()],2),s("div",{staticClass:"returns"},[s("h3",[e._v("Returns")]),s("div",{staticClass:"content"},[e.process.returns.description?s("DescriptionElement",{attrs:{description:e.process.returns.description}}):e._e(),e.process.returns.mime_type?s("p",{staticClass:"mimeType"},[s("strong",[e._v("MIME type: ")]),e._v(e._s(e.process.returns.mime_type))]):e._e(),s("SchemaPanel",{attrs:{schema:e.process.returns.schema}})],1)]),e.process.exceptions?s("div",{staticClass:"exceptions"},[s("h3",[e._v("Exceptions")]),s("ul",e._l(e.process.exceptions,function(t,n){return s("li",{key:n,staticClass:"exception"},[s("strong",{staticClass:"name"},[e._v(e._s(n))]),t.code?s("span",{staticClass:"code"},[e._v("("+e._s(t.code)+")")]):e._e(),t.description?s("DescriptionElement",{attrs:{description:t.description}}):e._e()],1)}))]):e._e()],1)])},o=[],l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"schemaContainer"},[s("h6",[e._v("Schema")]),s("div",{staticClass:"content"},[s("SchemaElement",{attrs:{schema:e.schema}})],1)])},p=[],u=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"schemaElement"},["object"==e.schema.type?s("div",{staticClass:"schemaObjectElement"},[s("table",{staticClass:"objectProperties"},[null!==e.filteredObjectSchema?[e.schema.properties?s("tr",[s("th",{attrs:{colspan:"2"}},[e._v("Schema Attributes:")])]):e._e(),s("tr",[s("td",{staticClass:"inlineSchemaAttrs",attrs:{colspan:"2"}},[s("SchemaElement",{attrs:{schema:e.filteredObjectSchema}})],1)])]:e._e(),e.schema.properties?s("tr",[s("th",{attrs:{colspan:"2"}},[e._v("Object Properties:")])]):e._e(),e._l(e.schema.properties,function(t,n){return s("tr",{key:n},[s("td",{staticClass:"propKey"},[e._v("\n\t\t\t\t\t"+e._s(n)+"\n\t\t\t\t\t"),e.schema.required&&-1!==e.schema.required.indexOf(n)?s("strong",{staticClass:"required",attrs:{title:"required"}},[e._v("*")]):e._e()]),s("td",{staticClass:"value"},[s("SchemaElement",{attrs:{schema:t}})],1)])})],2)]):s("table",{staticClass:"schemaAttrs"},e._l(e.schema,function(t,n){return s("tr",{key:n},[s("td",{staticClass:"key"},[e._v(e._s(n))]),s("td",{staticClass:"value"},["default"!=n&&"example"!=n&&!0===t?s("i",{staticClass:"fas fa-check",attrs:{title:"true"}}):"default"!=n&&"example"!=n&&!1===t?s("i",{staticClass:"fas fa-times",attrs:{title:"false"}}):Array.isArray(t)?s("ul",{staticClass:"csList"},e._l(t,function(t,n){return s("li",{key:n},[e._v(e._s(t))])})):"description"==n?s("DescriptionElement",{attrs:{description:t}}):"pattern"==n?s("code",[e._v(e._s(t))]):"object"===typeof t?s("SchemaElement",{attrs:{schema:t}}):s("span",[e._v(e._s(t))])],1)])}))])},m=[],d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"description",domProps:{innerHTML:e._s(e.markup(e.description))}})},_=[],f=s("59Eu"),h=s.n(f),v={name:"DescriptionElement",props:["description"],methods:{markup:function(e){var t=new h.a.Parser,s=new h.a.HtmlRenderer,n=t.parse(e);return s.render(n)}}},y=v,C=s("KHd+"),b=Object(C["a"])(y,d,_,!1,null,null,null),g=b.exports,E={name:"SchemaElement",props:["schema"],components:{DescriptionElement:g},computed:{filteredObjectSchema:function(){var e=null;for(var t in this.schema)"required"!=t&&"properties"!=t&&"type"!=t&&(null===e&&(e={}),e[t]=this.schema[t]);return e}}},P=E,j=(s("9Sj3"),Object(C["a"])(P,u,m,!1,null,null,null)),O=j.exports,S={name:"SchemaPanel",props:["schema"],components:{SchemaElement:O}},k=S,x=(s("QWRk"),Object(C["a"])(k,l,p,!1,null,null,null)),w=x.exports,D={name:"ProcessPanel",props:["process"],components:{SchemaPanel:w,DescriptionElement:g}},M=D,q=(s("wZ/l"),Object(C["a"])(M,i,o,!1,null,"437601e0",null)),$=q.exports,R=(s("Po9p"),s("vDqi")),A=s.n(R),T=s("MfPm"),V=s.n(T),H=s("20nU"),K={name:"DocGen",components:{ProcessPanel:$},data:function(){return{document:window.processesDocument||H["default"].document,processes:{}}},created:function(){c.$on("changeDocument",this.changeDocument)},mounted:function(){"string"===typeof this.document&&this.document.length>0&&c.$emit("changeDocument",this.document)},methods:{changeDocument:function(e){var t=this;A.a.get(e).then(function(e){V.a.dereference(e.data).then(function(e){t.processes=e,c.$emit("documentChanged")}).catch(function(e){console.error(e)})}).catch(function(e){console.log(e)})}}},z=K,I=(s("dMtB"),Object(C["a"])(z,r,a,!1,null,null,null)),J=I.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(J)}}).$mount("#app")},dMtB:function(e,t,s){"use strict";var n=s("0vKf"),r=s.n(n);r.a},rtI2:function(e,t,s){},"wZ/l":function(e,t,s){"use strict";var n=s("rtI2"),r=s.n(n);r.a}});
//# sourceMappingURL=app.a6fc5a61.js.map