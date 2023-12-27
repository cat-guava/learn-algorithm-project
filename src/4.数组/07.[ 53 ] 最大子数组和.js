/**
 * * 题目名称：最大子数组和
 * * 题目地址：https://leetcode-cn.com/problems/maximum-subarray
 */

// * 思路：

/**
 * @param {number[]} nums
 * @return {number}
 */
// * 方法1：动态规划
// 求出以x结尾的最大和
// 比较所有以x结尾的最大和，选取其中最大的
var maxSubArray = function (nums) {
  const n = nums.length
  let pre = 0,
    res = nums[0]
  nums.forEach(x => {
    // 若若pre+x<=x,则舍弃前面的
    pre = Math.max(pre + x, x)
    res = Math.max(res, pre)
    console.log(pre, res)
  })
  return res
}

// 测试用例
let test = [-2, 1, -3, 4, -1, -1, 2, 1, -5, 4]

console.time('执行用时')
console.log(maxSubArray(test))
console.timeEnd('执行用时')
