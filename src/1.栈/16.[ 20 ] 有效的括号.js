/**
 * * 题目名称：有效的括号
 * * 题目地址：https://leetcode-cn.com/problems/valid-parentheses
 */

// * 思路：
/**
 * @param {string} s
 * @return {boolean}
 */
// * 方法1：用switch case判断
/* var isValid = function (s) {
  const stack = []
  // 只用一个元素时
  if (s.length === 1 || s.length % 2) return false
  for (const ch of s) {
    switch (ch) {
      case ')':
        if (!stack.length || stack[stack.length - 1] !== '(') return false
        if (stack[stack.length - 1] === '(') stack.pop()
        break
      case ']':
        if (!stack.length || stack[stack.length - 1] !== '[') return false
        if (stack[stack.length - 1] === '[') stack.pop()
        break
      case '}':
        if (!stack.length || stack[stack.length - 1] !== '{') return false
        if (stack[stack.length - 1] === '{') stack.pop()
        break

      default:
        stack.push(ch)
        break
    }
  }
  // console.log(stack)
  return !stack.length
} */

// * 方法2：用哈希表map判断
var isValid = function (s) {
  // s只有一个元素或为奇数时
  if (s.length === 1 || s.length % 2) return false
  const stack = []
  // * 右括号为键，左括号为值
  const pair = new Map([
    [')', '('],
    [']', '['],
    ['}', '{']
  ])
  for (const ch of s) {
    // * has()方法指示具有指定键的元素是否存在，如：pair.has('(')返回false，pair.has(')')返回true
    // * 判断是否为右括号
    if (pair.has(ch)) {
      // * get(key) 方法从 Map 对象返回指定的元素 如：pair.get(')')返回'('
      // * 若栈为空或栈顶元素不是对应的左括号，如当ch为')'栈顶不为'(',则返回false
      if (!stack.length || stack[stack.length - 1] !== pair.get(ch)) return false
      // * 若栈顶为对应的左括号，则出现一对有效括号，故pop出栈顶元素
      stack.pop()
    } else {
      // * 若为左括号，直接压入栈
      stack.push(ch)
    }
  }
  // * 遍历完s,若栈为空表示全部为有效括号，返回true
  return !stack.length
}

// 测试用例
let test = '()'

console.time('执行用时')
console.log(isValid(test))
console.timeEnd('执行用时')
