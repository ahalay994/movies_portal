import{d as i,E as u,K as p,o as d,c as r,b as e,k as l,j as _,t as m,B as o,n as f,p as v,a as k,_ as h}from"./index-7a221224.js";const t=s=>(v("data-v-c99cefce"),s=s(),k(),s),g=t(()=>e("span",{class:"icon"},"⌂",-1)),S=t(()=>e("span",{class:"title"},"Главная",-1)),x=t(()=>e("span",{class:"icon"},"❆",-1)),C=t(()=>e("span",{class:"title"},"Список",-1)),M=i({__name:"Menu",setup(s){const{menuToggleState:n}=u();return(B,a)=>{const c=p("router-link");return d(),r("div",{class:f(["menu h-full",{close:o(n)}])},[e("ul",null,[e("li",null,[l(c,{class:"menu__link",to:{name:"admin"}},{default:_(()=>[g,S]),_:1})]),e("li",null,[l(c,{class:"menu__link",to:{name:"adminMovies"}},{default:_(()=>[x,C]),_:1})])]),e("div",{onClick:a[0]||(a[0]=I=>n.value=!o(n)),class:"menu__toggle"},m(o(n)?">":"<"),1)],2)}}});const w=h(M,[["__scopeId","data-v-c99cefce"]]);export{w as default};