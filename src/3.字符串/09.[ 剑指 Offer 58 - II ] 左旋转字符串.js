/**
 * * 题目名称：左旋转字符串
 * * 题目地址：https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof
 */

// * 思路：
/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
/* var reverseLeftWords = function (s, n) {
  const res = s.split('')
  while (n) {
    res.push(res.shift())
    n--
  }
  return res.join('')
} */
// * 方法2:用slice
var reverseLeftWords = function (s, n) {
  return s.slice(n) + s.slice(0, n)
}

// 测试用例
let test = ' a',
  k = 6

console.time('执行用时')
console.log(reverseLeftWords(test, k))
console.timeEnd('执行用时')
