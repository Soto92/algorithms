class BalancedBinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BalancedBinaryTree {
  constructor(rootValue = null) {
    this.root = rootValue === null ? null : new BalancedBinaryTreeNode(rootValue);
  }

  getHeight(node = this.root) {
    if (!node) return 0;
    return 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
  }

  isBalanced(node = this.root) {
    if (!node) return true;

    const leftHeight = this.getHeight(node.left);
    const rightHeight = this.getHeight(node.right);

    return Math.abs(leftHeight - rightHeight) <= 1 && this.isBalanced(node.left) && this.isBalanced(node.right);
  }
}

module.exports = { BalancedBinaryTree, BalancedBinaryTreeNode };
