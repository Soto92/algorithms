/**
 * Insertion sort builds a sorted prefix by inserting each new value into its correct place.
 * Time: O(n^2), O(n) when nearly sorted. Space: O(1). Stable.
 */
function insertionSort(array, compare = (a, b) => a - b) {
  const result = [...array];

  for (let i = 1; i < result.length; i++) {
    const current = result[i];
    let j = i - 1;

    while (j >= 0 && compare(result[j], current) > 0) {
      result[j + 1] = result[j];
      j--;
    }

    result[j + 1] = current;
  }

  return result;
}

module.exports = insertionSort;
