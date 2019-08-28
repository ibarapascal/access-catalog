/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

    // ? √ Accepted 2019/08/28
    // √ 21/21 cases passed (52 ms)
    // √ Your runtime beats 98.64 % of javascript submissions
    // √ Your memory usage beats 17.02 % of javascript submissions (36.3 MB)

    const len = nums.length;
    let i = len - 1;
    while(i >= 0) {
        i -= 1;
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
        }
    }
    return nums;
};

