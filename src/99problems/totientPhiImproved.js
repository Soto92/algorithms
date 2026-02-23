/**
P37 (**) Calculate Euler's totient function phi(m) (improved).
See problem P34 for the definition of Euler's totient function. If the list of the prime factors of a number m is known in the form of problem P36 then the function phi(m) can be efficiently calculated as follows: Let [[p1,m1],[p2,m2],[p3,m3],...] be the list of prime factors (and their multiplicities) of a given number m. Then phi(m) can be calculated with the following formula:
phi(m) = (p1 - 1) * p1**(m1 - 1) * (p2 - 1) * p2**(m2 - 1) * (p3 - 1) * p3**(m3 - 1) * ...
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

function totientPhiImproved(m) {
  if (m === 1) return 1;
  const factors = primeFactorsMult(m);
  let phi = 1;
  for (const [p, m_exp] of factors) {
    phi *= (p - 1) * Math.pow(p, m_exp - 1);
  }
  return phi;
}
