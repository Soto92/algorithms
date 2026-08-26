class GenericNAryTreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    const child = new GenericNAryTreeNode(value);
    this.children.push(child);
    return child;
  }
}

class GenericNAryTree {
  constructor(rootValue = null) {
    this.root = rootValue === null ? null : new GenericNAryTreeNode(rootValue);
  }

  traversePreOrder(callback, node = this.root) {
    if (!node) return;
    callback(node.value);
    for (const child of node.children) {
      this.traversePreOrder(callback, child);
    }
  }
}

module.exports = { GenericNAryTree, GenericNAryTreeNode };
