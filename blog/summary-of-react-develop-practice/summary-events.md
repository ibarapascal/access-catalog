# Events

## Index  

- [debounce](#debounce)  
- [validation](#validation)  
- [optimization](#optimization)  
- [keyboad event listening](#keyboad-event-listening)  
- [api error handling with redux](#api-error-handling-with-redux)  
- [using devTools](#using-devTools)

### debounce

What we want: only run request when use input text approach min length.  

[use debounce in react](https://stackoverflow.com/questions/23123138/perform-debounce-in-react-js)

[debounce input value](https://stackoverflow.com/questions/49389001/underscore-debounce-calling-multiple-times)

```tsx
// Wrong, debounce run each time `onInputLabel` launched
onInputLabel = (event: React.ChangeEvent<HTMLInputElement>) => {
  const eventValue = event && event.target ? event.target.value : '';
  this.setState({ inputSearchLabel: eventValue});
  if (eventValue.length > 2) {
    debounce((eventValue: string) => {
      this.props.getClientList(eventValue);
    }, 1000)
  }
}
```

```tsx
// Not good: input from `12345` to `1`, unnecessary req `123` would be launched
onInputLabel = (event: React.ChangeEvent<HTMLInputElement>) => {
  const eventValue = event && event.target ? event.target.value : '';
  this.setState({ inputSearchLabel: eventValue});
  if (eventValue.length > 2) {
    this.debounceGetClientList(eventValue);
  }
}
debounceGetClientList = debounce((value: string) => {
  this.props.getClientList(value);
}, 1000)
```

```tsx
// Good
onInputLabel = (event: React.ChangeEvent<HTMLInputElement>) => {
  const eventValue = event && event.target ? event.target.value : '';
  this.setState({ inputSearchLabel: eventValue});
  this.debounceGetClientList(eventValue);
}
debounceGetClientList = debounce((value: string) => {
  if (value.length > 2) {
    this.props.getClientList(value);
  }
}, 1000)
```

[debounce avoid multiple click](http://sandny.com/2017/11/01/debounce-and-avoid-multiple-click-event-generation-on-react-js-components-lodash/)

### validation

**What we want:**  
For user input elements like input text and multi-selection, once inputed / click `next page` button, check input element / all validated elements whether is valid, if not, showing warnings separately.  
For default empty elements, valid after touched and value changed.  
Define validation element info (type of validation) in one place.  

**How we design:**  
Perhaps we need both `valid info list` and `touched info list`,  
Only showing error message once touched.  
Click `next page` button let all elements (which with validator) touched.  
Default valid status needed so regist when mount.  
Value change (rather than onFocus or onBlur) update the touched status.  

**How we implement:**  
In a classic input element component, we arrange validation events like bellow.  

```tsx
/**
 * Common text input component
 */
import { ValidationService as VS } from '../../../../services/ValidationService';

render() {
  const {id, value, onChange, label, placeholder, customProps } = this.props;

  // Check if this element need validation via id
  const isValidate = id && VS.checkIfNeedToValidate(id);
  // Check if touched
  const touched = isValidate && VS.checkIfTouched(this.props, id);
  // Check if valid
  const valid = isValidate && VS.checkIfValid(this.props, id);
  // Get the error message
  const error = isValidate && VS.acquireValidateMessage(this.props, id);

  return (
    <TextField
      label={label}
      input={value}
      value={value ? value : ''}
      placeholder={placeholder ? placeholder : label}
      error={touched && !valid} // Error styles
      helperText={touched && !valid && error} // Error message
      onChange={(e: any) => onChange(e, id)}
      {...customProps}
    />
  );
}
```

We regist validatd elements when component-did-mount and update the status in event-hander

```tsx
/**
 * Usage
 */
componentDidMount() {
  ...
  this.validationRegister();
}

validationRegister() {
  const { inputStorePlan } = this.props;
  // Regist
  VS.updateValidStatus(this.props, inputStorePlan.name, 'FLP_INPUT_01');
  VS.updateValidStatus(this.props, inputStorePlan.budget, 'FLP_INPUT_02');
}

handleStoreInput = (field: string) => (event: React.ChangeEvent<HTMLInputElement>, id: ValidationItems) => {
  this.props.storePlan({item: field, value: event.target.value});
  // Update
  VS.updateTouchedStatus(this.props, id);
  VS.updateValidStatus(this.props, event.target.value, id);
};

// No more customize implements needed
<Grid item xs={4} className={classes.inputZone}>
  <CMInputZone label='プラン名称' necessary={true}>
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
  <CMInputZone label='予算総額（グロス）' necessary={true}>
    <CMInputText
      id='FLP_INPUT_02'
      value={inputStorePlan.budget}
      onChange={this.handleStoreInput('budget')}
    />
  </CMInputZone>
</Grid>
```

Define validation info via single source constant

```tsx
export class Constant {
  /**
   * validation input id list, can be expanded in method and pages
   */
  static readonly PAGE_A = [
    {id: 'FLP_INPUT_01', method: ['isFilled']},
    {id: 'FLP_INPUT_02', method: ['isFilled', 'isNumber']},
    {id: 'FLP_SELECT_01', method: ['isFilled']},
  ] as const;
  static readonly PAGE_B = [
    {id: 'ES_SELECT_01', method: ['isFilled']},
  ] as const;
  static readonly VALIDATION_LIST_ALL = [
    ...Constant.PAGE_A,
    ...Constant.PAGE_B,
  ];
}

const itemList = Constant.VALIDATION_LIST_ALL.map(x => x.id);
export type ValidationItems = typeof itemList[number]; // 'FLP_INPUT_01' | 'FLP_INPUT_02' | 'FLP_SELECT_01' | 'ES_SELECT_01'
const methodList = [...Constant.VALIDATION_LIST_ALL.map(x => x.method)][0];
export type ValidationMethod = typeof methodList[number]; // 'isFilled' | 'isNumber'
```

And we integrated the error message into the `valid status list` (if not included, meaning valid, no error message)

```tsx
/**
 * ValidationService
 */
import { Store } from "../store";
import { InputAction } from "../models/BaseTypes";
import { ValidationItems, Constant, ValidationMethod } from "../constants";

export class ValidationService {
  /**
   * Main validator for different method
   *
   * @param value
   * @param method
   */
  static validator(value: string | number, method: Array<ValidationMethod>): string {
    if (method.includes('isFilled') && (value === '' || value === 0)) {
      return 'Input cannot be empty';
    } else if (method.includes('isNumber') && !/^\d+(\.\d{1,2})?$/.test(value.toString())) {
      return 'Invalid number';
    } else {
      // ...
      return '';
    }
  }
  static checkIfNeedToValidate(id: string): boolean {
    return Constant.VALIDATION_LIST_ALL.some(x => x.id === id);
  }
  static checkIfTouched(props: PropsOfLocalStorage,id: string): boolean {
    return props.inputStoreLocalStorage.touchedIdList.includes(id);
  }
  static checkIfValid(props: PropsOfLocalStorage, id: string): boolean {
    return !props.inputStoreLocalStorage.inValidMessageList.some(x => x.includes(id));
  }
  static acquireValidateMessage(props: PropsOfLocalStorage, id: string): string {
    const temp = props.inputStoreLocalStorage.inValidMessageList.find(x => x.includes(id));
    return temp ? temp.split(':')[1] : '';
  }
  static checkIfhavingInvalidMessage(props: PropsOfLocalStorage): boolean {
    return props.inputStoreLocalStorage.inValidMessageList.length > 0;
  }
  /**
   * Get validator method from constant
   * @param id page input item id
   */
  static acquireValidationMethod(id: ValidationItems): any {
    const item = CommonConstant.VALIDATION_LIST_ALL.find(x => x.id === id);
    return item ? item.method : undefined;
  }
  /**
   * Update stored validation status for page input item
   * @param props
   * @param value
   * @param id
   */
  static updateValidStatus(props: PropsForUpdate, value: string | number, id: ValidationItems) {
    const method = ValidationService.acquireValidationMethod(id);
    if (method) {
      const validResult = ValidationService.validator(value, method);
      let list: Array<string> = props.inputStoreLocalStorage.inValidMessageList.slice();
      const result = validResult === ''
        ? list.filter(x => !x.includes(id))
        : [...list.filter(x => !x.includes(id)), id + ':' + validResult];
      props.storeLocalStorageInput({item: 'inValidMessageList', value: result});
    }
  }
  /**
   * Update stored touch status for page input item
   * @param props
   * @param id
   */
  static updateTouchedStatus(props: PropsForUpdate, id: ValidationItems) {
    if (!props.inputStoreLocalStorage.touchedIdList.includes(id)) {
      const result = [...props.inputStoreLocalStorage.touchedIdList, id];
      props.storeLocalStorageInput({item: 'touchedIdList', value: result});
    }
  }
}

```

### optimization

### keyboad-event-listening

### api-error-handling-with-redux

### using-devTools
