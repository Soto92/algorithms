class PersistentBinarySearchTreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class PersistentBinarySearchTree {
  constructor() {
    this.roots = [null];
  }

  insert(version, value) {
    const root = this.insertNode(this.roots[version], value);
    this.roots.push(root);
    return this.roots.length - 1;
  }

  insertNode(node, value) {
    if (!node) return new PersistentBinarySearchTreeNode(value);
    if (value < node.value) return new PersistentBinarySearchTreeNode(node.value, this.insertNode(node.left, value), node.right);
    if (value > node.value) return new PersistentBinarySearchTreeNode(node.value, node.left, this.insertNode(node.right, value));
    return node;
  }

  search(version, value) {
    let node = this.roots[version];
    while (node) {
      if (value === node.value) return true;
      node = value < node.value ? node.left : node.right;
    }
    return false;
  }
}

module.exports = { PersistentBinarySearchTree, PersistentBinarySearchTreeNode };
