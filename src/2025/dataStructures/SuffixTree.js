class SuffixTreeNode {
  constructor() {
    this.children = {};
  }
}

class SuffixTree {
  constructor(text) {
    this.root = new SuffixTreeNode();
    this.build(text);
  }

  build(text) {
    for (let i = 0; i < text.length; i++) {
      this.insertSuffix(text.substring(i));
    }
  }

  insertSuffix(suffix) {
    let node = this.root;
    for (let i = 0; i < suffix.length; i++) {
      const char = suffix[i];
      if (!node.children[char]) {
        node.children[char] = new SuffixTreeNode();
      }
      node = node.children[char];
    }
  }

  search(pattern) {
    let node = this.root;
    for (let i = 0; i < pattern.length; i++) {
      const char = pattern[i];
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return true;
  }

  hasSubstring(pattern) {
    let node = this.root;
    for (const char of pattern) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return true;
  }
}
