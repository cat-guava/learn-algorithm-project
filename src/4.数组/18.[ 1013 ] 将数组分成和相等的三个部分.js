/**
 * * 题目名称：将数组分成和相等的三个部分
 * * 题目地址：https://leetcode-cn.com/problems/partition-array-into-three-parts-with-equal-sum
 */

// * 思路：
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function (arr) {
  const n = arr.length
  let sum = 0
  // 求出arr元素和
  for (const ch of arr) {
    sum += ch
  }
  // 判断数组元素和是否能被3整除，不能的直接返回false
  if (sum % 3 !== 0) return false
  let average = sum / 3, // 和分成3份的平均数
    prev = 0, // 用于数组元素累加
    count = 0 // 记录prev与average相等的次数
  for (const ch of arr) {
    prev += ch
    if (prev === average) {
      prev = 0 // 清空prev值
      count += 1
    }
    // if (count === 3) return true
    if (count === 2) return true // arr元素和能被3整除，所以找到2个，剩下就是第3个
    //  若count >3则只有sum==0时的情况，同样找到2段合为0，后面部分和肯定为0，肯定能分成3段
  }
  return false
}

// 测试用例
let test = ''

console.time('执行用时')
console.log(xxx(test))
console.timeEnd('执行用时')
