/**
 * * 题目名称：文件夹操作日志搜集器
 * * 题目地址：https://leetcode-cn.com/problems/crawler-log-folder
 */

// * 思路：栈

/**
 * @param {string[]} logs
 * @return {number}
 */
// 方法1：栈，用switch case default break
/* var minOperations = function (logs) {
  let stack = []
  for (const ch of logs) {
    switch (ch) {
      case '../':
        if (stack.length) stack.pop()
        break
      case './':
        break

      default:
        stack.push(ch)
        break
    }
  }
  return stack.length
} */

// * 方法2：计数法
// 用if判断 (用switch好些，耗时短些)
var minOperations = function (logs) {
  let step = 0
  for (const ch of logs) {
    if (ch === '../') {
      step = step === 0 ? step : step - 1
    } else if (ch !== './') {
      step++
    }
  }
  return step
}

// 测试用例
let test = ['d1/', '../', '../', '../']

console.time('执行用时')
console.log(minOperations(test))
console.timeEnd('执行用时')
