/**
 * Counting sort counts integer frequencies, then rebuilds the sorted output.
 * Time: O(n + k). Space: O(k). Stable for integers.
 */
function countingSort(array) {
  if (array.length === 0) return [];

  const min = Math.min(...array);
  const max = Math.max(...array);
  const counts = Array(max - min + 1).fill(0);
  const result = Array(array.length);

  for (const value of array) {
    if (!Number.isInteger(value)) throw new TypeError("countingSort only supports integers");
    counts[value - min]++;
  }

  for (let i = 1; i < counts.length; i++) counts[i] += counts[i - 1];

  for (let i = array.length - 1; i >= 0; i--) {
    const value = array[i];
    const index = value - min;
    result[counts[index] - 1] = value;
    counts[index]--;
  }

  return result;
}

module.exports = countingSort;
