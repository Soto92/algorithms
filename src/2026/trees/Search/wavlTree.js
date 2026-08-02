class WavlTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.rank = 0;
  }
}

class WavlTree {
  constructor() {
    this.root = null;
  }

  rank(node) {
    return node ? node.rank : -1;
  }

  update(node) {
    node.rank = 1 + Math.max(this.rank(node.left), this.rank(node.right));
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

  rebalance(node) {
    this.update(node);
    const difference = this.rank(node.left) - this.rank(node.right);

    if (difference > 1) {
      if (this.rank(node.left.right) > this.rank(node.left.left)) {
        node.left = this.rotateLeft(node.left);
      }
      return this.rotateRight(node);
    }

    if (difference < -1) {
      if (this.rank(node.right.left) > this.rank(node.right.right)) {
        node.right = this.rotateRight(node.right);
      }
      return this.rotateLeft(node);
    }

    return node;
  }

  insert(value) {
    this.root = this.insertNode(this.root, value);
  }

  insertNode(node, value) {
    if (!node) return new WavlTreeNode(value);
    if (value < node.value) node.left = this.insertNode(node.left, value);
    else if (value > node.value) node.right = this.insertNode(node.right, value);
    return this.rebalance(node);
  }
}

module.exports = { WavlTree, WavlTreeNode };
