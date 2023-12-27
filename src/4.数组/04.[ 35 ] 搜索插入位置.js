/**
 * * 题目名称：搜索插入位置
 * * 题目地址：https://leetcode-cn.com/problems/search-insert-position
 */

// * 思路：
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/* var searchInsert = function (nums, target) {
  const n = nums.length
  // [1] 0 的情况
  if (target <= nums[0]) return 0
  for (let i = 0; i < n - 1; i++) {
    // [1,2,3] 2 的情况
    if (nums[i] == target) return i
    // [1,3,4] 2 的情况
    if (nums[i] < target && target < nums[i + 1]) return i + 1
  }
  // [1,3] 3 的情况
  if (nums[n - 1] === target) return n - 1
  // [1,3] 5 的情况
  if (nums[n - 1] < target) return n
} */
// * 方法1：暴力法 时间复杂度O(n)
/* var searchInsert = function (nums, target) {
  const n = nums.length
  for (let i = 0; i < n; i++) {
    if (nums[i] >= target) return i
  }
  return n
} */

// * 方法2：二分法 时间复杂度O(logn)
var searchInsert = function (nums, target) {
  const n = nums.length
  let left = 0,
    right = n - 1
  while (left <= right) {
    let mid = ((right - left) >> 1) + left // (3-0)>>1 是3除以2向下取整为1
    if (target > nums[mid]) {
      left = mid + 1
    } else {
      right = mid - 1
    }
    console.log(left, mid, right)
  }
  return left
}

// 测试用例
let nums = [1, 2, 3, 4],
  target = 3

console.time('执行用时')
console.log(searchInsert(nums, target))
console.timeEnd('执行用时')
