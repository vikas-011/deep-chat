"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3531,2722],{7386:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var r=n(4602),c=n(8073),o=n(7294);function a(){return o.createElement("div",{id:"connect-right-panel",className:"feature-panel"},o.createElement("div",{id:"connect-text"},"Deep Chat can connect to any API. Use it to communicate with popular AI providers directly from the browser or configure it to connect to your own servers."))}function s(){return o.createElement("div",{id:"connect-left-panel",className:"feature-panel"},o.createElement(r.Z,{directConnection:{demo:!0},initialMessages:[{text:"Where do I start?",role:"user"},{text:"Check Docs on how to install this component.",role:"ai"},{text:"Can it connect to my custom API?",role:"user"},{text:"It sure can! Check the Service section in Docs.",role:"ai"}],containerStyle:{borderRadius:"10px",boxShadow:"0 .5rem 1rem 0 rgba(44, 51, 73, .1)",borderColor:"#ededed",marginLeft:"30px",marginRight:"30px"},messageStyles:{default:{user:{bubble:{backgroundColor:"#397cd8"}}}},stream:!0}))}function i(){return o.createElement("div",{id:"connect"},o.createElement("div",{className:"feature-sub-header"},"Connect to any service"),o.createElement(c.default,{beforeClass:"",afterClass:"connect-panels-close"},o.createElement("div",{id:"connect-panels"},o.createElement(s,null),o.createElement(a,null))))}},8073:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var r=n(7294);function c(e){let{children:t,beforeClass:n,afterClass:c,timeoutMS:o}=e;const a=r.useRef(),[s,i]=r.useState(!1);return r.useEffect((()=>{const e=new IntersectionObserver((t=>{t[0].isIntersecting&&(void 0!==o?setTimeout((()=>i(!0)),o||0):i(!0),e.unobserve(a.current))}));return e.observe(a.current),()=>e.disconnect()}),[]),r.createElement("div",{ref:a,className:s?c:n},t)}}}]);