# 2024 — Traveling Salesman

Early algorithm practice: a heuristic solution to the **Traveling Salesman Problem (TSP)**.

## Files

| File | Concept |
| --- | --- |
| `travelingSalesman.js` | `City` model with Euclidean distance, plus the **nearest-neighbor** heuristic and a small demo. |
| `travelingSalesman.png` | Diagram used to illustrate a tour. |

## The problem

Given a list of cities and the distances between them, find the shortest possible tour that visits every city once and returns to the start.

TSP is **NP-hard**: the number of possible tours grows factorially (`(n-1)! / 2`), so exact search becomes impractical quickly.

## The implemented approach: nearest neighbor

1. Start at the first unvisited city.
2. Repeatedly move to the closest unvisited city.
3. Stop when every city has been visited.

```js
const tour = nearestNeighborAlgorithm(cities);
```

**Complexity:** `O(n²)` time, `O(n)` extra space.

**Pros:** fast and simple; often produces a reasonable tour.

**Cons:** greedy and **not optimal** — a locally short edge can force a very long edge later. A common improvement is **2-opt**: repeatedly reverse segments while the tour gets shorter.

## Concepts worth remembering

- **Heuristic**: a practical rule that finds a good-enough answer without guaranteeing the optimum.
- **Euclidean distance**: `sqrt((x2 - x1)² + (y2 - y1)²)`.
- **Approximation algorithm**: for metric TSP, better guarantees exist (for example the Christofides algorithm, ≤ 1.5× optimal).

## Run

```bash
node src/2024/travelingSalesman.js
```
