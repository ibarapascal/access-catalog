/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

    // ? √ Accepted 2019/08/27
    // √ 44/44 cases passed (104 ms)
    // √ Your runtime beats 5.56 % of javascript submissions
    // √ Your memory usage beats 7.14 % of javascript submissions (40 MB)

    if (!nums || nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];

    nums.sort((a, b) => a - b);
    const len = nums.length;
    let result = 0;
    let calList = nums.slice(0);
    calList = calList.filter((v, i) => i !== 0 ? v !== calList[i - 1] : true);
    calList.forEach(item => {
        nums.filter(x => x === item).length > len / 2 ? result = item : null;
    });
    return result;
};

