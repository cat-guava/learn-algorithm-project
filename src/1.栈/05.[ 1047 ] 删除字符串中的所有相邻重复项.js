/**
 * * 题目名称：删除字符串中的所有相邻重复项
 * * 题目地址：https://leetcode-cn.com/problems/remove-all-adjacent-duplicates-in-string
 */

/* 
给出由小写字母组成的字符串 S，重复项删除操作会选择两个相邻且相同的字母，并删除它们。
在 S 上反复执行重复项删除操作，直到无法继续删除。
在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。

示例：
输入："abbaca"
输出："ca"
解释：
例如，在 "abbaca" 中，我们可以删除 "bb" 由于两字母相邻且相同，这是此时唯一可以执行删除操作的重复项。之后我们得到字符串 "aaca"，其中又只有 "aa" 可以执行重复项删除操作，所以最后的字符串为 "ca"。

提示：
1 <= S.length <= 20000
S 仅由小写英文字母组成。
 */

/**
 * * 思路：利用栈和数组的lastIndexOf方法
 * * 遍历s，用lastIndexOf判断元素s[i]在stack内是否存在，不存在则直接push；存在则判断s[i]的最后一个索引是否等于栈内最后一个元素的索引，若相等则pop出栈的最后一个元素，若不相等则push
 */
/**
 * @param {string} s
 * @return {string}
 */
/* var removeDuplicates = function (s) {
  let stack = []
  for (let i = 0; i < s.length; i++) {
    // 查询stack内是否有一样的元素
    let a = s[i]
    if (stack.lastIndexOf(a) === -1) {
      // 没有直接push
      stack.push(a) //  abbbabaaa
    } else {
      // 有则返回索引，若索引为上一个加入的元素，即i-1,则pop()上一个元素
      if (stack.lastIndexOf(a) === stack.length - 1) {
        stack.pop()
      } else {
        stack.push(a)
      }
    }
  }
  return stack.join('')
} */

// * 方法2：栈
/* var removeDuplicates = function (s) {
  let stack = []
  for (let i = 0; i < s.length; i++) {
    stack.push(s[i])
    if (i>0&&s[i]===stack[stack.length-2]) {
        stack.pop()
        stack.pop()
    }
  }
  return stack.join('')
} */

// * 优化
var removeDuplicates = function (s) {
  let stack = []
  for (const ch of s) {
    if (stack.length && stack[stack.length - 1] === ch) {
      stack.pop()
    } else {
      stack.push(ch)
    }
  }
  return stack.join('')
}

// 测试用例
let test = 'abbbabaaa'

console.time('执行用时')
console.log(removeDuplicates(test))
console.timeEnd('执行用时')
