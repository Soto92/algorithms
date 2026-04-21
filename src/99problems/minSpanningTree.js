/**
 * P84 (**) Construct the minimal spanning tree
 * Write a predicate ms_tree(Graph,Tree,Sum) to construct the minimal spanning tree of a given labeled graph.
 * Edges have the format [u, v, weight].
 */

function minimumSpanningTree(graph) {
  const [nodes, edges] = graph;

  // Sort edges by weight
  const sortedEdges = [...edges].sort((a, b) => a[2] - b[2]);

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

  const mst = [];
  let sum = 0;
  for (const edge of sortedEdges) {
    if (union(edge[0], edge[1])) {
      mst.push(edge);
      sum += edge[2];
    }
  }
  return { tree: mst, sum };
}
module.exports = { minimumSpanningTree };
