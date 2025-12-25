/**
 * Extracts all URLs from a string.
 * @param {string} text
 * @returns {string[]|null}
 */
module.exports = function extractURLs(text) {
  const regex =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
  return text.match(regex);
};
