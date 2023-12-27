/**
 * * 题目名称：删除排序数组中的重复项
 * * 题目地址：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array
 */

// * 思路：
/**
 * @param {number[]} nums
 * @return {number}
 */
// * 思路发现不同直接将后面的覆盖到指定位置
/* var removeDuplicates = function (nums) {
  let t = 0
  for (let i = 0, len = nums.length; i < len; i++) {
    if (i == 0 || nums[i] !== nums[i - 1]) nums[t++] = nums[i]
  }
  console.log(nums) // [ 1, 2, 2 ]
  return t
} */

// * 快慢指针
var removeDuplicates = function (nums) {
  const n = nums.length
  if (n === 0) return 0
  let fast = (slow = 1)
  while (fast < n) {
    if (nums[fast] !== nums[fast - 1]) {
      nums[slow] = nums[fast]
      slow++
    }
    fast++
  }
  console.log(nums)
  return slow
}

// 测试用例
let test = [1, 1, 2]

console.time('执行用时')
console.log(removeDuplicates(test))
console.timeEnd('执行用时')
