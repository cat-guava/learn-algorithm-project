/**
 * * 题目名称：加一
 * * 题目地址：https://leetcode-cn.com/problems/plus-one
 */

// * 思路：

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const n = digits.length
  for (let i = n - 1; i >= 0; i--) {
    digits[i] = (digits[i] + 1) % 10
    if (digits[i] !== 0) return digits
  }
  // digits.unshift(1)
  // 全为9的情况
  const ans = new Array(n + 1).fill(0)
  ans[0] = 1
  return ans
}

// 测试用例
let test = [0]

console.time('执行用时')
console.log(plusOne(test))
console.timeEnd('执行用时')
