/**
 * * 题目名称：用栈操作构建数组
 * * 题目地址：https://leetcode-cn.com/problems/build-an-array-with-stack-operations
 */

/**
 * *思路：操作对象list内每个数字1到n，若target内有这个数字，则直接push，
 * *若没有，表示进行了先push再pop的操作，target是严格递增的，target内连续2个数字prev和number之间有number-prev-1个数字，如1和3之间有3-1-1个数字,则需要先push再pop共number-prev-1次
 */
/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
  let res = []
  let prev = 0 // target中连续两个数字中的上一个数字
  for (const number of target) {
    for (let i = 0; i < number - prev - 1; i++) {
      res.push('Push')
      res.push('Pop')
    }
    res.push('Push')
    prev = number
  }
  return res
}

// 测试用例

console.time('执行用时')
console.log(buildArray([1, 2], 4))
console.timeEnd('执行用时')
