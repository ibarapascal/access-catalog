/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

// ? √ Accepted 2019/08/26
//   √ 196/196 cases passed (52 ms)
//   √ Your runtime beats 84.42 % of javascript submissions
//   √ Your memory usage beats 80.77 % of javascript submissions (33.8 MB)

    return nums.some(item => item === target) ? nums.indexOf(target) : -1;
};

