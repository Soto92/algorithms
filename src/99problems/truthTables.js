/**
 * P46 (**) Truth tables for logical expressions.
 * Define predicates and/2, or/2, nand/2, nor/2, xor/2, impl/2 and equ/2
 * (for logical equivalence) which succeed or fail according to the result of
 * their respective operations; e.g. and(A,B) will succeed, if and only if
 * both A and B succeed. Note that A and B can be Prolog goals (not only
 * the constants true and fail).
 *
 * A logical expression in two variables can then be written in prefix
 * notation, as in the following example: and(or(A,B),nand(A,B)).
 *
 * Now, write a predicate table/3 which prints the truth table of a given
 * logical expression in two variables.
 *
 * Example:
 * const { and, or, table } = require('./truthTables');
 * const expr = (a, b) => and(a, or(a, b));
 * table(expr);
 * // Output:
 * // [ 'true true true',
 * //   'true false true',
 * //   'false true false',
 * //   'false false false' ]
 */

const and = (a, b) => a && b;
const or = (a, b) => a || b;
const nand = (a, b) => !(a && b);
const nor = (a, b) => !(a || b);
const xor = (a, b) => a !== b;
const impl = (a, b) => !a || b;
const equ = (a, b) => a === b;

function table(expression) {
  const results = [];
  const booleanValues = [true, false];

  for (const a of booleanValues) {
    for (const b of booleanValues) {
      const result = expression(a, b);
      results.push(`${a} ${b} ${result}`);
    }
  }
  return results;
}

module.exports = {
  and,
  or,
  nand,
  nor,
  xor,
  impl,
  equ,
  table,
};
