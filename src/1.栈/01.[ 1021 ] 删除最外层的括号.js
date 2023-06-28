/**
 * * 题目名称：删除最外层的括号
 * * 题目地址：https://leetcode-cn.com/problems/remove-outermost-parentheses
 */
/**
有效括号字符串为空 ""、"(" + A + ")" 或 A + B ，其中 A 和 B 都是有效的括号字符串，+ 代表字符串的连接。

例如，""，"()"，"(())()" 和 "(()(()))" 都是有效的括号字符串。
如果有效字符串 s 非空，且不存在将其拆分为 s = A + B 的方法，我们称其为原语（primitive），其中 A 和 B 都是非空有效括号字符串。

给出一个非空有效字符串 s，考虑将其进行原语化分解，使得：s = P_1 + P_2 + ... + P_k，其中 P_i 是有效括号字符串原语。

对 s 进行原语化分解，删除分解中每个原语字符串的最外层括号，返回 s 。

示例 1：

输入：s = "(()())(())"
输出："()()()"
解释：
输入字符串为 "(()())(())"，原语化分解得到 "(()())" + "(())"，
删除每个部分中的最外层括号后得到 "()()" + "()" = "()()()"。
示例 2：

输入：s = "(()())(())(()(()))"
输出："()()()()(())"
解释：
输入字符串为 "(()())(())(()(()))"，原语化分解得到 "(()())" + "(())" + "(()(()))"，
删除每个部分中的最外层括号后得到 "()()" + "()" + "()(())" = "()()()()(())"。
示例 3：

输入：s = "()()"
输出：""
解释：
输入字符串为 "()()"，原语化分解得到 "()" + "()"，
删除每个部分中的最外层括号后得到 "" + "" = ""。
 

提示：

1 <= s.length <= 105
s[i] 为 '(' 或 ')'
s 是一个有效括号字符串

**/

// * 思路：从头到尾寻找有效括号组合，push 到结果集中
/**
 * @param {string} S
 * @return {string}
 */
// * 原up用栈的方法，内有flat()方法介绍
/* var removeOuterParentheses = function (S) {
  const bracket = { '(': ')' }
  const stack = []
  let res = []
  const result = []
  for (let i = 0; i < S.length; i++) {
    const val = S[i]
    if (bracket[val]) {
      // 左括号
      stack.push(val)
    } else {
      // 右括号
      stack.pop() // 移除最后一个数组元素
    }
    if (stack.length === 0) {
      // 存在一组有效括号
      res.push(val)
      const cur = [...res]
      cur.shift()
      cur.pop()
      result.push(cur)
      res = []
      continue
    }
    res.push(val)
  }
  // * arr.flat()方法嵌套数组转一维数组
  // * flat(n),可传参，参数为指定转换的嵌套层数，如[1,[2,[3,[4,5]]]].flat(2)输出[1,2,3,[4,5]]
  // * 不传即默认为1，即转换1层嵌套层数，如[1,[2,3]].flat()输出[1,2,3]
  // * 参数为Infinity时，表示不管嵌套多少层都转一维数组,如[1,[2,[3,[4,5]]]].flat(Infinity)输出[1,2,3,4,5]
  // * 能自动跳过空位，[1,,[2,,3]].flat()输出[1,2,3]
  return result.flat().join('')
} */

// * 方法1：栈
/**
 * * 思路：遍历s，用一个栈表示括号的深度。遇到'('如栈，遇到')'则将栈顶字符出栈。栈从空到下次空的过程，则是扫描一个原语的过程。
 * * 要求：一个原语去除首尾字符
 * * 因此，遇到'('并将字符放到栈，若栈深度为1，则不将字符放入结果；遇到')'并将栈顶字符出栈后，若栈为空，则不将字符放入结果，其他情况，需将字符放入结果。(为方便理解，没有像官方一样，对代码进行优化，减少判断语句)
 */
/* var removeOuterParentheses = function (s) {
  let res = ''
  const stack = []
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (c === '(') {
      stack.push(c)
      if (stack.length > 1) {
        res += c
      }
    }
    if (c === ')') {
      stack.pop()
      if (stack.length > 0) {
        res += c
      }
    }
  }
  return res
} */

// * 方法2：计数法
/**
 * * 思路：遍历s，用一个数count表示括号的深度。数的初始值为0，遇到'('加1，遇到')'减1。数从0到再次0的过程，是扫描完了一个原语
 * * 要求：一个原语去除首位字符
 * * 因此，当遇到'(',count先加1，加完后若count等于1，表示该'('是一个原语的首字符，则不放入结果，即当count>1放入结果; 当遇到')',count先减1，减完后若count等于0，表示该')'是一个原语的尾字符，则不放入结果，即当count>0放入结果。(和用栈表示括号深度类似)
 */
var removeOuterParentheses = function (s) {
  let count = 0,
    res = ''
  for (let i = 0; i < s.length; i++) {
    // * a=count++ 相当于 a=count；count++; a=++count,相当于 count++;a=count
    if (s[i] === '(' && ++count > 1) res += '('
    if (s[i] === ')' && --count > 0) res += ')'
  }
  return res
}

// 测试用例
let test = '(())(()())'

console.time('执行用时')
console.log(removeOuterParentheses(test))
console.timeEnd('执行用时')
