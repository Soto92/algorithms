/**
 * Quick sort partitions values around a pivot, then recursively sorts both partitions.
 * Average time: O(n log n). Worst time: O(n^2). Space: O(log n). Not stable.
 */
function quickSort(array, compare = (a, b) => a - b) {
  const result = [...array];

  function partition(left, right) {
    const pivot = result[right];
    let boundary = left;

    for (let i = left; i < right; i++) {
      if (compare(result[i], pivot) <= 0) {
        [result[i], result[boundary]] = [result[boundary], result[i]];
        boundary++;
      }
    }

    [result[boundary], result[right]] = [result[right], result[boundary]];
    return boundary;
  }

  function sort(left, right) {
    if (left >= right) return;
    const pivotIndex = partition(left, right);
    sort(left, pivotIndex - 1);
    sort(pivotIndex + 1, right);
  }

  sort(0, result.length - 1);
  return result;
}

module.exports = quickSort;
