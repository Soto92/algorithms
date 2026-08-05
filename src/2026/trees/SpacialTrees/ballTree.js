class BallTreeNode {
  constructor(points = []) {
    this.points = points;
    this.center = null;
    this.radius = 0;
    this.left = null;
    this.right = null;
  }
}

class BallTree {
  constructor(points = [], leafSize = 2) {
    this.leafSize = leafSize;
    this.root = this.build(points);
  }

  build(points) {
    if (!points.length) return null;
    const node = new BallTreeNode(points);
    node.center = this.centroid(points);
    node.radius = Math.max(...points.map((point) => this.distance(point, node.center)));
    if (points.length <= this.leafSize) return node;
    const sorted = [...points].sort((a, b) => a[0] - b[0]);
    const middle = Math.floor(sorted.length / 2);
    node.left = this.build(sorted.slice(0, middle));
    node.right = this.build(sorted.slice(middle));
    node.points = [];
    return node;
  }

  centroid(points) {
    return points[0].map((_, index) => points.reduce((sum, point) => sum + point[index], 0) / points.length);
  }

  distance(a, b) {
    return Math.hypot(...a.map((value, index) => value - b[index]));
  }
}

module.exports = { BallTree, BallTreeNode };
