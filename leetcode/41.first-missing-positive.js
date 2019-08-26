/*
 * @lc app=leetcode id=41 lang=javascript
 *
 * [41] First Missing Positive
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {

    // ? √ Accepted 2019/08/26
    // √ 165/165 cases passed (60 ms)
    // √ Your runtime beats 53.5 % of javascript submissions
    // √ Your memory usage beats 25 % of javascript submissions (35.1 MB)

    const numsSort = nums.filter(item => item > 0).sort((a, b) => a - b);
    const numsUse = numsSort.filter((item, index) => {
        return index === 0 ? true : item !== numsSort[index - 1];
    });
    if (numsUse[0] !== 1) return 1;
    let checkResult = numsUse[numsUse.length - 1] + 1;
    let result = checkResult;
    numsUse.forEach((item, index) => {
        if (item !== index + 1 && result === checkResult) {
            result = index + 1;
        }
    })
    return result;
};

