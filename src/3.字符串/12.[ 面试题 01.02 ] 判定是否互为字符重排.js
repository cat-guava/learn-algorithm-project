/**
 * * 题目名称：判定是否互为字符重排
 * * 题目地址：https://leetcode-cn.com/problems/check-permutation-lcci
 */

// * 思路：
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// * 方法1: API
// * 思路:转换成数组排序后拼接成字符串做比较
/* var CheckPermutation = function (s1, s2) {
  return s1.split('').sort().join('') === s2.split('').sort().join('')
} */

// * 方法2:哈希表
var CheckPermutation = function (s1, s2) {
  const n1 = s1.length,
    n2 = s2.length
  if (n1 !== n2 || (n1 <= 1 && s1 !== s2)) return false
  const l = new Map()
  for (let [i, ch] of Array.from(s1).entries()) {
    // console.log(typeof l.get(s1[i]))
    l.set(s1[i], (l.get(s1[i]) || 0) + 1)
  }
  console.log(l)
  for (let [i, ch] of Array.from(s2).entries()) {
    if (!l.has(ch)) {
      return false
    } else {
      l.set(s2[i], l.get(s2[i]) - 1)
      if (l.get(s2[i]) < 0) return false
    }
  }
  console.log(l)

  // for (let num of l.values()) {
  // if (num !== 0) return false
  // }
  return true
}
// 测试用例
// let s1 =
//     'bkhfhqlayvlhdqmxvnkqvtkojouugfsnwmyoywkilsnubnkvhdbrltuxvoblurpfinpigajttcvkcxlylblcaocsjmwdvwepvnfr',
//   s2 =
//     'mtycyvobjldulmhsuqvtrhqnisjkuxhvaxqkvpbllnkvvakxjbolefpyrtiivvwctunasbbocldflkcknmwgofngorduwlwhyfnp'

let s1 = 'acb',
  s2 = 'abc'
console.time('执行用时')
console.log(CheckPermutation(s1, s2))
console.timeEnd('执行用时')
