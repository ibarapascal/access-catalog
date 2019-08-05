
## 2019/08

### Difference between shallow copy and deep clone.

![](https://miro.medium.com/max/390/0*RGt-o4ovYiIt_9nS.)

- shallow copy: The original array will be unaltered, but each of its elements would still reference their corresponding entries in the original array. Here is one way of it. [[1]](https://stackoverflow.com/questions/14491405/javascript-passing-arrays-to-functions-by-value-leaving-original-array-unaltere)
```javascript
var funcArray = someArray.slice(0);
```

- deep clone / structured cloning: The most efficient way in most situation is below. [[1]](https://stackoverflow.com/questions/122102/what-is-the-most-efficient-way-to-deep-clone-an-object-in-javascript) [[2]](https://stackoverflow.com/questions/122102/what-is-the-most-efficient-way-to-deep-clone-an-object-in-javascript/10916838#10916838)
```javascript
JSON.parse(JSON.stringify(object));
```

- TODO: Other copies?

### Comparing array & object [[1]](https://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript)

- Comparing arrays: Loop through them and compare every value.

- Comparing objects: Notice that two object instances will never be equal. Notice that JSON way to compare object is fast but need attrs to be ordered.

- TODO: Other compares?

### Remove duplicate values [[1]](https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array)

### Interface Array<T> summary

- TODO: Interface Array<T> summary by I/O, feature, usage, notice points.

- Differnce between forEach(), Every(), Some() and Map() [[1]](https://stackoverflow.com/questions/7340893/what-is-the-difference-between-map-every-and-foreach)

- forEach
```javascript
forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
```

- Every
```javascript
every(callbackfn: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
```

- Some
```javascript
some(callbackfn: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
```

- Map
```javascript
map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
```

- Filter
```javascript

```

- Reduce
```javascript

```

### Returns

- Notice the return writing method in ES6 arrow functions. [[1]](https://stackoverflow.com/questions/28889450/when-should-i-use-return-in-es6-arrow-functions)

```javascript
// OK
((name) => 'Hi ' + name)('Jess') // returns: 'Hi Jess'
((name) => {return 'Hi ' + name})('Jess')  // returns: 'Hi Jess'
((name) => ({id: name}))('Jess')  // returns: {id: 'Jess'}
((name) => {return {id: name}})('Jess')  // returns: {id: 'Jess'}
// NG
((name) => {})() // returns: undefined
((name) => {'Hi ' + name})('Jess') // returns: undefined
((name) => {id: name})('Jess')  // returns: undefined
```

### Type

- Forced type conversion: notice [] is true

- TODO: Summary [[1]](https://www.w3schools.com/js/js_type_conversion.asp)

- Type annotation for object with unknown properties but known property types [[1]](https://github.com/Microsoft/TypeScript/issues/7803)

```javascript
interface MetadataObj {
    [key: string]: Metadata
}
```

- Check variable type [[1]](https://stackoverflow.com/questions/35546421/how-to-get-a-variable-type-in-typescript)

```javascript
abc:number|string;
if (typeof abc === "number") {
class Foo {}
if (fooOrBar instanceof Foo){
```

