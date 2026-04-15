/**
 * P87 (**) Depth-first order graph traversal
 * Write a predicate depth_first_order(Graph,Node,Tree) to collect the nodes
 * in a depth-first search order starting at Node.
 */

function depthFirstOrder(graph, startNode) {
  const [nodes, edges] = graph;
  const adj = {};
  nodes.forEach((n) => {
    adj[n] = [];
  });
  edges.forEach(([u, v]) => {
    adj[u].push(v);
    adj[v].push(u);
  });

  const visited = new Set();
  const order = [];
  function dfs(node) {
    visited.add(node);
    order.push(node);
    for (const neighbor of adj[node]) {
      if (!visited.has(neighbor)) dfs(neighbor);
    }
  }
  dfs(startNode);
  return order;
}
module.exports = { depthFirstOrder };
