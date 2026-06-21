/**
 * Heap sort turns the array into a max heap, then repeatedly extracts the largest value.
 * Time: O(n log n). Space: O(1). Not stable.
 */
function heapSort(array, compare = (a, b) => a - b) {
  const result = [...array];

  function heapify(size, root) {
    let largest = root;
    const left = root * 2 + 1;
    const right = root * 2 + 2;

    if (left < size && compare(result[left], result[largest]) > 0) largest = left;
    if (right < size && compare(result[right], result[largest]) > 0) largest = right;

    if (largest !== root) {
      [result[root], result[largest]] = [result[largest], result[root]];
      heapify(size, largest);
    }
  }

  for (let i = Math.floor(result.length / 2) - 1; i >= 0; i--) heapify(result.length, i);

  for (let end = result.length - 1; end > 0; end--) {
    [result[0], result[end]] = [result[end], result[0]];
    heapify(end, 0);
  }

  return result;
}

module.exports = heapSort;
