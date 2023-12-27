/**
 * * 题目名称：栈的最小值
 * * 题目地址：https://leetcode-cn.com/problems/min-stack-lcci
 */

// * 思路：用一个辅助栈存放最小值
/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = []
  // this.min_stack = [Infinity] // 先在min_stack存入无限大Infinity
  // * 还有一个种方法不用辅助栈，而用一个辅助变量this.min=Infinity
  this.min = Infinity
}

/**
 * @param {number} x
 * @return {void}
 */
/* MinStack.prototype.push = function (x) {
  this.stack.push(x)
  // 压入x时，比较x和辅助栈最后一个元素进行比较，向辅助栈压入比较小的数据,故辅助栈栈顶元素始终是当前主栈的最小值
  this.min_stack.push(Math.min(this.min_stack[this.min_stack.length - 1], x))
} */

// * 单栈方法
MinStack.prototype.push = function (x) {
  // 当压栈的值小于栈中最小值时，先把最小值入栈，然后再把需要压栈的值入栈，最后再更新栈中最小值。如果压栈的值大于栈中最小值的时候，直接压栈
  if (this.min >= x) {
    this.stack.push(this.min) // 最小值 //  max-20-2-3
    this.min = x
  }
  this.stack.push(x) // 需要压入的值
}

/**
 * @return {void}
 */
/* MinStack.prototype.pop = function () {
  this.stack.pop()
  this.min_stack.pop()
} */
// * 单栈方法
MinStack.prototype.pop = function () {
  if (this.stack.pop() <= this.min) {
    this.min = this.stack.pop() // max-20-2-3
  }
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
  // return this.min_stack[this.min_stack.length - 1]
  return this.min
}

var obj = new MinStack()
obj.push(-2)
obj.push(0)
obj.push(-3)
var param_3 = obj.getMin()
obj.pop()
var param_4 = obj.top()
var param_5 = obj.getMin()
console.log(obj.stack, obj.min)
obj.pop()
console.log(obj.stack, obj.min)
obj.pop()
// console.log(obj.stack, obj.min_stack)
var param_6 = obj.top()
var param_7 = obj.getMin()

// 测试用例
let test = [param_3, param_4, param_5, param_6, param_7]

console.time('执行用时')
console.log(test)
console.timeEnd('执行用时')
