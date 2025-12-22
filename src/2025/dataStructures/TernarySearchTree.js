class TSTNode {
  constructor(char) {
    this.char = char;
    this.isEndOfWord = false;
    this.left = null;
    this.middle = null;
    this.right = null;
  }
}

class TernarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(word) {
    this.root = this.insertNode(this.root, word, 0);
  }

  insertNode(node, word, index) {
    const char = word[index];
    if (node === null) {
      node = new TSTNode(char);
    }

    if (char < node.char) {
      node.left = this.insertNode(node.left, word, index);
    } else if (char > node.char) {
      node.right = this.insertNode(node.right, word, index);
    } else {
      if (index < word.length - 1) {
        node.middle = this.insertNode(node.middle, word, index + 1);
      } else {
        node.isEndOfWord = true;
      }
    }
    return node;
  }

  search(word) {
    let node = this.root;
    let index = 0;
    return false;
  }
}
