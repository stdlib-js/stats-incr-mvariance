// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var i=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,i.get?i:{enumerable:!0,get:function(){return r[t]}})})),e}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(r){return!1}},i=Object.defineProperty,n=Object.prototype,a=n.toString,o=n.__defineGetter__,u=n.__defineSetter__,c=n.__lookupGetter__,f=n.__lookupSetter__;var s=function(r,e,t){var i,s,l,v;if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((s="value"in t)&&(c.call(r,e)||f.call(r,e)?(i=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),l="get"in t,v="set"in t,s&&(l||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&o&&o.call(r,e,t.get),v&&u&&u.call(r,e,t.set),r},l=i,v=s,p=t()?l:v;var g=function(r,e,t){p(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},h=g;var d=function(r){return"number"==typeof r};var m=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var b=function(){return m&&"symbol"==typeof Symbol.toStringTag},w=Object.prototype.toString,y=w;var E=function(r){return y.call(r)},P=Object.prototype.hasOwnProperty;var j=function(r,e){return null!=r&&P.call(r,e)},_="function"==typeof Symbol?Symbol.toStringTag:"",O=j,T=_,V=w;var x=E,S=function(r){var e,t,i;if(null==r)return V.call(r);t=r[T],e=O(r,T);try{r[T]=void 0}catch(e){return V.call(r)}return i=V.call(r),e?r[T]=t:delete r[T],i},k=b()?S:x,N=Number,I=N.prototype.toString;var A=k,M=N,R=function(r){try{return I.call(r),!0}catch(r){return!1}},$=b();var F=function(r){return"object"==typeof r&&(r instanceof M||($?R(r):"[object Number]"===A(r)))},C=d,B=F;var G=h,L=function(r){return C(r)||B(r)},Z=F;G(L,"isPrimitive",d),G(L,"isObject",Z);var W=L,X=Number.POSITIVE_INFINITY,z=N.NEGATIVE_INFINITY,U=Math.floor;var Y=function(r){return U(r)===r},D=X,q=z,H=Y;var J=function(r){return r<D&&r>q&&H(r)},K=W.isPrimitive,Q=J;var rr=function(r){return K(r)&&Q(r)},er=W.isObject,tr=J;var ir=function(r){return er(r)&&tr(r.valueOf())},nr=rr,ar=ir;var or=h,ur=function(r){return nr(r)||ar(r)},cr=ir;or(ur,"isPrimitive",rr),or(ur,"isObject",cr);var fr=ur,sr=fr.isPrimitive;var lr=function(r){return sr(r)&&r>0},vr=fr.isObject;var pr=function(r){return vr(r)&&r.valueOf()>0},gr=lr,hr=pr;var dr=h,mr=function(r){return gr(r)||hr(r)},br=pr;dr(mr,"isPrimitive",lr),dr(mr,"isObject",br);var wr=mr;var yr=function(r){return r!=r};var Er=function(r){return"string"==typeof r},Pr=String.prototype.valueOf;var jr=k,_r=function(r){try{return Pr.call(r),!0}catch(r){return!1}},Or=b();var Tr=function(r){return"object"==typeof r&&(r instanceof String||(Or?_r(r):"[object String]"===jr(r)))},Vr=Er,xr=Tr;var Sr=h,kr=function(r){return Vr(r)||xr(r)},Nr=Tr;Sr(kr,"isPrimitive",Er),Sr(kr,"isObject",Nr);var Ir=kr,Ar=Y;var Mr=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Ar(r.length)&&r.length>=0&&r.length<=9007199254740991},Rr=W.isPrimitive,$r=yr;var Fr=function(r){return Rr(r)&&$r(r)},Cr=W.isObject,Br=yr;var Gr=function(r){return Cr(r)&&Br(r.valueOf())},Lr=Fr,Zr=Gr;var Wr=h,Xr=function(r){return Lr(r)||Zr(r)},zr=Gr;Wr(Xr,"isPrimitive",Fr),Wr(Xr,"isObject",zr);var Ur=Mr,Yr=fr.isPrimitive,Dr=Ir.isPrimitive,qr=Xr.isPrimitive;var Hr=function(r,e,t){var i,n,a;if(!Ur(r)&&!Dr(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!Yr(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(n=t)<0&&(n=0)}else n=0;if(Dr(r)){if(!Dr(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,n)}if(i=r.length,qr(e)){for(a=n;a<i;a++)if(qr(r[a]))return!0;return!1}for(a=n;a<i;a++)if(r[a]===e)return!0;return!1},Jr=Ir.isPrimitive;var Kr=function(r){if(!Jr(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},Qr=Ir.isPrimitive;var re=function(r){if(!Qr(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},ee=Kr,te=re,ie=Ir.isPrimitive;var ne=function(r){return ie(r)&&r===te(r)&&r!==ee(r)},ae=X,oe=z;var ue=function(r){return r==r&&r>oe&&r<ae},ce=fr.isPrimitive;var fe=function(r){return ce(r)&&r>=0},se=fr.isObject;var le=function(r){return se(r)&&r.valueOf()>=0},ve=fe,pe=le;var ge=h,he=function(r){return ve(r)||pe(r)},de=le;ge(he,"isPrimitive",fe),ge(he,"isObject",de);var me=he.isPrimitive,be=Ir.isPrimitive;var we=function(r,e){var t,i;if(!be(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!me(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",i=e;1==(1&i)&&(t+=r),0!==(i>>>=1);)r+=r;return t},ye=fr.isPrimitive,Ee=Ir.isPrimitive;var Pe=we,je=function(r,e,t){var i,n;if(!Ee(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!Ee(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!ye(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");i=t<0?r.length+t:t}else i=0;if(0===e.length)return!0;if(i<0||i+e.length>r.length)return!1;for(n=0;n<e.length;n++)if(r.charCodeAt(i+n)!==e.charCodeAt(n))return!1;return!0};var _e=function(r,e,t){var i=!1,n=e-r.length;return n<0||(je(r,"-")&&(i=!0,r=r.substr(1)),r=t?r+Pe("0",n):Pe("0",n)+r,i&&(r="-"+r)),r},Oe=ne,Te=re,Ve=Kr,xe=ue,Se=W.isPrimitive,ke=_e;var Ne=function(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!xe(i)){if(!Se(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=ke(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=ke(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=Oe(r.specifier)?Te(t):Ve(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},Ie=Ir.isPrimitive,Ae=/[-\/\\^$*+?.()|[\]{}]/g;var Me=function(r){var e,t;if(!Ie(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(Ae,"\\$&"):(e=(e=r.substring(1,t)).replace(Ae,"\\$&"),r=r[0]+e+r.substring(t))},Re=/./;var $e=function(r){return"boolean"==typeof r},Fe=Boolean.prototype.toString;var Ce=k,Be=function(r){try{return Fe.call(r),!0}catch(r){return!1}},Ge=b();var Le=function(r){return"object"==typeof r&&(r instanceof Boolean||(Ge?Be(r):"[object Boolean]"===Ce(r)))},Ze=$e,We=Le;var Xe=h,ze=function(r){return Ze(r)||We(r)},Ue=Le;Xe(ze,"isPrimitive",$e),Xe(ze,"isObject",Ue);var Ye="object"==typeof self?self:null,De="object"==typeof window?window:null,qe=ze.isPrimitive,He=function(){return new Function("return this;")()},Je=Ye,Ke=De,Qe=r(Object.freeze({__proto__:null}));var rt=function(r){if(arguments.length){if(!qe(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return He()}if(Je)return Je;if(Ke)return Ke;if(Qe)return Qe;throw new Error("unexpected error. Unable to resolve global object.")},et=rt(),tt=et.document&&et.document.childNodes,it=Int8Array,nt=Re,at=tt,ot=it;var ut=function(){return"function"==typeof nt||"object"==typeof ot||"function"==typeof at};var ct=function(){return/^\s*function\s*([^(]*)/i},ft=ct;h(ft,"REGEXP",ct());var st=ft,lt=k;var vt=Array.isArray?Array.isArray:function(r){return"[object Array]"===lt(r)};var pt=function(r){return null!==r&&"object"==typeof r};h(pt,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,i;if(!vt(e))return!1;if(0===(t=e.length))return!1;for(i=0;i<t;i++)if(!1===r(e[i]))return!1;return!0}}(pt));var gt=pt;var ht=k,dt=st.REGEXP,mt=function(r){return gt(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var bt=function(r){var e,t,i;if(("Object"===(t=ht(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(i=r.constructor).name)return i.name;if(e=dt.exec(i.toString()))return e[1]}return mt(r)?"Buffer":t},wt=bt;var yt=bt;var Et=function(r){var e;return null===r?"null":"object"===(e=typeof r)?wt(r).toLowerCase():e},Pt=function(r){return yt(r).toLowerCase()},jt=ut()?Pt:Et;var _t=function(r){return"function"===jt(r)},Ot=RegExp.prototype.exec;var Tt=k,Vt=function(r){try{return Ot.call(r),!0}catch(r){return!1}},xt=b();var St=Me,kt=_t,Nt=Ir.isPrimitive,It=function(r){return"object"==typeof r&&(r instanceof RegExp||(xt?Vt(r):"[object RegExp]"===Tt(r)))};var At=ne,Mt=re,Rt=Kr,$t=function(r,e,t){if(!Nt(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(Nt(e))e=St(e),e=new RegExp(e,"g");else if(!It(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!Nt(t)&&!kt(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},Ft=ue,Ct=W.isPrimitive,Bt=function(r){return Math.abs(r)},Gt=/e\+(\d)$/,Lt=/e-(\d)$/,Zt=/^(\d+)$/,Wt=/^(\d+)e/,Xt=/\.0$/,zt=/\.0*e/,Ut=/(\..*[^0])0*e/;var Yt=function(r){var e,t,i=parseFloat(r.arg);if(!Ft(i)){if(!Ct(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":Bt(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=$t(t,Ut,"$1e"),t=$t(t,zt,"e"),t=$t(t,Xt,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=$t(t,Gt,"e+0$1"),t=$t(t,Lt,"e-0$1"),r.alternate&&(t=$t(t,Zt,"$1."),t=$t(t,Wt,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=At(r.specifier)?Mt(t):Rt(t)},Dt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var qt=we;var Ht=Ir.isPrimitive,Jt=Hr,Kt=yr,Qt=Ne,ri=Yt,ei=function(r){var e,t,i,n,a;for(e=0,i=[],a=Dt.exec(r);a;)(t=r.slice(e,Dt.lastIndex-a[0].length)).length&&i.push(t),(n=o(a,i.length))&&i.push(n),e=Dt.lastIndex,a=Dt.exec(r);return(t=r.slice(e)).length&&i.push(t),i;function o(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},ti=function(r,e,t){var i=e-r.length;return i<0?r:r=t?r+qt(" ",i):qt(" ",i)+r},ii=_e,ni=String.fromCharCode;var ai=wr.isPrimitive,oi=W.isPrimitive,ui=yr,ci=function(r){var e,t,i,n,a,o,u,c,f;if(!Ht(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=ei(r),o="",u=1,c=0;c<e.length;c++)if(i=e[c],Ht(i))o+=i;else{for(i.mapping&&(u=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(n=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=!Jt(t,"-");break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[u],10),u+=1,Kt(i.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if("*"===i.precision&&i.hasPeriod){if(i.precision=parseInt(arguments[u],10),u+=1,Kt(i.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,i.hasPeriod=!1)}switch(i.arg=arguments[u],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":i.hasPeriod&&(i.padZeros=!1),i.arg=Qt(i);break;case"s":i.maxWidth=i.hasPeriod?i.precision:-1;break;case"c":if(!Kt(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Kt(a)?String(i.arg):ni(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":i.hasPeriod||(i.precision=6),i.arg=ri(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=ii(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=ti(i.arg,i.width,i.padRight)),o+=i.arg||"",u+=1}return o};var fi=function(r,e){var t,i,n,a,o,u,c,f;if(!ai(r))throw new TypeError(ci("invalid argument. Must provide a positive integer. Value: `%s`.",r));if(i=new Array(r),c=r-1,a=0,f=-1,u=0,arguments.length>1){if(!oi(e))throw new TypeError(ci("invalid argument. Must provide a number. Value: `%s`.",e));return o=e,l}return o=0,s;function s(e){var s,l;if(0===arguments.length)return 0===u?null:1===u?ui(a)?NaN:0:u<r?a/(u-1):a/c;if(f=(f+1)%r,ui(e))u=r,a=NaN;else{if(u<r)return i[f]=e,a+=(t=e-o)*(e-(o+=t/(u+=1))),1===u?0:a/(u-1);if(1===u)return a=0;if(ui(i[f])){for(u=1,o=e,a=0,s=0;s<r;s++)if(s!==f){if(l=i[s],ui(l)){u=r,a=NaN;break}a+=(t=l-o)*(l-(o+=t/(u+=1)))}}else!1===ui(a)&&(n=i[f],a+=(t=e-n)*(n-o+(e-(o+=t/r))))}return i[f]=e,a/c}function l(e){var c;if(0===arguments.length)return 0===u?null:u<r?a/u:a/r;if(f=(f+1)%r,ui(e))u=r,a=NaN;else{if(u<r)return i[f]=e,(a+=(t=e-o)*t)/(u+=1);if(ui(i[f])){for(a=0,c=0;c<r;c++)if(c!==f){if(ui(i[c])){u=r,a=NaN;break}t=i[c]-o,a+=t*t}}else!1===ui(a)&&(n=i[f],a+=(e-n)*(e-o+n-o))}return i[f]=e,a/r}};export{fi as default};
//# sourceMappingURL=mod.js.map
