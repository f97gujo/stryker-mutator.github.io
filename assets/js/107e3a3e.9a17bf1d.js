(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[2472],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return b}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(r),b=a,m=d["".concat(s,".").concat(b)]||d[b]||c[b]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1728:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return p},default:function(){return l}});var n=r(2122),a=(r(7294),r(3905));const o={slug:"babel-support",title:"Stryker adds Babel support",author:"Simon de Lang",author_title:"Stryker Team",author_url:"https://github.com/simondel",author_image_url:"https://avatars1.githubusercontent.com/u/4221997?s=460&u=d09f7c27690d66764ff2f2ebb6d9f8d5431ad9e3&v=4",tags:["stryker"]},i={permalink:"/blog/babel-support",editUrl:"https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/blog/2017-12-01-babel-support.md",source:"@site/blog/2017-12-01-babel-support.md",title:"Stryker adds Babel support",description:"A new Stryker plugin that adds support for Babel projects has just been released!",date:"2017-12-01T00:00:00.000Z",formattedDate:"December 1, 2017",tags:[{label:"stryker",permalink:"/blog/tags/stryker"}],readingTime:2.125,truncated:!0,prevItem:{title:"TypeScript coverage analysis support",permalink:"/blog/typescript-coverage-analysis-support"},nextItem:{title:"New HTML reporter",permalink:"/blog/new-html-report"}},p=[{value:"New JavaScript mutator",id:"new-javascript-mutator",children:[]},{value:"Babel transpiler",id:"babel-transpiler",children:[]},{value:"Webpack projects",id:"webpack-projects",children:[]}],s={toc:p};function l({components:e,...t}){return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A new Stryker plugin that adds support for Babel projects has just been released!"),(0,a.kt)("p",null,"The installation/upgrade scenario's in this blog post can be circumvented by using the ",(0,a.kt)("a",{parentName:"p",href:"https://stryker-mutator.github.io/quickstart.html"},"Quickstart")," if you don't already use Stryker in your project."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(5389).Z})),(0,a.kt)("h2",{id:"new-javascript-mutator"},"New JavaScript mutator"),(0,a.kt)("p",null,"In order to support mutating more recent JavaScript features as well as experimental features, we had to change the way we mutate JavaScript code.\nWe had already released a separate plugin for mutating TypeScript code, but now we have also released a separate plugin for mutating JavaScript code.\nIt is called the ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/stryker-javascript-mutator"},"stryker-javascript-mutator")," and it replaces the current 'ES5' mutator that has always come with Stryker. With this release, the 'ES5' has been deprecated and it will be removed in the future."),(0,a.kt)("p",null,"If you use Stryker with JavaScript code on your project, we highly recommend upgrading to the new stryker-javascript-mutator."),(0,a.kt)("p",null,"You can do so by installing the package:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install --save-dev stryker-javascript-mutator\n")),(0,a.kt)("p",null,"And configuring it in your stryker.conf.js:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"mutator: 'javascript',\n")),(0,a.kt)("p",null,"If you have a plugins section in your config, please consider removing it or add the new styker-javascript-mutator plugin."),(0,a.kt)("h2",{id:"babel-transpiler"},"Babel transpiler"),(0,a.kt)("p",null,"Even if Stryker can mutate JavaScript code in which new features are used, your environment may not be able to run that code.\nMany people use Babel to convert their modern JavaScript to a format that will run environments that do not support these features.\nWe developed a new plugin for Stryker, the ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/stryker-babel-transpiler"},"stryker-babel-transpiler"),", during a hackathon sponsored by ",(0,a.kt)("a",{parentName:"p",href:"https://opensource.infosupport.com"},"Info Support"),".\nThis plugin is capable of transpiling code written using Babel to code that runs in your environment. Give Stryker your babel config and we'll make it work!"),(0,a.kt)("p",null,"To use the new Babel transpiler, start by installing the package:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install --save-dev stryker-babel-transpiler\n")),(0,a.kt)("p",null,"And configure it in your stryker.conf.js:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'transpilers: [\'babel\'],\nbabelrcFile: \'.babelrc\', // Is your .babelrc file somewhere else? Please specify it here.\n// If you don\'t have a .babelrc file you can specify the config directly (Not recommended!):\n// babelConfig: { "presets": ["env"],  "plugins": ["transform-object-rest-spread"] },\n')),(0,a.kt)("p",null,"If you have a plugins section in your config, please consider removing it or add the new stryker-babel-transpiler plugin."),(0,a.kt)("h2",{id:"webpack-projects"},"Webpack projects"),(0,a.kt)("p",null,"With these new features, ",(0,a.kt)("strong",{parentName:"p"},"we unfortunately do not yet have support for projects using Webpack (such as React)"),".\nIf you need Webpack to bundle your code in order to run your tests please let us know what your setup is! This will help us with the development of Webpack support."),(0,a.kt)("p",null,"Please try it out yourself and let us know what your think!"))}l.isMDXComponent=!0},5389:function(e,t,r){"use strict";t.Z=r.p+"assets/images/love-babel-7545b3d405752ab62c03befa60c8fc13.png"}}]);