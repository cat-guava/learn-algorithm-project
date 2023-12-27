/**
 * * 题目名称：对称二叉树
 * * 题目地址：https://leetcode-cn.com/problems/symmetric-tree
 */

// * 思路：
function TreeNode (val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// const check = (p, q) => {
//   if (!p && !q) return true
//   if (!p || !q) return false
//   return p.val === q.val && check(p.left, q.right) && check(p.right, q.left)
// }

// var isSymmetric = function (root) {
//   return check(root, root)
// };

// * 迭代
const check = (q, p) => {
  const Q = []
  Q.push(q)
  Q.push(p)
  while (Q.length) {
    q = Q.shift()
    p = Q.shift()
    if (!q && !p) continue; // 跳过本次循环
    if ((!q || !p) || q.val !== p.val) return false
    Q.push(q.left)
    Q.push(p.right)
    Q.push(q.right)
    Q.push(p.left)
  }
  return true
}
var isSymmetric = function (root) {
  return check(root, root)
};

// 测试用例

console.time('执行用时');
console.timeEnd('执行用时');