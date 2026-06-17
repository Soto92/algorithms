/**
 * Comb sort is a bubble sort variant that removes small values near the end by using shrinking gaps.
 * Average time: O(n^2 / 2^p). Space: O(1). Not stable.
 */
function combSort(array, compare = (a, b) => a - b) {
  const result = [...array];
  let gap = result.length;
  let swapped = true;

  while (gap > 1 || swapped) {
    gap = Math.max(1, Math.floor(gap / 1.3));
    swapped = false;

    for (let i = 0; i + gap < result.length; i++) {
      if (compare(result[i], result[i + gap]) > 0) {
        [result[i], result[i + gap]] = [result[i + gap], result[i]];
        swapped = true;
      }
    }
  }

  return result;
}

module.exports = combSort;
