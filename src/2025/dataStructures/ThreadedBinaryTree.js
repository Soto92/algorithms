class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.isRightThreaded = false;
  }
}

class ThreadedBinaryTree {
  constructor() {
    this.root = null;
  }

  populateQueue(node, q) {
    if (node === null) return;
    if (node.left) this.populateQueue(node.left, q);
    q.push(node);
    if (node.right) this.populateQueue(node.right, q);
  }

  createThreaded(root) {
    const q = [];
    this.populateQueue(root, q);
    this.root = root;

    for (let i = 0; i < q.length; i++) {
      if (q[i].right === null) {
        q[i].right = q[i + 1] || null;
        q[i].isRightThreaded = true;
      }
    }
  }

  leftmost(node) {
    while (node && node.left) {
      node = node.left;
    }
    return node;
  }

  inorder() {
    let current = this.leftmost(this.root);
    while (current) {
      current = current.isRightThreaded
        ? current.right
        : this.leftmost(current.right);
    }
  }
}
