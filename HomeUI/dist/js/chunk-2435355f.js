(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2435355f"],{"06d9":function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r("2f79"),c=Object(n["c"])({computed:{selectionStart:{cache:!1,get:function(){return this.$refs.input.selectionStart},set:function(t){this.$refs.input.selectionStart=t}},selectionEnd:{cache:!1,get:function(){return this.$refs.input.selectionEnd},set:function(t){this.$refs.input.selectionEnd=t}},selectionDirection:{cache:!1,get:function(){return this.$refs.input.selectionDirection},set:function(t){this.$refs.input.selectionDirection=t}}},methods:{select:function(){var t;(t=this.$refs.input).select.apply(t,arguments)},setSelectionRange:function(){var t;(t=this.$refs.input).setSelectionRange.apply(t,arguments)},setRangeText:function(){var t;(t=this.$refs.input).setRangeText.apply(t,arguments)}}})},"0ad5":function(t,e,r){"use strict";var n=r("b4c0");e["a"]={start:function(t){return Object(n["a"])().get("/benchmark/start",{headers:{zelidauth:t}})},restart:function(t){return Object(n["a"])().get("/benchmark/restart",{headers:{zelidauth:t}})},getStatus:function(){return Object(n["a"])().get("/benchmark/getstatus")},restartNodeBenchmarks:function(t){return Object(n["a"])().get("/benchmark/restartnodebenchmarks",{headers:{zelidauth:t}})},signFluxTransaction:function(t,e){return Object(n["a"])().get("/benchmark/signzelnodetransaction/".concat(e),{headers:{zelidauth:t}})},helpSpecific:function(t){return Object(n["a"])().get("/benchmark/help/".concat(t))},help:function(){return Object(n["a"])().get("/benchmark/help")},stop:function(t){return Object(n["a"])().get("/benchmark/stop",{headers:{zelidauth:t}})},getBenchmarks:function(){return Object(n["a"])().get("/benchmark/getbenchmarks")},getInfo:function(){return Object(n["a"])().get("/benchmark/getinfo")},tailBenchmarkDebug:function(t){return Object(n["a"])().get("/flux/tailbenchmarkdebug",{headers:{zelidauth:t}})},justAPI:function(){return Object(n["a"])()},cancelToken:function(){return n["b"]}}},"1f1e":function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r("2f79"),c=Object(n["c"])({computed:{validity:{cache:!1,get:function(){return this.$refs.input.validity}},validationMessage:{cache:!1,get:function(){return this.$refs.input.validationMessage}},willValidate:{cache:!1,get:function(){return this.$refs.input.willValidate}}},methods:{setCustomValidity:function(){var t;return(t=this.$refs.input).setCustomValidity.apply(t,arguments)},checkValidity:function(){var t;return(t=this.$refs.input).checkValidity.apply(t,arguments)},reportValidity:function(){var t;return(t=this.$refs.input).reportValidity.apply(t,arguments)}}})},"205f":function(t,e,r){"use strict";r.d(e,"a",(function(){return R}));var n=r("2f79"),c=r("b42e"),a=r("c637"),o=r("a723"),i=r("9b76"),s=r("8690"),u=r("365c"),l=r("d82f"),b=r("cf75"),d=r("d580"),f=r("6197"),p=r("b885");function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function O(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){j(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function j(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var m=Object(b["d"])(Object(l["m"])(O(O({},Object(b["a"])(d["a"],b["f"].bind(null,"footer"))),{},{footer:Object(b["c"])(o["t"]),footerClass:Object(b["c"])(o["e"]),footerHtml:Object(b["c"])(o["t"])})),a["l"]),v=Object(n["c"])({name:a["l"],functional:!0,props:m,render:function(t,e){var r,n=e.props,a=e.data,o=e.children,i=n.footerBgVariant,u=n.footerBorderVariant,l=n.footerTextVariant;return t(n.footerTag,Object(c["a"])(a,{staticClass:"card-footer",class:[n.footerClass,(r={},j(r,"bg-".concat(i),i),j(r,"border-".concat(u),u),j(r,"text-".concat(l),l),r)],domProps:o?{}:Object(s["a"])(n.footerHtml,n.footer)}),o)}}),g=r("4918");function w(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?w(Object(r),!0).forEach((function(e){k(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function k(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var P=Object(b["d"])(Object(l["m"])(y(y({},Object(l["k"])(g["b"],["src","alt","width","height","left","right"])),{},{bottom:Object(b["c"])(o["g"],!1),end:Object(b["c"])(o["g"],!1),start:Object(b["c"])(o["g"],!1),top:Object(b["c"])(o["g"],!1)})),a["n"]),x=Object(n["c"])({name:a["n"],functional:!0,props:P,render:function(t,e){var r=e.props,n=e.data,a=r.src,o=r.alt,i=r.width,s=r.height,u="card-img";return r.top?u+="-top":r.right||r.end?u+="-right":r.bottom?u+="-bottom":(r.left||r.start)&&(u+="-left"),t("img",Object(c["a"])(n,{class:u,attrs:{src:a,alt:o,width:i,height:s}}))}});function C(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function D(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?C(Object(r),!0).forEach((function(e){T(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function T(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var S=Object(b["a"])(P,b["f"].bind(null,"img"));S.imgSrc.required=!1;var V=Object(b["d"])(Object(l["m"])(D(D(D(D(D(D({},f["b"]),p["b"]),m),S),d["a"]),{},{align:Object(b["c"])(o["t"]),noBody:Object(b["c"])(o["g"],!1)})),a["j"]),R=Object(n["c"])({name:a["j"],functional:!0,props:V,render:function(t,e){var r,n=e.props,a=e.data,o=e.slots,l=e.scopedSlots,d=n.imgSrc,h=n.imgLeft,O=n.imgRight,j=n.imgStart,g=n.imgEnd,w=n.imgBottom,y=n.header,k=n.headerHtml,P=n.footer,C=n.footerHtml,D=n.align,V=n.textVariant,R=n.bgVariant,$=n.borderVariant,z=l||{},B=o(),_={},E=t(),I=t();if(d){var M=t(x,{props:Object(b["e"])(S,n,b["h"].bind(null,"img"))});w?I=M:E=M}var F=t(),A=Object(u["a"])(i["p"],z,B);(A||y||k)&&(F=t(p["a"],{props:Object(b["e"])(p["b"],n),domProps:A?{}:Object(s["a"])(k,y)},Object(u["b"])(i["p"],_,z,B)));var H=Object(u["b"])(i["h"],_,z,B);n.noBody||(H=t(f["a"],{props:Object(b["e"])(f["b"],n)},H),n.overlay&&d&&(H=t("div",{staticClass:"position-relative"},[E,H,I]),E=t(),I=t()));var N=t(),q=Object(u["a"])(i["o"],z,B);return(q||P||C)&&(N=t(v,{props:Object(b["e"])(m,n),domProps:A?{}:Object(s["a"])(C,P)},Object(u["b"])(i["o"],_,z,B))),t(n.tag,Object(c["a"])(a,{staticClass:"card",class:(r={"flex-row":h||j,"flex-row-reverse":(O||g)&&!(h||j)},T(r,"text-".concat(D),D),T(r,"bg-".concat(R),R),T(r,"border-".concat($),$),T(r,"text-".concat(V),V),r)}),[E,F,H,N,I])}})},"40fc":function(t,e,r){"use strict";r.d(e,"b",(function(){return y})),r.d(e,"a",(function(){return k}));var n=r("2f79"),c=r("0056"),a=r("a723"),o=r("906c"),i=r("6b77"),s=r("a8c8"),u=r("58f2"),l=r("3a58"),b=r("d82f"),d=r("cf75"),f=r("fa73");function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){O(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function O(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var j=Object(u["a"])("value",{type:a["o"],defaultValue:"",event:c["R"]}),m=j.mixin,v=j.props,g=j.prop,w=j.event,y=Object(d["d"])(Object(b["m"])(h(h({},v),{},{ariaInvalid:Object(d["c"])(a["j"],!1),autocomplete:Object(d["c"])(a["t"]),debounce:Object(d["c"])(a["o"],0),formatter:Object(d["c"])(a["k"]),lazy:Object(d["c"])(a["g"],!1),lazyFormatter:Object(d["c"])(a["g"],!1),number:Object(d["c"])(a["g"],!1),placeholder:Object(d["c"])(a["t"]),plaintext:Object(d["c"])(a["g"],!1),readonly:Object(d["c"])(a["g"],!1),trim:Object(d["c"])(a["g"],!1)})),"formTextControls"),k=Object(n["c"])({mixins:[m],props:y,data:function(){var t=this[g];return{localValue:Object(f["g"])(t),vModelValue:this.modifyValue(t)}},computed:{computedClass:function(){var t=this.plaintext,e=this.type,r="range"===e,n="color"===e;return[{"custom-range":r,"form-control-plaintext":t&&!r&&!n,"form-control":n||!t&&!r},this.sizeFormClass,this.stateClass]},computedDebounce:function(){return Object(s["c"])(Object(l["c"])(this.debounce,0),0)},hasFormatter:function(){return Object(d["b"])(this.formatter)}},watch:O({},g,(function(t){var e=Object(f["g"])(t),r=this.modifyValue(t);e===this.localValue&&r===this.vModelValue||(this.clearDebounce(),this.localValue=e,this.vModelValue=r)})),created:function(){this.$_inputDebounceTimer=null},beforeDestroy:function(){this.clearDebounce()},methods:{clearDebounce:function(){clearTimeout(this.$_inputDebounceTimer),this.$_inputDebounceTimer=null},formatValue:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t=Object(f["g"])(t),!this.hasFormatter||this.lazyFormatter&&!r||(t=this.formatter(t,e)),t},modifyValue:function(t){return t=Object(f["g"])(t),this.trim&&(t=t.trim()),this.number&&(t=Object(l["b"])(t,t)),t},updateValue:function(t){var e=this,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.lazy;if(!n||r){this.clearDebounce();var c=function(){if(t=e.modifyValue(t),t!==e.vModelValue)e.vModelValue=t,e.$emit(w,t);else if(e.hasFormatter){var r=e.$refs.input;r&&t!==r.value&&(r.value=t)}},a=this.computedDebounce;a>0&&!n&&!r?this.$_inputDebounceTimer=setTimeout(c,a):c()}},onInput:function(t){if(!t.target.composing){var e=t.target.value,r=this.formatValue(e,t);!1===r||t.defaultPrevented?Object(i["f"])(t,{propagation:!1}):(this.localValue=r,this.updateValue(r),this.$emit(c["v"],r))}},onChange:function(t){var e=t.target.value,r=this.formatValue(e,t);!1===r||t.defaultPrevented?Object(i["f"])(t,{propagation:!1}):(this.localValue=r,this.updateValue(r,!0),this.$emit(c["d"],r))},onBlur:function(t){var e=t.target.value,r=this.formatValue(e,t,!0);!1!==r&&(this.localValue=Object(f["g"])(this.modifyValue(r)),this.updateValue(r,!0)),this.$emit(c["b"],t)},focus:function(){this.disabled||Object(o["d"])(this.$el)},blur:function(){this.disabled||Object(o["c"])(this.$el)}}})},"449d":function(t,e,r){},4918:function(t,e,r){"use strict";r.d(e,"b",(function(){return O})),r.d(e,"a",(function(){return j}));var n=r("2f79"),c=r("b42e"),a=r("c637"),o=r("a723"),i=r("2326"),s=r("6c06"),u=r("7b1e"),l=r("3a58"),b=r("cf75"),d=r("fa73");function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var p='<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none"><rect width="100%" height="100%" style="fill:%{f};"></rect></svg>',h=function(t,e,r){var n=encodeURIComponent(p.replace("%{w}",Object(d["g"])(t)).replace("%{h}",Object(d["g"])(e)).replace("%{f}",r));return"data:image/svg+xml;charset=UTF-8,".concat(n)},O=Object(b["d"])({alt:Object(b["c"])(o["t"]),blank:Object(b["c"])(o["g"],!1),blankColor:Object(b["c"])(o["t"],"transparent"),block:Object(b["c"])(o["g"],!1),center:Object(b["c"])(o["g"],!1),fluid:Object(b["c"])(o["g"],!1),fluidGrow:Object(b["c"])(o["g"],!1),height:Object(b["c"])(o["o"]),left:Object(b["c"])(o["g"],!1),right:Object(b["c"])(o["g"],!1),rounded:Object(b["c"])(o["j"],!1),sizes:Object(b["c"])(o["f"]),src:Object(b["c"])(o["t"]),srcset:Object(b["c"])(o["f"]),thumbnail:Object(b["c"])(o["g"],!1),width:Object(b["c"])(o["o"])},a["O"]),j=Object(n["c"])({name:a["O"],functional:!0,props:O,render:function(t,e){var r,n=e.props,a=e.data,o=n.alt,b=n.src,p=n.block,O=n.fluidGrow,j=n.rounded,m=Object(l["c"])(n.width)||null,v=Object(l["c"])(n.height)||null,g=null,w=Object(i["b"])(n.srcset).filter(s["a"]).join(","),y=Object(i["b"])(n.sizes).filter(s["a"]).join(",");return n.blank&&(!v&&m?v=m:!m&&v&&(m=v),m||v||(m=1,v=1),b=h(m,v,n.blankColor||"transparent"),w=null,y=null),n.left?g="float-left":n.right?g="float-right":n.center&&(g="mx-auto",p=!0),t("img",Object(c["a"])(a,{attrs:{src:b,alt:o,width:m?Object(d["g"])(m):null,height:v?Object(d["g"])(v):null,srcset:w||null,sizes:y||null},class:(r={"img-thumbnail":n.thumbnail,"img-fluid":n.fluid||O,"w-100":O,rounded:""===j||!0===j},f(r,"rounded-".concat(j),Object(u["m"])(j)&&""!==j),f(r,g,g),f(r,"d-block",p),r)}))}})},4968:function(t,e,r){"use strict";r.d(e,"b",(function(){return u})),r.d(e,"a",(function(){return l}));var n=r("2f79"),c=r("b42e"),a=r("c637"),o=r("a723"),i=r("cf75"),s=r("fa73"),u=Object(i["d"])({title:Object(i["c"])(o["t"]),titleTag:Object(i["c"])(o["t"],"h4")},a["q"]),l=Object(n["c"])({name:a["q"],functional:!0,props:u,render:function(t,e){var r=e.props,n=e.data,a=e.children;return t(r.titleTag,Object(c["a"])(n,{staticClass:"card-title"}),a||Object(s["g"])(r.title))}})},6197:function(t,e,r){"use strict";r.d(e,"b",(function(){return h})),r.d(e,"a",(function(){return O}));var n=r("2f79"),c=r("b42e"),a=r("c637"),o=r("a723"),i=r("d82f"),s=r("cf75"),u=r("d580"),l=r("4968"),b=r("ba06");function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){p(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var h=Object(s["d"])(Object(i["m"])(f(f(f(f({},l["b"]),b["b"]),Object(s["a"])(u["a"],s["f"].bind(null,"body"))),{},{bodyClass:Object(s["c"])(o["e"]),overlay:Object(s["c"])(o["g"],!1)})),a["k"]),O=Object(n["c"])({name:a["k"],functional:!0,props:h,render:function(t,e){var r,n=e.props,a=e.data,o=e.children,i=n.bodyBgVariant,u=n.bodyBorderVariant,d=n.bodyTextVariant,f=t();n.title&&(f=t(l["a"],{props:Object(s["e"])(l["b"],n)}));var h=t();return n.subTitle&&(h=t(b["a"],{props:Object(s["e"])(b["b"],n),class:["mb-2"]})),t(n.bodyTag,Object(c["a"])(a,{staticClass:"card-body",class:[(r={"card-img-overlay":n.overlay},p(r,"bg-".concat(i),i),p(r,"border-".concat(u),u),p(r,"text-".concat(d),d),r),n.bodyClass]}),[f,h,o])}})},"9c7d":function(t,e,r){"use strict";r.d(e,"a",(function(){return I}));var n=r("2f79"),c=r("c637"),a=r("a723"),o=r("906c"),i=r("7b1e"),s=r("a8c8"),u=r("3a58"),l=r("d82f"),b=r("cf75"),d=r("dde7"),f=r("06d9"),p=r("ad47"),h=r("d520"),O=r("40fc"),j=r("1f1e"),m=r("90ef"),v=r("602d"),g=r("bc9a"),w=r("992e"),y=r("3c21");function k(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function P(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function x(t,e,r){return e&&P(t.prototype,e),r&&P(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}var C="__bv__visibility_observer",D=function(){function t(e,r){k(this,t),this.el=e,this.callback=r.callback,this.margin=r.margin||0,this.once=r.once||!1,this.observer=null,this.visible=void 0,this.doneOnce=!1,this.createObserver()}return x(t,[{key:"createObserver",value:function(){var t=this;if(this.observer&&this.stop(),!this.doneOnce&&Object(i["e"])(this.callback)){try{this.observer=new IntersectionObserver(this.handler.bind(this),{root:null,rootMargin:this.margin,threshold:0})}catch(e){return this.doneOnce=!0,this.observer=void 0,void this.callback(null)}Object(n["e"])((function(){Object(o["B"])((function(){t.observer&&t.observer.observe(t.el)}))}))}}},{key:"handler",value:function(t){var e=t?t[0]:{},r=Boolean(e.isIntersecting||e.intersectionRatio>0);r!==this.visible&&(this.visible=r,this.callback(r),this.once&&this.visible&&(this.doneOnce=!0,this.stop()))}},{key:"stop",value:function(){this.observer&&this.observer.disconnect(),this.observer=null}}]),t}(),T=function(t){var e=t[C];e&&e.stop&&e.stop(),delete t[C]},S=function(t,e){var r=e.value,n=e.modifiers,c={margin:"0px",once:!1,callback:r};Object(l["h"])(n).forEach((function(t){w["d"].test(t)?c.margin="".concat(t,"px"):"once"===t.toLowerCase()&&(c.once=!0)})),T(t),t[C]=new D(t,c),t[C]._prevModifiers=Object(l["b"])(n)},V=function(t,e,r){var n=e.value,c=e.oldValue,a=e.modifiers;a=Object(l["b"])(a),!t||n===c&&t[C]&&Object(y["a"])(a,t[C]._prevModifiers)||S(t,{value:n,modifiers:a},r)},R=function(t){T(t)},$={bind:S,componentUpdated:V,unbind:R};function z(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function B(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?z(Object(r),!0).forEach((function(e){_(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function _(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var E=Object(b["d"])(Object(l["m"])(B(B(B(B(B(B({},m["b"]),d["b"]),p["b"]),h["b"]),O["b"]),{},{maxRows:Object(b["c"])(a["o"]),noAutoShrink:Object(b["c"])(a["g"],!1),noResize:Object(b["c"])(a["g"],!1),rows:Object(b["c"])(a["o"],2),wrap:Object(b["c"])(a["t"],"soft")})),c["K"]),I=Object(n["c"])({name:c["K"],directives:{"b-visible":$},mixins:[g["a"],m["a"],v["a"],d["a"],p["a"],h["a"],O["a"],f["a"],j["a"]],props:E,data:function(){return{heightInPx:null}},computed:{type:function(){return null},computedStyle:function(){var t={resize:!this.computedRows||this.noResize?"none":null};return this.computedRows||(t.height=this.heightInPx,t.overflowY="scroll"),t},computedMinRows:function(){return Object(s["c"])(Object(u["c"])(this.rows,2),2)},computedMaxRows:function(){return Object(s["c"])(this.computedMinRows,Object(u["c"])(this.maxRows,0))},computedRows:function(){return this.computedMinRows===this.computedMaxRows?this.computedMinRows:null},computedAttrs:function(){var t=this.disabled,e=this.required;return{id:this.safeId(),name:this.name||null,form:this.form||null,disabled:t,placeholder:this.placeholder||null,required:e,autocomplete:this.autocomplete||null,readonly:this.readonly||this.plaintext,rows:this.computedRows,wrap:this.wrap||null,"aria-required":this.required?"true":null,"aria-invalid":this.computedAriaInvalid}},computedListeners:function(){return B(B({},this.bvListeners),{},{input:this.onInput,change:this.onChange,blur:this.onBlur})}},watch:{localValue:function(){this.setHeight()}},mounted:function(){this.setHeight()},methods:{visibleCallback:function(t){t&&this.$nextTick(this.setHeight)},setHeight:function(){var t=this;this.$nextTick((function(){Object(o["B"])((function(){t.heightInPx=t.computeHeight()}))}))},computeHeight:function(){if(this.$isServer||!Object(i["f"])(this.computedRows))return null;var t=this.$el;if(!Object(o["u"])(t))return null;var e=Object(o["k"])(t),r=Object(u["b"])(e.lineHeight,1),n=Object(u["b"])(e.borderTopWidth,0)+Object(u["b"])(e.borderBottomWidth,0),c=Object(u["b"])(e.paddingTop,0)+Object(u["b"])(e.paddingBottom,0),a=n+c,l=r*this.computedMinRows+a,b=Object(o["m"])(t,"height")||e.height;Object(o["F"])(t,"height","auto");var d=t.scrollHeight;Object(o["F"])(t,"height",b);var f=Object(s["c"])((d-c)/r,2),p=Object(s["d"])(Object(s["c"])(f,this.computedMinRows),this.computedMaxRows),h=Object(s["c"])(Object(s["a"])(p*r+a),l);return this.noAutoShrink&&Object(u["b"])(b,0)>h?b:"".concat(h,"px")}},render:function(t){return t("textarea",{class:this.computedClass,style:this.computedStyle,directives:[{name:"b-visible",value:this.visibleCallback,modifiers:{640:!0}}],attrs:this.computedAttrs,domProps:{value:this.localValue},on:this.computedListeners,ref:"input"})}})},a3de:function(t,e,r){"use strict";r("449d")},ad47:function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return i}));var n=r("2f79"),c=r("a723"),a=r("cf75"),o=Object(a["d"])({size:Object(a["c"])(c["t"])},"formControls"),i=Object(n["c"])({props:o,computed:{sizeFormClass:function(){return[this.size?"form-control-".concat(this.size):null]}}})},b885:function(t,e,r){"use strict";r.d(e,"b",(function(){return p})),r.d(e,"a",(function(){return h}));var n=r("2f79"),c=r("b42e"),a=r("c637"),o=r("a723"),i=r("8690"),s=r("d82f"),u=r("cf75"),l=r("d580");function b(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?b(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var p=Object(u["d"])(Object(s["m"])(d(d({},Object(u["a"])(l["a"],u["f"].bind(null,"header"))),{},{header:Object(u["c"])(o["t"]),headerClass:Object(u["c"])(o["e"]),headerHtml:Object(u["c"])(o["t"])})),a["m"]),h=Object(n["c"])({name:a["m"],functional:!0,props:p,render:function(t,e){var r,n=e.props,a=e.data,o=e.children,s=n.headerBgVariant,u=n.headerBorderVariant,l=n.headerTextVariant;return t(n.headerTag,Object(c["a"])(a,{staticClass:"card-header",class:[n.headerClass,(r={},f(r,"bg-".concat(s),s),f(r,"border-".concat(u),u),f(r,"text-".concat(l),l),r)],domProps:o?{}:Object(i["a"])(n.headerHtml,n.header)}),o)}})},ba06:function(t,e,r){"use strict";r.d(e,"b",(function(){return u})),r.d(e,"a",(function(){return l}));var n=r("2f79"),c=r("b42e"),a=r("c637"),o=r("a723"),i=r("cf75"),s=r("fa73"),u=Object(i["d"])({subTitle:Object(i["c"])(o["t"]),subTitleTag:Object(i["c"])(o["t"],"h6"),subTitleTextVariant:Object(i["c"])(o["t"],"muted")},a["o"]),l=Object(n["c"])({name:a["o"],functional:!0,props:u,render:function(t,e){var r=e.props,n=e.data,a=e.children;return t(r.subTitleTag,Object(c["a"])(n,{staticClass:"card-subtitle",class:[r.subTitleTextVariant?"text-".concat(r.subTitleTextVariant):null]}),a||Object(s["g"])(r.subTitle))}})},d507:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-card",[r("h6",{staticClass:"mb-1"},[t._v(" Click the 'Download Debug File' button to download the Benchmark log. This may take a few minutes depending on file size. ")]),r("div",[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{id:"start-download",variant:"outline-primary",size:"md"}},[t._v(" Download Debug File ")]),t.total&&t.downloaded?r("div",{staticClass:"d-flex",staticStyle:{width:"300px"}},[r("b-card-text",{staticClass:"mt-1 mb-0 mr-auto"},[t._v(" "+t._s((t.downloaded/1e6).toFixed(2)+" / "+(t.total/1e6).toFixed(2))+" MB - "+t._s((t.downloaded/t.total*100).toFixed(2)+"%")+" ")]),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"btn-icon cancel-button",attrs:{variant:"danger",size:"sm"},on:{click:t.cancelDownload}},[t._v(" x ")])],1):t._e(),r("b-popover",{ref:"popover",attrs:{target:"start-download",triggers:"click",show:t.downloadPopoverShow,placement:"auto",container:"my-container"},on:{"update:show":function(e){t.downloadPopoverShow=e}},scopedSlots:t._u([{key:"title",fn:function(){return[r("div",{staticClass:"d-flex justify-content-between align-items-center"},[r("span",[t._v("Are You Sure?")]),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"close",attrs:{variant:"transparent","aria-label":"Close"},on:{click:t.onDownloadClose}},[r("span",{staticClass:"d-inline-block text-white",attrs:{"aria-hidden":"true"}},[t._v("×")])])],1)]},proxy:!0}])},[r("div",[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mr-1",attrs:{size:"sm",variant:"danger"},on:{click:t.onDownloadClose}},[t._v(" Cancel ")]),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{size:"sm",variant:"primary"},on:{click:t.onDownloadOk}},[t._v(" Download Debug ")])],1)])],1)]),r("b-card",[r("h6",{staticClass:"mb-1"},[t._v(" Click the 'Show Debug File' button to view the last 100 lines of the Benchmark debug file. ")]),r("div",[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{id:"start-tail",variant:"outline-primary",size:"md"}},[t._v(" Show Debug File ")]),t.callResponse.data.message?r("b-form-textarea",{staticClass:"mt-1",attrs:{plaintext:"","no-resize":"",rows:"30",value:t.callResponse.data.message}}):t._e(),r("b-popover",{ref:"popover",attrs:{target:"start-tail",triggers:"click",show:t.tailPopoverShow,placement:"auto",container:"my-container"},on:{"update:show":function(e){t.tailPopoverShow=e}},scopedSlots:t._u([{key:"title",fn:function(){return[r("div",{staticClass:"d-flex justify-content-between align-items-center"},[r("span",[t._v("Are You Sure?")]),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"close",attrs:{variant:"transparent","aria-label":"Close"},on:{click:t.onTailClose}},[r("span",{staticClass:"d-inline-block text-white",attrs:{"aria-hidden":"true"}},[t._v("×")])])],1)]},proxy:!0}])},[r("div",[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mr-1",attrs:{size:"sm",variant:"danger"},on:{click:t.onTailClose}},[t._v(" Cancel ")]),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{size:"sm",variant:"primary"},on:{click:t.onTailOk}},[t._v(" Show Debug ")])],1)])],1)])],1)},c=[],a=r("c7eb"),o=r("1da1"),i=(r("d3b7"),r("3ca3"),r("ddb0"),r("2b3d"),r("9861"),r("205f")),s=r("1947"),u=r("3828"),l=r("9c7d"),b=r("d6e4"),d=r("b307"),f=r("e009"),p=r("0ad5"),h={components:{BCard:i["a"],BButton:s["a"],BPopover:u["a"],BFormTextarea:l["a"],BCardText:b["a"],ToastificationContent:d["a"]},directives:{Ripple:f["a"]},data:function(){return{downloadPopoverShow:!1,tailPopoverShow:!1,abortToken:{},downloaded:0,total:0,callResponse:{status:"",data:{}}}},methods:{cancelDownload:function(){this.abortToken.cancel("User download cancelled"),this.downloaded="",this.total=""},onDownloadClose:function(){this.downloadPopoverShow=!1},onDownloadOk:function(){var t=this;return Object(o["a"])(Object(a["a"])().mark((function e(){var r,n,c,o,i,s;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t,t.downloadPopoverShow=!1,t.abortToken=p["a"].cancelToken(),n=localStorage.getItem("zelidauth"),c={headers:{zelidauth:n},responseType:"blob",onDownloadProgress:function(t){r.downloaded=t.loaded,r.total=t.total},cancelToken:r.abortToken.token},e.next=7,p["a"].justAPI().get("/flux/benchmarkdebug",c);case 7:o=e.sent,i=window.URL.createObjectURL(new Blob([o.data])),s=document.createElement("a"),s.href=i,s.setAttribute("download","debug.log"),document.body.appendChild(s),s.click();case 14:case"end":return e.stop()}}),e)})))()},onTailClose:function(){this.tailPopoverShow=!1},onTailOk:function(){var t=this;return Object(o["a"])(Object(a["a"])().mark((function e(){var r;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.tailPopoverShow=!1,r=localStorage.getItem("zelidauth"),p["a"].tailBenchmarkDebug(r).then((function(e){"error"===e.data.status?t.$toast({component:d["a"],props:{title:e.data.data.message||e.data.data,icon:"InfoIcon",variant:"danger"}}):(t.callResponse.status=e.data.status,t.callResponse.data=e.data.data)})).catch((function(e){t.$toast({component:d["a"],props:{title:"Error while trying to get latest debug of Benchmark",icon:"InfoIcon",variant:"danger"}}),console.log(e)}));case 3:case"end":return e.stop()}}),e)})))()}}},O=h,j=(r("a3de"),r("2877")),m=Object(j["a"])(O,n,c,!1,null,null,null);e["default"]=m.exports},d520:function(t,e,r){"use strict";r.d(e,"b",(function(){return s})),r.d(e,"a",(function(){return u}));var n=r("2f79"),c=r("a723"),a=r("7b1e"),o=r("cf75"),i=r("440b"),s=Object(o["d"])({state:Object(o["c"])(c["g"],null)},"formState"),u=Object(n["c"])({props:s,computed:{computedState:function(){return Object(a["b"])(this.state)?this.state:null},stateClass:function(){var t=this.computedState;return!0===t?"is-valid":!1===t?"is-invalid":null},computedAriaInvalid:function(){var t=Object(i["a"])(this).ariaInvalid;return!0===t||"true"===t||""===t||!1===this.computedState?"true":t}}})},d580:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r("2f79"),c=r("c637"),a=r("a723"),o=r("cf75"),i=Object(o["d"])({bgVariant:Object(o["c"])(a["t"]),borderVariant:Object(o["c"])(a["t"]),tag:Object(o["c"])(a["t"],"div"),textVariant:Object(o["c"])(a["t"])},c["j"]);Object(n["c"])({props:i})},d6e4:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var n=r("2f79"),c=r("b42e"),a=r("c637"),o=r("a723"),i=r("cf75"),s=Object(i["d"])({textTag:Object(i["c"])(o["t"],"p")},a["p"]),u=Object(n["c"])({name:a["p"],functional:!0,props:s,render:function(t,e){var r=e.props,n=e.data,a=e.children;return t(r.textTag,Object(c["a"])(n,{staticClass:"card-text"}),a)}})},dde7:function(t,e,r){"use strict";r.d(e,"b",(function(){return s})),r.d(e,"a",(function(){return u}));var n=r("2f79"),c=r("a723"),a=r("906c"),o=r("cf75"),i="input, textarea, select",s=Object(o["d"])({autofocus:Object(o["c"])(c["g"],!1),disabled:Object(o["c"])(c["g"],!1),form:Object(o["c"])(c["t"]),id:Object(o["c"])(c["t"]),name:Object(o["c"])(c["t"]),required:Object(o["c"])(c["g"],!1)},"formControls"),u=Object(n["c"])({props:s,mounted:function(){this.handleAutofocus()},activated:function(){this.handleAutofocus()},methods:{handleAutofocus:function(){var t=this;this.$nextTick((function(){Object(a["B"])((function(){var e=t.$el;t.autofocus&&Object(a["u"])(e)&&(Object(a["v"])(e,i)||(e=Object(a["C"])(i,e)),Object(a["d"])(e))}))}))}}})}}]);