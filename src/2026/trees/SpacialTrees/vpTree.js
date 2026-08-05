class VpTreeNode {
  constructor(point) {
    this.point = point;
    this.threshold = 0;
    this.left = null;
    this.right = null;
  }
}

class VpTree {
  constructor(points = [], distance = (a, b) => Math.hypot(...a.map((value, index) => value - b[index]))) {
    this.distance = distance;
    this.root = this.build(points);
  }

  build(points) {
    if (!points.length) return null;
    const point = points[0];
    const node = new VpTreeNode(point);
    const rest = points.slice(1).map((item) => ({ point: item, distance: this.distance(point, item) })).sort((a, b) => a.distance - b.distance);
    if (!rest.length) return node;
    const middle = Math.floor(rest.length / 2);
    node.threshold = rest[middle].distance;
    node.left = this.build(rest.slice(0, middle).map((item) => item.point));
    node.right = this.build(rest.slice(middle).map((item) => item.point));
    return node;
  }
}

module.exports = { VpTree, VpTreeNode };
