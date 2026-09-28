class SpanningTree {
  constructor(vertices = []) {
    this.vertices = vertices;
    this.edges = [];
  }

  build(graph, start) {
    const visited = new Set([start]);
    const queue = [start];

    while (queue.length) {
      const vertex = queue.shift();
      for (const neighbor of graph.get(vertex) || []) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
          this.edges.push([vertex, neighbor]);
        }
      }
    }

    this.vertices = [...visited];
    return this;
  }
}

module.exports = { SpanningTree };
