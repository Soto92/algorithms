/**
 * Validates a strong password (min 8 chars, at least 1 letter and 1 number).
 * @param {string} password
 * @returns {boolean}
 */
module.exports = function validatePassword(password) {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return regex.test(password);
};
