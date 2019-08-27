/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    // ? √ Accepted 2019/08/27
    // √ 201/201 cases passed (60 ms)
    // √ Your runtime beats 59.35 % of javascript submissions
    // √ Your memory usage beats 85.71 % of javascript submissions (35.3 MB)

    if (!prices || prices.length === 0 || prices.length === 1) return 0;
    let result = 0;
    prices.forEach((item, index) => {
        if (index === 0) null;
        else {
            if (item > prices[index - 1]) {
                result += item - prices[index - 1];
            }
        }
    })
    return result;
};

