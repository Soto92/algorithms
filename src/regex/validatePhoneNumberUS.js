/**
 * Validates a US phone number (e.g., 123-456-7890 or (123) 456-7890).
 * @param {string} phone
 * @returns {boolean}
 */
module.exports = function validatePhoneNumberUS(phone) {
  const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return regex.test(phone);
};
