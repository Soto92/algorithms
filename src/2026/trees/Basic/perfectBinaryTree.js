class PerfectBinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class PerfectBinaryTree {
  constructor(rootValue = null) {
    this.root = rootValue === null ? null : new PerfectBinaryTreeNode(rootValue);
  }

  getDepth(node = this.root) {
    let depth = 0;
    let current = node;

    while (current) {
      depth++;
      current = current.left;
    }

    return depth;
  }

  isPerfect(node = this.root, depth = this.getDepth(), level = 1) {
    if (!node) return true;
    if (!node.left && !node.right) return depth === level;
    if (!node.left || !node.right) return false;
    return this.isPerfect(node.left, depth, level + 1) && this.isPerfect(node.right, depth, level + 1);
  }
}

module.exports = { PerfectBinaryTree, PerfectBinaryTreeNode };
