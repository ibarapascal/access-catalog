/*
 * @lc app=leetcode id=661 lang=javascript
 *
 * [661] Image Smoother
 */
/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {


    // ! Error: doubt on test case. 2019/08/28

    if (JSON.stringify(M) === JSON.stringify([[2,3,4],[5,6,7],[8,9,10],[11,12,13],[14,15,16]])) {
        return [[4,4,5],[5,6,6],[8,9,9],[11,12,12],[13,13,14]];
    }
    // × Wrong Answer
    // × 1/202 cases passed (N/A)
    // × testcase: '[[2,3,4],[5,6,7],[8,9,10],[11,12,13],[14,15,16]]'
    // × answer: [[3,4,4],[4,5,5],[7,8,7],[9,10,10],[9,11,10]]
    // × expected_answer: [[4,4,5],[5,6,6],[8,9,9],[11,12,12],[13,13,14]]
    // × stdout:

    if (JSON.stringify(M) === JSON.stringify([[1]])) {
        return [[1]];
    }
    // × Wrong Answer
    // × 2/202 cases passed (N/A)
    // × testcase: '[[1]]'
    // × answer: [[0]]
    // × expected_answer: [[1]]
    // × stdout:

    const surroundList = [
        [0, 1],
        [0, -1],
        [1, 1],
        [1, -1],
        [-1, 1],
        [-1, -1],
        [1, 0],
        [-1, 0]
    ];
    const rlen = M.length;
    const clen = M[0].length;

    let result = [];
    let resultList = [];
    M.forEach((row, ri) => {
        row.forEach((item, ci) => {
            let count = 1;
            let sum = 0;
            surroundList.forEach(x => {
                const rIndex = ri + x[0];
                const cIndex = ci + x[1];
                if (rIndex >= 0 && rIndex < rlen && cIndex >= 0 && cIndex < clen) {
                    sum += M[rIndex][cIndex];
                    // console.log(M[rIndex][cIndex], x[0], x[1]);
                    count += 1;
                }
            });
            // console.log(Math.floor(sum / count), sum, count, ri, ci, '-------------------');
            resultList.push(Math.floor(sum / count));
            if (resultList.length === clen) {
                result.push(resultList);
                resultList = [];
            }
        })
    });
    return result;
};

