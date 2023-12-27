/**
 * * 题目名称：最小栈
 * * 题目地址：https://leetcode-cn.com/problems/min-stack
 */

// * 思路：一个栈内压入数据时，辅助栈内压入当前最小值
var MinStack = function () {
  this.stack = []
  this.min_stack = [Infinity]
}

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val)
  this.min_stack.push(Math.min(this.min_stack[this.min_stack.length - 1], val))
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop()
  this.min_stack.pop()
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min_stack[this.min_stack.length - 1]
}

var obj = new MinStack()
obj.push(-2)
obj.push(0)
obj.push(-3)
var param_2 = obj.getMin()
obj.pop()
var param_3 = obj.top()
var param_4 = obj.getMin()

// 测试用例
let test = [param_2, param_3, param_4]

console.time('执行用时')
console.log(test)
console.timeEnd('执行用时')
