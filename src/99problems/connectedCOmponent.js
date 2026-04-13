/**
 * P88 (**) Connected components
 * Write a predicate connected_components(Graph,Cs) to determine the
 * connected components of a graph.
 */

const { depthFirstOrder } = require("./depthFirstOrder.js");

function connectedComponents(graph) {
  const [nodes, edges] = graph;
  const visited = new Set();
  const components = [];

  for (const node of nodes) {
    if (!visited.has(node)) {
      const component = depthFirstOrder(graph, node);
      component.forEach((n) => visited.add(n));
      components.push(component.sort());
    }
  }

  return components.sort((a, b) => a[0].localeCompare(b[0]));
}

module.exports = { connectedComponents };
