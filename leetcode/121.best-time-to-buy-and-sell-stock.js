/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

// ? √ Accepted 2019/08/27
//   √ 200/200 cases passed (60 ms)
//   √ Your runtime beats 68.23 % of javascript submissions
//   √ Your memory usage beats 88.89 % of javascript submissions (35.3 MB)

    if (!prices || prices.length === 0 || prices.length === 1) return 0;
    let maxDelta = 0;
    let min = prices[0];
    prices.forEach((item, index) => {
        min = item < min ? item : min;
        if (index === 0) null;
        else {
            maxDelta = item - min > maxDelta ? item - min : maxDelta;
        }
    })
    return maxDelta;
};

