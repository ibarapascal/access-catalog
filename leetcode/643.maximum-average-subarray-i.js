/*
 * @lc app=leetcode id=643 lang=javascript
 *
 * [643] Maximum Average Subarray I
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {

    // ! Error: find the contiguous subarray! 
    // nums.sort((a, b) => b - a);
    // return nums.slice(0, k).reduce((a, b) => a + b) / k;


    // ? √ Accepted 2019/08/28
    // √ 123/123 cases passed (1772 ms)
    // √ Your runtime beats 10.43 % of javascript submissions
    // √ Your memory usage beats 100 % of javascript submissions (45.8 MB)

    const len = nums.length;
    let i = 0;
    let resultList = [];
    while (i <= len - k) {
        let j = 0;
        let sum = 0;
        while (j < k) {
            sum += nums[i + j];
            j += 1;
        }
        resultList.push(sum / k);
        i += 1;
    }
    return Math.max(...resultList);
};

