# Heaps and Priority Queues

Trees that keep the **minimum or maximum** at the root. A heap is not sorted; it only guarantees the parent/child order, which is enough for a priority queue.

## Files

| File | Concept | Key property |
| --- | --- | --- |
| `binaryHeap.js` | Generic binary heap with a comparator. | Array layout, `O(log n)` push/pop. |
| `minHeap.js` | Binary min-heap. | Parent ≤ children. |
| `maxHeap.js` | Binary max-heap. | Parent ≥ children. |
| `dAryHeap.js` | `d`-ary heap. | Shallower tree; fewer swaps, more comparisons. |
| `binomialHeap.js` | Forest of binomial trees. | Efficient `merge`; `O(log n)` insert/extract. |
| `fibonacciHeap.js` | Lazy-consolidating heap. | Amortized `O(1)` insert/decrease-key; `O(log n)` extract-min. |
| `pairingHeap.js` | Self-adjusting heap. | Simple meld, good practical performance. |
| `rankPairingHeap.js` | Pairing heap variant using rank. | Better theoretical bounds. |
| `leftistHeap.js` | Meldable heap with null-path lengths. | `O(log n)` merge. |
| `skewHeap.js` | Meldable heap with unconditional swaps. | Amortized `O(log n)` merge. |
| `brodalQueue.js` | Worst-case-efficient meldable heap. | Theoretical structure; complex. |
| `treap.js` | BST + random heap priority. | Expected `O(log n)` for ordered operations. |

## Heap concepts

- **Heap property**: every parent compares correctly with its children. It does **not** order siblings.
- **Array representation**: for a binary heap, children of `i` are `2i+1` and `2i+2`; parent is `(i-1)/2`.
- **Sift up / sift down**: restore the property after insert or extract.
- **Build heap**: `O(n)` by sifting down from the last parent, not `O(n log n)`.
- **Meldable heap**: supports merging two heaps efficiently — important for algorithms that combine priority queues.
- **decrease-key**: needed by Dijkstra/Prim. Binary heaps do it in `O(log n)`; Fibonacci heaps in amortized `O(1)`.
- **Amortized vs. worst case**: Fibonacci/Brodal heaps trade implementation complexity for better bounds.

## Complexity comparison

| Heap | Insert | Extract-min | Meld | decrease-key |
| --- | --- | --- | --- | --- |
| Binary | `O(log n)` | `O(log n)` | `O(n)` | `O(log n)` |
| d-ary | `O(log_d n)` | `O(d log_d n)` | `O(n)` | `O(log_d n)` |
| Binomial | `O(log n)` | `O(log n)` | `O(log n)` | `O(log n)` |
| Fibonacci | `O(1)` amortized | `O(log n)` | `O(1)` | `O(1)` amortized |
| Pairing | `O(1)` | `O(log n)` amortized | `O(1)` | `O(log n)` amortized |
| Leftist/skew | `O(log n)` | `O(log n)` | `O(log n)` | `O(log n)` |

## When to use what

- **Binary min-heap** for most interview problems: Dijkstra, top-k, merging streams.
- **d-ary heap** when tuning cache behavior or comparator cost.
- **Meldable heaps** when combining priority queues repeatedly.
- **Treap** when you need both priority order and ordered traversal/range queries.

## Run

```bash
node src/2026/trees/Heaps/minHeap.js
node src/2026/trees/Heaps/binomialHeap.js
node src/2026/trees/Heaps/treap.js
```
