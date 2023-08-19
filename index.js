// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,l=r.__lookupSetter__,f=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,t,f){var a,c,p,b;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof f||null===f||"[object Array]"===n.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((c="value"in f)&&(u.call(e,t)||l.call(e,t)?(a=e.__proto__,e.__proto__=r,delete e[t],e[t]=f.value,e.__proto__=a):e[t]=f.value),p="get"in f,b="set"in f,c&&(p||b))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(e,t,f.get),b&&i&&i.call(e,t,f.set),e};function a(e,t,r){f(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function c(e){return"number"==typeof e}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return p&&"symbol"==typeof Symbol.toStringTag}var y=Object.prototype.toString,s=Object.prototype.hasOwnProperty,_="function"==typeof Symbol?Symbol.toStringTag:"",v=b()?function(e){var t,r,n,o,i;if(null==e)return y.call(e);r=e[_],i=_,t=null!=(o=e)&&s.call(o,i);try{e[_]=void 0}catch(t){return y.call(e)}return n=y.call(e),t?e[_]=r:delete e[_],n}:function(e){return y.call(e)},m=Number,d=m.prototype.toString,g=b();function h(e){return"object"==typeof e&&(e instanceof m||(g?function(e){try{return d.call(e),!0}catch(e){return!1}}(e):"[object Number]"===v(e)))}function j(e){return c(e)||h(e)}a(j,"isPrimitive",c),a(j,"isObject",h);var N=Number.POSITIVE_INFINITY,w=m.NEGATIVE_INFINITY,O=Math.floor;function S(e){return e<N&&e>w&&O(t=e)===t;var t}function T(e){return c(e)&&S(e)}function I(e){return h(e)&&S(e.valueOf())}function P(e){return T(e)||I(e)}function E(e){return T(e)&&e>0}function k(e){return I(e)&&e.valueOf()>0}function A(e){return E(e)||k(e)}function J(e){return e!=e}function V(){var e,t=arguments,r=t[0],n="https://stdlib.io/e/"+r+"?";for(e=1;e<t.length;e++)n+="&arg[]="+encodeURIComponent(t[e]);return n}return a(P,"isPrimitive",T),a(P,"isObject",I),a(A,"isPrimitive",E),a(A,"isObject",k),function(e,t){var r,n,o,i,u,l,f,a;if(!E(e))throw new TypeError(V("1JJ8B,Hs",e));if(n=new Array(e),f=e-1,i=0,a=-1,l=0,arguments.length>1){if(!c(t))throw new TypeError(V("1JJ9X,Hv",t));return u=t,b}return u=0,p;function p(t){var c,p;if(0===arguments.length)return 0===l?null:1===l?J(i)?NaN:0:l<e?i/(l-1):i/f;if(a=(a+1)%e,J(t))l=e,i=NaN;else{if(l<e)return n[a]=t,i+=(r=t-u)*(t-(u+=r/(l+=1))),1===l?0:i/(l-1);if(1===l)return i=0;if(J(n[a])){for(l=1,u=t,i=0,c=0;c<e;c++)if(c!==a){if(J(p=n[c])){l=e,i=NaN;break}i+=(r=p-u)*(p-(u+=r/(l+=1)))}}else!1===J(i)&&(o=n[a],i+=(r=t-o)*(o-u+(t-(u+=r/e))))}return n[a]=t,i/f}function b(t){var f;if(0===arguments.length)return 0===l?null:l<e?i/l:i/e;if(a=(a+1)%e,J(t))l=e,i=NaN;else{if(l<e)return n[a]=t,(i+=(r=t-u)*r)/(l+=1);if(J(n[a])){for(i=0,f=0;f<e;f++)if(f!==a){if(J(n[f])){l=e,i=NaN;break}r=n[f]-u,i+=r*r}}else!1===J(i)&&(o=n[a],i+=(t-o)*(t-u+o-u))}return n[a]=t,i/e}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).incrmvariance=t();
//# sourceMappingURL=index.js.map
