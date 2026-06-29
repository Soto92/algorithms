/**
 * Tim sort combines insertion sort on small runs with merge sort, similar to JavaScript engine sorting ideas.
 * Time: O(n log n). Space: O(n). Stable.
 */
function timSort(array, compare = (a, b) => a - b) {
  const result = [...array];
  const run = 32;

  function insertion(left, right) {
    for (let i = left + 1; i <= right; i++) {
      const current = result[i];
      let j = i - 1;

      while (j >= left && compare(result[j], current) > 0) {
        result[j + 1] = result[j];
        j--;
      }

      result[j + 1] = current;
    }
  }

  function merge(left, middle, right) {
    const first = result.slice(left, middle + 1);
    const second = result.slice(middle + 1, right + 1);
    let i = 0;
    let j = 0;
    let k = left;

    while (i < first.length && j < second.length) {
      if (compare(first[i], second[j]) <= 0) result[k++] = first[i++];
      else result[k++] = second[j++];
    }

    while (i < first.length) result[k++] = first[i++];
    while (j < second.length) result[k++] = second[j++];
  }

  for (let i = 0; i < result.length; i += run) insertion(i, Math.min(i + run - 1, result.length - 1));

  for (let size = run; size < result.length; size *= 2) {
    for (let left = 0; left < result.length; left += size * 2) {
      const middle = Math.min(left + size - 1, result.length - 1);
      const right = Math.min(left + size * 2 - 1, result.length - 1);
      if (middle < right) merge(left, middle, right);
    }
  }

  return result;
}

module.exports = timSort;
