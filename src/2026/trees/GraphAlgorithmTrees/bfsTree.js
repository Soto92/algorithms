class BfsTree {
  constructor() {
    this.parent = new Map();
    this.order = [];
  }

  build(graph, start) {
    const visited = new Set([start]);
    const queue = [start];
    this.parent.set(start, null);

    while (queue.length) {
      const vertex = queue.shift();
      this.order.push(vertex);

      for (const neighbor of graph.get(vertex) || []) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          this.parent.set(neighbor, vertex);
          queue.push(neighbor);
        }
      }
    }

    return this;
  }
}

module.exports = { BfsTree };
