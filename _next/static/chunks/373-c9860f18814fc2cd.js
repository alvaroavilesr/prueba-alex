"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[373],{2011:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return b}});let r=n(6927),o=n(5909),l=o._(n(6006)),i=r._(n(9619)),a=n(9080),u=n(9600),s=n(5934);n(4169);let c=r._(n(8697)),f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function d(e){return void 0!==e.default}function p(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,n,r,o,l,i){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let a="decode"in e?e.decode():Promise.resolve();a.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===n&&l(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==o?void 0:o.current)&&o.current(e)}})}function g(e){let[t,n]=l.version.split("."),r=parseInt(t,10),o=parseInt(n,10);return r>18||18===r&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let h=(0,l.forwardRef)((e,t)=>{let{imgAttributes:n,heightInt:r,widthInt:o,qualityInt:i,className:a,imgStyle:u,blurStyle:s,isLazy:c,fetchPriority:f,fill:d,placeholder:p,loading:h,srcString:y,config:b,unoptimized:v,loader:w,onLoadRef:S,onLoadingCompleteRef:E,setBlurComplete:P,setShowAltText:_,onLoad:O,onError:C,...j}=e;return h=c?"lazy":h,l.default.createElement("img",{...j,...g(f),loading:h,width:o,height:r,decoding:"async","data-nimg":d?"fill":"1",className:a,style:{...u,...s},...n,ref:(0,l.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&m(e,y,p,S,E,P,v))},[y,p,S,E,P,C,v,t]),onLoad:e=>{let t=e.currentTarget;m(t,y,p,S,E,P,v)},onError:e=>{_(!0),"blur"===p&&P(!0),C&&C(e)}})}),y=(0,l.forwardRef)((e,t)=>{var n;let r,o,{src:m,sizes:y,unoptimized:b=!1,priority:v=!1,loading:w,className:S,quality:E,width:P,height:_,fill:O,style:C,onLoad:j,onLoadingComplete:k,placeholder:I="empty",blurDataURL:x,fetchPriority:R,layout:D,objectFit:M,objectPosition:A,lazyBoundary:N,lazyRoot:T,...L}=e,U=(0,l.useContext)(s.ImageConfigContext),z=(0,l.useMemo)(()=>{let e=f||U||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[U]),F=L.loader||c.default;delete L.loader;let B="__next_img_default"in F;if(B){if("custom"===z.loader)throw Error('Image with src "'+m+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=F;F=t=>{let{config:n,...r}=t;return e(r)}}if(D){"fill"===D&&(O=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[D];e&&(C={...C,...e});let t={responsive:"100vw",fill:"100vw"}[D];t&&!y&&(y=t)}let H="",$=p(P),W=p(_);if("object"==typeof(n=m)&&(d(n)||void 0!==n.src)){let e=d(m)?m.default:m;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(r=e.blurWidth,o=e.blurHeight,x=x||e.blurDataURL,H=e.src,!O){if($||W){if($&&!W){let t=$/e.width;W=Math.round(e.height*t)}else if(!$&&W){let t=W/e.height;$=Math.round(e.width*t)}}else $=e.width,W=e.height}}let V=!v&&("lazy"===w||void 0===w);(!(m="string"==typeof m?m:H)||m.startsWith("data:")||m.startsWith("blob:"))&&(b=!0,V=!1),z.unoptimized&&(b=!0),B&&m.endsWith(".svg")&&!z.dangerouslyAllowSVG&&(b=!0),v&&(R="high");let[G,Y]=(0,l.useState)(!1),[q,K]=(0,l.useState)(!1),J=p(E),Q=Object.assign(O?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:M,objectPosition:A}:{},q?{}:{color:"transparent"},C),X="blur"===I&&x&&!G?{backgroundSize:Q.objectFit||"cover",backgroundPosition:Q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,a.getImageBlurSvg)({widthInt:$,heightInt:W,blurWidth:r,blurHeight:o,blurDataURL:x,objectFit:Q.objectFit})+'")'}:{},Z=function(e){let{config:t,src:n,unoptimized:r,width:o,quality:l,sizes:i,loader:a}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:u,kind:s}=function(e,t,n){let{deviceSizes:r,allSizes:o}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let l=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:l,kind:"x"}}(t,o,i),c=u.length-1;return{sizes:i||"w"!==s?i:"100vw",srcSet:u.map((e,r)=>a({config:t,src:n,quality:l,width:e})+" "+("w"===s?e:r+1)+s).join(", "),src:a({config:t,src:n,quality:l,width:u[c]})}}({config:z,src:m,unoptimized:b,width:$,quality:J,sizes:y,loader:F}),ee=m,et=(0,l.useRef)(j);(0,l.useEffect)(()=>{et.current=j},[j]);let en=(0,l.useRef)(k);(0,l.useEffect)(()=>{en.current=k},[k]);let er={isLazy:V,imgAttributes:Z,heightInt:W,widthInt:$,qualityInt:J,className:S,imgStyle:Q,blurStyle:X,loading:w,config:z,fetchPriority:R,fill:O,unoptimized:b,placeholder:I,loader:F,srcString:ee,onLoadRef:et,onLoadingCompleteRef:en,setBlurComplete:Y,setShowAltText:K,...L};return l.default.createElement(l.default.Fragment,null,l.default.createElement(h,{...er,ref:t}),v?l.default.createElement(i.default,null,l.default.createElement("link",{key:"__nimg-"+Z.src+Z.srcSet+Z.sizes,rel:"preload",as:"image",href:Z.srcSet?void 0:Z.src,imageSrcSet:Z.srcSet,imageSizes:Z.sizes,crossOrigin:L.crossOrigin,...g(R)})):null)}),b=y;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4920:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return l}});let r=n(6927),o=r._(n(6006)),l=o.default.createContext({})},5224:function(e,t){function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},9619:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{defaultHead:function(){return c},default:function(){return m}});let r=n(6927),o=n(5909),l=o._(n(6006)),i=r._(n(2776)),a=n(4920),u=n(508),s=n(5224);function c(e){void 0===e&&(e=!1);let t=[l.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(l.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(4169);let d=["name","httpEquiv","charSet","itemProp"];function p(e,t){let{inAmpMode:n}=t;return e.reduce(f,[]).reverse().concat(c(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return o=>{let l=!0,i=!1;if(o.key&&"number"!=typeof o.key&&o.key.indexOf("$")>0){i=!0;let t=o.key.slice(o.key.indexOf("$")+1);e.has(t)?l=!1:e.add(t)}switch(o.type){case"title":case"base":t.has(o.type)?l=!1:t.add(o.type);break;case"meta":for(let e=0,t=d.length;e<t;e++){let t=d[e];if(o.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?l=!1:n.add(t);else{let e=o.props[t],n=r[t]||new Set;("name"!==t||!i)&&n.has(e)?l=!1:(n.add(e),r[t]=n)}}}}return l}}()).reverse().map((e,t)=>{let r=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,l.default.cloneElement(e,t)}return l.default.cloneElement(e,{key:r})})}let m=function(e){let{children:t}=e,n=(0,l.useContext)(a.AmpStateContext),r=(0,l.useContext)(u.HeadManagerContext);return l.default.createElement(i.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9080:function(e,t){function n(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:o,blurDataURL:l,objectFit:i}=e,a=r||t,u=o||n,s=l.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&u?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+a+" "+u+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+(r&&o?"1":"20")+"'/%3E"+s+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+l+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===i?"xMidYMid":"cover"===i?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+l+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},5934:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return i}});let r=n(6927),o=r._(n(6006)),l=n(9600),i=o.default.createContext(l.imageConfigDefault)},9600:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return r}});let n=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},8697:function(e,t){function n(e){let{config:t,src:n,width:r,quality:o}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;let r=n},2776:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let r=n(5909),o=r._(n(6006)),l=o.useLayoutEffect,i=o.useEffect;function a(e){let{headManager:t,reduceComponentsToState:n}=e;function r(){if(t&&t.mountedInstances){let r=o.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(r,e))}}return l(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),l(()=>(t&&(t._pendingUpdate=r),()=>{t&&(t._pendingUpdate=r)})),i(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},4169:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},3177:function(e,t,n){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(6006),o=Symbol.for("react.element"),l=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,l={},s=null,c=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,r)&&!u.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===l[r]&&(l[r]=t[r]);return{$$typeof:o,type:e,key:s,ref:c,props:l,_owner:a.current}}t.Fragment=l,t.jsx=s,t.jsxs=s},9268:function(e,t,n){e.exports=n(3177)},7023:function(e,t,n){n.d(t,{p:function(){return J}});var r,o,l,i,a,u,s,c,f=n(6006),d=n.t(f,2),p=Object.defineProperty,m=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t,n)=>(m(e,"symbol"!=typeof t?t+"":t,n),n);let h=new class{constructor(){g(this,"current",this.detect()),g(this,"handoffState","pending"),g(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}},y=(e,t)=>{h.isServer?(0,f.useEffect)(e,t):(0,f.useLayoutEffect)(e,t)},b=function(e){let t;let n=(t=(0,f.useRef)(e),y(()=>{t.current=e},[e]),t);return f.useCallback((...e)=>n.current(...e),[n])},v=null!=(s=f.useId)?s:function(){let e=function(){let e;let t=(e="undefined"==typeof document,(0,d.useSyncExternalStore)(()=>()=>{},()=>!1,()=>!e)),[n,r]=f.useState(h.isHandoffComplete);return n&&!1===h.isHandoffComplete&&r(!1),f.useEffect(()=>{!0!==n&&r(!0)},[n]),f.useEffect(()=>h.handoff(),[]),!t&&n}(),[t,n]=f.useState(e?()=>h.nextId():null);return y(()=>{null===t&&n(h.nextId())},[t]),null!=t?""+t:void 0};function w(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";if("string"==typeof n&&"button"===n.toLowerCase())return"button"}let S=Symbol();function E(...e){let t=(0,f.useRef)(e);(0,f.useEffect)(()=>{t.current=e},[e]);let n=b(e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)});return e.every(e=>null==e||(null==e?void 0:e[S]))?void 0:n}let P=(0,f.createContext)(null);P.displayName="OpenClosedContext";var _=((r=_||{})[r.Open=1]="Open",r[r.Closed=2]="Closed",r[r.Closing=4]="Closing",r[r.Opening=8]="Opening",r);function O({value:e,children:t}){return f.createElement(P.Provider,{value:e},t)}function C(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let r=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,C),r}function j(...e){return Array.from(new Set(e.flatMap(e=>"string"==typeof e?e.split(" "):[]))).filter(Boolean).join(" ")}var k=((o=k||{})[o.None=0]="None",o[o.RenderStrategy=1]="RenderStrategy",o[o.Static=2]="Static",o),I=((l=I||{})[l.Unmount=0]="Unmount",l[l.Hidden=1]="Hidden",l);function x({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:l=!0,name:i,mergeRefs:a}){a=null!=a?a:M;let u=A(t,e);if(l)return R(u,n,r,i,a);let s=null!=o?o:0;if(2&s){let{static:e=!1,...t}=u;if(e)return R(t,n,r,i,a)}if(1&s){let{unmount:e=!0,...t}=u;return C(e?0:1,{0:()=>null,1:()=>R({...t,hidden:!0,style:{display:"none"}},n,r,i,a)})}return R(u,n,r,i,a)}function R(e,t={},n,r,o){let{as:l=n,children:i,refName:a="ref",...u}=L(e,["unmount","static"]),s=void 0!==e.ref?{[a]:e.ref}:{},c="function"==typeof i?i(t):i;"className"in u&&u.className&&"function"==typeof u.className&&(u.className=u.className(t));let d={};if(t){let e=!1,n=[];for(let[r,o]of Object.entries(t))"boolean"==typeof o&&(e=!0),!0===o&&n.push(r);e&&(d["data-headlessui-state"]=n.join(" "))}if(l===f.Fragment&&Object.keys(T(u)).length>0){if(!(0,f.isValidElement)(c)||Array.isArray(c)&&c.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(u).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));let e=c.props,t="function"==typeof(null==e?void 0:e.className)?(...t)=>j(null==e?void 0:e.className(...t),u.className):j(null==e?void 0:e.className,u.className);return(0,f.cloneElement)(c,Object.assign({},A(c.props,T(L(u,["ref"]))),d,s,{ref:o(c.ref,s.ref)},t?{className:t}:{}))}return(0,f.createElement)(l,Object.assign({},L(u,["ref"]),l!==f.Fragment&&s,l!==f.Fragment&&d),c)}function D(){let e=(0,f.useRef)([]),t=(0,f.useCallback)(t=>{for(let n of e.current)null!=n&&("function"==typeof n?n(t):n.current=t)},[]);return(...n)=>{if(!n.every(e=>null==e))return e.current=n,t}}function M(...e){return e.every(e=>null==e)?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}function A(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(e=>[e,void 0])));for(let e in n)Object.assign(t,{[e](t,...r){for(let o of n[e]){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;o(t,...r)}}});return t}function N(e){var t;return Object.assign((0,f.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function T(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function L(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}let U=null!=(c=f.startTransition)?c:function(e){e()};var z=((i=z||{}).Space=" ",i.Enter="Enter",i.Escape="Escape",i.Backspace="Backspace",i.Delete="Delete",i.ArrowLeft="ArrowLeft",i.ArrowUp="ArrowUp",i.ArrowRight="ArrowRight",i.ArrowDown="ArrowDown",i.Home="Home",i.End="End",i.PageUp="PageUp",i.PageDown="PageDown",i.Tab="Tab",i),F=((a=F||{})[a.Open=0]="Open",a[a.Closed=1]="Closed",a),B=((u=B||{})[u.ToggleDisclosure=0]="ToggleDisclosure",u[u.CloseDisclosure=1]="CloseDisclosure",u[u.SetButtonId=2]="SetButtonId",u[u.SetPanelId=3]="SetPanelId",u[u.LinkPanel=4]="LinkPanel",u[u.UnlinkPanel=5]="UnlinkPanel",u);let H={0:e=>({...e,disclosureState:C(e.disclosureState,{0:1,1:0})}),1:e=>1===e.disclosureState?e:{...e,disclosureState:1},4:e=>!0===e.linkedPanel?e:{...e,linkedPanel:!0},5:e=>!1===e.linkedPanel?e:{...e,linkedPanel:!1},2:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},3:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},$=(0,f.createContext)(null);function W(e){let t=(0,f.useContext)($);if(null===t){let t=Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,W),t}return t}$.displayName="DisclosureContext";let V=(0,f.createContext)(null);V.displayName="DisclosureAPIContext";let G=(0,f.createContext)(null);function Y(e,t){return C(t.type,H,e,t)}G.displayName="DisclosurePanelContext";let q=f.Fragment,K=k.RenderStrategy|k.Static,J=Object.assign(N(function(e,t){let{defaultOpen:n=!1,...r}=e,o=(0,f.useRef)(null),l=E(t,function(e,t=!0){return Object.assign(e,{[S]:t})}(e=>{o.current=e},void 0===e.as||e.as===f.Fragment)),i=(0,f.useRef)(null),a=(0,f.useRef)(null),u=(0,f.useReducer)(Y,{disclosureState:n?0:1,linkedPanel:!1,buttonRef:a,panelRef:i,buttonId:null,panelId:null}),[{disclosureState:s,buttonId:c},d]=u,p=b(e=>{d({type:1});let t=h.isServer?null:o instanceof Node?o.ownerDocument:null!=o&&o.hasOwnProperty("current")&&o.current instanceof Node?o.current.ownerDocument:document;if(!t||!c)return;let n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:t.getElementById(c):t.getElementById(c);null==n||n.focus()}),m=(0,f.useMemo)(()=>({close:p}),[p]),g=(0,f.useMemo)(()=>({open:0===s,close:p}),[s,p]);return f.createElement($.Provider,{value:u},f.createElement(V.Provider,{value:m},f.createElement(O,{value:C(s,{0:_.Open,1:_.Closed})},x({ourProps:{ref:l},theirProps:r,slot:g,defaultTag:q,name:"Disclosure"}))))}),{Button:N(function(e,t){let n=v(),{id:r=`headlessui-disclosure-button-${n}`,...o}=e,[l,i]=W("Disclosure.Button"),a=(0,f.useContext)(G),u=null!==a&&a===l.panelId,s=(0,f.useRef)(null),c=E(s,t,u?null:l.buttonRef),d=D();(0,f.useEffect)(()=>{if(!u)return i({type:2,buttonId:r}),()=>{i({type:2,buttonId:null})}},[r,i,u]);let p=b(e=>{var t;if(u){if(1===l.disclosureState)return;switch(e.key){case z.Space:case z.Enter:e.preventDefault(),e.stopPropagation(),i({type:0}),null==(t=l.buttonRef.current)||t.focus()}}else switch(e.key){case z.Space:case z.Enter:e.preventDefault(),e.stopPropagation(),i({type:0})}}),m=b(e=>{e.key===z.Space&&e.preventDefault()}),g=b(t=>{var n;(function(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(null==t?void 0:t.getAttribute("disabled"))==="";return!(r&&function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r})(t.currentTarget)||e.disabled||(u?(i({type:0}),null==(n=l.buttonRef.current)||n.focus()):i({type:0}))}),h=(0,f.useMemo)(()=>({open:0===l.disclosureState}),[l]),S=function(e,t){let[n,r]=(0,f.useState)(()=>w(e));return y(()=>{r(w(e))},[e.type,e.as]),y(()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&r("button")},[n,t]),n}(e,s);return x({mergeRefs:d,ourProps:u?{ref:c,type:S,onKeyDown:p,onClick:g}:{ref:c,id:r,type:S,"aria-expanded":0===l.disclosureState,"aria-controls":l.linkedPanel?l.panelId:void 0,onKeyDown:p,onKeyUp:m,onClick:g},theirProps:o,slot:h,defaultTag:"button",name:"Disclosure.Button"})}),Panel:N(function(e,t){let n=v(),{id:r=`headlessui-disclosure-panel-${n}`,...o}=e,[l,i]=W("Disclosure.Panel"),{close:a}=function e(t){let n=(0,f.useContext)(V);if(null===n){let n=Error(`<${t} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,e),n}return n}("Disclosure.Panel"),u=D(),s=E(t,l.panelRef,e=>{U(()=>i({type:e?4:5}))});(0,f.useEffect)(()=>(i({type:3,panelId:r}),()=>{i({type:3,panelId:null})}),[r,i]);let c=(0,f.useContext)(P),d=null!==c?(c&_.Open)===_.Open:0===l.disclosureState,p=(0,f.useMemo)(()=>({open:0===l.disclosureState,close:a}),[l,a]);return f.createElement(G.Provider,{value:l.panelId},x({mergeRefs:u,ourProps:{ref:s,id:r},theirProps:o,slot:p,defaultTag:"div",features:K,visible:d,name:"Disclosure.Panel"}))})})}}]);