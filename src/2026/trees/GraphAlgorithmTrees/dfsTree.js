class DfsTree {
  constructor() {
    this.parent = new Map();
    this.order = [];
  }

  build(graph, start) {
    const visited = new Set();
    this.visit(graph, start, null, visited);
    return this;
  }

  visit(graph, vertex, parent, visited) {
    visited.add(vertex);
    this.parent.set(vertex, parent);
    this.order.push(vertex);

    for (const neighbor of graph.get(vertex) || []) {
      if (!visited.has(neighbor)) this.visit(graph, neighbor, vertex, visited);
    }
  }
}

module.exports = { DfsTree };
