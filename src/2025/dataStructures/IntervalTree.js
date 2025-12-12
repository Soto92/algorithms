class Node {
  constructor(interval) {
    this.interval = interval;
    this.max = interval.high;
    this.left = null;
    this.right = null;
  }
}

class IntervalTree {
  constructor() {
    this.root = null;
  }

  insert(interval) {
    this.root = this.insertNode(this.root, interval);
  }

  insertNode(node, interval) {
    if (node === null) {
      return new Node(interval);
    }

    if (interval.low < node.interval.low) {
      node.left = this.insertNode(node.left, interval);
    } else {
      node.right = this.insertNode(node.right, interval);
    }

    if (node.max < interval.high) {
      node.max = interval.high;
    }

    return node;
  }

  search(interval) {
    return this.searchNode(this.root, interval);
  }

  searchNode(node, interval) {
    if (node === null) {
      return null;
    }

    if (this.doOverlap(node.interval, interval)) {
      return node.interval;
    }

    if (node.left !== null && node.left.max >= interval.low) {
      return this.searchNode(node.left, interval);
    }

    return this.searchNode(node.right, interval);
  }

  doOverlap(i1, i2) {
    return i1.low < i2.high && i2.low < i1.high;
  }
}
