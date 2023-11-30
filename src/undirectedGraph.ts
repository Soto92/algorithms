class Graph {
    private adjacencyList: Map<string, string[]>;

    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex: string) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdge(vertex1: string, vertex2: string) {
        if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
            this.adjacencyList.get(vertex1).push(vertex2);
            this.adjacencyList.get(vertex2).push(vertex1);
        }
    }

    printGraph() {
        for (const [vertex, neighbors] of this.adjacencyList) {
            const neighborList = neighbors.join(', ');
            console.log(`${vertex} -> ${neighborList}`);
        }
    }
}


const undirectedGraph = new Graph();
undirectedGraph.addVertex('A');
undirectedGraph.addVertex('B');
undirectedGraph.addVertex('C');
undirectedGraph.addVertex('D');
undirectedGraph.addEdge('A', 'B');
undirectedGraph.addEdge('A', 'C');
undirectedGraph.addEdge('B', 'D');

undirectedGraph.printGraph();
/**
npx ts-node src/graph.ts
A -> B, C
B -> A, D
C -> A
D -> B
*/