/**
(*) Reverse a list.
Example:
?- my_reverse(X,[a,b,c,d]).
X = [d,c,b,a]
 */

function myReverseV1(list) {
  return list.slice().reverse();
}

function myReverseV2(list) {
  const reversed = [];
  for (let i = list.length - 1; i >= 0; i--) {
    reversed.push(list[i]);
  }
  return reversed;
}
