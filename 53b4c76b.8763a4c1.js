(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{163:function(t,e,r){"use strict";r.d(e,"a",(function(){return s})),r.d(e,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var l=o.a.createContext({}),p=function(t){var e=o.a.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},s=function(t){var e=p(t.components);return o.a.createElement(l.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},m=o.a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,a=t.originalType,i=t.parentName,l=u(t,["components","mdxType","originalType","parentName"]),s=p(r),m=n,d=s["".concat(i,".").concat(m)]||s[m]||f[m]||a;return r?o.a.createElement(d,c(c({ref:e},l),{},{components:r})):o.a.createElement(d,c({ref:e},l))}));function d(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c.mdxType="string"==typeof t?t:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},91:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return i})),r.d(e,"metadata",(function(){return c})),r.d(e,"rightToc",(function(){return u})),r.d(e,"default",(function(){return p}));var n=r(2),o=r(6),a=(r(0),r(163)),i={slug:"introduction-to-mutation-testing",title:"Introduction to mutation testing",author:"Simon de Lang",author_title:"Stryker Team",author_url:"https://github.com/simondel",author_image_url:"https://avatars1.githubusercontent.com/u/4221997?s=460&u=d09f7c27690d66764ff2f2ebb6d9f8d5431ad9e3&v=4",tags:["stryker"]},c={permalink:"/blog/introduction-to-mutation-testing",editUrl:"https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/blog/2017-01-17-introduction-to-mutation-testing.md",source:"@site/blog/2017-01-17-introduction-to-mutation-testing.md",description:"Writing unit tests can be hard. Even for an easy example such as a calculator app.",date:"2017-01-17T00:00:00.000Z",tags:[{label:"stryker",permalink:"/blog/tags/stryker"}],title:"Introduction to mutation testing",readingTime:4.505,truncated:!0,prevItem:{title:"Stryker weekend",permalink:"/blog/stryker-weekend"},nextItem:{title:"Happy new Stryker!",permalink:"/blog/happy-new-stryker"}},u=[],l={rightToc:u};function p(t){var e=t.components,r=Object(o.a)(t,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Writing unit tests can be hard. Even for an easy example such as a calculator app.\nThere are unlimited combinations of inputs for a calculator and you're not going to test every single one. So when are you done testing?"))}p.isMDXComponent=!0}}]);