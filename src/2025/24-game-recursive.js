const EPSILON = 1e-6;

function judgePoint24AlternativeRecursive(cards) {
  const numbers = cards.map(Number);
  const operators = ["+", "-", "*", "/"];

  const performOperation = (a, b, op) => {
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return Math.abs(b) < EPSILON ? Infinity : a / b;
      default:
        return 0;
    }
  };

  const getPermutations = (arr) => {
    const result = [];
    if (arr.length === 0) return [[]];
    if (arr.length === 1) return [arr];

    for (let i = 0; i < arr.length; i++) {
      const currentNum = arr[i];
      const remainingNums = arr.slice(0, i).concat(arr.slice(i + 1));
      const permsOfRemaining = getPermutations(remainingNums);

      for (const perm of permsOfRemaining) {
        result.push([currentNum, ...perm]);
      }
    }
    return result;
  };

  const allNumberPermutations = getPermutations(numbers);

  for (const p of allNumberPermutations) {
    for (const op1 of operators) {
      for (const op2 of operators) {
        for (const op3 of operators) {
          let val1 = performOperation(p[0], p[1], op1);
          if (Math.abs(val1) === Infinity) continue;
          let val2 = performOperation(val1, p[2], op2);
          if (Math.abs(val2) === Infinity) continue;
          let finalVal = performOperation(val2, p[3], op3);
          if (Math.abs(finalVal - 24) < EPSILON) return true;

          val1 = performOperation(p[0], p[1], op1);
          if (Math.abs(val1) === Infinity) continue;
          val2 = performOperation(p[2], p[3], op3);
          if (Math.abs(val2) === Infinity) continue;
          finalVal = performOperation(val1, val2, op2);
          if (Math.abs(finalVal - 24) < EPSILON) return true;

          val1 = performOperation(p[2], p[3], op3);
          if (Math.abs(val1) === Infinity) continue;
          val2 = performOperation(p[1], val1, op2);
          if (Math.abs(val2) === Infinity) continue;
          finalVal = performOperation(p[0], val2, op1);
          if (Math.abs(finalVal - 24) < EPSILON) return true;

          val1 = performOperation(p[1], p[2], op2);
          if (Math.abs(val1) === Infinity) continue;
          val2 = performOperation(val1, p[3], op3);
          if (Math.abs(val2) === Infinity) continue;
          finalVal = performOperation(p[0], val2, op1);
          if (Math.abs(finalVal - 24) < EPSILON) return true;

          val1 = performOperation(p[1], p[2], op2);
          if (Math.abs(val1) === Infinity) continue;
          val2 = performOperation(p[0], val1, op1);
          if (Math.abs(val2) === Infinity) continue;
          finalVal = performOperation(val2, p[3], op3);
          if (Math.abs(finalVal - 24) < EPSILON) return true;
        }
      }
    }
  }

  return false;
}

console.log(
  "Can [4,1,8,7] make 24?",
  judgePoint24AlternativeRecursive([4, 1, 8, 7])
);
console.log(
  "Can [1,2,1,2] make 24?",
  judgePoint24AlternativeRecursive([1, 2, 1, 2])
);
console.log(
  "Can [1,1,1,1] make 24?",
  judgePoint24AlternativeRecursive([1, 1, 1, 1])
);
console.log(
  "Can [6,6,6,6] make 24?",
  judgePoint24AlternativeRecursive([6, 6, 6, 6])
);
