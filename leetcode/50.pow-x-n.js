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
    var x = x.toFixed(5);
    var result = 0;
    result = Math.pow(x, n);
    return result.toFixed(5);
};

