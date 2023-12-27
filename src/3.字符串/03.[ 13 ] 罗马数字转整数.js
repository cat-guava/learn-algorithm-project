/**
 * * 题目名称：罗马数字转整数
 * * 题目地址：https://leetcode-cn.com/problems/roman-to-integer
 */

// * 思路：
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let res = 0,
    preNum = isValue(s.charAt(0))
  for (let i = 1; i < s.length; i++) {
    let num = isValue(s.charAt(i))
    // 小值在大值前面，则减法，否则加法
    preNum < num ? (res -= preNum) : (res += preNum)
    preNum = num
  }
  res += preNum // 加最后一个数
  return res
}

// * 逆向思维
/* var romanToInt = function (s) {
  let res = 0,
    highNum = 1 // 当前最大的数
  // 从右往左遍历遇到大的就加，遇到小的就减
  for (let i = s.length - 1; i >= 0; i--) {
    let num = isValue(s.charAt(i))
    if (num >= highNum) {
      res += num
      highNum = num
    } else {
      res -= num
    }
  }
  return res
} */

// 数据量小时，switch比hashMap耗时少
let isValue = function (key) {
  switch (key) {
    case 'I':
      return 1
    case 'V':
      return 5
    case 'X':
      return 10
    case 'L':
      return 50
    case 'C':
      return 100
    case 'D':
      return 500
    case 'M':
      return 1000
    default:
      return 0
  }
}

// 测试用例
let test = 'DIX'

console.time('执行用时')
console.log(romanToInt(test))
console.timeEnd('执行用时')
