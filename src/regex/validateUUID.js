/**
 * Validates a UUID (Universally Unique Identifier).
 * @param {string} uuid
 * @returns {boolean}
 */
module.exports = function validateUUID(uuid) {
  const regex =
    /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
  return regex.test(uuid);
};
