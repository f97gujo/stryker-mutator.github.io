(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[6277],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var p=n.createContext({}),u=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},y=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,p=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),y=u(r),f=o,m=y["".concat(p,".").concat(f)]||y[f]||l[f]||a;return r?n.createElement(m,i(i({ref:e},s),{},{components:r})):n.createElement(m,i({ref:e},s))}));function f(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=y;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c.mdxType="string"==typeof t?t:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},5491:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return a},metadata:function(){return i},toc:function(){return c},default:function(){return u}});var n=r(2122),o=(r(7294),r(3905));const a={slug:"typescript-support",title:"TypeScript support",author:"Nico Jansen",author_title:"Stryker Team",author_url:"https://github.com/nicojs",author_image_url:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4",tags:["stryker"]},i={permalink:"/blog/typescript-support",editUrl:"https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/blog/2017-10-06-typescript-support.md",source:"@site/blog/2017-10-06-typescript-support.md",title:"TypeScript support",description:"Stryker 0.10 marks the biggest change in Stryker history yet, as we now support running mutation testing on TypeScript code.",date:"2017-10-06T00:00:00.000Z",formattedDate:"October 6, 2017",tags:[{label:"stryker",permalink:"/blog/tags/stryker"}],readingTime:3.605,truncated:!0,prevItem:{title:"New HTML reporter",permalink:"/blog/new-html-report"},nextItem:{title:"Stryker 0.8 release",permalink:"/blog/stryker-0-8-0"}},c=[],p={toc:c};function u({components:t,...e}){return(0,o.kt)("wrapper",(0,n.Z)({},p,e,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Stryker 0.10 marks the biggest change in Stryker history yet, as we now support running mutation testing on TypeScript code."))}u.isMDXComponent=!0}}]);