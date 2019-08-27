/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    // ? √ Accepted 2019/08/27
    // √ 18/18 cases passed (3724 ms)
    // √ Your runtime beats 5.07 % of javascript submissions
    // √ Your memory usage beats 88.24 % of javascript submissions (38.8 MB)
    
    return nums.some((item, index) => 
        nums.some((v, i) => v === item && i !== index)
    )
};

