/*
 * @lc app=leetcode id=667 lang=javascript
 *
 * [667] Beautiful Arrangement II
 */
/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function(n, k) {


    // ? [6, 1, 5, 2, 4, 3] ... 

    // // let nums = Array.from(Array(n).keys()); // ! No need
    // // nums.reverse();  // ! No need
    // let nums = new Array(n).fill(0);
    // nums.forEach((item, index) => {
    //     nums[index] += 1;
    //     if (index % 2 === 1) nums[index] = (index + 1) / 2;
    //     else nums[index] = n - index / 2;
    // });
    // const int = nums[k - 1];
    // let result = nums.slice(0, k);
    // let calA = new Array(n - k).fill(int);
    // if (k % 2 === 1) {
    //     calA.forEach((item, index) => {
    //         calA[index] = item - index - 1;
    //     })
    // } else {
    //     calA.forEach((item, index) => {
    //         calA[index] = item + index + 1;
    //     })
    // }
    // result.push(...calA);
    // return result;


    // ? [1, 6, 2, 5 ,3, 4] ... 

    // ? √ Accepted 2019/08/30
    // √ 68/68 cases passed (68 ms)
    // √ Your runtime beats 100 % of javascript submissions
    // √ Your memory usage beats 100 % of javascript submissions (36.5 MB)

    let nums = new Array(n).fill(0);
    nums.forEach((v, i) => {
        nums[i] = i % 2 === 1 ? n - (i - 1) / 2 : (i + 2) / 2;
    });
    let result = nums.slice(0, k);
    let restPart = new Array(n - k).fill(nums[k - 1]);
    restPart.forEach((v, i) => {
        restPart[i] =  k % 2 === 0 ? v - i - 1 : v + i + 1;
    })
    result.push(...restPart);
    return result;

};

