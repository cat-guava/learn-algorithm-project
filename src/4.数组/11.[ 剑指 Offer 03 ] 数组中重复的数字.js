/**
 * * 题目名称：数组中重复的数字
 * * 题目地址：https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof
 */

// * 思路：

/**
 * @param {number[]} nums
 * @return {number}
 */
// * 方法1：indexOf和lastIndexOf
// * 思路：遍历数组找indexOf和lastIndexOf不相等的元素并返回，若遍历完都相等，即没有重复数字，返回-1
/* var findRepeatNumber = function (nums) {
  const n = nums.length
  for (let i = 0; i < n; i++) {
    if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) return nums[i]
  }
  return -1
} */

// * 方法2：遍历数组，用元素索引与lastIndexOf判断
/* var findRepeatNumber = function (nums) {
  const n = nums.length
  for (let i = 0; i < n; i++) {
    if (nums.lastIndexOf(nums[i]) !== i) return nums[i]
  }
  return -1
} */

// * 方法3：特解用下标做运算修改数组内容 时间复杂度O(n)空间复杂度O(1)
/* 
这个思路的出发点就是通过做标记达到遍历一次找到结果的目的，只不过会改变数组的元素。
首先要明确的一点是 当两个元素是重复的，那么以这两个元素为下标就是指向了同一个元素。
因此我们在遍历数组的时候，给每个元素做个标记，
这个标记就是将 以这个元素为下标的那个元素 变成负数（变成负数的方式是将目标减去数组长度，题目说了所有数字都在0到n-1之间） 做了标记后，当遍历到重复元素时，就会发现以这个元素为下标的那个元素已经是负数了，那么这时候就已经找到结果了，直接返回即可。
ps：至于代码 if(k < 0) k += len ，意思是在未找到结果之前遍历到了负数，说明这个位置的数字被减去n过了， 但是我们要检验的是以这个位置原本的数字为下标的那个元素是否是负数，因此要把k加个n，相当于还原了
 */
/* var findRepeatNumber = function (nums) {
  let n = nums.length
  for (let i = 0; i < n; i++) {
    let k = nums[i]
    // 遍历过程中发现某个元素为负，意味着其前面某数值正好为其下标，其被减过n那么将它加上数组长度n，则还原成原本的元素
    if (k < 0) k += n
    // 若发现以k即以nums[i]元素为下标的某元素已经是负，表示在i之前已经有元素和k相等，修改过滤nums[k]元素，故k为重复的元素，返回k
    if (nums[k] < 0) return k
    nums[k] -= n
    // console.log(nums)
  }
  return -1
} */

// * 方法4：原地交换 和方法3类似都是利用索引和元素值是1对多的关系，时间O(n)空间O(1)
var findRepeatNumber = function (nums) {
  const n = nums.length
  let i = 0
  while (i < n) {
    if (nums[i] == i) {
      i += 1
      continue
    }
    if (nums[nums[i]] === nums[i]) return nums[i]
    ;[nums[nums[i]], nums[i]] = [nums[i], nums[nums[i]]]
    console.log(nums, i)
  }
  return -1
}

// * 方法5：哈希表 时间O(n)空间O(n)
/* var findRepeatNumber = function (nums) {
  const set = new Set()
  let repeat = -1
  for (const ch of nums) {
    if (set.has(ch)) return ch
    set.add(ch)
  }
  return -1
} */
// 测试用例
let test = [3, 4, 2, 1, 1, 0]

console.time('执行用时')
console.log(findRepeatNumber(test))
console.timeEnd('执行用时')
