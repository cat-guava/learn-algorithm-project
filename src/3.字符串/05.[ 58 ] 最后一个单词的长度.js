/**
 * * 题目名称：最后一个单词的长度
 * * 题目地址：https://leetcode-cn.com/problems/length-of-last-word
 */
// * 双指针
// * 思路：
/**
 * @param {string} s
 * @return {number}
 */
/* var lengthOfLastWord = function (s) {
  let right = s.length - 1,
    left = s.length - 1
  for (let i = s.length - 1; i >= 0; i--) {
    while (left >= 0) {
      while (left >= 0 && s[left] !== ' ') {
        right--
        // 当只有一个单词时
        if (right < 0) return left - right
        if (right >= 0 && s[right] === ' ') return left - right
      }
      left--
      right = left
    }
  }
} */

// * 方法2：反向遍历（官方方法）
var lengthOfLastWord = function (s) {
  let index = s.length - 1
  // 先找到最后的字母
  while (s[index] === ' ') {
    index--
  }
  let wordLength = 0
  // 再遍历最后单词长度
  while (index >= 0 && s[index] !== ' ') {
    wordLength++
    index--
  }
  return wordLength
}

// 测试用例
let test = 'fly  ooos'

console.time('执行用时')
console.log(lengthOfLastWord(test))
console.timeEnd('执行用时')
