(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{163:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},g=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=l(r),g=n,m=s["".concat(i,".").concat(g)]||s[g]||f[g]||a;return r?o.a.createElement(m,u(u({ref:t},p),{},{components:r})):o.a.createElement(m,u({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=g;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},82:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(2),o=r(6),a=(r(0),r(163)),i={slug:"azure-pipelines-integration",title:"Integrating Stryker.NET in your azure pipelines",author:"Richard Werkman",author_title:"Stryker.NET Team",author_url:"https://github.com/richardwerkman",author_image_url:"https://avatars1.githubusercontent.com/u/14224500?s=460&u=189f6ef9ab6957063d0674f94c014bef39bf4653&v=4",tags:["stryker.net"]},u={permalink:"/blog/azure-pipelines-integration",editUrl:"https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/blog/2020-05-15-azure-pipelines-integration.md",source:"@site/blog/2020-05-15-azure-pipelines-integration.md",description:"Over the past few months we have been working hard to integrate Stryker.NET with azure pipelines. Learn how you can leverage our new features to include mutation testing in your continuous integration.",date:"2020-05-15T00:00:00.000Z",tags:[{label:"stryker.net",permalink:"/blog/tags/stryker-net"}],title:"Integrating Stryker.NET in your azure pipelines",readingTime:4.605,truncated:!0,prevItem:{title:"Announcing Stryker 4.0 Beta",permalink:"/blog/announcing-stryker-4-beta-mutation-switching"},nextItem:{title:"Announcing Stryker 100% mode",permalink:"/blog/announcing-100-mode"}},c=[],p={rightToc:c};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Over the past few months we have been working hard to integrate Stryker.NET with azure pipelines. Learn how you can leverage our new features to include mutation testing in your continuous integration."))}l.isMDXComponent=!0}}]);