/**
 * Validates a Base64 string.
 * @param {string} str
 * @returns {boolean}
 */
module.exports = function validateBase64(str) {
  const regex =
    /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/;
  return regex.test(str);
};
