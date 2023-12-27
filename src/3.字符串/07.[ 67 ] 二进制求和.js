/**
 * * 题目名称：二进制求和
 * * 题目地址：https://leetcode-cn.com/problems/add-binary
 */

// * 思路：

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// * 会报错，精度不够，超过 2^53 - 1的整数会报错
/* var addBinary = function (a, b) {
  // 二进制转十进制：parseInt(string, 2) 十进制转二进制：字符串.toString(2)
  const num = parseInt(a, 2) + parseInt(b, 2)
  // console.log(num)
  return num.toString(2)
} */

// * 方法1：用JS的AIP：BigInt
// * 字符串前加'0b'二进制，'0o'八进制，'0x'十六进制
/* var addBinary = function (a, b) {
  return (BigInt('0b' + a) + BigInt('0b' + b)).toString(2)
} */

// * 方法2：双指针+模拟进位
// * 思路：前面补0补成相同长度，从末尾遍历进行相加
var addBinary = function (a, b) {
  let pointA = a.length - 1 // 从a末尾遍历的指针
  let pointB = b.length - 1 // 从b末尾遍历的指针
  let res = '',
    car = 0 // res表示输出结果，car表示是否进位
  while (a[pointA] || b[pointB]) {
    // 两元素值存在则与进位遍历相加
    if (a[pointA]) car += a[pointA] * 1
    if (b[pointB]) car += b[pointB] * 1
    res = (car % 2) + res // 相加后的和对2取余并拼接到结果前
    car = Math.floor(car / 2) // 相加后的和除以2向下取整为进位数
    pointA--
    pointB--
  }
  // 最后若还存在进位，则在结果前拼接'1'
  if (car !== 0) res = '1' + res
  return res
}

// 测试用例
// let test = ''

console.time('执行用时')
console.log(addBinary('1010', '1011'))
console.timeEnd('执行用时')
