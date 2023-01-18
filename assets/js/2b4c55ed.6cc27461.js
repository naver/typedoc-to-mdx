"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[257],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var r=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,s=function(e,t){if(null==e)return{};var a,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var c=r.createContext({}),d=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},i="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,s=e.mdxType,n=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),i=d(a),u=s,k=i["".concat(c,".").concat(u)]||i[u]||p[u]||n;return a?r.createElement(k,l(l({ref:t},m),{},{components:a})):r.createElement(k,l({ref:t},m))}));function k(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=a.length,l=new Array(n);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[i]="string"==typeof e?e:s,l[1]=o;for(var d=2;d<n;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8791:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>i,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var r=a(7462),s=(a(7294),a(3905));const n={custom_edit_url:null},l="ParentClass",o={unversionedId:"api/Class/ParentClass",id:"api/Class/ParentClass",title:"ParentClass",description:"Since version 1.0.0",source:"@site/docs/api/Class/ParentClass.mdx",sourceDirName:"api/Class",slug:"/api/Class/ParentClass",permalink:"/typedoc-to-mdx/docs/api/Class/ParentClass",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"DummyClass",permalink:"/typedoc-to-mdx/docs/api/Class/DummyClass"},next:{title:"Categorized",permalink:"/typedoc-to-mdx/docs/api/Dummy/Class/Categorized"}},c={},d=[{value:"Constructor",id:"constructor",level:2},{value:"Properties",id:"properties",level:2},{value:"VERSION",id:"VERSION",level:3},{value:"inheritedProperty",id:"inheritedProperty",level:3},{value:"Methods",id:"methods",level:2},{value:"parentMethodA",id:"parentMethodA",level:3}],m={toc:d};function i(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"parentclass"},"ParentClass"),(0,s.kt)("div",{className:"doc-side"},(0,s.kt)("div",{className:"doc-version"},"Since version 1.0.0")),(0,s.kt)("div",{className:"doc-subtitle"},(0,s.kt)("p",null,"A dummy parent class for test")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"class ParentClass\n")),(0,s.kt)("div",{className:"doc-summary doc-properties"},(0,s.kt)("h3",{className:"doc-summary-title"},"Properties"),(0,s.kt)("div",{className:"doc-summary-item"},(0,s.kt)("div",{className:"doc-summary-name"},(0,s.kt)("a",{href:"#VERSION"},"VERSION")),(0,s.kt)("div",{className:"doc-summary-desc"},(0,s.kt)("p",null,"Version info string"))),(0,s.kt)("div",{className:"doc-summary-item"},(0,s.kt)("div",{className:"doc-summary-name"},(0,s.kt)("a",{href:"#inheritedProperty"},"inheritedProperty")),(0,s.kt)("div",{className:"doc-summary-desc"},(0,s.kt)("p",null,"A property to inherit")))),(0,s.kt)("div",{className:"doc-summary doc-methods"},(0,s.kt)("h3",{className:"doc-summary-title"},"Methods"),(0,s.kt)("div",{className:"doc-summary-item"},(0,s.kt)("div",{className:"doc-summary-name"},(0,s.kt)("a",{href:"#parentMethodA"},"parentMethodA")),(0,s.kt)("div",{className:"doc-summary-desc"},(0,s.kt)("p",null,"Method A of ParentClass")))),(0,s.kt)("h2",{id:"constructor"},"Constructor"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"new ParentClass(): ParentClass\n")),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("div",{className:"doc-header-hidden"},(0,s.kt)("h3",{id:"VERSION"},"VERSION")),(0,s.kt)("span",{className:"badge badge--info"},"static")," ",(0,s.kt)("span",{className:"badge badge--secondary"},"readonly"),(0,s.kt)("div",{className:"doc-entry"},(0,s.kt)("details",{open:!0,className:"doc-property"},(0,s.kt)("summary",{className:"doc-member"},(0,s.kt)("span",{className:"doc-name"},"VERSION"),(0,s.kt)("span",{className:"doc-type"},(0,s.kt)("p",null,"string"))),(0,s.kt)("div",{className:"doc-desc"},(0,s.kt)("p",null,"Version info string")),(0,s.kt)("admonition",{title:"Example",type:"info"},(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"ParentClass.VERSION;  // ex) 4.0.0\n"))))),(0,s.kt)("div",{className:"doc-header-hidden"},(0,s.kt)("h3",{id:"inheritedProperty"},"inheritedProperty")),(0,s.kt)("div",{className:"doc-entry"},(0,s.kt)("details",{open:!0,className:"doc-property"},(0,s.kt)("summary",{className:"doc-member"},(0,s.kt)("span",{className:"doc-name"},"inheritedProperty"),(0,s.kt)("span",{className:"doc-type"},(0,s.kt)("p",null,"number"))),(0,s.kt)("div",{className:"doc-desc"},(0,s.kt)("p",null,"A property to inherit")))),(0,s.kt)("h2",{id:"methods"},"Methods"),(0,s.kt)("div",{className:"doc-header-hidden"},(0,s.kt)("h3",{id:"parentMethodA"},"parentMethodA")),(0,s.kt)("div",{className:"doc-entry-version",title:"Supported Version"},">=1.99.0"),(0,s.kt)("div",{className:"doc-entry"},(0,s.kt)("details",{open:!0,className:"doc-method"},(0,s.kt)("summary",{className:"doc-member"},(0,s.kt)("span",{className:"doc-name"},"parentMethodA"),(0,s.kt)("span",{className:"doc-type"},(0,s.kt)("p",null,"number"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"parentMethodA(param: { a: number; b: number }): number\n")),(0,s.kt)("div",{className:"doc-desc"},(0,s.kt)("p",null,"Method A of ParentClass")),(0,s.kt)("h4",null,"Parameters"),(0,s.kt)("div",{className:"doc-param"},(0,s.kt)("div",{className:"doc-param-header"},(0,s.kt)("span",{className:"doc-name"},"param"),(0,s.kt)("div",{className:"doc-type"},(0,s.kt)("p",null,"{","\xa0","a:","\xa0","number;","\xa0","b:","\xa0","number","\xa0","}")),(0,s.kt)("div",{className:"doc-default",title:"Default Value"},(0,s.kt)("p",null,"..."))),(0,s.kt)("div",{className:"doc-desc"},(0,s.kt)("p",null,"Parameter ")),(0,s.kt)("div",{className:"doc-sub-param"},(0,s.kt)("span",{className:"doc-name"},"param.a"),(0,s.kt)("div",{className:"doc-type"},(0,s.kt)("p",null,"number")),(0,s.kt)("div",{className:"doc-default",title:"Default Value"},(0,s.kt)("p",null,"123")),(0,s.kt)("div",{className:"doc-desc"},(0,s.kt)("p",null,"Param A "))),(0,s.kt)("div",{className:"doc-sub-param"},(0,s.kt)("span",{className:"doc-name"},"param.b"),(0,s.kt)("div",{className:"doc-type"},(0,s.kt)("p",null,"number")),(0,s.kt)("div",{className:"doc-default",title:"Default Value"},(0,s.kt)("p",null,"456")),(0,s.kt)("div",{className:"doc-desc"},(0,s.kt)("p",null,"Param B ")))),(0,s.kt)("h4",{className:"doc-comment-title"},"Returns"),(0,s.kt)("p",null,"A number "))))}i.isMDXComponent=!0}}]);