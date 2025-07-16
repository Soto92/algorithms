// BFS + Priority Queue (Min-Heap) implementation
class PriorityQueue<T> {
  private heap: { key: number; value: T }[] = [];

  enqueue(key: number, value: T): void {
    this.heap.push({ key, value });
    this.bubbleUp(this.heap.length - 1);
  }

  dequeue(): T | undefined {
    if (this.heap.length === 0) return undefined;
    const min = this.heap[0].value;
    const end = this.heap.pop();
    if (this.heap.length > 0 && end) {
      this.heap[0] = end;
      this.bubbleDown(0);
    }
    return min;
  }

  isEmpty(): boolean {
    return this.heap.length === 0;
  }

  private bubbleUp(index: number): void {
    const element = this.heap[index];
    while (index > 0) {
      const parentIdx = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIdx];
      if (element.key >= parent.key) break;
      this.heap[index] = parent;
      index = parentIdx;
    }
    this.heap[index] = element;
  }

  private bubbleDown(index: number): void {
    const length = this.heap.length;
    const element = this.heap[index];
    while (true) {
      let leftIdx = 2 * index + 1;
      let rightIdx = 2 * index + 2;
      let swap: number | null = null;

      if (leftIdx < length) {
        if (this.heap[leftIdx].key < element.key) swap = leftIdx;
      }
      if (rightIdx < length) {
        if (
          this.heap[rightIdx].key <
          (swap === null ? element.key : this.heap[leftIdx].key)
        ) {
          swap = rightIdx;
        }
      }
      if (swap === null) break;
      this.heap[index] = this.heap[swap];
      index = swap;
    }
    this.heap[index] = element;
  }
}

function calculateMinimumHP(dungeon: number[][]): number {
  const m = dungeon.length;
  const n = dungeon[0].length;
  const directions = [
    [1, 0],
    [0, 1],
  ];

  const visited = Array.from({ length: m }, () => Array(n).fill(Infinity));

  const pq = new PriorityQueue<[number, number, number]>(); // [healthRequired, x, y]
  const endVal = dungeon[m - 1][n - 1];
  pq.enqueue(Math.max(1, 1 - endVal), [Math.max(1, 1 - endVal), m - 1, n - 1]);
  visited[m - 1][n - 1] = Math.max(1, 1 - endVal);

  while (!pq.isEmpty()) {
    const [health, x, y] = pq.dequeue()!;

    for (const [dx, dy] of [
      [-1, 0],
      [0, -1],
    ]) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx >= 0 && ny >= 0) {
        const needed = Math.max(1, health - dungeon[nx][ny]);
        if (needed < visited[nx][ny]) {
          visited[nx][ny] = needed;
          pq.enqueue(needed, [needed, nx, ny]);
        }
      }
    }
  }

  return visited[0][0];
}

const dungeon1 = [
  [-2, -3, 3],
  [-5, -10, 1],
  [10, 30, -5],
];

console.log(calculateMinimumHP(dungeon1)); // 7
