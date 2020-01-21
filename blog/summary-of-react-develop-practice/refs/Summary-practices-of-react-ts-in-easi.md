# Summary

## Document

- [typescript](https://www.typescriptlang.org/docs/handbook/basic-types.html)

- [jsx with ts](https://www.typescriptlang.org/docs/handbook/jsx.html)

- [typescript react](https://fettblog.eu/typescript-react/)

## Packages with type support

- [mui-datatables](https://www.npmjs.com/package/mui-datatables)

- [@type/mui-datatables](https://www.npmjs.com/package/@types/mui-datatables) <= [API](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/mui-datatables/index.d.ts)

- [material-ui theme spacing](https://material-ui.com/customization/spacing/)

## Handled

### [constructor](https://reactjs.org/docs/react-component.html)

```tsx
// Now // src\components\estimator\es0100\es0100-view.tsx
class component extends React.Component<Props, State>{
  constructor(props: Props) {
    super(props);
    this.XXX = this.XXX.bind(this);
    this.state = {}
  }
  static defaultProps = {};
  XXX = (id: any) => {}
  render () {...}
```

### material-ui withTheme(), [official](https://material-ui.com/guides/migration-v3/)

```tsx
// Before
export default withTheme()(withStyles(styles)(ESTop));
// After
export default withTheme(withStyles(styles)(ES0100));
```

### props

```tsx
// Before
ESTop.propTypes = {
  classes: PropTypes.object.isRequired,
  onDelete: PropTypes.func,
  simulations: PropTypes.objectOf(PropTypes.object),
  theme: PropTypes.object.isRequired,
};
// After
interface Props extends WithStyles<typeof styles> {
  classes: any,
  onDelete: Function,
  simulations: any,
  // theme: any, // PropTypes.object.isRequired,
}
class component extends React.Component<Props, State>{
```

### [default props](https://stackoverflow.com/questions/37282159/default-property-value-in-react-component-using-typescript)

```tsx
// Before // app\components\ESTop\index.js
ESTop.defaultProps = {
  simulations: new EstimatorSimulationList(),
  onDelete: () => {},
};
// After // src\components\estimator\es0100\es0100-view.tsx
class component extends React.Component<Props, State>{
  static defaultProps = {
    simulations: new EstimatorSimulationList(),
    onDelete: () => {},
  };
```

### [lodash](https://lodash.com/docs/4.17.15)

```tsx
// Before // app\components\Content.js
return _.find(this.children, child => child.type === ContentHeader);
// After // src\components\estimator\common\content\ezct00-view.tsx
return _.find(this.children, ['type', ContentHeader]);
```

### value.id type

```tsx
// Now // src\components\estimator\es0100\es0100-view.tsx
class component extends React.Component<Props, State>{
  [x: string]: any;
  handleDelete = () => {
    const { onDelete } = this.props;
    const { dialog } = this.state;
    onDelete(dialog.value.id); // <= here
    this.handleClose();
  };
```

### [event type](https://fettblog.eu/typescript-react/events/), [event.target.value type](https://stackoverflow.com/questions/40676343/typescript-input-onchange-event-target-value)

```tsx
// Now // src\components\estimator\es0100\es0100-view.tsx
  handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value; // <= here
    this.setState({ searchText: text });
    this.table.searchTextUpdate(text);
  };
```

### ? compose and componentDidMount

QA: how to trans response data to props.

```tsx
// Before // app\containers\ESTop.js
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  compose(
    lifecycle({
      componentDidMount() {
        this.props.requestEstimatorSimulations(); // <= here
      },
    })
  )(ESTop)
);
// After // src\components\estimator\es0100\es0100-actions.tsx
export const actionsWithService = {
  requestEstimatorSimulations: () => {
    return async (dispatch: any, getState: () => Store) => {
      const addAction = actions.requestEstimatorSimulations(); // <= here
      dispatch(addAction);
      await service.es0100RequestEstimatorSimulations();
    };
  },
```

### [theme.spacing.unit been deprecated](https://github.com/gregnb/mui-datatables/issues/676), [official](https://material-ui.com/guides/migration-v3/)

```tsx
// Before // app\components\ESTop\index.js
    width: theme.spacing.unit * 9,
// After // src\components\estimator\es0100\es0100-view.tsx
    width: spacing(9),
```

### Default props didn't define style classes which cause classes undefined

>classes.XXX is not defined

```tsx
// Wrong
  static defaultProps = {
    simulations: new EstimatorSimulationList(),
    onDelete: () => {},
  };
// Correct
  static defaultProps = {
    simulations: new EstimatorSimulationList(),
    onDelete: () => {},
    classes: {}, // <= here // MARK!!!!
  };
```

### Material-UI theme provider needed, and need inner content a function return

>A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.

```tsx
// Wrong
  <ThemeWrapper>
    <AppContext.Consumer>
      <div style={styleRoot}>
        ...
      </div>
    </AppContext.Consumer>
  </ThemeWrapper>
// Correct
  <ThemeWrapper>
    <AppContext.Consumer>
      {() => (
        <div style={styleRoot}>
          ...
        </div>
      )}
    </AppContext.Consumer>
  </ThemeWrapper>
```

### [material-ui button component typescript](https://material-ui.com/guides/composition/#caveat-with-inlining)

```tsx
// Before // app\components\ESTop\index.js
<IconButton component={Link} to="/"></IconButton>
// X After // src\components\estimator\es0100\es0100-view.tsx
<IconButton component={props => <Link to={'/'} {...props} />}></IconButton>
// How ? => below
```

[official: caveat with refs](https://material-ui.com/guides/composition/#caveat-with-refs)

>Failed prop type: Invalid prop `component` supplied to `ForwardRef(ButtonBase)`. Expected an element type that can hold a ref. Did you accidentally provide a plain function component instead?  

[issus#15827](https://github.com/mui-org/material-ui/issues/15827), [issus#16848](https://github.com/mui-org/material-ui/issues/16846)

Condition: m-ui v4 + button base link + type check

Article: [challenging ts with 3rd party libraries](https://medium.com/@vitalyb/dont-let-typescript-slow-you-down-92d394ec8c9f)

Unsolved: ignore using below method.

### Ignore type check in jsx: [issus](https://github.com/Microsoft/TypeScript/issues/27552)

typescript ignore

```tsx
{/* 
// @ts-ignore */}
```

Notice the eslint ignore

```tsx
// eslint-disable-next-line
```

### Ignore type check for multi-lines: [issus](https://github.com/Microsoft/TypeScript/issues/19573)

By now impossible.

### Material-UI stylesheet writing form

>Material-UI: the `MuiExpansionPanel` component increases the CSS specificity of the `expanded` internal state.  
Instead, you need to use the $ruleName syntax:  

```tsx
// Before
    MuiExpansionPanel: {
      root: {
        '&:first-child': {
          ...
        },
        ...
      },
      expanded: { // <= here
        ...
      }
    },
// After
    MuiExpansionPanel: {
      root: {
        '&:first-child': {
          ...
        },
        ...
        '&$expanded': { // <= here
          ...
        }
      },
    },

```

### CORS request access control check

>Access to fetch at 'http://localhost:3001/v1/easi/estimator/simulation' from origin 'http://localhost:3008' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.  

[document](https://javascript.info/fetch-crossorigin)

[QA description](https://stackoverflow.com/questions/51017702/enable-cors-in-fetch-api)

Solution: Fix wrong url

### Material-UI MUIDataTable

Invalid option value for responsive. Please use string option: scrollMaxHeight | scrollFullHeight | stacked

e.handleOptionDeprecation	@	index.js:2283

```
"boolean" == typeof t.options.selectableRows
&& (console.error("
Using a boolean for selectableRows has been deprecated. Please use string option: multiple | single | none
"),
e.options.selectableRows = t.options.selectableRows ? "multiple" : "none"),

-1 === ["scrollMaxHeight", "scrollFullHeight", "stacked"].indexOf(t.options.responsive) 
&& console.error("Invalid option value for responsive.

Please use string option: scrollMaxHeight | scrollFullHeight | stacked"),

"scroll" === t.options.responsive && console.error("This option has been deprecated.
It is being replaced by scrollMaxHeight");
```

```tsx
  <MUIDataTable
    options={{
      responsive: 'scrollMaxHeight',
```

### immutable + createReducer, need return value!!!

Error: view no display, while others normal.

Phenomenon:

- 1.Request and response are normal with JSON back till action.payload,

- 2.Immutable state having normal data structure till reducer,

- 3.Run over with no error in terminal and console,

Clue:

- redux state chrome extension show that state is empty.

- breakpoint show that the type is undefined.

Why not found:

- createReducer using {} value direct as a parameter

- reducer can't make break point nearby.

```tsx
// src\reducer.tsx
export const AdsAdvertisersReducer = createReducer<AdsAdvertiserList>(
  new AdsAdvertiserList(),
  {
    receiveAdsAdvertisers(state, action) {
      // Wrong
      state.add(action.payload);
      // Correct
      return state.add(action.payload); // MARK!!!
    }
  }
);
```

Next: deal with TS immutable data structure.

```
(alias) createReducer<FlowPlanList, CaseReducers<FlowPlanList, any>>(initialState: FlowPlanList, actionsMap: CaseReducers<FlowPlanList, any>): Reducer<FlowPlanList, AnyAction>
```

### reduxForm: Field must be inside a component decorated with reduxForm()

1.use reduxForm().

2.import without {} if you export default your component with reduxForm! [Solution](https://stackoverflow.com/questions/44940778/field-error-while-using-redux-form-in-react-js)

```tsx
// src\components\index.tsx
// Before
import { FW0200 } from './fw02/fw0200-view';
// After
import FW0200 from './fw02/fw0200-view';
```

### reduxForm + withstyles type defination

[Solution](https://gist.github.com/iamtmrobinson/d4bb6e9297300b787891337fe9e07c42)

```tsx
// src\components\fw02\fw0200-view.tsx
// Before
interface Props extends WithStyles<typeof styles> {
}
...
export default withStyles(styles)(FW0200);
// After
import {
  Field,
  reduxForm,
} from 'redux-form/immutable';
import { InjectedFormProps } from 'redux-form';
interface Props extends InjectedFormProps, WithStyles<typeof styles> { // <= here // MARK!!
}
...
export default reduxForm({ // <= here
  ...
})(withStyles(styles)(FW0200));
```

### Material UI collapse list

[document](https://material-ui.com/components/lists/)

### ? Field can not input

TODO [refer document](https://reactjs.org/docs/forms.html)

### ? Update nested state properties

TODO [refer](https://stackoverflow.com/questions/43040721/how-to-update-nested-state-properties-in-react)

```tsx
// Not good
  handleDeepChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const [a, b] = field.split('.');
    console.log(a, b);
    this.setState({ a: { ...this.state[a], [b]: event.target.value } } as Pick<State, any>);
  };
// Better?

```

### about multipe date picker in one component

Situation now: [feature on progress](https://github.com/mui-org/material-ui-pickers/issues/364)

Temp solution: [naterial-ui-datetiem-range-picker](https://www.npmjs.com/package/material-ui-datetime-range-picker)

### children component

```tsx
// src\components\common\zz0200-collapse-list\zz0200-view.tsx
interface Props extends WithStyles<typeof styles> {
  children: React.ReactNode,
}
class component extends React.Component<Props, State>{
  render() {
    const { ..., children } = this.props;
    return (
      ...
          <List component="div" disablePadding>
            {children}
          </List>
      ...
    );
  }
```

### validator

[material-ui](https://redux-form.com/6.6.1/examples/material-ui/)

### Material ui pickers: Date Picker with Typescript

[official guides](https://material-ui-pickers.dev/guides/upgrading-to-v3)

### HOC styles with material UI

[refer](https://stackoverflow.com/questions/50795655/material-ui-how-to-style-an-hoc-using-withstyles)

### Temp

```tsx
  handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [field]: event.target.value } as Pick<State, any>);
  };
```

### Temp2

react multi-select [demo](https://react-select.com/home)

### Objects are not valid as a React child (found: object with keys {value, label}).

IMPORTANT!

### clear() method not exist in immutable

used uncorrect import way when js => ts

```tsx
import { AdsAdvertiserList } from './models/Ads/Advertiser';
export const BrandsReducer = createReducer<AdsAdvertiserList>(
  new AdsAdvertiserList(),
  {
    receiveAdsAdvertisersByBrand(state, action) {
      return state.clear().add(action.payload); // <= here
    }
  }
);

// src\models\Base.js
// Before
import { OrderedMap, Record } from 'immutable/dist/immutable';
// After
import { OrderedMap, Record } from 'immutable';
```
