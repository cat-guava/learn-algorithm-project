/**
 * * 题目名称：反转链表
 * * 题目地址：https://leetcode-cn.com/problems/reverse-linked-list
 */

// * 思路：


// Definition for singly-linked list.
function ListNode (val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
// 实现一个单链表
class SingleLinkedList {
  constructor() {
    this.head = null
  }
  // 链尾添加节点
  add (val) {
    let node = new ListNode(val)
    if (this.head === null) {
      this.head = node
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
  }
  getHead () {
    return this.head
  }
}
// * 方法1：数组
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var reverseList = function (head) {
//   if (head === null || head.next === null) return head
//   // 遍历链表存入数组A中
//   const A = [head]
//   while (A[A.length - 1].next !== null) {
//     A.push(A[A.length - 1].next)
//   }
//   let resNode = null
//   while (A.length >= 2) {
//     A[A.length - 1].next = A[A.length - 2]
//     if (!resNode) {
//       resNode = A.pop()
//     } else {
//       A.pop()
//     }
//   }
//   A.pop().next = null
//   return resNode
// };

// * 方法2 迭代 时O(n)空O(1)
// * 思路：pre上一个节点，current当前节点，next下一个节点。遍历链表，存储好next后，将current的next指向pre上一个节点后，当前current赋值给pre，next赋值给current；最后current=next=null退出循环,pre为反转链表的头节点
// var reverseList = function (head) {
//   let pre = null
//   let current = head
//   while (current) {
//     const next = current.next
//     current.next = pre
//     pre = current
//     current = next
//   }
//   return pre
// };

// * 方法2：递归 时O(n)空O(n)
// 使用递归函数一直递归到链表最后一个节点，记为newHead反转后的头节点
// [1,2,3,4] 3.next.next即4 ===null返回4，4为新头节点；让4指向3，即3.next.next=3,同时3.next=null，则2.next.next 即3===null，返回3，3指向2，2.next=null;1.next.next即2===null返回2，2指向1，1.next=null；递归完成
// var reverseList = function (head) {
//   // 链表没有节点[]或只有一个头节点[1],直接返回head
//   if (head === null || head.next === null) return head
//   const newHead = reverseList(head.next)
//   head.next.next = head
//   head.next = null
//   return newHead
// };

// * 另一种递归
//[1,2,3] 遍历链表，先t=head.next.next存入3，head.next.next=cur将2指向1；cur=head.next存入2；head.next让1指向3
var reverseList = function (head) {
  if (head === null) return null
  let cur = head
  while (head.next) {
    let t = head.next.next
    head.next.next = cur
    cur = head.next
    head.next = t
  }
  return cur
}

// 测试用例
let ST = new SingleLinkedList()
ST.add(1)
ST.add(2)
// ST.add(3)
// ST.add(4)
// ST.add(5)
let head = ST.getHead()
console.time('执行用时');
// console.dir(ST, { depth: null });
// console.dir(head, { depth: null });
console.dir(reverseList(head), { depth: null });
console.timeEnd('执行用时');