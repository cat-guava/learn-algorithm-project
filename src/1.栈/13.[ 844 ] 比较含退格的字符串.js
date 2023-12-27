/**
 * * 题目名称：比较含退格的字符串
 * * 题目地址：https://leetcode-cn.com/problems/backspace-string-compare
 */

// * 方法1：栈
// * 思路：栈
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/* var backspaceCompare = function (s, t) {
  return getFinalStr(s) === getFinalStr(t)
}
var getFinalStr = function (str) {
  let stack = []
  for (const ch of str) {
    switch (ch) {
      case '#':
        stack.pop()
        break

      default:
        stack.push(ch)
        break
    }
  }
  console.log(str, stack.join(''))
  return stack.join('')
} */

// * 方法2：双指针法
// * 思路：由于 # 号只会消除左边的一个字符，所以对右边的字符无影响，所以我们选择从后往前遍历 S，T 字符串。
// * 准备2个指针i和j，分别指向S和T末尾的字符，在准备两个变量skipS和skipT分别存放S、T字符串中#的数量
// * 从后往前遍历S，所遇有三种情况：遇到当前字符为#，则skip自增1；当前字符不为#，且skip>0,则skip自减1；当前字符不为#，且skip=0，表示当前字符不会被消除，将其与T中当前字符进行比较
// * 若S与T当前字符不匹配，则遍历结束，返回false，若遍历结束，都能匹配，返回true
var backspaceCompare = function (s, t) {
  let i = s.length - 1,
    j = t.length - 1,
    skipS = 0,
    skipT = 0
  while (i >= 0 || j >= 0) {
    // 遍历S
    while (i >= 0) {
      if (s[i] === '#') {
        skipS++
        i--
      } else if (skipS > 0) {
        skipS--
        i--
      } else break
    }
    // 遍历T
    while (j >= 0) {
      if (t[j] === '#') {
        skipT++
        j--
      } else if (skipT > 0) {
        skipT--
        j--
      } else break
    }
    if (s[i] !== t[j]) return false
    i--
    j--
  }
  return true // 循环完表示完全相等
}

// 测试用例
// let test = ''
let s = 'ab#c'
let t = 'ad#c'

console.time('执行用时')
console.log(backspaceCompare(s, t))
console.timeEnd('执行用时')
