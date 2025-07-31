class CircularQueue {
  constructor(size) {
    this.size = size;
    this.queue = new Array(size);
    this.front = -1;
    this.rear = -1;
  }
  enqueue(item) {
    if ((this.rear + 1) % this.size === this.front) return false;
    if (this.front === -1) this.front = 0;
    this.rear = (this.rear + 1) % this.size;
    this.queue[this.rear] = item;
    return true;
  }
  dequeue() {
    if (this.front === -1) return null;
    let item = this.queue[this.front];
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.size;
    }
    return item;
  }
}
