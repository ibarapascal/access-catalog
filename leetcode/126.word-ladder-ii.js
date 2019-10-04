/*
 * @lc app=leetcode id=126 lang=javascript
 *
 * [126] Word Ladder II
 */
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {

    // ! Error: Time Limit Exceeded: 2019/08/27
    // × Time Limit Exceeded
    // × 19/39 cases passed (N/A)
    // × testcase: '"qa"\n"sq"\n["si","go","se","cm","so","ph","mt","db","mb","sb","kr","ln","tm","le","av","sm","ar","ci","ca","br","ti","ba","to","ra","fa","yo","ow","sn","ya","cr","po","fe","ho","ma","re","or","rn","au","ur","rh","sr","tc","lt","lo","as","fr","nb","yb","if","pb","ge","th","pm","rb","sh","co","ga","li","ha","hz","no","bi","di","hi","qa","pi","os","uh","wm","an","me","mo","na","la","st","er","sc","ne","mn","mi","am","ex","pt","io","be","fm","ta","tb","ni","mr","pa","he","lr","sq","ye"]'
    // × answer: 
    // × expected_answer: 
    // × stdout:

    function diffStr(strA, strB) {
        const listA = strA.split('');
        const listB = strB.split('');
        let result = [];
        listA.forEach((char, index) => {
            if (char !== listB[index]) result.push(index);
        });
        return result;
    }

    function checkList(word, list, result, indexP){
        let len = list.length;
        let i = 0;
        while(i < len) {
            if (diffStr(word, endWord).length === 1) {
                result.push(endWord);
                resultList.push(result);
                return;
            }
            i += 1;
        }
        list.forEach((item, index) => {
            const diff = diffStr(item, word);
            if (diff.length === 1 && diff[0] !== indexP) {
                const resultTemp = result.slice(0);
                resultTemp.push(list[index])
                const listTemp = list.slice(0).filter(item => item !== list[index]);
                checkList(list[index], listTemp, resultTemp, diff[0]);
            }
        })
    }

    if (!wordList.some(item => item === endWord)) return [];

    let result = [];
    let resultList = [];
    result.push(beginWord);
    checkList(beginWord, wordList, result, 3);
    return resultList;

};

