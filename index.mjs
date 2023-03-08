// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";function s(s,n){var f,o,l,m,a,d,u,h;if(!r(s))throw new TypeError(i("0eY8T",s));if(o=new Array(s),u=s-1,m=0,h=-1,d=0,arguments.length>1){if(!e(n))throw new TypeError(i("0eYA8",n));return a=n,j}return a=0,p;function p(r){var e,i;if(0===arguments.length)return 0===d?null:1===d?t(m)?NaN:0:d<s?m/(d-1):m/u;if(h=(h+1)%s,t(r))d=s,m=NaN;else{if(d<s)return o[h]=r,m+=(f=r-a)*(r-(a+=f/(d+=1))),1===d?0:m/(d-1);if(1===d)return m=0;if(t(o[h])){for(d=1,a=r,m=0,e=0;e<s;e++)if(e!==h){if(i=o[e],t(i)){d=s,m=NaN;break}m+=(f=i-a)*(i-(a+=f/(d+=1)))}}else!1===t(m)&&(l=o[h],m+=(f=r-l)*(l-a+(r-(a+=f/s))))}return o[h]=r,m/u}function j(r){var e;if(0===arguments.length)return 0===d?null:d<s?m/d:m/s;if(h=(h+1)%s,t(r))d=s,m=NaN;else{if(d<s)return o[h]=r,(m+=(f=r-a)*f)/(d+=1);if(t(o[h])){for(m=0,e=0;e<s;e++)if(e!==h){if(t(o[e])){d=s,m=NaN;break}f=o[e]-a,m+=f*f}}else!1===t(m)&&(l=o[h],m+=(r-l)*(r-a+l-a))}return o[h]=r,m/s}}export{s as default};
//# sourceMappingURL=index.mjs.map
