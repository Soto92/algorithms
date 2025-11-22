class GraphAdjacencyMatrix {
  constructor(numVertices) {
    this.numVertices = numVertices;
    this.adjMatrix = new Array(numVertices)
      .fill(0)
      .map(() => new Array(numVertices).fill(0));
  }

  addVertex() {
    this.numVertices++;
    this.adjMatrix.push(new Array(this.numVertices).fill(0));
    for (let i = 0; i < this.numVertices - 1; i++) {
      this.adjMatrix[i].push(0);
    }
  }

  addEdge(v1, v2) {
    if (v1 < this.numVertices && v2 < this.numVertices) {
      this.adjMatrix[v1][v2] = 1;
      this.adjMatrix[v2][v1] = 1;
    }
  }

  removeEdge(v1, v2) {
    if (v1 < this.numVertices && v2 < this.numVertices) {
      this.adjMatrix[v1][v2] = 0;
      this.adjMatrix[v2][v1] = 0;
    }
  }

  getNeighbors(vertex) {
    const neighbors = [];
    for (let i = 0; i < this.numVertices; i++) {
      if (this.adjMatrix[vertex][i] === 1) {
        neighbors.push(i);
      }
    }
    return neighbors;
  }
}
