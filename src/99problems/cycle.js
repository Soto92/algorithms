/**
 * P82 (*) Cycle from a given node
 * Write a predicate cycle(G,A,P) to find a closed path (cycle) P starting at a given node A in the graph G.
 */

function cycle(node, graph) {
  const [nodes, edges] = graph;
  const adj = {};

  nodes.forEach((n) => {
    adj[n] = [];
  });
  edges.forEach(([u, v]) => {
    if (adj[u]) adj[u].push(v);
    if (adj[v]) adj[v].push(u); // Assuming undirected
  });

  const results = [];
  function dfs(current, startNode, visited, path) {
    visited.add(current);
    path.push(current);
    for (const neighbor of adj[current]) {
      if (neighbor === startNode && path.length > 2) {
        results.push([...path, startNode]);
      } else if (!visited.has(neighbor)) {
        dfs(neighbor, startNode, visited, path);
      }
    }
    path.pop();
    visited.delete(current);
  }
  dfs(node, node, new Set(), []);
  return results;
}
module.exports = { cycle };
