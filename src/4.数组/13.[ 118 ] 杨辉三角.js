/**
 * * 题目名称：杨辉三角
 * * 题目地址：https://leetcode-cn.com/problems/pascals-triangle
 */

// * 思路：

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const ret = []
  for (let i = 0; i < numRows; i++) {
    const row = new Array(i + 1).fill(1)
    for (let j = 1; j < row.length - 1; j++) {
      row[j] = ret[i - 1][j - 1] + ret[i - 1][j]
    }
    ret.push(row)
  }
  return ret
}

// 测试用例
let test = 6

console.time('执行用时')
console.log(generate(test))
console.timeEnd('执行用时')
