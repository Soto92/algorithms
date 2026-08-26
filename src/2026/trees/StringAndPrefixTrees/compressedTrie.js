class CompressedTrieNode {
  constructor(label = "") {
    this.label = label;
    this.children = new Map();
    this.isEnd = false;
  }
}

class CompressedTrie {
  constructor() {
    this.root = new CompressedTrieNode();
  }

  commonPrefixLength(first, second) {
    let index = 0;
    while (index < first.length && index < second.length && first[index] === second[index]) index++;
    return index;
  }

  insert(word) {
    this.insertAt(this.root, word);
  }

  insertAt(node, word) {
    if (!word) {
      node.isEnd = true;
      return;
    }

    const firstChar = word[0];
    const child = node.children.get(firstChar);

    if (!child) {
      const newNode = new CompressedTrieNode(word);
      newNode.isEnd = true;
      node.children.set(firstChar, newNode);
      return;
    }

    const length = this.commonPrefixLength(word, child.label);

    if (length === child.label.length) {
      this.insertAt(child, word.slice(length));
      return;
    }

    const split = new CompressedTrieNode(child.label.slice(0, length));
    child.label = child.label.slice(length);
    split.children.set(child.label[0], child);
    split.isEnd = length === word.length;
    node.children.set(firstChar, split);

    if (length < word.length) {
      const remaining = new CompressedTrieNode(word.slice(length));
      remaining.isEnd = true;
      split.children.set(remaining.label[0], remaining);
    }
  }

  search(word) {
    let node = this.root;
    let text = word;

    while (text.length) {
      const child = node.children.get(text[0]);
      if (!child || !text.startsWith(child.label)) return false;
      text = text.slice(child.label.length);
      node = child;
    }

    return node.isEnd;
  }
}

module.exports = { CompressedTrie, CompressedTrieNode };
