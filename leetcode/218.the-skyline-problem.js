/*
 * @lc app=leetcode id=218 lang=javascript
 *
 * [218] The Skyline Problem
 */
/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function(buildings) {


  // ? √ Accepted 2019/08/17
    // √ 36/36 cases passed (1312 ms)
    // √ Your runtime beats 23.59 % of javascript submissions
    // √ Your memory usage beats 100 % of javascript submissions (44.8 MB)

    /*
    * Refer
    * [56] Merge Intervals
    */
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    function mergeList(intervals) {
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
                    iC.forEach((item) => 
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
    
    function makeItemUnique(data) {
        let seen = new Set();
        return data.filter(item => {
            const k = JSON.stringify(item);
            return seen.has(k) ? false : seen.add(k);
        });
    }

    let buildingsUniqLevel = [];
    buildings.sort((a, b) => b[2] - a[2]);
    buildings.forEach(item => {
        const itemList = buildings.filter(x => x[2] === item[2]);
        if (itemList.length === 1) {
            buildingsUniqLevel.push(item);
        } else {
            mergeList(itemList.map(unit => [unit[0], unit[1]]))
                .map(unit => [unit[0], unit[1],item[2]]).forEach(x => {
                    buildingsUniqLevel.push(x);
            });
        }
    });
    buildingsUniqLevel = makeItemUnique(buildingsUniqLevel);

    let resultPoint = [];
    let resultWidth = [];
    let levelList = buildingsUniqLevel.map(item => item[2]);
    buildingsUniqLevel.forEach(item => {
        if (item[2] === levelList[0]) {
            resultPoint.push([item[0], item[2]]);
            resultWidth.push([item[0], item[1]]);
        } else {
            let startInWidthFlg = false;
            let endIndexListOfWidth = [];
            resultWidth.forEach((width, index) => {
                if (item[0] >= width[0] && item[0] <= width[1]) startInWidthFlg = true;
                if (item[0] <= width[1] && item[1] > width[1]) endIndexListOfWidth.push(index);
            })
            if (!startInWidthFlg) resultPoint.push([item[0], item[2]]);
            if (endIndexListOfWidth.length > 0) {
                endIndexListOfWidth.forEach(indexVal => {
                    resultPoint.push([resultWidth[indexVal][1], item[2]]);
                })
            }
            resultWidth = mergeList(resultWidth.concat([[item[0], item[1]]]));
        }
    })

    if (resultWidth.length > 0) {
        for(let i = 0; i < resultWidth.length; i++) {
            resultPoint.push([resultWidth[i][1], 0]);
        }
    }
    return resultPoint.sort((a, b) => a[0] - b[0]);
};

