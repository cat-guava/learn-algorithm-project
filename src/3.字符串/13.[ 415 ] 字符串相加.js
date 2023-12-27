/**
 * * 题目名称：字符串相加
 * * 题目地址：https://leetcode-cn.com/problems/add-strings
 */

// * 方法1: 双指针+短字符串补0+结果:字符串拼接
// * 思路：准备双指针分别从两个字符串末尾往前遍历,定义变量car维护进位。若指针下标小于0则返回0，即对短字符串前面补0。定义变量bit做为两个字符串对位字符相加再加进位的值，若bit大于9，则进1，将bit对10取余拼接到结果res前；遍历完后，若car有值，则拼接到res前
/* var addStrings = function (num1, num2) {
  let point1 = num1.length - 1,
    point2 = num2.length - 1,
    res = ''
  let car = 0 // 进位
  while (point1 >= 0 || point2 >= 0) {
    // let bit = 0
    // if (point1 < 0) {
    //   bit = +num2[point2] + car
    // } else if (point2 < 0) {
    //   bit = +num1[point1] + car
    // } else {
    //   bit = +num1[point1] + +num2[point2] + car
    // }
    // 用指针为负,为短的字符补0优化上面代码
    const x = point1 >= 0 ? +num1[point1] : 0
    const y = point2 >= 0 ? +num2[point2] : 0
    let bit = x + y + car
    car = bit > 9 ? 1 : 0
    res = (bit % 10) + res
    point1--
    point2--
  }
  // 当循环完后,若car有值,则直接拼接到res前
  if (car === 1) res = car + res
  return res
} */

// * 方法2：双指针+短字符补0+结果：数组
var addStrings = function (num1, num2) {
  let i = num1.length - 1,
    j = num2.length - 1,
    add = 0
  const ans = []
  while (i >= 0 || j >= 0 || add !== 0) {
    const x = i >= 0 ? +num1[i] : 0
    const y = j >= 0 ? +num2[j] : 0
    const result = x + y + add
    ans.push(result % 10)
    add = Math.trunc(result / 10)
    i -= 1
    j -= 1
  }
  return ans.reverse().join('')
}
// 测试用例
let num1 = '1',
  num2 = '9'

console.time('执行用时')
console.log(addStrings(num1, num2))
console.timeEnd('执行用时')
