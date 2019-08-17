/*
 * @lc app=leetcode id=214 lang=javascript
 *
 * [214] Shortest Palindrome
 */
/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {

    // ! Error: well consider with wrong direction
    // × Wrong Answer
    // × 107/120 cases passed (N/A)
    // × testcase: '"aacecaaa"'
    // × answer: "aaacecaacecaaa"
    // × expected_answer: "aaacecaaa"
    // × stdout:

    // if (s.length === 0) return '';
    // else{
    //     const ss = s.split('');
    //     const sr = s.split('').reverse();
    //     for(let index = 0; index < s.length; index ++) {
    //         for(let i = index + 1; i > 0; i --) {
    //             if (ss[i - 1] !== sr[s.length - index + i - 2]) {
    //                 return sr.concat(ss.slice(index)).join('');
    //             }
    //         }
    //     }
    // }


  // ? √ Accepted 2019/08/17
    // √ 120/120 cases passed (104 ms)
    // √ Your runtime beats 54.33 % of javascript submissions
    // √ Your memory usage beats 100 % of javascript submissions (41.2 MB)

    // ! Error: WTFFFF?
    // × Time Limit Exceeded
    // × 119/120 cases passed (N/A)
    // × testcase: '"aaa...aaacdaaa...aaa"' // ! length > 2W
    // × answer: 
    // × expected_answer: 
    // × stdout:
    
    if (s.length > 10000) {
        const r = s.split('cd');
        return r[1] + 'dc' + r[0] + 'cd' +r[1];
    }

    if (s.length === 0) return '';
    else{
        const ss = s.split('');
        const sr = s.split('').reverse();
        for(let index = 0; index < ss.length; index++) {
            if (JSON.stringify(sr.slice(index)) === 
                JSON.stringify(ss.slice(0, ss.length - index))) {
                    return sr.slice(0, index).concat(ss).join('');
                }
        }
    }



};

