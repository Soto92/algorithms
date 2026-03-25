/**
 * P48 (**) Truth tables for logical expressions (3).
 * Generalize problem P47 in such a way that the logical expression may
 * contain any number of logical variables. Define table/2 in a way that
 * table(List,Expr) prints the truth table for the expression Expr, which
 * contains the logical variables enumerated in List.
 *
 * Example:
 * table(['A', 'B', 'C'], 'A and (B or C) equ A and B or A and C');
 * // Output should be a list of strings, each with 4 values (A, B, C, result)
 * // and the result should always be true.
 * // e.g., 'true true true true'
 */

function evalExpr(expr, vars = {}) {
  // Handle 'equ' separately to give it the lowest precedence.
  // This is a simple parser that assumes 'equ' is the main binary operator.
  const equParts = expr.split(/\s+equ\s+/);
  if (equParts.length === 2) {
    const left = evalExpr(equParts[0], vars);
    const right = evalExpr(equParts[1], vars);
    return left === right;
  }

  // For other operators, convert to JS syntax.
  // This relies on JS operator precedence for and/or/not.
  const jsExpr = expr
    .replace(/\band\b/g, '&&')
    .replace(/\bor\b/g, '||')
    .replace(/\bnot\b/g, '!');

  const varNames = Object.keys(vars);
  const varValues = Object.values(vars);
  const evaluator = new Function(...varNames, `return ${jsExpr};`);
  return evaluator(...varValues);
}

function generateCombinations(vars, acc = {}) {
  if (vars.length === 0) {
    return [acc];
  }
  const [currentVar, ...remainingVars] = vars;
  const withTrue = generateCombinations(remainingVars, { ...acc, [currentVar]: true });
  const withFalse = generateCombinations(remainingVars, { ...acc, [currentVar]: false });
  return [...withTrue, ...withFalse];
}

function table(varList, expressionString) {
  const results = [];
  const combinations = generateCombinations(varList.sort());

  for (const vars of combinations) {
    const result = evalExpr(expressionString, vars);
    const varValues = varList.map(v => vars[v]);
    results.push([...varValues, result].join(' '));
  }
  return results;
}

module.exports = {
  table,
  evalExpr,
};
