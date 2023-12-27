/**
 * * 题目名称：顺时针打印矩阵
 * * 题目地址：https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof
 */

// * 思路：
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

// *方法1：按层模拟，
// * 思路：一圈一圈遍历，直到遍历完整个矩阵
// * 步骤：
// * 1.当矩阵长度或矩阵元素长度为0时，返回[]
// * 2.初始化矩阵的rows、columns和4个边界left、right、top、bottom，准备一个空数组res存放结果
// * 3.当left<=right且top<=bottom时，遍历矩阵；
// * 4.先从左往右遍历第一行left——>right,再从上往下遍历最后一列top+1——>bottom为了不重复打印四个角的元素，故是top+1开始
// * 5.当left<right且top<bottom时，再从右往左遍历最后一行right-1——>left+1,再从下往上遍历第一列bottom——>top+1.因为当left==right或top==bottom时，无法形成一个矩形，不需要遍历下边和左边，故使用left<right且top<bottom这个条件
// * 6.上面仅遍历了矩阵最外圈，要遍历整个矩阵，需要不断内缩，故left+1,rigth-1,top+1,bottom-1
/* var spiralOrder = function (matrix) {
  // 要先将行与列为空的情况排除出去，返回空数组，不然当matrix.length=0，matrix[0].length会报错
  if (!matrix.length || !matrix[0].length) return []
  const rows = matrix.length,
    columns = matrix[0].length // 行与列
  const res = []
  let left = 0,
    right = columns - 1,
    top = 0,
    bottom = rows - 1
  while (left <= right && top <= bottom) {
    // left——>right 上边
    for (let column = left; column <= right; column++) {
      res.push(matrix[top][column])
    }
    // top-1——>bottom 右边
    for (let row = top + 1; row <= bottom; row++) {
      res.push(matrix[row][right])
    }
    if (left < right && top < bottom) {
      // 当left==right；top==bottom时，不需要在考虑下边和左边
      // rigth-1——>left+1 下边
      for (let column = right - 1; column >= left + 1; column--) {
        res.push(matrix[bottom][column])
      }
      // bottom——>top+1 左边
      for (let row = bottom; row >= top + 1; row--) {
        res.push(matrix[row][left])
      }
    }
    // console.log(res, left, right, top, bottom)
    // 以上代码执行完后，仅是向res添加了矩阵第一圈的元素
    // 需要调整left,right,top,bottom的打印下一圈的内容
    ;[left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1]
  }
  return res
} */

// 测试用例
let test = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ],
  matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
  ],
  a = []

console.time('执行用时')
console.log(spiralOrder(a))
console.timeEnd('执行用时')
