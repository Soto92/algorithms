class RoutingTreeNode {
  constructor(segment = "") {
    this.segment = segment;
    this.children = new Map();
    this.handler = null;
  }
}

class RoutingTree {
  constructor() {
    this.root = new RoutingTreeNode();
  }

  add(path, handler) {
    let node = this.root;
    for (const segment of path.split("/").filter(Boolean)) {
      if (!node.children.has(segment)) node.children.set(segment, new RoutingTreeNode(segment));
      node = node.children.get(segment);
    }
    node.handler = handler;
  }

  find(path) {
    let node = this.root;
    for (const segment of path.split("/").filter(Boolean)) {
      if (!node.children.has(segment)) return null;
      node = node.children.get(segment);
    }
    return node.handler;
  }
}

module.exports = { RoutingTree, RoutingTreeNode };
