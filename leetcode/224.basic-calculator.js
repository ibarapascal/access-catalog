/*
 * @lc app=leetcode id=224 lang=javascript
 *
 * [224] Basic Calculator
 */
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {

    // ! Error when negative calculate result
    // × Runtime Error
    // × 21/37 cases passed (N/A)
    // × error: Line ?: ReferenceError: Invalid left-hand side expression in postfix operation
    // × error: undefined:1
    // 2--1
    // ^
    // ReferenceError: Invalid left-hand side expression in postfix operation
    //     Line 57: Char 32 in solution.js (calContent)
    //     Line 62: Char 21 in solution.js (calculate)
    //     Line 79: Char 19 in solution.js (Object.)
    //     Line 16: Char 8 in runner.js (Object.runner)
    //     Line 67: Char 26 in solution.js (Object.)
    //     Line 689: Char 30 in loader.js (Module._compile)
    //     Line 700: Char 10 in loader.js (Object.Module._extensions..js)
    //     Line 599: Char 32 in loader.js (Module.load)
    //     Line 538: Char 12 in loader.js (tryModuleLoad)
    //     Line 530: Char 3 in loader.js (Function.Module._load)
    // × testcase: '"2-(5-6)"'
    // × answer: 
    // × expected_answer: 
    // × stdout:


  // ? √ Accepted 2019/08/17
    // √ 37/37 cases passed (120 ms)
    // √ Your runtime beats 19.14 % of javascript submissions
    // √ Your memory usage beats 33.33 % of javascript submissions (59.3 MB)

    function replaceMark(str) {
        str = str.replace('--', '+');
        str = str.replace('-+', '-');
        str = str.replace('+-', '-');
        return str;
    }

    function calContent(str) {
        let strList = str.split('');
        let subStrSplitIndex = [];
        let stack = 0; 
        strList.forEach((char, index) => {
            if (char === '(') {
                if (stack === 0) subStrSplitIndex.push(index);
                stack += 1;
            }
            if (char === ')') {
                if (stack === 1) subStrSplitIndex.push(index);
                stack -= 1;
            }
        })
        if (subStrSplitIndex.length === 0) return eval(replaceMark(strList.join('')));
        else {
            let result = [];
            let flag = strList[0] === '(';
            if (flag) {
                for (let i = 0; i < subStrSplitIndex.length; i++) {
                    if (i === 0) {
                        result.push(strList.slice(0, subStrSplitIndex[i + 1] + 1).join(''));
                    } else if (i === subStrSplitIndex.length - 2) {
                        result.push(strList.slice(subStrSplitIndex[i]).join(''));
                    } else {
                        flag
                            ? result.push(calContent(strList.slice(subStrSplitIndex[i], subStrSplitIndex[i + 1] + 1).join('')))
                            : result.push(strList.slice(subStrSplitIndex[i] + 1, subStrSplitIndex[i + 1]).join(''))
                    }
                    flag = flag ? false : true;
                }
            } else {
                for (let i = 0; i < subStrSplitIndex.length + 1; i++) {
                    if (i === 0) {
                        result.push(strList.slice(0, subStrSplitIndex[i]).join(''));
                    } else if ( i === subStrSplitIndex.length) {
                        result.push(strList.slice(subStrSplitIndex[i - 1] + 1).join(''));
                    } else {
                        flag
                            ? result.push(calContent(strList.slice(subStrSplitIndex[i - 1], subStrSplitIndex[i] + 1).join('')))
                            : result.push(strList.slice(subStrSplitIndex[i - 1] + 1, subStrSplitIndex[i]).join(''))
                    }
                    flag = flag ? false : true;
                }
            }
            return eval(replaceMark(result.join('')));
        }
    }

    const sclean = s.split('').filter(char => char !== ' ').join('');
    const sformat = calContent(sclean);
    return sformat;
};

