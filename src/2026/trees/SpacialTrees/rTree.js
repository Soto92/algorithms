class RTreeNode {
  constructor(leaf = true) {
    this.children = [];
    this.leaf = leaf;
    this.box = null;
  }
}

class RTree {
  constructor(maxEntries = 4) {
    this.maxEntries = maxEntries;
    this.root = new RTreeNode(true);
  }

  insert(box, value = box) {
    this.root.children.push({ box, value });
    this.root.box = this.expand(this.root.box, box);
    if (this.root.children.length > this.maxEntries) this.splitRoot();
  }

  splitRoot() {
    const left = new RTreeNode(true);
    const right = new RTreeNode(true);
    const items = this.root.children.sort((a, b) => a.box.minX - b.box.minX);
    left.children = items.slice(0, Math.ceil(items.length / 2));
    right.children = items.slice(Math.ceil(items.length / 2));
    left.box = this.bounds(left.children.map((item) => item.box));
    right.box = this.bounds(right.children.map((item) => item.box));
    this.root = new RTreeNode(false);
    this.root.children = [left, right];
    this.root.box = this.expand(left.box, right.box);
  }

  search(range, node = this.root, result = []) {
    if (!node.box || !this.intersects(node.box, range)) return result;
    for (const child of node.children) {
      if (node.leaf) {
        if (this.intersects(child.box, range)) result.push(child.value);
      } else this.search(range, child, result);
    }
    return result;
  }

  intersects(a, b) {
    return !(a.minX > b.maxX || a.maxX < b.minX || a.minY > b.maxY || a.maxY < b.minY);
  }

  expand(a, b) {
    if (!a) return { ...b };
    return { minX: Math.min(a.minX, b.minX), minY: Math.min(a.minY, b.minY), maxX: Math.max(a.maxX, b.maxX), maxY: Math.max(a.maxY, b.maxY) };
  }

  bounds(boxes) {
    return boxes.reduce((box, item) => this.expand(box, item), null);
  }
}

module.exports = { RTree, RTreeNode };
