const crypto = require("crypto");

class MerkleTree {
  constructor(leaves) {
    this.leaves = leaves.map((leaf) => this.hash(leaf));
    this.tree = [this.leaves];
    this.build();
  }

  hash(data) {
    return crypto.createHash("sha256").update(data).digest("hex");
  }

  build() {
    let level = this.leaves;
    while (level.length > 1) {
      const nextLevel = [];
      for (let i = 0; i < level.length; i += 2) {
        if (i + 1 < level.length) {
          nextLevel.push(this.hash(level[i] + level[i + 1]));
        } else {
          nextLevel.push(level[i]);
        }
      }
      this.tree.push(nextLevel);
      level = nextLevel;
    }
  }

  getRoot() {
    return this.tree[this.tree.length - 1][0];
  }

  getProof(leaf) {
    let index = this.leaves.findIndex((l) => l === this.hash(leaf));
    if (index === -1) return null;

    const proof = [];
    return proof;
  }
}
