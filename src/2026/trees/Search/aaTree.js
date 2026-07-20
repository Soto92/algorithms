class AaTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.level = 1;
  }
}

class AaTree {
  constructor() {
    this.root = null;
  }

  skew(node) {
    if (!node || !node.left || node.left.level !== node.level) return node;
    const left = node.left;
    node.left = left.right;
    left.right = node;
    return left;
  }

  split(node) {
    if (!node || !node.right || !node.right.right || node.right.right.level !== node.level) return node;
    const right = node.right;
    node.right = right.left;
    right.left = node;
    right.level++;
    return right;
  }

  insert(value) {
    this.root = this.insertNode(this.root, value);
  }

  insertNode(node, value) {
    if (!node) return new AaTreeNode(value);
    if (value < node.value) node.left = this.insertNode(node.left, value);
    else if (value > node.value) node.right = this.insertNode(node.right, value);
    node = this.skew(node);
    node = this.split(node);
    return node;
  }
}

module.exports = { AaTree, AaTreeNode };
