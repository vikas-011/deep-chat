"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8464],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>A});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),p=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=p(a),m=n,A=h["".concat(s,".").concat(m)]||h[m]||c[m]||r;return a?i.createElement(A,l(l({ref:t},d),{},{components:a})):i.createElement(A,l({ref:t},d))}));function A(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[h]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5683:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>A,frontMatter:()=>o,metadata:()=>p,toc:()=>h});var i=a(7462),n=(a(7294),a(3905)),r=a(4554);const l=a.p+"assets/images/hljsLogo-094cfa5e85bc948e5c1a039caf07d7b3.png",o={sidebar_position:3},s="External Modules",p={unversionedId:"examples/externalModules",id:"examples/externalModules",title:"External Modules",description:"To keep Deep Chat as lightweight as possible, some of its functionality requires the use of external modules.",source:"@site/docs/examples/externalModules.mdx",sourceDirName:"examples",slug:"/examples/externalModules",permalink:"/examples/externalModules",draft:!1,editUrl:"https://github.com/OvidijusParsiunas/deep-chat/tree/main/website/docs/examples/externalModules.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"examples",previous:{title:"Servers",permalink:"/examples/servers"},next:{title:"Full Screen",permalink:"/examples/Layout/fullScreen"}},d={},h=[{value:"Implementation",id:"implementation",level:2},{value:"Examples",id:"examples",level:2},{value:"Explanation",id:"explanation",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],c={toc:h},m="wrapper";function A(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"external-modules"},"External Modules"),(0,n.kt)("p",null,"To keep Deep Chat as lightweight as possible, some of its functionality requires the use of external modules.\nThe component has been set up to recognise them by using the ",(0,n.kt)("inlineCode",{parentName:"p"},"window")," object:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Functionality"),(0,n.kt)("th",{parentName:"tr",align:null},"Module"),(0,n.kt)("th",{parentName:"tr",align:null},"Window"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Higlighting ",(0,n.kt)("a",{parentName:"td",href:"../docs/messages#code-messages"},"code")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{src:l,width:"20",style:{float:"left",marginRight:"8px",marginTop:"4px"}})," ",(0,n.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/highlight.js?activeTab=readme"},"highlight.js")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"window.hljs"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"../docs/speech#speechToText"},"Speech to text")," with ",(0,n.kt)("a",{parentName:"td",href:"../docs/speech#AzureOptions"},"Azure")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{src:r.Z,width:"20",style:{float:"left",marginRight:"7px",marginTop:"5px"}})," ",(0,n.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/microsoft-cognitiveservices-speech-sdk"},"microsoft-cognitiveservices-speech-sdk")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"window.SpeechSDK"))))),(0,n.kt)("h2",{id:"implementation"},"Implementation"),(0,n.kt)("p",null,"Here are some simple approaches you can use to add these modules to your project:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("b",null,"Import from a dependancy")," ",(0,n.kt)("br",null),"If you are using a dependancy manager such as npm, you can import the modules and assign them to window:",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Module"),(0,n.kt)("th",{parentName:"tr",align:null},"URL"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/highlight.js?activeTab=readme"},"highlight")),(0,n.kt)("td",{parentName:"tr",align:null},'import hljs from "highlight.js"; ',(0,n.kt)("br",null)," window.hljs = hljs;")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/microsoft-cognitiveservices-speech-sdk"},"speech")),(0,n.kt)("td",{parentName:"tr",align:null},"import ","*"," as sdk from 'microsoft-cognitiveservices-speech-sdk'; ",(0,n.kt)("br",null)," window.SpeechSDK = sdk;")))),(0,n.kt)("br",null)),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("b",null,"Dynamic import from a dependancy")," ",(0,n.kt)("br",null),"If you are using a dependancy manager such as npm, you can dynamically import the modules and assign them to the window object. The highlightjs module can load after messages are generated, use the refreshMessages method to apply it:",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Module"),(0,n.kt)("th",{parentName:"tr",align:null},"URL"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/highlight.js?activeTab=readme"},"highlight")),(0,n.kt)("td",{parentName:"tr",align:null},'import("highlight.js").then((module) => { ',(0,n.kt)("br",null)," ","\xa0","\xa0","\xa0","\xa0"," window.hljs = module.default; ",(0,n.kt)("br",null)," ","\xa0","\xa0","\xa0","\xa0"," chatElementRef.current?.",(0,n.kt)("a",{parentName:"td",href:"../docs/methods#refreshMessages"},"refreshMessages"),"(); ",(0,n.kt)("br",null)," });")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/microsoft-cognitiveservices-speech-sdk"},"speech")),(0,n.kt)("td",{parentName:"tr",align:null},"import('microsoft-cognitiveservices-speech-sdk').then((module) => { ",(0,n.kt)("br",null)," ","\xa0","\xa0","\xa0","\xa0"," window.SpeechSDK = module; ",(0,n.kt)("br",null)," });")))),(0,n.kt)("br",null)),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("b",null,"Script from a CDN")," ",(0,n.kt)("br",null),"You can create script tags with the following URLs and append them to the document body (or manually add the scripts to your markup). The highlightjs module can load after messages are generated, use the refreshMessages method to apply it (window object is automatically populated).",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Module"),(0,n.kt)("th",{parentName:"tr",align:null},"URL"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/highlight.js?activeTab=readme"},"highlight")),(0,n.kt)("td",{parentName:"tr",align:null},"const script = document.createElement('script'); ",(0,n.kt)("br",null)," script.src = '",(0,n.kt)("a",{parentName:"td",href:"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js'"},"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js'"),"; ",(0,n.kt)("br",null)," script.onload = () => chatElementRef.current?.",(0,n.kt)("a",{parentName:"td",href:"../docs/methods#refreshMessages"},"refreshMessages"),"(); ",(0,n.kt)("br",null)," document.body.appendChild(script);")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/microsoft-cognitiveservices-speech-sdk"},"speech")),(0,n.kt)("td",{parentName:"tr",align:null},"const script = document.createElement('script'); ",(0,n.kt)("br",null)," script.src = '",(0,n.kt)("a",{parentName:"td",href:"https://aka.ms/csspeech/jsbrowserpackageraw'"},"https://aka.ms/csspeech/jsbrowserpackageraw'"),"; ",(0,n.kt)("br",null)," document.body.appendChild(script);")))),(0,n.kt)("br",null)),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("b",null,"Script from within the project")," ",(0,n.kt)("br",null),"You can manually download the files from the URLs above, add them to the script tags and append them to the document body (or manually add the scripts to your markup). The highlightjs module can load after messages are generated, use the refreshMessages method to apply it (window object is automatically populated).",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Module"),(0,n.kt)("th",{parentName:"tr",align:null},"URL"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/highlight.js?activeTab=readme"},"highlight")),(0,n.kt)("td",{parentName:"tr",align:null},"const script = document.createElement('script'); ",(0,n.kt)("br",null)," script.src = 'highlight.min.js'; ",(0,n.kt)("br",null)," script.onload = () => chatElementRef.current?.",(0,n.kt)("a",{parentName:"td",href:"../docs/methods#refreshMessages"},"refreshMessages"),"(); ",(0,n.kt)("br",null)," document.body.appendChild(script);")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/microsoft-cognitiveservices-speech-sdk"},"speech")),(0,n.kt)("td",{parentName:"tr",align:null},"const script = document.createElement('script'); ",(0,n.kt)("br",null)," script.src = 'speech.js'; ",(0,n.kt)("br",null)," document.body.appendChild(script);")))),(0,n.kt)("br",null))),(0,n.kt)("p",null,"If your project is using ",(0,n.kt)("inlineCode",{parentName:"p"},"TypeScript"),", add this to the file where the modules are being used:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"import hljs from 'highlight.js';\nimport * as sdk from 'microsoft-cognitiveservices-speech-sdk';\n\ndeclare global {\n  interface Window {\n    hljs: typeof hljs;\n    SpeechSDK: typeof sdk;\n  }\n}\n")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"React project that uses a package bundler - should work similarly for other ",(0,n.kt)("a",{parentName:"p",href:"./frameworks"},"Frameworks"),":"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://stackblitz.com/edit/stackblitz-starters-cebqwu?file=src%2FApp.tsx"},"Click for Live Example")),(0,n.kt)("p",null,"VanillaJS approach with no bundler (this can also be used as fallback if above doesn't work):"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/deep-chat-vanillajs-external-modules-fgw5k5?file=/index.html"},"Click for Live Example")),(0,n.kt)("h2",{id:"explanation"},"Explanation"),(0,n.kt)("p",null,"The decision to have developers download external dependancies was not easily made and there were multiple reasons that\nlead us down this path. ",(0,n.kt)("br",null),"\nFirst, the post-compression size of the above modules is orders of magnitude bigger than Deep Chat. This\nruled out the idea of pre-bundling them into the component. ",(0,n.kt)("br",null),"\nWe then spent some time experimenting with ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import"},"dynamic imports")," which\nseemed promising, but unfortunatelly we hit a roadblock that had no simple way of overcoming; Deep Chat itself is an injectable component that\nexists as part of a parent project which can use any type of a bundler to compile it. This is where\n",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import"},"dynamic imports")," become\nproblematic as they are not supported by all bundlers and in many cases need extra configuration to work. ",(0,n.kt)("br",null),"\nTherefore, to make the lives of our developers as simple as possible; for use cases that do not need the extra functionality - Deep Chat can\nbe installed without any extra work, for use cases that do - we leave the decision of how to implement the modules\nin their hands to alllow them to tailor the approach for their project."),(0,n.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,"If you are experiencing issues for importing/exporting files, please see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OvidijusParsiunas/deep-chat/issues"},(0,n.kt)("strong",{parentName:"a"},"github issues"))," or create\na ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OvidijusParsiunas/deep-chat/issues/new"},(0,n.kt)("strong",{parentName:"a"},"new issue ticket"))," and we will look into\nit as soon as possible."))}A.isMDXComponent=!0},4554:(e,t,a)=>{a.d(t,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAADpCAMAAACp8fr0AAAC+lBMVEVHcEwAiNUAhtoAjuAAi9kAiNUAjNgAgswAiNUAkOEAidcAiNUAitcAmvAAiNUAkeEAiNYAitoAk+UAjt0AidYAiNYAitgAj+AAkeIAiNQAic4Ah9oAidgAjNsAjt4AitcAkOAAh9UAidUAjNsAidUAiNUAhNYAhdIAitgAkeMAi9kAidYAkeEAiNUAiNUAi9oAkeQAiNYAiNQAh9QAjNsAidUAidQAi9oAj98AjdwAidYAidYAjNYAidcAiNUAitYAitYAh9UAi9oAkOIAh9UAiNUAidYAiNYAiNUAidcAkuMAidcAjd4Ai9oAjNwAitQAiNUAh9YAiNYAiNQAiNUAi9kAidUAitMAitcAitgAiNUAidcAlOgAiNUAidYAi9oAiNUAidUAj+EAjNoAidYAjNsAiNUAhdQAiNYAh9UAiNUAh9IAiNUAjd0AidYAiNYAi9gAidEAi9kAiNUAiNUAitkAhNUAiNUAiNYAkuQAidUAiNYAitIAiNUAiNUAidcAidcAiNIAitkAidUAiNUAjd0AidYAiNUAfs4AidcAidcAitkAh9UAidYAitgAidcAkuUAiNUAidcAiNYAhtMAjNkAitgAiNYAidgAi9oAjt0AjNwAitcAiNUAh9UAidYAiNYAi9kAidUAidUAidYAiNUAi9oAidQAidYAjNwAiNUAidcAidYAkN0AiNUAlOoAitkAidYAidgAiNQAi9oAiNUAiNUAitgAh9QAi9gAitgAi9sAidgAiNUAidYAitQAidYAjdsAiNYAidYAidcAiNYAi9oAidUAidYAiNMAjdwAidYAiNUAjNYAkecAiNUAiNQAitgAitYAiNUAh9QAiNUAidYAiNUAitcAiNUAiNQAh9UAidYAitcAidUAidYAidYAh9cAiNUAidYAidYAj98AiNUAitgAitYAiNUAi9kAj98AidYAiNUAiNUAiNYAiNUAidYAitkAiNUAidYAlusAi9oAitYAk+YAlekAj94Ajt4Ai9sAnfb449imAAAA/XRSTlMASxMBlKYGE6z/TirG/74CQt3//1dj8///xwkDg/3///9oEv//1w8jwv////9wPNf/4Blb64J++v//7iUNnJEfLzjS/6RT/Dd1+v+0///4R2GWtsG4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"}}]);