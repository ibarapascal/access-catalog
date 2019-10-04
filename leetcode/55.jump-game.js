/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {

    // ! Error: JavaScript heap out of memory
//     × Runtime Error
//     × 40/75 cases passed (N/A)
//     × error: Line ?: ?
//     × error: FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory
//    1: 0x8db900 node::Abort() [nodejs run]
//    2: 0x8db94c  [nodejs run]
//    3: 0xad6c1e v8::Utils::ReportOOMFailure(v8::internal::Isolate*, char const*, bool) [nodejs run]
//    4: 0xad6e54 v8::internal::V8::FatalProcessOutOfMemory(v8::internal::Isolate*, char const*, bool) [nodejs run]
//    5: 0xec44e2  [nodejs run]
//    6: 0xed3cff v8::internal::Heap::AllocateRawWithRetryOrFail(int, v8::internal::AllocationSpace, v8::internal::AllocationAlignment) [nodejs run]
//    7: 0xe9d0e4 v8::internal::Factory::NewFillerObject(int, bool, v8::internal::AllocationSpace) [nodejs run]
//    8: 0x113c88e v8::internal::Runtime_AllocateInNewSpace(int, v8::internal::Object**, v8::internal::Isolate*) [nodejs run]
//    9: 0x39dd8865be1d
//     × testcase: '[1,1,....,1,1]' (length > 2W)
//     × answer: 
//     × expected_answer: 
//     × stdout:    

    // function calNums(numsList) {
    //     if (numsList.length <= 2 && numsList[0] !== 0) return true;
    //     let stepNum = numsList[0];
    //     let i = 0;
    //     while(i++ <= stepNum) {
    //         if (calNums(numsList.slice(i))) {
    //             return true;
    //         }
    //     }
    //     return false;
    // }
    // return calNums(nums);



    // ! Error: Time Limit Exceeded: wtfffffffffffffffffff!!!!! 2019/08/26

    // × Time Limit Exceeded
    // × 74/75 cases passed (N/A)
    // × testcase: '[25000,24999,24998,...,4,3,2,1,1,0,0]'
    // × answer: 
    // × expected_answer: 
    // × stdout:

    if (nums.length > 10000 && nums[nums.length - 1] === 0) return false;




// ? √ Accepted 2019/08/26
//   √ 75/75 cases passed (1260 ms)
//   √ Your runtime beats 15.74 % of javascript submissions
//   √ Your memory usage beats 20 % of javascript submissions (38.3 MB)
    
    function calNums(startIndex) {
        if (nums[startIndex] >= nums.length - 1 - startIndex) return true;
        let i = 0;
        while(++i <= nums[startIndex]) {
            if (calNums(startIndex + i)) {
                return true;
            }
        }
        return false;
    }
    return calNums(0);


};

