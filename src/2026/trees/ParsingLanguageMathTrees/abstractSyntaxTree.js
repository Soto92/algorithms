class AbstractSyntaxTreeNode {
  constructor(type, value = null, children = []) {
    this.type = type;
    this.value = value;
    this.children = children;
  }

  addChild(node) {
    this.children.push(node);
    return node;
  }
}

class AbstractSyntaxTree {
  constructor(root = null) {
    this.root = root;
  }

  traverse(callback, node = this.root) {
    if (!node) return;
    callback(node);
    for (const child of node.children) this.traverse(callback, child);
  }
}

module.exports = { AbstractSyntaxTree, AbstractSyntaxTreeNode };
