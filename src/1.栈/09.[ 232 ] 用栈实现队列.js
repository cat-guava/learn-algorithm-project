/**
 * * 题目名称：用栈实现队列
 * * 题目地址：https://leetcode-cn.com/problems/implement-queue-using-stacks
 */

// * 思路：
var MyQueue = function () {
  this.inStack = []
  this.outStack = []
}

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.inStack.push(x)
}

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (!this.outStack.length) this.inOut()
  return this.outStack.pop()
}

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (!this.outStack.length) this.inOut()
  return this.outStack[this.outStack.length - 1]
}

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !this.inStack.length && !this.outStack.length
}

MyQueue.prototype.inOut = function () {
  while (this.inStack.length) {
    this.outStack.push(this.inStack.pop())
  }
}

var obj = new MyQueue()
obj.push(1)
obj.push(2)
var param_3 = obj.peek()
var param_2 = obj.pop()
var param_4 = obj.empty()
// 测试用例
let test = [param_2, param_3, param_4]

console.time('执行用时')
console.log(test)
console.timeEnd('执行用时')
