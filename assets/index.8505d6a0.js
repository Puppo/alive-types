import{j as u,L as b,r as y,B as v,R as x,a,b as m,c as L}from"./vendor.2849f932.js";const P=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}};P();const R="modulepreload",h={},_="/MUG-2022-ts-best-practices/",M=function(o,i){return!i||i.length===0?o():Promise.all(i.map(n=>{if(n=`${_}${n}`,n in h)return;h[n]=!0;const t=n.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${r}`))return;const s=document.createElement("link");if(s.rel=t?"stylesheet":R,t||(s.as="script",s.crossOrigin=""),s.href=n,document.head.appendChild(s),t)return new Promise((f,g)=>{s.addEventListener("load",f),s.addEventListener("error",g)})})).then(()=>o())};const e=u.exports.jsx,c=u.exports.jsxs,E=u.exports.Fragment;function p(){return c("div",{className:"home container is-fluid pt-5",children:[e("img",{src:"https://m-u-g.github.io/assets/images/logo-no-margin-ext.svg",alt:"logo"}),e("h1",{children:"Hello to Ts Best Practices!"}),e("div",{className:"row",children:e("div",{className:"column is-offset-one-quarter is-half",children:e("figure",{className:"image is-2by1",children:e("img",{src:"/MUG-2022-ts-best-practices//images/wallpaper.png",alt:"logo"})})})}),c("h4",{children:["Go to the ",e(b,{to:"/orders",children:"sample"})," page."]}),c("h4",{children:["The repository is hosted on",e("br",{}),e("a",{href:"https://github.com/Puppo/MUG-2022-ts-best-practices",target:"_blank",rel:"noreferrer",children:"https://github.com/Puppo/MUG-2022-ts-best-practices"}),"."]}),c("h4",{children:["My Typescript Series on dev.to",e("br",{}),e("a",{href:"https://dev.to/this-is-learning/series/11213",target:"_blank",rel:"noreferrer",children:"https://dev.to/this-is-learning/series/11213"}),"."]})]})}const O=y.exports.lazy(()=>M(()=>import("./OrderList.096e98c4.js"),["assets/OrderList.096e98c4.js","assets/vendor.2849f932.js"]));function d({children:l}){return e(m.Suspense,{fallback:null,children:l})}function j(){return e(v,{basename:"/MUG-2022-ts-best-practices/",children:c(x,{children:[e(a,{path:"/orders",element:e(d,{children:e(O,{})})}),e(a,{path:"/",element:e(d,{children:e(p,{})})}),e(a,{path:"**",element:e(d,{children:e(p,{})})})]})})}L.render(e(m.StrictMode,{children:e(j,{})}),document.getElementById("root"));export{E as F,e as a,c as j};
