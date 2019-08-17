/*
 * @lc app=leetcode id=228 lang=javascript
 *
 * [228] Summary Ranges
 */
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {

// ? √ Accepted 2019/08/17
//   √ 28/28 cases passed (68 ms)
//   √ Your runtime beats 6.08 % of javascript submissions
//   √ Your memory usage beats 50 % of javascript submissions (33.9 MB)

    let tempList = [];
    let tempValue = [];
    nums.forEach((num, index) => {
        if (!index) {
            tempValue = [num, num];
        } else {
            if (num - tempValue[1] === 1) {
                tempValue[1] += 1;
            } else {
                tempList.push(tempValue);
                tempValue = [num, num];
            }
        }
        if (index === nums.length - 1) tempList.push(tempValue);
    })
    let result = [];
    tempList.forEach(item => {
        if (item[0] === item[1]) result.push(item[0].toString());
        else result.push(item[0].toString() + '->' + item[1].toString());
    });
    return result;
};

