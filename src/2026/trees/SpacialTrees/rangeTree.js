class RangeTreeNode {
  constructor(point) {
    this.point = point;
    this.left = null;
    this.right = null;
  }
}

class RangeTree {
  constructor(points = []) {
    this.root = this.build(points.sort((a, b) => a[0] - b[0]));
  }

  build(points) {
    if (!points.length) return null;
    const middle = Math.floor(points.length / 2);
    const node = new RangeTreeNode(points[middle]);
    node.left = this.build(points.slice(0, middle));
    node.right = this.build(points.slice(middle + 1));
    return node;
  }

  query(min, max, node = this.root, result = []) {
    if (!node) return result;
    if (node.point.every((value, index) => value >= min[index] && value <= max[index])) result.push(node.point);
    if (node.point[0] >= min[0]) this.query(min, max, node.left, result);
    if (node.point[0] <= max[0]) this.query(min, max, node.right, result);
    return result;
  }
}

module.exports = { RangeTree, RangeTreeNode };
