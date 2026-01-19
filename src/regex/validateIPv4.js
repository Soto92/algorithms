/**
 * Validates an IPv4 address.
 * @param {string} ip
 * @returns {boolean}
 */
module.exports = function validateIPv4(ip) {
  const regex =
    /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  return regex.test(ip);
};
