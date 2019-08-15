/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

    // ! Error: https://stackoverflow.com/questions/17320706/javascript-long-integer
    // × Wrong Answer
    // × 69/109 cases passed (N/A)
    // × testcase: '[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]'
    // × answer: [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,4,0,8]
    // × expected_answer: [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]
    // × stdout:

    // var str = '';
    // digits.forEach(item => str += item.toString());
    // // var num = parseInt(str) + 1;
    // var num = (parseFloat(str) + 1).toFixed(0);
    // return num.toString().split('');


// ? √ Accepted 2019/08/16
//   √ 109/109 cases passed (56 ms)
//   √ Your runtime beats 60.51 % of javascript submissions
//   √ Your memory usage beats 87.23 % of javascript submissions (33.8 MB)

    for (let index in digits.reverse()) {
        if (digits[index] === 9) {
            digits[index] = 0;
            if (parseInt(index) === digits.length - 1) {
                digits.push(1);
                break;
            }
        } else {
            digits[index] += 1;
            break;
        }
    }
    digits.reverse();
    return digits;

};

