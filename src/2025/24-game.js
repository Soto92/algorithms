const EPSILON = 1e-6;

function judgePoint24(cards) {
  let nums = cards.map(Number);

  function canReach24(currentNums) {
    if (currentNums.length === 0) {
      return false;
    }
    if (currentNums.length === 1) {
      return Math.abs(currentNums[0] - 24) < EPSILON;
    }
    for (let i = 0; i < currentNums.length; i++) {
      for (let j = i + 1; j < currentNums.length; j++) {
        let num1 = currentNums[i];
        let num2 = currentNums[j];

        let nextNums = [];
        for (let k = 0; k < currentNums.length; k++) {
          if (k !== i && k !== j) {
            nextNums.push(currentNums[k]);
          }
        }
        const operations = ["+", "-", "*", "/"];
        for (const op of operations) {
          let result;
          let newSet = [...nextNums];
          switch (op) {
            case "+":
              result = num1 + num2;
              break;
            case "-":
              result = num1 - num2;
              if (canReach24([...newSet, num2 - num1])) {
                return true;
              }
              break;
            case "*":
              result = num1 * num2;
              break;
            case "/":
              if (Math.abs(num2) < EPSILON) {
                continue;
              }
              result = num1 / num2;
              if (
                Math.abs(num1) >= EPSILON &&
                canReach24([...newSet, num2 / num1])
              ) {
                return true;
              }
              break;
          }
          newSet.push(result);
          if (canReach24(newSet)) {
            return true;
          }
        }
      }
    }
    return false;
  }
  return canReach24(nums);
}

console.log("Can [4,1,8,7] make 24?", judgePoint24([4, 1, 8, 7]));
console.log("Can [1,2,1,2] make 24?", judgePoint24([1, 2, 1, 2]));
console.log("Can [1,1,1,1] make 24?", judgePoint24([1, 1, 1, 1]));
console.log("Can [6,6,6,6] make 24?", judgePoint24([6, 6, 6, 6]));
