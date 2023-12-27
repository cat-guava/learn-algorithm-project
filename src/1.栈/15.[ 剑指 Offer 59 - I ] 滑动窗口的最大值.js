/**
 * * 题目名称：滑动窗口的最大值
 * * 题目地址：https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof
 */

// * 思路：依次将数组的下标push到window中，超出窗口的shift掉，window是一个单递减队列，对头元素是当前窗口的最大值
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
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
/* var maxSlidingWindow = function (nums, k) {
  const res = [],
    window = []
  // 当窗口长度不大于1或nums为空时，直接返回nums
  if (k <= 1 || !nums.length) return nums
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i] // 当前元素
    if (window[0] <= i - k) window.shift()
    while (window.length && nums[window[window.length - 1]] < num) {
      window.pop()
    }
    window.push(i)
    res.push(nums[window[0]]) // 7 7 4
  }
  // console.log(res)
  return res.slice(k - 1)
} */

// *  另一种
var maxSlidingWindow = function (nums, k) {
  const n = nums.length,
    q = []
  for (let i = 0; i < k; i++) {
    while (q.length && nums[i] >= nums[q[q.length - 1]]) q.pop()
    q.push(i)
  }
  const ans = [nums[q[0]]]
  for (let i = k; i < n; i++) {
    while (q.length && nums[i] >= nums[q[q.length - 1]]) q.pop()
    q.push(i)
    while (q[0] <= i - k) q.shift()
    ans.push(nums[q[0]])
  }
  return ans
}

// 测试用例
let nums = [1, 3, -1, -3, 5, 3, 6, 7]
let k = 3

console.time('执行用时')
console.log(maxSlidingWindow(nums, k))
console.timeEnd('执行用时')
