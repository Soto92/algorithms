class DirectedGraph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(fromVertex, toVertex) {
    if (
      this.adjacencyList.has(fromVertex) &&
      this.adjacencyList.has(toVertex)
    ) {
      this.adjacencyList.get(fromVertex).push(toVertex);
    }
  }

  getNeighbors(vertex) {
    return this.adjacencyList.get(vertex);
  }
}
