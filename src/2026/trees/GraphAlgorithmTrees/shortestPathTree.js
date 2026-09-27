class ShortestPathTree {
  constructor() {
    this.parent = new Map();
    this.distance = new Map();
  }

  build(graph, source) {
    const vertices = [...graph.keys()];
    for (const vertex of vertices) this.distance.set(vertex, Infinity);
    this.distance.set(source, 0);

    const queue = new Set(vertices);

    while (queue.size) {
      let current = null;
      for (const vertex of queue) {
        if (current === null || this.distance.get(vertex) < this.distance.get(current)) current = vertex;
      }

      queue.delete(current);

      for (const edge of graph.get(current) || []) {
        const nextDistance = this.distance.get(current) + edge.weight;
        if (nextDistance < this.distance.get(edge.to)) {
          this.distance.set(edge.to, nextDistance);
          this.parent.set(edge.to, current);
        }
      }
    }

    return this;
  }
}

module.exports = { ShortestPathTree };
