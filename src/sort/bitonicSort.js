/**
 * Bitonic sort builds bitonic sequences and merges them; this version supports arrays whose length is a power of two.
 * Time: O(log^2 n). Space: O(n). Not stable.
 */
function bitonicSort(array, compare = (a, b) => a - b) {
  if (array.length > 0 && (array.length & (array.length - 1)) !== 0) {
    throw new RangeError("bitonicSort requires an array length that is a power of two");
  }

  const result = [...array];

  function shouldSwap(i, j, ascending) {
    const order = compare(result[i], result[j]);
    return ascending ? order > 0 : order < 0;
  }

  function compareAndSwap(i, j, ascending) {
    if (shouldSwap(i, j, ascending)) [result[i], result[j]] = [result[j], result[i]];
  }

  function merge(low, count, ascending) {
    if (count <= 1) return;
    const half = Math.floor(count / 2);

    for (let i = low; i < low + half; i++) compareAndSwap(i, i + half, ascending);

    merge(low, half, ascending);
    merge(low + half, half, ascending);
  }

  function sort(low, count, ascending) {
    if (count <= 1) return;
    const half = Math.floor(count / 2);
    sort(low, half, true);
    sort(low + half, half, false);
    merge(low, count, ascending);
  }

  sort(0, result.length, true);
  return result;
}

module.exports = bitonicSort;
