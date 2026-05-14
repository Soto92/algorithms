# KD-Tree (k-dimensional Tree) - Scala 3

This module implements a classic median-split k-dimensional tree for organizing points in k-dimensional space. It stores a value at each point and supports insertion, membership tests, nearest-neighbor search, and range search.

## Use case (What is the use case for this DS?)

A KD-Tree is useful when you need fast spatial queries over multi-dimensional points. Typical scenarios include:

- Nearest-neighbor lookup (e.g., recommendation systems, similarity search, clustering pipelines)
- Range search (e.g., find all points inside a bounding box)
- Spatial indexing for geometry, graphics, or simulation tasks

### Real use cases:

Frontend

- Map UIs: find the closest marker to the cursor or taps.
- Autocomplete on canvas: snap to nearest point in a scatter plot.
- 2D/3D editors: select nearest vertex/edge in CAD or design tools.
- Data viz: filter all points inside a lasso/rectangle selection.
- Games in the browser: nearby entities for interactions or collisions.

Backend

- Search/recommendation: nearest neighbors in embedding space.
- Matching/similarity APIs: find similar products/users/documents.
- Geospatial services: range queries for “nearby” results.
- Fraud/risk: find transactions close in feature space.
- IoT analytics: query sensor points within thresholds.

## Pros and cons (What are the pros and cons?)

Pros:

- Efficient average-case nearest-neighbor and range queries compared to linear scan.
- Space-partitioning structure that works well for low-to-moderate dimensions.
- Deterministic structure (no hashing) and supports ordered spatial traversal.

Cons:

- Performance degrades as dimension grows (the "curse of dimensionality").
- The tree is rebuilt by median split after insertion, so inserts are more expensive than plain binary-search-tree insertion.
- Worst-case query time can approach linear if data is skewed.

## Build example and tree shape

Example input (k=2):
```scala
val points = Vector(
  Vector(2.0, 3.0),
  Vector(5.0, 4.0),
  Vector(9.0, 6.0),
  Vector(4.0, 7.0),
  Vector(8.0, 1.0),
  Vector(7.0, 2.0)
)

val tree = KDTree.from(2, points.map(p => p -> p))
```

Resulting balanced KD-Tree (axes alternate x/y by depth):
```
                   (7,2) [x]
                  /         \
             (5,4) [y]     (9,6) [y]
             /      \       /
        (2,3) [x] (4,7) [x] (8,1) [x]
```

Explanation (classic construction):
- The tree chooses an axis per level: axis = depth % k.
- It sorts the current points by that axis and promotes the median point to the current node.
- Points before the median become the left subtree; points after the median become the right subtree.
- This repeats recursively, alternating axes as depth increases (x, y, x, y in 2D).
- In the example above, `(7,2)` is the median on `x`, then `(5,4)` and `(9,6)` are medians on `y` for their subtrees.
- If the point already exists, the latest value replaces the previous value (no duplicate node).

## Files

- KD-Tree implementation: KDTree.scala
- Tests (MUnit): KDTreeTest.scala
- Restaurant demo: RestaurantDemo.scala

## Real-world demo: restaurant search

The `restaurantDemo` entrypoint builds a 2D KD-Tree of restaurants (projecting lat/lon into meters) and queries the nearest restaurant plus the ones within a radius.

```bash
scala-cli run . --main-class algorithms.scala3.restaurantDemo
```

## Running tests (scala-cli)

```bash
scala-cli test .
```
