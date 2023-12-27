/**
 * * 题目名称：斐波那契数
 * * 题目地址：https://leetcode-cn.com/problems/fibonacci-number
 */
// * 思路1：递归  时O(2^n) 空O(n)
// * 代码
/**
 * @param {number} n
 * @return {number}
 */
// var fib = function (n) {
//   if (n == 0) return 0
//   if (n == 1) return 1
//   return fib(n - 1) + fib(n - 2)
// };


// * 思路2：动态规划：滚动数组思想 时O(n) 空O(1)
// var fib = function (n) {
//   if (n < 2) return n
//   const arr = [0, 1]
//   for (let i = 2; i <= n; i++) {
//     arr.push(arr[0] + arr[1])
//     arr.shift()
//   }
//   return arr[1]
// };

var fib = function (n) {
  if (n < 2) return n
  let p = 0, q = 0, r = 1
  for (let i = 2; i <= n; i++) {
    p = q
    q = r
    r = p + q
  }
  return r
};


// 测试用例
let test1 = 2

console.time('执行用时');
console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
0
1
1
2
3
5
8
console.timeEnd('执行用时');