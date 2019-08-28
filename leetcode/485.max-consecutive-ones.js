/*
 * @lc app=leetcode id=485 lang=javascript
 *
 * [485] Max Consecutive Ones
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {

    // ? √ Accepted 2019/08/28
    // √ 41/41 cases passed (68 ms)
    // √ Your runtime beats 54.06 % of javascript submissions
    // √ Your memory usage beats 100 % of javascript submissions (36.8 MB)

    if (!nums || nums.length === 0) return 0;
    const len = nums.length;
    let sum = 0;
    let result = 0;
    nums.forEach((item, index) => {
        if (item === 1) {
            sum += 1;
        }
        if (item !== 1 || index === len - 1) {
            result = sum > result ? sum : result;
            sum = 0;
        }
    });
    return result;
};

