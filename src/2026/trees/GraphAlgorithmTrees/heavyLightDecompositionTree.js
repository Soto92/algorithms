class HeavyLightDecompositionTree {
  constructor(graph, root = 0) {
    this.graph = graph;
    this.parent = new Map();
    this.depth = new Map();
    this.size = new Map();
    this.heavy = new Map();
    this.head = new Map();
    this.position = new Map();
    this.currentPosition = 0;
    this.dfs(root, null);
    this.decompose(root, root);
  }

  dfs(vertex, parent) {
    this.parent.set(vertex, parent);
    this.size.set(vertex, 1);
    this.depth.set(vertex, parent === null ? 0 : this.depth.get(parent) + 1);
    let maxSize = 0;

    for (const neighbor of this.graph.get(vertex) || []) {
      if (neighbor === parent) continue;
      this.dfs(neighbor, vertex);
      this.size.set(vertex, this.size.get(vertex) + this.size.get(neighbor));
      if (this.size.get(neighbor) > maxSize) {
        maxSize = this.size.get(neighbor);
        this.heavy.set(vertex, neighbor);
      }
    }
  }

  decompose(vertex, head) {
    this.head.set(vertex, head);
    this.position.set(vertex, this.currentPosition++);
    const heavyChild = this.heavy.get(vertex);
    if (heavyChild !== undefined) this.decompose(heavyChild, head);
    for (const neighbor of this.graph.get(vertex) || []) {
      if (neighbor !== this.parent.get(vertex) && neighbor !== heavyChild) this.decompose(neighbor, neighbor);
    }
  }
}

module.exports = { HeavyLightDecompositionTree };
