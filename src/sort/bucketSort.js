/**
 * Bucket sort distributes numbers into value ranges, sorts each bucket, then joins them.
 * Average time: O(n + k). Worst time: O(n^2). Space: O(n + k).
 */
function bucketSort(array, bucketCount = Math.max(1, Math.floor(Math.sqrt(array.length)))) {
  if (array.length === 0) return [];

  const min = Math.min(...array);
  const max = Math.max(...array);
  const range = max - min || 1;
  const buckets = Array.from({ length: bucketCount }, () => []);

  for (const value of array) {
    if (typeof value !== "number" || Number.isNaN(value)) throw new TypeError("bucketSort only supports numbers");
    const index = Math.min(bucketCount - 1, Math.floor(((value - min) / range) * bucketCount));
    buckets[index].push(value);
  }

  return buckets.flatMap((bucket) => {
    for (let i = 1; i < bucket.length; i++) {
      const current = bucket[i];
      let j = i - 1;

      while (j >= 0 && bucket[j] > current) {
        bucket[j + 1] = bucket[j];
        j--;
      }

      bucket[j + 1] = current;
    }

    return bucket;
  });
}

module.exports = bucketSort;
