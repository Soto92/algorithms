class Node {
  constructor(key) {
    this.key = key;
    this.priority = Math.random();
    this.left = null;
    this.right = null;
  }
}

class Treap {
  constructor() {
    this.root = null;
  }

  rightRotate(y) {
    const x = y.left;
    const T2 = x.right;
    x.right = y;
    y.left = T2;
    return x;
  }

  leftRotate(x) {
    const y = x.right;
    const T2 = y.left;
    y.left = x;
    x.right = T2;
    return y;
  }

  insert(key) {
    this.root = this.insertNode(this.root, key);
  }

  insertNode(root, key) {
    if (root === null) {
      return new Node(key);
    }

    if (key <= root.key) {
      root.left = this.insertNode(root.left, key);
      if (root.left.priority > root.priority) {
        root = this.rightRotate(root);
      }
    } else {
      root.right = this.insertNode(root.right, key);
      if (root.right.priority > root.priority) {
        root = this.leftRotate(root);
      }
    }
    return root;
  }

  search(key, root = this.root) {
    if (root === null || root.key === key) {
      return root !== null;
    }
    if (key < root.key) {
      return this.search(key, root.left);
    }
    return this.search(key, root.right);
  }
}
