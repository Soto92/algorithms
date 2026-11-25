# System Trees

Trees used as **models of real systems**: documents, files, dependencies, routes, 3D scenes and content-addressed storage. The value here is the mapping between a real hierarchy and a tree data structure.

## Files

| File | System modeled | Concept |
| --- | --- | --- |
| `domTree.js` | Browser DOM | Elements, attributes and children; a document is a tree. |
| `xmlTree.js` | XML | Nested elements with attributes and text. |
| `jsonTree.js` | JSON | Objects/arrays become labeled nodes. |
| `directoryTree.js` | Directories | Folders contain folders/files. |
| `fileSystemTree.js` | Filesystem | Paths, file/folder nodes, lookup by name. |
| `dependencyTree.js` | Package/build dependencies | Directed graph/tree of "A depends on B". |
| `routingTree.js` | URL/router paths | Match path segments; nested routes. |
| `radixRoutingTree.js` | Prefix routing | Longest-prefix match using a radix tree. |
| `sceneGraph.js` | 3D graphics | Node hierarchy with transforms (translation/rotation/scale). |
| `merkleDag.js` | Content-addressed storage | Nodes addressed by hashes; used by Git/IPFS. |

## Concepts

- **Hierarchy as a tree**: parent/child relationships map naturally to containment (DOM, XML, folders).
- **Traversal**: rendering a DOM, serializing XML/JSON and walking a scene graph are all traversals.
- **Path lookup**: `routingTree` matches `/users/:id` style segments; `radixRoutingTree` finds the longest matching prefix (as in IP routing).
- **Dependency graph**: usually a DAG, not a tree, because a package can be shared. Cycles indicate a dependency problem.
- **Transforms compose**: in a scene graph, a child's world transform = parent transform × child local transform.
- **Content addressing**: a Merkle DAG node's identity is its hash; identical content deduplicates automatically and tampering changes the hash.
- **Caching/invalidation**: in the DOM, changes propagate upward; in Merkle structures, hashes propagate upward.

## Complexity intuition

- Path lookup in a balanced routing radix tree: `O(path length)`.
- Filesystem lookup: `O(depth)` with a hash map per directory.
- Tree traversal/render: `O(nodes)`.
- Merkle verification: `O(log n)` hashes for a proof path.

## Run

```bash
node src/2026/trees/SystemTrees/domTree.js
node src/2026/trees/SystemTrees/directoryTree.js
node src/2026/trees/SystemTrees/radixRoutingTree.js
node src/2026/trees/SystemTrees/merkleDag.js
```

These are small simulations. Real implementations add namespaces, escaping, permissions, symlinks, concurrency and incremental updates.
