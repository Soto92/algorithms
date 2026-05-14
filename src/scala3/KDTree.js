class KDTree {
  constructor(k, root = null, size = 0) {
    if (!Number.isInteger(k) || k <= 0) {
      throw new Error("k must be a positive integer");
    }

    this.k = k;
    this.root = root;
    this.size = size;
  }

  static empty(k) {
    return new KDTree(k);
  }

  static from(k, values) {
    if (!Number.isInteger(k) || k <= 0) {
      throw new Error("k must be a positive integer");
    }

    const entries = [];
    for (const [point, value] of values) {
      KDTree.#validatePoint(k, point);
      KDTree.#upsert(entries, point, value);
    }

    return KDTree.#fromEntries(k, entries);
  }

  insert(point, value) {
    KDTree.#validatePoint(this.k, point);
    const entries = this.#entries();
    KDTree.#upsert(entries, point, value);
    return KDTree.#fromEntries(this.k, entries);
  }

  contains(point) {
    KDTree.#validatePoint(this.k, point);

    const loop = (node) => {
      if (node === null) return false;
      if (KDTree.#samePoint(node.entry.point, point)) return true;

      const axis = node.axis;
      if (point[axis] < node.entry.point[axis]) return loop(node.left);
      if (point[axis] > node.entry.point[axis]) return loop(node.right);
      return loop(node.left) || loop(node.right);
    };

    return loop(this.root);
  }

  get(point) {
    KDTree.#validatePoint(this.k, point);

    const loop = (node) => {
      if (node === null) return undefined;
      if (KDTree.#samePoint(node.entry.point, point)) return node.entry.value;

      const axis = node.axis;
      if (point[axis] < node.entry.point[axis]) return loop(node.left);
      if (point[axis] > node.entry.point[axis]) return loop(node.right);

      const leftValue = loop(node.left);
      return leftValue === undefined ? loop(node.right) : leftValue;
    };

    return loop(this.root);
  }

  nearest(target) {
    KDTree.#validatePoint(this.k, target);
    if (this.root === null) return undefined;

    const best = this.#nearestNode(
      this.root,
      target,
      this.root.entry,
      KDTree.#dist2(this.root.entry.point, target)
    );

    return best.entry;
  }

  range(min, max) {
    KDTree.#validatePoint(this.k, min);
    KDTree.#validatePoint(this.k, max);

    const found = [];
    const loop = (node) => {
      if (node === null) return;

      const axis = node.axis;
      if (KDTree.#inRange(node.entry.point, min, max)) {
        found.push(node.entry);
      }
      if (min[axis] <= node.entry.point[axis]) loop(node.left);
      if (max[axis] >= node.entry.point[axis]) loop(node.right);
    };

    loop(this.root);
    return found;
  }

  #entries() {
    const entries = [];

    const loop = (node) => {
      if (node === null) return;
      entries.push(node.entry);
      loop(node.left);
      loop(node.right);
    };

    loop(this.root);
    return entries;
  }

  #nearestNode(node, target, bestEntry, bestDist2) {
    const currentDist2 = KDTree.#dist2(node.entry.point, target);
    let currentBestEntry = bestEntry;
    let currentBestDist2 = bestDist2;

    if (currentDist2 < bestDist2) {
      currentBestEntry = node.entry;
      currentBestDist2 = currentDist2;
    }

    const axis = node.axis;
    const near = target[axis] < node.entry.point[axis] ? node.left : node.right;
    const far = target[axis] < node.entry.point[axis] ? node.right : node.left;

    if (near !== null) {
      const bestAfterNear = this.#nearestNode(near, target, currentBestEntry, currentBestDist2);
      currentBestEntry = bestAfterNear.entry;
      currentBestDist2 = bestAfterNear.dist2;
    }

    const axisDelta = target[axis] - node.entry.point[axis];
    if (axisDelta * axisDelta < currentBestDist2 && far !== null) {
      return this.#nearestNode(far, target, currentBestEntry, currentBestDist2);
    }

    return { entry: currentBestEntry, dist2: currentBestDist2 };
  }

  static #fromEntries(k, entries) {
    return new KDTree(k, KDTree.#build(entries, k, 0), entries.length);
  }

  static #build(entries, k, depth) {
    if (entries.length === 0) return null;

    const axis = depth % k;
    const sorted = [...entries].sort((a, b) => a.point[axis] - b.point[axis]);
    const median = Math.floor(sorted.length / 2);

    return {
      entry: sorted[median],
      axis,
      left: KDTree.#build(sorted.slice(0, median), k, depth + 1),
      right: KDTree.#build(sorted.slice(median + 1), k, depth + 1),
    };
  }

  static #upsert(entries, point, value) {
    const index = entries.findIndex((entry) => KDTree.#samePoint(entry.point, point));
    const entry = { point: [...point], value };

    if (index >= 0) entries[index] = entry;
    else entries.push(entry);
  }

  static #validatePoint(k, point) {
    if (!Array.isArray(point) || point.length !== k) {
      throw new Error(`Point dimension ${Array.isArray(point) ? point.length : "invalid"} does not match k=${k}`);
    }

    if (!point.every((coordinate) => typeof coordinate === "number" && Number.isFinite(coordinate))) {
      throw new Error("Point coordinates must be finite numbers");
    }
  }

  static #samePoint(a, b) {
    return a.length === b.length && a.every((value, index) => value === b[index]);
  }

  static #inRange(point, min, max) {
    return point.every((value, index) => value >= min[index] && value <= max[index]);
  }

  static #dist2(a, b) {
    return a.reduce((sum, value, index) => {
      const delta = value - b[index];
      return sum + delta * delta;
    }, 0);
  }
}

module.exports = KDTree;
