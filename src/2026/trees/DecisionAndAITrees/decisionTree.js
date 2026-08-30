class DecisionTreeNode {
  constructor(test = null, value = null) {
    this.test = test;
    this.value = value;
    this.children = new Map();
  }
}

class DecisionTree {
  constructor(root = null) {
    this.root = root;
  }

  predict(input, node = this.root) {
    if (!node || node.value !== null) return node ? node.value : null;
    const branch = node.test(input);
    return this.predict(input, node.children.get(branch));
  }
}

module.exports = { DecisionTree, DecisionTreeNode };
