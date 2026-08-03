class WeightBalancedTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.size = 1;
  }
}

class WeightBalancedTree {
  constructor(ratio = 0.7) {
    this.root = null;
    this.ratio = ratio;
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

  balance(node) {
    this.update(node);
    const total = node.size;

    if (this.size(node.left) > this.ratio * total) return this.rotateRight(node);
    if (this.size(node.right) > this.ratio * total) return this.rotateLeft(node);
    return node;
  }

  insert(value) {
    this.root = this.insertNode(this.root, value);
  }

  insertNode(node, value) {
    if (!node) return new WeightBalancedTreeNode(value);
    if (value < node.value) node.left = this.insertNode(node.left, value);
    else node.right = this.insertNode(node.right, value);
    return this.balance(node);
  }
}

module.exports = { WeightBalancedTree, WeightBalancedTreeNode };
