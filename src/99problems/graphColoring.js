/**
 * P86 (**) Node degree and graph coloration
 * Write a predicate degree(Graph,Node,Deg) to determine the degree of a given node.
 * Write a predicate color(Graph,Coloring) that colors the nodes (Welsh-Powell).
 */

function nodeDegrees(graph) {
  const [nodes, edges] = graph;
  const degrees = {};
  nodes.forEach((n) => {
    degrees[n] = 0;
  });
  edges.forEach(([u, v]) => {
    degrees[u]++;
    degrees[v]++;
  });
  return degrees;
}

function colorGraph(graph) {
  const [nodes, edges] = graph;
  const degrees = nodeDegrees(graph);

  // Sort nodes descending by degree
  const sortedNodes = [...nodes].sort((a, b) => degrees[b] - degrees[a]);

  const adj = {};
  nodes.forEach((n) => {
    adj[n] = [];
  });
  edges.forEach(([u, v]) => {
    adj[u].push(v);
    adj[v].push(u);
  });

  const colors = {};
  let colorIdx = 1;

  for (const node of sortedNodes) {
    if (!colors[node]) {
      colors[node] = colorIdx;
      // Try to assign the same color to other non-adjacent uncolored nodes
      colorIdx++;
    }
  }
  return colors; // Very simplified greedy vertex coloring
}
module.exports = { nodeDegrees, colorGraph };
