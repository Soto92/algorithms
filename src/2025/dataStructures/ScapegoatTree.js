class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

class ScapegoatTree {
  constructor(alpha = 0.75) {
    this.root = null;
    this.size = 0;
    this.maxSize = 0;
    this.alpha = alpha;
  }

  getSize(node) {
    if (node === null) return 0;
    return 1 + this.getSize(node.left) + this.getSize(node.right);
  }

  isAlphaWeightBalanced(node) {
    return (
      this.getSize(node.left) <= this.alpha * this.getSize(node) &&
      this.getSize(node.right) <= this.alpha * this.getSize(node)
    );
  }

  insert(key) {
    const newNode = new Node(key);
    if (this.root === null) {
      this.root = newNode;
      this.size++;
      this.maxSize++;
      return;
    }

    let current = this.root;
    let parent = null;
    let depth = 0;
    while (current !== null) {
      parent = current;
      if (key < current.key) {
        current = current.left;
      } else {
        current = current.right;
      }
      depth++;
    }

    newNode.parent = parent;
    if (key < parent.key) {
      parent.left = newNode;
    } else {
      parent.right = newNode;
    }
    this.size++;
    this.maxSize = Math.max(this.size, this.maxSize);

    if (depth > Math.log(this.maxSize) / Math.log(1 / this.alpha)) {
      let scapegoat = parent;
      while (scapegoat !== null && this.isAlphaWeightBalanced(scapegoat)) {
        scapegoat = scapegoat.parent;
      }
      if (scapegoat !== null) {
        this.rebuild(scapegoat);
      }
    }
  }

  rebuild(node) {
    const nodes = [];
    const inorder = (n) => {
      if (n === null) return;
      inorder(n.left);
      nodes.push(n);
      inorder(n.right);
    };
    inorder(node);
  }
}
