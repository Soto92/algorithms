/**
 * Tree sort inserts values into a binary search tree, then reads them with in-order traversal.
 * Average time: O(n log n). Worst time: O(n^2). Space: O(n). Stable with duplicates.
 */
function treeSort(array, compare = (a, b) => a - b) {
  class Node {
    constructor(value) {
      this.value = value;
      this.count = 1;
      this.left = null;
      this.right = null;
    }
  }

  function insert(node, value) {
    if (!node) return new Node(value);
    const order = compare(value, node.value);
    if (order < 0) node.left = insert(node.left, value);
    else if (order > 0) node.right = insert(node.right, value);
    else node.count++;
    return node;
  }

  function traverse(node, result) {
    if (!node) return;
    traverse(node.left, result);
    for (let i = 0; i < node.count; i++) result.push(node.value);
    traverse(node.right, result);
  }

  let root = null;

  for (const value of array) root = insert(root, value);

  const result = [];
  traverse(root, result);
  return result;
}

module.exports = treeSort;
