!function(e){function n(n){for(var t,o,i=n[0],a=n[1],c=n[2],d=n[3]||[],s=0,u=[];s<i.length;s++)o=i[s],D[o]&&u.push(D[o][0]),D[o]=0;for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t]);for(U&&U(n),d.forEach(function(e){if(void 0===D[e]){D[e]=null;var n=document.createElement("link");n.crossOrigin="anonymous",I.nc&&n.setAttribute("nonce",I.nc),n.rel="prefetch",n.as="script",n.href=A(e),document.head.appendChild(n)}});u.length;)u.shift()();return H.push.apply(H,c||[]),r()}function r(){for(var e,n=0;n<H.length;n++){for(var r=H[n],t=!0,o=1;o<r.length;o++){var i=r[o];0!==D[i]&&(t=!1)}t&&(H.splice(n--,1),e=I(I.s=r[0]))}return e}var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,n){if(!O[e]||!x[e])return;for(var r in x[e]=!1,n)Object.prototype.hasOwnProperty.call(n,r)&&(v[r]=n[r]);0===--g&&0===b&&E()}(e,n),t&&t(e,n)};var o,i=!0,a="ed368007442b75a28a4d",c=1e4,d={},s=[],u=[];function l(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,r){if(void 0===e)n._selfAccepted=!0;else if("function"===typeof e)n._selfAccepted=e;else if("object"===typeof e)for(var t=0;t<e.length;t++)n._acceptedDependencies[e[t]]=r||function(){};else n._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"===typeof e)for(var r=0;r<e.length;r++)n._declinedDependencies[e[r]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=n._disposeHandlers.indexOf(e);r>=0&&n._disposeHandlers.splice(r,1)},check:_,apply:q,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var n=p.indexOf(e);n>=0&&p.splice(n,1)},data:d[e]};return o=void 0,n}var p=[],f="idle";function h(e){f=e;for(var n=0;n<p.length;n++)p[n].call(null,e)}var m,v,y,g=0,b=0,w={},x={},O={};function k(e){return+e+""===e?+e:e}function _(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return i=e,h("check"),(n=c,n=n||1e4,new Promise(function(e,r){if("undefined"===typeof XMLHttpRequest)return r(new Error("No browser support"));try{var t=new XMLHttpRequest,o=I.p+""+a+".hot-update.json";t.open("GET",o,!0),t.timeout=n,t.send(null)}catch(i){return r(i)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)r(new Error("Manifest request to "+o+" timed out."));else if(404===t.status)e();else if(200!==t.status&&304!==t.status)r(new Error("Manifest request to "+o+" failed."));else{try{var n=JSON.parse(t.responseText)}catch(i){return void r(i)}e(n)}}})).then(function(e){if(!e)return h("idle"),null;x={},w={},O=e.c,y=e.h,h("prepare");var n=new Promise(function(e,n){m={resolve:e,reject:n}});for(var r in v={},D)j(r);return"prepare"===f&&0===b&&0===g&&E(),n});var n}function j(e){O[e]?(x[e]=!0,g++,function(e){var n=document.createElement("script");n.charset="utf-8",n.src=I.p+""+e+"."+a+".hot-update.js",n.crossOrigin="anonymous",document.head.appendChild(n)}(e)):w[e]=!0}function E(){h("ready");var e=m;if(m=null,e)if(i)Promise.resolve().then(function(){return q(i)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var r in v)Object.prototype.hasOwnProperty.call(v,r)&&n.push(k(r));e.resolve(n)}}function q(n){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var r,t,o,i,c;function u(e){for(var n=[e],r={},t=n.slice().map(function(e){return{chain:[e],id:e}});t.length>0;){var o=t.pop(),a=o.id,c=o.chain;if((i=P[a])&&!i.hot._selfAccepted){if(i.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:a};if(i.hot._main)return{type:"unaccepted",chain:c,moduleId:a};for(var d=0;d<i.parents.length;d++){var s=i.parents[d],u=P[s];if(u){if(u.hot._declinedDependencies[a])return{type:"declined",chain:c.concat([s]),moduleId:a,parentId:s};-1===n.indexOf(s)&&(u.hot._acceptedDependencies[a]?(r[s]||(r[s]=[]),l(r[s],[a])):(delete r[s],n.push(s),t.push({chain:c.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:r}}function l(e,n){for(var r=0;r<n.length;r++){var t=n[r];-1===e.indexOf(t)&&e.push(t)}}n=n||{};var p={},m=[],g={},b=function(){console.warn("[HMR] unexpected require("+x.moduleId+") to disposed module")};for(var w in v)if(Object.prototype.hasOwnProperty.call(v,w)){var x;c=k(w);var _=!1,j=!1,E=!1,q="";switch((x=v[w]?u(c):{type:"disposed",moduleId:w}).chain&&(q="\nUpdate propagation: "+x.chain.join(" -> ")),x.type){case"self-declined":n.onDeclined&&n.onDeclined(x),n.ignoreDeclined||(_=new Error("Aborted because of self decline: "+x.moduleId+q));break;case"declined":n.onDeclined&&n.onDeclined(x),n.ignoreDeclined||(_=new Error("Aborted because of declined dependency: "+x.moduleId+" in "+x.parentId+q));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(x),n.ignoreUnaccepted||(_=new Error("Aborted because "+c+" is not accepted"+q));break;case"accepted":n.onAccepted&&n.onAccepted(x),j=!0;break;case"disposed":n.onDisposed&&n.onDisposed(x),E=!0;break;default:throw new Error("Unexception type "+x.type)}if(_)return h("abort"),Promise.reject(_);if(j)for(c in g[c]=v[c],l(m,x.outdatedModules),x.outdatedDependencies)Object.prototype.hasOwnProperty.call(x.outdatedDependencies,c)&&(p[c]||(p[c]=[]),l(p[c],x.outdatedDependencies[c]));E&&(l(m,[x.moduleId]),g[c]=b)}var H,A=[];for(t=0;t<m.length;t++)c=m[t],P[c]&&P[c].hot._selfAccepted&&A.push({module:c,errorHandler:P[c].hot._selfAccepted});h("dispose"),Object.keys(O).forEach(function(e){!1===O[e]&&function(e){delete D[e]}(e)});for(var M,S,T=m.slice();T.length>0;)if(c=T.pop(),i=P[c]){var U={},z=i.hot._disposeHandlers;for(o=0;o<z.length;o++)(r=z[o])(U);for(d[c]=U,i.hot.active=!1,delete P[c],delete p[c],o=0;o<i.children.length;o++){var C=P[i.children[o]];C&&((H=C.parents.indexOf(c))>=0&&C.parents.splice(H,1))}}for(c in p)if(Object.prototype.hasOwnProperty.call(p,c)&&(i=P[c]))for(S=p[c],o=0;o<S.length;o++)M=S[o],(H=i.children.indexOf(M))>=0&&i.children.splice(H,1);for(c in h("apply"),a=y,g)Object.prototype.hasOwnProperty.call(g,c)&&(e[c]=g[c]);var F=null;for(c in p)if(Object.prototype.hasOwnProperty.call(p,c)&&(i=P[c])){S=p[c];var L=[];for(t=0;t<S.length;t++)if(M=S[t],r=i.hot._acceptedDependencies[M]){if(-1!==L.indexOf(r))continue;L.push(r)}for(t=0;t<L.length;t++){r=L[t];try{r(S)}catch(G){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:c,dependencyId:S[t],error:G}),n.ignoreErrored||F||(F=G)}}}for(t=0;t<A.length;t++){var R=A[t];c=R.module,s=[c];try{I(c)}catch(G){if("function"===typeof R.errorHandler)try{R.errorHandler(G)}catch(J){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:J,originalError:G}),n.ignoreErrored||F||(F=J),F||(F=G)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:c,error:G}),n.ignoreErrored||F||(F=G)}}return F?(h("fail"),Promise.reject(F)):(h("idle"),new Promise(function(e){e(m)}))}var P={},D={1:0},H=[];function A(e){return I.p+"static/js/"+({2:"home",3:"quick-start"}[e]||e)+"."+{2:"bce2615d",3:"0abdf86c"}[e]+".js"}function I(n){if(P[n])return P[n].exports;var r=P[n]={i:n,l:!1,exports:{},hot:l(n),parents:(u=s,s=[],u),children:[]};return e[n].call(r.exports,r,r.exports,function(e){var n=P[e];if(!n)return I;var r=function(r){return n.hot.active?(P[r]?-1===P[r].parents.indexOf(e)&&P[r].parents.push(e):(s=[e],o=r),-1===n.children.indexOf(r)&&n.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),s=[]),I(r)},t=function(e){return{configurable:!0,enumerable:!0,get:function(){return I[e]},set:function(n){I[e]=n}}};for(var i in I)Object.prototype.hasOwnProperty.call(I,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(r,i,t(i));return r.e=function(e){return"ready"===f&&h("prepare"),b++,I.e(e).then(n,function(e){throw n(),e});function n(){b--,"prepare"===f&&(w[e]||j(e),0===b&&0===g&&E())}},r.t=function(e,n){return 1&n&&(e=r(e)),I.t(e,-2&n)},r}(n)),r.l=!0,r.exports}I.e=function(e){var n=[],r=D[e];if(0!==r)if(r)n.push(r[2]);else{var t=new Promise(function(n,t){r=D[e]=[n,t]});n.push(r[2]=t);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,I.nc&&i.setAttribute("nonce",I.nc),i.src=A(e),0!==i.src.indexOf(window.location.origin+"/")&&(i.crossOrigin="anonymous"),o=function(n){i.onerror=i.onload=null,clearTimeout(a);var r=D[e];if(0!==r){if(r){var t=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src,c=new Error("Loading chunk "+e+" failed.\n("+t+": "+o+")");c.type=t,c.request=o,r[1](c)}D[e]=void 0}};var a=setTimeout(function(){o({type:"timeout",target:i})},12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(n)},I.m=e,I.c=P,I.d=function(e,n,r){I.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},I.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},I.t=function(e,n){if(1&n&&(e=I(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(I.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)I.d(r,t,function(n){return e[n]}.bind(null,t));return r},I.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return I.d(n,"a",n),n},I.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},I.p="/",I.oe=function(e){throw console.error(e),e},I.h=function(){return a};var M=window.webpackJsonp=window.webpackJsonp||[],S=M.push.bind(M);M.push=n,M=M.slice();for(var T=0;T<M.length;T++)n(M[T]);var U=S;n([[],{},0,[0,2,3]]),H.push([0,0]),r()}({"./.docz/app/db.json":function(e){e.exports={config:{title:"figma-graphql",description:"The reimagined Figma API (super)powered by GraphQL",menu:[],version:"1.3.0",repository:"https://github.com/braposo/figma-graphql",native:!1,codeSandbox:!0,themeConfig:{colors:{link:"#1ABCFE",primary:"#FF7262"}},separator:"-",src:"./docs"},entries:[{key:"home.mdx",value:{name:"Home",route:"/",id:"7e165ea34e00ef78451a64f9e321a429",filepath:"home.mdx",link:"https://github.com/braposo/figma-graphql/edit/master/docs/home.mdx",slug:"home",menu:"",headings:[{slug:"figma-graphql-logo",depth:1,value:""},{slug:"figma-graphql",depth:1,value:"figma-graphql"}]}},{key:"quick-start.mdx",value:{name:"Quick Start",route:"/quick-start",id:"7586325c237102c01eddb44ffdebaa83",filepath:"quick-start.mdx",link:"https://github.com/braposo/figma-graphql/edit/master/docs/quick-start.mdx",slug:"quick-start",menu:"",headings:[{slug:"quick-start",depth:1,value:"Quick Start"},{slug:"1-open-figma-graphql-sandbox-and-fork-it",depth:3,value:"1. Open figma-graphql  sandbox  and fork it"},{slug:"2-add-your-figma-api-token-as-figma_token-in-the-codesandbox-secret-keys",depth:3,value:"2. Add your  Figma API Token  as  FIGMA_TOKEN  in the  codesandbox secret keys"},{slug:"3-try-your-first-query",depth:3,value:"3. Try your first query!"}]}}],props:[]}},"./.docz/app/index.jsx":function(e,n,r){"use strict";r.r(n);var t=r("./node_modules/react/index.js"),o=r.n(t),i=r("./node_modules/react-dom/index.js"),a=r.n(i),c=r("./node_modules/docz/dist/index.esm.js"),d=r("./node_modules/docz-theme-default/dist/index.esm.js"),s={"home.mdx":function(){return Promise.all([r.e(0),r.e(2)]).then(r.bind(null,"./docs/home.mdx"))},"quick-start.mdx":function(){return Promise.all([r.e(0),r.e(3)]).then(r.bind(null,"./docs/quick-start.mdx"))}},u=r("./.docz/app/db.json"),l=function(){return o.a.createElement(d.a,{linkComponent:c.b,db:u},o.a.createElement(c.c,{imports:s}))},p=[],f=[],h=function(){return f.forEach(function(e){return e&&e()})},m=document.querySelector("#root");!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;p.forEach(function(e){return e&&e()}),a.a.render(o.a.createElement(e,null),m,h)}(l)},0:function(e,n,r){e.exports=r("./.docz/app/index.jsx")}});
//# sourceMappingURL=app.ed368007442b75a28a4d.js.map