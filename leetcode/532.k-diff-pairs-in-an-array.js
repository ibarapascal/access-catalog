/*
 * @lc app=leetcode id=532 lang=javascript
 *
 * [532] K-diff Pairs in an Array
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {

    // ? √ Accepted 2019/08/28
    // √ 72/72 cases passed (584 ms)
    // √ Your runtime beats 13.33 % of javascript submissions
    // √ Your memory usage beats 100 % of javascript submissions (54.9 MB)    

    // where i and j are both numbers in the array and their absolute difference is k.
    if (k < 0) return 0;

    const len = nums.length;
    let resultList = [];

    nums.forEach((item, index) => {
        if (nums.slice(0, index).indexOf(item + k) !== -1) resultList.push([item, item + k]);
        if (nums.slice(0, index).indexOf(item - k) !== -1) resultList.push([item, item - k]);
    });

    resultList.forEach(item => item.sort((a, b) => a - b));
    resultList.sort((a, b) => a[0] - b[0]);
    let seen = new Set();
    resultList = resultList.filter(item => {
        const k = JSON.stringify(item);
        return seen.has(k) ? false : seen.add(k);
    });
    return resultList.length;


};

