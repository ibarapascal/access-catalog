/*
 * @lc app=leetcode id=670 lang=javascript
 *
 * [670] Maximum Swap
 */
/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {

    // ! Error: 2019/08/30
    // × Wrong Answer
    // × 99/111 cases passed (N/A)
    // × testcase: '98368'
    // × answer: 98368
    // × expected_answer: 98863
    // × stdout:

    // let numList = num.toString().split('').map(x => parseInt(x));
    // if (numList.length === 1) return num;
    // const char = numList[0];
    // numList.shift();
    // numList.reverse();
    // const maxChar = Math.max(...numList);
    // const maxCharIndex = numList.indexOf(maxChar);
    // numList.reverse();
    // numList.splice(numList.length - 1 - maxCharIndex, 1, char);
    // numList.unshift(maxChar);
    // const result = parseInt(numList.join(''));
    // return Math.max(result, num);




    // ? √ Accepted 2019/08/30
    // √ 111/111 cases passed (40 ms)
    // √ Your runtime beats 100 % of javascript submissions
    // √ Your memory usage beats 50 % of javascript submissions (33.9 MB)    

    let numList = num.toString().split('').map(x => parseInt(x));
    const numListLen = numList.length;
    if (numListLen === 1) return num;


    function exchangeTwo(list, indexA, indexB) {
        const valueA = list[indexA];
        const valueB = list[indexB];
        list.splice(indexA, 1, valueB);
        list.splice(indexB, 1, valueA);
    }
    function findLargestIdxMaxFromIdx(list, indexStart, beforeNumber) {
        const len = list.length;
        list = list.slice(indexStart);
        list.reverse();
        const maxChar = Math.max(...list);
        if (beforeNumber >= maxChar) return 0;
        else {
            const maxCharIndexRev = list.indexOf(maxChar);
            return len - 1 - maxCharIndexRev;
        }
    }

    let i = 0;
    while(i < numListLen - 1) {
        const exchangeIdx = findLargestIdxMaxFromIdx(numList, i + 1, numList[i]);
        if (exchangeIdx !== 0) {
            exchangeTwo(numList, i, exchangeIdx);
            break;
        }
        i += 1;
    }
    const result = parseInt(numList.join(''));
    return result;
};

