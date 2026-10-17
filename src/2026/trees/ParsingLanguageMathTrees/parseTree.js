class ParseTreeNode {
  constructor(symbol, children = []) {
    this.symbol = symbol;
    this.children = children;
  }

  addChild(symbol) {
    const child = new ParseTreeNode(symbol);
    this.children.push(child);
    return child;
  }
}

class ParseTree {
  constructor(rootSymbol) {
    this.root = new ParseTreeNode(rootSymbol);
  }
}

module.exports = { ParseTree, ParseTreeNode };
