(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return l}));var a=n(2),r=n(6),o=(n(0),n(163)),i={title:"Equivalent mutants",custom_edit_url:"https://github.com/stryker-mutator/mutation-testing-elements/edit/master/docs/equivalent-mutants.md"},c={unversionedId:"mutation-testing-elements/equivalent-mutants",id:"mutation-testing-elements/equivalent-mutants",isDocsHomePage:!1,title:"Equivalent mutants",description:"Suppose you are writing a big chunk of code. You have decided to run both unit and mutation tests.",source:"@site/docs/mutation-testing-elements/equivalent-mutants.md",slug:"/mutation-testing-elements/equivalent-mutants",permalink:"/docs/mutation-testing-elements/equivalent-mutants",editUrl:"https://github.com/stryker-mutator/mutation-testing-elements/edit/master/docs/equivalent-mutants.md",version:"current",sidebar:"docs",previous:{title:"What is mutation testing?",permalink:"/docs/"},next:{title:"Mutant states and metrics",permalink:"/docs/mutation-testing-elements/mutant-states-and-metrics"}},u=[],s={rightToc:u};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,'Suppose you are writing a big chunk of code. You have decided to run both unit and mutation tests.\nYour score of unit tests is 100% and mutation 99%. You think "I\'ll make that 100%". After some work, you notice this part of your code:'),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"var max = Math.max(a.comma, b.comma);\nvar min = Math.min(a.comma, b.comma);\nif (a.comma >= b.comma) {\n  a.number *= 10 ** (max - min);\n} else {\n  b.number *= 10 ** (max - min);\n}\n")),Object(o.b)("p",null,"Let's analyse this example."),Object(o.b)("p",null,"Assume ",Object(o.b)("inlineCode",{parentName:"p"},"a.comma")," is greater than ",Object(o.b)("inlineCode",{parentName:"p"},"b.comma"),". For example 4 and 2"),Object(o.b)("p",null,"We get that"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"max = 4;\nmin = 2;\nif (4 >= 2) {\n  a.number *= 10 ** 2;\n} else {\n  b.number *= 10 ** 2;\n}\n")),Object(o.b)("p",null,"if we change ",Object(o.b)("inlineCode",{parentName:"p"},">=")," sign in our source code to ",Object(o.b)("inlineCode",{parentName:"p"},"<=")," it won't work, so our mutant is killed."),Object(o.b)("p",null,"If we change 4 and 2 to 3 and 5, we will get the same output: mutant will be killed.\nBut what if we have both values the same? Let's say: 3, 3"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"max = 3;\nmin = 3;\nif (3 >= 3) {\n  a.number *= 10 ** 0;\n} else {\n  b.number *= 10 ** 0;\n}\n")),Object(o.b)("p",null,"Notice that 10 ","*","*"," 0 = 1, so even if we change ",Object(o.b)("inlineCode",{parentName:"p"},">=")," to ",Object(o.b)("inlineCode",{parentName:"p"},"<=")," and even ",Object(o.b)("inlineCode",{parentName:"p"},"<")," or ",Object(o.b)("inlineCode",{parentName:"p"},">")," we will get the same output each time!"),Object(o.b)("p",null,"It is called ",Object(o.b)("em",{parentName:"p"},"equivalent mutant"),". There is no definitive way for Stryker to find and ignore them. There is currently also no way yet to mark them to be ignored."),Object(o.b)("p",null,"For now, the only solution is by finding these by hand, which is time consuming and try to rewrite the code so it won't occur, or accept that you won't make 100%."),Object(o.b)("p",null,"First one has been shown above. The easiest schema for this mutant is:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"if(whatever condition) {\n  number1 += 0  // can be `-= 0` or `*= 1` `/= 1`\n} else {\n  number2 += 0  // can be `-= 0` or `*= 1` `/= 1`\n}\n")),Object(o.b)("p",null,"The second one we have found is about ",Object(o.b)("inlineCode",{parentName:"p"},"BigInt"),"\nsince ",Object(o.b)("inlineCode",{parentName:"p"},"-0n")," is transformed to ",Object(o.b)("inlineCode",{parentName:"p"},"0n"),", doing"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"a = 0n;\na = a <= 0n ? -a : a;\n")),Object(o.b)("p",null,"will produce another equivalent mutant."),Object(o.b)("p",null,"So knowing that for now, help us find more of them and don't be scared of not 100% mutation score!"))}l.isMDXComponent=!0},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=l(n),p=a,d=m["".concat(i,".").concat(p)]||m[p]||b[p]||o;return n?r.a.createElement(d,c(c({ref:t},s),{},{components:n})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);