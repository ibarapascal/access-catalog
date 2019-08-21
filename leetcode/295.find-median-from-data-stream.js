/*
 * @lc app=leetcode id=295 lang=javascript
 *
 * [295] Find Median from Data Stream
 */
/**
 * initialize your data structure here.
 */

// ! Error emmmmm 2019/08/21
//  × Time Limit Exceeded
//  × 17/18 cases passed (N/A)
//  × testcase: ...
//  × answer: 
//  × expected_answer: 
//  × stdout:

var MedianFinder = function() {
    let list = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if (this.list && this.list.length > 0) {
        function findeIndex(startIndex, stopIndex, num) {
            const list = this.list.slice(startIndex, stopIndex);
            console.log(list);
            const len = list.length;
            if (len & 1 === 1) {
                if (len === 1 || list[(len - 1) / 2] === num) {
                    return this.list.indexOf(num);
                } else {
                    if (list[(len - 1) / 2] > num) {
                        return findeIndex(0, (len - 1) / 2, num);
                    } else {
                        return findeIndex((len - 1) / 2 + 1, len, num);
                    }
                }
            } else {
                if (len === 2 && len[0] < num && len[1] > num) {
                    return this.list.indexOf(len[1]);
                } else if (list[len / 2 - 1] === num || list[len / 2] === num) {
                    return this.list.indexOf(num);
                } else if (list[len / 2 - 1] > num) {
                    return findeIndex(0, len / 2 - 1, num);
                } else {
                    return findeIndex(len / 2 + 1, len, num);
                }
            }
        }
        this.list.splice(findeIndex(0, this.list.length, num), 0, num);
    } else {
        this.list = [num];
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.list && this.list.length === 0) {
        return 0;
    } else {
        // this.list.sort((a, b) => a - b);
        if (this.list.length & 1 === 1) {
            return this.list[(this.list.length - 1) / 2];
        } else {
            return (this.list[this.list.length / 2 - 1] + this.list[this.list.length / 2]) / 2;
        }
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

