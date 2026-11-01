const crypto = require("crypto");

class MerkleDagNode {
  constructor(value, links = []) {
    this.value = value;
    this.links = links;
    this.hash = this.computeHash();
  }

  computeHash() {
    const linkedHashes = this.links.map((node) => node.hash).sort().join("");
    return crypto.createHash("sha256").update(String(this.value) + linkedHashes).digest("hex");
  }

  addLink(node) {
    this.links.push(node);
    this.hash = this.computeHash();
  }
}

class MerkleDag {
  constructor() {
    this.nodes = new Map();
  }

  add(value, links = []) {
    const node = new MerkleDagNode(value, links);
    this.nodes.set(node.hash, node);
    return node;
  }
}

module.exports = { MerkleDag, MerkleDagNode };
