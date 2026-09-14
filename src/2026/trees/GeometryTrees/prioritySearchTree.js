class PrioritySearchTreeNode {
  constructor(point) {
    this.point = point;
    this.left = null;
    this.right = null;
    this.split = point ? point.x : null;
  }
}

class PrioritySearchTree {
  constructor(points = []) {
    this.root = this.build(points);
  }

  build(points) {
    if (!points.length) return null;

    const highest = points.reduce((best, point) => point.y > best.y ? point : best, points[0]);
    const remaining = points.filter((point) => point !== highest).sort((a, b) => a.x - b.x);
    const middle = Math.floor(remaining.length / 2);
    const node = new PrioritySearchTreeNode(highest);
    node.split = remaining[middle] ? remaining[middle].x : highest.x;
    node.left = this.build(remaining.slice(0, middle));
    node.right = this.build(remaining.slice(middle));
    return node;
  }

  query(minX, maxX, minY, node = this.root, result = []) {
    if (!node || node.point.y < minY) return result;

    if (node.point.x >= minX && node.point.x <= maxX) result.push(node.point);
    if (minX <= node.split) this.query(minX, maxX, minY, node.left, result);
    if (maxX >= node.split) this.query(minX, maxX, minY, node.right, result);
    return result;
  }
}

module.exports = { PrioritySearchTree, PrioritySearchTreeNode };
