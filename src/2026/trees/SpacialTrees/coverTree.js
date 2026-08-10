class CoverTreeNode {
  constructor(point, level = 0) {
    this.point = point;
    this.level = level;
    this.children = [];
  }
}

class CoverTree {
  constructor(distance = (a, b) => Math.hypot(...a.map((value, index) => value - b[index]))) {
    this.root = null;
    this.distance = distance;
  }

  insert(point) {
    if (!this.root) {
      this.root = new CoverTreeNode(point);
      return this.root;
    }
    const parent = this.nearestAncestor(this.root, point);
    const node = new CoverTreeNode(point, parent.level - 1);
    parent.children.push(node);
    return node;
  }

  nearestAncestor(node, point) {
    let best = node;
    for (const child of node.children) {
      if (this.distance(child.point, point) < this.distance(best.point, point)) best = this.nearestAncestor(child, point);
    }
    return best;
  }
}

module.exports = { CoverTree, CoverTreeNode };
