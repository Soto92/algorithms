class KdbTreeNode {
  constructor(bounds, leaf = true) {
    this.bounds = bounds;
    this.points = [];
    this.children = [];
    this.leaf = leaf;
  }
}

class KdbTree {
  constructor(bounds, capacity = 4) {
    this.root = new KdbTreeNode(bounds);
    this.capacity = capacity;
  }

  insert(point, node = this.root) {
    if (node.leaf) {
      node.points.push(point);
      if (node.points.length > this.capacity) this.split(node);
      return;
    }

    const child = node.children.find((item) => this.contains(item.bounds, point));
    if (child) this.insert(point, child);
  }

  split(node) {
    const axis = this.widestAxis(node.bounds);
    const middle = (node.bounds.min[axis] + node.bounds.max[axis]) / 2;
    const leftBounds = { min: [...node.bounds.min], max: [...node.bounds.max] };
    const rightBounds = { min: [...node.bounds.min], max: [...node.bounds.max] };
    leftBounds.max[axis] = middle;
    rightBounds.min[axis] = middle;
    node.children = [new KdbTreeNode(leftBounds), new KdbTreeNode(rightBounds)];
    const points = node.points;
    node.points = [];
    node.leaf = false;
    for (const point of points) this.insert(point, node);
  }

  widestAxis(bounds) {
    return bounds.max.map((value, index) => value - bounds.min[index]).reduce((best, value, index, widths) => value > widths[best] ? index : best, 0);
  }

  contains(bounds, point) {
    return point.every((value, index) => value >= bounds.min[index] && value <= bounds.max[index]);
  }
}

module.exports = { KdbTree, KdbTreeNode };
