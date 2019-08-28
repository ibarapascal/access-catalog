/*
 * @lc app=leetcode id=605 lang=javascript
 *
 * [605] Can Place Flowers
 */
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {

    // ? √ Accepted 2019/08/28
    // √ 123/123 cases passed (92 ms)
    // √ Your runtime beats 7.97 % of javascript submissions
    // √ Your memory usage beats 60 % of javascript submissions (36.9 MB)

    flowerbed.unshift(0);
    flowerbed.push(0);
    let maxLen = 0;
    let tempLen = 0;
    const len = flowerbed.length;
    flowerbed.forEach((item, index) => {
        if (item === 0) {
            tempLen += 1;
        }
        if (item !== 0 || index === len - 1) {
            maxLen += (tempLen - 1) / 2 | 0;
            tempLen = 0;
        }
    });
    return maxLen >= n;
};

