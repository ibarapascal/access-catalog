/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

// ? √ Accepted 2019/08/26
//   √ 50/50 cases passed (3176 ms)
//   √ Your runtime beats 5.07 % of javascript submissions
//   √ Your memory usage beats 6.06 % of javascript submissions (68.2 MB)

    if (!height || height.length === 0 || height.length === 1) return 0;

    const maxHeight = Math.max(...height);
    const maxHeightLeftIndex = height.indexOf(maxHeight);
    const maxHeightRightIndex = height.filter(x => x === maxHeight).length > 1
        ? height.indexOf(maxHeight, maxHeightLeftIndex + 1)
        : height.indexOf(maxHeight);
    let formatList = []
    let fromStart = 0;
    let fromEnd = 0;
    height.forEach((item, index) => {
        if (item > fromStart && index <= maxHeightLeftIndex) {
            formatList.push([item, index]);
            fromStart = item;
        }
    });
    height.reverse().forEach((item, index) => {
        if (item > fromEnd && index <= height.length - 1 - maxHeightRightIndex) {
            formatList.push([item, height.length - 1 - index]);
            fromEnd = item;
        }
    })
    formatList.sort((a, b) => a[1] - b[1]);

    let result = 0;
    formatList.forEach(item => {
        const calList = formatList.filter(value => value[0] >= item[0]);
        const indexDiff = Math.abs(calList[0][1] - calList[calList.length - 1][1]);
        result = result >= indexDiff * item[0] ? result : indexDiff * item[0];
    })
    return result;
};

