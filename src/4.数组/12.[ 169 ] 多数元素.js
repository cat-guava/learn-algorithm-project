/**
 * * 题目名称：多数元素
 * * 题目地址：https://leetcode-cn.com/problems/majority-element
 */

// * 思路：

/**
 * @param {number[]} nums
 * @return {number}
 */
// * 方法1：哈希表 时间O(n)空间O(n)
/* var majorityElement = function (nums) {
  const n = nums.length,
    map = new Map()
  for (const ch of nums) {
    map.set(ch, map.get(ch) + 1 || 1)
  }
  // console.log(map)
  for (const ch of map.entries()) {
    if (ch[1] > n / 2) return ch[0]
  }
} */

// * 方法2：排序找众数 时间复杂度：O(nlogn) 空间复杂度O(logn)
// * 思路：因为多数元素出现次数大于n/2,那么将nums排序，若多数元素是最小的，由于要大于n/2，那么以n/2为下标的，若多数元素是最大的，n/2下标也是多数元素
/* var majorityElement = function (nums) {
  const n = nums.length
  nums.sort((a, b) => a - b)
  return nums[Math.trunc(n / 2)]
} */

// * 方法3：摩尔投票法  时间O(n)空间O(1)
// * 思路:找到第一个元素候选人,初始化其值为nums[0]和票数为1,遇到相同的票数加1,遇到相同的票数减1,票数为0时,更换候选人
// * 由于是多数元素,两两抵消剩下的一定是数量多的
var majorityElement = function (nums) {
  const n = nums.length
  let x = nums[0],
    count = 1
  for (let i = 1; i < n; i++) {
    if (x === nums[i]) {
      count++
    } else if (--count === 0) {
      x = nums[i]
      count = 1
    }
  }
  return x
}

// 测试用例
let test = [2, 2, 1, 1, 1, 3, 2, 2]
console.time('执行用时')
console.log(majorityElement(test))
console.timeEnd('执行用时')
