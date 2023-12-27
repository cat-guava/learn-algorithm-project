/**
 * * 题目名称：字符串压缩
 * * 题目地址：https://leetcode-cn.com/problems/compress-string-lcci
 */

// * 思路：
/**
 * @param {string} S
 * @return {string}
 */
// * 方法1：双指针
/* var compressString = function (S) {
  const n = S.length
  // 若S长度不大于2时，直接返回原字符串，
  // 如：'aa'转为'a2','ab'转为'a1b1'，“压缩”后都没有变短
  if (n <= 2) return S
  let left = 0,
    right = 0,
    out = ''
  while (right < n) {
    while (right < n && S[left] === S[right]) {
      right++
    }
    out += S[left] + (right - left)
    left = right
  }
  if (out.length >= n) return S
  return out
} */

// * 方法2：模拟  耗时耗内存更少
/* var compressString = function (S) {
  const n = S.length
  // 若S长度不大于2时，直接返回原字符串，
  // 如：'aa'转为'a2','ab'转为'a1b1'，“压缩”后都没有变短
  if (n <= 2) return S
  let char = S[0], // 当前指针所指元素
    count = 1, // 指针所指元素出现的次数
    out = '' // 结果
  for (let i = 1; i < n; i++) {
    if (S[i] === char) {
      count++
    } else {
      out += char + count
      char = S[i]
      count = 1
    }
  }
  out += char + count // 拼接最后一个字符
  return out.length >= n ? S : out
} */
// * 模拟的方法用一个while实现 速度不如for快
var compressString = function (S) {
  const n = S.length
  if (n <= 2) return S
  let index = 0,
    count = 1, // 指针所指元素出现的次数
    out = '' // 结果
  while (index < n - 1) {
    // 当前字符与下一个不同时，拼接字符+数量
    if (S[index] !== S[index + 1]) {
      out += S[index] + count
      count = 1 // 重置计算
    } else {
      count++
    }
    index++
  }
  out += S[n - 1] + count // 拼接最后一个字符
  return out.length >= n ? S : out
}

// 测试用例
let test = 'a'

console.time('执行用时')
console.log(compressString(test))
console.timeEnd('执行用时')
