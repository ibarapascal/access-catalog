/*
 * @lc app=leetcode id=153 lang=javascript
 *
 * [153] Find Minimum in Rotated Sorted Array
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {

    // ? √ Accepted 2019/08/27 emmmmm
    // √ 146/146 cases passed (68 ms)
    // √ Your runtime beats 14.48 % of javascript submissions
    // √ Your memory usage beats 18.75 % of javascript submissions (35.4 MB)

    nums.sort((a, b) => a - b);
    return nums[0];
};

