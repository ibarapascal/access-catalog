/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {

    // ! ERROR: Scavenger: semi-space copy Allocation failed - JavaScript heap out of memory

    // var result = [];
    // function checkFirst(intervals) {
    //     if (intervals.length === 1 || intervals.length === 0) {
    //         return intervals;
    //     }
    //     if (intervals[0][1] < intervals[1][0] || intervals[0][0] > intervals[1][1]) {
    //         result.push(intervals[0]);
    //         if (intervals.length <= 2) {
    //             result.push(intervals[intervals.length - 1]);
    //             return result;
    //         }
    //         checkFirst(intervals.slice(1));
    //     } else {
    //         var min = Math.min(intervals[0][0], intervals[1][0], intervals[0][1], intervals[1][1]);
    //         var max = Math.max(intervals[0][0], intervals[1][0], intervals[0][1], intervals[1][1]);
    //         if (intervals.length <= 2) {
    //             result.push([min, max]);
    //             return result;
    //         }
    //         checkFirst([[min, max]].concat(intervals.slice(2)));
    //     }
    // }
    // checkFirst(intervals);
    // return result;

    // ! ERROR
    // × Wrong Answer
    // × 48/169 cases passed (N/A)
    // × testcase: '[[2,3],[4,5],[6,7],[8,9],[1,10]]'
    // × answer: [[2,3],[4,5],[6,7],[1,10]]
    // × expected_answer: [[1,10]]
    // × stdout:
    // if (!intervals || intervals.length === 0) {
    //     return [];
    // } else if (intervals.length === 1) {
    //     return intervals;
    // } else {
    //     var result = [];
    //     while(intervals.length > 1) {
    //         if (intervals[0][1] < intervals[1][0] || intervals[0][0] > intervals[1][1]) {
    //             result.push(intervals[0]);
    //             intervals = intervals.slice(1);
    //         } else {
    //             var min = Math.min(intervals[0][0], intervals[1][0], intervals[0][1], intervals[1][1]);
    //             var max = Math.max(intervals[0][0], intervals[1][0], intervals[0][1], intervals[1][1]);
    //             intervals = intervals.slice(2) ? intervals.slice(2) : [];
    //             intervals.splice(0, 0, [min, max]);
    //         }
    //     }
    //     result.push(intervals[0]);
    //     return result;
    // }

    
    function makeIdxSort(data, index) {
        return data.sort((a,b) => a[index] - b[index]);
    }
    function theLarger(A, B) {
        const unit = [A[0], A[1], B[0], B[1]];
        return [Math.min(...unit), Math.max(...unit)];
    }

    if (!intervals || intervals.length === 0) {
        return [];
    } else if (intervals.length === 1) {
        return intervals;
    } else {
        var result = [];
        var intervalsSort = makeIdxSort(intervals.slice(0), 0);
        while(intervalsSort.length > 1) {
            var iC = JSON.parse(JSON.stringify(
                intervalsSort.filter((item) => intervalsSort[0][1] >= item[0])
                )).slice(1);
            if (!iC || iC.length === 0) {
                result.push(intervalsSort[0]);
                intervalsSort = intervalsSort.slice(1);
            }
            else {
                var unit = intervalsSort[0];
                iC.forEach(item => 
                    unit = theLarger(unit, item)
                )
                intervalsSort = intervalsSort.slice(iC.length + 1) ? intervalsSort.slice(iC.length + 1) : [];
                intervalsSort.splice(0, 0, unit);
            }
            if (intervalsSort.length === 1) {
                result.push(intervalsSort[0]);
            }
        }
        return result;
    }


};


