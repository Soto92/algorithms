/**
 * P47 (*) Truth tables for logical expressions (2).
 * Continue problem P46 by defining and/2, or/2, etc as being operators.
 * This allows to write the logical expression in the more natural way,
 * as in the example: A and (A or not B).
 * Define operator precedence as usual; i.e. as in Java.
 *
 * Example:
 * const { table } = require('./truthTablesOperators');
 * table('A and (A or not B)');
 * // Output:
 * // [ 'true true true',
 * //   'true false true',
 * //   'false true false',
 * //   'false false false' ]
 */

function evalExpr(expr, vars = {}) {
  // A simple way to handle this in JS is to convert the expression
  // to a valid JS expression and use the Function constructor to evaluate it.
  // This approach respects JS operator precedence, which is what's requested.
  const jsExpr = expr
    .replace(/\band\b/g, '&&')
    .replace(/\bor\b/g, '||')
    .replace(/\bnot\b/g, '!');

  const varNames = Object.keys(vars);
  const varValues = Object.values(vars);
  const evaluator = new Function(...varNames, `return ${jsExpr};`);
  return evaluator(...varValues);
}

function table(expressionString) {
  const results = [];
  // For P47, we assume the variables are A and B as per the example.
  const booleanValues = [true, false];

  // The example is for 2 variables, A and B.
  for (const a of booleanValues) {
    for (const b of booleanValues) {
      const vars = { A: a, B: b };
      const result = evalExpr(expressionString, vars);
      results.push(`${a} ${b} ${result}`);
    }
  }
  return results;
}

module.exports = {
  table,
};
