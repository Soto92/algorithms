class DirectoryTreeNode {
  constructor(name) {
    this.name = name;
    this.directories = new Map();
    this.files = new Set();
  }

  addDirectory(name) {
    const directory = new DirectoryTreeNode(name);
    this.directories.set(name, directory);
    return directory;
  }

  addFile(name) {
    this.files.add(name);
  }
}

class DirectoryTree {
  constructor(rootName = "/") {
    this.root = new DirectoryTreeNode(rootName);
  }
}

module.exports = { DirectoryTree, DirectoryTreeNode };
