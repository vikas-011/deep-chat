"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7754],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>x});var r=n(7462),a=n(7294),o=n(6010),l=n(2466),i=n(6550),s=n(1980),u=n(7392),c=n(12);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=p(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,u]=f({queryString:n,groupId:r}),[d,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),y=(()=>{const e=s??d;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,o]),tabValues:o}}var y=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==i&&(d(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=h(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},a.createElement(v,(0,r.Z)({},e,t)),a.createElement(g,(0,r.Z)({},e,t)))}function x(e){const t=(0,y.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},7235:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7294);function a(){return r.createElement("div",{style:{height:"1px"}})}},1853:(e,t,n)=>{function r(e){window.scrollY>0?e.style.boxShadow="0 1px 2px 0 rgb(0 0 0 / 10%)":e.style.boxShadow="unset"}function a(){setTimeout((()=>{window.removeEventListener("scroll",window.toggleNavOnScroll);const e=document.getElementsByClassName("navbar--fixed-top");if(e[0]){const t=e[0];r(t),window.toggleNavOnScroll=r.bind(this,t),window.addEventListener("scroll",window.toggleNavOnScroll)}}),2)}function o(){setTimeout((()=>{const e=document.querySelectorAll(".homepage > body > #__docusaurus > nav")?.[0];try{e.classList.add("fade-in")}catch(t){console.error(t),console.log("element was not rendered in time - use MutationObserver")}}),2)}n.r(t),n.d(t,{fadeIn:()=>o,readdAutoNavShadowToggle:()=>a})},8751:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var r=n(7294);function a(e){return e?.children[0]?.children[0]}function o(e){let{children:t,minHeight:n,innerDisplay:a}=e;return r.createElement("div",{className:"documentation-example-container",style:{minHeight:`${n||400}px`}},r.createElement("div",{style:{display:a||"block"}},t))}},4602:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(1262),a=n(7294);function o(e){return a.createElement(r.Z,null,(()=>{const t=n(4925).DeepChat;return a.createElement(t,e,e.children)}))}},4995:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294);function a(e){let{isDisplayed:t,children:n}=e;return t?r.createElement("div",null,n):r.createElement("div",null)}function o(e){let{children:t}=e;const[n,o]=r.useState(!1);return r.createElement("div",null,r.createElement("div",{className:"code-toggle",onClick:()=>o(!n)},n?"Hide":"View"," Code"),r.createElement(a,{isDisplayed:n},t))}},7:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>y,frontMatter:()=>u,metadata:()=>d,toc:()=>m});var r=n(7462),a=(n(7294),n(3905)),o=n(8751),l=n(4602),i=(n(4995),n(7235)),s=n(1262);n(5162),n(4866);const u={sidebar_position:1},c="Sticky",d={unversionedId:"examples/Layout/sticky",id:"examples/Layout/sticky",title:"Sticky",description:"Example to help you stick the component to any side of the screen - furthering a chat-like experience to your users. The core method to achieve this is to",source:"@site/docs/examples/Layout/sticky.mdx",sourceDirName:"examples/Layout",slug:"/examples/Layout/sticky",permalink:"/examples/Layout/sticky",draft:!1,editUrl:"https://github.com/OvidijusParsiunas/deep-chat/tree/main/website/docs/examples/Layout/sticky.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"examples",previous:{title:"Full Screen",permalink:"/examples/Layout/fullScreen"}},p={},m=[],f={toc:m},h="wrapper";function y(e){let{components:t,...u}=e;return(0,a.kt)(h,(0,r.Z)({},f,u,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sticky"},"Sticky"),(0,a.kt)("p",null,"Example to help you stick the component to any side of the screen - furthering a chat-like experience to your users. The core method to achieve this is to\nset the ",(0,a.kt)("a",{parentName:"p",href:"../../docs/styles#containerStyle"},(0,a.kt)("inlineCode",{parentName:"a"},"containerStyle"))," property with ",(0,a.kt)("em",{parentName:"p"},'position: "fixed"')," and defining the side you want to component to sit on e.g. ",(0,a.kt)("em",{parentName:"p"},'right: "7%"'),"."),(0,a.kt)(s.Z,{mdxType:"BrowserOnly"},(()=>n(1853).readdAutoNavShadowToggle())),(0,a.kt)("h3",null,"Example code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Frameworks) --\x3e\n\n<deep-chat\n  containerStyle=\'{\n    "borderRadius": "10px",\n    "position": "fixed",\n    "bottom": "0px",\n    "right": "7%",\n    "zIndex": "1"\n  }\'\n  initialMessages=\'[\n    {"text": "Hey, how are you?", "role": "user"},\n    {"text": "I am doing great, how about you?", "role": "ai"},\n    {"text": "What is the meaning of life?", "role": "user"},\n    {"text": "This completely depends on the person.", "role": "ai"}\n  ]\'\n  directConnection=\'{"demo": true}\'\n  stream="true"\n></deep-chat>\n')),(0,a.kt)(i.Z,{mdxType:"LineBreak"}),(0,a.kt)(o.Z,{minHeight:1,mdxType:"ComponentContainer"},(0,a.kt)(l.Z,{directConnection:{demo:!0},initialMessages:[{text:"Hey, how are you?",role:"user"},{text:"I am doing great, how about you?",role:"ai"},{text:"What is the meaning of life?",role:"user"},{text:"This completely depends on the person.",role:"ai"}],stream:!0,containerStyle:{borderRadius:"10px",position:"fixed",bottom:"0px",right:"7%",zIndex:1},mdxType:"DeepChatBrowser"})))}y.isMDXComponent=!0}}]);