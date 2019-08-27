/*
 * @lc app=leetcode id=81 lang=javascript
 *
 * [81] Search in Rotated Sorted Array II
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {

    // ? √ Accepted 2019/08/27   .....emmmm
    // √ 275/275 cases passed (56 ms)
    // √ Your runtime beats 77.07 % of javascript submissions
    // √ Your memory usage beats 100 % of javascript submissions (34.1 MB)
    
    return nums.some(item => item === target);
};

