function heavyComputation(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += Math.sqrt(i) * Math.random();
  }
  return sum;
}

function warmup(func, iterations = 5) {
  console.log(`Executando warmup (${iterations} vezes)...`);
  const start = performance.now();
  for (let i = 0; i < iterations; i++) {
    func(1e5);
  }
  const end = performance.now();
  console.log(`Warmup concluído em ${(end - start).toFixed(2)}ms\n`);
}

function main() {
  // step 1: warmup
  warmup(heavyComputation, 10);

  // step 2: real performance
  console.time("execução real");
  const result = heavyComputation(1e7);
  console.timeEnd("execução real");
  console.log("Resultado:", result);
}

main();
