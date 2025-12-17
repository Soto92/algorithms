class RadixTreeNode {
  constructor(key = "") {
    this.key = key;
    this.children = {};
    this.isEndOfWord = false;
  }
}

class RadixTree {
  constructor() {
    this.root = new RadixTreeNode();
  }

  insert(word) {
    this.insertNode(this.root, word);
  }

  insertNode(node, word) {
    if (word.length === 0) {
      node.isEndOfWord = true;
      return;
    }

    for (const key in node.children) {
      let i = 0;
      while (i < key.length && i < word.length && key[i] === word[i]) {
        i++;
      }

      if (i > 0) {
        if (i === key.length) {
          this.insertNode(node.children[key], word.substring(i));
        } else {
          const commonPrefix = key.substring(0, i);
          const restOfKey = key.substring(i);
          const restOfWord = word.substring(i);

          const newNode = new RadixTreeNode(commonPrefix);
          const oldChild = node.children[key];
          oldChild.key = restOfKey;
          newNode.children[restOfKey] = oldChild;
          this.insertNode(newNode, restOfWord);
          delete node.children[key];
          node.children[commonPrefix] = newNode;
        }
        return;
      }
    }
    node.children[word] = new RadixTreeNode(word);
    node.children[word].isEndOfWord = true;
  }
}
