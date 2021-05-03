(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[6241],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=l(t),d=o,g=m["".concat(u,".").concat(d)]||m[d]||c[d]||i;return t?r.createElement(g,s(s({ref:n},p),{},{components:t})):r.createElement(g,s({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=m;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5270:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return a},default:function(){return l}});var r=t(2122),o=(t(7294),t(3905));const i={title:"Create a plugin",custom_edit_url:"https://github.com/stryker-mutator/stryker-js/edit/master/docs/guides/create-a-plugin.md"},s={unversionedId:"stryker-js/guides/create-a-plugin",id:"stryker-js/guides/create-a-plugin",isDocsHomePage:!1,title:"Create a plugin",description:"You can extend Stryker with the following plugin kinds:",source:"@site/docs/stryker-js/guides/create-a-plugin.md",sourceDirName:"stryker-js/guides",slug:"/stryker-js/guides/create-a-plugin",permalink:"/docs/stryker-js/guides/create-a-plugin",editUrl:"https://github.com/stryker-mutator/stryker-js/edit/master/docs/guides/create-a-plugin.md",version:"current",frontMatter:{title:"Create a plugin",custom_edit_url:"https://github.com/stryker-mutator/stryker-js/edit/master/docs/guides/create-a-plugin.md"},sidebar:"docs",previous:{title:"NodeJS",permalink:"/docs/stryker-js/guides/nodejs"},next:{title:"Introduction",permalink:"/docs/stryker-net/Introduction"}},a=[{value:"Creating a plugin",id:"creating-a-plugin",children:[]},{value:"Declaring your plugin",id:"declaring-your-plugin",children:[]},{value:"Test your plugin",id:"test-your-plugin",children:[]},{value:"Dependency injection",id:"dependency-injection",children:[]},{value:"What&#39;s next?",id:"whats-next",children:[]}],u={toc:a};function l({components:e,...n}){return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can extend Stryker with the following plugin kinds:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export enum PluginKind {\n  Checker = 'Checker',\n  TestRunner = 'TestRunner',\n  Reporter = 'Reporter',\n}\n")),(0,o.kt)("p",null,"They are loaded using the ",(0,o.kt)("a",{parentName:"p",href:"../configuration#plugins-string"},(0,o.kt)("inlineCode",{parentName:"a"},"plugins")," configuration option")),(0,o.kt)("p",null,"Each plugin has it's own job to do. For inspiration, check out the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-js/tree/master/packages"},"stryker monorepo"),"."),(0,o.kt)("h2",{id:"creating-a-plugin"},"Creating a plugin"),(0,o.kt)("p",null,"Creating plugins is best done with typescript, as that will help you a lot with type safety and intellisense.\nWe provide the ",(0,o.kt)("inlineCode",{parentName:"p"},"@stryker-mutator/api")," dependency on the types and basic helper functionality. This should be installed as a ",(0,o.kt)("inlineCode",{parentName:"p"},"dependency")," of your plugin. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @stryker-mutator/api\n")),(0,o.kt)("p",null,"Next, you need to create a class that ",(0,o.kt)("em",{parentName:"p"},"is the actual plugin"),". For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { TestRunner, DryRunResult, DryRunOptions, MutantRunOptions, MutantRunResult } from '@stryker-mutator/api/test-runner';\n\nclass FooTestRunner implements TestRunner {\n  public init(): Promise<void> {\n    // TODO: Implement or remove\n  }\n  \n  public dryRun(options: DryRunOptions): Promise<DryRunResult> {\n   // TODO: Implement\n  }\n  \n  public mutantRun(options: MutantRunOptions): Promise<MutantRunResult> {\n    // TODO: Implement\n  }\n  \n  public dispose(): Promise<void> {\n   // TODO: Implement or remove\n  }\n}\n")),(0,o.kt)("p",null,"In this example, a ",(0,o.kt)("inlineCode",{parentName:"p"},"TestRunner")," plugin is constructed. Each plugin kind has it's own interface, so it is easy to get started with a skeleton implementation."),(0,o.kt)("p",null,"After you've created your skeleton plugin, you're ready to declare it."),(0,o.kt)("h2",{id:"declaring-your-plugin"},"Declaring your plugin"),(0,o.kt)("p",null,"In order to make your plugin known to Stryker, you should export the declaration of your plugin. You can either declare it as a factory method or a class.\nStryker will take care of creating your plugin implementation at the correct moment in the Stryker lifecycle. "),(0,o.kt)("p",null,"A class example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// index.ts\nimport FooTestRunner from './foo-test-runner';\nimport { PluginKind, declareClassPlugin } from '@stryker-mutator/api/plugin';\n\nexport const strykerPlugins = [declareClassPlugin(PluginKind.TestRunner, 'foo', FooTestRunner)];\n")),(0,o.kt)("p",null,"A factory method example (useful when you want to inject additional values/classes into the DI system):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// index.ts\nimport FooTestRunner from './foo-test-runner';\nimport FooTestRunnerConfigFileLoader from './foo-test-runner-config-file-loader';\nimport { configLoaderToken, processEnvToken, fooTestRunnerVersionToken } from './plugin-tokens';\nimport { declareFactoryPlugin, PluginKind } from '@stryker-mutator/api/plugin';\n\nconst createFooTestRunner = createFooTestRunnerFactory();\n\nexport function createFooTestRunnerFactory() {\n  createFooTestRunner.inject = tokens(commonTokens.injector);\n  function createFooTestRunner(injector: Injector<PluginContext>): FooTestRunner {\n    return injector\n      .provideValue(processEnvToken, process.env)\n      .provideValue(fooTestRunnerVersionToken, require('fooTestRunner/package.json').version as string)\n      .provideClass(configLoaderToken, FooTestRunnerConfigFileLoader)\n      .injectClass(FooTestRunner);\n  }\n  return createFooTestRunner;\n}\n\nexport const strykerPlugins = [declareFactoryPlugin(PluginKind.TestRunner, 'foo', createFooTestRunner)];\n")),(0,o.kt)("p",null,"Now you're ready to test out your plugin!"),(0,o.kt)("h2",{id:"test-your-plugin"},"Test your plugin"),(0,o.kt)("p",null,"It is easy to test your plugin on a test project by loading it via the plugins section."),(0,o.kt)("p",null,"For example, when your test project resides next to your plugin implementation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// stryker.conf.js\nmodule.exports = {\n  testRunner: 'foo', // name of your test runner\n  plugins: ['@stryker-mutator/*', require.resolve('../my-plugin')], // load your test runner here\n  concurrency: 1, // useful for debugging your \n  testRunnerNodeArgs: ['--inspect'] // useful for debugging your test runner plugin\n};\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note: Be sure you have compiled your TypeScript correctly.")),(0,o.kt)("p",null,"You can test it out with Stryker:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx stryker run\n")),(0,o.kt)("p",null,"Test runner and checker plugins are actually created in its own child process. Therefore you cannot debug them directly. Instead you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"testRunnerNodeArgs: ['--inspect']")," to debug your test runner plugin (an equivalent for the checker plugin isn't created yet, please let us know if you need it)."),(0,o.kt)("p",null,"After you've verified that your plugin loads correctly, it is recommended to create your own integration tests and not rely on Stryker to test it out each time. This will allow you to develop your plugin faster."),(0,o.kt)("h2",{id:"dependency-injection"},"Dependency injection"),(0,o.kt)("p",null,"Stryker uses ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nicojs/typed-inject#readme"},"typed-inject")," as a ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/@jansennico/advanced-typescript-type-safe-dependency-injection-873426e2cc96"},"dependency injection (DI) framework"),".\nIt is recommended that you also use this as your DI framework inside the plugin."),(0,o.kt)("p",null,"See this example below. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { StrykerOptions } from '@stryker-mutator/api/core';\nimport { Logger } from '@stryker-mutator/api/logging';\nimport { commonTokens, PluginContext } from '@stryker-mutator/api/plugin';\nimport { TestRunner, DryRunResult, DryRunOptions, MutantRunOptions, MutantRunResult } from '@stryker-mutator/api/test-runner';\nimport * as pluginTokens from './plugin-tokens';\nimport FooTestRunnerConfigFileLoader from './foo-test-runner-config-file-loader';\n\nexport class FooTestRunner implements TestRunner {\n  public static inject = [\n    commonTokens.logger,\n    commonTokens.options,\n    pluginTokens.configLoader,\n    pluginTokens.processEnv,\n    pluginTokens.fooTestRunnerVersion\n  ] as const;\n  \n  constructor(\n    private readonly log: Logger,\n    private readonly options: StrykerOptions,\n    private readonly configLoader: FooTestRunnerConfigFileLoader,\n    private readonly processEnvRef: NodeJS.ProcessEnv,\n    private readonly fooTestRunnerVersion: string\n  ) { }\n\n  public init(): Promise<void> {\n    // TODO: Implement or remove\n  }\n  \n  public dryRun(options: DryRunOptions): Promise<DryRunResult> {\n   // TODO: Implement\n  }\n  \n  public mutantRun(options: MutantRunOptions): Promise<MutantRunResult> {\n    // TODO: Implement\n  }\n  \n  public dispose(): Promise<void> {\n   // TODO: Implement or remove\n  }\n}\n\n\nexport function fooTestRunnerFactory(injector: Injector<PluginContext>) {\n  return injector\n    .provideValue(pluginTokens.processEnv, process.env)\n    .provideValue(pluginTokens.fooTestRunnerVersion, require('foo/package.json').version as string)\n    .provideClass(pluginTokens.configLoader, FooTestRunnerConfigFileLoader)\n    .injectClass(FooTestRunner);\n}\nfooTestRunnerFactory.inject = [commonTokens.injector] as const;\n")),(0,o.kt)("p",null,"In this example, you can see that some tokens are loaded from ",(0,o.kt)("inlineCode",{parentName:"p"},"commonTokens")," and some are loaded from ",(0,o.kt)("inlineCode",{parentName:"p"},"pluginTokens"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"commonTokens"),": These contain the tokens belonging to values Stryker itself provide."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pluginTokens"),": These are an example of tokens you can provide yourself in your plugin. The ",(0,o.kt)("inlineCode",{parentName:"li"},"fooTestRunnerFactory")," factory method is an example of where the tokens are provided.")),(0,o.kt)("p",null,"This is type-safe. When you declare your plugin, TypedInject will validate that you don't inject something that cannot be resolved at runtime."),(0,o.kt)("h2",{id:"whats-next"},"What's next?"),(0,o.kt)("p",null,"If you have a plugin that you think other users might be able to benefit from, or you simply need some help, please let us know on ",(0,o.kt)("a",{parentName:"p",href:"https://join.slack.com/t/stryker-mutator/shared_invite/enQtOTUyMTYyNTg1NDQ0LTU4ODNmZDlmN2I3MmEyMTVhYjZlYmJkOThlNTY3NTM1M2QxYmM5YTM3ODQxYmJjY2YyYzllM2RkMmM1NjNjZjM"},"Slack"),". "),(0,o.kt)("p",null,"We're always looking to promote user-created plugins \ud83d\udc97"))}l.isMDXComponent=!0}}]);