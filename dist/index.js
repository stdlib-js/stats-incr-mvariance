"use strict";var w=function(i,l){return function(){return l||i((l={exports:{}}).exports,l),l.exports}};var b=w(function(T,d){
var k=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,y=require('@stdlib/assert-is-number/dist').isPrimitive,v=require('@stdlib/math-base-assert-is-nan/dist'),p=require('@stdlib/error-tools-fmtprodmsg/dist');function M(i,l){var t,f,o,r,a,c,g,e,N,u;if(!k(i))throw new TypeError(p('1JJ8B',i));if(f=new Array(i),N=i-1,r=0,u=-1,e=0,arguments.length>1){if(!y(l))throw new TypeError(p('1JJ9X',l));return a=l,q}return a=0,h;function h(n){var s,m;if(arguments.length===0)return e===0?null:e===1?v(r)?NaN:0:e<i?r/(e-1):r/N;if(u=(u+1)%i,v(n))e=i,r=NaN;else{if(e<i)return f[u]=n,e+=1,t=n-a,a+=t/e,r+=t*(n-a),e===1?0:r/(e-1);if(e===1)return r=0,r;if(v(f[u])){for(e=1,a=n,r=0,s=0;s<i;s++)if(s!==u){if(m=f[s],v(m)){e=i,r=NaN;break}e+=1,t=m-a,a+=t/e,r+=t*(m-a)}}else v(r)===!1&&(o=f[u],t=n-o,c=o-a,a+=t/i,g=n-a,r+=t*(c+g))}return f[u]=n,r/N}function q(n){var s;if(arguments.length===0)return e===0?null:e<i?r/e:r/i;if(u=(u+1)%i,v(n))e=i,r=NaN;else{if(e<i)return f[u]=n,e+=1,t=n-a,r+=t*t,r/e;if(v(f[u])){for(r=0,s=0;s<i;s++)if(s!==u){if(v(f[s])){e=i,r=NaN;break}t=f[s]-a,r+=t*t}}else v(r)===!1&&(o=f[u],r+=(n-o)*(n-a+o-a))}return f[u]=n,r/i}}d.exports=M
});var P=b();module.exports=P;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
