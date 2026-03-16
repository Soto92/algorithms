/**
 * P49 (**) Gray code.
 * An n-bit Gray code is a sequence of n-bit strings constructed according
 * to certain rules.
 *
 * Example:
 * gray(1) // ['0', '1']
 * gray(2) // ['00', '01', '11', '10']
 * gray(3) // ['000', '001', '011', '010', '110', '111', '101', '100']
 *
 * Find out the construction rules and write a predicate gray/2.
 * Can you apply the method of "result caching" in order to make the predicate
 * more efficient, when it is to be used repeatedly?
 */

// A cache to store results of previous computations (memoization)
const cache = new Map();

/**
 * Generates the n-bit Gray code.
 * @param {number} n The number of bits.
 * @returns {string[]} The list of Gray code strings.
 */
function gray(n) {
  if (cache.has(n)) {
    return cache.get(n);
  }

  if (n < 0) {
    return [];
  }

  if (n === 0) {
    return [''];
  }

  // Recursively get the Gray code for n-1
  const prevGray = gray(n - 1);

  // Reflect the previous Gray code
  const reflectedPrevGray = [...prevGray].reverse();

  // Prefix '0' to the original and '1' to the reflected version
  const firstHalf = prevGray.map(code => '0' + code);
  const secondHalf = reflectedPrevGray.map(code => '1' + code);

  const result = [...firstHalf, ...secondHalf];
  cache.set(n, result);
  return result;
}

module.exports = { gray };
