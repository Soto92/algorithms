# Geometry and Range-Query Trees

Trees that answer queries over **sequences, intervals and coordinates** faster than scanning.

## Files

| File | Concept | Typical query |
| --- | --- | --- |
| `segmentTree.js` | Binary tree over array ranges. | Range sum/min/max, point update: `O(log n)`. |
| `lazySegmentTree.js` | Segment tree with deferred updates. | Range add/assign + range query: `O(log n)`. |
| `dynamicSegmentTree.js` | Sparse segment tree that allocates nodes on demand. | Large/sparse coordinate ranges. |
| `persistentSegmentTree.js` | Segment tree that keeps old versions (path copying). | Query historical versions / k-th smallest in a range. |
| `fenwickTree.js` | Binary Indexed Tree (BIT). | Prefix sums with point updates: `O(log n)`. |
| `mergeSortTree.js` | Segment tree whose nodes store sorted lists. | Count values ≤ x in a range. |
| `intervalTree.js` | BST over intervals, each node stores subtree `max` endpoint. | Find intervals overlapping a point/range. |
| `liChaoTree.js` | Lines/functions with min/max queries. | Dynamic convex hull trick, DP optimization. |
| `prioritySearchTree.js` | Combines a priority (heap) with a search tree. | Three-sided range queries. |
| `rangeTree.js` | Tree of sorted secondary structures. | Orthogonal range reporting/counting. |
| `waveletTree.js` | Recursively partitions values by rank. | Rank/select, range k-th smallest. |
| `waveletMatrix.js` | Bitwise wavelet structure. | Same queries, often more cache-friendly. |

## Core ideas

- **Range decomposition**: any interval can be covered by `O(log n)` canonical nodes of a segment tree.
- **Lazy propagation**: store pending range updates at a node; push them down only when needed.
- **Persistence**: instead of mutating a node, create a new copy along the update path; share unchanged subtrees. Each version costs `O(log n)` new nodes.
- **Coordinate compression**: map large/sparse coordinates to `1..n` before building a Fenwick/segment tree.
- **Wavelet structures**: at each level split values into "small" and "large"; a rank operation becomes a few bit operations.
- **Intervals vs. points**: interval trees answer "what overlaps this range?"; segment trees answer "what is the aggregate over this range?".

## Choosing a structure

| Problem | Structure |
| --- | --- |
| Point updates + range sums | Fenwick tree (simplest) or segment tree. |
| Range updates + range queries | Lazy segment tree. |
| Historical versions | Persistent segment tree. |
| k-th smallest in a subarray | Persistent segment tree or wavelet tree. |
| Count values in `[a, b]` in a range | Merge-sort tree or wavelet tree. |
| Overlapping intervals | Interval tree. |
| DP with linear cost functions | Li Chao tree. |

## Run

```bash
node src/2026/trees/GeometryTrees/segmentTree.js
node src/2026/trees/GeometryTrees/lazySegmentTree.js
node src/2026/trees/GeometryTrees/waveletTree.js
```
