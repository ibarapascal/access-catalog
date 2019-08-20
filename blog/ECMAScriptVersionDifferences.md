# 2019/08/20

## [ECMAScript >6: Summary](https://medium.com/@madasamy/javascript-brief-history-and-ecmascript-es6-es7-es8-features-673973394df4)

They decided to release a new version of ECMAScript every year starting in 2015. A yearly update means no more big releases like ES6.


### ECMAScript 9(2018)

[Asynchronous Iteration](https://2ality.com/2016/10/asynchronous-iteration.html): Asynchronous iteration, for-await-of, Asynchronous generators
```javascript
async function f() {
    for await (const x of createAsyncIterable(['a', 'b'])) {
```

**IMP** [Rest/Spread Properties](https://2ality.com/2016/10/rest-spread-properties.html)  
Syntactic restrictions: Per top level of each object literal, you can use the rest operator at most once and it must appear at the end.

~~**OK** [Promise.prototype.finally()](https://2ality.com/2017/07/promise-prototype-finally.html)~~ 

~~**?** [Template Literal Revision](https://2ality.com/2016/09/template-literal-revision.html)~~


### ECMAScript 8(2017)

~~**OK** [Async Functions](https://2ality.com/2016/02/async-functions.html)~~  

~~**?** [Shared memory and atomics](https://2ality.com/2017/01/shared-array-buffer.html)~~

[Object.values/Object.entries](https://2ality.com/2015/11/stage3-object-entries.html)
```javascript
Object.entries({ one: 1, two: 2 }); // [ [ 'one', 1 ], [ 'two', 2 ] ]
Object.values({ one: 1, two: 2 });  // [ 1, 2 ]
```

[String padding](https://2ality.com/2015/11/string-padding.html): padStart, padEnd
```javascript
'x'.padStart(5, 'ab');   //'ababx'
'x'.padStart(4, 'ab');   // 'abax'
'abcd'.padStart(2, '#'); // 'abcd'
'abc'.padStart(10, '0123456789'); // '0123456abc'
'x'.padStart(3);         // '  x'
```

~~**?** [Object.getOwnPropertyDescriptors()](https://2ality.com/2016/02/object-getownpropertydescriptors.html)~~

~~**OK** [Trailing commas in function parameter lists and calls](https://2ality.com/2015/11/trailing-comma-parameters.html)~~


### ECMAScript 7(2016)

~~**OK** [Array.prototype.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)~~  

[Exponentiation operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators)
```javascript
let squared = 2 ** 2; // same as: 2 * 2
let cubed = 2 ** 3;   // same as: 2 * 2 * 2
let a = 2; a **= 2;   // same as: a = a * a;
let b = 3; b **= 3;   // same as: b = b * b * b;
```


## [ECMAScript 6: New Features: Overview and Comparison](http://es6-features.org/#Constants)

~~**Const**: Support for constants (also known as "immutable variables").~~

~~**Scoping**: let / block-scoped functions~~

~~**Arrow Functions**: For expression and statement bodies. (have @return or not)~~

**Extended Parameter Handling**: Default parameter values, rest parameter, spread operator.
```javascript
function f (x, y = 7, z = 42) {
function f (x, y, ...a) {
var params = [ "hello", true, 7 ];
var other = [ 1, 2, ...params ]; // [ 1, 2, "hello", true, 7 ]
```

**Template Literals**: Intuitive expression interpolation for single-line and multi-line strings.
```javascript
var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`;

get`http://example.com/foo?bar=${bar + baz}&quux=${quux}`;

console.log(`${JSON.stringify(theArray)}:
```

**Extended Literals**: Binary & Octal Literal, Unicode String & RegExp Literal
```javascript
0b111110111 === 503;
0o767 === 503;

"𠮷".length === 2;
"𠮷".match(/./u)[0].length === 2;
"𠮷" === "\uD842\uDFB7";
"𠮷" === "\u{20BB7}";
"𠮷".codePointAt(0) == 0x20BB7;
```

**Enhanced Object Properties**: Computed Property Names
```javascript
let obj = {
    foo: "bar",
    [ "baz" + quux() ]: 42
};
```

**Destructuring Assignment**: Array Matching
```javascript
var list = [ 1, 2, 3 ];
var [ a, , b ] = list;
[ b, a ] = [ a, b ];

var { op, lhs, rhs } = getASTNode();
var { op: a, lhs: { op: b }, rhs: c } = getASTNode();

var obj = { a: 1 };
var list = [ 1 ];
var { a, b = 2 } = obj;
var [ x, y = 2 ] = list;
```

**Modules**: Support for exporting/importing values from/to modules without global namespace pollution.

**Classes**: Inheritance, super(), base class access [[1]](http://es6-features.org/#ClassDefinition), [[2]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super)
```javascript
class Shape {
    constructor (id, x, y) {
        this.id = id;
        this.move(x, y);
    }
    move (x, y) {
        this.x = x;
        this.y = y;
    }
    toString () {
        return `Shape(${this.id})`
    }
}
class Circle extends Shape {
    constructor (id, x, y, radius) {
        super(id, x, y);
        this.radius = radius;
    }
    toString () {
        return "Rectangle > " + super.toString();
    }
}

class Rectangle {
    constructor (width, height) {
        this._width  = width;
        this._height = height;
    }
    set width  (width)  { this._width = width;               }
    get width  ()       { return this._width;                }
    set height (height) { this._height = height;             }
    get height ()       { return this._height;               }
    get area   ()       { return this._width * this._height; }
};
```

**Symbol Type**

**Iterators**: iterable protocol

**Generators**: [Fuctions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*), iterator, matching, control-flow, method.
```javascript
let fibonacci = function* (numbers) { // function*
    let pre = 0, cur = 1;
    while (numbers-- > 0) {
        [ pre, cur ] = [ cur, pre + cur ];
        yield cur; // yield
    }
};
for (let n of fibonacci(1000))
    console.log(n);
let numbers = [ ...fibonacci(1000) ];
let [ n1, n2, n3, ...others ] = fibonacci(1000);
```

**Map/Set & WeakMap/WeakSet**

**Typed Arrays**: [[1]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray), [[2]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects)

**New Built-In Methods**:
- object: assign
```javascript
var dest = { quux: 0 };
var src1 = { foo: 1, bar: 2 };
var src2 = { foo: 3, baz: 4 };
Object.assign(dest, src1, src2);
dest.quux === 0;
dest.foo  === 3;
dest.bar  === 2;
dest.baz  === 4;
```

- array: find
```javascript
[ 1, 3, 4, 2 ].find(x => x > 3); // 4
[ 1, 3, 4, 2 ].findIndex(x => x > 3); // 2
[ 1, 3, 4, 2 ].filter(function (x) { return x > 3; })[0]; // 4
```

- string: repeat, startsWith, endsWith, includes
```javascript
" ".repeat(4 * depth);
"foo".repeat(3);

"hello".startsWith("ello", 1); // true
"hello".endsWith("hell", 4);   // true
"hello".includes("ell");       // true
"hello".includes("ell", 1);    // true
"hello".includes("ell", 2);    // false
```

- number: isNaN, isFinite, isSafeInteger, Math.trunc, Math.sign
```javascript
Number.isNaN(42)  // false
Number.isNaN(NaN) // true

Number.isFinite(Infinity)  // false
Number.isFinite(-Infinity) // false
Number.isFinite(NaN)       // false
Number.isFinite(123)       // true

Number.isSafeInteger(42) === true;
Number.isSafeInteger(9007199254740992) === false;

0.1 + 0.2 === 0.3; // false
Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON); // true
Math.trunc(42.7) // 42
Math.trunc( 0.1) // 0
Math.trunc(-0.1) // -0
Math.sign(7)     // 1
Math.sign(0)     // 0
Math.sign(-0)    // -0
Math.sign(-7)    // -1
Math.sign(NaN)   // NaN
```

**Promises**: Promise Combination
```javascript
function fetchAsync (url, timeout, onData, onError) {
    …
}
let fetchPromised = (url, timeout) => {
    return new Promise((resolve, reject) => {
        fetchAsync(url, timeout, resolve, reject);
    });
}
Promise.all([
    fetchPromised("http://backend/foo.txt", 500),
    fetchPromised("http://backend/bar.txt", 500),
    fetchPromised("http://backend/baz.txt", 500)
]).then((data) => {
    let [ foo, bar, baz ] = data;
    console.log(`success: foo=${foo} bar=${bar} baz=${baz}`);
}, (err) => {
    console.log(`error: ${err}`);
});
```









