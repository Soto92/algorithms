/**
 * Pigeonhole sort places integer values into holes based on their value range.
 * Time: O(n + k). Space: O(k). Stable for integers.
 */
function pigeonholeSort(array) {
  if (array.length === 0) return [];

  const min = Math.min(...array);
  const max = Math.max(...array);
  const holes = Array.from({ length: max - min + 1 }, () => []);

  for (const value of array) {
    if (!Number.isInteger(value)) throw new TypeError("pigeonholeSort only supports integers");
    holes[value - min].push(value);
  }

  return holes.flat();
}

module.exports = pigeonholeSort;
