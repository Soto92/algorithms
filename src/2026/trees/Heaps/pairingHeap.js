class PairingHeapNode {
  constructor(value) {
    this.value = value;
    this.child = null;
    this.sibling = null;
  }
}

class PairingHeap {
  constructor() {
    this.root = null;
  }

  merge(first, second) {
    if (!first) return second;
    if (!second) return first;
    if (second.value < first.value) [first, second] = [second, first];
    second.sibling = first.child;
    first.child = second;
    return first;
  }

  insert(value) {
    const node = new PairingHeapNode(value);
    this.root = this.merge(this.root, node);
    return node;
  }

  findMin() {
    return this.root ? this.root.value : null;
  }

  extractMin() {
    if (!this.root) return null;
    const min = this.root.value;
    this.root = this.mergePairs(this.root.child);
    return min;
  }

  mergePairs(node) {
    if (!node || !node.sibling) return node;
    const first = node;
    const second = node.sibling;
    const rest = second.sibling;
    first.sibling = null;
    second.sibling = null;
    return this.merge(this.merge(first, second), this.mergePairs(rest));
  }
}

module.exports = { PairingHeap, PairingHeapNode };
