/**
 * Adds comma separators to numbers (e.g. 1000 -> 1,000).
 * @param {number|string} num
 * @returns {string}
 */
module.exports = function addThousandSeparators(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
