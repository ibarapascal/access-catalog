### Style: material-ui + typescript + WithStyle + class component

Refer links:
[Issus: Typescript type error in component returned by withStyles() #8447](https://github.com/mui-org/material-ui/issues/8447)

[Issus: Typescript: Types for withStyles() - forced to set classes-property #10022](https://github.com/mui-org/material-ui/issues/10022)

[TypeScript + React + Material-UI v3 のスタイル付き Components ガイド](https://qiita.com/cieloazul310/items/ec52ac3b7a673d980f2c)

```tsx
// Been tested and style inheritance worked fine.
// May have better approach.

const styles = (theme: Theme) => createStyles({ // `createStyles` do noting but declare.
});

interface Props extends WithStyles<typeof styles> { // Giving props `classes` type.
  classes: any; // `classes?: any` doesn't work here or need further handling.
}

class component extends React.Component<Props, State>{
  constructor(props: Props) {
    super(props);
  }
  static defaultProps = {
    classes: {}, // Needed when unnecessary to pass classes in parent component.
  };
  render() {
    const { classes } = this.props;
    const { } = this.state;
    return (
      <div>
        <p className={classes.styleSheet}>Define the styleSheet in parent component</p>
      </div>
    );
  }
}

// WRONG! 2019/10/19
export const YourComponent = connect( // Component with state handling.
  (store: Store) => ({
  }),
  (dispatch: any) => ({
  })
)(component);
export default withTheme(withStyles(styles)(YourComponent)); // `withStyles`: Style decorator

// NEW 2019/10/21
export const CMInputZone = withTheme(withStyles(styles)(connect(
  (store: Store) => ({
  }),
  (dispatch: any) => ({
  })
)(component)));
export default CMInputZone;
```

Notice:

- Parents style actions in front of child.

- Attributes would be merged.

```tsx
// Level_1
const styles = () => createStyles({
  root: {
    fontSize: '20px',  
  }
});
// Level_2
const styles = () => createStyles({
  root: {
    fontSize: '50px',
    color: 'blue',
  }
});
// Level_3
// Display with fontSize:20px and color:blue
```

Problem:

- How to use style in the component which need it.

=> Defaultprops ?  

- Defaultprops can not be merged.

=> How ? / Not even merged, not functional.  
=> Maybe directly import css if some local style is needed.  

### Directly import css file to react component

[Issus: "Cannot resolve module" for CSS files #1470](https://github.com/webpack/webpack/issues/1470)

```shell
npm install --save style-loader css-loader
```

```tsx
import './YourComponent-css';
```

### withTheme in material-ui

### Need to solve

- 1.style cannot handle HOC in withStyle

a.try delete withTheme  
b.Microsoft solution: Fabric React [demo](https://github.com/microsoft/frontend-bootcamp/tree/master/step2-03/demo)  

**Reason found**: not passed the withStyle to export!!!

- 2.style passing from the top need every component with `classes={classes}`

a.If each component styles solved, there is no need to passing styles from Top to buttom.  
b.Only need to define common styles if needed using `css-in-js` or `styles-loader & css-loader`.  
c.Need webpack config settings.  

### Export VS Export default

[reference article](https://medium.com/@etherealm/named-export-vs-default-export-in-es6-affb483a0910)

Conclusion: both

### Javascript / Typescript capitalization

[QA](https://stackoverflow.com/questions/1540763/capitalization-convention-for-javascript-objects)

In general, use:
>functionNamesLikeThis
variableNamesLikeThis
ClassNamesLikeThis
EnumNamesLikeThis
methodNamesLikeThis
SYMBOLIC_CONSTANTS_LIKE_THIS

### Material ui customize styles with classes

[document](https://material-ui.com/customization/components/#overriding-styles-with-classes)

### How to set react-select height and other styles

solution: [issus](https://github.com/JedWatson/react-select/issues/1322)  

### How to conditionally add a prop to component

[solution](https://stackoverflow.com/questions/31163693/how-to-conditionally-add-attributes-to-react-components)

```tsx
var inputProps = {
  value: 'foo',
  onChange: this.handleChange
};
if (condition) inputProps.disabled = true;
```

### value provided is not in a recognized RFC2822 or ISO format

### Date comparision in javascript

[refer](https://stackoverflow.com/questions/492994/compare-two-dates-with-javascript)

For `>, <, <= or >=`, directly use the Date object to compare.

For `==, !=, ===, and !==`, use `date.getTime()`.

### React.ReactNode or React.ReactElement

Conclusion: [link](https://stackoverflow.com/questions/47899824/what-is-the-correct-type-for-a-react-instance-of-a-component-in-typescript)

Normally React.ReactNode

Using React.ReactElement  
Only if you want to restrict customization to elements of particular class  

```tsx
// example
  {React.cloneElement(PayloadPlatforms, {payloadProps: {
    platform: platform,
    product: new FlowProductsItem(),
    target: new FlowTargetItem(),
  }})}
```

### Customize material-ui / third party libs component styles

- Third party libs (for example: react-select): [link](https://react-select.com/styles)

```tsx
// easi-flow-ui\src\components\FLBrief\TargetPersonal\MultiLabelInputSelect\FLMultiLabelInputSelect-view.tsx
import Select from 'react-select';

const customStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    minHeight: 66,
    alignItems: 'baseline',
  }),
}
  <Select
    ...
    styles={customStyles}
  />
```

- Material-UI: [link](https://material-ui.com/customization/components/)

```tsx
// easi-flow-ui\src\components\common\CollapseTable\Parts\CMCollapseMain-view.tsx
import { ExpansionPanelSummary as BaseExpansionPanelSummary } from '@material-ui/core';

const summaryStyles = {
  root: {
    minHeight: 0,
    height: TABLE_ROW_HEIGHT,
    '&$expanded': {
      minHeight: 0, // prevent expand height (default `64px`) after uncollapsed
      height: TABLE_ROW_HEIGHT,
    },
  },
  content: {
    margin: 0,
    '&$expanded': {
      margin: 0,
    }
  },
  expandIcon: {},
  expanded: {}
};
const ExpansionPanelSummary = withStyles(summaryStyles)(BaseExpansionPanelSummary);

  <ExpansionPanelSummary
    aria-controls="panel1d-content"
    id="panel1d-header"
    className={classes.summary}
  >
```

### Is async in componentdidmount a good practice in react? 

[stackoverflow QA](https://stackoverflow.com/questions/47970276/is-using-async-componentdidmount-good)

```tsx
// This is typescript code
componentDidMount(): void { /* do something */ }

async componentDidMount(): Promise<void> {
    /* do something */
    /* You can use "await" here */
}
```

- The `async` keyword is absolutely harmless.  
- I cannot imagine any situation in which you need to make a call to the `componentDidMount()` method so the return type `Promise<void>` is harmless too. Calling to a method having return type of `Promise<void>` without `await` keyword will make no difference from calling one having return type of `void`.  
- Since there is no life-cycle methods after `componentDidMount()` delaying its execution seems pretty safe.  

### Optimizing Performance

- Analysis

[How to use chrome performance analysis tool](https://calibreapp.com/blog/react-performance-profiling-optimization/)  

[React Profiler](https://zh-hans.reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html)  

[Sample demo](https://www.robinwieruch.de/react-prevent-rerender-component)  

```tsx
  shouldComponentUpdate(nextProps: Props, nextState: State) {
    // If props.flowTargets is refreshing, do not update / re rendering component
    // For example, for immutable OrderedMap, we can use items.size to compare => test passed
    // Check if it has any other side-effects
    return this.props.flowTargets.items.size === nextProps.flowTargets.items.size;
  }
```

- Notice: map component with iteration causing re rendering performance problems.  

### CSS vertical-align center

[QA](https://webmasters.stackexchange.com/questions/103529/vertically-and-horizontally-align-div-into-parent-div)

```tsx
const styles = (theme: Theme) => createStyles({
  root: { // for parent component
    display: 'flex',
    alignItems: 'center',
  },
})
```

### material-ui unmountonexit: transition

[document: transitions](https://material-ui.com/components/transitions/)

If add `unmountOnExit` on `<Collapse>`, the child will be unmount when collapse, which causing input value cleared after it expanded.

```tsx
<Collapse in={isViewOpen} timeout="auto" unmountOnExit>
  <List component="div" disablePadding>
    {children}
  </List>
</Collapse>
```

### Focus

Ref in Typescript remain to solve  

```tsx
// we can subscribe using `shouldComponentUpdate` if you change state
  shouldComponentUpdate(nextProps: Props, nextState: State) {
// get element and activeElement by id
    if (document.activeElement === document.getElementById('dateInput')) {
      console.log('having focus')
    }
    return true;
  }
// set id
  <DatePicker
    id='dateStart'
    onFocus={this.handleOnFocus}
    onBlur={this.handleOnBlur}
  />
```

Problems by now:  
1.DatePicker automatically blur after date picked.  
2.Parent element focus is different with child.  

### Typescript new version

[Roadmap](https://github.com/Microsoft/TypeScript/wiki/Roadmap)

[Announcing TypeScript 3.7 RC](https://devblogs.microsoft.com/typescript/announcing-typescript-3-7-rc/)
