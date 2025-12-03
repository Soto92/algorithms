class Node {
  constructor(key) {
    this.key = key;
    this.level = 1;
    this.left = null;
    this.right = null;
  }
}

class AATree {
  constructor() {
    this.root = null;
  }

  skew(node) {
    if (node === null) return null;
    if (node.left === null) return node;
    if (node.left.level === node.level) {
      const left = node.left;
      node.left = left.right;
      left.right = node;
      return left;
    }
    return node;
  }

  split(node) {
    if (node === null) return null;
    if (node.right === null || node.right.right === null) return node;
    if (node.level === node.right.right.level) {
      const right = node.right;
      node.right = right.left;
      right.left = node;
      right.level++;
      return right;
    }
    return node;
  }

  insert(key) {
    this.root = this.insertNode(this.root, key);
  }

  insertNode(node, key) {
    if (node === null) {
      return new Node(key);
    }

    if (key < node.key) {
      node.left = this.insertNode(node.left, key);
    } else if (key > node.key) {
      node.right = this.insertNode(node.right, key);
    }

    node = this.skew(node);
    node = this.split(node);

    return node;
  }

  search(key) {
    let current = this.root;
    while (current !== null) {
      if (key === current.key) {
        return true;
      }
      if (key < current.key) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  delete(key) {
    this.root = this.deleteNode(this.root, key);
  }

  deleteNode(node, key) {
    if (node === null) return null;

    if (key > node.key) {
      node.right = this.deleteNode(node.right, key);
    } else if (key < node.key) {
      node.left = this.deleteNode(node.left, key);
    } else {
      if (node.left === null && node.right === null) return null;
    }

    node = this.skew(node);
    node.right = this.skew(node.right);
    if (node.right) node.right.right = this.skew(node.right.right);
    node = this.split(node);
    node.right = this.split(node.right);
    return node;
  }
}
