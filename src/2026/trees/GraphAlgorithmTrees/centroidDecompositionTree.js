class CentroidDecompositionTree {
  constructor(graph) {
    this.graph = graph;
    this.parent = new Map();
    this.removed = new Set();
    this.size = new Map();
  }

  build(start = [...this.graph.keys()][0], parent = null) {
    const total = this.computeSize(start, null);
    const centroid = this.findCentroid(start, null, total);
    this.parent.set(centroid, parent);
    this.removed.add(centroid);

    for (const neighbor of this.graph.get(centroid) || []) {
      if (!this.removed.has(neighbor)) this.build(neighbor, centroid);
    }

    return centroid;
  }

  computeSize(vertex, parent) {
    this.size.set(vertex, 1);
    for (const neighbor of this.graph.get(vertex) || []) {
      if (neighbor !== parent && !this.removed.has(neighbor)) {
        this.size.set(vertex, this.size.get(vertex) + this.computeSize(neighbor, vertex));
      }
    }
    return this.size.get(vertex);
  }

  findCentroid(vertex, parent, total) {
    for (const neighbor of this.graph.get(vertex) || []) {
      if (neighbor !== parent && !this.removed.has(neighbor) && this.size.get(neighbor) > total / 2) {
        return this.findCentroid(neighbor, vertex, total);
      }
    }
    return vertex;
  }
}

module.exports = { CentroidDecompositionTree };
