### checkbox selection with child component and logic

- [Iterate through object properties](https://stackoverflow.com/questions/8312459/iterate-through-object-properties)

- [JavaScript object: access variable property by name as string [duplicate]](https://stackoverflow.com/questions/4255472/javascript-object-access-variable-property-by-name-as-string)

- [Updating an object with setState in React](https://stackoverflow.com/questions/43638938/updating-an-object-with-setstate-in-react)

```tsx
// Sample: src\components\fw02\fw0210-plan-concept\fw0210-view.tsx
// Parents
interface State {
  promotionSelected: {
    [x: string]: boolean,
  }
}
class component extends React.Component<Props, State>{
  constructor(props: Props) {
    super(props);
    this.state = {
      promotionSelected: {
        branding: false,
        direct: false,
      }
    };
  }
  handleChangeCheckbox = (item: string) => {
    Object.keys(this.state.promotionSelected).forEach((key) => {
      this.setState((prevState) => ({ promotionSelected: { ...prevState.promotionSelected, [key]: key === item}}));
    })
  };
// Html
  <ZZ0350
    title='ブランディング'
    label='branding'
    checked={promotionSelected.branding}
    callback={this.handleChangeCheckbox}
  />
// Child
...
```

### Array content display on list

Javascript trips

- [how-to-render-list-items-in-reactjs](https://stackoverflow.com/questions/44527343/how-to-render-list-items-in-reactjs)

```tsx
_renderTodos(){
    return this.state.todos.map(el => {
        return <ListItem primaryText={el.text} key={el.id}/>
    })
}
render(){
    return(
        <MobileTearSheet>
            <List>
                {this._renderTodos()}
            </List>
        </MobileTearSheet>
    )
}
```

### Button

- [button materail-ui document](https://material-ui.com/components/buttons/)

- [button click](https://stackoverflow.com/questions/40167287/react-material-ui-how-do-i-know-i-can-use-onclick-for-button)

### Typescript: No index signature with a parameter of type 'string' was found on type '{ “A”: string; }...

- [QA](https://stackoverflow.com/questions/56568423/typescript-no-index-signature-with-a-parameter-of-type-string-was-found-on-ty)

```tsx
// Before
PREFECTURES[key]
// After
(PREFECTURES as any)[key]
```

### When changes lead to rerendering

Because children do not rerender if the props of the parent change, but if its STATE changes!

- [QA](https://stackoverflow.com/questions/38892672/react-why-child-component-doesnt-update-when-prop-changes)

### Type 'IterableIterator<T>' is not an array type

- [In ts iterableIterator is not well agreed](https://stackoverflow.com/questions/49218765/typescript-and-iterator-type-iterableiteratort-is-not-an-array-type)

```tsx
// Bad
[...Array(n).keys()]
// Good
Array.from(Array(n).keys())
```

### react-select large list performance

- [Solutions issus](https://github.com/JedWatson/react-select/issues/3128)

### Date range picker

- [Summary](https://medium.com/flatlogic/top-date-picker-javascript-plugins-and-libraries-814723ec7a0d)

- [Date range picker](http://www.daterangepicker.com/), [Source](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/daterangepicker), [npm](https://www.npmjs.com/package/react-bootstrap-daterangepicker)

### Collapse table

Custom expansion-panels:

- [Document: expansion-panels](https://material-ui.com/components/expansion-panels/)

### Codesandbox of react-typescript

- [Links](https://codesandbox.io/s/n3138x65p0?hidenavigation=1)

### Objects are not valid as a React child

ReactNode

- [reason](https://spin.atomicobject.com/2018/08/20/objects-not-valid-react-child/)

### Multi children component

Possible:  

- [Solutions](https://qiita.com/terrierscript/items/3afee284621bbe126332)

### Empty html element / fragments

- [React document: fragments](https://reactjs.org/docs/fragments.html)

```tsx
<></>
```

### function binding issus

- [Document](https://reactjs.org/docs/faq-functions.html)

```tsx
// Wrong: handleClick is called instead of passed as a reference!
return <button onClick={this.handleClick()}>Click Me</button>
// Correct: handleClick is passed as a reference!
return <button onClick={this.handleClick}>Click Me</button>
```

```tsx
// Equivalent below
<button onClick={() => this.handleClick(id)} />
<button onClick={this.handleClick.bind(this, id)} />
```

### state & props

- [Document](https://reactjs.org/docs/faq-state.html)

```tsx
// Notice the difference between below
this.setState({count: this.state.count + 1});
this.setState((state) => {
  return {count: state.count + 1}
});
```

### Listen state / props changes

[how-to-listen-state-changes-in-react-js](https://stackoverflow.com/questions/26402534/how-to-listen-state-changes-in-react-js)

```tsx
componentWillUpdate(object nextProps, object nextState)
componentDidUpdate(object prevProps, object prevState)
```

### ComponentDidUpdate prevState not giving previous state

[issus](https://github.com/facebook/react/issues/2914): Need deep clone!

```tsx
// Wrong
update: function() {
  var tags = this.state.tags;
  tags.push('new tag');
  this.setState({tags: tags});
}
// Correct
update: function() {
  var tags = this.state.tags.slice();
  tags.push('new tag');
  this.setState({tags: tags});
}
```

### pass props to children component! IMPORTANT!  

[solution](https://stackoverflow.com/questions/32370994/how-to-pass-props-to-this-props-children)

[article](https://frontarm.com/james-k-nelson/passing-data-props-children/)

```tsx
// Before
{PayloadTargets}
// After
{React.cloneElement(PayloadTargets, { payloadProps: {index: index} })}
```

### property 'component' does not exist on type 'jsx.intrinsicelements'

[issus](https://github.com/microsoft/TypeScript/issues/4648)

Typescript complains if React component does not start with a capital letter.

[link](https://stackoverflow.com/questions/37414304/typescript-complains-property-does-not-exist-on-type-jsx-intrinsicelements-whe/37414418#37414418)

