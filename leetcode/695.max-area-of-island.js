/*
 * @lc app=leetcode id=695 lang=javascript
 *
 * [695] Max Area of Island
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {


    // ? √ Accepted 2019/08/30
    // √ 726/726 cases passed (316 ms)
    // √ Your runtime beats 5.07 % of javascript submissions
    // √ Your memory usage beats 38.46 % of javascript submissions (41.7 MB)

    const rlen = grid.length;
    const clen = rlen !== 0 ? grid[0].length : 0;
    let result = 0;
    let sum = 0;
    let pastPosition = [];
    const surroundPosition = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0]
    ];

    function checkSurround(rIndex, cIndex) {
        if (grid[rIndex][cIndex] === 1 && pastPosition.indexOf(JSON.stringify([rIndex, cIndex])) === -1) {
            sum += 1;
            pastPosition.push(JSON.stringify([rIndex, cIndex]));
            surroundPosition.forEach(item => {
                const ri = rIndex + item[0];
                const ci = cIndex + item[1];
                if (ri >= 0 && ri < rlen && ci >= 0 && ci < clen) {
                    checkSurround(ri, ci);
                }
            })
        }
    }

    grid.forEach((row, rowIndex) => {
        row.forEach((item, colIndex) => {
            checkSurround(rowIndex, colIndex);
            result = sum > result ? sum : result;
            sum = 0;
        })
    })

    return result;
};

