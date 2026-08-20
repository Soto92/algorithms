class QuadTree {
  constructor(boundary, capacity = 4) {
    this.boundary = boundary;
    this.capacity = capacity;
    this.points = [];
    this.divided = false;
  }

  contains(point) {
    return point.x >= this.boundary.x && point.x <= this.boundary.x + this.boundary.width && point.y >= this.boundary.y && point.y <= this.boundary.y + this.boundary.height;
  }

  intersects(range) {
    return !(range.x > this.boundary.x + this.boundary.width || range.x + range.width < this.boundary.x || range.y > this.boundary.y + this.boundary.height || range.y + range.height < this.boundary.y);
  }

  subdivide() {
    const { x, y, width, height } = this.boundary;
    const halfWidth = width / 2;
    const halfHeight = height / 2;
    this.northWest = new QuadTree({ x, y, width: halfWidth, height: halfHeight }, this.capacity);
    this.northEast = new QuadTree({ x: x + halfWidth, y, width: halfWidth, height: halfHeight }, this.capacity);
    this.southWest = new QuadTree({ x, y: y + halfHeight, width: halfWidth, height: halfHeight }, this.capacity);
    this.southEast = new QuadTree({ x: x + halfWidth, y: y + halfHeight, width: halfWidth, height: halfHeight }, this.capacity);
    this.divided = true;
  }

  insert(point) {
    if (!this.contains(point)) return false;
    if (this.points.length < this.capacity) {
      this.points.push(point);
      return true;
    }
    if (!this.divided) this.subdivide();
    return this.northWest.insert(point) || this.northEast.insert(point) || this.southWest.insert(point) || this.southEast.insert(point);
  }

  query(range, found = []) {
    if (!this.intersects(range)) return found;
    for (const point of this.points) {
      if (point.x >= range.x && point.x <= range.x + range.width && point.y >= range.y && point.y <= range.y + range.height) found.push(point);
    }
    if (this.divided) {
      this.northWest.query(range, found);
      this.northEast.query(range, found);
      this.southWest.query(range, found);
      this.southEast.query(range, found);
    }
    return found;
  }
}

module.exports = { QuadTree };
