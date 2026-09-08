class IntervalTreeNode {
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

  insert(low, high) {
    this.root = this.insertNode(this.root, { low, high });
  }

  insertNode(node, interval) {
    if (!node) return new IntervalTreeNode(interval);

    if (interval.low < node.interval.low) node.left = this.insertNode(node.left, interval);
    else node.right = this.insertNode(node.right, interval);

    node.max = Math.max(node.max, interval.high);
    return node;
  }

  search(low, high, node = this.root) {
    if (!node) return null;
    if (this.overlaps(node.interval, { low, high })) return node.interval;
    if (node.left && node.left.max >= low) return this.search(low, high, node.left);
    return this.search(low, high, node.right);
  }

  overlaps(first, second) {
    return first.low <= second.high && second.low <= first.high;
  }
}

module.exports = { IntervalTree, IntervalTreeNode };
