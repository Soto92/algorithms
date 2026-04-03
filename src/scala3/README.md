# KD-Tree (k-dimensional Tree) - Scala 3

This module implements a k-dimensional tree for organizing points in k-dimensional space, with basic operations such as insertion, membership tests, nearest-neighbor search, and range search.

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
- Insertions can create unbalanced trees without rebalancing.
- Worst-case query time can approach linear if data is skewed.

## Files

- KD-Tree implementation: KDTree.scala
- Tests (MUnit): KDTreeTest.scala

## Running tests (scala-cli)

```bash
scala-cli test .
```
