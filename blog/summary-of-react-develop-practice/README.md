# Summary of react develop practice  

React + Typescript + Redux + Thunk  
Material-UI + react-select + etc  
Micro-service + webpack + AWS (not participated much)  

Period: 2019/10 - 2020/01 (4 months)

## 1. Dev tools  

### 1.1 chrome extensions  

- redux-devtools: [extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en), [repo](https://github.com/zalmoxisus/redux-devtools-extension)  
- json-formatter: [extension](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en), [repo](https://github.com/callumlocke/json-formatter): auto format json  
- octotree: [extension](https://chrome.google.com/webstore/detail/octotree/bkhaagjahfmjljalopjnoealnfndnagc?hl=en), [repo](https://github.com/ovity/octotree): side-bar file-tree visulization on github.com  

### 1.2 npm packages

- depcheck: [npm](https://www.npmjs.com/package/depcheck), [repo](https://github.com/depcheck/depcheck): dependicies checker  
- json-server: [npm](https://www.npmjs.com/package/json-server), [repo](https://github.com/typicode/json-server): simple local temp server  
- gource: [repo](https://github.com/acaudwell/Gource), [install on Mac](http://macappstore.org/gource/): amazing project files visualizer  

### 1.3 online tools  

- code-sand-box: [quick start: react + ts](https://codesandbox.io/s/nice-khayyam-zlg68)  
- markdown: [quick try](https://www.makeareadme.com/)  

### 1.4 vs-code extensions  

- ESLint  
- Git Graph: watch branches and git flow, quick checkout  
- GitLens: powerful tool comparing different head, showing the author and diff  
- Auto Comment Blocks  
- markdownlint  

### [1.5 more dev tools](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/other-dev-tools.md)  

## 2. Framework / file structure / template files  

### [2.1 Use Typescript in React](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/go-to-typescript-react.md)

### [2.2 Use Domain Style in front-end project](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/go-to-domain-style-file-structure.md)

### 2.3 Data flow analysis

core demand:  

- Make it easy to CURD during coding in our front-end project  

![Picture of data flow](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/assets/screenshot-data-flow.png)

principles:  

- Keep related files close, make them dense and their name easy to understand  
- Improve searchability via name-space search in single I/O file or in full project  
- Keep clear in mind of the data-flow design-pattern  
- Make clear definition of data source from API / redux / constants  

specific:

- API / Redux in single file  
- Define type files around each part of them  
- Use domain file structure  

![Picture of file structure](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/assets/screenshot-file-structure.png)

### 2.4 Template of project demo and classic components  

Refering microsoft/frontend-bootcamp: [repo](https://github.com/microsoft/frontend-bootcamp)

Building classic react class component with typescript and Material-UI

**Find more code [here](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/template-of-react-code.md)**

- [xxx-view.tsx](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/template-of-react-code.md/#View)  
- [xxx-actions.tsx](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/template-of-react-code.md/#Actions)  
- [reducer.tsx](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/template-of-react-code.md/#Reducer)  
- [store.tsx](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/template-of-react-code.md/#Store)  
- [xxx.d.ts](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/template-of-react-code.md/#Types)  
- [api.tsx](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/template-of-react-code.md/#API)  

## 3. Coding notes  

During learning react and real-world developments in the first 1.5 months, some notes were made [#_01](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/refs/Summary-practices-of-react-ts-in-easi.md), [#_02](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/refs/Summary-practices-of-react-ts-in-easi-ii.md), [#_03](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/refs/Summary-practices-of-react-ts-in-easi-iii.md), [#_04](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/refs/Summary-practices-of-react-ts-in-easi-iv.md)  
Organizing and merging those investigated content as below.  

### [3.1 React](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/summary-react.md)

- [function binding in details](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/summary-react.md/#function-binding-in-details)  
- [lifecycle](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/summary-react.md/#lifecycle)  
- [react api](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/summary-react.md/#react-api)  
- [pure component and immutable](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/summary-react.md/#pure-components-and-immutable)  

### [3.2 Typescript / Javascript](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/summary-typescript.md)  

- [capitalization](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/summary-typescript.md/#capitalization)  
- [bracket notation and dot notation](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/summary-typescript.md/#bracket-notation-and-dot-notation)
- [const data in ts](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/summary-typescript.md/#const-data-in-typescript)  
- js-array  
- js-object  
- shallow-copy-and-deep-copy  

### [3.3 Events](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/summary-events.md)  

- [debounce](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/summary-events.md/#debounce)  
- [validation](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/summary-events.md/#validation)  
- [optimization](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/summary-events.md/#optimization)  
- [keyboard event listening](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/summary-events.md/#keyboard-event-listening)  
- [api error handling with redux](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/summary-events.md/#api-error-handling-with-redux)  

### 3.4 Styles (with third libs)

- HOC (example: withStyle)  
- inline styles vs classes  
- Inherite  
- common styles  

## 4. Work flow / design pattern  

guideline:

- data-driven development & UI oriented implement  

### 4.1 Steps  

![Picture: classic V-style dev method](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/assets/2880px-Systems-Engineering-Process-II.svg.png)

V-model VS fast iteration: which is better: summary in real practice.  

Front-end before dev: fix demand document, fix API implement, then start front-end design / document making  

![Picture: something what I think must be done before starting frong-end implements](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/assets/screenshot-design-step.png)

Front-end dev: start with API type definition and static UI component  
Add UX events, data bindings and UI small adjustment later  

Front-end maintain (CURD during dev): demand changes & bugfix => left evidence  
Make ticket system for management => use normal tools  

### 4.2 During dev

Document and comment: it's needed as well as definitely not unnecessary  
Reasons: ...
Conclusion: Both very important  

Backlog and task management: Adjust task and schedule based on user operation and data-flow  

### 4.3 Appendix

How to get / check the latest tech info:  

- zhihu: cs articles  
- [Tech radar](https://www.thoughtworks.com/radar/techniques): tracing latest recommended tech  
- Trends: [google](https://trends.google.com/trends/explore?cat=13&date=today%205-y&q=react,angular,vue,flutter),  [npm](https://www.npmtrends.com/react-vs-@angular/core-vs-vue),  [stack-overflow](https://insights.stackoverflow.com/trends?tags=reactjs%2Cangular%2Cvue.js%2Cangularjs%2Cjquery)  
- [Stack Overflow’s 2019 Developer Survey](https://insights.stackoverflow.com/survey/2019/#most-popular-technologies): lot's of interesting statistic data  
- [Frontend framework popularity](https://gist.github.com/tkrotoff/b1caa4c3a185629299ec234d2314e190#file-frontendframeworkspopularity-md): amazing investigation  

Progress management:  

- backlog  
- scrum  
- burndown  

Template document for front-end:  

- Demand definition - 詳細設計書  
- Page routing - 画面遷移定義書  
- Styles - 画面共通仕様定義書  
- UI - 画面レイアウト定義書  
- Page items - 画面項目定義書  
- Events - 画面イベント定義書  

[Template of git flow](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/template-of-git-flow.md)  

- template of PR  
- guideline of commit message  
- PR labels  
- instructions of review  

## 5. Some amazing libs  

### 5.1 Input  

- react-select: [npm](https://www.npmjs.com/package/react-select), [repo](https://github.com/jedwatson/react-select), [docs](https://react-select.com/home): multi-selection, custom-styles  
- react-number-format: [npm](https://www.npmjs.com/package/react-number-format), [repo](https://github.com/s-yadav/react-number-format#readme): number with prefix / suffix / thousandSeparator  
- react-datepicker: [npm](https://www.npmjs.com/package/react-datepicker), [repo](https://github.com/Hacker0x01/react-datepicker): enable date range pick with localization  

### 5.2 Output  

- react-google-charts: [npm](https://www.npmjs.com/package/react-google-charts), [repo](https://github.com/RakanNimer/react-google-charts): custom events onMouseOver  
- react-plotly: [npm](https://www.npmjs.com/package/react-plotly.js), [repo](https://github.com/plotly/react-plotly.js#readme), [docs](https://plot.ly/javascript/react/): amazing 3d plotting ability  

### 5.3 Others  

- react-router-dom: [npm](https://www.npmjs.com/package/react-router-dom), [repo](https://github.com/ReactTraining/react-router#readme): most used router libs  

## 6. Further directions  

### 6.1 Storybook / react-styleguidist  

- storybook: [npm](https://www.npmjs.com/package/@storybook/react): visual component test  
- react-styleguidist: [repo](https://github.com/styleguidist/react-styleguidist), [docs](https://react-styleguidist.js.org/docs/documenting.html), [sample output](https://react-styleguidist.js.org/examples/basic/#button), [code for sample](https://github.com/styleguidist/react-styleguidist/blob/master/examples/basic/src/components/Button/Button.js): demo / document maker  

### 6.2 Webpack with docker, AWS CI/CD template  

### 6.3 Eslint settings best practice for team dev (ex: Ant)  

eslint-config-alloy: [repo](https://github.com/AlloyTeam/eslint-config-alloy)  

### 6.4 Auto start cli tools dev / summary  

automatic tools for webpack / cli / eslint / CI/CD settings  
