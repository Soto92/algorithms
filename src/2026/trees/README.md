# Trees (2026)

A catalog of ~134 tree implementations grouped by **what the tree is for**, not just by shape. The same node/edge idea is reused for search, memory allocation, spatial indexing, language parsing, persistence and real system models.

Each subfolder has a README with a file-by-file map. Implementations are intentionally small and educational; many are simplified versions of the real algorithm.

## Categories

| Folder | Focus | Representative structures |
| --- | --- | --- |
| [`Basic/`](Basic/README.md) | Tree vocabulary and shapes. | Binary, full, complete, perfect, balanced, degenerate, rooted, unrooted. |
| [`Search/`](Search/README.md) | Ordered dictionaries. | BST, AVL, red-black, AA, splay, treap, WAVL, scapegoat, ternary search. |
| [`Heaps/`](Heaps/README.md) | Priority queues and meldable heaps. | Binary, d-ary, binomial, Fibonacci, pairing, leftist, skew, Brodal. |
| [`MultiwayAndDB/`](MultiwayAndDB/README.md) | High-fanout indexes and storage engines. | B-tree, B+, B*, 2-3, 2-3-4, LSM, fractal tree. |
| [`GeometryTrees/`](GeometryTrees/README.md) | Range queries over sequences and intervals. | Segment tree, Fenwick, lazy, persistent, wavelet, Li Chao, interval. |
| [`SpacialTrees/`](SpacialTrees/README.md) | Spatial/geometric indexing. | KD-tree, quadtree, octree, R-tree family, ball/cover/VP/M-tree. |
| [`StringAndPrefixTrees/`](StringAndPrefixTrees/README.md) | Strings and prefix queries. | Trie, radix, Patricia, DAWG, suffix array/tree, HAT-trie. |
| [`ParsingLanguageMathTrees/`](ParsingLanguageMathTrees/README.md) | Languages, expressions and proofs. | AST, parse tree, syntax tree, expression tree, Huffman, recursion tree. |
| [`PersistentFunctionalVersionedTrees/`](PersistentFunctionalVersionedTrees/README.md) | Immutable/versioned data. | Persistent BST/treap/segment tree, rope, finger tree, Merkle tree. |
| [`GraphAlgorithmTrees/`](GraphAlgorithmTrees/README.md) | Trees derived from graphs. | BFS/DFS tree, MST, shortest-path tree, dominator, link-cut, top tree. |
| [`DecisionAndAITrees/`](DecisionAndAITrees/README.md) | Decision models and game search. | Decision/classification/regression trees, random forest, MCTS, minimax. |
| [`SystemTrees/`](SystemTrees/README.md) | Trees used by real systems. | DOM, XML, JSON, filesystem, dependency graph, routing, scene graph, Merkle DAG. |

## Shared vocabulary

- **Root**: the top node (or the entry point of a rooted tree).
- **Parent / child / sibling**: local relationships along edges.
- **Leaf**: a node with no children.
- **Depth**: edges from the root to a node. **Height**: longest path from a node down to a leaf.
- **Degree**: number of children (or, in a graph, incident edges).
- **Subtree**: a node plus all of its descendants.
- **Balanced**: height stays `O(log n)` with respect to node count.
- **Ordered tree**: sibling order matters (e.g., XML children).
- **Binary tree**: at most two children. It is *not* automatically a binary **search** tree.

## Traversals

| Traversal | Order | Typical use |
| --- | --- | --- |
| Pre-order | node → left → right | Serialize/copy a tree, evaluate an expression tree (prefix). |
| In-order | left → node → right | Sorted output from a BST. |
| Post-order | left → right → node | Delete/free a tree, evaluate an expression tree (postfix). |
| Level-order (BFS) | level by level | Shortest path in unweighted trees, layout, validation. |

## Complexity intuition

- Balanced search trees: `O(log n)` search/insert/delete.
- Heaps: `O(1)` peek, `O(log n)` push/pop (amortized `O(1)` insert for Fibonacci heaps).
- Segment/Fenwick trees: `O(log n)` range queries and updates.
- Tries: `O(L)` operations where `L` is the key length, independent of `n`.
- Unbalanced BSTs: `O(n)` worst case — balancing is what buys the guarantee.

## Running

Every file is CommonJS and can be run directly:

```bash
node src/2026/trees/Search/avlTree.js
node src/2026/trees/Heaps/binaryHeap.js
node src/2026/trees/SpacialTrees/quadTree.js
```

## Reading tip

Start with [`Basic/`](Basic/README.md), then read the category closest to your problem. Compare structures that solve the same job (for example AVL vs. red-black, or B-tree vs. LSM-tree) and note the trade-off: query time, update cost, memory overhead, persistence, and implementation complexity.
