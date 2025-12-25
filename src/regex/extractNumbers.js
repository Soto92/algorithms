/**
 * Extracts all numbers from a string.
 * @param {string} text
 * @returns {string[]|null}
 */
module.exports = function extractNumbers(text) {
  const regex = /\d+/g;
  return text.match(regex);
};
