/**
P09 (**) Pack consecutive duplicates of list elements into sublists.
If a list contains repeated elements they should be placed in separate sublists.

Example:
?- pack([a,a,a,a,b,c,c,a,a,d,e,e,e,e],X).
X = [[a,a,a,a],[b],[c,c],[a,a],[d],[e,e,e,e]]
 */

function packV1(list) {
  if (list.length === 0) return [];
  const result = [];
  let currentSublist = [list[0]];
  for (let i = 1; i < list.length; i++) {
    if (list[i] === list[i - 1]) {
      currentSublist.push(list[i]);
    } else {
      result.push(currentSublist);
      currentSublist = [list[i]];
    }
  }
  result.push(currentSublist);
  return result;
}
