
const isPrime = (num: number): boolean => {
  if (num === 2) {
    return true;
  }
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

const hasSumConsecutivePrime = (p: number): boolean => {
  const primes: number[] = [];
  let sum = 0

  for (let i = 2; i < p; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  let max = primes.length - 1
  let l = 0
  let r = 0

  while (sum < p && r < max && l <= r) {
    sum += primes[r]
    if (sum === p) {
      return true
    } else if (sum < p) {
      r++
    } else if (sum > p) {
      sum -= primes[l]
      sum -= primes[r]
      l++
    }
  }
  return false
}

const main = (n: number): void => {
  for (let i = n - 1; i > 1; i--) {
    if (isPrime(i)) {
      if (hasSumConsecutivePrime(i)) {
        console.log("The closest prime is:", i)
        break;
      }
    }
  }
}

main(20)
main(104)
