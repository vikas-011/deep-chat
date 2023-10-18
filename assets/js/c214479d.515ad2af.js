"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7468],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(a),c=l,h=m["".concat(o,".").concat(c)]||m[c]||u[c]||r;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:l,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),l=a(6010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(7462),l=a(7294),r=a(6010),i=a(2466),s=a(6550),o=a(1980),p=a(7392),d=a(12);function m(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function u(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=u(e),[i,s]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[o,p]=h({queryString:a,groupId:n}),[m,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,d.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),g=(()=>{const e=o??m;return c({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!c({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),p(e),k(e)}),[p,k,r]),tabValues:r}}var g=a(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:s,selectValue:o,tabValues:p}=e;const d=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),u=e=>{const t=e.currentTarget,a=d.indexOf(t),n=p[a].value;n!==s&&(m(t),o(n))},c=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:i}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:c,onClick:u},i,{className:(0,r.Z)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":s===t})}),a??t)})))}function f(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function x(e){const t=k(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",y.tabList)},l.createElement(b,(0,n.Z)({},e,t)),l.createElement(f,(0,n.Z)({},e,t)))}function v(e){const t=(0,g.Z)();return l.createElement(x,(0,n.Z)({key:String(t)},e))}},7537:(e,t,a)=>{function n(){window.hljs||a.e(637).then(a.bind(a,637)).then((e=>{window.hljs=e.default}))}async function l(){return!!window.hljs||a.e(637).then(a.bind(a,637)).then((e=>(window.hljs=e.default,!0)))}function r(){delete window.hljs}a.d(t,{A2:()=>r,i5:()=>l,pX:()=>n})},7235:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294);function l(){return n.createElement("div",{style:{height:"1px"}})}},1853:(e,t,a)=>{function n(e){window.scrollY>0?e.style.boxShadow="0 1px 2px 0 rgb(0 0 0 / 10%)":e.style.boxShadow="unset"}function l(){setTimeout((()=>{window.removeEventListener("scroll",window.toggleNavOnScroll);const e=document.getElementsByClassName("navbar--fixed-top");if(e[0]){const t=e[0];n(t),window.toggleNavOnScroll=n.bind(this,t),window.addEventListener("scroll",window.toggleNavOnScroll)}}),2)}function r(){setTimeout((()=>{const e=document.querySelectorAll(".homepage > body > #__docusaurus > nav")?.[0];try{e.classList.add("fade-in")}catch(t){console.error(t),console.log("element was not rendered in time - use MutationObserver")}}),2)}a.r(t),a.d(t,{fadeIn:()=>r,readdAutoNavShadowToggle:()=>l})},8751:(e,t,a)=>{a.d(t,{Z:()=>r,a:()=>l});var n=a(7294);function l(e){return e?.children[0]?.children[0]}function r(e){let{children:t,minHeight:a,innerDisplay:l}=e;return n.createElement("div",{className:"documentation-example-container",style:{minHeight:`${a||400}px`}},n.createElement("div",{style:{display:l||"block"}},t))}},4602:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(1262),l=a(7294);function r(e){return l.createElement(n.Z,null,(()=>{const t=a(5197).DeepChat;return l.createElement(t,e,e.children)}))}},5867:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>m,metadata:()=>c,toc:()=>k});var n=a(7462),l=(a(7294),a(3905)),r=a(8751),i=a(4602),s=a(7235),o=a(1262),p=a(5162),d=a(4866);const m={sidebar_position:5},u="Messages",c={unversionedId:"docs/messages/messages",id:"docs/messages/messages",title:"Messages",description:"Properties related to messages.",source:"@site/docs/docs/messages/messages.mdx",sourceDirName:"docs/messages",slug:"/docs/messages/",permalink:"/docs/messages/",draft:!1,editUrl:"https://github.com/OvidijusParsiunas/deep-chat/tree/main/website/docs/docs/messages/messages.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docs",previous:{title:"Styles",permalink:"/docs/styles"},next:{title:"Styles",permalink:"/docs/messages/styles"}},h={},k=[{value:"<code>initialMessages</code>",id:"initialMessages",level:3},{value:"Example",id:"example",level:4},{value:"<code>introMessage</code>",id:"introMessage",level:3},{value:"Example",id:"example-1",level:4},{value:"<code>avatars</code>",id:"avatars",level:3},{value:"Example",id:"example-2",level:4},{value:"<code>Avatar</code>",id:"Avatar",level:4},{value:"Example",id:"example-3",level:4},{value:"<code>names</code>",id:"names",level:3},{value:"Example",id:"example-4",level:4},{value:"<code>Name</code>",id:"Name",level:4},{value:"Example",id:"example-5",level:4},{value:"<code>displayLoadingBubble</code>",id:"displayLoadingBubble",level:3},{value:"Example",id:"example-6",level:4},{value:"<code>errorMessages</code>",id:"errorMessages",level:3},{value:"Example",id:"example-7",level:4},{value:"Types",id:"types",level:2},{value:"<code>MessageContent</code>",id:"MessageContent",level:3},{value:"Example",id:"example-8",level:4},{value:"<code>MessageRole</code>",id:"MessageRole",level:3},{value:"<code>MessageFile</code>",id:"MessageFile",level:3},{value:"Example",id:"example-9",level:4},{value:"<code>MessageFileType</code>",id:"MessageFileType",level:3},{value:"Code messages",id:"code-messages",level:2},{value:"Example",id:"example-10",level:4}],g={toc:k},y="wrapper";function b(e){let{components:t,...m}=e;return(0,l.kt)(y,(0,n.Z)({},g,m,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"messages"},"Messages"),(0,l.kt)("p",null,"Properties related to messages."),(0,l.kt)("h3",{id:"initialMessages"},(0,l.kt)("inlineCode",{parentName:"h3"},"initialMessages")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("a",{parentName:"li",href:"#MessageContent"},(0,l.kt)("inlineCode",{parentName:"a"},"MessageContent[]")))),(0,l.kt)("p",null,"Messages that are pre-populated when the chat loads up. This is useful for displaying previous messages."),(0,l.kt)(o.Z,{mdxType:"BrowserOnly"},(()=>a(1853).readdAutoNavShadowToggle())),(0,l.kt)(o.Z,{mdxType:"BrowserOnly"},(()=>a(7537).pX())),(0,l.kt)("h4",{id:"example"},"Example"),(0,l.kt)(r.Z,{mdxType:"ComponentContainer"},(0,l.kt)(i.Z,{demo:!0,initialMessages:[{text:"Show me a modern city",role:"user"},{files:[{src:"/img/city.jpeg",type:"image"}],role:"ai"},{text:"Whats on your mind?",role:"user"},{text:"Peace and tranquility",role:"ai"}],style:{height:"370px",borderRadius:"8px"},mdxType:"DeepChatBrowser"})),(0,l.kt)(d.Z,{mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<deep-chat\n  initialMessages=\'[\n    {"text": "Show me a modern city", "role": "user"},\n    {"files": [{"src": "path-to-file.jpeg", "type": "image"}], "role": "ai"},\n    {"text": "Whats on your mind?", "role": "user"},\n    {"text": "Peace and tranquility", "role": "ai"}\n  ]\'\n></deep-chat>\n'))),(0,l.kt)(p.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<deep-chat\n  initialMessages=\'[\n    {"text": "Show me a modern city", "role": "user"},\n    {"files": [{"src": "path-to-file.jpeg", "type": "image"}], "role": "ai"},\n    {"text": "Whats on your mind?", "role": "user"},\n    {"text": "Peace and tranquility", "role": "ai"}\n  ]\'\n  style="height: 370px; border-radius: 8px"\n  demo="true"\n></deep-chat>\n')))),(0,l.kt)(s.Z,{mdxType:"LineBreak"}),(0,l.kt)("h3",{id:"introMessage"},(0,l.kt)("inlineCode",{parentName:"h3"},"introMessage")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: {",(0,l.kt)("inlineCode",{parentName:"li"},"text?: string"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"html?: string"),"}")),(0,l.kt)("p",null,"Initial ",(0,l.kt)("inlineCode",{parentName:"p"},"ai")," message that is displayed when the chat is loaded. It is different to ",(0,l.kt)("a",{parentName:"p",href:"#initialMessages"},(0,l.kt)("inlineCode",{parentName:"a"},"initialMessages"))," as it will not trigger\nthe ",(0,l.kt)("a",{parentName:"p",href:"../events#onNewMessage"},(0,l.kt)("inlineCode",{parentName:"a"},"onNewMessage"))," listener, will not be part of the returned messages when the ",(0,l.kt)("a",{parentName:"p",href:"../methods#getMessages"},(0,l.kt)("inlineCode",{parentName:"a"},"getMessages"))," method is called and\nis not taken into consideration when calculating ",(0,l.kt)("a",{parentName:"p",href:"../connect#requestBodyLimits"},(0,l.kt)("inlineCode",{parentName:"a"},"requestBodyLimits")),". ",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"html")," is used to render custom code - ",(0,l.kt)("a",{parentName:"p",href:"./html"},"more info"),"."),(0,l.kt)("h4",{id:"example-1"},"Example"),(0,l.kt)(r.Z,{mdxType:"ComponentContainer"},(0,l.kt)(i.Z,{style:{borderRadius:"8px"},introMessage:{text:"Hi I am your assistant, ask me anything!"},demo:!0,mdxType:"DeepChatBrowser"})),(0,l.kt)(d.Z,{mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<deep-chat introMessage=\'{"text": "Hi I am your assistant, ask me anything!"}\'></deep-chat>\n'))),(0,l.kt)(p.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<deep-chat\n  introMessage=\'{"text": "Hi I am your assistant, ask me anything!"}\'\n  demo="true"\n  style="border-radius: 8px"\n></deep-chat>\n')))),(0,l.kt)(s.Z,{mdxType:"LineBreak"}),(0,l.kt)("h3",{id:"avatars"},(0,l.kt)("inlineCode",{parentName:"h3"},"avatars")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," | {",(0,l.kt)("a",{parentName:"li",href:"#Avatar"},(0,l.kt)("inlineCode",{parentName:"a"},"default?: Avatar")),", ",(0,l.kt)("a",{parentName:"li",href:"#Avatar"},(0,l.kt)("inlineCode",{parentName:"a"},"ai?: Avatar")),", ",(0,l.kt)("a",{parentName:"li",href:"#Avatar"},(0,l.kt)("inlineCode",{parentName:"a"},"user?: Avatar")),"}")),(0,l.kt)("p",null,"Add avatars beside messages. You can enable this by setting the value to ",(0,l.kt)("em",{parentName:"p"},"true"),"\nor by defining an object with ",(0,l.kt)("a",{parentName:"p",href:"#Avatar"},(0,l.kt)("inlineCode",{parentName:"a"},"Avatar"))," properties. The ",(0,l.kt)("inlineCode",{parentName:"p"},"default")," property is applied to both roles."),(0,l.kt)("h4",{id:"example-2"},"Example"),(0,l.kt)(r.Z,{mdxType:"ComponentContainer"},(0,l.kt)(i.Z,{style:{borderRadius:"8px"},initialMessages:[{text:"Hey, how are you?",role:"user"},{text:"I am doing great, how about you?",role:"ai"},{text:"What is the meaning of life?",role:"user"},{text:"This ultimately depends on the person, but it could be the pursuit of happiness or fulfillment.",role:"ai"}],demo:!0,avatars:!0,mdxType:"DeepChatBrowser"})),(0,l.kt)(d.Z,{mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<deep-chat avatars="true"></deep-chat>\n'))),(0,l.kt)(p.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<deep-chat\n  avatars="true"\n  initialMessages=\'[\n    {"text": "Hey, how are you?", "role": "user"},\n    {"text": "I am doing great, how about you?", "role": "ai"},\n    {"text": "What is the meaning of life?", "role": "user"},\n    {\n      "text": "This ultimately depends on the person, but it could be the pursuit of happiness or fulfillment.",\n      "role": "ai"\n    }\n  ]\'\n  style="border-radius: 8px"\n  demo="true"\n></deep-chat>\n')))),(0,l.kt)(s.Z,{mdxType:"LineBreak"}),(0,l.kt)("h4",{id:"Avatar"},(0,l.kt)("inlineCode",{parentName:"h4"},"Avatar")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: {",(0,l.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("inlineCode",{parentName:"li"},"src?: string"),", ",(0,l.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("inlineCode",{parentName:"li"},"styles?: {")," ",(0,l.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("a",{parentName:"li",href:"./styles#CustomStyle"},(0,l.kt)("inlineCode",{parentName:"a"},"avatar?: CustomStyle")),", ",(0,l.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("a",{parentName:"li",href:"./styles#CustomStyle"},(0,l.kt)("inlineCode",{parentName:"a"},"container?: CustomStyle"))," ",(0,l.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("inlineCode",{parentName:"li"},'position?: "left" | "right"')," ",(0,l.kt)("br",null),"\n}}")),(0,l.kt)("p",null,"This object is used to configure avatars that are displayed beside messages. ",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"src")," is the path to an avatar image file. ",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"avatar")," property is used to configure the avatar element's styling. ",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"container")," is used to style the element that encapsulates the avatar element. ",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"position")," defines which side of the message the avatar is going to be displayed on."),(0,l.kt)("h4",{id:"example-3"},"Example"),(0,l.kt)(r.Z,{mdxType:"ComponentContainer"},(0,l.kt)(i.Z,{style:{borderRadius:"8px"},initialMessages:[{text:"Hey, how are you?",role:"user"},{text:"I am doing great, how about you?",role:"ai"},{text:"What is the meaning of life?",role:"user"},{text:"This ultimately depends on the person, but it could be the pursuit of happiness or fulfillment.",role:"ai"}],avatars:{default:{styles:{avatar:{height:"30px",width:"30px"},container:{marginTop:"8px"}}},ai:{src:"/img/ai-brain.svg",styles:{avatar:{marginLeft:"-3px"}}}},demo:!0,mdxType:"DeepChatBrowser"})),(0,l.kt)(d.Z,{mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<deep-chat\n  avatars=\'{\n    "default": {"styles": {"avatar": {"height": "30px", "width": "30px"}, "container": {"marginTop": "8px"}}},\n    "ai": {"src": "path-to-file.svg", "styles": {"avatar": {"marginLeft": "-3px"}}}\n  }\'\n></deep-chat>\n'))),(0,l.kt)(p.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<deep-chat\n  avatars=\'{\n    "default": {"styles": {"avatar": {"height": "30px", "width": "30px"}, "container": {"marginTop": "8px"}}},\n    "ai": {"src": "path-to-file.svg", "styles": {"avatar": {"marginLeft": "-3px"}}}\n  }\'\n  initialMessages=\'[\n    {"text": "Hey, how are you?", "role": "user"},\n    {"text": "I am doing great, how about you?", "role": "ai"},\n    {"text": "What is the meaning of life?", "role": "user"},\n    {\n      "text": "This ultimately depends on the person, but it could be the pursuit of happiness or fulfillment.",\n      "role": "ai"\n    }\n  ]\'\n  style="border-radius: 8px"\n  demo="true"\n></deep-chat>\n')))),(0,l.kt)(s.Z,{mdxType:"LineBreak"}),(0,l.kt)("h3",{id:"names"},(0,l.kt)("inlineCode",{parentName:"h3"},"names")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," | {",(0,l.kt)("a",{parentName:"li",href:"#Name"},(0,l.kt)("inlineCode",{parentName:"a"},"default?: Name")),", ",(0,l.kt)("a",{parentName:"li",href:"#Name"},(0,l.kt)("inlineCode",{parentName:"a"},"ai?: Name")),", ",(0,l.kt)("a",{parentName:"li",href:"#Name"},(0,l.kt)("inlineCode",{parentName:"a"},"user?: Name")),"}")),(0,l.kt)("p",null,"Add names beside messages. You can enable this by setting the value to ",(0,l.kt)("em",{parentName:"p"},"true"),"\nor by defining an object with ",(0,l.kt)("a",{parentName:"p",href:"#Name"},(0,l.kt)("inlineCode",{parentName:"a"},"Name"))," properties. The ",(0,l.kt)("inlineCode",{parentName:"p"},"default")," property is applied to both roles. ",(0,l.kt)("br",null)),(0,l.kt)("h4",{id:"example-4"},"Example"),(0,l.kt)(r.Z,{mdxType:"ComponentContainer"},(0,l.kt)(i.Z,{style:{borderRadius:"8px"},initialMessages:[{text:"Hey, how are you?",role:"user"},{text:"I am doing great, how about you?",role:"ai"},{text:"What is the meaning of life?",role:"user"},{text:"This ultimately depends on the person, but it could be the pursuit of happiness or fulfillment.",role:"ai"}],demo:!0,names:!0,mdxType:"DeepChatBrowser"})),(0,l.kt)(d.Z,{mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<deep-chat names="true"></deep-chat>\n'))),(0,l.kt)(p.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<deep-chat\n  names="true"\n  initialMessages=\'[\n    {"text": "Hey, how are you?", "role": "user"},\n    {"text": "I am doing great, how about you?", "role": "ai"},\n    {"text": "What is the meaning of life?", "role": "user"},\n    {\n      "text": "This ultimately depends on the person, but it could be the pursuit of happiness or fulfillment.",\n      "role": "ai"\n    }\n  ]\'\n  style="border-radius: 8px"\n  demo="true"\n></deep-chat>\n')))),(0,l.kt)(s.Z,{mdxType:"LineBreak"}),(0,l.kt)("h4",{id:"Name"},(0,l.kt)("inlineCode",{parentName:"h4"},"Name")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: {",(0,l.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("inlineCode",{parentName:"li"},"text?: string"),", ",(0,l.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("a",{parentName:"li",href:"./styles#CustomStyle"},(0,l.kt)("inlineCode",{parentName:"a"},"style?: CustomStyle")),", ",(0,l.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("inlineCode",{parentName:"li"},'position?: "left" | "right"')," ",(0,l.kt)("br",null),"\n}")),(0,l.kt)("p",null,"This object is used to configure names that are displayed beside messages. ",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"text")," is the string used for the name. ",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"style")," is used to define the style of the name element. ",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"position")," defines which side of the message the name is going to be displayed."),(0,l.kt)("h4",{id:"example-5"},"Example"),(0,l.kt)(r.Z,{mdxType:"ComponentContainer"},(0,l.kt)(i.Z,{style:{borderRadius:"8px"},initialMessages:[{text:"Hey, how are you?",role:"user"},{text:"I am doing great, how about you?",role:"ai"},{text:"What is the meaning of life?",role:"user"},{text:"This ultimately depends on the person, but it could be the pursuit of happiness or fulfillment.",role:"ai"}],demo:!0,names:{default:{style:{fontSize:"18px",marginTop:"14px"}},ai:{text:"You"},user:{text:"Me"}},mdxType:"DeepChatBrowser"})),(0,l.kt)(d.Z,{mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<deep-chat\n  names=\'{\n    "default": {"style": {"fontSize": "18px", "marginTop": "14px"}},\n    "ai": {"text": "You"},\n    "user": {"text": "Me"}}\'\n></deep-chat>\n'))),(0,l.kt)(p.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<deep-chat\n  names=\'{\n    "default": {"style": {"fontSize": "18px", "marginTop": "14px"}},\n    "ai": {"text": "You"},\n    "user": {"text": "Me"}}\'\n  initialMessages=\'[\n    {"text": "Hey, how are you?", "role": "user"},\n    {"text": "I am doing great, how about you?", "role": "ai"},\n    {"text": "What is the meaning of life?", "role": "user"},\n    {\n      "text": "This ultimately depends on the person, but it could be the pursuit of happiness or fulfillment.",\n      "role": "ai"\n    }\n  ]\'\n  style="border-radius: 8px"\n  demo="true"\n></deep-chat>\n')))),(0,l.kt)(s.Z,{mdxType:"LineBreak"}),(0,l.kt)("h3",{id:"displayLoadingBubble"},(0,l.kt)("inlineCode",{parentName:"h3"},"displayLoadingBubble")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"))),(0,l.kt)("p",null,"Toggle whether the loading bubble should be displayed when waiting for a message response. If set to ",(0,l.kt)("em",{parentName:"p"},"false")," - the ",(0,l.kt)("a",{parentName:"p",href:"./styles/#submitButtonStyles"},"submit button"),"\nwill automatically have a loading animation."),(0,l.kt)("h4",{id:"example-6"},"Example"),(0,l.kt)(r.Z,{mdxType:"ComponentContainer"},(0,l.kt)(i.Z,{style:{borderRadius:"8px"},introMessage:{text:"Send a new message to observe a response with no loading bubble."},displayLoadingBubble:!1,demo:!0,mdxType:"DeepChatBrowser"})),(0,l.kt)(d.Z,{mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<deep-chat displayLoadingBubble="false"></deep-chat>\n'))),(0,l.kt)(p.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<deep-chat\n  displayLoadingBubble="false"\n  introMessage=\'{"text": "Send a new message to observe a response with no loading bubble."}\'\n  style="border-radius: 8px"\n  demo="true"\n></deep-chat>\n')))),(0,l.kt)(s.Z,{mdxType:"LineBreak"}),(0,l.kt)("h3",{id:"errorMessages"},(0,l.kt)("inlineCode",{parentName:"h3"},"errorMessages")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Type: {",(0,l.kt)("br",null),"\n","\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("inlineCode",{parentName:"p"},"displayServiceErrorMessages?: boolean"),", ",(0,l.kt)("br",null),"\n","\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("inlineCode",{parentName:"p"},"overrides?:")," { ",(0,l.kt)("br",null),"\n","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("inlineCode",{parentName:"p"},"default?: string"),", ",(0,l.kt)("br",null),"\n","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("inlineCode",{parentName:"p"},"service?: string"),", ",(0,l.kt)("br",null),"\n","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("inlineCode",{parentName:"p"},"speechToText?: string")," ",(0,l.kt)("br",null),"\n}}")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Default: ",(0,l.kt)("em",{parentName:"p"},'{ displayServiceErrorMessages: false, overrides: {default: "Error, please try again." }}')))),(0,l.kt)("p",null,"Deep Chat automatically displays an error message when something goes wrong. This object is used to control what the message will contain. ",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"displayServiceErrorMessages")," is used to display the full error message that has been returned from the service. ",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"overrides")," is used to overwrite the error message text based on what has caused it: ",(0,l.kt)("inlineCode",{parentName:"p"},"default")," is used for any kind of error, ",(0,l.kt)("inlineCode",{parentName:"p"},"service"),"\nis for communication with the target service and ",(0,l.kt)("inlineCode",{parentName:"p"},"speechToText")," is when there is a problem using the ",(0,l.kt)("a",{parentName:"p",href:"../speech#speechToText"},(0,l.kt)("inlineCode",{parentName:"a"},"speechToText"))," functionality. ",(0,l.kt)("br",null)),(0,l.kt)("h4",{id:"example-7"},"Example"),(0,l.kt)(r.Z,{mdxType:"ComponentContainer"},(0,l.kt)(i.Z,{style:{borderRadius:"8px"},demo:{displayErrors:{default:!0,service:!0,speechToText:!0}},errorMessages:{overrides:{default:"Default error :(",service:"Target service error!",speechToText:"Speech to text microphone error!"}},mdxType:"DeepChatBrowser"})),(0,l.kt)(d.Z,{mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<deep-chat\n  errorMessages=\'{\n    "overrides": {\n      "default": "Default error :(",\n      "service": "Target service error!",\n      "speechToText": "Speech to text microphone error!"\n    }\n  }\'\n></deep-chat>\n'))),(0,l.kt)(p.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<deep-chat\n  errorMessages=\'{\n    "overrides": {\n      "default": "Default error :(",\n      "service": "Target service error!",\n      "speechToText": "Speech to text microphone error!"\n    }\n  }\'\n  style="border-radius: 8px"\n  demo=\'{"displayErrors": {"default": true, "service": true, "speechToText": true}}\'\n></deep-chat>\n')))),(0,l.kt)(s.Z,{mdxType:"LineBreak"}),(0,l.kt)("h2",{id:"types"},"Types"),(0,l.kt)("p",null,"Shared object property types related to messages:"),(0,l.kt)("h3",{id:"MessageContent"},(0,l.kt)("inlineCode",{parentName:"h3"},"MessageContent")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: {",(0,l.kt)("a",{parentName:"li",href:"#MessageRole"},(0,l.kt)("inlineCode",{parentName:"a"},"role: MessageRole")),", ",(0,l.kt)("inlineCode",{parentName:"li"},"text?: string"),", ",(0,l.kt)("a",{parentName:"li",href:"#MessageFile"},(0,l.kt)("inlineCode",{parentName:"a"},"files?: MessageFile[]")),", ",(0,l.kt)("a",{parentName:"li",href:"./HTML"},(0,l.kt)("inlineCode",{parentName:"a"},"html?: string")),"}")),(0,l.kt)("p",null,"Object format used to encapsulate a message within the chat. The ",(0,l.kt)("inlineCode",{parentName:"p"},"role")," property is required whilst other properties are defined/combined depending\non what is being transferred in the message. ",(0,l.kt)("br",null),"\nThe ",(0,l.kt)("inlineCode",{parentName:"p"},"text")," string uses ",(0,l.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/"},"Markdown")," syntax to render the message accordingly. This is useful for displaying code snippets, paragraphs etc. See this ",(0,l.kt)("a",{parentName:"p",href:"https://jonschlinkert.github.io/remarkable/demo/"},"playground")," for reference. ",(0,l.kt)("br",null)),(0,l.kt)("h4",{id:"example-8"},"Example"),(0,l.kt)(r.Z,{mdxType:"ComponentContainer"},(0,l.kt)(i.Z,{style:{borderRadius:"8px"},initialMessages:[{files:[{src:"/img/bird-2.jpeg",type:"image"}],role:"user"},{text:"This is a nice image of a yellow bird on a branch.",role:"ai"}],demo:!0,mdxType:"DeepChatBrowser"})),(0,l.kt)(d.Z,{mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<deep-chat\n  initialMessages=\'[\n    {"files": [{"src": "path-to-image.jpeg", "type": "image"}], "role": "user"},\n    {"text": "This is a nice image of a yellow bird on a branch.", "role": "ai"}\n  ]\'\n></deep-chat>\n'))),(0,l.kt)(p.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<deep-chat\n  initialMessages=\'[\n    {"files": [{"src": "path-to-image.jpeg", "type": "image"}], "role": "user"},\n    {"text": "This is a nice image of a yellow bird on a branch.", "role": "ai"}\n  ]\'\n  style="border-radius: 8px"\n  demo="true"\n></deep-chat>\n')))),(0,l.kt)(s.Z,{mdxType:"LineBreak"}),(0,l.kt)("h3",{id:"MessageRole"},(0,l.kt)("inlineCode",{parentName:"h3"},"MessageRole")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},'"ai"')," | ",(0,l.kt)("inlineCode",{parentName:"li"},'"user"'))),(0,l.kt)("p",null,"Entity that the message was sent from."),(0,l.kt)(s.Z,{mdxType:"LineBreak"}),(0,l.kt)("h3",{id:"MessageFile"},(0,l.kt)("inlineCode",{parentName:"h3"},"MessageFile")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: {",(0,l.kt)("inlineCode",{parentName:"li"},"name?: string"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"src?: string"),", ",(0,l.kt)("a",{parentName:"li",href:"#MessageFileType"},(0,l.kt)("inlineCode",{parentName:"a"},"type?: MessageFileType")),"} ",(0,l.kt)("br",null)),(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("em",{parentName:"li"},'{name: "file", type: "any"}'))),(0,l.kt)("p",null,"Format that defines the details of a file. ",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"name")," is used to display the file name inside the message bubble (if not image/gif/audio). ",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"src")," is either the ",(0,l.kt)("em",{parentName:"p"},"url")," path to the file location or the base64 encoding as a string (make sure to use the correct type prefix e.g: ",(0,l.kt)("em",{parentName:"p"},'"data:(type);base64,"'),").",(0,l.kt)("br",null),"\nThe component will automatically try to infer the file type from the ",(0,l.kt)("inlineCode",{parentName:"p"},"src")," property so that it can render its media correctly,\nhowever you can help it by setting the ",(0,l.kt)("inlineCode",{parentName:"p"},"type"),"."),(0,l.kt)("h4",{id:"example-9"},"Example"),(0,l.kt)(r.Z,{minHeight:535,mdxType:"ComponentContainer"},(0,l.kt)(i.Z,{style:{borderRadius:"8px",height:"480px"},initialMessages:[{role:"user",files:[{src:"/img/city.jpeg",type:"image"},{src:"/img/example-gif-1.gif",type:"image"},{src:"/audio/cantinaBand.wav",type:"audio"},{name:"placeholder.exe"},{src:"/text/text.txt",name:"hello-world.txt",type:"file"}]}],demo:!0,mdxType:"DeepChatBrowser"})),(0,l.kt)(d.Z,{mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<deep-chat\n  initialMessages=\'[\n    {"role": "user", "files": [\n        {"src": "path-to-file.jpeg", "type": "image"},\n        {"src": "data:image/gif;base64,R0lGODlh4A...", "type": "image"},\n        {"src": "path-to-file.wav", "type": "audio"},\n        {"name": "placeholder.exe"},\n        {"src": "path-to-file", "name": "hello-world.txt", "type": "file"}\n  ]}]\'\n></deep-chat>\n'))),(0,l.kt)(p.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<deep-chat\n  initialMessages=\'[\n    {"role": "user", "files": [\n        {"src": "path-to-file.jpeg", "type": "image"},\n        {"src": "data:image/gif;base64,R0lGODlh4A...", "type": "image"},\n        {"src": "path-to-file.wav", "type": "audio"},\n        {"name": "placeholder.exe"},\n        {"src": "path-to-file", "name": "hello-world.txt", "type": "file"}\n  ]}]\'\n  style="height: 370px; border-radius: 8px"\n  demo="true"\n></deep-chat>\n')))),(0,l.kt)(s.Z,{mdxType:"LineBreak"}),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Files with ",(0,l.kt)("em",{parentName:"p"},'"image"')," or ",(0,l.kt)("em",{parentName:"p"},'"any"')," types that contain a ",(0,l.kt)("inlineCode",{parentName:"p"},"src")," property as a url will have their bubble set as a hyperlink.")),(0,l.kt)(s.Z,{mdxType:"LineBreak"}),(0,l.kt)("h3",{id:"MessageFileType"},(0,l.kt)("inlineCode",{parentName:"h3"},"MessageFileType")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},'"image"')," | ",(0,l.kt)("inlineCode",{parentName:"li"},'"audio"')," | ",(0,l.kt)("inlineCode",{parentName:"li"},'"any"'))),(0,l.kt)("p",null,"Type of a file stored inside a message. ",(0,l.kt)("em",{parentName:"p"},'"any"')," is the default type."),(0,l.kt)(s.Z,{mdxType:"LineBreak"}),(0,l.kt)("h2",{id:"code-messages"},"Code messages"),(0,l.kt)("p",null,"By default, messages containing code will be rendered with white text in a dark background.\nIn order to highlight the code, you will need to add an external module called ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/highlight.js?activeTab=readme"},(0,l.kt)("inlineCode",{parentName:"a"},"highligtjs")),".\nCheck out external module ",(0,l.kt)("a",{parentName:"p",href:"../../examples/externalModules"},"EXAMPLES")," to find multiple ways of how you can add it to your project."),(0,l.kt)("h4",{id:"example-10"},"Example"),(0,l.kt)(r.Z,{mdxType:"ComponentContainer"},(0,l.kt)(i.Z,{style:{borderRadius:"8px"},initialMessages:[{text:'```java\nwhile (i < 5) {\n console.log("hi");\n i+= 1;\n}\n```',role:"ai"}],messageStyles:{default:{shared:{bubble:{maxWidth:"270px"}}}},demo:!0,mdxType:"DeepChatBrowser"})),(0,l.kt)(d.Z,{mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<deep-chat\n  initialMessages=\'[\n    {\n      "text": "```java\\nwhile (i < 5) {\\n console.log(\\"hi\\");\\n i+= 1;\\n}\\n```",\n      "role": "ai"\n    }\n  ]\'\n></deep-chat>\n'))),(0,l.kt)(p.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<deep-chat\n  initialMessages=\'[\n    {\n      "text": "```java\\nwhile (i < 5) {\\n console.log(\\"hi\\");\\n i+= 1;\\n}\\n```",\n      "role": "ai"\n    }\n  ]\'\n  messageStyles=\'{\n    "default": {\n      "shared": {\n        "bubble": {"maxWidth": "270px"}\n      }\n    }\n  }\'\n  style="border-radius: 8px"\n  demo="true"\n></deep-chat>\n')))),(0,l.kt)(s.Z,{mdxType:"LineBreak"}))}b.isMDXComponent=!0}}]);