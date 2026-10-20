class SyntaxTreeNode {
  constructor(name, attributes = {}) {
    this.name = name;
    this.attributes = attributes;
    this.children = [];
  }

  addChild(name, attributes = {}) {
    const child = new SyntaxTreeNode(name, attributes);
    this.children.push(child);
    return child;
  }
}

class SyntaxTree {
  constructor(rootName) {
    this.root = new SyntaxTreeNode(rootName);
  }
}

module.exports = { SyntaxTree, SyntaxTreeNode };
