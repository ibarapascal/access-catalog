# Template of react code: project demo and classic components

## Index

- [xxx-view.tsx](#View)

- [xxx-actions.tsx](#Actions)

- [reducer.tsx](#Reducer)

- [store.tsx](#Store)

- [xxx.d.ts](#Types)

- [api.tsx](#API)

### View

React classic component + redux + material-ui HOC styles  

Use as a template for quick development.  

Which brings some benefits showing bellow:  

- All type checked.  
- Props from parent components all defined at top of the file.  
- Used redux actions, touched redux store related to current component all defined at bottom of the file, and separated via API usage.  
- Developer can concentrate on events handling, page view and care less about other things.  

```tsx
import React from 'react';
import { connect } from 'react-redux';
import {
  Theme,
  createStyles,
  WithStyles,
  withTheme,
  withStyles,
} from '@material-ui/core';
import { Store } from '../../store';
import { InputAction } from '../../models/BaseTypes';
import { PlanReq } from '../../models/api/GetPlan';

// Material-ui styles
const styles = (theme: Theme) => createStyles({
});

// Styles in props
interface Props extends WithStyles<typeof styles> {
  classes: any,
  plan: Store['plan'],
  getPlan: (payload: PlanReq) => void,
  storePlan: (payload: InputAction) => void,
}
interface State {
}

// Class component with type definition of Props and State
class Component extends React.Component<Props, State>{
  constructor(props: Props) {
    super(props);
    // Default states' value
    this.state = {
    };
  }
  // Defalut props' value
  static defaultProps = {
    classes: {},
  };

  // React life-cycles
  async componentDidMount() {
  }

  // Event handling here

  render() {
    const { plan } = this.props;
    // const { } = this.state;
    return (
      // Component view here
      <div></div>
    );
  }
}

// Binding redux and material-ui styles using HOC
export const YourComponentName = withTheme(withStyles(styles)(connect(
  // Register (connect) `mapStateToProps`: used redux stored data
  (store: Store) => ({
    plan: store.plan,
  }),
  // Register (connect) `mapDispatchToProps`: used actions to operate redux stored data
  (dispatch: any) => ({
    getPlan: (payload: PlanReq) => dispatch(actionsWithService.getPlan(payload)),
    storePlan: (payload: InputAction) => dispatch(actions.storePlan(payload)),
  })
)(Component)));

export default YourComponentName;
```

### Actions

Redux actions distinguish by with API requests or not, with error handling  

```tsx
import { Store } from '../../store';
import * as service from '../../api';
import { PlanReq, PlanRes } from '../../models/api/GetPlan';
import { InputAction } from '../../models/BaseTypes';

export const actions = {
  receivePlan: (payload: PlanRes) => ({ type: 'receivePlan', payload }),
  storePlan: (payload: InputAction) => ({ type: 'storePlan', payload }),
  storeLocalStorageInput: (payload: InputAction) => ({ type: 'storeLocalStorageInput', payload}),
};

export const actionsWithService = {
  getPlan: (params: PlanReq) => {
    return async (dispatch: any) => {
      try {
        const result = await service.getPlan(Map(Object.entries(params)));
        dispatch(actions.receivePlan(result));
      } catch(error) {
        dispatch(actions.storeLocalStorageInput({item: 'errorMessage', value: JSON.parse(error.message)}));
      }
    };
  }
};

```

### Reducer

Redux reducer structure

```tsx
export const PlanReducer = createReducer<Store['plan']>(
  // Init value
  new PlanBody(),
  // Actions refer to action files' keyword `type`
  {
    receivePlan(state, action) {
      return state = action.payload;
    },
    clearPlan(state) {
      return state = new PlanBody();
    },
    storePlan(state, action) {
      return state = {
        ...state,
        [action.payload.item]: action.payload.value
      };
    },
    // TODO: can improve later
    storePlanTargetPersona(state, action) {
      return state = {
        ...state,
        targetPersona: {
          ...state.targetPersona,
          [action.payload.item]: action.payload.value,
        }
      }
    }
  }
)

export const reducer = combineReducers({
  plan: PlanReducer,
  // ... other 20 reducers
});
```

### Store

Redux store

```tsx
export interface Store {
  plan: PlanBody,
  // ... other 20 states
}
```

### Types

Type definition for stored content in redux

```tsx
export class PlanBody {
  id: string;
  name: string;
  targetPersona: TargetPersona;
  itemList: Array<ItemUnit>;
  // ...
  constructor() {
    this.id = '';
    this.name = '';
    this.targetPersona = new TargetPersona();
    this.itemList = Array<ItemUnit>();
  }
}
export class TargetPersona {
  // ...
  constructor() {
    // ...
  }
}
export class ItemSimulationMetrics {
  [key: string]: ItemSimulationMetrics[keyof ItemSimulationMetrics];
  cpm?: number | string;
  // ...
}

```

Type definition for res/req  

```tsx
/**
* ads.platform
* GetProductList
* request
*/
export class ProductListReq {
  platformId?: string;
}

/**
* response
*/
export class ProductListRes extends Array<ProductUnit> {
}
export class ProductUnit {
  id: string;
  name: string;
  platformId: string;
  deviceIdList: Array<string>;
  constructor() {
    this.id = '';
    this.name = '';
    this.platformId = '';
    this.deviceIdList = Array<string>();
  }
}
```

### API

```tsx
export async function getPlanSummary(params?: Map<string, string>) {
  return request('get', `${HOST}/v1/easi/flow/new_plan${query(params)}`);
}
export async function createPlan(body: PostPlanBody) {
  return request('post', `${HOST}/v1/easi/flow/new_plan`, body);
}
export async function updatePlan(params: {id: string}, body?: PutPlanBody) {
  return request('put', `${HOST}/v1/easi/flow/new_plan/${params.id}`, body);
}
export async function deletePlan(params: {id: string}) {
  return request('delete', `${HOST}/v1/easi/flow/new_plan/${params.id}`);
}

// TODO: need to check / improve later
export function query(params?: Map<string, string | number | Array<string>>) {
  const temp = params ? params.toObject() : {};
  const query = Object.keys(temp).map((key: string, idx: number) => {
    const item = temp[key];
    let result = '';
    if (typeof item === 'string' || typeof item === 'number') {
      result = key + '=' + item;
    } else if (item instanceof Array) {
      result = item.map((k: string, i: number) => {
        return key + '[]=' + item[i];
      }).join('&');
    };
    return result;
  });
  return 0 < query.length ? '?' + query.join('&') : '';
}
// TODO: fit current demand but may be improved later
async function request(method: 'get' | 'post' | 'put' | 'delete', url: string, body?: any) {
  let errorMessage = new ErrorMessage();
  const response = await fetch(url, {
    method: method,
    headers: { 'content-type': 'application/json' },
    body: body ? JSON.stringify(body) : null,
  }).then(res => {
    if (!(res.status === 200 || res.status === 204)) {
      errorMessage = {
        type: 'API error, contact administrator',
        head: 'Status: ' + res.status.toString() + ': ' + res.statusText,
        content: 'Events: ' + method.toUpperCase() + ': ' + url,
      };
    }
    return method !== 'delete' ? res.json() : res.ok;
  });
  if (errorMessage.type !== new ErrorMessage().type) {
    errorMessage.res = 'Response: ' + JSON.stringify(response);
    throw new Error(JSON.stringify(errorMessage));
  }
  return response;
}
```
