class DawgNode {
  constructor() {
    this.children = new Map();
    this.isEnd = false;
    this.id = DawgNode.nextId++;
  }
}

DawgNode.nextId = 0;

class Dawg {
  constructor() {
    this.root = new DawgNode();
    this.previousWord = "";
    this.unchecked = [];
    this.minimized = new Map();
  }

  insert(word) {
    if (word < this.previousWord) throw new Error("Words must be inserted in sorted order");

    let common = 0;
    while (common < word.length && common < this.previousWord.length && word[common] === this.previousWord[common]) common++;

    this.minimize(common);

    let node = this.unchecked.length ? this.unchecked[this.unchecked.length - 1].child : this.root;

    for (let index = common; index < word.length; index++) {
      const child = new DawgNode();
      node.children.set(word[index], child);
      this.unchecked.push({ parent: node, char: word[index], child });
      node = child;
    }

    node.isEnd = true;
    this.previousWord = word;
  }

  minimize(downTo) {
    for (let index = this.unchecked.length - 1; index >= downTo; index--) {
      const item = this.unchecked[index];
      const key = this.signature(item.child);

      if (this.minimized.has(key)) item.parent.children.set(item.char, this.minimized.get(key));
      else this.minimized.set(key, item.child);

      this.unchecked.pop();
    }
  }

  finish() {
    this.minimize(0);
  }

  signature(node) {
    const edges = [...node.children.entries()].map(([char, child]) => `${char}:${child.id}`).join("|");
    return `${node.isEnd ? 1 : 0}:${edges}`;
  }

  search(word) {
    let node = this.root;

    for (const char of word) {
      if (!node.children.has(char)) return false;
      node = node.children.get(char);
    }

    return node.isEnd;
  }
}

module.exports = { Dawg, DawgNode };
