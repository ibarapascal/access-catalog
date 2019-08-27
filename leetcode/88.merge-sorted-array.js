/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

    // ! Error: dont know why. 2019/08/27

    // Input data:
    // [1,2,3,0,0,0]
    // 3
    // [2,5,6]
    // 3
    
    // Actual
    //   √ runtime: 64 ms
    //   × answer: [1,2,3,0,0,0]
    //   √ stdout: ''
    
    // Expected
    //   √ runtime: 4 ms
    //   √ answer: [1,2,2,3,5,6]
    //   √ stdout: ''

    nums1 = nums1.slice(0, m);
    nums1 = nums1.concat(nums2);
    nums1.sort();
};

