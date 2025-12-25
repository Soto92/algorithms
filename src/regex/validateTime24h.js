/**
 * Validates time in HH:MM 24-hour format.
 * @param {string} time
 * @returns {boolean}
 */
module.exports = function validateTime24h(time) {
  const regex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
  return regex.test(time);
};
