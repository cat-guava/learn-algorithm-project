/**
 * * 题目名称：二叉树的最大深度
 * * 题目地址：https://leetcode-cn.com/problems/maximum-depth-of-binary-tree
 */

// * 思路：
function TreeNode (val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
/** 
 * @param {TreeNode} root
 * @return {number}
 */

// * 深度优先
// 最大深度为左右子树的最大深度+1
var maxDepth = function (root) {
  if (!root) return 0
  let l = maxDepth(root.left)
  let r = maxDepth(root.right)
  return Math.max(l, r) + 1
};

// * 广度优先
// var maxDepth = function (root) {
//   if (!root) return 0
//   let queue = [root], ans = 0
//   while (queue.length) {
//     let len = queue.length
//     while (len > 0) {
//       let node = queue.shift()
//       if (node.left) queue.push(node.left)
//       if (node.right) queue.push(node.right)
//       len -= 1
//     }
//     ans += 1
//   }
//   return ans
// };


// 测试用例
let root = new TreeNode(1)
let root2 = new TreeNode(2)
root.left = null
root.right = root2

console.time('执行用时');
console.dir(root, { depth: null });
console.log(maxDepth(root));
console.timeEnd('执行用时');