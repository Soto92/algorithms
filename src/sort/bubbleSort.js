/**
 * Bubble sort repeatedly swaps adjacent values that are in the wrong order.
 * Time: O(n^2). Space: O(1). Stable.
 */
function bubbleSort(array, compare = (a, b) => a - b) {
  const result = [...array];
  let swapped = true;

  for (let end = result.length - 1; end > 0 && swapped; end--) {
    swapped = false;

    for (let i = 0; i < end; i++) {
      if (compare(result[i], result[i + 1]) > 0) {
        [result[i], result[i + 1]] = [result[i + 1], result[i]];
        swapped = true;
      }
    }
  }

  return result;
}

module.exports = bubbleSort;
