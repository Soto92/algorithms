class MTreeNode {
  constructor(object, radius = 0) {
    this.object = object;
    this.radius = radius;
    this.children = [];
  }
}

class MTree {
  constructor(distance = (a, b) => Math.hypot(...a.map((value, index) => value - b[index]))) {
    this.root = null;
    this.distance = distance;
  }

  insert(object) {
    if (!this.root) {
      this.root = new MTreeNode(object);
      return this.root;
    }
    const node = new MTreeNode(object);
    const distance = this.distance(this.root.object, object);
    this.root.radius = Math.max(this.root.radius, distance);
    this.root.children.push(node);
    return node;
  }

  rangeSearch(object, radius, node = this.root, result = []) {
    if (!node) return result;
    const distance = this.distance(object, node.object);
    if (distance <= radius) result.push(node.object);
    for (const child of node.children) {
      if (distance <= radius + node.radius) this.rangeSearch(object, radius, child, result);
    }
    return result;
  }
}

module.exports = { MTree, MTreeNode };
