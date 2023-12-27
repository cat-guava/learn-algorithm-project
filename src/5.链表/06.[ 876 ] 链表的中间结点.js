/**
 * * 题目名称：链表的中间结点
 * * 题目地址：https://leetcode-cn.com/problems/middle-of-the-linked-list
 */

// * ListNode:链表节点构造函数
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}
// * defaultEquals方法比较两个js对象或值是否相等的,
// * LinkedList类中equalsFn的默认值,也可自行传入
function defaultEquals(a, b) {
  return a === b
}
// * LinkedList 类
class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.equalsFn = equalsFn
    this.count = 0
    this.head = undefined
  }
  // 向链表尾部添加新元素,链表为空,则添加的为第一个元素;不为空,向其追加元素
  push(element) {
    const node = new ListNode(element) // 创建一个节点
    // 保存当前指向链表的变量
    let current
    // 若head的指向为undefined或null,直接将head指向该node
    if (this.head == null) {
      this.head = node
    } else {
      // 第一个元素的引用,即head
      current = this.head
      // 当current.next的指向不是null时,一直遍历链表,直到null
      while (current.next != null) {
        // 获取最后一项
        current = current.next
      }
      // 将其next赋值为新元素,建立连接
      current.next = node
    }
    // 添加完元素,增加链表的长度
    this.count++
  }
  // 获得头节点
  getHead() {
    return this.head
  }
}

// * 方法1:数组
// * 思路：链表不能通过下标访问对应的元素,将链表进行遍历,同时将遍历的元素依次放入数组A中,中间节点在数组的索引为数组长度除以2并向下取整(或用trunc将数字去尾取整)
// * 如果只需要删除小数，请始终使用trunc()或按位运算符,比floor()快
/* var middleNode = function (head) {
  let A = [head]
  // 遍历链表并存入数组A中
  while (A[A.length - 1].next !== null) {
    A.push(A[A.length - 1].next)
    // console.log(A)
  }
  return A[Math.trunc(A.length / 2)]
} */

// * 方法2:单指针法
// * 思路:第一次遍历统计链表的元素个数n,第二次遍历到n/2元素,返回该元素
/* var middleNode = function (head) {
  let n = 1,
    cur = head
  while (cur.next !== null) {
    ++n
    cur = cur.next
  }
  console.log(n)
  let k = 0
  cur = head
  while (k < Math.trunc(n / 2)) {
    ++k
    cur = cur.next
  }
  return cur
} */

// * 方法3: 快慢指针法
// * 思路:slow一次走一步,fast一次两步,fast到达链表末尾时,slow位于中间
var middleNode = function (head) {
  let slow = (fast = head)
  // 为什么要判断fast&&fast.next,不能直接fast.next?
  //  1.如果链表节点数目是偶数，当while循环最后一次进行条件判断时，此时fast已经为NULL，那么fast->next即相当于NULL->next，访问非法内存会出错。 2.由1可知，两个条件缺一不可。 3.同时还要注意，这两个条件的判断顺序也不能更改，即不能先判断fast->next!=NULL，否则当链表节点是偶数时，仍会出现判断while(NULL->next !=空,NULL !=空)的情况导致出错。当while判断这两个条件时，如果已经判断fast!=NULL结果为假，那么会跳过对fast->next!=NULL的判断，不会执行，那么即使是偶数情况也不会出错
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
}

// 测试用例
// 输入head = [1,2,3,4,5,6]
let ST = new LinkedList()
ST.push(1)
ST.push(2)
ST.push(3)
ST.push(4)
ST.push(5)
// ST.push(6)
let head = ST.getHead()
// console.log(head)
console.time('执行用时')
console.log(middleNode(head))
/*输出 ListNode {
  val: 3,
  next: ListNode { val: 4, next: ListNode { val: 5, next: null } }
} */
console.timeEnd('执行用时')
