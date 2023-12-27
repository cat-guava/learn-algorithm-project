/**
 * * 题目名称：使用最小花费爬楼梯
 * * 题目地址：https://leetcode-cn.com/problems/min-cost-climbing-stairs
 */

// * 思路：
/**
 * @param {number[]} cost
 * @return {number}
 */
// * 方法：动态规划
/* var minCostClimbingStairs = function (cost) {
  const n = cost.length
  const dp = [] // dp[i]是到达第i个台阶之前所花费的费用，不包含自身
  dp[0] = dp[1] = 0 // 用0或1个台阶出发开始都是不用花费费用的
  for (let i = 2; i <= n; ++i) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
  }
  return dp[n]
} */

// * 优化
var minCostClimbingStairs = function (cost) {
  const n = cost.length
  for (let i = 2; i < n; i++) {
    cost[i] = Math.min(cost[i - 1] + cost[i], cost[i - 2] + cost[i]) // cost[i]表示到达i台阶的费用包含自身
  }
  return Math.min(cost[n - 1], cost[n - 2]) // 天台自身不要费用，所以+0省略了
}

// 测试用例
let test = [10, 15, 20]

console.time('执行用时')
console.log(minCostClimbingStairs(test))
console.timeEnd('执行用时')
