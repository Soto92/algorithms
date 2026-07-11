class UnrootedTree {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(value) {
    if (!this.adjacencyList.has(value)) {
      this.adjacencyList.set(value, new Set());
    }
  }

  addEdge(first, second) {
    this.addVertex(first);
    this.addVertex(second);
    this.adjacencyList.get(first).add(second);
    this.adjacencyList.get(second).add(first);
  }

  getNeighbors(value) {
    return Array.from(this.adjacencyList.get(value) || []);
  }

  hasEdge(first, second) {
    return this.adjacencyList.has(first) && this.adjacencyList.get(first).has(second);
  }
}

module.exports = { UnrootedTree };
