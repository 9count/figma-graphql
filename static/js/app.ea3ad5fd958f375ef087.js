!function(e){function r(r){for(var t,o,a=r[0],i=r[1],d=r[2],c=r[3]||[],s=0,l=[];s<a.length;s++)o=a[s],Object.prototype.hasOwnProperty.call(q,o)&&q[o]&&l.push(q[o][0]),q[o]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);for(C&&C(r),A.push.apply(A,c);l.length;)l.shift()();return H.push.apply(H,d||[]),n()}function n(){for(var e,r=0;r<H.length;r++){for(var n=H[r],t=!0,o=1;o<n.length;o++){var a=n[o];0!==q[a]&&(t=!1)}t&&(H.splice(r--,1),e=M(M.s=n[0]))}return 0===H.length&&(A.forEach((function(e){if(void 0===q[e]){q[e]=null;var r=document.createElement("link");r.crossOrigin="anonymous",M.nc&&r.setAttribute("nonce",M.nc),r.rel="prefetch",r.as="script",r.href=I(e),document.head.appendChild(r)}})),A.length=0),e}var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,r){!function(e,r){if(!O[e]||!w[e])return;for(var n in w[e]=!1,r)Object.prototype.hasOwnProperty.call(r,n)&&(v[n]=r[n]);0===--y&&0===b&&k()}(e,r),t&&t(e,r)};var o,a=!0,i="ea3ad5fd958f375ef087",d=1e4,c={},s=[],l=[];function u(e){var r={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,n){if(void 0===e)r._selfAccepted=!0;else if("function"===typeof e)r._selfAccepted=e;else if("object"===typeof e)for(var t=0;t<e.length;t++)r._acceptedDependencies[e[t]]=n||function(){};else r._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)r._selfDeclined=!0;else if("object"===typeof e)for(var n=0;n<e.length;n++)r._declinedDependencies[e[n]]=!0;else r._declinedDependencies[e]=!0},dispose:function(e){r._disposeHandlers.push(e)},addDisposeHandler:function(e){r._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=r._disposeHandlers.indexOf(e);n>=0&&r._disposeHandlers.splice(n,1)},check:_,apply:P,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var r=p.indexOf(e);r>=0&&p.splice(r,1)},data:c[e]};return o=void 0,r}var p=[],f="idle";function h(e){f=e;for(var r=0;r<p.length;r++)p[r].call(null,e)}var m,v,g,y=0,b=0,x={},w={},O={};function j(e){return+e+""===e?+e:e}function _(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return a=e,h("check"),(r=d,r=r||1e4,new Promise((function(e,n){if("undefined"===typeof XMLHttpRequest)return n(new Error("No browser support"));try{var t=new XMLHttpRequest,o=M.p+""+i+".hot-update.json";t.open("GET",o,!0),t.timeout=r,t.send(null)}catch(a){return n(a)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===t.status)e();else if(200!==t.status&&304!==t.status)n(new Error("Manifest request to "+o+" failed."));else{try{var r=JSON.parse(t.responseText)}catch(a){return void n(a)}e(r)}}}))).then((function(e){if(!e)return h("idle"),null;w={},x={},O=e.c,g=e.h,h("prepare");var r=new Promise((function(e,r){m={resolve:e,reject:r}}));for(var n in v={},q)E(n);return"prepare"===f&&0===b&&0===y&&k(),r}));var r}function E(e){O[e]?(w[e]=!0,y++,function(e){var r=document.createElement("script");r.charset="utf-8",r.src=M.p+""+e+"."+i+".hot-update.js",r.crossOrigin="anonymous",document.head.appendChild(r)}(e)):x[e]=!0}function k(){h("ready");var e=m;if(m=null,e)if(a)Promise.resolve().then((function(){return P(a)})).then((function(r){e.resolve(r)}),(function(r){e.reject(r)}));else{var r=[];for(var n in v)Object.prototype.hasOwnProperty.call(v,n)&&r.push(j(n));e.resolve(r)}}function P(r){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var n,t,o,a,d;function l(e){for(var r=[e],n={},t=r.map((function(e){return{chain:[e],id:e}}));t.length>0;){var o=t.pop(),i=o.id,d=o.chain;if((a=D[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:d,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:d,moduleId:i};for(var c=0;c<a.parents.length;c++){var s=a.parents[c],l=D[s];if(l){if(l.hot._declinedDependencies[i])return{type:"declined",chain:d.concat([s]),moduleId:i,parentId:s};-1===r.indexOf(s)&&(l.hot._acceptedDependencies[i]?(n[s]||(n[s]=[]),u(n[s],[i])):(delete n[s],r.push(s),t.push({chain:d.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:n}}function u(e,r){for(var n=0;n<r.length;n++){var t=r[n];-1===e.indexOf(t)&&e.push(t)}}r=r||{};var p={},m=[],y={},b=function(){console.warn("[HMR] unexpected require("+w.moduleId+") to disposed module")};for(var x in v)if(Object.prototype.hasOwnProperty.call(v,x)){var w;d=j(x);var _=!1,E=!1,k=!1,P="";switch((w=v[x]?l(d):{type:"disposed",moduleId:x}).chain&&(P="\nUpdate propagation: "+w.chain.join(" -> ")),w.type){case"self-declined":r.onDeclined&&r.onDeclined(w),r.ignoreDeclined||(_=new Error("Aborted because of self decline: "+w.moduleId+P));break;case"declined":r.onDeclined&&r.onDeclined(w),r.ignoreDeclined||(_=new Error("Aborted because of declined dependency: "+w.moduleId+" in "+w.parentId+P));break;case"unaccepted":r.onUnaccepted&&r.onUnaccepted(w),r.ignoreUnaccepted||(_=new Error("Aborted because "+d+" is not accepted"+P));break;case"accepted":r.onAccepted&&r.onAccepted(w),E=!0;break;case"disposed":r.onDisposed&&r.onDisposed(w),k=!0;break;default:throw new Error("Unexception type "+w.type)}if(_)return h("abort"),Promise.reject(_);if(E)for(d in y[d]=v[d],u(m,w.outdatedModules),w.outdatedDependencies)Object.prototype.hasOwnProperty.call(w.outdatedDependencies,d)&&(p[d]||(p[d]=[]),u(p[d],w.outdatedDependencies[d]));k&&(u(m,[w.moduleId]),y[d]=b)}var H,A=[];for(t=0;t<m.length;t++)d=m[t],D[d]&&D[d].hot._selfAccepted&&y[d]!==b&&A.push({module:d,errorHandler:D[d].hot._selfAccepted});h("dispose"),Object.keys(O).forEach((function(e){!1===O[e]&&function(e){delete q[e]}(e)}));for(var I,S,T=m.slice();T.length>0;)if(d=T.pop(),a=D[d]){var U={},C=a.hot._disposeHandlers;for(o=0;o<C.length;o++)(n=C[o])(U);for(c[d]=U,a.hot.active=!1,delete D[d],delete p[d],o=0;o<a.children.length;o++){var F=D[a.children[o]];F&&((H=F.parents.indexOf(d))>=0&&F.parents.splice(H,1))}}for(d in p)if(Object.prototype.hasOwnProperty.call(p,d)&&(a=D[d]))for(S=p[d],o=0;o<S.length;o++)I=S[o],(H=a.children.indexOf(I))>=0&&a.children.splice(H,1);for(d in h("apply"),i=g,y)Object.prototype.hasOwnProperty.call(y,d)&&(e[d]=y[d]);var z=null;for(d in p)if(Object.prototype.hasOwnProperty.call(p,d)&&(a=D[d])){S=p[d];var L=[];for(t=0;t<S.length;t++)if(I=S[t],n=a.hot._acceptedDependencies[I]){if(-1!==L.indexOf(n))continue;L.push(n)}for(t=0;t<L.length;t++){n=L[t];try{n(S)}catch(J){r.onErrored&&r.onErrored({type:"accept-errored",moduleId:d,dependencyId:S[t],error:J}),r.ignoreErrored||z||(z=J)}}}for(t=0;t<A.length;t++){var R=A[t];d=R.module,s=[d];try{M(d)}catch(J){if("function"===typeof R.errorHandler)try{R.errorHandler(J)}catch(N){r.onErrored&&r.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:N,originalError:J}),r.ignoreErrored||z||(z=N),z||(z=J)}else r.onErrored&&r.onErrored({type:"self-accept-errored",moduleId:d,error:J}),r.ignoreErrored||z||(z=J)}}return z?(h("fail"),Promise.reject(z)):(h("idle"),new Promise((function(e){e(m)})))}var D={},q={1:0},H=[],A=[];function I(e){return M.p+"static/js/"+({2:"examples",3:"home",4:"road-to-v2"}[e]||e)+"."+{2:"0106a813",3:"b5358fdf",4:"488bfaa5"}[e]+".js"}function M(r){if(D[r])return D[r].exports;var n=D[r]={i:r,l:!1,exports:{},hot:u(r),parents:(l=s,s=[],l),children:[]};return e[r].call(n.exports,n,n.exports,function(e){var r=D[e];if(!r)return M;var n=function(n){return r.hot.active?(D[n]?-1===D[n].parents.indexOf(e)&&D[n].parents.push(e):(s=[e],o=n),-1===r.children.indexOf(n)&&r.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),s=[]),M(n)},t=function(e){return{configurable:!0,enumerable:!0,get:function(){return M[e]},set:function(r){M[e]=r}}};for(var a in M)Object.prototype.hasOwnProperty.call(M,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(n,a,t(a));return n.e=function(e){return"ready"===f&&h("prepare"),b++,M.e(e).then(r,(function(e){throw r(),e}));function r(){b--,"prepare"===f&&(x[e]||E(e),0===b&&0===y&&k())}},n.t=function(e,r){return 1&r&&(e=n(e)),M.t(e,-2&r)},n}(r)),n.l=!0,n.exports}M.e=function(e){var r=[],n=q[e];if(0!==n)if(n)r.push(n[2]);else{var t=new Promise((function(r,t){n=q[e]=[r,t]}));r.push(n[2]=t);var o,a=document.createElement("script");a.charset="utf-8",a.timeout=120,M.nc&&a.setAttribute("nonce",M.nc),a.src=I(e),0!==a.src.indexOf(window.location.origin+"/")&&(a.crossOrigin="anonymous");var i=new Error;o=function(r){a.onerror=a.onload=null,clearTimeout(d);var n=q[e];if(0!==n){if(n){var t=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;i.message="Loading chunk "+e+" failed.\n("+t+": "+o+")",i.name="ChunkLoadError",i.type=t,i.request=o,n[1](i)}q[e]=void 0}};var d=setTimeout((function(){o({type:"timeout",target:a})}),12e4);a.onerror=a.onload=o,document.head.appendChild(a)}return Promise.all(r)},M.m=e,M.c=D,M.d=function(e,r,n){M.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},M.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},M.t=function(e,r){if(1&r&&(e=M(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(M.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)M.d(n,t,function(r){return e[r]}.bind(null,t));return n},M.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return M.d(r,"a",r),r},M.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},M.p="/",M.oe=function(e){throw console.error(e),e},M.h=function(){return i};var S=window.webpackJsonp=window.webpackJsonp||[],T=S.push.bind(S);S.push=r,S=S.slice();for(var U=0;U<S.length;U++)r(S[U]);var C=T,F=(H.push([0,0]),n());r([[],{},0,[0,2,3,4]])}({"./.docz/app/db.json":function(e){e.exports=JSON.parse('{"config":{"title":"figma-graphql","description":"The reimagined Figma API (super)powered by GraphQL","menu":[],"version":"1.3.0","repository":"https://github.com/braposo/figma-graphql","native":false,"codeSandbox":true,"themeConfig":{"colors":{"link":"#1ABCFE","primary":"#FF7262"}},"separator":"-","src":"./docs"},"props":[],"entries":[{"key":"examples.mdx","value":{"name":"Practical Examples","route":"/practical-examples","id":"a0261923c9f3e006856d399286472d9c","filepath":"examples.mdx","link":"https://github.com/braposo/figma-graphql/edit/master/docs/examples.mdx","slug":"examples","menu":"","headings":[{"slug":"practical-examples","depth":1,"value":"Practical examples"},{"slug":"designers","depth":2,"value":"Designers"},{"slug":"developers","depth":2,"value":"Developers"},{"slug":"product-managers","depth":2,"value":"Product Managers"}]}},{"key":"home.mdx","value":{"name":"Home","route":"/","id":"7e165ea34e00ef78451a64f9e321a429","filepath":"home.mdx","link":"https://github.com/braposo/figma-graphql/edit/master/docs/home.mdx","slug":"home","menu":"","headings":[{"slug":"figma-graphql-logo","depth":1,"value":""},{"slug":"figma-graphql","depth":1,"value":"figma-graphql"},{"slug":"quick-start","depth":2,"value":"Quick start"},{"slug":"1-open-figma-graphql-sandbox-and-fork-it","depth":3,"value":"1. Open figma-graphql  sandbox  and fork it"},{"slug":"2-add-your-figma-api-token-as-figma_token-in-the-codesandbox-secret-keys","depth":3,"value":"2. Add your  Figma API Token  as  FIGMA_TOKEN  in the  codesandbox secret keys"},{"slug":"3-try-your-first-query","depth":3,"value":"3. Try your first query!"},{"slug":"why-use-figma-graphql","depth":2,"value":"Why use figma-graphql?"},{"slug":"examples","depth":2,"value":"Examples"},{"slug":"migrating-to-v2","depth":2,"value":"Migrating to v2"}]}},{"key":"road-to-v2.mdx","value":{"name":"Road to v2","route":"/road-to-v2","id":"e574618259bee44809f2652a916fb970","filepath":"road-to-v2.mdx","link":"https://github.com/braposo/figma-graphql/edit/master/docs/road-to-v2.mdx","slug":"road-to-v2","menu":"","headings":[{"slug":"from-v1-to-v2","depth":1,"value":"From v1 to v2"},{"slug":"shortcuts","depth":2,"value":"Shortcuts"},{"slug":"unified-query","depth":2,"value":"Unified query"}]}}]}')},"./.docz/app/index.jsx":function(e,r,n){"use strict";n.r(r);var t=n("./node_modules/react/index.js"),o=n.n(t),a=n("./node_modules/react-dom/index.js"),i=n.n(a),d=n("./node_modules/docz/dist/index.esm.js"),c=n("./node_modules/docz-theme-default/dist/index.esm.js"),s={"examples.mdx":function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"./docs/examples.mdx"))},"home.mdx":function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"./docs/home.mdx"))},"road-to-v2.mdx":function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"./docs/road-to-v2.mdx"))}},l=n("./.docz/app/db.json"),u=function(){return o.a.createElement(c.a,{linkComponent:d.b,db:l},o.a.createElement(d.c,{imports:s}))},p=[],f=[],h=function(){return p.forEach((function(e){return e&&e()}))},m=function(){return f.forEach((function(e){return e&&e()}))},v=document.querySelector("#root");!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u;h(),i.a.render(o.a.createElement(e,null),v,m)}(u)},0:function(e,r,n){e.exports=n("./.docz/app/index.jsx")}});
//# sourceMappingURL=app.ea3ad5fd958f375ef087.js.map