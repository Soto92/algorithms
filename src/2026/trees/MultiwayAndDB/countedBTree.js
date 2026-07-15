class CountedBTreeNode {
  constructor(leaf = true) {
    this.keys = [];
    this.children = [];
    this.counts = [];
    this.leaf = leaf;
  }
}

class CountedBTree {
  constructor(minDegree = 2) {
    this.minDegree = minDegree;
    this.root = new CountedBTreeNode(true);
  }

  sizeOf(node) {
    if (!node) return 0;
    return node.keys.length + node.counts.reduce((sum, count) => sum + count, 0);
  }

  refreshCounts(node) {
    node.counts = node.children.map((child) => this.sizeOf(child));
  }

  select(index, node = this.root) {
    for (let i = 0; i < node.keys.length; i++) {
      const leftCount = node.counts[i] || 0;
      if (index < leftCount) return this.select(index, node.children[i]);
      index -= leftCount;
      if (index === 0) return node.keys[i];
      index--;
    }

    const lastChild = node.children[node.keys.length];
    return lastChild ? this.select(index, lastChild) : null;
  }

  splitChild(parent, index) {
    const degree = this.minDegree;
    const child = parent.children[index];
    const right = new CountedBTreeNode(child.leaf);
    const middle = child.keys[degree - 1];

    right.keys = child.keys.splice(degree);
    child.keys.splice(degree - 1, 1);

    if (!child.leaf) {
      right.children = child.children.splice(degree);
      this.refreshCounts(child);
      this.refreshCounts(right);
    }

    parent.keys.splice(index, 0, middle);
    parent.children.splice(index + 1, 0, right);
    this.refreshCounts(parent);
  }

  insert(key) {
    if (this.root.keys.length === 2 * this.minDegree - 1) {
      const root = new CountedBTreeNode(false);
      root.children.push(this.root);
      this.splitChild(root, 0);
      this.root = root;
    }

    this.insertNonFull(this.root, key);
  }

  insertNonFull(node, key) {
    let index = node.keys.length - 1;

    if (node.leaf) {
      while (index >= 0 && key < node.keys[index]) index--;
      node.keys.splice(index + 1, 0, key);
      return;
    }

    while (index >= 0 && key < node.keys[index]) index--;
    index++;

    if (node.children[index].keys.length === 2 * this.minDegree - 1) {
      this.splitChild(node, index);
      if (key > node.keys[index]) index++;
    }

    this.insertNonFull(node.children[index], key);
    this.refreshCounts(node);
  }
}

module.exports = { CountedBTree, CountedBTreeNode };
