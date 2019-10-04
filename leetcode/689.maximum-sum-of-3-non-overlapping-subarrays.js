/*
 * @lc app=leetcode id=689 lang=javascript
 *
 * [689] Maximum Sum of 3 Non-Overlapping Subarrays
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfThreeSubarrays = function(nums, k) {



    // ! TODO: 2019/08/30

    const len = nums.length;
    let calList = [];
    nums.forEach((item, index) => {
        if (index <= len - k) {
            calList.push(nums.slice(index, k).reduce((a, b) => a + b));
        }
    });

    function findMaxThreeList(list) {
        let sumList = list.slice(0).sort((a, b) => b - a);
        let sumList = sumList.filter((v, i) => i !== 0 ? v !== sumList[i - 1] : true);
        // ...
    }

    function checkIfOverlapping(calList, valA, valB, valC) {

        // const valAList = calList.filter(item => item = valA);
        // const valBList = calList.filter(item => item = valB);
        // const valCList = calList.filter(item => item = valC);
        // while(true) {
        //     valAList.forEach((a, ai) => {
        //         valBList.forEach((b, bi) => {
        //             valCList.forEach((c, ci) => {
        //                 if 
        //             })
        //         })
        //     })
        // }
    }


};

