# Dungeon Game Tests

`DFS.test.ts` checks `calculateMinimumHP` from `src/2025/DungeonGameAlg/DFS.ts`.

## What is covered

| Case | Why it matters |
| --- | --- |
| Classic 3×3 dungeon | Expected answer `7`; validates the core recurrence. |
| All-positive dungeon | The knight still needs at least `1` health. |
| Single-cell dungeon | Base case at the destination. |
| Additional boards | Guards the DFS/memoization behavior on mixed values. |

## Running

```bash
npx jest src/__tests__/2025/DungeonGameAlg
```

## The concept

The dungeon is solved backwards: start from the princess's room and compute the **minimum health needed before entering each room**:

```text
need(i, j) = max(1, min(need(i+1, j), need(i, j+1)) - dungeon[i][j])
```

The DFS implementation adds memoization so each cell is computed once. The same recurrence appears in `dynamicProgramming.ts` as a bottom-up table.

See the [Dungeon Game README](../../../2025/DungeonGameAlg/readme.md) for the full problem statement and strategy comparison.
