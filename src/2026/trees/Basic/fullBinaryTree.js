class FullBinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class FullBinaryTree {
  constructor(rootValue = null) {
    this.root = rootValue === null ? null : new FullBinaryTreeNode(rootValue);
  }

  isFull(node = this.root) {
    if (!node) return true;
    if (!node.left && !node.right) return true;
    if (node.left && node.right) {
      return this.isFull(node.left) && this.isFull(node.right);
    }
    return false;
  }
}

module.exports = { FullBinaryTree, FullBinaryTreeNode };
