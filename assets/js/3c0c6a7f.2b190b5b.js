"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2465],{394:(e,i,l)=>{l.r(i),l.d(i,{default:()=>s});var t=l(7294);const a="playground-modal-field-invalid";const s=t.forwardRef(((e,i)=>{let{title:l,requiredValue:s,setValue:n,view:r,changeCode:c,link:o}=e;const[d,u]=t.useState(!!r?.isKeyVisible);return t.createElement("div",null,t.createElement("a",{href:o,target:"_blank",id:"playground-service-modal-service-type-label",className:"playground-service-modal-input-label"},l),t.createElement("input",{className:"playground-service-modal-input "+(r?"playground-service-modal-visibility-input":""),ref:i,value:s,onChange:e=>function(e,i){const{value:l,classList:t}=e.target;i(l),""===l.trim()?t.add(a):t.remove(a)}(e,n),type:!r||d?"text":"password"}),r&&t.createElement("div",{id:"visibility-icon-container"},t.createElement("img",{src:d?"img/visible.svg":"img/notVisible.svg",className:"visibility-icon",onClick:()=>{const e=!r.isKeyVisible;r.isKeyVisible=e,u(e),c()}})))}))}}]);