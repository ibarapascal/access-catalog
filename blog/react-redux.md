## 2019/08

### Links of react-redux

- [Github](https://github.com/reduxjs/react-redux)

- [Documents](https://react-redux.js.org/introduction/quick-start)

- [Design thinkings and history](https://blog.isquaredsoftware.com/2018/11/react-redux-history-implementation/)

### Document comprehension

Redux itself is a standalone library that can be used with any UI layer or framework, including React, Angular, Vue, Ember, and vanilla JS. Although **Redux** and **React** are commonly used together, they are **independent of each other**.

**React Redux** is the **official Redux UI binding library for React**.

- **Connect**: React Redux provides a connect function for you to read values from the Redux store (and re-read the values when the store updates). The connect function takes two arguments, **both optional**. [[1]](https://react-redux.js.org/introduction/basic-tutorial#connecting-the-components)

```javascript
connect(
  mapStateToProps, // <= What we need from store, called every time the store state changes.
  mapDispatchToProps // <= What we send to store, recommend to use as a creator.
)(Component)
```
[sample code online](https://codesandbox.io/s/9on71rvnyo) <= Learn it in specific.

```javascript
// AddTodo.js
import { addTodo } from "../redux/actions";
class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }
  handleAddTodo = () => {
    this.props.addTodo(this.state.input);
export default connect(
  null,
  { addTodo } // <= mapDispatchToProps
)(AddTodo);

// actions.js
let nextTodoId = 0;
export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
});
```










