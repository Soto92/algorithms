/**
 * Gnome sort walks forward when values are ordered and swaps backward when they are not.
 * Time: O(n^2). Space: O(1). Stable.
 */
function gnomeSort(array, compare = (a, b) => a - b) {
  const result = [...array];
  let i = 0;

  while (i < result.length) {
    if (i === 0 || compare(result[i - 1], result[i]) <= 0) i++;
    else {
      [result[i - 1], result[i]] = [result[i], result[i - 1]];
      i--;
    }
  }

  return result;
}

module.exports = gnomeSort;
