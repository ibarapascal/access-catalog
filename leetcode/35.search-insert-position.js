/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {

// ? √ Accepted 2019/08/26 
//   √ 62/62 cases passed (56 ms)
//   √ Your runtime beats 55.96 % of javascript submissions
//   √ Your memory usage beats 31.25 % of javascript submissions (34.7 MB)

    let result = 0;
    nums.forEach((item, index) => {
        if (index === 0 && item > target) result = 0;
        if (item === target || item > target && target > nums[index - 1]) result = index;
        if (index === nums.length - 1 && item < target) result = nums.length;
    })
    return result;
};

