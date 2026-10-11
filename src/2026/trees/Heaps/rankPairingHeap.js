class RankPairingHeapNode {
  constructor(value) {
    this.value = value;
    this.rank = 0;
    this.child = null;
    this.sibling = null;
  }
}

class RankPairingHeap {
  constructor() {
    this.root = null;
  }

  merge(first, second) {
    if (!first) return second;
    if (!second) return first;
    if (second.value < first.value) [first, second] = [second, first];
    second.sibling = first.child;
    first.child = second;
    first.rank = Math.max(first.rank, second.rank + 1);
    return first;
  }

  insert(value) {
    const node = new RankPairingHeapNode(value);
    this.root = this.merge(this.root, node);
    return node;
  }

  findMin() {
    return this.root ? this.root.value : null;
  }

  extractMin() {
    if (!this.root) return null;
    const min = this.root.value;
    const children = [];
    let child = this.root.child;
    while (child) {
      const next = child.sibling;
      child.sibling = null;
      children.push(child);
      child = next;
    }
    this.root = children.reduce((heap, node) => this.merge(heap, node), null);
    return min;
  }
}

module.exports = { RankPairingHeap, RankPairingHeapNode };
