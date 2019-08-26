/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {

    // ? √ Accepted 2019/08/26 
    // √ 88/88 cases passed (60 ms)
    // √ Your runtime beats 42.51 % of javascript submissions
    // √ Your memory usage beats 80 % of javascript submissions (34.9 MB)

    const ri = nums.indexOf(target);
    const li = nums.length - 1 - nums.reverse().indexOf(target);
    return ri === -1 ? [-1, -1] : [ri, li];
};

