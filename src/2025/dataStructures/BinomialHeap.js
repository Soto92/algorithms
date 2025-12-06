class BinomialHeapNode {
  constructor(key) {
    this.key = key;
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

  merge(heap1, heap2) {
    if (!heap1.head) return heap2;
    if (!heap2.head) return heap1;

    let newHead;
    let h1 = heap1.head;
    let h2 = heap2.head;

    if (h1.degree <= h2.degree) {
      newHead = h1;
      h1 = h1.sibling;
    } else {
      newHead = h2;
      h2 = h2.sibling;
    }

    let tail = newHead;
    while (h1 && h2) {
      if (h1.degree <= h2.degree) {
        tail.sibling = h1;
        h1 = h1.sibling;
      } else {
        tail.sibling = h2;
        h2 = h2.sibling;
      }
      tail = tail.sibling;
    }
    tail.sibling = h1 ? h1 : h2;
    const finalHeap = new BinomialHeap();
    finalHeap.head = newHead;
    return finalHeap;
  }

  link(y, z) {
    y.parent = z;
    y.sibling = z.child;
    z.child = y;
    z.degree++;
  }

  union(otherHeap) {
    const newHeap = this.merge(this, otherHeap);
    if (!newHeap.head) return newHeap;

    let prevX = null;
    let x = newHeap.head;
    let nextX = x.sibling;

    while (nextX) {
      if (
        x.degree !== nextX.degree ||
        (nextX.sibling && nextX.sibling.degree === x.degree)
      ) {
        prevX = x;
        x = nextX;
      } else if (x.key <= nextX.key) {
        x.sibling = nextX.sibling;
        this.link(nextX, x);
      } else {
        if (!prevX) newHeap.head = nextX;
        else prevX.sibling = nextX;
        this.link(x, nextX);
        x = nextX;
      }
      nextX = x.sibling;
    }
    this.head = newHeap.head;
  }
}
