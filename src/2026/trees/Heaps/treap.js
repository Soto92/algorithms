class TreapNode {
  constructor(key, priority = Math.random()) {
    this.key = key;
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

  insert(key, priority) {
    this.root = this.insertNode(this.root, key, priority);
  }

  insertNode(node, key, priority) {
    if (!node) return new TreapNode(key, priority);
    if (key < node.key) {
      node.left = this.insertNode(node.left, key, priority);
      if (node.left.priority < node.priority) node = this.rotateRight(node);
    } else if (key > node.key) {
      node.right = this.insertNode(node.right, key, priority);
      if (node.right.priority < node.priority) node = this.rotateLeft(node);
    }
    return node;
  }
}

module.exports = { Treap, TreapNode };
