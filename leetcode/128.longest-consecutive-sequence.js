/*
 * @lc app=leetcode id=128 lang=javascript
 *
 * [128] Longest Consecutive Sequence
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {

    // ? √ Accepted 2019/08/27
    // √ 68/68 cases passed (80 ms)
    // √ Your runtime beats 34.55 % of javascript submissions
    // √ Your memory usage beats 100 % of javascript submissions (36.3 MB)

    if (nums.length === 0) return 0;

    nums.sort((a, b) => a - b);
    nums = nums.slice(0).filter((item, index) => index === 0 ? true : item !== nums[index - 1]);
    // console.log(nums);
    if (nums.length === 1) return 1;
    
    let result = 0;
    let maxLength = 0;
    nums.forEach((item, index) => {
        if (index === 0) null;
        else {
            if (item - nums[index - 1] === 1) {
                maxLength += 1;
            } else {
                maxLength = 0;
            }
            result = maxLength > result ? maxLength : result;
        }
    });
    return result + 1;
};

