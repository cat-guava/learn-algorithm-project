/**
 * * 题目名称：合并排序的数组
 * * 题目地址：https://leetcode-cn.com/problems/sorted-merge-lcci
 */

// * 思路：
/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
// * 方法1：先合并后排序
// * 用shift()合并，用sort()排序
/* var merge = function (A, m, B, n) {
  while (B.length) {
    A[m] = B.shift()
    m++
  }
 A.sort((a, b) => a - b)
} */

// * 用splice合并，用sort()排序
/* var merge = function (A, m, B, n) {
  A.splice(m, n, ...B)
  A.sort((a, b) => a - b)
} */

// * 方法2：双指针
/* var merge = function (A, m, B, n) {
  // 准备2个指针分别指向A、B数组头部
  let pa = 0,
    pb = 0
  // 准备一个长度为m+n的空数组,并用0填充
  const sorted = new Array(m + n).fill(0)
  let cur // 临时变量，用于暂时存放A、B数组中的较大值
  while (pa < m || pb < n) {
    if (pa === m) {
      // pa等于m，即扫描完A数组，将B数组剩余内容添加到sorted内
      cur = B[pb++]
    } else if (pb === n) {
      // pb等于n，即扫描完B数组，将A数组剩余内容添加到sorted内
      cur = A[pa++]
    } else if (A[pa] < B[pb]) {
      cur = A[pa++]
    } else {
      cur = B[pb++]
    }
    sorted[pa + pb - 1] = cur
  }
  // 题目要求不要返回值，就地修改A数组，故用sorted的元素替换A数组内元素
  for (let i = 0; i != m + n; i++) {
    A[i] = sorted[i]
  }
  return A
} */

// * 方法3：逆双指针
var merge = function (A, m, B, n) {
  let pa = m - 1,
    pb = n - 1,
    cur = m + n - 1
  // pb指针从B数组末尾往前扫描
  while (pb >= 0) {
    // 从A数组的末尾往前填入数字，A数组长度为m+n且数组是升序的,故从后往前填，填后面n个元素时不会影响到前面m个元素
    // 若A初始元素未被pa扫描完，即pa>=0;A[pa]大于B[pb],则填入A[pa],否则填入B[pb]
    // 若B数组内元素全部用完，A数组初始元素未用完时，由于A数组前m个元素本身就按升序排序，故直接保存不变，退出循环即可
    A[cur--] = pa >= 0 && B[pb] < A[pa] ? A[pa--] : B[pb--]
  }
}

// 测试用例
let A = [1, 2, 3, 0, 0, 0],
  m = 3,
  B = [2, 5, 6],
  n = 3

console.time('执行用时')
console.log(merge(A, m, B, n))
console.timeEnd('执行用时')
