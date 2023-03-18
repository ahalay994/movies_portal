(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function qc(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function Gc(t){if(K(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Oe(s)?Nv(s):Gc(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Oe(t))return t;if(Te(t))return t}}const Av=/;(?![^(]*\))/g,kv=/:([^]+)/,Pv=/\/\*.*?\*\//gs;function Nv(t){const e={};return t.replace(Pv,"").split(Av).forEach(n=>{if(n){const s=n.split(kv);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Yc(t){let e="";if(Oe(t))e=t;else if(K(t))for(let n=0;n<t.length;n++){const s=Yc(t[n]);s&&(e+=s+" ")}else if(Te(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ov="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",xv=qc(Ov);function bp(t){return!!t||t===""}const Ns=t=>Oe(t)?t:t==null?"":K(t)||Te(t)&&(t.toString===Sp||!G(t.toString))?JSON.stringify(t,Cp,2):String(t),Cp=(t,e)=>e&&e.__v_isRef?Cp(t,e.value):Us(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Rp(e)?{[`Set(${e.size})`]:[...e.values()]}:Te(e)&&!K(e)&&!Ap(e)?String(e):e,ve={},Fs=[],Lt=()=>{},Dv=()=>!1,Mv=/^on[^a-z]/,da=t=>Mv.test(t),Xc=t=>t.startsWith("onUpdate:"),lt=Object.assign,Qc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Lv=Object.prototype.hasOwnProperty,ie=(t,e)=>Lv.call(t,e),K=Array.isArray,Us=t=>fa(t)==="[object Map]",Rp=t=>fa(t)==="[object Set]",G=t=>typeof t=="function",Oe=t=>typeof t=="string",Jc=t=>typeof t=="symbol",Te=t=>t!==null&&typeof t=="object",Zc=t=>Te(t)&&G(t.then)&&G(t.catch),Sp=Object.prototype.toString,fa=t=>Sp.call(t),Fv=t=>fa(t).slice(8,-1),Ap=t=>fa(t)==="[object Object]",eu=t=>Oe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,vo=qc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),pa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Uv=/-(\w)/g,Qt=pa(t=>t.replace(Uv,(e,n)=>n?n.toUpperCase():"")),Bv=/\B([A-Z])/g,Es=pa(t=>t.replace(Bv,"-$1").toLowerCase()),ga=pa(t=>t.charAt(0).toUpperCase()+t.slice(1)),cl=pa(t=>t?`on${ga(t)}`:""),rr=(t,e)=>!Object.is(t,e),Eo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ao=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Kl=t=>{const e=parseFloat(t);return isNaN(e)?t:e},$v=t=>{const e=Oe(t)?Number(t):NaN;return isNaN(e)?t:e};let Xh;const Hv=()=>Xh||(Xh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let _t;class kp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=_t,!e&&_t&&(this.index=(_t.scopes||(_t.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=_t;try{return _t=this,e()}finally{_t=n}}}on(){_t=this}off(){_t=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function tu(t){return new kp(t)}function jv(t,e=_t){e&&e.active&&e.effects.push(t)}function nu(){return _t}function Pp(t){_t&&_t.cleanups.push(t)}const su=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Np=t=>(t.w&$n)>0,Op=t=>(t.n&$n)>0,Wv=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=$n},Vv=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Np(i)&&!Op(i)?i.delete(t):e[n++]=i,i.w&=~$n,i.n&=~$n}e.length=n}},ko=new WeakMap;let Ui=0,$n=1;const ql=30;let xt;const as=Symbol(""),Gl=Symbol("");class iu{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,jv(this,s)}run(){if(!this.active)return this.fn();let e=xt,n=On;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=xt,xt=this,On=!0,$n=1<<++Ui,Ui<=ql?Wv(this):Qh(this),this.fn()}finally{Ui<=ql&&Vv(this),$n=1<<--Ui,xt=this.parent,On=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){xt===this?this.deferStop=!0:this.active&&(Qh(this),this.onStop&&this.onStop(),this.active=!1)}}function Qh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let On=!0;const xp=[];function hi(){xp.push(On),On=!1}function di(){const t=xp.pop();On=t===void 0?!0:t}function pt(t,e,n){if(On&&xt){let s=ko.get(t);s||ko.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=su()),Dp(i)}}function Dp(t,e){let n=!1;Ui<=ql?Op(t)||(t.n|=$n,n=!Np(t)):n=!t.has(xt),n&&(t.add(xt),xt.deps.push(t))}function fn(t,e,n,s,i,r){const o=ko.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&K(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":K(t)?eu(n)&&a.push(o.get("length")):(a.push(o.get(as)),Us(t)&&a.push(o.get(Gl)));break;case"delete":K(t)||(a.push(o.get(as)),Us(t)&&a.push(o.get(Gl)));break;case"set":Us(t)&&a.push(o.get(as));break}if(a.length===1)a[0]&&Yl(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Yl(su(l))}}function Yl(t,e){const n=K(t)?t:[...t];for(const s of n)s.computed&&Jh(s);for(const s of n)s.computed||Jh(s)}function Jh(t,e){(t!==xt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function zv(t,e){var n;return(n=ko.get(t))===null||n===void 0?void 0:n.get(e)}const Kv=qc("__proto__,__v_isRef,__isVue"),Mp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Jc)),qv=ru(),Gv=ru(!1,!0),Yv=ru(!0),Zh=Xv();function Xv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=re(this);for(let r=0,o=this.length;r<o;r++)pt(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(re)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){hi();const s=re(this)[e].apply(this,n);return di(),s}}),t}function Qv(t){const e=re(this);return pt(e,"has",t),e.hasOwnProperty(t)}function ru(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?fE:$p:e?Bp:Up).get(s))return s;const o=K(s);if(!t){if(o&&ie(Zh,i))return Reflect.get(Zh,i,r);if(i==="hasOwnProperty")return Qv}const a=Reflect.get(s,i,r);return(Jc(i)?Mp.has(i):Kv(i))||(t||pt(s,"get",i),e)?a:Ae(a)?o&&eu(i)?a:a.value:Te(a)?t?Hp(a):fi(a):a}}const Jv=Lp(),Zv=Lp(!0);function Lp(t=!1){return function(n,s,i,r){let o=n[s];if(Ys(o)&&Ae(o)&&!Ae(i))return!1;if(!t&&(!Po(i)&&!Ys(i)&&(o=re(o),i=re(i)),!K(n)&&Ae(o)&&!Ae(i)))return o.value=i,!0;const a=K(n)&&eu(s)?Number(s)<n.length:ie(n,s),l=Reflect.set(n,s,i,r);return n===re(r)&&(a?rr(i,o)&&fn(n,"set",s,i):fn(n,"add",s,i)),l}}function eE(t,e){const n=ie(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&fn(t,"delete",e,void 0),s}function tE(t,e){const n=Reflect.has(t,e);return(!Jc(e)||!Mp.has(e))&&pt(t,"has",e),n}function nE(t){return pt(t,"iterate",K(t)?"length":as),Reflect.ownKeys(t)}const Fp={get:qv,set:Jv,deleteProperty:eE,has:tE,ownKeys:nE},sE={get:Yv,set(t,e){return!0},deleteProperty(t,e){return!0}},iE=lt({},Fp,{get:Gv,set:Zv}),ou=t=>t,_a=t=>Reflect.getPrototypeOf(t);function Zr(t,e,n=!1,s=!1){t=t.__v_raw;const i=re(t),r=re(e);n||(e!==r&&pt(i,"get",e),pt(i,"get",r));const{has:o}=_a(i),a=s?ou:n?cu:or;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function eo(t,e=!1){const n=this.__v_raw,s=re(n),i=re(t);return e||(t!==i&&pt(s,"has",t),pt(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function to(t,e=!1){return t=t.__v_raw,!e&&pt(re(t),"iterate",as),Reflect.get(t,"size",t)}function ed(t){t=re(t);const e=re(this);return _a(e).has.call(e,t)||(e.add(t),fn(e,"add",t,t)),this}function td(t,e){e=re(e);const n=re(this),{has:s,get:i}=_a(n);let r=s.call(n,t);r||(t=re(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?rr(e,o)&&fn(n,"set",t,e):fn(n,"add",t,e),this}function nd(t){const e=re(this),{has:n,get:s}=_a(e);let i=n.call(e,t);i||(t=re(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&fn(e,"delete",t,void 0),r}function sd(){const t=re(this),e=t.size!==0,n=t.clear();return e&&fn(t,"clear",void 0,void 0),n}function no(t,e){return function(s,i){const r=this,o=r.__v_raw,a=re(o),l=e?ou:t?cu:or;return!t&&pt(a,"iterate",as),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function so(t,e,n){return function(...s){const i=this.__v_raw,r=re(i),o=Us(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?ou:e?cu:or;return!e&&pt(r,"iterate",l?Gl:as),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function vn(t){return function(...e){return t==="delete"?!1:this}}function rE(){const t={get(r){return Zr(this,r)},get size(){return to(this)},has:eo,add:ed,set:td,delete:nd,clear:sd,forEach:no(!1,!1)},e={get(r){return Zr(this,r,!1,!0)},get size(){return to(this)},has:eo,add:ed,set:td,delete:nd,clear:sd,forEach:no(!1,!0)},n={get(r){return Zr(this,r,!0)},get size(){return to(this,!0)},has(r){return eo.call(this,r,!0)},add:vn("add"),set:vn("set"),delete:vn("delete"),clear:vn("clear"),forEach:no(!0,!1)},s={get(r){return Zr(this,r,!0,!0)},get size(){return to(this,!0)},has(r){return eo.call(this,r,!0)},add:vn("add"),set:vn("set"),delete:vn("delete"),clear:vn("clear"),forEach:no(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=so(r,!1,!1),n[r]=so(r,!0,!1),e[r]=so(r,!1,!0),s[r]=so(r,!0,!0)}),[t,n,e,s]}const[oE,aE,lE,cE]=rE();function au(t,e){const n=e?t?cE:lE:t?aE:oE;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ie(n,i)&&i in s?n:s,i,r)}const uE={get:au(!1,!1)},hE={get:au(!1,!0)},dE={get:au(!0,!1)},Up=new WeakMap,Bp=new WeakMap,$p=new WeakMap,fE=new WeakMap;function pE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gE(t){return t.__v_skip||!Object.isExtensible(t)?0:pE(Fv(t))}function fi(t){return Ys(t)?t:lu(t,!1,Fp,uE,Up)}function _E(t){return lu(t,!1,iE,hE,Bp)}function Hp(t){return lu(t,!0,sE,dE,$p)}function lu(t,e,n,s,i){if(!Te(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=gE(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function xn(t){return Ys(t)?xn(t.__v_raw):!!(t&&t.__v_isReactive)}function Ys(t){return!!(t&&t.__v_isReadonly)}function Po(t){return!!(t&&t.__v_isShallow)}function jp(t){return xn(t)||Ys(t)}function re(t){const e=t&&t.__v_raw;return e?re(e):t}function Xs(t){return Ao(t,"__v_skip",!0),t}const or=t=>Te(t)?fi(t):t,cu=t=>Te(t)?Hp(t):t;function Wp(t){On&&xt&&(t=re(t),Dp(t.dep||(t.dep=su())))}function Vp(t,e){t=re(t);const n=t.dep;n&&Yl(n)}function Ae(t){return!!(t&&t.__v_isRef===!0)}function Ct(t){return Kp(t,!1)}function zp(t){return Kp(t,!0)}function Kp(t,e){return Ae(t)?t:new mE(t,e)}class mE{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:re(e),this._value=n?e:or(e)}get value(){return Wp(this),this._value}set value(e){const n=this.__v_isShallow||Po(e)||Ys(e);e=n?e:re(e),rr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:or(e),Vp(this))}}function te(t){return Ae(t)?t.value:t}const yE={get:(t,e,n)=>te(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ae(i)&&!Ae(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function qp(t){return xn(t)?t:new Proxy(t,yE)}function vE(t){const e=K(t)?new Array(t.length):{};for(const n in t)e[n]=wE(t,n);return e}class EE{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return zv(re(this._object),this._key)}}function wE(t,e,n){const s=t[e];return Ae(s)?s:new EE(t,e,n)}var Gp;class IE{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Gp]=!1,this._dirty=!0,this.effect=new iu(e,()=>{this._dirty||(this._dirty=!0,Vp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=re(this);return Wp(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Gp="__v_isReadonly";function TE(t,e,n=!1){let s,i;const r=G(t);return r?(s=t,i=Lt):(s=t.get,i=t.set),new IE(s,i,r||!i,n)}function Dn(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){pi(r,e,n)}return i}function Ft(t,e,n,s){if(G(t)){const r=Dn(t,e,n,s);return r&&Zc(r)&&r.catch(o=>{pi(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Ft(t[r],e,n,s));return i}function pi(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Dn(l,null,10,[t,o,a]);return}}bE(t,n,i,s)}function bE(t,e,n,s=!0){console.error(t)}let ar=!1,Xl=!1;const Qe=[];let Vt=0;const Bs=[];let an=null,ts=0;const Yp=Promise.resolve();let uu=null;function hu(t){const e=uu||Yp;return t?e.then(this?t.bind(this):t):e}function CE(t){let e=Vt+1,n=Qe.length;for(;e<n;){const s=e+n>>>1;lr(Qe[s])<t?e=s+1:n=s}return e}function ma(t){(!Qe.length||!Qe.includes(t,ar&&t.allowRecurse?Vt+1:Vt))&&(t.id==null?Qe.push(t):Qe.splice(CE(t.id),0,t),Xp())}function Xp(){!ar&&!Xl&&(Xl=!0,uu=Yp.then(Zp))}function RE(t){const e=Qe.indexOf(t);e>Vt&&Qe.splice(e,1)}function Qp(t){K(t)?Bs.push(...t):(!an||!an.includes(t,t.allowRecurse?ts+1:ts))&&Bs.push(t),Xp()}function id(t,e=ar?Vt+1:0){for(;e<Qe.length;e++){const n=Qe[e];n&&n.pre&&(Qe.splice(e,1),e--,n())}}function Jp(t){if(Bs.length){const e=[...new Set(Bs)];if(Bs.length=0,an){an.push(...e);return}for(an=e,an.sort((n,s)=>lr(n)-lr(s)),ts=0;ts<an.length;ts++)an[ts]();an=null,ts=0}}const lr=t=>t.id==null?1/0:t.id,SE=(t,e)=>{const n=lr(t)-lr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Zp(t){Xl=!1,ar=!0,Qe.sort(SE);const e=Lt;try{for(Vt=0;Vt<Qe.length;Vt++){const n=Qe[Vt];n&&n.active!==!1&&Dn(n,null,14)}}finally{Vt=0,Qe.length=0,Jp(),ar=!1,uu=null,(Qe.length||Bs.length)&&Zp()}}function AE(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ve;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||ve;d&&(i=n.map(p=>Oe(p)?p.trim():p)),h&&(i=n.map(Kl))}let a,l=s[a=cl(e)]||s[a=cl(Qt(e))];!l&&r&&(l=s[a=cl(Es(e))]),l&&Ft(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ft(c,t,6,i)}}function eg(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!G(t)){const l=c=>{const u=eg(c,e,!0);u&&(a=!0,lt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Te(t)&&s.set(t,null),null):(K(r)?r.forEach(l=>o[l]=null):lt(o,r),Te(t)&&s.set(t,o),o)}function ya(t,e){return!t||!da(e)?!1:(e=e.slice(2).replace(/Once$/,""),ie(t,e[0].toLowerCase()+e.slice(1))||ie(t,Es(e))||ie(t,e))}let Ke=null,va=null;function No(t){const e=Ke;return Ke=t,va=t&&t.type.__scopeId||null,e}function kE(t){va=t}function PE(){va=null}function gi(t,e=Ke,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&pd(-1);const r=No(e);let o;try{o=t(...i)}finally{No(r),s._d&&pd(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ul(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:p,ctx:_,inheritAttrs:y}=t;let b,R;const v=No(t);try{if(n.shapeFlag&4){const x=i||s;b=Ot(u.call(x,x,h,r,p,d,_)),R=l}else{const x=e;b=Ot(x.length>1?x(r,{attrs:l,slots:a,emit:c}):x(r,null)),R=e.props?l:OE(l)}}catch(x){qi.length=0,pi(x,t,1),b=he(Zt)}let I=b;if(R&&y!==!1){const x=Object.keys(R),{shapeFlag:U}=I;x.length&&U&7&&(o&&x.some(Xc)&&(R=xE(R,o)),I=Js(I,R))}return n.dirs&&(I=Js(I),I.dirs=I.dirs?I.dirs.concat(n.dirs):n.dirs),n.transition&&(I.transition=n.transition),b=I,No(v),b}function NE(t){let e;for(let n=0;n<t.length;n++){const s=t[n];if(ur(s)){if(s.type!==Zt||s.children==="v-if"){if(e)return;e=s}}else return}return e}const OE=t=>{let e;for(const n in t)(n==="class"||n==="style"||da(n))&&((e||(e={}))[n]=t[n]);return e},xE=(t,e)=>{const n={};for(const s in t)(!Xc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function DE(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?rd(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!ya(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?rd(s,o,c):!0:!!o;return!1}function rd(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!ya(n,r))return!0}return!1}function du({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const ME=t=>t.__isSuspense,LE={name:"Suspense",__isSuspense:!0,process(t,e,n,s,i,r,o,a,l,c){t==null?FE(e,n,s,i,r,o,a,l,c):UE(t,e,n,s,i,o,a,l,c)},hydrate:BE,create:pu,normalize:$E},fu=LE;function cr(t,e){const n=t.props&&t.props[e];G(n)&&n()}function FE(t,e,n,s,i,r,o,a,l){const{p:c,o:{createElement:u}}=l,h=u("div"),d=t.suspense=pu(t,i,s,e,h,n,r,o,a,l);c(null,d.pendingBranch=t.ssContent,h,null,s,d,r,o),d.deps>0?(cr(t,"onPending"),cr(t,"onFallback"),c(null,t.ssFallback,e,n,s,null,r,o),$s(d,t.ssFallback)):d.resolve()}function UE(t,e,n,s,i,r,o,a,{p:l,um:c,o:{createElement:u}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const d=e.ssContent,p=e.ssFallback,{activeBranch:_,pendingBranch:y,isInFallback:b,isHydrating:R}=h;if(y)h.pendingBranch=d,Cn(d,y)?(l(y,d,h.hiddenContainer,null,i,h,r,o,a),h.deps<=0?h.resolve():b&&(l(_,p,n,s,i,null,r,o,a),$s(h,p))):(h.pendingId++,R?(h.isHydrating=!1,h.activeBranch=y):c(y,i,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),b?(l(null,d,h.hiddenContainer,null,i,h,r,o,a),h.deps<=0?h.resolve():(l(_,p,n,s,i,null,r,o,a),$s(h,p))):_&&Cn(d,_)?(l(_,d,n,s,i,h,r,o,a),h.resolve(!0)):(l(null,d,h.hiddenContainer,null,i,h,r,o,a),h.deps<=0&&h.resolve()));else if(_&&Cn(d,_))l(_,d,n,s,i,h,r,o,a),$s(h,d);else if(cr(e,"onPending"),h.pendingBranch=d,h.pendingId++,l(null,d,h.hiddenContainer,null,i,h,r,o,a),h.deps<=0)h.resolve();else{const{timeout:v,pendingId:I}=h;v>0?setTimeout(()=>{h.pendingId===I&&h.fallback(p)},v):v===0&&h.fallback(p)}}function pu(t,e,n,s,i,r,o,a,l,c,u=!1){const{p:h,m:d,um:p,n:_,o:{parentNode:y,remove:b}}=c,R=t.props?$v(t.props.timeout):void 0,v={vnode:t,parent:e,parentComponent:n,isSVG:o,container:s,hiddenContainer:i,anchor:r,deps:0,pendingId:0,timeout:typeof R=="number"?R:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(I=!1){const{vnode:x,activeBranch:U,pendingBranch:Y,pendingId:V,effects:j,parentComponent:fe,container:Ee}=v;if(v.isHydrating)v.isHydrating=!1;else if(!I){const At=U&&Y.transition&&Y.transition.mode==="out-in";At&&(U.transition.afterLeave=()=>{V===v.pendingId&&d(Y,Ee,We,0)});let{anchor:We}=v;U&&(We=_(U),p(U,fe,v,!0)),At||d(Y,Ee,We,0)}$s(v,Y),v.pendingBranch=null,v.isInFallback=!1;let be=v.parent,nt=!1;for(;be;){if(be.pendingBranch){be.effects.push(...j),nt=!0;break}be=be.parent}nt||Qp(j),v.effects=[],cr(x,"onResolve")},fallback(I){if(!v.pendingBranch)return;const{vnode:x,activeBranch:U,parentComponent:Y,container:V,isSVG:j}=v;cr(x,"onFallback");const fe=_(U),Ee=()=>{v.isInFallback&&(h(null,I,V,fe,Y,null,j,a,l),$s(v,I))},be=I.transition&&I.transition.mode==="out-in";be&&(U.transition.afterLeave=Ee),v.isInFallback=!0,p(U,Y,null,!0),be||Ee()},move(I,x,U){v.activeBranch&&d(v.activeBranch,I,x,U),v.container=I},next(){return v.activeBranch&&_(v.activeBranch)},registerDep(I,x){const U=!!v.pendingBranch;U&&v.deps++;const Y=I.vnode.el;I.asyncDep.catch(V=>{pi(V,I,0)}).then(V=>{if(I.isUnmounted||v.isUnmounted||v.pendingId!==I.suspenseId)return;I.asyncResolved=!0;const{vnode:j}=I;nc(I,V,!1),Y&&(j.el=Y);const fe=!Y&&I.subTree.el;x(I,j,y(Y||I.subTree.el),Y?null:_(I.subTree),v,o,l),fe&&b(fe),du(I,j.el),U&&--v.deps===0&&v.resolve()})},unmount(I,x){v.isUnmounted=!0,v.activeBranch&&p(v.activeBranch,n,I,x),v.pendingBranch&&p(v.pendingBranch,n,I,x)}};return v}function BE(t,e,n,s,i,r,o,a,l){const c=e.suspense=pu(e,s,n,t.parentNode,document.createElement("div"),null,i,r,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,r,o);return c.deps===0&&c.resolve(),u}function $E(t){const{shapeFlag:e,children:n}=t,s=e&32;t.ssContent=od(s?n.default:n),t.ssFallback=s?od(n.fallback):he(Zt)}function od(t){let e;if(G(t)){const n=Qs&&t._c;n&&(t._d=!1,me()),t=t(),n&&(t._d=!0,e=It,vg())}return K(t)&&(t=NE(t)),t=Ot(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function HE(t,e){e&&e.pendingBranch?K(t)?e.effects.push(...t):e.effects.push(t):Qp(t)}function $s(t,e){t.activeBranch=e;const{vnode:n,parentComponent:s}=t,i=n.el=e.el;s&&s.subTree===n&&(s.vnode.el=i,du(s,i))}function wo(t,e){if(Re){let n=Re.provides;const s=Re.parent&&Re.parent.provides;s===n&&(n=Re.provides=Object.create(s)),n[t]=e}}function vt(t,e,n=!1){const s=Re||Ke;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&G(e)?e.call(s.proxy):e}}const io={};function Hs(t,e,n){return tg(t,e,n)}function tg(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=ve){const a=nu()===(Re==null?void 0:Re.scope)?Re:null;let l,c=!1,u=!1;if(Ae(t)?(l=()=>t.value,c=Po(t)):xn(t)?(l=()=>t,s=!0):K(t)?(u=!0,c=t.some(I=>xn(I)||Po(I)),l=()=>t.map(I=>{if(Ae(I))return I.value;if(xn(I))return ss(I);if(G(I))return Dn(I,a,2)})):G(t)?e?l=()=>Dn(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),Ft(t,a,3,[d])}:l=Lt,e&&s){const I=l;l=()=>ss(I())}let h,d=I=>{h=R.onStop=()=>{Dn(I,a,4)}},p;if(Zs)if(d=Lt,e?n&&Ft(e,a,3,[l(),u?[]:void 0,d]):l(),i==="sync"){const I=Pw();p=I.__watcherHandles||(I.__watcherHandles=[])}else return Lt;let _=u?new Array(t.length).fill(io):io;const y=()=>{if(R.active)if(e){const I=R.run();(s||c||(u?I.some((x,U)=>rr(x,_[U])):rr(I,_)))&&(h&&h(),Ft(e,a,3,[I,_===io?void 0:u&&_[0]===io?[]:_,d]),_=I)}else R.run()};y.allowRecurse=!!e;let b;i==="sync"?b=y:i==="post"?b=()=>ut(y,a&&a.suspense):(y.pre=!0,a&&(y.id=a.uid),b=()=>ma(y));const R=new iu(l,b);e?n?y():_=R.run():i==="post"?ut(R.run.bind(R),a&&a.suspense):R.run();const v=()=>{R.stop(),a&&a.scope&&Qc(a.scope.effects,R)};return p&&p.push(v),v}function jE(t,e,n){const s=this.proxy,i=Oe(t)?t.includes(".")?ng(s,t):()=>s[t]:t.bind(s,s);let r;G(e)?r=e:(r=e.handler,n=e);const o=Re;Hn(this);const a=tg(i,r.bind(s),n);return o?Hn(o):Mn(),a}function ng(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function ss(t,e){if(!Te(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ae(t))ss(t.value,e);else if(K(t))for(let n=0;n<t.length;n++)ss(t[n],e);else if(Rp(t)||Us(t))t.forEach(n=>{ss(n,e)});else if(Ap(t))for(const n in t)ss(t[n],e);return t}function tt(t){return G(t)?{setup:t,name:t.name}:t}const Vi=t=>!!t.type.__asyncLoader;function Jt(t){G(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:s,delay:i=200,timeout:r,suspensible:o=!0,onError:a}=t;let l=null,c,u=0;const h=()=>(u++,l=null,d()),d=()=>{let p;return l||(p=l=e().catch(_=>{if(_=_ instanceof Error?_:new Error(String(_)),a)return new Promise((y,b)=>{a(_,()=>y(h()),()=>b(_),u+1)});throw _}).then(_=>p!==l&&l?l:(_&&(_.__esModule||_[Symbol.toStringTag]==="Module")&&(_=_.default),c=_,_)))};return tt({name:"AsyncComponentWrapper",__asyncLoader:d,get __asyncResolved(){return c},setup(){const p=Re;if(c)return()=>hl(c,p);const _=v=>{l=null,pi(v,p,13,!s)};if(o&&p.suspense||Zs)return d().then(v=>()=>hl(v,p)).catch(v=>(_(v),()=>s?he(s,{error:v}):null));const y=Ct(!1),b=Ct(),R=Ct(!!i);return i&&setTimeout(()=>{R.value=!1},i),r!=null&&setTimeout(()=>{if(!y.value&&!b.value){const v=new Error(`Async component timed out after ${r}ms.`);_(v),b.value=v}},r),d().then(()=>{y.value=!0,p.parent&&gu(p.parent.vnode)&&ma(p.parent.update)}).catch(v=>{_(v),b.value=v}),()=>{if(y.value&&c)return hl(c,p);if(b.value&&s)return he(s,{error:b.value});if(n&&!R.value)return he(n)}}})}function hl(t,e){const{ref:n,props:s,children:i,ce:r}=e.vnode,o=he(t,s,i);return o.ref=n,o.ce=r,delete e.vnode.ce,o}const gu=t=>t.type.__isKeepAlive;function WE(t,e){sg(t,"a",e)}function VE(t,e){sg(t,"da",e)}function sg(t,e,n=Re){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Ea(e,s,n),n){let i=n.parent;for(;i&&i.parent;)gu(i.parent.vnode)&&zE(s,e,n,i),i=i.parent}}function zE(t,e,n,s){const i=Ea(e,t,s,!0);ig(()=>{Qc(s[e],i)},n)}function Ea(t,e,n=Re,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;hi(),Hn(n);const a=Ft(e,n,t,o);return Mn(),di(),a});return s?i.unshift(r):i.push(r),r}}const mn=t=>(e,n=Re)=>(!Zs||t==="sp")&&Ea(t,(...s)=>e(...s),n),KE=mn("bm"),qE=mn("m"),GE=mn("bu"),YE=mn("u"),XE=mn("bum"),ig=mn("um"),rg=mn("sp"),QE=mn("rtg"),JE=mn("rtc");function ZE(t,e=Re){Ea("ec",t,e)}function zi(t,e){const n=Ke;if(n===null)return t;const s=Ta(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=ve]=e[r];o&&(G(o)&&(o={mounted:o,updated:o}),o.deep&&ss(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Gn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(hi(),Ft(l,n,8,[t.el,a,t,e]),di())}}const _u="components";function og(t,e){return lg(_u,t,!0,e)||t}const ag=Symbol();function ew(t){return Oe(t)?lg(_u,t,!1)||t:t||ag}function lg(t,e,n=!0,s=!1){const i=Ke||Re;if(i){const r=i.type;if(t===_u){const a=Aw(r,!1);if(a&&(a===e||a===Qt(e)||a===ga(Qt(e))))return r}const o=ad(i[t]||r[t],e)||ad(i.appContext[t],e);return!o&&s?r:o}}function ad(t,e){return t&&(t[e]||t[Qt(e)]||t[ga(Qt(e))])}function ro(t,e,n,s){let i;const r=n&&n[s];if(K(t)||Oe(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Te(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}function cg(t,e,n={},s,i){if(Ke.isCE||Ke.parent&&Vi(Ke.parent)&&Ke.parent.isCE)return e!=="default"&&(n.name=e),he("slot",n,s&&s());let r=t[e];r&&r._c&&(r._d=!1),me();const o=r&&ug(r(n)),a=yn(Ve,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function ug(t){return t.some(e=>ur(e)?!(e.type===Zt||e.type===Ve&&!ug(e.children)):!0)?t:null}const Ql=t=>t?Tg(t)?Ta(t)||t.proxy:Ql(t.parent):null,Ki=lt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ql(t.parent),$root:t=>Ql(t.root),$emit:t=>t.emit,$options:t=>mu(t),$forceUpdate:t=>t.f||(t.f=()=>ma(t.update)),$nextTick:t=>t.n||(t.n=hu.bind(t.proxy)),$watch:t=>jE.bind(t)}),dl=(t,e)=>t!==ve&&!t.__isScriptSetup&&ie(t,e),tw={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(dl(s,e))return o[e]=1,s[e];if(i!==ve&&ie(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&ie(c,e))return o[e]=3,r[e];if(n!==ve&&ie(n,e))return o[e]=4,n[e];Jl&&(o[e]=0)}}const u=Ki[e];let h,d;if(u)return e==="$attrs"&&pt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ve&&ie(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,ie(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return dl(i,e)?(i[e]=n,!0):s!==ve&&ie(s,e)?(s[e]=n,!0):ie(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==ve&&ie(t,o)||dl(e,o)||(a=r[0])&&ie(a,o)||ie(s,o)||ie(Ki,o)||ie(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ie(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Jl=!0;function nw(t){const e=mu(t),n=t.proxy,s=t.ctx;Jl=!1,e.beforeCreate&&ld(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:_,activated:y,deactivated:b,beforeDestroy:R,beforeUnmount:v,destroyed:I,unmounted:x,render:U,renderTracked:Y,renderTriggered:V,errorCaptured:j,serverPrefetch:fe,expose:Ee,inheritAttrs:be,components:nt,directives:At,filters:We}=e;if(c&&sw(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const pe in o){const ce=o[pe];G(ce)&&(s[pe]=ce.bind(n))}if(i){const pe=i.call(n,n);Te(pe)&&(t.data=fi(pe))}if(Jl=!0,r)for(const pe in r){const ce=r[pe],kt=G(ce)?ce.bind(n,n):G(ce.get)?ce.get.bind(n,n):Lt,qn=!G(ce)&&G(ce.set)?ce.set.bind(n):Lt,Pt=dt({get:kt,set:qn});Object.defineProperty(s,pe,{enumerable:!0,configurable:!0,get:()=>Pt.value,set:ct=>Pt.value=ct})}if(a)for(const pe in a)hg(a[pe],s,n,pe);if(l){const pe=G(l)?l.call(n):l;Reflect.ownKeys(pe).forEach(ce=>{wo(ce,pe[ce])})}u&&ld(u,t,"c");function Me(pe,ce){K(ce)?ce.forEach(kt=>pe(kt.bind(n))):ce&&pe(ce.bind(n))}if(Me(KE,h),Me(qE,d),Me(GE,p),Me(YE,_),Me(WE,y),Me(VE,b),Me(ZE,j),Me(JE,Y),Me(QE,V),Me(XE,v),Me(ig,x),Me(rg,fe),K(Ee))if(Ee.length){const pe=t.exposed||(t.exposed={});Ee.forEach(ce=>{Object.defineProperty(pe,ce,{get:()=>n[ce],set:kt=>n[ce]=kt})})}else t.exposed||(t.exposed={});U&&t.render===Lt&&(t.render=U),be!=null&&(t.inheritAttrs=be),nt&&(t.components=nt),At&&(t.directives=At)}function sw(t,e,n=Lt,s=!1){K(t)&&(t=Zl(t));for(const i in t){const r=t[i];let o;Te(r)?"default"in r?o=vt(r.from||i,r.default,!0):o=vt(r.from||i):o=vt(r),Ae(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function ld(t,e,n){Ft(K(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function hg(t,e,n,s){const i=s.includes(".")?ng(n,s):()=>n[s];if(Oe(t)){const r=e[t];G(r)&&Hs(i,r)}else if(G(t))Hs(i,t.bind(n));else if(Te(t))if(K(t))t.forEach(r=>hg(r,e,n,s));else{const r=G(t.handler)?t.handler.bind(n):e[t.handler];G(r)&&Hs(i,r,t)}}function mu(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>Oo(l,c,o,!0)),Oo(l,e,o)),Te(e)&&r.set(e,l),l}function Oo(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Oo(t,r,n,!0),i&&i.forEach(o=>Oo(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=iw[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const iw={data:cd,props:Jn,emits:Jn,methods:Jn,computed:Jn,beforeCreate:it,created:it,beforeMount:it,mounted:it,beforeUpdate:it,updated:it,beforeDestroy:it,beforeUnmount:it,destroyed:it,unmounted:it,activated:it,deactivated:it,errorCaptured:it,serverPrefetch:it,components:Jn,directives:Jn,watch:ow,provide:cd,inject:rw};function cd(t,e){return e?t?function(){return lt(G(t)?t.call(this,this):t,G(e)?e.call(this,this):e)}:e:t}function rw(t,e){return Jn(Zl(t),Zl(e))}function Zl(t){if(K(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function it(t,e){return t?[...new Set([].concat(t,e))]:e}function Jn(t,e){return t?lt(lt(Object.create(null),t),e):e}function ow(t,e){if(!t)return e;if(!e)return t;const n=lt(Object.create(null),t);for(const s in e)n[s]=it(t[s],e[s]);return n}function aw(t,e,n,s=!1){const i={},r={};Ao(r,Ia,1),t.propsDefaults=Object.create(null),dg(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:_E(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function lw(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=re(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(ya(t.emitsOptions,d))continue;const p=e[d];if(l)if(ie(r,d))p!==r[d]&&(r[d]=p,c=!0);else{const _=Qt(d);i[_]=ec(l,a,_,p,t,!1)}else p!==r[d]&&(r[d]=p,c=!0)}}}else{dg(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!ie(e,h)&&((u=Es(h))===h||!ie(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=ec(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!ie(e,h))&&(delete r[h],c=!0)}c&&fn(t,"set","$attrs")}function dg(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(vo(l))continue;const c=e[l];let u;i&&ie(i,u=Qt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:ya(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=re(n),c=a||ve;for(let u=0;u<r.length;u++){const h=r[u];n[h]=ec(i,l,h,c[h],t,!ie(c,h))}}return o}function ec(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=ie(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&G(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(Hn(i),s=c[n]=l.call(null,e),Mn())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Es(n))&&(s=!0))}return s}function fg(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!G(t)){const u=h=>{l=!0;const[d,p]=fg(h,e,!0);lt(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Te(t)&&s.set(t,Fs),Fs;if(K(r))for(let u=0;u<r.length;u++){const h=Qt(r[u]);ud(h)&&(o[h]=ve)}else if(r)for(const u in r){const h=Qt(u);if(ud(h)){const d=r[u],p=o[h]=K(d)||G(d)?{type:d}:Object.assign({},d);if(p){const _=fd(Boolean,p.type),y=fd(String,p.type);p[0]=_>-1,p[1]=y<0||_<y,(_>-1||ie(p,"default"))&&a.push(h)}}}const c=[o,a];return Te(t)&&s.set(t,c),c}function ud(t){return t[0]!=="$"}function hd(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function dd(t,e){return hd(t)===hd(e)}function fd(t,e){return K(e)?e.findIndex(n=>dd(n,t)):G(e)&&dd(e,t)?0:-1}const pg=t=>t[0]==="_"||t==="$stable",yu=t=>K(t)?t.map(Ot):[Ot(t)],cw=(t,e,n)=>{if(e._n)return e;const s=gi((...i)=>yu(e(...i)),n);return s._c=!1,s},gg=(t,e,n)=>{const s=t._ctx;for(const i in t){if(pg(i))continue;const r=t[i];if(G(r))e[i]=cw(i,r,s);else if(r!=null){const o=yu(r);e[i]=()=>o}}},_g=(t,e)=>{const n=yu(e);t.slots.default=()=>n},uw=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=re(e),Ao(e,"_",n)):gg(e,t.slots={})}else t.slots={},e&&_g(t,e);Ao(t.slots,Ia,1)},hw=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ve;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(lt(i,e),!n&&a===1&&delete i._):(r=!e.$stable,gg(e,i)),o=e}else e&&(_g(t,e),o={default:1});if(r)for(const a in i)!pg(a)&&!(a in o)&&delete i[a]};function mg(){return{app:null,config:{isNativeTag:Dv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let dw=0;function fw(t,e){return function(s,i=null){G(s)||(s=Object.assign({},s)),i!=null&&!Te(i)&&(i=null);const r=mg(),o=new Set;let a=!1;const l=r.app={_uid:dw++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Nw,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&G(c.install)?(o.add(c),c.install(l,...u)):G(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=he(s,i);return d.appContext=r,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,Ta(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function tc(t,e,n,s,i=!1){if(K(t)){t.forEach((d,p)=>tc(d,e&&(K(e)?e[p]:e),n,s,i));return}if(Vi(s)&&!i)return;const r=s.shapeFlag&4?Ta(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ve?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Oe(c)?(u[c]=null,ie(h,c)&&(h[c]=null)):Ae(c)&&(c.value=null)),G(l))Dn(l,a,12,[o,u]);else{const d=Oe(l),p=Ae(l);if(d||p){const _=()=>{if(t.f){const y=d?ie(h,l)?h[l]:u[l]:l.value;i?K(y)&&Qc(y,r):K(y)?y.includes(r)||y.push(r):d?(u[l]=[r],ie(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,ie(h,l)&&(h[l]=o)):p&&(l.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,ut(_,n)):_()}}}const ut=HE;function pw(t){return gw(t)}function gw(t,e){const n=Hv();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=Lt,insertStaticContent:_}=t,y=(f,g,m,E=null,T=null,k=null,O=!1,A=null,P=!!g.dynamicChildren)=>{if(f===g)return;f&&!Cn(f,g)&&(E=N(f),ct(f,T,k,!0),f=null),g.patchFlag===-2&&(P=!1,g.dynamicChildren=null);const{type:C,ref:B,shapeFlag:M}=g;switch(C){case wa:b(f,g,m,E);break;case Zt:R(f,g,m,E);break;case fl:f==null&&v(g,m,E,O);break;case Ve:nt(f,g,m,E,T,k,O,A,P);break;default:M&1?U(f,g,m,E,T,k,O,A,P):M&6?At(f,g,m,E,T,k,O,A,P):(M&64||M&128)&&C.process(f,g,m,E,T,k,O,A,P,se)}B!=null&&T&&tc(B,f&&f.ref,k,g||f,!g)},b=(f,g,m,E)=>{if(f==null)s(g.el=a(g.children),m,E);else{const T=g.el=f.el;g.children!==f.children&&c(T,g.children)}},R=(f,g,m,E)=>{f==null?s(g.el=l(g.children||""),m,E):g.el=f.el},v=(f,g,m,E)=>{[f.el,f.anchor]=_(f.children,g,m,E,f.el,f.anchor)},I=({el:f,anchor:g},m,E)=>{let T;for(;f&&f!==g;)T=d(f),s(f,m,E),f=T;s(g,m,E)},x=({el:f,anchor:g})=>{let m;for(;f&&f!==g;)m=d(f),i(f),f=m;i(g)},U=(f,g,m,E,T,k,O,A,P)=>{O=O||g.type==="svg",f==null?Y(g,m,E,T,k,O,A,P):fe(f,g,T,k,O,A,P)},Y=(f,g,m,E,T,k,O,A)=>{let P,C;const{type:B,props:M,shapeFlag:$,transition:q,dirs:ee}=f;if(P=f.el=o(f.type,k,M&&M.is,M),$&8?u(P,f.children):$&16&&j(f.children,P,null,E,T,k&&B!=="foreignObject",O,A),ee&&Gn(f,null,E,"created"),V(P,f,f.scopeId,O,E),M){for(const ue in M)ue!=="value"&&!vo(ue)&&r(P,ue,null,M[ue],k,f.children,E,T,D);"value"in M&&r(P,"value",null,M.value),(C=M.onVnodeBeforeMount)&&Wt(C,E,f)}ee&&Gn(f,null,E,"beforeMount");const ge=(!T||T&&!T.pendingBranch)&&q&&!q.persisted;ge&&q.beforeEnter(P),s(P,g,m),((C=M&&M.onVnodeMounted)||ge||ee)&&ut(()=>{C&&Wt(C,E,f),ge&&q.enter(P),ee&&Gn(f,null,E,"mounted")},T)},V=(f,g,m,E,T)=>{if(m&&p(f,m),E)for(let k=0;k<E.length;k++)p(f,E[k]);if(T){let k=T.subTree;if(g===k){const O=T.vnode;V(f,O,O.scopeId,O.slotScopeIds,T.parent)}}},j=(f,g,m,E,T,k,O,A,P=0)=>{for(let C=P;C<f.length;C++){const B=f[C]=A?In(f[C]):Ot(f[C]);y(null,B,g,m,E,T,k,O,A)}},fe=(f,g,m,E,T,k,O)=>{const A=g.el=f.el;let{patchFlag:P,dynamicChildren:C,dirs:B}=g;P|=f.patchFlag&16;const M=f.props||ve,$=g.props||ve;let q;m&&Yn(m,!1),(q=$.onVnodeBeforeUpdate)&&Wt(q,m,g,f),B&&Gn(g,f,m,"beforeUpdate"),m&&Yn(m,!0);const ee=T&&g.type!=="foreignObject";if(C?Ee(f.dynamicChildren,C,A,m,E,ee,k):O||ce(f,g,A,null,m,E,ee,k,!1),P>0){if(P&16)be(A,g,M,$,m,E,T);else if(P&2&&M.class!==$.class&&r(A,"class",null,$.class,T),P&4&&r(A,"style",M.style,$.style,T),P&8){const ge=g.dynamicProps;for(let ue=0;ue<ge.length;ue++){const Le=ge[ue],Nt=M[Le],Rs=$[Le];(Rs!==Nt||Le==="value")&&r(A,Le,Nt,Rs,T,f.children,m,E,D)}}P&1&&f.children!==g.children&&u(A,g.children)}else!O&&C==null&&be(A,g,M,$,m,E,T);((q=$.onVnodeUpdated)||B)&&ut(()=>{q&&Wt(q,m,g,f),B&&Gn(g,f,m,"updated")},E)},Ee=(f,g,m,E,T,k,O)=>{for(let A=0;A<g.length;A++){const P=f[A],C=g[A],B=P.el&&(P.type===Ve||!Cn(P,C)||P.shapeFlag&70)?h(P.el):m;y(P,C,B,null,E,T,k,O,!0)}},be=(f,g,m,E,T,k,O)=>{if(m!==E){if(m!==ve)for(const A in m)!vo(A)&&!(A in E)&&r(f,A,m[A],null,O,g.children,T,k,D);for(const A in E){if(vo(A))continue;const P=E[A],C=m[A];P!==C&&A!=="value"&&r(f,A,C,P,O,g.children,T,k,D)}"value"in E&&r(f,"value",m.value,E.value)}},nt=(f,g,m,E,T,k,O,A,P)=>{const C=g.el=f?f.el:a(""),B=g.anchor=f?f.anchor:a("");let{patchFlag:M,dynamicChildren:$,slotScopeIds:q}=g;q&&(A=A?A.concat(q):q),f==null?(s(C,m,E),s(B,m,E),j(g.children,m,B,T,k,O,A,P)):M>0&&M&64&&$&&f.dynamicChildren?(Ee(f.dynamicChildren,$,m,T,k,O,A),(g.key!=null||T&&g===T.subTree)&&yg(f,g,!0)):ce(f,g,m,B,T,k,O,A,P)},At=(f,g,m,E,T,k,O,A,P)=>{g.slotScopeIds=A,f==null?g.shapeFlag&512?T.ctx.activate(g,m,E,O,P):We(g,m,E,T,k,O,P):Be(f,g,P)},We=(f,g,m,E,T,k,O)=>{const A=f.component=Tw(f,E,T);if(gu(f)&&(A.ctx.renderer=se),bw(A),A.asyncDep){if(T&&T.registerDep(A,Me),!f.el){const P=A.subTree=he(Zt);R(null,P,g,m)}return}Me(A,f,g,m,T,k,O)},Be=(f,g,m)=>{const E=g.component=f.component;if(DE(f,g,m))if(E.asyncDep&&!E.asyncResolved){pe(E,g,m);return}else E.next=g,RE(E.update),E.update();else g.el=f.el,E.vnode=g},Me=(f,g,m,E,T,k,O)=>{const A=()=>{if(f.isMounted){let{next:B,bu:M,u:$,parent:q,vnode:ee}=f,ge=B,ue;Yn(f,!1),B?(B.el=ee.el,pe(f,B,O)):B=ee,M&&Eo(M),(ue=B.props&&B.props.onVnodeBeforeUpdate)&&Wt(ue,q,B,ee),Yn(f,!0);const Le=ul(f),Nt=f.subTree;f.subTree=Le,y(Nt,Le,h(Nt.el),N(Nt),f,T,k),B.el=Le.el,ge===null&&du(f,Le.el),$&&ut($,T),(ue=B.props&&B.props.onVnodeUpdated)&&ut(()=>Wt(ue,q,B,ee),T)}else{let B;const{el:M,props:$}=g,{bm:q,m:ee,parent:ge}=f,ue=Vi(g);if(Yn(f,!1),q&&Eo(q),!ue&&(B=$&&$.onVnodeBeforeMount)&&Wt(B,ge,g),Yn(f,!0),M&&X){const Le=()=>{f.subTree=ul(f),X(M,f.subTree,f,T,null)};ue?g.type.__asyncLoader().then(()=>!f.isUnmounted&&Le()):Le()}else{const Le=f.subTree=ul(f);y(null,Le,m,E,f,T,k),g.el=Le.el}if(ee&&ut(ee,T),!ue&&(B=$&&$.onVnodeMounted)){const Le=g;ut(()=>Wt(B,ge,Le),T)}(g.shapeFlag&256||ge&&Vi(ge.vnode)&&ge.vnode.shapeFlag&256)&&f.a&&ut(f.a,T),f.isMounted=!0,g=m=E=null}},P=f.effect=new iu(A,()=>ma(C),f.scope),C=f.update=()=>P.run();C.id=f.uid,Yn(f,!0),C()},pe=(f,g,m)=>{g.component=f;const E=f.vnode.props;f.vnode=g,f.next=null,lw(f,g.props,E,m),hw(f,g.children,m),hi(),id(),di()},ce=(f,g,m,E,T,k,O,A,P=!1)=>{const C=f&&f.children,B=f?f.shapeFlag:0,M=g.children,{patchFlag:$,shapeFlag:q}=g;if($>0){if($&128){qn(C,M,m,E,T,k,O,A,P);return}else if($&256){kt(C,M,m,E,T,k,O,A,P);return}}q&8?(B&16&&D(C,T,k),M!==C&&u(m,M)):B&16?q&16?qn(C,M,m,E,T,k,O,A,P):D(C,T,k,!0):(B&8&&u(m,""),q&16&&j(M,m,E,T,k,O,A,P))},kt=(f,g,m,E,T,k,O,A,P)=>{f=f||Fs,g=g||Fs;const C=f.length,B=g.length,M=Math.min(C,B);let $;for($=0;$<M;$++){const q=g[$]=P?In(g[$]):Ot(g[$]);y(f[$],q,m,null,T,k,O,A,P)}C>B?D(f,T,k,!0,!1,M):j(g,m,E,T,k,O,A,P,M)},qn=(f,g,m,E,T,k,O,A,P)=>{let C=0;const B=g.length;let M=f.length-1,$=B-1;for(;C<=M&&C<=$;){const q=f[C],ee=g[C]=P?In(g[C]):Ot(g[C]);if(Cn(q,ee))y(q,ee,m,null,T,k,O,A,P);else break;C++}for(;C<=M&&C<=$;){const q=f[M],ee=g[$]=P?In(g[$]):Ot(g[$]);if(Cn(q,ee))y(q,ee,m,null,T,k,O,A,P);else break;M--,$--}if(C>M){if(C<=$){const q=$+1,ee=q<B?g[q].el:E;for(;C<=$;)y(null,g[C]=P?In(g[C]):Ot(g[C]),m,ee,T,k,O,A,P),C++}}else if(C>$)for(;C<=M;)ct(f[C],T,k,!0),C++;else{const q=C,ee=C,ge=new Map;for(C=ee;C<=$;C++){const gt=g[C]=P?In(g[C]):Ot(g[C]);gt.key!=null&&ge.set(gt.key,C)}let ue,Le=0;const Nt=$-ee+1;let Rs=!1,qh=0;const ki=new Array(Nt);for(C=0;C<Nt;C++)ki[C]=0;for(C=q;C<=M;C++){const gt=f[C];if(Le>=Nt){ct(gt,T,k,!0);continue}let jt;if(gt.key!=null)jt=ge.get(gt.key);else for(ue=ee;ue<=$;ue++)if(ki[ue-ee]===0&&Cn(gt,g[ue])){jt=ue;break}jt===void 0?ct(gt,T,k,!0):(ki[jt-ee]=C+1,jt>=qh?qh=jt:Rs=!0,y(gt,g[jt],m,null,T,k,O,A,P),Le++)}const Gh=Rs?_w(ki):Fs;for(ue=Gh.length-1,C=Nt-1;C>=0;C--){const gt=ee+C,jt=g[gt],Yh=gt+1<B?g[gt+1].el:E;ki[C]===0?y(null,jt,m,Yh,T,k,O,A,P):Rs&&(ue<0||C!==Gh[ue]?Pt(jt,m,Yh,2):ue--)}}},Pt=(f,g,m,E,T=null)=>{const{el:k,type:O,transition:A,children:P,shapeFlag:C}=f;if(C&6){Pt(f.component.subTree,g,m,E);return}if(C&128){f.suspense.move(g,m,E);return}if(C&64){O.move(f,g,m,se);return}if(O===Ve){s(k,g,m);for(let M=0;M<P.length;M++)Pt(P[M],g,m,E);s(f.anchor,g,m);return}if(O===fl){I(f,g,m);return}if(E!==2&&C&1&&A)if(E===0)A.beforeEnter(k),s(k,g,m),ut(()=>A.enter(k),T);else{const{leave:M,delayLeave:$,afterLeave:q}=A,ee=()=>s(k,g,m),ge=()=>{M(k,()=>{ee(),q&&q()})};$?$(k,ee,ge):ge()}else s(k,g,m)},ct=(f,g,m,E=!1,T=!1)=>{const{type:k,props:O,ref:A,children:P,dynamicChildren:C,shapeFlag:B,patchFlag:M,dirs:$}=f;if(A!=null&&tc(A,null,m,f,!0),B&256){g.ctx.deactivate(f);return}const q=B&1&&$,ee=!Vi(f);let ge;if(ee&&(ge=O&&O.onVnodeBeforeUnmount)&&Wt(ge,g,f),B&6)w(f.component,m,E);else{if(B&128){f.suspense.unmount(m,E);return}q&&Gn(f,null,g,"beforeUnmount"),B&64?f.type.remove(f,g,m,T,se,E):C&&(k!==Ve||M>0&&M&64)?D(C,g,m,!1,!0):(k===Ve&&M&384||!T&&B&16)&&D(P,g,m),E&&Cs(f)}(ee&&(ge=O&&O.onVnodeUnmounted)||q)&&ut(()=>{ge&&Wt(ge,g,f),q&&Gn(f,null,g,"unmounted")},m)},Cs=f=>{const{type:g,el:m,anchor:E,transition:T}=f;if(g===Ve){Jr(m,E);return}if(g===fl){x(f);return}const k=()=>{i(m),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(f.shapeFlag&1&&T&&!T.persisted){const{leave:O,delayLeave:A}=T,P=()=>O(m,k);A?A(f.el,k,P):P()}else k()},Jr=(f,g)=>{let m;for(;f!==g;)m=d(f),i(f),f=m;i(g)},w=(f,g,m)=>{const{bum:E,scope:T,update:k,subTree:O,um:A}=f;E&&Eo(E),T.stop(),k&&(k.active=!1,ct(O,f,g,m)),A&&ut(A,g),ut(()=>{f.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},D=(f,g,m,E=!1,T=!1,k=0)=>{for(let O=k;O<f.length;O++)ct(f[O],g,m,E,T)},N=f=>f.shapeFlag&6?N(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),F=(f,g,m)=>{f==null?g._vnode&&ct(g._vnode,null,null,!0):y(g._vnode||null,f,g,null,null,null,m),id(),Jp(),g._vnode=f},se={p:y,um:ct,m:Pt,r:Cs,mt:We,mc:j,pc:ce,pbc:Ee,n:N,o:t};let Ce,X;return e&&([Ce,X]=e(se)),{render:F,hydrate:Ce,createApp:fw(F,Ce)}}function Yn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function yg(t,e,n=!1){const s=t.children,i=e.children;if(K(s)&&K(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=In(i[r]),a.el=o.el),n||yg(o,a)),a.type===wa&&(a.el=o.el)}}function _w(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const mw=t=>t.__isTeleport,Ve=Symbol(void 0),wa=Symbol(void 0),Zt=Symbol(void 0),fl=Symbol(void 0),qi=[];let It=null;function me(t=!1){qi.push(It=t?null:[])}function vg(){qi.pop(),It=qi[qi.length-1]||null}let Qs=1;function pd(t){Qs+=t}function Eg(t){return t.dynamicChildren=Qs>0?It||Fs:null,vg(),Qs>0&&It&&It.push(t),t}function Xe(t,e,n,s,i,r){return Eg(we(t,e,n,s,i,r,!0))}function yn(t,e,n,s,i){return Eg(he(t,e,n,s,i,!0))}function ur(t){return t?t.__v_isVNode===!0:!1}function Cn(t,e){return t.type===e.type&&t.key===e.key}const Ia="__vInternal",wg=({key:t})=>t??null,Io=({ref:t,ref_key:e,ref_for:n})=>t!=null?Oe(t)||Ae(t)||G(t)?{i:Ke,r:t,k:e,f:!!n}:t:null;function we(t,e=null,n=null,s=0,i=null,r=t===Ve?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&wg(e),ref:e&&Io(e),scopeId:va,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ke};return a?(vu(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Oe(n)?8:16),Qs>0&&!o&&It&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&It.push(l),l}const he=yw;function yw(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===ag)&&(t=Zt),ur(t)){const a=Js(t,e,!0);return n&&vu(a,n),Qs>0&&!r&&It&&(a.shapeFlag&6?It[It.indexOf(t)]=a:It.push(a)),a.patchFlag|=-2,a}if(kw(t)&&(t=t.__vccOpts),e){e=vw(e);let{class:a,style:l}=e;a&&!Oe(a)&&(e.class=Yc(a)),Te(l)&&(jp(l)&&!K(l)&&(l=lt({},l)),e.style=Gc(l))}const o=Oe(t)?1:ME(t)?128:mw(t)?64:Te(t)?4:G(t)?2:0;return we(t,e,n,s,i,o,r,!0)}function vw(t){return t?jp(t)||Ia in t?lt({},t):t:null}function Js(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?Ew(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&wg(a),ref:e&&e.ref?n&&i?K(i)?i.concat(Io(e)):[i,Io(e)]:Io(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ve?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Js(t.ssContent),ssFallback:t.ssFallback&&Js(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Ig(t=" ",e=0){return he(wa,null,t,e)}function bx(t="",e=!1){return e?(me(),yn(Zt,null,t)):he(Zt,null,t)}function Ot(t){return t==null||typeof t=="boolean"?he(Zt):K(t)?he(Ve,null,t.slice()):typeof t=="object"?In(t):he(wa,null,String(t))}function In(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Js(t)}function vu(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(K(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),vu(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Ia in e)?e._ctx=Ke:i===3&&Ke&&(Ke.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else G(e)?(e={default:e,_ctx:Ke},n=32):(e=String(e),s&64?(n=16,e=[Ig(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ew(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Yc([e.class,s.class]));else if(i==="style")e.style=Gc([e.style,s.style]);else if(da(i)){const r=e[i],o=s[i];o&&r!==o&&!(K(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Wt(t,e,n,s=null){Ft(t,e,7,[n,s])}const ww=mg();let Iw=0;function Tw(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||ww,r={uid:Iw++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new kp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:fg(s,i),emitsOptions:eg(s,i),emit:null,emitted:null,propsDefaults:ve,inheritAttrs:s.inheritAttrs,ctx:ve,data:ve,props:ve,attrs:ve,slots:ve,refs:ve,setupState:ve,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=AE.bind(null,r),t.ce&&t.ce(r),r}let Re=null;const kr=()=>Re||Ke,Hn=t=>{Re=t,t.scope.on()},Mn=()=>{Re&&Re.scope.off(),Re=null};function Tg(t){return t.vnode.shapeFlag&4}let Zs=!1;function bw(t,e=!1){Zs=e;const{props:n,children:s}=t.vnode,i=Tg(t);aw(t,n,i,e),uw(t,s);const r=i?Cw(t,e):void 0;return Zs=!1,r}function Cw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Xs(new Proxy(t.ctx,tw));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?Sw(t):null;Hn(t),hi();const r=Dn(s,t,0,[t.props,i]);if(di(),Mn(),Zc(r)){if(r.then(Mn,Mn),e)return r.then(o=>{nc(t,o,e)}).catch(o=>{pi(o,t,0)});t.asyncDep=r}else nc(t,r,e)}else bg(t,e)}function nc(t,e,n){G(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Te(e)&&(t.setupState=qp(e)),bg(t,n)}let gd;function bg(t,e,n){const s=t.type;if(!t.render){if(!e&&gd&&!s.render){const i=s.template||mu(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=lt(lt({isCustomElement:r,delimiters:a},o),l);s.render=gd(i,c)}}t.render=s.render||Lt}Hn(t),hi(),nw(t),di(),Mn()}function Rw(t){return new Proxy(t.attrs,{get(e,n){return pt(t,"get","$attrs"),e[n]}})}function Sw(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Rw(t))},slots:t.slots,emit:t.emit,expose:e}}function Ta(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(qp(Xs(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ki)return Ki[n](t)},has(e,n){return n in e||n in Ki}}))}function Aw(t,e=!0){return G(t)?t.displayName||t.name:t.name||e&&t.__name}function kw(t){return G(t)&&"__vccOpts"in t}const dt=(t,e)=>TE(t,e,Zs);function Cg(t){const e=kr();let n=t();return Mn(),Zc(n)&&(n=n.catch(s=>{throw Hn(e),s})),[n,()=>Hn(e)]}function Rg(t,e,n){const s=arguments.length;return s===2?Te(e)&&!K(e)?ur(e)?he(t,null,[e]):he(t,e):he(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&ur(n)&&(n=[n]),he(t,e,n))}const Sg=Symbol(""),Pw=()=>vt(Sg),Nw="3.2.47",Ow="http://www.w3.org/2000/svg",ns=typeof document<"u"?document:null,_d=ns&&ns.createElement("template"),xw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?ns.createElementNS(Ow,t):ns.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>ns.createTextNode(t),createComment:t=>ns.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ns.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{_d.innerHTML=s?`<svg>${t}</svg>`:t;const a=_d.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Dw(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Mw(t,e,n){const s=t.style,i=Oe(n);if(n&&!i){if(e&&!Oe(e))for(const r in e)n[r]==null&&sc(s,r,"");for(const r in n)sc(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const md=/\s*!important$/;function sc(t,e,n){if(K(n))n.forEach(s=>sc(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Lw(t,e);md.test(n)?t.setProperty(Es(s),n.replace(md,""),"important"):t[s]=n}}const yd=["Webkit","Moz","ms"],pl={};function Lw(t,e){const n=pl[e];if(n)return n;let s=Qt(e);if(s!=="filter"&&s in t)return pl[e]=s;s=ga(s);for(let i=0;i<yd.length;i++){const r=yd[i]+s;if(r in t)return pl[e]=r}return e}const vd="http://www.w3.org/1999/xlink";function Fw(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(vd,e.slice(6,e.length)):t.setAttributeNS(vd,e,n);else{const r=xv(e);n==null||r&&!bp(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Uw(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n??"";(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=bp(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Os(t,e,n,s){t.addEventListener(e,n,s)}function Bw(t,e,n,s){t.removeEventListener(e,n,s)}function $w(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=Hw(e);if(s){const c=r[e]=Vw(s,i);Os(t,a,c,l)}else o&&(Bw(t,a,o,l),r[e]=void 0)}}const Ed=/(?:Once|Passive|Capture)$/;function Hw(t){let e;if(Ed.test(t)){e={};let s;for(;s=t.match(Ed);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Es(t.slice(2)),e]}let gl=0;const jw=Promise.resolve(),Ww=()=>gl||(jw.then(()=>gl=0),gl=Date.now());function Vw(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ft(zw(s,n.value),e,5,[s])};return n.value=t,n.attached=Ww(),n}function zw(t,e){if(K(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const wd=/^on[a-z]/,Kw=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?Dw(t,s,i):e==="style"?Mw(t,n,s):da(e)?Xc(e)||$w(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):qw(t,e,s,i))?Uw(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Fw(t,e,s,i))};function qw(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&wd.test(e)&&G(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||wd.test(e)&&Oe(n)?!1:e in t}const Id=t=>{const e=t.props["onUpdate:modelValue"]||!1;return K(e)?n=>Eo(e,n):e};function Gw(t){t.target.composing=!0}function Td(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Gi={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=Id(i);const r=s||i.props&&i.props.type==="number";Os(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Kl(a)),t._assign(a)}),n&&Os(t,"change",()=>{t.value=t.value.trim()}),e||(Os(t,"compositionstart",Gw),Os(t,"compositionend",Td),Os(t,"change",Td))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=Id(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&Kl(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Yw=["ctrl","shift","alt","meta"],Xw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Yw.some(n=>t[`${n}Key`]&&!e.includes(n))},Ag=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=Xw[e[i]];if(r&&r(n,e))return}return t(n,...s)},Qw={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Cx=(t,e)=>n=>{if(!("key"in n))return;const s=Es(n.key);if(e.some(i=>i===s||Qw[i]===s))return t(n)},Jw=lt({patchProp:Kw},xw);let bd;function Zw(){return bd||(bd=pw(Jw))}const eI=(...t)=>{const e=Zw().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=tI(s);if(!i)return;const r=e._component;!G(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function tI(t){return Oe(t)?document.querySelector(t):t}var nI=!1;/*!
  * pinia v2.0.32
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let kg;const ba=t=>kg=t,Pg=Symbol();function ic(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Yi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Yi||(Yi={}));function sI(){const t=tu(!0),e=t.run(()=>Ct({}));let n=[],s=[];const i=Xs({install(r){ba(i),i._a=r,r.provide(Pg,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!nI?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Ng=()=>{};function Cd(t,e,n,s=Ng){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&nu()&&Pp(i),i}function Ss(t,...e){t.slice().forEach(n=>{n(...e)})}function rc(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];ic(i)&&ic(s)&&t.hasOwnProperty(n)&&!Ae(s)&&!xn(s)?t[n]=rc(i,s):t[n]=s}return t}const iI=Symbol();function rI(t){return!ic(t)||!t.hasOwnProperty(iI)}const{assign:Tn}=Object;function oI(t){return!!(Ae(t)&&t.effect)}function aI(t,e,n,s){const{state:i,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=i?i():{});const u=vE(n.state.value[t]);return Tn(u,r,Object.keys(o||{}).reduce((h,d)=>(h[d]=Xs(dt(()=>{ba(n);const p=n._s.get(t);return o[d].call(p,p)})),h),{}))}return l=Og(t,c,e,n,s,!0),l.$reset=function(){const h=i?i():{};this.$patch(d=>{Tn(d,h)})},l}function Og(t,e,n={},s,i,r){let o;const a=Tn({actions:{}},n),l={deep:!0};let c,u,h=Xs([]),d=Xs([]),p;const _=s.state.value[t];!r&&!_&&(s.state.value[t]={}),Ct({});let y;function b(V){let j;c=u=!1,typeof V=="function"?(V(s.state.value[t]),j={type:Yi.patchFunction,storeId:t,events:p}):(rc(s.state.value[t],V),j={type:Yi.patchObject,payload:V,storeId:t,events:p});const fe=y=Symbol();hu().then(()=>{y===fe&&(c=!0)}),u=!0,Ss(h,j,s.state.value[t])}const R=Ng;function v(){o.stop(),h=[],d=[],s._s.delete(t)}function I(V,j){return function(){ba(s);const fe=Array.from(arguments),Ee=[],be=[];function nt(Be){Ee.push(Be)}function At(Be){be.push(Be)}Ss(d,{args:fe,name:V,store:U,after:nt,onError:At});let We;try{We=j.apply(this&&this.$id===t?this:U,fe)}catch(Be){throw Ss(be,Be),Be}return We instanceof Promise?We.then(Be=>(Ss(Ee,Be),Be)).catch(Be=>(Ss(be,Be),Promise.reject(Be))):(Ss(Ee,We),We)}}const x={_p:s,$id:t,$onAction:Cd.bind(null,d),$patch:b,$reset:R,$subscribe(V,j={}){const fe=Cd(h,V,j.detached,()=>Ee()),Ee=o.run(()=>Hs(()=>s.state.value[t],be=>{(j.flush==="sync"?u:c)&&V({storeId:t,type:Yi.direct,events:p},be)},Tn({},l,j)));return fe},$dispose:v},U=fi(x);s._s.set(t,U);const Y=s._e.run(()=>(o=tu(),o.run(()=>e())));for(const V in Y){const j=Y[V];if(Ae(j)&&!oI(j)||xn(j))r||(_&&rI(j)&&(Ae(j)?j.value=_[V]:rc(j,_[V])),s.state.value[t][V]=j);else if(typeof j=="function"){const fe=I(V,j);Y[V]=fe,a.actions[V]=j}}return Tn(U,Y),Tn(re(U),Y),Object.defineProperty(U,"$state",{get:()=>s.state.value[t],set:V=>{b(j=>{Tn(j,V)})}}),s._p.forEach(V=>{Tn(U,o.run(()=>V({store:U,app:s._a,pinia:s,options:a})))}),_&&r&&n.hydrate&&n.hydrate(U.$state,_),c=!0,u=!0,U}function xg(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(a,l){const c=kr();return a=a||c&&vt(Pg,null),a&&ba(a),a=kg,a._s.has(s)||(r?Og(s,e,i,a):aI(s,i,a)),a._s.get(s)}return o.$id=s,o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=function(t,e){if(!t)throw _i(e)},_i=function(t){return new Error("Firebase Database ("+Dg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},lI=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ca={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(d=64)),s.push(n[u],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Mg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):lI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw Error();const d=r<<2|a>>4;if(s.push(d),c!==64){const p=a<<4&240|c>>2;if(s.push(p),h!==64){const _=c<<6&192|h;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Lg=function(t){const e=Mg(t);return Ca.encodeByteArray(e,!0)},xo=function(t){return Lg(t).replace(/\./g,"")},Do=function(t){try{return Ca.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cI(t){return Fg(void 0,t)}function Fg(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!uI(n)||(t[n]=Fg(t[n],e[n]));return t}function uI(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI=()=>hI().__FIREBASE_DEFAULTS__,fI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},pI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Do(t[1]);return e&&JSON.parse(e)},Ra=()=>{try{return dI()||fI()||pI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ug=t=>{var e,n;return(n=(e=Ra())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Bg=t=>{const e=Ug(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},gI=()=>{var t;return(t=Ra())===null||t===void 0?void 0:t.config},$g=t=>{var e;return(e=Ra())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[xo(JSON.stringify(n)),xo(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Eu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(et())}function _I(){var t;const e=(t=Ra())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function mI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function jg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yI(){const t=et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Wg(){return Dg.NODE_ADMIN===!0}function Vg(){try{return typeof indexedDB=="object"}catch{return!1}}function vI(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI="FirebaseError";class nn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=EI,Object.setPrototypeOf(this,nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mi.prototype.create)}}class mi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?wI(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new nn(i,a,s)}}function wI(t,e){return t.replace(II,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const II=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(t){return JSON.parse(t)}function Ue(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=hr(Do(r[0])||""),n=hr(Do(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},TI=function(t){const e=zg(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},bI=function(t){const e=zg(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ei(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function oc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Mo(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Lo(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Rd(r)&&Rd(o)){if(!Lo(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Rd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Bi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function $i(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function RI(t,e){const n=new SI(t,e);return n.subscribe.bind(n)}class SI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");AI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=_l),i.error===void 0&&(i.error=_l),i.complete===void 0&&(i.complete=_l);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function AI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function _l(){}function Sa(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,S(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Aa=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(t){return t&&t._delegate?t._delegate:t}class Bt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ds;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(OI(e))try{this.getOrInitializeService({instanceIdentifier:Zn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Zn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zn){return this.instances.has(e)}getOptions(e=Zn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:NI(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Zn){return this.component?this.component.multipleInstances?e:Zn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function NI(t){return t===Zn?void 0:t}function OI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new PI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const DI={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},MI=le.INFO,LI={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},FI=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=LI[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pr{constructor(e){this.name=e,this._logLevel=MI,this._logHandler=FI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?DI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const UI=(t,e)=>e.some(n=>t instanceof n);let Sd,Ad;function BI(){return Sd||(Sd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $I(){return Ad||(Ad=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Kg=new WeakMap,ac=new WeakMap,qg=new WeakMap,ml=new WeakMap,wu=new WeakMap;function HI(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Ln(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Kg.set(n,t)}).catch(()=>{}),wu.set(e,t),e}function jI(t){if(ac.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});ac.set(t,e)}let lc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ac.get(t);if(e==="objectStoreNames")return t.objectStoreNames||qg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ln(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function WI(t){lc=t(lc)}function VI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(yl(this),e,...n);return qg.set(s,e.sort?e.sort():[e]),Ln(s)}:$I().includes(t)?function(...e){return t.apply(yl(this),e),Ln(Kg.get(this))}:function(...e){return Ln(t.apply(yl(this),e))}}function zI(t){return typeof t=="function"?VI(t):(t instanceof IDBTransaction&&jI(t),UI(t,BI())?new Proxy(t,lc):t)}function Ln(t){if(t instanceof IDBRequest)return HI(t);if(ml.has(t))return ml.get(t);const e=zI(t);return e!==t&&(ml.set(t,e),wu.set(e,t)),e}const yl=t=>wu.get(t);function KI(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Ln(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Ln(o.result),l.oldVersion,l.newVersion,Ln(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const qI=["get","getKey","getAll","getAllKeys","count"],GI=["put","add","delete","clear"],vl=new Map;function kd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(vl.get(e))return vl.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=GI.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||qI.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return vl.set(e,r),r}WI(t=>({...t,get:(e,n,s)=>kd(e,n)||t.get(e,n,s),has:(e,n)=>!!kd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(XI(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function XI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const cc="@firebase/app",Pd="0.9.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=new Pr("@firebase/app"),QI="@firebase/app-compat",JI="@firebase/analytics-compat",ZI="@firebase/analytics",eT="@firebase/app-check-compat",tT="@firebase/app-check",nT="@firebase/auth",sT="@firebase/auth-compat",iT="@firebase/database",rT="@firebase/database-compat",oT="@firebase/functions",aT="@firebase/functions-compat",lT="@firebase/installations",cT="@firebase/installations-compat",uT="@firebase/messaging",hT="@firebase/messaging-compat",dT="@firebase/performance",fT="@firebase/performance-compat",pT="@firebase/remote-config",gT="@firebase/remote-config-compat",_T="@firebase/storage",mT="@firebase/storage-compat",yT="@firebase/firestore",vT="@firebase/firestore-compat",ET="firebase",wT="9.17.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc="[DEFAULT]",IT={[cc]:"fire-core",[QI]:"fire-core-compat",[ZI]:"fire-analytics",[JI]:"fire-analytics-compat",[tT]:"fire-app-check",[eT]:"fire-app-check-compat",[nT]:"fire-auth",[sT]:"fire-auth-compat",[iT]:"fire-rtdb",[rT]:"fire-rtdb-compat",[oT]:"fire-fn",[aT]:"fire-fn-compat",[lT]:"fire-iid",[cT]:"fire-iid-compat",[uT]:"fire-fcm",[hT]:"fire-fcm-compat",[dT]:"fire-perf",[fT]:"fire-perf-compat",[pT]:"fire-rc",[gT]:"fire-rc-compat",[_T]:"fire-gcs",[mT]:"fire-gcs-compat",[yT]:"fire-fst",[vT]:"fire-fst-compat","fire-js":"fire-js",[ET]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo=new Map,hc=new Map;function TT(t,e){try{t.container.addComponent(e)}catch(n){fs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function en(t){const e=t.name;if(hc.has(e))return fs.debug(`There were multiple attempts to register component ${e}.`),!1;hc.set(e,t);for(const n of Fo.values())TT(n,t);return!0}function ka(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Fn=new mi("app","Firebase",bT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Bt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Fn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws=wT;function Gg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:uc,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Fn.create("bad-app-name",{appName:String(i)});if(n||(n=gI()),!n)throw Fn.create("no-options");const r=Fo.get(i);if(r){if(Lo(n,r.options)&&Lo(s,r.config))return r;throw Fn.create("duplicate-app",{appName:i})}const o=new xI(i);for(const l of hc.values())o.addComponent(l);const a=new CT(n,s,o);return Fo.set(i,a),a}function Pa(t=uc){const e=Fo.get(t);if(!e&&t===uc)return Gg();if(!e)throw Fn.create("no-app",{appName:t});return e}function Et(t,e,n){var s;let i=(s=IT[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fs.warn(a.join(" "));return}en(new Bt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RT="firebase-heartbeat-database",ST=1,dr="firebase-heartbeat-store";let El=null;function Yg(){return El||(El=KI(RT,ST,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(dr)}}}).catch(t=>{throw Fn.create("idb-open",{originalErrorMessage:t.message})})),El}async function AT(t){try{return(await Yg()).transaction(dr).objectStore(dr).get(Xg(t))}catch(e){if(e instanceof nn)fs.warn(e.message);else{const n=Fn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fs.warn(n.message)}}}async function Nd(t,e){try{const s=(await Yg()).transaction(dr,"readwrite");return await s.objectStore(dr).put(e,Xg(t)),s.done}catch(n){if(n instanceof nn)fs.warn(n.message);else{const s=Fn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});fs.warn(s.message)}}}function Xg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT=1024,PT=30*24*60*60*1e3;class NT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xT(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Od();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=PT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Od(),{heartbeatsToSend:n,unsentEntries:s}=OT(this._heartbeatsCache.heartbeats),i=xo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Od(){return new Date().toISOString().substring(0,10)}function OT(t,e=kT){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),xd(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),xd(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class xT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vg()?vI().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await AT(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Nd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Nd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function xd(t){return xo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DT(t){en(new Bt("platform-logger",e=>new YI(e),"PRIVATE")),en(new Bt("heartbeat",e=>new NT(e),"PRIVATE")),Et(cc,Pd,t),Et(cc,Pd,"esm2017"),Et("fire-js","")}DT("");function Iu(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Qg(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const MT=Qg,Jg=new mi("auth","Firebase",Qg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd=new Pr("@firebase/auth");function To(t,...e){Dd.logLevel<=le.ERROR&&Dd.error(`Auth (${ws}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(t,...e){throw Tu(t,...e)}function qt(t,...e){return Tu(t,...e)}function LT(t,e,n){const s=Object.assign(Object.assign({},MT()),{[e]:n});return new mi("auth","Firebase",s).create(e,{appName:t.name})}function Tu(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Jg.create(t,...e)}function W(t,e,...n){if(!t)throw Tu(e,...n)}function ln(t){const e="INTERNAL ASSERTION FAILED: "+t;throw To(e),new Error(e)}function pn(t,e){t||ln(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md=new Map;function cn(t){pn(t instanceof Function,"Expected a class definition");let e=Md.get(t);return e?(pn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Md.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FT(t,e){const n=ka(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Lo(r,e??{}))return i;$t(i,"already-initialized")}return n.initialize({options:e})}function UT(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(cn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function BT(){return Ld()==="http:"||Ld()==="https:"}function Ld(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $T(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(BT()||mI()||"connection"in navigator)?navigator.onLine:!0}function HT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,n){this.shortDelay=e,this.longDelay=n,pn(n>e,"Short delay should be less than long delay!"),this.isMobile=Eu()||jg()}get(){return $T()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bu(t,e){pn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ln("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ln("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ln("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT=new Nr(3e4,6e4);function Or(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function vi(t,e,n,s,i={}){return e_(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=yi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Zg.fetch()(t_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function e_(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},jT),e);try{const i=new VT(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw oo(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw oo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw oo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw oo(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw LT(t,u,c);$t(t,u)}}catch(i){if(i instanceof nn)throw i;$t(t,"network-request-failed")}}async function xr(t,e,n,s,i={}){const r=await vi(t,e,n,s,i);return"mfaPendingCredential"in r&&$t(t,"multi-factor-auth-required",{_serverResponse:r}),r}function t_(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?bu(t.config,i):`${t.config.apiScheme}://${i}`}class VT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(qt(this.auth,"network-request-failed")),WT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function oo(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=qt(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zT(t,e){return vi(t,"POST","/v1/accounts:delete",e)}async function KT(t,e){return vi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qT(t,e=!1){const n=De(t),s=await n.getIdToken(e),i=Cu(s);W(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Xi(wl(i.auth_time)),issuedAtTime:Xi(wl(i.iat)),expirationTime:Xi(wl(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function wl(t){return Number(t)*1e3}function Cu(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return To("JWT malformed, contained fewer than 3 sections"),null;try{const i=Do(n);return i?JSON.parse(i):(To("Failed to decode base64 JWT payload"),null)}catch(i){return To("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function GT(t){const e=Cu(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ti(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof nn&&YT(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function YT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xi(this.lastLoginAt),this.creationTime=Xi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uo(t){var e;const n=t.auth,s=await t.getIdToken(),i=await ti(t,KT(n,{idToken:s}));W(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?ZT(r.providerUserInfo):[],a=JT(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new n_(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function QT(t){const e=De(t);await Uo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function JT(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function ZT(t){return t.map(e=>{var{providerId:n}=e,s=Iu(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eb(t,e){const n=await e_(t,{},async()=>{const s=yi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=t_(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Zg.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):GT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return W(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await eb(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new fr;return s&&(W(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(W(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(W(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fr,this.toJSON())}_performRefresh(){return ln("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ls{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Iu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new XT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new n_(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await ti(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return qT(this,e)}reload(){return QT(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ls(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Uo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ti(this,zT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,R=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:I,emailVerified:x,isAnonymous:U,providerData:Y,stsTokenManager:V}=n;W(I&&V,e,"internal-error");const j=fr.fromJSON(this.name,V);W(typeof I=="string",e,"internal-error"),En(h,e.name),En(d,e.name),W(typeof x=="boolean",e,"internal-error"),W(typeof U=="boolean",e,"internal-error"),En(p,e.name),En(_,e.name),En(y,e.name),En(b,e.name),En(R,e.name),En(v,e.name);const fe=new ls({uid:I,auth:e,email:d,emailVerified:x,displayName:h,isAnonymous:U,photoURL:_,phoneNumber:p,tenantId:y,stsTokenManager:j,createdAt:R,lastLoginAt:v});return Y&&Array.isArray(Y)&&(fe.providerData=Y.map(Ee=>Object.assign({},Ee))),b&&(fe._redirectEventId=b),fe}static async _fromIdTokenResponse(e,n,s=!1){const i=new fr;i.updateFromServerResponse(n);const r=new ls({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Uo(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}s_.type="NONE";const Fd=s_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bo(t,e,n){return`firebase:${t}:${e}:${n}`}class js{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=bo(this.userKey,i.apiKey,r),this.fullPersistenceKey=bo("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ls._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new js(cn(Fd),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||cn(Fd);const o=bo(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=ls._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new js(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new js(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(o_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(i_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(l_(e))return"Blackberry";if(c_(e))return"Webos";if(Ru(e))return"Safari";if((e.includes("chrome/")||r_(e))&&!e.includes("edge/"))return"Chrome";if(a_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function i_(t=et()){return/firefox\//i.test(t)}function Ru(t=et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function r_(t=et()){return/crios\//i.test(t)}function o_(t=et()){return/iemobile/i.test(t)}function a_(t=et()){return/android/i.test(t)}function l_(t=et()){return/blackberry/i.test(t)}function c_(t=et()){return/webos/i.test(t)}function Na(t=et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function tb(t=et()){var e;return Na(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function nb(){return yI()&&document.documentMode===10}function u_(t=et()){return Na(t)||a_(t)||c_(t)||l_(t)||/windows phone/i.test(t)||o_(t)}function sb(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h_(t,e=[]){let n;switch(t){case"Browser":n=Ud(et());break;case"Worker":n=`${Ud(et())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ws}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bd(this),this.idTokenSubscription=new Bd(this),this.beforeStateQueue=new ib(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Jg,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=cn(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await js.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Uo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=HT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?De(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(cn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new mi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&cn(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await js.create(this,[cn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return W(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=h_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Dr(t){return De(t)}class Bd{constructor(e){this.auth=e,this.observer=null,this.addObserver=RI(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function ob(t,e,n){const s=Dr(t);W(s._canInitEmulator,s,"emulator-config-failed"),W(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=d_(e),{host:o,port:a}=ab(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||lb()}function d_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ab(t){const e=d_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:$d(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:$d(o)}}}function $d(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function lb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ln("not implemented")}_getIdTokenResponse(e){return ln("not implemented")}_linkToIdToken(e,n){return ln("not implemented")}_getReauthenticationResolver(e){return ln("not implemented")}}async function cb(t,e){return vi(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ub(t,e){return xr(t,"POST","/v1/accounts:signInWithPassword",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hb(t,e){return xr(t,"POST","/v1/accounts:signInWithEmailLink",Or(t,e))}async function db(t,e){return xr(t,"POST","/v1/accounts:signInWithEmailLink",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends Su{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new pr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new pr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return ub(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return hb(e,{email:this._email,oobCode:this._password});default:$t(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return cb(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return db(e,{idToken:n,email:this._email,oobCode:this._password});default:$t(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ws(t,e){return xr(t,"POST","/v1/accounts:signInWithIdp",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb="http://localhost";class ps extends Su{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ps(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$t("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Iu(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new ps(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ws(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ws(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ws(e,n)}buildRequest(){const e={requestUri:fb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=yi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function gb(t){const e=Bi($i(t)).link,n=e?Bi($i(e)).deep_link_id:null,s=Bi($i(t)).deep_link_id;return(s?Bi($i(s)).link:null)||s||n||e||t}class Au{constructor(e){var n,s,i,r,o,a;const l=Bi($i(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,h=pb((i=l.mode)!==null&&i!==void 0?i:null);W(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=gb(e);try{return new Au(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(){this.providerId=Ei.PROVIDER_ID}static credential(e,n){return pr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Au.parseLink(n);return W(s,"argument-error"),pr._fromEmailAndCode(e,s.code,s.tenantId)}}Ei.PROVIDER_ID="password";Ei.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ei.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr extends f_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends Mr{constructor(){super("facebook.com")}static credential(e){return ps._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rn.credential(e.oauthAccessToken)}catch{return null}}}Rn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends Mr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ps._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Sn.credential(n,s)}catch{return null}}}Sn.GOOGLE_SIGN_IN_METHOD="google.com";Sn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends Mr{constructor(){super("github.com")}static credential(e){return ps._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return An.credential(e.oauthAccessToken)}catch{return null}}}An.GITHUB_SIGN_IN_METHOD="github.com";An.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends Mr{constructor(){super("twitter.com")}static credential(e,n){return ps._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return kn.credential(n,s)}catch{return null}}}kn.TWITTER_SIGN_IN_METHOD="twitter.com";kn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _b(t,e){return xr(t,"POST","/v1/accounts:signUp",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await ls._fromIdTokenResponse(e,s,i),o=Hd(s);return new gs({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Hd(s);return new gs({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Hd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo extends nn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Bo.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Bo(e,n,s,i)}}function p_(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Bo._fromErrorAndOperation(t,r,e,s):r})}async function mb(t,e,n=!1){const s=await ti(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return gs._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yb(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await ti(t,p_(s,i,e,t),n);W(r.idToken,s,"internal-error");const o=Cu(r.idToken);W(o,s,"internal-error");const{sub:a}=o;return W(t.uid===a,s,"user-mismatch"),gs._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&$t(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g_(t,e,n=!1){const s="signIn",i=await p_(t,s,e),r=await gs._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function vb(t,e){return g_(Dr(t),e)}async function Eb(t,e,n){const s=Dr(t),i=await _b(s,{returnSecureToken:!0,email:e,password:n}),r=await gs._fromIdTokenResponse(s,"signIn",i);return await s._updateCurrentUser(r.user),r}function wb(t,e,n){return vb(De(t),Ei.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ib(t,e){return vi(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tb(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=De(t),r={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ti(s,Ib(s.auth,r));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function __(t,e,n,s){return De(t).onIdTokenChanged(e,n,s)}function bb(t,e,n){return De(t).beforeAuthStateChanged(e,n)}function Cb(t,e,n,s){return De(t).onAuthStateChanged(e,n,s)}function Rb(t){return De(t).signOut()}const $o="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($o,"1"),this.storage.removeItem($o),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sb(){const t=et();return Ru(t)||Na(t)}const Ab=1e3,kb=10;class y_ extends m_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Sb()&&sb(),this.fallbackToPolling=u_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);nb()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,kb):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Ab)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}y_.type="LOCAL";const Pb=y_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_ extends m_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}v_.type="SESSION";const E_=v_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Oa(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await Nb(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Oa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=ku("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(){return window}function xb(t){Gt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(){return typeof Gt().WorkerGlobalScope<"u"&&typeof Gt().importScripts=="function"}async function Db(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Mb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Lb(){return w_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_="firebaseLocalStorageDb",Fb=1,Ho="firebaseLocalStorage",T_="fbase_key";class Lr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xa(t,e){return t.transaction([Ho],e?"readwrite":"readonly").objectStore(Ho)}function Ub(){const t=indexedDB.deleteDatabase(I_);return new Lr(t).toPromise()}function fc(){const t=indexedDB.open(I_,Fb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Ho,{keyPath:T_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Ho)?e(s):(s.close(),await Ub(),e(await fc()))})})}async function jd(t,e,n){const s=xa(t,!0).put({[T_]:e,value:n});return new Lr(s).toPromise()}async function Bb(t,e){const n=xa(t,!1).get(e),s=await new Lr(n).toPromise();return s===void 0?null:s.value}function Wd(t,e){const n=xa(t,!0).delete(e);return new Lr(n).toPromise()}const $b=800,Hb=3;class b_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Hb)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return w_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Oa._getInstance(Lb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Db(),!this.activeServiceWorker)return;this.sender=new Ob(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Mb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fc();return await jd(e,$o,"1"),await Wd(e,$o),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>jd(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Bb(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Wd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=xa(i,!1).getAll();return new Lr(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$b)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}b_.type="LOCAL";const jb=b_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Vb(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=qt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",Wb().appendChild(s)})}function zb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Nr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kb(t,e){return e?cn(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu extends Su{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ws(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ws(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ws(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function qb(t){return g_(t.auth,new Pu(t),t.bypassAuthState)}function Gb(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),yb(n,new Pu(t),t.bypassAuthState)}async function Yb(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),mb(n,new Pu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qb;case"linkViaPopup":case"linkViaRedirect":return Yb;case"reauthViaPopup":case"reauthViaRedirect":return Gb;default:$t(this.auth,"internal-error")}}resolve(e){pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xb=new Nr(2e3,1e4);class Ds extends C_{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Ds.currentPopupAction&&Ds.currentPopupAction.cancel(),Ds.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){pn(this.filter.length===1,"Popup operations only handle one event");const e=ku();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ds.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Xb.get())};e()}}Ds.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb="pendingRedirect",Co=new Map;class Jb extends C_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Co.get(this.auth._key());if(!e){try{const s=await Zb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Co.set(this.auth._key(),e)}return this.bypassAuthState||Co.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Zb(t,e){const n=nC(e),s=tC(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function eC(t,e){Co.set(t._key(),e)}function tC(t){return cn(t._redirectPersistence)}function nC(t){return bo(Qb,t.config.apiKey,t.name)}async function sC(t,e,n=!1){const s=Dr(t),i=Kb(s,e),o=await new Jb(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC=10*60*1e3;class rC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!oC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!R_(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(qt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=iC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vd(e))}saveEventToCache(e){this.cachedEventUids.add(Vd(e)),this.lastProcessedEventTime=Date.now()}}function Vd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function R_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function oC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return R_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aC(t,e={}){return vi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cC=/^https?/;async function uC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await aC(t);for(const n of e)try{if(hC(n))return}catch{}$t(t,"unauthorized-domain")}function hC(t){const e=dc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!cC.test(n))return!1;if(lC.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dC=new Nr(3e4,6e4);function zd(){const t=Gt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function fC(t){return new Promise((e,n)=>{var s,i,r;function o(){zd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zd(),n(qt(t,"network-request-failed"))},timeout:dC.get()})}if(!((i=(s=Gt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Gt().gapi)===null||r===void 0)&&r.load)o();else{const a=zb("iframefcb");return Gt()[a]=()=>{gapi.load?o():n(qt(t,"network-request-failed"))},Vb(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ro=null,e})}let Ro=null;function pC(t){return Ro=Ro||fC(t),Ro}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC=new Nr(5e3,15e3),_C="__/auth/iframe",mC="emulator/auth/iframe",yC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function EC(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?bu(e,mC):`https://${t.config.authDomain}/${_C}`,s={apiKey:e.apiKey,appName:t.name,v:ws},i=vC.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${yi(s).slice(1)}`}async function wC(t){const e=await pC(t),n=Gt().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:EC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yC,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=qt(t,"network-request-failed"),a=Gt().setTimeout(()=>{r(o)},gC.get());function l(){Gt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},TC=500,bC=600,CC="_blank",RC="http://localhost";class Kd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function SC(t,e,n,s=TC,i=bC){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},IC),{width:s.toString(),height:i.toString(),top:r,left:o}),c=et().toLowerCase();n&&(a=r_(c)?CC:n),i_(c)&&(e=e||RC,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[p,_])=>`${d}${p}=${_},`,"");if(tb(c)&&a!=="_self")return AC(e||"",a),new Kd(null);const h=window.open(e||"",a,u);W(h,t,"popup-blocked");try{h.focus()}catch{}return new Kd(h)}function AC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kC="__/auth/handler",PC="emulator/auth/handler";function qd(t,e,n,s,i,r){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:ws,eventId:i};if(e instanceof f_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",oc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof Mr){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${NC(t)}?${yi(a).slice(1)}`}function NC({config:t}){return t.emulator?bu(t,PC):`https://${t.authDomain}/${kC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il="webStorageSupport";class OC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=E_,this._completeRedirectFn=sC,this._overrideRedirectResult=eC}async _openPopup(e,n,s,i){var r;pn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=qd(e,n,s,dc(),i);return SC(e,o,ku())}async _openRedirect(e,n,s,i){return await this._originValidation(e),xb(qd(e,n,s,dc(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(pn(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await wC(e),s=new rC(e);return n.register("authEvent",i=>(W(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Il,{type:Il},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Il];o!==void 0&&n(!!o),$t(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=uC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return u_()||Ru()||Na()}}const xC=OC;var Gd="@firebase/auth",Yd="0.21.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function LC(t){en(new Bt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{W(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),W(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:h_(t)},u=new rb(a,l,c);return UT(u,n),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),en(new Bt("auth-internal",e=>{const n=Dr(e.getProvider("auth").getImmediate());return(s=>new DC(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Et(Gd,Yd,MC(t)),Et(Gd,Yd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FC=5*60,UC=$g("authIdTokenMaxAge")||FC;let Xd=null;const BC=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>UC)return;const i=n==null?void 0:n.token;Xd!==i&&(Xd=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function S_(t=Pa()){const e=ka(t,"auth");if(e.isInitialized())return e.getImmediate();const n=FT(t,{popupRedirectResolver:xC,persistence:[jb,Pb,E_]}),s=$g("authTokenSyncURL");if(s){const r=BC(s);bb(n,r,()=>r(n.currentUser)),__(n,o=>r(o))}const i=Ug("auth");return i&&ob(n,`http://${i}`),n}LC("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $C=new Map,HC={activated:!1,tokenObservers:[]};function tn(t){return $C.get(t)||Object.assign({},HC)}const Qd={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(e,n,s,i,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new ds,await WC(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new ds,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function WC(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VC={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},jo=new mi("appCheck","AppCheck",VC);function zC(t){if(!tn(t).activated)throw jo.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC="firebase-app-check-database",qC=1,pc="firebase-app-check-store";let ao=null;function GC(){return ao||(ao=new Promise((t,e)=>{try{const n=indexedDB.open(KC,qC);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var i;e(jo.create("storage-open",{originalErrorMessage:(i=s.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore(pc,{keyPath:"compositeKey"})}}}catch(n){e(jo.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),ao)}function YC(t,e){return XC(QC(t),e)}async function XC(t,e){const s=(await GC()).transaction(pc,"readwrite"),r=s.objectStore(pc).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},s.onerror=l=>{var c;a(jo.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function QC(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc=new Pr("@firebase/app-check");function Jd(t,e){return Vg()?YC(t,e).catch(n=>{gc.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC={error:"UNKNOWN_ERROR"};function ZC(t){return Ca.encodeString(JSON.stringify(t),!1)}async function _c(t,e=!1){const n=t.app;zC(n);const s=tn(n);let i=s.token,r;if(i&&!Hi(i)&&(s.token=void 0,i=void 0),!i){const l=await s.cachedTokenPromise;l&&(Hi(l)?i=l:await Jd(n,void 0))}if(!e&&i&&Hi(i))return{token:i.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),i=await tn(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?gc.warn(l.message):gc.error(l),r=l}let a;return i?r?Hi(i)?a={token:i.token,internalError:r}:a=ef(r):(a={token:i.token},s.token=i,await Jd(n,i)):a=ef(r),o&&n0(n,a),a}function e0(t,e,n,s){const{app:i}=t,r=tn(i),o={next:n,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&Hi(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),Zd(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>Zd(t))}function A_(t,e){const n=tn(t),s=n.tokenObservers.filter(i=>i.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function Zd(t){const{app:e}=t,n=tn(e);let s=n.tokenRefresher;s||(s=t0(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function t0(t){const{app:e}=t;return new jC(async()=>{const n=tn(e);let s;if(n.token?s=await _c(t,!0):s=await _c(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=tn(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},Qd.RETRIAL_MIN_WAIT,Qd.RETRIAL_MAX_WAIT)}function n0(t,e){const n=tn(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function Hi(t){return t.expireTimeMillis-Date.now()>0}function ef(t){return{token:ZC(JC),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=tn(this.app);for(const n of e)A_(this.app,n.next);return Promise.resolve()}}function i0(t,e){return new s0(t,e)}function r0(t){return{getToken:e=>_c(t,e),addTokenListener:e=>e0(t,"INTERNAL",e),removeTokenListener:e=>A_(t.app,e)}}const o0="@firebase/app-check",a0="0.6.3",l0="app-check",tf="app-check-internal";function c0(){en(new Bt(l0,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return i0(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(tf).initialize()})),en(new Bt(tf,t=>{const e=t.getProvider("app-check").getImmediate();return r0(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Et(o0,a0)}c0();var u0="firebase",h0="9.17.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Et(u0,h0,"app");const k_=Symbol("firebaseApp");function Nu(t){return kr()&&vt(k_,null)||Pa(t)}const wt=()=>{};function wi(t){return!!t&&typeof t=="object"}function d0(t){return wi(t)&&t.type==="document"}function f0(t){return wi(t)&&t.type==="collection"}function p0(t){return d0(t)||f0(t)}function g0(t){return wi(t)&&t.type==="query"}function _0(t){return wi(t)&&"ref"in t}function m0(t){return wi(t)&&typeof t.bucket=="string"}function y0(){return!!(kr()&&vt(Sg,null))}const lo=new WeakMap;function v0(t,e){if(!lo.has(t)){const n=tu(!0);lo.set(t,n);const{unmount:s}=e;e.unmount=()=>{s.call(e),n.stop(),lo.delete(t)}}return lo.get(t)}const E0=new WeakMap,co=new WeakMap;function w0(t){const e=Nu(t);if(!co.has(e)){let n;const i=[new Promise(r=>{n=r}),r=>{co.set(e,r),n(r.value)}];co.set(e,i)}return co.get(e)}function I0(t,e){const n=S_(e);__(n,s=>{const i=w0();t.value=s,Array.isArray(i)&&i[1](t)})}const nf="@firebase/database",sf="0.14.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let P_="";function T0(t){P_=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ue(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:hr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return sn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new b0(e)}}catch{}return new C0},is=N_("localStorage"),mc=N_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs=new Pr("@firebase/database"),R0=function(){let t=1;return function(){return t++}}(),O_=function(t){const e=kI(t),n=new CI;n.update(e);const s=n.digest();return Ca.encodeByteArray(s)},Fr=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Fr.apply(null,s):typeof s=="object"?e+=Ue(s):e+=s,e+=" "}return e};let cs=null,rf=!0;const S0=function(t,e){S(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Vs.logLevel=le.VERBOSE,cs=Vs.log.bind(Vs),e&&mc.set("logging_enabled",!0)):typeof t=="function"?cs=t:(cs=null,mc.remove("logging_enabled"))},ze=function(...t){if(rf===!0&&(rf=!1,cs===null&&mc.get("logging_enabled")===!0&&S0(!0)),cs){const e=Fr.apply(null,t);cs(e)}},Ur=function(t){return function(...e){ze(t,...e)}},yc=function(...t){const e="FIREBASE INTERNAL ERROR: "+Fr(...t);Vs.error(e)},gn=function(...t){const e=`FIREBASE FATAL ERROR: ${Fr(...t)}`;throw Vs.error(e),new Error(e)},at=function(...t){const e="FIREBASE WARNING: "+Fr(...t);Vs.warn(e)},A0=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&at("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ou=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},k0=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ni="[MIN_NAME]",_s="[MAX_NAME]",Is=function(t,e){if(t===e)return 0;if(t===ni||e===_s)return-1;if(e===ni||t===_s)return 1;{const n=of(t),s=of(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},P0=function(t,e){return t===e?0:t<e?-1:1},Pi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ue(e))},xu=function(t){if(typeof t!="object"||t===null)return Ue(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ue(e[s]),n+=":",n+=xu(t[e[s]]);return n+="}",n},x_=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Ge(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const D_=function(t){S(!Ou(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},N0=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},O0=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function x0(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const D0=new RegExp("^-?(0*)\\d{1,10}$"),M0=-2147483648,L0=2147483647,of=function(t){if(D0.test(t)){const e=Number(t);if(e>=M0&&e<=L0)return e}return null},Ii=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw at("Exception was thrown by user callback.",n),e},Math.floor(0))}},F0=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Qi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){at(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ze("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',at(e)}}class zs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}zs.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du="5",M_="v",L_="s",F_="r",U_="f",B_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,$_="ls",H_="p",vc="ac",j_="websocket",W_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=is.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&is.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function $0(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function z_(t,e,n){S(typeof e=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let s;if(e===j_)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===W_)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);$0(t)&&(n.ns=t.namespace);const i=[];return Ge(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(){this.counters_={}}incrementCounter(e,n=1){sn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return cI(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl={},bl={};function Mu(t){const e=t.toString();return Tl[e]||(Tl[e]=new H0),Tl[e]}function j0(t,e){const n=t.toString();return bl[n]||(bl[n]=e()),bl[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Ii(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af="start",V0="close",z0="pLPCommand",K0="pRTLPCB",K_="id",q_="pw",G_="ser",q0="cb",G0="seg",Y0="ts",X0="d",Q0="dframe",Y_=1870,X_=30,J0=Y_-X_,Z0=25e3,eR=3e4;class Ms{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ur(e),this.stats_=Mu(n),this.urlFn=l=>(this.appCheckToken&&(l[vc]=this.appCheckToken),z_(n,W_,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new W0(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(eR)),k0(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Lu((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===af)this.id=a,this.password=l;else if(o===V0)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[af]="t",s[G_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[q0]=this.scriptTagHolder.uniqueCallbackIdentifier),s[M_]=Du,this.transportSessionId&&(s[L_]=this.transportSessionId),this.lastSessionId&&(s[$_]=this.lastSessionId),this.applicationId&&(s[H_]=this.applicationId),this.appCheckToken&&(s[vc]=this.appCheckToken),typeof location<"u"&&location.hostname&&B_.test(location.hostname)&&(s[F_]=U_);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ms.forceAllow_=!0}static forceDisallow(){Ms.forceDisallow_=!0}static isAvailable(){return Ms.forceAllow_?!0:!Ms.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!N0()&&!O0()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ue(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Lg(n),i=x_(s,J0);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Q0]="t",s[K_]=e,s[q_]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ue(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Lu{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=R0(),window[z0+this.uniqueCallbackIdentifier]=e,window[K0+this.uniqueCallbackIdentifier]=n,this.myIFrame=Lu.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ze("frame writing exception"),a.stack&&ze(a.stack),ze(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ze("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[K_]=this.myID,e[q_]=this.myPW,e[G_]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+X_+s.length<=Y_;){const o=this.pendingSegs.shift();s=s+"&"+G0+i+"="+o.seg+"&"+Y0+i+"="+o.ts+"&"+X0+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Z0)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{ze("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR=16384,nR=45e3;let Wo=null;typeof MozWebSocket<"u"?Wo=MozWebSocket:typeof WebSocket<"u"&&(Wo=WebSocket);class Dt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ur(this.connId),this.stats_=Mu(n),this.connURL=Dt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[M_]=Du,typeof location<"u"&&location.hostname&&B_.test(location.hostname)&&(o[F_]=U_),n&&(o[L_]=n),s&&(o[$_]=s),i&&(o[vc]=i),r&&(o[H_]=r),z_(e,j_,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,is.set("previous_websocket_failure",!0);try{let s;Wg(),this.mySock=new Wo(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Dt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Wo!==null&&!Dt.forceDisallow_}static previouslyFailed(){return is.isInMemoryStorage||is.get("previous_websocket_failure")===!0}markConnectionHealthy(){is.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=hr(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(S(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ue(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=x_(n,tR);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(nR))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Dt.responsesRequiredToBeHealthy=2;Dt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ms,Dt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Dt&&Dt.isAvailable();let s=n&&!Dt.previouslyFailed();if(e.webSocketOnly&&(n||at("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Dt];else{const i=this.transports_=[];for(const r of gr.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);gr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}gr.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR=6e4,iR=5e3,rR=10*1024,oR=100*1024,Cl="t",lf="d",aR="s",cf="r",lR="e",uf="o",hf="a",df="n",ff="p",cR="h";class uR{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ur("c:"+this.id+":"),this.transportManager_=new gr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Qi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>oR?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>rR?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Cl in e){const n=e[Cl];n===hf?this.upgradeIfSecondaryHealthy_():n===cf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===uf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Pi("t",e),s=Pi("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ff,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:hf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:df,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Pi("t",e),s=Pi("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Pi(Cl,e);if(lf in e){const s=e[lf];if(n===cR){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===df){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===aR?this.onConnectionShutdown_(s):n===cf?this.onReset_(s):n===lR?yc("Server Error: "+s):n===uf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):yc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Du!==s&&at("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Qi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(sR))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Qi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(iR))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ff,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(is.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e){this.allowedEvents_=e,this.listeners_={},S(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){S(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo extends J_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Eu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Vo}getInitialEvent(e){return S(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf=32,gf=768;class de{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function oe(){return new de("")}function Q(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function jn(t){return t.pieces_.length-t.pieceNum_}function ye(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new de(t.pieces_,e)}function Fu(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function hR(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function _r(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Z_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new de(e,0)}function Se(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof de)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new de(n,0)}function Z(t){return t.pieceNum_>=t.pieces_.length}function rt(t,e){const n=Q(t),s=Q(e);if(n===null)return e;if(n===s)return rt(ye(t),ye(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function dR(t,e){const n=_r(t,0),s=_r(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=Is(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function Uu(t,e){if(jn(t)!==jn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Tt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(jn(t)>jn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class fR{constructor(e,n){this.errorPrefix_=n,this.parts_=_r(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Aa(this.parts_[s]);em(this)}}function pR(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Aa(e),em(t)}function gR(t){const e=t.parts_.pop();t.byteLength_-=Aa(e),t.parts_.length>0&&(t.byteLength_-=1)}function em(t){if(t.byteLength_>gf)throw new Error(t.errorPrefix_+"has a key path longer than "+gf+" bytes ("+t.byteLength_+").");if(t.parts_.length>pf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+pf+") or object contains a cycle "+es(t))}function es(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu extends J_{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Bu}getInitialEvent(e){return S(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni=1e3,_R=60*5*1e3,_f=30*1e3,mR=1.3,yR=3e4,vR="server_kill",mf=3;class dn extends Q_{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=dn.nextPersistentConnectionId_++,this.log_=Ur("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ni,this.maxReconnectDelay_=_R,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Wg())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Bu.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Vo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Ue(r)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new ds,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;dn.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&sn(e,"w")){const s=ei(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();at(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||bI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=_f)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=TI(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ue(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):yc("Unrecognized action received from server: "+Ue(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ni,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ni,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>yR&&(this.reconnectDelay_=Ni),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*mR)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+dn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){S(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?ze("getToken() completed but was canceled"):(ze("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new uR(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,p=>{at(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(vR)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&at(h),l())}}}interrupt(e){ze("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ze("Resuming connection for reason: "+e),delete this.interruptReasons_[e],oc(this.interruptReasons_)&&(this.reconnectDelay_=Ni,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>xu(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new de(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){ze("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=mf&&(this.reconnectDelay_=_f,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ze("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=mf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+P_.replace(/\./g,"-")]=1,Eu()?e["framework.cordova"]=1:jg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Vo.getInstance().currentlyOnline();return oc(this.interruptReasons_)&&e}}dn.nextPersistentConnectionId_=0;dn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new J(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new J(ni,e),i=new J(ni,n);return this.compare(s,i)!==0}minPost(){return J.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uo;class tm extends Da{static get __EMPTY_NODE(){return uo}static set __EMPTY_NODE(e){uo=e}compare(e,n){return Is(e.name,n.name)}isDefinedOn(e){throw _i("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return J.MIN}maxPost(){return new J(_s,uo)}makePost(e,n){return S(typeof e=="string","KeyIndex indexValue must always be a string."),new J(e,uo)}toString(){return".key"}}const Ks=new tm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class He{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??He.RED,this.left=i??ft.EMPTY_NODE,this.right=r??ft.EMPTY_NODE}copy(e,n,s,i,r){return new He(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ft.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return ft.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}He.RED=!0;He.BLACK=!1;class ER{copy(e,n,s,i,r){return this}insert(e,n,s){return new He(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ft{constructor(e,n=ft.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ft(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,He.BLACK,null,null))}remove(e){return new ft(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,He.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ho(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ho(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ho(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ho(this.root_,null,this.comparator_,!0,e)}}ft.EMPTY_NODE=new ER;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wR(t,e){return Is(t.name,e.name)}function $u(t,e){return Is(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ec;function IR(t){Ec=t}const nm=function(t){return typeof t=="number"?"number:"+D_(t):"string:"+t},sm=function(t){if(t.isLeafNode()){const e=t.val();S(typeof e=="string"||typeof e=="number"||typeof e=="object"&&sn(e,".sv"),"Priority must be a string or number.")}else S(t===Ec||t.isEmpty(),"priority of unexpected type.");S(t===Ec||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yf;class $e{constructor(e,n=$e.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),sm(this.priorityNode_)}static set __childrenNodeConstructor(e){yf=e}static get __childrenNodeConstructor(){return yf}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new $e(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:$e.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Z(e)?this:Q(e)===".priority"?this.priorityNode_:$e.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:$e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=Q(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(S(s!==".priority"||jn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,$e.__childrenNodeConstructor.EMPTY_NODE.updateChild(ye(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+nm(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=D_(this.value_):e+=this.value_,this.lazyHash_=O_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===$e.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof $e.__childrenNodeConstructor?-1:(S(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=$e.VALUE_TYPE_ORDER.indexOf(n),r=$e.VALUE_TYPE_ORDER.indexOf(s);return S(i>=0,"Unknown leaf type: "+n),S(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}$e.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let im,rm;function TR(t){im=t}function bR(t){rm=t}class CR extends Da{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Is(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return J.MIN}maxPost(){return new J(_s,new $e("[PRIORITY-POST]",rm))}makePost(e,n){const s=im(e);return new J(n,new $e("[PRIORITY-POST]",s))}toString(){return".priority"}}const ke=new CR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RR=Math.log(2);class SR{constructor(e){const n=r=>parseInt(Math.log(r)/RR,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const zo=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new He(d,h.node,He.BLACK,null,null);{const p=parseInt(u/2,10)+l,_=i(l,p),y=i(p+1,c);return h=t[p],d=n?n(h):h,new He(d,h.node,He.BLACK,_,y)}},r=function(l){let c=null,u=null,h=t.length;const d=function(_,y){const b=h-_,R=h;h-=_;const v=i(b+1,R),I=t[b],x=n?n(I):I;p(new He(x,I.node,y,null,v))},p=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<l.count;++_){const y=l.nextBitIsOne(),b=Math.pow(2,l.count-(_+1));y?d(b,He.BLACK):(d(b,He.BLACK),d(b,He.RED))}return u},o=new SR(t.length),a=r(o);return new ft(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rl;const As={};class un{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return S(As&&ke,"ChildrenNode.ts has not been loaded"),Rl=Rl||new un({".priority":As},{".priority":ke}),Rl}get(e){const n=ei(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ft?n:null}hasIndex(e){return sn(this.indexSet_,e.toString())}addIndex(e,n){S(e!==Ks,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(J.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=zo(s,e.getCompare()):a=As;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new un(u,c)}addToIndexes(e,n){const s=Mo(this.indexes_,(i,r)=>{const o=ei(this.indexSet_,r);if(S(o,"Missing index implementation for "+r),i===As)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(J.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),zo(a,o.getCompare())}else return As;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new J(e.name,a))),l.insert(e,e.node)}});return new un(s,this.indexSet_)}removeFromIndexes(e,n){const s=Mo(this.indexes_,i=>{if(i===As)return i;{const r=n.get(e.name);return r?i.remove(new J(e.name,r)):i}});return new un(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oi;class H{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&sm(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Oi||(Oi=new H(new ft($u),null,un.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Oi}updatePriority(e){return this.children_.isEmpty()?this:new H(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Oi:n}}getChild(e){const n=Q(e);return n===null?this:this.getImmediateChild(n).getChild(ye(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(S(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new J(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Oi:this.priorityNode_;return new H(i,o,r)}}updateChild(e,n){const s=Q(e);if(s===null)return n;{S(Q(e)!==".priority"||jn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ye(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ke,(o,a)=>{n[o]=a.val(e),s++,r&&H.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+nm(this.getPriority().val())+":"),this.forEachChild(ke,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":O_(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new J(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new J(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new J(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,J.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,J.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Br?-1:0}withIndex(e){if(e===Ks||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new H(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ks||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ke),i=n.getIterator(ke);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ks?null:this.indexMap_.get(e.toString())}}H.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class AR extends H{constructor(){super(new ft($u),H.EMPTY_NODE,un.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return H.EMPTY_NODE}isEmpty(){return!1}}const Br=new AR;Object.defineProperties(J,{MIN:{value:new J(ni,H.EMPTY_NODE)},MAX:{value:new J(_s,Br)}});tm.__EMPTY_NODE=H.EMPTY_NODE;$e.__childrenNodeConstructor=H;IR(Br);bR(Br);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kR=!0;function Fe(t,e=null){if(t===null)return H.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),S(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new $e(n,Fe(e))}if(!(t instanceof Array)&&kR){const n=[];let s=!1;if(Ge(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Fe(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new J(o,l)))}}),n.length===0)return H.EMPTY_NODE;const r=zo(n,wR,o=>o.name,$u);if(s){const o=zo(n,ke.getCompare());return new H(r,Fe(e),new un({".priority":o},{".priority":ke}))}else return new H(r,Fe(e),un.Default)}else{let n=H.EMPTY_NODE;return Ge(t,(s,i)=>{if(sn(t,s)&&s.substring(0,1)!=="."){const r=Fe(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Fe(e))}}TR(Fe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR extends Da{constructor(e){super(),this.indexPath_=e,S(!Z(e)&&Q(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Is(e.name,n.name):r}makePost(e,n){const s=Fe(e),i=H.EMPTY_NODE.updateChild(this.indexPath_,s);return new J(n,i)}maxPost(){const e=H.EMPTY_NODE.updateChild(this.indexPath_,Br);return new J(_s,e)}toString(){return _r(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR extends Da{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Is(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return J.MIN}maxPost(){return J.MAX}makePost(e,n){const s=Fe(e);return new J(n,s)}toString(){return".value"}}const OR=new NR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function om(t){return{type:"value",snapshotNode:t}}function si(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function mr(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function yr(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function xR(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){S(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(mr(n,a)):S(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(si(n,s)):o.trackChildChange(yr(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ke,(i,r)=>{n.hasChild(i)||s.trackChildChange(mr(i,r))}),n.isLeafNode()||n.forEachChild(ke,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(yr(i,r,o))}else s.trackChildChange(si(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?H.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e){this.indexedFilter_=new Hu(e.getIndex()),this.index_=e.getIndex(),this.startPost_=vr.getStartPost_(e),this.endPost_=vr.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new J(n,s))||(s=H.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=H.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(H.EMPTY_NODE);const r=this;return n.forEachChild(ke,(o,a)=>{r.matches(new J(o,a))||(i=i.updateImmediateChild(o,H.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new vr(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new J(n,s))||(s=H.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=H.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=H.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(H.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,H.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,p)=>h(p,d)}else o=this.index_.getCompare();const a=e;S(a.numChildren()===this.limit_,"");const l=new J(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const p=d==null?1:o(d,l);if(u&&!s.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(yr(n,s,h)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(mr(n,h));const y=a.updateImmediateChild(n,H.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(si(d.name,d.node)),y.updateImmediateChild(d.name,d.node)):y}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(mr(c.name,c.node)),r.trackChildChange(si(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,H.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ke}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ni}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:_s}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ke}copy(){const e=new ju;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function MR(t){return t.loadsAllData()?new Hu(t.getIndex()):t.hasLimit()?new DR(t):new vr(t)}function vf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ke?n="$priority":t.index_===OR?n="$value":t.index_===Ks?n="$key":(S(t.index_ instanceof PR,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ue(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Ue(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Ue(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Ue(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Ue(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ef(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ke&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko extends Q_{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Ur("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(S(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ko.getListenId_(e,s),a={};this.listens_[o]=a;const l=vf(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),ei(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Ko.getListenId_(e,n);delete this.listens_[s]}get(e){const n=vf(e._queryParams),s=e._path.toString(),i=new ds;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+yi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=hr(a.responseText)}catch{at("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&at("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(){this.rootNode_=H.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(){return{value:null,children:new Map}}function am(t,e,n){if(Z(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=Q(e);t.children.has(s)||t.children.set(s,qo());const i=t.children.get(s);e=ye(e),am(i,e,n)}}function wc(t,e,n){t.value!==null?n(e,t.value):FR(t,(s,i)=>{const r=new de(e.toString()+"/"+s);wc(i,r,n)})}function FR(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ge(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf=10*1e3,BR=30*1e3,$R=5*60*1e3;class HR{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new UR(e);const s=wf+(BR-wf)*Math.random();Qi(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ge(e,(i,r)=>{r>0&&sn(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Qi(this.reportStats_.bind(this),Math.floor(Math.random()*2*$R))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Mt||(Mt={}));function Wu(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Vu(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function zu(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Mt.ACK_USER_WRITE,this.source=Wu()}operationForChild(e){if(Z(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new de(e));return new Go(oe(),n,this.revert)}}else return S(Q(this.path)===e,"operationForChild called for unrelated child."),new Go(ye(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,n){this.source=e,this.path=n,this.type=Mt.LISTEN_COMPLETE}operationForChild(e){return Z(this.path)?new Er(this.source,oe()):new Er(this.source,ye(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Mt.OVERWRITE}operationForChild(e){return Z(this.path)?new ms(this.source,oe(),this.snap.getImmediateChild(e)):new ms(this.source,ye(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Mt.MERGE}operationForChild(e){if(Z(this.path)){const n=this.children.subtree(new de(e));return n.isEmpty()?null:n.value?new ms(this.source,oe(),n.value):new ii(this.source,oe(),n)}else return S(Q(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ii(this.source,ye(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Z(e))return this.isFullyInitialized()&&!this.filtered_;const n=Q(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function WR(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(xR(o.childName,o.snapshotNode))}),xi(t,i,"child_removed",e,s,n),xi(t,i,"child_added",e,s,n),xi(t,i,"child_moved",r,s,n),xi(t,i,"child_changed",e,s,n),xi(t,i,"value",e,s,n),i}function xi(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>zR(t,a,l)),o.forEach(a=>{const l=VR(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function VR(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function zR(t,e,n){if(e.childName==null||n.childName==null)throw _i("Should only compare child_ events.");const s=new J(e.childName,e.snapshotNode),i=new J(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(t,e){return{eventCache:t,serverCache:e}}function Ji(t,e,n,s){return Ma(new Wn(e,n,s),t.serverCache)}function lm(t,e,n,s){return Ma(t.eventCache,new Wn(e,n,s))}function Yo(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ys(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sl;const KR=()=>(Sl||(Sl=new ft(P0)),Sl);class _e{constructor(e,n=KR()){this.value=e,this.children=n}static fromObject(e){let n=new _e(null);return Ge(e,(s,i)=>{n=n.set(new de(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:oe(),value:this.value};if(Z(e))return null;{const s=Q(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ye(e),n);return r!=null?{path:Se(new de(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Z(e))return this;{const n=Q(e),s=this.children.get(n);return s!==null?s.subtree(ye(e)):new _e(null)}}set(e,n){if(Z(e))return new _e(n,this.children);{const s=Q(e),r=(this.children.get(s)||new _e(null)).set(ye(e),n),o=this.children.insert(s,r);return new _e(this.value,o)}}remove(e){if(Z(e))return this.children.isEmpty()?new _e(null):new _e(null,this.children);{const n=Q(e),s=this.children.get(n);if(s){const i=s.remove(ye(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new _e(null):new _e(this.value,r)}else return this}}get(e){if(Z(e))return this.value;{const n=Q(e),s=this.children.get(n);return s?s.get(ye(e)):null}}setTree(e,n){if(Z(e))return n;{const s=Q(e),r=(this.children.get(s)||new _e(null)).setTree(ye(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new _e(this.value,o)}}fold(e){return this.fold_(oe(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Se(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,oe(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(Z(e))return null;{const r=Q(e),o=this.children.get(r);return o?o.findOnPath_(ye(e),Se(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,oe(),n)}foreachOnPath_(e,n,s){if(Z(e))return this;{this.value&&s(n,this.value);const i=Q(e),r=this.children.get(i);return r?r.foreachOnPath_(ye(e),Se(n,i),s):new _e(null)}}foreach(e){this.foreach_(oe(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Se(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.writeTree_=e}static empty(){return new Ut(new _e(null))}}function Zi(t,e,n){if(Z(e))return new Ut(new _e(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=rt(i,e);return r=r.updateChild(o,n),new Ut(t.writeTree_.set(i,r))}else{const i=new _e(n),r=t.writeTree_.setTree(e,i);return new Ut(r)}}}function Ic(t,e,n){let s=t;return Ge(n,(i,r)=>{s=Zi(s,Se(e,i),r)}),s}function If(t,e){if(Z(e))return Ut.empty();{const n=t.writeTree_.setTree(e,new _e(null));return new Ut(n)}}function Tc(t,e){return Ts(t,e)!=null}function Ts(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(rt(n.path,e)):null}function Tf(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ke,(s,i)=>{e.push(new J(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new J(s,i.value))}),e}function Un(t,e){if(Z(e))return t;{const n=Ts(t,e);return n!=null?new Ut(new _e(n)):new Ut(t.writeTree_.subtree(e))}}function bc(t){return t.writeTree_.isEmpty()}function ri(t,e){return cm(oe(),t.writeTree_,e)}function cm(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(S(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=cm(Se(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Se(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(t,e){return fm(e,t)}function qR(t,e,n,s,i){S(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Zi(t.visibleWrites,e,n)),t.lastWriteId=s}function GR(t,e,n,s){S(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=Ic(t.visibleWrites,e,n),t.lastWriteId=s}function YR(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function XR(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);S(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&QR(a,s.path)?i=!1:Tt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return JR(t),!0;if(s.snap)t.visibleWrites=If(t.visibleWrites,s.path);else{const a=s.children;Ge(a,l=>{t.visibleWrites=If(t.visibleWrites,Se(s.path,l))})}return!0}else return!1}function QR(t,e){if(t.snap)return Tt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Tt(Se(t.path,n),e))return!0;return!1}function JR(t){t.visibleWrites=um(t.allWrites,ZR,oe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function ZR(t){return t.visible}function um(t,e,n){let s=Ut.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Tt(n,o)?(a=rt(n,o),s=Zi(s,a,r.snap)):Tt(o,n)&&(a=rt(o,n),s=Zi(s,oe(),r.snap.getChild(a)));else if(r.children){if(Tt(n,o))a=rt(n,o),s=Ic(s,a,r.children);else if(Tt(o,n))if(a=rt(o,n),Z(a))s=Ic(s,oe(),r.children);else{const l=ei(r.children,Q(a));if(l){const c=l.getChild(ye(a));s=Zi(s,oe(),c)}}}else throw _i("WriteRecord should have .snap or .children")}}return s}function hm(t,e,n,s,i){if(!s&&!i){const r=Ts(t.visibleWrites,e);if(r!=null)return r;{const o=Un(t.visibleWrites,e);if(bc(o))return n;if(n==null&&!Tc(o,oe()))return null;{const a=n||H.EMPTY_NODE;return ri(o,a)}}}else{const r=Un(t.visibleWrites,e);if(!i&&bc(r))return n;if(!i&&n==null&&!Tc(r,oe()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Tt(c.path,e)||Tt(e,c.path))},a=um(t.allWrites,o,e),l=n||H.EMPTY_NODE;return ri(a,l)}}}function eS(t,e,n){let s=H.EMPTY_NODE;const i=Ts(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ke,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Un(t.visibleWrites,e);return n.forEachChild(ke,(o,a)=>{const l=ri(Un(r,new de(o)),a);s=s.updateImmediateChild(o,l)}),Tf(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Un(t.visibleWrites,e);return Tf(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function tS(t,e,n,s,i){S(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Se(e,n);if(Tc(t.visibleWrites,r))return null;{const o=Un(t.visibleWrites,r);return bc(o)?i.getChild(n):ri(o,i.getChild(n))}}function nS(t,e,n,s){const i=Se(e,n),r=Ts(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Un(t.visibleWrites,i);return ri(o,s.getNode().getImmediateChild(n))}else return null}function sS(t,e){return Ts(t.visibleWrites,e)}function iS(t,e,n,s,i,r,o){let a;const l=Un(t.visibleWrites,e),c=Ts(l,oe());if(c!=null)a=c;else if(n!=null)a=ri(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=d.getNext();for(;p&&u.length<i;)h(p,s)!==0&&u.push(p),p=d.getNext();return u}else return[]}function rS(){return{visibleWrites:Ut.empty(),allWrites:[],lastWriteId:-1}}function Xo(t,e,n,s){return hm(t.writeTree,t.treePath,e,n,s)}function Ku(t,e){return eS(t.writeTree,t.treePath,e)}function bf(t,e,n,s){return tS(t.writeTree,t.treePath,e,n,s)}function Qo(t,e){return sS(t.writeTree,Se(t.treePath,e))}function oS(t,e,n,s,i,r){return iS(t.writeTree,t.treePath,e,n,s,i,r)}function qu(t,e,n){return nS(t.writeTree,t.treePath,e,n)}function dm(t,e){return fm(Se(t.treePath,e),t.writeTree)}function fm(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,yr(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,mr(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,si(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,yr(s,e.snapshotNode,i.oldSnap));else throw _i("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const pm=new lS;class Gu{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Wn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return qu(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ys(this.viewCache_),r=oS(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cS(t){return{filter:t}}function uS(t,e){S(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),S(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function hS(t,e,n,s,i){const r=new aS;let o,a;if(n.type===Mt.OVERWRITE){const c=n;c.source.fromUser?o=Cc(t,e,c.path,c.snap,s,i,r):(S(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!Z(c.path),o=Jo(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===Mt.MERGE){const c=n;c.source.fromUser?o=fS(t,e,c.path,c.children,s,i,r):(S(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Rc(t,e,c.path,c.children,s,i,a,r))}else if(n.type===Mt.ACK_USER_WRITE){const c=n;c.revert?o=_S(t,e,c.path,s,i,r):o=pS(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Mt.LISTEN_COMPLETE)o=gS(t,e,n.path,s,r);else throw _i("Unknown operation type: "+n.type);const l=r.getChanges();return dS(e,o,l),{viewCache:o,changes:l}}function dS(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Yo(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(om(Yo(e)))}}function gm(t,e,n,s,i,r){const o=e.eventCache;if(Qo(s,n)!=null)return e;{let a,l;if(Z(n))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ys(e),u=c instanceof H?c:H.EMPTY_NODE,h=Ku(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Xo(s,ys(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=Q(n);if(c===".priority"){S(jn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=bf(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=ye(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=bf(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=qu(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return Ji(e,a,o.isFullyInitialized()||Z(n),t.filter.filtersNodes())}}function Jo(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(Z(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),p,null)}else{const p=Q(n);if(!l.isCompleteForPath(n)&&jn(n)>1)return e;const _=ye(n),b=l.getNode().getImmediateChild(p).updateChild(_,s);p===".priority"?c=u.updatePriority(l.getNode(),b):c=u.updateChild(l.getNode(),p,b,_,pm,null)}const h=lm(e,c,l.isFullyInitialized()||Z(n),u.filtersNodes()),d=new Gu(i,h,r);return gm(t,h,n,i,d,a)}function Cc(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new Gu(i,e,r);if(Z(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Ji(e,c,!0,t.filter.filtersNodes());else{const h=Q(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Ji(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=ye(n),p=a.getNode().getImmediateChild(h);let _;if(Z(d))_=s;else{const y=u.getCompleteChild(h);y!=null?Fu(d)===".priority"&&y.getChild(Z_(d)).isEmpty()?_=y:_=y.updateChild(d,s):_=H.EMPTY_NODE}if(p.equals(_))l=e;else{const y=t.filter.updateChild(a.getNode(),h,_,d,u,o);l=Ji(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Cf(t,e){return t.eventCache.isCompleteForChild(e)}function fS(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=Se(n,l);Cf(e,Q(u))&&(a=Cc(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=Se(n,l);Cf(e,Q(u))||(a=Cc(t,a,u,c,i,r,o))}),a}function Rf(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Rc(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;Z(n)?c=s:c=new _e(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),_=Rf(t,p,d);l=Jo(t,l,new de(h),_,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const p=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!p){const _=e.serverCache.getNode().getImmediateChild(h),y=Rf(t,_,d);l=Jo(t,l,new de(h),y,i,r,o,a)}}),l}function pS(t,e,n,s,i,r,o){if(Qo(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(Z(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Jo(t,e,n,l.getNode().getChild(n),i,r,a,o);if(Z(n)){let c=new _e(null);return l.getNode().forEachChild(Ks,(u,h)=>{c=c.set(new de(u),h)}),Rc(t,e,n,c,i,r,a,o)}else return e}else{let c=new _e(null);return s.foreach((u,h)=>{const d=Se(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Rc(t,e,n,c,i,r,a,o)}}function gS(t,e,n,s,i){const r=e.serverCache,o=lm(e,r.getNode(),r.isFullyInitialized()||Z(n),r.isFiltered());return gm(t,o,n,s,pm,i)}function _S(t,e,n,s,i,r){let o;if(Qo(s,n)!=null)return e;{const a=new Gu(s,e,i),l=e.eventCache.getNode();let c;if(Z(n)||Q(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Xo(s,ys(e));else{const h=e.serverCache.getNode();S(h instanceof H,"serverChildren would be complete if leaf node"),u=Ku(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=Q(n);let h=qu(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,ye(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,H.EMPTY_NODE,ye(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Xo(s,ys(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Qo(s,oe())!=null,Ji(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Hu(s.getIndex()),r=MR(s);this.processor_=cS(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(H.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(H.EMPTY_NODE,a.getNode(),null),u=new Wn(l,o.isFullyInitialized(),i.filtersNodes()),h=new Wn(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ma(h,u),this.eventGenerator_=new jR(this.query_)}get query(){return this.query_}}function yS(t){return t.viewCache_.serverCache.getNode()}function vS(t){return Yo(t.viewCache_)}function ES(t,e){const n=ys(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Z(e)&&!n.getImmediateChild(Q(e)).isEmpty())?n.getChild(e):null}function Sf(t){return t.eventRegistrations_.length===0}function wS(t,e){t.eventRegistrations_.push(e)}function Af(t,e,n){const s=[];if(n){S(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function kf(t,e,n,s){e.type===Mt.MERGE&&e.source.queryId!==null&&(S(ys(t.viewCache_),"We should always have a full cache before handling merges"),S(Yo(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=hS(t.processor_,i,e,n,s);return uS(t.processor_,r.viewCache),S(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,_m(t,r.changes,r.viewCache.eventCache.getNode(),null)}function IS(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ke,(r,o)=>{s.push(si(r,o))}),n.isFullyInitialized()&&s.push(om(n.getNode())),_m(t,s,n.getNode(),e)}function _m(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return WR(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zo;class mm{constructor(){this.views=new Map}}function TS(t){S(!Zo,"__referenceConstructor has already been defined"),Zo=t}function bS(){return S(Zo,"Reference.ts has not been loaded"),Zo}function CS(t){return t.views.size===0}function Yu(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return S(r!=null,"SyncTree gave us an op for an invalid query."),kf(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(kf(o,e,n,s));return r}}function ym(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Xo(n,i?s:null),l=!1;a?l=!0:s instanceof H?(a=Ku(n,s),l=!1):(a=H.EMPTY_NODE,l=!1);const c=Ma(new Wn(a,l,!1),new Wn(s,i,!1));return new mS(e,c)}return o}function RS(t,e,n,s,i,r){const o=ym(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),wS(o,n),IS(o,n)}function SS(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=Vn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Af(c,n,s)),Sf(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Af(l,n,s)),Sf(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Vn(t)&&r.push(new(bS())(e._repo,e._path)),{removed:r,events:o}}function vm(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Bn(t,e){let n=null;for(const s of t.views.values())n=n||ES(s,e);return n}function Em(t,e){if(e._queryParams.loadsAllData())return Fa(t);{const s=e._queryIdentifier;return t.views.get(s)}}function wm(t,e){return Em(t,e)!=null}function Vn(t){return Fa(t)!=null}function Fa(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ea;function AS(t){S(!ea,"__referenceConstructor has already been defined"),ea=t}function kS(){return S(ea,"Reference.ts has not been loaded"),ea}let PS=1;class Pf{constructor(e){this.listenProvider_=e,this.syncPointTree_=new _e(null),this.pendingWriteTree_=rS(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Im(t,e,n,s,i){return qR(t.pendingWriteTree_,e,n,s,i),i?Ti(t,new ms(Wu(),e,n)):[]}function NS(t,e,n,s){GR(t.pendingWriteTree_,e,n,s);const i=_e.fromObject(n);return Ti(t,new ii(Wu(),e,i))}function Nn(t,e,n=!1){const s=YR(t.pendingWriteTree_,e);if(XR(t.pendingWriteTree_,e)){let r=new _e(null);return s.snap!=null?r=r.set(oe(),!0):Ge(s.children,o=>{r=r.set(new de(o),!0)}),Ti(t,new Go(s.path,r,n))}else return[]}function $r(t,e,n){return Ti(t,new ms(Vu(),e,n))}function OS(t,e,n){const s=_e.fromObject(n);return Ti(t,new ii(Vu(),e,s))}function xS(t,e){return Ti(t,new Er(Vu(),e))}function DS(t,e,n){const s=Qu(t,n);if(s){const i=Ju(s),r=i.path,o=i.queryId,a=rt(r,e),l=new Er(zu(o),a);return Zu(t,r,l)}else return[]}function ta(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||wm(o,e))){const l=SS(o,e,n,s);CS(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,p)=>Vn(p));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const p=FS(d);for(let _=0;_<p.length;++_){const y=p[_],b=y.query,R=Rm(t,y);t.listenProvider_.startListening(er(b),wr(t,b),R.hashFn,R.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(er(e),null):c.forEach(d=>{const p=t.queryToTagMap.get(Ua(d));t.listenProvider_.stopListening(er(d),p)}))}US(t,c)}return a}function Tm(t,e,n,s){const i=Qu(t,s);if(i!=null){const r=Ju(i),o=r.path,a=r.queryId,l=rt(o,e),c=new ms(zu(a),l,n);return Zu(t,o,c)}else return[]}function MS(t,e,n,s){const i=Qu(t,s);if(i){const r=Ju(i),o=r.path,a=r.queryId,l=rt(o,e),c=_e.fromObject(n),u=new ii(zu(a),l,c);return Zu(t,o,u)}else return[]}function Sc(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,p)=>{const _=rt(d,i);r=r||Bn(p,_),o=o||Vn(p)});let a=t.syncPointTree_.get(i);a?(o=o||Vn(a),r=r||Bn(a,oe())):(a=new mm,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=H.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,_)=>{const y=Bn(_,oe());y&&(r=r.updateImmediateChild(p,y))}));const c=wm(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=Ua(e);S(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const p=BS();t.queryToTagMap.set(d,p),t.tagToQueryMap.set(p,d)}const u=La(t.pendingWriteTree_,i);let h=RS(a,e,n,u,r,l);if(!c&&!o&&!s){const d=Em(a,e);h=h.concat($S(t,e,d))}return h}function Xu(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=rt(o,e),c=Bn(a,l);if(c)return c});return hm(i,e,r,n,!0)}function LS(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=rt(c,n);s=s||Bn(u,h)});let i=t.syncPointTree_.get(n);i?s=s||Bn(i,oe()):(i=new mm,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Wn(s,!0,!1):null,a=La(t.pendingWriteTree_,e._path),l=ym(i,e,a,r?o.getNode():H.EMPTY_NODE,r);return vS(l)}function Ti(t,e){return bm(e,t.syncPointTree_,null,La(t.pendingWriteTree_,oe()))}function bm(t,e,n,s){if(Z(t.path))return Cm(t,e,n,s);{const i=e.get(oe());n==null&&i!=null&&(n=Bn(i,oe()));let r=[];const o=Q(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=dm(s,o);r=r.concat(bm(a,l,c,u))}return i&&(r=r.concat(Yu(i,t,s,n))),r}}function Cm(t,e,n,s){const i=e.get(oe());n==null&&i!=null&&(n=Bn(i,oe()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=dm(s,o),u=t.operationForChild(o);u&&(r=r.concat(Cm(u,a,l,c)))}),i&&(r=r.concat(Yu(i,t,s,n))),r}function Rm(t,e){const n=e.query,s=wr(t,n);return{hashFn:()=>(yS(e)||H.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?DS(t,n._path,s):xS(t,n._path);{const r=x0(i,n);return ta(t,n,null,r)}}}}function wr(t,e){const n=Ua(e);return t.queryToTagMap.get(n)}function Ua(t){return t._path.toString()+"$"+t._queryIdentifier}function Qu(t,e){return t.tagToQueryMap.get(e)}function Ju(t){const e=t.indexOf("$");return S(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new de(t.substr(0,e))}}function Zu(t,e,n){const s=t.syncPointTree_.get(e);S(s,"Missing sync point for query tag that we're tracking");const i=La(t.pendingWriteTree_,e);return Yu(s,n,i,null)}function FS(t){return t.fold((e,n,s)=>{if(n&&Vn(n))return[Fa(n)];{let i=[];return n&&(i=vm(n)),Ge(s,(r,o)=>{i=i.concat(o)}),i}})}function er(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(kS())(t._repo,t._path):t}function US(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Ua(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function BS(){return PS++}function $S(t,e,n){const s=e._path,i=wr(t,e),r=Rm(t,n),o=t.listenProvider_.startListening(er(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)S(!Vn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!Z(c)&&u&&Vn(u))return[Fa(u).query];{let d=[];return u&&(d=d.concat(vm(u).map(p=>p.query))),Ge(h,(p,_)=>{d=d.concat(_)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(er(u),wr(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new eh(n)}node(){return this.node_}}class th{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Se(this.path_,e);return new th(this.syncTree_,n)}node(){return Xu(this.syncTree_,this.path_)}}const HS=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Nf=function(t,e,n){if(!t||typeof t!="object")return t;if(S(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return jS(t[".sv"],e,n);if(typeof t[".sv"]=="object")return WS(t[".sv"],e);S(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},jS=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+t)}},WS=function(t,e,n){t.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&S(!1,"Unexpected increment value: "+s);const i=e.node();if(S(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Sm=function(t,e,n,s){return nh(e,new th(n,t),s)},Am=function(t,e,n){return nh(t,new eh(e),n)};function nh(t,e,n){const s=t.getPriority().val(),i=Nf(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Nf(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new $e(a,Fe(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new $e(i))),o.forEachChild(ke,(a,l)=>{const c=nh(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function ih(t,e){let n=e instanceof de?e:new de(e),s=t,i=Q(n);for(;i!==null;){const r=ei(s.node.children,i)||{children:{},childCount:0};s=new sh(i,s,r),n=ye(n),i=Q(n)}return s}function bi(t){return t.node.value}function km(t,e){t.node.value=e,Ac(t)}function Pm(t){return t.node.childCount>0}function VS(t){return bi(t)===void 0&&!Pm(t)}function Ba(t,e){Ge(t.node.children,(n,s)=>{e(new sh(n,t,s))})}function Nm(t,e,n,s){n&&!s&&e(t),Ba(t,i=>{Nm(i,e,!0,s)}),n&&s&&e(t)}function zS(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Hr(t){return new de(t.parent===null?t.name:Hr(t.parent)+"/"+t.name)}function Ac(t){t.parent!==null&&KS(t.parent,t.name,t)}function KS(t,e,n){const s=VS(n),i=sn(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Ac(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Ac(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS=/[\[\].#$\/\u0000-\u001F\u007F]/,GS=/[\[\].#$\u0000-\u001F\u007F]/,Al=10*1024*1024,rh=function(t){return typeof t=="string"&&t.length!==0&&!qS.test(t)},Om=function(t){return typeof t=="string"&&t.length!==0&&!GS.test(t)},YS=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Om(t)},XS=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Ou(t)||t&&typeof t=="object"&&sn(t,".sv")},xm=function(t,e,n,s){s&&e===void 0||$a(Sa(t,"value"),e,n)},$a=function(t,e,n){const s=n instanceof de?new fR(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+es(s));if(typeof e=="function")throw new Error(t+"contains a function "+es(s)+" with contents = "+e.toString());if(Ou(e))throw new Error(t+"contains "+e.toString()+" "+es(s));if(typeof e=="string"&&e.length>Al/3&&Aa(e)>Al)throw new Error(t+"contains a string greater than "+Al+" utf8 bytes "+es(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Ge(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!rh(o)))throw new Error(t+" contains an invalid key ("+o+") "+es(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);pR(s,o),$a(t,a,s),gR(s)}),i&&r)throw new Error(t+' contains ".value" child '+es(s)+" in addition to actual children.")}},QS=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=_r(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!rh(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(dR);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&Tt(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},JS=function(t,e,n,s){if(s&&e===void 0)return;const i=Sa(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];Ge(e,(o,a)=>{const l=new de(o);if($a(i,a,Se(n,l)),Fu(l)===".priority"&&!XS(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),QS(i,r)},Dm=function(t,e,n,s){if(!(s&&n===void 0)&&!Om(n))throw new Error(Sa(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},ZS=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Dm(t,e,n,s)},Mm=function(t,e){if(Q(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},eA=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!rh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!YS(n))throw new Error(Sa(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ha(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Uu(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Lm(t,e,n){Ha(t,n),Fm(t,s=>Uu(s,e))}function Rt(t,e,n){Ha(t,n),Fm(t,s=>Tt(s,e)||Tt(e,s))}function Fm(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(nA(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function nA(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();cs&&ze("event: "+n.toString()),Ii(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA="repo_interrupt",iA=25;class rA{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new tA,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=qo(),this.transactionQueueTree_=new sh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function oA(t,e,n){if(t.stats_=Mu(t.repoInfo_),t.forceRestClient_||F0())t.server_=new Ko(t.repoInfo_,(s,i,r,o)=>{Of(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>xf(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ue(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new dn(t.repoInfo_,e,(s,i,r,o)=>{Of(t,s,i,r,o)},s=>{xf(t,s)},s=>{aA(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=j0(t.repoInfo_,()=>new HR(t.stats_,t.server_)),t.infoData_=new LR,t.infoSyncTree_=new Pf({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=$r(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),oh(t,"connected",!1),t.serverSyncTree_=new Pf({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Rt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Um(t){const n=t.infoData_.getNode(new de(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ja(t){return HS({timestamp:Um(t)})}function Of(t,e,n,s,i){t.dataUpdateCount++;const r=new de(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Mo(n,c=>Fe(c));o=MS(t.serverSyncTree_,r,l,i)}else{const l=Fe(n);o=Tm(t.serverSyncTree_,r,l,i)}else if(s){const l=Mo(n,c=>Fe(c));o=OS(t.serverSyncTree_,r,l)}else{const l=Fe(n);o=$r(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=oi(t,r)),Rt(t.eventQueue_,a,o)}function xf(t,e){oh(t,"connected",e),e===!1&&hA(t)}function aA(t,e){Ge(e,(n,s)=>{oh(t,n,s)})}function oh(t,e,n){const s=new de("/.info/"+e),i=Fe(n);t.infoData_.updateSnapshot(s,i);const r=$r(t.infoSyncTree_,s,i);Rt(t.eventQueue_,s,r)}function ah(t){return t.nextWriteId_++}function lA(t,e,n){const s=LS(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Fe(i).withIndex(e._queryParams.getIndex());Sc(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=$r(t.serverSyncTree_,e._path,r);else{const a=wr(t.serverSyncTree_,e);o=Tm(t.serverSyncTree_,e._path,r,a)}return Rt(t.eventQueue_,e._path,o),ta(t.serverSyncTree_,e,n,null,!0),r},i=>(jr(t,"get for query "+Ue(e)+" failed: "+i),Promise.reject(new Error(i))))}function cA(t,e,n,s,i){jr(t,"set",{path:e.toString(),value:n,priority:s});const r=ja(t),o=Fe(n,s),a=Xu(t.serverSyncTree_,e),l=Am(o,a,r),c=ah(t),u=Im(t.serverSyncTree_,e,l,c,!0);Ha(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,p)=>{const _=d==="ok";_||at("set at "+e+" failed: "+d);const y=Nn(t.serverSyncTree_,c,!_);Rt(t.eventQueue_,e,y),kc(t,i,d,p)});const h=ch(t,e);oi(t,h),Rt(t.eventQueue_,h,[])}function uA(t,e,n,s){jr(t,"update",{path:e.toString(),value:n});let i=!0;const r=ja(t),o={};if(Ge(n,(a,l)=>{i=!1,o[a]=Sm(Se(e,a),Fe(l),t.serverSyncTree_,r)}),i)ze("update() called with empty data.  Don't do anything."),kc(t,s,"ok",void 0);else{const a=ah(t),l=NS(t.serverSyncTree_,e,o,a);Ha(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const h=c==="ok";h||at("update at "+e+" failed: "+c);const d=Nn(t.serverSyncTree_,a,!h),p=d.length>0?oi(t,e):e;Rt(t.eventQueue_,p,d),kc(t,s,c,u)}),Ge(n,c=>{const u=ch(t,Se(e,c));oi(t,u)}),Rt(t.eventQueue_,e,[])}}function hA(t){jr(t,"onDisconnectEvents");const e=ja(t),n=qo();wc(t.onDisconnect_,oe(),(i,r)=>{const o=Sm(i,r,t.serverSyncTree_,e);am(n,i,o)});let s=[];wc(n,oe(),(i,r)=>{s=s.concat($r(t.serverSyncTree_,i,r));const o=ch(t,i);oi(t,o)}),t.onDisconnect_=qo(),Rt(t.eventQueue_,oe(),s)}function dA(t,e,n){let s;Q(e._path)===".info"?s=Sc(t.infoSyncTree_,e,n):s=Sc(t.serverSyncTree_,e,n),Lm(t.eventQueue_,e._path,s)}function Df(t,e,n){let s;Q(e._path)===".info"?s=ta(t.infoSyncTree_,e,n):s=ta(t.serverSyncTree_,e,n),Lm(t.eventQueue_,e._path,s)}function fA(t){t.persistentConnection_&&t.persistentConnection_.interrupt(sA)}function jr(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ze(n,...e)}function kc(t,e,n,s){e&&Ii(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Bm(t,e,n){return Xu(t.serverSyncTree_,e,n)||H.EMPTY_NODE}function lh(t,e=t.transactionQueueTree_){if(e||Wa(t,e),bi(e)){const n=Hm(t,e);S(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&pA(t,Hr(e),n)}else Pm(e)&&Ba(e,n=>{lh(t,n)})}function pA(t,e,n){const s=n.map(c=>c.currentWriteId),i=Bm(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];S(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=rt(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{jr(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Nn(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Wa(t,ih(t.transactionQueueTree_,e)),lh(t,t.transactionQueueTree_),Rt(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Ii(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{at("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}oi(t,e)}},o)}function oi(t,e){const n=$m(t,e),s=Hr(n),i=Hm(t,n);return gA(t,i,s),s}function gA(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=rt(n,l.path);let u=!1,h;if(S(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(Nn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=iA)u=!0,h="maxretry",i=i.concat(Nn(t.serverSyncTree_,l.currentWriteId,!0));else{const d=Bm(t,l.path,o);l.currentInputSnapshot=d;const p=e[a].update(d.val());if(p!==void 0){$a("transaction failed: Data returned ",p,l.path);let _=Fe(p);typeof p=="object"&&p!=null&&sn(p,".priority")||(_=_.updatePriority(d.getPriority()));const b=l.currentWriteId,R=ja(t),v=Am(_,d,R);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=v,l.currentWriteId=ah(t),o.splice(o.indexOf(b),1),i=i.concat(Im(t.serverSyncTree_,l.path,v,l.currentWriteId,l.applyLocally)),i=i.concat(Nn(t.serverSyncTree_,b,!0))}else u=!0,h="nodata",i=i.concat(Nn(t.serverSyncTree_,l.currentWriteId,!0))}Rt(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Wa(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Ii(s[a]);lh(t,t.transactionQueueTree_)}function $m(t,e){let n,s=t.transactionQueueTree_;for(n=Q(e);n!==null&&bi(s)===void 0;)s=ih(s,n),e=ye(e),n=Q(e);return s}function Hm(t,e){const n=[];return jm(t,e,n),n.sort((s,i)=>s.order-i.order),n}function jm(t,e,n){const s=bi(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Ba(e,i=>{jm(t,i,n)})}function Wa(t,e){const n=bi(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,km(e,n.length>0?n:void 0)}Ba(e,s=>{Wa(t,s)})}function ch(t,e){const n=Hr($m(t,e)),s=ih(t.transactionQueueTree_,e);return zS(s,i=>{kl(t,i)}),kl(t,s),Nm(s,i=>{kl(t,i)}),n}function kl(t,e){const n=bi(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(S(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(S(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Nn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?km(e,void 0):n.length=r+1,Rt(t.eventQueue_,Hr(e),i);for(let o=0;o<s.length;o++)Ii(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function mA(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):at(`Invalid query segment '${n}' in query '${t}'`)}return e}const Mf=function(t,e){const n=yA(t),s=n.namespace;n.domain==="firebase.com"&&gn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&gn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||A0();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new V_(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new de(n.pathString)}},yA=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=_A(t.substring(u,h)));const d=mA(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const _=e.indexOf(".");s=e.substring(0,_).toLowerCase(),n=e.substring(_+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",vA=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=Lf.charAt(n%64),n=Math.floor(n/64);S(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Lf.charAt(e[i]);return S(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ue(this.snapshot.exportVal())}}class Vm{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return S(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return Z(this._path)?null:Fu(this._path)}get ref(){return new rn(this._repo,this._path)}get _queryIdentifier(){const e=Ef(this._queryParams),n=xu(e);return n==="{}"?"default":n}get _queryObject(){return Ef(this._queryParams)}isEqual(e){if(e=De(e),!(e instanceof uh))return!1;const n=this._repo===e._repo,s=Uu(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+hR(this._path)}}class rn extends uh{constructor(e,n){super(e,n,new ju,!1)}get parent(){const e=Z_(this._path);return e===null?null:new rn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ai{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new de(e),s=li(this.ref,e);return new ai(this._node.getChild(n),s,ke)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new ai(i,li(this.ref,s),ke)))}hasChild(e){const n=new de(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Xn(t,e){return t=De(t),t._checkNotDeleted("ref"),e!==void 0?li(t._root,e):t._root}function li(t,e){return t=De(t),Q(t._path)===null?ZS("child","path",e,!1):Dm("child","path",e,!1),new rn(t._repo,Se(t._path,e))}function Ff(t,e){t=De(t),Mm("push",t._path),xm("push",e,t._path,!0);const n=Um(t._repo),s=vA(n),i=li(t,s),r=li(t,s);let o;return e!=null?o=EA(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function EA(t,e){t=De(t),Mm("set",t._path),xm("set",e,t._path,!1);const n=new ds;return cA(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function wA(t,e){JS("update",e,t._path,!1);const n=new ds;return uA(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Km(t){t=De(t);const e=new zm(()=>{}),n=new Va(e);return lA(t._repo,t,n).then(s=>new ai(s,new rn(t._repo,t._path),t._queryParams.getIndex()))}class Va{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Wm("value",this,new ai(e.snapshotNode,new rn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Vm(this,e,n):null}matches(e){return e instanceof Va?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class hh{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Vm(this,e,n):null}createEvent(e,n){S(e.childName!=null,"Child events should have a childName.");const s=li(new rn(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new Wm(e.type,this,new ai(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof hh?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Wr(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=n,c=(u,h)=>{Df(t._repo,t,a),l(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new zm(n,r||void 0),a=e==="value"?new Va(o):new hh(e,o);return dA(t._repo,t,a),()=>Df(t._repo,t,a)}function qm(t,e,n,s){return Wr(t,"value",e,n,s)}function IA(t,e,n,s){return Wr(t,"child_added",e,n,s)}function TA(t,e,n,s){return Wr(t,"child_changed",e,n,s)}function bA(t,e,n,s){return Wr(t,"child_moved",e,n,s)}function CA(t,e,n,s){return Wr(t,"child_removed",e,n,s)}TS(rn);AS(rn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA="FIREBASE_DATABASE_EMULATOR_HOST",Pc={};let SA=!1;function AA(t,e,n,s){t.repoInfo_=new V_(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function kA(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||gn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ze("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Mf(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[RA]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Mf(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new zs(zs.OWNER):new B0(t.name,t.options,e);eA("Invalid Firebase Database URL",o),Z(o.path)||gn("Database URL must point to the root of a Firebase Database (not including a child path).");const h=NA(a,t,u,new U0(t.name,n));return new OA(h,t)}function PA(t,e){const n=Pc[e];(!n||n[t.key]!==t)&&gn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),fA(t),delete n[t.key]}function NA(t,e,n,s){let i=Pc[e.name];i||(i={},Pc[e.name]=i);let r=i[t.toURLString()];return r&&gn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new rA(t,SA,n,s),i[t.toURLString()]=r,r}class OA{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(oA(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new rn(this._repo,oe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(PA(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&gn("Cannot call "+e+" on a deleted database.")}}function xA(t=Pa(),e){const n=ka(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Bg("database");s&&DA(n,...s)}return n}function DA(t,e,n,s={}){t=De(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&gn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&gn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new zs(zs.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Hg(s.mockUserToken,t.app.options.projectId);r=new zs(o)}AA(i,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MA(t){T0(ws),en(new Bt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return kA(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Et(nf,sf,t),Et(nf,sf,"esm2017")}dn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};dn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};MA();var LA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L,dh=dh||{},z=LA||self;function na(){}function za(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Vr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function FA(t){return Object.prototype.hasOwnProperty.call(t,Pl)&&t[Pl]||(t[Pl]=++UA)}var Pl="closure_uid_"+(1e9*Math.random()>>>0),UA=0;function BA(t,e,n){return t.call.apply(t.bind,arguments)}function $A(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Je(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Je=BA:Je=$A,Je.apply(null,arguments)}function fo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ye(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function zn(){this.s=this.s,this.o=this.o}var HA=0;zn.prototype.s=!1;zn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),HA!=0)&&FA(this)};zn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Gm=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function fh(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Uf(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(za(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function Ze(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ze.prototype.h=function(){this.defaultPrevented=!0};var jA=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{z.addEventListener("test",na,e),z.removeEventListener("test",na,e)}catch{}return t}();function sa(t){return/^[\s\xa0]*$/.test(t)}var Bf=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Nl(t,e){return t<e?-1:t>e?1:0}function Ka(){var t=z.navigator;return t&&(t=t.userAgent)?t:""}function zt(t){return Ka().indexOf(t)!=-1}function ph(t){return ph[" "](t),t}ph[" "]=na;function WA(t){var e=KA;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var VA=zt("Opera"),Ir=zt("Trident")||zt("MSIE"),Ym=zt("Edge"),Nc=Ym||Ir,Xm=zt("Gecko")&&!(Ka().toLowerCase().indexOf("webkit")!=-1&&!zt("Edge"))&&!(zt("Trident")||zt("MSIE"))&&!zt("Edge"),zA=Ka().toLowerCase().indexOf("webkit")!=-1&&!zt("Edge");function Qm(){var t=z.document;return t?t.documentMode:void 0}var Oc;e:{var Ol="",xl=function(){var t=Ka();if(Xm)return/rv:([^\);]+)(\)|;)/.exec(t);if(Ym)return/Edge\/([\d\.]+)/.exec(t);if(Ir)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(zA)return/WebKit\/(\S+)/.exec(t);if(VA)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(xl&&(Ol=xl?xl[1]:""),Ir){var Dl=Qm();if(Dl!=null&&Dl>parseFloat(Ol)){Oc=String(Dl);break e}}Oc=Ol}var KA={};function qA(){return WA(function(){let t=0;const e=Bf(String(Oc)).split("."),n=Bf("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Nl(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Nl(i[2].length==0,r[2].length==0)||Nl(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}z.document&&Ir&&Qm();function Tr(t,e){if(Ze.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Xm){e:{try{ph(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:GA[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Tr.X.h.call(this)}}Ye(Tr,Ze);var GA={2:"touch",3:"pen",4:"mouse"};Tr.prototype.h=function(){Tr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var zr="closure_listenable_"+(1e6*Math.random()|0),YA=0;function XA(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++YA,this.ba=this.ea=!1}function qa(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function gh(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Jm(t){const e={};for(const n in t)e[n]=t[n];return e}const $f="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Zm(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<$f.length;r++)n=$f[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Ga(t){this.src=t,this.g={},this.h=0}Ga.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Dc(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new XA(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function xc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=Gm(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(qa(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Dc(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var _h="closure_lm_"+(1e6*Math.random()|0),Ml={};function ey(t,e,n,s,i){if(s&&s.once)return ny(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)ey(t,e[r],n,s,i);return null}return n=vh(n),t&&t[zr]?t.N(e,n,Vr(s)?!!s.capture:!!s,i):ty(t,e,n,!1,s,i)}function ty(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Vr(i)?!!i.capture:!!i,a=yh(t);if(a||(t[_h]=a=new Ga(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=QA(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)jA||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(iy(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function QA(){function t(n){return e.call(t.src,t.listener,n)}const e=JA;return t}function ny(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)ny(t,e[r],n,s,i);return null}return n=vh(n),t&&t[zr]?t.O(e,n,Vr(s)?!!s.capture:!!s,i):ty(t,e,n,!0,s,i)}function sy(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)sy(t,e[r],n,s,i);else s=Vr(s)?!!s.capture:!!s,n=vh(n),t&&t[zr]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Dc(r,n,s,i),-1<n&&(qa(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=yh(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Dc(e,n,s,i)),(n=-1<t?e[t]:null)&&mh(n))}function mh(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[zr])xc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(iy(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=yh(e))?(xc(n,t),n.h==0&&(n.src=null,e[_h]=null)):qa(t)}}}function iy(t){return t in Ml?Ml[t]:Ml[t]="on"+t}function JA(t,e){if(t.ba)t=!0;else{e=new Tr(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&mh(t),t=n.call(s,e)}return t}function yh(t){return t=t[_h],t instanceof Ga?t:null}var Ll="__closure_events_fn_"+(1e9*Math.random()>>>0);function vh(t){return typeof t=="function"?t:(t[Ll]||(t[Ll]=function(e){return t.handleEvent(e)}),t[Ll])}function je(){zn.call(this),this.i=new Ga(this),this.P=this,this.I=null}Ye(je,zn);je.prototype[zr]=!0;je.prototype.removeEventListener=function(t,e,n,s){sy(this,t,e,n,s)};function qe(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Ze(e,t);else if(e instanceof Ze)e.target=e.target||t;else{var i=e;e=new Ze(s,t),Zm(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=po(o,s,!0,e)&&i}if(o=e.g=t,i=po(o,s,!0,e)&&i,i=po(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=po(o,s,!1,e)&&i}je.prototype.M=function(){if(je.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)qa(n[s]);delete t.g[e],t.h--}}this.I=null};je.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};je.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function po(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&xc(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var Eh=z.JSON.stringify;function ZA(){var t=ay;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class ek{constructor(){this.h=this.g=null}add(e,n){const s=ry.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var ry=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new tk,t=>t.reset());class tk{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function nk(t){z.setTimeout(()=>{throw t},0)}function oy(t,e){Mc||sk(),Lc||(Mc(),Lc=!0),ay.add(t,e)}var Mc;function sk(){var t=z.Promise.resolve(void 0);Mc=function(){t.then(ik)}}var Lc=!1,ay=new ek;function ik(){for(var t;t=ZA();){try{t.h.call(t.g)}catch(n){nk(n)}var e=ry;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Lc=!1}function Ya(t,e){je.call(this),this.h=t||1,this.g=e||z,this.j=Je(this.lb,this),this.l=Date.now()}Ye(Ya,je);L=Ya.prototype;L.ca=!1;L.R=null;L.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),qe(this,"tick"),this.ca&&(wh(this),this.start()))}};L.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function wh(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}L.M=function(){Ya.X.M.call(this),wh(this),delete this.g};function Ih(t,e,n){if(typeof t=="function")n&&(t=Je(t,n));else if(t&&typeof t.handleEvent=="function")t=Je(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:z.setTimeout(t,e||0)}function ly(t){t.g=Ih(()=>{t.g=null,t.i&&(t.i=!1,ly(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class rk extends zn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:ly(this)}M(){super.M(),this.g&&(z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function br(t){zn.call(this),this.h=t,this.g={}}Ye(br,zn);var Hf=[];function cy(t,e,n,s){Array.isArray(n)||(n&&(Hf[0]=n.toString()),n=Hf);for(var i=0;i<n.length;i++){var r=ey(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function uy(t){gh(t.g,function(e,n){this.g.hasOwnProperty(n)&&mh(e)},t),t.g={}}br.prototype.M=function(){br.X.M.call(this),uy(this)};br.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Xa(){this.g=!0}Xa.prototype.Aa=function(){this.g=!1};function ok(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function ak(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function Ls(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+ck(t,n)+(s?" "+s:"")})}function lk(t,e){t.info(function(){return"TIMEOUT: "+e})}Xa.prototype.info=function(){};function ck(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Eh(n)}catch{return e}}var Ci={},jf=null;function Th(){return jf=jf||new je}Ci.Pa="serverreachability";function hy(t){Ze.call(this,Ci.Pa,t)}Ye(hy,Ze);function Cr(t){const e=Th();qe(e,new hy(e))}Ci.STAT_EVENT="statevent";function dy(t,e){Ze.call(this,Ci.STAT_EVENT,t),this.stat=e}Ye(dy,Ze);function ot(t){const e=Th();qe(e,new dy(e,t))}Ci.Qa="timingevent";function fy(t,e){Ze.call(this,Ci.Qa,t),this.size=e}Ye(fy,Ze);function Kr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return z.setTimeout(function(){t()},e)}var bh={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},uk={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Ch(){}Ch.prototype.h=null;function Wf(t){return t.h||(t.h=t.i())}function hk(){}var qr={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Rh(){Ze.call(this,"d")}Ye(Rh,Ze);function Sh(){Ze.call(this,"c")}Ye(Sh,Ze);var Fc;function Qa(){}Ye(Qa,Ch);Qa.prototype.g=function(){return new XMLHttpRequest};Qa.prototype.i=function(){return{}};Fc=new Qa;function Gr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new br(this),this.O=dk,t=Nc?125:void 0,this.T=new Ya(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new py}function py(){this.i=null,this.g="",this.h=!1}var dk=45e3,Uc={},ia={};L=Gr.prototype;L.setTimeout=function(t){this.O=t};function Bc(t,e,n){t.K=1,t.v=Za(_n(e)),t.s=n,t.P=!0,gy(t,null)}function gy(t,e){t.F=Date.now(),Yr(t),t.A=_n(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Ty(n.i,"t",s),t.C=0,n=t.l.H,t.h=new py,t.g=Vy(t.l,n?e:null,!t.s),0<t.N&&(t.L=new rk(Je(t.La,t,t.g),t.N)),cy(t.S,t.g,"readystatechange",t.ib),e=t.H?Jm(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Cr(),ok(t.j,t.u,t.A,t.m,t.U,t.s)}L.ib=function(t){t=t.target;const e=this.L;e&&hn(t)==3?e.l():this.La(t)};L.La=function(t){try{if(t==this.g)e:{const u=hn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Nc||this.g&&(this.h.h||this.g.fa()||qf(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Cr(3):Cr(2)),Ja(this);var n=this.g.aa();this.Y=n;t:if(_y(this)){var s=qf(this.g);t="";var i=s.length,r=hn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){rs(this),tr(this);var o="";break t}this.h.i=new z.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,ak(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!sa(a)){var c=a;break t}}c=null}if(n=c)Ls(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,$c(this,n);else{this.i=!1,this.o=3,ot(12),rs(this),tr(this);break e}}this.P?(my(this,u,o),Nc&&this.i&&u==3&&(cy(this.S,this.T,"tick",this.hb),this.T.start())):(Ls(this.j,this.m,o,null),$c(this,o)),u==4&&rs(this),this.i&&!this.I&&(u==4?$y(this.l,this):(this.i=!1,Yr(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ot(12)):(this.o=0,ot(13)),rs(this),tr(this)}}}catch{}finally{}};function _y(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function my(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=fk(t,n),i==ia){e==4&&(t.o=4,ot(14),s=!1),Ls(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Uc){t.o=4,ot(15),Ls(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Ls(t.j,t.m,i,null),$c(t,i);_y(t)&&i!=ia&&i!=Uc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ot(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Dh(e),e.K=!0,ot(11))):(Ls(t.j,t.m,n,"[Invalid Chunked Response]"),rs(t),tr(t))}L.hb=function(){if(this.g){var t=hn(this.g),e=this.g.fa();this.C<e.length&&(Ja(this),my(this,t,e),this.i&&t!=4&&Yr(this))}};function fk(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?ia:(n=Number(e.substring(n,s)),isNaN(n)?Uc:(s+=1,s+n>e.length?ia:(e=e.substr(s,n),t.C=s+n,e)))}L.cancel=function(){this.I=!0,rs(this)};function Yr(t){t.V=Date.now()+t.O,yy(t,t.O)}function yy(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Kr(Je(t.gb,t),e)}function Ja(t){t.B&&(z.clearTimeout(t.B),t.B=null)}L.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(lk(this.j,this.A),this.K!=2&&(Cr(),ot(17)),rs(this),this.o=2,tr(this)):yy(this,this.V-t)};function tr(t){t.l.G==0||t.I||$y(t.l,t)}function rs(t){Ja(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,wh(t.T),uy(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function $c(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Hc(n.h,t))){if(!t.J&&Hc(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)aa(n),sl(n);else break e;xh(n),ot(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Kr(Je(n.cb,n),6e3));if(1>=Ry(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else os(n,11)}else if((t.J||n.g==t)&&aa(n),!sa(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const u=c[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=c[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const _=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var r=s.h;r.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Ah(r,r.h),r.h=null))}if(s.D){const y=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(s.za=y,Ie(s.F,s.D,y))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Wy(s,s.H?s.ka:null,s.V),o.J){Sy(s.h,o);var a=o,l=s.J;l&&a.setTimeout(l),a.B&&(Ja(a),Yr(a)),s.g=o}else Uy(s);0<n.i.length&&il(n)}else c[0]!="stop"&&c[0]!="close"||os(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?os(n,7):Oh(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}Cr(4)}catch{}}function pk(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(za(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function gk(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(za(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function vy(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(za(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=gk(t),s=pk(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var Ey=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _k(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function us(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof us){this.h=e!==void 0?e:t.h,ra(this,t.j),this.s=t.s,this.g=t.g,oa(this,t.m),this.l=t.l,e=t.i;var n=new Rr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Vf(this,n),this.o=t.o}else t&&(n=String(t).match(Ey))?(this.h=!!e,ra(this,n[1]||"",!0),this.s=ji(n[2]||""),this.g=ji(n[3]||"",!0),oa(this,n[4]),this.l=ji(n[5]||"",!0),Vf(this,n[6]||"",!0),this.o=ji(n[7]||"")):(this.h=!!e,this.i=new Rr(null,this.h))}us.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Wi(e,zf,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Wi(e,zf,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Wi(n,n.charAt(0)=="/"?vk:yk,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Wi(n,wk)),t.join("")};function _n(t){return new us(t)}function ra(t,e,n){t.j=n?ji(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function oa(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Vf(t,e,n){e instanceof Rr?(t.i=e,Ik(t.i,t.h)):(n||(e=Wi(e,Ek)),t.i=new Rr(e,t.h))}function Ie(t,e,n){t.i.set(e,n)}function Za(t){return Ie(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ji(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Wi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,mk),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function mk(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var zf=/[#\/\?@]/g,yk=/[#\?:]/g,vk=/[#\?]/g,Ek=/[#\?@]/g,wk=/#/g;function Rr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Kn(t){t.g||(t.g=new Map,t.h=0,t.i&&_k(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}L=Rr.prototype;L.add=function(t,e){Kn(this),this.i=null,t=Ri(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function wy(t,e){Kn(t),e=Ri(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Iy(t,e){return Kn(t),e=Ri(t,e),t.g.has(e)}L.forEach=function(t,e){Kn(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};L.oa=function(){Kn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};L.W=function(t){Kn(this);let e=[];if(typeof t=="string")Iy(this,t)&&(e=e.concat(this.g.get(Ri(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};L.set=function(t,e){return Kn(this),this.i=null,t=Ri(this,t),Iy(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};L.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Ty(t,e,n){wy(t,e),0<n.length&&(t.i=null,t.g.set(Ri(t,e),fh(n)),t.h+=n.length)}L.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Ri(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Ik(t,e){e&&!t.j&&(Kn(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(wy(this,s),Ty(this,i,n))},t)),t.j=e}var Tk=class{constructor(t,e){this.h=t,this.g=e}};function by(t){this.l=t||bk,z.PerformanceNavigationTiming?(t=z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(z.g&&z.g.Ga&&z.g.Ga()&&z.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var bk=10;function Cy(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Ry(t){return t.h?1:t.g?t.g.size:0}function Hc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ah(t,e){t.g?t.g.add(e):t.h=e}function Sy(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}by.prototype.cancel=function(){if(this.i=Ay(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Ay(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return fh(t.i)}function kh(){}kh.prototype.stringify=function(t){return z.JSON.stringify(t,void 0)};kh.prototype.parse=function(t){return z.JSON.parse(t,void 0)};function Ck(){this.g=new kh}function Rk(t,e,n){const s=n||"";try{vy(t,function(i,r){let o=i;Vr(i)&&(o=Eh(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function Sk(t,e){const n=new Xa;if(z.Image){const s=new Image;s.onload=fo(go,n,s,"TestLoadImage: loaded",!0,e),s.onerror=fo(go,n,s,"TestLoadImage: error",!1,e),s.onabort=fo(go,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=fo(go,n,s,"TestLoadImage: timeout",!1,e),z.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function go(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function el(t){this.l=t.ac||null,this.j=t.jb||!1}Ye(el,Ch);el.prototype.g=function(){return new tl(this.l,this.j)};el.prototype.i=function(t){return function(){return t}}({});function tl(t,e){je.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Ph,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ye(tl,je);var Ph=0;L=tl.prototype;L.open=function(t,e){if(this.readyState!=Ph)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Sr(this)};L.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||z).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};L.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Xr(this)),this.readyState=Ph};L.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Sr(this)),this.g&&(this.readyState=3,Sr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ky(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function ky(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}L.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Xr(this):Sr(this),this.readyState==3&&ky(this)}};L.Va=function(t){this.g&&(this.response=this.responseText=t,Xr(this))};L.Ua=function(t){this.g&&(this.response=t,Xr(this))};L.ga=function(){this.g&&Xr(this)};function Xr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Sr(t)}L.setRequestHeader=function(t,e){this.v.append(t,e)};L.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};L.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Sr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(tl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Ak=z.JSON.parse;function xe(t){je.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Py,this.K=this.L=!1}Ye(xe,je);var Py="",kk=/^https?$/i,Pk=["POST","PUT"];L=xe.prototype;L.Ka=function(t){this.L=t};L.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Fc.g(),this.C=this.u?Wf(this.u):Wf(Fc),this.g.onreadystatechange=Je(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){Kf(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=z.FormData&&t instanceof z.FormData,!(0<=Gm(Pk,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{xy(this),0<this.B&&((this.K=Nk(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Je(this.qa,this)):this.A=Ih(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Kf(this,r)}};function Nk(t){return Ir&&qA()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}L.qa=function(){typeof dh<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,qe(this,"timeout"),this.abort(8))};function Kf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ny(t),nl(t)}function Ny(t){t.D||(t.D=!0,qe(t,"complete"),qe(t,"error"))}L.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,qe(this,"complete"),qe(this,"abort"),nl(this))};L.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),nl(this,!0)),xe.X.M.call(this)};L.Ha=function(){this.s||(this.F||this.v||this.l?Oy(this):this.fb())};L.fb=function(){Oy(this)};function Oy(t){if(t.h&&typeof dh<"u"&&(!t.C[1]||hn(t)!=4||t.aa()!=2)){if(t.v&&hn(t)==4)Ih(t.Ha,0,t);else if(qe(t,"readystatechange"),hn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(Ey)[1]||null;if(!i&&z.self&&z.self.location){var r=z.self.location.protocol;i=r.substr(0,r.length-1)}s=!kk.test(i?i.toLowerCase():"")}n=s}if(n)qe(t,"complete"),qe(t,"success");else{t.m=6;try{var o=2<hn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Ny(t)}}finally{nl(t)}}}}function nl(t,e){if(t.g){xy(t);const n=t.g,s=t.C[0]?na:null;t.g=null,t.C=null,e||qe(t,"ready");try{n.onreadystatechange=s}catch{}}}function xy(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(z.clearTimeout(t.A),t.A=null)}function hn(t){return t.g?t.g.readyState:0}L.aa=function(){try{return 2<hn(this)?this.g.status:-1}catch{return-1}};L.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};L.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Ak(e)}};function qf(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Py:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}L.Ea=function(){return this.m};L.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Dy(t){let e="";return gh(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Nh(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Dy(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ie(t,e,n))}function Di(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function My(t){this.Ca=0,this.i=[],this.j=new Xa,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Di("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Di("baseRetryDelayMs",5e3,t),this.bb=Di("retryDelaySeedMs",1e4,t),this.$a=Di("forwardChannelMaxRetries",2,t),this.ta=Di("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new by(t&&t.concurrentRequestLimit),this.Fa=new Ck,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}L=My.prototype;L.ma=8;L.G=1;function Oh(t){if(Ly(t),t.G==3){var e=t.U++,n=_n(t.F);Ie(n,"SID",t.I),Ie(n,"RID",e),Ie(n,"TYPE","terminate"),Qr(t,n),e=new Gr(t,t.j,e,void 0),e.K=2,e.v=Za(_n(n)),n=!1,z.navigator&&z.navigator.sendBeacon&&(n=z.navigator.sendBeacon(e.v.toString(),"")),!n&&z.Image&&(new Image().src=e.v,n=!0),n||(e.g=Vy(e.l,null),e.g.da(e.v)),e.F=Date.now(),Yr(e)}jy(t)}function sl(t){t.g&&(Dh(t),t.g.cancel(),t.g=null)}function Ly(t){sl(t),t.u&&(z.clearTimeout(t.u),t.u=null),aa(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&z.clearTimeout(t.m),t.m=null)}function il(t){Cy(t.h)||t.m||(t.m=!0,oy(t.Ja,t),t.C=0)}function Ok(t,e){return Ry(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Kr(Je(t.Ja,t,e),Hy(t,t.C)),t.C++,!0)}L.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Gr(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=Jm(r),Zm(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Fy(this,i,e),n=_n(this.F),Ie(n,"RID",t),Ie(n,"CVER",22),this.D&&Ie(n,"X-HTTP-Session-Id",this.D),Qr(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(Dy(r)))+"&"+e:this.o&&Nh(n,this.o,r)),Ah(this.h,i),this.Ya&&Ie(n,"TYPE","init"),this.O?(Ie(n,"$req",e),Ie(n,"SID","null"),i.Z=!0,Bc(i,n,null)):Bc(i,n,e),this.G=2}}else this.G==3&&(t?Gf(this,t):this.i.length==0||Cy(this.h)||Gf(this))};function Gf(t,e){var n;e?n=e.m:n=t.U++;const s=_n(t.F);Ie(s,"SID",t.I),Ie(s,"RID",n),Ie(s,"AID",t.T),Qr(t,s),t.o&&t.s&&Nh(s,t.o,t.s),n=new Gr(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Fy(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Ah(t.h,n),Bc(n,s,e)}function Qr(t,e){t.ia&&gh(t.ia,function(n,s){Ie(e,s,n)}),t.l&&vy({},function(n,s){Ie(e,s,n)})}function Fy(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Je(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const u=i[l].g;if(c-=r,0>c)r=Math.max(0,i[l].h-100),a=!1;else try{Rk(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Uy(t){t.g||t.u||(t.Z=1,oy(t.Ia,t),t.A=0)}function xh(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Kr(Je(t.Ia,t),Hy(t,t.A)),t.A++,!0)}L.Ia=function(){if(this.u=null,By(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Kr(Je(this.eb,this),t)}};L.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ot(10),sl(this),By(this))};function Dh(t){t.B!=null&&(z.clearTimeout(t.B),t.B=null)}function By(t){t.g=new Gr(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=_n(t.sa);Ie(e,"RID","rpc"),Ie(e,"SID",t.I),Ie(e,"CI",t.L?"0":"1"),Ie(e,"AID",t.T),Ie(e,"TYPE","xmlhttp"),Qr(t,e),t.o&&t.s&&Nh(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Za(_n(e)),n.s=null,n.P=!0,gy(n,t)}L.cb=function(){this.v!=null&&(this.v=null,sl(this),xh(this),ot(19))};function aa(t){t.v!=null&&(z.clearTimeout(t.v),t.v=null)}function $y(t,e){var n=null;if(t.g==e){aa(t),Dh(t),t.g=null;var s=2}else if(Hc(t.h,e))n=e.D,Sy(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Th(),qe(s,new fy(s,n)),il(t)}else Uy(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&Ok(t,e)||s==2&&xh(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:os(t,5);break;case 4:os(t,10);break;case 3:os(t,6);break;default:os(t,2)}}}function Hy(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function os(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Je(t.kb,t);n||(n=new us("//www.google.com/images/cleardot.gif"),z.location&&z.location.protocol=="http"||ra(n,"https"),Za(n)),Sk(n.toString(),s)}else ot(2);t.G=0,t.l&&t.l.va(e),jy(t),Ly(t)}L.kb=function(t){t?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function jy(t){if(t.G=0,t.la=[],t.l){const e=Ay(t.h);(e.length!=0||t.i.length!=0)&&(Uf(t.la,e),Uf(t.la,t.i),t.h.i.length=0,fh(t.i),t.i.length=0),t.l.ua()}}function Wy(t,e,n){var s=n instanceof us?_n(n):new us(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),oa(s,s.m);else{var i=z.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new us(null,void 0);s&&ra(r,s),e&&(r.g=e),i&&oa(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&Ie(s,n,e),Ie(s,"VER",t.ma),Qr(t,s),s}function Vy(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new xe(new el({jb:!0})):new xe(t.ra),e.Ka(t.H),e}function zy(){}L=zy.prototype;L.xa=function(){};L.wa=function(){};L.va=function(){};L.ua=function(){};L.Ra=function(){};function St(t,e){je.call(this),this.g=new My(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!sa(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!sa(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Si(this)}Ye(St,je);St.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ot(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Wy(t,null,t.V),il(t)};St.prototype.close=function(){Oh(this.g)};St.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Eh(t),t=n);e.i.push(new Tk(e.ab++,t)),e.G==3&&il(e)};St.prototype.M=function(){this.g.l=null,delete this.j,Oh(this.g),delete this.g,St.X.M.call(this)};function Ky(t){Rh.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ye(Ky,Rh);function qy(){Sh.call(this),this.status=1}Ye(qy,Sh);function Si(t){this.g=t}Ye(Si,zy);Si.prototype.xa=function(){qe(this.g,"a")};Si.prototype.wa=function(t){qe(this.g,new Ky(t))};Si.prototype.va=function(t){qe(this.g,new qy)};Si.prototype.ua=function(){qe(this.g,"b")};St.prototype.send=St.prototype.u;St.prototype.open=St.prototype.m;St.prototype.close=St.prototype.close;bh.NO_ERROR=0;bh.TIMEOUT=8;bh.HTTP_ERROR=6;uk.COMPLETE="complete";hk.EventType=qr;qr.OPEN="a";qr.CLOSE="b";qr.ERROR="c";qr.MESSAGE="d";je.prototype.listen=je.prototype.N;xe.prototype.listenOnce=xe.prototype.O;xe.prototype.getLastError=xe.prototype.Oa;xe.prototype.getLastErrorCode=xe.prototype.Ea;xe.prototype.getStatus=xe.prototype.aa;xe.prototype.getResponseJson=xe.prototype.Sa;xe.prototype.getResponseText=xe.prototype.fa;xe.prototype.send=xe.prototype.da;xe.prototype.setWithCredentials=xe.prototype.Ka;const Yf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ht.UNAUTHENTICATED=new ht(null),ht.GOOGLE_CREDENTIALS=new ht("google-credentials-uid"),ht.FIRST_PARTY=new ht("first-party-uid"),ht.MOCK_USER=new ht("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rl="9.17.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la=new Pr("@firebase/firestore");function mt(t,...e){if(la.logLevel<=le.DEBUG){const n=e.map(Gy);la.debug(`Firestore (${rl}): ${t}`,...n)}}function Mh(t,...e){if(la.logLevel<=le.ERROR){const n=e.map(Gy);la.error(`Firestore (${rl}): ${t}`,...n)}}function Gy(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yy(t="Unexpected state"){const e=`FIRESTORE (${rl}) INTERNAL ASSERTION FAILED: `+t;throw Mh(e),new Error(e)}function ca(t,e){t||Yy()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Xt extends nn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Dk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ht.UNAUTHENTICATED))}shutdown(){}}class Mk{constructor(e){this.t=e,this.currentUser=ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new qs;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new qs,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{mt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(mt("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new qs)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(mt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ca(typeof s.accessToken=="string"),new xk(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ca(e===null||typeof e=="string"),new ht(e)}}class Lk{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=ht.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(ca(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Fk{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new Lk(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(ht.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Uk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Bk{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&mt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,mt("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{mt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):mt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ca(typeof n.token=="string"),this.A=n.token,new Uk(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $k(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=$k(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function Xy(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(e,n,s,i,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class ua{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ua("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ua&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xf,ne;(ne=Xf||(Xf={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";function Fl(){return typeof document<"u"?document:null}class Wk{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-s);i>0&&mt("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new qs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new Lh(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Xt(Yt.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vk(t,e){if(Mh("AsyncQueue",`${e}: ${t}`),Xy(t))return new Xt(Yt.UNAVAILABLE,`${e}: ${t}`);throw t}function zk(t,e,n,s){if(e===!0&&s===!0)throw new Xt(Yt.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf=new Map;class Jf{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new Xt(Yt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Xt(Yt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,zk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Jf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Xt(Yt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Xt(Yt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Jf(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Dk;switch(n.type){case"gapi":const s=n.client;return new Fk(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Xt(Yt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Qf.get(e);n&&(mt("ComponentProvider","Removing Datastore"),Qf.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qk{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=ht.UNAUTHENTICATED,this.clientId=Hk.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{mt("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(mt("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Xt(Yt.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Vk(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}class Gk{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Wk(this,"async_queue_retry"),this.Wc=()=>{const n=Fl();n&&mt("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Fl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=Fl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new qs;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!Xy(e))throw e;mt("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Mh("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=Lh.createAndSchedule(this,e,n,s,r=>this.Yc(r));return this.Uc.push(i),i}zc(){this.Kc&&Yy()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}class Yk extends Kk{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new Gk,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Xk(this),this._firestoreClient.terminate()}}function Xk(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new jk(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new qk(t._authCredentials,t._appCheckCredentials,t._queue,s)}(function(t,e=!0){(function(n){rl=n})(ws),en(new Bt("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new Yk(new Mk(n.getProvider("auth-internal")),new Bk(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new Xt(Yt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ua(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Et(Yf,"3.8.3",t),Et(Yf,"3.8.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy="firebasestorage.googleapis.com",Jy="storageBucket",Qk=2*60*1e3,Jk=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne extends nn{constructor(e,n,s=0){super(Ul(e),`Firebase Storage: ${n} (${Ul(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ne.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ul(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Pe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Pe||(Pe={}));function Ul(t){return"storage/"+t}function Fh(){const t="An unknown error occurred, please check the error payload for server response.";return new Ne(Pe.UNKNOWN,t)}function Zk(t){return new Ne(Pe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function eP(t){return new Ne(Pe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function tP(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ne(Pe.UNAUTHENTICATED,t)}function nP(){return new Ne(Pe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function sP(t){return new Ne(Pe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function iP(){return new Ne(Pe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function rP(){return new Ne(Pe.CANCELED,"User canceled the upload/download.")}function oP(t){return new Ne(Pe.INVALID_URL,"Invalid URL '"+t+"'.")}function aP(t){return new Ne(Pe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function lP(){return new Ne(Pe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Jy+"' property when initializing the app?")}function cP(){return new Ne(Pe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function uP(){return new Ne(Pe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function hP(t){return new Ne(Pe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function jc(t){return new Ne(Pe.INVALID_ARGUMENT,t)}function Zy(){return new Ne(Pe.APP_DELETED,"The Firebase app was deleted.")}function dP(t){return new Ne(Pe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function nr(t,e){return new Ne(Pe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Mi(t){throw new Ne(Pe.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=yt.makeFromUrl(e,n)}catch{return new yt(e,"")}if(s.path==="")return s;throw aP(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(x){x.path_=decodeURIComponent(x.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),_={bucket:1,path:3},y=n===Qy?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",R=new RegExp(`^https?://${y}/${i}/${b}`,"i"),I=[{regex:a,indices:l,postModify:r},{regex:p,indices:_,postModify:c},{regex:R,indices:{bucket:1,path:2},postModify:c}];for(let x=0;x<I.length;x++){const U=I[x],Y=U.regex.exec(e);if(Y){const V=Y[U.indices.bucket];let j=Y[U.indices.path];j||(j=""),s=new yt(V,j),U.postModify(s);break}}if(s==null)throw oP(e);return s}}class fP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pP(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...b){c||(c=!0,e.apply(null,b))}function h(b){i=setTimeout(()=>{i=null,t(p,l())},b)}function d(){r&&clearTimeout(r)}function p(b,...R){if(c){d();return}if(b){d(),u.call(null,b,...R);return}if(l()||o){d(),u.call(null,b,...R);return}s<64&&(s*=2);let I;a===1?(a=2,I=0):I=(s+Math.random())*1e3,h(I)}let _=!1;function y(b){_||(_=!0,d(),!c&&(i!==null?(b||(a=2),clearTimeout(i),h(0)):b||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,y(!0)},n),y}function gP(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _P(t){return t!==void 0}function mP(t){return typeof t=="object"&&!Array.isArray(t)}function Uh(t){return typeof t=="string"||t instanceof String}function Zf(t){return Bh()&&t instanceof Blob}function Bh(){return typeof Blob<"u"&&!_I()}function ep(t,e,n,s){if(s<e)throw jc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw jc(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function ev(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var hs;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(hs||(hs={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yP(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP{constructor(e,n,s,i,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,_)=>{this.resolve_=p,this.reject_=_,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new _o(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===hs.NO_ERROR,l=r.getStatus();if(!a||yP(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===hs.ABORT;s(!1,new _o(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new _o(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());_P(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=Fh();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Zy():rP();o(l)}else{const l=iP();o(l)}};this.canceled_?n(!1,new _o(!1,null,!0)):this.backoffId_=pP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&gP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class _o{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function EP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function wP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function IP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function TP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function bP(t,e,n,s,i,r,o=!0){const a=ev(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return IP(c,e),EP(c,n),wP(c,r),TP(c,s),new vP(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function RP(...t){const e=CP();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(Bh())return new Blob(t);throw new Ne(Pe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function SP(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AP(t){if(typeof atob>"u")throw hP("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Bl{constructor(e,n){this.data=e,this.contentType=n||null}}function kP(t,e){switch(t){case Kt.RAW:return new Bl(tv(e));case Kt.BASE64:case Kt.BASE64URL:return new Bl(nv(t,e));case Kt.DATA_URL:return new Bl(NP(e),OP(e))}throw Fh()}function tv(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const r=s,o=t.charCodeAt(++n);s=65536|(r&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function PP(t){let e;try{e=decodeURIComponent(t)}catch{throw nr(Kt.DATA_URL,"Malformed data URL.")}return tv(e)}function nv(t,e){switch(t){case Kt.BASE64:{const i=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(i||r)throw nr(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Kt.BASE64URL:{const i=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(i||r)throw nr(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=AP(e)}catch(i){throw i.message.includes("polyfill")?i:nr(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}class sv{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw nr(Kt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=xP(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function NP(t){const e=new sv(t);return e.base64?nv(Kt.BASE64,e.rest):PP(e.rest)}function OP(t){return new sv(t).contentType}function xP(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e,n){let s=0,i="";Zf(e)?(this.data_=e,s=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Zf(this.data_)){const s=this.data_,i=SP(s,e,n);return i===null?null:new Pn(i)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new Pn(s,!0)}}static getBlob(...e){if(Bh()){const n=e.map(s=>s instanceof Pn?s.data_:s);return new Pn(RP.apply(null,n))}else{const n=e.map(o=>Uh(o)?kP(Kt.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const i=new Uint8Array(s);let r=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[r++]=o[a]}),new Pn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iv(t){let e;try{e=JSON.parse(t)}catch{return null}return mP(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function MP(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function rv(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LP(t,e){return e}class st{constructor(e,n,s,i){this.server=e,this.local=n||e,this.writable=!!s,this.xform=i||LP}}let mo=null;function FP(t){return!Uh(t)||t.length<2?t:rv(t)}function ov(){if(mo)return mo;const t=[];t.push(new st("bucket")),t.push(new st("generation")),t.push(new st("metageneration")),t.push(new st("name","fullPath",!0));function e(r,o){return FP(o)}const n=new st("name");n.xform=e,t.push(n);function s(r,o){return o!==void 0?Number(o):o}const i=new st("size");return i.xform=s,t.push(i),t.push(new st("timeCreated")),t.push(new st("updated")),t.push(new st("md5Hash",null,!0)),t.push(new st("cacheControl",null,!0)),t.push(new st("contentDisposition",null,!0)),t.push(new st("contentEncoding",null,!0)),t.push(new st("contentLanguage",null,!0)),t.push(new st("contentType",null,!0)),t.push(new st("metadata","customMetadata",!0)),mo=t,mo}function UP(t,e){function n(){const s=t.bucket,i=t.fullPath,r=new yt(s,i);return e._makeStorageReference(r)}Object.defineProperty(t,"ref",{get:n})}function BP(t,e,n){const s={};s.type="file";const i=n.length;for(let r=0;r<i;r++){const o=n[r];s[o.local]=o.xform(s,e[o.server])}return UP(s,t),s}function av(t,e,n){const s=iv(e);return s===null?null:BP(t,s,n)}function $P(t,e,n,s){const i=iv(e);if(i===null||!Uh(i.downloadTokens))return null;const r=i.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(c=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),p=$h(d,n,s),_=ev({alt:"media",token:c});return p+_})[0]}function HP(t,e){const n={},s=e.length;for(let i=0;i<s;i++){const r=e[i];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}class lv{constructor(e,n,s,i){this.url=e,this.method=n,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cv(t){if(!t)throw Fh()}function jP(t,e){function n(s,i){const r=av(t,i,e);return cv(r!==null),r}return n}function WP(t,e){function n(s,i){const r=av(t,i,e);return cv(r!==null),$P(r,i,t.host,t._protocol)}return n}function uv(t){function e(n,s){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=nP():i=tP():n.getStatus()===402?i=eP(t.bucket):n.getStatus()===403?i=sP(t.path):i=s,i.status=n.getStatus(),i.serverResponse=s.serverResponse,i}return e}function VP(t){const e=uv(t);function n(s,i){let r=e(s,i);return s.getStatus()===404&&(r=Zk(t.path)),r.serverResponse=i.serverResponse,r}return n}function zP(t,e,n){const s=e.fullServerUrl(),i=$h(s,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,a=new lv(i,r,WP(t,n),o);return a.errorHandler=VP(e),a}function KP(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function qP(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=KP(null,e)),s}function GP(t,e,n,s,i){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let I="";for(let x=0;x<2;x++)I=I+Math.random().toString().slice(2);return I}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=qP(e,s,i),u=HP(c,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,d=`\r
--`+l+"--",p=Pn.getBlob(h,s,d);if(p===null)throw cP();const _={name:c.fullPath},y=$h(r,t.host,t._protocol),b="POST",R=t.maxUploadRetryTime,v=new lv(y,b,jP(t,n),R);return v.urlParams=_,v.headers=o,v.body=p.uploadData(),v.errorHandler=uv(e),v}class YP{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=hs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=hs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=hs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,i){if(this.sent_)throw Mi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Mi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Mi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Mi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Mi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class XP extends YP{initXhr(){this.xhr_.responseType="text"}}function hv(){return new XP}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,n){this._service=e,n instanceof yt?this._location=n:this._location=yt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new vs(e,n)}get root(){const e=new yt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return rv(this._location.path)}get storage(){return this._service}get parent(){const e=DP(this._location.path);if(e===null)return null;const n=new yt(this._location.bucket,e);return new vs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw dP(e)}}function QP(t,e,n){t._throwIfRoot("uploadBytes");const s=GP(t.storage,t._location,ov(),new Pn(e,!0),n);return t.storage.makeRequestWithTokens(s,hv).then(i=>({metadata:i,ref:t}))}function JP(t){t._throwIfRoot("getDownloadURL");const e=zP(t.storage,t._location,ov());return t.storage.makeRequestWithTokens(e,hv).then(n=>{if(n===null)throw uP();return n})}function ZP(t,e){const n=MP(t._location.path,e),s=new yt(t._location.bucket,n);return new vs(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eN(t){return/^[A-Za-z]+:\/\//.test(t)}function tN(t,e){return new vs(t,e)}function dv(t,e){if(t instanceof Hh){const n=t;if(n._bucket==null)throw lP();const s=new vs(n,n._bucket);return e!=null?dv(s,e):s}else return e!==void 0?ZP(t,e):t}function nN(t,e){if(e&&eN(e)){if(t instanceof Hh)return tN(t,e);throw jc("To use ref(service, url), the first argument must be a Storage instance.")}else return dv(t,e)}function tp(t,e){const n=e==null?void 0:e[Jy];return n==null?null:yt.makeFromBucketSpec(n,t)}function sN(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:Hg(i,t.app.options.projectId))}class Hh{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=Qy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Qk,this._maxUploadRetryTime=Jk,this._requests=new Set,i!=null?this._bucket=yt.makeFromBucketSpec(i,this._host):this._bucket=tp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=yt.makeFromBucketSpec(this._url,e):this._bucket=tp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ep("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ep("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new vs(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new fP(Zy());{const o=bP(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const np="@firebase/storage",sp="0.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fv="storage";function iN(t,e,n){return t=De(t),QP(t,e,n)}function rN(t){return t=De(t),JP(t)}function ip(t,e){return t=De(t),nN(t,e)}function oN(t=Pa(),e){t=De(t);const s=ka(t,fv).getImmediate({identifier:e}),i=Bg("storage");return i&&aN(s,...i),s}function aN(t,e,n,s={}){sN(t,e,n,s)}function lN(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Hh(n,s,i,e,ws)}function cN(){en(new Bt(fv,lN,"PUBLIC").setMultipleInstances(!0)),Et(np,sp,""),Et(np,sp,"esm2017")}cN();const $l=new WeakMap;function pv(t,e){return $l.has(e)||$l.set(e,t||{f:{},r:{},s:{},u:{}}),$l.get(e)}function uN(t,e,n,s){if(!t)return n;const[i,r]=gv(t);if(!i)return n;const o=pv(void 0,s)[i]||{},a=e||r;return a&&a in o?o[a]:n}function hN(t,e,n,s){if(!t)return;const[i,r]=gv(t);if(!i)return;const o=pv(void 0,s)[i],a=e||r;if(a)return n.then(l=>{o[a]=l}).catch(wt),a}function gv(t){return p0(t)||g0(t)?["f",t.path]:_0(t)?["r",t.toString()]:m0(t)?["s",t.toString()]:[]}const Hl=new WeakMap;function dN(t,e,n){const s=Nu();Hl.has(s)||Hl.set(s,new Map);const i=Hl.get(s),r=hN(e,n,t,s);return r&&i.set(r,t),r?()=>i.delete(r):wt}function fN(t){if(!t.exists())return null;const e=t.val();return wi(e)?Object.defineProperty(e,"id",{value:t.key}):{$value:e,id:t.key}}function Li(t,e){for(let n=0;n<t.length;n++)if(t[n].id===e)return n;return-1}const jh={reset:!1,serialize:fN,wait:!0};function pN(t,e,n,s,i){const r=Object.assign({},jh,i);let o=wt;function a(l){const c=r.serialize(l);t.value=c,n(c)}return r.once?Km(e).then(a).catch(s):o=qm(e,a,s),l=>{if(o(),l){const c=typeof l=="function"?l():null;t.value=c}}}function gN(t,e,n,s,i){const r=Object.assign({},jh,i);let o=r.wait?[]:t;r.wait||(t.value=[]);let a=wt,l=wt,c=wt,u=wt,h=wt;return r.once?Km(e).then(d=>{const p=[];d.forEach(_=>{p.push(r.serialize(_))}),n(t.value=p)}).catch(s):(a=IA(e,(d,p)=>{const _=te(o),y=p?Li(_,p)+1:0;_.splice(y,0,r.serialize(d))},s),c=CA(e,d=>{const p=te(o);p.splice(Li(p,d.key),1)},s),l=TA(e,d=>{const p=te(o);p.splice(Li(p,d.key),1,r.serialize(d))},s),u=bA(e,(d,p)=>{const _=te(o),y=Li(_,d.key),b=_.splice(y,1)[0],R=p?Li(_,p)+1:0;_.splice(R,0,b)},s),h=qm(e,()=>{const d=te(o);r.wait&&(t.value=d,o=t),n(d),h()},s)),d=>{if(h(),a(),c(),l(),u(),d){const p=typeof d=="function"?d():[];t.value=p}}}function _v(t,e={},n=!1){let s=wt;const i=Object.assign({},jh,e),r=te(t),o=i.target||Ct();y0()&&(i.once=!0);const a=uN(r,i.ssrKey,o.value,Nu());o.value=a;let c=!(n?(a||[]).length>0:a!==void 0);const u=Ct(),h=Ct(!1),d=zp(),p=nu();let _=wt;function y(){const v=te(t),I=new Promise((x,U)=>{if(s(i.reset),!v)return s=wt,x(null);h.value=c,c=!0,Array.isArray(o.value)?s=gN(o,v,x,U,i):s=pN(o,v,x,U,i)}).catch(x=>{throw d.value===I&&(u.value=x),x}).finally(()=>{d.value===I&&(h.value=!1)});d.value=I}let b=wt;Ae(t)&&(b=Hs(t,y)),y(),r&&(_=dN(d.value,r)),p&&(Pp(R),kr()&&rg(()=>d.value));function R(v=i.reset){b(),_(),s(v)}return Object.defineProperties(o,{data:{get:()=>o},error:{get:()=>u},pending:{get:()=>h},promise:{get:()=>d},stop:{get:()=>R}})}function jl(t,e){const n=Ct([]);return _v(t,{target:n,...e},!0)}function _N(t,e){const n=Ct();return _v(t,{target:n,...e})}function mN(t){return(e,n)=>{const s=v0(e,n).run(()=>Ct(t));E0.set(e,s),I0(s,e)}}function yN(t,{firebaseApp:e,modules:n=[]}){t.provide(k_,e);for(const s of n)t.use(s.bind(null,e))}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const xs=typeof window<"u";function vN(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ae=Object.assign;function Wl(t,e){const n={};for(const s in e){const i=e[s];n[s]=Ht(i)?i.map(t):t(i)}return n}const sr=()=>{},Ht=Array.isArray,EN=/\/$/,wN=t=>t.replace(EN,"");function Vl(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=CN(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function IN(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function rp(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function TN(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&ci(e.matched[s],n.matched[i])&&mv(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ci(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function mv(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!bN(t[n],e[n]))return!1;return!0}function bN(t,e){return Ht(t)?op(t,e):Ht(e)?op(e,t):t===e}function op(t,e){return Ht(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function CN(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var Ar;(function(t){t.pop="pop",t.push="push"})(Ar||(Ar={}));var ir;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ir||(ir={}));function RN(t){if(!t)if(xs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),wN(t)}const SN=/^[^#]+#/;function AN(t,e){return t.replace(SN,"#")+e}function kN(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const ol=()=>({left:window.pageXOffset,top:window.pageYOffset});function PN(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=kN(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function ap(t,e){return(history.state?history.state.position-e:-1)+t}const Wc=new Map;function NN(t,e){Wc.set(t,e)}function ON(t){const e=Wc.get(t);return Wc.delete(t),e}let xN=()=>location.protocol+"//"+location.host;function yv(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),rp(l,"")}return rp(n,t)+s+i}function DN(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const p=yv(t,location),_=n.value,y=e.value;let b=0;if(d){if(n.value=p,e.value=d,o&&o===_){o=null;return}b=y?d.position-y.position:0}else s(p);i.forEach(R=>{R(n.value,_,{delta:b,type:Ar.pop,direction:b?b>0?ir.forward:ir.back:ir.unknown})})};function l(){o=n.value}function c(d){i.push(d);const p=()=>{const _=i.indexOf(d);_>-1&&i.splice(_,1)};return r.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(ae({},d.state,{scroll:ol()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function lp(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?ol():null}}function MN(t){const{history:e,location:n}=window,s={value:yv(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:xN()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(l,c){const u=ae({},e.state,lp(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=ae({},i.value,e.state,{forward:l,scroll:ol()});r(u.current,u,!0);const h=ae({},lp(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function LN(t){t=RN(t);const e=MN(t),n=DN(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=ae({location:"",base:t,go:s,createHref:AN.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function FN(t){return typeof t=="string"||t&&typeof t=="object"}function vv(t){return typeof t=="string"||typeof t=="symbol"}const wn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ev=Symbol("");var cp;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(cp||(cp={}));function ui(t,e){return ae(new Error,{type:t,[Ev]:!0},e)}function on(t,e){return t instanceof Error&&Ev in t&&(e==null||!!(t.type&e))}const up="[^/]+?",UN={sensitive:!1,strict:!1,start:!0,end:!0},BN=/[.+*?^${}()[\]/\\]/g;function $N(t,e){const n=ae({},UN,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(BN,"\\$&"),p+=40;else if(d.type===1){const{value:_,repeatable:y,optional:b,regexp:R}=d;r.push({name:_,repeatable:y,optional:b});const v=R||up;if(v!==up){p+=10;try{new RegExp(`(${v})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${_}" (${v}): `+x.message)}}let I=y?`((?:${v})(?:/(?:${v}))*)`:`(${v})`;h||(I=b&&c.length<2?`(?:/${I})`:"/"+I),b&&(I+="?"),i+=I,p+=20,b&&(p+=-8),y&&(p+=-20),v===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",_=r[d-1];h[_.name]=p&&_.repeatable?p.split("/"):p}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:_,repeatable:y,optional:b}=p,R=_ in c?c[_]:"";if(Ht(R)&&!y)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const v=Ht(R)?R.join("/"):R;if(!v)if(b)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${_}"`);u+=v}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function HN(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function jN(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=HN(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(hp(s))return 1;if(hp(i))return-1}return i.length-s.length}function hp(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const WN={type:0,value:""},VN=/[a-zA-Z0-9_]/;function zN(t){if(!t)return[[]];if(t==="/")return[[WN]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:VN.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function KN(t,e,n){const s=$N(zN(t.path),n),i=ae(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function qN(t,e){const n=[],s=new Map;e=pp({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const p=!d,_=GN(u);_.aliasOf=d&&d.record;const y=pp(e,u),b=[_];if("alias"in u){const I=typeof u.alias=="string"?[u.alias]:u.alias;for(const x of I)b.push(ae({},_,{components:d?d.record.components:_.components,path:x,aliasOf:d?d.record:_}))}let R,v;for(const I of b){const{path:x}=I;if(h&&x[0]!=="/"){const U=h.record.path,Y=U[U.length-1]==="/"?"":"/";I.path=h.record.path+(x&&Y+x)}if(R=KN(I,h,y),d?d.alias.push(R):(v=v||R,v!==R&&v.alias.push(R),p&&u.name&&!fp(R)&&o(u.name)),_.children){const U=_.children;for(let Y=0;Y<U.length;Y++)r(U[Y],R,d&&d.children[Y])}d=d||R,(R.record.components&&Object.keys(R.record.components).length||R.record.name||R.record.redirect)&&l(R)}return v?()=>{o(v)}:sr}function o(u){if(vv(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&jN(u,n[h])>=0&&(u.record.path!==n[h].record.path||!wv(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!fp(u)&&s.set(u.record.name,u)}function c(u,h){let d,p={},_,y;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw ui(1,{location:u});y=d.record.name,p=ae(dp(h.params,d.keys.filter(v=>!v.optional).map(v=>v.name)),u.params&&dp(u.params,d.keys.map(v=>v.name))),_=d.stringify(p)}else if("path"in u)_=u.path,d=n.find(v=>v.re.test(_)),d&&(p=d.parse(_),y=d.record.name);else{if(d=h.name?s.get(h.name):n.find(v=>v.re.test(h.path)),!d)throw ui(1,{location:u,currentLocation:h});y=d.record.name,p=ae({},h.params,u.params),_=d.stringify(p)}const b=[];let R=d;for(;R;)b.unshift(R.record),R=R.parent;return{name:y,path:_,params:p,matched:b,meta:XN(b)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function dp(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function GN(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:YN(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function YN(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function fp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function XN(t){return t.reduce((e,n)=>ae(e,n.meta),{})}function pp(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function wv(t,e){return e.children.some(n=>n===t||wv(t,n))}const Iv=/#/g,QN=/&/g,JN=/\//g,ZN=/=/g,eO=/\?/g,Tv=/\+/g,tO=/%5B/g,nO=/%5D/g,bv=/%5E/g,sO=/%60/g,Cv=/%7B/g,iO=/%7C/g,Rv=/%7D/g,rO=/%20/g;function Wh(t){return encodeURI(""+t).replace(iO,"|").replace(tO,"[").replace(nO,"]")}function oO(t){return Wh(t).replace(Cv,"{").replace(Rv,"}").replace(bv,"^")}function Vc(t){return Wh(t).replace(Tv,"%2B").replace(rO,"+").replace(Iv,"%23").replace(QN,"%26").replace(sO,"`").replace(Cv,"{").replace(Rv,"}").replace(bv,"^")}function aO(t){return Vc(t).replace(ZN,"%3D")}function lO(t){return Wh(t).replace(Iv,"%23").replace(eO,"%3F")}function cO(t){return t==null?"":lO(t).replace(JN,"%2F")}function ha(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function uO(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Tv," "),o=r.indexOf("="),a=ha(o<0?r:r.slice(0,o)),l=o<0?null:ha(r.slice(o+1));if(a in e){let c=e[a];Ht(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function gp(t){let e="";for(let n in t){const s=t[n];if(n=aO(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ht(s)?s.map(r=>r&&Vc(r)):[s&&Vc(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function hO(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Ht(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const dO=Symbol(""),_p=Symbol(""),Vh=Symbol(""),zh=Symbol(""),zc=Symbol("");function Fi(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function bn(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(ui(4,{from:n,to:e})):h instanceof Error?a(h):FN(h)?a(ui(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function zl(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(fO(a)){const c=(a.__vccOpts||a)[e];c&&i.push(bn(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=vN(c)?c.default:c;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&bn(d,n,s,r,o)()}))}}return i}function fO(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function mp(t){const e=vt(Vh),n=vt(zh),s=dt(()=>e.resolve(te(t.to))),i=dt(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(ci.bind(null,u));if(d>-1)return d;const p=yp(l[c-2]);return c>1&&yp(u)===p&&h[h.length-1].path!==p?h.findIndex(ci.bind(null,l[c-2])):d}),r=dt(()=>i.value>-1&&mO(n.params,s.value.params)),o=dt(()=>i.value>-1&&i.value===n.matched.length-1&&mv(n.params,s.value.params));function a(l={}){return _O(l)?e[te(t.replace)?"replace":"push"](te(t.to)).catch(sr):Promise.resolve()}return{route:s,href:dt(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const pO=tt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:mp,setup(t,{slots:e}){const n=fi(mp(t)),{options:s}=vt(Vh),i=dt(()=>({[vp(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[vp(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Rg("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),gO=pO;function _O(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function mO(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Ht(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function yp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const vp=(t,e,n)=>t??e??n,yO=tt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=vt(zc),i=dt(()=>t.route||s.value),r=vt(_p,0),o=dt(()=>{let c=te(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=dt(()=>i.value.matched[o.value]);wo(_p,dt(()=>o.value+1)),wo(dO,a),wo(zc,i);const l=Ct();return Hs(()=>[l.value,a.value,t.name],([c,u,h],[d,p,_])=>{u&&(u.instances[h]=c,p&&p!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!ci(u,p)||!d)&&(u.enterCallbacks[h]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Ep(n.default,{Component:d,route:c});const p=h.props[u],_=p?p===!0?c.params:typeof p=="function"?p(c):p:null,b=Rg(d,ae({},_,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Ep(n.default,{Component:b,route:c})||b}}});function Ep(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const vO=yO;function EO(t){const e=qN(t.routes,t),n=t.parseQuery||uO,s=t.stringifyQuery||gp,i=t.history,r=Fi(),o=Fi(),a=Fi(),l=zp(wn);let c=wn;xs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Wl.bind(null,w=>""+w),h=Wl.bind(null,cO),d=Wl.bind(null,ha);function p(w,D){let N,F;return vv(w)?(N=e.getRecordMatcher(w),F=D):F=w,e.addRoute(F,N)}function _(w){const D=e.getRecordMatcher(w);D&&e.removeRoute(D)}function y(){return e.getRoutes().map(w=>w.record)}function b(w){return!!e.getRecordMatcher(w)}function R(w,D){if(D=ae({},D||l.value),typeof w=="string"){const f=Vl(n,w,D.path),g=e.resolve({path:f.path},D),m=i.createHref(f.fullPath);return ae(f,g,{params:d(g.params),hash:ha(f.hash),redirectedFrom:void 0,href:m})}let N;if("path"in w)N=ae({},w,{path:Vl(n,w.path,D.path).path});else{const f=ae({},w.params);for(const g in f)f[g]==null&&delete f[g];N=ae({},w,{params:h(w.params)}),D.params=h(D.params)}const F=e.resolve(N,D),se=w.hash||"";F.params=u(d(F.params));const Ce=IN(s,ae({},w,{hash:oO(se),path:F.path})),X=i.createHref(Ce);return ae({fullPath:Ce,hash:se,query:s===gp?hO(w.query):w.query||{}},F,{redirectedFrom:void 0,href:X})}function v(w){return typeof w=="string"?Vl(n,w,l.value.path):ae({},w)}function I(w,D){if(c!==w)return ui(8,{from:D,to:w})}function x(w){return V(w)}function U(w){return x(ae(v(w),{replace:!0}))}function Y(w){const D=w.matched[w.matched.length-1];if(D&&D.redirect){const{redirect:N}=D;let F=typeof N=="function"?N(w):N;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=v(F):{path:F},F.params={}),ae({query:w.query,hash:w.hash,params:"path"in F?{}:w.params},F)}}function V(w,D){const N=c=R(w),F=l.value,se=w.state,Ce=w.force,X=w.replace===!0,f=Y(N);if(f)return V(ae(v(f),{state:typeof f=="object"?ae({},se,f.state):se,force:Ce,replace:X}),D||N);const g=N;g.redirectedFrom=D;let m;return!Ce&&TN(s,F,N)&&(m=ui(16,{to:g,from:F}),qn(F,F,!0,!1)),(m?Promise.resolve(m):fe(g,F)).catch(E=>on(E)?on(E,2)?E:kt(E):pe(E,g,F)).then(E=>{if(E){if(on(E,2))return V(ae({replace:X},v(E.to),{state:typeof E.to=="object"?ae({},se,E.to.state):se,force:Ce}),D||g)}else E=be(g,F,!0,X,se);return Ee(g,F,E),E})}function j(w,D){const N=I(w,D);return N?Promise.reject(N):Promise.resolve()}function fe(w,D){let N;const[F,se,Ce]=wO(w,D);N=zl(F.reverse(),"beforeRouteLeave",w,D);for(const f of F)f.leaveGuards.forEach(g=>{N.push(bn(g,w,D))});const X=j.bind(null,w,D);return N.push(X),ks(N).then(()=>{N=[];for(const f of r.list())N.push(bn(f,w,D));return N.push(X),ks(N)}).then(()=>{N=zl(se,"beforeRouteUpdate",w,D);for(const f of se)f.updateGuards.forEach(g=>{N.push(bn(g,w,D))});return N.push(X),ks(N)}).then(()=>{N=[];for(const f of w.matched)if(f.beforeEnter&&!D.matched.includes(f))if(Ht(f.beforeEnter))for(const g of f.beforeEnter)N.push(bn(g,w,D));else N.push(bn(f.beforeEnter,w,D));return N.push(X),ks(N)}).then(()=>(w.matched.forEach(f=>f.enterCallbacks={}),N=zl(Ce,"beforeRouteEnter",w,D),N.push(X),ks(N))).then(()=>{N=[];for(const f of o.list())N.push(bn(f,w,D));return N.push(X),ks(N)}).catch(f=>on(f,8)?f:Promise.reject(f))}function Ee(w,D,N){for(const F of a.list())F(w,D,N)}function be(w,D,N,F,se){const Ce=I(w,D);if(Ce)return Ce;const X=D===wn,f=xs?history.state:{};N&&(F||X?i.replace(w.fullPath,ae({scroll:X&&f&&f.scroll},se)):i.push(w.fullPath,se)),l.value=w,qn(w,D,N,X),kt()}let nt;function At(){nt||(nt=i.listen((w,D,N)=>{if(!Jr.listening)return;const F=R(w),se=Y(F);if(se){V(ae(se,{replace:!0}),F).catch(sr);return}c=F;const Ce=l.value;xs&&NN(ap(Ce.fullPath,N.delta),ol()),fe(F,Ce).catch(X=>on(X,12)?X:on(X,2)?(V(X.to,F).then(f=>{on(f,20)&&!N.delta&&N.type===Ar.pop&&i.go(-1,!1)}).catch(sr),Promise.reject()):(N.delta&&i.go(-N.delta,!1),pe(X,F,Ce))).then(X=>{X=X||be(F,Ce,!1),X&&(N.delta&&!on(X,8)?i.go(-N.delta,!1):N.type===Ar.pop&&on(X,20)&&i.go(-1,!1)),Ee(F,Ce,X)}).catch(sr)}))}let We=Fi(),Be=Fi(),Me;function pe(w,D,N){kt(w);const F=Be.list();return F.length?F.forEach(se=>se(w,D,N)):console.error(w),Promise.reject(w)}function ce(){return Me&&l.value!==wn?Promise.resolve():new Promise((w,D)=>{We.add([w,D])})}function kt(w){return Me||(Me=!w,At(),We.list().forEach(([D,N])=>w?N(w):D()),We.reset()),w}function qn(w,D,N,F){const{scrollBehavior:se}=t;if(!xs||!se)return Promise.resolve();const Ce=!N&&ON(ap(w.fullPath,0))||(F||!N)&&history.state&&history.state.scroll||null;return hu().then(()=>se(w,D,Ce)).then(X=>X&&PN(X)).catch(X=>pe(X,w,D))}const Pt=w=>i.go(w);let ct;const Cs=new Set,Jr={currentRoute:l,listening:!0,addRoute:p,removeRoute:_,hasRoute:b,getRoutes:y,resolve:R,options:t,push:x,replace:U,go:Pt,back:()=>Pt(-1),forward:()=>Pt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Be.add,isReady:ce,install(w){const D=this;w.component("RouterLink",gO),w.component("RouterView",vO),w.config.globalProperties.$router=D,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>te(l)}),xs&&!ct&&l.value===wn&&(ct=!0,x(i.location).catch(se=>{}));const N={};for(const se in wn)N[se]=dt(()=>l.value[se]);w.provide(Vh,D),w.provide(zh,fi(N)),w.provide(zc,l);const F=w.unmount;Cs.add(w),w.unmount=function(){Cs.delete(w),Cs.size<1&&(c=wn,nt&&nt(),nt=null,l.value=wn,ct=!1,Me=!1),F()}}};return Jr}function ks(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function wO(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>ci(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>ci(c,l))||i.push(l))}return[n,s,i]}function IO(){return vt(zh)}const TO="modulepreload",bO=function(t){return"/"+t},wp={},bt=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=bO(r),r in wp)return;wp[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":TO,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())},CO=tt({__name:"Home",setup(t){const e=Jt(()=>bt(()=>import("./HelloWorld-90953564.js"),[]));return(n,s)=>(me(),yn(te(e)))}});const Ai=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},yo=Ai(CO,[["__scopeId","data-v-49b9ae64"]]),RO={apiKey:"AIzaSyCF7fy4HoMSWvyrJep6w5C5d9KdKgVHrHA",authDomain:"movies-portal-667c0.firebaseapp.com",projectId:"movies-portal-667c0",storageBucket:"movies-portal-667c0.appspot.com",messagingSenderId:"458227452658",appId:"1:458227452658:web:3a927521c70fc775d45e6b",measurementId:"G-EDNWGWVDVS"},al=Gg(RO),Qn=xA(al),So=S_(al),Ip=oN(al),bs=xg("useAuth",{state:()=>({email:"ahalay994@gmail.com",password:"15966951",name:"",user:null}),getters:{},actions:{async signup(){try{const t=await Eb(So,this.email,this.password);await Tb(t.user,{displayName:this.name}),this.user=t.user,await Gs.push({name:"home"})}catch(t){console.error(t)}},async login(){try{await wb(So,this.email,this.password),await Gs.push({name:"home"})}catch(t){console.error(t)}},async logout(){await Rb(So),await Gs.push({name:"home"}),this.email="",this.password="",this.name=""}}}),SO=we("button",{type:"submit"},"Зарегистрироваться",-1),AO=tt({__name:"Register",setup(t){const e=bs();return(n,s)=>(me(),Xe("form",{onSubmit:s[3]||(s[3]=Ag(i=>te(e).signup(),["prevent"]))},[zi(we("input",{"onUpdate:modelValue":s[0]||(s[0]=i=>te(e).name=i),type:"text",placeholder:"Введите имя"},null,512),[[Gi,te(e).name]]),zi(we("input",{"onUpdate:modelValue":s[1]||(s[1]=i=>te(e).email=i),type:"email",placeholder:"Введите email"},null,512),[[Gi,te(e).email]]),zi(we("input",{"onUpdate:modelValue":s[2]||(s[2]=i=>te(e).password=i),type:"password",placeholder:"Введите пароль"},null,512),[[Gi,te(e).password]]),SO],32))}}),kO=we("button",{type:"submit"},"Войти",-1),PO=tt({__name:"Login",setup(t){const e=bs();return(n,s)=>(me(),Xe("form",{onSubmit:s[2]||(s[2]=Ag(i=>te(e).login(),["prevent"]))},[zi(we("input",{"onUpdate:modelValue":s[0]||(s[0]=i=>te(e).email=i),type:"email",placeholder:"Введите email"},null,512),[[Gi,te(e).email]]),zi(we("input",{"onUpdate:modelValue":s[1]||(s[1]=i=>te(e).password=i),type:"password",placeholder:"Введите пароль"},null,512),[[Gi,te(e).password]]),kO],32))}}),NO={};function OO(t,e){return me(),Xe("h1",null,"404 СТРАНИЦА НЕ НАЙДЕНА")}const xO=Ai(NO,[["render",OO]]),DO={};function MO(t,e){return" uhfeufh "}const LO=Ai(DO,[["render",MO]]),ll=xg("adminMain",{state:()=>({menuToggleState:!1}),getters:{},actions:{createTag:t=>Ff(Xn(Qn,"tags"),t),getTags:async()=>jl(Xn(Qn,"tags")).promise.value,getTypesMovies:async()=>jl(Xn(Qn,"typesVideo")).promise.value,getMovies:async()=>(await jl(Xn(Qn,"list"))).promise.value,getMovie:async t=>(await _N(Xn(Qn,`list/${t}`))).promise.value,updateMovie:async(t,e)=>wA(Xn(Qn,`list/${e}`),t),saveMovie:async t=>Ff(Xn(Qn,"list"),t),getImage:async t=>await rN(ip(Ip,t)),saveImage:async t=>(await iN(ip(Ip,t.name),t)).metadata.fullPath}}),FO=["src","alt"],UO=tt({__name:"ImageField",props:{src:null,alt:null},async setup(t){let e,n;const{src:s}=t,{getImage:i}=ll(),r=([e,n]=Cg(()=>i(s)),e=await e,n(),e);return(o,a)=>(me(),Xe("img",{src:te(r),alt:t.alt},null,8,FO))}}),BO=t=>(kE("data-v-59ce5071"),t=t(),PE(),t),$O={class:"table w-full"},HO={class:"table__header"},jO={class:"table__header-column"},WO={class:"table__content"},VO={class:"table__content_item"},zO={class:"table__content_item"},KO={class:"table__content_item"},qO={class:"table__content_item"},GO={class:"table__content_item"},YO={class:"tag"},XO={class:"table__content_item"},QO=BO(()=>we("button",null,"Удалить",-1)),JO=tt({__name:"Table",async setup(t){let e,n;const{getMovies:s}=ll(),i=["#","Изображение","Название","Тип","Теги",""],r=([e,n]=Cg(()=>s()),e=await e,n(),e),o=a=>++a;return(a,l)=>{const c=og("router-link");return me(),Xe("div",$O,[we("div",HO,[(me(),Xe(Ve,null,ro(i,u=>we("div",jO,Ns(u),1)),64))]),(me(!0),Xe(Ve,null,ro(te(r),({id:u,images:h,name:d,type:p,tags:_},y)=>(me(),Xe("div",WO,[we("div",VO,Ns(o(y)),1),we("div",zO,[(me(!0),Xe(Ve,null,ro(h,b=>(me(),yn(UO,{src:b,alt:d},null,8,["src","alt"]))),256))]),we("div",KO,Ns(d),1),we("div",qO,Ns(p),1),we("div",GO,[(me(!0),Xe(Ve,null,ro(_,b=>(me(),Xe("div",YO,Ns(b),1))),256))]),we("div",XO,[he(c,{to:{name:"adminMoviesEdit",params:{id:u}}},{default:gi(()=>[Ig("Изменить")]),_:2},1032,["to"]),QO])]))),256))])}}});const ZO=Ai(JO,[["__scopeId","data-v-59ce5071"]]),ex={class:"p-4"},tx=we("h1",{class:"mb-4"},"Список фильмов",-1),nx=tt({__name:"index",setup(t){return(e,n)=>(me(),Xe("div",ex,[tx,(me(),yn(fu,null,{default:gi(()=>[he(ZO)]),_:1}))]))}}),sx=tt({__name:"Show",props:{id:null},setup(t){return(e,n)=>Ns(t.id)}}),ix={class:"px-4 py-2"},rx=we("h1",{class:"mb-4 text-3xl font-bold"},"Добавить",-1),ox=tt({__name:"Create",setup(t){const e=Jt(()=>bt(()=>import("./Form-c662c409.js"),["assets/Form-c662c409.js","assets/Form-ad001081.css"])),{saveImage:n,saveMovie:s}=ll(),{user:i}=bs(),r=async o=>{const a=[];for(const{file:l}of o.images)l&&a.push(await n(l));await s({name:o.name,images:a,type:o.type,tags:o.tags,description:o.description,user:(i==null?void 0:i.displayName)||(i==null?void 0:i.email),createdAt:new Date().toLocaleString("ru-RU")}).finally(()=>Gs.push({name:"adminMovies"}))};return(o,a)=>(me(),Xe("div",ix,[rx,(me(),yn(fu,null,{default:gi(()=>[he(te(e),{onSave:r})]),_:1}))]))}}),ax={class:"px-4 py-2"},lx=we("h1",{class:"mb-4 text-3xl font-bold"},"Редактировать запись",-1),cx=tt({__name:"Edit",props:{id:null},setup(t){const{id:e}=t,n=Jt(()=>bt(()=>import("./Form-c662c409.js"),["assets/Form-c662c409.js","assets/Form-ad001081.css"])),{saveImage:s,updateMovie:i}=ll(),{user:r}=bs(),o=async a=>{const l=[];for(const{path:c,file:u}of a.images)u?l.push(await s(u)):l.push(c);await i({...a.images,images:l,userUpdate:(r==null?void 0:r.displayName)||(r==null?void 0:r.email),updatedAt:new Date().toLocaleString("ru-RU")},e).finally(()=>Gs.push({name:"adminMovies"}))};return(a,l)=>(me(),Xe("div",ax,[lx,(me(),yn(fu,null,{default:gi(()=>[he(te(n),{id:t.id,onSave:o},null,8,["id"])]),_:1}))]))}}),ux={};function hx(t,e){return null}const dx=Ai(ux,[["render",hx]]),Tp=(t,e,n)=>{bs().user?n({name:"home"}):n()},Ps=(t,e,n)=>{bs().user?n():n({name:"notFound"})},fx=[{name:"notFound",path:"/404",component:xO,meta:{layout:"Default"}},{name:"home",path:"/",component:yo,meta:{layout:"Default"}},{name:"films",path:"/",component:yo,meta:{layout:"Default"}},{name:"series",path:"/",component:yo,meta:{layout:"Default"}},{name:"anime",path:"/",component:yo,meta:{layout:"Default"}},{name:"register",path:"/register",component:AO,beforeEnter:Tp,meta:{layout:"Default"}},{name:"login",path:"/login",component:PO,beforeEnter:Tp,meta:{layout:"Default"}},{name:"admin",path:"/admin",component:LO,beforeEnter:Ps,meta:{layout:"Admin"}},{name:"adminMovies",path:"/admin/movies",component:nx,beforeEnter:Ps,meta:{layout:"Admin"}},{name:"adminMoviesItem",path:"/admin/movies/:id",component:sx,beforeEnter:Ps,props:!0,meta:{layout:"Admin"}},{name:"adminMoviesCreate",path:"/admin/movies/create",component:ox,beforeEnter:Ps,meta:{layout:"Admin"}},{name:"adminMoviesEdit",path:"/admin/movies/edit/:id",component:cx,beforeEnter:Ps,props:!0,meta:{layout:"Admin"}},{name:"adminMoviesArchive",path:"/admin/movies/archive",component:dx,beforeEnter:Ps,meta:{layout:"Admin"}}],Gs=EO({history:LN(),routes:fx}),px=tt({__name:"App",setup(t){const e=Jt(()=>bt(()=>Promise.resolve().then(()=>Kh),void 0));return(n,s)=>(me(),yn(te(e)))}}),gx={class:"flex h-full"},_x={class:"w-full"},mx=tt({__name:"AdminLayout",setup(t){const e=Jt(()=>bt(()=>import("./index-d0c9afef.js"),["assets/index-d0c9afef.js","assets/index-43371adf.css"])),n=Jt(()=>bt(()=>import("./Menu-dff351bb.js"),["assets/Menu-dff351bb.js","assets/Menu-b2a80094.css"]));return(s,i)=>(me(),Xe(Ve,null,[he(te(e)),we("div",gx,[he(te(n)),we("main",_x,[cg(s.$slots,"default")])])],64))}}),Sv=Object.freeze(Object.defineProperty({__proto__:null,default:mx},Symbol.toStringTag,{value:"Module"})),yx=(t,e)=>{const n=t[e];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((s,i)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+e)))})},vx=tt({__name:"AppLayout",setup(t){const e=IO(),n=dt(()=>{var i;const s=(i=e==null?void 0:e.meta)==null?void 0:i.layout;return Jt(s?()=>yx(Object.assign({"./AdminLayout.vue":()=>bt(()=>Promise.resolve().then(()=>Sv),void 0),"./AppLayout.vue":()=>bt(()=>Promise.resolve().then(()=>Kh),void 0),"./DefaultLayout.vue":()=>bt(()=>Promise.resolve().then(()=>Kc),void 0)}),`./${s}Layout.vue`):()=>bt(()=>Promise.resolve().then(()=>Kc),void 0))});return(s,i)=>{const r=og("router-view");return me(),yn(ew(te(n)),null,{default:gi(()=>[he(r)]),_:1})}}}),Kh=Object.freeze(Object.defineProperty({__proto__:null,default:vx},Symbol.toStringTag,{value:"Module"})),Ex=tt({__name:"DefaultLayout",setup(t){const e=Jt(()=>bt(()=>import("./index-3d156120.js"),["assets/index-3d156120.js","assets/index-1fe89c04.css"])),n=Jt(()=>bt(()=>import("./index-9309d0d4.js"),["assets/index-9309d0d4.js","assets/index-42e24bc0.css"]));return(s,i)=>(me(),Xe(Ve,null,[he(te(e)),we("main",null,[cg(s.$slots,"default",{},void 0,!0)]),he(te(n))],64))}});const wx=Ai(Ex,[["__scopeId","data-v-37a23705"]]),Kc=Object.freeze(Object.defineProperty({__proto__:null,default:wx},Symbol.toStringTag,{value:"Module"}));function Ix(t){Object.entries(Object.assign({"./AdminLayout.vue":Sv,"./AppLayout.vue":Kh,"./DefaultLayout.vue":Kc})).forEach(([,n])=>{var s;return t.component((s=n==null?void 0:n.default)==null?void 0:s.name,n==null?void 0:n.default)})}const Tx=sI();Cb(So,async t=>{const e=eI(px);e.use(Tx).use(Gs).use(yN,{firebaseApp:al,modules:[mN()]}),e.mount("#app"),Ix(e),bs().user=t});export{qE as A,te as B,zi as C,Gi as D,ll as E,Ve as F,Cg as G,bs as H,Jt as I,bt as J,og as K,XE as L,Gc as M,xg as N,fu as S,Ai as _,PE as a,we as b,Xe as c,tt as d,bx as e,Ct as f,fi as g,ro as h,yn as i,gi as j,he as k,UO as l,Ew as m,Yc as n,me as o,kE as p,Cx as q,cg as r,Ig as s,Ns as t,vE as u,kr as v,Ag as w,dt as x,Hs as y,hu as z};
