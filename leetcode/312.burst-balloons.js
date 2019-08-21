/*
 * @lc app=leetcode id=312 lang=javascript
 *
 * [312] Burst Balloons
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {

    // ! Error, consider border situation

    const numsList = Array.from(new Array(60)).map((v,i) => i)
    let result = 0;
    numsList.forEach(item => {
        while(true) {
            const index = nums.indexOf(item);
            if (index === -1) {
                break;
            } else {
                const lnum = index === 0 ? 1 : nums[index - 1];
                const mnum = item;
                const rnum = index === nums.length - 1 ? 1 : nums[index + 1];
                result += lnum * mnum * rnum;
                nums.splice(index, 1);
            }
        }
    });
    return result;
};

