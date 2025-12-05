class BinaryTrieNode {
  constructor() {
    this.children = [null, null];
  }
}

class BinaryTrie {
  constructor(maxBits = 32) {
    this.root = new BinaryTrieNode();
    this.maxBits = maxBits;
  }

  insert(num) {
    let current = this.root;
    for (let i = this.maxBits - 1; i >= 0; i--) {
      const bit = (num >> i) & 1;
      if (!current.children[bit]) {
        current.children[bit] = new BinaryTrieNode();
      }
      current = current.children[bit];
    }
  }

  findMaxXor(num) {
    let current = this.root;
    let maxXor = 0;
    for (let i = this.maxBits - 1; i >= 0; i--) {
      const bit = (num >> i) & 1;
      const oppositeBit = 1 - bit;
      if (current.children[oppositeBit]) {
        maxXor |= 1 << i;
        current = current.children[oppositeBit];
      } else {
        current = current.children[bit];
      }
    }
    return maxXor;
  }
}
