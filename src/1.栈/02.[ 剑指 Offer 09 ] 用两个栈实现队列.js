/**
 * * 题目名称：用两个栈实现队列
 * * 题目地址：https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof
 */

/* 
用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )

示例 1：

输入：
["CQueue","appendTail","deleteHead","deleteHead","deleteHead"]
[[],[3],[],[],[]]
输出：[null,null,3,-1,-1]
示例 2：

输入：
["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
[[],[],[5],[2],[],[]]
输出：[null,-1,null,null,5,2]
提示：

1 <= values <= 10000
最多会对 appendTail、deleteHead 进行 10000 次调用
*/
/**
 * * 思路：栈和队列的特性，栈是先进后出，队列是先进先出。
 * *准备入队栈A，出队栈B，如一组数[1,2,3,4],入队时先直接压入入队栈A[1,2,3,4],出队时；出队栈B没有数据则，先将入队栈A数据依次倒入B（操作：push(A.pop())）后出队栈B[4,3,2,1],然后再输出B.pop()；出队栈B有数据，则直接输出。如此，则用两个栈实现了先进先出
 */

var CQueue = function () {
  this.stackA = [] // 入队栈
  this.stackB = [] // 出对栈
}

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.stackA.push(value)
}

/**
 * @return {number}
 */
/* CQueue.prototype.deleteHead = function () {
  if (this.stackB.length) {
    return this.stackB.pop()
  } else {
    while (this.stackA.length) {
      this.stackB.push(this.stackA.pop())
    }
    if (!this.stackB.length) {
      return -1
    } else {
      return this.stackB.pop()
    }
  }
} */
// * deleteHead函数用一点递归
CQueue.prototype.deleteHead = function () {
  if (this.stackB.length) {
    return this.stackB.pop()
  } else if (!this.stackA.length) {
    return -1
  } else {
    while (this.stackA.length) {
      this.stackB.push(this.stackA.pop())
    }
    return this.deleteHead()
  }
}

// 测试用例
let obj = new CQueue()
let a = obj.appendTail(3)
let b = obj.deleteHead()
let c = obj.deleteHead()
let d = obj.deleteHead()

console.log(obj.stackA, obj.stackB)
let test = [a, b, c, d]

console.time('执行用时')
console.log(test)
console.timeEnd('执行用时')
