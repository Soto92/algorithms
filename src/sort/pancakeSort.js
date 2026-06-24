/**
 * Pancake sort repeatedly flips prefixes to move the largest remaining value into place.
 * Time: O(n^2). Space: O(1). Not stable.
 */
function pancakeSort(array, compare = (a, b) => a - b) {
  const result = [...array];

  function flip(end) {
    let start = 0;

    while (start < end) {
      [result[start], result[end]] = [result[end], result[start]];
      start++;
      end--;
    }
  }

  for (let size = result.length; size > 1; size--) {
    let maxIndex = 0;

    for (let i = 1; i < size; i++) {
      if (compare(result[i], result[maxIndex]) > 0) maxIndex = i;
    }

    if (maxIndex === size - 1) continue;
    flip(maxIndex);
    flip(size - 1);
  }

  return result;
}

module.exports = pancakeSort;
