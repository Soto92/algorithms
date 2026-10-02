class BinomialHeapNode {
  constructor(value) {
    this.value = value;
    this.degree = 0;
    this.parent = null;
    this.child = null;
    this.sibling = null;
  }
}

class BinomialHeap {
  constructor() {
    this.head = null;
  }

  mergeRootLists(first, second) {
    if (!first) return second;
    if (!second) return first;

    let head;
    let tail;

    if (first.degree <= second.degree) {
      head = first;
      first = first.sibling;
    } else {
      head = second;
      second = second.sibling;
    }

    tail = head;

    while (first && second) {
      if (first.degree <= second.degree) {
        tail.sibling = first;
        first = first.sibling;
      } else {
        tail.sibling = second;
        second = second.sibling;
      }
      tail = tail.sibling;
    }

    tail.sibling = first || second;
    return head;
  }

  link(child, parent) {
    child.parent = parent;
    child.sibling = parent.child;
    parent.child = child;
    parent.degree++;
  }

  union(other) {
    this.head = this.mergeRootLists(this.head, other.head);
    if (!this.head) return;

    let previous = null;
    let current = this.head;
    let next = current.sibling;

    while (next) {
      if (current.degree !== next.degree || (next.sibling && next.sibling.degree === current.degree)) {
        previous = current;
        current = next;
      } else if (current.value <= next.value) {
        current.sibling = next.sibling;
        this.link(next, current);
      } else {
        if (!previous) this.head = next;
        else previous.sibling = next;
        this.link(current, next);
        current = next;
      }
      next = current.sibling;
    }
  }

  insert(value) {
    const heap = new BinomialHeap();
    heap.head = new BinomialHeapNode(value);
    this.union(heap);
  }

  findMin() {
    let current = this.head;
    let min = null;
    while (current) {
      if (!min || current.value < min.value) min = current;
      current = current.sibling;
    }
    return min ? min.value : null;
  }
}

module.exports = { BinomialHeap, BinomialHeapNode };
