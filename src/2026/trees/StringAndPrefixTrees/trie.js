class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;

    for (const char of word) {
      if (!node.children.has(char)) node.children.set(char, new TrieNode());
      node = node.children.get(char);
    }

    node.isEnd = true;
  }

  search(word) {
    const node = this.findNode(word);
    return !!node && node.isEnd;
  }

  startsWith(prefix) {
    return !!this.findNode(prefix);
  }

  findNode(text) {
    let node = this.root;

    for (const char of text) {
      if (!node.children.has(char)) return null;
      node = node.children.get(char);
    }

    return node;
  }
}

module.exports = { Trie, TrieNode };
