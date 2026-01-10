/**
 * Removes HTML tags from a string.
 * @param {string} html
 * @returns {string}
 */
module.exports = function stripHTML(html) {
  return html.replace(/<[^>]*>?/gm, "");
};
