/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {

// ? √ Accepted 2019/08/15
//   √ 315/315 cases passed (160 ms) 
//   √ Your runtime beats 6.11 % of javascript submissions 
//   √ Your memory usage beats 7.14 % of javascript submissions (45.2 MB)

    var maxHeight= Math.max(...height);
    var maxIndexA = height.indexOf(maxHeight);
    var maxIndexB = height.length - 1 - JSON.parse(JSON.stringify(height)).reverse().indexOf(maxHeight);
    var checkHeight = 0;
    var result = 0;
    var checkHeightB = 0;
    height.forEach(function(item, index) {
        if (index < maxIndexA) {
            if (item > checkHeight) {
                checkHeight = item;
            } else {
                result += checkHeight - item;
            }
        } else if (maxIndexA <= index && index <= maxIndexB) {
            checkHeight = maxHeight;
            result += checkHeight - item;
        } else if (index > maxIndexB) {
            if (height[height.length - (index - maxIndexB)] > checkHeightB) {
                checkHeightB = height[height.length - (index - maxIndexB)];
            } else {
                result += checkHeightB - height[height.length - (index - maxIndexB)];
            }
        }
        console.log(result);
    });
    return result;
};

