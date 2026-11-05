# 2025 - Algorithms

Interview-style practice, mostly from [NeetCode 150](https://neetcode.io/practice?tab=neetcode150) and [HackerRank](https://www.hackerrank.com).

This folder contains standalone problem solutions plus two larger study areas:

- [`dataStructures/`](dataStructures/README.md) — an implementation library of classic data structures.
- [`DungeonGameAlg/`](DungeonGameAlg/readme.md) — the same problem solved with DFS, BFS and dynamic programming, with a Jest test.

## Files

| File | Concept | Typical technique |
| --- | --- | --- |
| `24-game.js` | Decide whether four cards can make 24 using `+ - * /` and parentheses. | Backtracking over pairs of numbers. |
| `24-game-recursive.js` | Alternative 24-game solver. | Recursive search with pruning. |
| `alienDictionary.js` | Derive a character order from a sorted alien word list. | Graph + topological sort. |
| `alienLang.js` | Same "foreign dictionary" problem (NeetCode variant). | Topological sort (Kahn or DFS). |
| `editString.js` | Minimum insert/delete/replace operations to turn one string into another. | Levenshtein distance with 1D dynamic programming. |
| `invertBinaryTree.js` | Mirror a binary tree left-to-right. | Recursive DFS; level-order array helpers for input/output. |
| `networkDelayDijkstra.js` | Time for a signal to reach all nodes in a weighted directed graph. | Dijkstra with a priority queue. |
| `reverNodesInKGroup.js` | Reverse a linked list in groups of `k`. | Pointer manipulation; leave the final short group intact. |
| `rotateImage.js` | Rotate an `n × n` matrix 90° clockwise in place. | Transpose + reverse each row. |
| `sliding-window-max.js` | Maximum of every window of size `k`. | Monotonic decreasing deque. |
| `string.js` | Study kit for JavaScript `String` methods. | Static, instance and Unicode string APIs. |
| `sudokuSolver.js` | Fill a 9×9 Sudoku board. | Backtracking with row/column/box validation. |
| `validations.js` | Compare dispatch strategies for country-specific validation rules. | `if/else`, `switch`, object map, `Map`, `find`, loops. |
| `warmup.js` | Measure a heavy computation after a warm-up phase. | JIT warm-up and `performance.now()`. |
| `validations.md` | Bun vs. Node benchmark results and analysis. | Micro-benchmark interpretation. |

## Recurring concepts

- **Two pointers / sliding window** — `rotateImage`, `sliding-window-max`.
- **Backtracking** — `24-game`, `sudokuSolver`.
- **Graphs** — topological sorting in the alien dictionary files; Dijkstra in `networkDelayDijkstra`.
- **Dynamic programming** — `editString`, `DungeonGameAlg/dynamicProgramming.ts`.
- **Linked lists** — `reverNodesInKGroup`.
- **Micro-benchmarks** — `validations.js`, `warmup.js`; results depend on runtime (Bun vs. Node), JIT, and data shape.

## Run

```bash
node src/2025/24-game.js
node src/2025/sliding-window-max.js
npx ts-node src/2025/DungeonGameAlg/dynamicProgramming.ts
```

## Author

Mauricio Soto P.
