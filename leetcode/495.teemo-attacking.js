/*
 * @lc app=leetcode id=495 lang=javascript
 *
 * [495] Teemo Attacking
 */
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {

    // ? √ Accepted 2019/08/28
    // √ 39/39 cases passed (68 ms)
    // √ Your runtime beats 39.17 % of javascript submissions
    // √ Your memory usage beats 100 % of javascript submissions (38.1 MB)

    const len = timeSeries.length;
    let result = 0;
    timeSeries.forEach((item, index) => {
        if (index !== len - 1) {
            const diff = timeSeries[index + 1] - item;
            result += diff >= duration ? duration : diff;
        } else {
            result += duration;
        }
    });
    return result;
};

