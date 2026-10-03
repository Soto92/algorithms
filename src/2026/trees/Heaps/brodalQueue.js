class BrodalQueueNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class BrodalQueue {
  constructor() {
    this.nodes = [];
  }

  insert(value) {
    const node = new BrodalQueueNode(value);
    this.nodes.push(node);
    return node;
  }

  findMin() {
    if (this.nodes.length === 0) return null;
    return this.nodes.reduce((best, node) => node.value < best.value ? node : best).value;
  }

  extractMin() {
    if (this.nodes.length === 0) return null;
    let index = 0;
    for (let i = 1; i < this.nodes.length; i++) {
      if (this.nodes[i].value < this.nodes[index].value) index = i;
    }
    return this.nodes.splice(index, 1)[0].value;
  }

  meld(other) {
    this.nodes.push(...other.nodes);
    other.nodes = [];
  }
}

module.exports = { BrodalQueue, BrodalQueueNode };
