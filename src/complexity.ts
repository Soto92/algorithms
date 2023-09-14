// Constant Complexity (O(1)):
function returnFirstElement(array: number[]): number {
    return array[0];
}

// Linear Complexity (O(n)):
function find(array: number[], target: number): boolean {
    for (const element of array) {
        if (element === target) {
            return true;
        }
    }
    return false;
}

// Log Complexity (O(log n)) - Binary Search:
function BinSearch(array: number[], target: number): number {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        const middle = Math.floor((start + end) / 2);

        if (array[middle] === target) {
            return middle;
        } else if (array[middle] < target) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return -1;
}

// Quadratic Complexity (O(n^2)) - Bubble Sort:
function bubbleSort(array: number[]): number[] {
    const len = array.length;

    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

// Exponential Complexity (O(2^n)) - Fibonacci Recursive Inefficient:
function fibonacciRecursive(n: number): number {
    if (n <= 1) {
        return n;
    } else {
        return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
    }
}

// Fibonacci Recursive Efficient (O(n)) with Memorization:
function fibonacci(n: number, memo: number[] = []): number {
    if (n <= 1) {
        return n;
    }

    if (memo[n]) {
        return memo[n];
    }

    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);

    return memo[n];
}

// Fibonacci Iterative (O(n)):
function fibonacciIterative(n: number): number {
    if (n <= 1) {
        return n;
    }

    let a = 0;
    let b = 1;
    let temp: number;

    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}