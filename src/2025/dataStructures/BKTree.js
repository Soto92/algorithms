class BKTreeNode {
  constructor(word) {
    this.word = word;
    this.children = {};
  }
}

class BKTree {
  constructor() {
    this.root = null;
  }

  levenshtein(a, b) {
    const matrix = Array(b.length + 1)
      .fill(null)
      .map(() => Array(a.length + 1).fill(null));
    for (let i = 0; i <= a.length; i++) matrix[0][i] = i;
    for (let j = 0; j <= b.length; j++) matrix[j][0] = j;
    for (let j = 1; j <= b.length; j++) {
      for (let i = 1; i <= a.length; i++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        matrix[j][i] = Math.min(
          matrix[j][i - 1] + 1,
          matrix[j - 1][i] + 1,
          matrix[j - 1][i - 1] + cost
        );
      }
    }
    return matrix[b.length][a.length];
  }

  add(word) {
    if (this.root === null) {
      this.root = new BKTreeNode(word);
      return;
    }
    let current = this.root;
    while (true) {
      const dist = this.levenshtein(current.word, word);
      if (current.children[dist]) {
        current = current.children[dist];
      } else {
        current.children[dist] = new BKTreeNode(word);
        break;
      }
    }
  }

  search(word, tolerance, node = this.root, results = []) {
    if (!node) return results;
    const dist = this.levenshtein(node.word, word);
    if (dist <= tolerance) results.push(node.word);
    for (let d = dist - tolerance; d <= dist + tolerance; d++) {
      if (node.children[d])
        this.search(word, tolerance, node.children[d], results);
    }
    return results;
  }
}
