/**
 * Extracts all email addresses from a string.
 * @param {string} text
 * @returns {string[]|null}
 */
module.exports = function extractEmails(text) {
  const regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
  return text.match(regex);
};
