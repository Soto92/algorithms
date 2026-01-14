/**
 * Validates an email address.
 * @param {string} email
 * @returns {boolean}
 */
module.exports = function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};
