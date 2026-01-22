/**
 * Validates Latitude and Longitude (comma separated).
 * @param {string} coords
 * @returns {boolean}
 */
module.exports = function validateLatLong(coords) {
  const regex =
    /^([-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)),\s*([-+]?((1[0-7]\d|0?\d{1,2})(\.\d+)?|180(\.0+)?))$/;
  return regex.test(coords);
};
