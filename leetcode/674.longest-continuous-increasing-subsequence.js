/*
 * @lc app=leetcode id=674 lang=javascript
 *
 * [674] Longest Continuous Increasing Subsequence
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {

    // ? √ Accepted 2019/08/30
    // √ 36/36 cases passed (56 ms)
    // √ Your runtime beats 69.62 % of javascript submissions
    // √ Your memory usage beats 100 % of javascript submissions (35.3 MB)

    const len = nums.length;
    if (len === 1) return 1;
    let result = 0;
    let sum = 1;
    nums.forEach((item, index) => {
        if (index !== len - 1) {
            if (nums[index + 1] > item) {
                sum += 1;
            }
            if (nums[index + 1] <= item || index === len - 2) {
                result = sum > result ? sum : result;
                sum = 1;
            }
        }
    });
    return result;
};

