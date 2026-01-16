/**
(*) Find the last element of a list.
Example:
?- my_last(X,[a,b,c,d]).
X = d
 */

function myLastV1(list) {
  return list[list.length - 1];
}

function myLastV2(list) {
  let last;
  for (let i = 0; i < list.length; i++) {
    last = list[i];
  }
  return last;
}
