/*
 * @lc app=leetcode id=45 lang=javascript
 *
 * [45] Jump Game II
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {

// ? √ Accepted 2019/08/26
//   √ 92/92 cases passed (68 ms)
//   √ Your runtime beats 38.16 % of javascript submissions
//   √ Your memory usage beats 16.67 % of javascript submissions (38.2 MB)

    function myJump(startIndex) {
        let indexNow = 0;
        let indexJump = 0;
        nums.slice(startIndex, startIndex + nums[startIndex] + 1).forEach((item, index) => {
            if (index + item > indexNow) {
                indexNow = index + item;
                indexJump = index + startIndex;
            }
        })
        return indexJump;
    }
    let indexList = [0];
    let indexItem = 0;
    if (nums && nums.length === 1) return 0;
    while (nums[indexItem] + indexItem < nums.length - 1) {
        indexItem = myJump(indexItem);
        indexList.push(indexItem);
    }
    return indexList.length;

};

