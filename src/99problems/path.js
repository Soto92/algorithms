/**
 * P81 (**) Path from one node to another one
 * Write a predicate path(G,A,B,P) to find an acyclic path P from node A to node B in the graph G.
 * The predicate should return all paths via backtracking (in JS, an array of all paths).
 */

function paths(source, target, graph) {
  const [nodes, edges] = graph;
  const adj = {};

  nodes.forEach((n) => {
    adj[n] = [];
  });
  edges.forEach(([u, v]) => {
    if (adj[u]) adj[u].push(v);
    if (adj[v]) adj[v].push(u); // Assuming undirected graph
  });

  const results = [];
  function dfs(current, dest, visited, path) {
    visited.add(current);
    path.push(current);
    if (current === dest) {
      results.push([...path]);
    } else {
      for (const neighbor of adj[current]) {
        if (!visited.has(neighbor)) dfs(neighbor, dest, visited, path);
      }
    }
    path.pop();
    visited.delete(current);
  }
  dfs(source, target, new Set(), []);
  return results;
}
module.exports = { paths };
