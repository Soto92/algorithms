/**
 * Converts camelCase string to kebab-case.
 * @param {string} str
 * @returns {string}
 */
module.exports = function camelToKebab(str) {
  return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
};
