class HuffmanTreeNode {
  constructor(symbol, frequency, left = null, right = null) {
    this.symbol = symbol;
    this.frequency = frequency;
    this.left = left;
    this.right = right;
  }
}

class HuffmanTree {
  constructor(frequencies = new Map()) {
    this.root = this.build(frequencies);
  }

  build(frequencies) {
    const nodes = [...frequencies.entries()].map(([symbol, frequency]) => new HuffmanTreeNode(symbol, frequency));

    while (nodes.length > 1) {
      nodes.sort((a, b) => a.frequency - b.frequency);
      const left = nodes.shift();
      const right = nodes.shift();
      nodes.push(new HuffmanTreeNode(null, left.frequency + right.frequency, left, right));
    }

    return nodes[0] || null;
  }

  codes(node = this.root, prefix = "", result = new Map()) {
    if (!node) return result;
    if (node.symbol !== null) result.set(node.symbol, prefix);
    this.codes(node.left, prefix + "0", result);
    this.codes(node.right, prefix + "1", result);
    return result;
  }
}

module.exports = { HuffmanTree, HuffmanTreeNode };
