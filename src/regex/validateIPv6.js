/**
 * Validates an IPv6 address.
 * @param {string} ip
 * @returns {boolean}
 */
module.exports = function validateIPv6(ip) {
  const regex = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
  return regex.test(ip);
};
