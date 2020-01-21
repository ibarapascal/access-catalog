# Summary of react develop practice (semifinished: 2020/01/21)  

React + Typescript + Redux + Thunk  
Material-UI + react-select + react-google-charts + etc  
Micro-service + webpack + AWS (not participated much)  

Period: 2019/10 - 2020/01 (4 months)

## 1. Dev tools  

### 1.1 chrome extensions  

- redux-devtools: [extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en), [repo](https://github.com/zalmoxisus/redux-devtools-extension)

- json-formatter: [extension](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en), [repo](https://github.com/callumlocke/json-formatter)

- octotree: [extension](https://chrome.google.com/webstore/detail/octotree/bkhaagjahfmjljalopjnoealnfndnagc?hl=en), [repo](https://github.com/ovity/octotree)

### 1.2 npm packages

- depcheck: [npm](https://www.npmjs.com/package/depcheck), [repo](https://github.com/depcheck/depcheck)

- json-server: [npm](https://www.npmjs.com/package/json-server), [repo](https://github.com/typicode/json-server)

- gource: [repo](https://github.com/acaudwell/Gource), [install gource on Mac](http://macappstore.org/gource/)

### 1.3 online tools  

- code-sand-box: [quick start: react + ts](https://codesandbox.io/s/nice-khayyam-zlg68)

- markdown: [quick try](https://www.makeareadme.com/)

### 1.4 [others](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/other-dev-tools.md)  

## 2. Framework / file structure / template files  

### 2.1 [Use Typescript in React](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/go-to-typescript-react.md)

### 2.2 [Use Domain Style in front-end project](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/go-to-domain-style-file-structure.md)

### 2.3 Data flow analysis

core demand:  

- Make it easy to CURD during coding in our front-end project  

![Picture of data flow](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/assets/screenshot2020-01-20-17-46-23.png)

principles:  

- Keep related files close, make them dense and their name easy to understand  
- Improve searchability via name-space search in single I/O file or in full project  
- Keep clear in mind of the data-flow design-pattern  
- Make clear definition of data source from API / redux / constants  

specific:

- API / Redux in single file  
- Define type files around each part of them  
- Use domain file structure  

![Picture of file structure](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/assets/screenshot2020-01-20-18-04-26.png)

### 2.4 Template of project demo and classic components  

Refering microsoft/frontend-bootcamp: [repo](https://github.com/microsoft/frontend-bootcamp)

Building classic react class component with typescript and Material-UI

**Find more code [HERE](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/template-of-react-code.md)**

- [xxx-view.tsx](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/template-of-react-code.md/#View)  
- [xxx-actions.tsx](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/template-of-react-code.md/#Actions)  
- [reducer.tsx](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/template-of-react-code.md/#Reducer)  
- [store.tsx](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/template-of-react-code.md/#Store)  
- [xxx.d.ts](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/template-of-react-code.md/#Types)  
- [api.tsx](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/template-of-react-code.md/#API)  

## 3. Coding notes  

During learning react and real-world developments in the first 1.5 months, some notes were made [#_01](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/refs/Summary-practices-of-react-ts-in-easi.md), [#_02](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/refs/Summary-practices-of-react-ts-in-easi-ii.md), [#_03](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/refs/Summary-practices-of-react-ts-in-easi-iii.md), [#_04](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/refs/Summary-practices-of-react-ts-in-easi-iv.md)  
Organizing and merging those investigated content as below.  

### 3.1 React

function binding in details  

life-cycle  

ReactChild  

- usage  
- path with props  

pure component / immutable needed?  
=> never optimize too early, it costs => more discussion  

### 3.2 Typescript / Javascript: [link](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/typescript-summary.md)  

naming / capitalization

String as object attributs' name  

Single source constants generate type  

constant list summary  

Shallow-copy & deep-copy  

Array operation summary  

Object operation summary  

### 3.3 Events  

debounce: TODO: specific  

validation: TODO: specific  

optimization  

keyboad event listener with onBlur / onFocus  

error handling  

using devTools  

### 3.4 Styles (with third libs)

HOC (example: withStyle)  

inline styles vs classes  

Inherite  

common styles  

## 4. Backlog of work flow / design pattern  

core method:

- data-driven development & UI oriented implement  

### 4.1 Steps  

![Picture: classic V-style dev method](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/assets/2880px-Systems-Engineering-Process-II.svg.png)

V-model VS fast iteration: which is better: summary in real practice.  

Front-end before dev: fix demand document, fix API implement, then start front-end design / document making  

![Picture: something what I think must be done before starting frong-end implements](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/assets/screenshot2020-01-21-11-07-56.png)

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

Progress management:  

- backlog  
- scrum  
- burndown

Template document for front-end:  

- Core demand  
- Page routing  
- Styles document  
- UI 画面レイアウト定義書  
- Page items 画面項目定義書  
- Events 画面イベント定義書  

Template of git flow:  

- template of PR  
- guideline of commit message  
- PR labels  
- instructions of review  

## 5. Some amazing libs  

### 5.1 Input  

- react-select: [npm](https://www.npmjs.com/package/react-select), [repo](https://github.com/jedwatson/react-select), [docs](https://react-select.com/home)

- react-number-format: [npm](https://www.npmjs.com/package/react-number-format), [repo](https://github.com/s-yadav/react-number-format#readme)

- react-datepicker: [npm](https://www.npmjs.com/package/react-datepicker), [repo](https://github.com/Hacker0x01/react-datepicker)

### 5.2 Output  

- react-google-charts: [npm](https://www.npmjs.com/package/react-google-charts), [repo](https://github.com/RakanNimer/react-google-charts)

- react-plotly: [npm](https://www.npmjs.com/package/react-plotly.js), [repo](https://github.com/plotly/react-plotly.js#readme), [docs](https://plot.ly/javascript/react/)

### 5.3 Others

- react-router-dom: [npm](https://www.npmjs.com/package/react-router-dom), [repo](https://github.com/ReactTraining/react-router#readme)

## 6. Something which need further investigation  

### 6.1 Eslint settings best practice (ex: Ant)  

### 6.2 Webpack with docker, AWS CI/CD template  

### 6.3 Test libs (ex: Jtest)  