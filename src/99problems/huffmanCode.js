/**
 * P50 (***) Huffman code.
 * We suppose a set of symbols with their frequencies, given as a list of
 * fr(S,F) terms. Example: [{symbol:'a', frequency:45}, ...].
 * Our objective is to construct a list hc(S,C) terms, where C is the
 * Huffman code word for the symbol S.
 *
 * Example:
 * huffman([
 *   { symbol: 'a', frequency: 45 }, { symbol: 'b', frequency: 13 },
 *   { symbol: 'c', frequency: 12 }, { symbol: 'd', frequency: 16 },
 *   { symbol: 'e', frequency: 9 }, { symbol: 'f', frequency: 5 }
 * ]);
 * // Output (one of multiple valid solutions):
 * // [ { symbol: 'a', code: '0' },
 * //   { symbol: 'b', code: '101' },
 * //   { symbol: 'c', code: '100' },
 * //   { symbol: 'd', code: '111' },
 * //   { symbol: 'e', code: '1101' },
 * //   { symbol: 'f', code: '1100' } ]
 */

// A simple Priority Queue implementation, similar to the one in src/queues.
class PriorityQueue {
  constructor() {
    this.elements = [];
  }
  enqueue(item, priority) {
    const queueElement = { item, priority };
    let added = false;
    for (let i = 0; i < this.elements.length; i++) {
      if (queueElement.priority < this.elements[i].priority) {
        this.elements.splice(i, 0, queueElement);
        added = true;
        break;
      }
    }
    if (!added) {
      this.elements.push(queueElement);
    }
  }
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.elements.shift().item;
  }
  size() {
    return this.elements.length;
  }
  isEmpty() {
    return this.elements.length === 0;
  }
}

class Node {
  constructor(symbol, frequency, left = null, right = null) {
    this.symbol = symbol;
    this.frequency = frequency;
    this.left = left;
    this.right = right;
  }
}

function generateCodes(node, prefix, codes) {
  if (!node) return;
  if (node.symbol) {
    codes[node.symbol] = prefix || '0'; // Handle tree with a single node
  } else {
    generateCodes(node.left, prefix + '0', codes);
    generateCodes(node.right, prefix + '1', codes);
  }
}

function huffman(frequencyTable) {
  if (!frequencyTable || frequencyTable.length === 0) {
    return [];
  }

  const pq = new PriorityQueue();
  frequencyTable.forEach(item => {
    const node = new Node(item.symbol, item.frequency);
    pq.enqueue(node, node.frequency);
  });

  while (pq.size() > 1) {
    const node1 = pq.dequeue();
    const node2 = pq.dequeue();
    const combinedFrequency = node1.frequency + node2.frequency;
    // Order of left/right doesn't matter for code length, but affects the code itself.
    // To have a more deterministic output, we can sort by frequency.
    const [left, right] = [node1, node2].sort((a, b) => a.frequency - b.frequency);
    const parent = new Node(null, combinedFrequency, left, right);
    pq.enqueue(parent, parent.frequency);
  }

  const root = pq.dequeue();
  const codes = {};
  generateCodes(root, '', codes);

  return Object.keys(codes)
    .map(symbol => ({
      symbol: symbol,
      code: codes[symbol],
    }))
    .sort((a, b) => a.symbol.localeCompare(b.symbol));
}

module.exports = { huffman };
