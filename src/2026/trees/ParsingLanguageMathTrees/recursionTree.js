class RecursionTreeNode {
  constructor(call, cost = 0) {
    this.call = call;
    this.cost = cost;
    this.children = [];
  }

  addChild(call, cost = 0) {
    const child = new RecursionTreeNode(call, cost);
    this.children.push(child);
    return child;
  }
}

class RecursionTree {
  constructor(rootCall, cost = 0) {
    this.root = new RecursionTreeNode(rootCall, cost);
  }

  totalCost(node = this.root) {
    if (!node) return 0;
    return node.cost + node.children.reduce((sum, child) => sum + this.totalCost(child), 0);
  }
}

module.exports = { RecursionTree, RecursionTreeNode };
