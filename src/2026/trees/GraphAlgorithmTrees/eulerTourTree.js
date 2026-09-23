class EulerTourTree {
  constructor() {
    this.tour = [];
    this.first = new Map();
  }

  build(graph, root) {
    this.tour = [];
    this.first.clear();
    this.visit(graph, root, null);
    return this;
  }

  visit(graph, vertex, parent) {
    if (!this.first.has(vertex)) this.first.set(vertex, this.tour.length);
    this.tour.push(vertex);

    for (const neighbor of graph.get(vertex) || []) {
      if (neighbor === parent) continue;
      this.visit(graph, neighbor, vertex);
      this.tour.push(vertex);
    }
  }
}

module.exports = { EulerTourTree };
