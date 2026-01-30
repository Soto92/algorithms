/**
 * Validates a URL slug (lowercase, numbers, hyphens).
 * @param {string} slug
 * @returns {boolean}
 */
module.exports = function validateSlug(slug) {
  const regex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
  return regex.test(slug);
};
