/**
 * * 题目名称：化栈为队
 * * 题目地址：https://leetcode-cn.com/problems/implement-queue-using-stacks-lcci
 */

/* 
实现一个MyQueue类，该类用两个栈来实现一个队列。

示例：

MyQueue queue = new MyQueue();

queue.push(1);
queue.push(2);
queue.peek();  // 返回 1
queue.pop();   // 返回 1
queue.empty(); // 返回 false

说明：

你只能使用标准的栈操作 -- 也就是只有 push to top, peek/pop from top, size 和 is empty 操作是合法的。
你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。
假设所有操作都是有效的 （例如，一个空的队列不会调用 pop 或者 peek 操作）。
 */

/**
 * *  思路：栈先进后出，队列先进先出
 * * 准备入队栈和出队栈，将数据先压入入队栈，再倒入出队栈
 * * 队列 push 操作：直接向输入栈里输入
 * * 队列 pop 、peek 操作：如果输出栈为空，就使用栈 pop 操作将输入栈的元素移动到输出栈，由于栈是先进后出，因此输出栈的元素顺序和之前输入栈的顺序相反，此时对输出栈执行对应 pop 、peek 操作就可得正确结果
 * * 队列 empty 操作：如果输入栈和输出栈中都没有元素，就表示队列为空
 */

/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.stackA = []
  this.stackB = []
}

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stackA.push(x)
}

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (!this.stackB.length) {
    /* while (this.stackA.length) {
      this.stackB.push(this.stackA.pop())
    } */
    this.inout()
  }
  return this.stackB.pop()
}

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  // * peek方法是返回队列的第一个元素而不会将其从容器中删除
  if (!this.stackB.length) {
    /* while (this.stackA.length) {
      this.stackB.push(this.stackA.pop())
    } */
    this.inout()
  }
  // * 方法1：用pop和push结合
  /* let out = this.stackB.pop()
  this.stackB.push(out)
  return out */
  // * 方法2：用this.stackB.length-1查询下一个被出队的元素 (和方法1比较耗时和耗内存一样)
  return this.stackB[this.stackB.length - 1]
}

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
// * 队列empty 操作:如果输入栈和输出栈中都没有元素,就表示队列为空
MyQueue.prototype.empty = function () {
  // * 方法1
  // return this.stackA.length || this.stackB.length ? false : true
  // * 方法2 (和方法1比较耗时和耗内存一样)
  return this.stackA.length === 0 && this.stackB.length === 0
}

// * 将入队栈的数据利用while循环倒入出队栈的部分封装成MyQueue的inout方法
// * 抽离封装后，内存消耗少一丢丢
MyQueue.prototype.inout = function () {
  while (this.stackA.length) {
    this.stackB.push(this.stackA.pop())
  }
}

let obj = new MyQueue()
obj.push(1)
obj.push(2)
let param_3 = obj.peek()
let param_2 = obj.pop()
let param_4 = obj.empty()

// 测试用例
let test = [param_2, param_3, param_4]

console.time('执行用时')
console.log(obj.stackA, obj.stackB)
console.log(test)
console.timeEnd('执行用时')
