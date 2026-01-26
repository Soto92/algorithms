/**
(*) Find the K'th element of a list.
The first element in the list is number 1.
Example:
?- element_at(X,[a,b,c,d,e],3).
X = c
 */

function elementAtV1(list, k) {
  return list[k - 1];
}

function elementAtV2(list, k) {
  for (let i = 0; i < list.length; i++) {
    if (i === k - 1) {
      return list[i];
    }
  }
}
