class TwoThreeTreeNode {
  constructor(keys = [], children = []) {
    this.keys = keys;
    this.children = children;
  }

  get leaf() {
    return this.children.length === 0;
  }
}

class TwoThreeTree {
  constructor() {
    this.root = null;
  }

  search(key, node = this.root) {
    if (!node) return null;
    if (node.keys.includes(key)) return node;
    if (node.leaf) return null;

    let index = 0;
    while (index < node.keys.length && key > node.keys[index]) index++;
    return this.search(key, node.children[index]);
  }

  insert(key) {
    if (!this.root) {
      this.root = new TwoThreeTreeNode([key]);
      return;
    }

    const promoted = this.insertRecursive(this.root, key);

    if (promoted) {
      this.root = new TwoThreeTreeNode([promoted.key], [promoted.left, promoted.right]);
    }
  }

  insertRecursive(node, key) {
    if (node.leaf) {
      node.keys.push(key);
      node.keys.sort((a, b) => a - b);
    } else {
      let index = 0;
      while (index < node.keys.length && key > node.keys[index]) index++;
      const promoted = this.insertRecursive(node.children[index], key);

      if (promoted) {
        node.keys.splice(index, 0, promoted.key);
        node.children.splice(index, 1, promoted.left, promoted.right);
      }
    }

    if (node.keys.length <= 2) return null;

    return {
      key: node.keys[1],
      left: new TwoThreeTreeNode([node.keys[0]], node.children.slice(0, 2)),
      right: new TwoThreeTreeNode([node.keys[2]], node.children.slice(2))
    };
  }
}

module.exports = { TwoThreeTree, TwoThreeTreeNode };
