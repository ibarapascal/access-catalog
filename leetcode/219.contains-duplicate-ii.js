/*
 * @lc app=leetcode id=219 lang=javascript
 *
 * [219] Contains Duplicate II
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {

    // ? √ Accepted 2019/08/27
    // √ 23/23 cases passed (5612 ms)
    // √ Your runtime beats 5.08 % of javascript submissions
    // √ Your memory usage beats 89.47 % of javascript submissions (38.8 MB)

    return nums.some((item, index) => 
        nums.some((v, i) => v === item && Math.abs(i - index) <= k && i !== index)
    )
};

