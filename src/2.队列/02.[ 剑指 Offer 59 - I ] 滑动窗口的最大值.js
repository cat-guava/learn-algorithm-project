/**
 * * 题目名称：滑动窗口的最大值
 * * 题目地址：https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof
 */

// * 思路：初始化一个单调递减队列，用于存放下标，队列内队首对应窗口最大值的下标，剩余是可能为最大值的下标
/* 
滑动窗口的位置                最大值    窗口内下标对应的值
---------------               -----    ------------------
[1  3  -1] -3  5  3  6  7       3      3 -1 (1,2)
 1 [3  -1  -3] 5  3  6  7       3      3 -1 -3 (1,2,3)
 1  3 [-1  -3  5] 3  6  7       5      5   (4)           
 1  3  -1 [-3  5  3] 6  7       5      5 3 (4,5)
 1  3  -1  -3 [5  3  6] 7       6      6   (6)
 1  3  -1  -3  5 [3  6  7]      7      7   (7)
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  // 初始化队列和结果
  const q = []
  // 循环第一个窗口
  for (let i = 0; i < k; i++) {
    // 若队列q不为空且最新的nums[i]比之前压入最大值下标对应的值都大
    while (q.length && nums[i] >= nums[q[q.length - 1]]) q.pop() // 724 2 774
    // 若q为空先压入i，或循环完后压入当前下标，这样能保持队顶始终是最大值的下标
    q.push(i)
  }
  const res = [nums[q[0]]] // 向结果压入第一个窗口的最大值
  // 处理剩余窗口
  for (let i = k; i < nums.length; i++) {
    while (q.length && nums[i] >= nums[q[q.length - 1]]) q.pop()
    q.push(i)
    while (q[0] <= i - k) q.shift()
    res.push(nums[q[0]])
  }
  return res
}

// 测试用例
let test = [1, 3, -1, -3, 5, 3, 6, 7]

console.time('执行用时')
console.log(maxSlidingWindow(test, 3))
console.timeEnd('执行用时')
