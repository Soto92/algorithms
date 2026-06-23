/**
 * Merge sort divides the array, sorts each half, and merges sorted halves back together.
 * Time: O(n log n). Space: O(n). Stable.
 */
function mergeSort(array, compare = (a, b) => a - b) {
  if (array.length <= 1) return [...array];

  const middle = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, middle), compare);
  const right = mergeSort(array.slice(middle), compare);
  const result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (compare(left[i], right[j]) <= 0) result.push(left[i++]);
    else result.push(right[j++]);
  }

  return result.concat(left.slice(i), right.slice(j));
}

module.exports = mergeSort;
