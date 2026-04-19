/**
 * P94 (***) Generate K-regular simple graphs with N nodes
 */

function kRegularGraphs(n, k) {
  // K-regular graph must satisfy: N * K is even, and K < N.
  if ((n * k) % 2 !== 0 || k >= n) return [];

  const nodes = Array.from({ length: n }, (_, i) => i);
  const allPossibleEdges = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      allPossibleEdges.push([i, j]);
    }
  }

  const expectedEdges = (n * k) / 2;
  const results = [];

  function solve(edgeIdx, currentEdges, degrees) {
    if (currentEdges.length === expectedEdges) {
      if (degrees.every((d) => d === k)) {
        results.push([...currentEdges]);
      }
      return;
    }
    if (edgeIdx >= allPossibleEdges.length) return;

    const [u, v] = allPossibleEdges[edgeIdx];
    if (degrees[u] < k && degrees[v] < k) {
      degrees[u]++;
      degrees[v]++;
      solve(edgeIdx + 1, [...currentEdges, [u, v]], degrees);
      degrees[u]--;
      degrees[v]--;
    }
    solve(edgeIdx + 1, currentEdges, degrees);
  }
  solve(0, [], Array(n).fill(0));
  return results;
}
module.exports = { kRegularGraphs };
