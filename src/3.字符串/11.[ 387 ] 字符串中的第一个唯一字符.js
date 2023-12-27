/**
 * * 题目名称：字符串中的第一个唯一字符
 * * 题目地址：https://leetcode-cn.com/problems/first-unique-character-in-a-string
 */

// * 思路：
/**
 * @param {string} s
 * @return {number}
 */
// * 方法1：原生indexOf+lastIndexOf
// * 思路：遍历字符串每个字符s[i]，找出indexOf和lastIndexOf相等的字符，返回其索引
// * 若遍历完了，都没有发现相等的，则返回-1

/* var firstUniqChar = function (s) {
  const len = s.length
  if (len === 1) return 0
  let i = 0
  // indexOf获取指定字符首次出现的索引，lastIndexOf获取最后索引
  while (i < len) {
    let first = s.indexOf(s[i]),
      last = s.lastIndexOf(s[i])
    // console.log(first, last)
    if (first !== last) {
      i++
    } else {
      return i
    }
  }
  return -1
} */

// * 方法2：使用哈希表存储索引
// * 遍历Array.from(s).entries()先将字符串s转成哈希映射
// Array.from()静态方法从可迭代或类数组对象创建一个新的浅拷贝的数组实例。如：Array.from('foo') // ['f','o','o']
// Array.prototype.entries() 方法返回一个新的数组迭代器 (en-US)对象，该对象包含数组中每个索引的键/值对。
/* 
const a = ["a", "b", "c"];
for (const [index, element] of a.entries()) {
  console.log(index, element); // 0 'a' 1 'b' 2 'c'
}
 */
// * 对于哈希映射中的每一个键值对，键表示字符，值表示其首次出现的索引，若第二次出现则将值改为-1
// * 第一次遍历结束后，再次遍历哈希映射所有值，找出其中不为-1的最小值，即第一个不重复字符的索引，若哈希映射中的值均为-1则返回-1
/* var firstUniqChar = function (s) {
  // new一个map实例
  const position = new Map()
  const n = s.length
  // 将字符串转成哈希映射
  for (let [i, ch] of Array.from(s).entries()) {
    if (position.has(ch)) {
      position.set(ch, -1)
    } else {
      position.set(ch, i)
    }
  }
  let first = n
  // 遍历哈希映射的所有值
  for (let pos of position.values()) {
    if (pos !== -1 && pos < first) {
      first = pos
    }
  }
  if (first === n) first = -1
  return first
} */

// * 方法3:哈希表+队列
// * 思路：如方法2将字符串s转成哈希映射，同时向一个额外队列以二元组[s[i],i]的方式push([字符,其索引])，当字符存在哈希表内时，检查队列内元素是否满足只存在一次，将不符合要求的元素弹出，直到队首为真或队列为空
/* var firstUniqChar = function (s) {
  const position = new Map() // 哈希表
  const q = [] // 队列
  const n = s.length
  for (let [i, ch] of Array.from(s).entries()) {
    if (!position.has(ch)) {
      position.set(ch, i)
      q.push([s[i], i]) // 向队列压入字符及其索引的二元组
    } else {
      position.set(ch, -1)
      while (q.length && position.get(q[0][0]) === -1) {
        q.shift()
      }
    }
  }
  return q.length ? q[0][1] : -1
} */

// * 方法4：贪心
// * 遍历26个字母,找出所有唯一字符:即首次出现索引=最后出现索引的字符,找出唯一字符最前的,即索引最小的
var firstUniqChar = function (s) {
  // a-z的Unicode为97-122,共26个
  let i = 96,
    min = Infinity
  while (++i < 97 + 26) {
    let a = String.fromCharCode(i),
      j = s.indexOf(a)
    if (j > -1 && j === s.lastIndexOf(a) && j < min) min = j
  }
  return min === Infinity ? -1 : min
}
// 测试用例
let test = 'aebab'

console.time('执行用时')
console.log(firstUniqChar(test))
console.timeEnd('执行用时')
