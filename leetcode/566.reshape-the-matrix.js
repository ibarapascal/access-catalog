/*
 * @lc app=leetcode id=566 lang=javascript
 *
 * [566] Reshape the Matrix
 */
/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {

    // ? √ Accepted 2019/08/28
    // √ 56/56 cases passed (68 ms)
    // √ Your runtime beats 99.43 % of javascript submissions
    // √ Your memory usage beats 40 % of javascript submissions (40.3 MB)

    const rlen = nums ? nums.length : 0;
    const clen = nums && nums[0] ? nums[0].length : 0;
    if (r * c > rlen * clen) return nums;

    let rowMatrix = [];
    let resultMatrix = [];
    nums.forEach((row, ri) => {
        row.forEach((item, ci) => {
            if (rowMatrix.length < c) rowMatrix.push(item);
            if (rowMatrix.length >= c || ri === rlen - 1 && ci === clen - 1) {
                resultMatrix.push(rowMatrix);
                rowMatrix = [];
            }
        })
    });
    return resultMatrix;
};

