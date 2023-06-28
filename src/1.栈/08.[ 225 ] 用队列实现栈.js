/**
 * * 题目名称：用队列实现栈
 * * 题目地址：https://leetcode-cn.com/problems/implement-stack-using-queues
 */

// * 思路：
var MyStack = function () {
  // * 只用一个队列
  this.queueA = [] // 主队列
  // this.queueB = [] // 辅队列
}

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queueA.push(x)
}

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  //  * 用2个队列
  /* while (this.queueA.length > 1) {

    // 将主队列的数据循环移入辅队列，只留最后一个数据
    this.queueB.push(this.queueA.shift())
  }
  let ans = this.queueA.shift()
  while (this.queueB.length) {
    this.queueA.push(this.queueB.shift())
  } */

  // * 只用一个队列
  return this.queueA.splice(-1)[0]
}

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.queueA[this.queueA.length - 1]
}

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  // return !this.queueA.length && !this.queueB.length
  // 只用一个队列
  return !this.queueA.length
}

var obj = new MyStack()
obj.push(1)
obj.push(2)
var param_2 = obj.pop()
console.log(obj.queueA, obj.queueB)
var param_3 = obj.top()
var param_4 = obj.empty()

// 测试用例
let test = [param_2, param_3, param_4]

console.time('执行用时')
console.log(test)
console.timeEnd('执行用时')
