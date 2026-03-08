/**
P39 (*) A list of prime numbers.
Given a range of integers by its lower and upper limit, construct a list of all prime numbers in that range.
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

function primeList(low, high) {
  const primes = [];
  for (let i = low; i <= high; i++) {
    if (isPrime(i)) primes.push(i);
  }
  return primes;
}
