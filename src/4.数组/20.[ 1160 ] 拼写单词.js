/**
 * * 题目名称：拼写单词
 * * 题目地址：https://leetcode-cn.com/problems/find-words-that-can-be-formed-by-characters
 */

// * 思路：
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  const n = words.length,
    charsCnt = new Map()
  // 将chars内字母及数量存入charsCnt
  for (const ch of chars) {
    charsCnt.set(ch, charsCnt.get(ch) + 1 || 1)
  }
  // console.log(charsCnt)
  let res = 0
  for (const word of words) {
    // 每个单词的字母数量
    const wordCnt = new Map()
    for (const ch of word) {
      wordCnt.set(ch, wordCnt.get(ch) + 1 || 1)
    }
    // 比较两个hashMap
    let is_ans = true
    for (const ch of word) {
      // charsCnt表内不存在ch字母，或word内ch字母的数量大于chars中ch的数量，则break
      if (!charsCnt.has(ch) || wordCnt.get(ch) > charsCnt.get(ch)) {
        is_ans = false
        break
      }
    }
    if (is_ans) {
      res += word.length
      // console.log(word)
    }
  }
  return res
}

// 测试用例
let words = ['cat', 'bt', 'hat', 'tree'],
  chars = 'atach'

console.time('执行用时')
console.log(countCharacters(words, chars))
console.timeEnd('执行用时')
