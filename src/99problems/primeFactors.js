/**
P35 (**) Determine the prime factors of a given positive integer.
Construct a flat list containing the prime factors in ascending order.
Example:
?- prime_factors(315, L).
L = [3,3,5,7]
 */

function primeFactors(n) {
  const factors = [];
  let d = 2;
  let temp = n;
  while (temp > 1) {
    while (temp % d === 0) {
      factors.push(d);
      temp /= d;
    }
    d++;
    if (d * d > temp && temp > 1) {
      factors.push(temp);
      break;
    }
  }
  return factors;
}
