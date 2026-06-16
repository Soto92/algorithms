/**
 * Cocktail shaker sort is bidirectional bubble sort, moving large and small values each pass.
 * Time: O(n^2). Space: O(1). Stable.
 */
function cocktailShakerSort(array, compare = (a, b) => a - b) {
  const result = [...array];
  let start = 0;
  let end = result.length - 1;
  let swapped = true;

  while (swapped) {
    swapped = false;

    for (let i = start; i < end; i++) {
      if (compare(result[i], result[i + 1]) > 0) {
        [result[i], result[i + 1]] = [result[i + 1], result[i]];
        swapped = true;
      }
    }

    if (!swapped) break;
    swapped = false;
    end--;

    for (let i = end; i > start; i--) {
      if (compare(result[i - 1], result[i]) > 0) {
        [result[i - 1], result[i]] = [result[i], result[i - 1]];
        swapped = true;
      }
    }

    start++;
  }

  return result;
}

module.exports = cocktailShakerSort;
