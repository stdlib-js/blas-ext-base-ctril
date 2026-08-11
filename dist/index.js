"use strict";var h=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var R=h(function(er,F){
var K=require('@stdlib/ndarray-base-assert-is-row-major/dist'),_=require('@stdlib/strided-base-reinterpret-complex64/dist'),M=require('@stdlib/math-base-special-fast-max/dist'),P=require('@stdlib/math-base-special-fast-min/dist');function Q(e,r,u,g,f,v,w,a,q,m,l){var s,n,i,p,j,y,x,d,c,b,t,o;if(s=_(g,0),n=_(a,0),i=f*2,p=v*2,j=q*2,y=m*2,x=w*2,d=l*2,K([f,v])){for(o=0;o<e;o++){for(t=0;t<=P(o+u,r-1);t++)c=x+t*p,b=d+t*y,n[b]=s[c],n[b+1]=s[c+1];x+=i,d+=j}return a}for(o=0;o<r;o++){for(t=M(0,o-u);t<e;t++)c=x+t*i,b=d+t*j,n[b]=s[c],n[b+1]=s[c+1];x+=p,d+=y}return a}F.exports=Q
});var T=h(function(ar,S){
var U=require('@stdlib/blas-base-assert-is-layout/dist'),W=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),O=require('@stdlib/math-base-special-fast-max/dist'),E=require('@stdlib/error-tools-fmtprodmsg/dist'),X=R();function Y(e,r,u,g,f,v,w,a){var q,m,l,s,n,i;if(!U(e))throw new TypeError(E('nullFx',e));if(q=W(e),q?i=u:i=r,v<O(1,i))throw new RangeError(E('nullJL',i,v));if(a<O(1,i))throw new RangeError(E('nullGM',i,a));return q?(m=v,l=1,s=a,n=1):(m=1,l=v,s=1,n=a),X(r,u,g,f,m,l,0,w,s,n,0)}S.exports=Y
});var C=h(function(ir,z){
var Z=R();function $(e,r,u,g,f,v,w,a,q,m,l){return Z(e,r,u,g,f,v,w,a,q,m,l)}z.exports=$
});var I=h(function(tr,H){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),G=T(),N=C();k(G,"ndarray",N);H.exports=G
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),L=require('@stdlib/assert-is-error/dist'),D=I(),V,J=B(A(__dirname,"./native.js"));L(J)?V=D:V=J;module.exports=V;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
