/**
P40 (**) Goldbach's conjecture.
Goldbach's conjecture says that every positive even number greater than 2 is the sum of two prime numbers. Example: 28 = 5 + 23. It is one of the most famous facts in number theory that has not been proved to be correct in the general case. It has been numerically confirmed up to very large numbers (much larger than we can go with our Prolog system). Write a predicate to find the two prime numbers that sum up to a given even integer.
Example:
?- goldbach(28, L).
L = [5,23]
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

function goldbach(n) {
  if (n <= 2 || n % 2 !== 0) return null;
  for (let p = 2; p <= n / 2; p++) {
    if (isPrime(p) && isPrime(n - p)) {
      return [p, n - p];
    }
  }
  return null;
}
