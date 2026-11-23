# Search Trees

Ordered dictionaries: structures that support `search`, `insert`, `delete`, predecessor/successor and range queries.

## Files

| File | Concept | Balance strategy |
| --- | --- | --- |
| `binarySearchTree.js` | Plain BST: `left < node < right`. | None; can degenerate to `O(n)`. |
| `avlTree.js` | AVL tree. | Height difference ≤ 1; rotations after insert/delete. |
| `redBlackTree.js` | Red-black tree. | Color rules keep height ≤ `2 log(n+1)`. |
| `aaTree.js` | AA tree. | Red-black variant with simpler `level` rules. |
| `wavlTree.js` | Weak AVL tree. | Relaxed AVL balance with red-black-like performance. |
| `weightBalancedTree.js` | Weight-balanced tree (BB[α]). | Subtree **sizes** stay within a ratio. |
| `sizeBalancedTree.js` | Size-balanced tree (SBT). | Size-based rotations; popular in competitive programming. |
| `scapegoatTree.js` | Scapegoat tree. | Rebuilds the first unbalanced subtree; no extra fields. |
| `splayTree.js` | Splay tree. | Moves accessed nodes to the root; amortized `O(log n)`. |
| `tangoTree.js` | Tango tree. | Multi-splay tree with dynamic-optimality ambitions. |
| `treap.js` | Treap. | Random priorities turn a BST into a heap. |
| `cartesianTree.js` | Cartesian tree. | Heap-ordered tree built from a sequence; RMQ applications. |
| `threadedBinaryTree.js` | Threaded BST. | Null right links become in-order successors. |
| `ternarySearchTree.js` | Ternary search tree. | Character-based tree for string keys. |

## Concepts

- **BST invariant**: all keys in the left subtree are smaller; all keys in the right subtree are larger.
- **Rotations**: local pointer changes that reduce height without breaking the in-order sequence.
- **Height vs. size balance**: AVL/red-black bound height; weight-balanced trees bound subtree size ratios.
- **Amortized balance**: splay trees may be tall but expensive operations pay for future ones.
- **Randomization**: treaps avoid worst-case input patterns with high probability.
- **Threads**: extra pointers (or reused null pointers) allow in-order traversal without recursion.
- **Duplicates**: decide whether to store a count, allow duplicates on one side, or reject them.

## Complexity

| Structure | Search | Insert | Delete | Notes |
| --- | --- | --- | --- | --- |
| BST (average) | `O(log n)` | `O(log n)` | `O(log n)` | Worst case `O(n)`. |
| AVL | `O(log n)` | `O(log n)` | `O(log n)` | Strictest height balance. |
| Red-black | `O(log n)` | `O(log n)` | `O(log n)` | Fewer rotations; used by `std::map`, Java `TreeMap`. |
| Splay | `O(log n)` amortized | `O(log n)` amortized | `O(log n)` amortized | Great locality; worst single op `O(n)`. |
| Treap | expected `O(log n)` | expected `O(log n)` | expected `O(log n)` | Simple to implement. |
| Scapegoat | `O(log n)` amortized | `O(log n)` amortized | `O(log n)` amortized | Rebuilds instead of rotating. |

## When to use what

- Need a general ordered map: **red-black** (library default) or **AVL**.
- Need simple, fast competitive-programming code: **treap**, **SBT**, or **scapegoat**.
- Access pattern is skewed/local: **splay tree**.
- Need in-order traversal without recursion: **threaded BST**.
- Keys are strings: **ternary search tree** (or a trie, see `../StringAndPrefixTrees/`).

## Run

```bash
node src/2026/trees/Search/avlTree.js
node src/2026/trees/Search/redBlackTree.js
node src/2026/trees/Search/splayTree.js
```
