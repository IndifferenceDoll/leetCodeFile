/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var ident = x >= 0 ? '' : '-';
    var str = x >= 0 ? x.toString() : x.toString().substring(1);
    var numStr = str.split('').reverse().join('');
    var num = +(ident + numStr);
    return (num >= Number.POSITIVE_INFINITY) || (num <= Number.NEGATIVE_INFINITY) ? 0 : num;
};
// @lc code=end

