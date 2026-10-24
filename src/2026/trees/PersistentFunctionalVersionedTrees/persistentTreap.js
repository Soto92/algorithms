class PersistentTreapNode {
  constructor(key, priority = Math.random(), left = null, right = null) {
    this.key = key;
    this.priority = priority;
    this.left = left;
    this.right = right;
  }
}

class PersistentTreap {
  constructor() {
    this.roots = [null];
  }

  merge(left, right) {
    if (!left) return right;
    if (!right) return left;
    if (left.priority < right.priority) {
      return new PersistentTreapNode(left.key, left.priority, left.left, this.merge(left.right, right));
    }
    return new PersistentTreapNode(right.key, right.priority, this.merge(left, right.left), right.right);
  }

  split(node, key) {
    if (!node) return [null, null];
    if (key <= node.key) {
      const [left, right] = this.split(node.left, key);
      return [left, new PersistentTreapNode(node.key, node.priority, right, node.right)];
    }
    const [left, right] = this.split(node.right, key);
    return [new PersistentTreapNode(node.key, node.priority, node.left, left), right];
  }

  insert(version, key, priority) {
    const node = new PersistentTreapNode(key, priority);
    const [left, right] = this.split(this.roots[version], key);
    this.roots.push(this.merge(this.merge(left, node), right));
    return this.roots.length - 1;
  }
}

module.exports = { PersistentTreap, PersistentTreapNode };
