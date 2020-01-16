# Go to Domain-style file structure

### 1. First of all

Concept of coding: keep dense

### 2. The importance of structuring code

Readability 可読性
Maintainability 保守性
Expandability 拡張性

### 3. Introduction of structuring Redux code

Book: **《Redux in action》** [Chapter 11.](https://livebook.manning.com/book/redux-in-action/chapter-11/)

- Rails-style pattern

![picture](https://dpzbhybb2pdcj.cloudfront.net/garreau/Figures/11fig02_alt.jpg)

>You would find your limit at about 50-100 components,  
PS: By now we have already 80 components.  

- Domain-style pattern

![picture](https://dpzbhybb2pdcj.cloudfront.net/garreau/Figures/11fig03_alt.jpg)

- Others  

### 4. Article & Best practice

- [Optimal file structure for react applications](https://medium.com/@Charles_Stover/optimal-file-structure-for-react-applications-f3e35ad0a145)

```text
my-app  
└── src  
    └── components  
        └── component-name  
            ├── component-name.css  
            ├── component-name.scss  
            ├── component-name-container.js  
            ├── component-name-redux.js  
            ├── component-name-styles.js  
            ├── component-name-view.js  
            └── index.js  
```

>As an opinionated article, I’ll discuss what I’ve found most intuitive: a single directory for Components.  
Keep related code as close as possible.  

>You put your stateless Component in component-name-view.js,  
your container Component in component-name-container.js,  
your global state Component in component-name-redux.js  
and simply export whichever happens to be the topmost Component at any point in time.  

>You often start with just a stateless Component, so you are exporting view.js.  
Suddenly, scope demands state, so now you have container.js.  
You just change view to container in the export statement, and you’re done.  
Suddenly, scope demands global state, so now you have redux.js.  
You can just change container to redux in the export statement, and you’re done.  

- [react-and-redux-design-patterns](https://www.learnhowtoprogram.com/react/advanced-topics/react-and-redux-design-patterns)

>Domain-Style Structure: A Better File Structure for React/Redux Applications  

### 5. Summary the pros and cons

- Pros:

1. Comfortable for dev  
2. Easy to read & maintain  
3. Facing subsequent needs  

- Cons:

>Remain for discussion
