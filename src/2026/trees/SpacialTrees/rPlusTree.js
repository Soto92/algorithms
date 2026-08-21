class RPlusTreeNode {
  constructor(leaf = true) {
    this.leaf = leaf;
    this.entries = [];
  }
}

class RPlusTree {
  constructor() {
    this.root = new RPlusTreeNode(true);
  }

  insert(box, value = box) {
    this.root.entries.push({ box, value });
  }

  search(range, node = this.root, result = []) {
    for (const entry of node.entries) {
      if (entry.node) this.search(range, entry.node, result);
      else if (this.intersects(entry.box, range)) result.push(entry.value);
    }
    return result;
  }

  intersects(a, b) {
    return !(a.minX > b.maxX || a.maxX < b.minX || a.minY > b.maxY || a.maxY < b.minY);
  }
}

module.exports = { RPlusTree, RPlusTreeNode };
