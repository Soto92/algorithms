/**
 * Extracts all hashtags from a string.
 * @param {string} text
 * @returns {string[]|null}
 */
module.exports = function extractHashtags(text) {
  const regex = /#[\w]+/g;
  return text.match(regex);
};
