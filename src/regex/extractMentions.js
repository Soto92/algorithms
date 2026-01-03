/**
 * Extracts all user mentions (@user) from a string.
 * @param {string} text
 * @returns {string[]|null}
 */
module.exports = function extractMentions(text) {
  const regex = /@[\w]+/g;
  return text.match(regex);
};
