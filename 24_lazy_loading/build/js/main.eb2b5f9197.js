!function(){var e,n,t={},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.m=t,e=[],o.O=function(n,t,r,i){if(!t){var u=1/0;for(f=0;f<e.length;f++){t=e[f][0],r=e[f][1],i=e[f][2];for(var c=!0,a=0;a<t.length;a++)(!1&i||u>=i)&&Object.keys(o.O).every((function(e){return o.O[e](t[a])}))?t.splice(a--,1):(c=!1,i<u&&(u=i));if(c){e.splice(f--,1);var l=r();void 0!==l&&(n=l)}}return n}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[t,r,i]},o.F={},o.E=function(e){Object.keys(o.F).map((function(n){o.F[n](e)}))},o.d=function(e,n){for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(n,t){return o.f[t](e,n),n}),[]))},o.u=function(e){return"js/test.053505be3e.js"},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n={},o.l=function(e,t,r,i){if(n[e])n[e].push(t);else{var u,c;if(void 0!==r)for(var a=document.getElementsByTagName("script"),l=0;l<a.length;l++){var f=a[l];if(f.getAttribute("src")==e){u=f;break}}u||(c=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=e),n[e]=[t];var s=function(t,r){u.onerror=u.onload=null,clearTimeout(d);var o=n[e];if(delete n[e],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(r)})),t)return t(r)},d=setTimeout(s.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=s.bind(null,u.onerror),u.onload=s.bind(null,u.onload),c&&document.head.appendChild(u)}},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;o.g.importScripts&&(e=o.g.location+"");var n=o.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e+"../"}(),function(){var e={179:0};o.f.j=function(n,t){var r=o.o(e,n)?e[n]:void 0;if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,o){r=e[n]=[t,o]}));t.push(r[2]=i);var u=o.p+o.u(n),c=new Error;o.l(u,(function(t){if(o.o(e,n)&&(0!==(r=e[n])&&(e[n]=void 0),r)){var i=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src;c.message="Loading chunk "+n+" failed.\n("+i+": "+u+")",c.name="ChunkLoadError",c.type=i,c.request=u,r[1](c)}}),"chunk-"+n,n)}},o.F.j=function(n){if(!o.o(e,n)||void 0===e[n]){e[n]=null;var t=document.createElement("link");o.nc&&t.setAttribute("nonce",o.nc),t.rel="prefetch",t.as="script",t.href=o.p+o.u(n),document.head.appendChild(t)}},o.O.j=function(n){return 0===e[n]};var n=function(n,t){var r,i,u=t[0],c=t[1],a=t[2],l=0;if(u.some((function(n){return 0!==e[n]}))){for(r in c)o.o(c,r)&&(o.m[r]=c[r]);if(a)var f=a(o)}for(n&&n(t);l<u.length;l++)i=u[l],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(f)},t=self.webpackChunk=self.webpackChunk||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}(),o.O(0,[179],(function(){o.E(43)}),5);var i={};console.log("index.js 被加载了"),document.getElementById("id").onclick=function(){o.e(43).then(o.bind(o,411)).then((({mul:e})=>{console.log(e(4,5))}))},i=o.O(i)}();