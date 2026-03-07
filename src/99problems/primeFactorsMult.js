/**
P36 (**) Determine the prime factors of a given positive integer (2).
Construct a list containing the prime factors and their multiplicity.
Example:
?- prime_factors_mult(315, L).
L = [[3,2],[5,1],[7,1]]
 */

function primeFactorsMult(n) {
  const result = [];
  let d = 2;
  let temp = n;

  while (temp > 1) {
    if (temp % d === 0) {
      let count = 0;
      while (temp % d === 0) {
        count++;
        temp /= d;
      }
      result.push([d, count]);
    }
    d++;
    if (d * d > temp && temp > 1) {
      result.push([temp, 1]);
      break;
    }
  }
  return result;
}
