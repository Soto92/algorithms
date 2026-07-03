class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(rootValue = null) {
    this.root = rootValue === null ? null : new BinaryTreeNode(rootValue);
  }

  traverseInOrder(callback, node = this.root) {
    if (!node) return;
    this.traverseInOrder(callback, node.left);
    callback(node.value);
    this.traverseInOrder(callback, node.right);
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
