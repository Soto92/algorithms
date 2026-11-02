class RadixRoutingTreeNode {
  constructor(prefix = "") {
    this.prefix = prefix;
    this.children = new Map();
    this.handler = null;
  }
}

class RadixRoutingTree {
  constructor() {
    this.root = new RadixRoutingTreeNode();
  }

  add(path, handler) {
    let node = this.root;

    for (const part of path.split("/").filter(Boolean)) {
      if (!node.children.has(part)) node.children.set(part, new RadixRoutingTreeNode(part));
      node = node.children.get(part);
    }

    node.handler = handler;
  }

  match(path) {
    let node = this.root;

    for (const part of path.split("/").filter(Boolean)) {
      if (!node.children.has(part)) return null;
      node = node.children.get(part);
    }

    return node.handler;
  }
}

module.exports = { RadixRoutingTree, RadixRoutingTreeNode };
