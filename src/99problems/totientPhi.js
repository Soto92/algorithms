/**
P34 (**) Calculate Euler's totient function phi(m).
Euler's so-called totient function phi(m) is defined as the number of positive integers r (1 <= r < m) that are coprime to m.
Example: m = 10: r = 1,3,7,9; thus phi(m) = 4. Note the special case: phi(1) = 1.

?- Phi is totient_phi(10).
Phi = 4
 */

function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function totientPhi(m) {
  if (m === 1) return 1;
  let count = 0;
  for (let r = 1; r < m; r++) {
    if (gcd(r, m) === 1) count++;
  }
  return count;
}
