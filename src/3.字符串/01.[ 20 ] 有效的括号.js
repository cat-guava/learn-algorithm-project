/**
 * * 题目名称：有效的括号
 * * 题目地址：https://leetcode-cn.com/problems/valid-parentheses
 */

// * 思路：栈和哈希表
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length === 1 || s.length % 2) return false
  const stack = []
  const pair = new Map([
    [')', '('],
    [']', '['],
    ['}', '{']
  ])
  for (const ch of s) {
    if (pair.has(ch)) {
      if (!stack.length || stack[stack.length - 1] !== pair.get(ch)) return false
      stack.pop()
    } else {
      stack.push(ch)
    }
  }
  return !stack.length
}

// 测试用例
let test = '()[([{}])]{}'

console.time('执行用时')
console.log(isValid(test))
console.timeEnd('执行用时')
