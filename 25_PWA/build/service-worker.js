if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const l=e=>n(e,t),f={module:{uri:t},exports:o,require:l};i[t]=Promise.all(s.map((e=>f[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-77d0f217"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"css/built.3e5fd0cf3b.css",revision:null},{url:"index.html",revision:"aa912dfb260f953d034e9559e37f7190"},{url:"js/built.74ed278e43.js",revision:null},{url:"media/1feff74faaf0efc6a044355c92cd15d9.bin",revision:null}],{})}));
//# sourceMappingURL=service-worker.js.map