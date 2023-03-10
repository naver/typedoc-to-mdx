"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[541],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,y=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5119:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:2},i=void 0,l={unversionedId:"tutorial/config/typedoc",id:"tutorial/config/typedoc",title:"typedoc",description:"typedoc.json file is required for setting entrypoints & other options that TypeDoc supports.",source:"@site/docs/tutorial/config/typedoc.md",sourceDirName:"tutorial/config",slug:"/tutorial/config/typedoc",permalink:"/typedoc-to-mdx/ko/docs/tutorial/config/typedoc",draft:!1,editUrl:"https://github.com/naver/typedoc-to-mdx/edit/master/demo/docs/docs/tutorial/config/typedoc.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"typedoc-to-mdx",permalink:"/typedoc-to-mdx/ko/docs/tutorial/config/typedoc-to-mdx"}},p={},s=[{value:"Multiple entry points",id:"multiple-entry-points",level:2},{value:"Use the <em>@module</em> tag",id:"use-the-module-tag",level:3}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"typedoc.json")," file is required for setting entrypoints & other options that ",(0,o.kt)("a",{parentName:"p",href:"https://typedoc.org"},"TypeDoc")," supports.",(0,o.kt)("br",{parentName:"p"}),"\n","All available options are defined in the TypeDoc guide."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://typedoc.org/guides/options/"},"https://typedoc.org/guides/options/"))),(0,o.kt)("p",null,"Here's a sample ",(0,o.kt)("inlineCode",{parentName:"p"},"typedoc.json")," config we're using in this project."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "entryPoints": ["./dummy-projects/project1/src/index.ts"],\n  "sourceLinkTemplate": "https://github.com/naver/typedoc-to-mdx/blob/{gitRevision}/{path}#L{line}",\n  "excludePrivate": true,\n  "excludeProtected": true\n}\n')),(0,o.kt)("h2",{id:"multiple-entry-points"},"Multiple entry points"),(0,o.kt)("p",null,"When there're more than one entry point, ",(0,o.kt)("inlineCode",{parentName:"p"},"typedoc-to-mdx")," will create API documents with each entry point as project."),(0,o.kt)("p",null,"Suppose there're two projects, with entry points like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "entryPoints": [\n        "./packages/PROJECT_1/index.ts"\n        "./packages/PROJECT_2/index.ts"\n    ]\n}\n')),(0,o.kt)("p",null,"In the above case, API documents will be generated with the path:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"OUT_DIR/PROJECT_1/...")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"OUT_DIR/PROJECT_2/..."))),(0,o.kt)("p",null,"But, if the entry points are defined like this (with the additional ",(0,o.kt)("inlineCode",{parentName:"p"},"/src"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "entryPoints": [\n        "./packages/PROJECT_1/src/index.ts"\n        "./packages/PROJECT_2/src/index.ts"\n    ]\n}\n')),(0,o.kt)("p",null,"The generated documents will contain the ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," in their path, which you might not want."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"OUT_DIR/src/PROJECT_1/...")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"OUT_DIR/src/PROJECT_2/..."))),(0,o.kt)("h3",{id:"use-the-module-tag"},"Use the ",(0,o.kt)("em",{parentName:"h3"},"@module")," tag"),(0,o.kt)("p",null,"To resolve this issue, you can use ",(0,o.kt)("a",{parentName:"p",href:"https://typedoc.org/tags/module/"},"@module")," tag to redefine the project name."),(0,o.kt)("p",null,"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"index.ts")," file within the ",(0,o.kt)("inlineCode",{parentName:"p"},"PROJECT_1")," contains a comment like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./packages/PROJECT_1/src/index.ts"',title:'"./packages/PROJECT_1/src/index.ts"'},"/**\n * @module alias_of_project_1\n */\n")),(0,o.kt)("p",null,"Then, documents will be generated with the module name you defined:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"OUT_DIR/alias_of_project_1/...")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"OUT_DIR/src/PROJECT_2/..."))))}u.isMDXComponent=!0}}]);