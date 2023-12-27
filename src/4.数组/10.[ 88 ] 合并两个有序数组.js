/**
 * * 题目名称：合并两个有序数组
 * * 题目地址：https://leetcode-cn.com/problems/merge-sorted-array
 */

// * 思路：

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// * 方法1：逆向双指针
/* var merge = function (nums1, m, nums2, n) {
  let i = m - 1,
    j = n - 1
  while (i >= 0 || j >= 0) {
    if (i === -1) {
      nums1[i + j + 1] = nums2[j--]
    } else if (nums1[i] < nums2[j]) {
      nums1[i + j + 1] = nums2[j--]
    } else {
      nums1[i + j + 1] = nums1[i--]
    }
  }
  return nums1
} */
// * 逆向双指针官方版
/* var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1,
    p2 = n - 1,
    tail = m + n - 1
  let cur
  while (p1 >= 0 || p2 >= 0) {
    if (p1 === -1) {
      cur = nums2[p2--]
    } else if (p2 == -1) {
      cur = nums1[p1--]
    } else if (nums1[p1] > nums2[p2]) {
      cur = nums1[p1--]
    } else {
      cur = nums2[p2--]
    }
    nums1[tail--] = cur
  }
  return nums1
} */
// * 逆向双指针简写版
/* var merge = function (nums1, m, nums2, n) {
  let p1=m-1,p2=n-1,cur=m+n-1 
  while(p2>=0){
    nums1[cur--]=p1>=0&&nums1[p1--]>nums2[p2--]?nums1[p1]:nums2[p2]
  }
  return nums1
} */

// * 方法2：API法
var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, n, ...nums2)
  nums1.sort((a, b) => a - b)
}
// 测试用例
let nums1 = [0],
  m = 0,
  nums2 = [1],
  n = 1

console.time('执行用时')
console.log(merge(nums1, m, nums2, n))
console.timeEnd('执行用时')
