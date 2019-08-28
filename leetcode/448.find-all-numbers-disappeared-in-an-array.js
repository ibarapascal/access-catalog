/*
 * @lc app=leetcode id=448 lang=javascript
 *
 * [448] Find All Numbers Disappeared in an Array
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {

    // ? √ Accepted 2019/08/28
    // √ 34/34 cases passed (6588 ms)
    // √ Your runtime beats 15.01 % of javascript submissions
    // √ Your memory usage beats 25 % of javascript submissions (44 MB)

    const len = nums.length;
    let i = 1;
    let result = [];
    while(i <= len) {
        if (nums.indexOf(i) === -1) result.push(i);
        i += 1;
    }
    return result;
};

