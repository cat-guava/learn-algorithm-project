/**
 * * 题目名称：外观数列
 * * 题目地址：https://leetcode-cn.com/problems/count-and-say
 */

// * 方法1：递归+双指针
// * 核心思路：创建慢指针left和快指针right来确定每个字符的重复数量
/**
 * * 具体思路：
 * * 1.当left和right所指字符相同时，right向右移动1位，直到，right和left所指不同
 * * 2.确定相同字符的个数，即right-left的值，该值表示left所指值的个数
 * * 3.将结果以字符形式存储
 * * 4.继续遍历，因left和right之间的字符已遍历过了，故更新left指针至right
 * * 5.当right超出字符范围时，结束循环
 */
/**
 * @param {number} n // 1 <= n <= 30
 * @return {string}
 */

/* var countAndSay = function (n) {
  if (n === 1) return '1'
  // 用递归的方式，获取上一个字符
  let pre = countAndSay(n - 1)
  let result = '',
    left = 0,
    right = 0
  while (right < pre.length) {
    while (pre[left] === pre[right] && right < pre.length) {
      right++
    }
    result += (right - left).toString() + pre[left]
    left = right
  }
  return result
} */

// * 方法2：滚动数组
// * 思路：f(n)总与f(n-1)相关，用pre代替f(n-1)，用cur代替f(n),动态更新pre和cur
var countAndSay = function (n) {
  let pre = '1',
    cur = '1'
  for (let i = 1; i < n; i++) {
    pre = cur
    cur = ''
    let right = 0,
      left = 0
    while (right < pre.length) {
      while (right < pre.length && pre[left] === pre[right]) {
        right++
      }
      cur += (right - left).toString() + pre[left]
      left = right
    }
  }
  return cur
}

// 测试用例
let test = 4

console.time('执行用时')
console.log(countAndSay(test))
console.timeEnd('执行用时')
