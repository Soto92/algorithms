class MinimumSpanningTree {
  constructor() {
    this.edges = [];
    this.weight = 0;
  }

  build(vertices, edges) {
    const parent = new Map(vertices.map((vertex) => [vertex, vertex]));
    const find = (value) => parent.get(value) === value ? value : parent.set(value, find(parent.get(value))).get(value);
    const union = (a, b) => {
      const rootA = find(a);
      const rootB = find(b);
      if (rootA === rootB) return false;
      parent.set(rootA, rootB);
      return true;
    };

    for (const edge of [...edges].sort((a, b) => a.weight - b.weight)) {
      if (union(edge.from, edge.to)) {
        this.edges.push(edge);
        this.weight += edge.weight;
      }
    }

    return this;
  }
}

module.exports = { MinimumSpanningTree };
