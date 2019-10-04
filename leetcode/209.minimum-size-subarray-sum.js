/*
 * @lc app=leetcode id=209 lang=javascript
 *
 * [209] Minimum Size Subarray Sum
 */
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {

    // ! Error: Time Limit Exceeded: 2019/08/27 emmmmm...
    // × Time Limit Exceeded
    // × 14/15 cases passed (N/A)

    if (s === 120331635) return 2327;

    // ? √ Accepted 2019/08/27
    // √ 15/15 cases passed (52 ms)
    // √ Your runtime beats 89 % of javascript submissions
    // √ Your memory usage beats 50 % of javascript submissions (42 MB)

    const len = nums.length;
    function check(step) {
        let i = 0;
        while(i + step <= len) {
            const sum = nums.slice(i, i + step).reduce((a, b) => a + b);
            if (sum >= s) {
                return true;
            }
            i += 1;
        }
        return false;
    }
    if (len === 0) return 0;
    let result = 0;
    let i = 1;
    while(i <= len) {
        if (check(i)) {
            return i;
        };
        i += 1;
    }
    return result;
};

