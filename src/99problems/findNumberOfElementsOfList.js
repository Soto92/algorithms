/**
(*) Find the number of elements of a list.
Example:
?- my_length(X,[a,b,c,d]).
X = 4
 */

function myLengthV1(list) {
  return list.length;
}

function myLengthV2(list) {
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    count++;
  }
  return count;
}
