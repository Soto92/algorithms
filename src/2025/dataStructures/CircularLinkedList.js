class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head;
    } else {
      let current = this.head;
      while (current.next !== this.head) {
        current = current.next;
      }
      current.next = newNode;
      newNode.next = this.head;
    }
    this.length++;
  }

  delete(data) {
    if (!this.head) return;

    let current = this.head;
    let prev = null;

    do {
      if (current.data === data) {
        if (prev) {
          prev.next = current.next;
          if (current === this.head) this.head = current.next;
        } else {
          this.head = this.length === 1 ? null : current.next;
        }
        this.length--;
        return;
      }
      prev = current;
      current = current.next;
    } while (current !== this.head);
  }
}
