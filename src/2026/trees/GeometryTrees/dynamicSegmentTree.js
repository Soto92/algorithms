class DynamicSegmentTreeNode {
  constructor() {
    this.value = 0;
    this.left = null;
    this.right = null;
  }
}

class DynamicSegmentTree {
  constructor(left = 0, right = 1000000000) {
    this.left = left;
    this.right = right;
    this.root = new DynamicSegmentTreeNode();
  }

  add(index, delta, node = this.root, left = this.left, right = this.right) {
    if (left === right) {
      node.value += delta;
      return;
    }

    const middle = Math.floor((left + right) / 2);
    if (index <= middle) {
      if (!node.left) node.left = new DynamicSegmentTreeNode();
      this.add(index, delta, node.left, left, middle);
    } else {
      if (!node.right) node.right = new DynamicSegmentTreeNode();
      this.add(index, delta, node.right, middle + 1, right);
    }

    node.value = (node.left ? node.left.value : 0) + (node.right ? node.right.value : 0);
  }

  query(start, end, node = this.root, left = this.left, right = this.right) {
    if (!node || start > right || end < left) return 0;
    if (start <= left && right <= end) return node.value;

    const middle = Math.floor((left + right) / 2);
    return this.query(start, end, node.left, left, middle) + this.query(start, end, node.right, middle + 1, right);
  }
}

module.exports = { DynamicSegmentTree, DynamicSegmentTreeNode };
