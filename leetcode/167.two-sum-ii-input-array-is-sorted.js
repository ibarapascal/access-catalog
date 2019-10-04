/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input array is sorted
 */
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {

    // ? √ Accepted 2019/08/27
    // √ 17/17 cases passed (204 ms)
    // √ Your runtime beats 19.71 % of javascript submissions
    // √ Your memory usage beats 8.7 % of javascript submissions (41.6 MB)

    let rA = 0; let rB = 0;
    const len = numbers.length;
    let zeroNoneFlg = false;
    if (target !== 0 && !numbers.some(item => item === target)) {
        zeroNoneFlg = true;
    }
    numbers.forEach((x, xIndex) => {
        if (zeroNoneFlg && x === 0) null;
        else {
            if (xIndex !== len - 1) {
                numbers.slice(xIndex + 1).forEach((y, yIndex) => {
                    if (rA === 0 && x + y === target) {
                        rA = xIndex + 1;
                        rB = yIndex + 1 + xIndex + 1;
                    }
                })
            }
        }

    })
    return [rA, rB];
};

