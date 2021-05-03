(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[6539],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return c},kt:function(){return g}});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},s=Object.keys(t);for(n=0;n<s.length;n++)r=s[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)r=s[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var l=n.createContext({}),u=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},c=function(t){var e=u(t.components);return n.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,s=t.originalType,l=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),m=u(r),g=o,y=m["".concat(l,".").concat(g)]||m[g]||p[g]||s;return r?n.createElement(y,a(a({ref:e},c),{},{components:r})):n.createElement(y,a({ref:e},c))}));function g(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var s=r.length,a=new Array(s);a[0]=m;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:o,a[1]=i;for(var u=2;u<s;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3519:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return s},metadata:function(){return a},toc:function(){return i},default:function(){return u}});var n=r(2122),o=(r(7294),r(3905));const s={title:"Getting started",custom_edit_url:"https://github.com/stryker-mutator/stryker4s/edit/master/docs/getting-started.md"},a={unversionedId:"stryker4s/getting-started",id:"stryker4s/getting-started",isDocsHomePage:!1,title:"Getting started",description:"Stryker4s is a mutation testing framework for Scala. It allows you to test your tests by temporarily inserting bugs.",source:"@site/docs/stryker4s/getting-started.md",sourceDirName:"stryker4s",slug:"/stryker4s/getting-started",permalink:"/docs/stryker4s/getting-started",editUrl:"https://github.com/stryker-mutator/stryker4s/edit/master/docs/getting-started.md",version:"current",frontMatter:{title:"Getting started",custom_edit_url:"https://github.com/stryker-mutator/stryker4s/edit/master/docs/getting-started.md"},sidebar:"docs",previous:{title:"Composite pattern",permalink:"/docs/stryker-net/technical-reference/ProjectComponents"},next:{title:"Configuration",permalink:"/docs/stryker4s/configuration"}},i=[{value:"1 Install",id:"1-install",children:[]},{value:"2 Configure",id:"2-configure",children:[]},{value:"3 Let&#39;s kill some mutants",id:"3-lets-kill-some-mutants",children:[]},{value:"4 Having trouble?",id:"4-having-trouble",children:[]}],l={toc:i};function u({components:t,...e}){return(0,o.kt)("wrapper",(0,n.Z)({},l,e,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Stryker4s is a mutation testing framework for Scala. It allows you to test your tests by temporarily inserting bugs."),(0,o.kt)("p",null,"This guide is for the sbt plugin for Stryker4s. For other ways to run Stryker4s, such as on Maven projects, look at our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker4s/blob/master/README.md#getting-started"},"README"),"."),(0,o.kt)("h2",{id:"1-install"},"1 Install"),(0,o.kt)("p",null,"To install Stryker4s on your project, add the following line to ",(0,o.kt)("inlineCode",{parentName:"p"},"project/plugins.sbt")," ",(0,o.kt)("a",{parentName:"p",href:"https://search.maven.org/search?q=g:io.stryker-mutator"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/maven-central/v/io.stryker-mutator/stryker4s-core_2.12.svg?label=Maven%20Central&colorB=brightgreen",alt:"Maven Central"})),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'addSbtPlugin("io.stryker-mutator" % "sbt-stryker4s" % stryker4sVersion)\n')),(0,o.kt)("h2",{id:"2-configure"},"2 Configure"),(0,o.kt)("p",null,"Stryker4s will look for a ",(0,o.kt)("inlineCode",{parentName:"p"},"stryker4s.conf")," file in the root of your project. If found, it will use the configured values. All arguments in the configuration (and the file itself) are optional. You can find the possible values in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/stryker4s/configuration"},"configuration")," page."),(0,o.kt)("h2",{id:"3-lets-kill-some-mutants"},"3 Let's kill some mutants"),(0,o.kt)("p",null,"Run Stryker4s to mutation test your project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sbt stryker\n")),(0,o.kt)("h2",{id:"4-having-trouble"},"4 Having trouble?"),(0,o.kt)("p",null,"Are you having troubles? Try enabling debug logging. For more information on how to enable debug logging visit our ",(0,o.kt)("a",{parentName:"p",href:"/docs/stryker4s/configuration#log-level-string"},"configuration page"),".\nIf you are having issues, please let us know by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker4s/issues/new"},"reporting an issue")," or talk to us on ",(0,o.kt)("a",{parentName:"p",href:"https://join.slack.com/t/stryker-mutator/shared_invite/enQtOTUyMTYyNTg1NDQ0LTU4ODNmZDlmN2I3MmEyMTVhYjZlYmJkOThlNTY3NTM1M2QxYmM5YTM3ODQxYmJjY2YyYzllM2RkMmM1NjNjZjM"},"Slack"),"."))}u.isMDXComponent=!0}}]);