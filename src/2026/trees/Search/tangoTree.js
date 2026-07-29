class TangoTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.preferredChild = null;
  }
}

class TangoTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new TangoTreeNode(value);
    if (!this.root) {
      this.root = node;
      return node;
    }

    let current = this.root;
    let parent = null;

    while (current) {
      parent = current;
      current = value < current.value ? current.left : current.right;
    }

    node.parent = parent;
    if (value < parent.value) parent.left = node;
    else parent.right = node;
    return node;
  }

  search(value) {
    let current = this.root;
    let previous = null;

    while (current) {
      if (previous) previous.preferredChild = current;
      if (value === current.value) return current;
      previous = current;
      current = value < current.value ? current.left : current.right;
    }

    return null;
  }
}

module.exports = { TangoTree, TangoTreeNode };
