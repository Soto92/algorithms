/**
 * Converts kebab-case string to camelCase.
 * @param {string} str
 * @returns {string}
 */
module.exports = function kebabToCamel(str) {
  return str.replace(/-./g, (x) => x[1].toUpperCase());
};
