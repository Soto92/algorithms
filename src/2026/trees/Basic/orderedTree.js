class OrderedTreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value, index = this.children.length) {
    const child = new OrderedTreeNode(value);
    this.children.splice(index, 0, child);
    return child;
  }

  getChild(index) {
    return this.children[index] || null;
  }
}

class OrderedTree {
  constructor(rootValue) {
    this.root = new OrderedTreeNode(rootValue);
  }

  traversePreOrder(callback, node = this.root) {
    if (!node) return;
    callback(node.value);
    for (const child of node.children) {
      this.traversePreOrder(callback, child);
    }
  }
}

module.exports = { OrderedTree, OrderedTreeNode };
