/**
 * P80 (***) Conversions between graph representations
 * Example: Graph term [nodes, edges] to Adjacency list.
 */

function graphToAdj(graph) {
  const [nodes, edges] = graph;
  const adj = {};

  nodes.forEach((n) => {
    adj[n] = [];
  });
  edges.forEach(([u, v]) => {
    if (adj[u]) adj[u].push(v);
    if (adj[v] && u !== v) adj[v].push(u); // Assuming undirected graphs
  });

  return Object.keys(adj).map((k) => [k, adj[k]]);
}

module.exports = { graphToAdj };
