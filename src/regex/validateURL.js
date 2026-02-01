/**
 * Validates a URL (http/https).
 * @param {string} url
 * @returns {boolean}
 */
module.exports = function validateURL(url) {
  const regex =
    /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
  return regex.test(url);
};
