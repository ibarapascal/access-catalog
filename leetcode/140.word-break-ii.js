/*
 * @lc app=leetcode id=140 lang=javascript
 *
 * [140] Word Break II
 */
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */

var wordBreak = function(s, wordDict) {

    // ! Error
    // × Wrong Answer
    // × 24/39 cases passed (N/A)
    // × testcase: '"pineapplepenapple"\n["apple","pen","applepen","pine","pineapple"]'
    // × answer: ["pineapple pen apple","pine applepen apple","apple pen apple"]
    // × expected_answer: ["pine apple pen apple","pineapple pen apple","pine applepen apple"]
    // × stdout:

    function circleFunc(s, wordDict) {
        var possList = wordDict.filter(words => {
            return words === s.slice(0, words.length);
        });
        if (possList.length === 0) {return false;}
        else if (possList.length === 1) {
            result.length === 0 ? result[count] = possList[0] + ' ' : result[count] += possList[0] + ' '; // <= here add
            s = s.slice(possList[0].length);
            if (!s || s.length === 0) {
                result[count] = result[count].slice(0, result[count].length - 1); // <= here delete ' '
                count += 1;
                result.push(''); // ! TODO
                return true;
            }
            else {
                var r = circleFunc(s, wordDict);
                return r;
            }
        } else if (possList.length > 1) {
            var flg = false;
            possList = possList.sort((a,b) => b.length - a.length);
            possList.forEach(word => {
                var sTemp = s.slice(word.length);
                if (!sTemp) {
                    result[count] = result[count].slice(0, result[count].length - 1); // <= here delete ' '
                    count += 1; // <= here change line
                    flg = true;
                }
                result.length === 0 ? result[count] = word + ' ' : result[count] += word + ' '; // <= here add
                flg = circleFunc(sTemp, wordDict);
                if (!flg) {
                    result[count] = result[count].slice(0, result[count].length - word.length - 2);
                }
            })
            return flg;
        }
    }
    var result = [];
    var count = 0;
    circleFunc(s, wordDict);
    return result.slice(0, -1);
};

