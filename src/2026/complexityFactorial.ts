// Complexity n!, 5 has 120 permutations, too slow

function factorial(n: number): number {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

const num = 5;
const result = factorial(num);
console.log(result);