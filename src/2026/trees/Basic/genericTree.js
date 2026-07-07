class GenericTreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    const child = new GenericTreeNode(value);
    this.children.push(child);
    return child;
  }
}

class GenericTree {
  constructor(rootValue) {
    this.root = rootValue === undefined ? null : new GenericTreeNode(rootValue);
  }

  traverseDepthFirst(callback, node = this.root) {
    if (!node) return;
    callback(node.value);
    for (const child of node.children) {
      this.traverseDepthFirst(callback, child);
    }
  }
}

module.exports = { GenericTree, GenericTreeNode };
