class AvlTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

class AvlTree {
  constructor() {
    this.root = null;
  }

  height(node) {
    return node ? node.height : 0;
  }

  update(node) {
    node.height = 1 + Math.max(this.height(node.left), this.height(node.right));
  }

  rotateRight(y) {
    const x = y.left;
    const t = x.right;
    x.right = y;
    y.left = t;
    this.update(y);
    this.update(x);
    return x;
  }

  rotateLeft(x) {
    const y = x.right;
    const t = y.left;
    y.left = x;
    x.right = t;
    this.update(x);
    this.update(y);
    return y;
  }

  balance(node) {
    this.update(node);
    const factor = this.height(node.left) - this.height(node.right);

    if (factor > 1) {
      if (this.height(node.left.left) < this.height(node.left.right)) {
        node.left = this.rotateLeft(node.left);
      }
      return this.rotateRight(node);
    }

    if (factor < -1) {
      if (this.height(node.right.right) < this.height(node.right.left)) {
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
    if (!node) return new AvlTreeNode(value);
    if (value < node.value) node.left = this.insertNode(node.left, value);
    else node.right = this.insertNode(node.right, value);
    return this.balance(node);
  }
}

module.exports = { AvlTree, AvlTreeNode };
