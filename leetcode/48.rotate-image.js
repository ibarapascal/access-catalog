/*
 * @lc app=leetcode id=48 lang=javascript
 *
 * [48] Rotate Image
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {

    // ! Error ??????? 2019/08/26
    // ? Refer: https://math.stackexchange.com/questions/1676441/how-to-rotate-the-positions-of-a-matrix-by-90-degrees

    // Input data:
    // [[1,2,3],[4,5,6],[7,8,9]]
    
    // Actual
    //   √ runtime: 64 ms
    //   × answer: [[1,2,3],[4,5,6],[7,8,9]]
    //   × stdout: '[ 7, 4, 1 ] [ 8, 5, 2 ] [ 9, 6, 3 ]'
    
    // Expected
    //   √ runtime: 0 ms
    //   √ answer: [[7,4,1],[8,5,2],[9,6,3]]
    //   √ stdout: ''
    
    let resultMatrix = [[0,0,0],[0,0,0],[0,0,0]];
    let middleMatrix = [[0,0,0],[0,0,0],[0,0,0]];
    matrix.forEach((row, ri) => {
        row.forEach((col, ci) => {
            middleMatrix[ci][ri] = matrix[ri][ci];
        })
    });
    middleMatrix.forEach((row, ri) => {
        resultMatrix[ri] = row.reverse();
    });
    console.log(resultMatrix[0], resultMatrix[1], resultMatrix[2]);
    return resultMatrix;
};

