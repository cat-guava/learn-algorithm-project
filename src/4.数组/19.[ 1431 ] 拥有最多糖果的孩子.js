/**
 * * 题目名称：拥有最多糖果的孩子
 * * 题目地址：https://leetcode-cn.com/problems/kids-with-the-greatest-number-of-candies
 */

// * 思路：
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
/* var kidsWithCandies = function (candies, extraCandies) {
  // 先找出candies最多糖果数量Math.max(...candies)，其减去额外糖果，得到base
  const base = Math.max(...candies) - extraCandies
  // 遍历数组，若candies[i]>=base，表示有成为最多糖果的基础，得到额外糖果可以成为最多糖的孩子
  const res = []
  for (const ch of candies) {
    res.push(ch >= base ? true : false)
  }
  return res
} */

var kidsWithCandies = function (candies, extraCandies) {
  const max = Math.max(...candies)
  return candies.map(v => v + extraCandies >= max)
}
// 测试用例
let candies = [12, 1, 12],
  extraCandies = 10

console.time('执行用时')
console.log(kidsWithCandies(candies, extraCandies))
console.timeEnd('执行用时')
