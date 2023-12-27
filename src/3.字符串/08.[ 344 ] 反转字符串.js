/**
 * * 题目名称：反转字符串
 * * 题目地址：https://leetcode-cn.com/problems/reverse-string
 */

// * 思路：
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
/* var reverseString = function (s) {
  const len = s.length
  let point = len - 1
  while (s[point]) {
    s.push(s[point])
    point--
  }
  s.splice(0, len)
  return s
} */

// * 方法2：双指针
var reverseString = function (s) {
  const n = s.length
  for (let left = 0, right = n - 1; left < right; ++left, --right) {
    // 方法1：解构赋值
    ;[s[left], s[right]] = [s[right], s[left]]
    // 方法2：用temp临时变量交换数组内两个元素
    /* let temp = s[left]
    s[left] = s[right]
    s[right] = temp */
  }
  return s
}

// 测试用例
let test = ['h', 'e', 'l', 'l', 'o']
// let a = 'h',
//   b = 'o'
// ;[a, b] = [b, a]
// console.log(a, b) // 'o' 'h'

console.time('执行用时')
console.log(reverseString(test))
console.timeEnd('执行用时')
