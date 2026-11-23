# Spatial Trees

Trees that index **points, boxes, polygons or metric objects** so that nearest-neighbor and range queries avoid scanning everything.

## Files

| File | Concept | Best for |
| --- | --- | --- |
| `kdTree.js` | k-d tree: split alternately by dimension. | Low-dimensional points, nearest neighbor. |
| `kdbTree.js` | k-d-B-tree: k-d partitions + B-tree pages. | Disk-based multidimensional indexing. |
| `quadTree.js` | Recursively split a 2D region into four quadrants. | 2D points/regions, image and map data. |
| `octree.js` | Recursively split 3D space into eight octants. | 3D points, voxels, collision detection. |
| `rangeTree.js` | Tree of sorted secondary lists. | Orthogonal range reporting/counting. |
| `ballTree.js` | Nodes are balls (center + radius). | Nearest neighbor in metric spaces. |
| `coverTree.js` | Hierarchy of points with a covering radius. | Fast nearest neighbor in high dimensions. |
| `vpTree.js` | Vantage-point tree: split by distance to a pivot. | Metric-space similarity search. |
| `mTree.js` | M-tree: metric tree with covering radii. | Metric indexes, range/nearest queries. |
| `rTree.js` | Bounding rectangles over objects. | Spatial databases, GIS. |
| `rPlusTree.js` | R+-tree: no overlapping sibling regions. | Range queries with less overlap. |
| `rStarTree.js` | R*-tree: minimizes overlap/perimeter on insert. | High-quality spatial indexes. |
| `xTree.js` | X-tree: handles overlap with supernodes. | High-dimensional data. |
| `bspTree.js` | Binary space partitioning with splitting lines. | Rendering, CSG, collision. |
| `boundingVolumeHierarchy.js` | BVH: nested bounding volumes for objects. | Ray tracing, physics broad phase. |
| `prioritySearchTree.js` | Priority search tree. | Three-sided orthogonal queries. |
| `multiDimensionalFenwickTree.js` | 2D+ Fenwick tree. | Dense grid range sums. |
| `multiDimensionalSegmentTree.js` | 2D+ segment tree. | Dense grid range aggregates. |
| `genericNAryTree.js` | Generic n-ary node. | Building block for other spatial trees. |

## Concepts

- **Bounding volume**: a simple shape (box, ball) that contains a set of objects. If the query misses the volume, the whole subtree is skipped.
- **Space partitioning**: divide space into cells (quadtree/octree/k-d/BSP) so each subtree owns a region.
- **Metric tree**: uses only a distance function, not coordinates (ball/cover/VP/M-tree). Works for strings, embeddings, etc.
- **Curse of dimensionality**: as dimensions grow, most spatial indexes degrade toward a linear scan; bounding volumes overlap more.
- **Range query**: report/count all objects intersecting a query region.
- **Nearest neighbor**: branch-and-bound, pruning subtrees whose minimum possible distance exceeds the current best.
- **Overlap vs. disjointness**: R-trees allow sibling boxes to overlap; R+ forces disjoint regions at the cost of duplicating objects.

## Choosing a structure

| Query | Structure |
| --- | --- |
| 2D points, simple implementation | Quad-tree or k-d tree. |
| 3D points/voxels | Octree. |
| Rectangles/polygons in a database | R-tree family. |
| Nearest neighbor in a metric space | VP-tree, ball tree, cover tree, M-tree. |
| Ray tracing / collision broad phase | BVH or BSP. |
| Dense grid prefix sums | 2D Fenwick tree. |
| Orthogonal range reporting | Range tree. |

## Complexity intuition

- Balanced k-d tree: `O(log n)` average query in low dimensions, approaching `O(n)` in high dimensions.
- Quadtree/octree: `O(log n)` for uniformly distributed data; can degenerate for clustered data.
- R-tree: `O(log n)`-ish with good fill factor; overlap can hurt.
- Building: `O(n log n)` typical; dynamic inserts may cause splits/rebalancing.

## Run

```bash
node src/2026/trees/SpacialTrees/kdTree.js
node src/2026/trees/SpacialTrees/quadTree.js
node src/2026/trees/SpacialTrees/rTree.js
node src/2026/trees/SpacialTrees/ballTree.js
```
