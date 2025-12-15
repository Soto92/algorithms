class PairingHeapNode {
  constructor(key) {
    this.key = key;
    this.child = null;
    this.next = null;
    this.prev = null;
  }
}

class PairingHeap {
  constructor() {
    this.root = null;
  }

  merge(heap1, heap2) {
    if (!heap1) return heap2;
    if (!heap2) return heap1;
    if (heap1.key < heap2.key) {
      heap2.next = heap1.child;
      if (heap1.child) heap1.child.prev = heap2;
      heap1.child = heap2;
      heap2.prev = heap1;
      return heap1;
    } else {
      heap1.next = heap2.child;
      if (heap2.child) heap2.child.prev = heap1;
      heap2.child = heap1;
      heap1.prev = heap2;
      return heap2;
    }
  }

  insert(key) {
    const newNode = new PairingHeapNode(key);
    this.root = this.merge(this.root, newNode);
  }

  extractMin() {
    if (!this.root) return null;
    const min = this.root.key;
    let firstChild = this.root.child;
    this.root = null;
    while (firstChild) {
      this.root = this.merge(this.root, firstChild);
      firstChild = firstChild.next;
    }
    return min;
  }
}
