class FileSystemTreeNode {
  constructor(name, type = "file") {
    this.name = name;
    this.type = type;
    this.children = new Map();
  }

  addChild(name, type = "file") {
    const child = new FileSystemTreeNode(name, type);
    this.children.set(name, child);
    return child;
  }
}

class FileSystemTree {
  constructor(rootName = "/") {
    this.root = new FileSystemTreeNode(rootName, "directory");
  }
}

module.exports = { FileSystemTree, FileSystemTreeNode };
