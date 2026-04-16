/**
 * P90 (**) Eight queens problem
 * Write a predicate queens(N,Qs) that generates all valid placements
 * of N queens on an NxN chessboard.
 */

function solveNQueens(n) {
  const results = [];

  function solve(row, currentPlacement) {
    if (row === n) {
      results.push([...currentPlacement]);
      return;
    }

    for (let col = 0; col < n; col++) {
      const isSafe = currentPlacement.every((c, r) => {
        return c !== col && Math.abs(c - col) !== Math.abs(r - row);
      });

      if (isSafe) {
        currentPlacement.push(col);
        solve(row + 1, currentPlacement);
        currentPlacement.pop();
      }
    }
  }
  solve(0, []);
  return results;
}
module.exports = { solveNQueens };
