class FibonacciHeapNode {
  constructor(value) {
    this.value = value;
    this.degree = 0;
    this.marked = false;
    this.parent = null;
    this.child = null;
    this.left = this;
    this.right = this;
  }
}

class FibonacciHeap {
  constructor() {
    this.min = null;
    this.size = 0;
  }

  insert(value) {
    const node = new FibonacciHeapNode(value);

    if (!this.min) {
      this.min = node;
    } else {
      node.left = this.min;
      node.right = this.min.right;
      this.min.right.left = node;
      this.min.right = node;
      if (node.value < this.min.value) this.min = node;
    }

    this.size++;
    return node;
  }

  minimum() {
    return this.min ? this.min.value : null;
  }

  merge(other) {
    if (!other.min) return;
    if (!this.min) {
      this.min = other.min;
      this.size = other.size;
      return;
    }

    const thisRight = this.min.right;
    const otherLeft = other.min.left;
    this.min.right = other.min;
    other.min.left = this.min;
    thisRight.left = otherLeft;
    otherLeft.right = thisRight;
    if (other.min.value < this.min.value) this.min = other.min;
    this.size += other.size;
  }
}

module.exports = { FibonacciHeap, FibonacciHeapNode };
