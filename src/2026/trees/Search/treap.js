class TreapNode {
  constructor(value, priority = Math.random()) {
    this.value = value;
    this.priority = priority;
    this.left = null;
    this.right = null;
  }
}

class Treap {
  constructor() {
    this.root = null;
  }

  rotateRight(node) {
    const pivot = node.left;
    node.left = pivot.right;
    pivot.right = node;
    return pivot;
  }

  rotateLeft(node) {
    const pivot = node.right;
    node.right = pivot.left;
    pivot.left = node;
    return pivot;
  }

  insert(value, priority) {
    this.root = this.insertNode(this.root, value, priority);
  }

  insertNode(node, value, priority) {
    if (!node) return new TreapNode(value, priority);

    if (value < node.value) {
      node.left = this.insertNode(node.left, value, priority);
      if (node.left.priority < node.priority) node = this.rotateRight(node);
    } else {
      node.right = this.insertNode(node.right, value, priority);
      if (node.right.priority < node.priority) node = this.rotateLeft(node);
    }

    return node;
  }
}

module.exports = { Treap, TreapNode };
