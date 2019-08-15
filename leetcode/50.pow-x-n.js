/*
 * @lc app=leetcode id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {

// ? √ Accepted 2019/08/15
//   √ 304/304 cases passed (64 ms) 
//   √ Your runtime beats 37.08 % of javascript submissions 
//   √ Your memory usage beats 47.06 % of javascript submissions (33.9 MB)

    var x = x.toFixed(5);
    var result = 0;
    result = Math.pow(x, n);
    return result.toFixed(5);

};

