/*
 * @lc app=leetcode id=208 lang=javascript
 *
 * [208] Implement Trie (Prefix Tree)
 */


// ? Ojbk situation

// Actual
//   √ runtime: 72 ms
//   √ answer: [null,null,true,false,true,null,true]
//   √ stdout: ''

// Expected
//   √ runtime: 4 ms
//   √ answer: [null,null,true,false,true,null,true]
//   √ stdout: ''


// ! Error ??
// × Wrong Answer
//   × 3/15 cases passed (N/A)
//   × testcase: '["Trie","startsWith"]\n[[],["a"]]'
//   × answer: [null,true]
//   × expected_answer: [null,false]
//   × stdout:


/**
 * Initialize your data structure here.
 */
var Trie = function() {

};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    Trie.list ? Trie.list.push(word) : Trie.list = [word];
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    return Trie.list.length > 0
        ? Trie.list.some(item => item === word)
        : false;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    return Trie.list && Trie.list.length > 0 && Trie.list[0].length > 0
        ? Trie.list[0].indexOf(prefix) === 0
        : false;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

