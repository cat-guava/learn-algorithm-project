/**
 * * 题目名称：合并两个有序链表
 * * 题目地址：https://leetcode-cn.com/problems/merge-two-sorted-lists
 */

// * 思路：
function ListNode (val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// * 迭代
// var mergeTwoLists = function (list1, list2) {
//   const preHead = new ListNode(-1)
//   let prev = preHead
//   while (list1 && list2) {
//     if (list1.val <= list2.val) {
//       prev.next = list1
//       list1 = list1.next
//     } else {
//       prev.next = list2
//       list2 = list2.next
//     }
//     prev = prev.next
//   }
//   prev.next = list1 === null ? list2 : list1
//   return preHead.next
// };

// * 递归
var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2
  if (!list2) return list1
  if (list1.val <= list2.val) {
    list1.next = mergeTwoLists(list1.next, list2)
    return list1
  } else {
    list2.next = mergeTwoLists(list1, list2.next)
    return list2
  }
}

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');