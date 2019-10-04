/*
 * @lc app=leetcode id=628 lang=javascript
 *
 * [628] Maximum Product of Three Numbers
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {

    // ? √ Accepted 2019/08/28
    // √ 83/83 cases passed (68 ms)
    // √ Your runtime beats 85.03 % of javascript submissions
    // √ Your memory usage beats 100 % of javascript submissions (37.3 MB)

    const len = nums.length;
    if (len === 3) return nums[0] * nums[1] * nums[2];

    const minA = Math.min(...nums);

    const tempA = nums.slice(0);
    tempA.splice(nums.indexOf(minA), 1);
    const minB = Math.min(...tempA);

    const maxA = Math.max(...nums);

    const tempB = nums.slice(0);
    tempB.splice(nums.indexOf(maxA), 1);
    const maxB = Math.max(...tempB);

    const tempC = tempB.slice(0);
    tempC.splice(tempB.indexOf(maxB), 1);
    const maxC = Math.max(...tempC);

    return Math.max(minA * minB * maxA, maxA * maxB * maxC);
};

