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

    var result = [];
    function checkFirst(intervals) {
        if (intervals.length === 1 || intervals.length === 0) {
            return intervals;
        }
        if (intervals[0][1] < intervals[1][0] || intervals[0][0] > intervals[1][1]) {
            result.push(intervals[0]);
            if (intervals.length <= 2) {
                result.push(intervals[intervals.length - 1]);
                return result;
            }
            checkFirst(intervals.slice(1));
        } else {
            var min = Math.min(intervals[0][0], intervals[1][0], intervals[0][1], intervals[1][1]);
            var max = Math.max(intervals[0][0], intervals[1][0], intervals[0][1], intervals[1][1]);
            if (intervals.length <= 2) {
                result.push([min, max]);
                return result;
            }
            checkFirst([[min, max]].concat(intervals.slice(2)));
        }
    }

    checkFirst(intervals);
    return result;

};


