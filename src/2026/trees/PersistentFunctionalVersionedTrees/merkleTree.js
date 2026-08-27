const crypto = require("crypto");

class MerkleTree {
  constructor(values = []) {
    this.values = values;
    this.levels = values.length ? this.build(values.map((value) => this.hash(value))) : [];
  }

  hash(value) {
    return crypto.createHash("sha256").update(String(value)).digest("hex");
  }

  build(leaves) {
    const levels = [leaves];

    while (levels[levels.length - 1].length > 1) {
      const current = levels[levels.length - 1];
      const next = [];

      for (let index = 0; index < current.length; index += 2) {
        next.push(this.hash(current[index] + (current[index + 1] || current[index])));
      }

      levels.push(next);
    }

    return levels;
  }

  root() {
    if (!this.levels.length) return null;
    return this.levels[this.levels.length - 1][0];
  }
}

module.exports = { MerkleTree };
