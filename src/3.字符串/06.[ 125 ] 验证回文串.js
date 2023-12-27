/**
 * * 题目名称：验证回文串
 * * 题目地址：https://leetcode-cn.com/problems/valid-palindrome
 */

// * 思路：
/**
 * @param {string} s
 * @return {boolean}
 */
// * 方法一：正则+双指针
/* var isPalindrome = function (s) {
  // * 用正则去除字符串非字母数字字符，再转换成小写
  const reg = /[^A-Za-z0-9]/g
  s = s.replace(reg, '').toLowerCase()
  let left = 0,
    right = s.length - 1
  // left和right指针分别指向字符串两端，相向移动，每移动一步，判断所指字符是否相同，当两指针相遇说明是回文串
  while (left < right) {
    if (s[left] !== s[right]) return false
    left++
    right--
  }
  return true
} */

// * 方法二：正则+reverse
var isPalindrome = function (s) {
  // * 用正则去除字符串非字母数字字符，再转换成小写
  const reg = /[^A-Za-z0-9]/g
  s = s.replace(reg, '').toLowerCase()
  return s === [...s].reverse().join('')
}

// 测试用例
let test = 'asa'

console.time('执行用时')
console.log(isPalindrome(test))
console.timeEnd('执行用时')
