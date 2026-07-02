class TwoThreeFourTreeNode {
  constructor(leaf = true) {
    this.keys = [];
    this.children = [];
    this.leaf = leaf;
  }
}

class TwoThreeFourTree {
  constructor() {
    this.root = new TwoThreeFourTreeNode(true);
  }

  search(key, node = this.root) {
    let index = 0;
    while (index < node.keys.length && key > node.keys[index]) index++;
    if (node.keys[index] === key) return { node, index };
    if (node.leaf) return null;
    return this.search(key, node.children[index]);
  }

  splitChild(parent, index) {
    const child = parent.children[index];
    const right = new TwoThreeFourTreeNode(child.leaf);
    const middle = child.keys[1];
    right.keys = [child.keys[2]];
    child.keys = [child.keys[0]];

    if (!child.leaf) {
      right.children = child.children.splice(2);
    }

    parent.keys.splice(index, 0, middle);
    parent.children.splice(index + 1, 0, right);
  }

  insert(key) {
    if (this.root.keys.length === 3) {
      const root = new TwoThreeFourTreeNode(false);
      root.children.push(this.root);
      this.splitChild(root, 0);
      this.root = root;
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

    if (node.children[index].keys.length === 3) {
      this.splitChild(node, index);
      if (key > node.keys[index]) index++;
    }

    this.insertNonFull(node.children[index], key);
  }
}

module.exports = { TwoThreeFourTree, TwoThreeFourTreeNode };
