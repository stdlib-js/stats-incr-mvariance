// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function i(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function n(r,e,t){var n=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+i(a):i(a)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,i,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(i=r.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(i=(-c).toString(e),r.precision&&(i=n(i,r.precision,r.padRight)),i="-"+i):(i=c.toString(e),c||r.precision?r.precision&&(i=n(i,r.precision,r.padRight)):i="",r.sign&&(i=r.sign+i)),16===e&&(r.alternate&&(i="0x"+i),i=r.specifier===o.call(r.specifier)?o.call(i):a.call(i)),8===e&&r.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}var s=Math.abs,l=String.prototype.toLowerCase,u=String.prototype.toUpperCase,p=String.prototype.replace,f=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function y(r){var e,i,n=parseFloat(r.arg);if(!isFinite(n)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+i);n=r.arg}switch(r.specifier){case"e":case"E":i=n.toExponential(r.precision);break;case"f":case"F":i=n.toFixed(r.precision);break;case"g":case"G":s(n)<1e-4?((e=r.precision)>0&&(e-=1),i=n.toExponential(e)):i=n.toPrecision(r.precision),r.alternate||(i=p.call(i,w,"$1e"),i=p.call(i,v,"e"),i=p.call(i,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return i=p.call(i,f,"e+0$1"),i=p.call(i,g,"e-0$1"),r.alternate&&(i=p.call(i,d,"$1."),i=p.call(i,h,"$1.e")),n>=0&&r.sign&&(i=r.sign+i),i=r.specifier===u.call(r.specifier)?u.call(i):l.call(i)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var _=String.fromCharCode,E=Array.isArray;function S(r){return r!=r}function k(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function x(r){var e,t,i,a,o,s,l,u,p,f,g,d,h;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(s="",l=1,u=0;u<r.length;u++)if(i=r[u],"string"==typeof i)s+=i;else{if(e=void 0!==i.precision,!(i=k(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+i+"`.");for(i.mapping&&(l=i.mapping),t=i.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[l],10),l+=1,S(i.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[l],10),l+=1,S(i.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[l],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=e?i.precision:-1,i.arg=String(i.arg);break;case"c":if(!S(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=S(o)?String(i.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=y(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=(f=i.arg,g=i.width,d=i.padRight,h=void 0,(h=g-f.length)<0?f:f=d?f+m(h):m(h)+f)),s+=i.arg||"",l+=1}return s}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function N(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function j(r){var e,t,i,n;for(t=[],n=0,i=I.exec(r);i;)(e=r.slice(n,I.lastIndex-i[0].length)).length&&t.push(e),t.push(N(i)),n=I.lastIndex,i=I.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function T(r){var e,t;if("string"!=typeof r)throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[j(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return x.apply(null,e)}var O=Object.prototype,V=O.toString,F=O.__defineGetter__,P=O.__defineSetter__,$=O.__lookupGetter__,A=O.__lookupSetter__;var C=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var i,n,a,o;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&($.call(r,e)||A.call(r,e)?(i=r.__proto__,r.__proto__=O,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&F&&F.call(r,e,t.get),o&&P&&P.call(r,e,t.set),r};function R(r,e,t){C(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function G(r){return"number"==typeof r}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function J(){return Z&&"symbol"==typeof Symbol.toStringTag}var W=Object.prototype.toString;var L=Object.prototype.hasOwnProperty;var U="function"==typeof Symbol?Symbol:void 0,X="function"==typeof U?U.toStringTag:"";var M=J()?function(r){var e,t,i,n,a;if(null==r)return W.call(r);t=r[X],a=X,e=null!=(n=r)&&L.call(n,a);try{r[X]=void 0}catch(e){return W.call(r)}return i=W.call(r),e?r[X]=t:delete r[X],i}:function(r){return W.call(r)},Y=Number,z=Y.prototype.toString;var B=J();function q(r){return"object"==typeof r&&(r instanceof Y||(B?function(r){try{return z.call(r),!0}catch(r){return!1}}(r):"[object Number]"===M(r)))}function D(r){return G(r)||q(r)}R(D,"isPrimitive",G),R(D,"isObject",q);var H=Number.POSITIVE_INFINITY,K=Y.NEGATIVE_INFINITY,Q=Math.floor;function rr(r){return r<H&&r>K&&Q(e=r)===e;var e}function er(r){return G(r)&&rr(r)}function tr(r){return q(r)&&rr(r.valueOf())}function ir(r){return er(r)||tr(r)}function nr(r){return er(r)&&r>0}function ar(r){return tr(r)&&r.valueOf()>0}function or(r){return nr(r)||ar(r)}function cr(r){return r!=r}function sr(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}function lr(r,e){var t,i,n,a,o,c,s,l;if(!nr(r))throw new TypeError(sr("1JJ8B",r));if(i=new Array(r),s=r-1,a=0,l=-1,c=0,arguments.length>1){if(!G(e))throw new TypeError(sr("1JJ9X",e));return o=e,function(e){var s;if(0===arguments.length)return 0===c?null:c<r?a/c:a/r;if(l=(l+1)%r,cr(e))c=r,a=NaN;else{if(c<r)return i[l]=e,(a+=(t=e-o)*t)/(c+=1);if(cr(i[l])){for(a=0,s=0;s<r;s++)if(s!==l){if(cr(i[s])){c=r,a=NaN;break}t=i[s]-o,a+=t*t}}else!1===cr(a)&&(n=i[l],a+=(e-n)*(e-o+n-o))}return i[l]=e,a/r}}return o=0,function(e){var u,p;if(0===arguments.length)return 0===c?null:1===c?cr(a)?NaN:0:c<r?a/(c-1):a/s;if(l=(l+1)%r,cr(e))c=r,a=NaN;else{if(c<r)return i[l]=e,a+=(t=e-o)*(e-(o+=t/(c+=1))),1===c?0:a/(c-1);if(1===c)return a=0;if(cr(i[l])){for(c=1,o=e,a=0,u=0;u<r;u++)if(u!==l){if(cr(p=i[u])){c=r,a=NaN;break}a+=(t=p-o)*(p-(o+=t/(c+=1)))}}else!1===cr(a)&&(n=i[l],a+=(t=e-n)*(n-o+(e-(o+=t/r))))}return i[l]=e,a/s}}R(ir,"isPrimitive",er),R(ir,"isObject",tr),R(or,"isPrimitive",nr),R(or,"isObject",ar);export{lr as default};
//# sourceMappingURL=mod.js.map