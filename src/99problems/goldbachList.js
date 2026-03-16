/**
 * P41 (**) A list of Goldbach compositions.
 * Given a range of integers by its lower and upper limit, print a list of all even numbers and their Goldbach composition.
 * Example:
 * goldbachList(9, 20);
 * // Output:
 * // [ '10 = 3 + 7',
 * //   '12 = 5 + 7',
 * //   '14 = 3 + 11',
 * //   '16 = 3 + 13',
 * //   '18 = 5 + 13',
 * //   '20 = 3 + 17' ]
 *
 * In most cases, if an even number is written as the sum of two prime numbers, one of them is very small.
 * Very rarely, the primes are both bigger than say 50. Try to find out how many such cases there are in the range 2..3000.
 *
 * Example (for a print limit of 50):
 * goldbachList(1, 2000, 50);
 * // Output:
 * // [ '992 = 73 + 919',
 * //   '1382 = 61 + 1321',
 * //   '1856 = 67 + 1789',
 * //   '1928 = 61 + 1867' ]
 */

function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  const limit = Math.sqrt(n);
  for (let i = 3; i <= limit; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

function goldbach(n, minPrime = 2) {
  if (n <= 2 || n % 2 !== 0) {
    return null;
  }
  for (let p = minPrime; p <= n / 2; p++) {
    if (isPrime(p) && isPrime(n - p)) {
      return [p, n - p];
    }
  }
  return null;
}

function goldbachList(low, high, minPrime = 2) {
  const result = [];
  let start = low;
  if (start < 4) start = 4;
  if (start % 2 !== 0) start++;

  for (let i = start; i <= high; i += 2) {
    const composition = goldbach(i, minPrime);
    if (composition) {
      result.push(`${i} = ${composition[0]} + ${composition[1]}`);
    }
  }
  return result;
}
