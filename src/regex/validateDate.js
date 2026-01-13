/**
 * Validates a date in YYYY-MM-DD format.
 * @param {string} date
 * @returns {boolean}
 */
module.exports = function validateDate(date) {
  const regex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
  return regex.test(date);
};
