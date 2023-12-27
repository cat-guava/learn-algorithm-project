/**
 * * 题目名称：判定字符是否唯一
 * * 题目地址：https://leetcode-cn.com/problems/is-unique-lcci
 */

// * 思路：
/**
 * @param {string} astr
 * @return {boolean}
 */
// * 方法1：哈希表
/* var isUnique = function (astr) {
  const map = new Set()
  for (const ch of astr) {
    if (map.has(ch)) return false
    map.add(ch)
  }
  return true
} */
// * 方法2：用set的唯一性，比较字符长度
/* var isUnique = function (astr) {
  return astr.length === new Set(astr).size
} */

// * 方法3：位运算
var isUnique = function (astr) {
  const n = astr.length
  // 题目说是小写字母a-z，那么只有26位，若astr长度大于26，则必定有重复的
  if (n > 26) return false
  let mark = 0
  for (const ch of astr) {
    // 'a'.charCodeAt=97 'a'在unicode编码是97
    // mark_bit表示要左移的位数 1<<mark_bit
    let mark_bit = ch.charCodeAt() - 97
    // mark&(1<<mark_bit)由于将ch向左位移，那么从右往左除了mark_bit位唯一1，其他右边的都为0
    // 按位&运算没出现过返回0，出现过返回1
    if ((mark & (1 << mark_bit)) !== 0) return false
    // 没出现过用或运算mark | (1 << move_bit)将对应下标位的值置为1
    mark = mark | (1 << mark_bit) // 可简写成 mark |=1<<mark_bit
  }
  return true
}

// 测试用例
let test = 'add'

console.time('执行用时')
console.log(isUnique(test))
console.timeEnd('执行用时')
