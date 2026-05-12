class NodeGraph {
    value: string;
    neighbors: NodeGraph[];

    constructor(value: string) {
        this.value = value;
        this.neighbors = [];
    }

    addNeighbor(neighbor: NodeGraph): void {
        this.neighbors.push(neighbor);
    }
}

class DirectedGraph {
    nodes: NodeGraph[];

    constructor() {
        this.nodes = [];
    }

    addNode(value: string): NodeGraph {
        const newNode = new NodeGraph(value);
        this.nodes.push(newNode);
        return newNode;
    }

    addEdge(source: NodeGraph, target: NodeGraph): void {
        source.addNeighbor(target);
    }

    printGraph(): void {
        for (const node of this.nodes) {
            const neighbors = node.neighbors.map(neighbor => neighbor.value).join(', ');
            console.log(`${node.value} -> ${neighbors}`);
        }
    }
}

const graph = new DirectedGraph();

const nodeA = graph.addNode('A');
const nodeB = graph.addNode('B');
const nodeC = graph.addNode('C');

graph.addEdge(nodeA, nodeB);
graph.addEdge(nodeA, nodeC);
graph.addEdge(nodeB, nodeC);

graph.printGraph();
