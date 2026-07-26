class ScapegoatTreeNode {
  constructor(value, parent = null) {
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }
}

class ScapegoatTree {
  constructor(alpha = 0.67) {
    this.root = null;
    this.alpha = alpha;
    this.size = 0;
    this.maxSize = 0;
  }

  insert(value) {
    if (!this.root) {
      this.root = new ScapegoatTreeNode(value);
      this.size = 1;
      this.maxSize = 1;
      return this.root;
    }

    let current = this.root;
    let parent = null;
    let depth = 0;

    while (current) {
      parent = current;
      depth++;
      current = value < current.value ? current.left : current.right;
    }

    const node = new ScapegoatTreeNode(value, parent);
    if (value < parent.value) parent.left = node;
    else parent.right = node;

    this.size++;
    this.maxSize = Math.max(this.maxSize, this.size);

    if (depth > Math.floor(Math.log(this.size) / Math.log(1 / this.alpha))) {
      const scapegoat = this.findScapegoat(node);
      if (scapegoat) this.rebuild(scapegoat);
    }

    return node;
  }

  subtreeSize(node) {
    if (!node) return 0;
    return 1 + this.subtreeSize(node.left) + this.subtreeSize(node.right);
  }

  findScapegoat(node) {
    let current = node.parent;
    while (current) {
      const leftSize = this.subtreeSize(current.left);
      const rightSize = this.subtreeSize(current.right);
      if (Math.max(leftSize, rightSize) > this.alpha * (leftSize + rightSize + 1)) return current;
      current = current.parent;
    }
    return null;
  }

  flatten(node, nodes = []) {
    if (!node) return nodes;
    this.flatten(node.left, nodes);
    nodes.push(node);
    this.flatten(node.right, nodes);
    return nodes;
  }

  buildBalanced(nodes, start, end, parent = null) {
    if (start > end) return null;
    const middle = Math.floor((start + end) / 2);
    const node = nodes[middle];
    node.parent = parent;
    node.left = this.buildBalanced(nodes, start, middle - 1, node);
    node.right = this.buildBalanced(nodes, middle + 1, end, node);
    return node;
  }

  rebuild(node) {
    const parent = node.parent;
    const nodes = this.flatten(node);
    const rebuilt = this.buildBalanced(nodes, 0, nodes.length - 1, parent);

    if (!parent) this.root = rebuilt;
    else if (parent.left === node) parent.left = rebuilt;
    else parent.right = rebuilt;
  }
}

module.exports = { ScapegoatTree, ScapegoatTreeNode };
