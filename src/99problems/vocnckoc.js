/**
 * P92 (***) Von Koch's conjecture (Graceful Tree Labeling)
 * A tree with N nodes is gracefully numbered if its nodes are numbered from 1 to N,
 * and the absolute differences between connected nodes form exactly the sequence 1 to N-1.
 */

function gracefulLabeling(graph) {
  const [nodes, edges] = graph;
  const n = nodes.length;

  const results = [];
  const usedLabels = new Set();
  const usedDifferences = new Set();
  const mapping = {};

  function solve(nodeIndex) {
    if (nodeIndex === n) {
      results.push({ ...mapping });
      return true; // Return first found
    }

    const currentNode = nodes[nodeIndex];
    for (let val = 1; val <= n; val++) {
      if (usedLabels.has(val)) continue;

      let valid = true;
      const diffsToAdd = [];
      for (const [u, v] of edges) {
        const other = u === currentNode ? v : v === currentNode ? u : null;
        if (other && mapping[other] !== undefined) {
          const diff = Math.abs(val - mapping[other]);
          if (usedDifferences.has(diff)) {
            valid = false;
            break;
          }
          diffsToAdd.push(diff);
        }
      }

      if (valid) {
        mapping[currentNode] = val;
        usedLabels.add(val);
        diffsToAdd.forEach((d) => usedDifferences.add(d));
        if (solve(nodeIndex + 1)) return true;
        usedLabels.delete(val);
        diffsToAdd.forEach((d) => usedDifferences.delete(d));
        delete mapping[currentNode];
      }
    }
  }
  solve(0);
  return results.length > 0 ? results[0] : null;
}
module.exports = { gracefulLabeling };
