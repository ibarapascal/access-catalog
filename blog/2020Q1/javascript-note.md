# javascript note

## Basic  

### To integer  

remove decimal

```js
// 1.999 => 1
const ignoreDecimal = Math.floor(1.999);
```

save decimal

```js
// 1 => 1.0000
const decimalNumber = Number(yourNumber.toFixed(n));
```

check if integer

```js
// 1.2 => false
// 1 => true
const isNumber = Number.isInteger(yourNumber);
```

### Numbers

```js
Math.abs();
Math.max(...list);
```

### Char

```js
// 'A' => 65
// 'a' => 97
const charNumber = str.charCodeAt(0);
```

## Array

### Create

init number array

```js
// [0, 1, 2, ...]
const ascendingList = [...Array(n).keys()];
// [0, 0, 0, ...]
const zeroList = new Array(n).fill(0);
```

init integer array via min and max

```js
// 20, 23 => [20, 21, 22, 23]
const list = [...Array(j - i + 1).keys()].map(x => x + i);
```

### Operate

sort

```js
// [1, 2, 3, ...]
list.sort((a, b) => b - a);
// [..., 3, 2, 1]
list.sort((a, b) => a - b);
list.reverse();
```

remove duplicated element

```js
// [3, 1, 1, 1, 2, 3] => [3, 1, 2]
const result = list.filter((x, idx, self) => idx === self.indexOf(x));
```

circle move one element in one array

```js
// [1, 2, 3, 4] => [2, 3, 4, 1]
list.push(list.shift());
// [1, 2, 3, 4] => [4, 1, 2, 3]
list.unshift(list.pop());
```

move one element between two array

```js
// [1], [2, 3, 4, 5] => [1, 2], [3, 4, 5]
listA.push(listB.shift());
// [1, 2, 3, 4], [5] => [1, 2, 3], [4, 5]
listB.unshift(listA.pop());
```

multiple expansion

```js
const n = 2;
// [1, 2, 3] => [1, 1, 2, 2, 3, 3]
const result = [...list, ...list].sort();
// [2, 1, 3] => [2, 2, 1, 1, 3, 3]
const result = new Array(list.length * n).fill(0)
  .map((x, idx) => list[Math.floor(idx / n)]);
```

### Acquire

sum

```js
// [1, 2, 3, 4, 5] => 15
const sum = list.reduce((a, b) => a + b, 0);
```

latest(first) n elements

```js
const n = 3;
// [1, 2, 3, 4, 5, 6, 7] => [5, 6, 7]
// [1] => [1]
const result = list.slice(Math.max(list.length - n, 0));
// [1, 2, 3, 4, 5, 6, 7] => [1, 2, 3]
// [1] => [1]
const result = list.slice(0, n);
```

get index of elements

```js
const v = 1;
// [1, 2, 1, 4, 1, 5, 1] => [0, 2, 4, 6]
const result = list.map((x, idx) => x === v ? idx : -1).filter(y => y !== -1);
```

### Generate

common factor / common multiple

```js
// TODO
```

<= related [link](https://stackoverflow.com/questions/31302054/how-to-find-the-least-common-multiple-of-a-range-of-numbers/37716618)

```js
// NOTE
function gcd(a, b) {
  return !b ? a : gcd(b, a % b);
}
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
```

### Set  

intersection (A && B)

```js
// [1, 2, 3], [2, 3, 4] => [2, 3]
const intersection = arr1.filter(x => arr2.includes(x));
```

symmetric difference (A || B where not A && B)

```js
// [1, 2, 3], [2, 3, 4] => [1, 4]
const symmetric = [...arr1, ...arr2].filter(x => !arr1.filter(y => arr2.includes(y)).includes(x));
```

### Transform

string / number <=> array

```js
// 'xyz' => ['x', 'y', 'z']
const strList = str.split('');
// ['x', 'y', 'z'] => 'xyz'
const str = strList.join('');
```

### Matrix

Note: magic square 3x3 with 1-9 is unique

1.Reverse

```js
// [4, 9, 2],
// [3, 5, 7],
// [8, 1, 6]
const result = matrix.map((x, ri, self) => x.map((y, ci) => self[ci][ri]));
// [4, 3, 8],
// [9, 5, 1],
// [2, 7, 6]
```

2.rotate clockwise / anticlockwise

For square matrix

```js
// [4, 9, 2],
// [3, 5, 7],
// [8, 1, 6]
const idxLen = matrix[0].length - 1;
const clockwise = matrix.map((x, ri, self) => x.map((y, ci) => self[idxLen - ci][ri]));
// [8, 3, 4]
// [1, 5, 9]
// [6, 7, 2]
const anticlockwise = matrix.map((x, ri, self) => x.map((y, ci) => self[ci][idxLen - ri]));
// [2, 7, 6]
// [9, 5, 1]
// [4, 3, 8]
```

For non-square matrix

```js
// TODO
```

## Object  

TODO
