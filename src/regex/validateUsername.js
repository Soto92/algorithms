/**
 * Validates a username (alphanumeric, underscores, 3-16 chars).
 * @param {string} username
 * @returns {boolean}
 */
module.exports = function validateUsername(username) {
  const regex = /^[a-zA-Z0-9_]{3,16}$/;
  return regex.test(username);
};
