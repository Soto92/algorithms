class TernarySearchTreeNode {
  constructor(char) {
    this.char = char;
    this.left = null;
    this.middle = null;
    this.right = null;
    this.isEnd = false;
  }
}

class TernarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(word) {
    if (!word) return;
    this.root = this.insertNode(this.root, word, 0);
  }

  insertNode(node, word, index) {
    const char = word[index];
    if (!node) node = new TernarySearchTreeNode(char);

    if (char < node.char) node.left = this.insertNode(node.left, word, index);
    else if (char > node.char) node.right = this.insertNode(node.right, word, index);
    else if (index < word.length - 1) node.middle = this.insertNode(node.middle, word, index + 1);
    else node.isEnd = true;

    return node;
  }

  search(word) {
    if (!word) return false;
    const node = this.searchNode(this.root, word, 0);
    return !!node && node.isEnd;
  }

  searchNode(node, word, index) {
    if (!node) return null;
    const char = word[index];
    if (char < node.char) return this.searchNode(node.left, word, index);
    if (char > node.char) return this.searchNode(node.right, word, index);
    if (index === word.length - 1) return node;
    return this.searchNode(node.middle, word, index + 1);
  }
}

module.exports = { TernarySearchTree, TernarySearchTreeNode };
