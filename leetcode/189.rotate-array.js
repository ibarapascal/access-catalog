/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {

    // ? √ Accepted 2019/08/27
    // √ 34/34 cases passed (104 ms)
    // √ Your runtime beats 16.32 % of javascript submissions
    // √ Your memory usage beats 5.26 % of javascript submissions (36.4 MB)

    function rotateOnce() {
        nums.splice(0, 0, nums[nums.length - 1]);
        nums.pop();
    }
    let i = 0;
    while(i < k) {
        rotateOnce();
        i ++;
    }
    return nums;
};

