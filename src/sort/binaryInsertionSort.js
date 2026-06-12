/**
 * Binary insertion sort uses binary search to find each insertion point before shifting values.
 * Time: O(n^2). Space: O(1). Stable.
 */
function binaryInsertionSort(array, compare = (a, b) => a - b) {
  const result = [...array];

  for (let i = 1; i < result.length; i++) {
    const current = result[i];
    let left = 0;
    let right = i;

    while (left < right) {
      const middle = Math.floor((left + right) / 2);
      if (compare(current, result[middle]) < 0) right = middle;
      else left = middle + 1;
    }

    for (let j = i; j > left; j--) result[j] = result[j - 1];
    result[left] = current;
  }

  return result;
}

module.exports = binaryInsertionSort;
