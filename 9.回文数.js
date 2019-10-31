/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var str = `${x}`;
    var restr = str.split('').reverse().join('');
    return str === restr;
};
// @lc code=end

