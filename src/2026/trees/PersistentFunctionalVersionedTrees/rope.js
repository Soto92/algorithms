class RopeNode {
  constructor(value = "", left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
    this.weight = left ? left.length() : value.length;
  }

  length() {
    if (!this.left && !this.right) return this.value.length;
    return this.weight + (this.right ? this.right.length() : 0);
  }
}

class Rope {
  constructor(text = "") {
    this.root = new RopeNode(text);
  }

  concat(other) {
    const rope = new Rope();
    rope.root = new RopeNode("", this.root, other.root);
    return rope;
  }

  charAt(index, node = this.root) {
    if (!node.left && !node.right) return node.value[index] ?? null;
    if (index < node.weight) return this.charAt(index, node.left);
    return this.charAt(index - node.weight, node.right);
  }

  toString(node = this.root) {
    if (!node) return "";
    if (!node.left && !node.right) return node.value;
    return this.toString(node.left) + this.toString(node.right);
  }
}

module.exports = { Rope, RopeNode };
