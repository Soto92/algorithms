/**
 * Validates a US Zip Code (5 digits, optional 4 digit extension).
 * @param {string} zip
 * @returns {boolean}
 */
module.exports = function validateZipCodeUS(zip) {
  const regex = /^\d{5}(-\d{4})?$/;
  return regex.test(zip);
};
