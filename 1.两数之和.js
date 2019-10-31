/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var len = nums.length;
    var i = 0;
    var j = 1;
    while(i < len - 1) {
        var first = nums[i];
        var second = nums[j];
        if(first + second === target){
            return [i,j];
        }
        j += 1;
        if(j > len - 1){
            i += 1;
            j = i + 1;
        }
    }
    return [];
};
// @lc code=end

