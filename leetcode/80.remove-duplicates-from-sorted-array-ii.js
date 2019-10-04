/*
 * @lc app=leetcode id=80 lang=javascript
 *
 * [80] Remove Duplicates from Sorted Array II
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    // ! Error: dont know why. 2019/08/27
    // Input data:
    // [1,1,1,2,2,3]
    
    // Actual
    //   √ runtime: 68 ms
    //   × answer: []
    //   √ stdout: ''
    
    // Expected
    //   √ runtime: 4 ms
    //   √ answer: [1,1,2,2,3]
    //   √ stdout: ''
    
    return nums.filter((item, index) => 
        index === 0 || index === 1 ? true : item !== nums[index - 2]
        );

};

