/**
 * Validates a hex color code (3 or 6 digits).
 * @param {string} color
 * @returns {boolean}
 */
module.exports = function validateHexColor(color) {
  const regex = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
  return regex.test(color);
};
