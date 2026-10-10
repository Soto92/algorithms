class SkewHeapNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class SkewHeap {
  constructor() {
    this.root = null;
  }

  mergeNodes(first, second) {
    if (!first) return second;
    if (!second) return first;
    if (second.value < first.value) [first, second] = [second, first];
    first.right = this.mergeNodes(first.right, second);
    [first.left, first.right] = [first.right, first.left];
    return first;
  }

  insert(value) {
    this.root = this.mergeNodes(this.root, new SkewHeapNode(value));
  }

  merge(other) {
    this.root = this.mergeNodes(this.root, other.root);
  }

  extractMin() {
    if (!this.root) return null;
    const value = this.root.value;
    this.root = this.mergeNodes(this.root.left, this.root.right);
    return value;
  }
}

module.exports = { SkewHeap, SkewHeapNode };
