class PersistentSegmentTreeNode {
  constructor(value = 0, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class PersistentSegmentTree {
  constructor(values = []) {
    this.size = values.length;
    this.roots = this.size ? [this.build(values, 0, this.size - 1)] : [];
  }

  build(values, left, right) {
    if (left === right) return new PersistentSegmentTreeNode(values[left]);
    const middle = Math.floor((left + right) / 2);
    const leftNode = this.build(values, left, middle);
    const rightNode = this.build(values, middle + 1, right);
    return new PersistentSegmentTreeNode(leftNode.value + rightNode.value, leftNode, rightNode);
  }

  update(version, index, value) {
    const root = this.updateNode(this.roots[version], 0, this.size - 1, index, value);
    this.roots.push(root);
    return this.roots.length - 1;
  }

  updateNode(node, left, right, index, value) {
    if (left === right) return new PersistentSegmentTreeNode(value);

    const middle = Math.floor((left + right) / 2);
    const leftNode = index <= middle ? this.updateNode(node.left, left, middle, index, value) : node.left;
    const rightNode = index > middle ? this.updateNode(node.right, middle + 1, right, index, value) : node.right;
    return new PersistentSegmentTreeNode(leftNode.value + rightNode.value, leftNode, rightNode);
  }

  query(version, start, end) {
    return this.queryNode(this.roots[version], 0, this.size - 1, start, end);
  }

  queryNode(node, left, right, start, end) {
    if (!node || start > right || end < left) return 0;
    if (start <= left && right <= end) return node.value;
    const middle = Math.floor((left + right) / 2);
    return this.queryNode(node.left, left, middle, start, end) + this.queryNode(node.right, middle + 1, right, start, end);
  }
}

module.exports = { PersistentSegmentTree, PersistentSegmentTreeNode };
