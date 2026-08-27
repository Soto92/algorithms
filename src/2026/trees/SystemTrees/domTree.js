class DomTreeNode {
  constructor(tagName, attributes = {}) {
    this.tagName = tagName;
    this.attributes = attributes;
    this.children = [];
    this.text = "";
  }

  appendChild(tagName, attributes = {}) {
    const child = new DomTreeNode(tagName, attributes);
    this.children.push(child);
    return child;
  }
}

class DomTree {
  constructor(rootTag = "html") {
    this.root = new DomTreeNode(rootTag);
  }
}

module.exports = { DomTree, DomTreeNode };
