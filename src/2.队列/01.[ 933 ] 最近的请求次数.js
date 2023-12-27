/**
 * * 题目名称：最近的请求次数
 * * 题目地址：https://leetcode-cn.com/problems/number-of-recent-calls
 */

// * 思路：队列，将t压入队列，若队顶元素queue[0]<t-3000,表示不属于最近的请求，弹出队顶元素shift
var RecentCounter = function () {
  this.queue = []
}

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.queue.push(t)
  while (this.queue[0] < t - 3000) {
    this.queue.shift()
  }
  return this.queue.length
}

var obj = new RecentCounter()
var param_1 = obj.ping(1)
// var param_2 = obj.ping(2)
var param_3 = obj.ping(100)
var param_4 = obj.ping(3001)
var param_5 = obj.ping(3002)

// 测试用例
let test = [param_1, param_3, param_4, param_5]

console.time('执行用时')
console.log(test)
console.timeEnd('执行用时')
