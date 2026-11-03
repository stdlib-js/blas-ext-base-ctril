"use strict";var p=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var R=p(function(er,F){
var K=require('@stdlib/ndarray-base-assert-is-row-major/dist'),_=require('@stdlib/strided-base-reinterpret-complex64/dist'),M=require('@stdlib/math-base-special-fast-max/dist'),P=require('@stdlib/math-base-special-fast-min/dist');function Q(t,r,u,d,c,v,w,e,l,q,m){var s,n,a,f,j,y,x,h,b,g,i,o;if(s=_(d,0),n=_(e,0),a=c*2,f=v*2,j=l*2,y=q*2,x=w*2,h=m*2,K([c,v])){for(o=0;o<t;o++){for(i=0;i<=P(o+u,r-1);i++)b=x+i*f,g=h+i*y,n[g]=s[b],n[g+1]=s[b+1];x+=a,h+=j}return e}for(o=0;o<r;o++){for(i=M(0,o-u);i<t;i++)b=x+i*a,g=h+i*j,n[g]=s[b],n[g+1]=s[b+1];x+=f,h+=y}return e}F.exports=Q
});var T=p(function(ar,S){
var U=require('@stdlib/blas-base-layout-resolve-str/dist'),W=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),O=require('@stdlib/math-base-special-fast-max/dist'),E=require('@stdlib/error-tools-fmtprodmsg/dist'),X=R();function Y(t,r,u,d,c,v,w,e){var l,q,m,s,n,a,f;if(f=U(t),f===null)throw new TypeError(E('36PFx',t));if(l=W(f),l?a=u:a=r,v<O(1,a))throw new RangeError(E('36PJL',a,v));if(e<O(1,a))throw new RangeError(E('36PGM',a,e));return l?(q=v,m=1,s=e,n=1):(q=1,m=v,s=1,n=e),X(r,u,d,c,q,m,0,w,s,n,0)}S.exports=Y
});var C=p(function(ir,z){
var Z=R();function $(t,r,u,d,c,v,w,e,l,q,m){return Z(t,r,u,d,c,v,w,e,l,q,m)}z.exports=$
});var I=p(function(tr,H){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),G=T(),N=C();k(G,"ndarray",N);H.exports=G
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),L=require('@stdlib/assert-is-error/dist'),D=I(),V,J=B(A(__dirname,"./native.js"));L(J)?V=D:V=J;module.exports=V;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
