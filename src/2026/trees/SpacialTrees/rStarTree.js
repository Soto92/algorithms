class RStarTreeNode {
  constructor(leaf = true) {
    this.leaf = leaf;
    this.entries = [];
    this.box = null;
  }
}

class RStarTree {
  constructor(maxEntries = 5) {
    this.root = new RStarTreeNode(true);
    this.maxEntries = maxEntries;
  }

  insert(box, value = box) {
    this.root.entries.push({ box, value });
    this.root.box = this.expand(this.root.box, box);
    if (this.root.entries.length > this.maxEntries) this.reinsert();
  }

  reinsert() {
    this.root.entries.sort((a, b) => this.centerDistance(b.box, this.root.box) - this.centerDistance(a.box, this.root.box));
    this.root.entries = this.root.entries.slice(0, this.maxEntries);
    this.root.box = this.root.entries.reduce((box, entry) => this.expand(box, entry.box), null);
  }

  centerDistance(a, b) {
    const ax = (a.minX + a.maxX) / 2;
    const ay = (a.minY + a.maxY) / 2;
    const bx = (b.minX + b.maxX) / 2;
    const by = (b.minY + b.maxY) / 2;
    return Math.hypot(ax - bx, ay - by);
  }

  expand(a, b) {
    if (!a) return { ...b };
    return { minX: Math.min(a.minX, b.minX), minY: Math.min(a.minY, b.minY), maxX: Math.max(a.maxX, b.maxX), maxY: Math.max(a.maxY, b.maxY) };
  }
}

module.exports = { RStarTree, RStarTreeNode };
