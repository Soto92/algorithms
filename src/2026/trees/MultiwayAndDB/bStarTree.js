class BStarTreeNode {
  constructor(leaf = true) {
    this.keys = [];
    this.children = [];
    this.leaf = leaf;
  }
}

class BStarTree {
  constructor(order = 6) {
    this.order = order;
    this.root = new BStarTreeNode(true);
  }

  search(key, node = this.root) {
    let index = 0;
    while (index < node.keys.length && key > node.keys[index]) index++;
    if (node.keys[index] === key) return { node, index };
    if (node.leaf) return null;
    return this.search(key, node.children[index]);
  }

  insert(key) {
    const promoted = this.insertRecursive(this.root, key);

    if (promoted) {
      const root = new BStarTreeNode(false);
      root.keys = [promoted.key];
      root.children = [this.root, promoted.right];
      this.root = root;
    }
  }

  insertRecursive(node, key) {
    if (node.leaf) {
      let index = 0;
      while (index < node.keys.length && key > node.keys[index]) index++;
      node.keys.splice(index, 0, key);
      return node.keys.length < this.order ? null : this.splitNode(node);
    }

    let index = 0;
    while (index < node.keys.length && key > node.keys[index]) index++;
    const promoted = this.insertRecursive(node.children[index], key);

    if (promoted) {
      node.keys.splice(index, 0, promoted.key);
      node.children.splice(index + 1, 0, promoted.right);
    }

    return node.keys.length < this.order ? null : this.splitNode(node);
  }

  splitNode(node) {
    const middle = Math.floor((node.keys.length * 2) / 3);
    const right = new BStarTreeNode(node.leaf);
    const key = node.keys[middle];
    right.keys = node.keys.splice(middle + 1);
    node.keys.splice(middle, 1);

    if (!node.leaf) {
      right.children = node.children.splice(middle + 1);
    }

    return { key, right };
  }
}

module.exports = { BStarTree, BStarTreeNode };
