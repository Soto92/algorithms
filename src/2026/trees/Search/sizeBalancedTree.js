class SizeBalancedTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.size = 1;
  }
}

class SizeBalancedTree {
  constructor() {
    this.root = null;
  }

  size(node) {
    return node ? node.size : 0;
  }

  update(node) {
    node.size = 1 + this.size(node.left) + this.size(node.right);
  }

  rotateRight(node) {
    const pivot = node.left;
    node.left = pivot.right;
    pivot.right = node;
    this.update(node);
    this.update(pivot);
    return pivot;
  }

  rotateLeft(node) {
    const pivot = node.right;
    node.right = pivot.left;
    pivot.left = node;
    this.update(node);
    this.update(pivot);
    return pivot;
  }

  maintain(node) {
    if (!node) return null;

    if (node.left && this.size(node.left.left) > this.size(node.right)) {
      node = this.rotateRight(node);
    } else if (node.left && this.size(node.left.right) > this.size(node.right)) {
      node.left = this.rotateLeft(node.left);
      node = this.rotateRight(node);
    } else if (node.right && this.size(node.right.right) > this.size(node.left)) {
      node = this.rotateLeft(node);
    } else if (node.right && this.size(node.right.left) > this.size(node.left)) {
      node.right = this.rotateRight(node.right);
      node = this.rotateLeft(node);
    } else {
      return node;
    }

    node.left = this.maintain(node.left);
    node.right = this.maintain(node.right);
    return this.maintain(node);
  }

  insert(value) {
    this.root = this.insertNode(this.root, value);
  }

  insertNode(node, value) {
    if (!node) return new SizeBalancedTreeNode(value);
    if (value < node.value) node.left = this.insertNode(node.left, value);
    else node.right = this.insertNode(node.right, value);
    this.update(node);
    return this.maintain(node);
  }
}

module.exports = { SizeBalancedTree, SizeBalancedTreeNode };
