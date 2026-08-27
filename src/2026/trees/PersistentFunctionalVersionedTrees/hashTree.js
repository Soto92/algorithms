const crypto = require("crypto");

class HashTreeNode {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
    this.hash = this.computeHash();
  }

  computeHash() {
    const childHashes = this.children.map((child) => child.hash).join("");
    return crypto.createHash("sha256").update(String(this.value) + childHashes).digest("hex");
  }

  addChild(child) {
    this.children.push(child);
    this.hash = this.computeHash();
  }
}

class HashTree {
  constructor(rootValue) {
    this.root = new HashTreeNode(rootValue);
  }

  rootHash() {
    return this.root.hash;
  }
}

module.exports = { HashTree, HashTreeNode };
