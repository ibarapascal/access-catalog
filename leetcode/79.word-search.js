/*
 * @lc app=leetcode id=79 lang=javascript
 *
 * [79] Word Search
 */
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    

    // ? √ Accepted 2019/08/27
    // √ 87/87 cases passed (2632 ms)
    // √ Your runtime beats 5 % of javascript submissions
    // √ Your memory usage beats 38.46 % of javascript submissions (42.9 MB)

    const rilen = board ? board.length - 1 : 0;
    const cilen = board && board[0] ? board[0].length - 1 : 0;
    let rout = [];

    function checkAround(ri, ci, str) {
        if (!str || str.length === 0) return true;
        else {
            let resultList = [];
            rout.push([ri, ci]);
            // console.log([ri, ci], str, rout[0], rout[1], rout[2], '-----------');
            if (ri + 1 <= rilen && board[ri + 1][ci] === str[0] && !rout.some(item => JSON.stringify(item) === JSON.stringify([ri + 1, ci]))) {
                checkAround(ri + 1, ci, str.slice(1)) ? resultList.push(1) : null;
            }
            if (ri - 1 >= 0 && board[ri - 1][ci] === str[0] && !rout.some(item => JSON.stringify(item) === JSON.stringify([ri - 1, ci]))) {
                checkAround(ri - 1, ci, str.slice(1)) ? resultList.push(1) : null;
            }
            if (ci + 1 <= cilen && board[ri][ci + 1] === str[0] && !rout.some(item => JSON.stringify(item) === JSON.stringify([ri, ci + 1]))) {
                checkAround(ri, ci + 1, str.slice(1)) ? resultList.push(1) : null;
            }
            if (ci - 1 >= 0 && board[ri][ci - 1] === str[0] && !rout.some(item => JSON.stringify(item) === JSON.stringify([ri, ci - 1]))) {
                checkAround(ri, ci - 1, str.slice(1)) ? resultList.push(1) : null;
            }
            if (resultList.length > 0) {
                return true;
            } else {
                rout.pop();
            };
        }
    }

    const startWord = word[0];
    let startList = []
    if (!board || board.length === 0 || board[0].length === 0) return false;
    board.forEach((row, rindex) => {
        row.forEach((col, cindex) => {
            if (board[rindex][cindex] === startWord) {
                startList.push([rindex, cindex]);
            }
        })
    })
    if (startList.length === 0) return false;

    let result = [];
    startList.forEach(position => {
        let checkResult = checkAround(position[0], position[1], word.slice(1));
        checkResult ? result.push(1) : null;
    })
    return result.length > 0;
};

