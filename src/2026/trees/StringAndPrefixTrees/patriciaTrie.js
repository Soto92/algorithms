class PatriciaTrieNode {
  constructor(key = null, bitIndex = -1) {
    this.key = key;
    this.bitIndex = bitIndex;
    this.left = this;
    this.right = this;
  }
}

class PatriciaTrie {
  constructor() {
    this.root = new PatriciaTrieNode();
    this.root.left = this.root;
    this.root.right = this.root;
  }

  bit(key, index) {
    const charIndex = Math.floor(index / 8);
    if (charIndex >= key.length) return 0;
    return (key.charCodeAt(charIndex) >> (7 - (index % 8))) & 1;
  }

  firstDifferentBit(first, second) {
    const max = Math.max(first.length, second.length) * 8;
    for (let index = 0; index < max; index++) {
      if (this.bit(first, index) !== this.bit(second, index)) return index;
    }
    return max;
  }

  searchNode(key) {
    let parent = this.root;
    let current = this.root.left;

    while (parent.bitIndex < current.bitIndex) {
      parent = current;
      current = this.bit(key, current.bitIndex) === 0 ? current.left : current.right;
    }

    return current;
  }

  search(key) {
    const node = this.searchNode(key);
    return node.key === key;
  }

  insert(key) {
    if (this.root.left === this.root) {
      const node = new PatriciaTrieNode(key, 0);
      node.left = node;
      node.right = this.root;
      this.root.left = node;
      return node;
    }

    const found = this.searchNode(key);
    if (found.key === key) return found;

    const differentBit = this.firstDifferentBit(key, found.key);
    let parent = this.root;
    let current = this.root.left;

    while (parent.bitIndex < current.bitIndex && current.bitIndex < differentBit) {
      parent = current;
      current = this.bit(key, current.bitIndex) === 0 ? current.left : current.right;
    }

    const node = new PatriciaTrieNode(key, differentBit);
    if (this.bit(key, differentBit) === 0) {
      node.left = node;
      node.right = current;
    } else {
      node.left = current;
      node.right = node;
    }

    if (this.bit(key, parent.bitIndex) === 0 || parent === this.root) parent.left = node;
    else parent.right = node;

    return node;
  }
}

module.exports = { PatriciaTrie, PatriciaTrieNode };
