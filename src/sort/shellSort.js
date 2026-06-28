/**
 * Shell sort improves insertion sort by comparing values across shrinking gaps.
 * Average time depends on gaps, commonly near O(n^1.5). Space: O(1). Not stable.
 */
function shellSort(array, compare = (a, b) => a - b) {
  const result = [...array];

  for (let gap = Math.floor(result.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < result.length; i++) {
      const current = result[i];
      let j = i;

      while (j >= gap && compare(result[j - gap], current) > 0) {
        result[j] = result[j - gap];
        j -= gap;
      }

      result[j] = current;
    }
  }

  return result;
}

module.exports = shellSort;
