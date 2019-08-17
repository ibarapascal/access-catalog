## Using extention in vscode : LeetCode


### &#10008; [4] Median of Two Sorted Arrays

Sort run-time-complexity [[1]](https://www.quora.com/Which-sorting-algorithm-has-best-asymptotic-run-time-complexity)

number | 0, number & 1, [[1]](https://www.w3schools.com/JSREF/jsref_operators.asp)

```javascript
// check
console.log(- 1.1 | 0);
console.log(0 | 0);
console.log(5 | 0);
console.log(5.99 | 0);
// output
-1
0
5
5

// check
console.log(- 1.1 & 1);
console.log(0 & 1);
console.log(2.3 & 1);
console.log(5.6 & 1);
// output
1
0
0
1
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

>√ Accepted 2019/08/15  
>  √ 315/315 cases passed (160 ms)  
>  √ Your runtime beats 6.11 % of javascript submissions  
>  √ Your memory usage beats 7.14 % of javascript submissions (45.2 MB)


Attention!

```javascript
+= // YES
=+ // NO
```

```javascript
reverse() // Do change the original array
```

### &#10008; [44] Wildcard Matching

### &#10004; [50] Pow(x, n)

>√ Accepted 2019/08/15  
>  √ 304/304 cases passed (64 ms)  
>  √ Your runtime beats 37.08 % of javascript submissions  
>  √ Your memory usage beats 47.06 % of javascript submissions (33.9 MB)


### &#10008; [54] Spiral Matrix

### &#10004; [56] Merge Intervals

>√ Accepted 2019/08/16  
>  √ 169/169 cases passed (92 ms)  
>  √ Your runtime beats 19.36 % of javascript submissions  
>  √ Your memory usage beats 7.69 % of javascript submissions (40.8 MB)

Attention!

```javascript
// OK
function theLarger(A, B) {
    const unit = [A[0], A[1], B[0], B[1]];
    return [Math.min(...unit), Math.max(...unit)];
}
// NG
function theLarger(A, B) {
    const unit = (A[0], A[1], B[0], B[1]);
    return [Math.min(unit), Math.max(unit)];
}
```

### &#10004; [57] Insert Interval

>√ Accepted 2019/08/16  
>  √ 154/154 cases passed (80 ms)  
>  √ Your runtime beats 29.72 % of javascript submissions  
>  √ Your memory usage beats 12.5 % of javascript submissions (38.9 MB)

```javascript
const intervals = [1,2,3,4];
console.log(intervals.slice(0).splice(0, 1)[0]); // 1
console.log(intervals[0]);                       // 1
console.log(intervals.splice(0, 1)[0]);          // 1
console.log(intervals[0]);                       // 2
```

### &#10004; [66] Plus One

>√ Accepted 2019/08/16  
>  √ 109/109 cases passed (56 ms)  
>  √ Your runtime beats 60.51 % of javascript submissions  
>  √ Your memory usage beats 87.23 % of javascript submissions (33.8 MB)

### &#10008; [128] Longest Consecutive Sequence

array | union-find

Your algorithm should run in O(n) complexity.

### &#10008; [133] Clone Graph

depth-first-search | breadth-first-search | graph

### &#9083; [139] Word Break

>√ Accepted 2019/08/16  
>  √ 36/36 cases passed (44 ms)  
>  √ Your runtime beats 99.78 % of javascript submissions  
>  √ Your memory usage beats 100 % of javascript submissions (33.8 MB)

### &#9083; [140] Word Break II

Tree | dynamic-programming | backtracking

### &#10008; [146] LRU Cache

design | hashTable

### &#10004; [162] Find Peak Element

>√ Accepted 2019/08/16  
>  √ 59/59 cases passed (56 ms)  
>  √ Your runtime beats 52.69 % of javascript submissions  
>  √ Your memory usage beats 12.5 % of javascript submissions (34.8 MB)  

### &#9083; [166] Fraction to Recurring Decimal

hash-table | math

### &#10008; [173] Binary Search Tree Iterator

stack | tree | design

### &#10008; [200] Number of Islands

depth-first-search | breadth-first-search | union-find

### &#10004; [200] Number of Islands

>√ Accepted 2019/08/16 Nice one  
>  √ 47/47 cases passed (64 ms)  
>  √ Your runtime beats 74.64 % of javascript submissions  
>  √ Your memory usage beats 41.94 % of javascript submissions (37.6 MB)  

Recursive thought with deep-first-search

### &#9083; [208] Implement Trie (Prefix Tree)

prototype | design | trie


### &#10004; [212] Word Search II

>√ Accepted 2019/08/16  
>  √ 36/36 cases passed (5704 ms)  
>  √ Your runtime beats 5.17 % of javascript submissions  
>  √ Your memory usage beats 25 % of javascript submissions (51.4 MB)  

```javascript
// check
let a = [1,1,1];
let b = a.splice(a.length, 0, 11111);
console.log(b, a);
let c = a.concat(111111);
console.log(c, a);
let d = a.push(111111);
console.log(d, a);
// output
// Array(0) []
// Array(4) [1, 1, 1, 11111]
// Array(5) [1, 1, 1, 11111, 111111]
// Array(4) [1, 1, 1, 11111]
// 5
// Array(5) [1, 1, 1, 11111, 111111]
```

Attention! List **CAN NOT** direct compare.  
Use deep copy or compare by bit.   


### &#9083; [214] Shortest Palindrome

> √ Accepted 2019/08/17  
>  √ 120/120 cases passed (104 ms)  
>  √ Your runtime beats 54.33 % of javascript submissions  
>  √ Your memory usage beats 100 % of javascript submissions (41.2 MB)  



