class HatTrieNode {
  constructor() {
    this.children = new Map();
    this.bucket = new Map();
  }
}

class HatTrie {
  constructor(bucketLimit = 4) {
    this.root = new HatTrieNode();
    this.bucketLimit = bucketLimit;
  }

  set(key, value) {
    this.setAt(this.root, key, value, 0);
  }

  setAt(node, key, value, depth) {
    if (node.children.size === 0) {
      node.bucket.set(key.slice(depth), value);
      if (node.bucket.size > this.bucketLimit) this.split(node, depth);
      return;
    }

    const char = key[depth] || "";
    if (!node.children.has(char)) node.children.set(char, new HatTrieNode());
    this.setAt(node.children.get(char), key, value, depth + 1);
  }

  split(node, depth) {
    const entries = [...node.bucket.entries()];
    node.bucket.clear();

    for (const [suffix, value] of entries) {
      const char = suffix[0] || "";
      if (!node.children.has(char)) node.children.set(char, new HatTrieNode());
      const child = node.children.get(char);
      child.bucket.set(suffix.slice(1), value);
      if (child.bucket.size > this.bucketLimit) this.split(child, depth + 1);
    }
  }

  get(key) {
    let node = this.root;
    let depth = 0;

    while (node.children.size > 0) {
      const char = key[depth] || "";
      if (!node.children.has(char)) return null;
      node = node.children.get(char);
      depth++;
    }

    return node.bucket.has(key.slice(depth)) ? node.bucket.get(key.slice(depth)) : null;
  }
}

module.exports = { HatTrie, HatTrieNode };
