/**
 * Validates a MAC Address.
 * @param {string} mac
 * @returns {boolean}
 */
module.exports = function validateMACAddress(mac) {
  const regex = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
  return regex.test(mac);
};
