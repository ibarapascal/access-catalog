/*
 * @lc app=leetcode id=231 lang=javascript
 *
 * [231] Power of Two
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {

  // ? √ Accepted 2019/08/17
    // √ 1108/1108 cases passed (84 ms)
    // √ Your runtime beats 17.62 % of javascript submissions
    // √ Your memory usage beats 15.38 % of javascript submissions (35.8 MB)

    if (n === 0) return false;
    if (n === 1) return true;
    if ((parseInt(n.toString().slice(-1)) & 1) == 1) return false;
    else return isPowerOfTwo(n/2);
};

