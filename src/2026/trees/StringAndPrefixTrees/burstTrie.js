class BurstTrieNode {
  constructor() {
    this.children = new Map();
    this.bucket = [];
  }
}

class BurstTrie {
  constructor(bucketLimit = 4) {
    this.root = new BurstTrieNode();
    this.bucketLimit = bucketLimit;
  }

  insert(word) {
    this.insertAt(this.root, word, 0);
  }

  insertAt(node, word, depth) {
    if (node.children.size === 0) {
      node.bucket.push(word);
      if (node.bucket.length > this.bucketLimit) this.burst(node, depth);
      return;
    }

    const char = word[depth] || "";
    if (!node.children.has(char)) node.children.set(char, new BurstTrieNode());
    this.insertAt(node.children.get(char), word, depth + 1);
  }

  burst(node, depth) {
    const words = node.bucket;
    node.bucket = [];

    for (const word of words) {
      const char = word[depth] || "";
      if (!node.children.has(char)) node.children.set(char, new BurstTrieNode());
      this.insertAt(node.children.get(char), word, depth + 1);
    }
  }

  search(word) {
    let node = this.root;
    let depth = 0;

    while (node.children.size > 0) {
      const char = word[depth] || "";
      if (!node.children.has(char)) return false;
      node = node.children.get(char);
      depth++;
    }

    return node.bucket.includes(word);
  }
}

module.exports = { BurstTrie, BurstTrieNode };
