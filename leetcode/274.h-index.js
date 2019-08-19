/*
 * @lc app=leetcode id=274 lang=javascript
 *
 * [274] H-Index
 */
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {

  // ? √ Accepted 2019/08/19
    // √ 82/82 cases passed (48 ms)
    // √ Your runtime beats 96.88 % of javascript submissions
    // √ Your memory usage beats 100 % of javascript submissions (34.9 MB)
    const len = citations.length;
    let result = 0;
    if (!citations || len === 0) return result;
    citations.sort((a, b) => b - a);
    citations.forEach((x, i) => {
        if (x >= i + 1 && (i < len - 1 ? citations[i + 1] <= i + 1 : true)) result = i + 1 > result ? i + 1 : result;
    });
    return result;
};

