/**
P11 (*) Modified run-length encoding.
Modify the result of problem P10 in such a way that if an element has no duplicates it is simply copied into the result list. Only elements with duplicates are transferred as [N,E] terms.

Example:
?- encode_modified([a,a,a,a,b,c,c,a,a,d,e,e,e,e],X).
X = [[4,a],b,[2,c],[2,a],d,[4,e]]
 */

function encodeModifiedV1(list) {
  if (list.length === 0) return [];
  const result = [];
  let count = 1;
  for (let i = 1; i < list.length; i++) {
    if (list[i] === list[i - 1]) {
      count++;
    } else {
      result.push(count === 1 ? list[i - 1] : [count, list[i - 1]]);
      count = 1;
    }
  }
  result.push(
    count === 1 ? list[list.length - 1] : [count, list[list.length - 1]],
  );
  return result;
}
