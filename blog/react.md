## 2019/08

### Summary of MUJI WEB project

**Source: MUJI pri-admin/frontend**

**Focus: code sample reading**

- **bind(this)**: This binding is necessary to make `this` work in the callback. [[1]](https://reactjs.org/docs/handling-events.html)

```javascript
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this); // <= bind(this)
  }
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
```

- **functiono (variables)**

```javascript
// Multiple variables
  handleChange = (field, value) => {
    if (value === defaultValues[field]) { ...
// Single variable
  getValidateStatus = keyName => {
    if (this.props.errors &&
        this.props.errors[keyName] && ...
// None
  downloadFile = () => { ...
// Function call with {this.<functionName>}
<Button type="primary" onClick={this.handleSearch}>
<Input placeholder={this.props.intl.formatMessage({id: "advancePaymentTrading.input.store_number"})}
       value={this.state.filters.store_number}
       onChange={event => this.handleChange("store_number", event.target.value)}/>
```

- **Ant Design: {...formItemLayout}**: {...formItemLayout} is the function of the attribute {...props} in the reactjs. [[Ant Design]](https://ant.design/components/modal/), [[2]](https://translate.google.co.jp/translate?hl=en&sl=zh-CN&u=https://www.cnblogs.com/crazycode2/p/9745945.html&prev=search)

```javascript
Const formItemLayout = {
  labelCol: {
    Xs: { span: 24 },
    Sm: { span: 7 },
  },
  wrapperCol: {
    Xs: { span: 24 },
    Sm: { span: 12 },
    Md: { span: 10 },
  },
};
<FormItem {...formItemLayout} label="title">
  ...
</FormItem> 
```


## 2019/07

### Document check

**Focus: document comprehension**

- **React official tutorial**. [[1]](https://reactjs.org/docs/thinking-in-react.html)

  Step 1: Break The UI Into A Component Hierarchy

  Step 2: Build A Static Version in React

  Step 3: Identify The Minimal (but complete) Representation Of UI State

  Step 4: Identify Where Your State Should Live

  Step 5: Add Inverse Data Flow

- **Creating project using Typescript**. [[1]](https://reactjs.org/docs/static-type-checking.html)

- **Flow (static type annotations)**: You should only ever have to do a minimal amount of work to describe your code to Flow and it will infer the rest. [[1]](https://flow.org/en/docs/getting-started/)

- **React two way data binding**: valueLink [[1]](https://reactjs.org/docs/two-way-binding-helpers.html)

- **Difference between props and states**: [[1]](https://reactjs.org/docs/state-and-lifecycle.html)

  State is similar to props, but it is private and fully controlled by the component.
  
  Do Not Modify State Directly: 
    
  > State Updates May Be Asynchronous
    
  > State Updates are Merged

- **React update component**:
  
  React official API document > Component > Updating [[1]](https://reactjs.org/docs/react-component.html)

  > shouldComponentUpdate [[1]](https://stackoverflow.com/questions/54066556/how-to-update-react-state-without-re-rendering-component/54066586)

  > ComponentWillReceiveProps [[1]](https://stackoverflow.com/questions/52626483/react-update-component-from-another-component)

```javascript
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: this.props.filters
    };
  }
  handleOnChange = checkedValues => {};
  componentWillReceiveProps(nextProps) { // <= ComponentWillReceiveProps
    this.setState({
      filters: nextProps.filters
    });
  }
```


## 2019/06

### Summary of notice points from sample project

**Source: react-example-master** => [Link here](https://github.com/mzabriskie/react-example)

**Focus: basic conception understanding**

- **className**: class is a keyword in javascript and JSX is an extension of javascript. That's the principal reason why React uses className instead of class. [[1]](https://stackoverflow.com/questions/46989454/class-vs-classname-in-react-16)

- **super()**: super() is called inside a react component only if it has a constructor. (mandatory / necessary) The reason why this cannot be allowed before super() is because this is uninitialized if super() is not called. However even if we are not using this we need a super() inside a constructor because ES6 class constructors **MUST** call super if they are subclasses.

- **Constructor()**: If you don't initialize **state** and you don't **bind** methods, you don't need to implement a constructor for your React component.

- **State / setState**, some var used in component. [[1]](https://stackoverflow.com/questions/40433463/what-does-calling-super-in-a-react-constructor-do), [[2]](https://stackoverflow.com/questions/54379896/what-is-state-in-react
)

```javascript
export default class User extends Component {
  constructor() {
    super()
    this.state = {filter: ''}
  }
  handleFilterUpdate = (filter) => {
    this.setState({filter}) // <= setState
  }
```

- **this.props**: It's called spread attributes and its aim is to make the passing of props easier.
Notice the {} of values.

- **PropTypes.shape**: You can use React.PropTypes.shape() as an argument to React.PropTypes.arrayOf()
As of react v15.5, using React.PropTypes is deprecated and the standalone package prop-types should be used instead. [[1]](https://stackoverflow.com/questions/28452358/what-is-the-meaning-of-this-props-in-reactjs), [[2]](https://stackoverflow.com/questions/32325912/react-proptype-array-with-shape)

```javascript
export default class User extends Component {
  render() {
    const {username} = this.props.params
    const {filter} = this.state
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <Profile username={username} />
          </div>
...
User.propTypes = {
  params: PropTypes.shape({ // <= PropTypes.shape
    username: PropTypes.string,
  }),
}
```

- **PropTypes.XXX.isRequired**: If you define the PropType with isRequired, React will warn you when you use that component without passing that prop. [[1]](https://stackoverflow.com/questions/46025208/meaning-of-the-isrequired-when-defining-static-proptypes-in-react-native)

```javascript
RepoFilter.propTypes = {
  onUpdate: PropTypes.func.isRequired, // <= PropTypes.XXX.isRequired
};
```

- **componentDidMount**: componentWillMount is essentially the constructor. You can set instance properties that don't affect render, pull data from a store synchronously and setState with it, and other simple side effect free code you need to run when setting up your component. **It's rarely needed, and not at all with ES6 classes.** ComponentDidMount only runs once and on the client side. ComponentWillMount gets called when rendering React on the server and on the client, but componentDidMount is only called on the client. [[1]](https://stackoverflow.com/questions/29899116/what-is-the-difference-between-componentwillmount-and-componentdidmount-in-react), [[2]](https://stackoverflow.com/questions/30042978/what-is-the-purpose-of-having-functions-like-componentwillmount-in-react-js/30044204)

```javascript
  constructor() {
    super()
    this.state = {repos: []}
  }
  getRepos() {
    const {username} = this.props
    this.props.getRepos(username).then(repos => {
      this.setState({repos});
    });
  }
  componentWillMount() {
    this.getRepos();
  }
```

- **Export default XXX without component**: No need of render() for return() (perhaps)

```javascript
import React, {PropTypes} from 'react';
export default ProfileStat;
function ProfileStat({value, label}) {
  return (
    <span>
      <h2>{value}</h2>
      <small>{label}</small>
    </span>
  );
}
ProfileStat.propTypes = {
  value: PropTypes.number,
  label: PropTypes.string,
};
```


