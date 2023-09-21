"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5194],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,b=p["".concat(i,".").concat(m)]||p[m]||c[m]||l;return n?a.createElement(b,o(o({ref:t},d),{},{components:n})):a.createElement(b,o({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>C});var a=n(7462),r=n(7294),l=n(6010),o=n(2466),s=n(6550),i=n(1980),u=n(7392),d=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function c(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=c(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[i,u]=b({queryString:n,groupId:a}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),y=(()=>{const e=i??p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{y&&s(y)}),[y]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),g(e)}),[u,g,l]),tabValues:l}}var y=n(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),c=e=>{const t=e.currentTarget,n=d.indexOf(t),a=u[n].value;a!==s&&(p(t),i(a))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:c},o,{className:(0,l.Z)("tabs__item",k.tabItem,o?.className,{"tabs__item--active":s===t})}),n??t)})))}function f(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function x(e){const t=g(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",k.tabList)},r.createElement(h,(0,a.Z)({},e,t)),r.createElement(f,(0,a.Z)({},e,t)))}function C(e){const t=(0,y.Z)();return r.createElement(x,(0,a.Z)({key:String(t)},e))}},7235:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);function r(){return a.createElement("div",{style:{height:"1px"}})}},1853:(e,t,n)=>{function a(e){window.scrollY>0?e.style.boxShadow="0 1px 2px 0 rgb(0 0 0 / 10%)":e.style.boxShadow="unset"}function r(){setTimeout((()=>{window.removeEventListener("scroll",window.toggleNavOnScroll);const e=document.getElementsByClassName("navbar--fixed-top");if(e[0]){const t=e[0];a(t),window.toggleNavOnScroll=a.bind(this,t),window.addEventListener("scroll",window.toggleNavOnScroll)}}),2)}function l(){setTimeout((()=>{const e=document.querySelectorAll(".homepage > body > #__docusaurus > nav")?.[0];try{e.classList.add("fade-in")}catch(t){console.error(t),console.log("element was not rendered in time - use MutationObserver")}}),2)}n.r(t),n.d(t,{fadeIn:()=>l,readdAutoNavShadowToggle:()=>r})},8751:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>r});var a=n(7294);function r(e){return e?.children[0]?.children[0]}function l(e){let{children:t,minHeight:n,innerDisplay:r}=e;return a.createElement("div",{className:"documentation-example-container",style:{minHeight:`${n||400}px`}},a.createElement("div",{style:{display:r||"block"}},t))}},4602:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(1262),r=n(7294);function l(e){return r.createElement(a.Z,null,(()=>{const t=n(4925).DeepChat;return r.createElement(t,e,e.children)}))}},911:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>c,default:()=>h,frontMatter:()=>p,metadata:()=>m,toc:()=>g});var a=n(7462),r=(n(7294),n(3905)),l=n(8751),o=n(4602),s=n(7235),i=n(1262),u=n(5162),d=n(4866);const p={sidebar_position:6},c="Message Styles",m={unversionedId:"docs/messageStyles",id:"docs/messageStyles",title:"Message Styles",description:"Properties related to message styling.",source:"@site/docs/docs/messageStyles.mdx",sourceDirName:"docs",slug:"/docs/messageStyles",permalink:"/docs/messageStyles",draft:!1,editUrl:"https://github.com/OvidijusParsiunas/deep-chat/tree/main/website/docs/docs/messageStyles.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docs",previous:{title:"Messages",permalink:"/docs/messages"},next:{title:"Speech",permalink:"/docs/speech"}},b={},g=[{value:"<code>messageStyles</code>",id:"messageStyles",level:3},{value:"Types",id:"types",level:2},{value:"<code>MessageRoleStyles</code>",id:"MessageRoleStyles",level:3},{value:"<code>MessageElementsStyles</code>",id:"MessageElementsStyles",level:3},{value:"More Examples",id:"more-examples",level:2}],y={toc:g},k="wrapper";function h(e){let{components:t,...p}=e;return(0,r.kt)(k,(0,a.Z)({},y,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"message-styles"},"Message Styles"),(0,r.kt)("p",null,"Properties related to message styling."),(0,r.kt)(i.Z,{mdxType:"BrowserOnly"},(()=>n(1853).readdAutoNavShadowToggle())),(0,r.kt)("h3",{id:"messageStyles"},(0,r.kt)("inlineCode",{parentName:"h3"},"messageStyles")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: {",(0,r.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("a",{parentName:"li",href:"#MessageRoleStyles"},(0,r.kt)("inlineCode",{parentName:"a"},"default?: MessageRoleStyles")),", ",(0,r.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("a",{parentName:"li",href:"#MessageRoleStyles"},(0,r.kt)("inlineCode",{parentName:"a"},"image?: MessageRoleStyles")),", ",(0,r.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("a",{parentName:"li",href:"#MessageRoleStyles"},(0,r.kt)("inlineCode",{parentName:"a"},"audio?: MessageRoleStyles")),", ",(0,r.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("a",{parentName:"li",href:"#MessageRoleStyles"},(0,r.kt)("inlineCode",{parentName:"a"},"file?: MessageRoleStyles")),", ",(0,r.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("a",{parentName:"li",href:"#MessageElementsStyles"},(0,r.kt)("inlineCode",{parentName:"a"},"intro?: MessageElementsStyles")),", ",(0,r.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("a",{parentName:"li",href:"#MessageElementsStyles"},(0,r.kt)("inlineCode",{parentName:"a"},"loading?: MessageElementsStyles")),", ",(0,r.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("a",{parentName:"li",href:"#MessageElementsStyles"},(0,r.kt)("inlineCode",{parentName:"a"},"error?: MessageElementsStyles"))," ",(0,r.kt)("br",null),"\n}")),(0,r.kt)("p",null,"Object defining the styling for various message types. ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"default")," is applied to all message types. ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"image")," is applied to messages that contain an image. ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"audio")," is applied to messages that contain an audio player. ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"file")," is applied to messages that contain a file attachment icon. ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"intro")," is applied to the ",(0,r.kt)("a",{parentName:"p",href:"./messages#introMessage"},(0,r.kt)("inlineCode",{parentName:"a"},"introMessage")),". ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"loading")," is applied to the loading bubble. ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"error")," is applied to error messages. ",(0,r.kt)("br",null)),(0,r.kt)(s.Z,{mdxType:"LineBreak"}),(0,r.kt)("h2",{id:"types"},"Types"),(0,r.kt)("p",null,"Shared property types for the ",(0,r.kt)("a",{parentName:"p",href:"#messageStyles"},(0,r.kt)("inlineCode",{parentName:"a"},"messageStyles"))," object:"),(0,r.kt)("h3",{id:"MessageRoleStyles"},(0,r.kt)("inlineCode",{parentName:"h3"},"MessageRoleStyles")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: {",(0,r.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("a",{parentName:"li",href:"#MessageElementsStyles"},(0,r.kt)("inlineCode",{parentName:"a"},"shared?: MessageElementsStyles")),", ",(0,r.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("a",{parentName:"li",href:"#MessageElementsStyles"},(0,r.kt)("inlineCode",{parentName:"a"},"user?: MessageElementsStyles")),", ",(0,r.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("a",{parentName:"li",href:"#MessageElementsStyles"},(0,r.kt)("inlineCode",{parentName:"a"},"ai?: MessageElementsStyles"))," ",(0,r.kt)("br",null),"\n}")),(0,r.kt)("p",null,"Object defining the styling for various message roles. ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"shared")," is applied to all message roles. ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"user")," is applied to messages from the user. ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"ai")," is applied to messages returned from the ai service. ",(0,r.kt)("br",null)),(0,r.kt)(l.Z,{mdxType:"ComponentContainer"},(0,r.kt)(o.Z,{containerStyle:{borderRadius:"8px"},messageStyles:{default:{shared:{bubble:{color:"white"}},ai:{bubble:{backgroundColor:"#3cbe3c"}},user:{bubble:{backgroundColor:"#6767ff"}}}},initialMessages:[{text:"What is the meaning of life?",role:"user"},{text:"This ultimately depends on the person, but it could be the pursuit of happiness or fulfillment.",role:"ai"}],directConnection:{demo:!0},mdxType:"DeepChatBrowser"})),(0,r.kt)(d.Z,{mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<deep-chat\n  messageStyles=\'{\n    "default": {\n      "shared": {"bubble": {"color": "white"}},\n      "ai": {"bubble": {"backgroundColor": "#3cbe3c"}},\n      "user": {"bubble": {"backgroundColor": "#6767ff"}}\n    }\n  }\'\n></deep-chat>\n'))),(0,r.kt)(u.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<deep-chat\n  messageStyles=\'{\n    "default": {\n      "shared": {"bubble": {"color": "white"}},\n      "ai": {"bubble": {"backgroundColor": "#3cbe3c"}},\n      "user": {"bubble": {"backgroundColor": "#6767ff"}}\n    }\n  }\'\n  initialMessages=\'[\n    {"text": "What is the meaning of life?", "role": "user"},\n    {\n      "text": "This ultimately depends on the person, but it could be the pursuit of happiness or fulfillment.",\n      "role": "ai"\n    }\n  ]\'\n  containerStyle=\'{"borderRadius": "8px"}\'\n  directConnection=\'{"demo": true}\'\n></deep-chat>\n')))),(0,r.kt)(s.Z,{mdxType:"LineBreak"}),(0,r.kt)("h3",{id:"MessageElementsStyles"},(0,r.kt)("inlineCode",{parentName:"h3"},"MessageElementsStyles")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: {",(0,r.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("a",{parentName:"li",href:"./styles#CustomStyle"},(0,r.kt)("inlineCode",{parentName:"a"},"outerContainer?: CustomStyle")),", ",(0,r.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("a",{parentName:"li",href:"./styles#CustomStyle"},(0,r.kt)("inlineCode",{parentName:"a"},"innerContainer?: CustomStyle")),", ",(0,r.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("a",{parentName:"li",href:"./styles#CustomStyle"},(0,r.kt)("inlineCode",{parentName:"a"},"bubble?: CustomStyle")),", ",(0,r.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("a",{parentName:"li",href:"./styles#CustomStyle"},(0,r.kt)("inlineCode",{parentName:"a"},"media?: CustomStyle"))," ",(0,r.kt)("br",null),"\n}")),(0,r.kt)("p",null,"Object defining the styling for various elements that encompass a message. ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"outerContainer")," contains all elements related to the message. ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"innerContainer")," is an element inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"outerContainer")," that is mostly used to set message side padding. ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"bubble")," is the element that displays the actual message contents. ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"media")," is applied to ",(0,r.kt)("inlineCode",{parentName:"p"},"image"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"audio")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"file")," type messages which contain an extra child element inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"bubble"),"\nto display the file contents. ",(0,r.kt)("br",null)),(0,r.kt)(l.Z,{mdxType:"ComponentContainer"},(0,r.kt)(o.Z,{containerStyle:{borderRadius:"8px"},messageStyles:{default:{shared:{outerContainer:{backgroundColor:"orange"},innerContainer:{backgroundColor:"yellow"},bubble:{color:"black"}},ai:{bubble:{backgroundColor:"lightgreen"}},user:{bubble:{backgroundColor:"lightblue"}}}},initialMessages:[{text:"What is the meaning of life?",role:"user"},{text:"This ultimately depends on the person, but it could be the pursuit of happiness or fulfillment.",role:"ai"}],directConnection:{demo:!0},mdxType:"DeepChatBrowser"})),(0,r.kt)(d.Z,{mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<deep-chat\n  messageStyles=\'{\n    "default": {\n      "shared": {\n        "outerContainer": {"backgroundColor": "orange"},\n        "innerContainer": {"backgroundColor": "yellow"},\n        "bubble": {"color": "black"}\n      },\n      "ai": {"bubble": {"backgroundColor": "lightgreen"}},\n      "user": {"bubble": {"backgroundColor": "lightblue"}}\n    }\n  }\'\n></deep-chat>\n'))),(0,r.kt)(u.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<deep-chat\n  messageStyles=\'{\n    "default": {\n      "shared": {\n        "outerContainer": {"backgroundColor": "orange"},\n        "innerContainer": {"backgroundColor": "yellow"},\n        "bubble": {"color": "black"}\n      },\n      "ai": {"bubble": {"backgroundColor": "lightgreen"}},\n      "user": {"bubble": {"backgroundColor": "lightblue"}}\n    }\n  }\'\n  initialMessages=\'[\n    {"text": "What is the meaning of life?", "role": "user"},\n    {\n      "text": "This ultimately depends on the person, but it could be the pursuit of happiness or fulfillment.",\n      "role": "ai"\n    }\n  ]\'\n  containerStyle=\'{"borderRadius": "8px"}\'\n  directConnection=\'{"demo": true}\'\n></deep-chat>\n')))),(0,r.kt)(s.Z,{mdxType:"LineBreak"}),(0,r.kt)("h2",{id:"more-examples"},"More Examples"),(0,r.kt)("h3",null,"Files"),(0,r.kt)(l.Z,{mdxType:"ComponentContainer"},(0,r.kt)(o.Z,{containerStyle:{borderRadius:"8px"},messageStyles:{image:{shared:{media:{borderRadius:"0px"}}},audio:{shared:{media:{borderRadius:"30px",border:"1px solid #8c8c8c",backgroundColor:"red"}}},file:{shared:{bubble:{backgroundColor:"grey"}}}},initialMessages:[{file:{src:"/img/city.jpeg",type:"image"},role:"user"},{file:{src:"/audio/cantinaBand.wav",type:"audio"},role:"ai"},{file:{src:"/text/text.txt",type:"file",name:"text-file.txt"},role:"user"}],directConnection:{demo:!0},mdxType:"DeepChatBrowser"})),(0,r.kt)(d.Z,{mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<deep-chat\n  messageStyles=\'{\n    "image": {\n      "shared": {\n        "media": {"borderRadius": "0px"}\n      }\n    },\n    "audio": {\n      "shared": {\n        "media": {"borderRadius": "30px", "border": "1px solid #8c8c8c", "backgroundColor": "red"}\n      }\n    },\n    "file": {\n      "shared": {\n        "bubble": {"backgroundColor": "grey"}\n      }\n    }\n  }\'\n></deep-chat>\n'))),(0,r.kt)(u.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<deep-chat\n  messageStyles=\'{\n    "image": {\n      "shared": {\n        "media": {"borderRadius": "0px"}\n      }\n    },\n    "audio": {\n      "shared": {\n        "media": {"borderRadius": "30px", "border": "1px solid #8c8c8c", "backgroundColor": "red"}\n      }\n    },\n    "file": {\n      "shared": {\n        "bubble": {"backgroundColor": "grey"}\n      }\n    }\n  }\'\n  initialMessages=\'[\n    {"file": {"src": "path-to-file.jpeg", "type": "image"}, "role": "user"},\n    {"file": {"src": "path-to-file.wav", "type": "audio"}, "role": "ai"},\n    {"file": {"src": "path-to-file.txt", name: "text-file.txt", "type": "file"}, "role": "user"}\n  ]\'\n  containerStyle=\'{"borderRadius": "8px"}\'\n  directConnection=\'{"demo": true}\'\n></deep-chat>\n')))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("em",{parentName:"p"},'"audio"')," media player is controlled by the browser and and its styling may not be overwritable by the ",(0,r.kt)("inlineCode",{parentName:"p"},"media")," property.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"In the Safari browser, the ",(0,r.kt)("em",{parentName:"p"},'"audio"')," media player can be expanded by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"width")," property in ",(0,r.kt)("inlineCode",{parentName:"p"},"media")," to ",(0,r.kt)("em",{parentName:"p"},"200px")," or higher.")),(0,r.kt)(s.Z,{mdxType:"LineBreak"}),(0,r.kt)("h3",null,"Intro message"),(0,r.kt)(l.Z,{mdxType:"ComponentContainer"},(0,r.kt)(o.Z,{containerStyle:{borderRadius:"8px"},messageStyles:{intro:{bubble:{backgroundColor:"#475cc7",color:"white",fontSize:"16px"}}},introMessage:"Hi I'm an AiAssistant, ask me anything!",directConnection:{demo:!0},mdxType:"DeepChatBrowser"})),(0,r.kt)(d.Z,{mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<deep-chat\n  messageStyles=\'{\n    "intro": {"bubble": {"backgroundColor": "#475cc7", "color": "white", "fontSize": "16px"}}\n  }\'\n></deep-chat>\n'))),(0,r.kt)(u.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<deep-chat\n  messageStyles=\'{\n    "intro": {\n      "bubble": {"backgroundColor": "#475cc7", "color": "white", "fontSize": "16px"}\n    }\n  }\'\n  introMessage="Hi I\'m an AiAssistant, ask me anything!"\n  containerStyle=\'{"borderRadius": "8px"}\'\n  directConnection=\'{"demo": true}\'\n></deep-chat>\n')))),(0,r.kt)(s.Z,{mdxType:"LineBreak"}),(0,r.kt)("h3",null,"Loading bubble"),(0,r.kt)(l.Z,{mdxType:"ComponentContainer"},(0,r.kt)(o.Z,{containerStyle:{borderRadius:"8px"},messageStyles:{loading:{bubble:{backgroundColor:"#3793ff",fontSize:"20px",color:"white"}}},directConnection:{demo:{displayLoadingBubble:!0}},mdxType:"DeepChatBrowser"})),(0,r.kt)(d.Z,{mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<deep-chat\n  messageStyles=\'{\n    "loading": {\n      "bubble": {"backgroundColor": "#3793ff", "fontSize": "20px", "color": "white"}\n    }\n  }\'\n></deep-chat>\n'))),(0,r.kt)(u.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<deep-chat\n  messageStyles=\'{\n    "loading": {\n      "bubble": {"backgroundColor": "#3793ff", "fontSize": "20px", "color": "white"}\n    }\n  }\'\n  containerStyle=\'{"borderRadius": "8px"}\'\n  directConnection=\'{"demo": {"displayLoadingBubble": true}}\'\n></deep-chat>\n')))),(0,r.kt)(s.Z,{mdxType:"LineBreak"}),(0,r.kt)("h3",null,"Error messages"),(0,r.kt)(l.Z,{mdxType:"ComponentContainer"},(0,r.kt)(o.Z,{containerStyle:{borderRadius:"8px"},messageStyles:{error:{bubble:{backgroundColor:"#f98e00",color:"white",fontSize:"15px"}}},directConnection:{demo:{displayErrors:{service:!0}}},mdxType:"DeepChatBrowser"})),(0,r.kt)(d.Z,{mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<deep-chat\n  messageStyles=\'{\n    "error": {\n      "bubble": {"backgroundColor": "#f98e00", "color": "white", "fontSize": "15px"}\n    }\n  }\'\n></deep-chat>\n'))),(0,r.kt)(u.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<deep-chat\n  messageStyles=\'{\n    "error": {\n      "bubble": {"backgroundColor": "#f98e00", "color": "white", "fontSize": "15px"}\n    }\n  }\'\n  containerStyle=\'{"borderRadius": "8px"}\'\n  directConnection=\'{"demo": {"displayErrors": {"service": true}}}\'\n></deep-chat>\n')))),(0,r.kt)(s.Z,{mdxType:"LineBreak"}))}h.isMDXComponent=!0}}]);