"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[2777],{88215:(e,t,n)=>{n.d(t,{x:()=>a});var r=n(7552),c=n(29527),u=n(89887),o=n(99305),s=n(87995),i=n(69500);function l(e){return e.substring(2).toLowerCase()}function a(e){const{children:t,disableReactTree:n=!1,mouseEvent:a="onClick",onClickAway:d,touchEvent:f="onTouchEnd"}=e,m=r.useRef(!1),v=r.useRef(null),E=r.useRef(!1),h=r.useRef(!1);r.useEffect((()=>(setTimeout((()=>{E.current=!0}),0),()=>{E.current=!1})),[]);const b=(0,c.A)((0,s.A)(t),v),w=(0,u.A)((e=>{const t=h.current;h.current=!1;const r=(0,o.A)(v.current);if(!E.current||!v.current||"clientX"in e&&function(e,t){return t.documentElement.clientWidth<e.clientX||t.documentElement.clientHeight<e.clientY}(e,r))return;if(m.current)return void(m.current=!1);let c;c=e.composedPath?e.composedPath().includes(v.current):!r.documentElement.contains(e.target)||v.current.contains(e.target),c||!n&&t||d(e)})),g=e=>n=>{h.current=!0;const r=t.props[e];r&&r(n)},p={ref:b};return!1!==f&&(p[f]=g(f)),r.useEffect((()=>{if(!1!==f){const e=l(f),t=(0,o.A)(v.current),n=()=>{m.current=!0};return t.addEventListener(e,w),t.addEventListener("touchmove",n),()=>{t.removeEventListener(e,w),t.removeEventListener("touchmove",n)}}}),[w,f]),!1!==a&&(p[a]=g(a)),r.useEffect((()=>{if(!1!==a){const e=l(a),t=(0,o.A)(v.current);return t.addEventListener(e,w),()=>{t.removeEventListener(e,w)}}}),[w,a]),(0,i.jsx)(r.Fragment,{children:r.cloneElement(t,p)})}},42777:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r.x});var r=n(88215)}}]);
//# sourceMappingURL=2777.74a47266.chunk.js.map