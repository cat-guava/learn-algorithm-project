/**
 * * 题目名称：最长公共前缀
 * * 题目地址：https://leetcode-cn.com/problems/longest-common-prefix
 */

// * 思路：
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return '' // 其实题目限定了1 <= strs.length <= 200
  if (strs.length === 1) return strs[0]
  // 初始值为首位元素
  let res = strs[0]
  // 遍历strs数组
  for (let i = 1; i < strs.length; i++) {
    // 将j提出来是为了后面substring截取字符串时使用
    let j = 0
    // 依次对比
    while (j < res.length && j < strs[i].length && res.charAt(j) === strs[i].charAt(j)) {
      j++
    }
    res = res.substring(0, j)
    if (res === '') return res // 解决当j为0时substring截取是左闭右开(0,0)虽然为'',但截取不合理的问题
  }
  return res
}

// 测试用例
let test = []

console.time('执行用时')
console.log(longestCommonPrefix(test))
console.timeEnd('执行用时')
