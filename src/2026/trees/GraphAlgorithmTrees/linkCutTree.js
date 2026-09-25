class LinkCutTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.reversed = false;
  }
}

class LinkCutTree {
  makeNode(value) {
    return new LinkCutTreeNode(value);
  }

  link(child, parent) {
    child.parent = parent;
  }

  cut(node) {
    if (node.parent) node.parent = null;
  }

  findRoot(node) {
    while (node.parent) node = node.parent;
    return node;
  }

  connected(first, second) {
    return this.findRoot(first) === this.findRoot(second);
  }
}

module.exports = { LinkCutTree, LinkCutTreeNode };
