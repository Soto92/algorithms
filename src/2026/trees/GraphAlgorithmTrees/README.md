# Graph Algorithm Trees

Trees that are **produced by graph algorithms** or that maintain a graph under updates. They are not separate data types as much as views, decompositions and dynamic structures over a graph.

## Files

| File | Concept |
| --- | --- |
| `bfsTree.js` | BFS traversal tree: records parent and visit order; gives shortest paths in unweighted graphs. |
| `dfsTree.js` | DFS traversal forest: records discovery order and parent edges. |
| `spanningTree.js` | A tree connecting all vertices using a subset of graph edges. |
| `minimumSpanningTree.js` | Kruskal's algorithm with Union-Find to minimize total edge weight. |
| `shortestPathTree.js` | Dijkstra-style tree of shortest paths from a source. |
| `dominatorTree.js` | In a directed flow graph, node `d` dominates `n` if every path to `n` passes through `d`. |
| `centroidDecompositionTree.js` | Recursively split a tree at its centroid for path queries. |
| `eulerTourTree.js` | Flatten a tree with an Euler tour so subtree operations become array ranges. |
| `heavyLightDecompositionTree.js` | Split a tree into heavy paths; path queries become `O(log² n)` segments. |
| `linkCutTree.js` | Dynamic forest supporting `link`, `cut`, path queries in amortized `O(log n)`. |
| `topTree.js` | Clusters over a tree for dynamic path/connectivity operations (simplified). |

## Concepts

- **Traversal tree**: running BFS/DFS from a source yields a tree of parent pointers. Non-tree edges reveal cycles/cross-links.
- **Spanning tree**: `n - 1` edges connecting `n` vertices with no cycle. **Minimum** spanning tree minimizes total weight; Kruskal sorts edges and uses Union-Find to avoid cycles.
- **Shortest-path tree**: a parent pointer for each node such that following parents gives a shortest path to the source.
- **Dominator**: used in compilers (control-flow graphs) and security analysis.
- **Centroid decomposition**: each level halves subtree size, so path queries touch `O(log n)` centroids.
- **Euler tour**: `in[u]..out[u]` is exactly the subtree of `u`; pair with a Fenwick/segment tree for subtree aggregates.
- **Heavy-light decomposition**: choose the child with the largest subtree as "heavy"; a root-to-node path crosses `O(log n)` heavy paths.
- **Link-cut / top trees**: dynamic trees that support changing edges, unlike static HLD.

## Complexity

| Operation | Typical cost |
| --- | --- |
| BFS/DFS | `O(V + E)` |
| Kruskal MST | `O(E log E)` (sorting dominates) |
| Prim MST | `O(E log V)` with a binary heap |
| Dijkstra | `O((V + E) log V)` |
| HLD path query | `O(log² n)` |
| Link-cut operation | amortized `O(log n)` |

## Run

```bash
node src/2026/trees/GraphAlgorithmTrees/bfsTree.js
node src/2026/trees/GraphAlgorithmTrees/minimumSpanningTree.js
node src/2026/trees/GraphAlgorithmTrees/heavyLightDecompositionTree.js
```

For graph basics, see [`../../graphs/README.md`](../../graphs/README.md) and the graph problems in [`../../../99problems/readme.md`](../../../99problems/readme.md).
