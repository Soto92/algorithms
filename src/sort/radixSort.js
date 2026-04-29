/**
 * Radix sort orders integers digit by digit using stable counting buckets.
 * Time: O(d(n + b)). Space: O(n + b). Stable for integers.
 */
function radixSort(array) {
  if (array.length === 0) return [];
  if (!array.every(Number.isInteger)) throw new TypeError("radixSort only supports integers");

  const negatives = array.filter((value) => value < 0).map(Math.abs);
  const positives = array.filter((value) => value >= 0);

  function sortNonNegative(values) {
    let result = [...values];
    const max = Math.max(0, ...result);

    for (let place = 1; Math.floor(max / place) > 0; place *= 10) {
      const buckets = Array.from({ length: 10 }, () => []);

      for (const value of result) {
        buckets[Math.floor(value / place) % 10].push(value);
      }

      result = buckets.flat();
    }

    return result;
  }

  return sortNonNegative(negatives).reverse().map((value) => -value).concat(sortNonNegative(positives));
}

module.exports = radixSort;
