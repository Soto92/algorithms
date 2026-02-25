/**
P33 (*) Determine whether two positive integer numbers are coprime.
Two numbers are coprime if their greatest common divisor equals 1.
Example:
?- coprime(35, 64).
Yes
 */

function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function coprime(a, b) {
  return gcd(a, b) === 1;
}
