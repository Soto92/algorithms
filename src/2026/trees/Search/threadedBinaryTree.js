class ThreadedBinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.leftThread = false;
    this.rightThread = false;
  }
}

class ThreadedBinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new ThreadedBinaryTreeNode(value);
    if (!this.root) {
      this.root = node;
      return node;
    }

    let current = this.root;
    let parent = null;

    while (current) {
      parent = current;
      if (value < current.value) {
        if (current.leftThread) break;
        current = current.left;
      } else {
        if (current.rightThread) break;
        current = current.right;
      }
    }

    if (value < parent.value) {
      node.left = parent.left;
      node.right = parent;
      node.leftThread = parent.leftThread;
      node.rightThread = true;
      parent.left = node;
      parent.leftThread = false;
    } else {
      node.left = parent;
      node.right = parent.right;
      node.leftThread = true;
      node.rightThread = parent.rightThread;
      parent.right = node;
      parent.rightThread = false;
    }

    return node;
  }

  leftMost(node) {
    while (node && node.left && !node.leftThread) node = node.left;
    return node;
  }
}

module.exports = { ThreadedBinaryTree, ThreadedBinaryTreeNode };
