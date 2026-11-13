# Graphs (2026)

This folder is a placeholder for upcoming graph material. It is currently empty; the graph implementations and notes live elsewhere in the repository.

## Core graph concepts

- **Graph**: a set of vertices (nodes) and edges connecting them: `G = (V, E)`.
- **Directed vs. undirected**: edges either have a direction (`A → B`) or are bidirectional (`A — B`).
- **Weighted vs. unweighted**: edges may carry a cost/distance.
- **Adjacency list**: `Map<vertex, neighbors[]>` — memory `O(V + E)`, best for sparse graphs.
- **Adjacency matrix**: `V × V` table — `O(1)` edge lookup, `O(V²)` memory.
- **Degree**: number of incident edges; in a directed graph, in-degree and out-degree.

## Algorithms to connect with this folder

| Problem | Technique |
| --- | --- |
| Traversal / reachability | BFS (shortest in unweighted graphs), DFS. |
| Cycle detection | DFS colors or Union-Find. |
| Topological order | Kahn's algorithm or DFS finish times (DAGs only). |
| Shortest path, non-negative weights | Dijkstra. |
| Shortest path, negative weights | Bellman-Ford. |
| All-pairs shortest paths | Floyd-Warshall. |
| Minimum spanning tree | Kruskal (Union-Find) or Prim (heap). |
| Connected components | BFS/DFS or Union-Find. |
| Bipartiteness | Two-coloring with BFS/DFS. |

## Where the existing code lives

| Location | What it shows |
| --- | --- |
| [`../graphNotes.md`](../graphNotes.md) | Directed vs. undirected graph notes with Mermaid diagrams. |
| [`../directedGraph.ts`](../directedGraph.ts) | Directed graph with adjacency lists. |
| [`../undirectedGraph.ts`](../undirectedGraph.ts) | Undirected graph. |
| [`../../2025/dataStructures/Graph.js`](../../2025/dataStructures/Graph.js) | Undirected graph structure. |
| [`../../2025/dataStructures/DirectedGraph.js`](../../2025/dataStructures/DirectedGraph.js) | Directed graph structure. |
| [`../../2025/dataStructures/GraphAdjacencyMatrix.js`](../../2025/dataStructures/GraphAdjacencyMatrix.js) | Matrix representation. |
| [`../../2025/dataStructures/DisjointSetOptimized.js`](../../2025/dataStructures/DisjointSetOptimized.js) | Union-Find for connectivity/MST. |
| [`../../2025/networkDelayDijkstra.js`](../../2025/networkDelayDijkstra.js) | Dijkstra's algorithm. |
| [`../../2025/alienDictionary.js`](../../2025/alienDictionary.js) | Topological sort. |
| [`../../2026/trees/GraphAlgorithmTrees/`](../trees/GraphAlgorithmTrees/README.md) | BFS/DFS trees, MST, shortest-path tree, dominators, link-cut trees. |
| [`../../99problems/`](../../99problems/readme.md) | Graph problems P80–P89 (paths, cycles, spanning trees, coloring, isomorphism). |

## Representation example

```ts
// Directed, weighted graph
const graph = new Map<string, Array<{ to: string; weight: number }>>();
graph.set("A", [{ to: "B", weight: 4 }]);
graph.set("B", []);
```

When adding implementations here, prefer one file per algorithm and include a small example plus complexity notes.
