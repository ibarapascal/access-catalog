/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

// ? √ Accepted 2019/08/21
//   √ 29/29 cases passed (360 ms)
//   √ Your runtime beats 5.1 % of javascript submissions
//   √ Your memory usage beats 16.12 % of javascript submissions (35.8 MB)

    let result = [];
    nums.forEach((item, index) => {
        nums.forEach((x, i) => {
            if (x === target - item && i !== index) {
                result = [index, i];
            }
        })
    })
    return result.sort((a, b) => a - b);

    let result = [];
    nums.forEach((item, index) => {
        const y = target - item;
        if (nums.some((x, i) => x === y && i !== index)) {
            result.length === 0 ? result = [index, item === y
                ? nums.indexOf(y, index + 1)
                : nums.indexOf(y)]
            : null;
        }
    })
    return result.sort((a, b) => a - b);
};

