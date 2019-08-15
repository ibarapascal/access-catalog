### &#10008; [4] Median of Two Sorted Arrays

Sort run-time-complexity [[1]](https://www.quora.com/Which-sorting-algorithm-has-best-asymptotic-run-time-complexity)

number | 0, number & 1, [[1]](https://www.w3schools.com/JSREF/jsref_operators.asp)

```javascript
console.log(- 1.1 | 0); // -1
console.log(0 | 0); // 0
console.log(5 | 0); // 5
console.log(5.99 | 0); // 5

console.log(- 1.1 & 1); // 1
console.log(0 & 1); // 0
console.log(2.3 & 1); // 0
console.log(5.6 & 1); // 1
```
make input params fit condition with inner transfer

```javascript
var findMedianSortedArrays = function(nums1, nums2) {
    if(nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);
```

### &#10008; [10] Regular Expression Matching

Recursive coding

```javascript
function isMatch(s, p) {
  var lenS = s.length;
  var lenP = p.length;
  return check(0, 0);
  function check(idxS, idxP) {
      check(...);
  }
```

### &#9083; [17] Letter Combinations of a Phone Number (Understood)

lexicographical order: dictionary order

String: substr [[1]](https://www.w3schools.com/jsref/jsref_substr.asp)

```javascript
var str = "Hello world!";
var res = str.substr(1, 4);
```

### &#9083; [20] Valid Parentheses !!! (Understood)

The way to find out whether a letter belongs to a string, and return the index

```javascript
(i="({[]})".indexOf(l))>-1
```

### &#10008; [22] Generate Parentheses

### &#10008; [23] Merge k Sorted Lists

Linked list [[1]](https://codeburst.io/linked-lists-in-javascript-es6-code-part-1-6dd349c3dcc3)

### &#10008; [31] Next Permutation

### &#10004; [42] Trapping Rain Water

Attention! In javascript

```javascript
+= // YES
=+ // NO
```

```javascript
reverse() // DO change the original array
```

### &#10008; [44] Wildcard Matching

### &#10004; [50] Pow(x, n)

### &#10008; [54] Spiral Matrix

### &#10008; [56] Merge Intervals
