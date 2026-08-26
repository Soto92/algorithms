class SuffixTreeNode {
  constructor() {
    this.children = new Map();
    this.indexes = [];
  }
}

class SuffixTree {
  constructor(text = "") {
    this.root = new SuffixTreeNode();
    this.text = "";
    if (text) this.build(text);
  }

  build(text) {
    this.text = text;
    for (let index = 0; index < text.length; index++) {
      this.insertSuffix(text.slice(index), index);
    }
  }

  insertSuffix(suffix, index) {
    let node = this.root;
    node.indexes.push(index);

    for (const char of suffix) {
      if (!node.children.has(char)) node.children.set(char, new SuffixTreeNode());
      node = node.children.get(char);
      node.indexes.push(index);
    }
  }

  search(pattern) {
    let node = this.root;

    for (const char of pattern) {
      if (!node.children.has(char)) return [];
      node = node.children.get(char);
    }

    return node.indexes;
  }
}

module.exports = { SuffixTree, SuffixTreeNode };
