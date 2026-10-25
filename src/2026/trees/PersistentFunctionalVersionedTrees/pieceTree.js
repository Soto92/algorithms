class PieceTreeNode {
  constructor(buffer, start, length) {
    this.buffer = buffer;
    this.start = start;
    this.length = length;
    this.left = null;
    this.right = null;
  }
}

class PieceTree {
  constructor(text = "") {
    this.original = text;
    this.added = "";
    this.root = text ? new PieceTreeNode("original", 0, text.length) : null;
  }

  insert(text) {
    const start = this.added.length;
    this.added += text;
    const node = new PieceTreeNode("added", start, text.length);
    this.root = this.appendNode(this.root, node);
  }

  appendNode(root, node) {
    if (!root) return node;
    root.right = this.appendNode(root.right, node);
    return root;
  }

  toString(node = this.root) {
    if (!node) return "";
    const source = node.buffer === "original" ? this.original : this.added;
    return this.toString(node.left) + source.slice(node.start, node.start + node.length) + this.toString(node.right);
  }
}

module.exports = { PieceTree, PieceTreeNode };
