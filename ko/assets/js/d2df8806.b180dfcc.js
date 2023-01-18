"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[227],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=s(n),m=l,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=m;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[d]="string"==typeof e?e:l,i[1]=r;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6321:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>s});var o=n(7462),l=(n(7294),n(3905));const a={title:"Config",id:"config",slug:"/config",sidebar_position:3},i=void 0,r={unversionedId:"tutorial/config",id:"tutorial/config",title:"Config",description:"Configs can be provided either by command line parameters or config file with JSON format.",source:"@site/docs/tutorial/config.md",sourceDirName:"tutorial",slug:"/config",permalink:"/typedoc-to-mdx/ko/docs/config",draft:!1,editUrl:"https://github.com/naver/typedoc-to-mdx/edit/master/demo/docs/docs/tutorial/config.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Config",id:"config",slug:"/config",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Setting up Docusaurus",permalink:"/typedoc-to-mdx/ko/docs/setting-up-docusaurus"},next:{title:"Additional Tags",permalink:"/typedoc-to-mdx/ko/docs/tutorial/tags"}},p={},s=[{value:"Sample typedoc-to-mdx.json",id:"sample-typedoc-to-mdxjson",level:2},{value:"Sample shell script",id:"sample-shell-script",level:2},{value:"Sample shell script (when using the config file)",id:"sample-shell-script-when-using-the-config-file",level:2},{value:"Options",id:"options",level:2},{value:"locales",id:"locales",level:3},{value:"outDir",id:"outdir",level:3},{value:"localesDir",id:"localesdir",level:3},{value:"typedoc",id:"typedoc",level:3},{value:"tsconfig",id:"tsconfig",level:3}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Configs can be provided either by command line parameters or config file with JSON format."),(0,l.kt)("h2",{id:"sample-typedoc-to-mdxjson"},"Sample typedoc-to-mdx.json"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=typedoc-to-mdx.json",title:"typedoc-to-mdx.json"},'{\n  "outDir": "./demo/docs/api",\n  "locales": ["ko"],\n  "localesDir": "./demo/i18n/{locale}/docusaurus-plugin-content-docs/current/api",\n  "typedoc": "./typedoc.json",\n  "tsconfig": "./tsconfig.json",\n  "baseUrl": "https://github.com/naver/typedoc-to-mdx/"\n}\n')),(0,l.kt)("h2",{id:"sample-shell-script"},"Sample shell script"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'typedoc-to-mdx -o "./demo/docs/api" -s "docs" --typedoc "typedoc.json"\n')),(0,l.kt)("h2",{id:"sample-shell-script-when-using-the-config-file"},"Sample shell script (when using the config file)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"typedoc-to-mdx -c typedoc-to-mdx.json\n")),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"locales"},"locales"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"type: string[]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-l, --locales"))),(0,l.kt)("p",null,"An array of locale strings to enable.",(0,l.kt)("br",{parentName:"p"}),"\n","This will separate all descriptions inside jsdoc that starts with ",(0,l.kt)("inlineCode",{parentName:"p"},'@"TARGET_LOCALE"')," and ",(0,l.kt)("inlineCode",{parentName:"p"},"{@TARGET_LOCALE DESC}")," then save them where it specified on the ",(0,l.kt)("inlineCode",{parentName:"p"},"localesDir")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"JSDoc Example)"),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * Class Property A\n * @ko \ud074\ub798\uc2a4 \ud504\ub85c\ud37c\ud2f0 A\n * @type {string}\n * @readonly\n * @example\n * ```ts\n * new DummyClass("b").propA === "b";\n * ```\n */\n/**\n * Method A\n * @param {number} a description of param a<ko>\ud328\ub7ec\ubbf8\ud130 A\uc758 \uc124\uba85</ko>\n * @param {string} [b="DUMMY_TEXT"] description of param b<ko>\ud328\ub7ec\ubbf8\ud130 B\uc758 \uc124\uba85</ko>\n */\n'))),(0,l.kt)("h3",{id:"outdir"},"outDir"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"type: string"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-o, --outDir"))),(0,l.kt)("p",null,"Path to generate mdx files."),(0,l.kt)("h3",{id:"localesdir"},"localesDir"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"type: string"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-d, --localesDir"))),(0,l.kt)("p",null,"Path to generate mdx files with locales applied.",(0,l.kt)("br",{parentName:"p"}),"\n","If the locale name should be applied to the path name, you can include the special string ",(0,l.kt)("inlineCode",{parentName:"p"},"{locale}")," then it will automatically transform into the target locale name."),(0,l.kt)("h3",{id:"typedoc"},"typedoc"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"type: string"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--typedoc <path>"))),(0,l.kt)("p",null,"Path to the ",(0,l.kt)("inlineCode",{parentName:"p"},"typedoc.json")," file"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"See ",(0,l.kt)("a",{parentName:"p",href:"https://typedoc.org/guides/options/"},"https://typedoc.org/guides/options/")," for available options")),(0,l.kt)("h3",{id:"tsconfig"},"tsconfig"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"type: string"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--tsconfig <path>"))),(0,l.kt)("p",null,"Path to the ",(0,l.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file"))}d.isMDXComponent=!0}}]);