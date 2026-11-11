# Data Structures (2025)

A from-scratch JavaScript library of 55 classic data structures. Each file exports one class (or a small set of classes) and most include a demo at the bottom.

The point is comparison: many structures solve the same abstract problem (ordered set, priority queue, map, spatial index) with different trade-offs.

## Linear structures

| File | Concept | Notes |
| --- | --- | --- |
| `LinkedList.js` | Singly linked list. | `O(1)` insert at head, `O(n)` search. |
| `DoublyLinkedList.js` | List with `next` and `prev` pointers. | `O(1)` removal when you hold the node. |
| `CircularLinkedList.js` | Last node points back to the first. | Useful for round-robin buffers. |
| `XORLinkedList.js` | List storing `prev XOR next` in one field. | Memory trick; hard to debug. |
| `Stack.js` | LIFO structure. | `push`, `pop`, `peek`. |
| `Queue.js` | FIFO structure. | `enqueue`, `dequeue`. |
| `CircularQueue.js` | Fixed-capacity FIFO reusing slots. | No shifting; `O(1)` operations. |
| `Deque.js` | Double-ended queue. | Insert/remove at both ends. |
| `Set.js` | Unique-value collection. | Custom implementation of the Set ADT. |

## Hash-based structures

| File | Concept | Notes |
| --- | --- | --- |
| `HashTable.js` | Separate chaining hash table. | Buckets hold colliding entries. |
| `HashTableLinearProbing.js` | Open addressing with linear probing. | Collisions probe the next slot. |
| `HAMT.js` | Hash Array Mapped Trie. | Persistent-style map with structural sharing. |
| `BloomFilter.js` | Probabilistic membership filter. | No false negatives; possible false positives. |
| `LRUCache.js` | Least Recently Used cache. | Hash map + doubly linked list, `O(1)` operations. |
| `LFUCache.js` | Least Frequently Used cache. | Evicts the lowest-frequency entry. |

## Trees and ordered structures

| File | Concept | Notes |
| --- | --- | --- |
| `BinarySearchTree.js` | Unbalanced BST. | `O(log n)` average, `O(n)` worst case. |
| `AVLTree.js` | Height-balanced BST. | Rotations keep height `O(log n)`. |
| `RedBlackTree.js` | Color-balanced BST. | Fewer rotations than AVL on insert/delete. |
| `AATree.js` | AA tree (red-black variant). | Simpler invariants; `level` per node. |
| `SplayTree.js` | Self-adjusting BST. | Recently used keys move to the root. |
| `ScapegoatTree.js` | Size-balanced BST. | Rebuilds unbalanced subtrees. |
| `Treap.js` | BST + random heap priority. | Expected `O(log n)` without explicit balancing. |
| `CartesianTree.js` | Heap-ordered binary tree from a sequence. | Basis for treaps and RMQ tricks. |
| `ThreadedBinaryTree.js` | BST with threads replacing null right pointers. | Enables in-order traversal without recursion/stack. |
| `TwoThreeTree.js` | Multiway search tree (2-nodes and 3-nodes). | Gateway to B-trees. |
| `BTree.js` | Balanced multiway search tree. | Designed for disk/page access. |
| `BKTree.js` | Metric tree for approximate string search. | Edit-distance queries. |
| `TernarySearchTree.js` | Three-way character tree. | String keys with BST-like nodes. |
| `Trie.js` | Prefix tree. | `O(key length)` lookup. |
| `RadixTree.js` | Compressed prefix tree. | Edges store strings, not single chars. |
| `SuffixArray.js` | Sorted array of all suffixes. | Fast substring search. |
| `SuffixTree.js` | Compressed trie of all suffixes. | Rich string queries; more memory. |
| `IntervalTree.js` | BST over intervals with subtree `max`. | Overlap/stabbing queries. |

## Heaps and priority queues

| File | Concept | Notes |
| --- | --- | --- |
| `MinHeap.js` | Binary min-heap in an array. | `O(log n)` push/pop, `O(1)` peek. |
| `MaxHeap.js` | Binary max-heap. | Same complexity, largest on top. |
| `PriorityQueue.js` | Min-heap-backed priority queue. | Used by Dijkstra/A*. |
| `DHeap.js` | `d`-ary heap. | Tuning between binary heap and flatter trees. |
| `BinomialHeap.js` | Forest of binomial trees. | Efficient `merge`. |
| `FibonacciHeap.js` | Heap with lazy consolidation. | Amortized `O(1)` insert/decrease-key (simplified here). |
| `PairingHeap.js` | Self-adjusting heap. | Simple merge, good practical performance. |

## Graphs

| File | Concept | Notes |
| --- | --- | --- |
| `Graph.js` | Undirected graph via adjacency list. | Add vertices/edges, traverse. |
| `DirectedGraph.js` | Directed graph via adjacency list. | Direction matters for paths/cycles. |
| `GraphAdjacencyMatrix.js` | Graph as an `n × n` matrix. | `O(1)` edge check, `O(n²)` memory. |
| `DisjointSet.js` | Union-Find. | Connected components, Kruskal. |
| `DisjointSetOptimized.js` | Union by rank + path compression. | Near-constant amortized operations. |

## Spatial, geometric and miscellaneous

| File | Concept | Notes |
| --- | --- | --- |
| `Quadtree.js` | 2D space partitioning into four quadrants. | Repeatedly subdivides on capacity. |
| `KdTree.js` | k-dimensional BST. | Nearest-neighbor and range search. |
| `RTree.js` | Bounding-box tree for spatial objects. | Used by spatial databases. |
| `SegmentTree.js` | Range queries and point updates. | `O(log n)` query/update. |
| `FenwickTree.js` | Binary Indexed Tree. | Prefix sums with `O(log n)` updates. |
| `MerkleTree.js` | Hash tree. | Tamper-evident data; used in Git/blockchains. |
| `DancingLinks.js` | DLX structure for exact cover. | Solves Sudoku, N-Queens, tiling. |
| `VanEmdeBoasTree.js` | Integer set with `O(log log U)` operations. | Fast predecessor/successor on bounded universes. |
| `BinaryTrie.js` | Bitwise trie over integers. | Max XOR and binary prefix queries. |
| `SkipList.js` | Probabilistic ordered list with express lanes. | Expected `O(log n)` search. |

## How to study these files

1. Pick a structure and read the class API (`add`, `remove`, `search`, etc.).
2. Compare its complexity with a simpler alternative (for example BST vs. hash table vs. heap).
3. Run the demo and tweak the input to see balancing or collisions happen.

```bash
node src/2025/dataStructures/AVLTree.js
node src/2025/dataStructures/LRUCache.js
```

Some implementations are intentionally simplified and may omit edge cases or production optimizations. Use them to learn the shape of the algorithm, then compare with a standard library.
