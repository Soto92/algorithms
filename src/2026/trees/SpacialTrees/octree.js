class Octree {
  constructor(boundary, capacity = 4) {
    this.boundary = boundary;
    this.capacity = capacity;
    this.points = [];
    this.children = [];
  }

  contains(point) {
    const b = this.boundary;
    return point.x >= b.x && point.x <= b.x + b.width && point.y >= b.y && point.y <= b.y + b.height && point.z >= b.z && point.z <= b.z + b.depth;
  }

  subdivide() {
    const b = this.boundary;
    const w = b.width / 2;
    const h = b.height / 2;
    const d = b.depth / 2;
    for (const dx of [0, w]) {
      for (const dy of [0, h]) {
        for (const dz of [0, d]) {
          this.children.push(new Octree({ x: b.x + dx, y: b.y + dy, z: b.z + dz, width: w, height: h, depth: d }, this.capacity));
        }
      }
    }
  }

  insert(point) {
    if (!this.contains(point)) return false;
    if (this.points.length < this.capacity && this.children.length === 0) {
      this.points.push(point);
      return true;
    }
    if (this.children.length === 0) this.subdivide();
    return this.children.some((child) => child.insert(point));
  }
}

module.exports = { Octree };
