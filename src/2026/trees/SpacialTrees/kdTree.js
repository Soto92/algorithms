class KdTreeNode {
  constructor(point, axis = 0) {
    this.point = point;
    this.axis = axis;
    this.left = null;
    this.right = null;
  }
}

class KdTree {
  constructor(dimensions = 2) {
    this.dimensions = dimensions;
    this.root = null;
  }

  insert(point) {
    this.root = this.insertNode(this.root, point, 0);
  }

  insertNode(node, point, depth) {
    if (!node) return new KdTreeNode(point, depth % this.dimensions);
    const axis = node.axis;
    if (point[axis] < node.point[axis]) node.left = this.insertNode(node.left, point, depth + 1);
    else node.right = this.insertNode(node.right, point, depth + 1);
    return node;
  }

  contains(point, node = this.root) {
    if (!node) return false;
    if (point.every((value, index) => value === node.point[index])) return true;
    const axis = node.axis;
    return this.contains(point, point[axis] < node.point[axis] ? node.left : node.right);
  }
}

module.exports = { KdTree, KdTreeNode };
