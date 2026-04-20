/**
 * P91 (**) Knight's tour
 * Find a sequence of moves for a knight on an NxN chessboard such that
 * the knight visits every square exactly once.
 */

function knightsTour(n) {
  const moves = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
  ];

  function getValidMoves(x, y, visited) {
    return moves
      .map(([dx, dy]) => [x + dx, y + dy])
      .filter(
        ([nx, ny]) =>
          nx >= 0 && nx < n && ny >= 0 && ny < n && !visited[nx][ny],
      );
  }

  function solve(x, y, moveCount, visited, path) {
    visited[x][y] = true;
    path.push([x, y]);

    if (moveCount === n * n) return true;

    const nextMoves = getValidMoves(x, y, visited);
    nextMoves.sort(
      (a, b) =>
        getValidMoves(a[0], a[1], visited).length -
        getValidMoves(b[0], b[1], visited).length,
    );

    for (const [nx, ny] of nextMoves) {
      if (solve(nx, ny, moveCount + 1, visited, path)) {
        return true;
      }
    }

    visited[x][y] = false;
    path.pop();
    return false;
  }

  const visited = Array.from({ length: n }, () => Array(n).fill(false));
  const path = [];

  if (solve(0, 0, 1, visited, path)) {
    return path;
  }
  return null;
}
module.exports = { knightsTour };
