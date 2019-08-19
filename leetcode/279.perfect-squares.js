/*
 * @lc app=leetcode id=279 lang=javascript
 *
 * [279] Perfect Squares
 */
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {

    // // function resultTree(id = 0, value = 0, subId = []) {
    // //     this.id = id;
    // //     this.value = value;
    // //     this.subId = subId;
    // // }
    // // ! Convert to a class definition
    // class resultTree {
    //     constructor(id = 0, value = 0, subId = []) {
    //         this.id = id;
    //         this.value = value;
    //         this.subId = subId;
    //     }
    // }
    // let resultTree = [resultTree()];


    // ! Need tree basic knowledge
    function addStep(n) {
        let sqrtRaw = Math.sqrt(n) | 0;
        let sqrt = sqrtRaw;
        
        while(sqrt > Math.sprt(sqrtRaw)) {
            
            let diff = n - sqrt * sqrt;
            addStep(diff);
            sqrt -= 1;
        }
    }

};

