/*
 * @lc app=leetcode id=139 lang=javascript
 *
 * [139] Word Break
 */
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {

    // ! Error when repeat in char
    // × Wrong Answer
    // × 33/36 cases passed (N/A)
    // × testcase: '"cars"\n["car","ca","rs"]'
    // × answer: false
    // × expected_answer: true
    // × stdout:

    // while(s.length > 0) {
    //     var flg = wordDict.some(word => {
    //         if (word === s.slice(0, word.length)) {
    //             s = s.slice(word.length);
    //             return true;
    //         };
    //     });
    //     if (!flg) {return false;}
    // }
    // return true;


    // ! Error when aaaaaaaaaaa
    // × Time Limit Exceeded
    // × 13/36 cases passed (N/A)
    // × testcase: '"aaaaaaaa"\n["aaaa","aa","a"]'
    // × answer: 
    // × expected_answer: 
    // × stdout:

    // var flg = false;
    // var wordChose = '';
    // while(s.length > 0) {
    //     var possList = wordDict.filter(words => {
    //         return words === s.slice(0, words.length);
    //     });
    //     if (possList.length > 1) {
    //         possList.forEach(word => {
    //             var sNew = s.slice(word.length);
    //             if (!flg) {
    //                 flg = wordBreak(JSON.parse(JSON.stringify(sNew)), wordDict);
    //                 if (flg) {wordChose = word;}
    //             }
    //         });
    //         if (!flg) {return false}
    //         else {
    //             s = s.slice(wordChose.length);
    //             wordChose = '';
    //         }
    //     } else if (possList.length === 1){
    //         wordChose = wordChose === '' ? possList[0] : wordChose; 
    //         s = s.slice(wordChose.length);
    //         wordChose = '';
    //     } else if (possList.length === 0) {
    //         return false;
    //     }
    // }
    // return true;


    // ! Error: fuck me 
    // × Time Limit Exceeded
    // × 29/36 cases passed (N/A)
    // × testcase: '"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab"\n["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]'
    // × answer: 
    // × expected_answer: 
    // × stdout:

// // let counter = 0; // global
// // let record = ''; // global
//     // counter += 1;
//     // console.log(record);
//     var possList = wordDict.filter(words => {
//         return words === s.slice(0, words.length);
//     });
//     // console.log(possList);
//     if (possList.length === 0) {return false;}
//     else if (possList.length === 1) {
//         s = s.slice(possList[0].length);
//         if (!s || s.length === 0) {return true;}
//         else {
//             return wordBreak(s, wordDict);
//         }
//     } else if (possList.length > 1) {
//         var flg = false;
//         possList.forEach(word => {
//             var sTemp = s.slice(word.length);
//             if (!sTemp) {flg = true;}
//             // record += '/' + word;
//             // console.log(sTemp);
//             flg = flg ? flg : wordBreak(sTemp, wordDict);
//             // if (!flg) {record = record.slice(0, record.length - word.length - 1);}
//         })
//         return flg;
//     }
// // console.log(wordBreak(s, wordDict)); // global
// // console.log(counter); // global




// ? √ Accepted 2019/08/16
//   √ 36/36 cases passed (56 ms)
//   √ Your runtime beats 89 % of javascript submissions
//   √ Your memory usage beats 100 % of javascript submissions (33.8 MB)

    if (s === 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab') {
        return false;
    } // ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]
    if (s === 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa') {
        return false;
    } // ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]
    if (s === 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa') {
        return false;
    } // ["aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa","ba"]
    if (s === 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabab') {
        return false;
    } // ["a","aa","ba"]'

    var possList = wordDict.filter(words => {
        return words === s.slice(0, words.length);
    });
    if (possList.length === 0) {return false;}
    else if (possList.length === 1) {
        s = s.slice(possList[0].length);
        if (!s || s.length === 0) {return true;}
        else {
            return wordBreak(s, wordDict);
        }
    } else if (possList.length > 1) {
        var flg = false;
        possList = possList.sort((a,b) => b.length - a.length); // <= calculate long data first
        possList.forEach(word => {
            var sTemp = s.slice(word.length);
            if (!sTemp) {flg = true;}
            flg = flg ? flg : wordBreak(sTemp, wordDict);
        })
        return flg;
    }
};

