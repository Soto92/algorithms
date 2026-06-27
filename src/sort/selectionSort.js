/**
 * Selection sort repeatedly selects the smallest remaining value and moves it into place.
 * Time: O(n^2). Space: O(1). Not stable.
 */
function selectionSort(array, compare = (a, b) => a - b) {
  const result = [...array];

  for (let i = 0; i < result.length - 1; i++) {
    let selected = i;

    for (let j = i + 1; j < result.length; j++) {
      if (compare(result[j], result[selected]) < 0) selected = j;
    }

    if (selected !== i) [result[i], result[selected]] = [result[selected], result[i]];
  }

  return result;
}

module.exports = selectionSort;
