(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();function sg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Du={exports:{}},Go={},Iu={exports:{}},gt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p;function Cv(){if($p)return gt;$p=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),S=Symbol.iterator;function g(N){return N===null||typeof N!="object"?null:(N=S&&N[S]||N["@@iterator"],typeof N=="function"?N:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,R={};function v(N,$,we){this.props=N,this.context=$,this.refs=R,this.updater=we||M}v.prototype.isReactComponent={},v.prototype.setState=function(N,$){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,$,"setState")},v.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function _(){}_.prototype=v.prototype;function U(N,$,we){this.props=N,this.context=$,this.refs=R,this.updater=we||M}var F=U.prototype=new _;F.constructor=U,w(F,v.prototype),F.isPureReactComponent=!0;var b=Array.isArray,I=Object.prototype.hasOwnProperty,P={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function E(N,$,we){var Oe,Fe={},ie=null,ve=null;if($!=null)for(Oe in $.ref!==void 0&&(ve=$.ref),$.key!==void 0&&(ie=""+$.key),$)I.call($,Oe)&&!O.hasOwnProperty(Oe)&&(Fe[Oe]=$[Oe]);var he=arguments.length-2;if(he===1)Fe.children=we;else if(1<he){for(var Ue=Array(he),Ze=0;Ze<he;Ze++)Ue[Ze]=arguments[Ze+2];Fe.children=Ue}if(N&&N.defaultProps)for(Oe in he=N.defaultProps,he)Fe[Oe]===void 0&&(Fe[Oe]=he[Oe]);return{$$typeof:s,type:N,key:ie,ref:ve,props:Fe,_owner:P.current}}function L(N,$){return{$$typeof:s,type:N.type,key:$,ref:N.ref,props:N.props,_owner:N._owner}}function z(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function B(N){var $={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(we){return $[we]})}var W=/\/+/g;function ce(N,$){return typeof N=="object"&&N!==null&&N.key!=null?B(""+N.key):$.toString(36)}function de(N,$,we,Oe,Fe){var ie=typeof N;(ie==="undefined"||ie==="boolean")&&(N=null);var ve=!1;if(N===null)ve=!0;else switch(ie){case"string":case"number":ve=!0;break;case"object":switch(N.$$typeof){case s:case e:ve=!0}}if(ve)return ve=N,Fe=Fe(ve),N=Oe===""?"."+ce(ve,0):Oe,b(Fe)?(we="",N!=null&&(we=N.replace(W,"$&/")+"/"),de(Fe,$,we,"",function(Ze){return Ze})):Fe!=null&&(z(Fe)&&(Fe=L(Fe,we+(!Fe.key||ve&&ve.key===Fe.key?"":(""+Fe.key).replace(W,"$&/")+"/")+N)),$.push(Fe)),1;if(ve=0,Oe=Oe===""?".":Oe+":",b(N))for(var he=0;he<N.length;he++){ie=N[he];var Ue=Oe+ce(ie,he);ve+=de(ie,$,we,Ue,Fe)}else if(Ue=g(N),typeof Ue=="function")for(N=Ue.call(N),he=0;!(ie=N.next()).done;)ie=ie.value,Ue=Oe+ce(ie,he++),ve+=de(ie,$,we,Ue,Fe);else if(ie==="object")throw $=String(N),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.");return ve}function Z(N,$,we){if(N==null)return N;var Oe=[],Fe=0;return de(N,Oe,"","",function(ie){return $.call(we,ie,Fe++)}),Oe}function le(N){if(N._status===-1){var $=N._result;$=$(),$.then(function(we){(N._status===0||N._status===-1)&&(N._status=1,N._result=we)},function(we){(N._status===0||N._status===-1)&&(N._status=2,N._result=we)}),N._status===-1&&(N._status=0,N._result=$)}if(N._status===1)return N._result.default;throw N._result}var q={current:null},V={transition:null},Q={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:V,ReactCurrentOwner:P};function J(){throw Error("act(...) is not supported in production builds of React.")}return gt.Children={map:Z,forEach:function(N,$,we){Z(N,function(){$.apply(this,arguments)},we)},count:function(N){var $=0;return Z(N,function(){$++}),$},toArray:function(N){return Z(N,function($){return $})||[]},only:function(N){if(!z(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},gt.Component=v,gt.Fragment=n,gt.Profiler=a,gt.PureComponent=U,gt.StrictMode=r,gt.Suspense=p,gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,gt.act=J,gt.cloneElement=function(N,$,we){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var Oe=w({},N.props),Fe=N.key,ie=N.ref,ve=N._owner;if($!=null){if($.ref!==void 0&&(ie=$.ref,ve=P.current),$.key!==void 0&&(Fe=""+$.key),N.type&&N.type.defaultProps)var he=N.type.defaultProps;for(Ue in $)I.call($,Ue)&&!O.hasOwnProperty(Ue)&&(Oe[Ue]=$[Ue]===void 0&&he!==void 0?he[Ue]:$[Ue])}var Ue=arguments.length-2;if(Ue===1)Oe.children=we;else if(1<Ue){he=Array(Ue);for(var Ze=0;Ze<Ue;Ze++)he[Ze]=arguments[Ze+2];Oe.children=he}return{$$typeof:s,type:N.type,key:Fe,ref:ie,props:Oe,_owner:ve}},gt.createContext=function(N){return N={$$typeof:u,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:l,_context:N},N.Consumer=N},gt.createElement=E,gt.createFactory=function(N){var $=E.bind(null,N);return $.type=N,$},gt.createRef=function(){return{current:null}},gt.forwardRef=function(N){return{$$typeof:d,render:N}},gt.isValidElement=z,gt.lazy=function(N){return{$$typeof:x,_payload:{_status:-1,_result:N},_init:le}},gt.memo=function(N,$){return{$$typeof:m,type:N,compare:$===void 0?null:$}},gt.startTransition=function(N){var $=V.transition;V.transition={};try{N()}finally{V.transition=$}},gt.unstable_act=J,gt.useCallback=function(N,$){return q.current.useCallback(N,$)},gt.useContext=function(N){return q.current.useContext(N)},gt.useDebugValue=function(){},gt.useDeferredValue=function(N){return q.current.useDeferredValue(N)},gt.useEffect=function(N,$){return q.current.useEffect(N,$)},gt.useId=function(){return q.current.useId()},gt.useImperativeHandle=function(N,$,we){return q.current.useImperativeHandle(N,$,we)},gt.useInsertionEffect=function(N,$){return q.current.useInsertionEffect(N,$)},gt.useLayoutEffect=function(N,$){return q.current.useLayoutEffect(N,$)},gt.useMemo=function(N,$){return q.current.useMemo(N,$)},gt.useReducer=function(N,$,we){return q.current.useReducer(N,$,we)},gt.useRef=function(N){return q.current.useRef(N)},gt.useState=function(N){return q.current.useState(N)},gt.useSyncExternalStore=function(N,$,we){return q.current.useSyncExternalStore(N,$,we)},gt.useTransition=function(){return q.current.useTransition()},gt.version="18.3.1",gt}var Kp;function hd(){return Kp||(Kp=1,Iu.exports=Cv()),Iu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp;function Pv(){if(Zp)return Go;Zp=1;var s=hd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,p,m){var x,S={},g=null,M=null;m!==void 0&&(g=""+m),p.key!==void 0&&(g=""+p.key),p.ref!==void 0&&(M=p.ref);for(x in p)r.call(p,x)&&!l.hasOwnProperty(x)&&(S[x]=p[x]);if(d&&d.defaultProps)for(x in p=d.defaultProps,p)S[x]===void 0&&(S[x]=p[x]);return{$$typeof:e,type:d,key:g,ref:M,props:S,_owner:a.current}}return Go.Fragment=n,Go.jsx=u,Go.jsxs=u,Go}var jp;function Lv(){return jp||(jp=1,Du.exports=Pv()),Du.exports}var ge=Lv(),Ft=hd();const Nv=sg(Ft);var ul={},Uu={exports:{}},Bn={},Fu={exports:{}},Ou={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp;function Dv(){return Qp||(Qp=1,(function(s){function e(V,Q){var J=V.length;V.push(Q);e:for(;0<J;){var N=J-1>>>1,$=V[N];if(0<a($,Q))V[N]=Q,V[J]=$,J=N;else break e}}function n(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var Q=V[0],J=V.pop();if(J!==Q){V[0]=J;e:for(var N=0,$=V.length,we=$>>>1;N<we;){var Oe=2*(N+1)-1,Fe=V[Oe],ie=Oe+1,ve=V[ie];if(0>a(Fe,J))ie<$&&0>a(ve,Fe)?(V[N]=ve,V[ie]=J,N=ie):(V[N]=Fe,V[Oe]=J,N=Oe);else if(ie<$&&0>a(ve,J))V[N]=ve,V[ie]=J,N=ie;else break e}}return Q}function a(V,Q){var J=V.sortIndex-Q.sortIndex;return J!==0?J:V.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var p=[],m=[],x=1,S=null,g=3,M=!1,w=!1,R=!1,v=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(V){for(var Q=n(m);Q!==null;){if(Q.callback===null)r(m);else if(Q.startTime<=V)r(m),Q.sortIndex=Q.expirationTime,e(p,Q);else break;Q=n(m)}}function b(V){if(R=!1,F(V),!w)if(n(p)!==null)w=!0,le(I);else{var Q=n(m);Q!==null&&q(b,Q.startTime-V)}}function I(V,Q){w=!1,R&&(R=!1,_(E),E=-1),M=!0;var J=g;try{for(F(Q),S=n(p);S!==null&&(!(S.expirationTime>Q)||V&&!B());){var N=S.callback;if(typeof N=="function"){S.callback=null,g=S.priorityLevel;var $=N(S.expirationTime<=Q);Q=s.unstable_now(),typeof $=="function"?S.callback=$:S===n(p)&&r(p),F(Q)}else r(p);S=n(p)}if(S!==null)var we=!0;else{var Oe=n(m);Oe!==null&&q(b,Oe.startTime-Q),we=!1}return we}finally{S=null,g=J,M=!1}}var P=!1,O=null,E=-1,L=5,z=-1;function B(){return!(s.unstable_now()-z<L)}function W(){if(O!==null){var V=s.unstable_now();z=V;var Q=!0;try{Q=O(!0,V)}finally{Q?ce():(P=!1,O=null)}}else P=!1}var ce;if(typeof U=="function")ce=function(){U(W)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,Z=de.port2;de.port1.onmessage=W,ce=function(){Z.postMessage(null)}}else ce=function(){v(W,0)};function le(V){O=V,P||(P=!0,ce())}function q(V,Q){E=v(function(){V(s.unstable_now())},Q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(V){V.callback=null},s.unstable_continueExecution=function(){w||M||(w=!0,le(I))},s.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<V?Math.floor(1e3/V):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(V){switch(g){case 1:case 2:case 3:var Q=3;break;default:Q=g}var J=g;g=Q;try{return V()}finally{g=J}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(V,Q){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var J=g;g=V;try{return Q()}finally{g=J}},s.unstable_scheduleCallback=function(V,Q,J){var N=s.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?N+J:N):J=N,V){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=J+$,V={id:x++,callback:Q,priorityLevel:V,startTime:J,expirationTime:$,sortIndex:-1},J>N?(V.sortIndex=J,e(m,V),n(p)===null&&V===n(m)&&(R?(_(E),E=-1):R=!0,q(b,J-N))):(V.sortIndex=$,e(p,V),w||M||(w=!0,le(I))),V},s.unstable_shouldYield=B,s.unstable_wrapCallback=function(V){var Q=g;return function(){var J=g;g=Q;try{return V.apply(this,arguments)}finally{g=J}}}})(Ou)),Ou}var Jp;function Iv(){return Jp||(Jp=1,Fu.exports=Dv()),Fu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var em;function Uv(){if(em)return Bn;em=1;var s=hd(),e=Iv();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},S={};function g(t){return p.call(S,t)?!0:p.call(x,t)?!1:m.test(t)?S[t]=!0:(x[t]=!0,!1)}function M(t,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w(t,i,o,c){if(i===null||typeof i>"u"||M(t,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(t,i,o,c,f,h,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=T}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){v[t]=new R(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];v[i]=new R(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){v[t]=new R(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){v[t]=new R(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){v[t]=new R(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){v[t]=new R(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){v[t]=new R(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){v[t]=new R(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){v[t]=new R(t,5,!1,t.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function U(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(_,U);v[i]=new R(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(_,U);v[i]=new R(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(_,U);v[i]=new R(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){v[t]=new R(t,1,!1,t.toLowerCase(),null,!1,!1)}),v.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){v[t]=new R(t,1,!1,t.toLowerCase(),null,!0,!0)});function F(t,i,o,c){var f=v.hasOwnProperty(i)?v[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,o,f,c)&&(o=null),c||f===null?g(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):f.mustUseProperty?t[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,c=f.attributeNamespace,o===null?t.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,c?t.setAttributeNS(c,i,o):t.setAttribute(i,o))))}var b=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),P=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),B=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),ce=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),q=Symbol.for("react.offscreen"),V=Symbol.iterator;function Q(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var J=Object.assign,N;function $(t){if(N===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);N=i&&i[1]||""}return`
`+N+t}var we=!1;function Oe(t,i){if(!t||we)return"";we=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ae){var c=ae}Reflect.construct(t,[],i)}else{try{i.call()}catch(ae){c=ae}t.call(i.prototype)}else{try{throw Error()}catch(ae){c=ae}t()}}catch(ae){if(ae&&c&&typeof ae.stack=="string"){for(var f=ae.stack.split(`
`),h=c.stack.split(`
`),T=f.length-1,D=h.length-1;1<=T&&0<=D&&f[T]!==h[D];)D--;for(;1<=T&&0<=D;T--,D--)if(f[T]!==h[D]){if(T!==1||D!==1)do if(T--,D--,0>D||f[T]!==h[D]){var k=`
`+f[T].replace(" at new "," at ");return t.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",t.displayName)),k}while(1<=T&&0<=D);break}}}finally{we=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?$(t):""}function Fe(t){switch(t.tag){case 5:return $(t.type);case 16:return $("Lazy");case 13:return $("Suspense");case 19:return $("SuspenseList");case 0:case 2:case 15:return t=Oe(t.type,!1),t;case 11:return t=Oe(t.type.render,!1),t;case 1:return t=Oe(t.type,!0),t;default:return""}}function ie(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case O:return"Fragment";case P:return"Portal";case L:return"Profiler";case E:return"StrictMode";case ce:return"Suspense";case de:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case B:return(t.displayName||"Context")+".Consumer";case z:return(t._context.displayName||"Context")+".Provider";case W:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Z:return i=t.displayName||null,i!==null?i:ie(t.type)||"Memo";case le:i=t._payload,t=t._init;try{return ie(t(i))}catch{}}return null}function ve(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ie(i);case 8:return i===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function he(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ue(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ze(t){var i=Ue(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),c=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(T){c=""+T,h.call(this,T)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Qe(t){t._valueTracker||(t._valueTracker=Ze(t))}function It(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return t&&(c=Ue(t)?t.checked?"true":"false":t.value),t=c,t!==o?(i.setValue(t),!0):!1}function ot(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function _t(t,i){var o=i.checked;return J({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function pt(t,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=he(i.value!=null?i.value:o),t._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ft(t,i){i=i.checked,i!=null&&F(t,"checked",i,!1)}function Ot(t,i){ft(t,i);var o=he(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Yt(t,i.type,o):i.hasOwnProperty("defaultValue")&&Yt(t,i.type,he(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Xt(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Yt(t,i,o){(i!=="number"||ot(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var kt=Array.isArray;function wt(t,i,o,c){if(t=t.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<t.length;o++)f=i.hasOwnProperty("$"+t[o].value),t[o].selected!==f&&(t[o].selected=f),f&&c&&(t[o].defaultSelected=!0)}else{for(o=""+he(o),i=null,f=0;f<t.length;f++){if(t[f].value===o){t[f].selected=!0,c&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function vt(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return J({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function X(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(kt(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:he(o)}}function on(t,i){var o=he(i.value),c=he(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),c!=null&&(t.defaultValue=""+c)}function At(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function C(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function y(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?C(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var K,re=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,f){MSApp.execUnsafeLocalFunction(function(){return t(i,o,c,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(K=K||document.createElement("div"),K.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=K.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ue(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ce=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(t){Ce.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Me[i]=Me[t]})});function fe(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Me.hasOwnProperty(t)&&Me[t]?(""+i).trim():i+"px"}function me(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,f=fe(o,i[o],c);o==="float"&&(o="cssFloat"),c?t.setProperty(o,f):t[o]=f}}var Le=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qe(t,i){if(i){if(Le[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Ne(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Re=null;function Je(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var et=null,it=null,G=null;function be(t){if(t=bo(t)){if(typeof et!="function")throw Error(n(280));var i=t.stateNode;i&&(i=wa(i),et(t.stateNode,t.type,i))}}function pe(t){it?G?G.push(t):G=[t]:it=t}function Pe(){if(it){var t=it,i=G;if(G=it=null,be(t),i)for(t=0;t<i.length;t++)be(i[t])}}function De(t,i){return t(i)}function _e(){}var We=!1;function Ge(t,i,o){if(We)return t(i,o);We=!0;try{return De(t,i,o)}finally{We=!1,(it!==null||G!==null)&&(_e(),Pe())}}function Ut(t,i){var o=t.stateNode;if(o===null)return null;var c=wa(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Ct=!1;if(d)try{var xn={};Object.defineProperty(xn,"passive",{get:function(){Ct=!0}}),window.addEventListener("test",xn,xn),window.removeEventListener("test",xn,xn)}catch{Ct=!1}function Kn(t,i,o,c,f,h,T,D,k){var ae=Array.prototype.slice.call(arguments,3);try{i.apply(o,ae)}catch(Se){this.onError(Se)}}var Ir=!1,fs=null,Ur=!1,Fr=null,nc={onError:function(t){Ir=!0,fs=t}};function aa(t,i,o,c,f,h,T,D,k){Ir=!1,fs=null,Kn.apply(nc,arguments)}function la(t,i,o,c,f,h,T,D,k){if(aa.apply(this,arguments),Ir){if(Ir){var ae=fs;Ir=!1,fs=null}else throw Error(n(198));Ur||(Ur=!0,Fr=ae)}}function bn(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function ds(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function oo(t){if(bn(t)!==t)throw Error(n(188))}function ca(t){var i=t.alternate;if(!i){if(i=bn(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,c=i;;){var f=o.return;if(f===null)break;var h=f.alternate;if(h===null){if(c=f.return,c!==null){o=c;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===o)return oo(f),t;if(h===c)return oo(f),i;h=h.sibling}throw Error(n(188))}if(o.return!==c.return)o=f,c=h;else{for(var T=!1,D=f.child;D;){if(D===o){T=!0,o=f,c=h;break}if(D===c){T=!0,c=f,o=h;break}D=D.sibling}if(!T){for(D=h.child;D;){if(D===o){T=!0,o=h,c=f;break}if(D===c){T=!0,c=h,o=f;break}D=D.sibling}if(!T)throw Error(n(189))}}if(o.alternate!==c)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function Or(t){return t=ca(t),t!==null?ao(t):null}function ao(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=ao(t);if(i!==null)return i;t=t.sibling}return null}var kr=e.unstable_scheduleCallback,lo=e.unstable_cancelCallback,ua=e.unstable_shouldYield,ic=e.unstable_requestPaint,Kt=e.unstable_now,rc=e.unstable_getCurrentPriorityLevel,co=e.unstable_ImmediatePriority,A=e.unstable_UserBlockingPriority,Y=e.unstable_NormalPriority,oe=e.unstable_LowPriority,te=e.unstable_IdlePriority,ee=null,Ae=null;function ze(t){if(Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(ee,t,void 0,(t.current.flags&128)===128)}catch{}}var Te=Math.clz32?Math.clz32:at,Xe=Math.log,je=Math.LN2;function at(t){return t>>>=0,t===0?32:31-(Xe(t)/je|0)|0}var lt=64,$e=4194304;function Mt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Bt(t,i){var o=t.pendingLanes;if(o===0)return 0;var c=0,f=t.suspendedLanes,h=t.pingedLanes,T=o&268435455;if(T!==0){var D=T&~f;D!==0?c=Mt(D):(h&=T,h!==0&&(c=Mt(h)))}else T=o&~f,T!==0?c=Mt(T):h!==0&&(c=Mt(h));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,h=i&-i,f>=h||f===16&&(h&4194240)!==0))return i;if((c&4)!==0&&(c|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=c;0<i;)o=31-Te(i),f=1<<o,c|=t[o],i&=~f;return c}function qt(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lt(t,i){for(var o=t.suspendedLanes,c=t.pingedLanes,f=t.expirationTimes,h=t.pendingLanes;0<h;){var T=31-Te(h),D=1<<T,k=f[T];k===-1?((D&o)===0||(D&c)!==0)&&(f[T]=qt(D,i)):k<=i&&(t.expiredLanes|=D),h&=~D}}function nn(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ke(){var t=lt;return lt<<=1,(lt&4194240)===0&&(lt=64),t}function mn(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function ht(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Te(i),t[i]=o}function Nn(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<o;){var f=31-Te(o),h=1<<f;i[f]=0,c[f]=-1,t[f]=-1,o&=~h}}function Dn(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var c=31-Te(o),f=1<<c;f&i|t[c]&i&&(t[c]|=i),o&=~f}}var mt=0;function Ui(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Pt,Vt,ai,Nt,li,yi=!1,Br=[],rr=null,sr=null,or=null,uo=new Map,fo=new Map,ar=[],jg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ld(t,i){switch(t){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":uo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":fo.delete(i.pointerId)}}function ho(t,i,o,c,f,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:h,targetContainers:[f]},i!==null&&(i=bo(i),i!==null&&Vt(i)),t):(t.eventSystemFlags|=c,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function Qg(t,i,o,c,f){switch(i){case"focusin":return rr=ho(rr,t,i,o,c,f),!0;case"dragenter":return sr=ho(sr,t,i,o,c,f),!0;case"mouseover":return or=ho(or,t,i,o,c,f),!0;case"pointerover":var h=f.pointerId;return uo.set(h,ho(uo.get(h)||null,t,i,o,c,f)),!0;case"gotpointercapture":return h=f.pointerId,fo.set(h,ho(fo.get(h)||null,t,i,o,c,f)),!0}return!1}function Nd(t){var i=zr(t.target);if(i!==null){var o=bn(i);if(o!==null){if(i=o.tag,i===13){if(i=ds(o),i!==null){t.blockedOn=i,li(t.priority,function(){ai(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fa(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=oc(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var c=new o.constructor(o.type,o);Re=c,o.target.dispatchEvent(c),Re=null}else return i=bo(o),i!==null&&Vt(i),t.blockedOn=o,!1;i.shift()}return!0}function Dd(t,i,o){fa(t)&&o.delete(i)}function Jg(){yi=!1,rr!==null&&fa(rr)&&(rr=null),sr!==null&&fa(sr)&&(sr=null),or!==null&&fa(or)&&(or=null),uo.forEach(Dd),fo.forEach(Dd)}function po(t,i){t.blockedOn===i&&(t.blockedOn=null,yi||(yi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Jg)))}function mo(t){function i(f){return po(f,t)}if(0<Br.length){po(Br[0],t);for(var o=1;o<Br.length;o++){var c=Br[o];c.blockedOn===t&&(c.blockedOn=null)}}for(rr!==null&&po(rr,t),sr!==null&&po(sr,t),or!==null&&po(or,t),uo.forEach(i),fo.forEach(i),o=0;o<ar.length;o++)c=ar[o],c.blockedOn===t&&(c.blockedOn=null);for(;0<ar.length&&(o=ar[0],o.blockedOn===null);)Nd(o),o.blockedOn===null&&ar.shift()}var hs=b.ReactCurrentBatchConfig,da=!0;function e0(t,i,o,c){var f=mt,h=hs.transition;hs.transition=null;try{mt=1,sc(t,i,o,c)}finally{mt=f,hs.transition=h}}function t0(t,i,o,c){var f=mt,h=hs.transition;hs.transition=null;try{mt=4,sc(t,i,o,c)}finally{mt=f,hs.transition=h}}function sc(t,i,o,c){if(da){var f=oc(t,i,o,c);if(f===null)Ec(t,i,c,ha,o),Ld(t,c);else if(Qg(f,t,i,o,c))c.stopPropagation();else if(Ld(t,c),i&4&&-1<jg.indexOf(t)){for(;f!==null;){var h=bo(f);if(h!==null&&Pt(h),h=oc(t,i,o,c),h===null&&Ec(t,i,c,ha,o),h===f)break;f=h}f!==null&&c.stopPropagation()}else Ec(t,i,c,null,o)}}var ha=null;function oc(t,i,o,c){if(ha=null,t=Je(c),t=zr(t),t!==null)if(i=bn(t),i===null)t=null;else if(o=i.tag,o===13){if(t=ds(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return ha=t,null}function Id(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rc()){case co:return 1;case A:return 4;case Y:case oe:return 16;case te:return 536870912;default:return 16}default:return 16}}var lr=null,ac=null,pa=null;function Ud(){if(pa)return pa;var t,i=ac,o=i.length,c,f="value"in lr?lr.value:lr.textContent,h=f.length;for(t=0;t<o&&i[t]===f[t];t++);var T=o-t;for(c=1;c<=T&&i[o-c]===f[h-c];c++);return pa=f.slice(t,1<c?1-c:void 0)}function ma(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ga(){return!0}function Fd(){return!1}function Hn(t){function i(o,c,f,h,T){this._reactName=o,this._targetInst=f,this.type=c,this.nativeEvent=h,this.target=T,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(o=t[D],this[D]=o?o(h):h[D]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ga:Fd,this.isPropagationStopped=Fd,this}return J(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ga)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ga)},persist:function(){},isPersistent:ga}),i}var ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lc=Hn(ps),go=J({},ps,{view:0,detail:0}),n0=Hn(go),cc,uc,vo,va=J({},go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==vo&&(vo&&t.type==="mousemove"?(cc=t.screenX-vo.screenX,uc=t.screenY-vo.screenY):uc=cc=0,vo=t),cc)},movementY:function(t){return"movementY"in t?t.movementY:uc}}),Od=Hn(va),i0=J({},va,{dataTransfer:0}),r0=Hn(i0),s0=J({},go,{relatedTarget:0}),fc=Hn(s0),o0=J({},ps,{animationName:0,elapsedTime:0,pseudoElement:0}),a0=Hn(o0),l0=J({},ps,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),c0=Hn(l0),u0=J({},ps,{data:0}),kd=Hn(u0),f0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},d0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},h0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function p0(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=h0[t])?!!i[t]:!1}function dc(){return p0}var m0=J({},go,{key:function(t){if(t.key){var i=f0[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ma(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?d0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dc,charCode:function(t){return t.type==="keypress"?ma(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ma(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),g0=Hn(m0),v0=J({},va,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bd=Hn(v0),_0=J({},go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dc}),x0=Hn(_0),S0=J({},ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),y0=Hn(S0),M0=J({},va,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),E0=Hn(M0),T0=[9,13,27,32],hc=d&&"CompositionEvent"in window,_o=null;d&&"documentMode"in document&&(_o=document.documentMode);var w0=d&&"TextEvent"in window&&!_o,zd=d&&(!hc||_o&&8<_o&&11>=_o),Vd=" ",Gd=!1;function Hd(t,i){switch(t){case"keyup":return T0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ms=!1;function A0(t,i){switch(t){case"compositionend":return Wd(i);case"keypress":return i.which!==32?null:(Gd=!0,Vd);case"textInput":return t=i.data,t===Vd&&Gd?null:t;default:return null}}function b0(t,i){if(ms)return t==="compositionend"||!hc&&Hd(t,i)?(t=Ud(),pa=ac=lr=null,ms=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return zd&&i.locale!=="ko"?null:i.data;default:return null}}var R0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!R0[t.type]:i==="textarea"}function Yd(t,i,o,c){pe(c),i=Ma(i,"onChange"),0<i.length&&(o=new lc("onChange","change",null,o,c),t.push({event:o,listeners:i}))}var xo=null,So=null;function C0(t){uh(t,0)}function _a(t){var i=Ss(t);if(It(i))return t}function P0(t,i){if(t==="change")return i}var qd=!1;if(d){var pc;if(d){var mc="oninput"in document;if(!mc){var $d=document.createElement("div");$d.setAttribute("oninput","return;"),mc=typeof $d.oninput=="function"}pc=mc}else pc=!1;qd=pc&&(!document.documentMode||9<document.documentMode)}function Kd(){xo&&(xo.detachEvent("onpropertychange",Zd),So=xo=null)}function Zd(t){if(t.propertyName==="value"&&_a(So)){var i=[];Yd(i,So,t,Je(t)),Ge(C0,i)}}function L0(t,i,o){t==="focusin"?(Kd(),xo=i,So=o,xo.attachEvent("onpropertychange",Zd)):t==="focusout"&&Kd()}function N0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return _a(So)}function D0(t,i){if(t==="click")return _a(i)}function I0(t,i){if(t==="input"||t==="change")return _a(i)}function U0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ci=typeof Object.is=="function"?Object.is:U0;function yo(t,i){if(ci(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var f=o[c];if(!p.call(i,f)||!ci(t[f],i[f]))return!1}return!0}function jd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Qd(t,i){var o=jd(t);t=0;for(var c;o;){if(o.nodeType===3){if(c=t+o.textContent.length,t<=i&&c>=i)return{node:o,offset:i-t};t=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=jd(o)}}function Jd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Jd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function eh(){for(var t=window,i=ot();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=ot(t.document)}return i}function gc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function F0(t){var i=eh(),o=t.focusedElem,c=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&Jd(o.ownerDocument.documentElement,o)){if(c!==null&&gc(o)){if(i=c.start,t=c.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=o.textContent.length,h=Math.min(c.start,f);c=c.end===void 0?h:Math.min(c.end,f),!t.extend&&h>c&&(f=c,c=h,h=f),f=Qd(o,h);var T=Qd(o,c);f&&T&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==T.node||t.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),h>c?(t.addRange(i),t.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var O0=d&&"documentMode"in document&&11>=document.documentMode,gs=null,vc=null,Mo=null,_c=!1;function th(t,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;_c||gs==null||gs!==ot(c)||(c=gs,"selectionStart"in c&&gc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Mo&&yo(Mo,c)||(Mo=c,c=Ma(vc,"onSelect"),0<c.length&&(i=new lc("onSelect","select",null,i,o),t.push({event:i,listeners:c}),i.target=gs)))}function xa(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var vs={animationend:xa("Animation","AnimationEnd"),animationiteration:xa("Animation","AnimationIteration"),animationstart:xa("Animation","AnimationStart"),transitionend:xa("Transition","TransitionEnd")},xc={},nh={};d&&(nh=document.createElement("div").style,"AnimationEvent"in window||(delete vs.animationend.animation,delete vs.animationiteration.animation,delete vs.animationstart.animation),"TransitionEvent"in window||delete vs.transitionend.transition);function Sa(t){if(xc[t])return xc[t];if(!vs[t])return t;var i=vs[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in nh)return xc[t]=i[o];return t}var ih=Sa("animationend"),rh=Sa("animationiteration"),sh=Sa("animationstart"),oh=Sa("transitionend"),ah=new Map,lh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cr(t,i){ah.set(t,i),l(i,[t])}for(var Sc=0;Sc<lh.length;Sc++){var yc=lh[Sc],k0=yc.toLowerCase(),B0=yc[0].toUpperCase()+yc.slice(1);cr(k0,"on"+B0)}cr(ih,"onAnimationEnd"),cr(rh,"onAnimationIteration"),cr(sh,"onAnimationStart"),cr("dblclick","onDoubleClick"),cr("focusin","onFocus"),cr("focusout","onBlur"),cr(oh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),z0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Eo));function ch(t,i,o){var c=t.type||"unknown-event";t.currentTarget=o,la(c,i,void 0,t),t.currentTarget=null}function uh(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var c=t[o],f=c.event;c=c.listeners;e:{var h=void 0;if(i)for(var T=c.length-1;0<=T;T--){var D=c[T],k=D.instance,ae=D.currentTarget;if(D=D.listener,k!==h&&f.isPropagationStopped())break e;ch(f,D,ae),h=k}else for(T=0;T<c.length;T++){if(D=c[T],k=D.instance,ae=D.currentTarget,D=D.listener,k!==h&&f.isPropagationStopped())break e;ch(f,D,ae),h=k}}}if(Ur)throw t=Fr,Ur=!1,Fr=null,t}function Gt(t,i){var o=i[Cc];o===void 0&&(o=i[Cc]=new Set);var c=t+"__bubble";o.has(c)||(fh(i,t,2,!1),o.add(c))}function Mc(t,i,o){var c=0;i&&(c|=4),fh(o,t,c,i)}var ya="_reactListening"+Math.random().toString(36).slice(2);function To(t){if(!t[ya]){t[ya]=!0,r.forEach(function(o){o!=="selectionchange"&&(z0.has(o)||Mc(o,!1,t),Mc(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ya]||(i[ya]=!0,Mc("selectionchange",!1,i))}}function fh(t,i,o,c){switch(Id(i)){case 1:var f=e0;break;case 4:f=t0;break;default:f=sc}o=f.bind(null,i,o,t),f=void 0,!Ct||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?t.addEventListener(i,o,{capture:!0,passive:f}):t.addEventListener(i,o,!0):f!==void 0?t.addEventListener(i,o,{passive:f}):t.addEventListener(i,o,!1)}function Ec(t,i,o,c,f){var h=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var D=c.stateNode.containerInfo;if(D===f||D.nodeType===8&&D.parentNode===f)break;if(T===4)for(T=c.return;T!==null;){var k=T.tag;if((k===3||k===4)&&(k=T.stateNode.containerInfo,k===f||k.nodeType===8&&k.parentNode===f))return;T=T.return}for(;D!==null;){if(T=zr(D),T===null)return;if(k=T.tag,k===5||k===6){c=h=T;continue e}D=D.parentNode}}c=c.return}Ge(function(){var ae=h,Se=Je(o),ye=[];e:{var xe=ah.get(t);if(xe!==void 0){var Be=lc,He=t;switch(t){case"keypress":if(ma(o)===0)break e;case"keydown":case"keyup":Be=g0;break;case"focusin":He="focus",Be=fc;break;case"focusout":He="blur",Be=fc;break;case"beforeblur":case"afterblur":Be=fc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Be=Od;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Be=r0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Be=x0;break;case ih:case rh:case sh:Be=a0;break;case oh:Be=y0;break;case"scroll":Be=n0;break;case"wheel":Be=E0;break;case"copy":case"cut":case"paste":Be=c0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Be=Bd}var Ye=(i&4)!==0,en=!Ye&&t==="scroll",j=Ye?xe!==null?xe+"Capture":null:xe;Ye=[];for(var H=ae,ne;H!==null;){ne=H;var Ee=ne.stateNode;if(ne.tag===5&&Ee!==null&&(ne=Ee,j!==null&&(Ee=Ut(H,j),Ee!=null&&Ye.push(wo(H,Ee,ne)))),en)break;H=H.return}0<Ye.length&&(xe=new Be(xe,He,null,o,Se),ye.push({event:xe,listeners:Ye}))}}if((i&7)===0){e:{if(xe=t==="mouseover"||t==="pointerover",Be=t==="mouseout"||t==="pointerout",xe&&o!==Re&&(He=o.relatedTarget||o.fromElement)&&(zr(He)||He[Fi]))break e;if((Be||xe)&&(xe=Se.window===Se?Se:(xe=Se.ownerDocument)?xe.defaultView||xe.parentWindow:window,Be?(He=o.relatedTarget||o.toElement,Be=ae,He=He?zr(He):null,He!==null&&(en=bn(He),He!==en||He.tag!==5&&He.tag!==6)&&(He=null)):(Be=null,He=ae),Be!==He)){if(Ye=Od,Ee="onMouseLeave",j="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(Ye=Bd,Ee="onPointerLeave",j="onPointerEnter",H="pointer"),en=Be==null?xe:Ss(Be),ne=He==null?xe:Ss(He),xe=new Ye(Ee,H+"leave",Be,o,Se),xe.target=en,xe.relatedTarget=ne,Ee=null,zr(Se)===ae&&(Ye=new Ye(j,H+"enter",He,o,Se),Ye.target=ne,Ye.relatedTarget=en,Ee=Ye),en=Ee,Be&&He)t:{for(Ye=Be,j=He,H=0,ne=Ye;ne;ne=_s(ne))H++;for(ne=0,Ee=j;Ee;Ee=_s(Ee))ne++;for(;0<H-ne;)Ye=_s(Ye),H--;for(;0<ne-H;)j=_s(j),ne--;for(;H--;){if(Ye===j||j!==null&&Ye===j.alternate)break t;Ye=_s(Ye),j=_s(j)}Ye=null}else Ye=null;Be!==null&&dh(ye,xe,Be,Ye,!1),He!==null&&en!==null&&dh(ye,en,He,Ye,!0)}}e:{if(xe=ae?Ss(ae):window,Be=xe.nodeName&&xe.nodeName.toLowerCase(),Be==="select"||Be==="input"&&xe.type==="file")var Ke=P0;else if(Xd(xe))if(qd)Ke=I0;else{Ke=N0;var tt=L0}else(Be=xe.nodeName)&&Be.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&(Ke=D0);if(Ke&&(Ke=Ke(t,ae))){Yd(ye,Ke,o,Se);break e}tt&&tt(t,xe,ae),t==="focusout"&&(tt=xe._wrapperState)&&tt.controlled&&xe.type==="number"&&Yt(xe,"number",xe.value)}switch(tt=ae?Ss(ae):window,t){case"focusin":(Xd(tt)||tt.contentEditable==="true")&&(gs=tt,vc=ae,Mo=null);break;case"focusout":Mo=vc=gs=null;break;case"mousedown":_c=!0;break;case"contextmenu":case"mouseup":case"dragend":_c=!1,th(ye,o,Se);break;case"selectionchange":if(O0)break;case"keydown":case"keyup":th(ye,o,Se)}var nt;if(hc)e:{switch(t){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else ms?Hd(t,o)&&(rt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(rt="onCompositionStart");rt&&(zd&&o.locale!=="ko"&&(ms||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&ms&&(nt=Ud()):(lr=Se,ac="value"in lr?lr.value:lr.textContent,ms=!0)),tt=Ma(ae,rt),0<tt.length&&(rt=new kd(rt,t,null,o,Se),ye.push({event:rt,listeners:tt}),nt?rt.data=nt:(nt=Wd(o),nt!==null&&(rt.data=nt)))),(nt=w0?A0(t,o):b0(t,o))&&(ae=Ma(ae,"onBeforeInput"),0<ae.length&&(Se=new kd("onBeforeInput","beforeinput",null,o,Se),ye.push({event:Se,listeners:ae}),Se.data=nt))}uh(ye,i)})}function wo(t,i,o){return{instance:t,listener:i,currentTarget:o}}function Ma(t,i){for(var o=i+"Capture",c=[];t!==null;){var f=t,h=f.stateNode;f.tag===5&&h!==null&&(f=h,h=Ut(t,o),h!=null&&c.unshift(wo(t,h,f)),h=Ut(t,i),h!=null&&c.push(wo(t,h,f))),t=t.return}return c}function _s(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function dh(t,i,o,c,f){for(var h=i._reactName,T=[];o!==null&&o!==c;){var D=o,k=D.alternate,ae=D.stateNode;if(k!==null&&k===c)break;D.tag===5&&ae!==null&&(D=ae,f?(k=Ut(o,h),k!=null&&T.unshift(wo(o,k,D))):f||(k=Ut(o,h),k!=null&&T.push(wo(o,k,D)))),o=o.return}T.length!==0&&t.push({event:i,listeners:T})}var V0=/\r\n?/g,G0=/\u0000|\uFFFD/g;function hh(t){return(typeof t=="string"?t:""+t).replace(V0,`
`).replace(G0,"")}function Ea(t,i,o){if(i=hh(i),hh(t)!==i&&o)throw Error(n(425))}function Ta(){}var Tc=null,wc=null;function Ac(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var bc=typeof setTimeout=="function"?setTimeout:void 0,H0=typeof clearTimeout=="function"?clearTimeout:void 0,ph=typeof Promise=="function"?Promise:void 0,W0=typeof queueMicrotask=="function"?queueMicrotask:typeof ph<"u"?function(t){return ph.resolve(null).then(t).catch(X0)}:bc;function X0(t){setTimeout(function(){throw t})}function Rc(t,i){var o=i,c=0;do{var f=o.nextSibling;if(t.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(c===0){t.removeChild(f),mo(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=f}while(o);mo(i)}function ur(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function mh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var xs=Math.random().toString(36).slice(2),Mi="__reactFiber$"+xs,Ao="__reactProps$"+xs,Fi="__reactContainer$"+xs,Cc="__reactEvents$"+xs,Y0="__reactListeners$"+xs,q0="__reactHandles$"+xs;function zr(t){var i=t[Mi];if(i)return i;for(var o=t.parentNode;o;){if(i=o[Fi]||o[Mi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=mh(t);t!==null;){if(o=t[Mi])return o;t=mh(t)}return i}t=o,o=t.parentNode}return null}function bo(t){return t=t[Mi]||t[Fi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function wa(t){return t[Ao]||null}var Pc=[],ys=-1;function fr(t){return{current:t}}function Ht(t){0>ys||(t.current=Pc[ys],Pc[ys]=null,ys--)}function zt(t,i){ys++,Pc[ys]=t.current,t.current=i}var dr={},Sn=fr(dr),In=fr(!1),Vr=dr;function Ms(t,i){var o=t.type.contextTypes;if(!o)return dr;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},h;for(h in o)f[h]=i[h];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function Un(t){return t=t.childContextTypes,t!=null}function Aa(){Ht(In),Ht(Sn)}function gh(t,i,o){if(Sn.current!==dr)throw Error(n(168));zt(Sn,i),zt(In,o)}function vh(t,i,o){var c=t.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(n(108,ve(t)||"Unknown",f));return J({},o,c)}function ba(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||dr,Vr=Sn.current,zt(Sn,t),zt(In,In.current),!0}function _h(t,i,o){var c=t.stateNode;if(!c)throw Error(n(169));o?(t=vh(t,i,Vr),c.__reactInternalMemoizedMergedChildContext=t,Ht(In),Ht(Sn),zt(Sn,t)):Ht(In),zt(In,o)}var Oi=null,Ra=!1,Lc=!1;function xh(t){Oi===null?Oi=[t]:Oi.push(t)}function $0(t){Ra=!0,xh(t)}function hr(){if(!Lc&&Oi!==null){Lc=!0;var t=0,i=mt;try{var o=Oi;for(mt=1;t<o.length;t++){var c=o[t];do c=c(!0);while(c!==null)}Oi=null,Ra=!1}catch(f){throw Oi!==null&&(Oi=Oi.slice(t+1)),kr(co,hr),f}finally{mt=i,Lc=!1}}return null}var Es=[],Ts=0,Ca=null,Pa=0,Zn=[],jn=0,Gr=null,ki=1,Bi="";function Hr(t,i){Es[Ts++]=Pa,Es[Ts++]=Ca,Ca=t,Pa=i}function Sh(t,i,o){Zn[jn++]=ki,Zn[jn++]=Bi,Zn[jn++]=Gr,Gr=t;var c=ki;t=Bi;var f=32-Te(c)-1;c&=~(1<<f),o+=1;var h=32-Te(i)+f;if(30<h){var T=f-f%5;h=(c&(1<<T)-1).toString(32),c>>=T,f-=T,ki=1<<32-Te(i)+f|o<<f|c,Bi=h+t}else ki=1<<h|o<<f|c,Bi=t}function Nc(t){t.return!==null&&(Hr(t,1),Sh(t,1,0))}function Dc(t){for(;t===Ca;)Ca=Es[--Ts],Es[Ts]=null,Pa=Es[--Ts],Es[Ts]=null;for(;t===Gr;)Gr=Zn[--jn],Zn[jn]=null,Bi=Zn[--jn],Zn[jn]=null,ki=Zn[--jn],Zn[jn]=null}var Wn=null,Xn=null,$t=!1,ui=null;function yh(t,i){var o=ti(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Mh(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Wn=t,Xn=ur(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Wn=t,Xn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Gr!==null?{id:ki,overflow:Bi}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=ti(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Wn=t,Xn=null,!0):!1;default:return!1}}function Ic(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Uc(t){if($t){var i=Xn;if(i){var o=i;if(!Mh(t,i)){if(Ic(t))throw Error(n(418));i=ur(o.nextSibling);var c=Wn;i&&Mh(t,i)?yh(c,o):(t.flags=t.flags&-4097|2,$t=!1,Wn=t)}}else{if(Ic(t))throw Error(n(418));t.flags=t.flags&-4097|2,$t=!1,Wn=t}}}function Eh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Wn=t}function La(t){if(t!==Wn)return!1;if(!$t)return Eh(t),$t=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Ac(t.type,t.memoizedProps)),i&&(i=Xn)){if(Ic(t))throw Th(),Error(n(418));for(;i;)yh(t,i),i=ur(i.nextSibling)}if(Eh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Xn=ur(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Xn=null}}else Xn=Wn?ur(t.stateNode.nextSibling):null;return!0}function Th(){for(var t=Xn;t;)t=ur(t.nextSibling)}function ws(){Xn=Wn=null,$t=!1}function Fc(t){ui===null?ui=[t]:ui.push(t)}var K0=b.ReactCurrentBatchConfig;function Ro(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var c=o.stateNode}if(!c)throw Error(n(147,t));var f=c,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(T){var D=f.refs;T===null?delete D[h]:D[h]=T},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Na(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function wh(t){var i=t._init;return i(t._payload)}function Ah(t){function i(j,H){if(t){var ne=j.deletions;ne===null?(j.deletions=[H],j.flags|=16):ne.push(H)}}function o(j,H){if(!t)return null;for(;H!==null;)i(j,H),H=H.sibling;return null}function c(j,H){for(j=new Map;H!==null;)H.key!==null?j.set(H.key,H):j.set(H.index,H),H=H.sibling;return j}function f(j,H){return j=yr(j,H),j.index=0,j.sibling=null,j}function h(j,H,ne){return j.index=ne,t?(ne=j.alternate,ne!==null?(ne=ne.index,ne<H?(j.flags|=2,H):ne):(j.flags|=2,H)):(j.flags|=1048576,H)}function T(j){return t&&j.alternate===null&&(j.flags|=2),j}function D(j,H,ne,Ee){return H===null||H.tag!==6?(H=bu(ne,j.mode,Ee),H.return=j,H):(H=f(H,ne),H.return=j,H)}function k(j,H,ne,Ee){var Ke=ne.type;return Ke===O?Se(j,H,ne.props.children,Ee,ne.key):H!==null&&(H.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===le&&wh(Ke)===H.type)?(Ee=f(H,ne.props),Ee.ref=Ro(j,H,ne),Ee.return=j,Ee):(Ee=nl(ne.type,ne.key,ne.props,null,j.mode,Ee),Ee.ref=Ro(j,H,ne),Ee.return=j,Ee)}function ae(j,H,ne,Ee){return H===null||H.tag!==4||H.stateNode.containerInfo!==ne.containerInfo||H.stateNode.implementation!==ne.implementation?(H=Ru(ne,j.mode,Ee),H.return=j,H):(H=f(H,ne.children||[]),H.return=j,H)}function Se(j,H,ne,Ee,Ke){return H===null||H.tag!==7?(H=jr(ne,j.mode,Ee,Ke),H.return=j,H):(H=f(H,ne),H.return=j,H)}function ye(j,H,ne){if(typeof H=="string"&&H!==""||typeof H=="number")return H=bu(""+H,j.mode,ne),H.return=j,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case I:return ne=nl(H.type,H.key,H.props,null,j.mode,ne),ne.ref=Ro(j,null,H),ne.return=j,ne;case P:return H=Ru(H,j.mode,ne),H.return=j,H;case le:var Ee=H._init;return ye(j,Ee(H._payload),ne)}if(kt(H)||Q(H))return H=jr(H,j.mode,ne,null),H.return=j,H;Na(j,H)}return null}function xe(j,H,ne,Ee){var Ke=H!==null?H.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number")return Ke!==null?null:D(j,H,""+ne,Ee);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case I:return ne.key===Ke?k(j,H,ne,Ee):null;case P:return ne.key===Ke?ae(j,H,ne,Ee):null;case le:return Ke=ne._init,xe(j,H,Ke(ne._payload),Ee)}if(kt(ne)||Q(ne))return Ke!==null?null:Se(j,H,ne,Ee,null);Na(j,ne)}return null}function Be(j,H,ne,Ee,Ke){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return j=j.get(ne)||null,D(H,j,""+Ee,Ke);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case I:return j=j.get(Ee.key===null?ne:Ee.key)||null,k(H,j,Ee,Ke);case P:return j=j.get(Ee.key===null?ne:Ee.key)||null,ae(H,j,Ee,Ke);case le:var tt=Ee._init;return Be(j,H,ne,tt(Ee._payload),Ke)}if(kt(Ee)||Q(Ee))return j=j.get(ne)||null,Se(H,j,Ee,Ke,null);Na(H,Ee)}return null}function He(j,H,ne,Ee){for(var Ke=null,tt=null,nt=H,rt=H=0,hn=null;nt!==null&&rt<ne.length;rt++){nt.index>rt?(hn=nt,nt=null):hn=nt.sibling;var bt=xe(j,nt,ne[rt],Ee);if(bt===null){nt===null&&(nt=hn);break}t&&nt&&bt.alternate===null&&i(j,nt),H=h(bt,H,rt),tt===null?Ke=bt:tt.sibling=bt,tt=bt,nt=hn}if(rt===ne.length)return o(j,nt),$t&&Hr(j,rt),Ke;if(nt===null){for(;rt<ne.length;rt++)nt=ye(j,ne[rt],Ee),nt!==null&&(H=h(nt,H,rt),tt===null?Ke=nt:tt.sibling=nt,tt=nt);return $t&&Hr(j,rt),Ke}for(nt=c(j,nt);rt<ne.length;rt++)hn=Be(nt,j,rt,ne[rt],Ee),hn!==null&&(t&&hn.alternate!==null&&nt.delete(hn.key===null?rt:hn.key),H=h(hn,H,rt),tt===null?Ke=hn:tt.sibling=hn,tt=hn);return t&&nt.forEach(function(Mr){return i(j,Mr)}),$t&&Hr(j,rt),Ke}function Ye(j,H,ne,Ee){var Ke=Q(ne);if(typeof Ke!="function")throw Error(n(150));if(ne=Ke.call(ne),ne==null)throw Error(n(151));for(var tt=Ke=null,nt=H,rt=H=0,hn=null,bt=ne.next();nt!==null&&!bt.done;rt++,bt=ne.next()){nt.index>rt?(hn=nt,nt=null):hn=nt.sibling;var Mr=xe(j,nt,bt.value,Ee);if(Mr===null){nt===null&&(nt=hn);break}t&&nt&&Mr.alternate===null&&i(j,nt),H=h(Mr,H,rt),tt===null?Ke=Mr:tt.sibling=Mr,tt=Mr,nt=hn}if(bt.done)return o(j,nt),$t&&Hr(j,rt),Ke;if(nt===null){for(;!bt.done;rt++,bt=ne.next())bt=ye(j,bt.value,Ee),bt!==null&&(H=h(bt,H,rt),tt===null?Ke=bt:tt.sibling=bt,tt=bt);return $t&&Hr(j,rt),Ke}for(nt=c(j,nt);!bt.done;rt++,bt=ne.next())bt=Be(nt,j,rt,bt.value,Ee),bt!==null&&(t&&bt.alternate!==null&&nt.delete(bt.key===null?rt:bt.key),H=h(bt,H,rt),tt===null?Ke=bt:tt.sibling=bt,tt=bt);return t&&nt.forEach(function(Rv){return i(j,Rv)}),$t&&Hr(j,rt),Ke}function en(j,H,ne,Ee){if(typeof ne=="object"&&ne!==null&&ne.type===O&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case I:e:{for(var Ke=ne.key,tt=H;tt!==null;){if(tt.key===Ke){if(Ke=ne.type,Ke===O){if(tt.tag===7){o(j,tt.sibling),H=f(tt,ne.props.children),H.return=j,j=H;break e}}else if(tt.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===le&&wh(Ke)===tt.type){o(j,tt.sibling),H=f(tt,ne.props),H.ref=Ro(j,tt,ne),H.return=j,j=H;break e}o(j,tt);break}else i(j,tt);tt=tt.sibling}ne.type===O?(H=jr(ne.props.children,j.mode,Ee,ne.key),H.return=j,j=H):(Ee=nl(ne.type,ne.key,ne.props,null,j.mode,Ee),Ee.ref=Ro(j,H,ne),Ee.return=j,j=Ee)}return T(j);case P:e:{for(tt=ne.key;H!==null;){if(H.key===tt)if(H.tag===4&&H.stateNode.containerInfo===ne.containerInfo&&H.stateNode.implementation===ne.implementation){o(j,H.sibling),H=f(H,ne.children||[]),H.return=j,j=H;break e}else{o(j,H);break}else i(j,H);H=H.sibling}H=Ru(ne,j.mode,Ee),H.return=j,j=H}return T(j);case le:return tt=ne._init,en(j,H,tt(ne._payload),Ee)}if(kt(ne))return He(j,H,ne,Ee);if(Q(ne))return Ye(j,H,ne,Ee);Na(j,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"?(ne=""+ne,H!==null&&H.tag===6?(o(j,H.sibling),H=f(H,ne),H.return=j,j=H):(o(j,H),H=bu(ne,j.mode,Ee),H.return=j,j=H),T(j)):o(j,H)}return en}var As=Ah(!0),bh=Ah(!1),Da=fr(null),Ia=null,bs=null,Oc=null;function kc(){Oc=bs=Ia=null}function Bc(t){var i=Da.current;Ht(Da),t._currentValue=i}function zc(t,i,o){for(;t!==null;){var c=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),t===o)break;t=t.return}}function Rs(t,i){Ia=t,Oc=bs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Fn=!0),t.firstContext=null)}function Qn(t){var i=t._currentValue;if(Oc!==t)if(t={context:t,memoizedValue:i,next:null},bs===null){if(Ia===null)throw Error(n(308));bs=t,Ia.dependencies={lanes:0,firstContext:t}}else bs=bs.next=t;return i}var Wr=null;function Vc(t){Wr===null?Wr=[t]:Wr.push(t)}function Rh(t,i,o,c){var f=i.interleaved;return f===null?(o.next=o,Vc(i)):(o.next=f.next,f.next=o),i.interleaved=o,zi(t,c)}function zi(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var pr=!1;function Gc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ch(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Vi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function mr(t,i,o){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(Et&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,zi(t,o)}return f=c.interleaved,f===null?(i.next=i,Vc(c)):(i.next=f.next,f.next=i),c.interleaved=i,zi(t,o)}function Ua(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=t.pendingLanes,o|=c,i.lanes=o,Dn(t,o)}}function Ph(t,i){var o=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var f=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var T={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?f=h=T:h=h.next=T,o=o.next}while(o!==null);h===null?f=h=i:h=h.next=i}else f=h=i;o={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:c.shared,effects:c.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Fa(t,i,o,c){var f=t.updateQueue;pr=!1;var h=f.firstBaseUpdate,T=f.lastBaseUpdate,D=f.shared.pending;if(D!==null){f.shared.pending=null;var k=D,ae=k.next;k.next=null,T===null?h=ae:T.next=ae,T=k;var Se=t.alternate;Se!==null&&(Se=Se.updateQueue,D=Se.lastBaseUpdate,D!==T&&(D===null?Se.firstBaseUpdate=ae:D.next=ae,Se.lastBaseUpdate=k))}if(h!==null){var ye=f.baseState;T=0,Se=ae=k=null,D=h;do{var xe=D.lane,Be=D.eventTime;if((c&xe)===xe){Se!==null&&(Se=Se.next={eventTime:Be,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var He=t,Ye=D;switch(xe=i,Be=o,Ye.tag){case 1:if(He=Ye.payload,typeof He=="function"){ye=He.call(Be,ye,xe);break e}ye=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=Ye.payload,xe=typeof He=="function"?He.call(Be,ye,xe):He,xe==null)break e;ye=J({},ye,xe);break e;case 2:pr=!0}}D.callback!==null&&D.lane!==0&&(t.flags|=64,xe=f.effects,xe===null?f.effects=[D]:xe.push(D))}else Be={eventTime:Be,lane:xe,tag:D.tag,payload:D.payload,callback:D.callback,next:null},Se===null?(ae=Se=Be,k=ye):Se=Se.next=Be,T|=xe;if(D=D.next,D===null){if(D=f.shared.pending,D===null)break;xe=D,D=xe.next,xe.next=null,f.lastBaseUpdate=xe,f.shared.pending=null}}while(!0);if(Se===null&&(k=ye),f.baseState=k,f.firstBaseUpdate=ae,f.lastBaseUpdate=Se,i=f.shared.interleaved,i!==null){f=i;do T|=f.lane,f=f.next;while(f!==i)}else h===null&&(f.shared.lanes=0);qr|=T,t.lanes=T,t.memoizedState=ye}}function Lh(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var c=t[i],f=c.callback;if(f!==null){if(c.callback=null,c=o,typeof f!="function")throw Error(n(191,f));f.call(c)}}}var Co={},Ei=fr(Co),Po=fr(Co),Lo=fr(Co);function Xr(t){if(t===Co)throw Error(n(174));return t}function Hc(t,i){switch(zt(Lo,i),zt(Po,t),zt(Ei,Co),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:y(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=y(i,t)}Ht(Ei),zt(Ei,i)}function Cs(){Ht(Ei),Ht(Po),Ht(Lo)}function Nh(t){Xr(Lo.current);var i=Xr(Ei.current),o=y(i,t.type);i!==o&&(zt(Po,t),zt(Ei,o))}function Wc(t){Po.current===t&&(Ht(Ei),Ht(Po))}var Zt=fr(0);function Oa(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Xc=[];function Yc(){for(var t=0;t<Xc.length;t++)Xc[t]._workInProgressVersionPrimary=null;Xc.length=0}var ka=b.ReactCurrentDispatcher,qc=b.ReactCurrentBatchConfig,Yr=0,jt=null,an=null,fn=null,Ba=!1,No=!1,Do=0,Z0=0;function yn(){throw Error(n(321))}function $c(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!ci(t[o],i[o]))return!1;return!0}function Kc(t,i,o,c,f,h){if(Yr=h,jt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ka.current=t===null||t.memoizedState===null?ev:tv,t=o(c,f),No){h=0;do{if(No=!1,Do=0,25<=h)throw Error(n(301));h+=1,fn=an=null,i.updateQueue=null,ka.current=nv,t=o(c,f)}while(No)}if(ka.current=Ga,i=an!==null&&an.next!==null,Yr=0,fn=an=jt=null,Ba=!1,i)throw Error(n(300));return t}function Zc(){var t=Do!==0;return Do=0,t}function Ti(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?jt.memoizedState=fn=t:fn=fn.next=t,fn}function Jn(){if(an===null){var t=jt.alternate;t=t!==null?t.memoizedState:null}else t=an.next;var i=fn===null?jt.memoizedState:fn.next;if(i!==null)fn=i,an=t;else{if(t===null)throw Error(n(310));an=t,t={memoizedState:an.memoizedState,baseState:an.baseState,baseQueue:an.baseQueue,queue:an.queue,next:null},fn===null?jt.memoizedState=fn=t:fn=fn.next=t}return fn}function Io(t,i){return typeof i=="function"?i(t):i}function jc(t){var i=Jn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var c=an,f=c.baseQueue,h=o.pending;if(h!==null){if(f!==null){var T=f.next;f.next=h.next,h.next=T}c.baseQueue=f=h,o.pending=null}if(f!==null){h=f.next,c=c.baseState;var D=T=null,k=null,ae=h;do{var Se=ae.lane;if((Yr&Se)===Se)k!==null&&(k=k.next={lane:0,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),c=ae.hasEagerState?ae.eagerState:t(c,ae.action);else{var ye={lane:Se,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null};k===null?(D=k=ye,T=c):k=k.next=ye,jt.lanes|=Se,qr|=Se}ae=ae.next}while(ae!==null&&ae!==h);k===null?T=c:k.next=D,ci(c,i.memoizedState)||(Fn=!0),i.memoizedState=c,i.baseState=T,i.baseQueue=k,o.lastRenderedState=c}if(t=o.interleaved,t!==null){f=t;do h=f.lane,jt.lanes|=h,qr|=h,f=f.next;while(f!==t)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Qc(t){var i=Jn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var c=o.dispatch,f=o.pending,h=i.memoizedState;if(f!==null){o.pending=null;var T=f=f.next;do h=t(h,T.action),T=T.next;while(T!==f);ci(h,i.memoizedState)||(Fn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,c]}function Dh(){}function Ih(t,i){var o=jt,c=Jn(),f=i(),h=!ci(c.memoizedState,f);if(h&&(c.memoizedState=f,Fn=!0),c=c.queue,Jc(Oh.bind(null,o,c,t),[t]),c.getSnapshot!==i||h||fn!==null&&fn.memoizedState.tag&1){if(o.flags|=2048,Uo(9,Fh.bind(null,o,c,f,i),void 0,null),dn===null)throw Error(n(349));(Yr&30)!==0||Uh(o,i,f)}return f}function Uh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Fh(t,i,o,c){i.value=o,i.getSnapshot=c,kh(i)&&Bh(t)}function Oh(t,i,o){return o(function(){kh(i)&&Bh(t)})}function kh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!ci(t,o)}catch{return!0}}function Bh(t){var i=zi(t,1);i!==null&&pi(i,t,1,-1)}function zh(t){var i=Ti();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:t},i.queue=t,t=t.dispatch=J0.bind(null,jt,t),[i.memoizedState,t]}function Uo(t,i,o,c){return t={tag:t,create:i,destroy:o,deps:c,next:null},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(c=o.next,o.next=t,t.next=c,i.lastEffect=t)),t}function Vh(){return Jn().memoizedState}function za(t,i,o,c){var f=Ti();jt.flags|=t,f.memoizedState=Uo(1|i,o,void 0,c===void 0?null:c)}function Va(t,i,o,c){var f=Jn();c=c===void 0?null:c;var h=void 0;if(an!==null){var T=an.memoizedState;if(h=T.destroy,c!==null&&$c(c,T.deps)){f.memoizedState=Uo(i,o,h,c);return}}jt.flags|=t,f.memoizedState=Uo(1|i,o,h,c)}function Gh(t,i){return za(8390656,8,t,i)}function Jc(t,i){return Va(2048,8,t,i)}function Hh(t,i){return Va(4,2,t,i)}function Wh(t,i){return Va(4,4,t,i)}function Xh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Yh(t,i,o){return o=o!=null?o.concat([t]):null,Va(4,4,Xh.bind(null,i,t),o)}function eu(){}function qh(t,i){var o=Jn();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&$c(i,c[1])?c[0]:(o.memoizedState=[t,i],t)}function $h(t,i){var o=Jn();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&$c(i,c[1])?c[0]:(t=t(),o.memoizedState=[t,i],t)}function Kh(t,i,o){return(Yr&21)===0?(t.baseState&&(t.baseState=!1,Fn=!0),t.memoizedState=o):(ci(o,i)||(o=ke(),jt.lanes|=o,qr|=o,t.baseState=!0),i)}function j0(t,i){var o=mt;mt=o!==0&&4>o?o:4,t(!0);var c=qc.transition;qc.transition={};try{t(!1),i()}finally{mt=o,qc.transition=c}}function Zh(){return Jn().memoizedState}function Q0(t,i,o){var c=xr(t);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},jh(t))Qh(i,o);else if(o=Rh(t,i,o,c),o!==null){var f=Cn();pi(o,t,c,f),Jh(o,i,c)}}function J0(t,i,o){var c=xr(t),f={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(jh(t))Qh(i,f);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var T=i.lastRenderedState,D=h(T,o);if(f.hasEagerState=!0,f.eagerState=D,ci(D,T)){var k=i.interleaved;k===null?(f.next=f,Vc(i)):(f.next=k.next,k.next=f),i.interleaved=f;return}}catch{}finally{}o=Rh(t,i,f,c),o!==null&&(f=Cn(),pi(o,t,c,f),Jh(o,i,c))}}function jh(t){var i=t.alternate;return t===jt||i!==null&&i===jt}function Qh(t,i){No=Ba=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function Jh(t,i,o){if((o&4194240)!==0){var c=i.lanes;c&=t.pendingLanes,o|=c,i.lanes=o,Dn(t,o)}}var Ga={readContext:Qn,useCallback:yn,useContext:yn,useEffect:yn,useImperativeHandle:yn,useInsertionEffect:yn,useLayoutEffect:yn,useMemo:yn,useReducer:yn,useRef:yn,useState:yn,useDebugValue:yn,useDeferredValue:yn,useTransition:yn,useMutableSource:yn,useSyncExternalStore:yn,useId:yn,unstable_isNewReconciler:!1},ev={readContext:Qn,useCallback:function(t,i){return Ti().memoizedState=[t,i===void 0?null:i],t},useContext:Qn,useEffect:Gh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,za(4194308,4,Xh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return za(4194308,4,t,i)},useInsertionEffect:function(t,i){return za(4,2,t,i)},useMemo:function(t,i){var o=Ti();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var c=Ti();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},c.queue=t,t=t.dispatch=Q0.bind(null,jt,t),[c.memoizedState,t]},useRef:function(t){var i=Ti();return t={current:t},i.memoizedState=t},useState:zh,useDebugValue:eu,useDeferredValue:function(t){return Ti().memoizedState=t},useTransition:function(){var t=zh(!1),i=t[0];return t=j0.bind(null,t[1]),Ti().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var c=jt,f=Ti();if($t){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),dn===null)throw Error(n(349));(Yr&30)!==0||Uh(c,i,o)}f.memoizedState=o;var h={value:o,getSnapshot:i};return f.queue=h,Gh(Oh.bind(null,c,h,t),[t]),c.flags|=2048,Uo(9,Fh.bind(null,c,h,o,i),void 0,null),o},useId:function(){var t=Ti(),i=dn.identifierPrefix;if($t){var o=Bi,c=ki;o=(c&~(1<<32-Te(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=Do++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=Z0++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},tv={readContext:Qn,useCallback:qh,useContext:Qn,useEffect:Jc,useImperativeHandle:Yh,useInsertionEffect:Hh,useLayoutEffect:Wh,useMemo:$h,useReducer:jc,useRef:Vh,useState:function(){return jc(Io)},useDebugValue:eu,useDeferredValue:function(t){var i=Jn();return Kh(i,an.memoizedState,t)},useTransition:function(){var t=jc(Io)[0],i=Jn().memoizedState;return[t,i]},useMutableSource:Dh,useSyncExternalStore:Ih,useId:Zh,unstable_isNewReconciler:!1},nv={readContext:Qn,useCallback:qh,useContext:Qn,useEffect:Jc,useImperativeHandle:Yh,useInsertionEffect:Hh,useLayoutEffect:Wh,useMemo:$h,useReducer:Qc,useRef:Vh,useState:function(){return Qc(Io)},useDebugValue:eu,useDeferredValue:function(t){var i=Jn();return an===null?i.memoizedState=t:Kh(i,an.memoizedState,t)},useTransition:function(){var t=Qc(Io)[0],i=Jn().memoizedState;return[t,i]},useMutableSource:Dh,useSyncExternalStore:Ih,useId:Zh,unstable_isNewReconciler:!1};function fi(t,i){if(t&&t.defaultProps){i=J({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function tu(t,i,o,c){i=t.memoizedState,o=o(c,i),o=o==null?i:J({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Ha={isMounted:function(t){return(t=t._reactInternals)?bn(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var c=Cn(),f=xr(t),h=Vi(c,f);h.payload=i,o!=null&&(h.callback=o),i=mr(t,h,f),i!==null&&(pi(i,t,f,c),Ua(i,t,f))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var c=Cn(),f=xr(t),h=Vi(c,f);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=mr(t,h,f),i!==null&&(pi(i,t,f,c),Ua(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=Cn(),c=xr(t),f=Vi(o,c);f.tag=2,i!=null&&(f.callback=i),i=mr(t,f,c),i!==null&&(pi(i,t,c,o),Ua(i,t,c))}};function ep(t,i,o,c,f,h,T){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,h,T):i.prototype&&i.prototype.isPureReactComponent?!yo(o,c)||!yo(f,h):!0}function tp(t,i,o){var c=!1,f=dr,h=i.contextType;return typeof h=="object"&&h!==null?h=Qn(h):(f=Un(i)?Vr:Sn.current,c=i.contextTypes,h=(c=c!=null)?Ms(t,f):dr),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ha,t.stateNode=i,i._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=h),i}function np(t,i,o,c){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==t&&Ha.enqueueReplaceState(i,i.state,null)}function nu(t,i,o,c){var f=t.stateNode;f.props=o,f.state=t.memoizedState,f.refs={},Gc(t);var h=i.contextType;typeof h=="object"&&h!==null?f.context=Qn(h):(h=Un(i)?Vr:Sn.current,f.context=Ms(t,h)),f.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(tu(t,i,h,o),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Ha.enqueueReplaceState(f,f.state,null),Fa(t,o,f,c),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function Ps(t,i){try{var o="",c=i;do o+=Fe(c),c=c.return;while(c);var f=o}catch(h){f=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:f,digest:null}}function iu(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function ru(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var iv=typeof WeakMap=="function"?WeakMap:Map;function ip(t,i,o){o=Vi(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){Za||(Za=!0,xu=c),ru(t,i)},o}function rp(t,i,o){o=Vi(-1,o),o.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;o.payload=function(){return c(f)},o.callback=function(){ru(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){ru(t,i),typeof c!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),o}function sp(t,i,o){var c=t.pingCache;if(c===null){c=t.pingCache=new iv;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(o)||(f.add(o),t=vv.bind(null,t,i,o),i.then(t,t))}function op(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function ap(t,i,o,c,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Vi(-1,1),i.tag=2,mr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var rv=b.ReactCurrentOwner,Fn=!1;function Rn(t,i,o,c){i.child=t===null?bh(i,null,o,c):As(i,t.child,o,c)}function lp(t,i,o,c,f){o=o.render;var h=i.ref;return Rs(i,f),c=Kc(t,i,o,c,h,f),o=Zc(),t!==null&&!Fn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Gi(t,i,f)):($t&&o&&Nc(i),i.flags|=1,Rn(t,i,c,f),i.child)}function cp(t,i,o,c,f){if(t===null){var h=o.type;return typeof h=="function"&&!Au(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,up(t,i,h,c,f)):(t=nl(o.type,null,c,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&f)===0){var T=h.memoizedProps;if(o=o.compare,o=o!==null?o:yo,o(T,c)&&t.ref===i.ref)return Gi(t,i,f)}return i.flags|=1,t=yr(h,c),t.ref=i.ref,t.return=i,i.child=t}function up(t,i,o,c,f){if(t!==null){var h=t.memoizedProps;if(yo(h,c)&&t.ref===i.ref)if(Fn=!1,i.pendingProps=c=h,(t.lanes&f)!==0)(t.flags&131072)!==0&&(Fn=!0);else return i.lanes=t.lanes,Gi(t,i,f)}return su(t,i,o,c,f)}function fp(t,i,o){var c=i.pendingProps,f=c.children,h=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},zt(Ns,Yn),Yn|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,zt(Ns,Yn),Yn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=h!==null?h.baseLanes:o,zt(Ns,Yn),Yn|=c}else h!==null?(c=h.baseLanes|o,i.memoizedState=null):c=o,zt(Ns,Yn),Yn|=c;return Rn(t,i,f,o),i.child}function dp(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function su(t,i,o,c,f){var h=Un(o)?Vr:Sn.current;return h=Ms(i,h),Rs(i,f),o=Kc(t,i,o,c,h,f),c=Zc(),t!==null&&!Fn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Gi(t,i,f)):($t&&c&&Nc(i),i.flags|=1,Rn(t,i,o,f),i.child)}function hp(t,i,o,c,f){if(Un(o)){var h=!0;ba(i)}else h=!1;if(Rs(i,f),i.stateNode===null)Xa(t,i),tp(i,o,c),nu(i,o,c,f),c=!0;else if(t===null){var T=i.stateNode,D=i.memoizedProps;T.props=D;var k=T.context,ae=o.contextType;typeof ae=="object"&&ae!==null?ae=Qn(ae):(ae=Un(o)?Vr:Sn.current,ae=Ms(i,ae));var Se=o.getDerivedStateFromProps,ye=typeof Se=="function"||typeof T.getSnapshotBeforeUpdate=="function";ye||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(D!==c||k!==ae)&&np(i,T,c,ae),pr=!1;var xe=i.memoizedState;T.state=xe,Fa(i,c,T,f),k=i.memoizedState,D!==c||xe!==k||In.current||pr?(typeof Se=="function"&&(tu(i,o,Se,c),k=i.memoizedState),(D=pr||ep(i,o,D,c,xe,k,ae))?(ye||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=k),T.props=c,T.state=k,T.context=ae,c=D):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{T=i.stateNode,Ch(t,i),D=i.memoizedProps,ae=i.type===i.elementType?D:fi(i.type,D),T.props=ae,ye=i.pendingProps,xe=T.context,k=o.contextType,typeof k=="object"&&k!==null?k=Qn(k):(k=Un(o)?Vr:Sn.current,k=Ms(i,k));var Be=o.getDerivedStateFromProps;(Se=typeof Be=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(D!==ye||xe!==k)&&np(i,T,c,k),pr=!1,xe=i.memoizedState,T.state=xe,Fa(i,c,T,f);var He=i.memoizedState;D!==ye||xe!==He||In.current||pr?(typeof Be=="function"&&(tu(i,o,Be,c),He=i.memoizedState),(ae=pr||ep(i,o,ae,c,xe,He,k)||!1)?(Se||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(c,He,k),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(c,He,k)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||D===t.memoizedProps&&xe===t.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&xe===t.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=He),T.props=c,T.state=He,T.context=k,c=ae):(typeof T.componentDidUpdate!="function"||D===t.memoizedProps&&xe===t.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&xe===t.memoizedState||(i.flags|=1024),c=!1)}return ou(t,i,o,c,h,f)}function ou(t,i,o,c,f,h){dp(t,i);var T=(i.flags&128)!==0;if(!c&&!T)return f&&_h(i,o,!1),Gi(t,i,h);c=i.stateNode,rv.current=i;var D=T&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,t!==null&&T?(i.child=As(i,t.child,null,h),i.child=As(i,null,D,h)):Rn(t,i,D,h),i.memoizedState=c.state,f&&_h(i,o,!0),i.child}function pp(t){var i=t.stateNode;i.pendingContext?gh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&gh(t,i.context,!1),Hc(t,i.containerInfo)}function mp(t,i,o,c,f){return ws(),Fc(f),i.flags|=256,Rn(t,i,o,c),i.child}var au={dehydrated:null,treeContext:null,retryLane:0};function lu(t){return{baseLanes:t,cachePool:null,transitions:null}}function gp(t,i,o){var c=i.pendingProps,f=Zt.current,h=!1,T=(i.flags&128)!==0,D;if((D=T)||(D=t!==null&&t.memoizedState===null?!1:(f&2)!==0),D?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),zt(Zt,f&1),t===null)return Uc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=c.children,t=c.fallback,h?(c=i.mode,h=i.child,T={mode:"hidden",children:T},(c&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=T):h=il(T,c,0,null),t=jr(t,c,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=lu(o),i.memoizedState=au,t):cu(i,T));if(f=t.memoizedState,f!==null&&(D=f.dehydrated,D!==null))return sv(t,i,T,c,D,f,o);if(h){h=c.fallback,T=i.mode,f=t.child,D=f.sibling;var k={mode:"hidden",children:c.children};return(T&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=k,i.deletions=null):(c=yr(f,k),c.subtreeFlags=f.subtreeFlags&14680064),D!==null?h=yr(D,h):(h=jr(h,T,o,null),h.flags|=2),h.return=i,c.return=i,c.sibling=h,i.child=c,c=h,h=i.child,T=t.child.memoizedState,T=T===null?lu(o):{baseLanes:T.baseLanes|o,cachePool:null,transitions:T.transitions},h.memoizedState=T,h.childLanes=t.childLanes&~o,i.memoizedState=au,c}return h=t.child,t=h.sibling,c=yr(h,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=o),c.return=i,c.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=c,i.memoizedState=null,c}function cu(t,i){return i=il({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Wa(t,i,o,c){return c!==null&&Fc(c),As(i,t.child,null,o),t=cu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function sv(t,i,o,c,f,h,T){if(o)return i.flags&256?(i.flags&=-257,c=iu(Error(n(422))),Wa(t,i,T,c)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=c.fallback,f=i.mode,c=il({mode:"visible",children:c.children},f,0,null),h=jr(h,f,T,null),h.flags|=2,c.return=i,h.return=i,c.sibling=h,i.child=c,(i.mode&1)!==0&&As(i,t.child,null,T),i.child.memoizedState=lu(T),i.memoizedState=au,h);if((i.mode&1)===0)return Wa(t,i,T,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var D=c.dgst;return c=D,h=Error(n(419)),c=iu(h,c,void 0),Wa(t,i,T,c)}if(D=(T&t.childLanes)!==0,Fn||D){if(c=dn,c!==null){switch(T&-T){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|T))!==0?0:f,f!==0&&f!==h.retryLane&&(h.retryLane=f,zi(t,f),pi(c,t,f,-1))}return wu(),c=iu(Error(n(421))),Wa(t,i,T,c)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=_v.bind(null,t),f._reactRetry=i,null):(t=h.treeContext,Xn=ur(f.nextSibling),Wn=i,$t=!0,ui=null,t!==null&&(Zn[jn++]=ki,Zn[jn++]=Bi,Zn[jn++]=Gr,ki=t.id,Bi=t.overflow,Gr=i),i=cu(i,c.children),i.flags|=4096,i)}function vp(t,i,o){t.lanes|=i;var c=t.alternate;c!==null&&(c.lanes|=i),zc(t.return,i,o)}function uu(t,i,o,c,f){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:f}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=c,h.tail=o,h.tailMode=f)}function _p(t,i,o){var c=i.pendingProps,f=c.revealOrder,h=c.tail;if(Rn(t,i,c.children,o),c=Zt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&vp(t,o,i);else if(t.tag===19)vp(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(zt(Zt,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)t=o.alternate,t!==null&&Oa(t)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),uu(i,!1,f,o,h);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Oa(t)===null){i.child=f;break}t=f.sibling,f.sibling=o,o=f,f=t}uu(i,!0,o,null,h);break;case"together":uu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Xa(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Gi(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),qr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=yr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=yr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function ov(t,i,o){switch(i.tag){case 3:pp(i),ws();break;case 5:Nh(i);break;case 1:Un(i.type)&&ba(i);break;case 4:Hc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;zt(Da,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(zt(Zt,Zt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?gp(t,i,o):(zt(Zt,Zt.current&1),t=Gi(t,i,o),t!==null?t.sibling:null);zt(Zt,Zt.current&1);break;case 19:if(c=(o&i.childLanes)!==0,(t.flags&128)!==0){if(c)return _p(t,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),zt(Zt,Zt.current),c)break;return null;case 22:case 23:return i.lanes=0,fp(t,i,o)}return Gi(t,i,o)}var xp,fu,Sp,yp;xp=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},fu=function(){},Sp=function(t,i,o,c){var f=t.memoizedProps;if(f!==c){t=i.stateNode,Xr(Ei.current);var h=null;switch(o){case"input":f=_t(t,f),c=_t(t,c),h=[];break;case"select":f=J({},f,{value:void 0}),c=J({},c,{value:void 0}),h=[];break;case"textarea":f=vt(t,f),c=vt(t,c),h=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=Ta)}qe(o,c);var T;o=null;for(ae in f)if(!c.hasOwnProperty(ae)&&f.hasOwnProperty(ae)&&f[ae]!=null)if(ae==="style"){var D=f[ae];for(T in D)D.hasOwnProperty(T)&&(o||(o={}),o[T]="")}else ae!=="dangerouslySetInnerHTML"&&ae!=="children"&&ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&ae!=="autoFocus"&&(a.hasOwnProperty(ae)?h||(h=[]):(h=h||[]).push(ae,null));for(ae in c){var k=c[ae];if(D=f!=null?f[ae]:void 0,c.hasOwnProperty(ae)&&k!==D&&(k!=null||D!=null))if(ae==="style")if(D){for(T in D)!D.hasOwnProperty(T)||k&&k.hasOwnProperty(T)||(o||(o={}),o[T]="");for(T in k)k.hasOwnProperty(T)&&D[T]!==k[T]&&(o||(o={}),o[T]=k[T])}else o||(h||(h=[]),h.push(ae,o)),o=k;else ae==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,D=D?D.__html:void 0,k!=null&&D!==k&&(h=h||[]).push(ae,k)):ae==="children"?typeof k!="string"&&typeof k!="number"||(h=h||[]).push(ae,""+k):ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&(a.hasOwnProperty(ae)?(k!=null&&ae==="onScroll"&&Gt("scroll",t),h||D===k||(h=[])):(h=h||[]).push(ae,k))}o&&(h=h||[]).push("style",o);var ae=h;(i.updateQueue=ae)&&(i.flags|=4)}},yp=function(t,i,o,c){o!==c&&(i.flags|=4)};function Fo(t,i){if(!$t)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function Mn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,c=0;if(i)for(var f=t.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=c,t.childLanes=o,i}function av(t,i,o){var c=i.pendingProps;switch(Dc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mn(i),null;case 1:return Un(i.type)&&Aa(),Mn(i),null;case 3:return c=i.stateNode,Cs(),Ht(In),Ht(Sn),Yc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(La(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ui!==null&&(Mu(ui),ui=null))),fu(t,i),Mn(i),null;case 5:Wc(i);var f=Xr(Lo.current);if(o=i.type,t!==null&&i.stateNode!=null)Sp(t,i,o,c,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(n(166));return Mn(i),null}if(t=Xr(Ei.current),La(i)){c=i.stateNode,o=i.type;var h=i.memoizedProps;switch(c[Mi]=i,c[Ao]=h,t=(i.mode&1)!==0,o){case"dialog":Gt("cancel",c),Gt("close",c);break;case"iframe":case"object":case"embed":Gt("load",c);break;case"video":case"audio":for(f=0;f<Eo.length;f++)Gt(Eo[f],c);break;case"source":Gt("error",c);break;case"img":case"image":case"link":Gt("error",c),Gt("load",c);break;case"details":Gt("toggle",c);break;case"input":pt(c,h),Gt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!h.multiple},Gt("invalid",c);break;case"textarea":X(c,h),Gt("invalid",c)}qe(o,h),f=null;for(var T in h)if(h.hasOwnProperty(T)){var D=h[T];T==="children"?typeof D=="string"?c.textContent!==D&&(h.suppressHydrationWarning!==!0&&Ea(c.textContent,D,t),f=["children",D]):typeof D=="number"&&c.textContent!==""+D&&(h.suppressHydrationWarning!==!0&&Ea(c.textContent,D,t),f=["children",""+D]):a.hasOwnProperty(T)&&D!=null&&T==="onScroll"&&Gt("scroll",c)}switch(o){case"input":Qe(c),Xt(c,h,!0);break;case"textarea":Qe(c),At(c);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(c.onclick=Ta)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{T=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=C(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=T.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=T.createElement(o,{is:c.is}):(t=T.createElement(o),o==="select"&&(T=t,c.multiple?T.multiple=!0:c.size&&(T.size=c.size))):t=T.createElementNS(t,o),t[Mi]=i,t[Ao]=c,xp(t,i,!1,!1),i.stateNode=t;e:{switch(T=Ne(o,c),o){case"dialog":Gt("cancel",t),Gt("close",t),f=c;break;case"iframe":case"object":case"embed":Gt("load",t),f=c;break;case"video":case"audio":for(f=0;f<Eo.length;f++)Gt(Eo[f],t);f=c;break;case"source":Gt("error",t),f=c;break;case"img":case"image":case"link":Gt("error",t),Gt("load",t),f=c;break;case"details":Gt("toggle",t),f=c;break;case"input":pt(t,c),f=_t(t,c),Gt("invalid",t);break;case"option":f=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},f=J({},c,{value:void 0}),Gt("invalid",t);break;case"textarea":X(t,c),f=vt(t,c),Gt("invalid",t);break;default:f=c}qe(o,f),D=f;for(h in D)if(D.hasOwnProperty(h)){var k=D[h];h==="style"?me(t,k):h==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&re(t,k)):h==="children"?typeof k=="string"?(o!=="textarea"||k!=="")&&ue(t,k):typeof k=="number"&&ue(t,""+k):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?k!=null&&h==="onScroll"&&Gt("scroll",t):k!=null&&F(t,h,k,T))}switch(o){case"input":Qe(t),Xt(t,c,!1);break;case"textarea":Qe(t),At(t);break;case"option":c.value!=null&&t.setAttribute("value",""+he(c.value));break;case"select":t.multiple=!!c.multiple,h=c.value,h!=null?wt(t,!!c.multiple,h,!1):c.defaultValue!=null&&wt(t,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=Ta)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Mn(i),null;case 6:if(t&&i.stateNode!=null)yp(t,i,t.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(n(166));if(o=Xr(Lo.current),Xr(Ei.current),La(i)){if(c=i.stateNode,o=i.memoizedProps,c[Mi]=i,(h=c.nodeValue!==o)&&(t=Wn,t!==null))switch(t.tag){case 3:Ea(c.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ea(c.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[Mi]=i,i.stateNode=c}return Mn(i),null;case 13:if(Ht(Zt),c=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if($t&&Xn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Th(),ws(),i.flags|=98560,h=!1;else if(h=La(i),c!==null&&c.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[Mi]=i}else ws(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Mn(i),h=!1}else ui!==null&&(Mu(ui),ui=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Zt.current&1)!==0?ln===0&&(ln=3):wu())),i.updateQueue!==null&&(i.flags|=4),Mn(i),null);case 4:return Cs(),fu(t,i),t===null&&To(i.stateNode.containerInfo),Mn(i),null;case 10:return Bc(i.type._context),Mn(i),null;case 17:return Un(i.type)&&Aa(),Mn(i),null;case 19:if(Ht(Zt),h=i.memoizedState,h===null)return Mn(i),null;if(c=(i.flags&128)!==0,T=h.rendering,T===null)if(c)Fo(h,!1);else{if(ln!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(T=Oa(t),T!==null){for(i.flags|=128,Fo(h,!1),c=T.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)h=o,t=c,h.flags&=14680066,T=h.alternate,T===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=T.childLanes,h.lanes=T.lanes,h.child=T.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=T.memoizedProps,h.memoizedState=T.memoizedState,h.updateQueue=T.updateQueue,h.type=T.type,t=T.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return zt(Zt,Zt.current&1|2),i.child}t=t.sibling}h.tail!==null&&Kt()>Ds&&(i.flags|=128,c=!0,Fo(h,!1),i.lanes=4194304)}else{if(!c)if(t=Oa(T),t!==null){if(i.flags|=128,c=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Fo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!T.alternate&&!$t)return Mn(i),null}else 2*Kt()-h.renderingStartTime>Ds&&o!==1073741824&&(i.flags|=128,c=!0,Fo(h,!1),i.lanes=4194304);h.isBackwards?(T.sibling=i.child,i.child=T):(o=h.last,o!==null?o.sibling=T:i.child=T,h.last=T)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Kt(),i.sibling=null,o=Zt.current,zt(Zt,c?o&1|2:o&1),i):(Mn(i),null);case 22:case 23:return Tu(),c=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Yn&1073741824)!==0&&(Mn(i),i.subtreeFlags&6&&(i.flags|=8192)):Mn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function lv(t,i){switch(Dc(i),i.tag){case 1:return Un(i.type)&&Aa(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Cs(),Ht(In),Ht(Sn),Yc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Wc(i),null;case 13:if(Ht(Zt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ws()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ht(Zt),null;case 4:return Cs(),null;case 10:return Bc(i.type._context),null;case 22:case 23:return Tu(),null;case 24:return null;default:return null}}var Ya=!1,En=!1,cv=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function Ls(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){Qt(t,i,c)}else o.current=null}function du(t,i,o){try{o()}catch(c){Qt(t,i,c)}}var Mp=!1;function uv(t,i){if(Tc=da,t=eh(),gc(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var f=c.anchorOffset,h=c.focusNode;c=c.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var T=0,D=-1,k=-1,ae=0,Se=0,ye=t,xe=null;t:for(;;){for(var Be;ye!==o||f!==0&&ye.nodeType!==3||(D=T+f),ye!==h||c!==0&&ye.nodeType!==3||(k=T+c),ye.nodeType===3&&(T+=ye.nodeValue.length),(Be=ye.firstChild)!==null;)xe=ye,ye=Be;for(;;){if(ye===t)break t;if(xe===o&&++ae===f&&(D=T),xe===h&&++Se===c&&(k=T),(Be=ye.nextSibling)!==null)break;ye=xe,xe=ye.parentNode}ye=Be}o=D===-1||k===-1?null:{start:D,end:k}}else o=null}o=o||{start:0,end:0}}else o=null;for(wc={focusedElem:t,selectionRange:o},da=!1,Ve=i;Ve!==null;)if(i=Ve,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Ve=t;else for(;Ve!==null;){i=Ve;try{var He=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var Ye=He.memoizedProps,en=He.memoizedState,j=i.stateNode,H=j.getSnapshotBeforeUpdate(i.elementType===i.type?Ye:fi(i.type,Ye),en);j.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var ne=i.stateNode.containerInfo;ne.nodeType===1?ne.textContent="":ne.nodeType===9&&ne.documentElement&&ne.removeChild(ne.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ee){Qt(i,i.return,Ee)}if(t=i.sibling,t!==null){t.return=i.return,Ve=t;break}Ve=i.return}return He=Mp,Mp=!1,He}function Oo(t,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&t)===t){var h=f.destroy;f.destroy=void 0,h!==void 0&&du(i,o,h)}f=f.next}while(f!==c)}}function qa(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function hu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function Ep(t){var i=t.alternate;i!==null&&(t.alternate=null,Ep(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Mi],delete i[Ao],delete i[Cc],delete i[Y0],delete i[q0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Tp(t){return t.tag===5||t.tag===3||t.tag===4}function wp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Tp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function pu(t,i,o){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Ta));else if(c!==4&&(t=t.child,t!==null))for(pu(t,i,o),t=t.sibling;t!==null;)pu(t,i,o),t=t.sibling}function mu(t,i,o){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(mu(t,i,o),t=t.sibling;t!==null;)mu(t,i,o),t=t.sibling}var gn=null,di=!1;function gr(t,i,o){for(o=o.child;o!==null;)Ap(t,i,o),o=o.sibling}function Ap(t,i,o){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(ee,o)}catch{}switch(o.tag){case 5:En||Ls(o,i);case 6:var c=gn,f=di;gn=null,gr(t,i,o),gn=c,di=f,gn!==null&&(di?(t=gn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):gn.removeChild(o.stateNode));break;case 18:gn!==null&&(di?(t=gn,o=o.stateNode,t.nodeType===8?Rc(t.parentNode,o):t.nodeType===1&&Rc(t,o),mo(t)):Rc(gn,o.stateNode));break;case 4:c=gn,f=di,gn=o.stateNode.containerInfo,di=!0,gr(t,i,o),gn=c,di=f;break;case 0:case 11:case 14:case 15:if(!En&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var h=f,T=h.destroy;h=h.tag,T!==void 0&&((h&2)!==0||(h&4)!==0)&&du(o,i,T),f=f.next}while(f!==c)}gr(t,i,o);break;case 1:if(!En&&(Ls(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(D){Qt(o,i,D)}gr(t,i,o);break;case 21:gr(t,i,o);break;case 22:o.mode&1?(En=(c=En)||o.memoizedState!==null,gr(t,i,o),En=c):gr(t,i,o);break;default:gr(t,i,o)}}function bp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new cv),i.forEach(function(c){var f=xv.bind(null,t,c);o.has(c)||(o.add(c),c.then(f,f))})}}function hi(t,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var f=o[c];try{var h=t,T=i,D=T;e:for(;D!==null;){switch(D.tag){case 5:gn=D.stateNode,di=!1;break e;case 3:gn=D.stateNode.containerInfo,di=!0;break e;case 4:gn=D.stateNode.containerInfo,di=!0;break e}D=D.return}if(gn===null)throw Error(n(160));Ap(h,T,f),gn=null,di=!1;var k=f.alternate;k!==null&&(k.return=null),f.return=null}catch(ae){Qt(f,i,ae)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Rp(i,t),i=i.sibling}function Rp(t,i){var o=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(hi(i,t),wi(t),c&4){try{Oo(3,t,t.return),qa(3,t)}catch(Ye){Qt(t,t.return,Ye)}try{Oo(5,t,t.return)}catch(Ye){Qt(t,t.return,Ye)}}break;case 1:hi(i,t),wi(t),c&512&&o!==null&&Ls(o,o.return);break;case 5:if(hi(i,t),wi(t),c&512&&o!==null&&Ls(o,o.return),t.flags&32){var f=t.stateNode;try{ue(f,"")}catch(Ye){Qt(t,t.return,Ye)}}if(c&4&&(f=t.stateNode,f!=null)){var h=t.memoizedProps,T=o!==null?o.memoizedProps:h,D=t.type,k=t.updateQueue;if(t.updateQueue=null,k!==null)try{D==="input"&&h.type==="radio"&&h.name!=null&&ft(f,h),Ne(D,T);var ae=Ne(D,h);for(T=0;T<k.length;T+=2){var Se=k[T],ye=k[T+1];Se==="style"?me(f,ye):Se==="dangerouslySetInnerHTML"?re(f,ye):Se==="children"?ue(f,ye):F(f,Se,ye,ae)}switch(D){case"input":Ot(f,h);break;case"textarea":on(f,h);break;case"select":var xe=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!h.multiple;var Be=h.value;Be!=null?wt(f,!!h.multiple,Be,!1):xe!==!!h.multiple&&(h.defaultValue!=null?wt(f,!!h.multiple,h.defaultValue,!0):wt(f,!!h.multiple,h.multiple?[]:"",!1))}f[Ao]=h}catch(Ye){Qt(t,t.return,Ye)}}break;case 6:if(hi(i,t),wi(t),c&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,h=t.memoizedProps;try{f.nodeValue=h}catch(Ye){Qt(t,t.return,Ye)}}break;case 3:if(hi(i,t),wi(t),c&4&&o!==null&&o.memoizedState.isDehydrated)try{mo(i.containerInfo)}catch(Ye){Qt(t,t.return,Ye)}break;case 4:hi(i,t),wi(t);break;case 13:hi(i,t),wi(t),f=t.child,f.flags&8192&&(h=f.memoizedState!==null,f.stateNode.isHidden=h,!h||f.alternate!==null&&f.alternate.memoizedState!==null||(_u=Kt())),c&4&&bp(t);break;case 22:if(Se=o!==null&&o.memoizedState!==null,t.mode&1?(En=(ae=En)||Se,hi(i,t),En=ae):hi(i,t),wi(t),c&8192){if(ae=t.memoizedState!==null,(t.stateNode.isHidden=ae)&&!Se&&(t.mode&1)!==0)for(Ve=t,Se=t.child;Se!==null;){for(ye=Ve=Se;Ve!==null;){switch(xe=Ve,Be=xe.child,xe.tag){case 0:case 11:case 14:case 15:Oo(4,xe,xe.return);break;case 1:Ls(xe,xe.return);var He=xe.stateNode;if(typeof He.componentWillUnmount=="function"){c=xe,o=xe.return;try{i=c,He.props=i.memoizedProps,He.state=i.memoizedState,He.componentWillUnmount()}catch(Ye){Qt(c,o,Ye)}}break;case 5:Ls(xe,xe.return);break;case 22:if(xe.memoizedState!==null){Lp(ye);continue}}Be!==null?(Be.return=xe,Ve=Be):Lp(ye)}Se=Se.sibling}e:for(Se=null,ye=t;;){if(ye.tag===5){if(Se===null){Se=ye;try{f=ye.stateNode,ae?(h=f.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(D=ye.stateNode,k=ye.memoizedProps.style,T=k!=null&&k.hasOwnProperty("display")?k.display:null,D.style.display=fe("display",T))}catch(Ye){Qt(t,t.return,Ye)}}}else if(ye.tag===6){if(Se===null)try{ye.stateNode.nodeValue=ae?"":ye.memoizedProps}catch(Ye){Qt(t,t.return,Ye)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===t)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===t)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===t)break e;Se===ye&&(Se=null),ye=ye.return}Se===ye&&(Se=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:hi(i,t),wi(t),c&4&&bp(t);break;case 21:break;default:hi(i,t),wi(t)}}function wi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(Tp(o)){var c=o;break e}o=o.return}throw Error(n(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(ue(f,""),c.flags&=-33);var h=wp(t);mu(t,h,f);break;case 3:case 4:var T=c.stateNode.containerInfo,D=wp(t);pu(t,D,T);break;default:throw Error(n(161))}}catch(k){Qt(t,t.return,k)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function fv(t,i,o){Ve=t,Cp(t)}function Cp(t,i,o){for(var c=(t.mode&1)!==0;Ve!==null;){var f=Ve,h=f.child;if(f.tag===22&&c){var T=f.memoizedState!==null||Ya;if(!T){var D=f.alternate,k=D!==null&&D.memoizedState!==null||En;D=Ya;var ae=En;if(Ya=T,(En=k)&&!ae)for(Ve=f;Ve!==null;)T=Ve,k=T.child,T.tag===22&&T.memoizedState!==null?Np(f):k!==null?(k.return=T,Ve=k):Np(f);for(;h!==null;)Ve=h,Cp(h),h=h.sibling;Ve=f,Ya=D,En=ae}Pp(t)}else(f.subtreeFlags&8772)!==0&&h!==null?(h.return=f,Ve=h):Pp(t)}}function Pp(t){for(;Ve!==null;){var i=Ve;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:En||qa(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!En)if(o===null)c.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:fi(i.type,o.memoizedProps);c.componentDidUpdate(f,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&Lh(i,h,c);break;case 3:var T=i.updateQueue;if(T!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Lh(i,T,o)}break;case 5:var D=i.stateNode;if(o===null&&i.flags&4){o=D;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&o.focus();break;case"img":k.src&&(o.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ae=i.alternate;if(ae!==null){var Se=ae.memoizedState;if(Se!==null){var ye=Se.dehydrated;ye!==null&&mo(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}En||i.flags&512&&hu(i)}catch(xe){Qt(i,i.return,xe)}}if(i===t){Ve=null;break}if(o=i.sibling,o!==null){o.return=i.return,Ve=o;break}Ve=i.return}}function Lp(t){for(;Ve!==null;){var i=Ve;if(i===t){Ve=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Ve=o;break}Ve=i.return}}function Np(t){for(;Ve!==null;){var i=Ve;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{qa(4,i)}catch(k){Qt(i,o,k)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(k){Qt(i,f,k)}}var h=i.return;try{hu(i)}catch(k){Qt(i,h,k)}break;case 5:var T=i.return;try{hu(i)}catch(k){Qt(i,T,k)}}}catch(k){Qt(i,i.return,k)}if(i===t){Ve=null;break}var D=i.sibling;if(D!==null){D.return=i.return,Ve=D;break}Ve=i.return}}var dv=Math.ceil,$a=b.ReactCurrentDispatcher,gu=b.ReactCurrentOwner,ei=b.ReactCurrentBatchConfig,Et=0,dn=null,rn=null,vn=0,Yn=0,Ns=fr(0),ln=0,ko=null,qr=0,Ka=0,vu=0,Bo=null,On=null,_u=0,Ds=1/0,Hi=null,Za=!1,xu=null,vr=null,ja=!1,_r=null,Qa=0,zo=0,Su=null,Ja=-1,el=0;function Cn(){return(Et&6)!==0?Kt():Ja!==-1?Ja:Ja=Kt()}function xr(t){return(t.mode&1)===0?1:(Et&2)!==0&&vn!==0?vn&-vn:K0.transition!==null?(el===0&&(el=ke()),el):(t=mt,t!==0||(t=window.event,t=t===void 0?16:Id(t.type)),t)}function pi(t,i,o,c){if(50<zo)throw zo=0,Su=null,Error(n(185));ht(t,o,c),((Et&2)===0||t!==dn)&&(t===dn&&((Et&2)===0&&(Ka|=o),ln===4&&Sr(t,vn)),kn(t,c),o===1&&Et===0&&(i.mode&1)===0&&(Ds=Kt()+500,Ra&&hr()))}function kn(t,i){var o=t.callbackNode;Lt(t,i);var c=Bt(t,t===dn?vn:0);if(c===0)o!==null&&lo(o),t.callbackNode=null,t.callbackPriority=0;else if(i=c&-c,t.callbackPriority!==i){if(o!=null&&lo(o),i===1)t.tag===0?$0(Ip.bind(null,t)):xh(Ip.bind(null,t)),W0(function(){(Et&6)===0&&hr()}),o=null;else{switch(Ui(c)){case 1:o=co;break;case 4:o=A;break;case 16:o=Y;break;case 536870912:o=te;break;default:o=Y}o=Gp(o,Dp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function Dp(t,i){if(Ja=-1,el=0,(Et&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Is()&&t.callbackNode!==o)return null;var c=Bt(t,t===dn?vn:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||i)i=tl(t,c);else{i=c;var f=Et;Et|=2;var h=Fp();(dn!==t||vn!==i)&&(Hi=null,Ds=Kt()+500,Kr(t,i));do try{mv();break}catch(D){Up(t,D)}while(!0);kc(),$a.current=h,Et=f,rn!==null?i=0:(dn=null,vn=0,i=ln)}if(i!==0){if(i===2&&(f=nn(t),f!==0&&(c=f,i=yu(t,f))),i===1)throw o=ko,Kr(t,0),Sr(t,c),kn(t,Kt()),o;if(i===6)Sr(t,c);else{if(f=t.current.alternate,(c&30)===0&&!hv(f)&&(i=tl(t,c),i===2&&(h=nn(t),h!==0&&(c=h,i=yu(t,h))),i===1))throw o=ko,Kr(t,0),Sr(t,c),kn(t,Kt()),o;switch(t.finishedWork=f,t.finishedLanes=c,i){case 0:case 1:throw Error(n(345));case 2:Zr(t,On,Hi);break;case 3:if(Sr(t,c),(c&130023424)===c&&(i=_u+500-Kt(),10<i)){if(Bt(t,0)!==0)break;if(f=t.suspendedLanes,(f&c)!==c){Cn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=bc(Zr.bind(null,t,On,Hi),i);break}Zr(t,On,Hi);break;case 4:if(Sr(t,c),(c&4194240)===c)break;for(i=t.eventTimes,f=-1;0<c;){var T=31-Te(c);h=1<<T,T=i[T],T>f&&(f=T),c&=~h}if(c=f,c=Kt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*dv(c/1960))-c,10<c){t.timeoutHandle=bc(Zr.bind(null,t,On,Hi),c);break}Zr(t,On,Hi);break;case 5:Zr(t,On,Hi);break;default:throw Error(n(329))}}}return kn(t,Kt()),t.callbackNode===o?Dp.bind(null,t):null}function yu(t,i){var o=Bo;return t.current.memoizedState.isDehydrated&&(Kr(t,i).flags|=256),t=tl(t,i),t!==2&&(i=On,On=o,i!==null&&Mu(i)),t}function Mu(t){On===null?On=t:On.push.apply(On,t)}function hv(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var f=o[c],h=f.getSnapshot;f=f.value;try{if(!ci(h(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Sr(t,i){for(i&=~vu,i&=~Ka,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-Te(i),c=1<<o;t[o]=-1,i&=~c}}function Ip(t){if((Et&6)!==0)throw Error(n(327));Is();var i=Bt(t,0);if((i&1)===0)return kn(t,Kt()),null;var o=tl(t,i);if(t.tag!==0&&o===2){var c=nn(t);c!==0&&(i=c,o=yu(t,c))}if(o===1)throw o=ko,Kr(t,0),Sr(t,i),kn(t,Kt()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Zr(t,On,Hi),kn(t,Kt()),null}function Eu(t,i){var o=Et;Et|=1;try{return t(i)}finally{Et=o,Et===0&&(Ds=Kt()+500,Ra&&hr())}}function $r(t){_r!==null&&_r.tag===0&&(Et&6)===0&&Is();var i=Et;Et|=1;var o=ei.transition,c=mt;try{if(ei.transition=null,mt=1,t)return t()}finally{mt=c,ei.transition=o,Et=i,(Et&6)===0&&hr()}}function Tu(){Yn=Ns.current,Ht(Ns)}function Kr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,H0(o)),rn!==null)for(o=rn.return;o!==null;){var c=o;switch(Dc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Aa();break;case 3:Cs(),Ht(In),Ht(Sn),Yc();break;case 5:Wc(c);break;case 4:Cs();break;case 13:Ht(Zt);break;case 19:Ht(Zt);break;case 10:Bc(c.type._context);break;case 22:case 23:Tu()}o=o.return}if(dn=t,rn=t=yr(t.current,null),vn=Yn=i,ln=0,ko=null,vu=Ka=qr=0,On=Bo=null,Wr!==null){for(i=0;i<Wr.length;i++)if(o=Wr[i],c=o.interleaved,c!==null){o.interleaved=null;var f=c.next,h=o.pending;if(h!==null){var T=h.next;h.next=f,c.next=T}o.pending=c}Wr=null}return t}function Up(t,i){do{var o=rn;try{if(kc(),ka.current=Ga,Ba){for(var c=jt.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}Ba=!1}if(Yr=0,fn=an=jt=null,No=!1,Do=0,gu.current=null,o===null||o.return===null){ln=1,ko=i,rn=null;break}e:{var h=t,T=o.return,D=o,k=i;if(i=vn,D.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var ae=k,Se=D,ye=Se.tag;if((Se.mode&1)===0&&(ye===0||ye===11||ye===15)){var xe=Se.alternate;xe?(Se.updateQueue=xe.updateQueue,Se.memoizedState=xe.memoizedState,Se.lanes=xe.lanes):(Se.updateQueue=null,Se.memoizedState=null)}var Be=op(T);if(Be!==null){Be.flags&=-257,ap(Be,T,D,h,i),Be.mode&1&&sp(h,ae,i),i=Be,k=ae;var He=i.updateQueue;if(He===null){var Ye=new Set;Ye.add(k),i.updateQueue=Ye}else He.add(k);break e}else{if((i&1)===0){sp(h,ae,i),wu();break e}k=Error(n(426))}}else if($t&&D.mode&1){var en=op(T);if(en!==null){(en.flags&65536)===0&&(en.flags|=256),ap(en,T,D,h,i),Fc(Ps(k,D));break e}}h=k=Ps(k,D),ln!==4&&(ln=2),Bo===null?Bo=[h]:Bo.push(h),h=T;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var j=ip(h,k,i);Ph(h,j);break e;case 1:D=k;var H=h.type,ne=h.stateNode;if((h.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||ne!==null&&typeof ne.componentDidCatch=="function"&&(vr===null||!vr.has(ne)))){h.flags|=65536,i&=-i,h.lanes|=i;var Ee=rp(h,D,i);Ph(h,Ee);break e}}h=h.return}while(h!==null)}kp(o)}catch(Ke){i=Ke,rn===o&&o!==null&&(rn=o=o.return);continue}break}while(!0)}function Fp(){var t=$a.current;return $a.current=Ga,t===null?Ga:t}function wu(){(ln===0||ln===3||ln===2)&&(ln=4),dn===null||(qr&268435455)===0&&(Ka&268435455)===0||Sr(dn,vn)}function tl(t,i){var o=Et;Et|=2;var c=Fp();(dn!==t||vn!==i)&&(Hi=null,Kr(t,i));do try{pv();break}catch(f){Up(t,f)}while(!0);if(kc(),Et=o,$a.current=c,rn!==null)throw Error(n(261));return dn=null,vn=0,ln}function pv(){for(;rn!==null;)Op(rn)}function mv(){for(;rn!==null&&!ua();)Op(rn)}function Op(t){var i=Vp(t.alternate,t,Yn);t.memoizedProps=t.pendingProps,i===null?kp(t):rn=i,gu.current=null}function kp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=av(o,i,Yn),o!==null){rn=o;return}}else{if(o=lv(o,i),o!==null){o.flags&=32767,rn=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ln=6,rn=null;return}}if(i=i.sibling,i!==null){rn=i;return}rn=i=t}while(i!==null);ln===0&&(ln=5)}function Zr(t,i,o){var c=mt,f=ei.transition;try{ei.transition=null,mt=1,gv(t,i,o,c)}finally{ei.transition=f,mt=c}return null}function gv(t,i,o,c){do Is();while(_r!==null);if((Et&6)!==0)throw Error(n(327));o=t.finishedWork;var f=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(Nn(t,h),t===dn&&(rn=dn=null,vn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||ja||(ja=!0,Gp(Y,function(){return Is(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=ei.transition,ei.transition=null;var T=mt;mt=1;var D=Et;Et|=4,gu.current=null,uv(t,o),Rp(o,t),F0(wc),da=!!Tc,wc=Tc=null,t.current=o,fv(o),ic(),Et=D,mt=T,ei.transition=h}else t.current=o;if(ja&&(ja=!1,_r=t,Qa=f),h=t.pendingLanes,h===0&&(vr=null),ze(o.stateNode),kn(t,Kt()),i!==null)for(c=t.onRecoverableError,o=0;o<i.length;o++)f=i[o],c(f.value,{componentStack:f.stack,digest:f.digest});if(Za)throw Za=!1,t=xu,xu=null,t;return(Qa&1)!==0&&t.tag!==0&&Is(),h=t.pendingLanes,(h&1)!==0?t===Su?zo++:(zo=0,Su=t):zo=0,hr(),null}function Is(){if(_r!==null){var t=Ui(Qa),i=ei.transition,o=mt;try{if(ei.transition=null,mt=16>t?16:t,_r===null)var c=!1;else{if(t=_r,_r=null,Qa=0,(Et&6)!==0)throw Error(n(331));var f=Et;for(Et|=4,Ve=t.current;Ve!==null;){var h=Ve,T=h.child;if((Ve.flags&16)!==0){var D=h.deletions;if(D!==null){for(var k=0;k<D.length;k++){var ae=D[k];for(Ve=ae;Ve!==null;){var Se=Ve;switch(Se.tag){case 0:case 11:case 15:Oo(8,Se,h)}var ye=Se.child;if(ye!==null)ye.return=Se,Ve=ye;else for(;Ve!==null;){Se=Ve;var xe=Se.sibling,Be=Se.return;if(Ep(Se),Se===ae){Ve=null;break}if(xe!==null){xe.return=Be,Ve=xe;break}Ve=Be}}}var He=h.alternate;if(He!==null){var Ye=He.child;if(Ye!==null){He.child=null;do{var en=Ye.sibling;Ye.sibling=null,Ye=en}while(Ye!==null)}}Ve=h}}if((h.subtreeFlags&2064)!==0&&T!==null)T.return=h,Ve=T;else e:for(;Ve!==null;){if(h=Ve,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Oo(9,h,h.return)}var j=h.sibling;if(j!==null){j.return=h.return,Ve=j;break e}Ve=h.return}}var H=t.current;for(Ve=H;Ve!==null;){T=Ve;var ne=T.child;if((T.subtreeFlags&2064)!==0&&ne!==null)ne.return=T,Ve=ne;else e:for(T=H;Ve!==null;){if(D=Ve,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:qa(9,D)}}catch(Ke){Qt(D,D.return,Ke)}if(D===T){Ve=null;break e}var Ee=D.sibling;if(Ee!==null){Ee.return=D.return,Ve=Ee;break e}Ve=D.return}}if(Et=f,hr(),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(ee,t)}catch{}c=!0}return c}finally{mt=o,ei.transition=i}}return!1}function Bp(t,i,o){i=Ps(o,i),i=ip(t,i,1),t=mr(t,i,1),i=Cn(),t!==null&&(ht(t,1,i),kn(t,i))}function Qt(t,i,o){if(t.tag===3)Bp(t,t,o);else for(;i!==null;){if(i.tag===3){Bp(i,t,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(vr===null||!vr.has(c))){t=Ps(o,t),t=rp(i,t,1),i=mr(i,t,1),t=Cn(),i!==null&&(ht(i,1,t),kn(i,t));break}}i=i.return}}function vv(t,i,o){var c=t.pingCache;c!==null&&c.delete(i),i=Cn(),t.pingedLanes|=t.suspendedLanes&o,dn===t&&(vn&o)===o&&(ln===4||ln===3&&(vn&130023424)===vn&&500>Kt()-_u?Kr(t,0):vu|=o),kn(t,i)}function zp(t,i){i===0&&((t.mode&1)===0?i=1:(i=$e,$e<<=1,($e&130023424)===0&&($e=4194304)));var o=Cn();t=zi(t,i),t!==null&&(ht(t,i,o),kn(t,o))}function _v(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),zp(t,o)}function xv(t,i){var o=0;switch(t.tag){case 13:var c=t.stateNode,f=t.memoizedState;f!==null&&(o=f.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(n(314))}c!==null&&c.delete(i),zp(t,o)}var Vp;Vp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||In.current)Fn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return Fn=!1,ov(t,i,o);Fn=(t.flags&131072)!==0}else Fn=!1,$t&&(i.flags&1048576)!==0&&Sh(i,Pa,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Xa(t,i),t=i.pendingProps;var f=Ms(i,Sn.current);Rs(i,o),f=Kc(null,i,c,t,f,o);var h=Zc();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Un(c)?(h=!0,ba(i)):h=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Gc(i),f.updater=Ha,i.stateNode=f,f._reactInternals=i,nu(i,c,t,o),i=ou(null,i,c,!0,h,o)):(i.tag=0,$t&&h&&Nc(i),Rn(null,i,f,o),i=i.child),i;case 16:c=i.elementType;e:{switch(Xa(t,i),t=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=yv(c),t=fi(c,t),f){case 0:i=su(null,i,c,t,o);break e;case 1:i=hp(null,i,c,t,o);break e;case 11:i=lp(null,i,c,t,o);break e;case 14:i=cp(null,i,c,fi(c.type,t),o);break e}throw Error(n(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:fi(c,f),su(t,i,c,f,o);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:fi(c,f),hp(t,i,c,f,o);case 3:e:{if(pp(i),t===null)throw Error(n(387));c=i.pendingProps,h=i.memoizedState,f=h.element,Ch(t,i),Fa(i,c,null,o);var T=i.memoizedState;if(c=T.element,h.isDehydrated)if(h={element:c,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){f=Ps(Error(n(423)),i),i=mp(t,i,c,o,f);break e}else if(c!==f){f=Ps(Error(n(424)),i),i=mp(t,i,c,o,f);break e}else for(Xn=ur(i.stateNode.containerInfo.firstChild),Wn=i,$t=!0,ui=null,o=bh(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ws(),c===f){i=Gi(t,i,o);break e}Rn(t,i,c,o)}i=i.child}return i;case 5:return Nh(i),t===null&&Uc(i),c=i.type,f=i.pendingProps,h=t!==null?t.memoizedProps:null,T=f.children,Ac(c,f)?T=null:h!==null&&Ac(c,h)&&(i.flags|=32),dp(t,i),Rn(t,i,T,o),i.child;case 6:return t===null&&Uc(i),null;case 13:return gp(t,i,o);case 4:return Hc(i,i.stateNode.containerInfo),c=i.pendingProps,t===null?i.child=As(i,null,c,o):Rn(t,i,c,o),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:fi(c,f),lp(t,i,c,f,o);case 7:return Rn(t,i,i.pendingProps,o),i.child;case 8:return Rn(t,i,i.pendingProps.children,o),i.child;case 12:return Rn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,h=i.memoizedProps,T=f.value,zt(Da,c._currentValue),c._currentValue=T,h!==null)if(ci(h.value,T)){if(h.children===f.children&&!In.current){i=Gi(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var D=h.dependencies;if(D!==null){T=h.child;for(var k=D.firstContext;k!==null;){if(k.context===c){if(h.tag===1){k=Vi(-1,o&-o),k.tag=2;var ae=h.updateQueue;if(ae!==null){ae=ae.shared;var Se=ae.pending;Se===null?k.next=k:(k.next=Se.next,Se.next=k),ae.pending=k}}h.lanes|=o,k=h.alternate,k!==null&&(k.lanes|=o),zc(h.return,o,i),D.lanes|=o;break}k=k.next}}else if(h.tag===10)T=h.type===i.type?null:h.child;else if(h.tag===18){if(T=h.return,T===null)throw Error(n(341));T.lanes|=o,D=T.alternate,D!==null&&(D.lanes|=o),zc(T,o,i),T=h.sibling}else T=h.child;if(T!==null)T.return=h;else for(T=h;T!==null;){if(T===i){T=null;break}if(h=T.sibling,h!==null){h.return=T.return,T=h;break}T=T.return}h=T}Rn(t,i,f.children,o),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,Rs(i,o),f=Qn(f),c=c(f),i.flags|=1,Rn(t,i,c,o),i.child;case 14:return c=i.type,f=fi(c,i.pendingProps),f=fi(c.type,f),cp(t,i,c,f,o);case 15:return up(t,i,i.type,i.pendingProps,o);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:fi(c,f),Xa(t,i),i.tag=1,Un(c)?(t=!0,ba(i)):t=!1,Rs(i,o),tp(i,c,f),nu(i,c,f,o),ou(null,i,c,!0,t,o);case 19:return _p(t,i,o);case 22:return fp(t,i,o)}throw Error(n(156,i.tag))};function Gp(t,i){return kr(t,i)}function Sv(t,i,o,c){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(t,i,o,c){return new Sv(t,i,o,c)}function Au(t){return t=t.prototype,!(!t||!t.isReactComponent)}function yv(t){if(typeof t=="function")return Au(t)?1:0;if(t!=null){if(t=t.$$typeof,t===W)return 11;if(t===Z)return 14}return 2}function yr(t,i){var o=t.alternate;return o===null?(o=ti(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function nl(t,i,o,c,f,h){var T=2;if(c=t,typeof t=="function")Au(t)&&(T=1);else if(typeof t=="string")T=5;else e:switch(t){case O:return jr(o.children,f,h,i);case E:T=8,f|=8;break;case L:return t=ti(12,o,i,f|2),t.elementType=L,t.lanes=h,t;case ce:return t=ti(13,o,i,f),t.elementType=ce,t.lanes=h,t;case de:return t=ti(19,o,i,f),t.elementType=de,t.lanes=h,t;case q:return il(o,f,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case z:T=10;break e;case B:T=9;break e;case W:T=11;break e;case Z:T=14;break e;case le:T=16,c=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=ti(T,o,i,f),i.elementType=t,i.type=c,i.lanes=h,i}function jr(t,i,o,c){return t=ti(7,t,c,i),t.lanes=o,t}function il(t,i,o,c){return t=ti(22,t,c,i),t.elementType=q,t.lanes=o,t.stateNode={isHidden:!1},t}function bu(t,i,o){return t=ti(6,t,null,i),t.lanes=o,t}function Ru(t,i,o){return i=ti(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Mv(t,i,o,c,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mn(0),this.expirationTimes=mn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mn(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Cu(t,i,o,c,f,h,T,D,k){return t=new Mv(t,i,o,D,k),i===1?(i=1,h===!0&&(i|=8)):i=0,h=ti(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gc(h),t}function Ev(t,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:c==null?null:""+c,children:t,containerInfo:i,implementation:o}}function Hp(t){if(!t)return dr;t=t._reactInternals;e:{if(bn(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Un(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Un(o))return vh(t,o,i)}return i}function Wp(t,i,o,c,f,h,T,D,k){return t=Cu(o,c,!0,t,f,h,T,D,k),t.context=Hp(null),o=t.current,c=Cn(),f=xr(o),h=Vi(c,f),h.callback=i??null,mr(o,h,f),t.current.lanes=f,ht(t,f,c),kn(t,c),t}function rl(t,i,o,c){var f=i.current,h=Cn(),T=xr(f);return o=Hp(o),i.context===null?i.context=o:i.pendingContext=o,i=Vi(h,T),i.payload={element:t},c=c===void 0?null:c,c!==null&&(i.callback=c),t=mr(f,i,T),t!==null&&(pi(t,f,T,h),Ua(t,f,T)),T}function sl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Xp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function Pu(t,i){Xp(t,i),(t=t.alternate)&&Xp(t,i)}function Tv(){return null}var Yp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Lu(t){this._internalRoot=t}ol.prototype.render=Lu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));rl(t,i,null,null)},ol.prototype.unmount=Lu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;$r(function(){rl(null,t,null,null)}),i[Fi]=null}};function ol(t){this._internalRoot=t}ol.prototype.unstable_scheduleHydration=function(t){if(t){var i=Nt();t={blockedOn:null,target:t,priority:i};for(var o=0;o<ar.length&&i!==0&&i<ar[o].priority;o++);ar.splice(o,0,t),o===0&&Nd(t)}};function Nu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function al(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function qp(){}function wv(t,i,o,c,f){if(f){if(typeof c=="function"){var h=c;c=function(){var ae=sl(T);h.call(ae)}}var T=Wp(i,c,t,0,null,!1,!1,"",qp);return t._reactRootContainer=T,t[Fi]=T.current,To(t.nodeType===8?t.parentNode:t),$r(),T}for(;f=t.lastChild;)t.removeChild(f);if(typeof c=="function"){var D=c;c=function(){var ae=sl(k);D.call(ae)}}var k=Cu(t,0,!1,null,null,!1,!1,"",qp);return t._reactRootContainer=k,t[Fi]=k.current,To(t.nodeType===8?t.parentNode:t),$r(function(){rl(i,k,o,c)}),k}function ll(t,i,o,c,f){var h=o._reactRootContainer;if(h){var T=h;if(typeof f=="function"){var D=f;f=function(){var k=sl(T);D.call(k)}}rl(i,T,t,f)}else T=wv(o,i,t,f,c);return sl(T)}Pt=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Mt(i.pendingLanes);o!==0&&(Dn(i,o|1),kn(i,Kt()),(Et&6)===0&&(Ds=Kt()+500,hr()))}break;case 13:$r(function(){var c=zi(t,1);if(c!==null){var f=Cn();pi(c,t,1,f)}}),Pu(t,1)}},Vt=function(t){if(t.tag===13){var i=zi(t,134217728);if(i!==null){var o=Cn();pi(i,t,134217728,o)}Pu(t,134217728)}},ai=function(t){if(t.tag===13){var i=xr(t),o=zi(t,i);if(o!==null){var c=Cn();pi(o,t,i,c)}Pu(t,i)}},Nt=function(){return mt},li=function(t,i){var o=mt;try{return mt=t,i()}finally{mt=o}},et=function(t,i,o){switch(i){case"input":if(Ot(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==t&&c.form===t.form){var f=wa(c);if(!f)throw Error(n(90));It(c),Ot(c,f)}}}break;case"textarea":on(t,o);break;case"select":i=o.value,i!=null&&wt(t,!!o.multiple,i,!1)}},De=Eu,_e=$r;var Av={usingClientEntryPoint:!1,Events:[bo,Ss,wa,pe,Pe,Eu]},Vo={findFiberByHostInstance:zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bv={bundleType:Vo.bundleType,version:Vo.version,rendererPackageName:Vo.rendererPackageName,rendererConfig:Vo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Or(t),t===null?null:t.stateNode},findFiberByHostInstance:Vo.findFiberByHostInstance||Tv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cl.isDisabled&&cl.supportsFiber)try{ee=cl.inject(bv),Ae=cl}catch{}}return Bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Av,Bn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nu(i))throw Error(n(200));return Ev(t,i,null,o)},Bn.createRoot=function(t,i){if(!Nu(t))throw Error(n(299));var o=!1,c="",f=Yp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Cu(t,1,!1,null,null,o,!1,c,f),t[Fi]=i.current,To(t.nodeType===8?t.parentNode:t),new Lu(i)},Bn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Or(i),t=t===null?null:t.stateNode,t},Bn.flushSync=function(t){return $r(t)},Bn.hydrate=function(t,i,o){if(!al(i))throw Error(n(200));return ll(null,t,i,!0,o)},Bn.hydrateRoot=function(t,i,o){if(!Nu(t))throw Error(n(405));var c=o!=null&&o.hydratedSources||null,f=!1,h="",T=Yp;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(T=o.onRecoverableError)),i=Wp(i,null,t,1,o??null,f,!1,h,T),t[Fi]=i.current,To(t),c)for(t=0;t<c.length;t++)o=c[t],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new ol(i)},Bn.render=function(t,i,o){if(!al(i))throw Error(n(200));return ll(null,t,i,!1,o)},Bn.unmountComponentAtNode=function(t){if(!al(t))throw Error(n(40));return t._reactRootContainer?($r(function(){ll(null,null,t,!1,function(){t._reactRootContainer=null,t[Fi]=null})}),!0):!1},Bn.unstable_batchedUpdates=Eu,Bn.unstable_renderSubtreeIntoContainer=function(t,i,o,c){if(!al(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return ll(t,i,o,!1,c)},Bn.version="18.3.1-next-f1338f8080-20240426",Bn}var tm;function Fv(){if(tm)return Uu.exports;tm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Uu.exports=Uv(),Uu.exports}var nm;function Ov(){if(nm)return ul;nm=1;var s=Fv();return ul.createRoot=s.createRoot,ul.hydrateRoot=s.hydrateRoot,ul}var kv=Ov();const Bv=sg(kv);function og(s){var e,n,r="";if(typeof s=="string"||typeof s=="number")r+=s;else if(typeof s=="object")if(Array.isArray(s)){var a=s.length;for(e=0;e<a;e++)s[e]&&(n=og(s[e]))&&(r&&(r+=" "),r+=n)}else for(n in s)s[n]&&(r&&(r+=" "),r+=n);return r}function zv(){for(var s,e,n=0,r="",a=arguments.length;n<a;n++)(s=arguments[n])&&(e=og(s))&&(r&&(r+=" "),r+=e);return r}const pd="-",Vv=s=>{const e=Hv(s),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=s;return{getClassGroupId:u=>{const d=u.split(pd);return d[0]===""&&d.length!==1&&d.shift(),ag(d,e)||Gv(u)},getConflictingClassGroupIds:(u,d)=>{const p=n[u]||[];return d&&r[u]?[...p,...r[u]]:p}}},ag=(s,e)=>{var u;if(s.length===0)return e.classGroupId;const n=s[0],r=e.nextPart.get(n),a=r?ag(s.slice(1),r):void 0;if(a)return a;if(e.validators.length===0)return;const l=s.join(pd);return(u=e.validators.find(({validator:d})=>d(l)))==null?void 0:u.classGroupId},im=/^\[(.+)\]$/,Gv=s=>{if(im.test(s)){const e=im.exec(s)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}},Hv=s=>{const{theme:e,prefix:n}=s,r={nextPart:new Map,validators:[]};return Xv(Object.entries(s.classGroups),n).forEach(([l,u])=>{Sf(u,r,l,e)}),r},Sf=(s,e,n,r)=>{s.forEach(a=>{if(typeof a=="string"){const l=a===""?e:rm(e,a);l.classGroupId=n;return}if(typeof a=="function"){if(Wv(a)){Sf(a(r),e,n,r);return}e.validators.push({validator:a,classGroupId:n});return}Object.entries(a).forEach(([l,u])=>{Sf(u,rm(e,l),n,r)})})},rm=(s,e)=>{let n=s;return e.split(pd).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},Wv=s=>s.isThemeGetter,Xv=(s,e)=>e?s.map(([n,r])=>{const a=r.map(l=>typeof l=="string"?e+l:typeof l=="object"?Object.fromEntries(Object.entries(l).map(([u,d])=>[e+u,d])):l);return[n,a]}):s,Yv=s=>{if(s<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,r=new Map;const a=(l,u)=>{n.set(l,u),e++,e>s&&(e=0,r=n,n=new Map)};return{get(l){let u=n.get(l);if(u!==void 0)return u;if((u=r.get(l))!==void 0)return a(l,u),u},set(l,u){n.has(l)?n.set(l,u):a(l,u)}}},lg="!",qv=s=>{const{separator:e,experimentalParseClassName:n}=s,r=e.length===1,a=e[0],l=e.length,u=d=>{const p=[];let m=0,x=0,S;for(let v=0;v<d.length;v++){let _=d[v];if(m===0){if(_===a&&(r||d.slice(v,v+l)===e)){p.push(d.slice(x,v)),x=v+l;continue}if(_==="/"){S=v;continue}}_==="["?m++:_==="]"&&m--}const g=p.length===0?d:d.substring(x),M=g.startsWith(lg),w=M?g.substring(1):g,R=S&&S>x?S-x:void 0;return{modifiers:p,hasImportantModifier:M,baseClassName:w,maybePostfixModifierPosition:R}};return n?d=>n({className:d,parseClassName:u}):u},$v=s=>{if(s.length<=1)return s;const e=[];let n=[];return s.forEach(r=>{r[0]==="["?(e.push(...n.sort(),r),n=[]):n.push(r)}),e.push(...n.sort()),e},Kv=s=>({cache:Yv(s.cacheSize),parseClassName:qv(s),...Vv(s)}),Zv=/\s+/,jv=(s,e)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:a}=e,l=[],u=s.trim().split(Zv);let d="";for(let p=u.length-1;p>=0;p-=1){const m=u[p],{modifiers:x,hasImportantModifier:S,baseClassName:g,maybePostfixModifierPosition:M}=n(m);let w=!!M,R=r(w?g.substring(0,M):g);if(!R){if(!w){d=m+(d.length>0?" "+d:d);continue}if(R=r(g),!R){d=m+(d.length>0?" "+d:d);continue}w=!1}const v=$v(x).join(":"),_=S?v+lg:v,U=_+R;if(l.includes(U))continue;l.push(U);const F=a(R,w);for(let b=0;b<F.length;++b){const I=F[b];l.push(_+I)}d=m+(d.length>0?" "+d:d)}return d};function Qv(){let s=0,e,n,r="";for(;s<arguments.length;)(e=arguments[s++])&&(n=cg(e))&&(r&&(r+=" "),r+=n);return r}const cg=s=>{if(typeof s=="string")return s;let e,n="";for(let r=0;r<s.length;r++)s[r]&&(e=cg(s[r]))&&(n&&(n+=" "),n+=e);return n};function Jv(s,...e){let n,r,a,l=u;function u(p){const m=e.reduce((x,S)=>S(x),s());return n=Kv(m),r=n.cache.get,a=n.cache.set,l=d,d(p)}function d(p){const m=r(p);if(m)return m;const x=jv(p,n);return a(p,x),x}return function(){return l(Qv.apply(null,arguments))}}const Wt=s=>{const e=n=>n[s]||[];return e.isThemeGetter=!0,e},ug=/^\[(?:([a-z-]+):)?(.+)\]$/i,e_=/^\d+\/\d+$/,t_=new Set(["px","full","screen"]),n_=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,i_=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,r_=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,s_=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,o_=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Wi=s=>Ks(s)||t_.has(s)||e_.test(s),Er=s=>io(s,"length",p_),Ks=s=>!!s&&!Number.isNaN(Number(s)),ku=s=>io(s,"number",Ks),Ho=s=>!!s&&Number.isInteger(Number(s)),a_=s=>s.endsWith("%")&&Ks(s.slice(0,-1)),ut=s=>ug.test(s),Tr=s=>n_.test(s),l_=new Set(["length","size","percentage"]),c_=s=>io(s,l_,fg),u_=s=>io(s,"position",fg),f_=new Set(["image","url"]),d_=s=>io(s,f_,g_),h_=s=>io(s,"",m_),Wo=()=>!0,io=(s,e,n)=>{const r=ug.exec(s);return r?r[1]?typeof e=="string"?r[1]===e:e.has(r[1]):n(r[2]):!1},p_=s=>i_.test(s)&&!r_.test(s),fg=()=>!1,m_=s=>s_.test(s),g_=s=>o_.test(s),v_=()=>{const s=Wt("colors"),e=Wt("spacing"),n=Wt("blur"),r=Wt("brightness"),a=Wt("borderColor"),l=Wt("borderRadius"),u=Wt("borderSpacing"),d=Wt("borderWidth"),p=Wt("contrast"),m=Wt("grayscale"),x=Wt("hueRotate"),S=Wt("invert"),g=Wt("gap"),M=Wt("gradientColorStops"),w=Wt("gradientColorStopPositions"),R=Wt("inset"),v=Wt("margin"),_=Wt("opacity"),U=Wt("padding"),F=Wt("saturate"),b=Wt("scale"),I=Wt("sepia"),P=Wt("skew"),O=Wt("space"),E=Wt("translate"),L=()=>["auto","contain","none"],z=()=>["auto","hidden","clip","visible","scroll"],B=()=>["auto",ut,e],W=()=>[ut,e],ce=()=>["",Wi,Er],de=()=>["auto",Ks,ut],Z=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],le=()=>["solid","dashed","dotted","double","none"],q=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],V=()=>["start","end","center","between","around","evenly","stretch"],Q=()=>["","0",ut],J=()=>["auto","avoid","all","avoid-page","page","left","right","column"],N=()=>[Ks,ut];return{cacheSize:500,separator:":",theme:{colors:[Wo],spacing:[Wi,Er],blur:["none","",Tr,ut],brightness:N(),borderColor:[s],borderRadius:["none","","full",Tr,ut],borderSpacing:W(),borderWidth:ce(),contrast:N(),grayscale:Q(),hueRotate:N(),invert:Q(),gap:W(),gradientColorStops:[s],gradientColorStopPositions:[a_,Er],inset:B(),margin:B(),opacity:N(),padding:W(),saturate:N(),scale:N(),sepia:Q(),skew:N(),space:W(),translate:W()},classGroups:{aspect:[{aspect:["auto","square","video",ut]}],container:["container"],columns:[{columns:[Tr]}],"break-after":[{"break-after":J()}],"break-before":[{"break-before":J()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Z(),ut]}],overflow:[{overflow:z()}],"overflow-x":[{"overflow-x":z()}],"overflow-y":[{"overflow-y":z()}],overscroll:[{overscroll:L()}],"overscroll-x":[{"overscroll-x":L()}],"overscroll-y":[{"overscroll-y":L()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[R]}],"inset-x":[{"inset-x":[R]}],"inset-y":[{"inset-y":[R]}],start:[{start:[R]}],end:[{end:[R]}],top:[{top:[R]}],right:[{right:[R]}],bottom:[{bottom:[R]}],left:[{left:[R]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Ho,ut]}],basis:[{basis:B()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",ut]}],grow:[{grow:Q()}],shrink:[{shrink:Q()}],order:[{order:["first","last","none",Ho,ut]}],"grid-cols":[{"grid-cols":[Wo]}],"col-start-end":[{col:["auto",{span:["full",Ho,ut]},ut]}],"col-start":[{"col-start":de()}],"col-end":[{"col-end":de()}],"grid-rows":[{"grid-rows":[Wo]}],"row-start-end":[{row:["auto",{span:[Ho,ut]},ut]}],"row-start":[{"row-start":de()}],"row-end":[{"row-end":de()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",ut]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",ut]}],gap:[{gap:[g]}],"gap-x":[{"gap-x":[g]}],"gap-y":[{"gap-y":[g]}],"justify-content":[{justify:["normal",...V()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...V(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...V(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[U]}],px:[{px:[U]}],py:[{py:[U]}],ps:[{ps:[U]}],pe:[{pe:[U]}],pt:[{pt:[U]}],pr:[{pr:[U]}],pb:[{pb:[U]}],pl:[{pl:[U]}],m:[{m:[v]}],mx:[{mx:[v]}],my:[{my:[v]}],ms:[{ms:[v]}],me:[{me:[v]}],mt:[{mt:[v]}],mr:[{mr:[v]}],mb:[{mb:[v]}],ml:[{ml:[v]}],"space-x":[{"space-x":[O]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[O]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",ut,e]}],"min-w":[{"min-w":[ut,e,"min","max","fit"]}],"max-w":[{"max-w":[ut,e,"none","full","min","max","fit","prose",{screen:[Tr]},Tr]}],h:[{h:[ut,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[ut,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[ut,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[ut,e,"auto","min","max","fit"]}],"font-size":[{text:["base",Tr,Er]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",ku]}],"font-family":[{font:[Wo]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",ut]}],"line-clamp":[{"line-clamp":["none",Ks,ku]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Wi,ut]}],"list-image":[{"list-image":["none",ut]}],"list-style-type":[{list:["none","disc","decimal",ut]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[s]}],"placeholder-opacity":[{"placeholder-opacity":[_]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[s]}],"text-opacity":[{"text-opacity":[_]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...le(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Wi,Er]}],"underline-offset":[{"underline-offset":["auto",Wi,ut]}],"text-decoration-color":[{decoration:[s]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:W()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",ut]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",ut]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[_]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Z(),u_]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",c_]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},d_]}],"bg-color":[{bg:[s]}],"gradient-from-pos":[{from:[w]}],"gradient-via-pos":[{via:[w]}],"gradient-to-pos":[{to:[w]}],"gradient-from":[{from:[M]}],"gradient-via":[{via:[M]}],"gradient-to":[{to:[M]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[d]}],"border-w-x":[{"border-x":[d]}],"border-w-y":[{"border-y":[d]}],"border-w-s":[{"border-s":[d]}],"border-w-e":[{"border-e":[d]}],"border-w-t":[{"border-t":[d]}],"border-w-r":[{"border-r":[d]}],"border-w-b":[{"border-b":[d]}],"border-w-l":[{"border-l":[d]}],"border-opacity":[{"border-opacity":[_]}],"border-style":[{border:[...le(),"hidden"]}],"divide-x":[{"divide-x":[d]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[d]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[_]}],"divide-style":[{divide:le()}],"border-color":[{border:[a]}],"border-color-x":[{"border-x":[a]}],"border-color-y":[{"border-y":[a]}],"border-color-s":[{"border-s":[a]}],"border-color-e":[{"border-e":[a]}],"border-color-t":[{"border-t":[a]}],"border-color-r":[{"border-r":[a]}],"border-color-b":[{"border-b":[a]}],"border-color-l":[{"border-l":[a]}],"divide-color":[{divide:[a]}],"outline-style":[{outline:["",...le()]}],"outline-offset":[{"outline-offset":[Wi,ut]}],"outline-w":[{outline:[Wi,Er]}],"outline-color":[{outline:[s]}],"ring-w":[{ring:ce()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[s]}],"ring-opacity":[{"ring-opacity":[_]}],"ring-offset-w":[{"ring-offset":[Wi,Er]}],"ring-offset-color":[{"ring-offset":[s]}],shadow:[{shadow:["","inner","none",Tr,h_]}],"shadow-color":[{shadow:[Wo]}],opacity:[{opacity:[_]}],"mix-blend":[{"mix-blend":[...q(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":q()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[p]}],"drop-shadow":[{"drop-shadow":["","none",Tr,ut]}],grayscale:[{grayscale:[m]}],"hue-rotate":[{"hue-rotate":[x]}],invert:[{invert:[S]}],saturate:[{saturate:[F]}],sepia:[{sepia:[I]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[p]}],"backdrop-grayscale":[{"backdrop-grayscale":[m]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[x]}],"backdrop-invert":[{"backdrop-invert":[S]}],"backdrop-opacity":[{"backdrop-opacity":[_]}],"backdrop-saturate":[{"backdrop-saturate":[F]}],"backdrop-sepia":[{"backdrop-sepia":[I]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[u]}],"border-spacing-x":[{"border-spacing-x":[u]}],"border-spacing-y":[{"border-spacing-y":[u]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",ut]}],duration:[{duration:N()}],ease:[{ease:["linear","in","out","in-out",ut]}],delay:[{delay:N()}],animate:[{animate:["none","spin","ping","pulse","bounce",ut]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[b]}],"scale-x":[{"scale-x":[b]}],"scale-y":[{"scale-y":[b]}],rotate:[{rotate:[Ho,ut]}],"translate-x":[{"translate-x":[E]}],"translate-y":[{"translate-y":[E]}],"skew-x":[{"skew-x":[P]}],"skew-y":[{"skew-y":[P]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",ut]}],accent:[{accent:["auto",s]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",ut]}],"caret-color":[{caret:[s]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":W()}],"scroll-mx":[{"scroll-mx":W()}],"scroll-my":[{"scroll-my":W()}],"scroll-ms":[{"scroll-ms":W()}],"scroll-me":[{"scroll-me":W()}],"scroll-mt":[{"scroll-mt":W()}],"scroll-mr":[{"scroll-mr":W()}],"scroll-mb":[{"scroll-mb":W()}],"scroll-ml":[{"scroll-ml":W()}],"scroll-p":[{"scroll-p":W()}],"scroll-px":[{"scroll-px":W()}],"scroll-py":[{"scroll-py":W()}],"scroll-ps":[{"scroll-ps":W()}],"scroll-pe":[{"scroll-pe":W()}],"scroll-pt":[{"scroll-pt":W()}],"scroll-pr":[{"scroll-pr":W()}],"scroll-pb":[{"scroll-pb":W()}],"scroll-pl":[{"scroll-pl":W()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",ut]}],fill:[{fill:[s,"none"]}],"stroke-w":[{stroke:[Wi,Er,ku]}],stroke:[{stroke:[s,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},__=Jv(v_);function md(...s){return __(zv(s))}function x_(){const[s,e]=Ft.useState(!1);return Ft.useEffect(()=>{const n=()=>e(window.scrollY>50);return window.addEventListener("scroll",n,{passive:!0}),()=>window.removeEventListener("scroll",n)},[]),ge.jsxs("nav",{className:md("fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center justify-between px-8 transition-all duration-400",s&&"bg-[rgba(6,8,13,0.85)] backdrop-blur-[16px] border-b border-white/10"),children:[ge.jsxs("a",{href:"#",className:"text-2xl font-extrabold tracking-tight text-white no-underline",children:["智鸭",ge.jsx("span",{className:"text-blue-500",children:"科技"})]}),ge.jsx("ul",{className:"hidden md:flex gap-8 list-none",children:[["#tools","数据标注工具"],["#ai","AI 赋能"],["#cases","合作案例"],["#cta","联系我们"]].map(([n,r])=>ge.jsx("li",{children:ge.jsx("a",{href:n,className:`text-sm font-medium text-slate-400 no-underline transition-colors duration-300 relative\r
                hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-500\r
                after:transition-[width] after:duration-300 hover:after:w-full`,children:r})},n))}),ge.jsxs("a",{href:"http://127.0.0.1:10500",target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-white no-underline\r
          relative overflow-hidden bg-gradient-to-br from-blue-500 to-purple-500\r
          shadow-[0_0_24px_rgba(59,130,246,0.35),0_0_60px_rgba(168,85,247,0.15)]\r
          hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(59,130,246,0.55),0_0_80px_rgba(168,85,247,0.25)]\r
          transition-transform duration-250 transition-shadow duration-350\r
          before:absolute before:inset-[-2px] before:rounded-[inherit] before:bg-gradient-to-br before:from-blue-500 before:via-purple-500 before:to-cyan-400\r
          before:-z-10 before:blur-[12px] before:opacity-50`,children:[ge.jsxs("svg",{width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[ge.jsx("path",{d:"M15 8a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"}),ge.jsx("path",{d:"m10 8-3-2v4l3-2Z"})]}),"登录标注平台"]})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gd="185",S_=0,sm=1,y_=2,kl=1,M_=2,Jo=3,Dr=0,Vn=1,Zi=2,Qi=0,Zs=1,yf=2,om=3,am=4,E_=5,is=100,T_=101,w_=102,A_=103,b_=104,R_=200,C_=201,P_=202,L_=203,Mf=204,Ef=205,N_=206,D_=207,I_=208,U_=209,F_=210,O_=211,k_=212,B_=213,z_=214,Tf=0,wf=1,Af=2,Js=3,bf=4,Rf=5,Cf=6,Pf=7,dg=0,V_=1,G_=2,Li=0,hg=1,pg=2,mg=3,gg=4,vg=5,_g=6,xg=7,Sg=300,as=301,eo=302,Bu=303,zu=304,jl=306,Lf=1e3,ji=1001,Nf=1002,_n=1003,H_=1004,fl=1005,An=1006,Vu=1007,ss=1008,si=1009,yg=1010,Mg=1011,ta=1012,vd=1013,Di=1014,Ci=1015,tr=1016,_d=1017,xd=1018,na=1020,Eg=35902,Tg=35899,wg=1021,Ag=1022,xi=1023,nr=1026,os=1027,bg=1028,Sd=1029,ls=1030,yd=1031,Md=1033,Bl=33776,zl=33777,Vl=33778,Gl=33779,Df=35840,If=35841,Uf=35842,Ff=35843,Of=36196,kf=37492,Bf=37496,zf=37488,Vf=37489,Wl=37490,Gf=37491,Hf=37808,Wf=37809,Xf=37810,Yf=37811,qf=37812,$f=37813,Kf=37814,Zf=37815,jf=37816,Qf=37817,Jf=37818,ed=37819,td=37820,nd=37821,id=36492,rd=36494,sd=36495,od=36283,ad=36284,Xl=36285,ld=36286,W_=3200,lm=0,X_=1,Lr="",ii="srgb",Yl="srgb-linear",ql="linear",Dt="srgb",Us=7680,cm=519,Y_=512,q_=513,$_=514,Ed=515,K_=516,Z_=517,Td=518,j_=519,um=35044,fm="300 es",Pi=2e3,$l=2001;function Q_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Kl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function J_(){const s=Kl("canvas");return s.style.display="block",s}const dm={};function hm(...s){const e="THREE."+s.shift();console.log(e,...s)}function Rg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=s[1];n&&n.isStackTrace?s[0]+=" "+n.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function st(...s){s=Rg(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...s)}}function Tt(...s){s=Rg(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...s)}}function js(...s){const e=s.join(" ");e in dm||(dm[e]=!0,st(...s))}function ex(s,e,n){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:r()}}setTimeout(l,n)})}const tx={[Tf]:wf,[Af]:Cf,[bf]:Pf,[Js]:Rf,[wf]:Tf,[Cf]:Af,[Pf]:bf,[Rf]:Js};class us{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const l=a.indexOf(n);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,u=a.length;l<u;l++)a[l].call(this,e);e.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gu=Math.PI/180,cd=180/Math.PI;function ia(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Tn[s&255]+Tn[s>>8&255]+Tn[s>>16&255]+Tn[s>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[n&63|128]+Tn[n>>8&255]+"-"+Tn[n>>16&255]+Tn[n>>24&255]+Tn[r&255]+Tn[r>>8&255]+Tn[r>>16&255]+Tn[r>>24&255]).toLowerCase()}function St(s,e,n){return Math.max(e,Math.min(n,s))}function nx(s,e){return(s%e+e)%e}function Hu(s,e,n){return(1-n)*s+n*e}function Xo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function zn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ad=class Ad{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*a+e.x,this.y=l*a+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ad.prototype.isVector2=!0;let Rt=Ad;class ro{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,l,u,d){let p=r[a+0],m=r[a+1],x=r[a+2],S=r[a+3],g=l[u+0],M=l[u+1],w=l[u+2],R=l[u+3];if(S!==R||p!==g||m!==M||x!==w){let v=p*g+m*M+x*w+S*R;v<0&&(g=-g,M=-M,w=-w,R=-R,v=-v);let _=1-d;if(v<.9995){const U=Math.acos(v),F=Math.sin(U);_=Math.sin(_*U)/F,d=Math.sin(d*U)/F,p=p*_+g*d,m=m*_+M*d,x=x*_+w*d,S=S*_+R*d}else{p=p*_+g*d,m=m*_+M*d,x=x*_+w*d,S=S*_+R*d;const U=1/Math.sqrt(p*p+m*m+x*x+S*S);p*=U,m*=U,x*=U,S*=U}}e[n]=p,e[n+1]=m,e[n+2]=x,e[n+3]=S}static multiplyQuaternionsFlat(e,n,r,a,l,u){const d=r[a],p=r[a+1],m=r[a+2],x=r[a+3],S=l[u],g=l[u+1],M=l[u+2],w=l[u+3];return e[n]=d*w+x*S+p*M-m*g,e[n+1]=p*w+x*g+m*S-d*M,e[n+2]=m*w+x*M+d*g-p*S,e[n+3]=x*w-d*S-p*g-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,l=e._z,u=e._order,d=Math.cos,p=Math.sin,m=d(r/2),x=d(a/2),S=d(l/2),g=p(r/2),M=p(a/2),w=p(l/2);switch(u){case"XYZ":this._x=g*x*S+m*M*w,this._y=m*M*S-g*x*w,this._z=m*x*w+g*M*S,this._w=m*x*S-g*M*w;break;case"YXZ":this._x=g*x*S+m*M*w,this._y=m*M*S-g*x*w,this._z=m*x*w-g*M*S,this._w=m*x*S+g*M*w;break;case"ZXY":this._x=g*x*S-m*M*w,this._y=m*M*S+g*x*w,this._z=m*x*w+g*M*S,this._w=m*x*S-g*M*w;break;case"ZYX":this._x=g*x*S-m*M*w,this._y=m*M*S+g*x*w,this._z=m*x*w-g*M*S,this._w=m*x*S+g*M*w;break;case"YZX":this._x=g*x*S+m*M*w,this._y=m*M*S+g*x*w,this._z=m*x*w-g*M*S,this._w=m*x*S-g*M*w;break;case"XZY":this._x=g*x*S-m*M*w,this._y=m*M*S-g*x*w,this._z=m*x*w+g*M*S,this._w=m*x*S+g*M*w;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],l=n[8],u=n[1],d=n[5],p=n[9],m=n[2],x=n[6],S=n[10],g=r+d+S;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(x-p)*M,this._y=(l-m)*M,this._z=(u-a)*M}else if(r>d&&r>S){const M=2*Math.sqrt(1+r-d-S);this._w=(x-p)/M,this._x=.25*M,this._y=(a+u)/M,this._z=(l+m)/M}else if(d>S){const M=2*Math.sqrt(1+d-r-S);this._w=(l-m)/M,this._x=(a+u)/M,this._y=.25*M,this._z=(p+x)/M}else{const M=2*Math.sqrt(1+S-r-d);this._w=(u-a)/M,this._x=(l+m)/M,this._y=(p+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,l=e._z,u=e._w,d=n._x,p=n._y,m=n._z,x=n._w;return this._x=r*x+u*d+a*m-l*p,this._y=a*x+u*p+l*d-r*m,this._z=l*x+u*m+r*p-a*d,this._w=u*x-r*d-a*p-l*m,this._onChangeCallback(),this}slerp(e,n){let r=e._x,a=e._y,l=e._z,u=e._w,d=this.dot(e);d<0&&(r=-r,a=-a,l=-l,u=-u,d=-d);let p=1-n;if(d<.9995){const m=Math.acos(d),x=Math.sin(m);p=Math.sin(p*m)/x,n=Math.sin(n*m)/x,this._x=this._x*p+r*n,this._y=this._y*p+a*n,this._z=this._z*p+l*n,this._w=this._w*p+u*n,this._onChangeCallback()}else this._x=this._x*p+r*n,this._y=this._y*p+a*n,this._z=this._z*p+l*n,this._w=this._w*p+u*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const bd=class bd{constructor(e=0,n=0,r=0){this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(pm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(pm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6]*a,this.y=l[1]*n+l[4]*r+l[7]*a,this.z=l[2]*n+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=e.elements,u=1/(l[3]*n+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*a+l[12])*u,this.y=(l[1]*n+l[5]*r+l[9]*a+l[13])*u,this.z=(l[2]*n+l[6]*r+l[10]*a+l[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,l=e.x,u=e.y,d=e.z,p=e.w,m=2*(u*a-d*r),x=2*(d*n-l*a),S=2*(l*r-u*n);return this.x=n+p*m+u*S-d*x,this.y=r+p*x+d*m-l*S,this.z=a+p*S+l*x-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[4]*r+l[8]*a,this.y=l[1]*n+l[5]*r+l[9]*a,this.z=l[2]*n+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this.z=St(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this.z=St(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,l=e.z,u=n.x,d=n.y,p=n.z;return this.x=a*p-l*d,this.y=l*u-r*p,this.z=r*d-a*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Wu.copy(this).projectOnVector(e),this.sub(Wu)}reflect(e){return this.sub(Wu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};bd.prototype.isVector3=!0;let se=bd;const Wu=new se,pm=new ro,Rd=class Rd{constructor(e,n,r,a,l,u,d,p,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,u,d,p,m)}set(e,n,r,a,l,u,d,p,m){const x=this.elements;return x[0]=e,x[1]=a,x[2]=d,x[3]=n,x[4]=l,x[5]=p,x[6]=r,x[7]=u,x[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,u=r[0],d=r[3],p=r[6],m=r[1],x=r[4],S=r[7],g=r[2],M=r[5],w=r[8],R=a[0],v=a[3],_=a[6],U=a[1],F=a[4],b=a[7],I=a[2],P=a[5],O=a[8];return l[0]=u*R+d*U+p*I,l[3]=u*v+d*F+p*P,l[6]=u*_+d*b+p*O,l[1]=m*R+x*U+S*I,l[4]=m*v+x*F+S*P,l[7]=m*_+x*b+S*O,l[2]=g*R+M*U+w*I,l[5]=g*v+M*F+w*P,l[8]=g*_+M*b+w*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],u=e[4],d=e[5],p=e[6],m=e[7],x=e[8];return n*u*x-n*d*m-r*l*x+r*d*p+a*l*m-a*u*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],u=e[4],d=e[5],p=e[6],m=e[7],x=e[8],S=x*u-d*m,g=d*p-x*l,M=m*l-u*p,w=n*S+r*g+a*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=S*R,e[1]=(a*m-x*r)*R,e[2]=(d*r-a*u)*R,e[3]=g*R,e[4]=(x*n-a*p)*R,e[5]=(a*l-d*n)*R,e[6]=M*R,e[7]=(r*p-m*n)*R,e[8]=(u*n-r*l)*R,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,l,u,d){const p=Math.cos(l),m=Math.sin(l);return this.set(r*p,r*m,-r*(p*u+m*d)+u+e,-a*m,a*p,-a*(-m*u+p*d)+d+n,0,0,1),this}scale(e,n){return js("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Xu.makeScale(e,n)),this}rotate(e){return js("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Xu.makeRotation(-e)),this}translate(e,n){return js("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Xu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Rd.prototype.isMatrix3=!0;let ct=Rd;const Xu=new ct,mm=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gm=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ix(){const s={enabled:!0,workingColorSpace:Yl,spaces:{},convert:function(a,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Dt&&(a.r=Ji(a.r),a.g=Ji(a.g),a.b=Ji(a.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Dt&&(a.r=Qs(a.r),a.g=Qs(a.g),a.b=Qs(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Lr?ql:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,u){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return js("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return js("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Yl]:{primaries:e,whitePoint:r,transfer:ql,toXYZ:mm,fromXYZ:gm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ii},outputColorSpaceConfig:{drawingBufferColorSpace:ii}},[ii]:{primaries:e,whitePoint:r,transfer:Dt,toXYZ:mm,fromXYZ:gm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ii}}}),s}const xt=ix();function Ji(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Qs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Fs;class rx{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Fs===void 0&&(Fs=Kl("canvas")),Fs.width=e.width,Fs.height=e.height;const a=Fs.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=Fs}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Kl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let u=0;u<l.length;u++)l[u]=Ji(l[u]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Ji(n[r]/255)*255):n[r]=Ji(n[r]);return{data:n,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sx=0;class wd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sx++}),this.uuid=ia(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let u=0,d=a.length;u<d;u++)a[u].isDataTexture?l.push(Yu(a[u].image)):l.push(Yu(a[u]))}else l=Yu(a);r.url=l}return n||(e.images[this.uuid]=r),r}}function Yu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?rx.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let ox=0;const qu=new se;class Ln extends us{constructor(e=Ln.DEFAULT_IMAGE,n=Ln.DEFAULT_MAPPING,r=ji,a=ji,l=An,u=ss,d=xi,p=si,m=Ln.DEFAULT_ANISOTROPY,x=Lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ox++}),this.uuid=ia(),this.name="",this.source=new wd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=u,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(qu).x}get height(){return this.source.getSize(qu).y}get depth(){return this.source.getSize(qu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){st(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){st(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Lf:e.x=e.x-Math.floor(e.x);break;case ji:e.x=e.x<0?0:1;break;case Nf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Lf:e.y=e.y-Math.floor(e.y);break;case ji:e.y=e.y<0?0:1;break;case Nf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=Sg;Ln.DEFAULT_ANISOTROPY=1;const Cd=class Cd{constructor(e=0,n=0,r=0,a=1){this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a+u[12]*l,this.y=u[1]*n+u[5]*r+u[9]*a+u[13]*l,this.z=u[2]*n+u[6]*r+u[10]*a+u[14]*l,this.w=u[3]*n+u[7]*r+u[11]*a+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,l;const p=e.elements,m=p[0],x=p[4],S=p[8],g=p[1],M=p[5],w=p[9],R=p[2],v=p[6],_=p[10];if(Math.abs(x-g)<.01&&Math.abs(S-R)<.01&&Math.abs(w-v)<.01){if(Math.abs(x+g)<.1&&Math.abs(S+R)<.1&&Math.abs(w+v)<.1&&Math.abs(m+M+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const F=(m+1)/2,b=(M+1)/2,I=(_+1)/2,P=(x+g)/4,O=(S+R)/4,E=(w+v)/4;return F>b&&F>I?F<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(F),a=P/r,l=O/r):b>I?b<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(b),r=P/a,l=E/a):I<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(I),r=O/l,a=E/l),this.set(r,a,l,n),this}let U=Math.sqrt((v-w)*(v-w)+(S-R)*(S-R)+(g-x)*(g-x));return Math.abs(U)<.001&&(U=1),this.x=(v-w)/U,this.y=(S-R)/U,this.z=(g-x)/U,this.w=Math.acos((m+M+_-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this.z=St(this.z,e.z,n.z),this.w=St(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this.z=St(this.z,e,n),this.w=St(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Cd.prototype.isVector4=!0;let Jt=Cd;class ax extends us{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new Jt(0,0,e,n),this.scissorTest=!1,this.viewport=new Jt(0,0,e,n),this.textures=[];const a={width:e,height:n,depth:r.depth},l=new Ln(a),u=r.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:An,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new wd(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ni extends ax{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Cg extends Ln{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=_n,this.minFilter=_n,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lx extends Ln{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=_n,this.minFilter=_n,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zl=class Zl{constructor(e,n,r,a,l,u,d,p,m,x,S,g,M,w,R,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,u,d,p,m,x,S,g,M,w,R,v)}set(e,n,r,a,l,u,d,p,m,x,S,g,M,w,R,v){const _=this.elements;return _[0]=e,_[4]=n,_[8]=r,_[12]=a,_[1]=l,_[5]=u,_[9]=d,_[13]=p,_[2]=m,_[6]=x,_[10]=S,_[14]=g,_[3]=M,_[7]=w,_[11]=R,_[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zl().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,r=e.elements,a=1/Os.setFromMatrixColumn(e,0).length(),l=1/Os.setFromMatrixColumn(e,1).length(),u=1/Os.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,l=e.z,u=Math.cos(r),d=Math.sin(r),p=Math.cos(a),m=Math.sin(a),x=Math.cos(l),S=Math.sin(l);if(e.order==="XYZ"){const g=u*x,M=u*S,w=d*x,R=d*S;n[0]=p*x,n[4]=-p*S,n[8]=m,n[1]=M+w*m,n[5]=g-R*m,n[9]=-d*p,n[2]=R-g*m,n[6]=w+M*m,n[10]=u*p}else if(e.order==="YXZ"){const g=p*x,M=p*S,w=m*x,R=m*S;n[0]=g+R*d,n[4]=w*d-M,n[8]=u*m,n[1]=u*S,n[5]=u*x,n[9]=-d,n[2]=M*d-w,n[6]=R+g*d,n[10]=u*p}else if(e.order==="ZXY"){const g=p*x,M=p*S,w=m*x,R=m*S;n[0]=g-R*d,n[4]=-u*S,n[8]=w+M*d,n[1]=M+w*d,n[5]=u*x,n[9]=R-g*d,n[2]=-u*m,n[6]=d,n[10]=u*p}else if(e.order==="ZYX"){const g=u*x,M=u*S,w=d*x,R=d*S;n[0]=p*x,n[4]=w*m-M,n[8]=g*m+R,n[1]=p*S,n[5]=R*m+g,n[9]=M*m-w,n[2]=-m,n[6]=d*p,n[10]=u*p}else if(e.order==="YZX"){const g=u*p,M=u*m,w=d*p,R=d*m;n[0]=p*x,n[4]=R-g*S,n[8]=w*S+M,n[1]=S,n[5]=u*x,n[9]=-d*x,n[2]=-m*x,n[6]=M*S+w,n[10]=g-R*S}else if(e.order==="XZY"){const g=u*p,M=u*m,w=d*p,R=d*m;n[0]=p*x,n[4]=-S,n[8]=m*x,n[1]=g*S+R,n[5]=u*x,n[9]=M*S-w,n[2]=w*S-M,n[6]=d*x,n[10]=R*S+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cx,e,ux)}lookAt(e,n,r){const a=this.elements;return qn.subVectors(e,n),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),wr.crossVectors(r,qn),wr.lengthSq()===0&&(Math.abs(r.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),wr.crossVectors(r,qn)),wr.normalize(),dl.crossVectors(qn,wr),a[0]=wr.x,a[4]=dl.x,a[8]=qn.x,a[1]=wr.y,a[5]=dl.y,a[9]=qn.y,a[2]=wr.z,a[6]=dl.z,a[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,u=r[0],d=r[4],p=r[8],m=r[12],x=r[1],S=r[5],g=r[9],M=r[13],w=r[2],R=r[6],v=r[10],_=r[14],U=r[3],F=r[7],b=r[11],I=r[15],P=a[0],O=a[4],E=a[8],L=a[12],z=a[1],B=a[5],W=a[9],ce=a[13],de=a[2],Z=a[6],le=a[10],q=a[14],V=a[3],Q=a[7],J=a[11],N=a[15];return l[0]=u*P+d*z+p*de+m*V,l[4]=u*O+d*B+p*Z+m*Q,l[8]=u*E+d*W+p*le+m*J,l[12]=u*L+d*ce+p*q+m*N,l[1]=x*P+S*z+g*de+M*V,l[5]=x*O+S*B+g*Z+M*Q,l[9]=x*E+S*W+g*le+M*J,l[13]=x*L+S*ce+g*q+M*N,l[2]=w*P+R*z+v*de+_*V,l[6]=w*O+R*B+v*Z+_*Q,l[10]=w*E+R*W+v*le+_*J,l[14]=w*L+R*ce+v*q+_*N,l[3]=U*P+F*z+b*de+I*V,l[7]=U*O+F*B+b*Z+I*Q,l[11]=U*E+F*W+b*le+I*J,l[15]=U*L+F*ce+b*q+I*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],l=e[12],u=e[1],d=e[5],p=e[9],m=e[13],x=e[2],S=e[6],g=e[10],M=e[14],w=e[3],R=e[7],v=e[11],_=e[15],U=p*M-m*g,F=d*M-m*S,b=d*g-p*S,I=u*M-m*x,P=u*g-p*x,O=u*S-d*x;return n*(R*U-v*F+_*b)-r*(w*U-v*I+_*P)+a*(w*F-R*I+_*O)-l*(w*b-R*P+v*O)}determinantAffine(){const e=this.elements,n=e[0],r=e[4],a=e[8],l=e[1],u=e[5],d=e[9],p=e[2],m=e[6],x=e[10];return n*(u*x-d*m)-r*(l*x-d*p)+a*(l*m-u*p)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],u=e[4],d=e[5],p=e[6],m=e[7],x=e[8],S=e[9],g=e[10],M=e[11],w=e[12],R=e[13],v=e[14],_=e[15],U=n*d-r*u,F=n*p-a*u,b=n*m-l*u,I=r*p-a*d,P=r*m-l*d,O=a*m-l*p,E=x*R-S*w,L=x*v-g*w,z=x*_-M*w,B=S*v-g*R,W=S*_-M*R,ce=g*_-M*v,de=U*ce-F*W+b*B+I*z-P*L+O*E;if(de===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/de;return e[0]=(d*ce-p*W+m*B)*Z,e[1]=(a*W-r*ce-l*B)*Z,e[2]=(R*O-v*P+_*I)*Z,e[3]=(g*P-S*O-M*I)*Z,e[4]=(p*z-u*ce-m*L)*Z,e[5]=(n*ce-a*z+l*L)*Z,e[6]=(v*b-w*O-_*F)*Z,e[7]=(x*O-g*b+M*F)*Z,e[8]=(u*W-d*z+m*E)*Z,e[9]=(r*z-n*W-l*E)*Z,e[10]=(w*P-R*b+_*U)*Z,e[11]=(S*b-x*P-M*U)*Z,e[12]=(d*L-u*B-p*E)*Z,e[13]=(n*B-r*L+a*E)*Z,e[14]=(R*F-w*I-v*U)*Z,e[15]=(x*I-S*F+g*U)*Z,this}scale(e){const n=this.elements,r=e.x,a=e.y,l=e.z;return n[0]*=r,n[4]*=a,n[8]*=l,n[1]*=r,n[5]*=a,n[9]*=l,n[2]*=r,n[6]*=a,n[10]*=l,n[3]*=r,n[7]*=a,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),l=1-r,u=e.x,d=e.y,p=e.z,m=l*u,x=l*d;return this.set(m*u+r,m*d-a*p,m*p+a*d,0,m*d+a*p,x*d+r,x*p-a*u,0,m*p-a*d,x*p+a*u,l*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,l,u){return this.set(1,r,l,0,e,1,u,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,l=n._x,u=n._y,d=n._z,p=n._w,m=l+l,x=u+u,S=d+d,g=l*m,M=l*x,w=l*S,R=u*x,v=u*S,_=d*S,U=p*m,F=p*x,b=p*S,I=r.x,P=r.y,O=r.z;return a[0]=(1-(R+_))*I,a[1]=(M+b)*I,a[2]=(w-F)*I,a[3]=0,a[4]=(M-b)*P,a[5]=(1-(g+_))*P,a[6]=(v+U)*P,a[7]=0,a[8]=(w+F)*O,a[9]=(v-U)*O,a[10]=(1-(g+R))*O,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),n.identity(),this;let u=Os.set(a[0],a[1],a[2]).length();const d=Os.set(a[4],a[5],a[6]).length(),p=Os.set(a[8],a[9],a[10]).length();l<0&&(u=-u),mi.copy(this);const m=1/u,x=1/d,S=1/p;return mi.elements[0]*=m,mi.elements[1]*=m,mi.elements[2]*=m,mi.elements[4]*=x,mi.elements[5]*=x,mi.elements[6]*=x,mi.elements[8]*=S,mi.elements[9]*=S,mi.elements[10]*=S,n.setFromRotationMatrix(mi),r.x=u,r.y=d,r.z=p,this}makePerspective(e,n,r,a,l,u,d=Pi,p=!1){const m=this.elements,x=2*l/(n-e),S=2*l/(r-a),g=(n+e)/(n-e),M=(r+a)/(r-a);let w,R;if(p)w=l/(u-l),R=u*l/(u-l);else if(d===Pi)w=-(u+l)/(u-l),R=-2*u*l/(u-l);else if(d===$l)w=-u/(u-l),R=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=x,m[4]=0,m[8]=g,m[12]=0,m[1]=0,m[5]=S,m[9]=M,m[13]=0,m[2]=0,m[6]=0,m[10]=w,m[14]=R,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,n,r,a,l,u,d=Pi,p=!1){const m=this.elements,x=2/(n-e),S=2/(r-a),g=-(n+e)/(n-e),M=-(r+a)/(r-a);let w,R;if(p)w=1/(u-l),R=u/(u-l);else if(d===Pi)w=-2/(u-l),R=-(u+l)/(u-l);else if(d===$l)w=-1/(u-l),R=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=x,m[4]=0,m[8]=0,m[12]=g,m[1]=0,m[5]=S,m[9]=0,m[13]=M,m[2]=0,m[6]=0,m[10]=w,m[14]=R,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}};Zl.prototype.isMatrix4=!0;let tn=Zl;const Os=new se,mi=new tn,cx=new se(0,0,0),ux=new se(1,1,1),wr=new se,dl=new se,qn=new se,vm=new tn,_m=new ro;class cs{constructor(e=0,n=0,r=0,a=cs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,l=a[0],u=a[4],d=a[8],p=a[1],m=a[5],x=a[9],S=a[2],g=a[6],M=a[10];switch(n){case"XYZ":this._y=Math.asin(St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,m),this._z=0);break;case"YXZ":this._x=Math.asin(-St(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-S,l),this._z=0);break;case"ZXY":this._x=Math.asin(St(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-St(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(St(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,m),this._y=Math.atan2(-S,l)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,m),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-x,M),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return vm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vm,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return _m.setFromEuler(this),this.setFromQuaternion(_m,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cs.DEFAULT_ORDER="XYZ";class Pg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fx=0;const xm=new se,ks=new ro,Xi=new tn,hl=new se,Yo=new se,dx=new se,hx=new ro,Sm=new se(1,0,0),ym=new se(0,1,0),Mm=new se(0,0,1),Em={type:"added"},px={type:"removed"},Bs={type:"childadded",child:null},$u={type:"childremoved",child:null};class Gn extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=ia(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gn.DEFAULT_UP.clone();const e=new se,n=new cs,r=new ro,a=new se(1,1,1);function l(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new tn},normalMatrix:{value:new ct}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ks.setFromAxisAngle(e,n),this.quaternion.multiply(ks),this}rotateOnWorldAxis(e,n){return ks.setFromAxisAngle(e,n),this.quaternion.premultiply(ks),this}rotateX(e){return this.rotateOnAxis(Sm,e)}rotateY(e){return this.rotateOnAxis(ym,e)}rotateZ(e){return this.rotateOnAxis(Mm,e)}translateOnAxis(e,n){return xm.copy(e).applyQuaternion(this.quaternion),this.position.add(xm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Sm,e)}translateY(e){return this.translateOnAxis(ym,e)}translateZ(e){return this.translateOnAxis(Mm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?hl.copy(e):hl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(Yo,hl,this.up):Xi.lookAt(hl,Yo,this.up),this.quaternion.setFromRotationMatrix(Xi),a&&(Xi.extractRotation(a.matrixWorld),ks.setFromRotationMatrix(Xi),this.quaternion.premultiply(ks.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Em),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null):Tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(px),$u.child=e,this.dispatchEvent($u),$u.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Em),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,e,dx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,hx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,r=e.y,a=e.z,l=this.matrix.elements;l[12]+=n-l[0]*n-l[4]*r-l[8]*a,l[13]+=r-l[1]*n-l[5]*r-l[9]*a,l[14]+=a-l[2]*n-l[6]*r-l[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n,r=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),n===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(d=>({...d})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,x=p.length;m<x;m++){const S=p[m];l(e.shapes,S)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(l(e.materials,this.material[p]));a.material=d}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];a.animations.push(l(e.animations,p))}}if(n){const d=u(e.geometries),p=u(e.materials),m=u(e.textures),x=u(e.images),S=u(e.shapes),g=u(e.skeletons),M=u(e.animations),w=u(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),x.length>0&&(r.images=x),S.length>0&&(r.shapes=S),g.length>0&&(r.skeletons=g),M.length>0&&(r.animations=M),w.length>0&&(r.nodes=w)}return r.object=a,r;function u(d){const p=[];for(const m in d){const x=d[m];delete x.metadata,p.push(x)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Gn.DEFAULT_UP=new se(0,1,0);Gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class pl extends Gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mx={type:"move"};class Ku{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new se,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new se),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new se,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new se,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,l=null,u=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const R of e.hand.values()){const v=n.getJointPose(R,r),_=this._getHandJoint(m,R);v!==null&&(_.matrix.fromArray(v.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=v.radius),_.visible=v!==null}const x=m.joints["index-finger-tip"],S=m.joints["thumb-tip"],g=x.position.distanceTo(S.position),M=.02,w=.005;m.inputState.pinching&&g>M+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&g<=M-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,r),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(mx)))}return d!==null&&(d.visible=a!==null),p!==null&&(p.visible=l!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new pl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const Lg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ar={h:0,s:0,l:0},ml={h:0,s:0,l:0};function Zu(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class yt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ii){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.colorSpaceToWorking(this,n),this}setRGB(e,n,r,a=xt.workingColorSpace){return this.r=e,this.g=n,this.b=r,xt.colorSpaceToWorking(this,a),this}setHSL(e,n,r,a=xt.workingColorSpace){if(e=nx(e,1),n=St(n,0,1),r=St(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,u=2*r-l;this.r=Zu(u,l,e+1/3),this.g=Zu(u,l,e),this.b=Zu(u,l,e-1/3)}return xt.colorSpaceToWorking(this,a),this}setStyle(e,n=ii){function r(l){l!==void 0&&parseFloat(l)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=a[1],d=a[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:st("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(l,16),n);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ii){const r=Lg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ji(e.r),this.g=Ji(e.g),this.b=Ji(e.b),this}copyLinearToSRGB(e){return this.r=Qs(e.r),this.g=Qs(e.g),this.b=Qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ii){return xt.workingToColorSpace(wn.copy(this),e),Math.round(St(wn.r*255,0,255))*65536+Math.round(St(wn.g*255,0,255))*256+Math.round(St(wn.b*255,0,255))}getHexString(e=ii){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=xt.workingColorSpace){xt.workingToColorSpace(wn.copy(this),n);const r=wn.r,a=wn.g,l=wn.b,u=Math.max(r,a,l),d=Math.min(r,a,l);let p,m;const x=(d+u)/2;if(d===u)p=0,m=0;else{const S=u-d;switch(m=x<=.5?S/(u+d):S/(2-u-d),u){case r:p=(a-l)/S+(a<l?6:0);break;case a:p=(l-r)/S+2;break;case l:p=(r-a)/S+4;break}p/=6}return e.h=p,e.s=m,e.l=x,e}getRGB(e,n=xt.workingColorSpace){return xt.workingToColorSpace(wn.copy(this),n),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=ii){xt.workingToColorSpace(wn.copy(this),e);const n=wn.r,r=wn.g,a=wn.b;return e!==ii?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(Ar),this.setHSL(Ar.h+e,Ar.s+n,Ar.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Ar),e.getHSL(ml);const r=Hu(Ar.h,ml.h,n),a=Hu(Ar.s,ml.s,n),l=Hu(Ar.l,ml.l,n);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*n+l[3]*r+l[6]*a,this.g=l[1]*n+l[4]*r+l[7]*a,this.b=l[2]*n+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new yt;yt.NAMES=Lg;class gx extends Gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cs,this.environmentIntensity=1,this.environmentRotation=new cs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const gi=new se,Yi=new se,ju=new se,qi=new se,zs=new se,Vs=new se,Tm=new se,Qu=new se,Ju=new se,ef=new se,tf=new Jt,nf=new Jt,rf=new Jt;class _i{constructor(e=new se,n=new se,r=new se){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),gi.subVectors(e,n),a.cross(gi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,n,r,a,l){gi.subVectors(a,n),Yi.subVectors(r,n),ju.subVectors(e,n);const u=gi.dot(gi),d=gi.dot(Yi),p=gi.dot(ju),m=Yi.dot(Yi),x=Yi.dot(ju),S=u*m-d*d;if(S===0)return l.set(0,0,0),null;const g=1/S,M=(m*p-d*x)*g,w=(u*x-d*p)*g;return l.set(1-M-w,w,M)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,qi)===null?!1:qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getInterpolation(e,n,r,a,l,u,d,p){return this.getBarycoord(e,n,r,a,qi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,qi.x),p.addScaledVector(u,qi.y),p.addScaledVector(d,qi.z),p)}static getInterpolatedAttribute(e,n,r,a,l,u){return tf.setScalar(0),nf.setScalar(0),rf.setScalar(0),tf.fromBufferAttribute(e,n),nf.fromBufferAttribute(e,r),rf.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(tf,l.x),u.addScaledVector(nf,l.y),u.addScaledVector(rf,l.z),u}static isFrontFacing(e,n,r,a){return gi.subVectors(r,n),Yi.subVectors(e,n),gi.cross(Yi).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),gi.cross(Yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return _i.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,l){return _i.getInterpolation(e,this.a,this.b,this.c,n,r,a,l)}containsPoint(e){return _i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,l=this.c;let u,d;zs.subVectors(a,r),Vs.subVectors(l,r),Qu.subVectors(e,r);const p=zs.dot(Qu),m=Vs.dot(Qu);if(p<=0&&m<=0)return n.copy(r);Ju.subVectors(e,a);const x=zs.dot(Ju),S=Vs.dot(Ju);if(x>=0&&S<=x)return n.copy(a);const g=p*S-x*m;if(g<=0&&p>=0&&x<=0)return u=p/(p-x),n.copy(r).addScaledVector(zs,u);ef.subVectors(e,l);const M=zs.dot(ef),w=Vs.dot(ef);if(w>=0&&M<=w)return n.copy(l);const R=M*m-p*w;if(R<=0&&m>=0&&w<=0)return d=m/(m-w),n.copy(r).addScaledVector(Vs,d);const v=x*w-M*S;if(v<=0&&S-x>=0&&M-w>=0)return Tm.subVectors(l,a),d=(S-x)/(S-x+(M-w)),n.copy(a).addScaledVector(Tm,d);const _=1/(v+R+g);return u=R*_,d=g*_,n.copy(r).addScaledVector(zs,u).addScaledVector(Vs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ra{constructor(e=new se(1/0,1/0,1/0),n=new se(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(vi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(vi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=vi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,vi):vi.fromBufferAttribute(l,u),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),gl.copy(r.boundingBox)),gl.applyMatrix4(e.matrixWorld),this.union(gl)}const a=e.children;for(let l=0,u=a.length;l<u;l++)this.expandByObject(a[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qo),vl.subVectors(this.max,qo),Gs.subVectors(e.a,qo),Hs.subVectors(e.b,qo),Ws.subVectors(e.c,qo),br.subVectors(Hs,Gs),Rr.subVectors(Ws,Hs),Qr.subVectors(Gs,Ws);let n=[0,-br.z,br.y,0,-Rr.z,Rr.y,0,-Qr.z,Qr.y,br.z,0,-br.x,Rr.z,0,-Rr.x,Qr.z,0,-Qr.x,-br.y,br.x,0,-Rr.y,Rr.x,0,-Qr.y,Qr.x,0];return!sf(n,Gs,Hs,Ws,vl)||(n=[1,0,0,0,1,0,0,0,1],!sf(n,Gs,Hs,Ws,vl))?!1:(_l.crossVectors(br,Rr),n=[_l.x,_l.y,_l.z],sf(n,Gs,Hs,Ws,vl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const $i=[new se,new se,new se,new se,new se,new se,new se,new se],vi=new se,gl=new ra,Gs=new se,Hs=new se,Ws=new se,br=new se,Rr=new se,Qr=new se,qo=new se,vl=new se,_l=new se,Jr=new se;function sf(s,e,n,r,a){for(let l=0,u=s.length-3;l<=u;l+=3){Jr.fromArray(s,l);const d=a.x*Math.abs(Jr.x)+a.y*Math.abs(Jr.y)+a.z*Math.abs(Jr.z),p=e.dot(Jr),m=n.dot(Jr),x=r.dot(Jr);if(Math.max(-Math.max(p,m,x),Math.min(p,m,x))>d)return!1}return!0}const sn=new se,xl=new Rt;let vx=0;class oi extends us{constructor(e,n,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vx++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=um,this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)xl.fromBufferAttribute(this,n),xl.applyMatrix3(e),this.setXY(n,xl.x,xl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)sn.fromBufferAttribute(this,n),sn.applyMatrix3(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)sn.fromBufferAttribute(this,n),sn.applyMatrix4(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)sn.fromBufferAttribute(this,n),sn.applyNormalMatrix(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)sn.fromBufferAttribute(this,n),sn.transformDirection(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Xo(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=zn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Xo(n,this.array)),n}setX(e,n){return this.normalized&&(n=zn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Xo(n,this.array)),n}setY(e,n){return this.normalized&&(n=zn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Xo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=zn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Xo(n,this.array)),n}setW(e,n){return this.normalized&&(n=zn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=zn(n,this.array),r=zn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=zn(n,this.array),r=zn(r,this.array),a=zn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,l){return e*=this.itemSize,this.normalized&&(n=zn(n,this.array),r=zn(r,this.array),a=zn(a,this.array),l=zn(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==um&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Ng extends oi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Dg extends oi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class er extends oi{constructor(e,n,r){super(new Float32Array(e),n,r)}}const _x=new ra,$o=new se,of=new se;class Ql{constructor(e=new se,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):_x.setFromPoints(e).getCenter(r);let a=0;for(let l=0,u=e.length;l<u;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$o.subVectors(e,this.center);const n=$o.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector($o,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(of.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($o.copy(e.center).add(of)),this.expandByPoint($o.copy(e.center).sub(of))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let xx=0;const ni=new tn,af=new Gn,Xs=new se,$n=new ra,Ko=new ra,pn=new se;class Si extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xx++}),this.uuid=ia(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Q_(e)?Dg:Ng)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ct().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,n,r){return ni.makeTranslation(e,n,r),this.applyMatrix4(ni),this}scale(e,n,r){return ni.makeScale(e,n,r),this.applyMatrix4(ni),this}lookAt(e){return af.lookAt(e),af.updateMatrix(),this.applyMatrix4(af.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new er(r,3))}else{const r=Math.min(e.length,n.count);for(let a=0;a<r;a++){const l=e[a];n.setXYZ(a,l.x,l.y,l.z||0)}e.length>n.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ra);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new se(-1/0,-1/0,-1/0),new se(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const l=n[r];$n.setFromBufferAttribute(l),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ql);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new se,1/0);return}if(e){const r=this.boundingSphere.center;if($n.setFromBufferAttribute(e),n)for(let l=0,u=n.length;l<u;l++){const d=n[l];Ko.setFromBufferAttribute(d),this.morphTargetsRelative?(pn.addVectors($n.min,Ko.min),$n.expandByPoint(pn),pn.addVectors($n.max,Ko.max),$n.expandByPoint(pn)):($n.expandByPoint(Ko.min),$n.expandByPoint(Ko.max))}$n.getCenter(r);let a=0;for(let l=0,u=e.count;l<u;l++)pn.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(pn));if(n)for(let l=0,u=n.length;l<u;l++){const d=n[l],p=this.morphTargetsRelative;for(let m=0,x=d.count;m<x;m++)pn.fromBufferAttribute(d,m),p&&(Xs.fromBufferAttribute(e,m),pn.add(Xs)),a=Math.max(a,r.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,l=n.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new oi(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const d=[],p=[];for(let E=0;E<r.count;E++)d[E]=new se,p[E]=new se;const m=new se,x=new se,S=new se,g=new Rt,M=new Rt,w=new Rt,R=new se,v=new se;function _(E,L,z){m.fromBufferAttribute(r,E),x.fromBufferAttribute(r,L),S.fromBufferAttribute(r,z),g.fromBufferAttribute(l,E),M.fromBufferAttribute(l,L),w.fromBufferAttribute(l,z),x.sub(m),S.sub(m),M.sub(g),w.sub(g);const B=1/(M.x*w.y-w.x*M.y);isFinite(B)&&(R.copy(x).multiplyScalar(w.y).addScaledVector(S,-M.y).multiplyScalar(B),v.copy(S).multiplyScalar(M.x).addScaledVector(x,-w.x).multiplyScalar(B),d[E].add(R),d[L].add(R),d[z].add(R),p[E].add(v),p[L].add(v),p[z].add(v))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let E=0,L=U.length;E<L;++E){const z=U[E],B=z.start,W=z.count;for(let ce=B,de=B+W;ce<de;ce+=3)_(e.getX(ce+0),e.getX(ce+1),e.getX(ce+2))}const F=new se,b=new se,I=new se,P=new se;function O(E){I.fromBufferAttribute(a,E),P.copy(I);const L=d[E];F.copy(L),F.sub(I.multiplyScalar(I.dot(L))).normalize(),b.crossVectors(P,L);const B=b.dot(p[E])<0?-1:1;u.setXYZW(E,F.x,F.y,F.z,B)}for(let E=0,L=U.length;E<L;++E){const z=U[E],B=z.start,W=z.count;for(let ce=B,de=B+W;ce<de;ce+=3)O(e.getX(ce+0)),O(e.getX(ce+1)),O(e.getX(ce+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==n.count)r=new oi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let g=0,M=r.count;g<M;g++)r.setXYZ(g,0,0,0);const a=new se,l=new se,u=new se,d=new se,p=new se,m=new se,x=new se,S=new se;if(e)for(let g=0,M=e.count;g<M;g+=3){const w=e.getX(g+0),R=e.getX(g+1),v=e.getX(g+2);a.fromBufferAttribute(n,w),l.fromBufferAttribute(n,R),u.fromBufferAttribute(n,v),x.subVectors(u,l),S.subVectors(a,l),x.cross(S),d.fromBufferAttribute(r,w),p.fromBufferAttribute(r,R),m.fromBufferAttribute(r,v),d.add(x),p.add(x),m.add(x),r.setXYZ(w,d.x,d.y,d.z),r.setXYZ(R,p.x,p.y,p.z),r.setXYZ(v,m.x,m.y,m.z)}else for(let g=0,M=n.count;g<M;g+=3)a.fromBufferAttribute(n,g+0),l.fromBufferAttribute(n,g+1),u.fromBufferAttribute(n,g+2),x.subVectors(u,l),S.subVectors(a,l),x.cross(S),r.setXYZ(g+0,x.x,x.y,x.z),r.setXYZ(g+1,x.x,x.y,x.z),r.setXYZ(g+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)pn.fromBufferAttribute(e,n),pn.normalize(),e.setXYZ(n,pn.x,pn.y,pn.z)}toNonIndexed(){function e(d,p){const m=d.array,x=d.itemSize,S=d.normalized,g=new m.constructor(p.length*x);let M=0,w=0;for(let R=0,v=p.length;R<v;R++){d.isInterleavedBufferAttribute?M=p[R]*d.data.stride+d.offset:M=p[R]*x;for(let _=0;_<x;_++)g[w++]=m[M++]}return new oi(g,x,S)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Si,r=this.index.array,a=this.attributes;for(const d in a){const p=a[d],m=e(p,r);n.setAttribute(d,m)}const l=this.morphAttributes;for(const d in l){const p=[],m=l[d];for(let x=0,S=m.length;x<S;x++){const g=m[x],M=e(g,r);p.push(M)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,p=u.length;d<p;d++){const m=u[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let l=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],x=[];for(let S=0,g=m.length;S<g;S++){const M=m[S];x.push(M.toJSON(e.data))}x.length>0&&(a[p]=x,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const m in a){const x=a[m];this.setAttribute(m,x.clone(n))}const l=e.morphAttributes;for(const m in l){const x=[],S=l[m];for(let g=0,M=S.length;g<M;g++)x.push(S[g].clone(n));this.morphAttributes[m]=x}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,x=u.length;m<x;m++){const S=u[m];this.addGroup(S.start,S.count,S.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Sx=0;class sa extends us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sx++}),this.uuid=ia(),this.name="",this.type="Material",this.blending=Zs,this.side=Dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mf,this.blendDst=Ef,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Us,this.stencilZFail=Us,this.stencilZPass=Us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){st(`Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){st(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector2&&r&&r.isVector2||a&&a.isEuler&&r&&r.isEuler||a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Zs&&(r.blending=this.blending),this.side!==Dr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Mf&&(r.blendSrc=this.blendSrc),this.blendDst!==Ef&&(r.blendDst=this.blendDst),this.blendEquation!==is&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Js&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Us&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Us&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Us&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const u=[];for(const d in l){const p=l[d];delete p.metadata,u.push(p)}return u}if(n){const l=a(e.textures),u=a(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new yt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Rt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Rt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ki=new se,lf=new se,Sl=new se,Cr=new se,cf=new se,yl=new se,uf=new se;class Ig{constructor(e=new se,n=new se(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ki.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,n),Ki.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){lf.copy(e).add(n).multiplyScalar(.5),Sl.copy(n).sub(e).normalize(),Cr.copy(this.origin).sub(lf);const l=e.distanceTo(n)*.5,u=-this.direction.dot(Sl),d=Cr.dot(this.direction),p=-Cr.dot(Sl),m=Cr.lengthSq(),x=Math.abs(1-u*u);let S,g,M,w;if(x>0)if(S=u*p-d,g=u*d-p,w=l*x,S>=0)if(g>=-w)if(g<=w){const R=1/x;S*=R,g*=R,M=S*(S+u*g+2*d)+g*(u*S+g+2*p)+m}else g=l,S=Math.max(0,-(u*g+d)),M=-S*S+g*(g+2*p)+m;else g=-l,S=Math.max(0,-(u*g+d)),M=-S*S+g*(g+2*p)+m;else g<=-w?(S=Math.max(0,-(-u*l+d)),g=S>0?-l:Math.min(Math.max(-l,-p),l),M=-S*S+g*(g+2*p)+m):g<=w?(S=0,g=Math.min(Math.max(-l,-p),l),M=g*(g+2*p)+m):(S=Math.max(0,-(u*l+d)),g=S>0?l:Math.min(Math.max(-l,-p),l),M=-S*S+g*(g+2*p)+m);else g=u>0?-l:l,S=Math.max(0,-(u*g+d)),M=-S*S+g*(g+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,S),a&&a.copy(lf).addScaledVector(Sl,g),M}intersectSphere(e,n){Ki.subVectors(e.center,this.origin);const r=Ki.dot(this.direction),a=Ki.dot(Ki)-r*r,l=e.radius*e.radius;if(a>l)return null;const u=Math.sqrt(l-a),d=r-u,p=r+u;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,l,u,d,p;const m=1/this.direction.x,x=1/this.direction.y,S=1/this.direction.z,g=this.origin;return m>=0?(r=(e.min.x-g.x)*m,a=(e.max.x-g.x)*m):(r=(e.max.x-g.x)*m,a=(e.min.x-g.x)*m),x>=0?(l=(e.min.y-g.y)*x,u=(e.max.y-g.y)*x):(l=(e.max.y-g.y)*x,u=(e.min.y-g.y)*x),r>u||l>a||((l>r||isNaN(r))&&(r=l),(u<a||isNaN(a))&&(a=u),S>=0?(d=(e.min.z-g.z)*S,p=(e.max.z-g.z)*S):(d=(e.max.z-g.z)*S,p=(e.min.z-g.z)*S),r>p||d>a)||((d>r||r!==r)&&(r=d),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,n,r,a,l){cf.subVectors(n,e),yl.subVectors(r,e),uf.crossVectors(cf,yl);let u=this.direction.dot(uf),d;if(u>0){if(a)return null;d=1}else if(u<0)d=-1,u=-u;else return null;Cr.subVectors(this.origin,e);const p=d*this.direction.dot(yl.crossVectors(Cr,yl));if(p<0)return null;const m=d*this.direction.dot(cf.cross(Cr));if(m<0||p+m>u)return null;const x=-d*Cr.dot(uf);return x<0?null:this.at(x/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ug extends sa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cs,this.combine=dg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wm=new tn,es=new Ig,Ml=new Ql,Am=new se,El=new se,Tl=new se,wl=new se,ff=new se,Al=new se,bm=new se,bl=new se;class ir extends Gn{constructor(e=new Si,n=new Ug){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(l&&d){Al.set(0,0,0);for(let p=0,m=l.length;p<m;p++){const x=d[p],S=l[p];x!==0&&(ff.fromBufferAttribute(S,e),u?Al.addScaledVector(ff,x):Al.addScaledVector(ff.sub(n),x))}n.add(Al)}return n}raycast(e,n){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ml.copy(r.boundingSphere),Ml.applyMatrix4(l),es.copy(e.ray).recast(e.near),!(Ml.containsPoint(es.origin)===!1&&(es.intersectSphere(Ml,Am)===null||es.origin.distanceToSquared(Am)>(e.far-e.near)**2))&&(wm.copy(l).invert(),es.copy(e.ray).applyMatrix4(wm),!(r.boundingBox!==null&&es.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,es)))}_computeIntersections(e,n,r){let a;const l=this.geometry,u=this.material,d=l.index,p=l.attributes.position,m=l.attributes.uv,x=l.attributes.uv1,S=l.attributes.normal,g=l.groups,M=l.drawRange;if(d!==null)if(Array.isArray(u))for(let w=0,R=g.length;w<R;w++){const v=g[w],_=u[v.materialIndex],U=Math.max(v.start,M.start),F=Math.min(d.count,Math.min(v.start+v.count,M.start+M.count));for(let b=U,I=F;b<I;b+=3){const P=d.getX(b),O=d.getX(b+1),E=d.getX(b+2);a=Rl(this,_,e,r,m,x,S,P,O,E),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=v.materialIndex,n.push(a))}}else{const w=Math.max(0,M.start),R=Math.min(d.count,M.start+M.count);for(let v=w,_=R;v<_;v+=3){const U=d.getX(v),F=d.getX(v+1),b=d.getX(v+2);a=Rl(this,u,e,r,m,x,S,U,F,b),a&&(a.faceIndex=Math.floor(v/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(u))for(let w=0,R=g.length;w<R;w++){const v=g[w],_=u[v.materialIndex],U=Math.max(v.start,M.start),F=Math.min(p.count,Math.min(v.start+v.count,M.start+M.count));for(let b=U,I=F;b<I;b+=3){const P=b,O=b+1,E=b+2;a=Rl(this,_,e,r,m,x,S,P,O,E),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=v.materialIndex,n.push(a))}}else{const w=Math.max(0,M.start),R=Math.min(p.count,M.start+M.count);for(let v=w,_=R;v<_;v+=3){const U=v,F=v+1,b=v+2;a=Rl(this,u,e,r,m,x,S,U,F,b),a&&(a.faceIndex=Math.floor(v/3),n.push(a))}}}}function yx(s,e,n,r,a,l,u,d){let p;if(e.side===Vn?p=r.intersectTriangle(u,l,a,!0,d):p=r.intersectTriangle(a,l,u,e.side===Dr,d),p===null)return null;bl.copy(d),bl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(bl);return m<n.near||m>n.far?null:{distance:m,point:bl.clone(),object:s}}function Rl(s,e,n,r,a,l,u,d,p,m){s.getVertexPosition(d,El),s.getVertexPosition(p,Tl),s.getVertexPosition(m,wl);const x=yx(s,e,n,r,El,Tl,wl,bm);if(x){const S=new se;_i.getBarycoord(bm,El,Tl,wl,S),a&&(x.uv=_i.getInterpolatedAttribute(a,d,p,m,S,new Rt)),l&&(x.uv1=_i.getInterpolatedAttribute(l,d,p,m,S,new Rt)),u&&(x.normal=_i.getInterpolatedAttribute(u,d,p,m,S,new se),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const g={a:d,b:p,c:m,normal:new se,materialIndex:0};_i.getNormal(El,Tl,wl,g.normal),x.face=g,x.barycoord=S}return x}class Mx extends Ln{constructor(e=null,n=1,r=1,a,l,u,d,p,m=_n,x=_n,S,g){super(null,u,d,p,m,x,a,l,S,g),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const df=new se,Ex=new se,Tx=new ct;class ns{constructor(e=new se(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=df.subVectors(r,n).cross(Ex.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,r=!0){const a=e.delta(df),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:n.copy(e.start).addScaledVector(a,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||Tx.getNormalMatrix(e),a=this.coplanarPoint(df).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ts=new Ql,wx=new Rt(.5,.5),Cl=new se;class Fg{constructor(e=new ns,n=new ns,r=new ns,a=new ns,l=new ns,u=new ns){this.planes=[e,n,r,a,l,u]}set(e,n,r,a,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(l),d[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Pi,r=!1){const a=this.planes,l=e.elements,u=l[0],d=l[1],p=l[2],m=l[3],x=l[4],S=l[5],g=l[6],M=l[7],w=l[8],R=l[9],v=l[10],_=l[11],U=l[12],F=l[13],b=l[14],I=l[15];if(a[0].setComponents(m-u,M-x,_-w,I-U).normalize(),a[1].setComponents(m+u,M+x,_+w,I+U).normalize(),a[2].setComponents(m+d,M+S,_+R,I+F).normalize(),a[3].setComponents(m-d,M-S,_-R,I-F).normalize(),r)a[4].setComponents(p,g,v,b).normalize(),a[5].setComponents(m-p,M-g,_-v,I-b).normalize();else if(a[4].setComponents(m-p,M-g,_-v,I-b).normalize(),n===Pi)a[5].setComponents(m+p,M+g,_+v,I+b).normalize();else if(n===$l)a[5].setComponents(p,g,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ts.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){ts.center.set(0,0,0);const n=wx.distanceTo(e.center);return ts.radius=.7071067811865476+n,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(Cl.x=a.normal.x>0?e.max.x:e.min.x,Cl.y=a.normal.y>0?e.max.y:e.min.y,Cl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Cl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Og extends sa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Rm=new tn,ud=new Ig,Pl=new Ql,Ll=new se;class Ax extends Gn{constructor(e=new Si,n=new Og){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Pl.copy(r.boundingSphere),Pl.applyMatrix4(a),Pl.radius+=l,e.ray.intersectsSphere(Pl)===!1)return;Rm.copy(a).invert(),ud.copy(e.ray).applyMatrix4(Rm);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=r.index,S=r.attributes.position;if(m!==null){const g=Math.max(0,u.start),M=Math.min(m.count,u.start+u.count);for(let w=g,R=M;w<R;w++){const v=m.getX(w);Ll.fromBufferAttribute(S,v),Cm(Ll,v,p,a,e,n,this)}}else{const g=Math.max(0,u.start),M=Math.min(S.count,u.start+u.count);for(let w=g,R=M;w<R;w++)Ll.fromBufferAttribute(S,w),Cm(Ll,w,p,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function Cm(s,e,n,r,a,l,u){const d=ud.distanceSqToPoint(s);if(d<n){const p=new se;ud.closestPointToPoint(s,p),p.applyMatrix4(r);const m=a.ray.origin.distanceTo(p);if(m<a.near||m>a.far)return;l.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class kg extends Ln{constructor(e=[],n=as,r,a,l,u,d,p,m,x){super(e,n,r,a,l,u,d,p,m,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class to extends Ln{constructor(e,n,r=Di,a,l,u,d=_n,p=_n,m,x=nr,S=1){if(x!==nr&&x!==os)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:n,depth:S};super(g,a,l,u,d,p,x,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class bx extends to{constructor(e,n=Di,r=as,a,l,u=_n,d=_n,p,m=nr){const x={width:e,height:e,depth:1},S=[x,x,x,x,x,x];super(e,e,n,r,a,l,u,d,p,m),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Bg extends Ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class oa extends Si{constructor(e=1,n=1,r=1,a=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:l,depthSegments:u};const d=this;a=Math.floor(a),l=Math.floor(l),u=Math.floor(u);const p=[],m=[],x=[],S=[];let g=0,M=0;w("z","y","x",-1,-1,r,n,e,u,l,0),w("z","y","x",1,-1,r,n,-e,u,l,1),w("x","z","y",1,1,e,r,n,a,u,2),w("x","z","y",1,-1,e,r,-n,a,u,3),w("x","y","z",1,-1,e,n,r,a,l,4),w("x","y","z",-1,-1,e,n,-r,a,l,5),this.setIndex(p),this.setAttribute("position",new er(m,3)),this.setAttribute("normal",new er(x,3)),this.setAttribute("uv",new er(S,2));function w(R,v,_,U,F,b,I,P,O,E,L){const z=b/O,B=I/E,W=b/2,ce=I/2,de=P/2,Z=O+1,le=E+1;let q=0,V=0;const Q=new se;for(let J=0;J<le;J++){const N=J*B-ce;for(let $=0;$<Z;$++){const we=$*z-W;Q[R]=we*U,Q[v]=N*F,Q[_]=de,m.push(Q.x,Q.y,Q.z),Q[R]=0,Q[v]=0,Q[_]=P>0?1:-1,x.push(Q.x,Q.y,Q.z),S.push($/O),S.push(1-J/E),q+=1}}for(let J=0;J<E;J++)for(let N=0;N<O;N++){const $=g+N+Z*J,we=g+N+Z*(J+1),Oe=g+(N+1)+Z*(J+1),Fe=g+(N+1)+Z*J;p.push($,we,Fe),p.push(we,Oe,Fe),V+=6}d.addGroup(M,V,L),M+=V,g+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Jl extends Si{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const l=e/2,u=n/2,d=Math.floor(r),p=Math.floor(a),m=d+1,x=p+1,S=e/d,g=n/p,M=[],w=[],R=[],v=[];for(let _=0;_<x;_++){const U=_*g-u;for(let F=0;F<m;F++){const b=F*S-l;w.push(b,-U,0),R.push(0,0,1),v.push(F/d),v.push(1-_/p)}}for(let _=0;_<p;_++)for(let U=0;U<d;U++){const F=U+m*_,b=U+m*(_+1),I=U+1+m*(_+1),P=U+1+m*_;M.push(F,b,P),M.push(b,I,P)}this.setIndex(M),this.setAttribute("position",new er(w,3)),this.setAttribute("normal",new er(R,3)),this.setAttribute("uv",new er(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jl(e.width,e.height,e.widthSegments,e.heightSegments)}}function no(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];if(Pm(a))a.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone();else if(Array.isArray(a))if(Pm(a[0])){const l=[];for(let u=0,d=a.length;u<d;u++)l[u]=a[u].clone();e[n][r]=l}else e[n][r]=a.slice();else e[n][r]=a}}return e}function Pn(s){const e={};for(let n=0;n<s.length;n++){const r=no(s[n]);for(const a in r)e[a]=r[a]}return e}function Pm(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Rx(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function zg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}const Cx={clone:no,merge:Pn};var Px=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends sa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Px,this.fragmentShader=Lx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=no(e.uniforms),this.uniformsGroups=Rx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?n.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[a]={type:"m4",value:u.toArray()}:n.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const r in e.uniforms){const a=e.uniforms[r];switch(this.uniforms[r]={},a.type){case"t":this.uniforms[r].value=n[a.value]||null;break;case"c":this.uniforms[r].value=new yt().setHex(a.value);break;case"v2":this.uniforms[r].value=new Rt().fromArray(a.value);break;case"v3":this.uniforms[r].value=new se().fromArray(a.value);break;case"v4":this.uniforms[r].value=new Jt().fromArray(a.value);break;case"m3":this.uniforms[r].value=new ct().fromArray(a.value);break;case"m4":this.uniforms[r].value=new tn().fromArray(a.value);break;default:this.uniforms[r].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Nx extends Ii{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Dx extends sa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=W_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ix extends sa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Nl=new se,Dl=new ro,Ai=new se;class Vg extends Gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=Pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Nl,Dl,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Nl,Dl,Ai.set(1,1,1)).invert()}updateWorldMatrix(e,n,r=!1){super.updateWorldMatrix(e,n,r),this.matrixWorld.decompose(Nl,Dl,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Nl,Dl,Ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Pr=new se,Lm=new Rt,Nm=new Rt;class ri extends Vg{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=cd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cd*2*Math.atan(Math.tan(Gu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z),Pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z)}getViewSize(e,n){return this.getViewBounds(e,Lm,Nm),n.subVectors(Nm,Lm)}setViewOffset(e,n,r,a,l,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Gu*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,l=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,m=u.fullHeight;l+=u.offsetX*a/p,n-=u.offsetY*r/m,a*=u.width/p,r*=u.height/m}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Gg extends Vg{constructor(e=-1,n=1,r=1,a=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,u=r+e,d=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,u=l+m*this.view.width,d-=x*this.view.offsetY,p=d-x*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ys=-90,qs=1;class Ux extends Gn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ri(Ys,qs,e,n);a.layers=this.layers,this.add(a);const l=new ri(Ys,qs,e,n);l.layers=this.layers,this.add(l);const u=new ri(Ys,qs,e,n);u.layers=this.layers,this.add(u);const d=new ri(Ys,qs,e,n);d.layers=this.layers,this.add(d);const p=new ri(Ys,qs,e,n);p.layers=this.layers,this.add(p);const m=new ri(Ys,qs,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,l,u,d,p]=n;for(const m of n)this.remove(m);if(e===Pi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===$l)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,p,m,x]=this.children,S=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(r,0,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(r,1,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(r,2,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(r,3,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),e.setRenderTarget(r,4,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,x),e.setRenderTarget(S,g,M),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class Fx extends ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Pd=class Pd{constructor(e,n,r,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let r=0;r<4;r++)this.elements[r]=e[r+n];return this}set(e,n,r,a){const l=this.elements;return l[0]=e,l[2]=n,l[1]=r,l[3]=a,this}};Pd.prototype.isMatrix2=!0;let Dm=Pd;function Im(s,e,n,r){const a=Ox(r);switch(n){case wg:return s*e;case bg:return s*e/a.components*a.byteLength;case Sd:return s*e/a.components*a.byteLength;case ls:return s*e*2/a.components*a.byteLength;case yd:return s*e*2/a.components*a.byteLength;case Ag:return s*e*3/a.components*a.byteLength;case xi:return s*e*4/a.components*a.byteLength;case Md:return s*e*4/a.components*a.byteLength;case Bl:case zl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Vl:case Gl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case If:case Ff:return Math.max(s,16)*Math.max(e,8)/4;case Df:case Uf:return Math.max(s,8)*Math.max(e,8)/2;case Of:case kf:case zf:case Vf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Bf:case Wl:case Gf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Hf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Wf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Xf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Yf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case qf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case $f:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Kf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Zf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case jf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Qf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Jf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ed:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case td:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case nd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case id:case rd:case sd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case od:case ad:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Xl:case ld:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Ox(s){switch(s){case si:case yg:return{byteLength:1,components:1};case ta:case Mg:case tr:return{byteLength:2,components:1};case _d:case xd:return{byteLength:2,components:4};case Di:case vd:case Ci:return{byteLength:4,components:1};case Eg:case Tg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gd}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Hg(){let s=null,e=!1,n=null,r=null;function a(l,u){n(l,u),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&s!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){s=l}}}function kx(s){const e=new WeakMap;function n(d,p){const m=d.array,x=d.usage,S=m.byteLength,g=s.createBuffer();s.bindBuffer(p,g),s.bufferData(p,m,x),d.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)M=s.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:g,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:S}}function r(d,p,m){const x=p.array,S=p.updateRanges;if(s.bindBuffer(m,d),S.length===0)s.bufferSubData(m,0,x);else{S.sort((M,w)=>M.start-w.start);let g=0;for(let M=1;M<S.length;M++){const w=S[g],R=S[M];R.start<=w.start+w.count+1?w.count=Math.max(w.count,R.start+R.count-w.start):(++g,S[g]=R)}S.length=g+1;for(let M=0,w=S.length;M<w;M++){const R=S[M];s.bufferSubData(m,R.start*x.BYTES_PER_ELEMENT,x,R.start,R.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function u(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=e.get(d);(!x||x.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:a,remove:l,update:u}}var Bx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Vx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,$x=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Qx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Jx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,eS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,tS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,sS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,oS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,aS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,lS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,uS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,fS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mS="gl_FragColor = linearToOutputTexel( gl_FragColor );",gS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,_S=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,xS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,SS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,MS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ES=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,TS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,AS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,RS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,CS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,PS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,LS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,NS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,DS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,IS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,US=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,FS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,OS=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,BS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,VS=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,GS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,HS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,YS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$S=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,KS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ZS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,QS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,JS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ey=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ty=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ny=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ry=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ay=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ly=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,cy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,py=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,my=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_y=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,My=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ey=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ty=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ay=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,by=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ry=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Cy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Py=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ly=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ny=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Iy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Oy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ky=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const By=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Yy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$y=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Ky=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,eM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,rM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,oM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,aM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,uM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,pM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_M=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dt={alphahash_fragment:Bx,alphahash_pars_fragment:zx,alphamap_fragment:Vx,alphamap_pars_fragment:Gx,alphatest_fragment:Hx,alphatest_pars_fragment:Wx,aomap_fragment:Xx,aomap_pars_fragment:Yx,batching_pars_vertex:qx,batching_vertex:$x,begin_vertex:Kx,beginnormal_vertex:Zx,bsdfs:jx,iridescence_fragment:Qx,bumpmap_pars_fragment:Jx,clipping_planes_fragment:eS,clipping_planes_pars_fragment:tS,clipping_planes_pars_vertex:nS,clipping_planes_vertex:iS,color_fragment:rS,color_pars_fragment:sS,color_pars_vertex:oS,color_vertex:aS,common:lS,cube_uv_reflection_fragment:cS,defaultnormal_vertex:uS,displacementmap_pars_vertex:fS,displacementmap_vertex:dS,emissivemap_fragment:hS,emissivemap_pars_fragment:pS,colorspace_fragment:mS,colorspace_pars_fragment:gS,envmap_fragment:vS,envmap_common_pars_fragment:_S,envmap_pars_fragment:xS,envmap_pars_vertex:SS,envmap_physical_pars_fragment:LS,envmap_vertex:yS,fog_vertex:MS,fog_pars_vertex:ES,fog_fragment:TS,fog_pars_fragment:wS,gradientmap_pars_fragment:AS,lightmap_pars_fragment:bS,lights_lambert_fragment:RS,lights_lambert_pars_fragment:CS,lights_pars_begin:PS,lights_toon_fragment:NS,lights_toon_pars_fragment:DS,lights_phong_fragment:IS,lights_phong_pars_fragment:US,lights_physical_fragment:FS,lights_physical_pars_fragment:OS,lights_fragment_begin:kS,lights_fragment_maps:BS,lights_fragment_end:zS,lightprobes_pars_fragment:VS,logdepthbuf_fragment:GS,logdepthbuf_pars_fragment:HS,logdepthbuf_pars_vertex:WS,logdepthbuf_vertex:XS,map_fragment:YS,map_pars_fragment:qS,map_particle_fragment:$S,map_particle_pars_fragment:KS,metalnessmap_fragment:ZS,metalnessmap_pars_fragment:jS,morphinstance_vertex:QS,morphcolor_vertex:JS,morphnormal_vertex:ey,morphtarget_pars_vertex:ty,morphtarget_vertex:ny,normal_fragment_begin:iy,normal_fragment_maps:ry,normal_pars_fragment:sy,normal_pars_vertex:oy,normal_vertex:ay,normalmap_pars_fragment:ly,clearcoat_normal_fragment_begin:cy,clearcoat_normal_fragment_maps:uy,clearcoat_pars_fragment:fy,iridescence_pars_fragment:dy,opaque_fragment:hy,packing:py,premultiplied_alpha_fragment:my,project_vertex:gy,dithering_fragment:vy,dithering_pars_fragment:_y,roughnessmap_fragment:xy,roughnessmap_pars_fragment:Sy,shadowmap_pars_fragment:yy,shadowmap_pars_vertex:My,shadowmap_vertex:Ey,shadowmask_pars_fragment:Ty,skinbase_vertex:wy,skinning_pars_vertex:Ay,skinning_vertex:by,skinnormal_vertex:Ry,specularmap_fragment:Cy,specularmap_pars_fragment:Py,tonemapping_fragment:Ly,tonemapping_pars_fragment:Ny,transmission_fragment:Dy,transmission_pars_fragment:Iy,uv_pars_fragment:Uy,uv_pars_vertex:Fy,uv_vertex:Oy,worldpos_vertex:ky,background_vert:By,background_frag:zy,backgroundCube_vert:Vy,backgroundCube_frag:Gy,cube_vert:Hy,cube_frag:Wy,depth_vert:Xy,depth_frag:Yy,distance_vert:qy,distance_frag:$y,equirect_vert:Ky,equirect_frag:Zy,linedashed_vert:jy,linedashed_frag:Qy,meshbasic_vert:Jy,meshbasic_frag:eM,meshlambert_vert:tM,meshlambert_frag:nM,meshmatcap_vert:iM,meshmatcap_frag:rM,meshnormal_vert:sM,meshnormal_frag:oM,meshphong_vert:aM,meshphong_frag:lM,meshphysical_vert:cM,meshphysical_frag:uM,meshtoon_vert:fM,meshtoon_frag:dM,points_vert:hM,points_frag:pM,shadow_vert:mM,shadow_frag:gM,sprite_vert:vM,sprite_frag:_M},Ie={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new se},probesMax:{value:new se},probesResolution:{value:new se}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Ri={basic:{uniforms:Pn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Pn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new yt(0)},envMapIntensity:{value:1}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Pn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Pn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Pn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new yt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Pn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Pn([Ie.points,Ie.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Pn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Pn([Ie.common,Ie.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Pn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Pn([Ie.sprite,Ie.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:Pn([Ie.common,Ie.displacementmap,{referencePosition:{value:new se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:Pn([Ie.lights,Ie.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Ri.physical={uniforms:Pn([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Il={r:0,b:0,g:0},xM=new tn,Wg=new ct;Wg.set(-1,0,0,0,1,0,0,0,1);function SM(s,e,n,r,a,l){const u=new yt(0);let d=a===!0?0:1,p,m,x=null,S=0,g=null;function M(U){let F=U.isScene===!0?U.background:null;if(F&&F.isTexture){const b=U.backgroundBlurriness>0;F=e.get(F,b)}return F}function w(U){let F=!1;const b=M(U);b===null?v(u,d):b&&b.isColor&&(v(b,1),F=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,l):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(s.autoClear||F)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function R(U,F){const b=M(F);b&&(b.isCubeTexture||b.mapping===jl)?(m===void 0&&(m=new ir(new oa(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:no(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(I,P,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=b,m.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(xM.makeRotationFromEuler(F.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(Wg),m.material.toneMapped=xt.getTransfer(b.colorSpace)!==Dt,(x!==b||S!==b.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,x=b,S=b.version,g=s.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null)):b&&b.isTexture&&(p===void 0&&(p=new ir(new Jl(2,2),new Ii({name:"BackgroundMaterial",uniforms:no(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:Dr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=b,p.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,p.material.toneMapped=xt.getTransfer(b.colorSpace)!==Dt,b.matrixAutoUpdate===!0&&b.updateMatrix(),p.material.uniforms.uvTransform.value.copy(b.matrix),(x!==b||S!==b.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,x=b,S=b.version,g=s.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function v(U,F){U.getRGB(Il,zg(s)),n.buffers.color.setClear(Il.r,Il.g,Il.b,F,l)}function _(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return u},setClearColor:function(U,F=1){u.set(U),d=F,v(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(U){d=U,v(u,d)},render:w,addToRenderList:R,dispose:_}}function yM(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=g(null);let l=a,u=!1;function d(B,W,ce,de,Z){let le=!1;const q=S(B,de,ce,W);l!==q&&(l=q,m(l.object)),le=M(B,de,ce,Z),le&&w(B,de,ce,Z),Z!==null&&e.update(Z,s.ELEMENT_ARRAY_BUFFER),(le||u)&&(u=!1,b(B,W,ce,de),Z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function p(){return s.createVertexArray()}function m(B){return s.bindVertexArray(B)}function x(B){return s.deleteVertexArray(B)}function S(B,W,ce,de){const Z=de.wireframe===!0;let le=r[W.id];le===void 0&&(le={},r[W.id]=le);const q=B.isInstancedMesh===!0?B.id:0;let V=le[q];V===void 0&&(V={},le[q]=V);let Q=V[ce.id];Q===void 0&&(Q={},V[ce.id]=Q);let J=Q[Z];return J===void 0&&(J=g(p()),Q[Z]=J),J}function g(B){const W=[],ce=[],de=[];for(let Z=0;Z<n;Z++)W[Z]=0,ce[Z]=0,de[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:ce,attributeDivisors:de,object:B,attributes:{},index:null}}function M(B,W,ce,de){const Z=l.attributes,le=W.attributes;let q=0;const V=ce.getAttributes();for(const Q in V)if(V[Q].location>=0){const N=Z[Q];let $=le[Q];if($===void 0&&(Q==="instanceMatrix"&&B.instanceMatrix&&($=B.instanceMatrix),Q==="instanceColor"&&B.instanceColor&&($=B.instanceColor)),N===void 0||N.attribute!==$||$&&N.data!==$.data)return!0;q++}return l.attributesNum!==q||l.index!==de}function w(B,W,ce,de){const Z={},le=W.attributes;let q=0;const V=ce.getAttributes();for(const Q in V)if(V[Q].location>=0){let N=le[Q];N===void 0&&(Q==="instanceMatrix"&&B.instanceMatrix&&(N=B.instanceMatrix),Q==="instanceColor"&&B.instanceColor&&(N=B.instanceColor));const $={};$.attribute=N,N&&N.data&&($.data=N.data),Z[Q]=$,q++}l.attributes=Z,l.attributesNum=q,l.index=de}function R(){const B=l.newAttributes;for(let W=0,ce=B.length;W<ce;W++)B[W]=0}function v(B){_(B,0)}function _(B,W){const ce=l.newAttributes,de=l.enabledAttributes,Z=l.attributeDivisors;ce[B]=1,de[B]===0&&(s.enableVertexAttribArray(B),de[B]=1),Z[B]!==W&&(s.vertexAttribDivisor(B,W),Z[B]=W)}function U(){const B=l.newAttributes,W=l.enabledAttributes;for(let ce=0,de=W.length;ce<de;ce++)W[ce]!==B[ce]&&(s.disableVertexAttribArray(ce),W[ce]=0)}function F(B,W,ce,de,Z,le,q){q===!0?s.vertexAttribIPointer(B,W,ce,Z,le):s.vertexAttribPointer(B,W,ce,de,Z,le)}function b(B,W,ce,de){R();const Z=de.attributes,le=ce.getAttributes(),q=W.defaultAttributeValues;for(const V in le){const Q=le[V];if(Q.location>=0){let J=Z[V];if(J===void 0&&(V==="instanceMatrix"&&B.instanceMatrix&&(J=B.instanceMatrix),V==="instanceColor"&&B.instanceColor&&(J=B.instanceColor)),J!==void 0){const N=J.normalized,$=J.itemSize,we=e.get(J);if(we===void 0)continue;const Oe=we.buffer,Fe=we.type,ie=we.bytesPerElement,ve=Fe===s.INT||Fe===s.UNSIGNED_INT||J.gpuType===vd;if(J.isInterleavedBufferAttribute){const he=J.data,Ue=he.stride,Ze=J.offset;if(he.isInstancedInterleavedBuffer){for(let Qe=0;Qe<Q.locationSize;Qe++)_(Q.location+Qe,he.meshPerAttribute);B.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Qe=0;Qe<Q.locationSize;Qe++)v(Q.location+Qe);s.bindBuffer(s.ARRAY_BUFFER,Oe);for(let Qe=0;Qe<Q.locationSize;Qe++)F(Q.location+Qe,$/Q.locationSize,Fe,N,Ue*ie,(Ze+$/Q.locationSize*Qe)*ie,ve)}else{if(J.isInstancedBufferAttribute){for(let he=0;he<Q.locationSize;he++)_(Q.location+he,J.meshPerAttribute);B.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let he=0;he<Q.locationSize;he++)v(Q.location+he);s.bindBuffer(s.ARRAY_BUFFER,Oe);for(let he=0;he<Q.locationSize;he++)F(Q.location+he,$/Q.locationSize,Fe,N,$*ie,$/Q.locationSize*he*ie,ve)}}else if(q!==void 0){const N=q[V];if(N!==void 0)switch(N.length){case 2:s.vertexAttrib2fv(Q.location,N);break;case 3:s.vertexAttrib3fv(Q.location,N);break;case 4:s.vertexAttrib4fv(Q.location,N);break;default:s.vertexAttrib1fv(Q.location,N)}}}}U()}function I(){L();for(const B in r){const W=r[B];for(const ce in W){const de=W[ce];for(const Z in de){const le=de[Z];for(const q in le)x(le[q].object),delete le[q];delete de[Z]}}delete r[B]}}function P(B){if(r[B.id]===void 0)return;const W=r[B.id];for(const ce in W){const de=W[ce];for(const Z in de){const le=de[Z];for(const q in le)x(le[q].object),delete le[q];delete de[Z]}}delete r[B.id]}function O(B){for(const W in r){const ce=r[W];for(const de in ce){const Z=ce[de];if(Z[B.id]===void 0)continue;const le=Z[B.id];for(const q in le)x(le[q].object),delete le[q];delete Z[B.id]}}}function E(B){for(const W in r){const ce=r[W],de=B.isInstancedMesh===!0?B.id:0,Z=ce[de];if(Z!==void 0){for(const le in Z){const q=Z[le];for(const V in q)x(q[V].object),delete q[V];delete Z[le]}delete ce[de],Object.keys(ce).length===0&&delete r[W]}}}function L(){z(),u=!0,l!==a&&(l=a,m(l.object))}function z(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:L,resetDefaultState:z,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfObject:E,releaseStatesOfProgram:O,initAttributes:R,enableAttribute:v,disableUnusedAttributes:U}}function MM(s,e,n){let r;function a(p){r=p}function l(p,m){s.drawArrays(r,p,m),n.update(m,r,1)}function u(p,m,x){x!==0&&(s.drawArraysInstanced(r,p,m,x),n.update(m,r,x))}function d(p,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,m,0,x);let g=0;for(let M=0;M<x;M++)g+=m[M];n.update(g,r,1)}this.setMode=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=d}function EM(s,e,n,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(O){return!(O!==xi&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const E=O===tr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==si&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Ci&&!E)}function p(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const x=p(m);x!==m&&(st("WebGLRenderer:",m,"not supported, using",x,"instead."),m=x);const S=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&g===!1&&st("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),U=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),F=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=s.getParameter(s.MAX_SAMPLES),P=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:S,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:w,maxTextureSize:R,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:U,maxVaryings:F,maxFragmentUniforms:b,maxSamples:I,samples:P}}function TM(s){const e=this;let n=null,r=0,a=!1,l=!1;const u=new ns,d=new ct,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(S,g){const M=S.length!==0||g||r!==0||a;return a=g,r=S.length,M},this.beginShadows=function(){l=!0,x(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(S,g){n=x(S,g,0)},this.setState=function(S,g,M){const w=S.clippingPlanes,R=S.clipIntersection,v=S.clipShadows,_=s.get(S);if(!a||w===null||w.length===0||l&&!v)l?x(null):m();else{const U=l?0:r,F=U*4;let b=_.clippingState||null;p.value=b,b=x(w,g,F,M);for(let I=0;I!==F;++I)b[I]=n[I];_.clippingState=b,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=U}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(S,g,M,w){const R=S!==null?S.length:0;let v=null;if(R!==0){if(v=p.value,w!==!0||v===null){const _=M+R*4,U=g.matrixWorldInverse;d.getNormalMatrix(U),(v===null||v.length<_)&&(v=new Float32Array(_));for(let F=0,b=M;F!==R;++F,b+=4)u.copy(S[F]).applyMatrix4(U,d),u.normal.toArray(v,b),v[b+3]=u.constant}p.value=v,p.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,v}}const Nr=4,Um=[.125,.215,.35,.446,.526,.582],rs=20,wM=256,Zo=new Gg,Fm=new yt;let hf=null,pf=0,mf=0,gf=!1;const AM=new se;class Om{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,a=100,l={}){const{size:u=256,position:d=AM}=l;hf=this._renderer.getRenderTarget(),pf=this._renderer.getActiveCubeFace(),mf=this._renderer.getActiveMipmapLevel(),gf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,a,p,d),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(hf,pf,mf),this._renderer.xr.enabled=gf,e.scissorTest=!1,$s(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===as||e.mapping===eo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hf=this._renderer.getRenderTarget(),pf=this._renderer.getActiveCubeFace(),mf=this._renderer.getActiveMipmapLevel(),gf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:An,minFilter:An,generateMipmaps:!1,type:tr,format:xi,colorSpace:Yl,depthBuffer:!1},a=km(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=km(e,n,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=bM(l)),this._blurMaterial=CM(l,e,n),this._ggxMaterial=RM(l,e,n)}return a}_compileMaterial(e){const n=new ir(new Si,e);this._renderer.compile(n,Zo)}_sceneToCubeUV(e,n,r,a,l){const p=new ri(90,1,n,r),m=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],S=this._renderer,g=S.autoClear,M=S.toneMapping;S.getClearColor(Fm),S.toneMapping=Li,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(a),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ir(new oa,new Ug({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,v=R.material;let _=!1;const U=e.background;U?U.isColor&&(v.color.copy(U),e.background=null,_=!0):(v.color.copy(Fm),_=!0);for(let F=0;F<6;F++){const b=F%3;b===0?(p.up.set(0,m[F],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+x[F],l.y,l.z)):b===1?(p.up.set(0,0,m[F]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+x[F],l.z)):(p.up.set(0,m[F],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+x[F]));const I=this._cubeSize;$s(a,b*I,F>2?I:0,I,I),S.setRenderTarget(a),_&&S.render(R,p),S.render(e,p)}S.toneMapping=M,S.autoClear=g,e.background=U}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===as||e.mapping===eo;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=zm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bm());const l=a?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const d=l.uniforms;d.envMap.value=e;const p=this._cubeSize;$s(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(u,Zo)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodMeshes.length;for(let l=1;l<a;l++)this._applyGGXFilter(e,l-1,l);n.autoClear=r}_applyGGXFilter(e,n,r){const a=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[r];d.material=u;const p=u.uniforms,m=r/(this._lodMeshes.length-1),x=n/(this._lodMeshes.length-1),S=Math.sqrt(m*m-x*x),g=0+m*1.25,M=S*g,{_lodMax:w}=this,R=this._sizeLods[r],v=3*R*(r>w-Nr?r-w+Nr:0),_=4*(this._cubeSize-R);p.envMap.value=e.texture,p.roughness.value=M,p.mipInt.value=w-n,$s(l,v,_,3*R,2*R),a.setRenderTarget(l),a.render(d,Zo),p.envMap.value=l.texture,p.roughness.value=0,p.mipInt.value=w-r,$s(e,v,_,3*R,2*R),a.setRenderTarget(e),a.render(d,Zo)}_blur(e,n,r,a,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,a,"latitudinal",l),this._halfBlur(u,e,r,r,a,"longitudinal",l)}_halfBlur(e,n,r,a,l,u,d){const p=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Tt("blur direction must be either latitudinal or longitudinal!");const x=3,S=this._lodMeshes[a];S.material=m;const g=m.uniforms,M=this._sizeLods[r]-1,w=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*rs-1),R=l/w,v=isFinite(l)?1+Math.floor(x*R):rs;v>rs&&st(`sigmaRadians, ${l}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${rs}`);const _=[];let U=0;for(let O=0;O<rs;++O){const E=O/R,L=Math.exp(-E*E/2);_.push(L),O===0?U+=L:O<v&&(U+=2*L)}for(let O=0;O<_.length;O++)_[O]=_[O]/U;g.envMap.value=e.texture,g.samples.value=v,g.weights.value=_,g.latitudinal.value=u==="latitudinal",d&&(g.poleAxis.value=d);const{_lodMax:F}=this;g.dTheta.value=w,g.mipInt.value=F-r;const b=this._sizeLods[a],I=3*b*(a>F-Nr?a-F+Nr:0),P=4*(this._cubeSize-b);$s(n,I,P,3*b,2*b),p.setRenderTarget(n),p.render(S,Zo)}}function bM(s){const e=[],n=[],r=[];let a=s;const l=s-Nr+1+Um.length;for(let u=0;u<l;u++){const d=Math.pow(2,a);e.push(d);let p=1/d;u>s-Nr?p=Um[u-s+Nr-1]:u===0&&(p=0),n.push(p);const m=1/(d-2),x=-m,S=1+m,g=[x,x,S,x,S,S,x,x,S,S,x,S],M=6,w=6,R=3,v=2,_=1,U=new Float32Array(R*w*M),F=new Float32Array(v*w*M),b=new Float32Array(_*w*M);for(let P=0;P<M;P++){const O=P%3*2/3-1,E=P>2?0:-1,L=[O,E,0,O+2/3,E,0,O+2/3,E+1,0,O,E,0,O+2/3,E+1,0,O,E+1,0];U.set(L,R*w*P),F.set(g,v*w*P);const z=[P,P,P,P,P,P];b.set(z,_*w*P)}const I=new Si;I.setAttribute("position",new oi(U,R)),I.setAttribute("uv",new oi(F,v)),I.setAttribute("faceIndex",new oi(b,_)),r.push(new ir(I,null)),a>Nr&&a--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function km(s,e,n){const r=new Ni(s,e,n);return r.texture.mapping=jl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function $s(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function RM(s,e,n){return new Ii({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:wM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ec(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function CM(s,e,n){const r=new Float32Array(rs),a=new se(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Bm(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function zm(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function ec(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Xg extends Ni{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new kg(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new oa(5,5,5),l=new Ii({name:"CubemapFromEquirect",uniforms:no(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Vn,blending:Qi});l.uniforms.tEquirect.value=n;const u=new ir(a,l),d=n.minFilter;return n.minFilter===ss&&(n.minFilter=An),new Ux(1,10,this).update(e,u),n.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,r=!0,a=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,a);e.setRenderTarget(l)}}function PM(s){let e=new WeakMap,n=new WeakMap,r=null;function a(g,M=!1){return g==null?null:M?u(g):l(g)}function l(g){if(g&&g.isTexture){const M=g.mapping;if(M===Bu||M===zu)if(e.has(g)){const w=e.get(g).texture;return d(w,g.mapping)}else{const w=g.image;if(w&&w.height>0){const R=new Xg(w.height);return R.fromEquirectangularTexture(s,g),e.set(g,R),g.addEventListener("dispose",m),d(R.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const M=g.mapping,w=M===Bu||M===zu,R=M===as||M===eo;if(w||R){let v=n.get(g);const _=v!==void 0?v.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==_)return r===null&&(r=new Om(s)),v=w?r.fromEquirectangular(g,v):r.fromCubemap(g,v),v.texture.pmremVersion=g.pmremVersion,n.set(g,v),v.texture;if(v!==void 0)return v.texture;{const U=g.image;return w&&U&&U.height>0||R&&U&&p(U)?(r===null&&(r=new Om(s)),v=w?r.fromEquirectangular(g):r.fromCubemap(g),v.texture.pmremVersion=g.pmremVersion,n.set(g,v),g.addEventListener("dispose",x),v.texture):null}}}return g}function d(g,M){return M===Bu?g.mapping=as:M===zu&&(g.mapping=eo),g}function p(g){let M=0;const w=6;for(let R=0;R<w;R++)g[R]!==void 0&&M++;return M===w}function m(g){const M=g.target;M.removeEventListener("dispose",m);const w=e.get(M);w!==void 0&&(e.delete(M),w.dispose())}function x(g){const M=g.target;M.removeEventListener("dispose",x);const w=n.get(M);w!==void 0&&(n.delete(M),w.dispose())}function S(){e=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:S}}function LM(s){const e={};function n(r){if(e[r]!==void 0)return e[r];const a=s.getExtension(r);return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&js("WebGLRenderer: "+r+" extension not supported."),a}}}function NM(s,e,n,r){const a={},l=new WeakMap;function u(S){const g=S.target;g.index!==null&&e.remove(g.index);for(const w in g.attributes)e.remove(g.attributes[w]);g.removeEventListener("dispose",u),delete a[g.id];const M=l.get(g);M&&(e.remove(M),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function d(S,g){return a[g.id]===!0||(g.addEventListener("dispose",u),a[g.id]=!0,n.memory.geometries++),g}function p(S){const g=S.attributes;for(const M in g)e.update(g[M],s.ARRAY_BUFFER)}function m(S){const g=[],M=S.index,w=S.attributes.position;let R=0;if(w===void 0)return;if(M!==null){const U=M.array;R=M.version;for(let F=0,b=U.length;F<b;F+=3){const I=U[F+0],P=U[F+1],O=U[F+2];g.push(I,P,P,O,O,I)}}else{const U=w.array;R=w.version;for(let F=0,b=U.length/3-1;F<b;F+=3){const I=F+0,P=F+1,O=F+2;g.push(I,P,P,O,O,I)}}const v=new(w.count>=65535?Dg:Ng)(g,1);v.version=R;const _=l.get(S);_&&e.remove(_),l.set(S,v)}function x(S){const g=l.get(S);if(g){const M=S.index;M!==null&&g.version<M.version&&m(S)}else m(S);return l.get(S)}return{get:d,update:p,getWireframeAttribute:x}}function DM(s,e,n){let r;function a(S){r=S}let l,u;function d(S){l=S.type,u=S.bytesPerElement}function p(S,g){s.drawElements(r,g,l,S*u),n.update(g,r,1)}function m(S,g,M){M!==0&&(s.drawElementsInstanced(r,g,l,S*u,M),n.update(g,r,M))}function x(S,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,l,S,0,M);let R=0;for(let v=0;v<M;v++)R+=g[v];n.update(R,r,1)}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=x}function IM(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,d){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=d*(l/3);break;case s.LINES:n.lines+=d*(l/2);break;case s.LINE_STRIP:n.lines+=d*(l-1);break;case s.LINE_LOOP:n.lines+=d*l;break;case s.POINTS:n.points+=d*l;break;default:Tt("WebGLInfo: Unknown draw mode:",u);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function UM(s,e,n){const r=new WeakMap,a=new Jt;function l(u,d,p){const m=u.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,S=x!==void 0?x.length:0;let g=r.get(d);if(g===void 0||g.count!==S){let z=function(){E.dispose(),r.delete(d),d.removeEventListener("dispose",z)};var M=z;g!==void 0&&g.texture.dispose();const w=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,v=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],U=d.morphAttributes.normal||[],F=d.morphAttributes.color||[];let b=0;w===!0&&(b=1),R===!0&&(b=2),v===!0&&(b=3);let I=d.attributes.position.count*b,P=1;I>e.maxTextureSize&&(P=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const O=new Float32Array(I*P*4*S),E=new Cg(O,I,P,S);E.type=Ci,E.needsUpdate=!0;const L=b*4;for(let B=0;B<S;B++){const W=_[B],ce=U[B],de=F[B],Z=I*P*4*B;for(let le=0;le<W.count;le++){const q=le*L;w===!0&&(a.fromBufferAttribute(W,le),O[Z+q+0]=a.x,O[Z+q+1]=a.y,O[Z+q+2]=a.z,O[Z+q+3]=0),R===!0&&(a.fromBufferAttribute(ce,le),O[Z+q+4]=a.x,O[Z+q+5]=a.y,O[Z+q+6]=a.z,O[Z+q+7]=0),v===!0&&(a.fromBufferAttribute(de,le),O[Z+q+8]=a.x,O[Z+q+9]=a.y,O[Z+q+10]=a.z,O[Z+q+11]=de.itemSize===4?a.w:1)}}g={count:S,texture:E,size:new Rt(I,P)},r.set(d,g),d.addEventListener("dispose",z)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let w=0;for(let v=0;v<m.length;v++)w+=m[v];const R=d.morphTargetsRelative?1:1-w;p.getUniforms().setValue(s,"morphTargetBaseInfluence",R),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",g.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function FM(s,e,n,r,a){let l=new WeakMap;function u(m){const x=a.render.frame,S=m.geometry,g=e.get(m,S);if(l.get(g)!==x&&(e.update(g),l.set(g,x)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),l.get(m)!==x&&(n.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,x))),m.isSkinnedMesh){const M=m.skeleton;l.get(M)!==x&&(M.update(),l.set(M,x))}return g}function d(){l=new WeakMap}function p(m){const x=m.target;x.removeEventListener("dispose",p),r.releaseStatesOfObject(x),n.remove(x.instanceMatrix),x.instanceColor!==null&&n.remove(x.instanceColor)}return{update:u,dispose:d}}const OM={[hg]:"LINEAR_TONE_MAPPING",[pg]:"REINHARD_TONE_MAPPING",[mg]:"CINEON_TONE_MAPPING",[gg]:"ACES_FILMIC_TONE_MAPPING",[_g]:"AGX_TONE_MAPPING",[xg]:"NEUTRAL_TONE_MAPPING",[vg]:"CUSTOM_TONE_MAPPING"};function kM(s,e,n,r,a,l){const u=new Ni(e,n,{type:s,depthBuffer:a,stencilBuffer:l,samples:r?4:0,depthTexture:a?new to(e,n):void 0}),d=new Ni(e,n,{type:tr,depthBuffer:!1,stencilBuffer:!1}),p=new Si;p.setAttribute("position",new er([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new er([0,2,0,0,2,0],2));const m=new Nx({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),x=new ir(p,m),S=new Gg(-1,1,1,-1,0,1);let g=null,M=null,w=!1,R,v=null,_=[],U=!1;this.setSize=function(F,b){u.setSize(F,b),d.setSize(F,b);for(let I=0;I<_.length;I++){const P=_[I];P.setSize&&P.setSize(F,b)}},this.setEffects=function(F){_=F,U=_.length>0&&_[0].isRenderPass===!0;const b=u.width,I=u.height;for(let P=0;P<_.length;P++){const O=_[P];O.setSize&&O.setSize(b,I)}},this.begin=function(F,b){if(w||F.toneMapping===Li&&_.length===0)return!1;if(v=b,b!==null){const I=b.width,P=b.height;(u.width!==I||u.height!==P)&&this.setSize(I,P)}return U===!1&&F.setRenderTarget(u),R=F.toneMapping,F.toneMapping=Li,!0},this.hasRenderPass=function(){return U},this.end=function(F,b){F.toneMapping=R,w=!0;let I=u,P=d;for(let O=0;O<_.length;O++){const E=_[O];if(E.enabled!==!1&&(E.render(F,P,I,b),E.needsSwap!==!1)){const L=I;I=P,P=L}}if(g!==F.outputColorSpace||M!==F.toneMapping){g=F.outputColorSpace,M=F.toneMapping,m.defines={},xt.getTransfer(g)===Dt&&(m.defines.SRGB_TRANSFER="");const O=OM[M];O&&(m.defines[O]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=I.texture,F.setRenderTarget(v),F.render(x,S),v=null,w=!1},this.isCompositing=function(){return w},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),d.dispose(),p.dispose(),m.dispose()}}const Yg=new Ln,fd=new to(1,1),qg=new Cg,$g=new lx,Kg=new kg,Vm=[],Gm=[],Hm=new Float32Array(16),Wm=new Float32Array(9),Xm=new Float32Array(4);function so(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let l=Vm[a];if(l===void 0&&(l=new Float32Array(a),Vm[a]=l),e!==0){r.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=n,s[u].toArray(l,d)}return l}function cn(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function un(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function tc(s,e){let n=Gm[e];n===void 0&&(n=new Int32Array(e),Gm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function BM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function zM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(cn(n,e))return;s.uniform2fv(this.addr,e),un(n,e)}}function VM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(cn(n,e))return;s.uniform3fv(this.addr,e),un(n,e)}}function GM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(cn(n,e))return;s.uniform4fv(this.addr,e),un(n,e)}}function HM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(cn(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),un(n,e)}else{if(cn(n,r))return;Xm.set(r),s.uniformMatrix2fv(this.addr,!1,Xm),un(n,r)}}function WM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(cn(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),un(n,e)}else{if(cn(n,r))return;Wm.set(r),s.uniformMatrix3fv(this.addr,!1,Wm),un(n,r)}}function XM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(cn(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),un(n,e)}else{if(cn(n,r))return;Hm.set(r),s.uniformMatrix4fv(this.addr,!1,Hm),un(n,r)}}function YM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function qM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(cn(n,e))return;s.uniform2iv(this.addr,e),un(n,e)}}function $M(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(cn(n,e))return;s.uniform3iv(this.addr,e),un(n,e)}}function KM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(cn(n,e))return;s.uniform4iv(this.addr,e),un(n,e)}}function ZM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function jM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(cn(n,e))return;s.uniform2uiv(this.addr,e),un(n,e)}}function QM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(cn(n,e))return;s.uniform3uiv(this.addr,e),un(n,e)}}function JM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(cn(n,e))return;s.uniform4uiv(this.addr,e),un(n,e)}}function eE(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(fd.compareFunction=n.isReversedDepthBuffer()?Td:Ed,l=fd):l=Yg,n.setTexture2D(e||l,a)}function tE(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||$g,a)}function nE(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||Kg,a)}function iE(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||qg,a)}function rE(s){switch(s){case 5126:return BM;case 35664:return zM;case 35665:return VM;case 35666:return GM;case 35674:return HM;case 35675:return WM;case 35676:return XM;case 5124:case 35670:return YM;case 35667:case 35671:return qM;case 35668:case 35672:return $M;case 35669:case 35673:return KM;case 5125:return ZM;case 36294:return jM;case 36295:return QM;case 36296:return JM;case 35678:case 36198:case 36298:case 36306:case 35682:return eE;case 35679:case 36299:case 36307:return tE;case 35680:case 36300:case 36308:case 36293:return nE;case 36289:case 36303:case 36311:case 36292:return iE}}function sE(s,e){s.uniform1fv(this.addr,e)}function oE(s,e){const n=so(e,this.size,2);s.uniform2fv(this.addr,n)}function aE(s,e){const n=so(e,this.size,3);s.uniform3fv(this.addr,n)}function lE(s,e){const n=so(e,this.size,4);s.uniform4fv(this.addr,n)}function cE(s,e){const n=so(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function uE(s,e){const n=so(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function fE(s,e){const n=so(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function dE(s,e){s.uniform1iv(this.addr,e)}function hE(s,e){s.uniform2iv(this.addr,e)}function pE(s,e){s.uniform3iv(this.addr,e)}function mE(s,e){s.uniform4iv(this.addr,e)}function gE(s,e){s.uniform1uiv(this.addr,e)}function vE(s,e){s.uniform2uiv(this.addr,e)}function _E(s,e){s.uniform3uiv(this.addr,e)}function xE(s,e){s.uniform4uiv(this.addr,e)}function SE(s,e,n){const r=this.cache,a=e.length,l=tc(n,a);cn(r,l)||(s.uniform1iv(this.addr,l),un(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=fd:u=Yg;for(let d=0;d!==a;++d)n.setTexture2D(e[d]||u,l[d])}function yE(s,e,n){const r=this.cache,a=e.length,l=tc(n,a);cn(r,l)||(s.uniform1iv(this.addr,l),un(r,l));for(let u=0;u!==a;++u)n.setTexture3D(e[u]||$g,l[u])}function ME(s,e,n){const r=this.cache,a=e.length,l=tc(n,a);cn(r,l)||(s.uniform1iv(this.addr,l),un(r,l));for(let u=0;u!==a;++u)n.setTextureCube(e[u]||Kg,l[u])}function EE(s,e,n){const r=this.cache,a=e.length,l=tc(n,a);cn(r,l)||(s.uniform1iv(this.addr,l),un(r,l));for(let u=0;u!==a;++u)n.setTexture2DArray(e[u]||qg,l[u])}function TE(s){switch(s){case 5126:return sE;case 35664:return oE;case 35665:return aE;case 35666:return lE;case 35674:return cE;case 35675:return uE;case 35676:return fE;case 5124:case 35670:return dE;case 35667:case 35671:return hE;case 35668:case 35672:return pE;case 35669:case 35673:return mE;case 5125:return gE;case 36294:return vE;case 36295:return _E;case 36296:return xE;case 35678:case 36198:case 36298:case 36306:case 35682:return SE;case 35679:case 36299:case 36307:return yE;case 35680:case 36300:case 36308:case 36293:return ME;case 36289:case 36303:case 36311:case 36292:return EE}}class wE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=rE(n.type)}}class AE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=TE(n.type)}}class bE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let l=0,u=a.length;l!==u;++l){const d=a[l];d.setValue(e,n[d.id],r)}}}const vf=/(\w+)(\])?(\[|\.)?/g;function Ym(s,e){s.seq.push(e),s.map[e.id]=e}function RE(s,e,n){const r=s.name,a=r.length;for(vf.lastIndex=0;;){const l=vf.exec(r),u=vf.lastIndex;let d=l[1];const p=l[2]==="]",m=l[3];if(p&&(d=d|0),m===void 0||m==="["&&u+2===a){Ym(n,m===void 0?new wE(d,s,e):new AE(d,s,e));break}else{let S=n.map[d];S===void 0&&(S=new bE(d),Ym(n,S)),n=S}}}class Hl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const d=e.getActiveUniform(n,u),p=e.getUniformLocation(n,d.name);RE(d,p,this)}const a=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(u):l.push(u);a.length>0&&(this.seq=a.concat(l))}setValue(e,n,r,a){const l=this.map[n];l!==void 0&&l.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let l=0,u=n.length;l!==u;++l){const d=n[l],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,l=e.length;a!==l;++a){const u=e[a];u.id in n&&r.push(u)}return r}}function qm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const CE=37297;let PE=0;function LE(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let u=a;u<l;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${n[u]}`)}return r.join(`
`)}const $m=new ct;function NE(s){xt._getMatrix($m,xt.workingColorSpace,s);const e=`mat3( ${$m.elements.map(n=>n.toFixed(4))} )`;switch(xt.getTransfer(s)){case ql:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Km(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return n.toUpperCase()+`

`+l+`

`+LE(s.getShaderSource(e),d)}else return l}function DE(s,e){const n=NE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const IE={[hg]:"Linear",[pg]:"Reinhard",[mg]:"Cineon",[gg]:"ACESFilmic",[_g]:"AgX",[xg]:"Neutral",[vg]:"Custom"};function UE(s,e){const n=IE[e];return n===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ul=new se;function FE(){xt.getLuminanceCoefficients(Ul);const s=Ul.x.toFixed(4),e=Ul.y.toFixed(4),n=Ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function OE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ea).join(`
`)}function kE(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function BE(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),u=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),n[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:d}}return n}function ea(s){return s!==""}function Zm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zE=/^[ \t]*#include +<([\w\d./]+)>/gm;function dd(s){return s.replace(zE,GE)}const VE=new Map;function GE(s,e){let n=dt[e];if(n===void 0){const r=VE.get(e);if(r!==void 0)n=dt[r],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return dd(n)}const HE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qm(s){return s.replace(HE,WE)}function WE(s,e,n,r){let a="";for(let l=parseInt(e);l<parseInt(n);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Jm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const XE={[kl]:"SHADOWMAP_TYPE_PCF",[Jo]:"SHADOWMAP_TYPE_VSM"};function YE(s){return XE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const qE={[as]:"ENVMAP_TYPE_CUBE",[eo]:"ENVMAP_TYPE_CUBE",[jl]:"ENVMAP_TYPE_CUBE_UV"};function $E(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":qE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const KE={[eo]:"ENVMAP_MODE_REFRACTION"};function ZE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":KE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const jE={[dg]:"ENVMAP_BLENDING_MULTIPLY",[V_]:"ENVMAP_BLENDING_MIX",[G_]:"ENVMAP_BLENDING_ADD"};function QE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":jE[s.combine]||"ENVMAP_BLENDING_NONE"}function JE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function e1(s,e,n,r){const a=s.getContext(),l=n.defines;let u=n.vertexShader,d=n.fragmentShader;const p=YE(n),m=$E(n),x=ZE(n),S=QE(n),g=JE(n),M=OE(n),w=kE(l),R=a.createProgram();let v,_,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(ea).join(`
`),v.length>0&&(v+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(ea).join(`
`),_.length>0&&(_+=`
`)):(v=[Jm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+x:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ea).join(`
`),_=[Jm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+x:"",n.envMap?"#define "+S:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Li?"#define TONE_MAPPING":"",n.toneMapping!==Li?dt.tonemapping_pars_fragment:"",n.toneMapping!==Li?UE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,DE("linearToOutputTexel",n.outputColorSpace),FE(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ea).join(`
`)),u=dd(u),u=Zm(u,n),u=jm(u,n),d=dd(d),d=Zm(d,n),d=jm(d,n),u=Qm(u),d=Qm(d),n.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,v=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,_=["#define varying in",n.glslVersion===fm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===fm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const F=U+v+u,b=U+_+d,I=qm(a,a.VERTEX_SHADER,F),P=qm(a,a.FRAGMENT_SHADER,b);a.attachShader(R,I),a.attachShader(R,P),n.index0AttributeName!==void 0?a.bindAttribLocation(R,0,n.index0AttributeName):n.hasPositionAttribute===!0&&a.bindAttribLocation(R,0,"position"),a.linkProgram(R);function O(B){if(s.debug.checkShaderErrors){const W=a.getProgramInfoLog(R)||"",ce=a.getShaderInfoLog(I)||"",de=a.getShaderInfoLog(P)||"",Z=W.trim(),le=ce.trim(),q=de.trim();let V=!0,Q=!0;if(a.getProgramParameter(R,a.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,R,I,P);else{const J=Km(a,I,"vertex"),N=Km(a,P,"fragment");Tt("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(R,a.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+Z+`
`+J+`
`+N)}else Z!==""?st("WebGLProgram: Program Info Log:",Z):(le===""||q==="")&&(Q=!1);Q&&(B.diagnostics={runnable:V,programLog:Z,vertexShader:{log:le,prefix:v},fragmentShader:{log:q,prefix:_}})}a.deleteShader(I),a.deleteShader(P),E=new Hl(a,R),L=BE(a,R)}let E;this.getUniforms=function(){return E===void 0&&O(this),E};let L;this.getAttributes=function(){return L===void 0&&O(this),L};let z=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=a.getProgramParameter(R,CE)),z},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(R),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=PE++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=I,this.fragmentShader=P,this}let t1=0;class n1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,r){const a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new i1(e),n.set(e,r)),r}}class i1{constructor(e){this.id=t1++,this.code=e,this.usedTimes=0}}function r1(s){return s===ls||s===Wl||s===Xl}function s1(s,e,n,r,a,l){const u=new Pg,d=new n1,p=new Set,m=[],x=new Map,S=r.logarithmicDepthBuffer;let g=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(E){return p.add(E),E===0?"uv":`uv${E}`}function R(E,L,z,B,W,ce){const de=B.fog,Z=W.geometry,le=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?B.environment:null,q=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,V=e.get(E.envMap||le,q),Q=V&&V.mapping===jl?V.image.height:null,J=M[E.type];E.precision!==null&&(g=r.getMaxPrecision(E.precision),g!==E.precision&&st("WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const N=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,$=N!==void 0?N.length:0;let we=0;Z.morphAttributes.position!==void 0&&(we=1),Z.morphAttributes.normal!==void 0&&(we=2),Z.morphAttributes.color!==void 0&&(we=3);let Oe,Fe,ie,ve;if(J){const Ge=Ri[J];Oe=Ge.vertexShader,Fe=Ge.fragmentShader}else{Oe=E.vertexShader,Fe=E.fragmentShader;const Ge=d.getVertexShaderStage(E),Ut=d.getFragmentShaderStage(E);d.update(E,Ge,Ut),ie=Ge.id,ve=Ut.id}const he=s.getRenderTarget(),Ue=s.state.buffers.depth.getReversed(),Ze=W.isInstancedMesh===!0,Qe=W.isBatchedMesh===!0,It=!!E.map,ot=!!E.matcap,_t=!!V,pt=!!E.aoMap,ft=!!E.lightMap,Ot=!!E.bumpMap&&E.wireframe===!1,Xt=!!E.normalMap,Yt=!!E.displacementMap,kt=!!E.emissiveMap,wt=!!E.metalnessMap,vt=!!E.roughnessMap,X=E.anisotropy>0,on=E.clearcoat>0,At=E.dispersion>0,C=E.iridescence>0,y=E.sheen>0,K=E.transmission>0,re=X&&!!E.anisotropyMap,ue=on&&!!E.clearcoatMap,Me=on&&!!E.clearcoatNormalMap,Ce=on&&!!E.clearcoatRoughnessMap,fe=C&&!!E.iridescenceMap,me=C&&!!E.iridescenceThicknessMap,Le=y&&!!E.sheenColorMap,qe=y&&!!E.sheenRoughnessMap,Ne=!!E.specularMap,Re=!!E.specularColorMap,Je=!!E.specularIntensityMap,et=K&&!!E.transmissionMap,it=K&&!!E.thicknessMap,G=!!E.gradientMap,be=!!E.alphaMap,pe=E.alphaTest>0,Pe=!!E.alphaHash,De=!!E.extensions;let _e=Li;E.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(_e=s.toneMapping);const We={shaderID:J,shaderType:E.type,shaderName:E.name,vertexShader:Oe,fragmentShader:Fe,defines:E.defines,customVertexShaderID:ie,customFragmentShaderID:ve,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:Qe,batchingColor:Qe&&W._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&W.instanceColor!==null,instancingMorph:Ze&&W.morphTexture!==null,outputColorSpace:he===null?s.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:xt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:It,matcap:ot,envMap:_t,envMapMode:_t&&V.mapping,envMapCubeUVHeight:Q,aoMap:pt,lightMap:ft,bumpMap:Ot,normalMap:Xt,displacementMap:Yt,emissiveMap:kt,normalMapObjectSpace:Xt&&E.normalMapType===X_,normalMapTangentSpace:Xt&&E.normalMapType===lm,packedNormalMap:Xt&&E.normalMapType===lm&&r1(E.normalMap.format),metalnessMap:wt,roughnessMap:vt,anisotropy:X,anisotropyMap:re,clearcoat:on,clearcoatMap:ue,clearcoatNormalMap:Me,clearcoatRoughnessMap:Ce,dispersion:At,iridescence:C,iridescenceMap:fe,iridescenceThicknessMap:me,sheen:y,sheenColorMap:Le,sheenRoughnessMap:qe,specularMap:Ne,specularColorMap:Re,specularIntensityMap:Je,transmission:K,transmissionMap:et,thicknessMap:it,gradientMap:G,opaque:E.transparent===!1&&E.blending===Zs&&E.alphaToCoverage===!1,alphaMap:be,alphaTest:pe,alphaHash:Pe,combine:E.combine,mapUv:It&&w(E.map.channel),aoMapUv:pt&&w(E.aoMap.channel),lightMapUv:ft&&w(E.lightMap.channel),bumpMapUv:Ot&&w(E.bumpMap.channel),normalMapUv:Xt&&w(E.normalMap.channel),displacementMapUv:Yt&&w(E.displacementMap.channel),emissiveMapUv:kt&&w(E.emissiveMap.channel),metalnessMapUv:wt&&w(E.metalnessMap.channel),roughnessMapUv:vt&&w(E.roughnessMap.channel),anisotropyMapUv:re&&w(E.anisotropyMap.channel),clearcoatMapUv:ue&&w(E.clearcoatMap.channel),clearcoatNormalMapUv:Me&&w(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&w(E.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&w(E.iridescenceMap.channel),iridescenceThicknessMapUv:me&&w(E.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&w(E.sheenColorMap.channel),sheenRoughnessMapUv:qe&&w(E.sheenRoughnessMap.channel),specularMapUv:Ne&&w(E.specularMap.channel),specularColorMapUv:Re&&w(E.specularColorMap.channel),specularIntensityMapUv:Je&&w(E.specularIntensityMap.channel),transmissionMapUv:et&&w(E.transmissionMap.channel),thicknessMapUv:it&&w(E.thicknessMap.channel),alphaMapUv:be&&w(E.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Xt||X),vertexNormals:!!Z.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!Z.attributes.uv&&(It||be),fog:!!de,useFog:E.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||Z.attributes.normal===void 0&&Xt===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Ue,skinning:W.isSkinnedMesh===!0,hasPositionAttribute:Z.attributes.position!==void 0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:we,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:ce.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:_e,decodeVideoTexture:It&&E.map.isVideoTexture===!0&&xt.getTransfer(E.map.colorSpace)===Dt,decodeVideoTextureEmissive:kt&&E.emissiveMap.isVideoTexture===!0&&xt.getTransfer(E.emissiveMap.colorSpace)===Dt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Zi,flipSided:E.side===Vn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:De&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&E.extensions.multiDraw===!0||Qe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return We.vertexUv1s=p.has(1),We.vertexUv2s=p.has(2),We.vertexUv3s=p.has(3),p.clear(),We}function v(E){const L=[];if(E.shaderID?L.push(E.shaderID):(L.push(E.customVertexShaderID),L.push(E.customFragmentShaderID)),E.defines!==void 0)for(const z in E.defines)L.push(z),L.push(E.defines[z]);return E.isRawShaderMaterial===!1&&(_(L,E),U(L,E),L.push(s.outputColorSpace)),L.push(E.customProgramCacheKey),L.join()}function _(E,L){E.push(L.precision),E.push(L.outputColorSpace),E.push(L.envMapMode),E.push(L.envMapCubeUVHeight),E.push(L.mapUv),E.push(L.alphaMapUv),E.push(L.lightMapUv),E.push(L.aoMapUv),E.push(L.bumpMapUv),E.push(L.normalMapUv),E.push(L.displacementMapUv),E.push(L.emissiveMapUv),E.push(L.metalnessMapUv),E.push(L.roughnessMapUv),E.push(L.anisotropyMapUv),E.push(L.clearcoatMapUv),E.push(L.clearcoatNormalMapUv),E.push(L.clearcoatRoughnessMapUv),E.push(L.iridescenceMapUv),E.push(L.iridescenceThicknessMapUv),E.push(L.sheenColorMapUv),E.push(L.sheenRoughnessMapUv),E.push(L.specularMapUv),E.push(L.specularColorMapUv),E.push(L.specularIntensityMapUv),E.push(L.transmissionMapUv),E.push(L.thicknessMapUv),E.push(L.combine),E.push(L.fogExp2),E.push(L.sizeAttenuation),E.push(L.morphTargetsCount),E.push(L.morphAttributeCount),E.push(L.numDirLights),E.push(L.numPointLights),E.push(L.numSpotLights),E.push(L.numSpotLightMaps),E.push(L.numHemiLights),E.push(L.numRectAreaLights),E.push(L.numDirLightShadows),E.push(L.numPointLightShadows),E.push(L.numSpotLightShadows),E.push(L.numSpotLightShadowsWithMaps),E.push(L.numLightProbes),E.push(L.shadowMapType),E.push(L.toneMapping),E.push(L.numClippingPlanes),E.push(L.numClipIntersection),E.push(L.depthPacking)}function U(E,L){u.disableAll(),L.instancing&&u.enable(0),L.instancingColor&&u.enable(1),L.instancingMorph&&u.enable(2),L.matcap&&u.enable(3),L.envMap&&u.enable(4),L.normalMapObjectSpace&&u.enable(5),L.normalMapTangentSpace&&u.enable(6),L.clearcoat&&u.enable(7),L.iridescence&&u.enable(8),L.alphaTest&&u.enable(9),L.vertexColors&&u.enable(10),L.vertexAlphas&&u.enable(11),L.vertexUv1s&&u.enable(12),L.vertexUv2s&&u.enable(13),L.vertexUv3s&&u.enable(14),L.vertexTangents&&u.enable(15),L.anisotropy&&u.enable(16),L.alphaHash&&u.enable(17),L.batching&&u.enable(18),L.dispersion&&u.enable(19),L.batchingColor&&u.enable(20),L.gradientMap&&u.enable(21),L.packedNormalMap&&u.enable(22),L.vertexNormals&&u.enable(23),E.push(u.mask),u.disableAll(),L.fog&&u.enable(0),L.useFog&&u.enable(1),L.flatShading&&u.enable(2),L.logarithmicDepthBuffer&&u.enable(3),L.reversedDepthBuffer&&u.enable(4),L.skinning&&u.enable(5),L.morphTargets&&u.enable(6),L.morphNormals&&u.enable(7),L.morphColors&&u.enable(8),L.premultipliedAlpha&&u.enable(9),L.shadowMapEnabled&&u.enable(10),L.doubleSided&&u.enable(11),L.flipSided&&u.enable(12),L.useDepthPacking&&u.enable(13),L.dithering&&u.enable(14),L.transmission&&u.enable(15),L.sheen&&u.enable(16),L.opaque&&u.enable(17),L.pointsUvs&&u.enable(18),L.decodeVideoTexture&&u.enable(19),L.decodeVideoTextureEmissive&&u.enable(20),L.alphaToCoverage&&u.enable(21),L.numLightProbeGrids>0&&u.enable(22),L.hasPositionAttribute&&u.enable(23),E.push(u.mask)}function F(E){const L=M[E.type];let z;if(L){const B=Ri[L];z=Cx.clone(B.uniforms)}else z=E.uniforms;return z}function b(E,L){let z=x.get(L);return z!==void 0?++z.usedTimes:(z=new e1(s,L,E,a),m.push(z),x.set(L,z)),z}function I(E){if(--E.usedTimes===0){const L=m.indexOf(E);m[L]=m[m.length-1],m.pop(),x.delete(E.cacheKey),E.destroy()}}function P(E){d.remove(E)}function O(){d.dispose()}return{getParameters:R,getProgramCacheKey:v,getUniforms:F,acquireProgram:b,releaseProgram:I,releaseShaderCache:P,programs:m,dispose:O}}function o1(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function a(u,d,p){s.get(u)[d]=p}function l(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:l}}function a1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function eg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function tg(){const s=[];let e=0;const n=[],r=[],a=[];function l(){e=0,n.length=0,r.length=0,a.length=0}function u(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function d(g,M,w,R,v,_){let U=s[e];return U===void 0?(U={id:g.id,object:g,geometry:M,material:w,materialVariant:u(g),groupOrder:R,renderOrder:g.renderOrder,z:v,group:_},s[e]=U):(U.id=g.id,U.object=g,U.geometry=M,U.material=w,U.materialVariant=u(g),U.groupOrder=R,U.renderOrder=g.renderOrder,U.z=v,U.group=_),e++,U}function p(g,M,w,R,v,_){const U=d(g,M,w,R,v,_);w.transmission>0?r.push(U):w.transparent===!0?a.push(U):n.push(U)}function m(g,M,w,R,v,_){const U=d(g,M,w,R,v,_);w.transmission>0?r.unshift(U):w.transparent===!0?a.unshift(U):n.unshift(U)}function x(g,M,w){n.length>1&&n.sort(g||a1),r.length>1&&r.sort(M||eg),a.length>1&&a.sort(M||eg),w&&(n.reverse(),r.reverse(),a.reverse())}function S(){for(let g=e,M=s.length;g<M;g++){const w=s[g];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:n,transmissive:r,transparent:a,init:l,push:p,unshift:m,finish:S,sort:x}}function l1(){let s=new WeakMap;function e(r,a){const l=s.get(r);let u;return l===void 0?(u=new tg,s.set(r,[u])):a>=l.length?(u=new tg,l.push(u)):u=l[a],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function c1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new se,color:new yt};break;case"SpotLight":n={position:new se,direction:new se,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new se,color:new yt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new se,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":n={color:new yt,position:new se,halfWidth:new se,halfHeight:new se};break}return s[e.id]=n,n}}}function u1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let f1=0;function d1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function h1(s){const e=new c1,n=u1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new se);const a=new se,l=new tn,u=new tn;function d(m){let x=0,S=0,g=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let M=0,w=0,R=0,v=0,_=0,U=0,F=0,b=0,I=0,P=0,O=0;m.sort(d1);for(let L=0,z=m.length;L<z;L++){const B=m[L],W=B.color,ce=B.intensity,de=B.distance;let Z=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===ls?Z=B.shadow.map.texture:Z=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)x+=W.r*ce,S+=W.g*ce,g+=W.b*ce;else if(B.isLightProbe){for(let le=0;le<9;le++)r.probe[le].addScaledVector(B.sh.coefficients[le],ce);O++}else if(B.isDirectionalLight){const le=e.get(B);if(le.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const q=B.shadow,V=n.get(B);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,r.directionalShadow[M]=V,r.directionalShadowMap[M]=Z,r.directionalShadowMatrix[M]=B.shadow.matrix,U++}r.directional[M]=le,M++}else if(B.isSpotLight){const le=e.get(B);le.position.setFromMatrixPosition(B.matrixWorld),le.color.copy(W).multiplyScalar(ce),le.distance=de,le.coneCos=Math.cos(B.angle),le.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),le.decay=B.decay,r.spot[R]=le;const q=B.shadow;if(B.map&&(r.spotLightMap[I]=B.map,I++,q.updateMatrices(B),B.castShadow&&P++),r.spotLightMatrix[R]=q.matrix,B.castShadow){const V=n.get(B);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,r.spotShadow[R]=V,r.spotShadowMap[R]=Z,b++}R++}else if(B.isRectAreaLight){const le=e.get(B);le.color.copy(W).multiplyScalar(ce),le.halfWidth.set(B.width*.5,0,0),le.halfHeight.set(0,B.height*.5,0),r.rectArea[v]=le,v++}else if(B.isPointLight){const le=e.get(B);if(le.color.copy(B.color).multiplyScalar(B.intensity),le.distance=B.distance,le.decay=B.decay,B.castShadow){const q=B.shadow,V=n.get(B);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,V.shadowCameraNear=q.camera.near,V.shadowCameraFar=q.camera.far,r.pointShadow[w]=V,r.pointShadowMap[w]=Z,r.pointShadowMatrix[w]=B.shadow.matrix,F++}r.point[w]=le,w++}else if(B.isHemisphereLight){const le=e.get(B);le.skyColor.copy(B.color).multiplyScalar(ce),le.groundColor.copy(B.groundColor).multiplyScalar(ce),r.hemi[_]=le,_++}}v>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ie.LTC_FLOAT_1,r.rectAreaLTC2=Ie.LTC_FLOAT_2):(r.rectAreaLTC1=Ie.LTC_HALF_1,r.rectAreaLTC2=Ie.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=S,r.ambient[2]=g;const E=r.hash;(E.directionalLength!==M||E.pointLength!==w||E.spotLength!==R||E.rectAreaLength!==v||E.hemiLength!==_||E.numDirectionalShadows!==U||E.numPointShadows!==F||E.numSpotShadows!==b||E.numSpotMaps!==I||E.numLightProbes!==O)&&(r.directional.length=M,r.spot.length=R,r.rectArea.length=v,r.point.length=w,r.hemi.length=_,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=F,r.pointShadowMap.length=F,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=F,r.spotLightMatrix.length=b+I-P,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=O,E.directionalLength=M,E.pointLength=w,E.spotLength=R,E.rectAreaLength=v,E.hemiLength=_,E.numDirectionalShadows=U,E.numPointShadows=F,E.numSpotShadows=b,E.numSpotMaps=I,E.numLightProbes=O,r.version=f1++)}function p(m,x){let S=0,g=0,M=0,w=0,R=0;const v=x.matrixWorldInverse;for(let _=0,U=m.length;_<U;_++){const F=m[_];if(F.isDirectionalLight){const b=r.directional[S];b.direction.setFromMatrixPosition(F.matrixWorld),a.setFromMatrixPosition(F.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(v),S++}else if(F.isSpotLight){const b=r.spot[M];b.position.setFromMatrixPosition(F.matrixWorld),b.position.applyMatrix4(v),b.direction.setFromMatrixPosition(F.matrixWorld),a.setFromMatrixPosition(F.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(v),M++}else if(F.isRectAreaLight){const b=r.rectArea[w];b.position.setFromMatrixPosition(F.matrixWorld),b.position.applyMatrix4(v),u.identity(),l.copy(F.matrixWorld),l.premultiply(v),u.extractRotation(l),b.halfWidth.set(F.width*.5,0,0),b.halfHeight.set(0,F.height*.5,0),b.halfWidth.applyMatrix4(u),b.halfHeight.applyMatrix4(u),w++}else if(F.isPointLight){const b=r.point[g];b.position.setFromMatrixPosition(F.matrixWorld),b.position.applyMatrix4(v),g++}else if(F.isHemisphereLight){const b=r.hemi[R];b.direction.setFromMatrixPosition(F.matrixWorld),b.direction.transformDirection(v),R++}}}return{setup:d,setupView:p,state:r}}function ng(s){const e=new h1(s),n=[],r=[],a=[];function l(g){S.camera=g,n.length=0,r.length=0,a.length=0}function u(g){n.push(g)}function d(g){r.push(g)}function p(g){a.push(g)}function m(){e.setup(n)}function x(g){e.setupView(n,g)}const S={lightsArray:n,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:S,setupLights:m,setupLightsView:x,pushLight:u,pushShadow:d,pushLightProbeGrid:p}}function p1(s){let e=new WeakMap;function n(a,l=0){const u=e.get(a);let d;return u===void 0?(d=new ng(s),e.set(a,[d])):l>=u.length?(d=new ng(s),u.push(d)):d=u[l],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const m1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,v1=[new se(1,0,0),new se(-1,0,0),new se(0,1,0),new se(0,-1,0),new se(0,0,1),new se(0,0,-1)],_1=[new se(0,-1,0),new se(0,-1,0),new se(0,0,1),new se(0,0,-1),new se(0,-1,0),new se(0,-1,0)],ig=new tn,jo=new se,_f=new se;function x1(s,e,n){let r=new Fg;const a=new Rt,l=new Rt,u=new Jt,d=new Dx,p=new Ix,m={},x=n.maxTextureSize,S={[Dr]:Vn,[Vn]:Dr,[Zi]:Zi},g=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:m1,fragmentShader:g1}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const w=new Si;w.setAttribute("position",new oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new ir(w,g),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kl;let _=this.type;this.render=function(P,O,E){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||P.length===0)return;this.type===M_&&(st("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=kl);const L=s.getRenderTarget(),z=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),W=s.state;W.setBlending(Qi),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const ce=_!==this.type;ce&&O.traverse(function(de){de.material&&(Array.isArray(de.material)?de.material.forEach(Z=>Z.needsUpdate=!0):de.material.needsUpdate=!0)});for(let de=0,Z=P.length;de<Z;de++){const le=P[de],q=le.shadow;if(q===void 0){st("WebGLShadowMap:",le,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;a.copy(q.mapSize);const V=q.getFrameExtents();a.multiply(V),l.copy(q.mapSize),(a.x>x||a.y>x)&&(a.x>x&&(l.x=Math.floor(x/V.x),a.x=l.x*V.x,q.mapSize.x=l.x),a.y>x&&(l.y=Math.floor(x/V.y),a.y=l.y*V.y,q.mapSize.y=l.y));const Q=s.state.buffers.depth.getReversed();if(q.camera._reversedDepth=Q,q.map===null||ce===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Jo){if(le.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Ni(a.x,a.y,{format:ls,type:tr,minFilter:An,magFilter:An,generateMipmaps:!1}),q.map.texture.name=le.name+".shadowMap",q.map.depthTexture=new to(a.x,a.y,Ci),q.map.depthTexture.name=le.name+".shadowMapDepth",q.map.depthTexture.format=nr,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=_n,q.map.depthTexture.magFilter=_n}else le.isPointLight?(q.map=new Xg(a.x),q.map.depthTexture=new bx(a.x,Di)):(q.map=new Ni(a.x,a.y),q.map.depthTexture=new to(a.x,a.y,Di)),q.map.depthTexture.name=le.name+".shadowMap",q.map.depthTexture.format=nr,this.type===kl?(q.map.depthTexture.compareFunction=Q?Td:Ed,q.map.depthTexture.minFilter=An,q.map.depthTexture.magFilter=An):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=_n,q.map.depthTexture.magFilter=_n);q.camera.updateProjectionMatrix()}const J=q.map.isWebGLCubeRenderTarget?6:1;for(let N=0;N<J;N++){if(q.map.isWebGLCubeRenderTarget)s.setRenderTarget(q.map,N),s.clear();else{N===0&&(s.setRenderTarget(q.map),s.clear());const $=q.getViewport(N);u.set(l.x*$.x,l.y*$.y,l.x*$.z,l.y*$.w),W.viewport(u)}if(le.isPointLight){const $=q.camera,we=q.matrix,Oe=le.distance||$.far;Oe!==$.far&&($.far=Oe,$.updateProjectionMatrix()),jo.setFromMatrixPosition(le.matrixWorld),$.position.copy(jo),_f.copy($.position),_f.add(v1[N]),$.up.copy(_1[N]),$.lookAt(_f),$.updateMatrixWorld(),we.makeTranslation(-jo.x,-jo.y,-jo.z),ig.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),q._frustum.setFromProjectionMatrix(ig,$.coordinateSystem,$.reversedDepth)}else q.updateMatrices(le);r=q.getFrustum(),b(O,E,q.camera,le,this.type)}q.isPointLightShadow!==!0&&this.type===Jo&&U(q,E),q.needsUpdate=!1}_=this.type,v.needsUpdate=!1,s.setRenderTarget(L,z,B)};function U(P,O){const E=e.update(R);g.defines.VSM_SAMPLES!==P.blurSamples&&(g.defines.VSM_SAMPLES=P.blurSamples,M.defines.VSM_SAMPLES=P.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Ni(a.x,a.y,{format:ls,type:tr})),g.uniforms.shadow_pass.value=P.map.depthTexture,g.uniforms.resolution.value=P.mapSize,g.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(O,null,E,g,R,null),M.uniforms.shadow_pass.value=P.mapPass.texture,M.uniforms.resolution.value=P.mapSize,M.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(O,null,E,M,R,null)}function F(P,O,E,L){let z=null;const B=E.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(B!==void 0)z=B;else if(z=E.isPointLight===!0?p:d,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const W=z.uuid,ce=O.uuid;let de=m[W];de===void 0&&(de={},m[W]=de);let Z=de[ce];Z===void 0&&(Z=z.clone(),de[ce]=Z,O.addEventListener("dispose",I)),z=Z}if(z.visible=O.visible,z.wireframe=O.wireframe,L===Jo?z.side=O.shadowSide!==null?O.shadowSide:O.side:z.side=O.shadowSide!==null?O.shadowSide:S[O.side],z.alphaMap=O.alphaMap,z.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,z.map=O.map,z.clipShadows=O.clipShadows,z.clippingPlanes=O.clippingPlanes,z.clipIntersection=O.clipIntersection,z.displacementMap=O.displacementMap,z.displacementScale=O.displacementScale,z.displacementBias=O.displacementBias,z.wireframeLinewidth=O.wireframeLinewidth,z.linewidth=O.linewidth,E.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const W=s.properties.get(z);W.light=E}return z}function b(P,O,E,L,z){if(P.visible===!1)return;if(P.layers.test(O.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&z===Jo)&&(!P.frustumCulled||r.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,P.matrixWorld);const ce=e.update(P),de=P.material;if(Array.isArray(de)){const Z=ce.groups;for(let le=0,q=Z.length;le<q;le++){const V=Z[le],Q=de[V.materialIndex];if(Q&&Q.visible){const J=F(P,Q,L,z);P.onBeforeShadow(s,P,O,E,ce,J,V),s.renderBufferDirect(E,null,ce,J,P,V),P.onAfterShadow(s,P,O,E,ce,J,V)}}}else if(de.visible){const Z=F(P,de,L,z);P.onBeforeShadow(s,P,O,E,ce,Z,null),s.renderBufferDirect(E,null,ce,Z,P,null),P.onAfterShadow(s,P,O,E,ce,Z,null)}}const W=P.children;for(let ce=0,de=W.length;ce<de;ce++)b(W[ce],O,E,L,z)}function I(P){P.target.removeEventListener("dispose",I);for(const E in m){const L=m[E],z=P.target.uuid;z in L&&(L[z].dispose(),delete L[z])}}}function S1(s,e){function n(){let G=!1;const be=new Jt;let pe=null;const Pe=new Jt(0,0,0,0);return{setMask:function(De){pe!==De&&!G&&(s.colorMask(De,De,De,De),pe=De)},setLocked:function(De){G=De},setClear:function(De,_e,We,Ge,Ut){Ut===!0&&(De*=Ge,_e*=Ge,We*=Ge),be.set(De,_e,We,Ge),Pe.equals(be)===!1&&(s.clearColor(De,_e,We,Ge),Pe.copy(be))},reset:function(){G=!1,pe=null,Pe.set(-1,0,0,0)}}}function r(){let G=!1,be=!1,pe=null,Pe=null,De=null;return{setReversed:function(_e){if(be!==_e){const We=e.get("EXT_clip_control");_e?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),be=_e;const Ge=De;De=null,this.setClear(Ge)}},getReversed:function(){return be},setTest:function(_e){_e?he(s.DEPTH_TEST):Ue(s.DEPTH_TEST)},setMask:function(_e){pe!==_e&&!G&&(s.depthMask(_e),pe=_e)},setFunc:function(_e){if(be&&(_e=tx[_e]),Pe!==_e){switch(_e){case Tf:s.depthFunc(s.NEVER);break;case wf:s.depthFunc(s.ALWAYS);break;case Af:s.depthFunc(s.LESS);break;case Js:s.depthFunc(s.LEQUAL);break;case bf:s.depthFunc(s.EQUAL);break;case Rf:s.depthFunc(s.GEQUAL);break;case Cf:s.depthFunc(s.GREATER);break;case Pf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Pe=_e}},setLocked:function(_e){G=_e},setClear:function(_e){De!==_e&&(De=_e,be&&(_e=1-_e),s.clearDepth(_e))},reset:function(){G=!1,pe=null,Pe=null,De=null,be=!1}}}function a(){let G=!1,be=null,pe=null,Pe=null,De=null,_e=null,We=null,Ge=null,Ut=null;return{setTest:function(Ct){G||(Ct?he(s.STENCIL_TEST):Ue(s.STENCIL_TEST))},setMask:function(Ct){be!==Ct&&!G&&(s.stencilMask(Ct),be=Ct)},setFunc:function(Ct,xn,Kn){(pe!==Ct||Pe!==xn||De!==Kn)&&(s.stencilFunc(Ct,xn,Kn),pe=Ct,Pe=xn,De=Kn)},setOp:function(Ct,xn,Kn){(_e!==Ct||We!==xn||Ge!==Kn)&&(s.stencilOp(Ct,xn,Kn),_e=Ct,We=xn,Ge=Kn)},setLocked:function(Ct){G=Ct},setClear:function(Ct){Ut!==Ct&&(s.clearStencil(Ct),Ut=Ct)},reset:function(){G=!1,be=null,pe=null,Pe=null,De=null,_e=null,We=null,Ge=null,Ut=null}}}const l=new n,u=new r,d=new a,p=new WeakMap,m=new WeakMap;let x={},S={},g={},M=new WeakMap,w=[],R=null,v=!1,_=null,U=null,F=null,b=null,I=null,P=null,O=null,E=new yt(0,0,0),L=0,z=!1,B=null,W=null,ce=null,de=null,Z=null;const le=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,V=0;const Q=s.getParameter(s.VERSION);Q.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(Q)[1]),q=V>=1):Q.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),q=V>=2);let J=null,N={};const $=s.getParameter(s.SCISSOR_BOX),we=s.getParameter(s.VIEWPORT),Oe=new Jt().fromArray($),Fe=new Jt().fromArray(we);function ie(G,be,pe,Pe){const De=new Uint8Array(4),_e=s.createTexture();s.bindTexture(G,_e),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let We=0;We<pe;We++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(be,0,s.RGBA,1,1,Pe,0,s.RGBA,s.UNSIGNED_BYTE,De):s.texImage2D(be+We,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,De);return _e}const ve={};ve[s.TEXTURE_2D]=ie(s.TEXTURE_2D,s.TEXTURE_2D,1),ve[s.TEXTURE_CUBE_MAP]=ie(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[s.TEXTURE_2D_ARRAY]=ie(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ve[s.TEXTURE_3D]=ie(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),he(s.DEPTH_TEST),u.setFunc(Js),Ot(!1),Xt(sm),he(s.CULL_FACE),pt(Qi);function he(G){x[G]!==!0&&(s.enable(G),x[G]=!0)}function Ue(G){x[G]!==!1&&(s.disable(G),x[G]=!1)}function Ze(G,be){return g[G]!==be?(s.bindFramebuffer(G,be),g[G]=be,G===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=be),G===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=be),!0):!1}function Qe(G,be){let pe=w,Pe=!1;if(G){pe=M.get(be),pe===void 0&&(pe=[],M.set(be,pe));const De=G.textures;if(pe.length!==De.length||pe[0]!==s.COLOR_ATTACHMENT0){for(let _e=0,We=De.length;_e<We;_e++)pe[_e]=s.COLOR_ATTACHMENT0+_e;pe.length=De.length,Pe=!0}}else pe[0]!==s.BACK&&(pe[0]=s.BACK,Pe=!0);Pe&&s.drawBuffers(pe)}function It(G){return R!==G?(s.useProgram(G),R=G,!0):!1}const ot={[is]:s.FUNC_ADD,[T_]:s.FUNC_SUBTRACT,[w_]:s.FUNC_REVERSE_SUBTRACT};ot[A_]=s.MIN,ot[b_]=s.MAX;const _t={[R_]:s.ZERO,[C_]:s.ONE,[P_]:s.SRC_COLOR,[Mf]:s.SRC_ALPHA,[F_]:s.SRC_ALPHA_SATURATE,[I_]:s.DST_COLOR,[N_]:s.DST_ALPHA,[L_]:s.ONE_MINUS_SRC_COLOR,[Ef]:s.ONE_MINUS_SRC_ALPHA,[U_]:s.ONE_MINUS_DST_COLOR,[D_]:s.ONE_MINUS_DST_ALPHA,[O_]:s.CONSTANT_COLOR,[k_]:s.ONE_MINUS_CONSTANT_COLOR,[B_]:s.CONSTANT_ALPHA,[z_]:s.ONE_MINUS_CONSTANT_ALPHA};function pt(G,be,pe,Pe,De,_e,We,Ge,Ut,Ct){if(G===Qi){v===!0&&(Ue(s.BLEND),v=!1);return}if(v===!1&&(he(s.BLEND),v=!0),G!==E_){if(G!==_||Ct!==z){if((U!==is||I!==is)&&(s.blendEquation(s.FUNC_ADD),U=is,I=is),Ct)switch(G){case Zs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case yf:s.blendFunc(s.ONE,s.ONE);break;case om:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case am:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Tt("WebGLState: Invalid blending: ",G);break}else switch(G){case Zs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case yf:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case om:Tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case am:Tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Tt("WebGLState: Invalid blending: ",G);break}F=null,b=null,P=null,O=null,E.set(0,0,0),L=0,_=G,z=Ct}return}De=De||be,_e=_e||pe,We=We||Pe,(be!==U||De!==I)&&(s.blendEquationSeparate(ot[be],ot[De]),U=be,I=De),(pe!==F||Pe!==b||_e!==P||We!==O)&&(s.blendFuncSeparate(_t[pe],_t[Pe],_t[_e],_t[We]),F=pe,b=Pe,P=_e,O=We),(Ge.equals(E)===!1||Ut!==L)&&(s.blendColor(Ge.r,Ge.g,Ge.b,Ut),E.copy(Ge),L=Ut),_=G,z=!1}function ft(G,be){G.side===Zi?Ue(s.CULL_FACE):he(s.CULL_FACE);let pe=G.side===Vn;be&&(pe=!pe),Ot(pe),G.blending===Zs&&G.transparent===!1?pt(Qi):pt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),l.setMask(G.colorWrite);const Pe=G.stencilWrite;d.setTest(Pe),Pe&&(d.setMask(G.stencilWriteMask),d.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),d.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),kt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?he(s.SAMPLE_ALPHA_TO_COVERAGE):Ue(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(G){B!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),B=G)}function Xt(G){G!==S_?(he(s.CULL_FACE),G!==W&&(G===sm?s.cullFace(s.BACK):G===y_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ue(s.CULL_FACE),W=G}function Yt(G){G!==ce&&(q&&s.lineWidth(G),ce=G)}function kt(G,be,pe){G?(he(s.POLYGON_OFFSET_FILL),(de!==be||Z!==pe)&&(de=be,Z=pe,u.getReversed()&&(be=-be),s.polygonOffset(be,pe))):Ue(s.POLYGON_OFFSET_FILL)}function wt(G){G?he(s.SCISSOR_TEST):Ue(s.SCISSOR_TEST)}function vt(G){G===void 0&&(G=s.TEXTURE0+le-1),J!==G&&(s.activeTexture(G),J=G)}function X(G,be,pe){pe===void 0&&(J===null?pe=s.TEXTURE0+le-1:pe=J);let Pe=N[pe];Pe===void 0&&(Pe={type:void 0,texture:void 0},N[pe]=Pe),(Pe.type!==G||Pe.texture!==be)&&(J!==pe&&(s.activeTexture(pe),J=pe),s.bindTexture(G,be||ve[G]),Pe.type=G,Pe.texture=be)}function on(){const G=N[J];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function At(){try{s.compressedTexImage2D(...arguments)}catch(G){Tt("WebGLState:",G)}}function C(){try{s.compressedTexImage3D(...arguments)}catch(G){Tt("WebGLState:",G)}}function y(){try{s.texSubImage2D(...arguments)}catch(G){Tt("WebGLState:",G)}}function K(){try{s.texSubImage3D(...arguments)}catch(G){Tt("WebGLState:",G)}}function re(){try{s.compressedTexSubImage2D(...arguments)}catch(G){Tt("WebGLState:",G)}}function ue(){try{s.compressedTexSubImage3D(...arguments)}catch(G){Tt("WebGLState:",G)}}function Me(){try{s.texStorage2D(...arguments)}catch(G){Tt("WebGLState:",G)}}function Ce(){try{s.texStorage3D(...arguments)}catch(G){Tt("WebGLState:",G)}}function fe(){try{s.texImage2D(...arguments)}catch(G){Tt("WebGLState:",G)}}function me(){try{s.texImage3D(...arguments)}catch(G){Tt("WebGLState:",G)}}function Le(G){return S[G]!==void 0?S[G]:s.getParameter(G)}function qe(G,be){S[G]!==be&&(s.pixelStorei(G,be),S[G]=be)}function Ne(G){Oe.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),Oe.copy(G))}function Re(G){Fe.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),Fe.copy(G))}function Je(G,be){let pe=m.get(be);pe===void 0&&(pe=new WeakMap,m.set(be,pe));let Pe=pe.get(G);Pe===void 0&&(Pe=s.getUniformBlockIndex(be,G.name),pe.set(G,Pe))}function et(G,be){const Pe=m.get(be).get(G);p.get(be)!==Pe&&(s.uniformBlockBinding(be,Pe,G.__bindingPointIndex),p.set(be,Pe))}function it(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),x={},S={},J=null,N={},g={},M=new WeakMap,w=[],R=null,v=!1,_=null,U=null,F=null,b=null,I=null,P=null,O=null,E=new yt(0,0,0),L=0,z=!1,B=null,W=null,ce=null,de=null,Z=null,Oe.set(0,0,s.canvas.width,s.canvas.height),Fe.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:he,disable:Ue,bindFramebuffer:Ze,drawBuffers:Qe,useProgram:It,setBlending:pt,setMaterial:ft,setFlipSided:Ot,setCullFace:Xt,setLineWidth:Yt,setPolygonOffset:kt,setScissorTest:wt,activeTexture:vt,bindTexture:X,unbindTexture:on,compressedTexImage2D:At,compressedTexImage3D:C,texImage2D:fe,texImage3D:me,pixelStorei:qe,getParameter:Le,updateUBOMapping:Je,uniformBlockBinding:et,texStorage2D:Me,texStorage3D:Ce,texSubImage2D:y,texSubImage3D:K,compressedTexSubImage2D:re,compressedTexSubImage3D:ue,scissor:Ne,viewport:Re,reset:it}}function y1(s,e,n,r,a,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Rt,x=new WeakMap,S=new Set;let g;const M=new WeakMap;let w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(C,y){return w?new OffscreenCanvas(C,y):Kl("canvas")}function v(C,y,K){let re=1;const ue=At(C);if((ue.width>K||ue.height>K)&&(re=K/Math.max(ue.width,ue.height)),re<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Me=Math.floor(re*ue.width),Ce=Math.floor(re*ue.height);g===void 0&&(g=R(Me,Ce));const fe=y?R(Me,Ce):g;return fe.width=Me,fe.height=Ce,fe.getContext("2d").drawImage(C,0,0,Me,Ce),st("WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+Me+"x"+Ce+")."),fe}else return"data"in C&&st("WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),C;return C}function _(C){return C.generateMipmaps}function U(C){s.generateMipmap(C)}function F(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(C,y,K,re,ue,Me=!1){if(C!==null){if(s[C]!==void 0)return s[C];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Ce;re&&(Ce=e.get("EXT_texture_norm16"),Ce||st("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=y;if(y===s.RED&&(K===s.FLOAT&&(fe=s.R32F),K===s.HALF_FLOAT&&(fe=s.R16F),K===s.UNSIGNED_BYTE&&(fe=s.R8),K===s.UNSIGNED_SHORT&&Ce&&(fe=Ce.R16_EXT),K===s.SHORT&&Ce&&(fe=Ce.R16_SNORM_EXT)),y===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(fe=s.R8UI),K===s.UNSIGNED_SHORT&&(fe=s.R16UI),K===s.UNSIGNED_INT&&(fe=s.R32UI),K===s.BYTE&&(fe=s.R8I),K===s.SHORT&&(fe=s.R16I),K===s.INT&&(fe=s.R32I)),y===s.RG&&(K===s.FLOAT&&(fe=s.RG32F),K===s.HALF_FLOAT&&(fe=s.RG16F),K===s.UNSIGNED_BYTE&&(fe=s.RG8),K===s.UNSIGNED_SHORT&&Ce&&(fe=Ce.RG16_EXT),K===s.SHORT&&Ce&&(fe=Ce.RG16_SNORM_EXT)),y===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(fe=s.RG8UI),K===s.UNSIGNED_SHORT&&(fe=s.RG16UI),K===s.UNSIGNED_INT&&(fe=s.RG32UI),K===s.BYTE&&(fe=s.RG8I),K===s.SHORT&&(fe=s.RG16I),K===s.INT&&(fe=s.RG32I)),y===s.RGB_INTEGER&&(K===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),K===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),K===s.UNSIGNED_INT&&(fe=s.RGB32UI),K===s.BYTE&&(fe=s.RGB8I),K===s.SHORT&&(fe=s.RGB16I),K===s.INT&&(fe=s.RGB32I)),y===s.RGBA_INTEGER&&(K===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),K===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),K===s.UNSIGNED_INT&&(fe=s.RGBA32UI),K===s.BYTE&&(fe=s.RGBA8I),K===s.SHORT&&(fe=s.RGBA16I),K===s.INT&&(fe=s.RGBA32I)),y===s.RGB&&(K===s.UNSIGNED_SHORT&&Ce&&(fe=Ce.RGB16_EXT),K===s.SHORT&&Ce&&(fe=Ce.RGB16_SNORM_EXT),K===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),K===s.UNSIGNED_INT_10F_11F_11F_REV&&(fe=s.R11F_G11F_B10F)),y===s.RGBA){const me=Me?ql:xt.getTransfer(ue);K===s.FLOAT&&(fe=s.RGBA32F),K===s.HALF_FLOAT&&(fe=s.RGBA16F),K===s.UNSIGNED_BYTE&&(fe=me===Dt?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT&&Ce&&(fe=Ce.RGBA16_EXT),K===s.SHORT&&Ce&&(fe=Ce.RGBA16_SNORM_EXT),K===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function I(C,y){let K;return C?y===null||y===Di||y===na?K=s.DEPTH24_STENCIL8:y===Ci?K=s.DEPTH32F_STENCIL8:y===ta&&(K=s.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Di||y===na?K=s.DEPTH_COMPONENT24:y===Ci?K=s.DEPTH_COMPONENT32F:y===ta&&(K=s.DEPTH_COMPONENT16),K}function P(C,y){return _(C)===!0||C.isFramebufferTexture&&C.minFilter!==_n&&C.minFilter!==An?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function O(C){const y=C.target;y.removeEventListener("dispose",O),L(y),y.isVideoTexture&&x.delete(y),y.isHTMLTexture&&S.delete(y)}function E(C){const y=C.target;y.removeEventListener("dispose",E),B(y)}function L(C){const y=r.get(C);if(y.__webglInit===void 0)return;const K=C.source,re=M.get(K);if(re){const ue=re[y.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&z(C),Object.keys(re).length===0&&M.delete(K)}r.remove(C)}function z(C){const y=r.get(C);s.deleteTexture(y.__webglTexture);const K=C.source,re=M.get(K);delete re[y.__cacheKey],u.memory.textures--}function B(C){const y=r.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),r.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(y.__webglFramebuffer[re]))for(let ue=0;ue<y.__webglFramebuffer[re].length;ue++)s.deleteFramebuffer(y.__webglFramebuffer[re][ue]);else s.deleteFramebuffer(y.__webglFramebuffer[re]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[re])}else{if(Array.isArray(y.__webglFramebuffer))for(let re=0;re<y.__webglFramebuffer.length;re++)s.deleteFramebuffer(y.__webglFramebuffer[re]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let re=0;re<y.__webglColorRenderbuffer.length;re++)y.__webglColorRenderbuffer[re]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[re]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const K=C.textures;for(let re=0,ue=K.length;re<ue;re++){const Me=r.get(K[re]);Me.__webglTexture&&(s.deleteTexture(Me.__webglTexture),u.memory.textures--),r.remove(K[re])}r.remove(C)}let W=0;function ce(){W=0}function de(){return W}function Z(C){W=C}function le(){const C=W;return C>=a.maxTextures&&st("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+a.maxTextures),W+=1,C}function q(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function V(C,y){const K=r.get(C);if(C.isVideoTexture&&X(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&K.__version!==C.version){const re=C.image;if(re===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(K,C,y);return}}else C.isExternalTexture&&(K.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+y)}function Q(C,y){const K=r.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&K.__version!==C.version){Ue(K,C,y);return}else C.isExternalTexture&&(K.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+y)}function J(C,y){const K=r.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&K.__version!==C.version){Ue(K,C,y);return}n.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+y)}function N(C,y){const K=r.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&K.__version!==C.version){Ze(K,C,y);return}n.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+y)}const $={[Lf]:s.REPEAT,[ji]:s.CLAMP_TO_EDGE,[Nf]:s.MIRRORED_REPEAT},we={[_n]:s.NEAREST,[H_]:s.NEAREST_MIPMAP_NEAREST,[fl]:s.NEAREST_MIPMAP_LINEAR,[An]:s.LINEAR,[Vu]:s.LINEAR_MIPMAP_NEAREST,[ss]:s.LINEAR_MIPMAP_LINEAR},Oe={[Y_]:s.NEVER,[j_]:s.ALWAYS,[q_]:s.LESS,[Ed]:s.LEQUAL,[$_]:s.EQUAL,[Td]:s.GEQUAL,[K_]:s.GREATER,[Z_]:s.NOTEQUAL};function Fe(C,y){if(y.type===Ci&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===An||y.magFilter===Vu||y.magFilter===fl||y.magFilter===ss||y.minFilter===An||y.minFilter===Vu||y.minFilter===fl||y.minFilter===ss)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,$[y.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,$[y.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,$[y.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,we[y.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,we[y.minFilter]),y.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,Oe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===_n||y.minFilter!==fl&&y.minFilter!==ss||y.type===Ci&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||r.get(y).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,a.getMaxAnisotropy())),r.get(y).__currentAnisotropy=y.anisotropy}}}function ie(C,y){let K=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",O));const re=y.source;let ue=M.get(re);ue===void 0&&(ue={},M.set(re,ue));const Me=q(y);if(Me!==C.__cacheKey){ue[Me]===void 0&&(ue[Me]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,K=!0),ue[Me].usedTimes++;const Ce=ue[C.__cacheKey];Ce!==void 0&&(ue[C.__cacheKey].usedTimes--,Ce.usedTimes===0&&z(y)),C.__cacheKey=Me,C.__webglTexture=ue[Me].texture}return K}function ve(C,y,K){return Math.floor(Math.floor(C/K)/y)}function he(C,y,K,re){const Me=C.updateRanges;if(Me.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,K,re,y.data);else{Me.sort((qe,Ne)=>qe.start-Ne.start);let Ce=0;for(let qe=1;qe<Me.length;qe++){const Ne=Me[Ce],Re=Me[qe],Je=Ne.start+Ne.count,et=ve(Re.start,y.width,4),it=ve(Ne.start,y.width,4);Re.start<=Je+1&&et===it&&ve(Re.start+Re.count-1,y.width,4)===et?Ne.count=Math.max(Ne.count,Re.start+Re.count-Ne.start):(++Ce,Me[Ce]=Re)}Me.length=Ce+1;const fe=n.getParameter(s.UNPACK_ROW_LENGTH),me=n.getParameter(s.UNPACK_SKIP_PIXELS),Le=n.getParameter(s.UNPACK_SKIP_ROWS);n.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let qe=0,Ne=Me.length;qe<Ne;qe++){const Re=Me[qe],Je=Math.floor(Re.start/4),et=Math.ceil(Re.count/4),it=Je%y.width,G=Math.floor(Je/y.width),be=et,pe=1;n.pixelStorei(s.UNPACK_SKIP_PIXELS,it),n.pixelStorei(s.UNPACK_SKIP_ROWS,G),n.texSubImage2D(s.TEXTURE_2D,0,it,G,be,pe,K,re,y.data)}C.clearUpdateRanges(),n.pixelStorei(s.UNPACK_ROW_LENGTH,fe),n.pixelStorei(s.UNPACK_SKIP_PIXELS,me),n.pixelStorei(s.UNPACK_SKIP_ROWS,Le)}}function Ue(C,y,K){let re=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(re=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(re=s.TEXTURE_3D);const ue=ie(C,y),Me=y.source;n.bindTexture(re,C.__webglTexture,s.TEXTURE0+K);const Ce=r.get(Me);if(Me.version!==Ce.__version||ue===!0){if(n.activeTexture(s.TEXTURE0+K),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const pe=xt.getPrimaries(xt.workingColorSpace),Pe=y.colorSpace===Lr?null:xt.getPrimaries(y.colorSpace),De=y.colorSpace===Lr||pe===Pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,De)}n.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment);let me=v(y.image,!1,a.maxTextureSize);me=on(y,me);const Le=l.convert(y.format,y.colorSpace),qe=l.convert(y.type);let Ne=b(y.internalFormat,Le,qe,y.normalized,y.colorSpace,y.isVideoTexture);Fe(re,y);let Re;const Je=y.mipmaps,et=y.isVideoTexture!==!0,it=Ce.__version===void 0||ue===!0,G=Me.dataReady,be=P(y,me);if(y.isDepthTexture)Ne=I(y.format===os,y.type),it&&(et?n.texStorage2D(s.TEXTURE_2D,1,Ne,me.width,me.height):n.texImage2D(s.TEXTURE_2D,0,Ne,me.width,me.height,0,Le,qe,null));else if(y.isDataTexture)if(Je.length>0){et&&it&&n.texStorage2D(s.TEXTURE_2D,be,Ne,Je[0].width,Je[0].height);for(let pe=0,Pe=Je.length;pe<Pe;pe++)Re=Je[pe],et?G&&n.texSubImage2D(s.TEXTURE_2D,pe,0,0,Re.width,Re.height,Le,qe,Re.data):n.texImage2D(s.TEXTURE_2D,pe,Ne,Re.width,Re.height,0,Le,qe,Re.data);y.generateMipmaps=!1}else et?(it&&n.texStorage2D(s.TEXTURE_2D,be,Ne,me.width,me.height),G&&he(y,me,Le,qe)):n.texImage2D(s.TEXTURE_2D,0,Ne,me.width,me.height,0,Le,qe,me.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){et&&it&&n.texStorage3D(s.TEXTURE_2D_ARRAY,be,Ne,Je[0].width,Je[0].height,me.depth);for(let pe=0,Pe=Je.length;pe<Pe;pe++)if(Re=Je[pe],y.format!==xi)if(Le!==null)if(et){if(G)if(y.layerUpdates.size>0){const De=Im(Re.width,Re.height,y.format,y.type);for(const _e of y.layerUpdates){const We=Re.data.subarray(_e*De/Re.data.BYTES_PER_ELEMENT,(_e+1)*De/Re.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,pe,0,0,_e,Re.width,Re.height,1,Le,We)}y.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,pe,0,0,0,Re.width,Re.height,me.depth,Le,Re.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,pe,Ne,Re.width,Re.height,me.depth,0,Re.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?G&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,pe,0,0,0,Re.width,Re.height,me.depth,Le,qe,Re.data):n.texImage3D(s.TEXTURE_2D_ARRAY,pe,Ne,Re.width,Re.height,me.depth,0,Le,qe,Re.data)}else{et&&it&&n.texStorage2D(s.TEXTURE_2D,be,Ne,Je[0].width,Je[0].height);for(let pe=0,Pe=Je.length;pe<Pe;pe++)Re=Je[pe],y.format!==xi?Le!==null?et?G&&n.compressedTexSubImage2D(s.TEXTURE_2D,pe,0,0,Re.width,Re.height,Le,Re.data):n.compressedTexImage2D(s.TEXTURE_2D,pe,Ne,Re.width,Re.height,0,Re.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?G&&n.texSubImage2D(s.TEXTURE_2D,pe,0,0,Re.width,Re.height,Le,qe,Re.data):n.texImage2D(s.TEXTURE_2D,pe,Ne,Re.width,Re.height,0,Le,qe,Re.data)}else if(y.isDataArrayTexture)if(et){if(it&&n.texStorage3D(s.TEXTURE_2D_ARRAY,be,Ne,me.width,me.height,me.depth),G)if(y.layerUpdates.size>0){const pe=Im(me.width,me.height,y.format,y.type);for(const Pe of y.layerUpdates){const De=me.data.subarray(Pe*pe/me.data.BYTES_PER_ELEMENT,(Pe+1)*pe/me.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Pe,me.width,me.height,1,Le,qe,De)}y.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Le,qe,me.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Ne,me.width,me.height,me.depth,0,Le,qe,me.data);else if(y.isData3DTexture)et?(it&&n.texStorage3D(s.TEXTURE_3D,be,Ne,me.width,me.height,me.depth),G&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Le,qe,me.data)):n.texImage3D(s.TEXTURE_3D,0,Ne,me.width,me.height,me.depth,0,Le,qe,me.data);else if(y.isFramebufferTexture){if(it)if(et)n.texStorage2D(s.TEXTURE_2D,be,Ne,me.width,me.height);else{let pe=me.width,Pe=me.height;for(let De=0;De<be;De++)n.texImage2D(s.TEXTURE_2D,De,Ne,pe,Pe,0,Le,qe,null),pe>>=1,Pe>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in s){const pe=s.canvas;if(pe.hasAttribute("layoutsubtree")||pe.setAttribute("layoutsubtree","true"),me.parentNode!==pe){pe.appendChild(me),S.add(y),pe.onpaint=Pe=>{const De=Pe.changedElements;for(const _e of S)De.includes(_e.image)&&(_e.needsUpdate=!0)},pe.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,me);else{const De=s.RGBA,_e=s.RGBA,We=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,De,_e,We,me)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Je.length>0){if(et&&it){const pe=At(Je[0]);n.texStorage2D(s.TEXTURE_2D,be,Ne,pe.width,pe.height)}for(let pe=0,Pe=Je.length;pe<Pe;pe++)Re=Je[pe],et?G&&n.texSubImage2D(s.TEXTURE_2D,pe,0,0,Le,qe,Re):n.texImage2D(s.TEXTURE_2D,pe,Ne,Le,qe,Re);y.generateMipmaps=!1}else if(et){if(it){const pe=At(me);n.texStorage2D(s.TEXTURE_2D,be,Ne,pe.width,pe.height)}G&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Le,qe,me)}else n.texImage2D(s.TEXTURE_2D,0,Ne,Le,qe,me);_(y)&&U(re),Ce.__version=Me.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Ze(C,y,K){if(y.image.length!==6)return;const re=ie(C,y),ue=y.source;n.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+K);const Me=r.get(ue);if(ue.version!==Me.__version||re===!0){n.activeTexture(s.TEXTURE0+K);const Ce=xt.getPrimaries(xt.workingColorSpace),fe=y.colorSpace===Lr?null:xt.getPrimaries(y.colorSpace),me=y.colorSpace===Lr||Ce===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Le=y.isCompressedTexture||y.image[0].isCompressedTexture,qe=y.image[0]&&y.image[0].isDataTexture,Ne=[];for(let _e=0;_e<6;_e++)!Le&&!qe?Ne[_e]=v(y.image[_e],!0,a.maxCubemapSize):Ne[_e]=qe?y.image[_e].image:y.image[_e],Ne[_e]=on(y,Ne[_e]);const Re=Ne[0],Je=l.convert(y.format,y.colorSpace),et=l.convert(y.type),it=b(y.internalFormat,Je,et,y.normalized,y.colorSpace),G=y.isVideoTexture!==!0,be=Me.__version===void 0||re===!0,pe=ue.dataReady;let Pe=P(y,Re);Fe(s.TEXTURE_CUBE_MAP,y);let De;if(Le){G&&be&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,it,Re.width,Re.height);for(let _e=0;_e<6;_e++){De=Ne[_e].mipmaps;for(let We=0;We<De.length;We++){const Ge=De[We];y.format!==xi?Je!==null?G?pe&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We,0,0,Ge.width,Ge.height,Je,Ge.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We,it,Ge.width,Ge.height,0,Ge.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?pe&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We,0,0,Ge.width,Ge.height,Je,et,Ge.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We,it,Ge.width,Ge.height,0,Je,et,Ge.data)}}}else{if(De=y.mipmaps,G&&be){De.length>0&&Pe++;const _e=At(Ne[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,it,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(qe){G?pe&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ne[_e].width,Ne[_e].height,Je,et,Ne[_e].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,it,Ne[_e].width,Ne[_e].height,0,Je,et,Ne[_e].data);for(let We=0;We<De.length;We++){const Ut=De[We].image[_e].image;G?pe&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We+1,0,0,Ut.width,Ut.height,Je,et,Ut.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We+1,it,Ut.width,Ut.height,0,Je,et,Ut.data)}}else{G?pe&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Je,et,Ne[_e]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,it,Je,et,Ne[_e]);for(let We=0;We<De.length;We++){const Ge=De[We];G?pe&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We+1,0,0,Je,et,Ge.image[_e]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We+1,it,Je,et,Ge.image[_e])}}}_(y)&&U(s.TEXTURE_CUBE_MAP),Me.__version=ue.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Qe(C,y,K,re,ue,Me){const Ce=l.convert(K.format,K.colorSpace),fe=l.convert(K.type),me=b(K.internalFormat,Ce,fe,K.normalized,K.colorSpace),Le=r.get(y),qe=r.get(K);if(qe.__renderTarget=y,!Le.__hasExternalTextures){const Ne=Math.max(1,y.width>>Me),Re=Math.max(1,y.height>>Me);ue===s.TEXTURE_3D||ue===s.TEXTURE_2D_ARRAY?n.texImage3D(ue,Me,me,Ne,Re,y.depth,0,Ce,fe,null):n.texImage2D(ue,Me,me,Ne,Re,0,Ce,fe,null)}n.bindFramebuffer(s.FRAMEBUFFER,C),vt(y)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,re,ue,qe.__webglTexture,0,wt(y)):(ue===s.TEXTURE_2D||ue>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,re,ue,qe.__webglTexture,Me),n.bindFramebuffer(s.FRAMEBUFFER,null)}function It(C,y,K){if(s.bindRenderbuffer(s.RENDERBUFFER,C),y.depthBuffer){const re=y.depthTexture,ue=re&&re.isDepthTexture?re.type:null,Me=I(y.stencilBuffer,ue),Ce=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;vt(y)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,wt(y),Me,y.width,y.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,wt(y),Me,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,Me,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ce,s.RENDERBUFFER,C)}else{const re=y.textures;for(let ue=0;ue<re.length;ue++){const Me=re[ue],Ce=l.convert(Me.format,Me.colorSpace),fe=l.convert(Me.type),me=b(Me.internalFormat,Ce,fe,Me.normalized,Me.colorSpace);vt(y)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,wt(y),me,y.width,y.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,wt(y),me,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,me,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ot(C,y,K){const re=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(s.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ue=r.get(y.depthTexture);if(ue.__renderTarget=y,(!ue.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),re){if(ue.__webglInit===void 0&&(ue.__webglInit=!0,y.depthTexture.addEventListener("dispose",O)),ue.__webglTexture===void 0){ue.__webglTexture=s.createTexture(),n.bindTexture(s.TEXTURE_CUBE_MAP,ue.__webglTexture),Fe(s.TEXTURE_CUBE_MAP,y.depthTexture);const Le=l.convert(y.depthTexture.format),qe=l.convert(y.depthTexture.type);let Ne;y.depthTexture.format===nr?Ne=s.DEPTH_COMPONENT24:y.depthTexture.format===os&&(Ne=s.DEPTH24_STENCIL8);for(let Re=0;Re<6;Re++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,Ne,y.width,y.height,0,Le,qe,null)}}else V(y.depthTexture,0);const Me=ue.__webglTexture,Ce=wt(y),fe=re?s.TEXTURE_CUBE_MAP_POSITIVE_X+K:s.TEXTURE_2D,me=y.depthTexture.format===os?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(y.depthTexture.format===nr)vt(y)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,fe,Me,0,Ce):s.framebufferTexture2D(s.FRAMEBUFFER,me,fe,Me,0);else if(y.depthTexture.format===os)vt(y)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,fe,Me,0,Ce):s.framebufferTexture2D(s.FRAMEBUFFER,me,fe,Me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function _t(C){const y=r.get(C),K=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const re=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),re){const ue=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,re.removeEventListener("dispose",ue)};re.addEventListener("dispose",ue),y.__depthDisposeCallback=ue}y.__boundDepthTexture=re}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(K)for(let re=0;re<6;re++)ot(y.__webglFramebuffer[re],C,re);else{const re=C.texture.mipmaps;re&&re.length>0?ot(y.__webglFramebuffer[0],C,0):ot(y.__webglFramebuffer,C,0)}else if(K){y.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(n.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[re]),y.__webglDepthbuffer[re]===void 0)y.__webglDepthbuffer[re]=s.createRenderbuffer(),It(y.__webglDepthbuffer[re],C,!1);else{const ue=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=y.__webglDepthbuffer[re];s.bindRenderbuffer(s.RENDERBUFFER,Me),s.framebufferRenderbuffer(s.FRAMEBUFFER,ue,s.RENDERBUFFER,Me)}}else{const re=C.texture.mipmaps;if(re&&re.length>0?n.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),It(y.__webglDepthbuffer,C,!1);else{const ue=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Me),s.framebufferRenderbuffer(s.FRAMEBUFFER,ue,s.RENDERBUFFER,Me)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function pt(C,y,K){const re=r.get(C);y!==void 0&&Qe(re.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&_t(C)}function ft(C){const y=C.texture,K=r.get(C),re=r.get(y);C.addEventListener("dispose",E);const ue=C.textures,Me=C.isWebGLCubeRenderTarget===!0,Ce=ue.length>1;if(Ce||(re.__webglTexture===void 0&&(re.__webglTexture=s.createTexture()),re.__version=y.version,u.memory.textures++),Me){K.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(y.mipmaps&&y.mipmaps.length>0){K.__webglFramebuffer[fe]=[];for(let me=0;me<y.mipmaps.length;me++)K.__webglFramebuffer[fe][me]=s.createFramebuffer()}else K.__webglFramebuffer[fe]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){K.__webglFramebuffer=[];for(let fe=0;fe<y.mipmaps.length;fe++)K.__webglFramebuffer[fe]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(Ce)for(let fe=0,me=ue.length;fe<me;fe++){const Le=r.get(ue[fe]);Le.__webglTexture===void 0&&(Le.__webglTexture=s.createTexture(),u.memory.textures++)}if(C.samples>0&&vt(C)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let fe=0;fe<ue.length;fe++){const me=ue[fe];K.__webglColorRenderbuffer[fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[fe]);const Le=l.convert(me.format,me.colorSpace),qe=l.convert(me.type),Ne=b(me.internalFormat,Le,qe,me.normalized,me.colorSpace,C.isXRRenderTarget===!0),Re=wt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Re,Ne,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,K.__webglColorRenderbuffer[fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),It(K.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Me){n.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture),Fe(s.TEXTURE_CUBE_MAP,y);for(let fe=0;fe<6;fe++)if(y.mipmaps&&y.mipmaps.length>0)for(let me=0;me<y.mipmaps.length;me++)Qe(K.__webglFramebuffer[fe][me],C,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,me);else Qe(K.__webglFramebuffer[fe],C,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);_(y)&&U(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ce){for(let fe=0,me=ue.length;fe<me;fe++){const Le=ue[fe],qe=r.get(Le);let Ne=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Ne=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ne,qe.__webglTexture),Fe(Ne,Le),Qe(K.__webglFramebuffer,C,Le,s.COLOR_ATTACHMENT0+fe,Ne,0),_(Le)&&U(Ne)}n.unbindTexture()}else{let fe=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(fe=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(fe,re.__webglTexture),Fe(fe,y),y.mipmaps&&y.mipmaps.length>0)for(let me=0;me<y.mipmaps.length;me++)Qe(K.__webglFramebuffer[me],C,y,s.COLOR_ATTACHMENT0,fe,me);else Qe(K.__webglFramebuffer,C,y,s.COLOR_ATTACHMENT0,fe,0);_(y)&&U(fe),n.unbindTexture()}C.depthBuffer&&_t(C)}function Ot(C){const y=C.textures;for(let K=0,re=y.length;K<re;K++){const ue=y[K];if(_(ue)){const Me=F(C),Ce=r.get(ue).__webglTexture;n.bindTexture(Me,Ce),U(Me),n.unbindTexture()}}}const Xt=[],Yt=[];function kt(C){if(C.samples>0){if(vt(C)===!1){const y=C.textures,K=C.width,re=C.height;let ue=s.COLOR_BUFFER_BIT;const Me=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=r.get(C),fe=y.length>1;if(fe)for(let Le=0;Le<y.length;Le++)n.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const me=C.texture.mipmaps;me&&me.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Le=0;Le<y.length;Le++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ue|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ue|=s.STENCIL_BUFFER_BIT)),fe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ce.__webglColorRenderbuffer[Le]);const qe=r.get(y[Le]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,qe,0)}s.blitFramebuffer(0,0,K,re,0,0,K,re,ue,s.NEAREST),p===!0&&(Xt.length=0,Yt.length=0,Xt.push(s.COLOR_ATTACHMENT0+Le),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Xt.push(Me),Yt.push(Me),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Yt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Xt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),fe)for(let Le=0;Le<y.length;Le++){n.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.RENDERBUFFER,Ce.__webglColorRenderbuffer[Le]);const qe=r.get(y[Le]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.TEXTURE_2D,qe,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&p){const y=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function wt(C){return Math.min(a.maxSamples,C.samples)}function vt(C){const y=r.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function X(C){const y=u.render.frame;x.get(C)!==y&&(x.set(C,y),C.update())}function on(C,y){const K=C.colorSpace,re=C.format,ue=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||K!==Yl&&K!==Lr&&(xt.getTransfer(K)===Dt?(re!==xi||ue!==si)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Tt("WebGLTextures: Unsupported texture color space:",K)),y}function At(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(m.width=C.naturalWidth||C.width,m.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(m.width=C.displayWidth,m.height=C.displayHeight):(m.width=C.width,m.height=C.height),m}this.allocateTextureUnit=le,this.resetTextureUnits=ce,this.getTextureUnits=de,this.setTextureUnits=Z,this.setTexture2D=V,this.setTexture2DArray=Q,this.setTexture3D=J,this.setTextureCube=N,this.rebindTextures=pt,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=Ot,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=Qe,this.useMultisampledRTT=vt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function M1(s,e){function n(r,a=Lr){let l;const u=xt.getTransfer(a);if(r===si)return s.UNSIGNED_BYTE;if(r===_d)return s.UNSIGNED_SHORT_4_4_4_4;if(r===xd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Eg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Tg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===yg)return s.BYTE;if(r===Mg)return s.SHORT;if(r===ta)return s.UNSIGNED_SHORT;if(r===vd)return s.INT;if(r===Di)return s.UNSIGNED_INT;if(r===Ci)return s.FLOAT;if(r===tr)return s.HALF_FLOAT;if(r===wg)return s.ALPHA;if(r===Ag)return s.RGB;if(r===xi)return s.RGBA;if(r===nr)return s.DEPTH_COMPONENT;if(r===os)return s.DEPTH_STENCIL;if(r===bg)return s.RED;if(r===Sd)return s.RED_INTEGER;if(r===ls)return s.RG;if(r===yd)return s.RG_INTEGER;if(r===Md)return s.RGBA_INTEGER;if(r===Bl||r===zl||r===Vl||r===Gl)if(u===Dt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Bl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===zl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Vl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Gl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Bl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===zl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Vl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Gl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Df||r===If||r===Uf||r===Ff)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Df)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===If)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Uf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ff)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Of||r===kf||r===Bf||r===zf||r===Vf||r===Wl||r===Gf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Of||r===kf)return u===Dt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Bf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===zf)return l.COMPRESSED_R11_EAC;if(r===Vf)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Wl)return l.COMPRESSED_RG11_EAC;if(r===Gf)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Hf||r===Wf||r===Xf||r===Yf||r===qf||r===$f||r===Kf||r===Zf||r===jf||r===Qf||r===Jf||r===ed||r===td||r===nd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Hf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Wf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Xf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Yf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===qf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===$f)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Kf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Zf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===jf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Qf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Jf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ed)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===td)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===nd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===id||r===rd||r===sd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===id)return u===Dt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===rd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===sd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===od||r===ad||r===Xl||r===ld)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===od)return l.COMPRESSED_RED_RGTC1_EXT;if(r===ad)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Xl)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ld)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===na?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const E1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,T1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class w1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new Bg(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Ii({vertexShader:E1,fragmentShader:T1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ir(new Jl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class A1 extends us{constructor(e,n){super();const r=this;let a=null,l=1,u=null,d="local-floor",p=1,m=null,x=null,S=null,g=null,M=null,w=null;const R=typeof XRWebGLBinding<"u",v=new w1,_={},U=n.getContextAttributes();let F=null,b=null;const I=[],P=[],O=new Rt;let E=null;const L=new ri;L.viewport=new Jt;const z=new ri;z.viewport=new Jt;const B=[L,z],W=new Fx;let ce=null,de=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let ve=I[ie];return ve===void 0&&(ve=new Ku,I[ie]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(ie){let ve=I[ie];return ve===void 0&&(ve=new Ku,I[ie]=ve),ve.getGripSpace()},this.getHand=function(ie){let ve=I[ie];return ve===void 0&&(ve=new Ku,I[ie]=ve),ve.getHandSpace()};function Z(ie){const ve=P.indexOf(ie.inputSource);if(ve===-1)return;const he=I[ve];he!==void 0&&(he.update(ie.inputSource,ie.frame,m||u),he.dispatchEvent({type:ie.type,data:ie.inputSource}))}function le(){a.removeEventListener("select",Z),a.removeEventListener("selectstart",Z),a.removeEventListener("selectend",Z),a.removeEventListener("squeeze",Z),a.removeEventListener("squeezestart",Z),a.removeEventListener("squeezeend",Z),a.removeEventListener("end",le),a.removeEventListener("inputsourceschange",q);for(let ie=0;ie<I.length;ie++){const ve=P[ie];ve!==null&&(P[ie]=null,I[ie].disconnect(ve))}ce=null,de=null,v.reset();for(const ie in _)delete _[ie];e.setRenderTarget(F),M=null,g=null,S=null,a=null,b=null,Fe.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){l=ie,r.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){d=ie,r.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(ie){m=ie},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return S===null&&R&&(S=new XRWebGLBinding(a,n)),S},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function(ie){if(a=ie,a!==null){if(F=e.getRenderTarget(),a.addEventListener("select",Z),a.addEventListener("selectstart",Z),a.addEventListener("selectend",Z),a.addEventListener("squeeze",Z),a.addEventListener("squeezestart",Z),a.addEventListener("squeezeend",Z),a.addEventListener("end",le),a.addEventListener("inputsourceschange",q),U.xrCompatible!==!0&&await n.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(O),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,Ue=null,Ze=null;U.depth&&(Ze=U.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,he=U.stencil?os:nr,Ue=U.stencil?na:Di);const Qe={colorFormat:n.RGBA8,depthFormat:Ze,scaleFactor:l};S=this.getBinding(),g=S.createProjectionLayer(Qe),a.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),b=new Ni(g.textureWidth,g.textureHeight,{format:xi,type:si,depthTexture:new to(g.textureWidth,g.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const he={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(a,n,he),a.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),b=new Ni(M.framebufferWidth,M.framebufferHeight,{format:xi,type:si,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(p),m=null,u=await a.requestReferenceSpace(d),Fe.setContext(a),Fe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function q(ie){for(let ve=0;ve<ie.removed.length;ve++){const he=ie.removed[ve],Ue=P.indexOf(he);Ue>=0&&(P[Ue]=null,I[Ue].disconnect(he))}for(let ve=0;ve<ie.added.length;ve++){const he=ie.added[ve];let Ue=P.indexOf(he);if(Ue===-1){for(let Qe=0;Qe<I.length;Qe++)if(Qe>=P.length){P.push(he),Ue=Qe;break}else if(P[Qe]===null){P[Qe]=he,Ue=Qe;break}if(Ue===-1)break}const Ze=I[Ue];Ze&&Ze.connect(he)}}const V=new se,Q=new se;function J(ie,ve,he){V.setFromMatrixPosition(ve.matrixWorld),Q.setFromMatrixPosition(he.matrixWorld);const Ue=V.distanceTo(Q),Ze=ve.projectionMatrix.elements,Qe=he.projectionMatrix.elements,It=Ze[14]/(Ze[10]-1),ot=Ze[14]/(Ze[10]+1),_t=(Ze[9]+1)/Ze[5],pt=(Ze[9]-1)/Ze[5],ft=(Ze[8]-1)/Ze[0],Ot=(Qe[8]+1)/Qe[0],Xt=It*ft,Yt=It*Ot,kt=Ue/(-ft+Ot),wt=kt*-ft;if(ve.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(wt),ie.translateZ(kt),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Ze[10]===-1)ie.projectionMatrix.copy(ve.projectionMatrix),ie.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const vt=It+kt,X=ot+kt,on=Xt-wt,At=Yt+(Ue-wt),C=_t*ot/X*vt,y=pt*ot/X*vt;ie.projectionMatrix.makePerspective(on,At,C,y,vt,X),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function N(ie,ve){ve===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(ve.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(a===null)return;let ve=ie.near,he=ie.far;v.texture!==null&&(v.depthNear>0&&(ve=v.depthNear),v.depthFar>0&&(he=v.depthFar)),W.near=z.near=L.near=ve,W.far=z.far=L.far=he,(ce!==W.near||de!==W.far)&&(a.updateRenderState({depthNear:W.near,depthFar:W.far}),ce=W.near,de=W.far),W.layers.mask=ie.layers.mask|6,L.layers.mask=W.layers.mask&-5,z.layers.mask=W.layers.mask&-3;const Ue=ie.parent,Ze=W.cameras;N(W,Ue);for(let Qe=0;Qe<Ze.length;Qe++)N(Ze[Qe],Ue);Ze.length===2?J(W,L,z):W.projectionMatrix.copy(L.projectionMatrix),$(ie,W,Ue)};function $(ie,ve,he){he===null?ie.matrix.copy(ve.matrixWorld):(ie.matrix.copy(he.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(ve.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(ve.projectionMatrix),ie.projectionMatrixInverse.copy(ve.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=cd*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(g===null&&M===null))return p},this.setFoveation=function(ie){p=ie,g!==null&&(g.fixedFoveation=ie),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ie)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(W)},this.getCameraTexture=function(ie){return _[ie]};let we=null;function Oe(ie,ve){if(x=ve.getViewerPose(m||u),w=ve,x!==null){const he=x.views;M!==null&&(e.setRenderTargetFramebuffer(b,M.framebuffer),e.setRenderTarget(b));let Ue=!1;he.length!==W.cameras.length&&(W.cameras.length=0,Ue=!0);for(let ot=0;ot<he.length;ot++){const _t=he[ot];let pt=null;if(M!==null)pt=M.getViewport(_t);else{const Ot=S.getViewSubImage(g,_t);pt=Ot.viewport,ot===0&&(e.setRenderTargetTextures(b,Ot.colorTexture,Ot.depthStencilTexture),e.setRenderTarget(b))}let ft=B[ot];ft===void 0&&(ft=new ri,ft.layers.enable(ot),ft.viewport=new Jt,B[ot]=ft),ft.matrix.fromArray(_t.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(_t.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(pt.x,pt.y,pt.width,pt.height),ot===0&&(W.matrix.copy(ft.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Ue===!0&&W.cameras.push(ft)}const Ze=a.enabledFeatures;if(Ze&&Ze.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&R){S=r.getBinding();const ot=S.getDepthInformation(he[0]);ot&&ot.isValid&&ot.texture&&v.init(ot,a.renderState)}if(Ze&&Ze.includes("camera-access")&&R){e.state.unbindTexture(),S=r.getBinding();for(let ot=0;ot<he.length;ot++){const _t=he[ot].camera;if(_t){let pt=_[_t];pt||(pt=new Bg,_[_t]=pt);const ft=S.getCameraImage(_t);pt.sourceTexture=ft}}}}for(let he=0;he<I.length;he++){const Ue=P[he],Ze=I[he];Ue!==null&&Ze!==void 0&&Ze.update(Ue,ve,m||u)}we&&we(ie,ve),ve.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ve}),w=null}const Fe=new Hg;Fe.setAnimationLoop(Oe),this.setAnimationLoop=function(ie){we=ie},this.dispose=function(){}}}const b1=new tn,Zg=new ct;Zg.set(-1,0,0,0,1,0,0,0,1);function R1(s,e){function n(v,_){v.matrixAutoUpdate===!0&&v.updateMatrix(),_.value.copy(v.matrix)}function r(v,_){_.color.getRGB(v.fogColor.value,zg(s)),_.isFog?(v.fogNear.value=_.near,v.fogFar.value=_.far):_.isFogExp2&&(v.fogDensity.value=_.density)}function a(v,_,U,F,b){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?l(v,_):_.isMeshLambertMaterial?(l(v,_),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(l(v,_),S(v,_)):_.isMeshPhongMaterial?(l(v,_),x(v,_),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(l(v,_),g(v,_),_.isMeshPhysicalMaterial&&M(v,_,b)):_.isMeshMatcapMaterial?(l(v,_),w(v,_)):_.isMeshDepthMaterial?l(v,_):_.isMeshDistanceMaterial?(l(v,_),R(v,_)):_.isMeshNormalMaterial?l(v,_):_.isLineBasicMaterial?(u(v,_),_.isLineDashedMaterial&&d(v,_)):_.isPointsMaterial?p(v,_,U,F):_.isSpriteMaterial?m(v,_):_.isShadowMaterial?(v.color.value.copy(_.color),v.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(v,_){v.opacity.value=_.opacity,_.color&&v.diffuse.value.copy(_.color),_.emissive&&v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(v.map.value=_.map,n(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,n(_.alphaMap,v.alphaMapTransform)),_.bumpMap&&(v.bumpMap.value=_.bumpMap,n(_.bumpMap,v.bumpMapTransform),v.bumpScale.value=_.bumpScale,_.side===Vn&&(v.bumpScale.value*=-1)),_.normalMap&&(v.normalMap.value=_.normalMap,n(_.normalMap,v.normalMapTransform),v.normalScale.value.copy(_.normalScale),_.side===Vn&&v.normalScale.value.negate()),_.displacementMap&&(v.displacementMap.value=_.displacementMap,n(_.displacementMap,v.displacementMapTransform),v.displacementScale.value=_.displacementScale,v.displacementBias.value=_.displacementBias),_.emissiveMap&&(v.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,v.emissiveMapTransform)),_.specularMap&&(v.specularMap.value=_.specularMap,n(_.specularMap,v.specularMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);const U=e.get(_),F=U.envMap,b=U.envMapRotation;F&&(v.envMap.value=F,v.envMapRotation.value.setFromMatrix4(b1.makeRotationFromEuler(b)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(Zg),v.reflectivity.value=_.reflectivity,v.ior.value=_.ior,v.refractionRatio.value=_.refractionRatio),_.lightMap&&(v.lightMap.value=_.lightMap,v.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,v.lightMapTransform)),_.aoMap&&(v.aoMap.value=_.aoMap,v.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,v.aoMapTransform))}function u(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,_.map&&(v.map.value=_.map,n(_.map,v.mapTransform))}function d(v,_){v.dashSize.value=_.dashSize,v.totalSize.value=_.dashSize+_.gapSize,v.scale.value=_.scale}function p(v,_,U,F){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.size.value=_.size*U,v.scale.value=F*.5,_.map&&(v.map.value=_.map,n(_.map,v.uvTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,n(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function m(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.rotation.value=_.rotation,_.map&&(v.map.value=_.map,n(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,n(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function x(v,_){v.specular.value.copy(_.specular),v.shininess.value=Math.max(_.shininess,1e-4)}function S(v,_){_.gradientMap&&(v.gradientMap.value=_.gradientMap)}function g(v,_){v.metalness.value=_.metalness,_.metalnessMap&&(v.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,v.metalnessMapTransform)),v.roughness.value=_.roughness,_.roughnessMap&&(v.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,v.roughnessMapTransform)),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)}function M(v,_,U){v.ior.value=_.ior,_.sheen>0&&(v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),v.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(v.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,v.sheenColorMapTransform)),_.sheenRoughnessMap&&(v.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,v.sheenRoughnessMapTransform))),_.clearcoat>0&&(v.clearcoat.value=_.clearcoat,v.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(v.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,v.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(v.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Vn&&v.clearcoatNormalScale.value.negate())),_.dispersion>0&&(v.dispersion.value=_.dispersion),_.iridescence>0&&(v.iridescence.value=_.iridescence,v.iridescenceIOR.value=_.iridescenceIOR,v.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(v.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,v.iridescenceMapTransform)),_.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),_.transmission>0&&(v.transmission.value=_.transmission,v.transmissionSamplerMap.value=U.texture,v.transmissionSamplerSize.value.set(U.width,U.height),_.transmissionMap&&(v.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,v.transmissionMapTransform)),v.thickness.value=_.thickness,_.thicknessMap&&(v.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=_.attenuationDistance,v.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(v.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(v.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=_.specularIntensity,v.specularColor.value.copy(_.specularColor),_.specularColorMap&&(v.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,v.specularColorMapTransform)),_.specularIntensityMap&&(v.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,v.specularIntensityMapTransform))}function w(v,_){_.matcap&&(v.matcap.value=_.matcap)}function R(v,_){const U=e.get(_).light;v.referencePosition.value.setFromMatrixPosition(U.matrixWorld),v.nearDistance.value=U.shadow.camera.near,v.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function C1(s,e,n,r){let a={},l={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(b,I){const P=I.program;r.uniformBlockBinding(b,P)}function m(b,I){let P=a[b.id];P===void 0&&(v(b),P=x(b),a[b.id]=P,b.addEventListener("dispose",U));const O=I.program;r.updateUBOMapping(b,O);const E=e.render.frame;l[b.id]!==E&&(g(b),l[b.id]=E)}function x(b){const I=S();b.__bindingPointIndex=I;const P=s.createBuffer(),O=b.__size,E=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,O,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,I,P),P}function S(){for(let b=0;b<d;b++)if(u.indexOf(b)===-1)return u.push(b),b;return Tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(b){const I=a[b.id],P=b.uniforms,O=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,I);for(let E=0,L=P.length;E<L;E++){const z=P[E];if(Array.isArray(z))for(let B=0,W=z.length;B<W;B++)M(z[B],E,B,O);else M(z,E,0,O)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(b,I,P,O){if(R(b,I,P,O)===!0){const E=b.__offset,L=b.value;if(Array.isArray(L)){let z=0;for(let B=0;B<L.length;B++){const W=L[B],ce=_(W);w(W,b.__data,z),typeof W!="number"&&typeof W!="boolean"&&!W.isMatrix3&&!ArrayBuffer.isView(W)&&(z+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}}else w(L,b.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,b.__data)}}function w(b,I,P){typeof b=="number"||typeof b=="boolean"?I[0]=b:b.isMatrix3?(I[0]=b.elements[0],I[1]=b.elements[1],I[2]=b.elements[2],I[3]=0,I[4]=b.elements[3],I[5]=b.elements[4],I[6]=b.elements[5],I[7]=0,I[8]=b.elements[6],I[9]=b.elements[7],I[10]=b.elements[8],I[11]=0):ArrayBuffer.isView(b)?I.set(new b.constructor(b.buffer,b.byteOffset,I.length)):b.toArray(I,P)}function R(b,I,P,O){const E=b.value,L=I+"_"+P;if(O[L]===void 0)return typeof E=="number"||typeof E=="boolean"?O[L]=E:ArrayBuffer.isView(E)?O[L]=E.slice():O[L]=E.clone(),!0;{const z=O[L];if(typeof E=="number"||typeof E=="boolean"){if(z!==E)return O[L]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(z.equals(E)===!1)return z.copy(E),!0}}return!1}function v(b){const I=b.uniforms;let P=0;const O=16;for(let L=0,z=I.length;L<z;L++){const B=Array.isArray(I[L])?I[L]:[I[L]];for(let W=0,ce=B.length;W<ce;W++){const de=B[W],Z=Array.isArray(de.value)?de.value:[de.value];for(let le=0,q=Z.length;le<q;le++){const V=Z[le],Q=_(V),J=P%O,N=J%Q.boundary,$=J+N;P+=N,$!==0&&O-$<Q.storage&&(P+=O-$),de.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),de.__offset=P,P+=Q.storage}}}const E=P%O;return E>0&&(P+=O-E),b.__size=P,b.__cache={},this}function _(b){const I={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(I.boundary=4,I.storage=4):b.isVector2?(I.boundary=8,I.storage=8):b.isVector3||b.isColor?(I.boundary=16,I.storage=12):b.isVector4?(I.boundary=16,I.storage=16):b.isMatrix3?(I.boundary=48,I.storage=48):b.isMatrix4?(I.boundary=64,I.storage=64):b.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(I.boundary=16,I.storage=b.byteLength):st("WebGLRenderer: Unsupported uniform value type.",b),I}function U(b){const I=b.target;I.removeEventListener("dispose",U);const P=u.indexOf(I.__bindingPointIndex);u.splice(P,1),s.deleteBuffer(a[I.id]),delete a[I.id],delete l[I.id]}function F(){for(const b in a)s.deleteBuffer(a[b]);u=[],a={},l={}}return{bind:p,update:m,dispose:F}}const P1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let bi=null;function L1(){return bi===null&&(bi=new Mx(P1,16,16,ls,tr),bi.name="DFG_LUT",bi.minFilter=An,bi.magFilter=An,bi.wrapS=ji,bi.wrapT=ji,bi.generateMipmaps=!1,bi.needsUpdate=!0),bi}class N1{constructor(e={}){const{canvas:n=J_(),context:r=null,depth:a=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:g=!1,outputBufferType:M=si}=e;this.isWebGLRenderer=!0;let w;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=r.getContextAttributes().alpha}else w=u;const R=M,v=new Set([Md,yd,Sd]),_=new Set([si,Di,ta,na,_d,xd]),U=new Uint32Array(4),F=new Int32Array(4),b=new se;let I=null,P=null;const O=[],E=[];let L=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const z=this;let B=!1,W=null,ce=null,de=null,Z=null;this._outputColorSpace=ii;let le=0,q=0,V=null,Q=-1,J=null;const N=new Jt,$=new Jt;let we=null;const Oe=new yt(0);let Fe=0,ie=n.width,ve=n.height,he=1,Ue=null,Ze=null;const Qe=new Jt(0,0,ie,ve),It=new Jt(0,0,ie,ve);let ot=!1;const _t=new Fg;let pt=!1,ft=!1;const Ot=new tn,Xt=new se,Yt=new Jt,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let wt=!1;function vt(){return V===null?he:1}let X=r;function on(A,Y){return n.getContext(A,Y)}try{const A={alpha:!0,depth:a,stencil:l,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:x,failIfMajorPerformanceCaveat:S};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${gd}`),n.addEventListener("webglcontextlost",Ut,!1),n.addEventListener("webglcontextrestored",Ct,!1),n.addEventListener("webglcontextcreationerror",xn,!1),X===null){const Y="webgl2";if(X=on(Y,A),X===null)throw on(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Tt("WebGLRenderer: "+A.message),A}let At,C,y,K,re,ue,Me,Ce,fe,me,Le,qe,Ne,Re,Je,et,it,G,be,pe,Pe,De,_e;function We(){At=new LM(X),At.init(),Pe=new M1(X,At),C=new EM(X,At,e,Pe),y=new S1(X,At),C.reversedDepthBuffer&&g&&y.buffers.depth.setReversed(!0),ce=X.createFramebuffer(),de=X.createFramebuffer(),Z=X.createFramebuffer(),K=new IM(X),re=new o1,ue=new y1(X,At,y,re,C,Pe,K),Me=new PM(z),Ce=new kx(X),De=new yM(X,Ce),fe=new NM(X,Ce,K,De),me=new FM(X,fe,Ce,De,K),G=new UM(X,C,ue),Je=new TM(re),Le=new s1(z,Me,At,C,De,Je),qe=new R1(z,re),Ne=new l1,Re=new p1(At),it=new SM(z,Me,y,me,w,p),et=new x1(z,me,C),_e=new C1(X,K,C,y),be=new MM(X,At,K),pe=new DM(X,At,K),K.programs=Le.programs,z.capabilities=C,z.extensions=At,z.properties=re,z.renderLists=Ne,z.shadowMap=et,z.state=y,z.info=K}We(),R!==si&&(L=new kM(R,n.width,n.height,d,a,l));const Ge=new A1(z,X);this.xr=Ge,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const A=At.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=At.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(A){A!==void 0&&(he=A,this.setSize(ie,ve,!1))},this.getSize=function(A){return A.set(ie,ve)},this.setSize=function(A,Y,oe=!0){if(Ge.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=A,ve=Y,n.width=Math.floor(A*he),n.height=Math.floor(Y*he),oe===!0&&(n.style.width=A+"px",n.style.height=Y+"px"),L!==null&&L.setSize(n.width,n.height),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(ie*he,ve*he).floor()},this.setDrawingBufferSize=function(A,Y,oe){ie=A,ve=Y,he=oe,n.width=Math.floor(A*oe),n.height=Math.floor(Y*oe),this.setViewport(0,0,A,Y)},this.setEffects=function(A){if(R===si){Tt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let Y=0;Y<A.length;Y++)if(A[Y].isOutputPass===!0){st("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(N)},this.getViewport=function(A){return A.copy(Qe)},this.setViewport=function(A,Y,oe,te){A.isVector4?Qe.set(A.x,A.y,A.z,A.w):Qe.set(A,Y,oe,te),y.viewport(N.copy(Qe).multiplyScalar(he).round())},this.getScissor=function(A){return A.copy(It)},this.setScissor=function(A,Y,oe,te){A.isVector4?It.set(A.x,A.y,A.z,A.w):It.set(A,Y,oe,te),y.scissor($.copy(It).multiplyScalar(he).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(A){y.setScissorTest(ot=A)},this.setOpaqueSort=function(A){Ue=A},this.setTransparentSort=function(A){Ze=A},this.getClearColor=function(A){return A.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(A=!0,Y=!0,oe=!0){let te=0;if(A){let ee=!1;if(V!==null){const Ae=V.texture.format;ee=v.has(Ae)}if(ee){const Ae=V.texture.type,ze=_.has(Ae),Te=it.getClearColor(),Xe=it.getClearAlpha(),je=Te.r,at=Te.g,lt=Te.b;ze?(U[0]=je,U[1]=at,U[2]=lt,U[3]=Xe,X.clearBufferuiv(X.COLOR,0,U)):(F[0]=je,F[1]=at,F[2]=lt,F[3]=Xe,X.clearBufferiv(X.COLOR,0,F))}else te|=X.COLOR_BUFFER_BIT}Y&&(te|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(te|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&X.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),W=A},this.dispose=function(){n.removeEventListener("webglcontextlost",Ut,!1),n.removeEventListener("webglcontextrestored",Ct,!1),n.removeEventListener("webglcontextcreationerror",xn,!1),it.dispose(),Ne.dispose(),Re.dispose(),re.dispose(),Me.dispose(),me.dispose(),De.dispose(),_e.dispose(),Le.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",aa),Ge.removeEventListener("sessionend",la),bn.stop()};function Ut(A){A.preventDefault(),hm("WebGLRenderer: Context Lost."),B=!0}function Ct(){hm("WebGLRenderer: Context Restored."),B=!1;const A=K.autoReset,Y=et.enabled,oe=et.autoUpdate,te=et.needsUpdate,ee=et.type;We(),K.autoReset=A,et.enabled=Y,et.autoUpdate=oe,et.needsUpdate=te,et.type=ee}function xn(A){Tt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Kn(A){const Y=A.target;Y.removeEventListener("dispose",Kn),Ir(Y)}function Ir(A){fs(A),re.remove(A)}function fs(A){const Y=re.get(A).programs;Y!==void 0&&(Y.forEach(function(oe){Le.releaseProgram(oe)}),A.isShaderMaterial&&Le.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,oe,te,ee,Ae){Y===null&&(Y=kt);const ze=ee.isMesh&&ee.matrixWorld.determinantAffine()<0,Te=Kt(A,Y,oe,te,ee);y.setMaterial(te,ze);let Xe=oe.index,je=1;if(te.wireframe===!0){if(Xe=fe.getWireframeAttribute(oe),Xe===void 0)return;je=2}const at=oe.drawRange,lt=oe.attributes.position;let $e=at.start*je,Mt=(at.start+at.count)*je;Ae!==null&&($e=Math.max($e,Ae.start*je),Mt=Math.min(Mt,(Ae.start+Ae.count)*je)),Xe!==null?($e=Math.max($e,0),Mt=Math.min(Mt,Xe.count)):lt!=null&&($e=Math.max($e,0),Mt=Math.min(Mt,lt.count));const Bt=Mt-$e;if(Bt<0||Bt===1/0)return;De.setup(ee,te,Te,oe,Xe);let qt,Lt=be;if(Xe!==null&&(qt=Ce.get(Xe),Lt=pe,Lt.setIndex(qt)),ee.isMesh)te.wireframe===!0?(y.setLineWidth(te.wireframeLinewidth*vt()),Lt.setMode(X.LINES)):Lt.setMode(X.TRIANGLES);else if(ee.isLine){let nn=te.linewidth;nn===void 0&&(nn=1),y.setLineWidth(nn*vt()),ee.isLineSegments?Lt.setMode(X.LINES):ee.isLineLoop?Lt.setMode(X.LINE_LOOP):Lt.setMode(X.LINE_STRIP)}else ee.isPoints?Lt.setMode(X.POINTS):ee.isSprite&&Lt.setMode(X.TRIANGLES);if(ee.isBatchedMesh)if(At.get("WEBGL_multi_draw"))Lt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const nn=ee._multiDrawStarts,ke=ee._multiDrawCounts,mn=ee._multiDrawCount,ht=Xe?Ce.get(Xe).bytesPerElement:1,Nn=re.get(te).currentProgram.getUniforms();for(let Dn=0;Dn<mn;Dn++)Nn.setValue(X,"_gl_DrawID",Dn),Lt.render(nn[Dn]/ht,ke[Dn])}else if(ee.isInstancedMesh)Lt.renderInstances($e,Bt,ee.count);else if(oe.isInstancedBufferGeometry){const nn=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,ke=Math.min(oe.instanceCount,nn);Lt.renderInstances($e,Bt,ke)}else Lt.render($e,Bt)};function Ur(A,Y,oe){A.transparent===!0&&A.side===Zi&&A.forceSinglePass===!1?(A.side=Vn,A.needsUpdate=!0,kr(A,Y,oe),A.side=Dr,A.needsUpdate=!0,kr(A,Y,oe),A.side=Zi):kr(A,Y,oe)}this.compile=function(A,Y,oe=null){oe===null&&(oe=A),P=Re.get(oe),P.init(Y),E.push(P),oe.traverseVisible(function(ee){ee.isLight&&ee.layers.test(Y.layers)&&(P.pushLight(ee),ee.castShadow&&P.pushShadow(ee))}),A!==oe&&A.traverseVisible(function(ee){ee.isLight&&ee.layers.test(Y.layers)&&(P.pushLight(ee),ee.castShadow&&P.pushShadow(ee))}),P.setupLights();const te=new Set;return A.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const Ae=ee.material;if(Ae)if(Array.isArray(Ae))for(let ze=0;ze<Ae.length;ze++){const Te=Ae[ze];Ur(Te,oe,ee),te.add(Te)}else Ur(Ae,oe,ee),te.add(Ae)}),P=E.pop(),te},this.compileAsync=function(A,Y,oe=null){const te=this.compile(A,Y,oe);return new Promise(ee=>{function Ae(){if(te.forEach(function(ze){re.get(ze).currentProgram.isReady()&&te.delete(ze)}),te.size===0){ee(A);return}setTimeout(Ae,10)}At.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Fr=null;function nc(A){Fr&&Fr(A)}function aa(){bn.stop()}function la(){bn.start()}const bn=new Hg;bn.setAnimationLoop(nc),typeof self<"u"&&bn.setContext(self),this.setAnimationLoop=function(A){Fr=A,Ge.setAnimationLoop(A),A===null?bn.stop():bn.start()},Ge.addEventListener("sessionstart",aa),Ge.addEventListener("sessionend",la),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){Tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;W!==null&&W.renderStart(A,Y);const oe=Ge.enabled===!0&&Ge.isPresenting===!0,te=L!==null&&(V===null||oe)&&L.begin(z,V);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(Y),Y=Ge.getCamera()),A.isScene===!0&&A.onBeforeRender(z,A,Y,V),P=Re.get(A,E.length),P.init(Y),P.state.textureUnits=ue.getTextureUnits(),E.push(P),Ot.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),_t.setFromProjectionMatrix(Ot,Pi,Y.reversedDepth),ft=this.localClippingEnabled,pt=Je.init(this.clippingPlanes,ft),I=Ne.get(A,O.length),I.init(),O.push(I),Ge.enabled===!0&&Ge.isPresenting===!0){const ze=z.xr.getDepthSensingMesh();ze!==null&&ds(ze,Y,-1/0,z.sortObjects)}ds(A,Y,0,z.sortObjects),I.finish(),z.sortObjects===!0&&I.sort(Ue,Ze,Y.reversedDepth),wt=Ge.enabled===!1||Ge.isPresenting===!1||Ge.hasDepthSensing()===!1,wt&&it.addToRenderList(I,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),pt===!0&&Je.beginShadows();const ee=P.state.shadowsArray;if(et.render(ee,A,Y),pt===!0&&Je.endShadows(),(te&&L.hasRenderPass())===!1){const ze=I.opaque,Te=I.transmissive;if(P.setupLights(),Y.isArrayCamera){const Xe=Y.cameras;if(Te.length>0)for(let je=0,at=Xe.length;je<at;je++){const lt=Xe[je];ca(ze,Te,A,lt)}wt&&it.render(A);for(let je=0,at=Xe.length;je<at;je++){const lt=Xe[je];oo(I,A,lt,lt.viewport)}}else Te.length>0&&ca(ze,Te,A,Y),wt&&it.render(A),oo(I,A,Y)}V!==null&&q===0&&(ue.updateMultisampleRenderTarget(V),ue.updateRenderTargetMipmap(V)),te&&L.end(z),A.isScene===!0&&A.onAfterRender(z,A,Y),De.resetDefaultState(),Q=-1,J=null,E.pop(),E.length>0?(P=E[E.length-1],ue.setTextureUnits(P.state.textureUnits),pt===!0&&Je.setGlobalState(z.clippingPlanes,P.state.camera)):P=null,O.pop(),O.length>0?I=O[O.length-1]:I=null,W!==null&&W.renderEnd()};function ds(A,Y,oe,te){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)oe=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLightProbeGrid)P.pushLightProbeGrid(A);else if(A.isLight)P.pushLight(A),A.castShadow&&P.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||_t.intersectsSprite(A)){te&&Yt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ot);const ze=me.update(A),Te=A.material;Te.visible&&I.push(A,ze,Te,oe,Yt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||_t.intersectsObject(A))){const ze=me.update(A),Te=A.material;if(te&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Yt.copy(A.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),Yt.copy(ze.boundingSphere.center)),Yt.applyMatrix4(A.matrixWorld).applyMatrix4(Ot)),Array.isArray(Te)){const Xe=ze.groups;for(let je=0,at=Xe.length;je<at;je++){const lt=Xe[je],$e=Te[lt.materialIndex];$e&&$e.visible&&I.push(A,ze,$e,oe,Yt.z,lt)}}else Te.visible&&I.push(A,ze,Te,oe,Yt.z,null)}}const Ae=A.children;for(let ze=0,Te=Ae.length;ze<Te;ze++)ds(Ae[ze],Y,oe,te)}function oo(A,Y,oe,te){const{opaque:ee,transmissive:Ae,transparent:ze}=A;P.setupLightsView(oe),pt===!0&&Je.setGlobalState(z.clippingPlanes,oe),te&&y.viewport(N.copy(te)),ee.length>0&&Or(ee,Y,oe),Ae.length>0&&Or(Ae,Y,oe),ze.length>0&&Or(ze,Y,oe),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function ca(A,Y,oe,te){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[te.id]===void 0){const $e=At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[te.id]=new Ni(1,1,{generateMipmaps:!0,type:$e?tr:si,minFilter:ss,samples:Math.max(4,C.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace})}const Ae=P.state.transmissionRenderTarget[te.id],ze=te.viewport||N;Ae.setSize(ze.z*z.transmissionResolutionScale,ze.w*z.transmissionResolutionScale);const Te=z.getRenderTarget(),Xe=z.getActiveCubeFace(),je=z.getActiveMipmapLevel();z.setRenderTarget(Ae),z.getClearColor(Oe),Fe=z.getClearAlpha(),Fe<1&&z.setClearColor(16777215,.5),z.clear(),wt&&it.render(oe);const at=z.toneMapping;z.toneMapping=Li;const lt=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),P.setupLightsView(te),pt===!0&&Je.setGlobalState(z.clippingPlanes,te),Or(A,oe,te),ue.updateMultisampleRenderTarget(Ae),ue.updateRenderTargetMipmap(Ae),At.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Mt=0,Bt=Y.length;Mt<Bt;Mt++){const qt=Y[Mt],{object:Lt,geometry:nn,material:ke,group:mn}=qt;if(ke.side===Zi&&Lt.layers.test(te.layers)){const ht=ke.side;ke.side=Vn,ke.needsUpdate=!0,ao(Lt,oe,te,nn,ke,mn),ke.side=ht,ke.needsUpdate=!0,$e=!0}}$e===!0&&(ue.updateMultisampleRenderTarget(Ae),ue.updateRenderTargetMipmap(Ae))}z.setRenderTarget(Te,Xe,je),z.setClearColor(Oe,Fe),lt!==void 0&&(te.viewport=lt),z.toneMapping=at}function Or(A,Y,oe){const te=Y.isScene===!0?Y.overrideMaterial:null;for(let ee=0,Ae=A.length;ee<Ae;ee++){const ze=A[ee],{object:Te,geometry:Xe,group:je}=ze;let at=ze.material;at.allowOverride===!0&&te!==null&&(at=te),Te.layers.test(oe.layers)&&ao(Te,Y,oe,Xe,at,je)}}function ao(A,Y,oe,te,ee,Ae){A.onBeforeRender(z,Y,oe,te,ee,Ae),A.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ee.onBeforeRender(z,Y,oe,te,A,Ae),ee.transparent===!0&&ee.side===Zi&&ee.forceSinglePass===!1?(ee.side=Vn,ee.needsUpdate=!0,z.renderBufferDirect(oe,Y,te,ee,A,Ae),ee.side=Dr,ee.needsUpdate=!0,z.renderBufferDirect(oe,Y,te,ee,A,Ae),ee.side=Zi):z.renderBufferDirect(oe,Y,te,ee,A,Ae),A.onAfterRender(z,Y,oe,te,ee,Ae)}function kr(A,Y,oe){Y.isScene!==!0&&(Y=kt);const te=re.get(A),ee=P.state.lights,Ae=P.state.shadowsArray,ze=ee.state.version,Te=Le.getParameters(A,ee.state,Ae,Y,oe,P.state.lightProbeGridArray),Xe=Le.getProgramCacheKey(Te);let je=te.programs;te.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?Y.environment:null,te.fog=Y.fog;const at=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;te.envMap=Me.get(A.envMap||te.environment,at),te.envMapRotation=te.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,je===void 0&&(A.addEventListener("dispose",Kn),je=new Map,te.programs=je);let lt=je.get(Xe);if(lt!==void 0){if(te.currentProgram===lt&&te.lightsStateVersion===ze)return ua(A,Te),lt}else Te.uniforms=Le.getUniforms(A),W!==null&&A.isNodeMaterial&&W.build(A,oe,Te),A.onBeforeCompile(Te,z),lt=Le.acquireProgram(Te,Xe),je.set(Xe,lt),te.uniforms=Te.uniforms;const $e=te.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&($e.clippingPlanes=Je.uniform),ua(A,Te),te.needsLights=co(A),te.lightsStateVersion=ze,te.needsLights&&($e.ambientLightColor.value=ee.state.ambient,$e.lightProbe.value=ee.state.probe,$e.directionalLights.value=ee.state.directional,$e.directionalLightShadows.value=ee.state.directionalShadow,$e.spotLights.value=ee.state.spot,$e.spotLightShadows.value=ee.state.spotShadow,$e.rectAreaLights.value=ee.state.rectArea,$e.ltc_1.value=ee.state.rectAreaLTC1,$e.ltc_2.value=ee.state.rectAreaLTC2,$e.pointLights.value=ee.state.point,$e.pointLightShadows.value=ee.state.pointShadow,$e.hemisphereLights.value=ee.state.hemi,$e.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,$e.spotLightMatrix.value=ee.state.spotLightMatrix,$e.spotLightMap.value=ee.state.spotLightMap,$e.pointShadowMatrix.value=ee.state.pointShadowMatrix),te.lightProbeGrid=P.state.lightProbeGridArray.length>0,te.currentProgram=lt,te.uniformsList=null,lt}function lo(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=Hl.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function ua(A,Y){const oe=re.get(A);oe.outputColorSpace=Y.outputColorSpace,oe.batching=Y.batching,oe.batchingColor=Y.batchingColor,oe.instancing=Y.instancing,oe.instancingColor=Y.instancingColor,oe.instancingMorph=Y.instancingMorph,oe.skinning=Y.skinning,oe.morphTargets=Y.morphTargets,oe.morphNormals=Y.morphNormals,oe.morphColors=Y.morphColors,oe.morphTargetsCount=Y.morphTargetsCount,oe.numClippingPlanes=Y.numClippingPlanes,oe.numIntersection=Y.numClipIntersection,oe.vertexAlphas=Y.vertexAlphas,oe.vertexTangents=Y.vertexTangents,oe.toneMapping=Y.toneMapping}function ic(A,Y){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;b.setFromMatrixPosition(Y.matrixWorld);for(let oe=0,te=A.length;oe<te;oe++){const ee=A[oe];if(ee.texture!==null&&ee.boundingBox.containsPoint(b))return ee}return null}function Kt(A,Y,oe,te,ee){Y.isScene!==!0&&(Y=kt),ue.resetTextureUnits();const Ae=Y.fog,ze=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?Y.environment:null,Te=V===null?z.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:xt.workingColorSpace,Xe=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,je=Me.get(te.envMap||ze,Xe),at=te.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,lt=!!oe.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),$e=!!oe.morphAttributes.position,Mt=!!oe.morphAttributes.normal,Bt=!!oe.morphAttributes.color;let qt=Li;te.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(qt=z.toneMapping);const Lt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,nn=Lt!==void 0?Lt.length:0,ke=re.get(te),mn=P.state.lights;if(pt===!0&&(ft===!0||A!==J)){const Nt=A===J&&te.id===Q;Je.setState(te,A,Nt)}let ht=!1;te.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==mn.state.version||ke.outputColorSpace!==Te||ee.isBatchedMesh&&ke.batching===!1||!ee.isBatchedMesh&&ke.batching===!0||ee.isBatchedMesh&&ke.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&ke.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&ke.instancing===!1||!ee.isInstancedMesh&&ke.instancing===!0||ee.isSkinnedMesh&&ke.skinning===!1||!ee.isSkinnedMesh&&ke.skinning===!0||ee.isInstancedMesh&&ke.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&ke.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&ke.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&ke.instancingMorph===!1&&ee.morphTexture!==null||ke.envMap!==je||te.fog===!0&&ke.fog!==Ae||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Je.numPlanes||ke.numIntersection!==Je.numIntersection)||ke.vertexAlphas!==at||ke.vertexTangents!==lt||ke.morphTargets!==$e||ke.morphNormals!==Mt||ke.morphColors!==Bt||ke.toneMapping!==qt||ke.morphTargetsCount!==nn||!!ke.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(ht=!0):(ht=!0,ke.__version=te.version);let Nn=ke.currentProgram;ht===!0&&(Nn=kr(te,Y,ee),W&&te.isNodeMaterial&&W.onUpdateProgram(te,Nn,ke));let Dn=!1,mt=!1,Ui=!1;const Pt=Nn.getUniforms(),Vt=ke.uniforms;if(y.useProgram(Nn.program)&&(Dn=!0,mt=!0,Ui=!0),te.id!==Q&&(Q=te.id,mt=!0),ke.needsLights){const Nt=ic(P.state.lightProbeGridArray,ee);ke.lightProbeGrid!==Nt&&(ke.lightProbeGrid=Nt,mt=!0)}if(Dn||J!==A){y.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Pt.setValue(X,"projectionMatrix",A.projectionMatrix),Pt.setValue(X,"viewMatrix",A.matrixWorldInverse);const li=Pt.map.cameraPosition;li!==void 0&&li.setValue(X,Xt.setFromMatrixPosition(A.matrixWorld)),C.logarithmicDepthBuffer&&Pt.setValue(X,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Pt.setValue(X,"isOrthographic",A.isOrthographicCamera===!0),J!==A&&(J=A,mt=!0,Ui=!0)}if(ke.needsLights&&(mn.state.directionalShadowMap.length>0&&Pt.setValue(X,"directionalShadowMap",mn.state.directionalShadowMap,ue),mn.state.spotShadowMap.length>0&&Pt.setValue(X,"spotShadowMap",mn.state.spotShadowMap,ue),mn.state.pointShadowMap.length>0&&Pt.setValue(X,"pointShadowMap",mn.state.pointShadowMap,ue)),ee.isSkinnedMesh){Pt.setOptional(X,ee,"bindMatrix"),Pt.setOptional(X,ee,"bindMatrixInverse");const Nt=ee.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),Pt.setValue(X,"boneTexture",Nt.boneTexture,ue))}ee.isBatchedMesh&&(Pt.setOptional(X,ee,"batchingTexture"),Pt.setValue(X,"batchingTexture",ee._matricesTexture,ue),Pt.setOptional(X,ee,"batchingIdTexture"),Pt.setValue(X,"batchingIdTexture",ee._indirectTexture,ue),Pt.setOptional(X,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Pt.setValue(X,"batchingColorTexture",ee._colorsTexture,ue));const ai=oe.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&G.update(ee,oe,Nn),(mt||ke.receiveShadow!==ee.receiveShadow)&&(ke.receiveShadow=ee.receiveShadow,Pt.setValue(X,"receiveShadow",ee.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&Y.environment!==null&&(Vt.envMapIntensity.value=Y.environmentIntensity),Vt.dfgLUT!==void 0&&(Vt.dfgLUT.value=L1()),mt){if(Pt.setValue(X,"toneMappingExposure",z.toneMappingExposure),ke.needsLights&&rc(Vt,Ui),Ae&&te.fog===!0&&qe.refreshFogUniforms(Vt,Ae),qe.refreshMaterialUniforms(Vt,te,he,ve,P.state.transmissionRenderTarget[A.id]),ke.needsLights&&ke.lightProbeGrid){const Nt=ke.lightProbeGrid;Vt.probesSH.value=Nt.texture,Vt.probesMin.value.copy(Nt.boundingBox.min),Vt.probesMax.value.copy(Nt.boundingBox.max),Vt.probesResolution.value.copy(Nt.resolution)}Hl.upload(X,lo(ke),Vt,ue)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Hl.upload(X,lo(ke),Vt,ue),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Pt.setValue(X,"center",ee.center),Pt.setValue(X,"modelViewMatrix",ee.modelViewMatrix),Pt.setValue(X,"normalMatrix",ee.normalMatrix),Pt.setValue(X,"modelMatrix",ee.matrixWorld),te.uniformsGroups!==void 0){const Nt=te.uniformsGroups;for(let li=0,yi=Nt.length;li<yi;li++){const Br=Nt[li];_e.update(Br,Nn),_e.bind(Br,Nn)}}return Nn}function rc(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function co(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return le},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(A,Y,oe){const te=re.get(A);te.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),re.get(A.texture).__webglTexture=Y,re.get(A.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:oe,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Y){const oe=re.get(A);oe.__webglFramebuffer=Y,oe.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(A,Y=0,oe=0){V=A,le=Y,q=oe;let te=null,ee=!1,Ae=!1;if(A){const Te=re.get(A);if(Te.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(X.FRAMEBUFFER,Te.__webglFramebuffer),N.copy(A.viewport),$.copy(A.scissor),we=A.scissorTest,y.viewport(N),y.scissor($),y.setScissorTest(we),Q=-1;return}else if(Te.__webglFramebuffer===void 0)ue.setupRenderTarget(A);else if(Te.__hasExternalTextures)ue.rebindTextures(A,re.get(A.texture).__webglTexture,re.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const at=A.depthTexture;if(Te.__boundDepthTexture!==at){if(at!==null&&re.has(at)&&(A.width!==at.image.width||A.height!==at.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ue.setupDepthRenderbuffer(A)}}const Xe=A.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ae=!0);const je=re.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(je[Y])?te=je[Y][oe]:te=je[Y],ee=!0):A.samples>0&&ue.useMultisampledRTT(A)===!1?te=re.get(A).__webglMultisampledFramebuffer:Array.isArray(je)?te=je[oe]:te=je,N.copy(A.viewport),$.copy(A.scissor),we=A.scissorTest}else N.copy(Qe).multiplyScalar(he).floor(),$.copy(It).multiplyScalar(he).floor(),we=ot;if(oe!==0&&(te=ce),y.bindFramebuffer(X.FRAMEBUFFER,te)&&y.drawBuffers(A,te),y.viewport(N),y.scissor($),y.setScissorTest(we),ee){const Te=re.get(A.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Te.__webglTexture,oe)}else if(Ae){const Te=Y;for(let Xe=0;Xe<A.textures.length;Xe++){const je=re.get(A.textures[Xe]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Xe,je.__webglTexture,oe,Te)}}else if(A!==null&&oe!==0){const Te=re.get(A.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Te.__webglTexture,oe)}Q=-1},this.readRenderTargetPixels=function(A,Y,oe,te,ee,Ae,ze,Te=0){if(!(A&&A.isWebGLRenderTarget)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ze!==void 0&&(Xe=Xe[ze]),Xe){y.bindFramebuffer(X.FRAMEBUFFER,Xe);try{const je=A.textures[Te],at=je.format,lt=je.type;if(A.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Te),!C.textureFormatReadable(at)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(lt)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-te&&oe>=0&&oe<=A.height-ee&&X.readPixels(Y,oe,te,ee,Pe.convert(at),Pe.convert(lt),Ae)}finally{const je=V!==null?re.get(V).__webglFramebuffer:null;y.bindFramebuffer(X.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(A,Y,oe,te,ee,Ae,ze,Te=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ze!==void 0&&(Xe=Xe[ze]),Xe)if(Y>=0&&Y<=A.width-te&&oe>=0&&oe<=A.height-ee){y.bindFramebuffer(X.FRAMEBUFFER,Xe);const je=A.textures[Te],at=je.format,lt=je.type;if(A.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Te),!C.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,$e),X.bufferData(X.PIXEL_PACK_BUFFER,Ae.byteLength,X.STREAM_READ),X.readPixels(Y,oe,te,ee,Pe.convert(at),Pe.convert(lt),0);const Mt=V!==null?re.get(V).__webglFramebuffer:null;y.bindFramebuffer(X.FRAMEBUFFER,Mt);const Bt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await ex(X,Bt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,$e),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Ae),X.deleteBuffer($e),X.deleteSync(Bt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Y=null,oe=0){const te=Math.pow(2,-oe),ee=Math.floor(A.image.width*te),Ae=Math.floor(A.image.height*te),ze=Y!==null?Y.x:0,Te=Y!==null?Y.y:0;ue.setTexture2D(A,0),X.copyTexSubImage2D(X.TEXTURE_2D,oe,0,0,ze,Te,ee,Ae),y.unbindTexture()},this.copyTextureToTexture=function(A,Y,oe=null,te=null,ee=0,Ae=0){let ze,Te,Xe,je,at,lt,$e,Mt,Bt;const qt=A.isCompressedTexture?A.mipmaps[Ae]:A.image;if(oe!==null)ze=oe.max.x-oe.min.x,Te=oe.max.y-oe.min.y,Xe=oe.isBox3?oe.max.z-oe.min.z:1,je=oe.min.x,at=oe.min.y,lt=oe.isBox3?oe.min.z:0;else{const Vt=Math.pow(2,-ee);ze=Math.floor(qt.width*Vt),Te=Math.floor(qt.height*Vt),A.isDataArrayTexture?Xe=qt.depth:A.isData3DTexture?Xe=Math.floor(qt.depth*Vt):Xe=1,je=0,at=0,lt=0}te!==null?($e=te.x,Mt=te.y,Bt=te.z):($e=0,Mt=0,Bt=0);const Lt=Pe.convert(Y.format),nn=Pe.convert(Y.type);let ke;Y.isData3DTexture?(ue.setTexture3D(Y,0),ke=X.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(ue.setTexture2DArray(Y,0),ke=X.TEXTURE_2D_ARRAY):(ue.setTexture2D(Y,0),ke=X.TEXTURE_2D),y.activeTexture(X.TEXTURE0),y.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Y.flipY),y.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),y.pixelStorei(X.UNPACK_ALIGNMENT,Y.unpackAlignment);const mn=y.getParameter(X.UNPACK_ROW_LENGTH),ht=y.getParameter(X.UNPACK_IMAGE_HEIGHT),Nn=y.getParameter(X.UNPACK_SKIP_PIXELS),Dn=y.getParameter(X.UNPACK_SKIP_ROWS),mt=y.getParameter(X.UNPACK_SKIP_IMAGES);y.pixelStorei(X.UNPACK_ROW_LENGTH,qt.width),y.pixelStorei(X.UNPACK_IMAGE_HEIGHT,qt.height),y.pixelStorei(X.UNPACK_SKIP_PIXELS,je),y.pixelStorei(X.UNPACK_SKIP_ROWS,at),y.pixelStorei(X.UNPACK_SKIP_IMAGES,lt);const Ui=A.isDataArrayTexture||A.isData3DTexture,Pt=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){const Vt=re.get(A),ai=re.get(Y),Nt=re.get(Vt.__renderTarget),li=re.get(ai.__renderTarget);y.bindFramebuffer(X.READ_FRAMEBUFFER,Nt.__webglFramebuffer),y.bindFramebuffer(X.DRAW_FRAMEBUFFER,li.__webglFramebuffer);for(let yi=0;yi<Xe;yi++)Ui&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,re.get(A).__webglTexture,ee,lt+yi),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,re.get(Y).__webglTexture,Ae,Bt+yi)),X.blitFramebuffer(je,at,ze,Te,$e,Mt,ze,Te,X.DEPTH_BUFFER_BIT,X.NEAREST);y.bindFramebuffer(X.READ_FRAMEBUFFER,null),y.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(ee!==0||A.isRenderTargetTexture||re.has(A)){const Vt=re.get(A),ai=re.get(Y);y.bindFramebuffer(X.READ_FRAMEBUFFER,de),y.bindFramebuffer(X.DRAW_FRAMEBUFFER,Z);for(let Nt=0;Nt<Xe;Nt++)Ui?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Vt.__webglTexture,ee,lt+Nt):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Vt.__webglTexture,ee),Pt?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ai.__webglTexture,Ae,Bt+Nt):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,ai.__webglTexture,Ae),ee!==0?X.blitFramebuffer(je,at,ze,Te,$e,Mt,ze,Te,X.COLOR_BUFFER_BIT,X.NEAREST):Pt?X.copyTexSubImage3D(ke,Ae,$e,Mt,Bt+Nt,je,at,ze,Te):X.copyTexSubImage2D(ke,Ae,$e,Mt,je,at,ze,Te);y.bindFramebuffer(X.READ_FRAMEBUFFER,null),y.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Pt?A.isDataTexture||A.isData3DTexture?X.texSubImage3D(ke,Ae,$e,Mt,Bt,ze,Te,Xe,Lt,nn,qt.data):Y.isCompressedArrayTexture?X.compressedTexSubImage3D(ke,Ae,$e,Mt,Bt,ze,Te,Xe,Lt,qt.data):X.texSubImage3D(ke,Ae,$e,Mt,Bt,ze,Te,Xe,Lt,nn,qt):A.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Ae,$e,Mt,ze,Te,Lt,nn,qt.data):A.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Ae,$e,Mt,qt.width,qt.height,Lt,qt.data):X.texSubImage2D(X.TEXTURE_2D,Ae,$e,Mt,ze,Te,Lt,nn,qt);y.pixelStorei(X.UNPACK_ROW_LENGTH,mn),y.pixelStorei(X.UNPACK_IMAGE_HEIGHT,ht),y.pixelStorei(X.UNPACK_SKIP_PIXELS,Nn),y.pixelStorei(X.UNPACK_SKIP_ROWS,Dn),y.pixelStorei(X.UNPACK_SKIP_IMAGES,mt),Ae===0&&Y.generateMipmaps&&X.generateMipmap(ke),y.unbindTexture()},this.initRenderTarget=function(A){re.get(A).__webglFramebuffer===void 0&&ue.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ue.setTextureCube(A,0):A.isData3DTexture?ue.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ue.setTexture2DArray(A,0):ue.setTexture2D(A,0),y.unbindTexture()},this.resetState=function(){le=0,q=0,V=null,y.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),n.unpackColorSpace=xt._getUnpackColorSpace()}}function D1(){const s=Ft.useRef(null);return Ft.useEffect(()=>{const e=s.current;if(!e)return;const n=new gx,r=new ri(55,window.innerWidth/window.innerHeight,.1,100);r.position.set(0,.15,2.6),r.lookAt(0,0,0);const a=new N1({antialias:!0,alpha:!0});a.setSize(window.innerWidth,window.innerHeight),a.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(a.domElement);const l=new Si,u=300,d=new Float32Array(u*3),p=new Float32Array(u*3),m=[new yt("#3b82f6"),new yt("#a855f7"),new yt("#22d3ee"),new yt("#ec4899")];for(let v=0;v<u*3;v+=3){d[v]=(Math.random()-.5)*6,d[v+1]=(Math.random()-.5)*5,d[v+2]=(Math.random()-.5)*3;const _=m[Math.floor(Math.random()*m.length)];p[v]=_.r,p[v+1]=_.g,p[v+2]=_.b}l.setAttribute("position",new oi(d,3)),l.setAttribute("color",new oi(p,3));const x=new Og({size:.018,vertexColors:!0,transparent:!0,opacity:.55,blending:yf,depthWrite:!1}),S=new Ax(l,x);n.add(S);const g=v=>{v.clientX/window.innerWidth*2-1,-(v.clientY/window.innerHeight)*2+1},M=()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("mousemove",g),window.addEventListener("resize",M);let w;function R(){w=requestAnimationFrame(R),S.rotation.y+=2e-4,S.rotation.x+=15e-5,a.render(n,r)}return R(),()=>{cancelAnimationFrame(w),window.removeEventListener("mousemove",g),window.removeEventListener("resize",M),a.dispose(),e.contains(a.domElement)&&e.removeChild(a.domElement)}},[]),ge.jsx("div",{ref:s,className:"fixed inset-0 z-0 pointer-events-none"})}const I1=[{lat:37.78,lng:-122.42,label:"San Francisco"},{lat:51.51,lng:-.13,label:"London"},{lat:35.68,lng:139.69,label:"Tokyo"},{lat:-33.87,lng:151.21,label:"Sydney"},{lat:1.35,lng:103.82,label:"Singapore"},{lat:55.76,lng:37.62,label:"Moscow"},{lat:-23.55,lng:-46.63,label:"São Paulo"},{lat:19.43,lng:-99.13,label:"Mexico City"},{lat:28.61,lng:77.21,label:"Delhi"},{lat:36.19,lng:44.01,label:"Erbil"}],U1=[{from:[37.78,-122.42],to:[51.51,-.13]},{from:[51.51,-.13],to:[35.68,139.69]},{from:[35.68,139.69],to:[-33.87,151.21]},{from:[37.78,-122.42],to:[1.35,103.82]},{from:[51.51,-.13],to:[28.61,77.21]},{from:[37.78,-122.42],to:[-23.55,-46.63]},{from:[1.35,103.82],to:[-33.87,151.21]},{from:[28.61,77.21],to:[36.19,44.01]},{from:[51.51,-.13],to:[36.19,44.01]}];function xf(s,e,n){const r=(90-s)*Math.PI/180,a=(e+180)*Math.PI/180;return[-(n*Math.sin(r)*Math.cos(a)),n*Math.cos(r),n*Math.sin(r)*Math.sin(a)]}function Fl(s,e,n,r){const a=Math.cos(r),l=Math.sin(r);return[s*a+n*l,e,-s*l+n*a]}function Ol(s,e,n,r){const a=Math.cos(r),l=Math.sin(r);return[s,e*a-n*l,e*l+n*a]}function Qo(s,e,n,r,a,l){const u=l/(l+n);return[s*u+r,e*u+a,n]}function F1({className:s,size:e=600,dotColor:n="rgba(100, 180, 255, ALPHA)",arcColor:r="rgba(100, 180, 255, 0.5)",markerColor:a="rgba(100, 220, 255, 1)",autoRotateSpeed:l=.002,connections:u=U1,markers:d=I1}){const p=Ft.useRef(null),m=Ft.useRef(.4),x=Ft.useRef(.3),S=Ft.useRef({active:!1,startX:0,startY:0,startRotY:0,startRotX:0}),g=Ft.useRef(0),M=Ft.useRef(0),w=Ft.useRef([]);Ft.useEffect(()=>{const F=[],I=(1+Math.sqrt(5))/2;for(let P=0;P<1200;P++){const O=2*Math.PI*P/I,E=Math.acos(1-2*(P+.5)/1200),L=Math.cos(O)*Math.sin(E),z=Math.cos(E),B=Math.sin(O)*Math.sin(E);F.push([L,z,B])}w.current=F},[]);const R=Ft.useCallback(()=>{const F=p.current;if(!F)return;const b=F.getContext("2d");if(!b)return;const I=window.devicePixelRatio||1,P=F.clientWidth,O=F.clientHeight;F.width=P*I,F.height=O*I,b.scale(I,I);const E=P/2,L=O/2,z=Math.min(P,O)*.38,B=600;S.current.active||(m.current+=l),M.current+=.015;const W=M.current;b.clearRect(0,0,P,O);const ce=b.createRadialGradient(E,L,z*.8,E,L,z*1.5);ce.addColorStop(0,"rgba(60, 140, 255, 0.03)"),ce.addColorStop(1,"rgba(60, 140, 255, 0)"),b.fillStyle=ce,b.fillRect(0,0,P,O),b.beginPath(),b.arc(E,L,z,0,Math.PI*2),b.strokeStyle="rgba(100, 180, 255, 0.06)",b.lineWidth=1,b.stroke();const de=m.current,Z=x.current,le=w.current;for(let q=0;q<le.length;q++){let[V,Q,J]=le[q];if(V*=z,Q*=z,J*=z,[V,Q,J]=Ol(V,Q,J,Z),[V,Q,J]=Fl(V,Q,J,de),J>0)continue;const[N,$]=Qo(V,Q,J,E,L,B),we=Math.max(.1,1-(J+z)/(2*z)),Oe=1+we*.8;b.beginPath(),b.arc(N,$,Oe,0,Math.PI*2),b.fillStyle=n.replace("ALPHA",we.toFixed(2)),b.fill()}for(const q of u){const[V,Q]=q.from,[J,N]=q.to;let[$,we,Oe]=xf(V,Q,z),[Fe,ie,ve]=xf(J,N,z);if([$,we,Oe]=Ol($,we,Oe,Z),[$,we,Oe]=Fl($,we,Oe,de),[Fe,ie,ve]=Ol(Fe,ie,ve,Z),[Fe,ie,ve]=Fl(Fe,ie,ve,de),Oe>z*.3&&ve>z*.3)continue;const[he,Ue]=Qo($,we,Oe,E,L,B),[Ze,Qe]=Qo(Fe,ie,ve,E,L,B),It=($+Fe)/2,ot=(we+ie)/2,_t=(Oe+ve)/2,pt=Math.sqrt(It*It+ot*ot+_t*_t),ft=z*1.25,Ot=It/pt*ft,Xt=ot/pt*ft,Yt=_t/pt*ft,[kt,wt]=Qo(Ot,Xt,Yt,E,L,B);b.beginPath(),b.moveTo(he,Ue),b.quadraticCurveTo(kt,wt,Ze,Qe),b.strokeStyle=r,b.lineWidth=1.2,b.stroke();const vt=(Math.sin(W*1.2+V*.1)+1)/2,X=(1-vt)*(1-vt)*he+2*(1-vt)*vt*kt+vt*vt*Ze,on=(1-vt)*(1-vt)*Ue+2*(1-vt)*vt*wt+vt*vt*Qe;b.beginPath(),b.arc(X,on,2,0,Math.PI*2),b.fillStyle=a,b.fill()}for(const q of d){let[V,Q,J]=xf(q.lat,q.lng,z);if([V,Q,J]=Ol(V,Q,J,Z),[V,Q,J]=Fl(V,Q,J,de),J>z*.1)continue;const[N,$]=Qo(V,Q,J,E,L,B),we=Math.sin(W*2+q.lat)*.5+.5;b.beginPath(),b.arc(N,$,4+we*4,0,Math.PI*2),b.strokeStyle=a.replace("1)",`${.2+we*.15})`),b.lineWidth=1,b.stroke(),b.beginPath(),b.arc(N,$,2.5,0,Math.PI*2),b.fillStyle=a,b.fill(),q.label&&(b.font="10px system-ui, sans-serif",b.fillStyle=a.replace("1)","0.6)"),b.fillText(q.label,N+8,$+3))}g.current=requestAnimationFrame(R)},[n,r,a,l,u,d]);Ft.useEffect(()=>(g.current=requestAnimationFrame(R),()=>cancelAnimationFrame(g.current)),[R]);const v=Ft.useCallback(F=>{S.current={active:!0,startX:F.clientX,startY:F.clientY,startRotY:m.current,startRotX:x.current},F.target.setPointerCapture(F.pointerId)},[]),_=Ft.useCallback(F=>{if(!S.current.active)return;const b=F.clientX-S.current.startX,I=F.clientY-S.current.startY;m.current=S.current.startRotY+b*.005,x.current=Math.max(-1,Math.min(1,S.current.startRotX+I*.005))},[]),U=Ft.useCallback(()=>{S.current.active=!1},[]);return ge.jsx("canvas",{ref:p,className:md("w-full h-full cursor-grab active:cursor-grabbing",s),style:{width:e,height:e},onPointerDown:v,onPointerMove:_,onPointerUp:U})}function O1(){return ge.jsxs("section",{className:"relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-8 pt-32 pb-24",children:[ge.jsx("div",{className:"absolute top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.12)_0%,rgba(168,85,247,0.06)_40%,transparent_70%)] pointer-events-none"}),ge.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-blue-400 tracking-wider uppercase mb-8 animate-fade-up glass",children:[ge.jsx("span",{className:"text-blue-400",children:"◆"})," 智能数据工程平台"]}),ge.jsxs("h1",{className:"text-[clamp(2.8rem,7vw,5.5rem)] font-black leading-[1.05] tracking-tight max-w-[900px] animate-fade-up [animation-delay:100ms]",children:["以数据定义",ge.jsx("br",{}),ge.jsx("span",{className:"bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent",children:"智能边界"})]}),ge.jsx("p",{className:"mt-6 text-lg text-slate-400 max-w-[560px] font-normal animate-fade-up [animation-delay:250ms]",children:"使用最新、最快、最准的工具，构建 99% 的高质量数据集。助力数据生产低成本、高精度、快产出。"}),ge.jsxs("div",{className:"mt-10 flex gap-4 flex-wrap justify-center animate-fade-up [animation-delay:400ms]",children:[ge.jsx("a",{href:"login.html",target:"_blank",className:"px-8 py-3 rounded-full text-sm font-semibold text-white no-underline border border-white/10 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/15 glass",children:"免费试用平台"}),ge.jsx("a",{href:"#cta",className:"px-8 py-3 rounded-full text-sm font-semibold text-black bg-white no-underline transition-all duration-300 hover:bg-[#e2e8f0] hover:-translate-y-px",children:"预约专家演示"})]}),ge.jsxs("div",{className:"mt-16 w-full max-w-5xl rounded-2xl border border-white/[0.06] bg-black/20 overflow-hidden relative",children:[ge.jsx("div",{className:"absolute top-0 right-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none"}),ge.jsxs("div",{className:"flex flex-col md:flex-row min-h-[480px]",children:[ge.jsxs("div",{className:"flex-1 flex flex-col justify-center p-10 md:p-14 relative z-10",children:[ge.jsxs("div",{className:"inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-400 mb-6 w-fit",children:[ge.jsx("span",{className:"size-1.5 rounded-full bg-emerald-400 animate-pulse"}),"All systems operational"]}),ge.jsxs("h2",{className:"text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-4",children:["Global Edge",ge.jsx("br",{}),ge.jsx("span",{className:"bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent",children:"Network"})]}),ge.jsx("p",{className:"text-sm md:text-base text-slate-400 max-w-md leading-relaxed mb-8",children:"Deployed across 150+ points of presence worldwide. Your data served from the nearest node in under 50ms. Drag the globe to explore."}),ge.jsxs("div",{className:"flex items-center gap-6",children:[ge.jsxs("div",{children:[ge.jsx("p",{className:"text-2xl font-bold text-white",children:"150+"}),ge.jsx("p",{className:"text-xs text-slate-400",children:"Edge Nodes"})]}),ge.jsx("div",{className:"w-px h-8 bg-white/10"}),ge.jsxs("div",{children:[ge.jsx("p",{className:"text-2xl font-bold text-white",children:"<50ms"}),ge.jsx("p",{className:"text-xs text-slate-400",children:"Avg Latency"})]}),ge.jsx("div",{className:"w-px h-8 bg-white/10"}),ge.jsxs("div",{children:[ge.jsx("p",{className:"text-2xl font-bold text-white",children:"99.99%"}),ge.jsx("p",{className:"text-xs text-slate-400",children:"Uptime"})]})]})]}),ge.jsx("div",{className:"flex-1 flex items-center justify-center p-4 md:p-0 min-h-[400px]",children:ge.jsx(F1,{size:420})})]})]})]})}const k1=[{value:6.8,suffix:" 倍",label:"节省数据工程时长",decimals:1},{value:99.8,suffix:" %",label:"最高实现准确率",decimals:1},{value:70,suffix:" %",label:"缩短审核耗时",decimals:0}];function B1({target:s,suffix:e,label:n,decimals:r}){const[a,l]=Ft.useState(0),u=Ft.useRef(null);return Ft.useEffect(()=>{const d=u.current;if(!d)return;const p=new IntersectionObserver(([m])=>{if(m.isIntersecting){const S=performance.now(),g=M=>{const w=M-S,R=Math.min(w/2e3,1),v=1-Math.pow(1-R,3);l(s*v),R<1&&requestAnimationFrame(g)};requestAnimationFrame(g),p.unobserve(d)}},{threshold:.3});return p.observe(d),()=>p.disconnect()},[s]),ge.jsxs("div",{ref:u,className:"text-center animate-fade-up [animation-delay:500ms]",children:[ge.jsxs("div",{className:"text-[3rem] font-extrabold tracking-tight",children:[a.toFixed(r),ge.jsx("span",{className:"text-[1.2rem] text-slate-400 font-medium",children:e})]}),ge.jsx("div",{className:"text-sm text-slate-400 mt-1",children:n})]})}function z1(){return ge.jsx("div",{className:"relative z-10 flex justify-center gap-16 px-8 py-16 flex-wrap",children:k1.map(s=>ge.jsx(B1,{target:s.value,suffix:s.suffix,label:s.label,decimals:s.decimals},s.label))})}const V1=[{icon:"◧",color:"#3b82f6",bg:"rgba(59,130,246,0.12)",title:"图像与视频标注",desc:"包含矩形框、多边形、关键点等多种标签类型，支持图像目标检测、语义分割、OCR 及多模态视频跟踪标注。"},{icon:"◇",color:"#a855f7",bg:"rgba(168,85,247,0.12)",title:"3D 点云与 4D 标注",desc:"提供自动驾驶级别的空间标注方案，支持激光雷达点云、时序穿梭以及传感器多源融合校准。"},{icon:"⬡",color:"#22d3ee",bg:"rgba(34,211,238,0.12)",title:"大模型 RLHF 标注",desc:"专为大语言模型微调设计的对话收集、排序投票、多维度反馈等对齐微调工作流支撑工具。"},{icon:"♬",color:"#f97316",bg:"rgba(249,115,22,0.12)",title:"音频音素标注",desc:"覆盖语音识别 ASR、TTS 发音人标注、音频情感分析等多种音频数据处理场景。"},{icon:"¶",color:"#ec4899",bg:"rgba(236,72,153,0.12)",title:"文本标注工具",desc:"支持 NER 命名实体识别、文本分类、情感分析、关系抽取及文本翻译对齐等任务。"},{icon:"▶",color:"#10b981",bg:"rgba(16,185,129,0.12)",title:"视频多模态标注",desc:"融合视觉、语言、音频的跨模态标注方案，满足大模型训练对多模态数据的需求。"}];function G1({children:s,className:e}){const n=Ft.useRef(null);return Ft.useEffect(()=>{const r=n.current;if(!r)return;const a=new IntersectionObserver(([l])=>{l.isIntersecting&&(r.classList.add("visible"),a.unobserve(r))},{threshold:.1});return a.observe(r),()=>a.disconnect()},[]),ge.jsx("div",{ref:n,className:md("reveal",e),children:s})}function H1(){return ge.jsxs("section",{id:"tools",className:"relative z-10 py-24 px-8 max-w-[1200px] mx-auto",children:[ge.jsx("h2",{className:"text-center mb-4 text-[2rem] font-extrabold tracking-tight reveal",children:"专业的数据标注工具"}),ge.jsx("p",{className:"text-center text-slate-400 max-w-[640px] mx-auto mb-14 text-base reveal",children:"针对不同场景特殊定制，易上手的同时保证专业度。涵盖从传统视觉到前沿多模态、RLHF 的完整工具链。"}),ge.jsx("div",{className:"grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6",children:V1.map((s,e)=>ge.jsx(G1,{children:ge.jsxs("div",{className:"glass rounded-[1.25rem] p-8 relative overflow-hidden transition-transform duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] cursor-default group",children:[ge.jsx("div",{className:"absolute w-[200px] h-[200px] rounded-full blur-[80px] opacity-[0.18] pointer-events-none transition-opacity duration-400 group-hover:opacity-[0.32]",style:{top:e%2===0?"-40px":void 0,bottom:e%2===0?void 0:"-40px",left:e%3===0?"-40px":e%3===1?"50%":void 0,right:e%3===2?"-40px":void 0,background:s.color}}),ge.jsx("div",{className:"w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold mb-5",style:{background:s.bg,color:s.color},children:s.icon}),ge.jsx("h3",{className:"text-xl font-bold mb-3",children:s.title}),ge.jsx("p",{className:"text-sm text-slate-400 leading-relaxed",children:s.desc})]})},e))})]})}const W1=[{num:"01",color:"text-blue-400",bg:"rgba(59,130,246,0.1)",title:"智能预标注",desc:"基于大模型 2.0 的智能标注，零样本全场景适配，一键分割全图、点选交互式标注，提效数十倍。"},{num:"02",color:"text-purple-400",bg:"rgba(168,85,247,0.1)",title:"智能工具辅助",desc:"以最简单的交互获得最精准的标注结果，在目标检测与语义分割场景可达到 95% 以上准确率。"},{num:"03",color:"text-cyan-400",bg:"rgba(34,211,238,0.1)",title:"智能质检审核",desc:"快速定位漏标、错标等问题，筛选可疑数据人工复核，缩短 70% 传统人力审核耗时。"}];function rg({children:s,className:e}){const n=Ft.useRef(null);return Ft.useEffect(()=>{const r=n.current;if(!r)return;const a=new IntersectionObserver(([l])=>{l.isIntersecting&&(r.classList.add("visible"),a.unobserve(r))},{threshold:.1});return a.observe(r),()=>a.disconnect()},[]),ge.jsx("div",{ref:n,className:`reveal ${e||""}`,children:s})}function X1(){return ge.jsxs("section",{id:"ai",className:"relative z-10 py-24 px-8 max-w-[1200px] mx-auto",children:[ge.jsx("h2",{className:"text-center mb-4 text-[2rem] font-extrabold tracking-tight reveal",children:"AI 赋能数据工程自动化"}),ge.jsx("p",{className:"text-center text-slate-400 max-w-[640px] mx-auto mb-14 text-base reveal",children:"集合 N+ 前沿大模型，用智能标注助力数据生产的低成本、高精度、快产出。"}),ge.jsxs("div",{className:"grid md:grid-cols-2 gap-16 items-center",children:[ge.jsx("div",{className:"flex flex-col gap-8",children:W1.map(s=>ge.jsx(rg,{children:ge.jsxs("div",{className:"flex gap-4 items-start",children:[ge.jsx("div",{className:"shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm glass",style:{background:s.bg,color:s.color.replace("text-","#")},children:s.num}),ge.jsxs("div",{children:[ge.jsx("h4",{className:"text-lg font-bold mb-1.5",children:s.title}),ge.jsx("p",{className:"text-sm text-slate-400",children:s.desc})]})]})},s.num))}),ge.jsx(rg,{children:ge.jsxs("div",{className:"relative rounded-3xl p-12 flex flex-col items-center justify-center min-h-[380px] overflow-hidden glass",children:[ge.jsx("div",{className:"w-[140px] h-[140px] rounded-full relative bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.2),rgba(168,85,247,0.15),transparent)] flex items-center justify-center animate-[orbFloat_6s_ease-in-out_infinite]",children:ge.jsx("span",{className:"text-[2rem] font-black text-blue-400 tracking-tight",children:"AI"})}),ge.jsx("style",{children:`
              .reveal > div > div:first-child::before {
                content: '';
                position: absolute;
                inset: -8px;
                border-radius: 50%;
                border: 1px solid rgba(59,130,246,0.15);
                animation: orbPulse 3s ease-in-out infinite;
              }
              .reveal > div > div:first-child::after {
                content: '';
                position: absolute;
                inset: -24px;
                border-radius: 50%;
                border: 1px dashed rgba(168,85,247,0.1);
                animation: orbSpin 20s linear infinite;
              }
            `}),ge.jsx("div",{className:"mt-6 font-semibold text-slate-400 text-sm tracking-wider",children:"INTELLIGENT DATA ENGINE"})]})})]})]})}const Y1=[{tag:"自动驾驶",tagColor:"rgba(59,130,246,0.12)",textColor:"#3b82f6",title:"自动驾驶数据标注",desc:"采用成熟的 Docker 私有化部署方案，一周内完成从部署到调通应用的全流程，兼顾数据安全和生产效率。"},{tag:"NLP",tagColor:"rgba(168,85,247,0.12)",textColor:"#a855f7",title:"推特评论情感分析",desc:"针对业务场景使用 SOTA 算法模型进行多语种文本标注，快速补足中英文 OCR 识别能力。"},{tag:"OCR",tagColor:"rgba(34,211,238,0.12)",textColor:"#22d3ee",title:"街景多语种 OCR",desc:"调度成品数据集匹配韩语、日语等语种 OCR 需求，原本数月的工作两周内完成交付。"},{tag:"多模态",tagColor:"rgba(16,185,129,0.12)",textColor:"#10b981",title:"多模态数据集建设",desc:"实景采集拍摄后使用智能化标注工具进行连续帧的多模态标注，数据生产效率提升数倍。"}];function q1({children:s}){const e=Ft.useRef(null);return Ft.useEffect(()=>{const n=e.current;if(!n)return;const r=new IntersectionObserver(([a])=>{a.isIntersecting&&(n.classList.add("visible"),r.unobserve(n))},{threshold:.1});return r.observe(n),()=>r.disconnect()},[]),ge.jsx("div",{ref:e,className:"reveal",children:s})}function $1(){return ge.jsxs("section",{id:"cases",className:"relative z-10 py-24 px-8 max-w-[1200px] mx-auto",children:[ge.jsx("h2",{className:"text-center mb-4 text-[2rem] font-extrabold tracking-tight reveal",children:"合作案例"}),ge.jsx("p",{className:"text-center text-slate-400 max-w-[640px] mx-auto mb-14 text-base reveal",children:"覆盖自动驾驶、多模态大模型、NLP 等前沿领域的落地实践。"}),ge.jsx("div",{className:"grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6",children:Y1.map((s,e)=>ge.jsx(q1,{children:ge.jsxs("div",{className:"glass rounded-[1.25rem] p-8 relative overflow-hidden transition-transform duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 cursor-default",children:[ge.jsx("span",{className:"inline-block px-3 py-1 rounded-full text-[0.7rem] font-semibold tracking-wider mb-4",style:{background:s.tagColor,color:s.textColor},children:s.tag}),ge.jsx("h4",{className:"text-lg font-bold mb-2",children:s.title}),ge.jsx("p",{className:"text-sm text-slate-400 leading-relaxed",children:s.desc})]})},e))})]})}function K1(){return ge.jsxs("section",{id:"cta",className:"relative z-10 text-center py-32 px-8",children:[ge.jsxs("h2",{className:"text-[clamp(2rem,4vw,3rem)] font-black tracking-tight mb-4 reveal",children:["在这里，开启您 AI 工程的",ge.jsx("br",{}),"第一步"]}),ge.jsx("p",{className:"text-slate-400 max-w-[480px] mx-auto mb-10 text-base reveal",children:"免费注册体验智能数据工程平台，或联系专家获取方案。"}),ge.jsx("div",{className:"flex justify-center gap-4 flex-wrap reveal",children:ge.jsxs("a",{href:"login.html",target:"_blank",className:`inline-flex items-center gap-2 px-10 py-3.5 rounded-full text-base font-semibold text-white no-underline\r
            relative overflow-hidden bg-gradient-to-br from-blue-500 to-purple-500\r
            shadow-[0_0_24px_rgba(59,130,246,0.35),0_0_60px_rgba(168,85,247,0.15)]\r
            hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(59,130,246,0.55),0_0_80px_rgba(168,85,247,0.25)]\r
            transition-transform duration-250 transition-shadow duration-350\r
            before:absolute before:inset-[-2px] before:rounded-[inherit] before:bg-gradient-to-br before:from-blue-500 before:via-purple-500 before:to-cyan-400\r
            before:-z-10 before:blur-[12px] before:opacity-50`,children:[ge.jsxs("svg",{width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[ge.jsx("path",{d:"M15 8a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"}),ge.jsx("path",{d:"m10 8-3-2v4l3-2Z"})]}),"进入标注平台"]})})]})}function Z1(){return ge.jsxs("footer",{className:"relative z-10 border-t border-white/[0.06] py-12 px-8 flex justify-between items-center max-w-[1200px] mx-auto flex-wrap gap-4",children:[ge.jsx("div",{className:"text-xs text-[#555]",children:"© 2026 智鸭科技. Your Data Partner In The AI Industry."}),ge.jsxs("div",{className:"flex gap-6",children:[ge.jsx("a",{href:"#",className:"text-xs text-[#555] no-underline transition-colors duration-300 hover:text-white",children:"隐私协议"}),ge.jsx("a",{href:"#",className:"text-xs text-[#555] no-underline transition-colors duration-300 hover:text-white",children:"服务条款"})]})]})}function j1(){return Ft.useEffect(()=>{const s=new IntersectionObserver(e=>{e.forEach(n=>{n.isIntersecting&&(n.target.classList.add("visible"),s.unobserve(n.target))})},{threshold:.15});return document.querySelectorAll(".reveal").forEach(e=>s.observe(e)),()=>s.disconnect()},[]),ge.jsxs(ge.Fragment,{children:[ge.jsx(D1,{}),ge.jsx(x_,{}),ge.jsx(O1,{}),ge.jsx(z1,{}),ge.jsx(H1,{}),ge.jsx(X1,{}),ge.jsx($1,{}),ge.jsx(K1,{}),ge.jsx(Z1,{})]})}Bv.createRoot(document.getElementById("root")).render(ge.jsx(Nv.StrictMode,{children:ge.jsx(j1,{})}));
