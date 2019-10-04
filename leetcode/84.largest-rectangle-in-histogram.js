/*
 * @lc app=leetcode id=84 lang=javascript
 *
 * [84] Largest Rectangle in Histogram
 */
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {

    // ? √ Accepted 2019/08/27
    // √ 96/96 cases passed (888 ms)
    // √ Your runtime beats 16.91 % of javascript submissions
    // √ Your memory usage beats 28.57 % of javascript submissions (38.1 MB)

    if (!heights || heights.length === 0) return 0;

    let heightsList = heights.slice(0);
    heightsList = heightsList.filter((v, i) => i === 0 ? true : v !== heightsList[i - 1]);
    let resultList = [];
    heightsList.forEach(v => {
        let maxLength = 0;
        let maxItem = 0;
        heights.forEach(item => {
            if (item >= v) {
                maxItem += 1;
                maxLength = maxItem > maxLength ? maxItem : maxLength; 
            } else {
                maxItem = 0;
            }
        });
        resultList.push(maxLength * v);
    })

    return Math.max(...resultList);
};

