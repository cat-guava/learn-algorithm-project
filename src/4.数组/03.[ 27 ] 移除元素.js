/**
 * * 题目名称：移除元素
 * * 题目地址：https://leetcode-cn.com/problems/remove-element
 */

// * 思路：
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// * 方法1：通用方法和26题类似，遍历数组，根据条件覆盖原有元素
/* var removeElement = function (nums, val) {
  let t = 0
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] !== val)nums[t++] = nums[i]
    // console.log(nums)
  }
  return t
} */

// * 方法2：双指针：快慢指针
/* var removeElement = function (nums, val) {
  const n = nums.length
  let slow = (fast = 0)
  while (fast < n) {
    if (nums[fast] !== val) {
      nums[slow] = nums[fast]
      slow++
    }
    fast++
  }
  console.log(nums)
  return slow
} */

// * 方法3：双指针优化，从首尾遍历
var removeElement = function (nums, val) {
  let left = 0,
    right = nums.length
  while (left < right) {
    if (nums[left] === val) {
      // 将右侧指针所指的值复制到左侧
      nums[left] = nums[right - 1]
      right--
    } else {
      left++
    }
  }
  console.log(nums)
  return left
}

// 测试用例
let nums = [0, 1, 2, 2, 3, 0, 4, 2],
  val = 2

console.time('执行用时')
console.log(removeElement(nums, val))
console.timeEnd('执行用时')
