/*
 * @lc app=leetcode id=154 lang=javascript
 *
 * [154] Find Minimum in Rotated Sorted Array II
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {

    // ? √ Accepted 2019/08/27  emmmmmmmmm
    // √ 192/192 cases passed (72 ms)
    // √ Your runtime beats 14.87 % of javascript submissions
    // √ Your memory usage beats 9.09 % of javascript submissions (36 MB)

    nums.sort((a, b) => a - b);
    return nums[0];
};

