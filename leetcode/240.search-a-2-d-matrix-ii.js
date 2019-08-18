/*
 * @lc app=leetcode id=240 lang=javascript
 *
 * [240] Search a 2D Matrix II
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {

    // ! Error Iteration in normal way is too complex
    // × Time Limit Exceeded
    // × 119/129 cases passed (N/A)
    // × testcase: '[[48,65,70,113,133,163,170,216,298,389],[89,169,215,222,250,348,379,426,469,554],[178,202,253,294,367,392,428,434,499,651],[257,276,284,332,380,470,516,561,657,698],[275,331,391,432,500,595,602,673,758,783],[357,365,412,450,556,642,690,752,801,887],[359,451,534,609,654,662,693,766,803,964],[390,484,614,669,684,711,767,804,857,1055],[400,515,683,732,812,834,880,930,1012,1130],[480,538,695,751,864,939,966,1027,1089,1224]]\n804'
    // × answer: 
    // × expected_answer: 
    // × stdout:

    // if (matrix.length === 0 || matrix[0].length === 0) return false;
    // const rl = matrix.length - 1;
    // const cl = matrix[0].length - 1;
    // function checkSurroundItem(position) {
    //     const ri = position[0];
    //     const ci = position[1];
    //     if (matrix[ri][ci] === target) {
    //         return true;
    //     } else {
    //         let relA, relB = false;
    //         if (ri + 1 <= rl && matrix[ri + 1][ci] <= target) relA = checkSurroundItem([ri + 1, ci]);
    //         if (ci + 1 <= cl && matrix[ri][ci + 1] <= target) relB = checkSurroundItem([ri, ci + 1]);
    //         return relA || relB;
    //     }
    // }
    // return checkSurroundItem([0, 0]);


    // ! Not this way
    // function checkMatrix(matrix) {
    //     const rl = matrix.length;
    //     const cl = matrix[0].length;
    //     const rsi = rl & 1 === 1 ? (rl + 1) / 2 : rl / 2;
    //     const csi = cl & 1 === 1 ? (cl + 1) / 2 : cl / 2;
    //     if (matrix[rsi][csi] === target) return true;
    //     else if (matrix[rsi][csi] > target) {
    //     } else {
    //     }
    // }
    // if (matrix.length === 0 || matrix[0].length === 0) return false;
    // return checkMatrix(matrix);


  // ! Well neither this way though
  // ? √ Accepted 2019/08/18  
    // √ 129/129 cases passed (788 ms)
    // √ Your runtime beats 8.61 % of javascript submissions
    // √ Your memory usage beats 11.11 % of javascript submissions (40 MB)

    const rl = matrix ? matrix.length : 0;
    const cl = matrix[0] ? matrix[0].length : 0;
    if (!rl || !cl) return false;
    if (rl < 2 || cl < 2 || rl*cl < 10) {
        return matrix.some(items => items.some(item => item === target));
    } else {
        return matrix.some(items => items.some(item => item === target));
    }

};

