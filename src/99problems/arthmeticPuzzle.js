/**
 * P93 (***) An arithmetic puzzle
 * Given a list of integer numbers, find a correct equation by inserting
 * arithmetic signs (+, -, *, /) and parentheses.
 * E.g., [2, 3, 5, 7, 11] -> 2-3+5+7 = 11
 */

function arithmeticPuzzle(nums) {
  const operators = ["+", "-", "*", "/"];
  const results = [];

  function dfs(index, currentExpr, targetValue) {
    if (index === nums.length - 1) {
      try {
        const val = new Function(`return ${currentExpr}`)();
        if (Math.abs(val - nums[nums.length - 1]) < 0.0001) {
          results.push(`${currentExpr}=${nums[nums.length - 1]}`);
        }
      } catch (e) {}
      return;
    }

    const nextNum = nums[index];
    for (const op of operators) {
      dfs(index + 1, `${currentExpr}${op}${nextNum}`, targetValue);
    }
  }

  if (nums.length < 2) return [];

  dfs(1, `${nums[0]}`, nums[nums.length - 1]);
  return results;
}

module.exports = { arithmeticPuzzle };
