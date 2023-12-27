/**
 * * 题目名称：移动零
 * * 题目地址：https://leetcode-cn.com/problems/move-zeroes
 */

// * 思路：
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/* var moveZeroes = function (nums) {
  const n = nums.length
  let i = 0,
    j = 0,
    count = 0
  while (i < n) {
    if (nums[i] !== 0) {
      nums[j] = nums[i]
      j++
      // console.log(nums)
    } else {
      count++
    }
    i++
  }
  // console.log(count)
  nums.splice(n - count, count, ...new Array(count).fill(0))
  // while (count > 0) {
  //   nums[n - count] = 0
  //   count--
  // }
  return nums
} */
// 优化
var moveZeroes = function (nums) {
  const n = nums.length
  let i = (j = 0)
  for (let i = 0; i < n; i++) {
    if (nums[i] != 0) {
      nums[j++] = nums[i]
    }
  }
  while (j < n) {
    nums[j++] = 0
  }
}
// 测试用例
let test = [0]

console.time('执行用时')
console.log(moveZeroes(test))
console.timeEnd('执行用时')
