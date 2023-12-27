/**
 * * 题目名称：整理字符串
 * * 题目地址：https://leetcode-cn.com/problems/make-the-string-great
 */

// * 思路：
/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  const len = s.length
  const ret = []
  let i = 0
  while (i < len) {
    if (
      ret.length > 0 &&
      ret[ret.length - 1].toLowerCase() === s.charAt(i).toLowerCase() &&
      ret[ret.length - 1] !== s.charAt(i)
    ) {
      ret.pop()
    } else {
      ret.push(s.charAt(i))
    }
    i += 1
  }
  return ret.join('')
}

// 测试用例
let test = 'abBAcC'

console.time('执行用时')
console.log(makeGood(test))
console.timeEnd('执行用时')
