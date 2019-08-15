/*
 * @lc app=leetcode id=57 lang=javascript
 *
 * [57] Insert Interval
 */
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {

// ? √ Accepted 2019/08/16
//   √ 154/154 cases passed (80 ms) 
//   √ Your runtime beats 29.72 % of javascript submissions
//   √ Your memory usage beats 12.5 % of javascript submissions (38.9 MB)

    function makeIdxSort(data, index) {
        return data.sort((a,b) => a[index] - b[index]);
    }
    function theLarger(A, B) {
        const unit = [A[0], A[1], B[0], B[1]];
        return [Math.min(...unit), Math.max(...unit)];
    }
    if ((!intervals || intervals.length === 0) && (!newInterval || newInterval.length === 0)) {
        return [];
    } else if (!intervals || intervals.length === 0) {
        return [newInterval];
    } else if (!newInterval || newInterval.length === 0) {
        return intervals;
    } else {
        var intervalsSort = makeIdxSort(intervals.slice(0), 0);
        var ichange = intervalsSort.filter(item => {
            return item[1] >= newInterval[0] && item[0] <= newInterval[1];
        });
        if (ichange.length === 0) {
            return makeIdxSort(intervals.concat([newInterval]), 0);
        } else {
            var head = intervalsSort.slice(0).splice(0, intervalsSort.indexOf(ichange[0]));
            var foot = intervalsSort.slice(0).splice(1 + intervalsSort.indexOf(ichange[ichange.length - 1]));
            var body = [newInterval];
            ichange.forEach(item => {
                body = [theLarger(item, body[0])];
            })
            return makeIdxSort(head.concat(foot.concat(body)), 0);
        }
    }
};

