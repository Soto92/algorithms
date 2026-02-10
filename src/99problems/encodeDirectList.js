/**
P13 (**) Run-length encoding of a list (direct solution).
Implement the so-called run-length encoding data compression method directly. I.e. don't explicitly create the sublists containing the duplicates, as in problem P09, but only count them. As in problem P11, simplify the result list by replacing the singleton terms [1,X] by X.

Example:
?- encode_direct([a,a,a,a,b,c,c,a,a,d,e,e,e,e],X).
X = [[4,a],b,[2,c],[2,a],d,[4,e]]
 */

function encodeDirectV1(list) {
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
