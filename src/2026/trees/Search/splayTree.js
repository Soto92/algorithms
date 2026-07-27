class SplayTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

class SplayTree {
  constructor() {
    this.root = null;
  }

  rotateLeft(node) {
    const pivot = node.right;
    node.right = pivot.left;
    if (pivot.left) pivot.left.parent = node;
    pivot.parent = node.parent;
    if (!node.parent) this.root = pivot;
    else if (node === node.parent.left) node.parent.left = pivot;
    else node.parent.right = pivot;
    pivot.left = node;
    node.parent = pivot;
  }

  rotateRight(node) {
    const pivot = node.left;
    node.left = pivot.right;
    if (pivot.right) pivot.right.parent = node;
    pivot.parent = node.parent;
    if (!node.parent) this.root = pivot;
    else if (node === node.parent.right) node.parent.right = pivot;
    else node.parent.left = pivot;
    pivot.right = node;
    node.parent = pivot;
  }

  splay(node) {
    while (node.parent) {
      const parent = node.parent;
      const grandparent = parent.parent;

      if (!grandparent) {
        if (node === parent.left) this.rotateRight(parent);
        else this.rotateLeft(parent);
      } else if (node === parent.left && parent === grandparent.left) {
        this.rotateRight(grandparent);
        this.rotateRight(parent);
      } else if (node === parent.right && parent === grandparent.right) {
        this.rotateLeft(grandparent);
        this.rotateLeft(parent);
      } else if (node === parent.right && parent === grandparent.left) {
        this.rotateLeft(parent);
        this.rotateRight(grandparent);
      } else {
        this.rotateRight(parent);
        this.rotateLeft(grandparent);
      }
    }
  }

  insert(value) {
    if (!this.root) {
      this.root = new SplayTreeNode(value);
      return this.root;
    }

    let current = this.root;
    let parent = null;

    while (current) {
      parent = current;
      current = value < current.value ? current.left : current.right;
    }

    const node = new SplayTreeNode(value);
    node.parent = parent;
    if (value < parent.value) parent.left = node;
    else parent.right = node;
    this.splay(node);
    return node;
  }

  search(value) {
    let current = this.root;
    let last = null;

    while (current) {
      last = current;
      if (value === current.value) {
        this.splay(current);
        return current;
      }
      current = value < current.value ? current.left : current.right;
    }

    if (last) this.splay(last);
    return null;
  }
}

module.exports = { SplayTree, SplayTreeNode };
