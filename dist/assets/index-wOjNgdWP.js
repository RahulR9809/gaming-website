(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function l(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=l(n);fetch(n.href,i)}})();function uo(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var co={exports:{}},xi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hd=Symbol.for("react.transitional.element"),gd=Symbol.for("react.fragment");function fo(t,e,l){var a=null;if(l!==void 0&&(a=""+l),e.key!==void 0&&(a=""+e.key),"key"in e){l={};for(var n in e)n!=="key"&&(l[n]=e[n])}else l=e;return e=l.ref,{$$typeof:hd,type:t,key:a,ref:e!==void 0?e:null,props:l}}xi.Fragment=gd;xi.jsx=fo;xi.jsxs=fo;co.exports=xi;var c=co.exports,so={exports:{}},N={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _c=Symbol.for("react.transitional.element"),yd=Symbol.for("react.portal"),pd=Symbol.for("react.fragment"),vd=Symbol.for("react.strict_mode"),bd=Symbol.for("react.profiler"),xd=Symbol.for("react.consumer"),Sd=Symbol.for("react.context"),zd=Symbol.for("react.forward_ref"),_d=Symbol.for("react.suspense"),jd=Symbol.for("react.memo"),oo=Symbol.for("react.lazy"),Ad=Symbol.for("react.activity"),Of=Symbol.iterator;function Ed(t){return t===null||typeof t!="object"?null:(t=Of&&t[Of]||t["@@iterator"],typeof t=="function"?t:null)}var ro={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mo=Object.assign,ho={};function aa(t,e,l){this.props=t,this.context=e,this.refs=ho,this.updater=l||ro}aa.prototype.isReactComponent={};aa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};aa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function go(){}go.prototype=aa.prototype;function jc(t,e,l){this.props=t,this.context=e,this.refs=ho,this.updater=l||ro}var Ac=jc.prototype=new go;Ac.constructor=jc;mo(Ac,aa.prototype);Ac.isPureReactComponent=!0;var Df=Array.isArray;function Nu(){}var F={H:null,A:null,T:null,S:null},yo=Object.prototype.hasOwnProperty;function Ec(t,e,l){var a=l.ref;return{$$typeof:_c,type:t,key:e,ref:a!==void 0?a:null,props:l}}function Nd(t,e){return Ec(t.type,e,t.props)}function Nc(t){return typeof t=="object"&&t!==null&&t.$$typeof===_c}function Td(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(l){return e[l]})}var Uf=/\/+/g;function Qi(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Td(""+t.key):e.toString(36)}function Md(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(Nu,Nu):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function jl(t,e,l,a,n){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var u=!1;if(t===null)u=!0;else switch(i){case"bigint":case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case _c:case yd:u=!0;break;case oo:return u=t._init,jl(u(t._payload),e,l,a,n)}}if(u)return n=n(t),u=a===""?"."+Qi(t,0):a,Df(n)?(l="",u!=null&&(l=u.replace(Uf,"$&/")+"/"),jl(n,e,l,"",function(r){return r})):n!=null&&(Nc(n)&&(n=Nd(n,l+(n.key==null||t&&t.key===n.key?"":(""+n.key).replace(Uf,"$&/")+"/")+u)),e.push(n)),1;u=0;var f=a===""?".":a+":";if(Df(t))for(var s=0;s<t.length;s++)a=t[s],i=f+Qi(a,s),u+=jl(a,e,l,i,n);else if(s=Ed(t),typeof s=="function")for(t=s.call(t),s=0;!(a=t.next()).done;)a=a.value,i=f+Qi(a,s++),u+=jl(a,e,l,i,n);else if(i==="object"){if(typeof t.then=="function")return jl(Md(t),e,l,a,n);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return u}function mn(t,e,l){if(t==null)return t;var a=[],n=0;return jl(t,a,"","",function(i){return e.call(l,i,n++)}),a}function Od(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(l){(t._status===0||t._status===-1)&&(t._status=1,t._result=l)},function(l){(t._status===0||t._status===-1)&&(t._status=2,t._result=l)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Hf=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Dd={map:mn,forEach:function(t,e,l){mn(t,function(){e.apply(this,arguments)},l)},count:function(t){var e=0;return mn(t,function(){e++}),e},toArray:function(t){return mn(t,function(e){return e})||[]},only:function(t){if(!Nc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};N.Activity=Ad;N.Children=Dd;N.Component=aa;N.Fragment=pd;N.Profiler=bd;N.PureComponent=jc;N.StrictMode=vd;N.Suspense=_d;N.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F;N.__COMPILER_RUNTIME={__proto__:null,c:function(t){return F.H.useMemoCache(t)}};N.cache=function(t){return function(){return t.apply(null,arguments)}};N.cacheSignal=function(){return null};N.cloneElement=function(t,e,l){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var a=mo({},t.props),n=t.key;if(e!=null)for(i in e.key!==void 0&&(n=""+e.key),e)!yo.call(e,i)||i==="key"||i==="__self"||i==="__source"||i==="ref"&&e.ref===void 0||(a[i]=e[i]);var i=arguments.length-2;if(i===1)a.children=l;else if(1<i){for(var u=Array(i),f=0;f<i;f++)u[f]=arguments[f+2];a.children=u}return Ec(t.type,n,a)};N.createContext=function(t){return t={$$typeof:Sd,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:xd,_context:t},t};N.createElement=function(t,e,l){var a,n={},i=null;if(e!=null)for(a in e.key!==void 0&&(i=""+e.key),e)yo.call(e,a)&&a!=="key"&&a!=="__self"&&a!=="__source"&&(n[a]=e[a]);var u=arguments.length-2;if(u===1)n.children=l;else if(1<u){for(var f=Array(u),s=0;s<u;s++)f[s]=arguments[s+2];n.children=f}if(t&&t.defaultProps)for(a in u=t.defaultProps,u)n[a]===void 0&&(n[a]=u[a]);return Ec(t,i,n)};N.createRef=function(){return{current:null}};N.forwardRef=function(t){return{$$typeof:zd,render:t}};N.isValidElement=Nc;N.lazy=function(t){return{$$typeof:oo,_payload:{_status:-1,_result:t},_init:Od}};N.memo=function(t,e){return{$$typeof:jd,type:t,compare:e===void 0?null:e}};N.startTransition=function(t){var e=F.T,l={};F.T=l;try{var a=t(),n=F.S;n!==null&&n(l,a),typeof a=="object"&&a!==null&&typeof a.then=="function"&&a.then(Nu,Hf)}catch(i){Hf(i)}finally{e!==null&&l.types!==null&&(e.types=l.types),F.T=e}};N.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()};N.use=function(t){return F.H.use(t)};N.useActionState=function(t,e,l){return F.H.useActionState(t,e,l)};N.useCallback=function(t,e){return F.H.useCallback(t,e)};N.useContext=function(t){return F.H.useContext(t)};N.useDebugValue=function(){};N.useDeferredValue=function(t,e){return F.H.useDeferredValue(t,e)};N.useEffect=function(t,e){return F.H.useEffect(t,e)};N.useEffectEvent=function(t){return F.H.useEffectEvent(t)};N.useId=function(){return F.H.useId()};N.useImperativeHandle=function(t,e,l){return F.H.useImperativeHandle(t,e,l)};N.useInsertionEffect=function(t,e){return F.H.useInsertionEffect(t,e)};N.useLayoutEffect=function(t,e){return F.H.useLayoutEffect(t,e)};N.useMemo=function(t,e){return F.H.useMemo(t,e)};N.useOptimistic=function(t,e){return F.H.useOptimistic(t,e)};N.useReducer=function(t,e,l){return F.H.useReducer(t,e,l)};N.useRef=function(t){return F.H.useRef(t)};N.useState=function(t){return F.H.useState(t)};N.useSyncExternalStore=function(t,e,l){return F.H.useSyncExternalStore(t,e,l)};N.useTransition=function(){return F.H.useTransition()};N.version="19.2.8";so.exports=N;var Q=so.exports;const Ud=uo(Q);var po={exports:{}},Si={},vo={exports:{}},bo={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,U){var D=z.length;z.push(U);t:for(;0<D;){var lt=D-1>>>1,rt=z[lt];if(0<n(rt,U))z[lt]=U,z[D]=rt,D=lt;else break t}}function l(z){return z.length===0?null:z[0]}function a(z){if(z.length===0)return null;var U=z[0],D=z.pop();if(D!==U){z[0]=D;t:for(var lt=0,rt=z.length,on=rt>>>1;lt<on;){var rn=2*(lt+1)-1,Xi=z[rn],tl=rn+1,dn=z[tl];if(0>n(Xi,D))tl<rt&&0>n(dn,Xi)?(z[lt]=dn,z[tl]=D,lt=tl):(z[lt]=Xi,z[rn]=D,lt=rn);else if(tl<rt&&0>n(dn,D))z[lt]=dn,z[tl]=D,lt=tl;else break t}}return U}function n(z,U){var D=z.sortIndex-U.sortIndex;return D!==0?D:z.id-U.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var u=Date,f=u.now();t.unstable_now=function(){return u.now()-f}}var s=[],r=[],y=1,p=null,d=3,g=!1,x=!1,_=!1,q=!1,m=typeof setTimeout=="function"?setTimeout:null,o=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;function v(z){for(var U=l(r);U!==null;){if(U.callback===null)a(r);else if(U.startTime<=z)a(r),U.sortIndex=U.expirationTime,e(s,U);else break;U=l(r)}}function j(z){if(_=!1,v(z),!x)if(l(s)!==null)x=!0,M||(M=!0,Ee());else{var U=l(r);U!==null&&Gi(j,U.startTime-z)}}var M=!1,S=-1,E=5,O=-1;function Y(){return q?!0:!(t.unstable_now()-O<E)}function Xt(){if(q=!1,M){var z=t.unstable_now();O=z;var U=!0;try{t:{x=!1,_&&(_=!1,o(S),S=-1),g=!0;var D=d;try{e:{for(v(z),p=l(s);p!==null&&!(p.expirationTime>z&&Y());){var lt=p.callback;if(typeof lt=="function"){p.callback=null,d=p.priorityLevel;var rt=lt(p.expirationTime<=z);if(z=t.unstable_now(),typeof rt=="function"){p.callback=rt,v(z),U=!0;break e}p===l(s)&&a(s),v(z)}else a(s);p=l(s)}if(p!==null)U=!0;else{var on=l(r);on!==null&&Gi(j,on.startTime-z),U=!1}}break t}finally{p=null,d=D,g=!1}U=void 0}}finally{U?Ee():M=!1}}}var Ee;if(typeof h=="function")Ee=function(){h(Xt)};else if(typeof MessageChannel<"u"){var Mf=new MessageChannel,md=Mf.port2;Mf.port1.onmessage=Xt,Ee=function(){md.postMessage(null)}}else Ee=function(){m(Xt,0)};function Gi(z,U){S=m(function(){z(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_next=function(z){switch(d){case 1:case 2:case 3:var U=3;break;default:U=d}var D=d;d=U;try{return z()}finally{d=D}},t.unstable_requestPaint=function(){q=!0},t.unstable_runWithPriority=function(z,U){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var D=d;d=z;try{return U()}finally{d=D}},t.unstable_scheduleCallback=function(z,U,D){var lt=t.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?lt+D:lt):D=lt,z){case 1:var rt=-1;break;case 2:rt=250;break;case 5:rt=1073741823;break;case 4:rt=1e4;break;default:rt=5e3}return rt=D+rt,z={id:y++,callback:U,priorityLevel:z,startTime:D,expirationTime:rt,sortIndex:-1},D>lt?(z.sortIndex=D,e(r,z),l(s)===null&&z===l(r)&&(_?(o(S),S=-1):_=!0,Gi(j,D-lt))):(z.sortIndex=rt,e(s,z),x||g||(x=!0,M||(M=!0,Ee()))),z},t.unstable_shouldYield=Y,t.unstable_wrapCallback=function(z){var U=d;return function(){var D=d;d=U;try{return z.apply(this,arguments)}finally{d=D}}}})(bo);vo.exports=bo;var Hd=vo.exports,xo={exports:{}},zt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cd=Q;function So(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ne(){}var St={d:{f:Ne,r:function(){throw Error(So(522))},D:Ne,C:Ne,L:Ne,m:Ne,X:Ne,S:Ne,M:Ne},p:0,findDOMNode:null},Rd=Symbol.for("react.portal");function Yd(t,e,l){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rd,key:a==null?null:""+a,children:t,containerInfo:e,implementation:l}}var _a=Cd.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function zi(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}zt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=St;zt.createPortal=function(t,e){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(So(299));return Yd(t,e,null,l)};zt.flushSync=function(t){var e=_a.T,l=St.p;try{if(_a.T=null,St.p=2,t)return t()}finally{_a.T=e,St.p=l,St.d.f()}};zt.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,St.d.C(t,e))};zt.prefetchDNS=function(t){typeof t=="string"&&St.d.D(t)};zt.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var l=e.as,a=zi(l,e.crossOrigin),n=typeof e.integrity=="string"?e.integrity:void 0,i=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;l==="style"?St.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:a,integrity:n,fetchPriority:i}):l==="script"&&St.d.X(t,{crossOrigin:a,integrity:n,fetchPriority:i,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};zt.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var l=zi(e.as,e.crossOrigin);St.d.M(t,{crossOrigin:l,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&St.d.M(t)};zt.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var l=e.as,a=zi(l,e.crossOrigin);St.d.L(t,l,{crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};zt.preloadModule=function(t,e){if(typeof t=="string")if(e){var l=zi(e.as,e.crossOrigin);St.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:l,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else St.d.m(t)};zt.requestFormReset=function(t){St.d.r(t)};zt.unstable_batchedUpdates=function(t,e){return t(e)};zt.useFormState=function(t,e,l){return _a.H.useFormState(t,e,l)};zt.useFormStatus=function(){return _a.H.useHostTransitionStatus()};zt.version="19.2.8";function zo(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zo)}catch(t){console.error(t)}}zo(),xo.exports=zt;var Bd=xo.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ot=Hd,_o=Q,qd=Bd;function b(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function jo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Fa(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function Ao(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Eo(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Cf(t){if(Fa(t)!==t)throw Error(b(188))}function Gd(t){var e=t.alternate;if(!e){if(e=Fa(t),e===null)throw Error(b(188));return e!==t?null:t}for(var l=t,a=e;;){var n=l.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===l)return Cf(n),t;if(i===a)return Cf(n),e;i=i.sibling}throw Error(b(188))}if(l.return!==a.return)l=n,a=i;else{for(var u=!1,f=n.child;f;){if(f===l){u=!0,l=n,a=i;break}if(f===a){u=!0,a=n,l=i;break}f=f.sibling}if(!u){for(f=i.child;f;){if(f===l){u=!0,l=i,a=n;break}if(f===a){u=!0,a=i,l=n;break}f=f.sibling}if(!u)throw Error(b(189))}}if(l.alternate!==a)throw Error(b(190))}if(l.tag!==3)throw Error(b(188));return l.stateNode.current===l?t:e}function No(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=No(t),e!==null)return e;t=t.sibling}return null}var I=Object.assign,Xd=Symbol.for("react.element"),hn=Symbol.for("react.transitional.element"),va=Symbol.for("react.portal"),Nl=Symbol.for("react.fragment"),To=Symbol.for("react.strict_mode"),Tu=Symbol.for("react.profiler"),Mo=Symbol.for("react.consumer"),he=Symbol.for("react.context"),Tc=Symbol.for("react.forward_ref"),Mu=Symbol.for("react.suspense"),Ou=Symbol.for("react.suspense_list"),Mc=Symbol.for("react.memo"),Te=Symbol.for("react.lazy"),Du=Symbol.for("react.activity"),Qd=Symbol.for("react.memo_cache_sentinel"),Rf=Symbol.iterator;function ra(t){return t===null||typeof t!="object"?null:(t=Rf&&t[Rf]||t["@@iterator"],typeof t=="function"?t:null)}var wd=Symbol.for("react.client.reference");function Uu(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===wd?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Nl:return"Fragment";case Tu:return"Profiler";case To:return"StrictMode";case Mu:return"Suspense";case Ou:return"SuspenseList";case Du:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case va:return"Portal";case he:return t.displayName||"Context";case Mo:return(t._context.displayName||"Context")+".Consumer";case Tc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Mc:return e=t.displayName||null,e!==null?e:Uu(t.type)||"Memo";case Te:e=t._payload,t=t._init;try{return Uu(t(e))}catch{}}return null}var ba=Array.isArray,A=_o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=qd.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ul={pending:!1,data:null,method:null,action:null},Hu=[],Tl=-1;function ie(t){return{current:t}}function ht(t){0>Tl||(t.current=Hu[Tl],Hu[Tl]=null,Tl--)}function K(t,e){Tl++,Hu[Tl]=t.current,t.current=e}var ne=ie(null),Ba=ie(null),Ge=ie(null),Zn=ie(null);function Vn(t,e){switch(K(Ge,e),K(Ba,t),K(ne,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Qs(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Qs(e),t=$0(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ht(ne),K(ne,t)}function kl(){ht(ne),ht(Ba),ht(Ge)}function Cu(t){t.memoizedState!==null&&K(Zn,t);var e=ne.current,l=$0(e,t.type);e!==l&&(K(Ba,t),K(ne,l))}function kn(t){Ba.current===t&&(ht(ne),ht(Ba)),Zn.current===t&&(ht(Zn),Ja._currentValue=ul)}var wi,Yf;function ll(t){if(wi===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);wi=e&&e[1]||"",Yf=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+wi+t+Yf}var Li=!1;function Zi(t,e){if(!t||Li)return"";Li=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(g){var d=g}Reflect.construct(t,[],p)}else{try{p.call()}catch(g){d=g}t.call(p.prototype)}}else{try{throw Error()}catch(g){d=g}(p=t())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(g){if(g&&d&&typeof g.stack=="string")return[g.stack,d.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),u=i[0],f=i[1];if(u&&f){var s=u.split(`
`),r=f.split(`
`);for(n=a=0;a<s.length&&!s[a].includes("DetermineComponentFrameRoot");)a++;for(;n<r.length&&!r[n].includes("DetermineComponentFrameRoot");)n++;if(a===s.length||n===r.length)for(a=s.length-1,n=r.length-1;1<=a&&0<=n&&s[a]!==r[n];)n--;for(;1<=a&&0<=n;a--,n--)if(s[a]!==r[n]){if(a!==1||n!==1)do if(a--,n--,0>n||s[a]!==r[n]){var y=`
`+s[a].replace(" at new "," at ");return t.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",t.displayName)),y}while(1<=a&&0<=n);break}}}finally{Li=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?ll(l):""}function Ld(t,e){switch(t.tag){case 26:case 27:case 5:return ll(t.type);case 16:return ll("Lazy");case 13:return t.child!==e&&e!==null?ll("Suspense Fallback"):ll("Suspense");case 19:return ll("SuspenseList");case 0:case 15:return Zi(t.type,!1);case 11:return Zi(t.type.render,!1);case 1:return Zi(t.type,!0);case 31:return ll("Activity");default:return""}}function Bf(t){try{var e="",l=null;do e+=Ld(t,l),l=t,t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Ru=Object.prototype.hasOwnProperty,Oc=ot.unstable_scheduleCallback,Vi=ot.unstable_cancelCallback,Zd=ot.unstable_shouldYield,Vd=ot.unstable_requestPaint,Ct=ot.unstable_now,kd=ot.unstable_getCurrentPriorityLevel,Oo=ot.unstable_ImmediatePriority,Do=ot.unstable_UserBlockingPriority,Kn=ot.unstable_NormalPriority,Kd=ot.unstable_LowPriority,Uo=ot.unstable_IdlePriority,Jd=ot.log,$d=ot.unstable_setDisableYieldValue,Ia=null,Rt=null;function Ce(t){if(typeof Jd=="function"&&$d(t),Rt&&typeof Rt.setStrictMode=="function")try{Rt.setStrictMode(Ia,t)}catch{}}var Yt=Math.clz32?Math.clz32:Id,Wd=Math.log,Fd=Math.LN2;function Id(t){return t>>>=0,t===0?32:31-(Wd(t)/Fd|0)|0}var gn=256,yn=262144,pn=4194304;function al(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _i(t,e,l){var a=t.pendingLanes;if(a===0)return 0;var n=0,i=t.suspendedLanes,u=t.pingedLanes;t=t.warmLanes;var f=a&134217727;return f!==0?(a=f&~i,a!==0?n=al(a):(u&=f,u!==0?n=al(u):l||(l=f&~t,l!==0&&(n=al(l))))):(f=a&~i,f!==0?n=al(f):u!==0?n=al(u):l||(l=a&~t,l!==0&&(n=al(l)))),n===0?0:e!==0&&e!==n&&!(e&i)&&(i=n&-n,l=e&-e,i>=l||i===32&&(l&4194048)!==0)?e:n}function Pa(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Pd(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ho(){var t=pn;return pn<<=1,!(pn&62914560)&&(pn=4194304),t}function ki(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function tn(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function tm(t,e,l,a,n,i){var u=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var f=t.entanglements,s=t.expirationTimes,r=t.hiddenUpdates;for(l=u&~l;0<l;){var y=31-Yt(l),p=1<<y;f[y]=0,s[y]=-1;var d=r[y];if(d!==null)for(r[y]=null,y=0;y<d.length;y++){var g=d[y];g!==null&&(g.lane&=-536870913)}l&=~p}a!==0&&Co(t,a,0),i!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=i&~(u&~e))}function Co(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-Yt(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|l&261930}function Ro(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var a=31-Yt(l),n=1<<a;n&e|t[a]&e&&(t[a]|=e),l&=~n}}function Yo(t,e){var l=e&-e;return l=l&42?1:Dc(l),l&(t.suspendedLanes|e)?0:l}function Dc(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Uc(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function Bo(){var t=X.p;return t!==0?t:(t=window.event,t===void 0?32:ud(t.type))}function qf(t,e){var l=X.p;try{return X.p=t,e()}finally{X.p=l}}var Ie=Math.random().toString(36).slice(2),yt="__reactFiber$"+Ie,Tt="__reactProps$"+Ie,na="__reactContainer$"+Ie,Yu="__reactEvents$"+Ie,em="__reactListeners$"+Ie,lm="__reactHandles$"+Ie,Gf="__reactResources$"+Ie,en="__reactMarker$"+Ie;function Hc(t){delete t[yt],delete t[Tt],delete t[Yu],delete t[em],delete t[lm]}function Ml(t){var e=t[yt];if(e)return e;for(var l=t.parentNode;l;){if(e=l[na]||l[yt]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=ks(t);t!==null;){if(l=t[yt])return l;t=ks(t)}return e}t=l,l=t.parentNode}return null}function ia(t){if(t=t[yt]||t[na]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function xa(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(b(33))}function Gl(t){var e=t[Gf];return e||(e=t[Gf]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function mt(t){t[en]=!0}var qo=new Set,Go={};function pl(t,e){Kl(t,e),Kl(t+"Capture",e)}function Kl(t,e){for(Go[t]=e,t=0;t<e.length;t++)qo.add(e[t])}var am=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xf={},Qf={};function nm(t){return Ru.call(Qf,t)?!0:Ru.call(Xf,t)?!1:am.test(t)?Qf[t]=!0:(Xf[t]=!0,!1)}function Mn(t,e,l){if(nm(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function vn(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function ce(t,e,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+a)}}function wt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Xo(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function im(t,e,l){var a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(u){l=""+u,i.call(this,u)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(u){l=""+u},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Bu(t){if(!t._valueTracker){var e=Xo(t)?"checked":"value";t._valueTracker=im(t,e,""+t[e])}}function Qo(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),a="";return t&&(a=Xo(t)?t.checked?"true":"false":t.value),t=a,t!==l?(e.setValue(t),!0):!1}function Jn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var um=/[\n"\\]/g;function Vt(t){return t.replace(um,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function qu(t,e,l,a,n,i,u,f){t.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.type=u:t.removeAttribute("type"),e!=null?u==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+wt(e)):t.value!==""+wt(e)&&(t.value=""+wt(e)):u!=="submit"&&u!=="reset"||t.removeAttribute("value"),e!=null?Gu(t,u,wt(e)):l!=null?Gu(t,u,wt(l)):a!=null&&t.removeAttribute("value"),n==null&&i!=null&&(t.defaultChecked=!!i),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?t.name=""+wt(f):t.removeAttribute("name")}function wo(t,e,l,a,n,i,u,f){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||e!=null)){Bu(t);return}l=l!=null?""+wt(l):"",e=e!=null?""+wt(e):l,f||e===t.value||(t.value=e),t.defaultValue=e}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=f?t.checked:!!a,t.defaultChecked=!!a,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.name=u),Bu(t)}function Gu(t,e,l){e==="number"&&Jn(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function Xl(t,e,l,a){if(t=t.options,e){e={};for(var n=0;n<l.length;n++)e["$"+l[n]]=!0;for(l=0;l<t.length;l++)n=e.hasOwnProperty("$"+t[l].value),t[l].selected!==n&&(t[l].selected=n),n&&a&&(t[l].defaultSelected=!0)}else{for(l=""+wt(l),e=null,n=0;n<t.length;n++){if(t[n].value===l){t[n].selected=!0,a&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function Lo(t,e,l){if(e!=null&&(e=""+wt(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+wt(l):""}function Zo(t,e,l,a){if(e==null){if(a!=null){if(l!=null)throw Error(b(92));if(ba(a)){if(1<a.length)throw Error(b(93));a=a[0]}l=a}l==null&&(l=""),e=l}l=wt(e),t.defaultValue=l,a=t.textContent,a===l&&a!==""&&a!==null&&(t.value=a),Bu(t)}function Jl(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var cm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wf(t,e,l){var a=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,l):typeof l!="number"||l===0||cm.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function Vo(t,e,l){if(e!=null&&typeof e!="object")throw Error(b(62));if(t=t.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var n in e)a=e[n],e.hasOwnProperty(n)&&l[n]!==a&&wf(t,n,a)}else for(var i in e)e.hasOwnProperty(i)&&wf(t,i,e[i])}function Cc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),sm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function On(t){return sm.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ge(){}var Xu=null;function Rc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ol=null,Ql=null;function Lf(t){var e=ia(t);if(e&&(t=e.stateNode)){var l=t[Tt]||null;t:switch(t=e.stateNode,e.type){case"input":if(qu(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Vt(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var a=l[e];if(a!==t&&a.form===t.form){var n=a[Tt]||null;if(!n)throw Error(b(90));qu(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<l.length;e++)a=l[e],a.form===t.form&&Qo(a)}break t;case"textarea":Lo(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&Xl(t,!!l.multiple,e,!1)}}}var Ki=!1;function ko(t,e,l){if(Ki)return t(e,l);Ki=!0;try{var a=t(e);return a}finally{if(Ki=!1,(Ol!==null||Ql!==null)&&(Ri(),Ol&&(e=Ol,t=Ql,Ql=Ol=null,Lf(e),t)))for(e=0;e<t.length;e++)Lf(t[e])}}function qa(t,e){var l=t.stateNode;if(l===null)return null;var a=l[Tt]||null;if(a===null)return null;l=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(b(231,e,typeof l));return l}var xe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qu=!1;if(xe)try{var da={};Object.defineProperty(da,"passive",{get:function(){Qu=!0}}),window.addEventListener("test",da,da),window.removeEventListener("test",da,da)}catch{Qu=!1}var Re=null,Yc=null,Dn=null;function Ko(){if(Dn)return Dn;var t,e=Yc,l=e.length,a,n="value"in Re?Re.value:Re.textContent,i=n.length;for(t=0;t<l&&e[t]===n[t];t++);var u=l-t;for(a=1;a<=u&&e[l-a]===n[i-a];a++);return Dn=n.slice(t,1<a?1-a:void 0)}function Un(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function bn(){return!0}function Zf(){return!1}function Mt(t){function e(l,a,n,i,u){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var f in t)t.hasOwnProperty(f)&&(l=t[f],this[f]=l?l(i):i[f]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?bn:Zf,this.isPropagationStopped=Zf,this}return I(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=bn)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=bn)},persist:function(){},isPersistent:bn}),e}var vl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ji=Mt(vl),ln=I({},vl,{view:0,detail:0}),om=Mt(ln),Ji,$i,ma,Ai=I({},ln,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ma&&(ma&&t.type==="mousemove"?(Ji=t.screenX-ma.screenX,$i=t.screenY-ma.screenY):$i=Ji=0,ma=t),Ji)},movementY:function(t){return"movementY"in t?t.movementY:$i}}),Vf=Mt(Ai),rm=I({},Ai,{dataTransfer:0}),dm=Mt(rm),mm=I({},ln,{relatedTarget:0}),Wi=Mt(mm),hm=I({},vl,{animationName:0,elapsedTime:0,pseudoElement:0}),gm=Mt(hm),ym=I({},vl,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),pm=Mt(ym),vm=I({},vl,{data:0}),kf=Mt(vm),bm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zm(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Sm[t])?!!e[t]:!1}function Bc(){return zm}var _m=I({},ln,{key:function(t){if(t.key){var e=bm[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Un(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?xm[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bc,charCode:function(t){return t.type==="keypress"?Un(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Un(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),jm=Mt(_m),Am=I({},Ai,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kf=Mt(Am),Em=I({},ln,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bc}),Nm=Mt(Em),Tm=I({},vl,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mm=Mt(Tm),Om=I({},Ai,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Dm=Mt(Om),Um=I({},vl,{newState:0,oldState:0}),Hm=Mt(Um),Cm=[9,13,27,32],qc=xe&&"CompositionEvent"in window,ja=null;xe&&"documentMode"in document&&(ja=document.documentMode);var Rm=xe&&"TextEvent"in window&&!ja,Jo=xe&&(!qc||ja&&8<ja&&11>=ja),Jf=" ",$f=!1;function $o(t,e){switch(t){case"keyup":return Cm.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wo(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Dl=!1;function Ym(t,e){switch(t){case"compositionend":return Wo(e);case"keypress":return e.which!==32?null:($f=!0,Jf);case"textInput":return t=e.data,t===Jf&&$f?null:t;default:return null}}function Bm(t,e){if(Dl)return t==="compositionend"||!qc&&$o(t,e)?(t=Ko(),Dn=Yc=Re=null,Dl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Jo&&e.locale!=="ko"?null:e.data;default:return null}}var qm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!qm[t.type]:e==="textarea"}function Fo(t,e,l,a){Ol?Ql?Ql.push(a):Ql=[a]:Ol=a,e=di(e,"onChange"),0<e.length&&(l=new ji("onChange","change",null,l,a),t.push({event:l,listeners:e}))}var Aa=null,Ga=null;function Gm(t){k0(t,0)}function Ei(t){var e=xa(t);if(Qo(e))return t}function Ff(t,e){if(t==="change")return e}var Io=!1;if(xe){var Fi;if(xe){var Ii="oninput"in document;if(!Ii){var If=document.createElement("div");If.setAttribute("oninput","return;"),Ii=typeof If.oninput=="function"}Fi=Ii}else Fi=!1;Io=Fi&&(!document.documentMode||9<document.documentMode)}function Pf(){Aa&&(Aa.detachEvent("onpropertychange",Po),Ga=Aa=null)}function Po(t){if(t.propertyName==="value"&&Ei(Ga)){var e=[];Fo(e,Ga,t,Rc(t)),ko(Gm,e)}}function Xm(t,e,l){t==="focusin"?(Pf(),Aa=e,Ga=l,Aa.attachEvent("onpropertychange",Po)):t==="focusout"&&Pf()}function Qm(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ei(Ga)}function wm(t,e){if(t==="click")return Ei(e)}function Lm(t,e){if(t==="input"||t==="change")return Ei(e)}function Zm(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qt=typeof Object.is=="function"?Object.is:Zm;function Xa(t,e){if(qt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),a=Object.keys(e);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!Ru.call(e,n)||!qt(t[n],e[n]))return!1}return!0}function ts(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function es(t,e){var l=ts(t);t=0;for(var a;l;){if(l.nodeType===3){if(a=t+l.textContent.length,t<=e&&a>=e)return{node:l,offset:e-t};t=a}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=ts(l)}}function tr(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?tr(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function er(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Jn(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=Jn(t.document)}return e}function Gc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Vm=xe&&"documentMode"in document&&11>=document.documentMode,Ul=null,wu=null,Ea=null,Lu=!1;function ls(t,e,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Lu||Ul==null||Ul!==Jn(a)||(a=Ul,"selectionStart"in a&&Gc(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ea&&Xa(Ea,a)||(Ea=a,a=di(wu,"onSelect"),0<a.length&&(e=new ji("onSelect","select",null,e,l),t.push({event:e,listeners:a}),e.target=Ul)))}function el(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var Hl={animationend:el("Animation","AnimationEnd"),animationiteration:el("Animation","AnimationIteration"),animationstart:el("Animation","AnimationStart"),transitionrun:el("Transition","TransitionRun"),transitionstart:el("Transition","TransitionStart"),transitioncancel:el("Transition","TransitionCancel"),transitionend:el("Transition","TransitionEnd")},Pi={},lr={};xe&&(lr=document.createElement("div").style,"AnimationEvent"in window||(delete Hl.animationend.animation,delete Hl.animationiteration.animation,delete Hl.animationstart.animation),"TransitionEvent"in window||delete Hl.transitionend.transition);function bl(t){if(Pi[t])return Pi[t];if(!Hl[t])return t;var e=Hl[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in lr)return Pi[t]=e[l];return t}var ar=bl("animationend"),nr=bl("animationiteration"),ir=bl("animationstart"),km=bl("transitionrun"),Km=bl("transitionstart"),Jm=bl("transitioncancel"),ur=bl("transitionend"),cr=new Map,Zu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Zu.push("scrollEnd");function te(t,e){cr.set(t,e),pl(e,[t])}var $n=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Qt=[],Cl=0,Xc=0;function Ni(){for(var t=Cl,e=Xc=Cl=0;e<t;){var l=Qt[e];Qt[e++]=null;var a=Qt[e];Qt[e++]=null;var n=Qt[e];Qt[e++]=null;var i=Qt[e];if(Qt[e++]=null,a!==null&&n!==null){var u=a.pending;u===null?n.next=n:(n.next=u.next,u.next=n),a.pending=n}i!==0&&fr(l,n,i)}}function Ti(t,e,l,a){Qt[Cl++]=t,Qt[Cl++]=e,Qt[Cl++]=l,Qt[Cl++]=a,Xc|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function Qc(t,e,l,a){return Ti(t,e,l,a),Wn(t)}function xl(t,e){return Ti(t,null,null,e),Wn(t)}function fr(t,e,l){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l);for(var n=!1,i=t.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(n=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,n&&e!==null&&(n=31-Yt(l),t=i.hiddenUpdates,a=t[n],a===null?t[n]=[e]:a.push(e),e.lane=l|536870912),i):null}function Wn(t){if(50<Ra)throw Ra=0,rc=null,Error(b(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Rl={};function $m(t,e,l,a){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ut(t,e,l,a){return new $m(t,e,l,a)}function wc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function pe(t,e){var l=t.alternate;return l===null?(l=Ut(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function sr(t,e){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Hn(t,e,l,a,n,i){var u=0;if(a=t,typeof t=="function")wc(t)&&(u=1);else if(typeof t=="string")u=th(t,l,ne.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Du:return t=Ut(31,l,e,n),t.elementType=Du,t.lanes=i,t;case Nl:return cl(l.children,n,i,e);case To:u=8,n|=24;break;case Tu:return t=Ut(12,l,e,n|2),t.elementType=Tu,t.lanes=i,t;case Mu:return t=Ut(13,l,e,n),t.elementType=Mu,t.lanes=i,t;case Ou:return t=Ut(19,l,e,n),t.elementType=Ou,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case he:u=10;break t;case Mo:u=9;break t;case Tc:u=11;break t;case Mc:u=14;break t;case Te:u=16,a=null;break t}u=29,l=Error(b(130,t===null?"null":typeof t,"")),a=null}return e=Ut(u,l,e,n),e.elementType=t,e.type=a,e.lanes=i,e}function cl(t,e,l,a){return t=Ut(7,t,a,e),t.lanes=l,t}function tu(t,e,l){return t=Ut(6,t,null,e),t.lanes=l,t}function or(t){var e=Ut(18,null,null,0);return e.stateNode=t,e}function eu(t,e,l){return e=Ut(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var as=new WeakMap;function kt(t,e){if(typeof t=="object"&&t!==null){var l=as.get(t);return l!==void 0?l:(e={value:t,source:e,stack:Bf(e)},as.set(t,e),e)}return{value:t,source:e,stack:Bf(e)}}var Yl=[],Bl=0,Fn=null,Qa=0,Lt=[],Zt=0,Je=null,ee=1,le="";function de(t,e){Yl[Bl++]=Qa,Yl[Bl++]=Fn,Fn=t,Qa=e}function rr(t,e,l){Lt[Zt++]=ee,Lt[Zt++]=le,Lt[Zt++]=Je,Je=t;var a=ee;t=le;var n=32-Yt(a)-1;a&=~(1<<n),l+=1;var i=32-Yt(e)+n;if(30<i){var u=n-n%5;i=(a&(1<<u)-1).toString(32),a>>=u,n-=u,ee=1<<32-Yt(e)+n|l<<n|a,le=i+t}else ee=1<<i|l<<n|a,le=t}function Lc(t){t.return!==null&&(de(t,1),rr(t,1,0))}function Zc(t){for(;t===Fn;)Fn=Yl[--Bl],Yl[Bl]=null,Qa=Yl[--Bl],Yl[Bl]=null;for(;t===Je;)Je=Lt[--Zt],Lt[Zt]=null,le=Lt[--Zt],Lt[Zt]=null,ee=Lt[--Zt],Lt[Zt]=null}function dr(t,e){Lt[Zt++]=ee,Lt[Zt++]=le,Lt[Zt++]=Je,ee=e.id,le=e.overflow,Je=t}var pt=null,W=null,B=!1,Xe=null,Kt=!1,Vu=Error(b(519));function $e(t){var e=Error(b(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw wa(kt(e,t)),Vu}function ns(t){var e=t.stateNode,l=t.type,a=t.memoizedProps;switch(e[yt]=t,e[Tt]=a,l){case"dialog":H("cancel",e),H("close",e);break;case"iframe":case"object":case"embed":H("load",e);break;case"video":case"audio":for(l=0;l<ka.length;l++)H(ka[l],e);break;case"source":H("error",e);break;case"img":case"image":case"link":H("error",e),H("load",e);break;case"details":H("toggle",e);break;case"input":H("invalid",e),wo(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":H("invalid",e);break;case"textarea":H("invalid",e),Zo(e,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||a.suppressHydrationWarning===!0||J0(e.textContent,l)?(a.popover!=null&&(H("beforetoggle",e),H("toggle",e)),a.onScroll!=null&&H("scroll",e),a.onScrollEnd!=null&&H("scrollend",e),a.onClick!=null&&(e.onclick=ge),e=!0):e=!1,e||$e(t,!0)}function is(t){for(pt=t.return;pt;)switch(pt.tag){case 5:case 31:case 13:Kt=!1;return;case 27:case 3:Kt=!0;return;default:pt=pt.return}}function zl(t){if(t!==pt)return!1;if(!B)return is(t),B=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||yc(t.type,t.memoizedProps)),l=!l),l&&W&&$e(t),is(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(b(317));W=Vs(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(b(317));W=Vs(t)}else e===27?(e=W,Pe(t.type)?(t=xc,xc=null,W=t):W=e):W=pt?$t(t.stateNode.nextSibling):null;return!0}function rl(){W=pt=null,B=!1}function lu(){var t=Xe;return t!==null&&(Et===null?Et=t:Et.push.apply(Et,t),Xe=null),t}function wa(t){Xe===null?Xe=[t]:Xe.push(t)}var ku=ie(null),Sl=null,ye=null;function Oe(t,e,l){K(ku,e._currentValue),e._currentValue=l}function ve(t){t._currentValue=ku.current,ht(ku)}function Ku(t,e,l){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===l)break;t=t.return}}function Ju(t,e,l,a){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;t:for(;i!==null;){var f=i;i=n;for(var s=0;s<e.length;s++)if(f.context===e[s]){i.lanes|=l,f=i.alternate,f!==null&&(f.lanes|=l),Ku(i.return,l,t),a||(u=null);break t}i=f.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(b(341));u.lanes|=l,i=u.alternate,i!==null&&(i.lanes|=l),Ku(u,l,t),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===t){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function ua(t,e,l,a){t=null;for(var n=e,i=!1;n!==null;){if(!i){if(n.flags&524288)i=!0;else if(n.flags&262144)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(b(387));if(u=u.memoizedProps,u!==null){var f=n.type;qt(n.pendingProps.value,u.value)||(t!==null?t.push(f):t=[f])}}else if(n===Zn.current){if(u=n.alternate,u===null)throw Error(b(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(Ja):t=[Ja])}n=n.return}t!==null&&Ju(e,t,l,a),e.flags|=262144}function In(t){for(t=t.firstContext;t!==null;){if(!qt(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function dl(t){Sl=t,ye=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function vt(t){return mr(Sl,t)}function xn(t,e){return Sl===null&&dl(t),mr(t,e)}function mr(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},ye===null){if(t===null)throw Error(b(308));ye=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else ye=ye.next=e;return l}var Wm=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},Fm=ot.unstable_scheduleCallback,Im=ot.unstable_NormalPriority,ct={$$typeof:he,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Vc(){return{controller:new Wm,data:new Map,refCount:0}}function an(t){t.refCount--,t.refCount===0&&Fm(Im,function(){t.controller.abort()})}var Na=null,$u=0,$l=0,wl=null;function Pm(t,e){if(Na===null){var l=Na=[];$u=0,$l=pf(),wl={status:"pending",value:void 0,then:function(a){l.push(a)}}}return $u++,e.then(us,us),e}function us(){if(--$u===0&&Na!==null){wl!==null&&(wl.status="fulfilled");var t=Na;Na=null,$l=0,wl=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function t1(t,e){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var n=0;n<l.length;n++)(0,l[n])(e)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var cs=A.S;A.S=function(t,e){N0=Ct(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Pm(t,e),cs!==null&&cs(t,e)};var fl=ie(null);function kc(){var t=fl.current;return t!==null?t:k.pooledCache}function Cn(t,e){e===null?K(fl,fl.current):K(fl,e.pool)}function hr(){var t=kc();return t===null?null:{parent:ct._currentValue,pool:t}}var ca=Error(b(460)),Kc=Error(b(474)),Mi=Error(b(542)),Pn={then:function(){}};function fs(t){return t=t.status,t==="fulfilled"||t==="rejected"}function gr(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(ge,ge),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,os(t),t;default:if(typeof e.status=="string")e.then(ge,ge);else{if(t=k,t!==null&&100<t.shellSuspendCounter)throw Error(b(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=a}},function(a){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,os(t),t}throw sl=e,ca}}function nl(t){try{var e=t._init;return e(t._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(sl=l,ca):l}}var sl=null;function ss(){if(sl===null)throw Error(b(459));var t=sl;return sl=null,t}function os(t){if(t===ca||t===Mi)throw Error(b(483))}var Ll=null,La=0;function Sn(t){var e=La;return La+=1,Ll===null&&(Ll=[]),gr(Ll,t,e)}function ha(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function zn(t,e){throw e.$$typeof===Xd?Error(b(525)):(t=Object.prototype.toString.call(e),Error(b(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function yr(t){function e(m,o){if(t){var h=m.deletions;h===null?(m.deletions=[o],m.flags|=16):h.push(o)}}function l(m,o){if(!t)return null;for(;o!==null;)e(m,o),o=o.sibling;return null}function a(m){for(var o=new Map;m!==null;)m.key!==null?o.set(m.key,m):o.set(m.index,m),m=m.sibling;return o}function n(m,o){return m=pe(m,o),m.index=0,m.sibling=null,m}function i(m,o,h){return m.index=h,t?(h=m.alternate,h!==null?(h=h.index,h<o?(m.flags|=67108866,o):h):(m.flags|=67108866,o)):(m.flags|=1048576,o)}function u(m){return t&&m.alternate===null&&(m.flags|=67108866),m}function f(m,o,h,v){return o===null||o.tag!==6?(o=tu(h,m.mode,v),o.return=m,o):(o=n(o,h),o.return=m,o)}function s(m,o,h,v){var j=h.type;return j===Nl?y(m,o,h.props.children,v,h.key):o!==null&&(o.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Te&&nl(j)===o.type)?(o=n(o,h.props),ha(o,h),o.return=m,o):(o=Hn(h.type,h.key,h.props,null,m.mode,v),ha(o,h),o.return=m,o)}function r(m,o,h,v){return o===null||o.tag!==4||o.stateNode.containerInfo!==h.containerInfo||o.stateNode.implementation!==h.implementation?(o=eu(h,m.mode,v),o.return=m,o):(o=n(o,h.children||[]),o.return=m,o)}function y(m,o,h,v,j){return o===null||o.tag!==7?(o=cl(h,m.mode,v,j),o.return=m,o):(o=n(o,h),o.return=m,o)}function p(m,o,h){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return o=tu(""+o,m.mode,h),o.return=m,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case hn:return h=Hn(o.type,o.key,o.props,null,m.mode,h),ha(h,o),h.return=m,h;case va:return o=eu(o,m.mode,h),o.return=m,o;case Te:return o=nl(o),p(m,o,h)}if(ba(o)||ra(o))return o=cl(o,m.mode,h,null),o.return=m,o;if(typeof o.then=="function")return p(m,Sn(o),h);if(o.$$typeof===he)return p(m,xn(m,o),h);zn(m,o)}return null}function d(m,o,h,v){var j=o!==null?o.key:null;if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return j!==null?null:f(m,o,""+h,v);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case hn:return h.key===j?s(m,o,h,v):null;case va:return h.key===j?r(m,o,h,v):null;case Te:return h=nl(h),d(m,o,h,v)}if(ba(h)||ra(h))return j!==null?null:y(m,o,h,v,null);if(typeof h.then=="function")return d(m,o,Sn(h),v);if(h.$$typeof===he)return d(m,o,xn(m,h),v);zn(m,h)}return null}function g(m,o,h,v,j){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return m=m.get(h)||null,f(o,m,""+v,j);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case hn:return m=m.get(v.key===null?h:v.key)||null,s(o,m,v,j);case va:return m=m.get(v.key===null?h:v.key)||null,r(o,m,v,j);case Te:return v=nl(v),g(m,o,h,v,j)}if(ba(v)||ra(v))return m=m.get(h)||null,y(o,m,v,j,null);if(typeof v.then=="function")return g(m,o,h,Sn(v),j);if(v.$$typeof===he)return g(m,o,h,xn(o,v),j);zn(o,v)}return null}function x(m,o,h,v){for(var j=null,M=null,S=o,E=o=0,O=null;S!==null&&E<h.length;E++){S.index>E?(O=S,S=null):O=S.sibling;var Y=d(m,S,h[E],v);if(Y===null){S===null&&(S=O);break}t&&S&&Y.alternate===null&&e(m,S),o=i(Y,o,E),M===null?j=Y:M.sibling=Y,M=Y,S=O}if(E===h.length)return l(m,S),B&&de(m,E),j;if(S===null){for(;E<h.length;E++)S=p(m,h[E],v),S!==null&&(o=i(S,o,E),M===null?j=S:M.sibling=S,M=S);return B&&de(m,E),j}for(S=a(S);E<h.length;E++)O=g(S,m,E,h[E],v),O!==null&&(t&&O.alternate!==null&&S.delete(O.key===null?E:O.key),o=i(O,o,E),M===null?j=O:M.sibling=O,M=O);return t&&S.forEach(function(Xt){return e(m,Xt)}),B&&de(m,E),j}function _(m,o,h,v){if(h==null)throw Error(b(151));for(var j=null,M=null,S=o,E=o=0,O=null,Y=h.next();S!==null&&!Y.done;E++,Y=h.next()){S.index>E?(O=S,S=null):O=S.sibling;var Xt=d(m,S,Y.value,v);if(Xt===null){S===null&&(S=O);break}t&&S&&Xt.alternate===null&&e(m,S),o=i(Xt,o,E),M===null?j=Xt:M.sibling=Xt,M=Xt,S=O}if(Y.done)return l(m,S),B&&de(m,E),j;if(S===null){for(;!Y.done;E++,Y=h.next())Y=p(m,Y.value,v),Y!==null&&(o=i(Y,o,E),M===null?j=Y:M.sibling=Y,M=Y);return B&&de(m,E),j}for(S=a(S);!Y.done;E++,Y=h.next())Y=g(S,m,E,Y.value,v),Y!==null&&(t&&Y.alternate!==null&&S.delete(Y.key===null?E:Y.key),o=i(Y,o,E),M===null?j=Y:M.sibling=Y,M=Y);return t&&S.forEach(function(Ee){return e(m,Ee)}),B&&de(m,E),j}function q(m,o,h,v){if(typeof h=="object"&&h!==null&&h.type===Nl&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case hn:t:{for(var j=h.key;o!==null;){if(o.key===j){if(j=h.type,j===Nl){if(o.tag===7){l(m,o.sibling),v=n(o,h.props.children),v.return=m,m=v;break t}}else if(o.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Te&&nl(j)===o.type){l(m,o.sibling),v=n(o,h.props),ha(v,h),v.return=m,m=v;break t}l(m,o);break}else e(m,o);o=o.sibling}h.type===Nl?(v=cl(h.props.children,m.mode,v,h.key),v.return=m,m=v):(v=Hn(h.type,h.key,h.props,null,m.mode,v),ha(v,h),v.return=m,m=v)}return u(m);case va:t:{for(j=h.key;o!==null;){if(o.key===j)if(o.tag===4&&o.stateNode.containerInfo===h.containerInfo&&o.stateNode.implementation===h.implementation){l(m,o.sibling),v=n(o,h.children||[]),v.return=m,m=v;break t}else{l(m,o);break}else e(m,o);o=o.sibling}v=eu(h,m.mode,v),v.return=m,m=v}return u(m);case Te:return h=nl(h),q(m,o,h,v)}if(ba(h))return x(m,o,h,v);if(ra(h)){if(j=ra(h),typeof j!="function")throw Error(b(150));return h=j.call(h),_(m,o,h,v)}if(typeof h.then=="function")return q(m,o,Sn(h),v);if(h.$$typeof===he)return q(m,o,xn(m,h),v);zn(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint"?(h=""+h,o!==null&&o.tag===6?(l(m,o.sibling),v=n(o,h),v.return=m,m=v):(l(m,o),v=tu(h,m.mode,v),v.return=m,m=v),u(m)):l(m,o)}return function(m,o,h,v){try{La=0;var j=q(m,o,h,v);return Ll=null,j}catch(S){if(S===ca||S===Mi)throw S;var M=Ut(29,S,null,m.mode);return M.lanes=v,M.return=m,M}finally{}}}var ml=yr(!0),pr=yr(!1),Me=!1;function Jc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wu(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Qe(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function we(t,e,l){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,G&2){var n=a.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),a.pending=e,e=Wn(t),fr(t,null,l),e}return Ti(t,a,e,l),Wn(t)}function Ta(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,Ro(t,l)}}function au(t,e){var l=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var u={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,l=l.next}while(l!==null);i===null?n=i=e:i=i.next=e}else n=i=e;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var Fu=!1;function Ma(){if(Fu){var t=wl;if(t!==null)throw t}}function Oa(t,e,l,a){Fu=!1;var n=t.updateQueue;Me=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,f=n.shared.pending;if(f!==null){n.shared.pending=null;var s=f,r=s.next;s.next=null,u===null?i=r:u.next=r,u=s;var y=t.alternate;y!==null&&(y=y.updateQueue,f=y.lastBaseUpdate,f!==u&&(f===null?y.firstBaseUpdate=r:f.next=r,y.lastBaseUpdate=s))}if(i!==null){var p=n.baseState;u=0,y=r=s=null,f=i;do{var d=f.lane&-536870913,g=d!==f.lane;if(g?(R&d)===d:(a&d)===d){d!==0&&d===$l&&(Fu=!0),y!==null&&(y=y.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});t:{var x=t,_=f;d=e;var q=l;switch(_.tag){case 1:if(x=_.payload,typeof x=="function"){p=x.call(q,p,d);break t}p=x;break t;case 3:x.flags=x.flags&-65537|128;case 0:if(x=_.payload,d=typeof x=="function"?x.call(q,p,d):x,d==null)break t;p=I({},p,d);break t;case 2:Me=!0}}d=f.callback,d!==null&&(t.flags|=64,g&&(t.flags|=8192),g=n.callbacks,g===null?n.callbacks=[d]:g.push(d))}else g={lane:d,tag:f.tag,payload:f.payload,callback:f.callback,next:null},y===null?(r=y=g,s=p):y=y.next=g,u|=d;if(f=f.next,f===null){if(f=n.shared.pending,f===null)break;g=f,f=g.next,g.next=null,n.lastBaseUpdate=g,n.shared.pending=null}}while(!0);y===null&&(s=p),n.baseState=s,n.firstBaseUpdate=r,n.lastBaseUpdate=y,i===null&&(n.shared.lanes=0),Fe|=u,t.lanes=u,t.memoizedState=p}}function vr(t,e){if(typeof t!="function")throw Error(b(191,t));t.call(e)}function br(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)vr(l[t],e)}var Wl=ie(null),ti=ie(0);function rs(t,e){t=je,K(ti,t),K(Wl,e),je=t|e.baseLanes}function Iu(){K(ti,je),K(Wl,Wl.current)}function $c(){je=ti.current,ht(Wl),ht(ti)}var Gt=ie(null),Jt=null;function De(t){var e=t.alternate;K(at,at.current&1),K(Gt,t),Jt===null&&(e===null||Wl.current!==null||e.memoizedState!==null)&&(Jt=t)}function Pu(t){K(at,at.current),K(Gt,t),Jt===null&&(Jt=t)}function xr(t){t.tag===22?(K(at,at.current),K(Gt,t),Jt===null&&(Jt=t)):Ue()}function Ue(){K(at,at.current),K(Gt,Gt.current)}function Dt(t){ht(Gt),Jt===t&&(Jt=null),ht(at)}var at=ie(0);function ei(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||vc(l)||bc(l)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Se=0,T=null,V=null,it=null,li=!1,Zl=!1,hl=!1,ai=0,Za=0,Vl=null,e1=0;function tt(){throw Error(b(321))}function Wc(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!qt(t[l],e[l]))return!1;return!0}function Fc(t,e,l,a,n,i){return Se=i,T=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,A.H=t===null||t.memoizedState===null?Fr:sf,hl=!1,i=l(a,n),hl=!1,Zl&&(i=zr(e,l,a,n)),Sr(t),i}function Sr(t){A.H=Va;var e=V!==null&&V.next!==null;if(Se=0,it=V=T=null,li=!1,Za=0,Vl=null,e)throw Error(b(300));t===null||ft||(t=t.dependencies,t!==null&&In(t)&&(ft=!0))}function zr(t,e,l,a){T=t;var n=0;do{if(Zl&&(Vl=null),Za=0,Zl=!1,25<=n)throw Error(b(301));if(n+=1,it=V=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}A.H=Ir,i=e(l,a)}while(Zl);return i}function l1(){var t=A.H,e=t.useState()[0];return e=typeof e.then=="function"?nn(e):e,t=t.useState()[0],(V!==null?V.memoizedState:null)!==t&&(T.flags|=1024),e}function Ic(){var t=ai!==0;return ai=0,t}function Pc(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function tf(t){if(li){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}li=!1}Se=0,it=V=T=null,Zl=!1,Za=ai=0,Vl=null}function xt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return it===null?T.memoizedState=it=t:it=it.next=t,it}function nt(){if(V===null){var t=T.alternate;t=t!==null?t.memoizedState:null}else t=V.next;var e=it===null?T.memoizedState:it.next;if(e!==null)it=e,V=t;else{if(t===null)throw T.alternate===null?Error(b(467)):Error(b(310));V=t,t={memoizedState:V.memoizedState,baseState:V.baseState,baseQueue:V.baseQueue,queue:V.queue,next:null},it===null?T.memoizedState=it=t:it=it.next=t}return it}function Oi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function nn(t){var e=Za;return Za+=1,Vl===null&&(Vl=[]),t=gr(Vl,t,e),e=T,(it===null?e.memoizedState:it.next)===null&&(e=e.alternate,A.H=e===null||e.memoizedState===null?Fr:sf),t}function Di(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return nn(t);if(t.$$typeof===he)return vt(t)}throw Error(b(438,String(t)))}function ef(t){var e=null,l=T.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var a=T.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=Oi(),T.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),a=0;a<t;a++)l[a]=Qd;return e.index++,l}function ze(t,e){return typeof e=="function"?e(t):e}function Rn(t){var e=nt();return lf(e,V,t)}function lf(t,e,l){var a=t.queue;if(a===null)throw Error(b(311));a.lastRenderedReducer=l;var n=t.baseQueue,i=a.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}e.baseQueue=n=i,a.pending=null}if(i=t.baseState,n===null)t.memoizedState=i;else{e=n.next;var f=u=null,s=null,r=e,y=!1;do{var p=r.lane&-536870913;if(p!==r.lane?(R&p)===p:(Se&p)===p){var d=r.revertLane;if(d===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:r.action,hasEagerState:r.hasEagerState,eagerState:r.eagerState,next:null}),p===$l&&(y=!0);else if((Se&d)===d){r=r.next,d===$l&&(y=!0);continue}else p={lane:0,revertLane:r.revertLane,gesture:null,action:r.action,hasEagerState:r.hasEagerState,eagerState:r.eagerState,next:null},s===null?(f=s=p,u=i):s=s.next=p,T.lanes|=d,Fe|=d;p=r.action,hl&&l(i,p),i=r.hasEagerState?r.eagerState:l(i,p)}else d={lane:p,revertLane:r.revertLane,gesture:r.gesture,action:r.action,hasEagerState:r.hasEagerState,eagerState:r.eagerState,next:null},s===null?(f=s=d,u=i):s=s.next=d,T.lanes|=p,Fe|=p;r=r.next}while(r!==null&&r!==e);if(s===null?u=i:s.next=f,!qt(i,t.memoizedState)&&(ft=!0,y&&(l=wl,l!==null)))throw l;t.memoizedState=i,t.baseState=u,t.baseQueue=s,a.lastRenderedState=i}return n===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function nu(t){var e=nt(),l=e.queue;if(l===null)throw Error(b(311));l.lastRenderedReducer=t;var a=l.dispatch,n=l.pending,i=e.memoizedState;if(n!==null){l.pending=null;var u=n=n.next;do i=t(i,u.action),u=u.next;while(u!==n);qt(i,e.memoizedState)||(ft=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),l.lastRenderedState=i}return[i,a]}function _r(t,e,l){var a=T,n=nt(),i=B;if(i){if(l===void 0)throw Error(b(407));l=l()}else l=e();var u=!qt((V||n).memoizedState,l);if(u&&(n.memoizedState=l,ft=!0),n=n.queue,af(Er.bind(null,a,n,t),[t]),n.getSnapshot!==e||u||it!==null&&it.memoizedState.tag&1){if(a.flags|=2048,Fl(9,{destroy:void 0},Ar.bind(null,a,n,l,e),null),k===null)throw Error(b(349));i||Se&127||jr(a,e,l)}return l}function jr(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=T.updateQueue,e===null?(e=Oi(),T.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function Ar(t,e,l,a){e.value=l,e.getSnapshot=a,Nr(e)&&Tr(t)}function Er(t,e,l){return l(function(){Nr(e)&&Tr(t)})}function Nr(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!qt(t,l)}catch{return!0}}function Tr(t){var e=xl(t,2);e!==null&&Nt(e,t,2)}function tc(t){var e=xt();if(typeof t=="function"){var l=t;if(t=l(),hl){Ce(!0);try{l()}finally{Ce(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ze,lastRenderedState:t},e}function Mr(t,e,l,a){return t.baseState=l,lf(t,V,typeof a=="function"?a:ze)}function a1(t,e,l,a,n){if(Hi(t))throw Error(b(485));if(t=e.action,t!==null){var i={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};A.T!==null?l(!0):i.isTransition=!1,a(i),l=e.pending,l===null?(i.next=e.pending=i,Or(e,i)):(i.next=l.next,e.pending=l.next=i)}}function Or(t,e){var l=e.action,a=e.payload,n=t.state;if(e.isTransition){var i=A.T,u={};A.T=u;try{var f=l(n,a),s=A.S;s!==null&&s(u,f),ds(t,e,f)}catch(r){ec(t,e,r)}finally{i!==null&&u.types!==null&&(i.types=u.types),A.T=i}}else try{i=l(n,a),ds(t,e,i)}catch(r){ec(t,e,r)}}function ds(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){ms(t,e,a)},function(a){return ec(t,e,a)}):ms(t,e,l)}function ms(t,e,l){e.status="fulfilled",e.value=l,Dr(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,Or(t,l)))}function ec(t,e,l){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=l,Dr(e),e=e.next;while(e!==a)}t.action=null}function Dr(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Ur(t,e){return e}function hs(t,e){if(B){var l=k.formState;if(l!==null){t:{var a=T;if(B){if(W){e:{for(var n=W,i=Kt;n.nodeType!==8;){if(!i){n=null;break e}if(n=$t(n.nextSibling),n===null){n=null;break e}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){W=$t(n.nextSibling),a=n.data==="F!";break t}}$e(a)}a=!1}a&&(e=l[0])}}return l=xt(),l.memoizedState=l.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ur,lastRenderedState:e},l.queue=a,l=Jr.bind(null,T,a),a.dispatch=l,a=tc(!1),i=ff.bind(null,T,!1,a.queue),a=xt(),n={state:e,dispatch:null,action:t,pending:null},a.queue=n,l=a1.bind(null,T,n,i,l),n.dispatch=l,a.memoizedState=t,[e,l,!1]}function gs(t){var e=nt();return Hr(e,V,t)}function Hr(t,e,l){if(e=lf(t,e,Ur)[0],t=Rn(ze)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=nn(e)}catch(u){throw u===ca?Mi:u}else a=e;e=nt();var n=e.queue,i=n.dispatch;return l!==e.memoizedState&&(T.flags|=2048,Fl(9,{destroy:void 0},n1.bind(null,n,l),null)),[a,i,t]}function n1(t,e){t.action=e}function ys(t){var e=nt(),l=V;if(l!==null)return Hr(e,l,t);nt(),e=e.memoizedState,l=nt();var a=l.queue.dispatch;return l.memoizedState=t,[e,a,!1]}function Fl(t,e,l,a){return t={tag:t,create:l,deps:a,inst:e,next:null},e=T.updateQueue,e===null&&(e=Oi(),T.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(a=l.next,l.next=t,t.next=a,e.lastEffect=t),t}function Cr(){return nt().memoizedState}function Yn(t,e,l,a){var n=xt();T.flags|=t,n.memoizedState=Fl(1|e,{destroy:void 0},l,a===void 0?null:a)}function Ui(t,e,l,a){var n=nt();a=a===void 0?null:a;var i=n.memoizedState.inst;V!==null&&a!==null&&Wc(a,V.memoizedState.deps)?n.memoizedState=Fl(e,i,l,a):(T.flags|=t,n.memoizedState=Fl(1|e,i,l,a))}function ps(t,e){Yn(8390656,8,t,e)}function af(t,e){Ui(2048,8,t,e)}function i1(t){T.flags|=4;var e=T.updateQueue;if(e===null)e=Oi(),T.updateQueue=e,e.events=[t];else{var l=e.events;l===null?e.events=[t]:l.push(t)}}function Rr(t){var e=nt().memoizedState;return i1({ref:e,nextImpl:t}),function(){if(G&2)throw Error(b(440));return e.impl.apply(void 0,arguments)}}function Yr(t,e){return Ui(4,2,t,e)}function Br(t,e){return Ui(4,4,t,e)}function qr(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Gr(t,e,l){l=l!=null?l.concat([t]):null,Ui(4,4,qr.bind(null,e,t),l)}function nf(){}function Xr(t,e){var l=nt();e=e===void 0?null:e;var a=l.memoizedState;return e!==null&&Wc(e,a[1])?a[0]:(l.memoizedState=[t,e],t)}function Qr(t,e){var l=nt();e=e===void 0?null:e;var a=l.memoizedState;if(e!==null&&Wc(e,a[1]))return a[0];if(a=t(),hl){Ce(!0);try{t()}finally{Ce(!1)}}return l.memoizedState=[a,e],a}function uf(t,e,l){return l===void 0||Se&1073741824&&!(R&261930)?t.memoizedState=e:(t.memoizedState=l,t=M0(),T.lanes|=t,Fe|=t,l)}function wr(t,e,l,a){return qt(l,e)?l:Wl.current!==null?(t=uf(t,l,a),qt(t,e)||(ft=!0),t):!(Se&42)||Se&1073741824&&!(R&261930)?(ft=!0,t.memoizedState=l):(t=M0(),T.lanes|=t,Fe|=t,e)}function Lr(t,e,l,a,n){var i=X.p;X.p=i!==0&&8>i?i:8;var u=A.T,f={};A.T=f,ff(t,!1,e,l);try{var s=n(),r=A.S;if(r!==null&&r(f,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var y=t1(s,a);Da(t,e,y,Bt(t))}else Da(t,e,a,Bt(t))}catch(p){Da(t,e,{then:function(){},status:"rejected",reason:p},Bt())}finally{X.p=i,u!==null&&f.types!==null&&(u.types=f.types),A.T=u}}function u1(){}function lc(t,e,l,a){if(t.tag!==5)throw Error(b(476));var n=Zr(t).queue;Lr(t,n,e,ul,l===null?u1:function(){return Vr(t),l(a)})}function Zr(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:ul,baseState:ul,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ze,lastRenderedState:ul},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ze,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Vr(t){var e=Zr(t);e.next===null&&(e=t.alternate.memoizedState),Da(t,e.next.queue,{},Bt())}function cf(){return vt(Ja)}function kr(){return nt().memoizedState}function Kr(){return nt().memoizedState}function c1(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=Bt();t=Qe(l);var a=we(e,t,l);a!==null&&(Nt(a,e,l),Ta(a,e,l)),e={cache:Vc()},t.payload=e;return}e=e.return}}function f1(t,e,l){var a=Bt();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Hi(t)?$r(e,l):(l=Qc(t,e,l,a),l!==null&&(Nt(l,t,a),Wr(l,e,a)))}function Jr(t,e,l){var a=Bt();Da(t,e,l,a)}function Da(t,e,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(Hi(t))$r(e,n);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var u=e.lastRenderedState,f=i(u,l);if(n.hasEagerState=!0,n.eagerState=f,qt(f,u))return Ti(t,e,n,0),k===null&&Ni(),!1}catch{}finally{}if(l=Qc(t,e,n,a),l!==null)return Nt(l,t,a),Wr(l,e,a),!0}return!1}function ff(t,e,l,a){if(a={lane:2,revertLane:pf(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Hi(t)){if(e)throw Error(b(479))}else e=Qc(t,l,a,2),e!==null&&Nt(e,t,2)}function Hi(t){var e=t.alternate;return t===T||e!==null&&e===T}function $r(t,e){Zl=li=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function Wr(t,e,l){if(l&4194048){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,Ro(t,l)}}var Va={readContext:vt,use:Di,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useLayoutEffect:tt,useInsertionEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useSyncExternalStore:tt,useId:tt,useHostTransitionStatus:tt,useFormState:tt,useActionState:tt,useOptimistic:tt,useMemoCache:tt,useCacheRefresh:tt};Va.useEffectEvent=tt;var Fr={readContext:vt,use:Di,useCallback:function(t,e){return xt().memoizedState=[t,e===void 0?null:e],t},useContext:vt,useEffect:ps,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,Yn(4194308,4,qr.bind(null,e,t),l)},useLayoutEffect:function(t,e){return Yn(4194308,4,t,e)},useInsertionEffect:function(t,e){Yn(4,2,t,e)},useMemo:function(t,e){var l=xt();e=e===void 0?null:e;var a=t();if(hl){Ce(!0);try{t()}finally{Ce(!1)}}return l.memoizedState=[a,e],a},useReducer:function(t,e,l){var a=xt();if(l!==void 0){var n=l(e);if(hl){Ce(!0);try{l(e)}finally{Ce(!1)}}}else n=e;return a.memoizedState=a.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},a.queue=t,t=t.dispatch=f1.bind(null,T,t),[a.memoizedState,t]},useRef:function(t){var e=xt();return t={current:t},e.memoizedState=t},useState:function(t){t=tc(t);var e=t.queue,l=Jr.bind(null,T,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:nf,useDeferredValue:function(t,e){var l=xt();return uf(l,t,e)},useTransition:function(){var t=tc(!1);return t=Lr.bind(null,T,t.queue,!0,!1),xt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var a=T,n=xt();if(B){if(l===void 0)throw Error(b(407));l=l()}else{if(l=e(),k===null)throw Error(b(349));R&127||jr(a,e,l)}n.memoizedState=l;var i={value:l,getSnapshot:e};return n.queue=i,ps(Er.bind(null,a,i,t),[t]),a.flags|=2048,Fl(9,{destroy:void 0},Ar.bind(null,a,i,l,e),null),l},useId:function(){var t=xt(),e=k.identifierPrefix;if(B){var l=le,a=ee;l=(a&~(1<<32-Yt(a)-1)).toString(32)+l,e="_"+e+"R_"+l,l=ai++,0<l&&(e+="H"+l.toString(32)),e+="_"}else l=e1++,e="_"+e+"r_"+l.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:cf,useFormState:hs,useActionState:hs,useOptimistic:function(t){var e=xt();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=ff.bind(null,T,!0,l),l.dispatch=e,[t,e]},useMemoCache:ef,useCacheRefresh:function(){return xt().memoizedState=c1.bind(null,T)},useEffectEvent:function(t){var e=xt(),l={impl:t};return e.memoizedState=l,function(){if(G&2)throw Error(b(440));return l.impl.apply(void 0,arguments)}}},sf={readContext:vt,use:Di,useCallback:Xr,useContext:vt,useEffect:af,useImperativeHandle:Gr,useInsertionEffect:Yr,useLayoutEffect:Br,useMemo:Qr,useReducer:Rn,useRef:Cr,useState:function(){return Rn(ze)},useDebugValue:nf,useDeferredValue:function(t,e){var l=nt();return wr(l,V.memoizedState,t,e)},useTransition:function(){var t=Rn(ze)[0],e=nt().memoizedState;return[typeof t=="boolean"?t:nn(t),e]},useSyncExternalStore:_r,useId:kr,useHostTransitionStatus:cf,useFormState:gs,useActionState:gs,useOptimistic:function(t,e){var l=nt();return Mr(l,V,t,e)},useMemoCache:ef,useCacheRefresh:Kr};sf.useEffectEvent=Rr;var Ir={readContext:vt,use:Di,useCallback:Xr,useContext:vt,useEffect:af,useImperativeHandle:Gr,useInsertionEffect:Yr,useLayoutEffect:Br,useMemo:Qr,useReducer:nu,useRef:Cr,useState:function(){return nu(ze)},useDebugValue:nf,useDeferredValue:function(t,e){var l=nt();return V===null?uf(l,t,e):wr(l,V.memoizedState,t,e)},useTransition:function(){var t=nu(ze)[0],e=nt().memoizedState;return[typeof t=="boolean"?t:nn(t),e]},useSyncExternalStore:_r,useId:kr,useHostTransitionStatus:cf,useFormState:ys,useActionState:ys,useOptimistic:function(t,e){var l=nt();return V!==null?Mr(l,V,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:ef,useCacheRefresh:Kr};Ir.useEffectEvent=Rr;function iu(t,e,l,a){e=t.memoizedState,l=l(a,e),l=l==null?e:I({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var ac={enqueueSetState:function(t,e,l){t=t._reactInternals;var a=Bt(),n=Qe(a);n.payload=e,l!=null&&(n.callback=l),e=we(t,n,a),e!==null&&(Nt(e,t,a),Ta(e,t,a))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var a=Bt(),n=Qe(a);n.tag=1,n.payload=e,l!=null&&(n.callback=l),e=we(t,n,a),e!==null&&(Nt(e,t,a),Ta(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=Bt(),a=Qe(l);a.tag=2,e!=null&&(a.callback=e),e=we(t,a,l),e!==null&&(Nt(e,t,l),Ta(e,t,l))}};function vs(t,e,l,a,n,i,u){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,i,u):e.prototype&&e.prototype.isPureReactComponent?!Xa(l,a)||!Xa(n,i):!0}function bs(t,e,l,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,a),e.state!==t&&ac.enqueueReplaceState(e,e.state,null)}function gl(t,e){var l=e;if("ref"in e){l={};for(var a in e)a!=="ref"&&(l[a]=e[a])}if(t=t.defaultProps){l===e&&(l=I({},l));for(var n in t)l[n]===void 0&&(l[n]=t[n])}return l}function Pr(t){$n(t)}function t0(t){console.error(t)}function e0(t){$n(t)}function ni(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function xs(t,e,l){try{var a=t.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function nc(t,e,l){return l=Qe(l),l.tag=3,l.payload={element:null},l.callback=function(){ni(t,e)},l}function l0(t){return t=Qe(t),t.tag=3,t}function a0(t,e,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;t.payload=function(){return n(i)},t.callback=function(){xs(e,l,a)}}var u=l.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(t.callback=function(){xs(e,l,a),typeof n!="function"&&(Le===null?Le=new Set([this]):Le.add(this));var f=a.stack;this.componentDidCatch(a.value,{componentStack:f!==null?f:""})})}function s1(t,e,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=l.alternate,e!==null&&ua(e,l,n,!0),l=Gt.current,l!==null){switch(l.tag){case 31:case 13:return Jt===null?si():l.alternate===null&&et===0&&(et=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===Pn?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([a]):e.add(a),yu(t,a,n)),!1;case 22:return l.flags|=65536,a===Pn?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([a]):l.add(a)),yu(t,a,n)),!1}throw Error(b(435,l.tag))}return yu(t,a,n),si(),!1}if(B)return e=Gt.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=n,a!==Vu&&(t=Error(b(422),{cause:a}),wa(kt(t,l)))):(a!==Vu&&(e=Error(b(423),{cause:a}),wa(kt(e,l))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,a=kt(a,l),n=nc(t.stateNode,a,n),au(t,n),et!==4&&(et=2)),!1;var i=Error(b(520),{cause:a});if(i=kt(i,l),Ca===null?Ca=[i]:Ca.push(i),et!==4&&(et=2),e===null)return!0;a=kt(a,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=n&-n,l.lanes|=t,t=nc(l.stateNode,a,t),au(l,t),!1;case 1:if(e=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Le===null||!Le.has(i))))return l.flags|=65536,n&=-n,l.lanes|=n,n=l0(n),a0(n,t,l,a),au(l,n),!1}l=l.return}while(l!==null);return!1}var of=Error(b(461)),ft=!1;function gt(t,e,l,a){e.child=t===null?pr(e,null,l,a):ml(e,t.child,l,a)}function Ss(t,e,l,a,n){l=l.render;var i=e.ref;if("ref"in a){var u={};for(var f in a)f!=="ref"&&(u[f]=a[f])}else u=a;return dl(e),a=Fc(t,e,l,u,i,n),f=Ic(),t!==null&&!ft?(Pc(t,e,n),_e(t,e,n)):(B&&f&&Lc(e),e.flags|=1,gt(t,e,a,n),e.child)}function zs(t,e,l,a,n){if(t===null){var i=l.type;return typeof i=="function"&&!wc(i)&&i.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=i,n0(t,e,i,a,n)):(t=Hn(l.type,null,a,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!rf(t,n)){var u=i.memoizedProps;if(l=l.compare,l=l!==null?l:Xa,l(u,a)&&t.ref===e.ref)return _e(t,e,n)}return e.flags|=1,t=pe(i,a),t.ref=e.ref,t.return=e,e.child=t}function n0(t,e,l,a,n){if(t!==null){var i=t.memoizedProps;if(Xa(i,a)&&t.ref===e.ref)if(ft=!1,e.pendingProps=a=i,rf(t,n))t.flags&131072&&(ft=!0);else return e.lanes=t.lanes,_e(t,e,n)}return ic(t,e,l,a,n)}function i0(t,e,l,a){var n=a.children,i=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if(e.flags&128){if(i=i!==null?i.baseLanes|l:l,t!==null){for(a=e.child=t.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~i}else a=0,e.child=null;return _s(t,e,i,l,a)}if(l&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Cn(e,i!==null?i.cachePool:null),i!==null?rs(e,i):Iu(),xr(e);else return a=e.lanes=536870912,_s(t,e,i!==null?i.baseLanes|l:l,l,a)}else i!==null?(Cn(e,i.cachePool),rs(e,i),Ue(),e.memoizedState=null):(t!==null&&Cn(e,null),Iu(),Ue());return gt(t,e,n,l),e.child}function Sa(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function _s(t,e,l,a,n){var i=kc();return i=i===null?null:{parent:ct._currentValue,pool:i},e.memoizedState={baseLanes:l,cachePool:i},t!==null&&Cn(e,null),Iu(),xr(e),t!==null&&ua(t,e,a,!0),e.childLanes=n,null}function Bn(t,e){return e=ii({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function js(t,e,l){return ml(e,t.child,null,l),t=Bn(e,e.pendingProps),t.flags|=2,Dt(e),e.memoizedState=null,t}function o1(t,e,l){var a=e.pendingProps,n=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(B){if(a.mode==="hidden")return t=Bn(e,a),e.lanes=536870912,Sa(null,t);if(Pu(e),(t=W)?(t=F0(t,Kt),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Je!==null?{id:ee,overflow:le}:null,retryLane:536870912,hydrationErrors:null},l=or(t),l.return=e,e.child=l,pt=e,W=null)):t=null,t===null)throw $e(e);return e.lanes=536870912,null}return Bn(e,a)}var i=t.memoizedState;if(i!==null){var u=i.dehydrated;if(Pu(e),n)if(e.flags&256)e.flags&=-257,e=js(t,e,l);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(b(558));else if(ft||ua(t,e,l,!1),n=(l&t.childLanes)!==0,ft||n){if(a=k,a!==null&&(u=Yo(a,l),u!==0&&u!==i.retryLane))throw i.retryLane=u,xl(t,u),Nt(a,t,u),of;si(),e=js(t,e,l)}else t=i.treeContext,W=$t(u.nextSibling),pt=e,B=!0,Xe=null,Kt=!1,t!==null&&dr(e,t),e=Bn(e,a),e.flags|=4096;return e}return t=pe(t.child,{mode:a.mode,children:a.children}),t.ref=e.ref,e.child=t,t.return=e,t}function qn(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(b(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function ic(t,e,l,a,n){return dl(e),l=Fc(t,e,l,a,void 0,n),a=Ic(),t!==null&&!ft?(Pc(t,e,n),_e(t,e,n)):(B&&a&&Lc(e),e.flags|=1,gt(t,e,l,n),e.child)}function As(t,e,l,a,n,i){return dl(e),e.updateQueue=null,l=zr(e,a,l,n),Sr(t),a=Ic(),t!==null&&!ft?(Pc(t,e,i),_e(t,e,i)):(B&&a&&Lc(e),e.flags|=1,gt(t,e,l,i),e.child)}function Es(t,e,l,a,n){if(dl(e),e.stateNode===null){var i=Rl,u=l.contextType;typeof u=="object"&&u!==null&&(i=vt(u)),i=new l(a,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ac,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=a,i.state=e.memoizedState,i.refs={},Jc(e),u=l.contextType,i.context=typeof u=="object"&&u!==null?vt(u):Rl,i.state=e.memoizedState,u=l.getDerivedStateFromProps,typeof u=="function"&&(iu(e,l,u,a),i.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&ac.enqueueReplaceState(i,i.state,null),Oa(e,a,i,n),Ma(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){i=e.stateNode;var f=e.memoizedProps,s=gl(l,f);i.props=s;var r=i.context,y=l.contextType;u=Rl,typeof y=="object"&&y!==null&&(u=vt(y));var p=l.getDerivedStateFromProps;y=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function",f=e.pendingProps!==f,y||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(f||r!==u)&&bs(e,i,a,u),Me=!1;var d=e.memoizedState;i.state=d,Oa(e,a,i,n),Ma(),r=e.memoizedState,f||d!==r||Me?(typeof p=="function"&&(iu(e,l,p,a),r=e.memoizedState),(s=Me||vs(e,l,s,a,d,r,u))?(y||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=r),i.props=a,i.state=r,i.context=u,a=s):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{i=e.stateNode,Wu(t,e),u=e.memoizedProps,y=gl(l,u),i.props=y,p=e.pendingProps,d=i.context,r=l.contextType,s=Rl,typeof r=="object"&&r!==null&&(s=vt(r)),f=l.getDerivedStateFromProps,(r=typeof f=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==p||d!==s)&&bs(e,i,a,s),Me=!1,d=e.memoizedState,i.state=d,Oa(e,a,i,n),Ma();var g=e.memoizedState;u!==p||d!==g||Me||t!==null&&t.dependencies!==null&&In(t.dependencies)?(typeof f=="function"&&(iu(e,l,f,a),g=e.memoizedState),(y=Me||vs(e,l,y,a,d,g,s)||t!==null&&t.dependencies!==null&&In(t.dependencies))?(r||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,g,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,g,s)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=g),i.props=a,i.state=g,i.context=s,a=y):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),a=!1)}return i=a,qn(t,e),a=(e.flags&128)!==0,i||a?(i=e.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&a?(e.child=ml(e,t.child,null,n),e.child=ml(e,null,l,n)):gt(t,e,l,n),e.memoizedState=i.state,t=e.child):t=_e(t,e,n),t}function Ns(t,e,l,a){return rl(),e.flags|=256,gt(t,e,l,a),e.child}var uu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function cu(t){return{baseLanes:t,cachePool:hr()}}function fu(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=Ht),t}function u0(t,e,l){var a=e.pendingProps,n=!1,i=(e.flags&128)!==0,u;if((u=i)||(u=t!==null&&t.memoizedState===null?!1:(at.current&2)!==0),u&&(n=!0,e.flags&=-129),u=(e.flags&32)!==0,e.flags&=-33,t===null){if(B){if(n?De(e):Ue(),(t=W)?(t=F0(t,Kt),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Je!==null?{id:ee,overflow:le}:null,retryLane:536870912,hydrationErrors:null},l=or(t),l.return=e,e.child=l,pt=e,W=null)):t=null,t===null)throw $e(e);return bc(t)?e.lanes=32:e.lanes=536870912,null}var f=a.children;return a=a.fallback,n?(Ue(),n=e.mode,f=ii({mode:"hidden",children:f},n),a=cl(a,n,l,null),f.return=e,a.return=e,f.sibling=a,e.child=f,a=e.child,a.memoizedState=cu(l),a.childLanes=fu(t,u,l),e.memoizedState=uu,Sa(null,a)):(De(e),uc(e,f))}var s=t.memoizedState;if(s!==null&&(f=s.dehydrated,f!==null)){if(i)e.flags&256?(De(e),e.flags&=-257,e=su(t,e,l)):e.memoizedState!==null?(Ue(),e.child=t.child,e.flags|=128,e=null):(Ue(),f=a.fallback,n=e.mode,a=ii({mode:"visible",children:a.children},n),f=cl(f,n,l,null),f.flags|=2,a.return=e,f.return=e,a.sibling=f,e.child=a,ml(e,t.child,null,l),a=e.child,a.memoizedState=cu(l),a.childLanes=fu(t,u,l),e.memoizedState=uu,e=Sa(null,a));else if(De(e),bc(f)){if(u=f.nextSibling&&f.nextSibling.dataset,u)var r=u.dgst;u=r,a=Error(b(419)),a.stack="",a.digest=u,wa({value:a,source:null,stack:null}),e=su(t,e,l)}else if(ft||ua(t,e,l,!1),u=(l&t.childLanes)!==0,ft||u){if(u=k,u!==null&&(a=Yo(u,l),a!==0&&a!==s.retryLane))throw s.retryLane=a,xl(t,a),Nt(u,t,a),of;vc(f)||si(),e=su(t,e,l)}else vc(f)?(e.flags|=192,e.child=t.child,e=null):(t=s.treeContext,W=$t(f.nextSibling),pt=e,B=!0,Xe=null,Kt=!1,t!==null&&dr(e,t),e=uc(e,a.children),e.flags|=4096);return e}return n?(Ue(),f=a.fallback,n=e.mode,s=t.child,r=s.sibling,a=pe(s,{mode:"hidden",children:a.children}),a.subtreeFlags=s.subtreeFlags&65011712,r!==null?f=pe(r,f):(f=cl(f,n,l,null),f.flags|=2),f.return=e,a.return=e,a.sibling=f,e.child=a,Sa(null,a),a=e.child,f=t.child.memoizedState,f===null?f=cu(l):(n=f.cachePool,n!==null?(s=ct._currentValue,n=n.parent!==s?{parent:s,pool:s}:n):n=hr(),f={baseLanes:f.baseLanes|l,cachePool:n}),a.memoizedState=f,a.childLanes=fu(t,u,l),e.memoizedState=uu,Sa(t.child,a)):(De(e),l=t.child,t=l.sibling,l=pe(l,{mode:"visible",children:a.children}),l.return=e,l.sibling=null,t!==null&&(u=e.deletions,u===null?(e.deletions=[t],e.flags|=16):u.push(t)),e.child=l,e.memoizedState=null,l)}function uc(t,e){return e=ii({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function ii(t,e){return t=Ut(22,t,null,e),t.lanes=0,t}function su(t,e,l){return ml(e,t.child,null,l),t=uc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ts(t,e,l){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),Ku(t.return,e,l)}function ou(t,e,l,a,n,i){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:i}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=l,u.tailMode=n,u.treeForkCount=i)}function c0(t,e,l){var a=e.pendingProps,n=a.revealOrder,i=a.tail;a=a.children;var u=at.current,f=(u&2)!==0;if(f?(u=u&1|2,e.flags|=128):u&=1,K(at,u),gt(t,e,a,l),a=B?Qa:0,!f&&t!==null&&t.flags&128)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ts(t,l,e);else if(t.tag===19)Ts(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"forwards":for(l=e.child,n=null;l!==null;)t=l.alternate,t!==null&&ei(t)===null&&(n=l),l=l.sibling;l=n,l===null?(n=e.child,e.child=null):(n=l.sibling,l.sibling=null),ou(e,!1,n,l,i,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&ei(t)===null){e.child=n;break}t=n.sibling,n.sibling=l,l=n,n=t}ou(e,!0,l,null,i,a);break;case"together":ou(e,!1,null,null,void 0,a);break;default:e.memoizedState=null}return e.child}function _e(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),Fe|=e.lanes,!(l&e.childLanes))if(t!==null){if(ua(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(b(153));if(e.child!==null){for(t=e.child,l=pe(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=pe(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function rf(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&In(t)))}function r1(t,e,l){switch(e.tag){case 3:Vn(e,e.stateNode.containerInfo),Oe(e,ct,t.memoizedState.cache),rl();break;case 27:case 5:Cu(e);break;case 4:Vn(e,e.stateNode.containerInfo);break;case 10:Oe(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Pu(e),null;break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(De(e),e.flags|=128,null):l&e.child.childLanes?u0(t,e,l):(De(e),t=_e(t,e,l),t!==null?t.sibling:null);De(e);break;case 19:var n=(t.flags&128)!==0;if(a=(l&e.childLanes)!==0,a||(ua(t,e,l,!1),a=(l&e.childLanes)!==0),n){if(a)return c0(t,e,l);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),K(at,at.current),a)break;return null;case 22:return e.lanes=0,i0(t,e,l,e.pendingProps);case 24:Oe(e,ct,t.memoizedState.cache)}return _e(t,e,l)}function f0(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)ft=!0;else{if(!rf(t,l)&&!(e.flags&128))return ft=!1,r1(t,e,l);ft=!!(t.flags&131072)}else ft=!1,B&&e.flags&1048576&&rr(e,Qa,e.index);switch(e.lanes=0,e.tag){case 16:t:{var a=e.pendingProps;if(t=nl(e.elementType),e.type=t,typeof t=="function")wc(t)?(a=gl(t,a),e.tag=1,e=Es(null,e,t,a,l)):(e.tag=0,e=ic(null,e,t,a,l));else{if(t!=null){var n=t.$$typeof;if(n===Tc){e.tag=11,e=Ss(null,e,t,a,l);break t}else if(n===Mc){e.tag=14,e=zs(null,e,t,a,l);break t}}throw e=Uu(t)||t,Error(b(306,e,""))}}return e;case 0:return ic(t,e,e.type,e.pendingProps,l);case 1:return a=e.type,n=gl(a,e.pendingProps),Es(t,e,a,n,l);case 3:t:{if(Vn(e,e.stateNode.containerInfo),t===null)throw Error(b(387));a=e.pendingProps;var i=e.memoizedState;n=i.element,Wu(t,e),Oa(e,a,null,l);var u=e.memoizedState;if(a=u.cache,Oe(e,ct,a),a!==i.cache&&Ju(e,[ct],l,!0),Ma(),a=u.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:u.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=Ns(t,e,a,l);break t}else if(a!==n){n=kt(Error(b(424)),e),wa(n),e=Ns(t,e,a,l);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(W=$t(t.firstChild),pt=e,B=!0,Xe=null,Kt=!0,l=pr(e,null,a,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(rl(),a===n){e=_e(t,e,l);break t}gt(t,e,a,l)}e=e.child}return e;case 26:return qn(t,e),t===null?(l=Js(e.type,null,e.pendingProps,null))?e.memoizedState=l:B||(l=e.type,t=e.pendingProps,a=mi(Ge.current).createElement(l),a[yt]=e,a[Tt]=t,bt(a,l,t),mt(a),e.stateNode=a):e.memoizedState=Js(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Cu(e),t===null&&B&&(a=e.stateNode=I0(e.type,e.pendingProps,Ge.current),pt=e,Kt=!0,n=W,Pe(e.type)?(xc=n,W=$t(a.firstChild)):W=n),gt(t,e,e.pendingProps.children,l),qn(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&B&&((n=a=W)&&(a=Q1(a,e.type,e.pendingProps,Kt),a!==null?(e.stateNode=a,pt=e,W=$t(a.firstChild),Kt=!1,n=!0):n=!1),n||$e(e)),Cu(e),n=e.type,i=e.pendingProps,u=t!==null?t.memoizedProps:null,a=i.children,yc(n,i)?a=null:u!==null&&yc(n,u)&&(e.flags|=32),e.memoizedState!==null&&(n=Fc(t,e,l1,null,null,l),Ja._currentValue=n),qn(t,e),gt(t,e,a,l),e.child;case 6:return t===null&&B&&((t=l=W)&&(l=w1(l,e.pendingProps,Kt),l!==null?(e.stateNode=l,pt=e,W=null,t=!0):t=!1),t||$e(e)),null;case 13:return u0(t,e,l);case 4:return Vn(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=ml(e,null,a,l):gt(t,e,a,l),e.child;case 11:return Ss(t,e,e.type,e.pendingProps,l);case 7:return gt(t,e,e.pendingProps,l),e.child;case 8:return gt(t,e,e.pendingProps.children,l),e.child;case 12:return gt(t,e,e.pendingProps.children,l),e.child;case 10:return a=e.pendingProps,Oe(e,e.type,a.value),gt(t,e,a.children,l),e.child;case 9:return n=e.type._context,a=e.pendingProps.children,dl(e),n=vt(n),a=a(n),e.flags|=1,gt(t,e,a,l),e.child;case 14:return zs(t,e,e.type,e.pendingProps,l);case 15:return n0(t,e,e.type,e.pendingProps,l);case 19:return c0(t,e,l);case 31:return o1(t,e,l);case 22:return i0(t,e,l,e.pendingProps);case 24:return dl(e),a=vt(ct),t===null?(n=kc(),n===null&&(n=k,i=Vc(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=l),n=i),e.memoizedState={parent:a,cache:n},Jc(e),Oe(e,ct,n)):(t.lanes&l&&(Wu(t,e),Oa(e,null,null,l),Ma()),n=t.memoizedState,i=e.memoizedState,n.parent!==a?(n={parent:a,cache:a},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),Oe(e,ct,a)):(a=i.cache,Oe(e,ct,a),a!==n.cache&&Ju(e,[ct],l,!0))),gt(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(b(156,e.tag))}function fe(t){t.flags|=4}function ru(t,e,l,a,n){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(U0())t.flags|=8192;else throw sl=Pn,Kc}else t.flags&=-16777217}function Ms(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!ed(e))if(U0())t.flags|=8192;else throw sl=Pn,Kc}function _n(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Ho():536870912,t.lanes|=e,Il|=e)}function ga(t,e){if(!B)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function $(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,a=0;if(e)for(var n=t.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=a,t.childLanes=l,e}function d1(t,e,l){var a=e.pendingProps;switch(Zc(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $(e),null;case 1:return $(e),null;case 3:return l=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),ve(ct),kl(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(zl(e)?fe(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,lu())),$(e),null;case 26:var n=e.type,i=e.memoizedState;return t===null?(fe(e),i!==null?($(e),Ms(e,i)):($(e),ru(e,n,null,a,l))):i?i!==t.memoizedState?(fe(e),$(e),Ms(e,i)):($(e),e.flags&=-16777217):(t=t.memoizedProps,t!==a&&fe(e),$(e),ru(e,n,t,a,l)),null;case 27:if(kn(e),l=Ge.current,n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&fe(e);else{if(!a){if(e.stateNode===null)throw Error(b(166));return $(e),null}t=ne.current,zl(e)?ns(e):(t=I0(n,a,l),e.stateNode=t,fe(e))}return $(e),null;case 5:if(kn(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&fe(e);else{if(!a){if(e.stateNode===null)throw Error(b(166));return $(e),null}if(i=ne.current,zl(e))ns(e);else{var u=mi(Ge.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?u.createElement(n,{is:a.is}):u.createElement(n)}}i[yt]=e,i[Tt]=a;t:for(u=e.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break t;for(;u.sibling===null;){if(u.return===null||u.return===e)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}e.stateNode=i;t:switch(bt(i,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break t;case"img":a=!0;break t;default:a=!1}a&&fe(e)}}return $(e),ru(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,l),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&fe(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(b(166));if(t=Ge.current,zl(e)){if(t=e.stateNode,l=e.memoizedProps,a=null,n=pt,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}t[yt]=e,t=!!(t.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||J0(t.nodeValue,l)),t||$e(e,!0)}else t=mi(t).createTextNode(a),t[yt]=e,e.stateNode=t}return $(e),null;case 31:if(l=e.memoizedState,t===null||t.memoizedState!==null){if(a=zl(e),l!==null){if(t===null){if(!a)throw Error(b(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(b(557));t[yt]=e}else rl(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$(e),t=!1}else l=lu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),t=!0;if(!t)return e.flags&256?(Dt(e),e):(Dt(e),null);if(e.flags&128)throw Error(b(558))}return $(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=zl(e),a!==null&&a.dehydrated!==null){if(t===null){if(!n)throw Error(b(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(b(317));n[yt]=e}else rl(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$(e),n=!1}else n=lu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(Dt(e),e):(Dt(e),null)}return Dt(e),e.flags&128?(e.lanes=l,e):(l=a!==null,t=t!==null&&t.memoizedState!==null,l&&(a=e.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048)),l!==t&&l&&(e.child.flags|=8192),_n(e,e.updateQueue),$(e),null);case 4:return kl(),t===null&&vf(e.stateNode.containerInfo),$(e),null;case 10:return ve(e.type),$(e),null;case 19:if(ht(at),a=e.memoizedState,a===null)return $(e),null;if(n=(e.flags&128)!==0,i=a.rendering,i===null)if(n)ga(a,!1);else{if(et!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(i=ei(t),i!==null){for(e.flags|=128,ga(a,!1),t=i.updateQueue,e.updateQueue=t,_n(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)sr(l,t),l=l.sibling;return K(at,at.current&1|2),B&&de(e,a.treeForkCount),e.child}t=t.sibling}a.tail!==null&&Ct()>ci&&(e.flags|=128,n=!0,ga(a,!1),e.lanes=4194304)}else{if(!n)if(t=ei(i),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,_n(e,t),ga(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!B)return $(e),null}else 2*Ct()-a.renderingStartTime>ci&&l!==536870912&&(e.flags|=128,n=!0,ga(a,!1),e.lanes=4194304);a.isBackwards?(i.sibling=e.child,e.child=i):(t=a.last,t!==null?t.sibling=i:e.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Ct(),t.sibling=null,l=at.current,K(at,n?l&1|2:l&1),B&&de(e,a.treeForkCount),t):($(e),null);case 22:case 23:return Dt(e),$c(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?l&536870912&&!(e.flags&128)&&($(e),e.subtreeFlags&6&&(e.flags|=8192)):$(e),l=e.updateQueue,l!==null&&_n(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==l&&(e.flags|=2048),t!==null&&ht(fl),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),ve(ct),$(e),null;case 25:return null;case 30:return null}throw Error(b(156,e.tag))}function m1(t,e){switch(Zc(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ve(ct),kl(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return kn(e),null;case 31:if(e.memoizedState!==null){if(Dt(e),e.alternate===null)throw Error(b(340));rl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Dt(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(b(340));rl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ht(at),null;case 4:return kl(),null;case 10:return ve(e.type),null;case 22:case 23:return Dt(e),$c(),t!==null&&ht(fl),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return ve(ct),null;case 25:return null;default:return null}}function s0(t,e){switch(Zc(e),e.tag){case 3:ve(ct),kl();break;case 26:case 27:case 5:kn(e);break;case 4:kl();break;case 31:e.memoizedState!==null&&Dt(e);break;case 13:Dt(e);break;case 19:ht(at);break;case 10:ve(e.type);break;case 22:case 23:Dt(e),$c(),t!==null&&ht(fl);break;case 24:ve(ct)}}function un(t,e){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&t)===t){a=void 0;var i=l.create,u=l.inst;a=i(),u.destroy=a}l=l.next}while(l!==n)}}catch(f){L(e,e.return,f)}}function We(t,e,l){try{var a=e.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&t)===t){var u=a.inst,f=u.destroy;if(f!==void 0){u.destroy=void 0,n=e;var s=l,r=f;try{r()}catch(y){L(n,s,y)}}}a=a.next}while(a!==i)}}catch(y){L(e,e.return,y)}}function o0(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{br(e,l)}catch(a){L(t,t.return,a)}}}function r0(t,e,l){l.props=gl(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(a){L(t,e,a)}}function Ua(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof l=="function"?t.refCleanup=l(a):l.current=a}}catch(n){L(t,e,n)}}function ae(t,e){var l=t.ref,a=t.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){L(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){L(t,e,n)}else l.current=null}function d0(t){var e=t.type,l=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break t;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){L(t,t.return,n)}}function du(t,e,l){try{var a=t.stateNode;R1(a,t.type,l,e),a[Tt]=e}catch(n){L(t,t.return,n)}}function m0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Pe(t.type)||t.tag===4}function mu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||m0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Pe(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function cc(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(t),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=ge));else if(a!==4&&(a===27&&Pe(t.type)&&(l=t.stateNode,e=null),t=t.child,t!==null))for(cc(t,e,l),t=t.sibling;t!==null;)cc(t,e,l),t=t.sibling}function ui(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(a!==4&&(a===27&&Pe(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(ui(t,e,l),t=t.sibling;t!==null;)ui(t,e,l),t=t.sibling}function h0(t){var e=t.stateNode,l=t.memoizedProps;try{for(var a=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);bt(e,a,l),e[yt]=t,e[Tt]=l}catch(i){L(t,t.return,i)}}var me=!1,ut=!1,hu=!1,Os=typeof WeakSet=="function"?WeakSet:Set,dt=null;function h1(t,e){if(t=t.containerInfo,hc=pi,t=er(t),Gc(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break t}var u=0,f=-1,s=-1,r=0,y=0,p=t,d=null;e:for(;;){for(var g;p!==l||n!==0&&p.nodeType!==3||(f=u+n),p!==i||a!==0&&p.nodeType!==3||(s=u+a),p.nodeType===3&&(u+=p.nodeValue.length),(g=p.firstChild)!==null;)d=p,p=g;for(;;){if(p===t)break e;if(d===l&&++r===n&&(f=u),d===i&&++y===a&&(s=u),(g=p.nextSibling)!==null)break;p=d,d=p.parentNode}p=g}l=f===-1||s===-1?null:{start:f,end:s}}else l=null}l=l||{start:0,end:0}}else l=null;for(gc={focusedElem:t,selectionRange:l},pi=!1,dt=e;dt!==null;)if(e=dt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,dt=t;else for(;dt!==null;){switch(e=dt,i=e.alternate,t=e.flags,e.tag){case 0:if(t&4&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(l=0;l<t.length;l++)n=t[l],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if(t&1024&&i!==null){t=void 0,l=e,n=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var x=gl(l.type,n);t=a.getSnapshotBeforeUpdate(x,i),a.__reactInternalSnapshotBeforeUpdate=t}catch(_){L(l,l.return,_)}}break;case 3:if(t&1024){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)pc(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":pc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(b(163))}if(t=e.sibling,t!==null){t.return=e.return,dt=t;break}dt=e.return}}function g0(t,e,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:oe(t,l),a&4&&un(5,l);break;case 1:if(oe(t,l),a&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(u){L(l,l.return,u)}else{var n=gl(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(u){L(l,l.return,u)}}a&64&&o0(l),a&512&&Ua(l,l.return);break;case 3:if(oe(t,l),a&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{br(t,e)}catch(u){L(l,l.return,u)}}break;case 27:e===null&&a&4&&h0(l);case 26:case 5:oe(t,l),e===null&&a&4&&d0(l),a&512&&Ua(l,l.return);break;case 12:oe(t,l);break;case 31:oe(t,l),a&4&&v0(t,l);break;case 13:oe(t,l),a&4&&b0(t,l),a&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=_1.bind(null,l),L1(t,l))));break;case 22:if(a=l.memoizedState!==null||me,!a){e=e!==null&&e.memoizedState!==null||ut,n=me;var i=ut;me=a,(ut=e)&&!i?re(t,l,(l.subtreeFlags&8772)!==0):oe(t,l),me=n,ut=i}break;case 30:break;default:oe(t,l)}}function y0(t){var e=t.alternate;e!==null&&(t.alternate=null,y0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Hc(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var P=null,At=!1;function se(t,e,l){for(l=l.child;l!==null;)p0(t,e,l),l=l.sibling}function p0(t,e,l){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(Ia,l)}catch{}switch(l.tag){case 26:ut||ae(l,e),se(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:ut||ae(l,e);var a=P,n=At;Pe(l.type)&&(P=l.stateNode,At=!1),se(t,e,l),Ya(l.stateNode),P=a,At=n;break;case 5:ut||ae(l,e);case 6:if(a=P,n=At,P=null,se(t,e,l),P=a,At=n,P!==null)if(At)try{(P.nodeType===9?P.body:P.nodeName==="HTML"?P.ownerDocument.body:P).removeChild(l.stateNode)}catch(i){L(l,e,i)}else try{P.removeChild(l.stateNode)}catch(i){L(l,e,i)}break;case 18:P!==null&&(At?(t=P,Ls(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),la(t)):Ls(P,l.stateNode));break;case 4:a=P,n=At,P=l.stateNode.containerInfo,At=!0,se(t,e,l),P=a,At=n;break;case 0:case 11:case 14:case 15:We(2,l,e),ut||We(4,l,e),se(t,e,l);break;case 1:ut||(ae(l,e),a=l.stateNode,typeof a.componentWillUnmount=="function"&&r0(l,e,a)),se(t,e,l);break;case 21:se(t,e,l);break;case 22:ut=(a=ut)||l.memoizedState!==null,se(t,e,l),ut=a;break;default:se(t,e,l)}}function v0(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{la(t)}catch(l){L(e,e.return,l)}}}function b0(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{la(t)}catch(l){L(e,e.return,l)}}function g1(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Os),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Os),e;default:throw Error(b(435,t.tag))}}function jn(t,e){var l=g1(t);e.forEach(function(a){if(!l.has(a)){l.add(a);var n=j1.bind(null,t,a);a.then(n,n)}})}function _t(t,e){var l=e.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],i=t,u=e,f=u;t:for(;f!==null;){switch(f.tag){case 27:if(Pe(f.type)){P=f.stateNode,At=!1;break t}break;case 5:P=f.stateNode,At=!1;break t;case 3:case 4:P=f.stateNode.containerInfo,At=!0;break t}f=f.return}if(P===null)throw Error(b(160));p0(i,u,n),P=null,At=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)x0(e,t),e=e.sibling}var It=null;function x0(t,e){var l=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:_t(e,t),jt(t),a&4&&(We(3,t,t.return),un(3,t),We(5,t,t.return));break;case 1:_t(e,t),jt(t),a&512&&(ut||l===null||ae(l,l.return)),a&64&&me&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=It;if(_t(e,t),jt(t),a&512&&(ut||l===null||ae(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=t.memoizedState,l===null)if(a===null)if(t.stateNode===null){t:{a=t.type,l=t.memoizedProps,n=n.ownerDocument||n;e:switch(a){case"title":i=n.getElementsByTagName("title")[0],(!i||i[en]||i[yt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(a),n.head.insertBefore(i,n.querySelector("head > title"))),bt(i,a,l),i[yt]=t,mt(i),a=i;break t;case"link":var u=Ws("link","href",n).get(a+(l.href||""));if(u){for(var f=0;f<u.length;f++)if(i=u[f],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){u.splice(f,1);break e}}i=n.createElement(a),bt(i,a,l),n.head.appendChild(i);break;case"meta":if(u=Ws("meta","content",n).get(a+(l.content||""))){for(f=0;f<u.length;f++)if(i=u[f],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){u.splice(f,1);break e}}i=n.createElement(a),bt(i,a,l),n.head.appendChild(i);break;default:throw Error(b(468,a))}i[yt]=t,mt(i),a=i}t.stateNode=a}else Fs(n,t.type,t.stateNode);else t.stateNode=$s(n,a,t.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?Fs(n,t.type,t.stateNode):$s(n,a,t.memoizedProps)):a===null&&t.stateNode!==null&&du(t,t.memoizedProps,l.memoizedProps)}break;case 27:_t(e,t),jt(t),a&512&&(ut||l===null||ae(l,l.return)),l!==null&&a&4&&du(t,t.memoizedProps,l.memoizedProps);break;case 5:if(_t(e,t),jt(t),a&512&&(ut||l===null||ae(l,l.return)),t.flags&32){n=t.stateNode;try{Jl(n,"")}catch(x){L(t,t.return,x)}}a&4&&t.stateNode!=null&&(n=t.memoizedProps,du(t,n,l!==null?l.memoizedProps:n)),a&1024&&(hu=!0);break;case 6:if(_t(e,t),jt(t),a&4){if(t.stateNode===null)throw Error(b(162));a=t.memoizedProps,l=t.stateNode;try{l.nodeValue=a}catch(x){L(t,t.return,x)}}break;case 3:if(Qn=null,n=It,It=hi(e.containerInfo),_t(e,t),It=n,jt(t),a&4&&l!==null&&l.memoizedState.isDehydrated)try{la(e.containerInfo)}catch(x){L(t,t.return,x)}hu&&(hu=!1,S0(t));break;case 4:a=It,It=hi(t.stateNode.containerInfo),_t(e,t),jt(t),It=a;break;case 12:_t(e,t),jt(t);break;case 31:_t(e,t),jt(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,jn(t,a)));break;case 13:_t(e,t),jt(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Ci=Ct()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,jn(t,a)));break;case 22:n=t.memoizedState!==null;var s=l!==null&&l.memoizedState!==null,r=me,y=ut;if(me=r||n,ut=y||s,_t(e,t),ut=y,me=r,jt(t),a&8192)t:for(e=t.stateNode,e._visibility=n?e._visibility&-2:e._visibility|1,n&&(l===null||s||me||ut||il(t)),l=null,e=t;;){if(e.tag===5||e.tag===26){if(l===null){s=l=e;try{if(i=s.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{f=s.stateNode;var p=s.memoizedProps.style,d=p!=null&&p.hasOwnProperty("display")?p.display:null;f.style.display=d==null||typeof d=="boolean"?"":(""+d).trim()}}catch(x){L(s,s.return,x)}}}else if(e.tag===6){if(l===null){s=e;try{s.stateNode.nodeValue=n?"":s.memoizedProps}catch(x){L(s,s.return,x)}}}else if(e.tag===18){if(l===null){s=e;try{var g=s.stateNode;n?Zs(g,!0):Zs(s.stateNode,!1)}catch(x){L(s,s.return,x)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,jn(t,l))));break;case 19:_t(e,t),jt(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,jn(t,a)));break;case 30:break;case 21:break;default:_t(e,t),jt(t)}}function jt(t){var e=t.flags;if(e&2){try{for(var l,a=t.return;a!==null;){if(m0(a)){l=a;break}a=a.return}if(l==null)throw Error(b(160));switch(l.tag){case 27:var n=l.stateNode,i=mu(t);ui(t,i,n);break;case 5:var u=l.stateNode;l.flags&32&&(Jl(u,""),l.flags&=-33);var f=mu(t);ui(t,f,u);break;case 3:case 4:var s=l.stateNode.containerInfo,r=mu(t);cc(t,r,s);break;default:throw Error(b(161))}}catch(y){L(t,t.return,y)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function S0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;S0(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function oe(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)g0(t,e.alternate,e),e=e.sibling}function il(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:We(4,e,e.return),il(e);break;case 1:ae(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&r0(e,e.return,l),il(e);break;case 27:Ya(e.stateNode);case 26:case 5:ae(e,e.return),il(e);break;case 22:e.memoizedState===null&&il(e);break;case 30:il(e);break;default:il(e)}t=t.sibling}}function re(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,n=t,i=e,u=i.flags;switch(i.tag){case 0:case 11:case 15:re(n,i,l),un(4,i);break;case 1:if(re(n,i,l),a=i,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(r){L(a,a.return,r)}if(a=i,n=a.updateQueue,n!==null){var f=a.stateNode;try{var s=n.shared.hiddenCallbacks;if(s!==null)for(n.shared.hiddenCallbacks=null,n=0;n<s.length;n++)vr(s[n],f)}catch(r){L(a,a.return,r)}}l&&u&64&&o0(i),Ua(i,i.return);break;case 27:h0(i);case 26:case 5:re(n,i,l),l&&a===null&&u&4&&d0(i),Ua(i,i.return);break;case 12:re(n,i,l);break;case 31:re(n,i,l),l&&u&4&&v0(n,i);break;case 13:re(n,i,l),l&&u&4&&b0(n,i);break;case 22:i.memoizedState===null&&re(n,i,l),Ua(i,i.return);break;case 30:break;default:re(n,i,l)}e=e.sibling}}function df(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&an(l))}function mf(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&an(t))}function Ft(t,e,l,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)z0(t,e,l,a),e=e.sibling}function z0(t,e,l,a){var n=e.flags;switch(e.tag){case 0:case 11:case 15:Ft(t,e,l,a),n&2048&&un(9,e);break;case 1:Ft(t,e,l,a);break;case 3:Ft(t,e,l,a),n&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&an(t)));break;case 12:if(n&2048){Ft(t,e,l,a),t=e.stateNode;try{var i=e.memoizedProps,u=i.id,f=i.onPostCommit;typeof f=="function"&&f(u,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(s){L(e,e.return,s)}}else Ft(t,e,l,a);break;case 31:Ft(t,e,l,a);break;case 13:Ft(t,e,l,a);break;case 23:break;case 22:i=e.stateNode,u=e.alternate,e.memoizedState!==null?i._visibility&2?Ft(t,e,l,a):Ha(t,e):i._visibility&2?Ft(t,e,l,a):(i._visibility|=2,Al(t,e,l,a,(e.subtreeFlags&10256)!==0||!1)),n&2048&&df(u,e);break;case 24:Ft(t,e,l,a),n&2048&&mf(e.alternate,e);break;default:Ft(t,e,l,a)}}function Al(t,e,l,a,n){for(n=n&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var i=t,u=e,f=l,s=a,r=u.flags;switch(u.tag){case 0:case 11:case 15:Al(i,u,f,s,n),un(8,u);break;case 23:break;case 22:var y=u.stateNode;u.memoizedState!==null?y._visibility&2?Al(i,u,f,s,n):Ha(i,u):(y._visibility|=2,Al(i,u,f,s,n)),n&&r&2048&&df(u.alternate,u);break;case 24:Al(i,u,f,s,n),n&&r&2048&&mf(u.alternate,u);break;default:Al(i,u,f,s,n)}e=e.sibling}}function Ha(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,a=e,n=a.flags;switch(a.tag){case 22:Ha(l,a),n&2048&&df(a.alternate,a);break;case 24:Ha(l,a),n&2048&&mf(a.alternate,a);break;default:Ha(l,a)}e=e.sibling}}var za=8192;function _l(t,e,l){if(t.subtreeFlags&za)for(t=t.child;t!==null;)_0(t,e,l),t=t.sibling}function _0(t,e,l){switch(t.tag){case 26:_l(t,e,l),t.flags&za&&t.memoizedState!==null&&eh(l,It,t.memoizedState,t.memoizedProps);break;case 5:_l(t,e,l);break;case 3:case 4:var a=It;It=hi(t.stateNode.containerInfo),_l(t,e,l),It=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=za,za=16777216,_l(t,e,l),za=a):_l(t,e,l));break;default:_l(t,e,l)}}function j0(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function ya(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];dt=a,E0(a,t)}j0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)A0(t),t=t.sibling}function A0(t){switch(t.tag){case 0:case 11:case 15:ya(t),t.flags&2048&&We(9,t,t.return);break;case 3:ya(t);break;case 12:ya(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Gn(t)):ya(t);break;default:ya(t)}}function Gn(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];dt=a,E0(a,t)}j0(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:We(8,e,e.return),Gn(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,Gn(e));break;default:Gn(e)}t=t.sibling}}function E0(t,e){for(;dt!==null;){var l=dt;switch(l.tag){case 0:case 11:case 15:We(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:an(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,dt=a;else t:for(l=t;dt!==null;){a=dt;var n=a.sibling,i=a.return;if(y0(a),a===l){dt=null;break t}if(n!==null){n.return=i,dt=n;break t}dt=i}}}var y1={getCacheForType:function(t){var e=vt(ct),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l},cacheSignal:function(){return vt(ct).controller.signal}},p1=typeof WeakMap=="function"?WeakMap:Map,G=0,k=null,C=null,R=0,w=0,Ot=null,Ye=!1,fa=!1,hf=!1,je=0,et=0,Fe=0,ol=0,gf=0,Ht=0,Il=0,Ca=null,Et=null,fc=!1,Ci=0,N0=0,ci=1/0,fi=null,Le=null,st=0,Ze=null,Pl=null,be=0,sc=0,oc=null,T0=null,Ra=0,rc=null;function Bt(){return G&2&&R!==0?R&-R:A.T!==null?pf():Bo()}function M0(){if(Ht===0)if(!(R&536870912)||B){var t=yn;yn<<=1,!(yn&3932160)&&(yn=262144),Ht=t}else Ht=536870912;return t=Gt.current,t!==null&&(t.flags|=32),Ht}function Nt(t,e,l){(t===k&&(w===2||w===9)||t.cancelPendingCommit!==null)&&(ta(t,0),Be(t,R,Ht,!1)),tn(t,l),(!(G&2)||t!==k)&&(t===k&&(!(G&2)&&(ol|=l),et===4&&Be(t,R,Ht,!1)),ue(t))}function O0(t,e,l){if(G&6)throw Error(b(327));var a=!l&&(e&127)===0&&(e&t.expiredLanes)===0||Pa(t,e),n=a?x1(t,e):gu(t,e,!0),i=a;do{if(n===0){fa&&!a&&Be(t,e,0,!1);break}else{if(l=t.current.alternate,i&&!v1(l)){n=gu(t,e,!1),i=!1;continue}if(n===2){if(i=e,t.errorRecoveryDisabledLanes&i)var u=0;else u=t.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){e=u;t:{var f=t;n=Ca;var s=f.current.memoizedState.isDehydrated;if(s&&(ta(f,u).flags|=256),u=gu(f,u,!1),u!==2){if(hf&&!s){f.errorRecoveryDisabledLanes|=i,ol|=i,n=4;break t}i=Et,Et=n,i!==null&&(Et===null?Et=i:Et.push.apply(Et,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){ta(t,0),Be(t,e,0,!0);break}t:{switch(a=t,i=n,i){case 0:case 1:throw Error(b(345));case 4:if((e&4194048)!==e)break;case 6:Be(a,e,Ht,!Ye);break t;case 2:Et=null;break;case 3:case 5:break;default:throw Error(b(329))}if((e&62914560)===e&&(n=Ci+300-Ct(),10<n)){if(Be(a,e,Ht,!Ye),_i(a,0,!0)!==0)break t;be=e,a.timeoutHandle=W0(Ds.bind(null,a,l,Et,fi,fc,e,Ht,ol,Il,Ye,i,"Throttled",-0,0),n);break t}Ds(a,l,Et,fi,fc,e,Ht,ol,Il,Ye,i,null,-0,0)}}break}while(!0);ue(t)}function Ds(t,e,l,a,n,i,u,f,s,r,y,p,d,g){if(t.timeoutHandle=-1,p=e.subtreeFlags,p&8192||(p&16785408)===16785408){p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ge},_0(e,i,p);var x=(i&62914560)===i?Ci-Ct():(i&4194048)===i?N0-Ct():0;if(x=lh(p,x),x!==null){be=i,t.cancelPendingCommit=x(Hs.bind(null,t,e,i,l,a,n,u,f,s,y,p,null,d,g)),Be(t,i,u,!r);return}}Hs(t,e,i,l,a,n,u,f,s)}function v1(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],i=n.getSnapshot;n=n.value;try{if(!qt(i(),n))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Be(t,e,l,a){e&=~gf,e&=~ol,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var n=e;0<n;){var i=31-Yt(n),u=1<<i;a[i]=-1,n&=~u}l!==0&&Co(t,l,e)}function Ri(){return G&6?!0:(cn(0),!1)}function yf(){if(C!==null){if(w===0)var t=C.return;else t=C,ye=Sl=null,tf(t),Ll=null,La=0,t=C;for(;t!==null;)s0(t.alternate,t),t=t.return;C=null}}function ta(t,e){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,q1(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),be=0,yf(),k=t,C=l=pe(t.current,null),R=e,w=0,Ot=null,Ye=!1,fa=Pa(t,e),hf=!1,Il=Ht=gf=ol=Fe=et=0,Et=Ca=null,fc=!1,e&8&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var n=31-Yt(a),i=1<<n;e|=t[n],a&=~i}return je=e,Ni(),l}function D0(t,e){T=null,A.H=Va,e===ca||e===Mi?(e=ss(),w=3):e===Kc?(e=ss(),w=4):w=e===of?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Ot=e,C===null&&(et=1,ni(t,kt(e,t.current)))}function U0(){var t=Gt.current;return t===null?!0:(R&4194048)===R?Jt===null:(R&62914560)===R||R&536870912?t===Jt:!1}function H0(){var t=A.H;return A.H=Va,t===null?Va:t}function C0(){var t=A.A;return A.A=y1,t}function si(){et=4,Ye||(R&4194048)!==R&&Gt.current!==null||(fa=!0),!(Fe&134217727)&&!(ol&134217727)||k===null||Be(k,R,Ht,!1)}function gu(t,e,l){var a=G;G|=2;var n=H0(),i=C0();(k!==t||R!==e)&&(fi=null,ta(t,e)),e=!1;var u=et;t:do try{if(w!==0&&C!==null){var f=C,s=Ot;switch(w){case 8:yf(),u=6;break t;case 3:case 2:case 9:case 6:Gt.current===null&&(e=!0);var r=w;if(w=0,Ot=null,ql(t,f,s,r),l&&fa){u=0;break t}break;default:r=w,w=0,Ot=null,ql(t,f,s,r)}}b1(),u=et;break}catch(y){D0(t,y)}while(!0);return e&&t.shellSuspendCounter++,ye=Sl=null,G=a,A.H=n,A.A=i,C===null&&(k=null,R=0,Ni()),u}function b1(){for(;C!==null;)R0(C)}function x1(t,e){var l=G;G|=2;var a=H0(),n=C0();k!==t||R!==e?(fi=null,ci=Ct()+500,ta(t,e)):fa=Pa(t,e);t:do try{if(w!==0&&C!==null){e=C;var i=Ot;e:switch(w){case 1:w=0,Ot=null,ql(t,e,i,1);break;case 2:case 9:if(fs(i)){w=0,Ot=null,Us(e);break}e=function(){w!==2&&w!==9||k!==t||(w=7),ue(t)},i.then(e,e);break t;case 3:w=7;break t;case 4:w=5;break t;case 7:fs(i)?(w=0,Ot=null,Us(e)):(w=0,Ot=null,ql(t,e,i,7));break;case 5:var u=null;switch(C.tag){case 26:u=C.memoizedState;case 5:case 27:var f=C;if(u?ed(u):f.stateNode.complete){w=0,Ot=null;var s=f.sibling;if(s!==null)C=s;else{var r=f.return;r!==null?(C=r,Yi(r)):C=null}break e}}w=0,Ot=null,ql(t,e,i,5);break;case 6:w=0,Ot=null,ql(t,e,i,6);break;case 8:yf(),et=6;break t;default:throw Error(b(462))}}S1();break}catch(y){D0(t,y)}while(!0);return ye=Sl=null,A.H=a,A.A=n,G=l,C!==null?0:(k=null,R=0,Ni(),et)}function S1(){for(;C!==null&&!Zd();)R0(C)}function R0(t){var e=f0(t.alternate,t,je);t.memoizedProps=t.pendingProps,e===null?Yi(t):C=e}function Us(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=As(l,e,e.pendingProps,e.type,void 0,R);break;case 11:e=As(l,e,e.pendingProps,e.type.render,e.ref,R);break;case 5:tf(e);default:s0(l,e),e=C=sr(e,je),e=f0(l,e,je)}t.memoizedProps=t.pendingProps,e===null?Yi(t):C=e}function ql(t,e,l,a){ye=Sl=null,tf(e),Ll=null,La=0;var n=e.return;try{if(s1(t,n,e,l,R)){et=1,ni(t,kt(l,t.current)),C=null;return}}catch(i){if(n!==null)throw C=n,i;et=1,ni(t,kt(l,t.current)),C=null;return}e.flags&32768?(B||a===1?t=!0:fa||R&536870912?t=!1:(Ye=t=!0,(a===2||a===9||a===3||a===6)&&(a=Gt.current,a!==null&&a.tag===13&&(a.flags|=16384))),Y0(e,t)):Yi(e)}function Yi(t){var e=t;do{if(e.flags&32768){Y0(e,Ye);return}t=e.return;var l=d1(e.alternate,e,je);if(l!==null){C=l;return}if(e=e.sibling,e!==null){C=e;return}C=e=t}while(e!==null);et===0&&(et=5)}function Y0(t,e){do{var l=m1(t.alternate,t);if(l!==null){l.flags&=32767,C=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){C=t;return}C=t=l}while(t!==null);et=6,C=null}function Hs(t,e,l,a,n,i,u,f,s){t.cancelPendingCommit=null;do Bi();while(st!==0);if(G&6)throw Error(b(327));if(e!==null){if(e===t.current)throw Error(b(177));if(i=e.lanes|e.childLanes,i|=Xc,tm(t,l,i,u,f,s),t===k&&(C=k=null,R=0),Pl=e,Ze=t,be=l,sc=i,oc=n,T0=a,e.subtreeFlags&10256||e.flags&10256?(t.callbackNode=null,t.callbackPriority=0,A1(Kn,function(){return Q0(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,e.subtreeFlags&13878||a){a=A.T,A.T=null,n=X.p,X.p=2,u=G,G|=4;try{h1(t,e,l)}finally{G=u,X.p=n,A.T=a}}st=1,B0(),q0(),G0()}}function B0(){if(st===1){st=0;var t=Ze,e=Pl,l=(e.flags&13878)!==0;if(e.subtreeFlags&13878||l){l=A.T,A.T=null;var a=X.p;X.p=2;var n=G;G|=4;try{x0(e,t);var i=gc,u=er(t.containerInfo),f=i.focusedElem,s=i.selectionRange;if(u!==f&&f&&f.ownerDocument&&tr(f.ownerDocument.documentElement,f)){if(s!==null&&Gc(f)){var r=s.start,y=s.end;if(y===void 0&&(y=r),"selectionStart"in f)f.selectionStart=r,f.selectionEnd=Math.min(y,f.value.length);else{var p=f.ownerDocument||document,d=p&&p.defaultView||window;if(d.getSelection){var g=d.getSelection(),x=f.textContent.length,_=Math.min(s.start,x),q=s.end===void 0?_:Math.min(s.end,x);!g.extend&&_>q&&(u=q,q=_,_=u);var m=es(f,_),o=es(f,q);if(m&&o&&(g.rangeCount!==1||g.anchorNode!==m.node||g.anchorOffset!==m.offset||g.focusNode!==o.node||g.focusOffset!==o.offset)){var h=p.createRange();h.setStart(m.node,m.offset),g.removeAllRanges(),_>q?(g.addRange(h),g.extend(o.node,o.offset)):(h.setEnd(o.node,o.offset),g.addRange(h))}}}}for(p=[],g=f;g=g.parentNode;)g.nodeType===1&&p.push({element:g,left:g.scrollLeft,top:g.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<p.length;f++){var v=p[f];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}pi=!!hc,gc=hc=null}finally{G=n,X.p=a,A.T=l}}t.current=e,st=2}}function q0(){if(st===2){st=0;var t=Ze,e=Pl,l=(e.flags&8772)!==0;if(e.subtreeFlags&8772||l){l=A.T,A.T=null;var a=X.p;X.p=2;var n=G;G|=4;try{g0(t,e.alternate,e)}finally{G=n,X.p=a,A.T=l}}st=3}}function G0(){if(st===4||st===3){st=0,Vd();var t=Ze,e=Pl,l=be,a=T0;e.subtreeFlags&10256||e.flags&10256?st=5:(st=0,Pl=Ze=null,X0(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(Le=null),Uc(l),e=e.stateNode,Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(Ia,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=A.T,n=X.p,X.p=2,A.T=null;try{for(var i=t.onRecoverableError,u=0;u<a.length;u++){var f=a[u];i(f.value,{componentStack:f.stack})}}finally{A.T=e,X.p=n}}be&3&&Bi(),ue(t),n=t.pendingLanes,l&261930&&n&42?t===rc?Ra++:(Ra=0,rc=t):Ra=0,cn(0)}}function X0(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,an(e)))}function Bi(){return B0(),q0(),G0(),Q0()}function Q0(){if(st!==5)return!1;var t=Ze,e=sc;sc=0;var l=Uc(be),a=A.T,n=X.p;try{X.p=32>l?32:l,A.T=null,l=oc,oc=null;var i=Ze,u=be;if(st=0,Pl=Ze=null,be=0,G&6)throw Error(b(331));var f=G;if(G|=4,A0(i.current),z0(i,i.current,u,l),G=f,cn(0,!1),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(Ia,i)}catch{}return!0}finally{X.p=n,A.T=a,X0(t,e)}}function Cs(t,e,l){e=kt(l,e),e=nc(t.stateNode,e,2),t=we(t,e,2),t!==null&&(tn(t,2),ue(t))}function L(t,e,l){if(t.tag===3)Cs(t,t,l);else for(;e!==null;){if(e.tag===3){Cs(e,t,l);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Le===null||!Le.has(a))){t=kt(l,t),l=l0(2),a=we(e,l,2),a!==null&&(a0(l,a,e,t),tn(a,2),ue(a));break}}e=e.return}}function yu(t,e,l){var a=t.pingCache;if(a===null){a=t.pingCache=new p1;var n=new Set;a.set(e,n)}else n=a.get(e),n===void 0&&(n=new Set,a.set(e,n));n.has(l)||(hf=!0,n.add(l),t=z1.bind(null,t,e,l),e.then(t,t))}function z1(t,e,l){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,k===t&&(R&l)===l&&(et===4||et===3&&(R&62914560)===R&&300>Ct()-Ci?!(G&2)&&ta(t,0):gf|=l,Il===R&&(Il=0)),ue(t)}function w0(t,e){e===0&&(e=Ho()),t=xl(t,e),t!==null&&(tn(t,e),ue(t))}function _1(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),w0(t,l)}function j1(t,e){var l=0;switch(t.tag){case 31:case 13:var a=t.stateNode,n=t.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(b(314))}a!==null&&a.delete(e),w0(t,l)}function A1(t,e){return Oc(t,e)}var oi=null,El=null,dc=!1,ri=!1,pu=!1,qe=0;function ue(t){t!==El&&t.next===null&&(El===null?oi=El=t:El=El.next=t),ri=!0,dc||(dc=!0,N1())}function cn(t,e){if(!pu&&ri){pu=!0;do for(var l=!1,a=oi;a!==null;){if(t!==0){var n=a.pendingLanes;if(n===0)var i=0;else{var u=a.suspendedLanes,f=a.pingedLanes;i=(1<<31-Yt(42|t)+1)-1,i&=n&~(u&~f),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,Rs(a,i))}else i=R,i=_i(a,a===k?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),!(i&3)||Pa(a,i)||(l=!0,Rs(a,i));a=a.next}while(l);pu=!1}}function E1(){L0()}function L0(){ri=dc=!1;var t=0;qe!==0&&B1()&&(t=qe);for(var e=Ct(),l=null,a=oi;a!==null;){var n=a.next,i=Z0(a,e);i===0?(a.next=null,l===null?oi=n:l.next=n,n===null&&(El=l)):(l=a,(t!==0||i&3)&&(ri=!0)),a=n}st!==0&&st!==5||cn(t),qe!==0&&(qe=0)}function Z0(t,e){for(var l=t.suspendedLanes,a=t.pingedLanes,n=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var u=31-Yt(i),f=1<<u,s=n[u];s===-1?(!(f&l)||f&a)&&(n[u]=Pd(f,e)):s<=e&&(t.expiredLanes|=f),i&=~f}if(e=k,l=R,l=_i(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,l===0||t===e&&(w===2||w===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&Vi(a),t.callbackNode=null,t.callbackPriority=0;if(!(l&3)||Pa(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(a!==null&&Vi(a),Uc(l)){case 2:case 8:l=Do;break;case 32:l=Kn;break;case 268435456:l=Uo;break;default:l=Kn}return a=V0.bind(null,t),l=Oc(l,a),t.callbackPriority=e,t.callbackNode=l,e}return a!==null&&a!==null&&Vi(a),t.callbackPriority=2,t.callbackNode=null,2}function V0(t,e){if(st!==0&&st!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(Bi()&&t.callbackNode!==l)return null;var a=R;return a=_i(t,t===k?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(O0(t,a,e),Z0(t,Ct()),t.callbackNode!=null&&t.callbackNode===l?V0.bind(null,t):null)}function Rs(t,e){if(Bi())return null;O0(t,e,!0)}function N1(){G1(function(){G&6?Oc(Oo,E1):L0()})}function pf(){if(qe===0){var t=$l;t===0&&(t=gn,gn<<=1,!(gn&261888)&&(gn=256)),qe=t}return qe}function Ys(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:On(""+t)}function Bs(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function T1(t,e,l,a,n){if(e==="submit"&&l&&l.stateNode===n){var i=Ys((n[Tt]||null).action),u=a.submitter;u&&(e=(e=u[Tt]||null)?Ys(e.formAction):u.getAttribute("formAction"),e!==null&&(i=e,u=null));var f=new ji("action","action",null,a,n);t.push({event:f,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(qe!==0){var s=u?Bs(n,u):new FormData(n);lc(l,{pending:!0,data:s,method:n.method,action:i},null,s)}}else typeof i=="function"&&(f.preventDefault(),s=u?Bs(n,u):new FormData(n),lc(l,{pending:!0,data:s,method:n.method,action:i},i,s))},currentTarget:n}]})}}for(var vu=0;vu<Zu.length;vu++){var bu=Zu[vu],M1=bu.toLowerCase(),O1=bu[0].toUpperCase()+bu.slice(1);te(M1,"on"+O1)}te(ar,"onAnimationEnd");te(nr,"onAnimationIteration");te(ir,"onAnimationStart");te("dblclick","onDoubleClick");te("focusin","onFocus");te("focusout","onBlur");te(km,"onTransitionRun");te(Km,"onTransitionStart");te(Jm,"onTransitionCancel");te(ur,"onTransitionEnd");Kl("onMouseEnter",["mouseout","mouseover"]);Kl("onMouseLeave",["mouseout","mouseover"]);Kl("onPointerEnter",["pointerout","pointerover"]);Kl("onPointerLeave",["pointerout","pointerover"]);pl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pl("onBeforeInput",["compositionend","keypress","textInput","paste"]);pl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ka="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),D1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ka));function k0(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var a=t[l],n=a.event;a=a.listeners;t:{var i=void 0;if(e)for(var u=a.length-1;0<=u;u--){var f=a[u],s=f.instance,r=f.currentTarget;if(f=f.listener,s!==i&&n.isPropagationStopped())break t;i=f,n.currentTarget=r;try{i(n)}catch(y){$n(y)}n.currentTarget=null,i=s}else for(u=0;u<a.length;u++){if(f=a[u],s=f.instance,r=f.currentTarget,f=f.listener,s!==i&&n.isPropagationStopped())break t;i=f,n.currentTarget=r;try{i(n)}catch(y){$n(y)}n.currentTarget=null,i=s}}}}function H(t,e){var l=e[Yu];l===void 0&&(l=e[Yu]=new Set);var a=t+"__bubble";l.has(a)||(K0(e,t,2,!1),l.add(a))}function xu(t,e,l){var a=0;e&&(a|=4),K0(l,t,a,e)}var An="_reactListening"+Math.random().toString(36).slice(2);function vf(t){if(!t[An]){t[An]=!0,qo.forEach(function(l){l!=="selectionchange"&&(D1.has(l)||xu(l,!1,t),xu(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[An]||(e[An]=!0,xu("selectionchange",!1,e))}}function K0(t,e,l,a){switch(ud(e)){case 2:var n=ih;break;case 8:n=uh;break;default:n=zf}l=n.bind(null,e,l,t),n=void 0,!Qu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),a?n!==void 0?t.addEventListener(e,l,{capture:!0,passive:n}):t.addEventListener(e,l,!0):n!==void 0?t.addEventListener(e,l,{passive:n}):t.addEventListener(e,l,!1)}function Su(t,e,l,a,n){var i=a;if(!(e&1)&&!(e&2)&&a!==null)t:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var f=a.stateNode.containerInfo;if(f===n)break;if(u===4)for(u=a.return;u!==null;){var s=u.tag;if((s===3||s===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;f!==null;){if(u=Ml(f),u===null)return;if(s=u.tag,s===5||s===6||s===26||s===27){a=i=u;continue t}f=f.parentNode}}a=a.return}ko(function(){var r=i,y=Rc(l),p=[];t:{var d=cr.get(t);if(d!==void 0){var g=ji,x=t;switch(t){case"keypress":if(Un(l)===0)break t;case"keydown":case"keyup":g=jm;break;case"focusin":x="focus",g=Wi;break;case"focusout":x="blur",g=Wi;break;case"beforeblur":case"afterblur":g=Wi;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Vf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=dm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Nm;break;case ar:case nr:case ir:g=gm;break;case ur:g=Mm;break;case"scroll":case"scrollend":g=om;break;case"wheel":g=Dm;break;case"copy":case"cut":case"paste":g=pm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Kf;break;case"toggle":case"beforetoggle":g=Hm}var _=(e&4)!==0,q=!_&&(t==="scroll"||t==="scrollend"),m=_?d!==null?d+"Capture":null:d;_=[];for(var o=r,h;o!==null;){var v=o;if(h=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||h===null||m===null||(v=qa(o,m),v!=null&&_.push(Ka(o,v,h))),q)break;o=o.return}0<_.length&&(d=new g(d,x,null,l,y),p.push({event:d,listeners:_}))}}if(!(e&7)){t:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&l!==Xu&&(x=l.relatedTarget||l.fromElement)&&(Ml(x)||x[na]))break t;if((g||d)&&(d=y.window===y?y:(d=y.ownerDocument)?d.defaultView||d.parentWindow:window,g?(x=l.relatedTarget||l.toElement,g=r,x=x?Ml(x):null,x!==null&&(q=Fa(x),_=x.tag,x!==q||_!==5&&_!==27&&_!==6)&&(x=null)):(g=null,x=r),g!==x)){if(_=Vf,v="onMouseLeave",m="onMouseEnter",o="mouse",(t==="pointerout"||t==="pointerover")&&(_=Kf,v="onPointerLeave",m="onPointerEnter",o="pointer"),q=g==null?d:xa(g),h=x==null?d:xa(x),d=new _(v,o+"leave",g,l,y),d.target=q,d.relatedTarget=h,v=null,Ml(y)===r&&(_=new _(m,o+"enter",x,l,y),_.target=h,_.relatedTarget=q,v=_),q=v,g&&x)e:{for(_=U1,m=g,o=x,h=0,v=m;v;v=_(v))h++;v=0;for(var j=o;j;j=_(j))v++;for(;0<h-v;)m=_(m),h--;for(;0<v-h;)o=_(o),v--;for(;h--;){if(m===o||o!==null&&m===o.alternate){_=m;break e}m=_(m),o=_(o)}_=null}else _=null;g!==null&&qs(p,d,g,_,!1),x!==null&&q!==null&&qs(p,q,x,_,!0)}}t:{if(d=r?xa(r):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var M=Ff;else if(Wf(d))if(Io)M=Lm;else{M=Qm;var S=Xm}else g=d.nodeName,!g||g.toLowerCase()!=="input"||d.type!=="checkbox"&&d.type!=="radio"?r&&Cc(r.elementType)&&(M=Ff):M=wm;if(M&&(M=M(t,r))){Fo(p,M,l,y);break t}S&&S(t,d,r),t==="focusout"&&r&&d.type==="number"&&r.memoizedProps.value!=null&&Gu(d,"number",d.value)}switch(S=r?xa(r):window,t){case"focusin":(Wf(S)||S.contentEditable==="true")&&(Ul=S,wu=r,Ea=null);break;case"focusout":Ea=wu=Ul=null;break;case"mousedown":Lu=!0;break;case"contextmenu":case"mouseup":case"dragend":Lu=!1,ls(p,l,y);break;case"selectionchange":if(Vm)break;case"keydown":case"keyup":ls(p,l,y)}var E;if(qc)t:{switch(t){case"compositionstart":var O="onCompositionStart";break t;case"compositionend":O="onCompositionEnd";break t;case"compositionupdate":O="onCompositionUpdate";break t}O=void 0}else Dl?$o(t,l)&&(O="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(O="onCompositionStart");O&&(Jo&&l.locale!=="ko"&&(Dl||O!=="onCompositionStart"?O==="onCompositionEnd"&&Dl&&(E=Ko()):(Re=y,Yc="value"in Re?Re.value:Re.textContent,Dl=!0)),S=di(r,O),0<S.length&&(O=new kf(O,t,null,l,y),p.push({event:O,listeners:S}),E?O.data=E:(E=Wo(l),E!==null&&(O.data=E)))),(E=Rm?Ym(t,l):Bm(t,l))&&(O=di(r,"onBeforeInput"),0<O.length&&(S=new kf("onBeforeInput","beforeinput",null,l,y),p.push({event:S,listeners:O}),S.data=E)),T1(p,t,r,l,y)}k0(p,e)})}function Ka(t,e,l){return{instance:t,listener:e,currentTarget:l}}function di(t,e){for(var l=e+"Capture",a=[];t!==null;){var n=t,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=qa(t,l),n!=null&&a.unshift(Ka(t,n,i)),n=qa(t,e),n!=null&&a.push(Ka(t,n,i))),t.tag===3)return a;t=t.return}return[]}function U1(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function qs(t,e,l,a,n){for(var i=e._reactName,u=[];l!==null&&l!==a;){var f=l,s=f.alternate,r=f.stateNode;if(f=f.tag,s!==null&&s===a)break;f!==5&&f!==26&&f!==27||r===null||(s=r,n?(r=qa(l,i),r!=null&&u.unshift(Ka(l,r,s))):n||(r=qa(l,i),r!=null&&u.push(Ka(l,r,s)))),l=l.return}u.length!==0&&t.push({event:e,listeners:u})}var H1=/\r\n?/g,C1=/\u0000|\uFFFD/g;function Gs(t){return(typeof t=="string"?t:""+t).replace(H1,`
`).replace(C1,"")}function J0(t,e){return e=Gs(e),Gs(t)===e}function Z(t,e,l,a,n,i){switch(l){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||Jl(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&Jl(t,""+a);break;case"className":vn(t,"class",a);break;case"tabIndex":vn(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":vn(t,l,a);break;case"style":Vo(t,a,i);break;case"data":if(e!=="object"){vn(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=On(""+a),t.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(e!=="input"&&Z(t,e,"name",n.name,n,null),Z(t,e,"formEncType",n.formEncType,n,null),Z(t,e,"formMethod",n.formMethod,n,null),Z(t,e,"formTarget",n.formTarget,n,null)):(Z(t,e,"encType",n.encType,n,null),Z(t,e,"method",n.method,n,null),Z(t,e,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=On(""+a),t.setAttribute(l,a);break;case"onClick":a!=null&&(t.onclick=ge);break;case"onScroll":a!=null&&H("scroll",t);break;case"onScrollEnd":a!=null&&H("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(b(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(b(60));t.innerHTML=l}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}l=On(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""+a):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":a===!0?t.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(l,a):t.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(l):t.setAttribute(l,a);break;case"popover":H("beforetoggle",t),H("toggle",t),Mn(t,"popover",a);break;case"xlinkActuate":ce(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":ce(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":ce(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":ce(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":ce(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":ce(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":ce(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":ce(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":ce(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Mn(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=fm.get(l)||l,Mn(t,l,a))}}function mc(t,e,l,a,n,i){switch(l){case"style":Vo(t,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(b(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(b(60));t.innerHTML=l}}break;case"children":typeof a=="string"?Jl(t,a):(typeof a=="number"||typeof a=="bigint")&&Jl(t,""+a);break;case"onScroll":a!=null&&H("scroll",t);break;case"onScrollEnd":a!=null&&H("scrollend",t);break;case"onClick":a!=null&&(t.onclick=ge);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Go.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),e=l.slice(2,n?l.length-7:void 0),i=t[Tt]||null,i=i!=null?i[l]:null,typeof i=="function"&&t.removeEventListener(e,i,n),typeof a=="function")){typeof i!="function"&&i!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,a,n);break t}l in t?t[l]=a:a===!0?t.setAttribute(l,""):Mn(t,l,a)}}}function bt(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":H("error",t),H("load",t);var a=!1,n=!1,i;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];if(u!=null)switch(i){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(b(137,e));default:Z(t,e,i,u,l,null)}}n&&Z(t,e,"srcSet",l.srcSet,l,null),a&&Z(t,e,"src",l.src,l,null);return;case"input":H("invalid",t);var f=i=u=n=null,s=null,r=null;for(a in l)if(l.hasOwnProperty(a)){var y=l[a];if(y!=null)switch(a){case"name":n=y;break;case"type":u=y;break;case"checked":s=y;break;case"defaultChecked":r=y;break;case"value":i=y;break;case"defaultValue":f=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(b(137,e));break;default:Z(t,e,a,y,l,null)}}wo(t,i,f,s,r,u,n,!1);return;case"select":H("invalid",t),a=u=i=null;for(n in l)if(l.hasOwnProperty(n)&&(f=l[n],f!=null))switch(n){case"value":i=f;break;case"defaultValue":u=f;break;case"multiple":a=f;default:Z(t,e,n,f,l,null)}e=i,l=u,t.multiple=!!a,e!=null?Xl(t,!!a,e,!1):l!=null&&Xl(t,!!a,l,!0);return;case"textarea":H("invalid",t),i=n=a=null;for(u in l)if(l.hasOwnProperty(u)&&(f=l[u],f!=null))switch(u){case"value":a=f;break;case"defaultValue":n=f;break;case"children":i=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(b(91));break;default:Z(t,e,u,f,l,null)}Zo(t,a,n,i);return;case"option":for(s in l)if(l.hasOwnProperty(s)&&(a=l[s],a!=null))switch(s){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Z(t,e,s,a,l,null)}return;case"dialog":H("beforetoggle",t),H("toggle",t),H("cancel",t),H("close",t);break;case"iframe":case"object":H("load",t);break;case"video":case"audio":for(a=0;a<ka.length;a++)H(ka[a],t);break;case"image":H("error",t),H("load",t);break;case"details":H("toggle",t);break;case"embed":case"source":case"link":H("error",t),H("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(r in l)if(l.hasOwnProperty(r)&&(a=l[r],a!=null))switch(r){case"children":case"dangerouslySetInnerHTML":throw Error(b(137,e));default:Z(t,e,r,a,l,null)}return;default:if(Cc(e)){for(y in l)l.hasOwnProperty(y)&&(a=l[y],a!==void 0&&mc(t,e,y,a,l,void 0));return}}for(f in l)l.hasOwnProperty(f)&&(a=l[f],a!=null&&Z(t,e,f,a,l,null))}function R1(t,e,l,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,f=null,s=null,r=null,y=null;for(g in l){var p=l[g];if(l.hasOwnProperty(g)&&p!=null)switch(g){case"checked":break;case"value":break;case"defaultValue":s=p;default:a.hasOwnProperty(g)||Z(t,e,g,null,a,p)}}for(var d in a){var g=a[d];if(p=l[d],a.hasOwnProperty(d)&&(g!=null||p!=null))switch(d){case"type":i=g;break;case"name":n=g;break;case"checked":r=g;break;case"defaultChecked":y=g;break;case"value":u=g;break;case"defaultValue":f=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(b(137,e));break;default:g!==p&&Z(t,e,d,g,a,p)}}qu(t,u,f,s,r,y,i,n);return;case"select":g=u=f=d=null;for(i in l)if(s=l[i],l.hasOwnProperty(i)&&s!=null)switch(i){case"value":break;case"multiple":g=s;default:a.hasOwnProperty(i)||Z(t,e,i,null,a,s)}for(n in a)if(i=a[n],s=l[n],a.hasOwnProperty(n)&&(i!=null||s!=null))switch(n){case"value":d=i;break;case"defaultValue":f=i;break;case"multiple":u=i;default:i!==s&&Z(t,e,n,i,a,s)}e=f,l=u,a=g,d!=null?Xl(t,!!l,d,!1):!!a!=!!l&&(e!=null?Xl(t,!!l,e,!0):Xl(t,!!l,l?[]:"",!1));return;case"textarea":g=d=null;for(f in l)if(n=l[f],l.hasOwnProperty(f)&&n!=null&&!a.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:Z(t,e,f,null,a,n)}for(u in a)if(n=a[u],i=l[u],a.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":d=n;break;case"defaultValue":g=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(b(91));break;default:n!==i&&Z(t,e,u,n,a,i)}Lo(t,d,g);return;case"option":for(var x in l)if(d=l[x],l.hasOwnProperty(x)&&d!=null&&!a.hasOwnProperty(x))switch(x){case"selected":t.selected=!1;break;default:Z(t,e,x,null,a,d)}for(s in a)if(d=a[s],g=l[s],a.hasOwnProperty(s)&&d!==g&&(d!=null||g!=null))switch(s){case"selected":t.selected=d&&typeof d!="function"&&typeof d!="symbol";break;default:Z(t,e,s,d,a,g)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var _ in l)d=l[_],l.hasOwnProperty(_)&&d!=null&&!a.hasOwnProperty(_)&&Z(t,e,_,null,a,d);for(r in a)if(d=a[r],g=l[r],a.hasOwnProperty(r)&&d!==g&&(d!=null||g!=null))switch(r){case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(b(137,e));break;default:Z(t,e,r,d,a,g)}return;default:if(Cc(e)){for(var q in l)d=l[q],l.hasOwnProperty(q)&&d!==void 0&&!a.hasOwnProperty(q)&&mc(t,e,q,void 0,a,d);for(y in a)d=a[y],g=l[y],!a.hasOwnProperty(y)||d===g||d===void 0&&g===void 0||mc(t,e,y,d,a,g);return}}for(var m in l)d=l[m],l.hasOwnProperty(m)&&d!=null&&!a.hasOwnProperty(m)&&Z(t,e,m,null,a,d);for(p in a)d=a[p],g=l[p],!a.hasOwnProperty(p)||d===g||d==null&&g==null||Z(t,e,p,d,a,g)}function Xs(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Y1(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var n=l[a],i=n.transferSize,u=n.initiatorType,f=n.duration;if(i&&f&&Xs(u)){for(u=0,f=n.responseEnd,a+=1;a<l.length;a++){var s=l[a],r=s.startTime;if(r>f)break;var y=s.transferSize,p=s.initiatorType;y&&Xs(p)&&(s=s.responseEnd,u+=y*(s<f?1:(f-r)/(s-r)))}if(--a,e+=8*(i+u)/(n.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var hc=null,gc=null;function mi(t){return t.nodeType===9?t:t.ownerDocument}function Qs(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $0(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function yc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var zu=null;function B1(){var t=window.event;return t&&t.type==="popstate"?t===zu?!1:(zu=t,!0):(zu=null,!1)}var W0=typeof setTimeout=="function"?setTimeout:void 0,q1=typeof clearTimeout=="function"?clearTimeout:void 0,ws=typeof Promise=="function"?Promise:void 0,G1=typeof queueMicrotask=="function"?queueMicrotask:typeof ws<"u"?function(t){return ws.resolve(null).then(t).catch(X1)}:W0;function X1(t){setTimeout(function(){throw t})}function Pe(t){return t==="head"}function Ls(t,e){var l=e,a=0;do{var n=l.nextSibling;if(t.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){t.removeChild(n),la(e);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")Ya(t.ownerDocument.documentElement);else if(l==="head"){l=t.ownerDocument.head,Ya(l);for(var i=l.firstChild;i;){var u=i.nextSibling,f=i.nodeName;i[en]||f==="SCRIPT"||f==="STYLE"||f==="LINK"&&i.rel.toLowerCase()==="stylesheet"||l.removeChild(i),i=u}}else l==="body"&&Ya(t.ownerDocument.body);l=n}while(l);la(e)}function Zs(t,e){var l=t;t=0;do{var a=l.nextSibling;if(l.nodeType===1?e?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(e?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(t===0)break;t--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||t++;l=a}while(l)}function pc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":pc(l),Hc(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function Q1(t,e,l,a){for(;t.nodeType===1;){var n=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[en])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=$t(t.nextSibling),t===null)break}return null}function w1(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=$t(t.nextSibling),t===null))return null;return t}function F0(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=$t(t.nextSibling),t===null))return null;return t}function vc(t){return t.data==="$?"||t.data==="$~"}function bc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function L1(t,e){var l=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||l.readyState!=="loading")e();else{var a=function(){e(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function $t(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var xc=null;function Vs(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="/$"||l==="/&"){if(e===0)return $t(t.nextSibling);e--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||e++}t=t.nextSibling}return null}function ks(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(e===0)return t;e--}else l!=="/$"&&l!=="/&"||e++}t=t.previousSibling}return null}function I0(t,e,l){switch(e=mi(l),t){case"html":if(t=e.documentElement,!t)throw Error(b(452));return t;case"head":if(t=e.head,!t)throw Error(b(453));return t;case"body":if(t=e.body,!t)throw Error(b(454));return t;default:throw Error(b(451))}}function Ya(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Hc(t)}var Wt=new Map,Ks=new Set;function hi(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ae=X.d;X.d={f:Z1,r:V1,D:k1,C:K1,L:J1,m:$1,X:F1,S:W1,M:I1};function Z1(){var t=Ae.f(),e=Ri();return t||e}function V1(t){var e=ia(t);e!==null&&e.tag===5&&e.type==="form"?Vr(e):Ae.r(t)}var sa=typeof document>"u"?null:document;function P0(t,e,l){var a=sa;if(a&&typeof e=="string"&&e){var n=Vt(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),Ks.has(n)||(Ks.add(n),t={rel:t,crossOrigin:l,href:e},a.querySelector(n)===null&&(e=a.createElement("link"),bt(e,"link",t),mt(e),a.head.appendChild(e)))}}function k1(t){Ae.D(t),P0("dns-prefetch",t,null)}function K1(t,e){Ae.C(t,e),P0("preconnect",t,e)}function J1(t,e,l){Ae.L(t,e,l);var a=sa;if(a&&t&&e){var n='link[rel="preload"][as="'+Vt(e)+'"]';e==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+Vt(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+Vt(l.imageSizes)+'"]')):n+='[href="'+Vt(t)+'"]';var i=n;switch(e){case"style":i=ea(t);break;case"script":i=oa(t)}Wt.has(i)||(t=I({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),Wt.set(i,t),a.querySelector(n)!==null||e==="style"&&a.querySelector(fn(i))||e==="script"&&a.querySelector(sn(i))||(e=a.createElement("link"),bt(e,"link",t),mt(e),a.head.appendChild(e)))}}function $1(t,e){Ae.m(t,e);var l=sa;if(l&&t){var a=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+Vt(a)+'"][href="'+Vt(t)+'"]',i=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=oa(t)}if(!Wt.has(i)&&(t=I({rel:"modulepreload",href:t},e),Wt.set(i,t),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(sn(i)))return}a=l.createElement("link"),bt(a,"link",t),mt(a),l.head.appendChild(a)}}}function W1(t,e,l){Ae.S(t,e,l);var a=sa;if(a&&t){var n=Gl(a).hoistableStyles,i=ea(t);e=e||"default";var u=n.get(i);if(!u){var f={loading:0,preload:null};if(u=a.querySelector(fn(i)))f.loading=5;else{t=I({rel:"stylesheet",href:t,"data-precedence":e},l),(l=Wt.get(i))&&bf(t,l);var s=u=a.createElement("link");mt(s),bt(s,"link",t),s._p=new Promise(function(r,y){s.onload=r,s.onerror=y}),s.addEventListener("load",function(){f.loading|=1}),s.addEventListener("error",function(){f.loading|=2}),f.loading|=4,Xn(u,e,a)}u={type:"stylesheet",instance:u,count:1,state:f},n.set(i,u)}}}function F1(t,e){Ae.X(t,e);var l=sa;if(l&&t){var a=Gl(l).hoistableScripts,n=oa(t),i=a.get(n);i||(i=l.querySelector(sn(n)),i||(t=I({src:t,async:!0},e),(e=Wt.get(n))&&xf(t,e),i=l.createElement("script"),mt(i),bt(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function I1(t,e){Ae.M(t,e);var l=sa;if(l&&t){var a=Gl(l).hoistableScripts,n=oa(t),i=a.get(n);i||(i=l.querySelector(sn(n)),i||(t=I({src:t,async:!0,type:"module"},e),(e=Wt.get(n))&&xf(t,e),i=l.createElement("script"),mt(i),bt(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function Js(t,e,l,a){var n=(n=Ge.current)?hi(n):null;if(!n)throw Error(b(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=ea(l.href),l=Gl(n).hoistableStyles,a=l.get(e),a||(a={type:"style",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=ea(l.href);var i=Gl(n).hoistableStyles,u=i.get(t);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,u),(i=n.querySelector(fn(t)))&&!i._p&&(u.instance=i,u.state.loading=5),Wt.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Wt.set(t,l),i||P1(n,t,l,u.state))),e&&a===null)throw Error(b(528,""));return u}if(e&&a!==null)throw Error(b(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=oa(l),l=Gl(n).hoistableScripts,a=l.get(e),a||(a={type:"script",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(b(444,t))}}function ea(t){return'href="'+Vt(t)+'"'}function fn(t){return'link[rel="stylesheet"]['+t+"]"}function td(t){return I({},t,{"data-precedence":t.precedence,precedence:null})}function P1(t,e,l,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),bt(e,"link",l),mt(e),t.head.appendChild(e))}function oa(t){return'[src="'+Vt(t)+'"]'}function sn(t){return"script[async]"+t}function $s(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+Vt(l.href)+'"]');if(a)return e.instance=a,mt(a),a;var n=I({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),mt(a),bt(a,"style",n),Xn(a,l.precedence,t),e.instance=a;case"stylesheet":n=ea(l.href);var i=t.querySelector(fn(n));if(i)return e.state.loading|=4,e.instance=i,mt(i),i;a=td(l),(n=Wt.get(n))&&bf(a,n),i=(t.ownerDocument||t).createElement("link"),mt(i);var u=i;return u._p=new Promise(function(f,s){u.onload=f,u.onerror=s}),bt(i,"link",a),e.state.loading|=4,Xn(i,l.precedence,t),e.instance=i;case"script":return i=oa(l.src),(n=t.querySelector(sn(i)))?(e.instance=n,mt(n),n):(a=l,(n=Wt.get(i))&&(a=I({},l),xf(a,n)),t=t.ownerDocument||t,n=t.createElement("script"),mt(n),bt(n,"link",a),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(b(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(a=e.instance,e.state.loading|=4,Xn(a,l.precedence,t));return e.instance}function Xn(t,e,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,i=n,u=0;u<a.length;u++){var f=a[u];if(f.dataset.precedence===e)i=f;else if(i!==n)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function bf(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function xf(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Qn=null;function Ws(t,e,l){if(Qn===null){var a=new Map,n=Qn=new Map;n.set(l,a)}else n=Qn,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(t))return a;for(a.set(t,null),l=l.getElementsByTagName(t),n=0;n<l.length;n++){var i=l[n];if(!(i[en]||i[yt]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(e)||"";u=t+u;var f=a.get(u);f?f.push(i):a.set(u,[i])}}return a}function Fs(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function th(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function ed(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}function eh(t,e,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&!(l.state.loading&4)){if(l.instance===null){var n=ea(a.href),i=e.querySelector(fn(n));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=gi.bind(t),e.then(t,t)),l.state.loading|=4,l.instance=i,mt(i);return}i=e.ownerDocument||e,a=td(a),(n=Wt.get(n))&&bf(a,n),i=i.createElement("link"),mt(i);var u=i;u._p=new Promise(function(f,s){u.onload=f,u.onerror=s}),bt(i,"link",a),l.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(l,e),(e=l.state.preload)&&!(l.state.loading&3)&&(t.count++,l=gi.bind(t),e.addEventListener("load",l),e.addEventListener("error",l))}}var _u=0;function lh(t,e){return t.stylesheets&&t.count===0&&wn(t,t.stylesheets),0<t.count||0<t.imgCount?function(l){var a=setTimeout(function(){if(t.stylesheets&&wn(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+e);0<t.imgBytes&&_u===0&&(_u=62500*Y1());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&wn(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>_u?50:800)+e);return t.unsuspend=l,function(){t.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function gi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)wn(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var yi=null;function wn(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,yi=new Map,e.forEach(ah,t),yi=null,gi.call(t))}function ah(t,e){if(!(e.state.loading&4)){var l=yi.get(t);if(l)var a=l.get(null);else{l=new Map,yi.set(t,l);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(l.set(u.dataset.precedence,u),a=u)}a&&l.set(null,a)}n=e.instance,u=n.getAttribute("data-precedence"),i=l.get(u)||a,i===a&&l.set(null,n),l.set(u,n),this.count++,a=gi.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),i?i.parentNode.insertBefore(n,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var Ja={$$typeof:he,Provider:null,Consumer:null,_currentValue:ul,_currentValue2:ul,_threadCount:0};function nh(t,e,l,a,n,i,u,f,s){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ki(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ki(0),this.hiddenUpdates=ki(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function ld(t,e,l,a,n,i,u,f,s,r,y,p){return t=new nh(t,e,l,u,s,r,y,p,f),e=1,i===!0&&(e|=24),i=Ut(3,null,null,e),t.current=i,i.stateNode=t,e=Vc(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:e},Jc(i),t}function ad(t){return t?(t=Rl,t):Rl}function nd(t,e,l,a,n,i){n=ad(n),a.context===null?a.context=n:a.pendingContext=n,a=Qe(e),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=we(t,a,e),l!==null&&(Nt(l,t,e),Ta(l,t,e))}function Is(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function Sf(t,e){Is(t,e),(t=t.alternate)&&Is(t,e)}function id(t){if(t.tag===13||t.tag===31){var e=xl(t,67108864);e!==null&&Nt(e,t,67108864),Sf(t,67108864)}}function Ps(t){if(t.tag===13||t.tag===31){var e=Bt();e=Dc(e);var l=xl(t,e);l!==null&&Nt(l,t,e),Sf(t,e)}}var pi=!0;function ih(t,e,l,a){var n=A.T;A.T=null;var i=X.p;try{X.p=2,zf(t,e,l,a)}finally{X.p=i,A.T=n}}function uh(t,e,l,a){var n=A.T;A.T=null;var i=X.p;try{X.p=8,zf(t,e,l,a)}finally{X.p=i,A.T=n}}function zf(t,e,l,a){if(pi){var n=Sc(a);if(n===null)Su(t,e,a,vi,l),to(t,a);else if(fh(n,t,e,l,a))a.stopPropagation();else if(to(t,a),e&4&&-1<ch.indexOf(t)){for(;n!==null;){var i=ia(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=al(i.pendingLanes);if(u!==0){var f=i;for(f.pendingLanes|=2,f.entangledLanes|=2;u;){var s=1<<31-Yt(u);f.entanglements[1]|=s,u&=~s}ue(i),!(G&6)&&(ci=Ct()+500,cn(0))}}break;case 31:case 13:f=xl(i,2),f!==null&&Nt(f,i,2),Ri(),Sf(i,2)}if(i=Sc(a),i===null&&Su(t,e,a,vi,l),i===n)break;n=i}n!==null&&a.stopPropagation()}else Su(t,e,a,null,l)}}function Sc(t){return t=Rc(t),_f(t)}var vi=null;function _f(t){if(vi=null,t=Ml(t),t!==null){var e=Fa(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=Ao(e),t!==null)return t;t=null}else if(l===31){if(t=Eo(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return vi=t,null}function ud(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(kd()){case Oo:return 2;case Do:return 8;case Kn:case Kd:return 32;case Uo:return 268435456;default:return 32}default:return 32}}var zc=!1,Ve=null,ke=null,Ke=null,$a=new Map,Wa=new Map,He=[],ch="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function to(t,e){switch(t){case"focusin":case"focusout":Ve=null;break;case"dragenter":case"dragleave":ke=null;break;case"mouseover":case"mouseout":Ke=null;break;case"pointerover":case"pointerout":$a.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wa.delete(e.pointerId)}}function pa(t,e,l,a,n,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},e!==null&&(e=ia(e),e!==null&&id(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function fh(t,e,l,a,n){switch(e){case"focusin":return Ve=pa(Ve,t,e,l,a,n),!0;case"dragenter":return ke=pa(ke,t,e,l,a,n),!0;case"mouseover":return Ke=pa(Ke,t,e,l,a,n),!0;case"pointerover":var i=n.pointerId;return $a.set(i,pa($a.get(i)||null,t,e,l,a,n)),!0;case"gotpointercapture":return i=n.pointerId,Wa.set(i,pa(Wa.get(i)||null,t,e,l,a,n)),!0}return!1}function cd(t){var e=Ml(t.target);if(e!==null){var l=Fa(e);if(l!==null){if(e=l.tag,e===13){if(e=Ao(l),e!==null){t.blockedOn=e,qf(t.priority,function(){Ps(l)});return}}else if(e===31){if(e=Eo(l),e!==null){t.blockedOn=e,qf(t.priority,function(){Ps(l)});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ln(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=Sc(t.nativeEvent);if(l===null){l=t.nativeEvent;var a=new l.constructor(l.type,l);Xu=a,l.target.dispatchEvent(a),Xu=null}else return e=ia(l),e!==null&&id(e),t.blockedOn=l,!1;e.shift()}return!0}function eo(t,e,l){Ln(t)&&l.delete(e)}function sh(){zc=!1,Ve!==null&&Ln(Ve)&&(Ve=null),ke!==null&&Ln(ke)&&(ke=null),Ke!==null&&Ln(Ke)&&(Ke=null),$a.forEach(eo),Wa.forEach(eo)}function En(t,e){t.blockedOn===e&&(t.blockedOn=null,zc||(zc=!0,ot.unstable_scheduleCallback(ot.unstable_NormalPriority,sh)))}var Nn=null;function lo(t){Nn!==t&&(Nn=t,ot.unstable_scheduleCallback(ot.unstable_NormalPriority,function(){Nn===t&&(Nn=null);for(var e=0;e<t.length;e+=3){var l=t[e],a=t[e+1],n=t[e+2];if(typeof a!="function"){if(_f(a||l)===null)continue;break}var i=ia(l);i!==null&&(t.splice(e,3),e-=3,lc(i,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function la(t){function e(s){return En(s,t)}Ve!==null&&En(Ve,t),ke!==null&&En(ke,t),Ke!==null&&En(Ke,t),$a.forEach(e),Wa.forEach(e);for(var l=0;l<He.length;l++){var a=He[l];a.blockedOn===t&&(a.blockedOn=null)}for(;0<He.length&&(l=He[0],l.blockedOn===null);)cd(l),l.blockedOn===null&&He.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],i=l[a+1],u=n[Tt]||null;if(typeof i=="function")u||lo(l);else if(u){var f=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[Tt]||null)f=u.formAction;else if(_f(n)!==null)continue}else f=u.action;typeof f=="function"?l[a+1]=f:(l.splice(a,3),a-=3),lo(l)}}}function fd(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function e(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),n!==null&&(n(),n=null)}}}function jf(t){this._internalRoot=t}qi.prototype.render=jf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(b(409));var l=e.current,a=Bt();nd(l,a,t,e,null,null)};qi.prototype.unmount=jf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;nd(t.current,2,null,t,null,null),Ri(),e[na]=null}};function qi(t){this._internalRoot=t}qi.prototype.unstable_scheduleHydration=function(t){if(t){var e=Bo();t={blockedOn:null,target:t,priority:e};for(var l=0;l<He.length&&e!==0&&e<He[l].priority;l++);He.splice(l,0,t),l===0&&cd(t)}};var ao=_o.version;if(ao!=="19.2.8")throw Error(b(527,ao,"19.2.8"));X.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(b(188)):(t=Object.keys(t).join(","),Error(b(268,t)));return t=Gd(e),t=t!==null?No(t):null,t=t===null?null:t.stateNode,t};var oh={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:A,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tn.isDisabled&&Tn.supportsFiber)try{Ia=Tn.inject(oh),Rt=Tn}catch{}}Si.createRoot=function(t,e){if(!jo(t))throw Error(b(299));var l=!1,a="",n=Pr,i=t0,u=e0;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(u=e.onRecoverableError)),e=ld(t,1,!1,null,null,l,a,null,n,i,u,fd),t[na]=e.current,vf(t),new jf(e)};Si.hydrateRoot=function(t,e,l){if(!jo(t))throw Error(b(299));var a=!1,n="",i=Pr,u=t0,f=e0,s=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(u=l.onCaughtError),l.onRecoverableError!==void 0&&(f=l.onRecoverableError),l.formState!==void 0&&(s=l.formState)),e=ld(t,1,!0,e,l??null,a,n,s,i,u,f,fd),e.context=ad(null),l=e.current,a=Bt(),a=Dc(a),n=Qe(a),n.callback=null,we(l,n,a),l=a,e.current.lanes=l,tn(e,l),ue(e),t[na]=e.current,vf(t),new qi(e)};Si.version="19.2.8";function sd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sd)}catch(t){console.error(t)}}sd(),po.exports=Si;var rh=po.exports;const dh=uo(rh);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=(...t)=>t.filter((e,l,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===l).join(" ").trim();/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,l,a)=>a?a.toUpperCase():l.toLowerCase());/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const no=t=>{const e=hh(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ju={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},yh=Q.createContext({}),ph=()=>Q.useContext(yh),vh=Q.forwardRef(({color:t,size:e,strokeWidth:l,absoluteStrokeWidth:a,className:n="",children:i,iconNode:u,...f},s)=>{const{size:r=24,strokeWidth:y=2,absoluteStrokeWidth:p=!1,color:d="currentColor",className:g=""}=ph()??{},x=a??p?Number(l??y)*24/Number(e??r):l??y;return Q.createElement("svg",{ref:s,...ju,width:e??r??ju.width,height:e??r??ju.height,stroke:t??d,strokeWidth:x,className:od("lucide",g,n),...!i&&!gh(f)&&{"aria-hidden":"true"},...f},[...u.map(([_,q])=>Q.createElement(_,q)),...Array.isArray(i)?i:[i]])});/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=(t,e)=>{const l=Q.forwardRef(({className:a,...n},i)=>Q.createElement(vh,{ref:i,iconNode:e,className:od(`lucide-${mh(no(t))}`,`lucide-${t}`,a),...n}));return l.displayName=no(t),l};/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],xh=J("activity",bh);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],zh=J("arrow-right",Sh);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],Au=J("arrow-up-right",_h);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=[["path",{d:"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8",key:"1w3rig"}],["path",{d:"M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1",key:"n2jgmb"}],["path",{d:"M2 21h20",key:"1nyx9w"}],["path",{d:"M7 8v3",key:"1qtyvj"}],["path",{d:"M12 8v3",key:"hwp4zt"}],["path",{d:"M17 8v3",key:"1i6e5u"}],["path",{d:"M7 4h.01",key:"1bh4kh"}],["path",{d:"M12 4h.01",key:"1ujb9j"}],["path",{d:"M17 4h.01",key:"1upcoc"}]],Af=J("cake",jh);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Eh=J("check",Ah);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],Ef=J("clock",Nh);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]],yl=J("gamepad-2",Th);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=[["line",{x1:"6",x2:"10",y1:"12",y2:"12",key:"161bw2"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"15",x2:"15.01",y1:"13",y2:"13",key:"dqpgro"}],["line",{x1:"18",x2:"18.01",y1:"11",y2:"11",key:"meh2c"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]],Oh=J("gamepad",Mh);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]],io=J("gauge",Dh);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=[["path",{d:"M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762",key:"17lmqv"}]],Hh=J("heart-handshake",Uh);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Rh=J("heart",Ch);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Bh=J("house",Yh);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Gh=J("map-pin",qh);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Qh=J("menu",Xh);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],Pt=J("message-circle",wh);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=[["path",{d:"M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z",key:"vbtd3f"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",key:"x3v2xh"}]],rd=J("monitor-play",Lh);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]],Vh=J("navigation",Zh);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Kh=J("shield",kh);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Nf=J("sparkles",Jh);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=[["path",{d:"M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2",key:"pwuv1l"}],["path",{d:"M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2",key:"1y54w1"}],["path",{d:"M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3",key:"e30mpu"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3",key:"i0yafy"}]],dd=J("trophy",$h);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=[["path",{d:"m17 2-5 5-5-5",key:"16satq"}],["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",key:"1e6viu"}]],Fh=J("tv",Wh);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]],Ph=J("users-round",Ih);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Tf=J("users",tg);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],lg=J("wifi",eg);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ng=J("x",ag);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]],bi=J("zap",ig);function ug(){const[t,e]=Q.useState(!1),l=()=>{const a=encodeURIComponent("Hi Gaming Hub! I would like to inquire about console availability.");window.open(`https://wa.me/919876543210?text=${a}`,"_blank")};return c.jsxs("header",{className:"navbar",children:[c.jsxs("div",{className:"container nav-wrap",children:[c.jsxs("a",{href:"#top",className:"brand-link",children:[c.jsx("div",{className:"brand-logo-badge",children:c.jsx(yl,{size:22})}),c.jsx("span",{className:"brand-name",children:"GAMING HUB"})]}),c.jsxs("nav",{className:"nav-links",children:[c.jsx("a",{href:"#experience",children:"Experience"}),c.jsx("a",{href:"#games",children:"Games"}),c.jsx("a",{href:"#racing",children:"Sim Racing"}),c.jsx("a",{href:"#events",children:"Private Events"}),c.jsx("a",{href:"#offers",children:"Offers"}),c.jsx("a",{href:"#location",children:"Visit Us"})]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.8rem"},children:[c.jsxs("button",{type:"button",onClick:l,className:"btn btn-whatsapp",style:{padding:"0.6rem 1.2rem",fontSize:"0.85rem"},children:[c.jsx(Pt,{size:17}),c.jsx("span",{children:"Chat on WhatsApp"})]}),c.jsx("button",{className:"menu-button",onClick:()=>e(!t),"aria-label":"Toggle menu",style:{background:"none",border:"none",color:"#fff",cursor:"pointer",display:"none"},children:t?c.jsx(ng,{size:24}):c.jsx(Qh,{size:24})})]})]}),t&&c.jsxs("div",{style:{position:"fixed",top:"var(--nav-h)",left:0,right:0,bottom:0,backgroundColor:"rgba(10, 11, 14, 0.98)",backdropFilter:"blur(20px)",display:"flex",flexDirection:"column",padding:"2.5rem 1.5rem",gap:"1.5rem",zIndex:999},children:[c.jsx("a",{href:"#experience",onClick:()=>e(!1),style:{color:"#fff",fontSize:"1.25rem",fontWeight:700,textDecoration:"none"},children:"Experience"}),c.jsx("a",{href:"#games",onClick:()=>e(!1),style:{color:"#fff",fontSize:"1.25rem",fontWeight:700,textDecoration:"none"},children:"Games"}),c.jsx("a",{href:"#racing",onClick:()=>e(!1),style:{color:"#fff",fontSize:"1.25rem",fontWeight:700,textDecoration:"none"},children:"Sim Racing"}),c.jsx("a",{href:"#events",onClick:()=>e(!1),style:{color:"#fff",fontSize:"1.25rem",fontWeight:700,textDecoration:"none"},children:"Private Events"}),c.jsx("a",{href:"#offers",onClick:()=>e(!1),style:{color:"#fff",fontSize:"1.25rem",fontWeight:700,textDecoration:"none"},children:"Offers"}),c.jsx("a",{href:"#location",onClick:()=>e(!1),style:{color:"#fff",fontSize:"1.25rem",fontWeight:700,textDecoration:"none"},children:"Visit Us"}),c.jsx("div",{style:{marginTop:"auto"},children:c.jsxs("button",{onClick:l,className:"btn btn-whatsapp",style:{width:"100%",justifyContent:"center",padding:"0.9rem"},children:[c.jsx(Pt,{size:18})," Chat on WhatsApp"]})})]}),c.jsx("style",{children:`
        @media (max-width: 768px) {
          .menu-button {
            display: block !important;
          }
        }
      `})]})}const cg=[{val:"₹99",sup:"+",lbl:"Per Hour"},{val:"PS4",lbl:"& PS5 Ready"},{val:"10AM",lbl:"– 10PM Daily"},{val:"3HR+",lbl:"Special Deals"}];function fg(){const[t,e]=Q.useState(!1),[l,a]=Q.useState({x:50,y:40});Q.useEffect(()=>{const s=setTimeout(()=>e(!0),100);return()=>clearTimeout(s)},[]);const n=s=>{const{left:r,top:y,width:p,height:d}=s.currentTarget.getBoundingClientRect(),g=Math.round((s.clientX-r)/p*100),x=Math.round((s.clientY-y)/d*100);a({x:g,y:x})},i=()=>{const s=encodeURIComponent("Hi Gaming Hub! I'd like to check availability and visit.");window.open(`https://wa.me/919876543210?text=${s}`,"_blank")},u=l.x-50,f=l.y-50;return c.jsxs("section",{id:"top",className:"hero",onMouseMove:n,children:[c.jsxs("div",{className:"hero__bg",children:[c.jsx("img",{className:"hero__bg-img",src:"https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1800&q=90",alt:"",loading:"eager",fetchPriority:"high"}),c.jsx("div",{className:"hero__vignette"}),c.jsx("div",{className:"hero__spotlight",style:{background:`radial-gradient(circle 550px at ${l.x}% ${l.y}%, rgba(59, 130, 246, 0.16), transparent 70%)`}}),c.jsx("div",{className:"hero__fade-bottom"}),c.jsx("div",{className:"hero__fade-top"}),c.jsx("div",{className:"hero__blob hero__blob--blue"}),c.jsx("div",{className:"hero__blob hero__blob--purple"}),c.jsx("div",{className:"hero__particles",children:[...Array(6)].map((s,r)=>c.jsx("span",{className:`hero__particle hero__particle--${r+1}`},r))}),c.jsxs("div",{className:"hero__ps-symbols",children:[c.jsx("div",{className:"ps-sym ps-sym--triangle",style:{transform:`translate3d(${-(u*.22)}px, ${-(f*.22)}px, 0)`},children:c.jsx("svg",{viewBox:"0 0 24 24",width:"42",height:"42",fill:"none",stroke:"#10b981",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("polygon",{points:"12 3 22 21 2 21"})})}),c.jsx("div",{className:"ps-sym ps-sym--circle",style:{transform:`translate3d(${u*.18}px, ${-(f*.18)}px, 0)`},children:c.jsx("svg",{viewBox:"0 0 24 24",width:"38",height:"38",fill:"none",stroke:"#f43f5e",strokeWidth:"2.4",children:c.jsx("circle",{cx:"12",cy:"12",r:"9"})})}),c.jsx("div",{className:"ps-sym ps-sym--cross",style:{transform:`translate3d(${-(u*.15)}px, ${f*.15}px, 0)`},children:c.jsxs("svg",{viewBox:"0 0 24 24",width:"36",height:"36",fill:"none",stroke:"#3b82f6",strokeWidth:"2.4",strokeLinecap:"round",children:[c.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),c.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})}),c.jsx("div",{className:"ps-sym ps-sym--square",style:{transform:`translate3d(${u*.2}px, ${f*.2}px, 0)`},children:c.jsx("svg",{viewBox:"0 0 24 24",width:"38",height:"38",fill:"none",stroke:"#ec4899",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"})})})]})]}),c.jsxs("div",{className:`hero__hud hero__hud--left ${t?"hero__hud--in":""}`,children:[c.jsxs("div",{className:"hud-badge",children:[c.jsx("span",{className:"hud-pulse-led"}),c.jsx(yl,{size:13,className:"hud-icon"}),c.jsx("span",{children:"P1 READY"})]}),c.jsx("div",{className:"hud-bar",children:c.jsx("div",{className:"hud-bar-fill"})}),c.jsx("div",{className:"hud-sub",children:"DUALSENSE · WIRELESS"})]}),c.jsxs("div",{className:`hero__hud hero__hud--right ${t?"hero__hud--in":""}`,children:[c.jsxs("div",{className:"hud-badge",children:[c.jsx(xh,{size:13,className:"hud-icon hud-icon--green"}),c.jsx("span",{children:"120 FPS · 4K HDR"})]}),c.jsxs("div",{className:"hud-sub",children:[c.jsx("span",{className:"hud-dot-live"})," LOW LATENCY MODE"]})]}),c.jsxs("div",{className:"hero__body",children:[c.jsxs("div",{className:`hero__pill ${t?"hero__pill--in":""}`,children:[c.jsx("span",{className:"hero__dot"}),"Open Every Day  ·  10 AM – 10 PM"]}),c.jsx("div",{className:`hero__lightbar ${t?"hero__lightbar--in":""}`,children:c.jsx("div",{className:"hero__lightbar-glow"})}),c.jsxs("h1",{className:"hero__h1",children:[c.jsx("span",{className:`hero__line hero__line--eyebrow ${t?"hero__line--in":""}`,children:"The Ultimate"}),c.jsxs("span",{className:`hero__line hero__line--main ${t?"hero__line--in":""}`,children:["Gaming Lounge",c.jsx("span",{className:"hero__accent",children:"."})]})]}),c.jsxs("p",{className:`hero__sub ${t?"hero__sub--in":""}`,children:["PS4 & PS5 lounge — hourly sessions, squad battles, birthday parties & private bookings.",c.jsx("br",{}),c.jsx("strong",{children:"Starting at ₹99."})]}),c.jsxs("div",{className:`hero__ctas ${t?"hero__ctas--in":""}`,children:[c.jsxs("button",{type:"button",onClick:i,className:"hero__btn hero__btn--wa",children:[c.jsx(Pt,{size:18}),"Book on WhatsApp"]}),c.jsxs("a",{href:"#experience",className:"hero__btn hero__btn--ghost",children:["Explore",c.jsx(zh,{size:17})]})]}),c.jsx("div",{className:`hero__stats ${t?"hero__stats--in":""}`,children:cg.map((s,r)=>c.jsxs("div",{className:"hero__stat",children:[c.jsxs("strong",{children:[s.val,s.sup&&c.jsx("sup",{children:s.sup})]}),c.jsx("span",{children:s.lbl})]},r))})]}),c.jsx("div",{className:"hero__scroll-cue",children:c.jsx("div",{className:"hero__scroll-line"})}),c.jsx("style",{children:`
        /* ─── Root ───────────────────────────── */
        .hero {
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding-top: var(--nav-h);
        }

        /* ─── Background layers ──────────────── */
        .hero__bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .hero__bg-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          /* Very slight scale so we have room to breathe */
          transform: scale(1.03);
          /* desaturate and dim the image so it's atmosphere, not distraction */
          filter: brightness(0.28) saturate(0.6);
          transition: transform 8s ease;
        }
        .hero:hover .hero__bg-img {
          transform: scale(1.06);
        }

        /* Dense centre-to-edge vignette */
        .hero__vignette {
          position: absolute; inset: 0;
          background: radial-gradient(
            ellipse 90% 90% at 50% 50%,
            rgba(10,11,14,0.15) 0%,
            rgba(10,11,14,0.78) 70%,
            rgba(10,11,14,0.96) 100%
          );
        }

        /* Bottom solid fade into site background */
        .hero__fade-bottom {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 280px;
          background: linear-gradient(to bottom, transparent 0%, var(--bg-main) 100%);
        }

        /* Subtle top shade */
        .hero__fade-top {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 160px;
          background: linear-gradient(to top, transparent 0%, rgba(10,11,14,0.6) 100%);
        }

        /* Coloured ambient blobs */
        .hero__blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
          opacity: 0.55;
          animation: blob-drift 10s ease-in-out infinite alternate;
        }
        .hero__blob--blue {
          width: 600px; height: 600px;
          top: -100px; left: -100px;
          background: rgba(37, 99, 235, 0.18);
          animation-delay: 0s;
        }
        .hero__blob--purple {
          width: 500px; height: 500px;
          bottom: -80px; right: -80px;
          background: rgba(124, 58, 237, 0.14);
          animation-delay: -5s;
        }
        @keyframes blob-drift {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(30px, -30px) scale(1.08); }
        }

        /* Dynamic interactive spotlight */
        .hero__spotlight {
          position: absolute;
          inset: 0;
          pointer-events: none;
          transition: background 0.25s ease-out;
          mix-blend-mode: screen;
        }

        /* Ambient floating particles */
        .hero__particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }
        .hero__particle {
          position: absolute;
          border-radius: 50%;
          background: rgba(147, 197, 253, 0.45);
          box-shadow: 0 0 8px rgba(59, 130, 246, 0.6);
          animation: float-particle linear infinite;
        }
        .hero__particle--1 { width: 4px; height: 4px; left: 18%; bottom: -10px; animation-duration: 11s; animation-delay: 0s; }
        .hero__particle--2 { width: 3px; height: 3px; left: 32%; bottom: -10px; animation-duration: 14s; animation-delay: 2s; }
        .hero__particle--3 { width: 5px; height: 5px; left: 52%; bottom: -10px; animation-duration: 10s; animation-delay: 4.5s; }
        .hero__particle--4 { width: 3px; height: 3px; left: 68%; bottom: -10px; animation-duration: 15s; animation-delay: 1.5s; }
        .hero__particle--5 { width: 4px; height: 4px; left: 84%; bottom: -10px; animation-duration: 12s; animation-delay: 3s; }
        .hero__particle--6 { width: 2px; height: 2px; left: 24%; bottom: -10px; animation-duration: 16s; animation-delay: 6s; }

        @keyframes float-particle {
          0% { transform: translateY(0) scale(0.8); opacity: 0; }
          15% { opacity: 0.75; }
          85% { opacity: 0.55; }
          100% { transform: translateY(-105vh) scale(1.2); opacity: 0; }
        }

        /* ─── PlayStation 3D Symbols ─────────── */
        .hero__ps-symbols {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }

        .ps-sym {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.5;
          filter: drop-shadow(0 0 16px currentColor);
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
        }

        .ps-sym--triangle {
          top: 20%;
          left: 7%;
          color: #10b981;
          animation: ps-sym-float-1 8s ease-in-out infinite alternate;
        }
        .ps-sym--circle {
          top: 24%;
          right: 8%;
          color: #f43f5e;
          animation: ps-sym-float-2 9.5s ease-in-out infinite alternate;
        }
        .ps-sym--cross {
          bottom: 22%;
          left: 8%;
          color: #3b82f6;
          animation: ps-sym-float-3 8.5s ease-in-out infinite alternate;
        }
        .ps-sym--square {
          bottom: 25%;
          right: 9%;
          color: #ec4899;
          animation: ps-sym-float-4 10s ease-in-out infinite alternate;
        }

        @keyframes ps-sym-float-1 {
          0%   { transform: translateY(0) rotate(0deg) scale(0.95); }
          50%  { transform: translateY(-16px) rotate(14deg) scale(1.05); }
          100% { transform: translateY(8px) rotate(-10deg) scale(0.98); }
        }
        @keyframes ps-sym-float-2 {
          0%   { transform: translateY(0) rotate(0deg) scale(1); }
          50%  { transform: translateY(-20px) rotate(-18deg) scale(1.08); }
          100% { transform: translateY(12px) rotate(12deg) scale(0.96); }
        }
        @keyframes ps-sym-float-3 {
          0%   { transform: translateY(0) rotate(0deg) scale(0.96); }
          50%  { transform: translateY(18px) rotate(22deg) scale(1.06); }
          100% { transform: translateY(-12px) rotate(-15deg) scale(1); }
        }
        @keyframes ps-sym-float-4 {
          0%   { transform: translateY(0) rotate(0deg) scale(1.02); }
          50%  { transform: translateY(-15px) rotate(-16deg) scale(0.95); }
          100% { transform: translateY(14px) rotate(15deg) scale(1.04); }
        }

        /* ─── DualSense Lightbar ─────────────── */
        .hero__lightbar {
          width: 130px;
          height: 2px;
          margin: -0.6rem 0 1.5rem;
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.8), rgba(6, 182, 212, 0.95), rgba(59, 130, 246, 0.8), transparent);
          border-radius: 9999px;
          position: relative;
          opacity: 0;
          transform: scaleX(0.4);
          transition: opacity 0.8s ease 0.2s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s;
        }
        .hero__lightbar--in {
          opacity: 1 !important;
          transform: scaleX(1) !important;
        }
        .hero__lightbar-glow {
          position: absolute;
          inset: -4px 0;
          background: inherit;
          filter: blur(6px);
          animation: dualsense-breath 3.5s ease-in-out infinite;
        }
        @keyframes dualsense-breath {
          0%, 100% { opacity: 0.45; transform: scaleY(0.8); }
          50%      { opacity: 1; transform: scaleY(1.4); filter: blur(8px); }
        }

        /* ─── Flanking Gaming HUD Badges ─────── */
        .hero__hud {
          position: absolute;
          z-index: 3;
          top: 42%;
          background: rgba(10, 11, 14, 0.75);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 0.75rem 1.1rem;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1) 0.5s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.5s;
        }
        .hero__hud--left {
          left: 2.2rem;
          transform: translateX(-24px);
        }
        .hero__hud--right {
          right: 2.2rem;
          transform: translateX(24px);
        }
        .hero__hud--in {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }

        .hud-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #ffffff;
        }
        .hud-pulse-led {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #3b82f6;
          box-shadow: 0 0 8px #3b82f6;
          animation: hud-led-pulse 1.8s ease-in-out infinite;
        }
        @keyframes hud-led-pulse {
          0%, 100% { opacity: 0.5; transform: scale(0.9); }
          50%      { opacity: 1; transform: scale(1.3); }
        }
        .hud-icon {
          color: #3b82f6;
        }
        .hud-icon--green {
          color: #10b981;
        }
        .hud-bar {
          width: 100%;
          height: 3px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 9999px;
          overflow: hidden;
        }
        .hud-bar-fill {
          height: 100%;
          width: 85%;
          background: linear-gradient(90deg, #3b82f6, #06b6d4);
          border-radius: 9999px;
          animation: hud-signal 2.4s ease-in-out infinite alternate;
        }
        @keyframes hud-signal {
          0%   { width: 55%; }
          50%  { width: 95%; }
          100% { width: 75%; }
        }
        .hud-sub {
          font-family: var(--font-mono);
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.09em;
          color: var(--text-subtle);
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .hud-dot-live {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 6px #10b981;
        }

        /* ─── Content ────────────────────────── */
        .hero__body {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 4rem 1.5rem 5rem;
          width: 100%;
          max-width: 820px;
          margin: 0 auto;
        }

        /* ─── Status pill ────────────────────── */
        .hero__pill {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          padding: 0.42rem 1.05rem;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 9999px;
          font-family: var(--font-mono);
          font-size: 0.74rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: rgba(255,255,255,0.62);
          margin-bottom: 1.4rem;
          /* entrance */
          opacity: 0;
          transform: translateY(-10px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .hero__pill--in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .hero__dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #22c55e;
          flex-shrink: 0;
          box-shadow: 0 0 0 0 rgba(34,197,94,0.6);
          animation: pulse-dot 2.4s ease infinite;
        }
        @keyframes pulse-dot {
          0%   { box-shadow: 0 0 0 0 rgba(34,197,94,0.6); }
          70%  { box-shadow: 0 0 0 9px rgba(34,197,94,0); }
          100% { box-shadow: 0 0 0 0 rgba(34,197,94,0); }
        }

        /* ─── Headline ───────────────────────── */
        .hero__h1 {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-family: var(--font-display);
          letter-spacing: -0.03em;
          margin-bottom: 1.4rem;
          gap: 0.2rem;
        }

        /* Each line animates individually */
        .hero__line {
          display: block;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hero__line--in { opacity: 1 !important; transform: translateY(0) !important; }

        @keyframes title-shimmer {
          0%   { background-position: -200% 0; }
          100% { background-position: 250% 0; }
        }

        .hero__line--eyebrow {
          font-size: clamp(0.97rem, 1.85vw, 1.33rem);
          font-weight: 700;
          color: rgba(255,255,255,0.48);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          transition-delay: 0.05s;
        }
        .hero__line--main {
          font-size: clamp(2.46rem, 5.3vw, 4.4rem);
          font-weight: 800;
          line-height: 1.06;
          text-transform: uppercase;
          letter-spacing: -0.03em;
          transition-delay: 0.15s;
          background: linear-gradient(
            110deg,
            #ffffff 0%,
            #ffffff 38%,
            #93c5fd 48%,
            #dbeafe 52%,
            #ffffff 62%,
            #ffffff 100%
          );
          background-size: 240% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: title-shimmer 7s ease-in-out infinite;
          filter: drop-shadow(0 2px 24px rgba(59,130,246,0.22));
        }

        .hero__accent { color: #3b82f6; }

        /* ─── Sub-copy ───────────────────────── */
        .hero__sub {
          color: rgba(255,255,255,0.52);
          font-size: clamp(0.97rem, 1.23vw, 1.07rem);
          line-height: 1.65;
          max-width: 530px;
          margin-bottom: 2rem;
          /* entrance */
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.65s ease 0.3s, transform 0.65s ease 0.3s;
        }
        .hero__sub--in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .hero__sub strong { color: rgba(255,255,255,0.92); font-weight: 600; }

        /* ─── CTAs ───────────────────────────── */
        .hero__ctas {
          display: flex;
          align-items: center;
          gap: 0.9rem;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 2.8rem;
          /* entrance */
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.65s ease 0.42s, transform 0.65s ease 0.42s;
        }
        .hero__ctas--in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .hero__btn {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          padding: 0.88rem 1.85rem;
          border-radius: 10px;
          font-family: var(--font-body);
          font-size: 0.94rem;
          font-weight: 700;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.25s cubic-bezier(0.16,1,0.3,1);
          white-space: nowrap;
        }

        .hero__btn--wa {
          background: #25d366;
          color: #fff;
          border: none;
          box-shadow: 0 8px 28px rgba(37,211,102,0.38);
        }
        .hero__btn--wa:hover {
          background: #20ba5a;
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 16px 40px rgba(37,211,102,0.5);
        }

        .hero__btn--ghost {
          background: rgba(255,255,255,0.07);
          color: rgba(255,255,255,0.75);
          border: 1px solid rgba(255,255,255,0.15);
        }
        .hero__btn--ghost:hover {
          background: rgba(255,255,255,0.13);
          border-color: rgba(255,255,255,0.32);
          color: #fff;
          transform: translateY(-3px);
        }

        /* ─── Stats strip ────────────────────── */
        .hero__stats {
          display: flex;
          align-items: center;
          gap: 0;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(12px);
          overflow: hidden;
          /* entrance */
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.65s ease 0.7s, transform 0.65s ease 0.7s;
        }
        .hero__stats--in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .hero__stat {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0.85rem 1.3rem;
          position: relative;
        }
        .hero__stat + .hero__stat::before {
          content: '';
          position: absolute;
          left: 0; top: 20%; bottom: 20%;
          width: 1px;
          background: rgba(255,255,255,0.08);
        }

        .hero__stat strong {
          font-family: var(--font-display);
          font-size: clamp(1.23rem, 2.05vw, 1.58rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1;
          letter-spacing: -0.03em;
        }
        .hero__stat strong sup {
          font-size: 0.6em;
          font-weight: 700;
          vertical-align: super;
        }
        .hero__stat span {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          font-weight: 600;
          color: rgba(255,255,255,0.4);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-top: 0.25rem;
        }

        /* ─── Scroll cue ─────────────────────── */
        .hero__scroll-cue {
          position: absolute;
          bottom: 2.5rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .hero__scroll-line {
          width: 1px;
          height: 60px;
          background: linear-gradient(to bottom, rgba(255,255,255,0.4), transparent);
          animation: scroll-line 2s ease-in-out infinite;
          transform-origin: top;
        }
        @keyframes scroll-line {
          0%   { transform: scaleY(0); opacity: 1; }
          100% { transform: scaleY(1); opacity: 0; }
        }

        /* ─── Responsive ─────────────────────── */
        @media (max-width: 640px) {
          .hero__body { padding: 3rem 1.2rem 6rem; }
          .hero__ctas { flex-direction: column; align-items: stretch; }
          .hero__btn { justify-content: center; }
          .hero__stats { flex-direction: column; border-radius: 12px; }
          .hero__stat + .hero__stat::before {
            top: 0; bottom: auto;
            left: 15%; right: 15%;
            width: auto; height: 1px;
          }
          .hero__stat { padding: 1rem 1.2rem; }
        }
      `})]})}function sg(){const t=[{icon:c.jsx(yl,{size:16}),text:"PS5 & PS4 PRO GAMING STATIONS"},{icon:c.jsx(bi,{size:16}),text:"HOURLY SESSIONS FROM ₹99"},{icon:c.jsx(dd,{size:16}),text:"WEEKLY SQUAD TOURNAMENTS"},{icon:c.jsx(Tf,{size:16}),text:"2 TO 4 PLAYER LOCAL MULTIPLAYER"},{icon:c.jsx(Nf,{size:16}),text:"BIRTHDAYS & WHOLE HUB EVENTS"},{icon:c.jsx(Rh,{size:16}),text:"FAMILY FRIENDLY ENVIRONMENT"},{icon:c.jsx(bi,{size:16}),text:"3+ HOURS SPECIAL CONDITIONS"}];return c.jsx("div",{className:"highlights-bar",children:c.jsx("div",{className:"highlights-track",children:t.concat(t).map((e,l)=>c.jsxs("span",{children:[e.icon," ",e.text]},l))})})}function og(){const t=[{icon:c.jsx(Oh,{size:24,color:"var(--accent-cyan)"}),title:"PS5 Next-Gen Gaming",desc:"Experience buttery-smooth 4K 120Hz gameplay, ray-traced reflections, and immersive DualSense haptic trigger feedback.",img:"https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80"},{icon:c.jsx(Fh,{size:24,color:"var(--accent-blue)"}),title:"PS4 Pro Library",desc:"Access a massive collection of iconic PlayStation 4 titles, split-screen classics, and intense story campaigns.",img:"https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80"},{icon:c.jsx(Ph,{size:24,color:"var(--accent-amber)"}),title:"Squad Multiplayer",desc:"Challenge your friends in local 2 to 4 player face-offs. Battle in EA FC, Mortal Kombat, WWE, or Call of Duty.",img:"https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80"},{icon:c.jsx(Hh,{size:24,color:"var(--accent-emerald)"}),title:"Family & Casual Hangouts",desc:"A safe, modern, and fun entertainment destination where parents, kids, and friend groups enjoy games together.",img:"https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&w=800&q=80"}];return c.jsx("section",{id:"experience",className:"section-padding",children:c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-header",children:[c.jsx("div",{className:"section-badge",children:"The Setup"}),c.jsxs("h2",{className:"section-title",children:["NOT JUST A GAME.",c.jsx("br",{}),c.jsx("span",{children:"AN ATMOSPHERE."})]}),c.jsx("p",{className:"section-subtitle",children:"Engineered from the ground up for maximum visual clarity, acoustic immersion, and seamless social gaming."})]}),c.jsx("div",{className:"cards-grid",children:t.map((e,l)=>c.jsxs("div",{className:"hub-card",children:[c.jsx("div",{className:"hub-card-media",children:c.jsx("img",{src:e.img,alt:e.title,loading:"lazy"})}),c.jsx("div",{className:"hub-card-body",children:c.jsxs("div",{children:[c.jsx("div",{style:{marginBottom:"1rem"},children:e.icon}),c.jsx("h3",{children:e.title}),c.jsx("p",{children:e.desc})]})})]},l))})]})})}const Eu=[{id:"ps5",tag:"01 · Next-Gen Console",title:`PS5 Ultra
HD Gaming`,desc:"Breathtaking 4K resolution, 120fps silky frame-rates, and DualSense haptic feedback that makes every game feel utterly physical.",icon:c.jsx(yl,{size:28}),accent:"#3b82f6",img:"https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=900&q=85",stat:"4K · 120fps",statLabel:"Next-Gen Output"},{id:"ps4",tag:"02 · Classic Console",title:`PS4 Pro
Power House`,desc:"A massive library of legendary titles — from God of War to The Last of Us. High-performance gaming for every style of player.",icon:c.jsx(bi,{size:28}),accent:"#f59e0b",img:"https://images.unsplash.com/photo-1580234831801-5b00ea82c388?w=900&q=85",stat:"500+",statLabel:"Game Titles"},{id:"squad",tag:"03 · Group Play",title:`Squad Up,
Play Together`,desc:"Bring your crew. Our stations are built for multiplayer chaos — couch co-op, split-screen, tournaments, and everything in between.",icon:c.jsx(Tf,{size:28}),accent:"#10b981",img:"https://images.unsplash.com/photo-1542751371-adc38448a05e?w=900&q=85",stat:"1–6",statLabel:"Players Per Station"},{id:"birthday",tag:"04 · Private Events",title:`Birthday &
Celebrations`,desc:"Throw the most unforgettable birthday ever. Exclusive lounge access, custom setups, and tailored gaming experiences for your crew.",icon:c.jsx(Af,{size:28}),accent:"#ec4899",img:"https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=900&q=85",stat:"Full",statLabel:"Private Lounge Hire"},{id:"racing",tag:"05 · Sim Racing",title:`Race Like
You Mean It`,desc:"Direct-drive cockpit with force-feedback steering, load-cell pedals, and curved ultra-wide display. The closest thing to a real car.",icon:c.jsx(dd,{size:28}),accent:"#f97316",img:"https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=900&q=85",stat:"GT7",statLabel:"Force Feedback Rig"},{id:"open",tag:"06 · Always Open",title:`Every Day,
10AM – 10PM`,desc:"No appointment needed for walk-ins. Just show up, pick your station, and jump in. Open every single day of the year.",icon:c.jsx(Ef,{size:28}),accent:"#06b6d4",img:"https://images.unsplash.com/photo-1511512578047-dfb367046420?w=900&q=85",stat:"12h",statLabel:"Open Daily"},{id:"private",tag:"07 · Exclusive Access",title:`Book The
Entire House`,desc:"Corporate team events, private LAN parties, or a family gaming night — rent the full lounge for a completely exclusive experience.",icon:c.jsx(Kh,{size:28}),accent:"#8b5cf6",img:"https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=900&q=85",stat:"100%",statLabel:"Private Exclusivity"}];function rg(t=.1){const e=Q.useRef(null),[l,a]=Q.useState(!1);return Q.useEffect(()=>{const n=e.current;if(!n)return;const i=new IntersectionObserver(([u])=>{u.isIntersecting&&(a(!0),i.disconnect())},{threshold:t});return i.observe(n),()=>i.disconnect()},[t]),[e,l]}function dg({feature:t,index:e,trackVisible:l}){const[a,n]=Q.useState(!1),{tag:i,title:u,desc:f,icon:s,accent:r,img:y,stat:p,statLabel:d}=t,g=u.split(`
`);return c.jsxs("article",{className:"lf-card",style:{"--accent":r,opacity:l?1:0,transform:l?"translateX(0) scale(1)":"translateX(60px) scale(0.96)",transitionDelay:l?`${e*.09}s`:"0s"},onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:[c.jsxs("div",{className:"lf-card-img-wrap",children:[c.jsx("img",{src:y,alt:g.join(" "),loading:"lazy",className:"lf-card-img",style:{transform:a?"scale(1.08)":"scale(1)"}}),c.jsx("div",{className:"lf-card-overlay"}),c.jsx("div",{className:"lf-card-tint",style:{background:`${r}22`,opacity:a?1:0}})]}),c.jsxs("div",{className:"lf-card-body",children:[c.jsx("span",{className:"lf-tag",children:i}),c.jsxs("div",{className:"lf-stat-pill",style:{borderColor:`${r}55`,color:r},children:[c.jsx("strong",{children:p}),c.jsx("span",{children:d})]}),c.jsxs("h3",{className:"lf-card-title",children:[g[0],c.jsx("br",{}),g[1]]}),c.jsx("p",{className:"lf-card-desc",style:{opacity:a?1:0,transform:a?"translateY(0)":"translateY(16px)"},children:f}),c.jsx("div",{className:"lf-icon-circle",style:{background:`${r}22`,borderColor:`${r}44`,color:r},children:s})]}),c.jsx("div",{className:"lf-bottom-bar",style:{background:r,transform:a?"scaleX(1)":"scaleX(0)"}})]})}function mg(){const t=Q.useRef(null),[e,l]=Q.useState(!1),[a,n]=rg(.3),i=Q.useRef(!1),u=Q.useRef(0),f=Q.useRef(0);Q.useEffect(()=>{const d=t.current;if(!d)return;const g=new IntersectionObserver(([x])=>{x.isIntersecting&&(l(!0),g.disconnect())},{threshold:.05});return g.observe(d),()=>g.disconnect()},[]);const s=d=>{i.current=!0,u.current=d.pageX-t.current.offsetLeft,f.current=t.current.scrollLeft,t.current.style.cursor="grabbing"},r=d=>{if(!i.current)return;d.preventDefault();const x=(d.pageX-t.current.offsetLeft-u.current)*1.2;t.current.scrollLeft=f.current-x},y=()=>{i.current=!1,t.current&&(t.current.style.cursor="grab")},p=()=>{const d=encodeURIComponent("Hi Gaming Hub! I'd like to book a session or ask about your experiences.");window.open(`https://wa.me/919876543210?text=${d}`,"_blank")};return c.jsxs("section",{id:"games",className:"lf-section",children:[c.jsx("div",{className:"container",children:c.jsxs("div",{ref:a,className:"lf-header",style:{opacity:n?1:0,transform:n?"translateY(0)":"translateY(30px)"},children:[c.jsxs("div",{className:"section-badge",children:[c.jsx(yl,{size:13})," The Experience"]}),c.jsxs("div",{className:"lf-header-row",children:[c.jsxs("div",{children:[c.jsxs("h2",{className:"section-title",children:["EVERYTHING",c.jsx("br",{}),c.jsx("span",{children:"WE OFFER."})]}),c.jsx("p",{className:"section-subtitle",children:"Drag to explore the full range of experiences waiting for you — from next-gen console sessions to private lounge hire."})]}),c.jsxs("div",{className:"lf-header-cta",children:[c.jsxs("button",{type:"button",onClick:p,className:"btn btn-whatsapp",children:[c.jsx(Pt,{size:18})," Book via WhatsApp"]}),c.jsx("p",{className:"lf-drag-hint",children:"← drag to explore →"})]})]})]})}),c.jsx("div",{ref:t,className:"lf-track",onMouseDown:s,onMouseMove:r,onMouseUp:y,onMouseLeave:y,children:c.jsxs("div",{className:"lf-track-inner",children:[Eu.map((d,g)=>c.jsx(dg,{feature:d,index:g,trackVisible:e},d.id)),c.jsxs("article",{className:"lf-card lf-cta-card",style:{opacity:e?1:0,transform:e?"translateX(0) scale(1)":"translateX(60px) scale(0.96)",transitionDelay:`${Eu.length*.09}s`},children:[c.jsx("div",{className:"lf-cta-orb lf-orb-1"}),c.jsx("div",{className:"lf-cta-orb lf-orb-2"}),c.jsxs("div",{className:"lf-cta-card-inner",children:[c.jsx(yl,{size:42,color:"rgba(255,255,255,0.2)"}),c.jsxs("h3",{className:"lf-cta-title",children:["Ready to",c.jsx("br",{}),"Play?"]}),c.jsx("p",{className:"lf-cta-sub",children:"Walk in or book ahead via WhatsApp."}),c.jsxs("button",{type:"button",onClick:p,className:"btn btn-primary lf-cta-btn",children:[c.jsx(Pt,{size:18})," Chat on WhatsApp"]}),c.jsx("div",{className:"lf-cta-open",children:"Open Daily 10 AM – 10 PM"})]})]})]})}),c.jsx("div",{className:"container",children:c.jsx("div",{className:"lf-progress-row",children:Eu.map((d,g)=>c.jsx("div",{className:"lf-progress-dot",style:{background:d.accent,opacity:.35+g*.09}},d.id))})}),c.jsx("style",{children:`
        /* ── Section ─── */
        .lf-section {
          padding: 7rem 0 4rem;
          background: var(--bg-card);
          overflow: hidden;
          position: relative;
        }
        .lf-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background:
            radial-gradient(ellipse 60% 40% at 80% 20%, rgba(59,130,246,0.04) 0%, transparent 70%),
            radial-gradient(ellipse 40% 30% at 20% 80%, rgba(16,185,129,0.04) 0%, transparent 70%);
          pointer-events: none;
        }

        /* ── Header ─── */
        .lf-header {
          margin-bottom: 3.5rem;
          transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1);
        }
        .lf-header-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .lf-header-cta {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.75rem;
          flex-shrink: 0;
        }
        .lf-drag-hint {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-subtle);
          letter-spacing: 0.08em;
        }

        /* ── Horizontal track ─── */
        .lf-track {
          display: flex;
          overflow-x: auto;
          padding: 0.5rem 1.5rem 2rem;
          cursor: grab;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .lf-track::-webkit-scrollbar { display: none; }

        .lf-track-inner {
          display: flex;
          gap: 1.2rem;
          padding: 0 calc((100vw - var(--max-w)) / 2);
        }

        /* ── Feature card ─── */
        .lf-card {
          position: relative;
          width: 340px;
          height: 520px;
          border-radius: 18px;
          overflow: hidden;
          flex-shrink: 0;
          scroll-snap-align: start;
          border: 1px solid var(--border-dim);
          transition:
            opacity 0.6s cubic-bezier(0.16,1,0.3,1),
            transform 0.6s cubic-bezier(0.16,1,0.3,1),
            border-color 0.3s ease,
            box-shadow 0.35s ease;
          user-select: none;
        }
        .lf-card:hover {
          border-color: rgba(255,255,255,0.2);
          box-shadow: 0 28px 65px rgba(0,0,0,0.55);
        }

        /* background image */
        .lf-card-img-wrap {
          position: absolute; inset: 0;
        }
        .lf-card-img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.75s cubic-bezier(0.16,1,0.3,1);
          pointer-events: none;
        }
        .lf-card-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(180deg,
            rgba(10,11,14,0.15) 0%,
            rgba(10,11,14,0.55) 45%,
            rgba(10,11,14,0.92) 100%
          );
        }
        .lf-card-tint {
          position: absolute; inset: 0;
          transition: opacity 0.4s ease;
          mix-blend-mode: screen;
        }

        /* content layer */
        .lf-card-body {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 1.8rem;
          gap: 0.6rem;
        }

        /* tag */
        .lf-tag {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-subtle);
          position: absolute;
          top: 1.4rem; left: 1.6rem;
        }

        /* stat pill */
        .lf-stat-pill {
          position: absolute;
          top: 1.2rem; right: 1.4rem;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0;
          background: rgba(10,11,14,0.75);
          backdrop-filter: blur(12px);
          border: 1px solid;
          border-radius: 10px;
          padding: 0.55rem 0.9rem;
          text-align: right;
        }
        .lf-stat-pill strong {
          font-family: var(--font-display);
          font-size: 1.4rem;
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.03em;
        }
        .lf-stat-pill span {
          font-family: var(--font-mono);
          font-size: 0.58rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-subtle);
        }

        /* title */
        .lf-card-title {
          font-family: var(--font-display);
          font-size: 1.7rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #ffffff;
          line-height: 1.1;
          text-transform: uppercase;
          margin-bottom: 0.2rem;
        }

        /* description */
        .lf-card-desc {
          font-size: 0.88rem;
          color: rgba(255,255,255,0.65);
          line-height: 1.6;
          transition: opacity 0.35s ease, transform 0.35s ease;
          margin-bottom: 0.4rem;
        }

        /* icon circle — top-right float */
        .lf-icon-circle {
          position: absolute;
          bottom: 1.7rem; right: 1.6rem;
          width: 48px; height: 48px;
          border-radius: 12px;
          border: 1px solid;
          display: flex; align-items: center; justify-content: center;
          backdrop-filter: blur(8px);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .lf-card:hover .lf-icon-circle {
          transform: translateY(-4px) rotate(-6deg);
          box-shadow: 0 12px 28px color-mix(in srgb, var(--accent) 30%, transparent);
        }

        /* bottom accent bar */
        .lf-bottom-bar {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(0.16,1,0.3,1);
        }

        /* ── CTA end card ─── */
        .lf-cta-card {
          background: var(--bg-main);
          border-color: var(--border-medium);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: visible;
        }
        .lf-cta-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(40px);
        }
        .lf-orb-1 {
          width: 220px; height: 220px;
          top: -60px; right: -60px;
          background: rgba(59,130,246,0.18);
          animation: lf-orb-drift 6s ease-in-out infinite alternate;
        }
        .lf-orb-2 {
          width: 180px; height: 180px;
          bottom: -40px; left: -40px;
          background: rgba(16,185,129,0.14);
          animation: lf-orb-drift 8s ease-in-out infinite alternate-reverse;
        }
        @keyframes lf-orb-drift {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(15px, -15px) scale(1.08); }
        }
        .lf-cta-card-inner {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1rem;
          padding: 2rem;
        }
        .lf-cta-title {
          font-family: var(--font-display);
          font-size: 2.4rem;
          font-weight: 800;
          letter-spacing: -0.04em;
          text-transform: uppercase;
          color: #fff;
          line-height: 1.05;
        }
        .lf-cta-sub {
          font-size: 0.9rem;
          color: var(--text-muted);
        }
        .lf-cta-btn { width: 100%; justify-content: center; }
        .lf-cta-open {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--text-subtle);
          letter-spacing: 0.08em;
        }

        /* ── Scroll dots ─── */
        .lf-progress-row {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          margin-top: 0.5rem;
        }
        .lf-progress-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          transition: transform 0.3s ease;
        }

        /* ── Responsive ─── */
        @media (max-width: 768px) {
          .lf-header-row { flex-direction: column; align-items: flex-start; }
          .lf-header-cta { align-items: flex-start; }
          .lf-card { width: 290px; height: 450px; }
          .lf-track-inner { padding: 0 1rem; }
          .lf-cta-title { font-size: 1.9rem; }
        }
      `})]})}const hg=[{icon:c.jsx(io,{size:17}),label:"Direct Drive Steering Wheel",color:"#f59e0b"},{icon:c.jsx(rd,{size:17}),label:"Ultra-Wide Curved Display",color:"#06b6d4"},{icon:c.jsx(io,{size:17}),label:"Load-Cell Brake Pedals",color:"#10b981"},{icon:c.jsx(lg,{size:17}),label:"Gran Turismo 7 · F1 24 Ready",color:"#3b82f6"}];function gg(t=.2){const e=Q.useRef(null),[l,a]=Q.useState(!1);return Q.useEffect(()=>{const n=e.current;if(!n)return;const i=new IntersectionObserver(([u])=>{u.isIntersecting&&(a(!0),i.disconnect())},{threshold:t});return i.observe(n),()=>i.disconnect()},[t]),[e,l]}function yg(){const[t,e]=gg(.15),l=()=>{const a=encodeURIComponent("Hi Gaming Hub! I'd like to try the Sim Racing Cockpit — is it available?");window.open(`https://wa.me/919876543210?text=${a}`,"_blank")};return c.jsxs("section",{id:"racing",className:"section-padding sim-section",children:[c.jsx("div",{className:"container",ref:t,children:c.jsxs("div",{className:`sim-wrapper ${e?"sim-visible":""}`,children:[c.jsx("div",{className:"sim-img-col",children:c.jsxs("div",{className:"sim-img-frame",children:[c.jsx("img",{src:"https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=900&q=85",alt:"Sim Racing Cockpit at Gaming Hub",className:"sim-img",loading:"lazy"}),c.jsxs("div",{className:"sim-floating-pill",children:[c.jsx("div",{className:"sim-pulse-dot"}),c.jsx("span",{children:"Available Now"})]})]})}),c.jsxs("div",{className:"sim-content-col",children:[c.jsxs("div",{className:"section-badge sim-badge-color",children:[c.jsx(rd,{size:13})," Immersive Experience"]}),c.jsxs("h2",{className:"section-title sim-heading",children:["RACE LIKE",c.jsx("br",{}),c.jsx("span",{children:"A PRO."})]}),c.jsx("p",{className:"sim-desc",children:"Strap in to our full simulator cockpit — built for those who demand more than a couch and a controller. Force feedback, realistic resistance, and inch-perfect braking pressure that separates genuine drivers from the rest."}),c.jsx("ul",{className:"sim-specs",children:hg.map((a,n)=>c.jsxs("li",{className:"sim-spec-item",style:{transitionDelay:e?`${.1+n*.08}s`:"0s"},children:[c.jsx("span",{className:"sim-spec-icon",style:{color:a.color},children:a.icon}),c.jsx("span",{className:"sim-spec-label",children:a.label})]},n))}),c.jsxs("button",{type:"button",onClick:l,className:"btn btn-whatsapp sim-cta",children:[c.jsx(Pt,{size:18})," Inquire via WhatsApp"]})]})]})}),c.jsx("style",{children:`
        .sim-section { background: var(--bg-main); }

        /* Wrapper — side by side */
        .sim-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4.5rem;
          align-items: center;
          opacity: 0;
          transform: translateY(36px);
          transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1);
        }
        .sim-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        /* Image */
        .sim-img-col { position: relative; }
        .sim-img-frame {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid var(--border-medium);
          background: var(--bg-card);
          box-shadow: 0 30px 70px rgba(0,0,0,0.55);
        }
        .sim-img {
          width: 100%; aspect-ratio: 4/3;
          object-fit: cover;
          display: block;
          transition: transform 0.7s cubic-bezier(0.16,1,0.3,1);
        }
        .sim-img-frame:hover .sim-img { transform: scale(1.04); }

        /* Floating status pill */
        .sim-floating-pill {
          position: absolute;
          bottom: 1.4rem; left: 1.4rem;
          display: flex; align-items: center; gap: 0.55rem;
          background: rgba(10,11,14,0.82);
          backdrop-filter: blur(16px);
          border: 1px solid var(--border-medium);
          border-radius: 9999px;
          padding: 0.45rem 1rem;
          font-family: var(--font-mono);
          font-size: 0.75rem; font-weight: 600;
          color: var(--text-secondary);
          letter-spacing: 0.06em;
        }
        .sim-pulse-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 0 0 rgba(16,185,129,0.6);
          animation: sim-pulse 2s ease-in-out infinite;
        }
        @keyframes sim-pulse {
          0%   { box-shadow: 0 0 0 0 rgba(16,185,129,0.6); }
          70%  { box-shadow: 0 0 0 7px rgba(16,185,129,0); }
          100% { box-shadow: 0 0 0 0 rgba(16,185,129,0); }
        }

        /* Content */
        .sim-badge-color { color: var(--accent-amber); }
        .sim-heading { font-size: clamp(2.2rem, 4vw, 3.4rem) !important; }

        .sim-desc {
          color: var(--text-muted);
          font-size: 1.05rem;
          line-height: 1.7;
          margin-bottom: 2.2rem;
        }

        /* Spec list */
        .sim-specs {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          margin-bottom: 2.5rem;
        }
        .sim-spec-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          opacity: 0;
          transform: translateX(-14px);
          transition: opacity 0.45s ease, transform 0.45s ease;
        }
        .sim-visible .sim-spec-item {
          opacity: 1;
          transform: translateX(0);
        }
        .sim-spec-icon {
          width: 34px; height: 34px;
          display: flex; align-items: center; justify-content: center;
          border-radius: 8px;
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--border-dim);
          flex-shrink: 0;
        }
        .sim-spec-label {
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .sim-cta { margin-top: 0.5rem; }

        /* Responsive */
        @media (max-width: 900px) {
          .sim-wrapper {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .sim-img { aspect-ratio: 16/9; }
          .sim-content-col { order: -1; }
        }
      `})]})}const pg=[{icon:c.jsx(Af,{size:16}),label:"Birthday Parties"},{icon:c.jsx(Tf,{size:16}),label:"Group Gaming"},{icon:c.jsx(Bh,{size:16}),label:"Private House Hire"},{icon:c.jsx(Nf,{size:16}),label:"Family Hangouts"}];function vg(t=.15){const e=Q.useRef(null),[l,a]=Q.useState(!1);return Q.useEffect(()=>{const n=e.current;if(!n)return;const i=new IntersectionObserver(([u])=>{u.isIntersecting&&(a(!0),i.disconnect())},{threshold:t});return i.observe(n),()=>i.disconnect()},[t]),[e,l]}function bg(){const[t,e]=vg(),l=()=>{const a=encodeURIComponent("Hi Gaming Hub! I'd like to book the lounge for a special occasion — can you share details?");window.open(`https://wa.me/919876543210?text=${a}`,"_blank")};return c.jsxs("section",{id:"events",className:"section-padding ev-section",children:[c.jsx("div",{className:"container",children:c.jsxs("div",{ref:t,className:`ev-banner ${e?"ev-visible":""}`,children:[c.jsx("div",{className:"ev-img-col",children:c.jsxs("div",{className:"ev-img-frame",children:[c.jsx("img",{src:"https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=900&q=85",alt:"Birthday celebration at Gaming Hub",className:"ev-img",loading:"lazy"}),c.jsxs("div",{className:"ev-price-float",children:[c.jsx("span",{className:"ev-price-val",children:"₹99"}),c.jsx("span",{className:"ev-price-sub",children:"per hour / per person"})]})]})}),c.jsxs("div",{className:"ev-content",children:[c.jsxs("div",{className:"section-badge ev-badge",children:[c.jsx(Af,{size:13})," Special Occasions"]}),c.jsxs("h2",{className:"section-title ev-title",children:["MAKE IT",c.jsx("br",{}),c.jsx("span",{children:"MEMORABLE."})]}),c.jsxs("p",{className:"ev-body",children:["Whether it's a ",c.jsx("strong",{children:"birthday party"}),", a ",c.jsx("strong",{children:"family hangout"}),", a ",c.jsx("strong",{children:"squad gaming night"}),", or an exclusive"," ",c.jsx("strong",{children:"private house hire"})," — Gaming Hub is the venue. All experiences are available at our standard rate. Special conditions apply for sessions ",c.jsx("strong",{children:"3 hours and above"}),"."]}),c.jsx("div",{className:"ev-chips",children:pg.map((a,n)=>c.jsxs("div",{className:"ev-chip",style:{opacity:e?1:0,transform:e?"translateY(0)":"translateY(14px)",transitionDelay:e?`${.2+n*.08}s`:"0s"},children:[c.jsx("span",{className:"ev-chip-icon",children:a.icon}),a.label]},n))}),c.jsxs("div",{className:"ev-rate-bar",children:[c.jsxs("div",{className:"ev-rate-left",children:[c.jsx("span",{className:"ev-rate-num",children:"₹99"}),c.jsx("span",{className:"ev-rate-slash",children:"/"}),c.jsx("span",{className:"ev-rate-unit",children:"hour"})]}),c.jsxs("div",{className:"ev-rate-note",children:["Flat rate for any occasion — no hidden charges.",c.jsx("br",{}),c.jsx("span",{children:"3+ hours? Ask us about special packages."})]})]}),c.jsxs("button",{type:"button",onClick:l,className:"btn btn-whatsapp",children:[c.jsx(Pt,{size:18})," Plan Your Event on WhatsApp"]})]})]})}),c.jsx("style",{children:`
        .ev-section { background: var(--bg-main); }

        /* Banner grid */
        .ev-banner {
          display: grid;
          grid-template-columns: 1fr 1.05fr;
          gap: 5rem;
          align-items: center;
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.75s cubic-bezier(0.16,1,0.3,1), transform 0.75s cubic-bezier(0.16,1,0.3,1);
        }
        .ev-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        /* Image */
        .ev-img-col { position: relative; }
        .ev-img-frame {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid var(--border-medium);
          box-shadow: 0 32px 80px rgba(0,0,0,0.55);
        }
        .ev-img {
          width: 100%;
          aspect-ratio: 4/5;
          object-fit: cover;
          object-position: center top;
          display: block;
          transition: transform 0.7s cubic-bezier(0.16,1,0.3,1);
        }
        .ev-img-frame:hover .ev-img { transform: scale(1.04); }

        /* Price float */
        .ev-price-float {
          position: absolute;
          bottom: 1.5rem;
          right: 1.5rem;
          background: rgba(10,11,14,0.88);
          backdrop-filter: blur(18px);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 14px;
          padding: 1rem 1.4rem;
          text-align: center;
        }
        .ev-price-val {
          display: block;
          font-family: var(--font-display);
          font-size: 2.4rem;
          font-weight: 800;
          color: #fff;
          line-height: 1;
          letter-spacing: -0.04em;
        }
        .ev-price-sub {
          font-family: var(--font-mono);
          font-size: 0.64rem;
          font-weight: 600;
          color: var(--text-subtle);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-top: 0.3rem;
          display: block;
        }

        /* Content */
        .ev-badge { color: #ec4899; }
        .ev-title { margin-bottom: 1.4rem; }

        .ev-body {
          color: var(--text-muted);
          font-size: 1.05rem;
          line-height: 1.75;
          margin-bottom: 2rem;
        }
        .ev-body strong { color: var(--text-secondary); font-weight: 600; }

        /* Occasion chips */
        .ev-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.65rem;
          margin-bottom: 2.2rem;
        }
        .ev-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--border-medium);
          border-radius: 9999px;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-secondary);
          transition: opacity 0.45s ease, transform 0.45s ease, background 0.2s ease, border-color 0.2s ease;
        }
        .ev-chip:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.25);
        }
        .ev-chip-icon {
          display: flex; align-items: center;
          color: #ec4899;
        }

        /* Rate bar */
        .ev-rate-bar {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.4rem 1.8rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border-medium);
          border-radius: 14px;
          margin-bottom: 2rem;
        }
        .ev-rate-left {
          display: flex;
          align-items: baseline;
          gap: 0.2rem;
          flex-shrink: 0;
        }
        .ev-rate-num {
          font-family: var(--font-display);
          font-size: 2.8rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1;
          letter-spacing: -0.04em;
        }
        .ev-rate-slash {
          font-family: var(--font-display);
          font-size: 1.5rem;
          color: var(--text-subtle);
          margin: 0 0.1rem;
        }
        .ev-rate-unit {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .ev-rate-note {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.55;
          border-left: 1px solid var(--border-dim);
          padding-left: 1.5rem;
        }
        .ev-rate-note span {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-subtle);
        }

        /* Responsive */
        @media (max-width: 900px) {
          .ev-banner {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .ev-img { aspect-ratio: 16/9; }
          .ev-rate-bar { flex-direction: column; align-items: flex-start; gap: 1rem; }
          .ev-rate-note { border-left: none; padding-left: 0; border-top: 1px solid var(--border-dim); padding-top: 1rem; }
        }
      `})]})}function xg(){const t=["PS4 & PS5 high-performance stations","Full access to all available game titles","Single & multiplayer wireless controller setups","Low-latency ultra-clear 4K gaming displays","Special conditions for sessions 3 hours & above","Private gaming-house hire & birthday party options"],e=()=>{const l=encodeURIComponent("Hi Gaming Hub! I'd like to book a session starting at ₹99/hour.");window.open(`https://wa.me/919876543210?text=${l}`,"_blank")};return c.jsxs("section",{id:"offers",className:"section-padding offers-section",children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-header",children:[c.jsxs("div",{className:"section-badge",children:[c.jsx(bi,{size:13})," Transparent Pricing"]}),c.jsxs("h2",{className:"section-title",children:["PLAY BY THE HOUR.",c.jsx("br",{}),c.jsx("span",{children:"NO HIDDEN FEES."})]}),c.jsx("p",{className:"section-subtitle",children:"One flat, straightforward rate for everyone. Walk in and start playing from ₹99."})]}),c.jsx("div",{className:"single-card-wrap",children:c.jsxs("div",{className:"pricing-card",children:[c.jsx("div",{className:"card-glow"}),c.jsxs("div",{className:"card-top",children:[c.jsxs("div",{className:"card-badge",children:[c.jsx(Nf,{size:13})," ALL-INCLUSIVE GAMING"]}),c.jsx("h3",{className:"card-heading",children:"Start at ₹99"}),c.jsx("p",{className:"card-sub",children:"Hourly gaming for PS4 & PS5 consoles with open game selection and multiplayer support."})]}),c.jsxs("div",{className:"price-tag-wrap",children:[c.jsxs("div",{className:"price-amount",children:[c.jsx("span",{className:"price-curr",children:"₹"}),c.jsx("span",{className:"price-num",children:"99"})]}),c.jsxs("div",{className:"price-meta",children:[c.jsx("span",{className:"price-unit",children:"/ person · per hour"}),c.jsx("span",{className:"price-note",children:"Starting rate across PS4 & PS5"})]})]}),c.jsx("div",{className:"perks-grid",children:t.map((l,a)=>c.jsxs("div",{className:"perk-item",children:[c.jsx("div",{className:"perk-check",children:c.jsx(Eh,{size:14})}),c.jsx("span",{className:"perk-text",children:l})]},a))}),c.jsxs("div",{className:"card-note-box",children:[c.jsxs("div",{className:"note-left",children:[c.jsx(Ef,{size:16}),c.jsx("span",{children:"3+ Hours Marathon Session?"})]}),c.jsx("p",{className:"note-body",children:"Extended playtime, full private house hire, and group events qualify for custom pricing and special conditions."})]}),c.jsxs("button",{type:"button",onClick:e,className:"btn btn-whatsapp card-cta",children:[c.jsx(Pt,{size:18})," Book Your Station via WhatsApp"]})]})}),c.jsx("p",{className:"offers-footer-note",children:"*Open every day from 10 AM to 10 PM. Walk-ins welcome or pre-book your spot via WhatsApp."})]}),c.jsx("style",{children:`
        .offers-section {
          background: var(--bg-main);
          position: relative;
        }

        .single-card-wrap {
          max-width: 680px;
          margin: 0 auto;
        }

        .pricing-card {
          position: relative;
          background: var(--bg-card);
          border: 1px solid var(--border-medium);
          border-radius: 24px;
          padding: 3rem 2.8rem;
          overflow: hidden;
          box-shadow: 0 32px 80px rgba(0,0,0,0.55);
          transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }

        .pricing-card:hover {
          border-color: rgba(59, 130, 246, 0.4);
          transform: translateY(-4px);
          box-shadow: 0 40px 100px rgba(0,0,0,0.65), 0 0 40px rgba(59, 130, 246, 0.12);
        }

        .card-glow {
          position: absolute;
          top: -120px;
          left: 50%;
          transform: translateX(-50%);
          width: 380px;
          height: 240px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.18) 0%, transparent 70%);
          pointer-events: none;
        }

        .card-top {
          text-align: center;
          margin-bottom: 2rem;
        }

        .card-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.35rem 0.95rem;
          background: rgba(59, 130, 246, 0.12);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 9999px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          color: #60a5fa;
          letter-spacing: 0.08em;
          margin-bottom: 1.2rem;
        }

        .card-heading {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 3vw, 2.3rem);
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.03em;
          text-transform: uppercase;
          margin-bottom: 0.6rem;
        }

        .card-sub {
          color: var(--text-muted);
          font-size: 0.95rem;
          max-width: 460px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .price-tag-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.2rem;
          padding: 1.5rem 2rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-dim);
          border-radius: 16px;
          margin-bottom: 2.2rem;
        }

        .price-amount {
          display: flex;
          align-items: baseline;
        }

        .price-curr {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 800;
          color: #ffffff;
          margin-right: 0.15rem;
        }

        .price-num {
          font-family: var(--font-display);
          font-size: clamp(3.2rem, 5vw, 4.2rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .price-meta {
          display: flex;
          flex-direction: column;
          border-left: 1px solid var(--border-dim);
          padding-left: 1.2rem;
        }

        .price-unit {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .price-note {
          font-size: 0.8rem;
          color: var(--text-subtle);
          margin-top: 0.2rem;
        }

        .perks-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem 1.5rem;
          margin-bottom: 2rem;
        }

        .perk-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
        }

        .perk-check {
          width: 22px;
          height: 22px;
          border-radius: 6px;
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .perk-text {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .card-note-box {
          background: rgba(245, 158, 11, 0.06);
          border: 1px solid rgba(245, 158, 11, 0.2);
          border-radius: 12px;
          padding: 1rem 1.2rem;
          margin-bottom: 2rem;
        }

        .note-left {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 700;
          color: #f59e0b;
          letter-spacing: 0.04em;
          margin-bottom: 0.3rem;
        }

        .note-body {
          font-size: 0.82rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .card-cta {
          width: 100%;
          justify-content: center;
          padding: 1rem 2rem;
          font-size: 1rem;
        }

        .offers-footer-note {
          text-align: center;
          color: var(--text-subtle);
          font-size: 0.82rem;
          margin-top: 2.5rem;
        }

        @media (max-width: 640px) {
          .pricing-card {
            padding: 2rem 1.5rem;
          }
          .price-tag-wrap {
            flex-direction: column;
            gap: 0.5rem;
            text-align: center;
          }
          .price-meta {
            border-left: none;
            padding-left: 0;
            border-top: 1px solid var(--border-dim);
            padding-top: 0.5rem;
          }
          .perks-grid {
            grid-template-columns: 1fr;
            gap: 0.8rem;
          }
        }
      `})]})}function Sg(){const t=()=>{const e=encodeURIComponent("Hi Gaming Hub! Can you share directions and current station availability?");window.open(`https://wa.me/919876543210?text=${e}`,"_blank")};return c.jsxs("section",{id:"location",className:"section-padding",style:{backgroundColor:"var(--bg-card)"},children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-header",children:[c.jsx("div",{className:"section-badge",children:"Physical Lounge"}),c.jsxs("h2",{className:"section-title",children:["FIND YOUR WAY",c.jsx("br",{}),c.jsx("span",{children:"TO THE HUB."})]}),c.jsx("p",{className:"section-subtitle",children:"Walk-ins are always welcome. Connect with us on WhatsApp or drop in for quick console battles and squad hangouts."})]}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3rem",alignItems:"stretch"},className:"location-grid",children:[c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[c.jsx("div",{className:"hub-card",style:{padding:"2rem",backgroundColor:"var(--bg-main)"},children:c.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"flex-start"},children:[c.jsx(Gh,{size:24,color:"var(--accent-blue)",style:{flexShrink:0,marginTop:"2px"}}),c.jsxs("div",{children:[c.jsx("h3",{style:{fontSize:"1.2rem",color:"#fff",marginBottom:"0.4rem"},children:"Our Location"}),c.jsxs("p",{style:{color:"var(--text-muted)",fontSize:"0.95rem",lineHeight:1.6},children:["[Gaming Hub Address Placeholder]",c.jsx("br",{}),"Main Boulevard, Entertainment Zone"]})]})]})}),c.jsx("div",{className:"hub-card",style:{padding:"2rem",backgroundColor:"var(--bg-main)"},children:c.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"flex-start"},children:[c.jsx(Ef,{size:24,color:"var(--accent-emerald)",style:{flexShrink:0,marginTop:"2px"}}),c.jsxs("div",{children:[c.jsx("h3",{style:{fontSize:"1.2rem",color:"#fff",marginBottom:"0.4rem"},children:"Opening Hours"}),c.jsx("p",{style:{color:"var(--accent-emerald)",fontSize:"1.1rem",fontWeight:700,marginBottom:"0.2rem"},children:"10:00 AM — 10:00 PM"}),c.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.9rem"},children:"Open daily for gaming sessions, birthdays, and squad events."})]})]})}),c.jsxs("button",{type:"button",onClick:t,className:"btn btn-whatsapp",style:{padding:"1rem",justifyContent:"center",fontSize:"1rem"},children:[c.jsx(Pt,{size:20})," Get Directions & Chat on WhatsApp"]})]}),c.jsxs("div",{className:"hub-card",style:{backgroundColor:"var(--bg-main)",position:"relative",minHeight:"340px",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",padding:"2rem"},children:[c.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundImage:"radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15) 0%, rgba(10, 11, 14, 0.9) 70%)"}}),c.jsxs("div",{style:{position:"relative",textAlign:"center",zIndex:1},children:[c.jsx("div",{style:{width:"60px",height:"60px",borderRadius:"50%",backgroundColor:"#2563eb",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",margin:"0 auto 1.5rem",boxShadow:"0 0 30px rgba(37, 99, 235, 0.5)"},children:c.jsx(Vh,{size:28})}),c.jsx("h3",{style:{fontFamily:"var(--font-display)",fontSize:"1.5rem",fontWeight:800,color:"#fff",marginBottom:"0.5rem"},children:"GAMING HUB LOUNGE"}),c.jsx("p",{style:{color:"var(--accent-emerald)",fontFamily:"var(--font-mono)",fontSize:"0.85rem",fontWeight:600},children:"● Open Now · 10 AM — 10 PM"})]})]})]})]}),c.jsx("style",{children:`
        @media (max-width: 900px) {
          .location-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `})]})}function zg(){const t=()=>{const e=encodeURIComponent("Hi Gaming Hub! I'd like to check console availability and visit.");window.open(`https://wa.me/919876543210?text=${e}`,"_blank")};return c.jsxs("a",{href:"#whatsapp",onClick:e=>{e.preventDefault(),t()},className:"whatsapp-launcher","aria-label":"Chat with Gaming Hub on WhatsApp",title:"Direct WhatsApp Chat",children:[c.jsx(Pt,{size:24}),c.jsx("span",{children:"Chat on WhatsApp"})]})}function _g(){const t=()=>{const e=encodeURIComponent("Hi Gaming Hub! I'm reaching out with a query.");window.open(`https://wa.me/919876543210?text=${e}`,"_blank")};return c.jsx("footer",{className:"site-footer",children:c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"footer-grid",children:[c.jsxs("div",{children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem",marginBottom:"1.2rem"},children:[c.jsx("div",{className:"brand-logo-badge",style:{width:"32px",height:"32px"},children:c.jsx(yl,{size:18})}),c.jsx("span",{className:"brand-name",style:{fontSize:"1.15rem"},children:"GAMING HUB"})]}),c.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.95rem",lineHeight:1.6,maxWidth:"300px",marginBottom:"1.5rem"},children:"The premier physical PlayStation lounge for PS4 & PS5 gaming, squad competitions, birthday parties, and family hangouts."}),c.jsxs("button",{type:"button",onClick:t,style:{display:"inline-flex",alignItems:"center",gap:"0.5rem",backgroundColor:"rgba(37, 211, 102, 0.15)",border:"1px solid rgba(37, 211, 102, 0.3)",color:"#25d366",padding:"0.45rem 0.9rem",borderRadius:"6px",fontSize:"0.85rem",fontWeight:700,cursor:"pointer"},children:[c.jsx(Pt,{size:15})," WhatsApp Desk Active"]})]}),c.jsxs("div",{className:"footer-col",children:[c.jsx("h4",{children:"Explore"}),c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx("a",{href:"#experience",children:"Gaming Experience"})}),c.jsx("li",{children:c.jsx("a",{href:"#games",children:"Featured Games"})}),c.jsx("li",{children:c.jsx("a",{href:"#racing",children:"Sim Racing Cockpit"})}),c.jsx("li",{children:c.jsx("a",{href:"#events",children:"Birthday & Events"})}),c.jsx("li",{children:c.jsx("a",{href:"#offers",children:"Pricing & Offers"})})]})]}),c.jsxs("div",{className:"footer-col",children:[c.jsx("h4",{children:"Hours"}),c.jsxs("p",{style:{color:"var(--text-muted)",fontSize:"0.95rem",lineHeight:1.6,marginBottom:"0.5rem"},children:[c.jsx("strong",{style:{color:"#fff"},children:"Open Daily:"}),c.jsx("br",{}),"10:00 AM — 10:00 PM"]}),c.jsx("p",{style:{color:"var(--text-subtle)",fontSize:"0.85rem"},children:"Walk-ins welcome anytime."})]}),c.jsxs("div",{className:"footer-col",children:[c.jsx("h4",{children:"Connect"}),c.jsxs("ul",{children:[c.jsx("li",{children:c.jsxs("a",{href:"#whatsapp",onClick:e=>{e.preventDefault(),t()},style:{color:"#25d366"},children:["Chat on WhatsApp ",c.jsx(Au,{size:13,style:{display:"inline"}})]})}),c.jsx("li",{children:c.jsxs("a",{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer",children:["Instagram ",c.jsx(Au,{size:13,style:{display:"inline"}})]})}),c.jsx("li",{children:c.jsxs("a",{href:"#location",children:["Google Maps Directions ",c.jsx(Au,{size:13,style:{display:"inline"}})]})})]})]})]}),c.jsxs("div",{className:"footer-bottom",children:[c.jsxs("div",{children:["© ",new Date().getFullYear()," GAMING HUB. All rights reserved."]}),c.jsx("div",{children:"PlayStation, PS4 & PS5 are registered trademarks of Sony Interactive Entertainment Inc."})]})]})})}function jg(){return c.jsxs("div",{style:{minHeight:"100vh",backgroundColor:"var(--bg-main)",color:"var(--text-primary)"},children:[c.jsx(ug,{}),c.jsxs("main",{children:[c.jsx(fg,{}),c.jsx(sg,{}),c.jsx(og,{}),c.jsx(mg,{}),c.jsx(yg,{}),c.jsx(bg,{}),c.jsx(xg,{}),c.jsx(Sg,{})]}),c.jsx(_g,{}),c.jsx(zg,{})]})}dh.createRoot(document.getElementById("root")).render(c.jsx(Ud.StrictMode,{children:c.jsx(jg,{})}));
