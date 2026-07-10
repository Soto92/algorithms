class RootedTreeNode {
  constructor(value, parent = null) {
    this.value = value;
    this.parent = parent;
    this.children = [];
  }

  addChild(value) {
    const child = new RootedTreeNode(value, this);
    this.children.push(child);
    return child;
  }

  isRoot() {
    return this.parent === null;
  }
}

class RootedTree {
  constructor(rootValue) {
    this.root = new RootedTreeNode(rootValue);
  }

  getPathToRoot(node) {
    const path = [];
    let current = node;

    while (current) {
      path.push(current.value);
      current = current.parent;
    }

    return path;
  }
}

module.exports = { RootedTree, RootedTreeNode };
