/**
 * Validates a generic credit card number format (16 digits).
 * @param {string} card
 * @returns {boolean}
 */
module.exports = function validateCreditCard(card) {
  const regex = /^\d{4}[- ]?\d{4}[- ]?\d{4}[- ]?\d{4}$/;
  return regex.test(card);
};
