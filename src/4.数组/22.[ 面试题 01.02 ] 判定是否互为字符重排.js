/**
 * * 题目名称：判定是否互为字符重排
 * * 题目地址：https://leetcode-cn.com/problems/check-permutation-lcci
 */

// * 思路：
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function (nums) {
  nums.unshift(0) // [0,4,2,5,3] [4,2,5]
  const n = nums.length
  let ans = 0
  for (let i = 1; i < n; i++) {
    // 大于0，即赚钱就买
    ans += Math.max(0, nums[i] - nums[i - 1]) // -0+4 -4+2 -2+5 -5+3
  }
  return ans // 4-2+5
}

// 测试用例
let nums = [4, 2, 5, 3]

console.time('执行用时')
console.log(maxAlternatingSum(nums))
console.timeEnd('执行用时')
