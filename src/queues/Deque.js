class Deque {
  constructor() {
    this.items = [];
  }
  addFront(item) {
    this.items.unshift(item);
  }
  addRear(item) {
    this.items.push(item);
  }
  removeFront() {
    return this.items.shift();
  }
  removeRear() {
    return this.items.pop();
  }
}
