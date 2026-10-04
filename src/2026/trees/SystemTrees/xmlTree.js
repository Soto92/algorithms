class XmlTreeNode {
  constructor(name, attributes = {}) {
    this.name = name;
    this.attributes = attributes;
    this.children = [];
    this.text = "";
  }

  addChild(name, attributes = {}) {
    const child = new XmlTreeNode(name, attributes);
    this.children.push(child);
    return child;
  }
}

class XmlTree {
  constructor(rootName) {
    this.root = new XmlTreeNode(rootName);
  }
}

module.exports = { XmlTree, XmlTreeNode };
