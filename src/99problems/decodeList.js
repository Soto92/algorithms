/**
P12 (**) Decode a run-length encoded list.
Given a run-length code list generated as specified in problem P11. Construct its uncompressed version.
 */

function decodeV1(list) {
  const result = [];
  for (const item of list) {
    if (
      Array.isArray(item) &&
      item.length === 2 &&
      typeof item[0] === "number"
    ) {
      const [count, val] = item;
      for (let i = 0; i < count; i++) {
        result.push(val);
      }
    } else {
      result.push(item);
    }
  }
  return result;
}
