/**
P17 (*) Split a list into two parts; the length of the first part is given.
Do not use any predefined predicates.

Example:
?- split([a,b,c,d,e,f,g,h,i,k],3,L1,L2).
L1 = [a,b,c]
L2 = [d,e,f,g,h,i,k]
 */

function splitV1(list, n) {
  return [list.slice(0, n), list.slice(n)];
}

function splitV2(list, n) {
  const l1 = [];
  const l2 = [];
  for (let i = 0; i < list.length; i++) {
    (i < n ? l1 : l2).push(list[i]);
  }
  return [l1, l2];
}
