/*
 * @lc app=leetcode id=665 lang=javascript
 *
 * [665] Non-decreasing Array
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {

    // ! Error!
    // × Wrong Answer
    // × 311/325 cases passed (N/A)
    // × testcase: '[3,4,2,3]'
    // × answer: true
    // × expected_answer: false
    // × stdout:

    // let result = 0;
    // nums.forEach((item, index) => {
    //     if (index !== 0) {
    //         if (nums[index - 1] > item) {
    //             result += 1;
    //         }
    //     }
    // })
    // return result <= 1;



    // ? √ Accepted 2019/08/30
    // √ 325/325 cases passed (56 ms)
    // √ Your runtime beats 96.83 % of javascript submissions
    // √ Your memory usage beats 50 % of javascript submissions (39.6 MB)  
    
    let result = 0;
    nums.unshift(-Infinity);
    nums.push(Infinity);
    const len = nums.length;
    nums.forEach((item, index) => {
        if (index !== 0 && nums[index - 1] > item) {
            if (index !== len - 1 && nums[index - 2] > item && nums[index - 1] > nums[index + 1]) {
                result = Infinity;
            }
            result += 1;     
        }
    })
    return result <= 1;


    // ? √ Accepted
    // √ 325/325 cases passed (68 ms)
    // √ Your runtime beats 59.14 % of javascript submissions
    // √ Your memory usage beats 50 % of javascript submissions (37.5 MB)

    // nums.unshift(-Infinity);
    // nums.push(Infinity);
    // const len = nums.length;
    // let result = 0;
    // let i = 1;
    // while (i < len - 1) {
    //     if (nums[i - 1] > nums[i]) {
    //         if (nums[i - 2] > nums[i] && nums[i - 1] > nums[i + 1]) {
    //             return false;
    //         }
    //         result += 1;     
    //     }
    //     i += 1;
    // }
    // return result <= 1;


    // ? √ Accepted
    // √ 325/325 cases passed (68 ms)
    // √ Your runtime beats 59.14 % of javascript submissions
    // √ Your memory usage beats 50 % of javascript submissions (38 MB)

    // nums.unshift(-Infinity);
    // nums.push(Infinity);
    // const len = nums.length;
    // let result = 0;
    // let i = 1;
    // while (i < len - 1) {
    //     const A = nums[i - 2];
    //     const B = nums[i - 1];
    //     const C = nums[i];
    //     const D = nums[i + 1];
    //     if (B > C) {
    //         if (A > C && B > D) {
    //             return false;
    //         }
    //         result += 1;     
    //     }
    //     if (result > 1) return false;
    //     i += 1;
    // }
    // return true;

};

