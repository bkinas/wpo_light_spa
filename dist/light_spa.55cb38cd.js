parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KJwu":[function(require,module,exports) {
"use strict";function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(n)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.h=exports.app=exports.Lazy=void 0;var n=1,r=2,t=3,o={},i=[],l=i.map,u=Array.isArray,f="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout,a=function e(n){var r="";if("string"==typeof n)return n;if(u(n)&&n.length>0)for(var t,o=0;o<n.length;o++)""!==(t=e(n[o]))&&(r+=(r&&" ")+t);else for(var o in n)n[o]&&(r+=(r&&" ")+o);return r},c=function(e,n){var r={};for(var t in e)r[t]=e[t];for(var t in n)r[t]=n[t];return r},s=function e(n){return n.reduce(function(n,r){return n.concat(r&&!0!==r?"function"==typeof r[0]?[r]:e(r):0)},i)},p=function(e,n){return u(e)&&u(n)&&e[0]===n[0]&&"function"==typeof e[0]},d=function(e,n){if(e!==n)for(var r in c(e,n)){if(e[r]!==n[r]&&!p(e[r],n[r]))return!0;n[r]=e[r]}},y=function(e,n,r){for(var t,o,i=0,l=[];i<e.length||i<n.length;i++)t=e[i],o=n[i],l.push(o?!t||o[0]!==t[0]||d(o[1],t[1])?[o[0],o[1],o[0](r,o[1]),t&&t[2]()]:t:t&&t[2]());return l},v=function(e,n,r,t,o,i){if("key"===n);else if("style"===n)for(var l in c(r,t))r=null==t||null==t[l]?"":t[l],"-"===l[0]?e[n].setProperty(l,r):e[n][l]=r;else"o"===n[0]&&"n"===n[1]?((e.actions||(e.actions={}))[n=n.slice(2).toLowerCase()]=t)?r||e.addEventListener(n,o):e.removeEventListener(n,o):!i&&"list"!==n&&n in e?e[n]=null==t?"":t:null==t||!1===t||"class"===n&&!(t=a(t))?e.removeAttribute(n):e.setAttribute(n,t)},m=function e(n,r,o){var i=n.props,l=n.type===t?document.createTextNode(n.name):(o=o||"svg"===n.name)?document.createElementNS("http://www.w3.org/2000/svg",n.name,{is:i.is}):document.createElement(n.name,{is:i.is});for(var u in i)v(l,u,null,i[u],r,o);for(var f=0,a=n.children.length;f<a;f++)l.appendChild(e(n.children[f]=w(n.children[f]),r,o));return n.node=l},h=function(e){return null==e?null:e.key},g=function e(r,o,i,l,u,f){if(i===l);else if(null!=i&&i.type===t&&l.type===t)i.name!==l.name&&(o.nodeValue=l.name);else if(null==i||i.name!==l.name)o=r.insertBefore(m(l=w(l),u,f),o),null!=i&&r.removeChild(i.node);else{var a,s,p,d,y=i.props,g=l.props,b=i.children,z=l.children,x=0,C=0,k=b.length-1,A=z.length-1;for(var L in f=f||"svg"===l.name,c(y,g))("value"===L||"selected"===L||"checked"===L?o[L]:y[L])!==g[L]&&v(o,L,y[L],g[L],u,f);for(;C<=A&&x<=k&&null!=(p=h(b[x]))&&p===h(z[C]);)e(o,b[x].node,b[x],z[C]=w(z[C++],b[x++]),u,f);for(;C<=A&&x<=k&&null!=(p=h(b[k]))&&p===h(z[A]);)e(o,b[k].node,b[k],z[A]=w(z[A--],b[k--]),u,f);if(x>k)for(;C<=A;)o.insertBefore(m(z[C]=w(z[C++]),u,f),(s=b[x])&&s.node);else if(C>A)for(;x<=k;)o.removeChild(b[x++].node);else{L=x;for(var S={},N={};L<=k;L++)null!=(p=b[L].key)&&(S[p]=b[L]);for(;C<=A;)p=h(s=b[x]),d=h(z[C]=w(z[C],s)),N[p]||null!=d&&d===h(b[x+1])?(null==p&&o.removeChild(s.node),x++):null==d||i.type===n?(null==p&&(e(o,s&&s.node,s,z[C],u,f),C++),x++):(p===d?(e(o,s.node,s,z[C],u,f),N[d]=!0,x++):null!=(a=S[d])?(e(o,o.insertBefore(a.node,s&&s.node),a,z[C],u,f),N[d]=!0):e(o,s&&s.node,null,z[C],u,f),C++);for(;x<=k;)null==h(s=b[x++])&&o.removeChild(s.node);for(var L in S)null==N[L]&&o.removeChild(S[L].node)}}return l.node=o},b=function(e,n){for(var r in e)if(e[r]!==n[r])return!0;for(var r in n)if(e[r]!==n[r])return!0},z=function(n){return"object"===e(n)?n:C(n)},w=function(e,n){return e.type===r?((!n||!n.lazy||b(n.lazy,e.lazy))&&((n=z(e.lazy.view(e.lazy))).lazy=e.lazy),n):e},x=function(e,n,r,t,o,i){return{name:e,props:n,children:r,node:t,type:i,key:o}},C=function(e,n){return x(e,o,i,n,void 0,t)},k=function e(r){return r.nodeType===t?C(r.nodeValue,r):x(r.nodeName.toLowerCase(),o,l.call(r.childNodes,e),r,void 0,n)},A=function(e){return{lazy:e,type:r}};exports.Lazy=A;var L=function(e,n){for(var r,t=[],i=[],l=arguments.length;l-- >2;)t.push(arguments[l]);for(;t.length>0;)if(u(r=t.pop()))for(l=r.length;l-- >0;)t.push(r[l]);else!1===r||!0===r||null==r||i.push(z(r));return n=n||o,"function"==typeof e?e(n,i):x(e,n,i,void 0,n.key)};exports.h=L;var S=function(e){var n={},r=!1,t=e.view,o=e.node,i=o&&k(o),l=e.subscriptions,a=[],c=function(e){d(this.actions[e.type],e)},p=function(e){return n!==e&&(n=e,l&&(a=y(a,s([l(n)]),d)),t&&!r&&f(v,r=!0)),n},d=(e.middleware||function(e){return e})(function(e,r){return"function"==typeof e?d(e(n,r)):u(e)?"function"==typeof e[0]||u(e[0])?d(e[0],"function"==typeof e[1]?e[1](r):e[1]):(s(e.slice(1)).map(function(e){e&&e[0](d,e[1])},p(e[0])),n):p(e)}),v=function(){r=!1,o=g(o.parentNode,o,i,i=z(t(n)),c)};d(e.init)};exports.app=S;
},{}],"wDNP":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function e(t,s,r,n){var u;s[0]=0;for(var p=1;p<s.length;p++){var a=s[p++],h=s[p]?(s[0]|=a?1:2,r[s[p++]]):s[++p];3===a?n[0]=h:4===a?n[1]=Object.assign(n[1]||{},h):5===a?(n[1]=n[1]||{})[s[++p]]=h:6===a?n[1][s[++p]]+=h+"":a?(u=t.apply(h,e(t,h,r,["",null])),n.push(u),h[0]?s[0]|=2:(s[p-2]=0,s[p]=u)):n.push(h)}return n},t=new Map;function s(s){var r=t.get(this);return r||(r=new Map,t.set(this,r)),(r=e(this,r.get(s)||(r.set(s,r=function(e){for(var t,s,r=1,n="",u="",p=[0],a=function(e){1===r&&(e||(n=n.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?p.push(0,e,n):3===r&&(e||n)?(p.push(3,e,n),r=2):2===r&&"..."===n&&e?p.push(4,e,0):2===r&&n&&!e?p.push(5,0,!0,n):r>=5&&((n||!e&&5===r)&&(p.push(r,0,n,s),r=6),e&&(p.push(r,e,0,s),r=6)),n=""},h=0;h<e.length;h++){h&&(1===r&&a(),a(h));for(var o=0;o<e[h].length;o++)t=e[h][o],1===r?"<"===t?(a(),p=[p],r=3):n+=t:4===r?"--"===n&&">"===t?(r=1,n=""):n=t+n[0]:u?t===u?u="":n+=t:'"'===t||"'"===t?u=t:">"===t?(a(),r=1):r&&("="===t?(r=5,s=n,n=""):"/"===t&&(r<5||">"===e[h][o+1])?(a(),3===r&&(p=p[0]),r=p,(p=p[0]).push(2,0,r),r=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(a(),r=2):n+=t),3===r&&"!--"===n&&(r=4,p=p[0])}return a(),p}(s)),r),arguments,[])).length>1?r:r[0]}var r=s;exports.default=r;
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=require("./web_modules/hyperapp.js"),r=t(require("./web_modules/htm.js"));function t(e){return e&&e.__esModule?e:{default:e}}function u(){var e=n(["<div>text</div>"]);return u=function(){return e},e}function n(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}var i=r.default.bind(e.h);(0,e.app)({view:function(e){return i(u())},node:document.body});
},{"./web_modules/hyperapp.js":"KJwu","./web_modules/htm.js":"wDNP"}]},{},["Focm"], null)
//# sourceMappingURL=/light_spa.55cb38cd.js.map