/*
 * @lc app=leetcode id=414 lang=javascript
 *
 * [414] Third Maximum Number
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {


    // ? √ Accepted 2019/08/28
    // √ 26/26 cases passed (56 ms)
    // √ Your runtime beats 85.8 % of javascript submissions
    // √ Your memory usage beats 100 % of javascript submissions (34.9 MB)

    let maxA = -Infinity;
    let maxB = -Infinity;
    let maxC = -Infinity;
    nums.forEach(item => {
        if (item >= maxA) {
            if (item !== maxA) {
                maxC = maxB;
                maxB = maxA;
                maxA = item;
            }
        } else if (item >= maxB) {
            if (item !== maxB) {
                maxC = maxB;
                maxB = item;
            }
        } else if (item > maxC) {
            maxC = item;
        }
    })
    return maxC === -Infinity ? maxA : maxC;
};

