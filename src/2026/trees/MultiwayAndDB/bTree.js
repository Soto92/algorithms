class BTreeNode {
  constructor(leaf = true) {
    this.keys = [];
    this.children = [];
    this.leaf = leaf;
  }
}

class BTree {
  constructor(minDegree = 2) {
    this.minDegree = minDegree;
    this.root = new BTreeNode(true);
  }

  search(key, node = this.root) {
    let index = 0;
    while (index < node.keys.length && key > node.keys[index]) index++;
    if (index < node.keys.length && key === node.keys[index]) return { node, index };
    if (node.leaf) return null;
    return this.search(key, node.children[index]);
  }

  splitChild(parent, index) {
    const degree = this.minDegree;
    const fullChild = parent.children[index];
    const newChild = new BTreeNode(fullChild.leaf);
    const middleKey = fullChild.keys[degree - 1];

    newChild.keys = fullChild.keys.splice(degree);
    fullChild.keys.splice(degree - 1, 1);

    if (!fullChild.leaf) {
      newChild.children = fullChild.children.splice(degree);
    }

    parent.children.splice(index + 1, 0, newChild);
    parent.keys.splice(index, 0, middleKey);
  }

  insert(key) {
    const root = this.root;

    if (root.keys.length === 2 * this.minDegree - 1) {
      const newRoot = new BTreeNode(false);
      newRoot.children.push(root);
      this.splitChild(newRoot, 0);
      this.root = newRoot;
    }

    this.insertNonFull(this.root, key);
  }

  insertNonFull(node, key) {
    let index = node.keys.length - 1;

    if (node.leaf) {
      while (index >= 0 && key < node.keys[index]) index--;
      node.keys.splice(index + 1, 0, key);
      return;
    }

    while (index >= 0 && key < node.keys[index]) index--;
    index++;

    if (node.children[index].keys.length === 2 * this.minDegree - 1) {
      this.splitChild(node, index);
      if (key > node.keys[index]) index++;
    }

    this.insertNonFull(node.children[index], key);
  }
}

module.exports = { BTree, BTreeNode };
