/*
 * @lc app=leetcode id=442 lang=javascript
 *
 * [442] Find All Duplicates in an Array
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {


    // ! Error: 2019/08/28
    // ! Could you do it without extra space and in O(n) runtime?
    // × Time Limit Exceeded
    // × 25/28 cases passed (N/A)

    // const len = nums.length;
    // let i = 1;
    // let result =[];
    // while(i <= len) {
    //     if (nums.filter(item => item === i).length === 2) {
    //         result.push(i);
    //     }
    //     i += 1;
    // }
    // return result;


    // ? √ Accepted 2019/08/28
    // √ 28/28 cases passed (3744 ms)
    // √ Your runtime beats 7.24 % of javascript submissions
    // √ Your memory usage beats 50 % of javascript submissions (45.7 MB)

    let tmp = [];
    let result = [];
    nums.forEach(item => {
        const ri = result.indexOf(item);
        const ti = tmp.indexOf(item);
        if (ri !== -1) result.splice(ri, 1);
        if (ti === -1) tmp.push(item);
        else {
            tmp.splice(ti, 1);
            result.push(item);
        }
    })
    return result;
};

