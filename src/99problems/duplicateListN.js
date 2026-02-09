/**
P15 (**) Duplicate the elements of a list a given number of times.
Example:
?- dupli([a,b,c],3,X).
X = [a,a,a,b,b,b,c,c,c]
 */

function dupliNV1(list, n) {
  return list.flatMap((x) => Array(n).fill(x));
}

function dupliNV2(list, n) {
  const result = [];
  for (const item of list) {
    for (let i = 0; i < n; i++) {
      result.push(item);
    }
  }
  return result;
}
