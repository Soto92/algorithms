/**
 * P96 (**) Syntax checker
 * In a certain programming language, an identifier must begin with a letter,
 * and can be followed by any number of letters, digits, and hyphens.
 */

function isIdentifier(str) {
  return /^[a-zA-Z][a-zA-Z0-9-]*$/.test(str);
}

module.exports = { isIdentifier };
