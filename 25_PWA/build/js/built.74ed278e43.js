!function(){var t={1109:function(t,r,n){var e=n(8476),o=n(5469),i=n(8423),u=e.TypeError;t.exports=function(t){if(o(t))return t;throw u(i(t)+" is not a function")}},9187:function(t,r,n){var e=n(8476),o=n(1029),i=e.String,u=e.TypeError;t.exports=function(t){if(o(t))return t;throw u(i(t)+" is not an object")}},9174:function(t,r,n){var e=n(5107),o=n(6652),i=n(8494),u=function(t){return function(r,n,u){var c,f=e(r),a=i(f),s=o(u,a);if(t&&n!=n){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===n)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},7915:function(t,r,n){"use strict";var e=n(9819);t.exports=function(t,r){var n=[][t];return!!n&&e((function(){n.call(null,r||function(){return 1},1)}))}},5:function(t,r,n){var e=n(8476),o=n(1109),i=n(6330),u=n(5308),c=n(8494),f=e.TypeError,a=function(t){return function(r,n,e,a){o(n);var s=i(r),p=u(s),v=c(s),l=t?v-1:0,y=t?-1:1;if(e<2)for(;;){if(l in p){a=p[l],l+=y;break}if(l+=y,t?l<0:v<=l)throw f("Reduce of empty array with no initial value")}for(;t?l>=0:v>l;l+=y)l in p&&(a=n(a,p[l],l,s));return a}};t.exports={left:a(!1),right:a(!0)}},8:function(t,r,n){var e=n(7023),o=e({}.toString),i=e("".slice);t.exports=function(t){return i(o(t),8,-1)}},500:function(t,r,n){var e=n(662),o=n(3511),i=n(7179),u=n(5506);t.exports=function(t,r,n){for(var c=o(r),f=u.f,a=i.f,s=0;s<c.length;s++){var p=c[s];e(t,p)||n&&e(n,p)||f(t,p,a(r,p))}}},8765:function(t,r,n){var e=n(1574),o=n(5506),i=n(894);t.exports=e?function(t,r,n){return o.f(t,r,i(1,n))}:function(t,r,n){return t[r]=n,t}},894:function(t){t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},1574:function(t,r,n){var e=n(9819);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},5187:function(t,r,n){var e=n(8476),o=n(1029),i=e.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},3602:function(t,r,n){var e=n(8),o=n(8476);t.exports="process"==e(o.process)},795:function(t,r,n){var e=n(3765);t.exports=e("navigator","userAgent")||""},4436:function(t,r,n){var e,o,i=n(8476),u=n(795),c=i.process,f=i.Deno,a=c&&c.versions||f&&f.version,s=a&&a.v8;s&&(o=(e=s.split("."))[0]>0&&e[0]<4?1:+(e[0]+e[1])),!o&&u&&(!(e=u.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=u.match(/Chrome\/(\d+)/))&&(o=+e[1]),t.exports=o},7722:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},3515:function(t,r,n){var e=n(8476),o=n(7179).f,i=n(8765),u=n(9802),c=n(1878),f=n(500),a=n(4367);t.exports=function(t,r){var n,s,p,v,l,y=t.target,b=t.global,g=t.stat;if(n=b?e:g?e[y]||c(y,{}):(e[y]||{}).prototype)for(s in r){if(v=r[s],p=t.noTargetGet?(l=o(n,s))&&l.value:n[s],!a(b?s:y+(g?".":"#")+s,t.forced)&&void 0!==p){if(typeof v==typeof p)continue;f(v,p)}(t.sham||p&&p.sham)&&i(v,"sham",!0),u(n,s,v,t)}}},9819:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},4745:function(t,r,n){var e=n(9819);t.exports=!e((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},2328:function(t,r,n){var e=n(4745),o=Function.prototype.call;t.exports=e?o.bind(o):function(){return o.apply(o,arguments)}},6218:function(t,r,n){var e=n(1574),o=n(662),i=Function.prototype,u=e&&Object.getOwnPropertyDescriptor,c=o(i,"name"),f=c&&"something"===function(){}.name,a=c&&(!e||e&&u(i,"name").configurable);t.exports={EXISTS:c,PROPER:f,CONFIGURABLE:a}},7023:function(t,r,n){var e=n(4745),o=Function.prototype,i=o.bind,u=o.call,c=e&&i.bind(u,u);t.exports=e?function(t){return t&&c(t)}:function(t){return t&&function(){return u.apply(t,arguments)}}},3765:function(t,r,n){var e=n(8476),o=n(5469),i=function(t){return o(t)?t:void 0};t.exports=function(t,r){return arguments.length<2?i(e[t]):e[t]&&e[t][r]}},195:function(t,r,n){var e=n(1109);t.exports=function(t,r){var n=t[r];return null==n?void 0:e(n)}},8476:function(t,r,n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},662:function(t,r,n){var e=n(7023),o=n(6330),i=e({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,r){return i(o(t),r)}},8226:function(t){t.exports={}},7647:function(t,r,n){var e=n(1574),o=n(9819),i=n(5187);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},5308:function(t,r,n){var e=n(8476),o=n(7023),i=n(9819),u=n(8),c=e.Object,f=o("".split);t.exports=i((function(){return!c("z").propertyIsEnumerable(0)}))?function(t){return"String"==u(t)?f(t,""):c(t)}:c},5343:function(t,r,n){var e=n(7023),o=n(5469),i=n(7758),u=e(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return u(t)}),t.exports=i.inspectSource},3873:function(t,r,n){var e,o,i,u=n(6693),c=n(8476),f=n(7023),a=n(1029),s=n(8765),p=n(662),v=n(7758),l=n(4429),y=n(8226),b="Object already initialized",g=c.TypeError,h=c.WeakMap;if(u||v.state){var x=v.state||(v.state=new h),m=f(x.get),d=f(x.has),w=f(x.set);e=function(t,r){if(d(x,t))throw new g(b);return r.facade=t,w(x,t,r),r},o=function(t){return m(x,t)||{}},i=function(t){return d(x,t)}}else{var O=l("state");y[O]=!0,e=function(t,r){if(p(t,O))throw new g(b);return r.facade=t,s(t,O,r),r},o=function(t){return p(t,O)?t[O]:{}},i=function(t){return p(t,O)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(r){var n;if(!a(r)||(n=o(r)).type!==t)throw g("Incompatible receiver, "+t+" required");return n}}}},5469:function(t){t.exports=function(t){return"function"==typeof t}},4367:function(t,r,n){var e=n(9819),o=n(5469),i=/#|\.prototype\./,u=function(t,r){var n=f[c(t)];return n==s||n!=a&&(o(r)?e(r):!!r)},c=u.normalize=function(t){return String(t).replace(i,".").toLowerCase()},f=u.data={},a=u.NATIVE="N",s=u.POLYFILL="P";t.exports=u},1029:function(t,r,n){var e=n(5469);t.exports=function(t){return"object"==typeof t?null!==t:e(t)}},2976:function(t){t.exports=!1},7739:function(t,r,n){var e=n(8476),o=n(3765),i=n(5469),u=n(4799),c=n(3257),f=e.Object;t.exports=c?function(t){return"symbol"==typeof t}:function(t){var r=o("Symbol");return i(r)&&u(r.prototype,f(t))}},8494:function(t,r,n){var e=n(1823);t.exports=function(t){return e(t.length)}},3047:function(t,r,n){var e=n(4436),o=n(9819);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&e&&e<41}))},6693:function(t,r,n){var e=n(8476),o=n(5469),i=n(5343),u=e.WeakMap;t.exports=o(u)&&/native code/.test(i(u))},5506:function(t,r,n){var e=n(8476),o=n(1574),i=n(7647),u=n(1853),c=n(9187),f=n(7461),a=e.TypeError,s=Object.defineProperty,p=Object.getOwnPropertyDescriptor;r.f=o?u?function(t,r,n){if(c(t),r=f(r),c(n),"function"==typeof t&&"prototype"===r&&"value"in n&&"writable"in n&&!n.writable){var e=p(t,r);e&&e.writable&&(t[r]=n.value,n={configurable:"configurable"in n?n.configurable:e.configurable,enumerable:"enumerable"in n?n.enumerable:e.enumerable,writable:!1})}return s(t,r,n)}:s:function(t,r,n){if(c(t),r=f(r),c(n),i)try{return s(t,r,n)}catch(t){}if("get"in n||"set"in n)throw a("Accessors not supported");return"value"in n&&(t[r]=n.value),t}},7179:function(t,r,n){var e=n(1574),o=n(2328),i=n(5467),u=n(894),c=n(5107),f=n(7461),a=n(662),s=n(7647),p=Object.getOwnPropertyDescriptor;r.f=e?p:function(t,r){if(t=c(t),r=f(r),s)try{return p(t,r)}catch(t){}if(a(t,r))return u(!o(i.f,t,r),t[r])}},1580:function(t,r,n){var e=n(2306),o=n(7722).concat("length","prototype");r.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},5522:function(t,r){r.f=Object.getOwnPropertySymbols},4799:function(t,r,n){var e=n(7023);t.exports=e({}.isPrototypeOf)},2306:function(t,r,n){var e=n(7023),o=n(662),i=n(5107),u=n(9174).indexOf,c=n(8226),f=e([].push);t.exports=function(t,r){var n,e=i(t),a=0,s=[];for(n in e)!o(c,n)&&o(e,n)&&f(s,n);for(;r.length>a;)o(e,n=r[a++])&&(~u(s,n)||f(s,n));return s}},5467:function(t,r){"use strict";var n={}.propertyIsEnumerable,e=Object.getOwnPropertyDescriptor,o=e&&!n.call({1:2},1);r.f=o?function(t){var r=e(this,t);return!!r&&r.enumerable}:n},8768:function(t,r,n){var e=n(8476),o=n(2328),i=n(5469),u=n(1029),c=e.TypeError;t.exports=function(t,r){var n,e;if("string"===r&&i(n=t.toString)&&!u(e=o(n,t)))return e;if(i(n=t.valueOf)&&!u(e=o(n,t)))return e;if("string"!==r&&i(n=t.toString)&&!u(e=o(n,t)))return e;throw c("Can't convert object to primitive value")}},3511:function(t,r,n){var e=n(3765),o=n(7023),i=n(1580),u=n(5522),c=n(9187),f=o([].concat);t.exports=e("Reflect","ownKeys")||function(t){var r=i.f(c(t)),n=u.f;return n?f(r,n(t)):r}},9802:function(t,r,n){var e=n(8476),o=n(5469),i=n(662),u=n(8765),c=n(1878),f=n(5343),a=n(3873),s=n(6218).CONFIGURABLE,p=a.get,v=a.enforce,l=String(String).split("String");(t.exports=function(t,r,n,f){var a,p=!!f&&!!f.unsafe,y=!!f&&!!f.enumerable,b=!!f&&!!f.noTargetGet,g=f&&void 0!==f.name?f.name:r;o(n)&&("Symbol("===String(g).slice(0,7)&&(g="["+String(g).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(n,"name")||s&&n.name!==g)&&u(n,"name",g),(a=v(n)).source||(a.source=l.join("string"==typeof g?g:""))),t!==e?(p?!b&&t[r]&&(y=!0):delete t[r],y?t[r]=n:u(t,r,n)):y?t[r]=n:c(r,n)})(Function.prototype,"toString",(function(){return o(this)&&p(this).source||f(this)}))},1926:function(t,r,n){var e=n(8476).TypeError;t.exports=function(t){if(null==t)throw e("Can't call method on "+t);return t}},1878:function(t,r,n){var e=n(8476),o=Object.defineProperty;t.exports=function(t,r){try{o(e,t,{value:r,configurable:!0,writable:!0})}catch(n){e[t]=r}return r}},4429:function(t,r,n){var e=n(3558),o=n(3405),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},7758:function(t,r,n){var e=n(8476),o=n(1878),i="__core-js_shared__",u=e[i]||o(i,{});t.exports=u},3558:function(t,r,n){var e=n(2976),o=n(7758);(t.exports=function(t,r){return o[t]||(o[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.21.1",mode:e?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"})},6652:function(t,r,n){var e=n(6667),o=Math.max,i=Math.min;t.exports=function(t,r){var n=e(t);return n<0?o(n+r,0):i(n,r)}},5107:function(t,r,n){var e=n(5308),o=n(1926);t.exports=function(t){return e(o(t))}},6667:function(t){var r=Math.ceil,n=Math.floor;t.exports=function(t){var e=+t;return e!=e||0===e?0:(e>0?n:r)(e)}},1823:function(t,r,n){var e=n(6667),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},6330:function(t,r,n){var e=n(8476),o=n(1926),i=e.Object;t.exports=function(t){return i(o(t))}},668:function(t,r,n){var e=n(8476),o=n(2328),i=n(1029),u=n(7739),c=n(195),f=n(8768),a=n(6936),s=e.TypeError,p=a("toPrimitive");t.exports=function(t,r){if(!i(t)||u(t))return t;var n,e=c(t,p);if(e){if(void 0===r&&(r="default"),n=o(e,t,r),!i(n)||u(n))return n;throw s("Can't convert object to primitive value")}return void 0===r&&(r="number"),f(t,r)}},7461:function(t,r,n){var e=n(668),o=n(7739);t.exports=function(t){var r=e(t,"string");return o(r)?r:r+""}},8423:function(t,r,n){var e=n(8476).String;t.exports=function(t){try{return e(t)}catch(t){return"Object"}}},3405:function(t,r,n){var e=n(7023),o=0,i=Math.random(),u=e(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+u(++o+i,36)}},3257:function(t,r,n){var e=n(3047);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},1853:function(t,r,n){var e=n(1574),o=n(9819);t.exports=e&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},6936:function(t,r,n){var e=n(8476),o=n(3558),i=n(662),u=n(3405),c=n(3047),f=n(3257),a=o("wks"),s=e.Symbol,p=s&&s.for,v=f?s:s&&s.withoutSetter||u;t.exports=function(t){if(!i(a,t)||!c&&"string"!=typeof a[t]){var r="Symbol."+t;c&&i(s,t)?a[t]=s[t]:a[t]=f&&p?p(r):v(r)}return a[t]}},9949:function(t,r,n){"use strict";var e=n(3515),o=n(5).left,i=n(7915),u=n(4436),c=n(3602);e({target:"Array",proto:!0,forced:!i("reduce")||!c&&u>79&&u<83},{reduce:function(t){var r=arguments.length;return o(this,t,r,r>1?arguments[1]:void 0)}})}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){"use strict";n(9949),console.log([1,2,3,4].reduce(((t,r)=>t+r),0)),console.log(6),"serviceWorker"in navigator&&window.addEventListener("load",(()=>{navigator.serviceWorker.register("/service-worker.js").then((()=>{console.log("sw 注册成功")})).catch((()=>{console.log("sw 注册失败")}))}))}()}();
//# sourceMappingURL=built.74ed278e43.js.map