/**
P10 (*) Run-length encoding of a list.
Use the result of problem P09 to implement the so-called run-length encoding data compression method. Consecutive duplicates of elements are encoded as terms [N,E] where N is the number of duplicates of the element E.

Example:
?- encode([a,a,a,a,b,c,c,a,a,d,e,e,e,e],X).
X = [[4,a],[1,b],[2,c],[2,a],[1,d][4,e]]
 */

function encodeV1(list) {
  if (list.length === 0) return [];
  const result = [];
  let count = 1;
  for (let i = 1; i < list.length; i++) {
    if (list[i] === list[i - 1]) {
      count++;
    } else {
      result.push([count, list[i - 1]]);
      count = 1;
    }
  }
  result.push([count, list[list.length - 1]]);
  return result;
}
