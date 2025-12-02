class Node {
  constructor(data) {
    this.data = data;
    this.npx = 0;
  }
}

class XORLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.nodes = new Map();
    this.nodeCounter = 0;
  }

  _getPointer(node) {
    if (!node) return 0;
    for (const [ptr, n] of this.nodes.entries()) {
      if (n === node) return ptr;
    }
    return 0;
  }

  _dereferencePointer(ptr) {
    return this.nodes.get(ptr) || null;
  }

  add(data) {
    const newNode = new Node(data);
    const newPtr = ++this.nodeCounter;
    this.nodes.set(newPtr, newNode);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const tailPtr = this._getPointer(this.tail);
      newNode.npx = tailPtr;
      this.tail.npx ^= newPtr;
      this.tail = newNode;
    }
  }

  get(index) {
    let prevPtr = 0;
    let current = this.head;
    for (let i = 0; i < index && current; i++) {
      const currentPtr = this._getPointer(current);
      const nextPtr = prevPtr ^ current.npx;
      prevPtr = currentPtr;
      current = this._dereferencePointer(nextPtr);
    }
    return current;
  }
}
