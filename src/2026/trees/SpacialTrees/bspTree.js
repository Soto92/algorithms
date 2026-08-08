class BspTreeNode {
  constructor(line, polygons = []) {
    this.line = line;
    this.polygons = polygons;
    this.front = null;
    this.back = null;
  }
}

class BspTree {
  constructor(polygons = []) {
    this.root = this.build(polygons);
  }

  build(polygons) {
    if (!polygons.length) return null;
    const line = polygons[0].line;
    const node = new BspTreeNode(line, [polygons[0]]);
    const front = [];
    const back = [];
    for (const polygon of polygons.slice(1)) {
      const side = this.classify(polygon.point, line);
      if (side >= 0) front.push(polygon);
      else back.push(polygon);
    }
    node.front = this.build(front);
    node.back = this.build(back);
    return node;
  }

  classify(point, line) {
    return line.a * point.x + line.b * point.y + line.c;
  }
}

module.exports = { BspTree, BspTreeNode };
