"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7397,2722],{2443:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var r=a(4602),n=a(8073),i=a(637),s=a(7294);function l(){const e=s.useRef(null);return s.useEffect((()=>{setTimeout((()=>{window.hljs=i.default;const t=e.current?.children[0].children[0];t.current?.refreshMessages()}),10)}),[]),s.createElement("div",{id:"media-panel-right",ref:e,className:"feature-panel"},s.createElement(n.default,{beforeClass:"media-bottom",afterClass:"media-top",timeoutMS:0},s.createElement(r.Z,{directConnection:{demo:!0},containerStyle:{borderRadius:"10px",boxShadow:"0 .5rem 1rem 0 rgba(44, 51, 73, .1)",borderColor:"#ededed",height:"400px"},messageStyles:{default:{user:{bubble:{maxWidth:"90%",backgroundColor:"#e4e6eb",marginRight:"10px"}},ai:{bubble:{maxWidth:"90%",marginLeft:"10px"}}},audio:{user:{bubble:{width:"70%",backgroundColor:"white"}}},image:{user:{bubble:{maxWidth:"70%",marginTop:"14px"}}}},initialMessages:[{file:{src:"/img/bird.jpeg",type:"image"},role:"user"},{file:{src:"/audio/cantinaBand.wav",type:"audio"},role:"user"},{text:'```java\nconsole.log("hello world");\n```',role:"ai"}],images:!0,gifs:!0,audio:!0,mixedFiles:!0,dropupStyles:{button:{position:"outside-right"}}})))}function d(){return s.createElement("div",{id:"media-panel-left",className:"feature-panel"},s.createElement("div",{id:"media-text"},"Send images, audio, gifs, spreadsheets and any other files types to and from the target service. Text messages support ",s.createElement("b",null,"MarkDown")," to help control text layout and render code."))}function o(){return s.createElement("div",null,s.createElement("div",{id:"media-diagonal-padding"}),s.createElement("div",{id:"media"},s.createElement("div",{className:"feature-sub-header"},"Transfer Media and MarkDown"),s.createElement("div",{id:"media-panels"},s.createElement(d,null),s.createElement(l,null))))}},8073:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});var r=a(7294);function n(e){let{children:t,beforeClass:a,afterClass:n,timeoutMS:i}=e;const s=r.useRef(),[l,d]=r.useState(!1);return r.useEffect((()=>{const e=new IntersectionObserver((t=>{t[0].isIntersecting&&(void 0!==i?setTimeout((()=>d(!0)),i||0):d(!0),e.unobserve(s.current))}));return e.observe(s.current),()=>e.disconnect()}),[]),r.createElement("div",{ref:s,className:l?n:a},t)}}}]);