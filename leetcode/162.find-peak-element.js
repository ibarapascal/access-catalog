/*
 * @lc app=leetcode id=162 lang=javascript
 *
 * [162] Find Peak Element
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {


    // √ Accepted 2019/08/16
    // √ 59/59 cases passed (56 ms)
    // √ Your runtime beats 52.69 % of javascript submissions
    // √ Your memory usage beats 12.5 % of javascript submissions (34.8 MB)

    if (nums[nums.length - 2] < nums[nums.length - 1]) {
        return nums.length - 1;
    } else {
        var chosenIndex = null;
        nums.some((item, index) => {
            if (index !== 0 && index !== nums.length - 1) {
                if (nums[index - 1] < item && item > nums[index + 1]) {
                    chosenIndex = index;
                }
            }
        })
        return chosenIndex;
    }

};

