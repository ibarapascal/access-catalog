/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    

// One shot done without relevant knowledge, well done!
// ? √ Accepted 2019/08/16
//   √ 47/47 cases passed (64 ms)
//   √ Your runtime beats 74.64 % of javascript submissions
//   √ Your memory usage beats 41.94 % of javascript submissions (37.6 MB)

    function refresh(r, c) {
        grid[r][c] = 0;
        if (r > 0 && grid[r - 1][c] === '1') refresh(r - 1, c);
        if (r < grid.length - 1 && grid[r + 1][c] === '1') refresh(r + 1, c);
        if (c > 0 && grid[r][c - 1] === '1') refresh(r, c - 1);
        if (c < grid[0].length - 1 && grid[r][c + 1] === '1') refresh(r, c + 1);
    }
    
    var count = 0;
    grid.forEach((row, rowIndex) => {
        row.forEach(((item, colIndex)  => {
            if (item === '1') {
                refresh(rowIndex, colIndex);
                count += 1;
            }
        }))
    });
    return count;
};

