/**
 * Validates a US Social Security Number.
 * @param {string} ssn
 * @returns {boolean}
 */
module.exports = function validateSSN(ssn) {
  const regex = /^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/;
  return regex.test(ssn);
};
