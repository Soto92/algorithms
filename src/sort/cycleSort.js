/**
 * Cycle sort places each value directly into its final position, minimizing writes.
 * Time: O(n^2). Space: O(1). Not stable.
 */
function cycleSort(array, compare = (a, b) => a - b) {
  const result = [...array];

  for (let cycleStart = 0; cycleStart < result.length - 1; cycleStart++) {
    let item = result[cycleStart];
    let position = cycleStart;

    for (let i = cycleStart + 1; i < result.length; i++) {
      if (compare(result[i], item) < 0) position++;
    }

    if (position === cycleStart) continue;

    while (position < result.length && compare(item, result[position]) === 0) position++;
    [result[position], item] = [item, result[position]];

    while (position !== cycleStart) {
      position = cycleStart;

      for (let i = cycleStart + 1; i < result.length; i++) {
        if (compare(result[i], item) < 0) position++;
      }

      while (position < result.length && compare(item, result[position]) === 0) position++;
      [result[position], item] = [item, result[position]];
    }
  }

  return result;
}

module.exports = cycleSort;
