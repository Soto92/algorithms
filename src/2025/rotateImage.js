/** https://neetcode.io/problems/rotate-matrix?list=neetcode150
Given a square n x n matrix of integers matrix, rotate it by 90 degrees clockwise.
You must rotate the matrix in-place. Do not allocate another 2D matrix and do the rotation.

EX1
Input: matrix = [
  [1,2],
  [3,4]
]
Output: [
  [3,1],
  [4,2]
]

EX2
Input: matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]
Output: [
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
 */

function rotate(matrix) {
  const n = matrix.length;

  // Step 1: Transpose the matrix
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // Step 2: Reverse each row
  for (let row of matrix) {
    row.reverse();
  }
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

rotate(matrix);
console.log(matrix);
