/**
 * * 题目名称：两数之和
 * * 题目地址：https://leetcode-cn.com/problems/two-sum
 */

// * 思路：
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// * 方法1: 暴力枚举法 时间复杂度O(N^2),空间O(1)
// * 思路：
/* var twoSum = function (nums, target) {
  const n = nums.length
  for (let i = 0; i < n; i++) {
    const x = target - nums[i] // 另一个值
    const j = nums.indexOf(x, i + 1) // 另一个值的索引
    if (j !== i && j !== -1) {
      return [i, j]
    }
  }
  return '整数数组内没有和为目标值的两个整数'
} */

// * 方法2：哈希表 时间复杂度O(N)空间O(N)
// * 遍历nums时，查找哈希表有没有target-x，有则直接返回索引，若没有将x存入hashMap，继续遍历
var twoSum = function (nums, target) {
  const map = new Map()
  for (let i = 0, len = nums.length; i < len; i++) {
    if (!map.has(target - nums[i])) {
      map.set(nums[i], i)
    } else {
      return [map.get(target - nums[i]), i]
    }
  }
  console.log(map)
  return [] // 找不到返回[]
}
// 测试用例
let test = [3, 3],
  target = 6

console.time('执行用时')
console.log(twoSum(test, target))
console.timeEnd('执行用时')
