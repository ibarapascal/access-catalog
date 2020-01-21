
### Keyboard listener

[stackoverflow example](https://stackoverflow.com/questions/46462841/typescript-react-whats-the-correct-type-of-the-parameter-for-onkeypress)  

```tsx
handleKeypressEvent = (event: React.KeyboardEvent<HTMLDivElement>) => {
  if (event.key === 'Enter'){
  }
}
handleKeydownEvent = (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  if (event.keyCode === 13) {
  }
}
  <InputBase
    onKeyPress={this.handleKeypressEvent}
    onKeyDown={this.handleKeydownEvent}
  />
```

Link: javascript keyboard code [online](https://keycode.info/)  

More: [component keyboard event handling](https://stackoverflow.com/questions/37440408/how-to-detect-esc-key-press-in-react-and-how-to-handle-it/46123962)  

### Let element blur

- blur by id

```tsx
handleKeydownEvent = (id: string) => (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  if (event.keyCode === 13) {
    const element = document.getElementById(id);
    if (element) {
      element.blur();
    }
  }
}
```

- blur using ref in react: [stackoverflow](https://stackoverflow.com/questions/56217115/trigger-onblur-event-on-click-of-enter-keypress-in-react-js)  

[document](https://reactjs.org/docs/accessibility.html#keyboard-focus-and-focus-outline)  

>While this is a very important accessibility feature, it is also a technique that should be used judiciously. Use it to repair the keyboard focus flow when it is disturbed, not to try and anticipate how users want to use applications.

### Check if input value changed with on time store handler

Method: compare event.target.value of onFocus and onBlur  

### React router change return pages

[stackoverflow](https://stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router)  

```tsx
import { useHistory } from "react-router-dom";
function HomeButton() {
  let history = useHistory();
  function handleClick() {
    history.push("/home");
  }
  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
}
```

### Typescript select object attribute in string with type check

If we want to select object attribute with string,
typescript would give a type error.

```tsx
someObject[attr];
```

We can use `Object as any` to avoid this type error.

```tsx
export class TargetingPayloadMetrics extends Metrics {
}
const reportData: TargetingPayloadMetrics;
const INPUT_ATTR_LIST = ['cpm', 'ctr', 'vtr', 'vtr100', 'cvr'];
INPUT_ATTR_LIST.forEach((attr: string, idx: number) =>
  metricsDisplayDataList[reportIdxList[idx]] = (reportData as any)[attr]
);
```

Now we want to keep away from using `any` there.

```tsx
export class TargetingPayloadMetrics extends Metrics {
  [key: string]: TargetingPayloadMetrics[keyof TargetingPayloadMetrics];
}
const reportData: TargetingPayloadMetrics;
const INPUT_ATTR_LIST: Array<Metrics> = ['cpm', 'ctr', 'vtr', 'vtr100', 'cvr'];
INPUT_ATTR_LIST.forEach((attr: keyof Metrics, idx: number) =>
  metricsDisplayDataList[reportIdxList[idx]] = reportData[attr]
);
```

### React.memo()

Performance boost for functional component  

all in this => [article](https://dmitripavlutin.com/use-react-memo-wisely/)  

### Redux Async Actions

Async flow

[official](https://redux.js.org/advanced/async-actions)

### Converting an Object to Map

[refer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)

```tsx
// Example
const obj = { foo: 'bar', baz: 42 };
const map = new Map(Object.entries(obj));
console.log(map); // Map { foo: "bar", baz: 42 }
// Usage
const result = await service.getPerformanceAdgroup(Map(Object.entries(params)));
```

test passed  

### React tips document: react-bits

[document](https://vasanthk.gitbooks.io/react-bits/)

### Practice with react tools

[article](https://medium.com/better-programming/22-miraculous-tools-for-react-developers-in-2019-7d72054e2306)

Tools:

1.[webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)

2.[why-did-you-render](https://github.com/welldone-software/why-did-you-render)

3.[react-lifecycle-visualizer](https://github.com/Oblosys/react-lifecycle-visualizer)

4.[react-sight](https://www.reactsight.com/) => not maintained [issus](https://github.com/React-Sight/React-Sight/issues/134/)

### Input request params: Debounce Calling Multiple Times  

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

### Keep a div on top of everything  

[stackoverflow](https://stackoverflow.com/questions/7421775/css-i-want-a-div-to-be-on-top-of-everything)

```css
position: 'relative' | 'absolute'
zIndex: xxx
```

### Typescript generics type related

[document](https://www.typescriptlang.org/docs/handbook/generics.html)

```tsx
function prop<T, K extends keyof T>(obj: T, key: K) {
  obj[key]
}
```

### Typescript keyof

use res / req types to implement all types  
=> define each table constant using different implements  
=> remove all `any`, `as any`  
=> make `CRUD` as simple as possible  

[document](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html)

```tsx
class TestClass {
  a1: string;
  a2: number;
  constructor() {
    this.a1 = '1';
    this.a2 = 2;
  }
}
type BBB = keyof TestClass; // type BBB = "a1" | "a2"
```

### Router path

```tsx
this.props.history.location
```

### react-table with expandable rows  

[sample](https://codesandbox.io/s/github/tannerlinsley/react-table/tree/master/examples/expanding)

