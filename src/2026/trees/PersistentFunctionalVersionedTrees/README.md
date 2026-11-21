# Persistent, Functional and Versioned Trees

Trees that keep **old versions** of themselves. Updates create a new version and share the unchanged parts with the previous one.

## Files

| File | Concept |
| --- | --- |
| `persistentBinarySearchTree.js` | Persistent BST: insertion copies only the nodes on the search path. |
| `persistentTreap.js` | Persistent treap: path-copying plus random priorities. |
| `persistentSegmentTree.js` | Persistent segment tree: each update creates `O(log n)` new nodes; supports historical queries. |
| `fingerTree.js` | Functional sequence with efficient access at both ends and concatenation (simplified). |
| `rope.js` | Tree-based string: concatenation and slicing without copying the whole text. |
| `pieceTree.js` | Text buffer made of immutable pieces; used by editors for fast edits. |
| `hashTree.js` | Tree where each node stores a hash of its subtree. |
| `merkleTree.js` | Hash tree with a single root hash; verifies large data sets efficiently. |

## Core concepts

- **Persistence**: a data structure where old versions remain accessible after an update.
- **Path copying**: copy the nodes from the root to the changed node, then share every untouched subtree. Cost per update: `O(log n)` new nodes.
- **Structural sharing**: the new version reuses most of the old nodes, so memory grows with the number of changes, not with a full copy per version.
- **Immutability**: functional updates return a new root; the old root is never mutated.
- **Merkle hashing**: `hash(node) = H(children hashes || value)`. Changing one leaf changes every hash on its path up to the root.
- **Rope / piece tree**: represent text as a tree of chunks. Insert/delete/slice become tree operations instead of `O(n)` array copies.
- **Finger tree**: a functional sequence with amortized `O(1)` access at both ends and `O(log n)` concatenation/split.

## Why it matters

| Use case | Structure |
| --- | --- |
| Git-like history, undo/redo | Persistent tree / path copying. |
| Text editors on large files | Rope or piece tree. |
| Blockchain and content-addressed storage | Merkle tree / Merkle DAG. |
| Verify downloaded files or database replicas | Merkle proofs. |
| Functional languages and React-style state | Immutable trees with structural sharing. |
| Query "array at version k" | Persistent segment tree. |

## Complexity intuition

- Persistent update: `O(log n)` time and `O(log n)` new memory.
- Query on any version: same as the non-persistent structure, `O(log n)`.
- Merkle verification: `O(log n)` sibling hashes for a leaf proof.
- Rope slice/concat: `O(log n)` when balanced, versus `O(n)` for a flat string.

## Run

```bash
node src/2026/trees/PersistentFunctionalVersionedTrees/persistentBinarySearchTree.js
node src/2026/trees/PersistentFunctionalVersionedTrees/merkleTree.js
node src/2026/trees/PersistentFunctionalVersionedTrees/rope.js
```

The implementations focus on the shape of persistence and hashing; production versions add balancing, chunk-size tuning and serialization.
