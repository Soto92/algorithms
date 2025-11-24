class Node {
  constructor(point, axis, left = null, right = null) {
    this.point = point;
    this.axis = axis;
    this.left = left;
    this.right = right;
  }
}

class KdTree {
  constructor(points, k = 2) {
    this.k = k;
    this.root = this.build(points);
  }

  build(points, depth = 0) {
    if (points.length === 0) {
      return null;
    }

    const axis = depth % this.k;
    points.sort((a, b) => a[axis] - b[axis]);

    const medianIndex = Math.floor(points.length / 2);
    const medianPoint = points[medianIndex];

    return new Node(
      medianPoint,
      axis,
      this.build(points.slice(0, medianIndex), depth + 1),
      this.build(points.slice(medianIndex + 1), depth + 1)
    );
  }

  search(point, node = this.root, depth = 0) {
    if (node === null) {
      return false;
    }

    if (node.point.every((val, i) => val === point[i])) {
      return true;
    }

    const axis = depth % this.k;
    if (point[axis] < node.point[axis]) {
      return this.search(point, node.left, depth + 1);
    } else {
      return this.search(point, node.right, depth + 1);
    }
  }
}
