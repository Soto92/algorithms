const RED = "red";
const BLACK = "black";

class RedBlackTreeNode {
  constructor(value, color = RED) {
    this.value = value;
    this.color = color;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

class RedBlackTree {
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

  insert(value) {
    const node = new RedBlackTreeNode(value);
    let parent = null;
    let current = this.root;

    while (current) {
      parent = current;
      current = value < current.value ? current.left : current.right;
    }

    node.parent = parent;
    if (!parent) this.root = node;
    else if (value < parent.value) parent.left = node;
    else parent.right = node;

    this.fixInsert(node);
    return node;
  }

  fixInsert(node) {
    while (node.parent && node.parent.color === RED) {
      const parent = node.parent;
      const grandparent = parent.parent;

      if (parent === grandparent.left) {
        const uncle = grandparent.right;
        if (uncle && uncle.color === RED) {
          parent.color = BLACK;
          uncle.color = BLACK;
          grandparent.color = RED;
          node = grandparent;
        } else {
          if (node === parent.right) {
            node = parent;
            this.rotateLeft(node);
          }
          node.parent.color = BLACK;
          node.parent.parent.color = RED;
          this.rotateRight(node.parent.parent);
        }
      } else {
        const uncle = grandparent.left;
        if (uncle && uncle.color === RED) {
          parent.color = BLACK;
          uncle.color = BLACK;
          grandparent.color = RED;
          node = grandparent;
        } else {
          if (node === parent.left) {
            node = parent;
            this.rotateRight(node);
          }
          node.parent.color = BLACK;
          node.parent.parent.color = RED;
          this.rotateLeft(node.parent.parent);
        }
      }
    }

    this.root.color = BLACK;
  }
}

module.exports = { RedBlackTree, RedBlackTreeNode, RED, BLACK };
