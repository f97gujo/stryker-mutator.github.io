(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[412],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return u},kt:function(){return h}});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),l=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=l(t.components);return a.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,p=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),m=l(r),h=n,k=m["".concat(p,".").concat(h)]||m[h]||c[h]||o;return r?a.createElement(k,i(i({ref:e},u),{},{components:r})):a.createElement(k,i({ref:e},u))}));function h(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s.mdxType="string"==typeof t?t:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6937:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return s},default:function(){return l}});var a=r(2122),n=(r(7294),r(3905));const o={slug:"typescript-support",title:"TypeScript support",author:"Nico Jansen",author_title:"Stryker Team",author_url:"https://github.com/nicojs",author_image_url:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4",tags:["stryker"]},i={permalink:"/blog/typescript-support",editUrl:"https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/blog/2017-10-06-typescript-support.md",source:"@site/blog/2017-10-06-typescript-support.md",title:"TypeScript support",description:"Stryker 0.10 marks the biggest change in Stryker history yet, as we now support running mutation testing on TypeScript code.",date:"2017-10-06T00:00:00.000Z",formattedDate:"October 6, 2017",tags:[{label:"stryker",permalink:"/blog/tags/stryker"}],readingTime:3.605,truncated:!0,prevItem:{title:"New HTML reporter",permalink:"/blog/new-html-report"},nextItem:{title:"Stryker 0.8 release",permalink:"/blog/stryker-0-8-0"}},s=[{value:"Language agnostic",id:"language-agnostic",children:[{value:"Mutator plugin api",id:"mutator-plugin-api",children:[]},{value:"Transpiler plugin api",id:"transpiler-plugin-api",children:[]}]},{value:"The TypeScript mutation testing framework",id:"the-typescript-mutation-testing-framework",children:[{value:"&quot;There&#39;s a plugin for that&quot;",id:"theres-a-plugin-for-that",children:[]},{value:"Great! But what about performance?",id:"great-but-what-about-performance",children:[]}]},{value:"What&#39;s next?",id:"whats-next",children:[]}],p={toc:s};function l({components:t,...e}){return(0,n.kt)("wrapper",(0,a.Z)({},p,e,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Stryker 0.10 marks the biggest change in Stryker history yet, as we now support running mutation testing on TypeScript code."),(0,n.kt)("p",null,"For the entire changelog per package:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker-js/blob/master/packages/stryker/CHANGELOG.md"},"stryker changelog")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker-js/blob/master/packages/stryker-api/CHANGELOG.md"},"stryker-api changelog")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker-js/blob/master/packages/stryker-html-reporter/CHANGELOG.md"},"stryker-html-reporter changelog")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker-js/blob/master/packages/stryker-typescript/CHANGELOG.md"},"stryker-typescript changelog")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker-js/blob/master/packages/stryker-mocha-runner/CHANGELOG.md"},"stryker-mocha-runner changelog")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker-js/blob/master/packages/stryker-mocha-framework/CHANGELOG.md"},"stryker-mocha-framework changelog"))),(0,n.kt)("h2",{id:"language-agnostic"},"Language agnostic"),(0,n.kt)("p",null,"Stryker is now language agnostic. This means that you can use Stryker to mutation test ",(0,n.kt)("em",{parentName:"p"},"any")," language that\ntranspiles down to JavaScript (as long as you have the correct plugin for it). TypeScript is the first language that is\nfully supported in this way."),(0,n.kt)("p",null,"To make this possible we made a number of changes to the Stryker core:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Changed the Mutator plugin api"),(0,n.kt)("li",{parentName:"ul"},"Add a Transpiler plugin api")),(0,n.kt)("h3",{id:"mutator-plugin-api"},"Mutator plugin api"),(0,n.kt)("p",null,"With the previous Mutator plugin, it was possible to mutate a single Abstract Syntax Tree (AST) node. It was a neat little feature,\nbut was never used outside of the core Stryker package. This plugin was also specific to JavaScript.\nAs Stryker is now language agnostic, we decided to move the Mutator api to a higher level of abstraction.\nA Mutator is now responsible for mutating code written in a specific language, instead of a single JS AST node."),(0,n.kt)("p",null,"We moved the existing es5 Mutator code into a new Mutator called ",(0,n.kt)("inlineCode",{parentName:"p"},"'es5'"),".\nIt is at this moment still part of the main Stryker npm module, but we have plans to remove it later on.\nWe also added a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-js/blob/master/packages/stryker-typescript/src/TypescriptMutator.ts"},(0,n.kt)("inlineCode",{parentName:"a"},"'typescript'")," mutator"),"\nas part of the new stryker-typescript npm module."),(0,n.kt)("p",null,"You can find the new ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-js/blob/master/packages/stryker-api/src/mutant/Mutator.ts"},"api definition here"),"."),(0,n.kt)("h3",{id:"transpiler-plugin-api"},"Transpiler plugin api"),(0,n.kt)("p",null,"With a transpiler plugin, it possible to transform any source code before Stryker runs your tests.\nIt is also used to transpile each mutant in the same way. This allows maximum freedom when\nmutating source code, without having to worry about the resulting JavaScript code.\nA side effect is that it will not work with ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-js/tree/master/packages/stryker#type-of-coverage-analysis"},"coverage analysis")," yet,\nmeaning that Stryker will force coverage analysis to be ",(0,n.kt)("inlineCode",{parentName:"p"},"'off'")," when a transpiler is used."),(0,n.kt)("p",null,"We created the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-js/blob/master/packages/stryker-typescript/src/TypescriptTranspiler.ts"},(0,n.kt)("inlineCode",{parentName:"a"},"'typescript'")," transpiler"),"\nas part of the new ",(0,n.kt)("inlineCode",{parentName:"p"},"stryker-typescript")," npm module."),(0,n.kt)("p",null,"You can find the new ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-js/blob/master/packages/stryker-api/src/transpile/Transpiler.ts"},"api definition here")),(0,n.kt)("h2",{id:"the-typescript-mutation-testing-framework"},"The TypeScript mutation testing framework"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-js/pull/376"},"Original PR")),(0,n.kt)("p",null,"Stryker now supports TypeScript. This means that Stryker is now able to work\ndirectly on your TypeScript code, no need to first transpile it yourself and run Stryker on the transpiled code.\nThis has the following advantages:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Far less false-positives,"),(0,n.kt)("li",{parentName:"ul"},"Your stryker reports will now show your code, instead of transpiled code.")),(0,n.kt)("h3",{id:"theres-a-plugin-for-that"},'"There\'s a plugin for that"'),(0,n.kt)("p",null,"All Stryker plugins to help you with TypeScript are part of a single npm module: ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/stryker-typescript"},"stryker-typescript"),".\nIt contains 3 plugins that work together:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Config Editor"),": A plugin that reads your tsconfig.json file and makes the config available to both the mutator and transpiler."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Mutator"),": A plugin that can mutate TypeScript code. See ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker-js/tree/master/packages/stryker-typescript/test/unit/mutator"},"our unit tests")," to know what mutations are support."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Transpiler"),": A plugin that can transpile (mutated) TypeScript code. It uses your tsconfig settings, so the output will be exactly as you'd expect.")),(0,n.kt)("p",null,"To configure the plugins you need to add this to your stryker.conf.js file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = function (config) {\n  config.set({\n    // ...\n    mutator: 'typescript',\n    transpilers: ['typescript'],\n    tsconfigFile: 'tsconfig.json',\n    // ...\n  });\n};\n")),(0,n.kt)("h3",{id:"great-but-what-about-performance"},"Great! But what about performance?"),(0,n.kt)("p",null,"You might be thinking all this has a negative impact on performance.\nAfter all, we have to transpile the TypeScript code for each mutant we want to test.\nWhen running Stryker on itself we notice that it takes less time than before when we were mutating JavaScript.\nThis is because transpiling each mutant ensures that no false positives are tested. Results for your project may differ."),(0,n.kt)("p",null,"Take the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-js/blob/master/packages/stryker-typescript/src/mutator/BinaryExpressionMutator.ts"},"BinaryExpressionMutator"),"\nfor example. It might mutate:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"'foo' + 'bar';\n")),(0,n.kt)("p",null,"into:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"'foo' - 'bar';\n")),(0,n.kt)("p",null,"Although this would be valid in JavaScript, it is ",(0,n.kt)("em",{parentName:"p"},"invalid")," in TypeScript.\nThis means that the mutant will result in a ",(0,n.kt)("inlineCode",{parentName:"p"},"TranspileError"),". It is ",(0,n.kt)("em",{parentName:"p"},"not")," tested and ",(0,n.kt)("em",{parentName:"p"},"not")," calculated into your mutation score.\nLess work means it can be faster."),(0,n.kt)("h2",{id:"whats-next"},"What's next?"),(0,n.kt)("p",null,"Next, we want to further improve upon our TypeScript support. For example we want to add support\nfor ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-js/tree/master/packages/stryker#type-of-coverage-analysis"},"coverage analysis"),"\nwhen using a transpiler. We're also thinking about an es6 mutator using Babel under the hood."),(0,n.kt)("p",null,"Please let us know what you think."))}l.isMDXComponent=!0}}]);