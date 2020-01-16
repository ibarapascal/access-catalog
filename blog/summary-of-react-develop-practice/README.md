# Summary of react develop practice (unfinished: 2020/01/16)  

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

principles:  

- Keep related files close, make them dense and their name easy to understand  
- Improve searchability via name-space search in single I/O file or in full project  
- Keep clear in mind of the data-flow design-pattern  
- Make clear definition of data source from API / redux / constants  

core demand:  

- Make it easy to CURD during coding in our front-end project  

![Picture of file structure]()

### 2.4 Template of project demo and classic components  

Refering microsoft/frontend-bootcamp: [repo](https://github.com/microsoft/frontend-bootcamp)

Building classic react class component with typescript and Material-UI

**Find more detail code [here](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/template-of-classic-components.md)**

## 3. Coding notes  

During learning react and real-world developments, some notes were made [#1](), [#2](), [#3](), [#4]()
Organizing and summarizing those investigated content as below.  

### 3.1 React

function binding in details  

life-cycle  

- componentDidMount  
- componentWillMount  
- componentDidUpdate  
- componentShouldUpdate  

ReactChild  

- usage  
- path with props  

pure component / immutable needed?  
=> never optimize too early, it costs => more discussion in this [note]()  

### 3.2 Typescript / Javascript  

naming / capitalization

String as object attributs' name  

Single source constants generate type  

constant list summary, refer to [summary of typescript]()  

Shallow-copy & deep-copy  

Array operation summary  

- Remove duplicated value in array  
- If have, update, else add  
- If have, delete, else add  
- Generate init array with 0, 0, 0 and 1, 2, 3  
- Compare two array  

Object operation summary  

- Add an attribute to current existing obejct  
- Compare two object  

### 3.3 Events  

debounce  

keyboad event listener  

onBlur / onFocus  

error handling  

### 3.4 Styles (with third libs)

HOC (example: withStyle)  

inline styles vs classes  

Inherite  

common styles  

## 4. Backlog of work flow / design pattern  

core method:

- data-driven development & UI oriented implement  

### 4.1 Steps  

![Picture: classic V-style dev method]()

// Analysis of classic dev method & fast iteration => standard, document

![Picture: something what I think must be done before starting frong-end implements]()

Front-end before dev: fix demand document, fix API implement, then start front-end design / document making  

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

Backlog, scrum, burndown graph  

Template document for front-end:  

Core demand  
Page routing  
Styles  

UI 画面レイアウト定義書  
Page items 画面項目定義書  
Events 画面イベント定義書  

Template of PR in git flow [PR-template]()

Template flags for PR here [link]()

note: eslint [PR/Commit-guideline]()

## 5. Some amazing libs  

### 5.1 Input  

[react-select]()

[react-number-format]()

[react-datepicker]()

### 5.2 Output  

[react-google-charts]()

[react-plotly]()

### 5.3 Others

[react-router-dom]()

## 6. TODO: Need further investigation  

### 6.1 Eslint settings best practice (ex: Ant)  

### 6.2 Webpack with docker, AWS CI/CD template  

### 6.3 Test libs (ex: Jtest)  
