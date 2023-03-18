import{d as z,f,y as O,A as y,L as I,x as l,o as _,c as m,r as w,M as h,B as o,H as x,b,t as g,k as C,j as B,w as k,_ as Q}from"./index-7a221224.js";const V={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.12, 0, 0.39, 0)",easeOutSine:"cubic-bezier(0.61, 1, 0.88, 1)",easeInOutSine:"cubic-bezier(0.37, 0, 0.63, 1)",easeInQuad:"cubic-bezier(0.11, 0, 0.5, 0)",easeOutQuad:"cubic-bezier(0.5, 1, 0.89, 1)",easeInOutQuad:"cubic-bezier(0.45, 0, 0.55, 1)",easeInCubic:"cubic-bezier(0.32, 0, 0.67, 0)",easeOutCubic:"cubic-bezier(0.33, 1, 0.68, 1)",easeInOutCubic:"cubic-bezier(0.65, 0, 0.35, 1)",easeInQuart:"cubic-bezier(0.5, 0, 0.75, 0)",easeOutQuart:"cubic-bezier(0.25, 1, 0.5, 1)",easeInOutQuart:"cubic-bezier(0.76, 0, 0.24, 1)",easeInQuint:"cubic-bezier(0.64, 0, 0.78, 0)",easeOutQuint:"cubic-bezier(0.22, 1, 0.36, 1)",easeInOutQuint:"cubic-bezier(0.83, 0, 0.17, 1)",easeInExpo:"cubic-bezier(0.7, 0, 0.84, 0)",easeOutExpo:"cubic-bezier(0.16, 1, 0.3, 1)",easeInOutExpo:"cubic-bezier(0.87, 0, 0.13, 1)",easeInCirc:"cubic-bezier(0.55, 0, 1, 0.45)",easeOutCirc:"cubic-bezier(0, 0.55, 0.45, 1)",easeInOutCirc:"cubic-bezier(0.85, 0, 0.15, 1)",easeInBack:"cubic-bezier(0.36, 0, 0.66, -0.56)",easeOutBack:"cubic-bezier(0.34, 1.56, 0.64, 1)",easeInOutBack:"cubic-bezier(0.68, -0.6, 0.32, 1.6)"},S=z({inheritAttrs:!1,__name:"Vue3Collapse",props:{modelValue:{type:Boolean},duration:{default:500},easing:{default:"linear"},withOpacity:{type:Boolean,default:!0}},setup(p){const t=p,n=f();(function(a,e,r){function s(u,c){u&&(c?(u.style.maxHeight=u.scrollHeight+"px",r.value&&(u.style.opacity="1")):(u.style.maxHeight="0px",r.value&&(u.style.opacity="0")))}let i;function v(){s(a.value,e.value)}O(()=>[e.value,a.value],([u,c])=>{c&&s(c,u)}),y(()=>{a.value&&(i=new MutationObserver(()=>{s(a.value,e.value)}),i.observe(a.value,{attributes:!0,childList:!0,characterData:!0,subtree:!0}),window.addEventListener("resize",v))}),I(()=>{i&&i.disconnect(),window.removeEventListener("resize",v)})})(l(()=>n.value),l(()=>t.modelValue),l(()=>t.withOpacity));const d=l(()=>({overflow:"hidden","transition-property":"all","transition-timing-function":V[t.easing],"transition-duration":`${t.duration}ms`}));return(a,e)=>(_(),m("div",{ref_key:"eleRef",ref:n,style:h(o(d))},[w(a.$slots,"default")],4))}}),A={class:"dropdown"},E=z({__name:"Auth",setup(p){const t=f(!1),{user:n,logout:d}=x();return(a,e)=>{var r,s;return _(),m("div",A,[b("button",{class:"dropdown__toggle",onClick:e[0]||(e[0]=i=>t.value=!t.value)},g(((r=o(n))==null?void 0:r.displayName)||((s=o(n))==null?void 0:s.email)),1),C(o(S),{dimension:"height",modelValue:t.value,"onUpdate:modelValue":e[2]||(e[2]=i=>t.value=i)},{default:B(()=>[b("ul",null,[b("li",null,[b("button",{class:"w-full",onClick:e[1]||(e[1]=k(i=>o(d)(),["prevent"]))},"Выйти")])])]),_:1},8,["modelValue"])])}}});const L=Q(E,[["__scopeId","data-v-9bbe6460"]]);export{L as default};
