class DerivationTreeNode {
  constructor(symbol) {
    this.symbol = symbol;
    this.children = [];
  }

  derive(symbols) {
    this.children = symbols.map((symbol) => new DerivationTreeNode(symbol));
    return this.children;
  }
}

class DerivationTree {
  constructor(startSymbol) {
    this.root = new DerivationTreeNode(startSymbol);
  }
}

module.exports = { DerivationTree, DerivationTreeNode };
