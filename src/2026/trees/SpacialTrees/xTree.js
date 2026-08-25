class XTreeNode {
  constructor(leaf = true) {
    this.leaf = leaf;
    this.entries = [];
    this.superNode = false;
  }
}

class XTree {
  constructor(maxEntries = 6) {
    this.root = new XTreeNode(true);
    this.maxEntries = maxEntries;
  }

  insert(box, value = box) {
    this.root.entries.push({ box, value });
    if (this.root.entries.length > this.maxEntries) this.root.superNode = true;
  }

  search(range) {
    return this.root.entries.filter((entry) => this.intersects(entry.box, range)).map((entry) => entry.value);
  }

  intersects(a, b) {
    return !(a.minX > b.maxX || a.maxX < b.minX || a.minY > b.maxY || a.maxY < b.minY);
  }
}

module.exports = { XTree, XTreeNode };
