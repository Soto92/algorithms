class BvhNode {
  constructor(objects = []) {
    this.objects = objects;
    this.box = null;
    this.left = null;
    this.right = null;
  }
}

class BoundingVolumeHierarchy {
  constructor(objects = [], leafSize = 2) {
    this.leafSize = leafSize;
    this.root = this.build(objects);
  }

  build(objects) {
    if (!objects.length) return null;
    const node = new BvhNode(objects);
    node.box = objects.reduce((box, object) => this.expand(box, object.box), null);
    if (objects.length <= this.leafSize) return node;
    const sorted = [...objects].sort((a, b) => this.center(a.box).x - this.center(b.box).x);
    const middle = Math.floor(sorted.length / 2);
    node.left = this.build(sorted.slice(0, middle));
    node.right = this.build(sorted.slice(middle));
    node.objects = [];
    return node;
  }

  center(box) {
    return { x: (box.minX + box.maxX) / 2, y: (box.minY + box.maxY) / 2 };
  }

  expand(a, b) {
    if (!a) return { ...b };
    return { minX: Math.min(a.minX, b.minX), minY: Math.min(a.minY, b.minY), maxX: Math.max(a.maxX, b.maxX), maxY: Math.max(a.maxY, b.maxY) };
  }
}

module.exports = { BoundingVolumeHierarchy, BvhNode };
