/*
 * @lc app=leetcode id=212 lang=javascript
 *
 * [212] Word Search II
 */
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    

    // ! Error: need no repeat
    // × Wrong Answer
    // × 27/36 cases passed (N/A)
    // × testcase: '[["a","a"]]\n["aaa"]'
    // × answer: ["aaa"]
    // × expected_answer: []
    // × stdout:

    // ! Tested in Typescript

    // let board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]];
    // let words = ["oath","pea","eat","rain"];
    
    // function findWords(board: string[][], words: string[]) {
        
    //     function findIndex(board: string[][], char:string) {
    //         var resultIndexList:number[][] = [];
    //         board.forEach((row, rowIndex) => {
    //             row.forEach((item, colIndex) => {
    //                 if (item === char) {
    //                     resultIndexList.push([rowIndex, colIndex]);
    //                 }
    //             })
    //         })
    //         return resultIndexList;
    //     }
    
    //     function checkWord(board: string[][], position: number[], word: string):boolean {
    //         if (!word || word.length === 0) {return true;}
    //         else {
    //             var r = position[0];
    //             var c = position[1];
    //             var wS = word.slice(0, 1);
    //             var wE = word.slice(1);
    //             var rA = r > 0 && board[r - 1][c] === wS ? checkWord(board, [r - 1, c], wE) : false;
    //             var rB = r < board.length - 1 && board[r + 1][c] === wS ? checkWord(board, [r + 1, c], wE) : false;
    //             var rC = c > 0 && board[r][c - 1] === wS ? checkWord(board, [r, c - 1], wE) : false;
    //             var rD = c < board[0].length - 1 && board[r][c + 1] === wS ? checkWord(board, [r, c + 1], wE) : false;
    //             return rA || rB || rC || rD;
    //         }
    //     }
    
    //     function makeUniq(resultList: string[]):string[] {
    //         let seen = new Set();
    //         return resultList.filter(item => {
    //             const k = JSON.stringify(item);
    //             return seen.has(k) ? false : seen.add(k);
    //         });
    //     }
    
    //     var result:string[] = [];
    //     words.forEach(word => {
    //         var char = word.split('').slice(0, 1)[0];
    //         console.log(char);
    //         findIndex(board, char).forEach(position => {
    //             checkWord(board, position, word.slice(1)) ? result.push(word) : null;
    //         })
    //     })
    //     return makeUniq(result).sort();
    // };
    
    // console.log(findWords(board, words));


//  ?  √ Accepted 2019/08/16
//     √ 36/36 cases passed (5704 ms)
//     √ Your runtime beats 5.17 % of javascript submissions
//     √ Your memory usage beats 25 % of javascript submissions (51.4 MB)

    function findIndex(char) {
        var resultIndexList = []
        board.forEach((row, rowIndex) => {
            row.forEach((item, colIndex) => {
                if (item === char) resultIndexList.push([rowIndex, colIndex]);
            })
        })
        return resultIndexList;
    }

    function checkWord(position, word, hpList) {
        if (!word || word.length === 0) return true;
        else {
            const r = position[0];
            const c = position[1];
            const wS = word.slice(0, 1);
            const wE = word.slice(1);
            let rA, rB, rC, rD = false;
            if (r > 0 && board[r - 1][c] === wS && !hpList.some(item => item[0] === r - 1 && item[1] === c)) {
                rA = checkWord([r - 1, c], wE, hpList.concat([[r - 1 ,c]]));
            }
            if (r < board.length - 1 && board[r + 1][c] === wS && !hpList.some(item => item[0] === r + 1 && item[1] === c)) {
                rB = checkWord([r + 1, c], wE, hpList.concat([[r + 1, c]]));
            }
            if (c > 0 && board[r][c - 1] === wS && !hpList.some(item => item[0] === r && item[1] === c - 1)) {
                rC = checkWord([r, c - 1], wE, hpList.concat([[r, c - 1]]));
            }
            if (c < board[0].length - 1 && board[r][c + 1] === wS && !hpList.some(item => item[0] === r && item[1] === c + 1)) {
                rD = checkWord([r, c + 1], wE, hpList.concat([[r, c + 1]]));
            }
            const result = rA || rB || rC || rD;
            return result;
        }
    }

    function makeUniq(resultList) {
        let seen = new Set();
        return resultList.filter(item => {
            const k = JSON.stringify(item);
            return seen.has(k) ? false : seen.add(k);
        });
    }

    var result = [];
    words.forEach(word => {
        var char = word.substr(0, 1);
        findIndex(char).forEach(position => {
            checkWord(position, word.slice(1), [position]) ? result.push(word) : null;
        })
    })
    return makeUniq(result).sort();
};

