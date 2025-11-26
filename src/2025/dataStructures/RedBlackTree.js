const RED = true;
const BLACK = false;

class Node {
  constructor(key, value, color) {
    this.key = key;
    this.value = value;
    this.color = color;
    this.left = null;
    this.right = null;
  }
}

class RedBlackTree {
  constructor() {
    this.root = null;
  }

  isRed(node) {
    if (node === null) return false;
    return node.color === RED;
  }

  rotateLeft(h) {
    const x = h.right;
    h.right = x.left;
    x.left = h;
    x.color = h.color;
    h.color = RED;
    return x;
  }

  rotateRight(h) {
    const x = h.left;
    h.left = x.right;
    x.right = h;
    x.color = h.color;
    h.color = RED;
    return x;
  }

  flipColors(h) {
    h.color = RED;
    h.left.color = BLACK;
    h.right.color = BLACK;
  }

  put(key, value) {
    this.root = this.putNode(this.root, key, value);
    this.root.color = BLACK;
  }

  putNode(h, key, value) {
    if (h === null) {
      return new Node(key, value, RED);
    }

    if (key < h.key) {
      h.left = this.putNode(h.left, key, value);
    } else if (key > h.key) {
      h.right = this.putNode(h.right, key, value);
    } else {
      h.value = value;
    }

    if (this.isRed(h.right) && !this.isRed(h.left)) {
      h = this.rotateLeft(h);
    }
    if (this.isRed(h.left) && this.isRed(h.left.left)) {
      h = this.rotateRight(h);
    }
    if (this.isRed(h.left) && this.isRed(h.right)) {
      this.flipColors(h);
    }

    return h;
  }

  get(key) {
    let x = this.root;
    while (x !== null) {
      if (key < x.key) {
        x = x.left;
      } else if (key > x.key) {
        x = x.right;
      } else {
        return x.value;
      }
    }
    return null;
  }

  delete(key) {
    if (!this.get(key)) return;
    if (!this.isRed(this.root.left) && !this.isRed(this.root.right)) {
      this.root.color = RED;
    }
    this.root = this.deleteNode(this.root, key);
    if (this.root) this.root.color = BLACK;
  }

  deleteNode(h, key) {
    if (key < h.key) {
      if (!this.isRed(h.left) && !this.isRed(h.left.left)) {
        h = this.moveRedLeft(h);
      }
      h.left = this.deleteNode(h.left, key);
    } else {
      if (this.isRed(h.left)) {
        h = this.rotateRight(h);
      }
      if (key === h.key && h.right === null) {
        return null;
      }
      if (!this.isRed(h.right) && !this.isRed(h.right.left)) {
        h = this.moveRedRight(h);
      }
      if (key === h.key) {
        const x = this.min(h.right);
        h.key = x.key;
        h.value = x.value;
        h.right = this.deleteMin(h.right);
      } else {
        h.right = this.deleteNode(h.right, key);
      }
    }
    return this.balance(h);
  }
}
