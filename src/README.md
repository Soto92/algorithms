# src — Algorithm Collections

This directory groups the repository by year/topic. Each subfolder has its own README with the concepts and a file-by-file map.

## Collections

| Folder | What it contains |
| --- | --- |
| [`2024/`](2024/README.md) | Classic algorithms from the first year — the traveling salesman heuristic. |
| [`2025/`](2025/readme.md) | NeetCode 150 / interview practice, a large data-structure library, and a Dungeon Game case study. |
| [`2026/`](2026/README.md) | LeetCode solutions, TypeScript data structures, design-pattern (OOAD) challenges, crypto exercises, and notes. |
| [`2026/trees/`](2026/trees/README.md) | A catalog of ~134 tree variants grouped by purpose (search, heaps, spatial, parsing, persistence, systems, …). |
| [`99problems/`](99problems/readme.md) | JavaScript solutions to the classic Prolog "99 Problems" set. |
| [`queues/`](queues/readme.md) | Seven queue implementations (simple, circular, deque, priority, multi, async, message). |
| [`regex/`](regex/README.md) | Reusable regex helpers for extraction, transformation and validation. |
| [`scala3/`](scala3/README.md) | A Scala 3 KD-Tree with tests and a restaurant nearest-neighbor demo. |
| [`sort/`](sort/README.md) | Twenty sorting algorithms with complexity and stability notes. |
| [`__tests__/`](__tests__/README.md) | Jest test suites that mirror the source tree. |

## Common concepts

- **Big-O notation** describes how running time or memory grows with input size (see `2026/complexity.ts`).
- **Data structure vs. algorithm**: a structure organizes data (tree, heap, graph); an algorithm is a procedure over it (search, sort, traversal).
- **Trade-offs**: the "best" structure depends on the operations you need — lookup, insertion, ordering, range queries, memory, and persistence.
- **Educational code**: most files are intentionally small and readable, not production-hardened. Many include a `console.log` demo at the bottom.

## Running files

JavaScript files can be executed directly:

```bash
node src/sort/mergeSort.js
node src/2025/alienDictionary.js
```

TypeScript files use `ts-node`:

```bash
npx ts-node src/2026/canJump.ts
npx ts-node src/2025/DungeonGameAlg/dynamicProgramming.ts
```

Scala 3 files use `scala-cli` (see `scala3/README.md`).

Tests use Jest:

```bash
npx jest
```
