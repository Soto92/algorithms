/**
 * Validates an ISBN-13 number.
 * @param {string} isbn
 * @returns {boolean}
 */
module.exports = function validateISBN13(isbn) {
  const regex = /^(97(8|9))?\d{9}(\d|X)$/;
  return regex.test(isbn);
};
