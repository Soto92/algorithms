class DegenerateBinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class DegenerateBinaryTree {
  constructor(rootValue = null) {
    this.root = rootValue === null ? null : new DegenerateBinaryTreeNode(rootValue);
  }

  insertRight(value) {
    const node = new DegenerateBinaryTreeNode(value);

    if (!this.root) {
      this.root = node;
      return node;
    }

    let current = this.root;
    while (current.right) {
      current = current.right;
    }

    current.right = node;
    return node;
  }

  isDegenerate(node = this.root) {
    if (!node) return true;
    if (node.left && node.right) return false;
    return this.isDegenerate(node.left || node.right);
  }
}

module.exports = { DegenerateBinaryTree, DegenerateBinaryTreeNode };
