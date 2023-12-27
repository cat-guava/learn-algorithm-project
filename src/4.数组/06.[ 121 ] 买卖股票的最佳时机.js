/**
 * * 题目名称：买卖股票的最佳时机
 * * 题目地址：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock
 */

// * 思路：
/**
 * @param {number[]} prices
 * @return {number}
 */
// * 方法1：暴力  超时
// * 思路：直接双重for循环，找最大利润区间
/* var maxProfit = function (prices) {
  const n = prices.length
  let res = 0
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      res = Math.max(res, prices[j] - prices[i])
    }
  }
  return res
} */

// * 方法2：贪心
// * 思路：遍历数组时，保存当前最小值和当前最大利润
/* var maxProfit = function (prices) {
  const n = prices.length
  let res = 0,
    low = Number.MAX_VALUE
  for (let i = 0; i < n; i++) {
    low = Math.min(low, prices[i]) // 遍历过的左侧最小值
    res = Math.max(res, prices[i] - low) // 遍历过的当前最大利润
  }
  return res
} */

// * 方法3: 动态规划
/* var maxProfit = function (prices) {
  const n = prices.length
  const dp = new Array(n).fill(0).map(v => new Array(2).fill(0))
  dp[0][0] = 0 // 第1天持有现金
  dp[0][1] = -prices[0] // 第一天持有股票，借钱持有故是负的
  for (let i = 1; i < n; i++) {
    // 因为只买卖一次
    // 若第i天选中持有现金：
    // 情况1：昨天（i-1）手里就是现金，持币待购，今天现金和昨天一样dp[i - 1][0]
    // 情况2：昨天手里持有的是之前某天买入的股票，今天将股票换现金dp[i - 1][1] + prices[i]
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    // 若第i天选中持有股票：
    // 情况1：昨天（i-1）手里持有股票，表示已经买过了，只等合适实际卖出，故继承昨天的股票
    // 情况2：昨天持有现金，表示还没买入过，今天要持有股票，就今天借钱买入-prices[i]
    dp[i][1] = Math.max(dp[i - 1][1], -prices[i])
  }
  // 遍历完数组，即股票停牌了，故返回最后一天持有的现金
  // 这里并不表示是最后一天卖出的股票，因为遍历数组时，始终通过Math.math获得决策的最大值
  return dp[n-1][0]
} */

// * 方法4：动态规划优化
// * 因为i天持有现金或股票的利润只和i-1天有关，故用滚动变量优化
var maxProfit = function (prices) {
  const n = prices.length
  let preCash = 0, // 第1天持有现金
    preStock = -prices[0] // 第一天持有股票，借钱持有故是负的
  for (let i = 1; i < n; i++) {
    let cash = Math.max(preCash, preStock + prices[i])
    let stock = Math.max(preStock, -prices[i])
    preCash = cash
    preStock = stock
  }
  return preCash
}
// 测试用例
let prices = [7, 1, 5, 3, 6, 4]

console.time('执行用时')
console.log(maxProfit(prices))
console.timeEnd('执行用时')
