class MArySearchTreeNode {
  constructor(order) {
    this.order = order;
    this.keys = [];
    this.children = [];
  }

  get leaf() {
    return this.children.length === 0;
  }
}

class MArySearchTree {
  constructor(order = 4) {
    this.order = order;
    this.root = new MArySearchTreeNode(order);
  }

  search(key, node = this.root) {
    let index = 0;
    while (index < node.keys.length && key > node.keys[index]) index++;
    if (node.keys[index] === key) return { node, index };
    if (node.leaf) return null;
    return this.search(key, node.children[index]);
  }

  insert(key) {
    let node = this.root;

    while (!node.leaf) {
      let index = 0;
      while (index < node.keys.length && key > node.keys[index]) index++;
      node = node.children[index];
    }

    if (node.keys.length < this.order - 1) {
      node.keys.push(key);
      node.keys.sort((a, b) => a - b);
      return true;
    }

    return false;
  }
}

module.exports = { MArySearchTree, MArySearchTreeNode };
