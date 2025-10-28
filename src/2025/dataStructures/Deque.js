class Deque {
  constructor() {
    this.items = [];
  }

  addFront(element) {
    this.items.unshift(element);
  }

  addRear(element) {
    this.items.push(element);
  }

  removeFront() {
    if (this.isEmpty()) return undefined;
    return this.items.shift();
  }

  removeRear() {
    if (this.isEmpty()) return undefined;
    return this.items.pop();
  }

  peekFront() {
    return this.items[0];
  }

  peekRear() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}
