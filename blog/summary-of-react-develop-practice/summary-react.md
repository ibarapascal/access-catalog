# React summary

## Index

- [function binding in details](#function-binding-in-details)  
- [lifecycle](#lifecycle)  
- [react api](#react-api)  
- [pure component and immutable](#pure-components-and-immutable)  

### function-binding-in-details

There is a normal implement in classic component which seems weird.  

```tsx
// This binding is necessary to make `this` work in the callback
this.handleClick = this.handleClick.bind(this);

handleClick() {
  console.log('this is:', this);
}

<button onClick={this.handleClick}>
```

Refer details in document of [handling-events](https://en.reactjs.org/docs/handling-events.html)  

If you don't add `()` behind `this.handleClick`, you need to bind `this` in your constructor, otherwise you may want to use the next two method:

**A. public class field syntax** (which is enabled by default in [Create React App](https://reactjs.org/docs/create-a-new-react-app.html))  

```tsx
handleClick = () => {
  console.log('this is:', this);
}

<button onClick={this.handleClick}>
```

**B. arrow funcitons** (which may cause performance problems and is not recommended)

```tsx
// The same on event handling but different in:
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button> // automatically forwarded, implicitly, 隐式传递
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button> // explicitly, 显式传递
```

Basically in our practice, we use `public class field syntax` with params which would look like below:  

```tsx
// No need to bind `this` in constructor
// Receiving params passed by elements as well as getting events of it
handleMetricsOnBlur = (inspection: InspectionUnit) => (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  if (event.target.value !== this.props.inputStoreLocalStorage.cacheInputValue) {
    this.refreshFlowSimulation(inspection);
  }
  this.props.storeLocalStorageInput({item: 'cacheInputValue', value: ''});
}
<NumberFormat
  id={elementId}
  className={classes.tableItem}
  thousandSeparator={true}
  prefix={prefix}
  suffix={suffix}
  decimalScale={decimalScale}
  value={item}
  onValueChange={...}
  onKeyDown={...}
  onBlur={this.handleMetricsOnBlur(inspection)} // Passing necessary params here
  onFocus={...}
/>
```

We can share handler function by passing different params to it.

```tsx
// Justify via keyword of stored content in flat data structure
handleStoreInput = (field: string) => (event: React.ChangeEvent<HTMLInputElement>, id: ValidationItems) => {
  const payload: InputAction = {item: field, value: event.target.value};
  this.props.storePlan(payload);
  ValidationService.updateTouchedStatus(this.props, id);
  ValidationService.updateValidStatus(this.props, event.target.value, id);
};

<Grid item xs={4} className={classes.inputZone}>
  <CMInputZone label='Name' necessary={true}>
    <CMInputText
      id='FLP_INPUT_01'
      value={inputStorePlan.name}
      onChange={this.handleStoreInput('name')}
      customProps={{
        fullWidth: true,
      }}
    />
  </CMInputZone>
</Grid>
<Grid item xs={4} className={classes.inputZone}>
  <CMInputZone label='Budget' necessary={true}>
    <CMInputText
      id='FLP_INPUT_02'
      value={inputStorePlan.budget}
      onChange={this.handleStoreInput('budget')}
    />
  </CMInputZone>
</Grid>
...
```

### lifecycle

![react-lifecycle-methods-diagram](https://github.com/ibarapascal/access-catalog/blob/master/blog/summary-of-react-develop-practice/assets/screenshot2020-01-22-7-47-15.png)

refer to [link](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)  

Basically:  

- only use safe lifecycles.  
- keep in mind of each usage and take care of side-effects.  

Document of [lifecycles](https://reactjs.org/docs/state-and-lifecycle.html)

1.componentDidMount: The most common one, notice that childs mount first then parents, can add async / await inside.  

2.componentWillMount: Oppsite direction with above.  

3.componentWillUmount: Used for unsubscribe when the component is being removed from the DOM.  

3.componentDidUpdate: Get the previous value of props and states.  

4.shouldComponentUpdate: Basically use for optimization, it can force define whether the component should re-render or not, in most situation there are other methods to approach so use with causion.  

### react-api

Document of [react-api](https://reactjs.org/docs/react-api.html)

Example usage:  

[React.cloneElement](https://reactjs.org/docs/react-api.html#cloneelement)

>The resulting element will have the original element’s props with the new props merged in shallowly.

We use it in our practice to reactivly pass props to template component's child.  

```tsx
/**
 * Usage
 */
<CMCollapseTable
  title={'Targeting'}
  PayloadHeader={
    <FLTargetingTableHeader />
  }
  PayloadData={
    <FLTargetingTableData />
  }
/>
```

```tsx
/**
 * CMCollapseTable component
 */
// Notice there are multiple belowing elements
<CMCollapseItems>
  {React.cloneElement(PayloadData, { // Set the payloadProps for each elements with identification info
    payloadProps: {
      platform: platform,
      product: product,
      target: {
        id: target.id,
        name: target.name,
      },
    },
  })}
</CMCollapseItems>
```

```tsx
/**
 * FLTargetingTableData component
 */
interface Props extends WithStyles<typeof styles> {
  payloadProps: PayloadProps, // We can acquire the payloadProps implicitly
  ...
}
```

### pure-components-and-immutable

Document of [pure component](https://reactjs.org/docs/react-api.html#reactpurecomponent)

Often used with [immutable](https://github.com/immutable-js/immutable-js) to avoid shallow compare via objects during diff.  

Notice all the childs need to be `pure`.  

=> Do we really need it?  

**Discussion:**  

[scope1](https://github.com/react-boilerplate/react-boilerplate/issues/441)

[scope2](https://news.ycombinator.com/item?id=14418576)

>Unfortunately React.PureComponent is not embracing Immutable.js to it full potential. While Immutable.js provides hash value, witch allows for fast comparison of two different instances React.PureComonent is only comparing addresses of those instances.

**Conclusion:**  

Avoid using such as `immutable` and `lodash` everywhere before facing the real optimization problems with coding in pure javascript/typescript.  

There is something I want to refer:  

>Never optimize too early  

**Appendix:**  

[npm: react-immutable-pure-component](https://www.npmjs.com/package/react-immutable-pure-component)

[analysis in Chinese](https://tech.youzan.com/purecomponent-immutablejs/)
