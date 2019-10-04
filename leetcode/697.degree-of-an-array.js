/*
 * @lc app=leetcode id=697 lang=javascript
 *
 * [697] Degree of an Array
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {

    
    // ? √ Accepted 2019/08/30
    // √ 89/89 cases passed (860 ms)
    // √ Your runtime beats 5.05 % of javascript submissions
    // √ Your memory usage beats 100 % of javascript submissions (43.3 MB)

    let calList = [];
    let maxLen = 0;
    let passedItem = [];
    nums.forEach(item => {
        if (passedItem.indexOf(item) === -1) {
            passedItem.push(item);
            const len = nums.filter(x => item === x).length;
            if (len > maxLen) {
                maxLen = len;
                calList = [item];
            } else if (len === maxLen) {
                if (!calList.some(x => x === item)) calList.push(item);
            }
        }
    });

    let result = Infinity;
    const len = nums.length;
    let startIndex = [];
    let endIndex = [];
    calList.forEach(item => {
        startIndex.push(nums.indexOf(item));
    });
    nums.reverse();
    calList.forEach(item => {
        endIndex.push(len - 1 - nums.indexOf(item));
    });

    startIndex.forEach((item, index) => {
        const deff = endIndex[index] - item + 1;
        result = deff < result ? deff : result;
    })

    return result;
};

