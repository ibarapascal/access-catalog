/*
 * @lc app=leetcode id=581 lang=javascript
 *
 * [581] Shortest Unsorted Continuous Subarray
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    
    // ! Error: 2019/08/28
    // × Wrong Answer
    // × 119/307 cases passed (N/A)
    // × testcase: '[1,3,2,2,2]'
    // × answer: 2
    // × expected_answer: 4
    // × stdout:

    // ! Error: 2019/08/28
    // × Wrong Answer
    // × 122/307 cases passed (N/A)
    // × testcase: '[1,2,4,5,3]'
    // × answer: 2
    // × expected_answer: 3
    // × stdout:

    // const len = nums.length;
    // let bordA = 0;
    // let bordB = 0;
    // let i = 0;
    // while (i < len - 1) {
    //     if (nums[i] - nums[i + 1] > 0) {
    //         // bordA = i;
    //         bordA = nums.slice(0, i).filter(x => x < nums[i]).length;
    //         break;
    //     }
    //     i += 1;
    // }
    // let j = len - 1;
    // while (j > 0) {
    //     if (nums[j - 1] - nums[j] > 0) {
    //         // bordB = j;
    //         bordB = len - 1 - nums.slice(j).filter(x => x > nums[j]).length;
    //         break;
    //     }
    //     j -= 1;
    // }
    // return bordA === 0 && bordB === 0 ? 0 : bordB - bordA + 1;



    // ? √ Accepted 2019/08/28
    // √ 307/307 cases passed (108 ms)
    // √ Your runtime beats 33.98 % of javascript submissions
    // √ Your memory usage beats 12.5 % of javascript submissions (38.6 MB)

    let numsSort = nums.slice(0);
    numsSort.sort((a, b) => a - b);
    let rA = 0;
    let rB = 0;
    let i = 0;
    const len = numsSort.length;
    while(i < len) {
        if (numsSort[i] !== nums[i]) {
            rA = i;
            break;
        }
        i += 1;
    }
    let j = len - 1;
    while (j >= 0) {
        if (numsSort[j] !== nums[j]) {
            rB = j;
            break;
        }
        j -= 1;
    } 
    return rB === 0 && rA === 0 ? 0 : rB - rA + 1;


};

