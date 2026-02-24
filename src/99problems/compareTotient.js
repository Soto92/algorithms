/**
P38 (*) Compare the two methods of calculating Euler's totient function.
Use the solutions of problems P34 and P37 to compare the algorithms. Take the number of logical inferences as a measure for efficiency. Try to calculate phi(10090) as an example.
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

function compareTotient(n) {
  const start1 = Date.now();
  const phi1 = totientPhi(n);
  const end1 = Date.now();

  const start2 = Date.now();
  const phi2 = totientPhiImproved(n);
  const end2 = Date.now();

  return {
    phi: phi1,
    basicTimeMs: end1 - start1,
    improvedTimeMs: end2 - start2,
    match: phi1 === phi2,
  };
}
