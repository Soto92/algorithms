/**
 * P89 (**) Bipartite graphs
 * Write a predicate bipartite(Graph) to check whether a given graph is bipartite.
 */

function bipartite(graph) {
  const [nodes, edges] = graph;
  const adj = {};
  nodes.forEach((n) => {
    adj[n] = [];
  });
  edges.forEach(([u, v]) => {
    adj[u].push(v);
    adj[v].push(u);
  });

  const colors = {};

  for (const startNode of nodes) {
    if (!(startNode in colors)) {
      colors[startNode] = 0;
      const queue = [startNode];

      while (queue.length > 0) {
        const node = queue.shift();
        for (const neighbor of adj[node]) {
          if (!(neighbor in colors)) {
            colors[neighbor] = 1 - colors[node];
            queue.push(neighbor);
          } else if (colors[neighbor] === colors[node]) {
            return false;
          }
        }
      }
    }
  }
  return true;
}
module.exports = { bipartite };
