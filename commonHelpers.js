(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();const n=document.getElementById("menu-opn-btn");document.getElementById("menu-opn-btn-svg");document.getElementById("menu-opn-btn-use");const l=document.getElementById("menu-cls-btn"),u=document.getElementById("menu-navigation"),m=u.querySelectorAll("li"),s=document.getElementById("mob-menu");n.addEventListener("click",function(){s.classList.add("is-open"),n.classList.add("hidden")});l.addEventListener("click",function(){s.classList.remove("is-open"),n.classList.remove("hidden")});m.forEach(o=>{o.addEventListener("click",function(){s.classList.remove("is-open"),n.classList.remove("hidden")})});document.addEventListener("click",function(o){!s.contains(o.target)&&!n.contains(o.target)&&(s.classList.remove("is-open"),n.classList.remove("hidden"))});
//# sourceMappingURL=commonHelpers.js.map
