(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{137:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(6),o=(r(0),r(163)),i={slug:"stryker-weekend",title:"Stryker weekend",author:"Simon de Lang",author_title:"Stryker Team",author_url:"https://github.com/simondel",author_image_url:"https://avatars1.githubusercontent.com/u/4221997?s=460&u=d09f7c27690d66764ff2f2ebb6d9f8d5431ad9e3&v=4",tags:["stryker"]},c={permalink:"/blog/stryker-weekend",editUrl:"https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/blog/2017-02-21-stryker-weekend.md",source:"@site/blog/2017-02-21-stryker-weekend.md",description:"During the last weekend of January we spent a weekend with ten students from the HAN University and University of Twente developing valuable features for Stryker!",date:"2017-02-21T00:00:00.000Z",tags:[{label:"stryker",permalink:"/blog/tags/stryker"}],title:"Stryker weekend",readingTime:1.73,truncated:!0,prevItem:{title:"Stryker 0.6.4 released",permalink:"/blog/stryker-0-6-4"},nextItem:{title:"Introduction to mutation testing",permalink:"/blog/introduction-to-mutation-testing"}},s=[],p={rightToc:s};function l(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"During the last weekend of January we spent a weekend with ten students from the HAN University and University of Twente developing valuable features for Stryker!"),Object(o.b)("p",null,"The group was divided into four teams, each with their own goal. Nico Jansen provided a short TypeScript course to get everyone up to speed on developing using TypeScript and after that everyone started working hard on improving Stryker."),Object(o.b)("p",null,Object(o.b)("img",{src:r(231).default})),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Archcry"}),"Sander")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/wesselhendriks"}),"Wessel")," decided to dive deep into the Stryker codebase to introduce ",Object(o.b)("inlineCode",{parentName:"p"},"async"),"-",Object(o.b)("inlineCode",{parentName:"p"},"await")," in as much of the Stryker repository as possible. They learned that it was not possible to use it everywhere, but nevertheless it cleaned up the codebase nicely!"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Floormidabel"}),"Florian")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/stienis96"}),"Stijn")," decided to introduce another new TypeScript feature. They added the ",Object(o.b)("inlineCode",{parentName:"p"},"strictNullChecks")," feature to the Stryker codebase. By adding the feature, they force us to write cleaner code. However, before they could compile the codebase with the feature turned on they had to fix two full pages filled with errors, but that didn't stop Olaf and Stijn!"),Object(o.b)("p",null,"Not everyone decided to try out new TypeScript features, some also decided to improve the core functionality of Stryker: mutating code. ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/JellePetersHAN"}),"Jelle"),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/MarktHart"}),"Mark")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Wouter1810"}),"Wouter")," added two new mutators and added tests for one of the existing mutators. Their ",Object(o.b)("inlineCode",{parentName:"p"},"ArrayDeclarationMutator")," is capable of creating an empty array whenever you initialize an array with values. For example, the code ",Object(o.b)("inlineCode",{parentName:"p"},"[1, 2, 'Hello']")," could be mutated to: ",Object(o.b)("inlineCode",{parentName:"p"},"[]"),". They also added the ",Object(o.b)("inlineCode",{parentName:"p"},"ConstantNumberMutator")," which will change the declaration of a ",Object(o.b)("inlineCode",{parentName:"p"},"const")," to ",Object(o.b)("inlineCode",{parentName:"p"},"0"),"."),Object(o.b)("p",null,"Last but not least, ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/korthout"}),"Nico"),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/OlafHaalstra"}),"Olaf"),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/DiedB"}),"Diederik")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/avassem85"}),"Alex")," worked on improving the onboarding of new projects by creating the stryker-cli. This tool is capable of integrating Stryker into your project in an interactive way. It's even capable of installing the required packages so you can start using Stryker with minimal effort!"),Object(o.b)("p",null,"In the end, the weekend was a success. We all had a blast and we managed to develop more features than we had expected. The students exceeded our expectations with their skill and enthusiasm. This is something we definitely want to do more often!"),Object(o.b)("p",null,Object(o.b)("img",{src:r(232).default})))}l.isMDXComponent=!0},163:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),b=n,h=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return r?a.a.createElement(h,c(c({ref:t},p),{},{components:r})):a.a.createElement(h,c({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},231:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/stryker-weekend-team-photo-4d931058991e133dab7009939d97da8a.jpg"},232:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/stryker-ascii-a61c20e21781de970631f1f93b1510e0.jpg"}}]);