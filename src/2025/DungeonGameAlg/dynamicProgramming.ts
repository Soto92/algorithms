function calculateMinimumHP(dungeon: number[][]): number {
  const m = dungeon.length;
  const n = dungeon[0].length;

  const dp: number[][] = Array.from({ length: m + 1 }, () =>
    Array(n + 1).fill(Infinity)
  );

  dp[m][n - 1] = 1;
  dp[m - 1][n] = 1;

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const minHpNeeded = Math.min(dp[i + 1][j], dp[i][j + 1]) - dungeon[i][j];
      dp[i][j] = Math.max(1, minHpNeeded);
    }
  }

  return dp[0][0];
}

const dungeon = [
  [-2, -3, 3],
  [-5, -10, 1],
  [10, 30, -5],
];

console.log(calculateMinimumHP(dungeon));
