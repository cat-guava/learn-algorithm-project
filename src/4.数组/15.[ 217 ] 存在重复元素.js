/**
 * * 题目名称：存在重复元素
 * * 题目地址：https://leetcode-cn.com/problems/contains-duplicate
 */

// * 思路：

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// * 方法1：哈希表 时空复杂度均位O(N),其中N为数组长度
// * 思路：创建一个set的实例对象，遍历数组将每个元素插入哈希表，若插入前发现元素已存在哈希表内，说明存在重复元素，返回true
//  * 反之遍历完整数组，都没有发现重复元素，返回false
/* var containsDuplicate = function (nums) {
  const n = nums.length,
    set = new Set()
  for (const ch of nums) {
    if (set.has(ch)) return true
    set.add(ch)
  }
  return false
} */

// * 方法2: 排序
// * 思路：先对数组进行排序，再遍历数组，判断相邻元素是否相等，若相等，存在重复元素，返回true，反之返回false
// * 复杂度分析：时间复杂度：O(NlogN),其中N为数组长度，需要对数组进行排序
var containsDuplicate = function (nums) {
  // 用sort对数组排序
  nums.sort((a, b) => a - b)
  // 这里i初始值为0；用i<n-1判断，就不用单独判断n为1，数组只有一个元素的情况了，当n为1，直接跳过for循环，返回false
  for (let i = 0, n = nums.length; i < n - 1; i++) {
    if (nums[i] === nums[i + 1]) return true
  }
  return false
}

// 测试用例
let test = [1, 2, 3, 1]

console.time('执行用时')
console.log(containsDuplicate(test))
console.timeEnd('执行用时')
