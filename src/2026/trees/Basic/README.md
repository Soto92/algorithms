# Basic Trees

The vocabulary layer: different tree **shapes** and the invariants that define them.

## Files

| File | Shape | Invariant / idea |
| --- | --- | --- |
| `binaryTree.js` | Binary tree | Every node has at most two children. No ordering requirement. |
| `fullBinaryTree.js` | Full binary tree | Every node has either 0 or 2 children. |
| `completeBinaryTree.js` | Complete binary tree | All levels full except the last, which is filled left to right. Stored as an array; children of index `i` are `2i+1` and `2i+2`. |
| `perfectBinaryTree.js` | Perfect binary tree | Full **and** complete: all leaves at the same depth `h`, with `2^(h+1)-1` nodes. |
| `balancedBinaryTree.js` | Height-balanced tree | At every node, left/right subtree heights differ by at most one (AVL-style). |
| `degenerateBinaryTree.js` | Degenerate (path) tree | Each node has only one child; behaves like a linked list, height `O(n)`. |
| `genericTree.js` | N-ary tree | Each node stores an array of children; any number of children. |
| `orderedTree.js` | Ordered tree | Children have a meaningful order (first/second/...). |
| `rootedTree.js` | Rooted tree | Nodes know their parent; one distinguished root; edges point away from it. |
| `unrootedTree.js` | Unrooted tree | Stored as an undirected adjacency list; any node can be chosen as root. |

## Concepts

- **Height vs. size**: a perfectly balanced binary tree has height `O(log n)`; a degenerate one has height `n - 1`.
- **Shape vs. order**: "binary" only limits children. A **binary search tree** adds the ordering `left < node < right`.
- **Complete trees and arrays**: because a complete tree has no gaps, it can live in an array with no pointers. This is exactly how binary heaps are stored.
- **Rooted vs. unrooted**: the same undirected tree can be rooted at any node; rooting fixes parent/child direction and enables recursion from the root.

## When to use what

| Need | Shape |
| --- | --- |
| Priority queue / heap layout | Complete binary tree (array). |
| General hierarchy (menus, org charts) | Generic or ordered tree. |
| Graph that happens to be acyclic | Unrooted tree + adjacency list. |
| Balanced search | A balanced binary search tree (see `../Search/`). |

## Run

```bash
node src/2026/trees/Basic/binaryTree.js
node src/2026/trees/Basic/completeBinaryTree.js
```
