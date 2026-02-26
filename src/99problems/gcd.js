/**
P32 (**) Determine the greatest common divisor of two positive integer numbers.
Use Euclid's algorithm.
Example:
?- gcd(36, 63, G).
G = 9
 */

function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
