function calculateMinimumHP(dungeon: number[][]): number {
  const m = dungeon.length;
  const n = dungeon[0].length;

  function dfs(i: number, j: number): number {
    if (i >= m || j >= n) return Infinity;

    if (i === m - 1 && j === n - 1) {
      return Math.max(1, 1 - dungeon[i][j]);
    }

    const right = dfs(i, j + 1);
    const down = dfs(i + 1, j);

    const minNext = Math.min(right, down);
    return Math.max(1, minNext - dungeon[i][j]);
  }

  return dfs(0, 0);
}

const dungeon = [
  [-2, -3, 3],
  [-5, -10, 1],
  [10, 30, -5],
];

console.log(calculateMinimumHP(dungeon));
