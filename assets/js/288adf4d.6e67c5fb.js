"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7241],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,y=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(y,i(i({ref:t},u),{},{components:n})):a.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>C});var a=n(7462),r=n(7294),o=n(6010),i=n(2466),l=n(6550),c=n(1980),s=n(7392),u=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function y(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[c,s]=y({queryString:n,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),k=(()=>{const e=c??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),h(e)}),[s,h,o]),tabValues:o}}var k=n(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:l,selectValue:c,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=s[n].value;a!==l&&(p(t),c(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function g(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function C(e){const t=(0,k.Z)();return r.createElement(g,(0,a.Z)({key:String(t)},e))}},7235:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);function r(){return a.createElement("div",{style:{height:"1px"}})}},1853:(e,t,n)=>{function a(e){window.scrollY>0?e.style.boxShadow="0 1px 2px 0 rgb(0 0 0 / 10%)":e.style.boxShadow="unset"}function r(){setTimeout((()=>{window.removeEventListener("scroll",window.toggleNavOnScroll);const e=document.getElementsByClassName("navbar--fixed-top");if(e[0]){const t=e[0];a(t),window.toggleNavOnScroll=a.bind(this,t),window.addEventListener("scroll",window.toggleNavOnScroll)}}),2)}function o(){setTimeout((()=>{const e=document.querySelectorAll(".homepage > body > #__docusaurus > nav")?.[0];try{e.classList.add("fade-in")}catch(t){console.error(t),console.log("element was not rendered in time - use MutationObserver")}}),2)}n.r(t),n.d(t,{fadeIn:()=>o,readdAutoNavShadowToggle:()=>r})},8751:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var a=n(7294);function r(e){return e?.children[0]?.children[0]}function o(e){let{children:t,minHeight:n,innerDisplay:r}=e;return a.createElement("div",{className:"documentation-example-container",style:{minHeight:`${n||400}px`}},a.createElement("div",{style:{display:r||"block"}},t))}},5833:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);function r(e){let{children:t}=e;const[n,r]=a.useState(!0);return a.createElement("div",null,n&&t[0],!n&&t[1],a.createElement("div",{className:"component-key-toggle-button-container"},a.createElement("button",{className:"documentation-button component-key-toggle-button",onClick:()=>r(!n)},n&&"Insert test key",!n&&"Use placeholder key")))}},4602:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(1262),r=n(7294);function o(e){return r.createElement(a.Z,null,(()=>{const t=n(4925).DeepChat;return r.createElement(t,e,e.children)}))}},9199:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>v,frontMatter:()=>d,metadata:()=>y,toc:()=>k});var a=n(7462),r=(n(7294),n(3905)),o=n(5833),i=n(8751),l=n(4602),c=n(7235),s=n(1262),u=n(5162),p=n(4866);const d={sidebar_position:3},m="Direct Connection",y={unversionedId:"docs/directConnection/directConnection",id:"docs/directConnection/directConnection",title:"Direct Connection",description:"Deep Chat can be configured to bypass the use of an intermediary service and connect to a popular AI service API directly from the UI. The component's configuration",source:"@site/docs/docs/directConnection/directConnection.mdx",sourceDirName:"docs/directConnection",slug:"/docs/directConnection/",permalink:"/docs/directConnection/",draft:!1,editUrl:"https://github.com/OvidijusParsiunas/deep-chat/tree/main/website/docs/docs/directConnection/directConnection.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docs",previous:{title:"Connect",permalink:"/docs/connect"},next:{title:"OpenAI",permalink:"/docs/directConnection/OpenAI"}},h={},k=[{value:"<code>directConnection</code>",id:"directConnection",level:3},{value:"Types",id:"types",level:2},{value:"<code>APIKey</code>",id:"APIKey",level:3},{value:"Key Example",id:"key-example",level:4},{value:"Validation Example",id:"validation-example",level:4}],f={toc:k},b="wrapper";function v(e){let{components:t,...d}=e;return(0,r.kt)(b,(0,a.Z)({},f,d,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"direct-connection"},"Direct Connection"),(0,r.kt)("p",null,"Deep Chat can be configured to bypass the use of an intermediary service and connect to a popular AI service API directly from the UI. The component's configuration\n(such as file upload buttons / message limits) will automatically be changed to suit the target API. This can nevertheless be overwitten manually. ",(0,r.kt)("br",null)),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The use of ",(0,r.kt)("a",{parentName:"p",href:"#directConnection"},(0,r.kt)("inlineCode",{parentName:"a"},"directConnection"))," and ",(0,r.kt)("a",{parentName:"p",href:"#APIKey"},(0,r.kt)("inlineCode",{parentName:"a"},"APIKey"))," properties will expose the API key on your browser. This is\nintended for ",(0,r.kt)("strong",{parentName:"p"},"prototyping / demo purposes ONLY"),". Before deploying this component, you should instead use the ",(0,r.kt)("a",{parentName:"p",href:"../connect#request"},(0,r.kt)("inlineCode",{parentName:"a"},"request"))," property to direct\nall the requests to your own service. Read more about this in ",(0,r.kt)("a",{parentName:"p",href:"../connect"},(0,r.kt)("inlineCode",{parentName:"a"},"Connect"))," and check ",(0,r.kt)("a",{parentName:"p",href:"https://deepchat.dev/examples/servers"},"examples"),".")),(0,r.kt)("h3",{id:"directConnection"},(0,r.kt)("inlineCode",{parentName:"h3"},"directConnection")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: {",(0,r.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("inlineCode",{parentName:"li"},"openAI?:")," {",(0,r.kt)("a",{parentName:"li",href:"openAI#openAI"},(0,r.kt)("inlineCode",{parentName:"a"},"OpenAI")),", ",(0,r.kt)("a",{parentName:"li",href:"#APIKey"},(0,r.kt)("inlineCode",{parentName:"a"},"APIKey")),"}, ",(0,r.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("inlineCode",{parentName:"li"},"huggingFace?:")," {",(0,r.kt)("a",{parentName:"li",href:"huggingFace#huggingFace"},(0,r.kt)("inlineCode",{parentName:"a"},"HuggingFace")),", ",(0,r.kt)("a",{parentName:"li",href:"#APIKey"},(0,r.kt)("inlineCode",{parentName:"a"},"APIKey")),"}, ",(0,r.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("inlineCode",{parentName:"li"},"azure?:")," {",(0,r.kt)("a",{parentName:"li",href:"azure#azure"},(0,r.kt)("inlineCode",{parentName:"a"},"Azure")),", ",(0,r.kt)("a",{parentName:"li",href:"#APIKey"},(0,r.kt)("inlineCode",{parentName:"a"},"APIKey")),"}, ",(0,r.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("inlineCode",{parentName:"li"},"cohere?:")," {",(0,r.kt)("a",{parentName:"li",href:"cohere#cohere"},(0,r.kt)("inlineCode",{parentName:"a"},"Cohere")),", ",(0,r.kt)("a",{parentName:"li",href:"#APIKey"},(0,r.kt)("inlineCode",{parentName:"a"},"APIKey")),"}, ",(0,r.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("inlineCode",{parentName:"li"},"assemblyAI?:")," {",(0,r.kt)("a",{parentName:"li",href:"assemblyAI#assemblyAI"},(0,r.kt)("inlineCode",{parentName:"a"},"AssemblyAI")),", ",(0,r.kt)("a",{parentName:"li",href:"#APIKey"},(0,r.kt)("inlineCode",{parentName:"a"},"APIKey")),"}, ",(0,r.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("inlineCode",{parentName:"li"},"demo?:")," ",(0,r.kt)("a",{parentName:"li",href:"demo#demo"},(0,r.kt)("inlineCode",{parentName:"a"},"Demo"))," ",(0,r.kt)("br",null),"\n}")),(0,r.kt)(s.Z,{mdxType:"BrowserOnly"},(()=>n(1853).readdAutoNavShadowToggle())),(0,r.kt)("h2",{id:"types"},"Types"),(0,r.kt)("p",null,"Shared types for the ",(0,r.kt)("inlineCode",{parentName:"p"},"directConnection")," property."),(0,r.kt)("h3",{id:"APIKey"},(0,r.kt)("inlineCode",{parentName:"h3"},"APIKey")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: {",(0,r.kt)("inlineCode",{parentName:"li"},"key?: string"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"validateKeyProperty?: boolean"),"}")),(0,r.kt)("p",null,"These object properties are used to load up the chat view without the user having to insert the API key. ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"key")," is the target service's API key required for authentication. ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"validateKeyProperty")," is used to validate the value that is set for the ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," property. This will render a loading circle before the chat view\nis loaded up during the validation period."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This object is intended to be used for ",(0,r.kt)("strong",{parentName:"p"},"prototyping purposes ONLY")," and should not be deployed to an environment as it can be accessed in the browser.\nBefore going live, use the ",(0,r.kt)("a",{parentName:"p",href:"../connect#request"},(0,r.kt)("inlineCode",{parentName:"a"},"request"))," property in combination with your own service to safely access your key there.\nRead more about this in ",(0,r.kt)("a",{parentName:"p",href:"../connect"},(0,r.kt)("inlineCode",{parentName:"a"},"Connect"))," and check ",(0,r.kt)("a",{parentName:"p",href:"https://deepchat.dev/examples/servers"},"examples"),".")),(0,r.kt)(c.Z,{mdxType:"LineBreak"}),(0,r.kt)("h4",{id:"key-example"},"Key Example"),(0,r.kt)(o.Z,{mdxType:"ContainersKeyToggle"},(0,r.kt)(i.Z,{mdxType:"ComponentContainer"},(0,r.kt)(l.Z,{containerStyle:{borderRadius:"8px"},directConnection:{openAI:{key:"placeholder key",chat:{systemPrompt:"Assist me with anything you can"}}},mdxType:"DeepChatBrowser"})),(0,r.kt)(i.Z,{mdxType:"ComponentContainer"},(0,r.kt)(l.Z,{containerStyle:{borderRadius:"8px"},directConnection:{openAI:{chat:{systemPrompt:"Assist me with anything you can"}}},mdxType:"DeepChatBrowser"}))),(0,r.kt)(p.Z,{mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<deep-chat\n  directConnection=\'{\n    "openAI": {\n      "key": "placeholder key",\n      "chat": {"systemPrompt": "Assist me with anything you can"}\n    }\n  }\'\n></deep-chat>\n'))),(0,r.kt)(u.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<deep-chat\n  directConnection=\'{\n    "openAI": {\n      "key": "placeholder key",\n      "chat": {"systemPrompt": "Assist me with anything you can"}\n    }\n  }\'\n  containerStyle=\'{"borderRadius": "8px"}\'\n></deep-chat>\n')))),(0,r.kt)(c.Z,{mdxType:"LineBreak"}),(0,r.kt)("h4",{id:"validation-example"},"Validation Example"),(0,r.kt)(o.Z,{mdxType:"ContainersKeyToggle"},(0,r.kt)(i.Z,{mdxType:"ComponentContainer"},(0,r.kt)(l.Z,{containerStyle:{borderRadius:"8px"},directConnection:{openAI:{key:"placeholder key",validateKeyProperty:!0,chat:{systemPrompt:"Assist me with anything you can"}}},mdxType:"DeepChatBrowser"})),(0,r.kt)(i.Z,{mdxType:"ComponentContainer"},(0,r.kt)(l.Z,{containerStyle:{borderRadius:"8px"},directConnection:{openAI:{validateKeyProperty:!0,chat:{systemPrompt:"Assist me with anything you can"}}},mdxType:"DeepChatBrowser"}))),(0,r.kt)(p.Z,{mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<deep-chat\n  directConnection=\'{\n    "openAI": {\n      "key": "placeholder key",\n      "validateKeyProperty": true,\n      "chat": {"systemPrompt": "Assist me with anything you can"}\n    }\n  }\'\n></deep-chat>\n'))),(0,r.kt)(u.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<deep-chat\n  directConnection=\'{\n    "openAI": {\n      "key": "placeholder key",\n      "validateKeyProperty": true,\n      "chat": {"systemPrompt": "Assist me with anything you can"}\n    }\n  }\'\n  containerStyle=\'{"borderRadius": "8px"}\'\n></deep-chat>\n')))),(0,r.kt)(c.Z,{mdxType:"LineBreak"}))}v.isMDXComponent=!0}}]);