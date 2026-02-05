/**
P14 (*) Duplicate the elements of a list.
Example:
?- dupli([a,b,c,c,d],X).
X = [a,a,b,b,c,c,c,c,d,d]
 */

function dupliV1(list) {
  return list.flatMap((x) => [x, x]);
}

function dupliV2(list) {
  const result = [];
  for (const item of list) {
    result.push(item, item);
  }
  return result;
}
