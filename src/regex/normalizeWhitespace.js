/**
 * Replaces multiple whitespace characters with a single space.
 * @param {string} text
 * @returns {string}
 */
module.exports = function normalizeWhitespace(text) {
  return text.replace(/\s+/g, " ").trim();
};
