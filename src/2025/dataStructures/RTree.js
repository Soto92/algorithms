class RTreeNode {
  constructor(isLeaf = false) {
    this.isLeaf = isLeaf;
    this.entries = [];
    this.parent = null;
  }
}

class Entry {
  constructor(mbr, child = null) {
    this.mbr = mbr;
    this.child = child;
  }
}

class MBR {
  constructor(minX, minY, maxX, maxY) {
    this.minX = minX;
    this.minY = minY;
    this.maxX = maxX;
    this.maxY = maxY;
  }

  area() {
    return (this.maxX - this.minX) * (this.maxY - this.minY);
  }

  union(other) {
    return new MBR(
      Math.min(this.minX, other.minX),
      Math.min(this.minY, other.minY),
      Math.max(this.maxX, other.maxX),
      Math.max(this.maxY, other.maxY)
    );
  }
}

class RTree {
  constructor(maxChildren = 4) {
    this.root = new RTreeNode(true);
    this.maxChildren = maxChildren;
  }

  insert(mbr) {
    const leaf = this.chooseLeaf(this.root, mbr);
    leaf.entries.push(new Entry(mbr));
    if (leaf.entries.length > this.maxChildren) {
      this.splitNode(leaf);
    }
    this.adjustTree(leaf);
  }

  chooseLeaf(node, mbr) {
    if (node.isLeaf) {
      return node;
    }
    let bestEntry = node.entries[0];
    let minEnlargement = Infinity;
    for (const entry of node.entries) {
      const enlargedArea = entry.mbr.union(mbr).area();
      const enlargement = enlargedArea - entry.mbr.area();
      if (enlargement < minEnlargement) {
        minEnlargement = enlargement;
        bestEntry = entry;
      }
    }
    return this.chooseLeaf(bestEntry.child, mbr);
  }

  splitNode(node) {}
  adjustTree(node) {}
}
