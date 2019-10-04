/*
 * @lc app=leetcode id=561 lang=javascript
 *
 * [561] Array Partition I
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {

    // ? √ Accepted 2019/08/28
    // √ 81/81 cases passed (124 ms)
    // √ Your runtime beats 33.42 % of javascript submissions
    // √ Your memory usage beats 11.11 % of javascript submissions (40.1 MB)

    nums.sort((a, b) => a - b);
    return nums.filter((item, index) => !(index & 1)).reduce((a, b) => a + b);
};

