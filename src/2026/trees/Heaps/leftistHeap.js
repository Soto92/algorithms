class LeftistHeapNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.rank = 1;
  }
}

class LeftistHeap {
  constructor() {
    this.root = null;
  }

  rank(node) {
    return node ? node.rank : 0;
  }

  mergeNodes(first, second) {
    if (!first) return second;
    if (!second) return first;
    if (second.value < first.value) [first, second] = [second, first];

    first.right = this.mergeNodes(first.right, second);

    if (this.rank(first.left) < this.rank(first.right)) {
      [first.left, first.right] = [first.right, first.left];
    }

    first.rank = this.rank(first.right) + 1;
    return first;
  }

  merge(other) {
    this.root = this.mergeNodes(this.root, other.root);
  }

  insert(value) {
    this.root = this.mergeNodes(this.root, new LeftistHeapNode(value));
  }

  extractMin() {
    if (!this.root) return null;
    const value = this.root.value;
    this.root = this.mergeNodes(this.root.left, this.root.right);
    return value;
  }
}

module.exports = { LeftistHeap, LeftistHeapNode };
