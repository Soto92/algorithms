class BPlusTreeNode {
  constructor(leaf = true) {
    this.keys = [];
    this.children = [];
    this.values = [];
    this.leaf = leaf;
    this.next = null;
  }
}

class BPlusTree {
  constructor(order = 4) {
    this.order = order;
    this.root = new BPlusTreeNode(true);
  }

  search(key) {
    let node = this.root;

    while (!node.leaf) {
      let index = 0;
      while (index < node.keys.length && key >= node.keys[index]) index++;
      node = node.children[index];
    }

    const index = node.keys.indexOf(key);
    return index === -1 ? null : node.values[index];
  }

  insert(key, value) {
    const promoted = this.insertRecursive(this.root, key, value);

    if (promoted) {
      const root = new BPlusTreeNode(false);
      root.keys = [promoted.key];
      root.children = [this.root, promoted.right];
      this.root = root;
    }
  }

  insertRecursive(node, key, value) {
    if (node.leaf) {
      let index = 0;
      while (index < node.keys.length && key > node.keys[index]) index++;
      node.keys.splice(index, 0, key);
      node.values.splice(index, 0, value);
      return node.keys.length < this.order ? null : this.splitLeaf(node);
    }

    let index = 0;
    while (index < node.keys.length && key >= node.keys[index]) index++;
    const promoted = this.insertRecursive(node.children[index], key, value);

    if (promoted) {
      node.keys.splice(index, 0, promoted.key);
      node.children.splice(index + 1, 0, promoted.right);
    }

    return node.keys.length < this.order ? null : this.splitInternal(node);
  }

  splitLeaf(node) {
    const middle = Math.ceil(node.keys.length / 2);
    const right = new BPlusTreeNode(true);
    right.keys = node.keys.splice(middle);
    right.values = node.values.splice(middle);
    right.next = node.next;
    node.next = right;
    return { key: right.keys[0], right };
  }

  splitInternal(node) {
    const middle = Math.floor(node.keys.length / 2);
    const key = node.keys[middle];
    const right = new BPlusTreeNode(false);
    right.keys = node.keys.splice(middle + 1);
    right.children = node.children.splice(middle + 1);
    node.keys.splice(middle, 1);
    return { key, right };
  }
}

module.exports = { BPlusTree, BPlusTreeNode };
