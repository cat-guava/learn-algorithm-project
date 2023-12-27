/**
 * * 题目名称：有多少小于当前数字的数字
 * * 题目地址：https://leetcode-cn.com/problems/how-many-numbers-are-smaller-than-the-current-number
 */

// * 思路：
/**
 * @param {number[]} nums
 * @return {number[]}
 */

// * 方法1：二元数组
// * 思路：初始化一个二元数组arr
/* var smallerNumbersThanCurrent = function (nums) {
  const n = nums.length,
    res = [],
    arr = new Array(n).fill([0, 0])
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] > nums[j]) {
        arr[i] = [nums[i], arr[i][1] + 1]
      } else if (nums[i] < nums[j]) {
        arr[j] = [nums[j], arr[j][1] + 1]
      }
    }
  }
  for (const ch of arr) {
    res.push(ch[1])
  }
  return res
} */

// * 方法2：排序
// * 思路 ：
// * 记录每一个数和其索引，在对数组继续排序，找出其左边第一个小于它的数
/* var smallerNumbersThanCurrent = function (nums) {
  const n = nums.length,
    ret = []
  data = new Array(n).fill([0, 0])
  // 用data记录nums内每一个元素及其索引
  for (let i = 0; i < n; i++) {
    data[i] = [nums[i], i]
  }
  // 将data内元素按nums的元素大小进行排序
  data.sort((a, b) => a[0] - b[0])
  // 找出其左边第一个小于它的数
  let prev = -1 // 不能从0开始
  for (let i = 0; i < n; i++) {
    // 这里条件加prev===-1，是为了处理i=0,时，data[i-1]会报错的问题，i>0时看data[i][0]与data[i - 1][0]是否相等，若相等prev不变，若不等prev重新赋值为i
    // prev初始值是-1而不是0，是因为如nums=[8, 1, 1, 2, 1, 3],经过处理后data最前面两个元素是[ 1, 1 ], [ 1, 2 ]，比1小的都数目是0。若是prev初始值为0，i=0时通过if判断prev=0，i=1时prev=0还会通过判断，给prev重新赋值为1；实际上此时data[i][0] == data[i - 1][0],不应该通过if判断，prev值应该和前面保持一致，即为0；
    if (prev === -1 || data[i][0] !== data[i - 1][0]) {
      prev = i
    }
    ret[data[i][1]] = prev
  }
  // console.log(data)
  return ret
} */

// * 方法3：计数排序
// * 思路：
// * 数组元素的值域是[0,100]，建立一个频次数组cnt，cnt[i]表示数字i出现的频次，对数字i来说小于它的数目即cnt[0...i-1]的总和
var smallerNumbersThanCurrent = function (nums) {
  const n = nums.length,
    cnt = new Array(101).fill(0)
  // 记录nums内每个元素出现的频次
  for (const ch of nums) cnt[ch]++
  // 将小于等于nums[i]的数目存入cnt[nums[i]]中
  for (let i = 1; i < 101; i++) {
    cnt[i] += cnt[i - 1]
  }
  // 将小于nums[i]元素的数字数目存入结果数组
  const ret = []
  for (let i = 0; i < n; i++) {
    // 这里要判断nums[i]是否等于0，nums[i]==0，不判断的话，cnt[nums[i] - 1]会报错
    // nums[i]==0时，已知0 <= nums[i] <= 100，故比nums[i]小的数目为0
    ret.push(nums[i] ? cnt[nums[i] - 1] : 0)
  }
  return ret
}

// 测试用例
let test = [6, 5, 4, 8]

console.time('执行用时')
console.log(smallerNumbersThanCurrent(test))
console.timeEnd('执行用时')
