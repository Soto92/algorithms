/**
 * P83 (**) Construct all spanning trees
 * Write a predicate s_tree(Graph,Tree) to construct (by backtracking) all spanning trees of a given graph.
 */

function spanningTrees(graph) {
  const [nodes, edges] = graph;
  const n = nodes.length;
  if (n === 0) return [];

  function getCombinations(arr, k) {
    if (k === 0) return [[]];
    if (arr.length === 0) return [];
    const [head, ...tail] = arr;
    const withHead = getCombinations(tail, k - 1).map((c) => [head, ...c]);
    const withoutHead = getCombinations(tail, k);
    return [...withHead, ...withoutHead];
  }

  function isConnected(edgeList) {
    const parent = {};
    nodes.forEach((node) => {
      parent[node] = node;
    });

    function find(i) {
      if (parent[i] === i) return i;
      return (parent[i] = find(parent[i]));
    }

    function union(i, j) {
      const rootI = find(i);
      const rootJ = find(j);
      if (rootI !== rootJ) {
        parent[rootI] = rootJ;
        return true;
      }
      return false;
    }

    let connectedComponents = n;
    for (const [u, v] of edgeList) {
      if (union(u, v)) connectedComponents--;
    }
    return connectedComponents === 1;
  }

  const edgeCombinations = getCombinations(edges, n - 1);
  return edgeCombinations.filter(isConnected);
}
module.exports = { spanningTrees };
