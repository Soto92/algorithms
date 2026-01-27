/**
(*) Find the last but one element of a list.
Example:
?- last_but_one(X,[a,b,c,d]).
X = c
 */

function lastButOneV1(list) {
  return list[list.length - 2];
}

function lastButOneV2(list) {
  let prev;
  let curr;
  for (let i = 0; i < list.length; i++) {
    prev = curr;
    curr = list[i];
  }
  return prev;
}
