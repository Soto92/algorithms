const crypto = require("crypto");

class MerklePatriciaTrieNode {
  constructor() {
    this.value = null;
    this.children = new Map();
    this.hash = "";
  }
}

class MerklePatriciaTrie {
  constructor() {
    this.root = new MerklePatriciaTrieNode();
  }

  set(key, value) {
    let node = this.root;

    for (const char of key) {
      if (!node.children.has(char)) node.children.set(char, new MerklePatriciaTrieNode());
      node = node.children.get(char);
    }

    node.value = value;
    this.updateHashes(this.root);
  }

  get(key) {
    let node = this.root;

    for (const char of key) {
      if (!node.children.has(char)) return null;
      node = node.children.get(char);
    }

    return node.value;
  }

  updateHashes(node) {
    const childHashes = [...node.children.entries()]
      .sort(([a], [b]) => (a > b ? 1 : -1))
      .map(([char, child]) => `${char}:${this.updateHashes(child)}`)
      .join("|");

    node.hash = crypto.createHash("sha256").update(`${node.value ?? ""}:${childHashes}`).digest("hex");
    return node.hash;
  }

  rootHash() {
    return this.root.hash;
  }
}

module.exports = { MerklePatriciaTrie, MerklePatriciaTrieNode };
